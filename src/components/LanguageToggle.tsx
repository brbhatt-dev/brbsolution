'use client';

import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  variant?: 'pill' | 'compact' | 'full';
  className?: string;
}

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export default function LanguageToggle({
  variant = 'pill',
  className = '',
}: LanguageToggleProps) {
  const [currentLang, setCurrentLang] = useState<'ne' | 'en'>('ne');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Read stored or cookie language
    const hasEnCookie = typeof document !== 'undefined' && document.cookie.includes('googtrans=/ne/en');
    const stored = typeof window !== 'undefined' ? localStorage.getItem('brb_lang') : null;

    if (hasEnCookie || stored === 'en') {
      setCurrentLang('en');
    }

    // Initialize Google Translate Script
    if (typeof window !== 'undefined') {
      if (!document.getElementById('google_translate_element')) {
        const div = document.createElement('div');
        div.id = 'google_translate_element';
        div.style.display = 'none';
        document.body.appendChild(div);
      }

      window.googleTranslateElementInit = function () {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'ne',
              includedLanguages: 'ne,en',
              autoDisplay: false,
            },
            'google_translate_element'
          );
        }
      };

      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  const switchLanguage = (lang: 'ne' | 'en') => {
    if (lang === currentLang) return;

    const host = window.location.hostname;
    const domainParts = host.split('.');
    const rootDomain = domainParts.length > 1 ? '.' + domainParts.slice(-2).join('.') : host;

    if (lang === 'en') {
      document.cookie = `googtrans=/ne/en; path=/;`;
      document.cookie = `googtrans=/ne/en; path=/; domain=${host};`;
      if (rootDomain !== host) {
        document.cookie = `googtrans=/ne/en; path=/; domain=${rootDomain};`;
      }
      localStorage.setItem('brb_lang', 'en');
      setCurrentLang('en');
    } else {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${host};`;
      if (rootDomain !== host) {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${rootDomain};`;
      }
      document.cookie = `googtrans=/ne/ne; path=/;`;
      localStorage.setItem('brb_lang', 'ne');
      setCurrentLang('ne');
    }

    // Try in-memory translation trigger first
    const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (combo) {
      combo.value = lang;
      combo.dispatchEvent(new Event('change'));
    } else {
      // Reload page to let Google Translate parse with the new cookie
      window.location.reload();
    }
  };

  if (!mounted) {
    return (
      <div className={`flex items-center p-0.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold ${className}`}>
        <span className="px-2 py-1 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 flex items-center gap-1">
          <span>🇳🇵</span> <span>नेपाली</span>
        </span>
      </div>
    );
  }

  // Full-width variant for Mobile Drawer
  if (variant === 'full') {
    return (
      <div className={`p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 ${className}`}>
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 px-1">
          <span className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            <span>भाषा छनोट (Language)</span>
          </span>
          <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
            {currentLang === 'ne' ? 'नेपाली सक्रिय' : 'English Active'}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80">
          <button
            type="button"
            onClick={() => switchLanguage('ne')}
            className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              currentLang === 'ne'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs border border-slate-200/80 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span className="text-sm">🇳🇵</span>
            <span>नेपाली (Nepali)</span>
          </button>

          <button
            type="button"
            onClick={() => switchLanguage('en')}
            className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              currentLang === 'en'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span className="text-sm">🇬🇧</span>
            <span>English (ENG)</span>
          </button>
        </div>
      </div>
    );
  }

  // Compact variant (For Mobile Header)
  if (variant === 'compact') {
    return (
      <button
        type="button"
        onClick={() => switchLanguage(currentLang === 'ne' ? 'en' : 'ne')}
        className={`h-9 px-2.5 rounded-xl flex items-center gap-1.5 transition-all active:scale-95 border cursor-pointer ${
          currentLang === 'en'
            ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs'
            : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700'
        } ${className}`}
        title={currentLang === 'ne' ? 'Switch to English' : 'नेपालीमा हेर्नुहोस्'}
        aria-label="Language Switcher"
      >
        <span className="text-xs">{currentLang === 'ne' ? '🇳🇵' : '🇬🇧'}</span>
        <span className="text-xs font-bold">{currentLang === 'ne' ? 'NEP' : 'ENG'}</span>
      </button>
    );
  }

  // Default Segmented Pill (For Desktop Header)
  return (
    <div
      className={`inline-flex items-center p-0.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-xs font-bold shadow-2xs ${className}`}
    >
      <button
        type="button"
        onClick={() => switchLanguage('ne')}
        className={`px-2 xl:px-2.5 py-1 rounded-lg flex items-center gap-1 xl:gap-1.5 transition-all cursor-pointer ${
          currentLang === 'ne'
            ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-black'
            : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
        }`}
        title="नेपाली भाषामा हेर्नुहोस्"
      >
        <span className="text-xs leading-none">🇳🇵</span>
        <span className="hidden xl:inline">नेपाली</span>
        <span className="xl:hidden">NEP</span>
      </button>

      <button
        type="button"
        onClick={() => switchLanguage('en')}
        className={`px-2 xl:px-2.5 py-1 rounded-lg flex items-center gap-1 xl:gap-1.5 transition-all cursor-pointer ${
          currentLang === 'en'
            ? 'bg-emerald-600 text-white shadow-xs font-black'
            : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
        }`}
        title="Switch whole website to English"
      >
        <span className="text-xs leading-none">🇬🇧</span>
        <span className="hidden xl:inline">English</span>
        <span className="xl:hidden">ENG</span>
      </button>
    </div>
  );
}
