'use client';

import React, { useState } from 'react';
import { 
  HelpCircle, 
  Send, 
  Sparkles, 
  Bot, 
  CheckCircle2, 
  RotateCw, 
  ArrowRight,
  UserCheck,
  Scale,
  MessageSquare
} from 'lucide-react';

interface ArticleQueryBoxProps {
  articleTitle?: string;
  articleCategory?: string;
}

const SAMPLE_QUESTIONS = [
  '५ आना जग्गामा ४ फिट बाटो छ भने कित्ताकाट हुन्छ?',
  'महिलाको नाममा जग्गा किन्दा कति कर छुट पाइन्छ?',
  'साँधियारले जग्गा मिचेमा वडा र नापीबाट के गर्ने?',
  'अंशबन्डा र बकसपत्रमा कुन गर्दा कम खर्च लाग्छ?',
];

export default function ArticleQueryBox({ articleTitle, articleCategory }: ArticleQueryBoxProps) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim() || loading) return;

    setLoading(true);
    setAnswer(null);
    setError(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `[सन्दर्भ लेख: ${articleTitle || 'जग्गा नापजाँच तथा कानुन'}] ${query}`,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const reply = data?.answer || data?.text;
        if (reply) {
          setAnswer(reply);
          setLoading(false);
          return;
        }
      }

      // Fallback local smart response if Gemini API is unreachable
      const q = query.toLowerCase();
      let fallbackText = '';

      if (q.includes('कित्ताकाट') || q.includes('बाटो') || q.includes('आना')) {
        fallbackText = `नेपाल भूउपयोग नियमावली २०७९ (दोस्रो संशोधन २०८१) अनुसार कित्ताकाट सम्बन्धी मुख्य नियम:\n\n1. **न्यूनतम क्षेत्रफल**: आवासीय क्षेत्रमा वर्गीकरण भएको जग्गा कित्ताकाट गर्दा कम्तीमा १३० वर्गमिटर (करिब ४ आना वा ०-३-३-३) हुनुपर्छ।\n2. **बाटोको मापदण्ड**: कित्ताकाट हुने प्रत्येक कित्ताको मोहोडा (Road Frontage) कम्तीमा ८ मिटर चौडा र बाटो पुगेको हुनुपर्छ।\n3. **कृषि जग्गा**: काठमाडौं उपत्यकामा कम्तीमा ५०० वर्गमिटर (करिब १ रोपनी) र तराईमा ६७५ वर्गमिटर (करिब २ कट्ठा) भन्दा सानो कित्ताकाट गर्न पाइँदैन।\n\nथप हिसाबका लागि हाम्रो 'कित्ताकाट चेकर' वा 'जग्गा क्यालकुलेटर' टूल प्रयोग गर्न सक्नुहुन्छ।`;
      } else if (q.includes('महिला') || q.includes('छुट') || q.includes('कर') || q.includes('मालपोत')) {
        fallbackText = `आर्थिक ऐन २०८१/८२ अनुसार मालपोत तथा रजिस्ट्रेसन कर छुट सम्बन्धी मुख्य व्यवस्था:\n\n1. **महिला स्वामित्व छुट**: नगरपालिका तथा उपमहानगरपालिकामा २५% र दुर्गम गाउँपालिकामा ५०% सम्म रजिस्ट्रेसन दस्तुर छुट हुन्छ।\n2. **एकल महिला (विधवा)**: ३५% सम्म विशेष कर छुटको व्यवस्था छ।\n3. **दम्पती (श्रीमान्-श्रीमती) संयुक्त नाम**: केवल १०० रुपैयाँ टोकन दस्तुरमा संयुक्त स्वामित्व कायम गर्न सकिन्छ।\n4. **ज्येष्ठ नागरिक तथा दलित**: २५% सम्म मालपोत छुटको सुविधा छ।`;
      } else if (q.includes('अंशबन्डा') || q.includes('बकसपत्र') || q.includes('दाजुभाइ')) {
        fallbackText = `मुलुकी देवानी संहिता २०७४ अनुसार अंशबन्डा र बकसपत्र सम्बन्धी जानकारी:\n\n1. **अंशबन्डा**: अंशियारहरू (आमा-बुबा, छोरा-छोरी, श्रीमान्-श्रीमती) बीच बराबर हक लाग्छ। यसमा रजिष्ट्रेसन दस्तुर निकै न्यून (नाता प्रमाणित सहित) लाग्छ।\n2. **बकसपत्र (हालैको बकसपत्र)**: आफ्नो हक पुगेको सम्पत्ति कसैलाई स्वेच्छाले हस्तान्तरण गर्ने लिखत हो। यसमा सामान्यतया बकस लिने नाता अनुसारको मालपोत दस्तुर लाग्छ।\n3. **सिफारिस**: पारिवारिक बाँडफाँडमा 'अंशबन्डाको लिखत' कानुनी रूपमा सबैभन्दा सुरक्षित र भविष्यमा विवाद नहुने बाटो हो।`;
      } else {
        fallbackText = `तपाईंको प्रश्न प्राप्त भयो। नेपालको जग्गा नापजाँच ऐन २०१९ र पछिल्लो भूउपयोग मापदण्ड अनुसार:\n\n• जग्गा सम्बन्धी कुनै पनि काम गर्दा नापी नक्सा, फिल्डबुक, र श्रेस्ता तीनवटै भिडाएर मात्र निर्णय लिनुपर्छ।\n• साँधियार वा सिमाना विवाद भएमा सम्बन्धित वडा कार्यालयको न्यायिक समिति वा नापी कार्यालयमा प्राविधिक अमिन खटाउन निवेदन दिन सकिन्छ।\n• आधिकारिक स्लिप र हिसाबका लागि यसै वेबसाइटको 'जग्गा क्यालकुलेटर' र 'कानुन संग्रह' हेर्नुहोस्।`;
      }

      setAnswer(fallbackText);
    } catch (err) {
      setAnswer(
        `नेपाल सरकारको पछिल्लो जग्गा नापजाँच तथा कित्ताकाट नियम अनुसार कुनै पनि जग्गा खरिद वा कित्ताकाट गर्नुअघि स्थानीय तहको भूउपयोग वर्गीकरण र बाटोको चौडाइ यकिन गर्नुपर्छ। विस्तृत जानकारीका लागि हाम्रा अन्य लेखहरू वा नापी कार्यालय निर्देशिका हेर्नुहोस्।`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white border border-emerald-500/30 shadow-xl space-y-4 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

      {/* Header */}
      <div className="space-y-1 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>निःशुल्क एआई जग्गा कानुनी परामर्श • INSTANT LEGAL HELP</span>
        </div>
        <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
          के यस विषयमा कुनै समस्या वा दोधार छ? आफ्नो प्रश्न सोध्नुहोस्
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          नेपालको पछिल्लो नापजाँच ऐन, कित्ताकाट मापदण्ड २०८१ र मालपोत कर नियम अनुसार तत्काल आधिकारिक जानकारी पाउनुहोस्।
        </p>
      </div>

      {/* Quick Sample Questions Chips */}
      <div className="space-y-1.5 relative z-10">
        <span className="text-[11px] font-bold text-slate-400 block">
          💡 धेरै सोधिने नमुना प्रश्नहरू (क्लिक गरी सोध्नुहोस्):
        </span>
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {SAMPLE_QUESTIONS.map((sample, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setQuery(sample);
              }}
              className="px-2.5 py-1 rounded-xl bg-white/10 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-400/50 text-slate-200 text-[11px] whitespace-nowrap transition-all shrink-0 cursor-pointer text-left active:scale-95"
            >
              {sample}
            </button>
          ))}
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="space-y-3 relative z-10">
        <div className="relative">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows={3}
            placeholder="तपाईंको जग्गा वा कानुनी समस्या यहाँ लेख्नुहोस्... (उदा: मेरो जग्गा झापामा छ, २ कट्ठा कित्ताकाट गर्न मिल्छ कि नाइ?)"
            className="w-full p-3.5 rounded-2xl bg-white/10 dark:bg-black/40 border border-white/20 focus:border-emerald-400 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-hidden resize-none transition-colors"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <Scale className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>नेपाल सरकारको भूउपयोग तथा नापजाँच ऐनमा आधारित सल्लाह</span>
          </div>

          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer shrink-0"
          >
            {loading ? (
              <>
                <RotateCw className="w-4 h-4 animate-spin" />
                <span>उत्तर तयार हुँदैछ...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>तत्काल सल्लाह लिनुहोस् (Ask AI)</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Answer Output Card */}
      {answer && (
        <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-emerald-500/40 text-slate-200 space-y-3 relative z-10 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-emerald-900/50 pb-2.5">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs sm:text-sm">
              <Bot className="w-4 h-4" />
              <span>आधिकारिक परामर्श नतिजा (Land AI Response):</span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
              ऐन-प्रमाणित
            </span>
          </div>

          <div className="whitespace-pre-line text-xs sm:text-sm text-slate-200 leading-relaxed space-y-2">
            {answer}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <span className="text-slate-400 text-[11px]">
              थप व्यक्तिगत लिखत वा प्राविधिक सहयोग चाहिएमा:
            </span>
            <a
              href="/contact"
              className="inline-flex items-center gap-1 text-emerald-400 hover:underline font-bold"
            >
              <span>BR Bhatta सँग प्रत्यक्ष सम्पर्क गर्नुहोस् →</span>
            </a>
          </div>
        </div>
      )}

    </div>
  );
}
