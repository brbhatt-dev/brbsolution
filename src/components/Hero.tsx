'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Play, 
  ExternalLink, 
  Sparkles, 
  ArrowRight, 
  Calculator, 
  ArrowRightLeft, 
  ImageIcon, 
  FileText, 
  Building2, 
  ScrollText, 
  ShieldCheck, 
  CheckCircle2,
  FileCode
} from 'lucide-react';
import TithiWidget from './TithiWidget';

export default function Hero() {
  const quickPills = [
    { label: 'जग्गा क्यालकुलेटर', icon: Calculator, href: '#land-calculator', isAnchor: true },
    { label: 'Preeti ⇄ Unicode', icon: ArrowRightLeft, href: '/tools/preeti-to-unicode', isAnchor: false },
    { label: 'फोटो कम्प्रेसर (<२००KB)', icon: ImageIcon, href: '/tools/image-compressor', isAnchor: false },
    { label: 'तस्विरबाट A4 PDF', icon: FileText, href: '/tools/images-to-pdf', isAnchor: false },
    { label: '७७ जिल्ला नापी', icon: Building2, href: '/tools/survey-offices', isAnchor: false },
    { label: 'जग्गा बैना कागज', icon: ScrollText, href: '/tools/legal-templates', isAnchor: false },
  ];

  return (
    <section className="relative pt-6 pb-10 sm:pt-14 sm:pb-16 bg-gradient-to-b from-slate-50 via-white to-white dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors overflow-hidden notranslate" translate="no">
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Top Minimalist Official Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>नेपालको आधिकारिक ल्याण्ड-टेक तथा डिजिटल पोर्टल</span>
            </div>

            {/* Clean, Authoritative Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.2]">
              नेपाल जग्गा नापजाँच, कित्ताकाट तथा{' '}
              <span className="text-emerald-600 dark:text-emerald-400">डिजिटल प्रविधि समाधान</span>
            </h1>

            {/* Concise Subtitle */}
            <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              नापी अमिन, इन्जिनियर, घरजग्गा व्यवसायी तथा सर्वसाधारणका लागि जग्गा क्यालकुलेटर, मालपोत कर, Preeti to Unicode, २००KB फोटो कम्प्रेसर, र Land Solution एपको आधिकारिक हब।
            </p>

            {/* High-Contrast CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="#featured-tools"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
              >
                <span>डिजिटल उपकरणहरू प्रयोग गर्नुहोस्</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/land-solution-demo/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white dark:bg-slate-800 dark:hover:bg-slate-700 font-bold text-xs sm:text-sm border border-slate-800 dark:border-slate-700 transition-all shadow-2xs"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Land Solution Web Demo</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

            {/* Mobile Horizontal Quick Action Pills */}
            <div className="pt-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 text-center lg:text-left">
                द्रुत उपकरणहरू (Quick Access):
              </span>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar -mx-2 px-2">
                {quickPills.map((pill, idx) => {
                  const Icon = pill.icon;
                  return pill.isAnchor ? (
                    <a
                      key={idx}
                      href={pill.href}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors shadow-2xs"
                    >
                      <Icon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{pill.label}</span>
                    </a>
                  ) : (
                    <Link
                      key={idx}
                      href={pill.href}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors shadow-2xs"
                    >
                      <Icon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{pill.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>१००% शुद्ध नापी सूत्र</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>आर्थिक ऐन २०८१/८२</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>१००% व्यक्तिगत गोपनीयता</span>
              </div>
            </div>

          </div>

          {/* Right Column: Portal Widget & Live Patro */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Live Patro Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">नेपाली पात्रो & समय</h3>
                    <p className="text-[10px] text-slate-400 font-medium">Bikram Sambat Live</p>
                  </div>
                </div>

                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                  Live
                </span>
              </div>

              {/* TithiWidget */}
              <TithiWidget />

              {/* Quick Jump Links */}
              <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                <a
                  href="#land-calculator"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold transition-colors"
                >
                  <Calculator className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="truncate">क्षेत्रफल क्यालकुलेटर</span>
                </a>

                <Link
                  href="/tools/survey-offices"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold transition-colors"
                >
                  <Building2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span className="truncate">७७ जिल्ला नापी</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
