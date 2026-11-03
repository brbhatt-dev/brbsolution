'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FileStack, 
  FileText, 
  CheckCircle2, 
  Circle, 
  Copy, 
  Check, 
  Printer, 
  RotateCcw, 
  AlertTriangle, 
  Building2, 
  ShieldCheck, 
  ChevronRight,
  Info,
  Scale,
  Newspaper
} from 'lucide-react';
import { copyToClipboard } from '@/lib/clipboard';

type IssueReason = 'lost_stolen' | 'damaged_torn' | 'handwritten_to_digital';
type TemplateKey = 'police_app' | 'ward_app' | 'newspaper_notice' | 'malpot_app';

export default function LalpurjaPratilipiGuide() {
  const [issueReason, setIssueReason] = useState<IssueReason>('lost_stolen');
  const [activeTemplate, setActiveTemplate] = useState<TemplateKey>('newspaper_notice');
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<boolean>(false);

  const steps = [
    {
      id: 'step_police',
      stepNo: 1,
      title: 'प्रहरी कार्यालयमा निवेदन र प्रतिवेदन',
      desc: 'नजिकको प्रहरी चौकी/प्रभागमा लालपुर्जा हराएको स्थान, मिति र कित्ता विवरण सहित निवेदन दिई प्रहरी सिफारिस प्रतिवेदन लिनुहोस्। (च्यातिएको पुर्जा भए यो आवश्यक पर्दैन)',
      place: 'स्थानीय प्रहरी चौकी',
    },
    {
      id: 'step_ward',
      stepNo: 2,
      title: 'वडा कार्यालयबाट सिफारिस र कर चुक्ता',
      desc: 'जग्गा रहेको वडा कार्यालयमा चालु आ.व. को सम्पत्ति कर चुक्ता गरी प्रतिलिपि पुर्जा सिफारिस पत्र र आवश्यक परे सर्जमिन मुचुल्का लिनुहोस्।',
      place: 'सम्बन्धित वडा कार्यालय',
    },
    {
      id: 'step_malpot_search',
      stepNo: 3,
      title: 'मालपोतमा निवेदन र मोठ श्रेस्ता रुजु',
      desc: 'मालपोत कार्यालयमा निवेदन दर्ता गरी मोठ फाँटबाट पुरानो ढड्डा तथा कम्प्युटर श्रेस्ता (DLIS) भिडाएर जग्गा आफ्नो नाममा यथावत रहेको यकिन गर्नुहोस्।',
      place: 'मालपोत मोठ फाँट',
    },
    {
      id: 'step_newspaper',
      stepNo: 4,
      title: 'दैनिक पत्रिकामा १५ दिने सार्वजनिक सूचना',
      desc: 'मालपोतको स्वीकृति लिई राष्ट्रिय वा स्थानीय दैनिक पत्रिकामा १५ दिने हकदाबी सार्वजनिक सूचना प्रकाशन गर्नुहोस् र पत्रिकाको सक्कल प्रति मालपोतमा पेश गर्नुहोस्।',
      place: 'दैनिक समाचार पत्र',
    },
    {
      id: 'step_issuance',
      stepNo: 5,
      title: 'नयाँ लालपुर्जा (प्रतिलिपि) प्राप्ति',
      desc: '१५ दिनसम्म कसैको दाबी विरोध वा उजुरी नपरेमा मालपोत अधिकृतको निर्णय अनुसार नयाँ कम्प्युटर लालपुर्जा (प्रतिलिपि छाप सहित) बुझ्नुहोस्।',
      place: 'मालपोत कार्यालय',
    },
  ];

  const completedCount = steps.filter((s) => checkedSteps[s.id]).length;
  const progressPercent = Math.round((completedCount / steps.length) * 100);

  const toggleStep = (id: string) => {
    setCheckedSteps((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const templates: Record<TemplateKey, { title: string; subtitle: string; content: string }> = {
    newspaper_notice: {
      title: 'दैनिक पत्रिकामा छपाउने १५ दिने सार्वजनिक सूचनाको ढाँचा',
      subtitle: 'हकदाबी सम्बन्धी सार्वजनिक सूचना (National Daily Newspaper Format)',
      content: `भूमिसुधार तथा मालपोत कार्यालय, ........................
जग्गाधनी प्रमाणपुर्जाको प्रतिलिपि पाउँ भन्ने सम्बन्धमा
१५ (पन्ध्र) दिने सार्वजनिक सूचना

सूचना प्रकाशित मिति: २०...../...../.....

यस कार्यालय अन्तर्गत तपसिलमा उल्लिखित जग्गाको सक्कल जग्गाधनी प्रमाणपुर्जा (लालपुर्जा) हराएको/च्यातिएको हुँदा प्रतिलिपि पाउँ भनी जग्गाधनी श्री ........................................ ले यस कार्यालयमा रीतपूर्वक निवेदन दिनुभएको छ।

अतः उक्त जग्गाको जग्गाधनी प्रमाणपुर्जाको प्रतिलिपि जारी गर्दा कसैको हकदाबी, लेनदेन, रोक्का वा कुनै किसिमको उजुरबाजुर भए यो सूचना राष्ट्रिय दैनिक पत्रिकामा प्रकाशित भएको मितिले १५ (पन्ध्र) दिनभित्र सबुत प्रमाण सहित यस कार्यालयमा लिखित दाबी पेश गर्नुहोला। म्यादभित्र कसैको दाबी-विरोध नपरेमा कानुन बमोजिम निवेदकलाई जग्गाधनी प्रमाणपुर्जाको प्रतिलिपि जारी गरिने व्यहोरा सम्बन्धित सबैको जानकारीका लागि यो सूचना प्रकाशित गरिएको छ।

तपसिल (जग्गाको विवरण):
१. जग्गाधनीको नाम, थर: ................................................................
२. बाबु/पतिको नाम: ........................................................................
३. जिल्ला: ....................  पालिका: ........................  वडा नं.: ......
४. कित्ता नं.: ................  क्षेत्रफल: ....................
५. सिट नं.: ..................`,
    },
    police_app: {
      title: 'प्रहरी चौकीमा दिने लालपुर्जा हराएको निवेदन ढाँचा',
      subtitle: 'हराएको जानकारी तथा प्रहरी मुचुल्का सिफारिस पाउँ',
      content: `श्रीमान् कार्यालय प्रमुखज्यू,
प्रहरी चौकी / वृत्त,
........................, ........................।

विषय: जग्गाधनी प्रमाणपुर्जा हराएकोले खोजतलास तथा सिफारिस गरी पाऊँ।

महोदय,
उपरोक्त विषयमा मेरो/हाम्रो नाममा दर्ता कायम रहेको तपसिल बमोजिमको जग्गाको सक्कल जग्गाधनी प्रमाणपुर्जा (लालपुर्जा) मिति २०...../...../..... गते ........................................ ठाउँबाट कहिँकतै हराएको/चोरी भएको हुँदा फेला पार्न सकिएन।

अतः उक्त लालपुर्जा खोजतलास गरिदिनुहुन तथा मालपोत कार्यालयबाट प्रतिलिपि पुर्जा लिनका लागि आवश्यक पर्ने प्रहरी सिफारिस प्रतिवेदन उपलब्ध गराई पाउन सादर अनुरोध गर्दछु।

तपसिल:
१. जग्गाधनीको नाम: ................................................................
२. नागरिकता नं.: ....................  जिल्ला: ....................
३. जग्गाको ठेगाना: .................... जिल्ला, वडा नं.: ......
४. कित्ता नं.: ................  क्षेत्रफल: ....................

निवेदक:
दस्तखत: ................................
नाम: ....................................
सम्पर्क फोन: ........................
मिति: २०...../...../.....`,
    },
    ward_app: {
      title: 'वडा कार्यालयमा प्रतिलिपि सिफारिस पाउँ भन्ने निवेदन',
      subtitle: 'स्थानीय वडा कार्यालयको सिफारिस पत्रका लागि',
      content: `श्रीमान् वडा अध्यक्षज्यू,
........................ गाउँपालिका / नगरपालिका,
वडा नं. ...... को कार्यालय, ........................।

विषय: लालपुर्जाको प्रतिलिपि पाउन सिफारिस गरी पाऊँ।

महोदय,
उपरोक्त विषयमा यस वडा नं. ...... मा अवस्थित मेरो नामको कित्ता नं. ............ क्षेत्रफल .................... जग्गाको सक्कल लालपुर्जा हराएको/च्यातिएको हुँदा भूमिसुधार तथा मालपोत कार्यालयबाट नयाँ प्रतिलिपि लालपुर्जा प्राप्त गर्नका लागि यस वडा कार्यालयको सिफारिस पत्र उपलब्ध गराई पाउन चालु आर्थिक वर्षको सम्पत्ति कर चुक्ता रसिद तथा प्रहरी प्रतिवेदन संलग्न राखी निवेदन पेश गरेको छु।

निवेदक:
दस्तखत: ................................
नाम: ....................................
ठेगाना: ................................
मिति: २०...../...../.....`,
    },
    malpot_app: {
      title: 'मालपोत कार्यालयमा लालपुर्जा प्रतिलिपि पाउँ भन्ने निवेदन',
      subtitle: 'भूमिसुधार तथा मालपोत कार्यालयमा दर्ता गरिने आधिकारिक निवेदन',
      content: `श्रीमान् प्रमुख मालपोत अधिकृतज्यू,
भूमिसुधार तथा मालपोत कार्यालय,
........................, ........................।

विषय: जग्गाधनी प्रमाणपुर्जाको प्रतिलिपि पाऊँ।

महोदय,
उपरोक्त विषयमा मेरो नाममा दर्ता कायम रहेको तपसिल बमोजिमको जग्गाको सक्कल जग्गाधनी प्रमाणपुर्जा (लालपुर्जा) मिति २०...../...../..... मा ........................................ कारणले हराएको/च्यातिएको हुँदा सोको प्रतिलिपि पाउन आवश्यक प्रमाण कागजातहरू संलग्न राखी यो निवेदन पेश गरेको छु।

यसमा उल्लिखित जग्गा कसैलाई बिक्री गरेको वा कुनै बैंक/सहकारीमा रोक्का रहेको छैन। झुठ्ठा ठहरे कानुन बमोजिम सहुँला बुझाउँला।

तपसिल:
जिल्ला: ....................  पालिका: ........................  वडा नं.: ......
कित्ता नं.: ................  क्षेत्रफल: ....................

संलग्न कागजातहरू:
१. नागरिकता प्रमाणपत्रको प्रमाणित प्रतिलिपि
२. स्थानीय प्रहरी कार्यालयको प्रतिवेदन
३. सम्बन्धित वडा कार्यालयको सिफारिस पत्र
४. चालु आ.व. सम्मको सम्पत्ति कर चुक्ता रसिद
५. राष्ट्रिय दैनिक पत्रिकामा प्रकाशित १५ दिने सूचनाको सक्कल कपी

निवेदक:
दस्तखत: ................................
नाम: ....................................
मिति: २०...../...../.....`,
    },
  };

  const handleCopy = async () => {
    const text = templates[activeTemplate].content;
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Intro Configuration Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 mb-3">
          <ShieldCheck className="w-3.5 h-3.5" /> मालपोत ऐन २०३४ तथा नियमावली अनुसार
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          लालपुर्जा हराएमा वा च्यातिएमा प्रतिलिपि लिने सम्पूर्ण प्रक्रिया तथा ढाँचा
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
          जग्गाको सक्कल लालपुर्जा हराएमा, चोरी भएमा वा पुरानो भएर च्यातिएमा मालपोत कार्यालयबाट नयाँ कम्प्युटर लालपुर्जा (प्रतिलिपि) बनाउने ५ अनिवार्य चरणहरू, पत्रिकामा छपाउने सूचनाको ढाँचा र सबै निवेदनहरू।
        </p>

        {/* Issue Reason Selector */}
        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
            लालपुर्जा प्रतिलिपि लिनुपर्ने कारण छान्नुहोस्:
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setIssueReason('lost_stolen')}
              className={`p-4 rounded-xl border text-left transition-all ${
                issueReason === 'lost_stolen'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              <p className="font-bold text-sm text-slate-900 dark:text-white">
                🔍 १. पुर्जा हराएको वा चोरी भएको
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                प्रहरी प्रतिवेदन, वडा सिफारिस र दैनिक पत्रिकामा १५ दिने सूचना अनिवार्य चाहिन्छ।
              </p>
            </button>

            <button
              type="button"
              onClick={() => setIssueReason('damaged_torn')}
              className={`p-4 rounded-xl border text-left transition-all ${
                issueReason === 'damaged_torn'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              <p className="font-bold text-sm text-slate-900 dark:text-white">
                📄 २. च्यातिएको वा अक्षर नबुझिने भएको
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                च्यातिएको सक्कल पुर्जा मालपोतमा बुझाएपछि प्रहरी प्रतिवेदन विना नै सजिलै प्रतिलिपि बन्छ।
              </p>
            </button>

            <button
              type="button"
              onClick={() => setIssueReason('handwritten_to_digital')}
              className={`p-4 rounded-xl border text-left transition-all ${
                issueReason === 'handwritten_to_digital'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              <p className="font-bold text-sm text-slate-900 dark:text-white">
                💻 ३. डिजिटल कम्प्युटर पुर्जा (DLIS) मा बदल्ने
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                पुरानो हस्तलिखित पुर्जालाई मालपोतको नयाँ भू-सूचना प्रणाली (DLIS) मा चढाउने प्रक्रिया।
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* 5-Step Execution Workflow */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="p-5 sm:p-6 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              प्रतिलिपि लिने ५ अनिवार्य चरणहरू ({completedCount}/{steps.length} पूरा)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              प्रहरी निवेदनदेखि पत्रिकामा सूचना र नयाँ पुर्जा हात पर्नेसम्मका चरणहरूमा टिक लगाउनुहोस्।
            </p>
          </div>
          <button
            type="button"
            onClick={() => setCheckedSteps({})}
            className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1 font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> रिसेट
          </button>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {steps.map((step) => {
            const isDone = !!checkedSteps[step.id];
            return (
              <div
                key={step.id}
                onClick={() => toggleStep(step.id)}
                className={`p-4 sm:p-5 flex items-start gap-4 cursor-pointer transition-colors ${
                  isDone
                    ? 'bg-emerald-50/40 dark:bg-emerald-950/20'
                    : 'hover:bg-slate-50/80 dark:hover:bg-slate-850'
                }`}
              >
                <div className="mt-0.5 flex-shrink-0 text-slate-400 dark:text-slate-600 hover:text-emerald-600">
                  {isDone ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-950" />
                  ) : (
                    <Circle className="w-6 h-6" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-slate-400">चरण {step.stepNo}</span>
                    <span className={`text-base font-bold ${isDone ? 'line-through text-slate-400' : 'text-slate-900 dark:text-white'}`}>
                      {step.title}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      📍 {step.place}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Official Ready-to-Use Templates */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="p-6 bg-slate-50/80 dark:bg-slate-850 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-emerald-600" />
              तयारी पत्रिका सूचना तथा निवेदन ढाँचाहरू (Editable Templates)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              दैनिक पत्रिकामा छपाउने १५ दिने सूचना र प्रहरी/वडा/मालपोतका निवेदन ढाँचाहरू एक क्लिकमा कपी वा प्रिन्ट गर्नुहोस्।
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 text-slate-700 dark:text-slate-200 text-xs font-semibold shadow-sm"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'कपी भयो!' : 'ढाँचा कपी'}
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm"
            >
              <Printer className="w-4 h-4" /> प्रिन्ट
            </button>
          </div>
        </div>

        {/* Tab switch */}
        <div className="border-b border-slate-100 dark:border-slate-800 flex overflow-x-auto bg-slate-50/40 dark:bg-slate-900">
          <button
            type="button"
            onClick={() => setActiveTemplate('newspaper_notice')}
            className={`px-4 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTemplate === 'newspaper_notice'
                ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 bg-white dark:bg-slate-800'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            📰 १. पत्रिकामा छाप्ने १५ दिने सूचना
          </button>
          <button
            type="button"
            onClick={() => setActiveTemplate('police_app')}
            className={`px-4 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTemplate === 'police_app'
                ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 bg-white dark:bg-slate-800'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            👮 २. प्रहरी चौकी निवेदन
          </button>
          <button
            type="button"
            onClick={() => setActiveTemplate('ward_app')}
            className={`px-4 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTemplate === 'ward_app'
                ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 bg-white dark:bg-slate-800'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            🏢 ३. वडा सिफारिस निवेदन
          </button>
          <button
            type="button"
            onClick={() => setActiveTemplate('malpot_app')}
            className={`px-4 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTemplate === 'malpot_app'
                ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 bg-white dark:bg-slate-800'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            🏛️ ४. मालपोत प्रतिलिपि निवेदन
          </button>
        </div>

        <div className="p-6">
          <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-2">
            {templates[activeTemplate].subtitle}
          </p>
          <div className="bg-slate-50 dark:bg-slate-950 p-5 sm:p-7 rounded-xl border border-slate-200 dark:border-slate-800 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed select-all">
            {templates[activeTemplate].content}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            💡 खाली ठाउँमा आफ्नो सम्बन्धित जिल्ला, वडा, कित्ता नम्बर, क्षेत्रफल र ठेगाना भरेर पेश गर्नुहोस्।
          </p>
        </div>
      </div>

      {/* Safety & Fraud Protection Rules */}
      <div className="bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-900/60 rounded-2xl p-6">
        <h4 className="text-base font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2 mb-3">
          <ShieldCheck className="w-5 h-5 text-sky-600" />
          लालपुर्जा हराउँदा नआत्तिनुहोस्: सुरक्षा र कानुनी तथ्यहरू
        </h4>
        <ul className="space-y-2 text-xs sm:text-sm text-sky-800 dark:text-sky-300 leading-relaxed">
          <li>• <strong>कसैले दुरुपयोग गर्न सक्दैन:</strong> केवल लालपुर्जा हात पर्दैमा कुनै पनि व्यक्तिले जग्गा बेच्न, नामसारी गर्न वा बैंकमा रोक्का राख्न सक्दैन किनभने मालपोतमा जग्गाधनी स्वयंको सक्कल नागरिकता, बायोमेट्रिक औंठाछाप र डिजिटल तस्बिर अनिवार्य चाहिन्छ।</li>
          <li>• <strong>नयाँ पुर्जा बनेपछि पुरानो स्वतः बदर:</strong> मालपोतबाट प्रतिलिपि लालपुर्जा जारी भएपछि पुरानो हराएको लालपुर्जाको कानुनी हैसियत स्वतः समाप्त र बदर हुन्छ। पछि पुरानो पुर्जा भेटिए पनि त्यो चल्दैन।</li>
          <li>• <strong>पत्रिकामा सूचनाको उद्देश्य:</strong> उक्त जग्गा कुनै बैंकमा रोक्का रहेको वा लेनदेनमा कसैको हकदाबी परेको छ कि भनी १५ दिनको म्याद दिएर सार्वजनिक सूचना निकाल्ने कानुनी नियम हो।</li>
          <li>• <strong>अनुमानित खर्च र समय:</strong> पत्रिकामा सूचना प्रकाशन खर्च (रु १,५०० देखि ३,०००) र मालपोत दस्तुर सहित कुल १५ देखि २५ दिनभित्र नयाँ पुर्जा हात पर्छ।</li>
        </ul>
      </div>

      {/* Connected Links */}
      <div className="bg-slate-50 dark:bg-slate-850 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-4">
          🔗 थप सहयोगी लिङ्कहरू
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/tools/jagga-pass-checklist"
            className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600">
                जग्गा पास चेकलिस्ट
              </p>
              <p className="text-[11px] text-slate-500">वडा, नापी र मालपोत कागजात</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/tools/jagga-namsari-guide"
            className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600">
                जग्गा नामसारी गाइड
              </p>
              <p className="text-[11px] text-slate-500">मृत्युपश्चात दाखिला खारेज</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/tools/jagga-rokka-phukuwa"
            className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600">
                जग्गा रोक्का तथा फुकुवा
              </p>
              <p className="text-[11px] text-slate-500">बैंक कर्जा चुक्तापछि फुकुवा</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
