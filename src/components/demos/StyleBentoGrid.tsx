'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  ArrowRight, 
  Sparkles, 
  ArrowRightLeft, 
  ImageIcon, 
  FileText, 
  Building2, 
  Coins, 
  Play, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  FileStack,
  Split,
  QrCode,
  ScrollText,
  Smartphone
} from 'lucide-react';
import LandCalculator from '../LandCalculator';

export default function StyleBentoGrid() {
  return (
    <div className="space-y-8">
      
      {/* 1. Bento Grid Header Statement */}
      <section className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-[11px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
          The Modern Land Tech Experience
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          सफा, सरल र शक्तिशाली <br className="hidden sm:inline" />
          <span className="text-emerald-600 dark:text-emerald-400">डिजिटल नापी पोर्टल</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
          नेपालका लागि विशेष रूपमा तयार पारिएको जग्गा नापजाँच, PDF स्टुडियो र अफिसियल टूल्स हब।
        </p>
      </section>

      {/* 2. Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* Bento Item 1: Large Flagship Land Calculator (Spans 8 cols) */}
        <div className="md:col-span-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">जग्गा नापजाँच क्यालकुलेटर</h3>
                <p className="text-[10px] text-slate-400">Ropani-Aana & Bigha-Katha Precision Engine</p>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
              A4 स्लिप प्रिन्ट
            </span>
          </div>

          <LandCalculator />
        </div>

        {/* Bento Column 2 (Spans 4 cols): Stacked Utility Cards */}
        <div className="md:col-span-4 space-y-5">
          
          {/* Card A: 200KB Image Compressor */}
          <Link
            href="/tools/image-compressor"
            className="p-6 rounded-3xl bg-gradient-to-br from-rose-50 to-orange-50 dark:from-slate-900 dark:to-slate-850 border border-rose-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group block"
          >
            <div className="space-y-2">
              <div className="w-11 h-11 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <ImageIcon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-600 block">
                लोकसेवा तथा मालपोत
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-rose-600 transition-colors">
                फोटो कम्प्रेसर (&lt;२००KB)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                नागरिकता र लालपुर्जा फोटोलाई ५ MB बाट गुणस्तर नघटाई १००-२०० KB मा झार्ने।
              </p>
            </div>
            <div className="flex items-center justify-between text-xs font-bold text-rose-600 pt-2 border-t border-rose-200/60 dark:border-slate-800">
              <span>कम्प्रेस गर्नुहोस्</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card B: Preeti to Unicode */}
          <Link
            href="/tools/preeti-to-unicode"
            className="p-6 rounded-3xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-slate-850 border border-teal-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group block"
          >
            <div className="space-y-2">
              <div className="w-11 h-11 rounded-2xl bg-teal-500 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <ArrowRightLeft className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-600 block">
                दैनिक नेपाली टाइपिङ
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                Preeti ⇄ Nepali Unicode
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                सरकारी ढड्डा वा लिखतको प्रिती फन्टलाई युनिकोडमा तत्काल बदल्ने र कपी गर्ने।
              </p>
            </div>
            <div className="flex items-center justify-between text-xs font-bold text-teal-600 pt-2 border-t border-teal-200/60 dark:border-slate-800">
              <span>कन्भर्ट गर्नुहोस्</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>

      </div>

      {/* 3. Bottom Bento Row: 3 Equal Width Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Card 1: Official Land Solution App */}
        <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-sm flex flex-col justify-between space-y-4 group">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white p-1 shrink-0">
              <img src="/logo.png" alt="Land Solution" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                मोबाइल सफ्टवेयर
              </span>
              <h3 className="text-lg font-black text-white mt-0.5">Land Solution App</h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                नेपालको १ नं नापी तथा कित्ताकाट मोबाइल एप। फिल्डमा अफलाइन पनि चलाउन मिल्ने।
              </p>
            </div>
          </div>

          <a
            href="/land-solution-demo/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>लाइभ वेब डेमो चलाउनुहोस्</span>
            <ExternalLink className="w-3 h-3 opacity-75" />
          </a>
        </div>

        {/* Card 2: 77 District Directory */}
        <Link
          href="/tools/survey-offices"
          className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group block"
        >
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/70 text-sky-600 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider block">
              ७७ जिल्ला डाइरेक्टरी
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
              नापी तथा मालपोत निर्देशिका
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              नेपालभरका नापी तथा मालपोत कार्यालयहरूको फोन, इमेल र ठेगाना खोज्ने हब।
            </p>
          </div>
          <div className="flex items-center justify-between text-xs font-bold text-sky-600 pt-2 border-t border-slate-100 dark:border-slate-800">
            <span>कार्यालय खोज्नुहोस्</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Card 3: Images to A4 PDF */}
        <Link
          href="/tools/images-to-pdf"
          className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group block"
        >
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">
              डकुमेन्ट स्टुडियो
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
              तस्विरबाट A4 PDF जेनेरेटर
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              लालपुर्जा वा नक्साका फोटोहरू मिलाएर क्रमबद्ध A4 साइजको आधिकारिक PDF बनाउने।
            </p>
          </div>
          <div className="flex items-center justify-between text-xs font-bold text-indigo-600 pt-2 border-t border-slate-100 dark:border-slate-800">
            <span>PDF बनाउनुहोस्</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

      </div>

    </div>
  );
}
