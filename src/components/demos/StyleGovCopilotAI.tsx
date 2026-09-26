'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Bot, 
  Sparkles, 
  Send, 
  Calculator, 
  ArrowRight, 
  Coins, 
  Scale, 
  FileText, 
  CheckCircle2, 
  User,
  Zap,
  Info
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';
import UniversalSmartSearch from './UniversalSmartSearch';

interface CopilotChat {
  sender: 'user' | 'assistant';
  text: string;
  badge?: string;
  widget?: 'calc' | 'tax' | 'kitta';
  data?: any;
}

export default function StyleGovCopilotAI() {
  const [messages, setMessages] = useState<CopilotChat[]>([
    {
      sender: 'assistant',
      text: 'नमस्ते! म BRBhatta डिजिटल नापी तथा भू-सूचना को-पाइलट हुँ। तपाईंको जग्गाको क्षेत्रफल, मालपोत कर, वा कित्ताकाट सम्बन्धी कुनै पनि प्रश्न सोध्नुहोस् वा तलका प्रश्नहरूमा थिच्नुहोस्:',
      badge: 'एआई भू-सहायक'
    },
    {
      sender: 'user',
      text: 'मेरो ४ आना जग्गा छ, कति वर्गफिट हुन्छ र कित्ताकाट गर्न मिल्छ?'
    },
    {
      sender: 'assistant',
      text: '४ आना बराबर १,३६८.९८ वर्गफिट (१२७.१८ वर्गमिटर) हुन्छ। भू-उपयोग नियमावली २०७९ अनुसार आवासीय क्षेत्रमा न्यूनतम १३० वर्गमिटर (करिब ४ आना ०.३ पैसा) हुनुपर्छ। यो प्लट १३० m² को सिमा नजिक रहेकाले नापी कार्यालयको स्थलगत फिल्डबुक जाँच आवश्यक हुन्छ।',
      widget: 'calc',
      data: { ropani: '०-४-०-०', sqft: '१,३६८.९८', sqm: '१२७.१८' }
    }
  ]);

  const [inputVal, setInputVal] = useState('');

  const handleAsk = (questionText: string) => {
    const q = questionText.trim();
    if (!q) return;

    // Simulate smart copilot response
    let answerText = `"${q}" सम्बन्धी नापी ऐन र नियमावली अनुसार आधिकारिक हिसाब तत्काल तलको क्यालकुलेटर इन्जिनमा तयार गरिएको छ।`;
    let widgetType: 'calc' | 'tax' | 'kitta' = 'calc';

    if (q.includes('मालपोत') || q.includes('कर')) {
      answerText = 'आर्थिक वर्ष २०८१/८२ अनुसार महानगरपालिकामा ५%, उप-महानगरमा ४.५%, नगरपालिकामा ४% र गाउँपालिकामा २% रजिस्ट्रेसन दस्तुर लाग्छ। महिलाको नाममा नामसारी गर्दा २५% राजस्व छुट पाइन्छ।';
      widgetType = 'tax';
    } else if (q.includes('कित्ताकाट')) {
      answerText = 'भू-उपयोग नियमावली २०७९ बमोजिम आवासीय क्षेत्रमा न्यूनतम १३० वर्गमिटर (४ आना) र कृषि क्षेत्रमा ६७५ वर्गमिटर (२ कट्ठा वा १ रोपनी ५ आना) भन्दा कममा कित्ताकाट पाइँदैन।';
      widgetType = 'kitta';
    }

    setMessages(prev => [
      ...prev,
      { sender: 'user', text: q },
      { sender: 'assistant', text: answerText, widget: widgetType }
    ]);

    setInputVal('');
  };

  return (
    <div className="space-y-12 max-w-4xl mx-auto font-sans">
      
      {/* 1. Conversational AI Header */}
      <section className="text-center space-y-4 pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold shadow-xs">
          <Bot className="w-4 h-4" />
          <span>नेपालकै पहिलो संवादात्मक एआई भू-सहायक (Conversational Land Co-Pilot)</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          सोध्नुहोस् र तत्काल <br />
          <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            जग्गा हिसाब र कानुनी सल्लाह
          </span> लिनुहोस्
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
          जग्गाको क्षेत्रफल, मालपोत कर वा कित्ताकाट नियम बुझ्न सिधै च्याटबक्समा प्रश्न सोध्नुहोस्:
        </p>
      </section>

      {/* 2. Interactive Conversational Assistant Stream Box */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-emerald-500/30 p-5 sm:p-7 shadow-2xl space-y-6">
        
        {/* Messages Stream */}
        <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'assistant' && (
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Bot className="w-5 h-5" />
                </div>
              )}

              <div className={`p-4 rounded-2xl max-w-xl text-xs sm:text-sm leading-relaxed space-y-2 ${
                m.sender === 'user'
                  ? 'bg-emerald-600 text-white font-medium rounded-tr-xs'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 rounded-tl-xs'
              }`}>
                {m.badge && (
                  <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    {m.badge}
                  </div>
                )}
                <div>{m.text}</div>

                {/* Optional Copilot Result Widget */}
                {m.widget === 'calc' && m.data && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-slate-900 dark:text-white space-y-1 text-xs font-mono">
                    <div>पहाड नाप: <strong>{m.data.ropani}</strong></div>
                    <div>वर्गफिट: <strong>{m.data.sqft} sq.ft</strong> ({m.data.sqm} m²)</div>
                  </div>
                )}
              </div>

              {m.sender === 'user' && (
                <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0 shadow-sm mt-0.5 font-bold text-xs">
                  हजुर
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Suggested Quick Question Chips */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
          <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1 mr-1">
            <Sparkles className="w-3 h-3 text-emerald-500" />
            <span>सोध्न मिल्ने प्रश्नहरू:</span>
          </span>
          {[
            '४ आनाको कति वर्गफिट हुन्छ?',
            'कित्ताकाटको नयाँ नियम के छ?',
            'मालपोतमा महिला छुट कति छ?',
            'फोटो २००KB मुनि कसरी झार्ने?',
          ].map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleAsk(prompt)}
              className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAsk(inputVal);
          }}
          className="flex items-center gap-2 pt-1"
        >
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="जग्गा सम्बन्धी कुनै पनि कुरा यहाँ टाइप गर्नुहोस्..."
            className="flex-1 py-3 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm font-medium focus:outline-none focus:border-emerald-500"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition shadow-sm cursor-pointer"
          >
            <span>सोध्नुहोस्</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>

      {/* 3. The Precision Engine directly available below */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              📐 प्रत्यक्ष जग्गा नापी इन्जिन (Live Land Calculator)
            </h2>
            <p className="text-xs text-slate-500">
              आफ्नो कित्ताको नाप हाल्नुहोस् र आधिकारिक स्लिप प्रिन्ट गर्नुहोस्।
            </p>
          </div>
          <TithiWidget />
        </div>

        <LandCalculator />
      </section>

    </div>
  );
}
