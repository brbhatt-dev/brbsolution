'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Calculator, 
  Copy, 
  Check, 
  Sparkles, 
  CreditCard, 
  ArrowLeft,
  FileCheck2,
  RefreshCw,
  Coins
} from 'lucide-react';
import { numberToNepaliWords, numberToEnglishWords, formatNepaliCurrency } from '@/lib/numberToWords';

export default function NumberToWordsPage() {
  const [amount, setAmount] = useState<string>('1250000');
  const [payee, setPayee] = useState<string>('राम बहादुर श्रेष्ठ');
  const [copiedNep, setCopiedNep] = useState(false);
  const [copiedEng, setCopiedEng] = useState(false);

  const numVal = parseFloat(amount) || 0;
  const nepaliWords = numberToNepaliWords(numVal);
  const englishWords = numberToEnglishWords(numVal);
  const formattedNepDigits = formatNepaliCurrency(numVal);

  const handleCopyNep = () => {
    navigator.clipboard.writeText(nepaliWords);
    setCopiedNep(true);
    setTimeout(() => setCopiedNep(false), 2000);
  };

  const handleCopyEng = () => {
    navigator.clipboard.writeText(englishWords);
    setCopiedEng(true);
    setTimeout(() => setCopiedEng(false), 2000);
  };

  const setPreset = (val: number) => {
    setAmount(val.toString());
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>सबै टूल्सहरू (All Tools)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-semibold">नेपाली संख्या अक्षरेपी क्यालकुलेटर</span>
        </div>

        {/* Hero Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>बैंक चेक, भौचर तथा मालपोत लिखत विशेष</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            नेपाली संख्या अक्षरेपी क्यालकुलेटर (Number to Words)
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            अंकमा रकम टाइप गर्नुहोस् र तुरुन्तै शुद्ध नेपाली शब्द (अक्षेरुपी), अंग्रेजी शब्द र चेक/भौचर ढाँचामा प्राप्त गर्नुहोस्।
          </p>
        </div>

        {/* Main Input Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>रकम अंकमा प्रविष्ट गर्नुहोस् (Enter Amount in Digits):</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm">
                रु. {formattedNepDigits} /-
              </span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 font-bold text-lg">
                Rs.
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="100000"
                min="0"
                step="any"
                className="w-full pl-14 pr-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xl sm:text-2xl font-black text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Quick Presets */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-400">द्रुत रकम चयन (Quick Presets):</span>
            <div className="flex flex-wrap gap-2">
              {[
                { label: '१० हजार', val: 10000 },
                { label: '५० हजार', val: 50000 },
                { label: '१ लाख', val: 100000 },
                { label: '५ लाख', val: 500000 },
                { label: '१० लाख', val: 1000000 },
                { label: '२५ लाख', val: 2500000 },
                { label: '५० लाख', val: 5000000 },
                { label: '१ करोड', val: 10000000 }
              ].map((p) => (
                <button
                  key={p.val}
                  onClick={() => setPreset(p.val)}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-slate-100 dark:border-slate-800">
            
            {/* Nepali Words */}
            <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                  <Coins className="w-4 h-4 text-emerald-600" />
                  <span>शुद्ध नेपाली शब्दमा (अक्षेरुपी):</span>
                </span>
                <button
                  onClick={handleCopyNep}
                  className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1 shadow-xs transition-colors"
                >
                  {copiedNep ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedNep ? 'कपी भयो' : 'कपी'}</span>
                </button>
              </div>

              <p className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-relaxed select-all">
                {nepaliWords}
              </p>
            </div>

            {/* English Words */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-slate-500" />
                  <span>In English Words:</span>
                </span>
                <button
                  onClick={handleCopyEng}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-1 shadow-xs transition-colors"
                >
                  {copiedEng ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEng ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed select-all">
                {englishWords}
              </p>
            </div>

          </div>
        </div>

        {/* Bank Cheque Mockup Preview */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-50/60 via-amber-100/30 to-amber-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 border-2 border-dashed border-amber-300 dark:border-slate-700 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-200 dark:border-slate-700 pb-3">
            <div className="flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-amber-700 dark:text-amber-400" />
              <h3 className="text-sm font-bold text-amber-900 dark:text-amber-200">
                बैंक चेक नमुना (Bank Cheque Preview)
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">पाउनेको नाम (Payee):</span>
              <input
                type="text"
                value={payee}
                onChange={(e) => setPayee(e.target.value)}
                placeholder="Payee Name"
                className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-xs font-bold text-slate-800 dark:text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Cheque Body Mockup */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-amber-200 dark:border-slate-800 shadow-sm space-y-4 font-serif">
            <div className="flex justify-between items-start">
              <div className="space-y-0.5">
                <span className="text-base font-black tracking-widest text-slate-800 dark:text-white">NEPAL COMMERCIAL BANK</span>
                <span className="block text-[10px] text-slate-400 uppercase">Kathmandu Main Branch</span>
              </div>
              <div className="text-right text-xs font-mono text-slate-600 dark:text-slate-300 border px-2 py-1 rounded">
                मिति (Date): {new Date().toISOString().split('T')[0]}
              </div>
            </div>

            <div className="pt-2 flex items-baseline gap-3 border-b border-slate-300 dark:border-slate-700 pb-1.5">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400 shrink-0">Pay:</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">{payee || '...................................................'}</span>
              <span className="text-xs text-slate-400 ml-auto">वा धारकलाई (or Bearer)</span>
            </div>

            <div className="pt-2 flex items-baseline gap-3 border-b border-slate-300 dark:border-slate-700 pb-1.5">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400 shrink-0">Rupees:</span>
              <span className="text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-400 leading-relaxed">
                {englishWords}
              </span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="text-[11px] text-slate-400">
                A/C No: 01234567890123
              </div>

              <div className="px-4 py-2 rounded-xl bg-amber-50 dark:bg-slate-900 border-2 border-amber-400 dark:border-amber-600 text-base sm:text-lg font-black text-slate-900 dark:text-white font-mono">
                Rs. {formattedNepDigits} /-
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
