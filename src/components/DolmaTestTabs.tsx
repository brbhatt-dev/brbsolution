'use client';

import React, { useState } from 'react';
import { FileText, Coins, ExternalLink } from 'lucide-react';
import DolmaRegistrationRateCalculator from '@/components/DolmaRegistrationRateCalculator';
import DolmaCgtCalculator from '@/components/DolmaCgtCalculator';

export default function DolmaTestTabs() {
  const [activeTab, setActiveTab] = useState<'reg' | 'cgt'>('reg');

  return (
    <div className="space-y-6">
      {/* Tab Switcher Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-1.5 bg-slate-200/70 dark:bg-slate-800/80 rounded-2xl border border-slate-300/60 dark:border-slate-700/60">
        <div className="grid grid-cols-2 gap-1.5 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setActiveTab('reg')}
            className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'reg'
                ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-sm border border-slate-200/80 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>रजिष्ट्रेशन दस्तुर क्यालकुलेटर</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('cgt')}
            className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'cgt'
                ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-sm border border-slate-200/80 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Coins className="w-4 h-4" />
            <span>पुँजीगत लाभकर (CGT) क्यालकुलेटर</span>
          </button>
        </div>

        {/* BR Bhatta in-house badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>BR Bhatta | Land Tax System</span>
        </div>
      </div>

      {/* Render Active Calculator */}
      <div className="transition-opacity duration-200">
        {activeTab === 'reg' ? (
          <DolmaRegistrationRateCalculator />
        ) : (
          <DolmaCgtCalculator />
        )}
      </div>
    </div>
  );
}
