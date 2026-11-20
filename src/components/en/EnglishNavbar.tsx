'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ArrowRight, Calculator, Calendar, Compass, Landmark, FileText } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import { BILINGUAL_ROUTE_PAIRS } from '@/lib/i18nRoutes';

export default function EnglishNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const englishTools = BILINGUAL_ROUTE_PAIRS.filter((p) => p.en !== '/en' && p.en !== '/en/patro');

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-2xs transition-colors duration-200">
      <div className="max-w-[1440px] mx-auto px-2.5 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-16 gap-1.5 sm:gap-3">
          {/* Brand Logo */}
          <Link href="/en" className="flex items-center gap-2 group py-1 shrink-0 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-0.5 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-emerald-500 transition-colors">
              <img src="/logo.png" alt="Land Solution Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-lg font-black tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight truncate">
                Land Solution
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-semibold truncate">
                <span className="hidden sm:inline">BR Bhatta • </span>English
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-3 xl:gap-5 min-w-0 overflow-hidden text-xs xl:text-[13px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            <div
              className="relative py-2 group shrink-0"
              onMouseEnter={() => setToolsOpen(true)}
              onMouseLeave={() => setToolsOpen(false)}
            >
              <Link href="/en" className="inline-flex items-center gap-1 whitespace-nowrap hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                <Calculator className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Tools</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 shrink-0" />
              </Link>

              <div
                className={`absolute left-0 top-full w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-3 space-y-1 transition-all duration-150 ${
                  toolsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                {englishTools.map((t) => (
                  <Link
                    key={t.en}
                    href={t.en}
                    onClick={() => setToolsOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/50 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-300 normal-case tracking-normal transition-colors"
                  >
                    <span>{t.labelEn}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/en/tools/malpot-valuation-rates" className="inline-flex items-center gap-1 whitespace-nowrap hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shrink-0">
              <Landmark className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>Valuation</span>
            </Link>

            <Link href="/en/tools/survey-offices" className="inline-flex items-center gap-1 whitespace-nowrap hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shrink-0">
              <Compass className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span><span className="hidden xl:inline">77-District </span>Offices</span>
            </Link>

            <Link href="/en/patro" className="inline-flex items-center gap-1 whitespace-nowrap hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shrink-0">
              <Calendar className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span><span className="hidden xl:inline">Nepali </span>Patro</span>
            </Link>

            <Link href="/about" className="whitespace-nowrap hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shrink-0">
              About
            </Link>

            <Link href="/contact" className="inline-flex items-center gap-1 whitespace-nowrap hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shrink-0">
              <FileText className="w-3.5 h-3.5 text-sky-500 shrink-0" />
              <span>Contact</span>
            </Link>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <LanguageToggle variant="pill" />
            <ThemeToggle variant="icon" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4.5 h-4.5 sm:w-5 sm:h-5" /> : <Menu className="w-4.5 h-4.5 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-4 space-y-2">
          {englishTools.map((t) => (
            <Link
              key={t.en}
              href={t.en}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs font-bold text-slate-800 dark:text-slate-200"
            >
              <span>{t.labelEn}</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
            </Link>
          ))}
          <Link
            href="/en/patro"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-xs font-bold text-amber-800 dark:text-amber-300"
          >
            <span>Nepali Patro &amp; BS-AD Converter</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </header>
  );
}
