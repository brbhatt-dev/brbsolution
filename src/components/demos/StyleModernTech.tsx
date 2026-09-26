'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  ArrowRight, 
  Sparkles, 
  ArrowRightLeft, 
  ImageIcon, 
  FileText, 
  FileStack, 
  Building2, 
  Scale, 
  Coins, 
  Play, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Search
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';

export default function StyleModernTech() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cadastre' | 'pdf' | 'office'>('all');

  const tools = [
    { title: 'जग्गा क्यालकुलेटर (स्लिप प्रिन्ट)', cat: 'cadastre', icon: Calculator, href: '/tools/land-calculator', badge: 'Popular', desc: 'रोपनी-आना र बिघा-कट्ठा रूपान्तरण, वर्गफिट हिसाब र प्रिन्ट।' },
    { title: 'Preeti ⇄ Nepali Unicode', cat: 'office', icon: ArrowRightLeft, href: '/tools/preeti-to-unicode', badge: 'Utility', desc: 'प्रिती फन्टलाई युनिकोडमा र युनिकोडलाई प्रितीमा बदल्ने।' },
    { title: 'फोटो कम्प्रेसर (<२००KB)', cat: 'pdf', icon: ImageIcon, href: '/tools/image-compressor', badge: 'Loksewa', desc: 'नागरिकता र लालपुर्जा फोटोलाई १००-२०० KB मा झार्ने।' },
    { title: 'तस्विरबाट A4 PDF', cat: 'pdf', icon: FileText, href: '/tools/images-to-pdf', badge: 'Printable', desc: 'कागजातका फोटोहरू मिलाएर क्रमबद्ध A4 PDF बनाउने।' },
    { title: 'मालपोत तथा कर क्यालकुलेटर', cat: 'cadastre', icon: Coins, href: '/tools/malpot-calculator', badge: 'Tax 2081', desc: 'रजिस्ट्रेसन दस्तुर, वाग्मती कर, र महिला छुट हिसाब।' },
    { title: 'PDF Merge & Split', cat: 'pdf', icon: FileStack, href: '/tools/pdf-tools', badge: 'Editor', desc: 'धेरै PDF जोड्ने वा आफूलाई चाहिएको पाना छुट्टाउने।' },
    { title: '७७ जिल्ला नापी निर्देशिका', cat: 'cadastre', icon: Building2, href: '/tools/survey-offices', badge: 'Directory', desc: 'नेपालभरका नापी तथा मालपोत कार्यालयहरूको फोन र इमेल।' },
    { title: 'नेपाली अक्षरेपी (Number to Words)', cat: 'office', icon: Coins, href: '/tools/number-to-words', badge: 'Cheque', desc: 'अंकमा रकम टाइप गर्दा शुद्ध नेपाली शब्द र चेक नमुना।' },
  ];

  const filteredTools = activeCategory === 'all' ? tools : tools.filter(t => t.cat === activeCategory);

  return (
    <div className="space-y-12">
      
      {/* 1. Sleek Minimal Hero */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-slate-200 border border-slate-700/80 text-xs font-mono shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>brbhatta.com &bull; Land Tech Platform v2.0</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
          Precision Land Measurement & <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Digital Cadastre Suite</span>
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
          नेपालको नापी, कित्ताकाट, Preeti Unicode, २००KB फोटो कम्प्रेसर, र A4 PDF सम्पादनको द्रुत र आधुनिक डिजिटल समाधान।
        </p>

        {/* Dual Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#calculator-section"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
          >
            जग्गा क्यालकुलेटर चलाउनुहोस्
          </a>
          <a
            href="/land-solution-demo/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold border border-slate-800 transition-all flex items-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>Land Solution Demo</span>
          </a>
        </div>
      </section>

      {/* 2. Embedded Precision Calculator */}
      <section id="calculator-section" className="scroll-mt-24">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs p-1">
          <LandCalculator />
        </div>
      </section>

      {/* 3. Category Filter & Grid */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              डिजिटल उपकरण सूची (All Utilities)
            </h2>
            <p className="text-xs text-slate-500">आवश्यकता अनुसार क्याटेगोरी छानेर टूल प्रयोग गर्नुहोस्</p>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${activeCategory === 'all' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs' : 'text-slate-600 dark:text-slate-400'}`}
            >
              सबै ({tools.length})
            </button>
            <button
              onClick={() => setActiveCategory('cadastre')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${activeCategory === 'cadastre' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs' : 'text-slate-600 dark:text-slate-400'}`}
            >
              जग्गा/नापी
            </button>
            <button
              onClick={() => setActiveCategory('pdf')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${activeCategory === 'pdf' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs' : 'text-slate-600 dark:text-slate-400'}`}
            >
              PDF स्टुडियो
            </button>
            <button
              onClick={() => setActiveCategory('office')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${activeCategory === 'office' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs' : 'text-slate-600 dark:text-slate-400'}`}
            >
              नेपाली अफिस
            </button>
          </div>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTools.map((t, idx) => {
            const Icon = t.icon;
            return (
              <Link
                key={idx}
                href={t.href}
                className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/80 transition-all flex flex-col justify-between shadow-2xs hover:shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {t.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-2">
                      {t.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <span>Open Tool</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

    </div>
  );
}
