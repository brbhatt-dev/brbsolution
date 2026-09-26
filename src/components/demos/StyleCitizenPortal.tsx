'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  Sparkles, 
  ArrowRightLeft, 
  ImageIcon, 
  FileText, 
  Building2, 
  Coins, 
  Play, 
  ChevronRight, 
  Calendar, 
  Split, 
  ScrollText, 
  Wallet, 
  Smartphone, 
  ArrowRight,
  Sun,
  Moon
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';

export default function StyleCitizenPortal() {
  // Dynamic Time-Aware Greeting (Option 4: Smart Auto-Dynamic Greeting)
  const [greeting, setGreeting] = useState({
    badge: 'नेपाल डिजिटल नागरिक सेवा',
    title: 'नमस्ते तथा स्वागत छ!',
    sub: 'जग्गाको क्षेत्रफल हिसाब (रोपनी/बिघा), मालपोत दस्तुर, कित्ताकाट नियम वा सरकारी फारमका टूल्स तुरुन्तै प्रयोग गर्नुहोस्।',
    icon: Sun,
    gradient: 'from-emerald-700 via-teal-700 to-indigo-800'
  });

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting({
        badge: '☀️ शुभ प्रभात (Good Morning)',
        title: 'शुभ प्रभात! आजको दिन सुखद रहोस्',
        sub: 'जग्गाको क्षेत्रफल हिसाब (रोपनी/बिघा), मालपोत दस्तुर, कित्ताकाट नियम वा सरकारी फारमका टूल्स तुरुन्तै प्रयोग गर्नुहोस्।',
        icon: Sun,
        gradient: 'from-amber-600 via-teal-700 to-emerald-800'
      });
    } else if (hour >= 12 && hour < 17) {
      setGreeting({
        badge: '🌤️ शुभ दिन (Good Afternoon)',
        title: 'नमस्ते तथा शुभ दिन! आज कुन सेवा वा टूल आवश्यक छ?',
        sub: 'जग्गाको नापजाँच, कित्ताकाट मापदण्ड, Preeti Unicode टाइपिङ वा PDF बनाउने काम सजिलै गर्नुहोस्।',
        icon: Sun,
        gradient: 'from-emerald-700 via-teal-700 to-indigo-800'
      });
    } else {
      setGreeting({
        badge: '🌙 शुभ सन्ध्या (Good Evening)',
        title: 'शुभ सन्ध्या! BR Bhatta डिजिटल नागरिक सेवामा स्वागत छ',
        sub: 'जग्गाको हिसाब, लिखत तमसुक, ७७ जिल्ला नापी निर्देशिका र प्राविधिक टूल्स एकै ठाउँबाट निःशुल्क प्रयोग गर्नुहोस्।',
        icon: Moon,
        gradient: 'from-indigo-900 via-slate-900 to-teal-950'
      });
    }
  }, []);

  // Primary 8 Big Vibrant Quick Tiles (HamroPatro / Nagarik App style)
  const quickTiles = [
    { title: 'जग्गा क्यालकुलेटर', sub: 'रोपनी-बिघा-वर्गमिटर हिसाब', icon: Calculator, color: 'bg-emerald-500 text-white', href: '#land-calc-section' },
    { title: 'फोटो कम्प्रेसर', sub: 'सरकारी फारमका लागि २००KB', icon: ImageIcon, color: 'bg-rose-500 text-white', href: '/tools/image-compressor' },
    { title: 'Preeti ⇄ Unicode', sub: 'नेपाली टाइपिङ कन्भर्टर', icon: ArrowRightLeft, color: 'bg-teal-500 text-white', href: '/tools/preeti-to-unicode' },
    { title: 'तस्विरबाट A4 PDF', sub: 'लालपुर्जा / नक्सा डकुमेन्ट', icon: FileText, color: 'bg-indigo-500 text-white', href: '/tools/images-to-pdf' },
    { title: 'मालपोत तथा कर', sub: 'रजिस्ट्रेसन & CGT दस्तुर', icon: Coins, color: 'bg-amber-500 text-white', href: '/tools/malpot-calculator' },
    { title: '७७ जिल्ला नापी', sub: 'कार्यालय फोन, इमेल र ठेगाना', icon: Building2, color: 'bg-sky-500 text-white', href: '/tools/survey-offices' },
    { title: 'जग्गा बैना कागज', sub: 'A4 कानुनी लिखत तमसुक', icon: ScrollText, color: 'bg-orange-500 text-white', href: '/tools/legal-templates' },
    { title: 'कित्ताकाट मापदण्ड', sub: '१३० वर्गमिटर नियम चेकर', icon: Split, color: 'bg-purple-500 text-white', href: '/tools/kitta-kat-checker' },
  ];

  const GIcon = greeting.icon;

  return (
    <div className="space-y-6 sm:space-y-8">
      
      {/* 1. TOP WIDE PANORAMIC NEPALI PATRO BAR (लामो र फराकिलो पात्रो & पञ्चाङ्ग) */}
      <section className="w-full">
        <TithiWidget variant="panoramic" />
      </section>

      {/* 2. DYNAMIC SMART TIME-AWARE GREETING CARD (अटो-डायनामिक अभिवादन & सन्देश) */}
      <section className={`p-5 sm:p-7 rounded-3xl bg-gradient-to-r ${greeting.gradient} text-white shadow-md space-y-3 transition-all duration-500 border border-white/10`}>
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold text-emerald-200">
            <GIcon className="w-3.5 h-3.5" />
            <span>{greeting.badge}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
            {greeting.title}
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            {greeting.sub}
          </p>
        </div>
      </section>

      {/* 3. BIG VIBRANT APP TOUCH-TILES GRID (8 Main Highlights in 4x2 Grid) */}
      <section className="space-y-3.5">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>प्रमुख अनलाइन सेवाहरू (Quick Access Tiles)</span>
          </h2>
          <Link 
            href="/tools" 
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span>सबै १५+ टूल्स हेर्नुहोस्</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* 8 Primary Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {quickTiles.map((tile, idx) => {
            const Icon = tile.icon;
            return (
              <Link
                key={idx}
                href={tile.href}
                className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-2.5 group active:scale-98"
              >
                <div className={`w-11 h-11 rounded-xl ${tile.color} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors leading-tight">
                    {tile.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                    {tile.sub}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 4. MAIN PRECISION LAND CALCULATOR (Primary Feature Centerpiece) */}
      <section id="land-calc-section" className="scroll-mt-24 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-600" />
              <span>जग्गा नापजाँच तथा रूपान्तरण क्यालकुलेटर</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              रोपनी-आना-पैसा-दाम र बिघा-कट्ठा-धुर-कनुवा हिसाब र आधिकारिक स्लिप प्रिन्ट
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 shrink-0 hidden sm:inline-block">
            स्लिप प्रिन्ट उपलब्ध
          </span>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs p-1">
          <LandCalculator />
        </div>
      </section>

      {/* 5. COMPACT MOBILE APPLICATIONS (Land Solution & Hamro Kosh) */}
      <section className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-emerald-600" />
            <span>हाम्रा आधिकारिक मोबाइल सफ्टवेयरहरू</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          
          {/* App 1: Land Solution (Compact) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white border border-emerald-800/40 shadow-xs flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 p-2 flex items-center justify-center shrink-0">
                <img src="/logo.png" alt="Land Solution" className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-black truncate">Land Solution</h3>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 shrink-0">
                    नापी एप
                  </span>
                </div>
                <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                  फिल्ड नापजाँच, कित्ताकाट, चारकिल्ला र नक्सा रेखांकन
                </p>
              </div>
            </div>

            <a
              href="/land-solution-demo/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shrink-0 transition-colors shadow-2xs"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span className="hidden sm:inline">Web Demo</span>
            </a>
          </div>

          {/* App 2: Hamro Kosh (Compact) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white border border-indigo-800/40 shadow-xs flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400 shrink-0">
                <Wallet className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-black truncate">हाम्रो कोष (Hamro Kosh)</h3>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 shrink-0">
                    बचत सफ्टवेयर
                  </span>
                </div>
                <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                  सहकारी, समूह तथा व्यक्तिगत बचत, ऋण र ब्याज हिसाब
                </p>
              </div>
            </div>

            <Link
              href="/#hamro-kosh"
              className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 shrink-0 transition-colors shadow-2xs"
            >
              <span>विवरण</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
