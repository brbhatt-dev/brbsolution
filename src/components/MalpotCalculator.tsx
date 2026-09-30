'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Coins, 
  Printer, 
  Receipt, 
  ShieldCheck, 
  Sparkles, 
  Zap,
  HelpCircle,
  Building2,
  Scale
} from 'lucide-react';
import DolmaRegistrationRateCalculator from '@/components/DolmaRegistrationRateCalculator';
import DolmaCgtCalculator from '@/components/DolmaCgtCalculator';
import QuickMalpotSlipCalculator from '@/components/QuickMalpotSlipCalculator';

interface MalpotCalculatorProps {
  defaultTab?: 'reg' | 'cgt' | 'quick';
}

export default function MalpotCalculator({ defaultTab = 'reg' }: MalpotCalculatorProps) {
  const [activeTab, setActiveTab] = useState<'reg' | 'cgt' | 'quick'>(defaultTab);

  // Sync tab with URL hash if present
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#cgt' || hash === '#capital-gain') {
        setActiveTab('cgt');
      } else if (hash === '#quick' || hash === '#slip' || hash === '#print') {
        setActiveTab('quick');
      } else if (hash === '#reg' || hash === '#registration') {
        setActiveTab('reg');
      }
    }
  }, []);

  const handleTabChange = (tab: 'reg' | 'cgt' | 'quick') => {
    setActiveTab(tab);
    if (typeof window !== 'undefined') {
      const hash = tab === 'reg' ? '#registration' : tab === 'cgt' ? '#cgt' : '#quick';
      window.history.replaceState(null, '', hash);
    }
  };

  return (
    <div className="space-y-6">
      {/* MASTER TOP BANNER */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-bold shadow-2xs">
          <Receipt className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>आर्थिक ऐन तथा मालपोत नियमावली २०८१/८२ आधिकारिक मापदण्ड</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          मालपोत तथा घरजग्गा कर क्यालकुलेटर
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          नेपालका ७ वटै प्रदेश र ७७ जिल्लाका मालपोत कार्यालयहरूको रजिष्ट्रेशन दस्तुर, रोक्का/फुकुवा, महिला छुट सहुलियत, पुँजीगत लाभकर (CGT) र आधिकारिक कर स्लिप प्रिन्ट गर्ने सम्पूर्ण डिजिटल प्रणाली।
        </p>
      </div>

      {/* MASTER 3-TAB SEGMENTED CONTROLLER */}
      <div className="p-1.5 bg-slate-200/80 dark:bg-slate-800/90 rounded-2xl border border-slate-300 dark:border-slate-700 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 w-full">
          
          {/* Tab 1: Registration Fee */}
          <button
            type="button"
            onClick={() => handleTabChange('reg')}
            className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'reg'
                ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-md border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-slate-700/40'
            }`}
          >
            <FileText className={`w-4 h-4 ${activeTab === 'reg' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`} />
            <div className="text-left sm:text-center leading-tight">
              <span className="block">१. लिखत तथा रजिष्ट्रेशन दस्तुर</span>
              <span className="text-[10px] font-normal opacity-80 hidden sm:block">७ प्रदेश, ७७ जिल्ला, सबै कारोबार</span>
            </div>
          </button>

          {/* Tab 2: Capital Gains Tax */}
          <button
            type="button"
            onClick={() => handleTabChange('cgt')}
            className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'cgt'
                ? 'bg-white dark:bg-slate-900 text-amber-700 dark:text-amber-400 shadow-md border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-slate-700/40'
            }`}
          >
            <Coins className={`w-4 h-4 ${activeTab === 'cgt' ? 'text-amber-600 dark:text-amber-400' : 'text-slate-400'}`} />
            <div className="text-left sm:text-center leading-tight">
              <span className="block">२. पुँजीगत लाभकर (CGT)</span>
              <span className="text-[10px] font-normal opacity-80 hidden sm:block">व्यक्ति/संस्था, ५ वर्ष अवधि, बहु-कारोबार</span>
            </div>
          </button>

          {/* Tab 3: Quick Calculator & Printable Voucher Slip */}
          <button
            type="button"
            onClick={() => handleTabChange('quick')}
            className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'quick'
                ? 'bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-400 shadow-md border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-slate-700/40'
            }`}
          >
            <Printer className={`w-4 h-4 ${activeTab === 'quick' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`} />
            <div className="text-left sm:text-center leading-tight">
              <span className="block">३. द्रुत हिसाब तथा स्लिप प्रिन्ट</span>
              <span className="text-[10px] font-normal opacity-80 hidden sm:block">तत्काल सारांश र आधिकारिक भौचर प्रिन्ट</span>
            </div>
          </button>

        </div>
      </div>

      {/* RENDER THE ACTIVE TOOL TAB */}
      <div className="transition-all duration-200">
        {activeTab === 'reg' && <DolmaRegistrationRateCalculator />}
        {activeTab === 'cgt' && <DolmaCgtCalculator />}
        {activeTab === 'quick' && <QuickMalpotSlipCalculator />}
      </div>
    </div>
  );
}
