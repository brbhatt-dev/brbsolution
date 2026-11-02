'use client';

import React, { useState } from 'react';
import { 
  Scale, 
  AlertTriangle, 
  FileCheck2, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Copy, 
  Check, 
  Printer, 
  RotateCcw,
  Clock,
  ShieldCheck,
  ChevronRight,
  HelpCircle,
  Gavel
} from 'lucide-react';
import { DISPUTE_SCENARIOS, DisputeScenario } from '@/data/disputeRules';
import { copyToClipboard } from '@/lib/clipboard';

export default function PropertyDisputeWizard() {
  const [selectedDisputeId, setSelectedDisputeId] = useState<string>('boundary_encroachment');
  const [copied, setCopied] = useState(false);

  const scenario: DisputeScenario = DISPUTE_SCENARIOS[selectedDisputeId] || DISPUTE_SCENARIOS['boundary_encroachment'];

  const handleCopyReport = async () => {
    const text = `⚖️ घरजग्गा कानुनी विवाद समाधान कार्ययोजना (BR Bhatta Legal Guide)
--------------------------------------------------
📌 समस्या: ${scenario.title}
📝 विवरण: ${scenario.summary}

🏛️ जानुपर्ने आधिकारिक निकाय: ${scenario.authority}
⏳ कानुनी हदम्याद (Deadline): ${scenario.statuteOfLimitations}
📜 सम्बन्धित कानुन: ${scenario.governingLaw}

📋 आवश्यक कागजातहरू:
${scenario.requiredDocuments.map((d) => `• ${d}`).join('\n')}

🚀 चरणबद्ध समाधान प्रक्रिया:
${scenario.steps.map((s) => `${s.stepNo}. ${s.title}: ${s.description}`).join('\n')}

💡 मुख्य सल्लाह: ${scenario.tips}

🔗 विस्तृत जानकारी: https://www.brbhatta.com/tools/property-dispute-wizard`;

    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-rose-950 to-slate-900 text-white p-6 sm:p-8 border border-rose-900/40 shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-200 text-xs font-bold">
              <Scale className="w-3.5 h-3.5 text-rose-400" />
              <span>मुलुकी देवानी संहिता २०७४ र नापी ऐन २०१९ अनुसार</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              घरजग्गा कानुनी विवाद तथा समाधान विजार्ड (Property Dispute Solver)
            </h2>
            <p className="text-sm text-rose-100/90 leading-relaxed">
              आफ्नो जग्गा वा बाटो सम्बन्धी समस्या छान्नुहोस्। तुरुन्तै कुन सरकारी कार्यालय जाने, हदम्याद कति दिन छ र कानुनी प्रक्रिया के हो, चरणबद्ध कार्ययोजना पाउनुहोस्।
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0 print:hidden">
            <button
              onClick={handleCopyReport}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'कपी भयो!' : 'कार्ययोजना कपी'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>A4 प्रिन्ट</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Selection Grid (hidden on print) */}
      <div className="print:hidden space-y-3">
        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
          चरण १: तपाईंको मुख्य घरजग्गा समस्या कुन हो? (Select Your Problem):
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {Object.keys(DISPUTE_SCENARIOS).map((key) => {
            const item = DISPUTE_SCENARIOS[key];
            const isSelected = selectedDisputeId === key;
            return (
              <div
                key={key}
                onClick={() => setSelectedDisputeId(key)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'border-rose-600 bg-rose-50/70 dark:bg-rose-950/40 shadow-xs ring-1 ring-rose-500'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h4>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />}
                </div>
                <p className="text-2xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2">
                  {item.summary}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Generated Legal Solution Plan */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-9 border border-slate-200 dark:border-slate-800 shadow-sm space-y-7">
        <div className="space-y-2 border-b border-slate-100 dark:border-slate-800 pb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-400 text-xs font-bold border border-rose-200 dark:border-rose-800">
            <Gavel className="w-3.5 h-3.5" />
            <span>कानुनी प्रतिवेदन तथा कार्ययोजना (Action Plan)</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            {scenario.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {scenario.summary}
          </p>
        </div>

        {/* 3 Key Fast Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-2xs font-bold text-slate-500 uppercase flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-rose-600" />
              <span>सम्बन्धित निकाय (Authority):</span>
            </span>
            <p className="font-extrabold text-slate-900 dark:text-white leading-snug">
              {scenario.authority}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-2xs font-bold text-slate-500 uppercase flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>कानुनी हदम्याद (Deadline):</span>
            </span>
            <p className="font-extrabold text-slate-900 dark:text-white leading-snug">
              {scenario.statuteOfLimitations}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-2xs font-bold text-slate-500 uppercase flex items-center gap-1">
              <Scale className="w-3.5 h-3.5 text-blue-600" />
              <span>लागू हुने कानुन (Governing Law):</span>
            </span>
            <p className="font-extrabold text-slate-900 dark:text-white leading-snug">
              {scenario.governingLaw}
            </p>
          </div>
        </div>

        {/* Required Documents */}
        <div className="space-y-3">
          <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <FileCheck2 className="w-4 h-4 text-emerald-600" />
            <span>पेश गर्नुपर्ने अनिवार्य कागजातहरूको चेकलिस्ट (Checklist):</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {scenario.requiredDocuments.map((doc, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 text-emerald-950 dark:text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Procedure */}
        <div className="space-y-4">
          <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-rose-600" />
            <span>तपाईंले चाल्नुपर्ने चरणबद्ध कदमहरू (Step-by-Step Action Roadmap):</span>
          </h4>

          <div className="space-y-3">
            {scenario.steps.map((st) => (
              <div key={st.stepNo} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3.5">
                <span className="w-7 h-7 rounded-full bg-rose-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {st.stepNo}
                </span>
                <div className="space-y-1">
                  <h5 className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white">
                    {st.title}
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expert Advice Note */}
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-950 dark:text-amber-200 flex items-start gap-2.5">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>इन्जिनियर तथा कानुनी सुझाव:</strong> {scenario.tips}
          </div>
        </div>
      </div>
    </div>
  );
}
