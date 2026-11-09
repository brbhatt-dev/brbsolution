'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Download, 
  ExternalLink, 
  X, 
  Sparkles, 
  Smartphone,
  CheckCircle2
} from 'lucide-react';

interface PatroBannerProps {
  variant?: 'inline' | 'floating';
}

export default function PatroAppPromoBanner({ variant = 'inline' }: PatroBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isDismissed = localStorage.getItem('dismiss_patro_banner_v79');
    if (isDismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('dismiss_patro_banner_v79', 'true');
  };

  if (!isVisible) return null;

  if (variant === 'floating') {
    return (
      <div className="fixed bottom-4 right-4 z-40 max-w-sm w-full p-4 rounded-3xl bg-slate-900/95 dark:bg-black/95 text-white shadow-2xl border border-slate-700 backdrop-blur-md animate-fade-in print:hidden">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1 rounded-full text-slate-400 hover:text-white transition-colors"
          title="बन्द गर्नुहोस्"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-2xl bg-emerald-600 text-white shrink-0 mt-0.5">
            <Smartphone className="w-5 h-5" />
          </div>
          <div className="space-y-1 pr-4">
            <div className="flex items-center gap-1.5">
              <span className="text-2xs font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                Android App v7.9.74
              </span>
            </div>
            <h4 className="text-sm font-black leading-snug">
              बीआर पात्रो (BR Patro)
            </h4>
            <p className="text-2xs text-slate-300">
              दैनिक पञ्चाङ्ग, तिथि, शुभ साइत र अफलाइन क्यालेन्डर।
            </p>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-2">
          <a
            href="https://github.com/imtechboss/imtechboss/releases/download/v7.9.74/BR_Patro_v7.9.74.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>APK डाउनलोड (37MB)</span>
          </a>

          <Link
            href="/patro"
            className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1"
          >
            <span>अनलाइन</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </Link>
        </div>
      </div>
    );
  }

  // Inline Banner
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-emerald-950 text-white p-6 sm:p-8 border border-emerald-500/30 shadow-xl print:hidden">
      
      {/* Subtle Glow Circle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-2xs font-bold">
            <Sparkles className="w-3 h-3" />
            <span>नयाँ अपडेट: बीआर पात्रो एन्ड्रोइड एप v7.9.74</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            नेपालको भरपर्दो डिजिटल पात्रो तथा वैदिक पञ्चाङ्ग एप
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            वि.सं. क्यालेन्डर, दैनिक तिथि, नक्षत्र, राहुकाल, चाडपर्व, शुभ साइत र वि.सं. ⇄ ई.सं. मिति रूपान्तरण अब इन्टरनेट नहुँदा पनि मोबाइलमै!
          </p>

          <div className="flex items-center gap-4 text-2xs text-emerald-300 font-medium flex-wrap pt-1">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              १००% निःशुल्क र सुरक्षित
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              अफलाइन चल्ने
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              दैनिक राहुकाल अलर्ट
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0 self-start md:self-auto">
          <a
            href="https://github.com/imtechboss/imtechboss/releases/download/v7.9.74/BR_Patro_v7.9.74.apk"
            download="BR_Patro_v7.9.74.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>प्रत्यक्ष APK डाउनलोड (३८.१ MB)</span>
          </a>

          <Link
            href="/patro"
            className="px-6 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center justify-center gap-2 border border-white/20 transition-all"
          >
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>वेबमा अनलाइन पात्रो खोल्नुहोस्</span>
          </Link>
        </div>

      </div>

    </div>
  );
}
