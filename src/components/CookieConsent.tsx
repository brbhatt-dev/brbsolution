'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X, Check, Shield } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('brbhatta_cookie_consent');
      if (!consent) {
        // Delay slightly for smooth page entrance
        const timer = setTimeout(() => setShowBanner(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      // localStorage disabled / private browsing fallback
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('brbhatta_cookie_consent', 'accepted');
    } catch (e) {}
    setShowBanner(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('brbhatta_cookie_consent', 'declined');
    } catch (e) {}
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <aside
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-4 left-4 z-50 max-w-sm sm:max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-4 sm:p-5 text-slate-800 dark:text-slate-100 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 notranslate"
      translate="no"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200/80 dark:border-amber-800 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
          <Cookie className="w-5 h-5" />
        </div>

        <div className="space-y-1.5 flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>कुकीज तथा गोपनीयता (Cookie Consent)</span>
            </h4>
            <button
              onClick={handleDecline}
              aria-label="Close"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1 -mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            हाम्रो वेबसाइटले सेवा सुधार, ट्राफिक विश्लेषण तथा गुगल एडसेन्स (Google AdSense) का सान्दर्भिक विज्ञापनहरूका लागि कुकीज प्रयोग गर्दछ। थप जानकारीका लागि{' '}
            <Link
              href="/privacy-policy"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              गोपनीयता नीति
            </Link>{' '}
            हेर्नुहोस्।
          </p>

          <div className="flex items-center gap-2 pt-1.5">
            <button
              onClick={handleAccept}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>स्वीकार गर्नुहोस्</span>
            </button>
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-all cursor-pointer"
            >
              अस्वीकार
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
