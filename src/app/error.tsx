'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RotateCcw, Home, Mail } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled runtime application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <div className="max-w-md w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 text-center space-y-5 shadow-xl">
        
        {/* Error Icon */}
        <div className="w-14 h-14 mx-auto rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-200 dark:border-rose-800">
          <AlertTriangle className="w-7 h-7" />
        </div>

        {/* Text */}
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            प्राविधिक समस्या देखा पर्‍यो
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            माफ गर्नुहोस्, यो पृष्ठ लोड गर्दा केही त्रुटि भयो। कृपया पुनः प्रयास गर्नुहोस्।
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>पुनः प्रयास गर्नुहोस् (Retry)</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all"
          >
            <Home className="w-3.5 h-3.5" />
            <span>गृहपृष्ठ</span>
          </Link>
        </div>

        {/* Help footer */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
          <Mail className="w-3.5 h-3.5 text-slate-400" />
          <span>समस्या निरन्तर रहेमा: infobrbhatta@gmail.com</span>
        </div>

      </div>
    </div>
  );
}
