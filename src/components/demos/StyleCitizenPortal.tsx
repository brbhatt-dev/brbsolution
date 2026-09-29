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
  Moon,
  X,
  RotateCw,
  ExternalLink,
  SlidersHorizontal
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';

type DemoPlacementOption = 'opt1' | 'opt2' | 'opt3' | 'all';

export default function StyleCitizenPortal() {
  // Placement preview mode for user review
  const [previewMode, setPreviewMode] = useState<DemoPlacementOption>('opt1');
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

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
        title: 'शुभ सन्ध्या! डिजिटल नागरिक सेवामा स्वागत छ',
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
      
      {/* 🛠️ LIVE OPTION SWITCHER TOOLBAR (प्रयोगकर्तालाई छनोट गर्न सहज बनाउन) */}
      <section className="p-3 sm:p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-950/30 border border-amber-500/30 text-slate-900 dark:text-white flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-black text-amber-900 dark:text-amber-300">
                Land Solution वेब डेमो: स्थान छनोट गर्नुहोस्
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300">
                Live Preview
              </span>
            </div>
            <p className="text-[11px] text-amber-800/80 dark:text-amber-400/80">
              बटन थिचेर कुन डिजाइन सबैभन्दा मनपर्छ हेर्नुहोस् र फाइनल छान्नुहोस्:
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => setPreviewMode('opt1')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              previewMode === 'opt1'
                ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-500/40'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            विकल्प १ (ब्यानर दायाँ) ⭐
          </button>
          <button
            type="button"
            onClick={() => setPreviewMode('opt2')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              previewMode === 'opt2'
                ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-500/40'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            विकल्प २ (पात्रो बीचमा)
          </button>
          <button
            type="button"
            onClick={() => setPreviewMode('opt3')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              previewMode === 'opt3'
                ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-500/40'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            विकल्प ३ (टाइल्स माथि)
          </button>
          <button
            type="button"
            onClick={() => setPreviewMode('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              previewMode === 'all'
                ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-500/40'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            सबै तुलना गर्नुहोस्
          </button>
        </div>
      </section>

      {/* 1. TOP WIDE PANORAMIC NEPALI PATRO BAR (लामो र फराकिलो पात्रो & पञ्चाङ्ग) */}
      <section className="w-full">
        <TithiWidget variant="panoramic" />
      </section>

      {/* [विकल्प २] पात्रो र अभिवादनको बीचमा (Slim Alert / Highlight Strip) */}
      {(previewMode === 'opt2' || previewMode === 'all') && (
        <section className="relative overflow-hidden p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white border border-emerald-500/40 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {previewMode === 'all' && (
            <span className="absolute top-1 right-2 text-[9px] font-black uppercase text-amber-400 bg-black/50 px-2 py-0.5 rounded">
              विकल्प २: पात्रो र ब्यानरको बीचमा
            </span>
          )}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/40 p-1.5 flex items-center justify-center shrink-0">
              <img src="/logo.png" alt="Land Solution" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-black text-emerald-300">
                  Land Solution (Live Web Demo):
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">
                  डाउनलोड नगरी चल्ने
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                कित्ताकाट, नापी रेखांकन र सम्पूर्ण जग्गा हिसाब सिधै आफ्नो ब्राउजरमै खोलेर परीक्षण गर्नुहोस्।
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowDemoModal(true)}
            className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shrink-0 shadow-md transition-all active:scale-98 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-slate-950" />
            <span>लाइभ डेमो खोल्नुहोस् ▶</span>
          </button>
        </section>
      )}

      {/* 2. DYNAMIC SMART TIME-AWARE GREETING CARD (अटो-डायनामिक अभिवादन & सन्देश) */}
      <section className={`p-5 sm:p-7 rounded-3xl bg-gradient-to-r ${greeting.gradient} text-white shadow-md transition-all duration-500 border border-white/10 relative overflow-hidden`}>
        {previewMode === 'all' && (
          <span className="absolute top-2 right-3 text-[9px] font-black uppercase text-amber-300 bg-black/40 px-2 py-0.5 rounded">
            विकल्प १: ब्यानरको दायाँ भागमा
          </span>
        )}

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">
          {/* Left Greeting Column */}
          <div className="space-y-2 max-w-2xl">
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

          {/* [विकल्प १] Right Side Land Solution CTA Card (ब्यानरको दायाँ खाली भाग भर्ने) */}
          {(previewMode === 'opt1' || previewMode === 'all') && (
            <div className="shrink-0 w-full lg:w-80 xl:w-96 rounded-2xl bg-white/15 dark:bg-black/40 backdrop-blur-md p-4 sm:p-5 border border-white/25 shadow-lg flex flex-col justify-between gap-3 text-white">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-white/90 p-1 flex items-center justify-center shrink-0 shadow-xs">
                    <img src="/logo.png" alt="Land Solution" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-white leading-tight">Land Solution</h3>
                    <p className="text-[10px] text-emerald-200">डिजिटल नापी सफ्टवेयर</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-400/25 text-emerald-200 text-[10px] font-bold border border-emerald-300/40 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Web Demo
                </span>
              </div>

              <p className="text-xs text-emerald-100/90 leading-snug">
                कुनै एप इन्स्टल नगरी सिधै ल्यापटप वा मोबाइल ब्राउजरमै चलाएर परीक्षण गर्नुहोस्।
              </p>

              <button
                type="button"
                onClick={() => setShowDemoModal(true)}
                className="w-full py-2.5 px-4 rounded-xl bg-white text-slate-900 hover:bg-emerald-50 text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer group"
              >
                <Play className="w-3.5 h-3.5 fill-emerald-700 text-emerald-700 group-hover:scale-110 transition-transform" />
                <span>लाइभ वेब डेमो चलाउनुहोस् ▶</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* [विकल्प ३] Quick Tiles भन्दा ठिक माथि (Feature Strip) */}
      {(previewMode === 'opt3' || previewMode === 'all') && (
        <section className="relative overflow-hidden p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-500/40 dark:border-emerald-500/40 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          {previewMode === 'all' && (
            <span className="absolute top-1 right-2 text-[9px] font-black uppercase text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">
              विकल्प ३: टाइल्सभन्दा ठिक माथि
            </span>
          )}
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 p-2 flex items-center justify-center shrink-0">
              <img src="/logo.png" alt="Land Solution" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-black text-slate-900 dark:text-white">
                  Land Solution (ल्याण्ड सोलुसन वेब डेमो)
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                  ⚡ ब्राउजरमै चल्ने
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                फिल्ड नापी, बहु-कित्ता हिसाब, नक्सा रेखांकन र रूपान्तरण गर्न सक्ने आधुनिक नापी प्रणालीको प्रत्यक्ष वेब अनुभव।
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setShowDemoModal(true)}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black flex items-center gap-2 shadow-sm transition-all active:scale-98 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>लाइभ वेब डेमो चलाउनुहोस् ▶</span>
            </button>
          </div>
        </section>
      )}

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

      {/* 4. MAIN PRECISION LAND CALCULATOR (Sleek Compact Mode) */}
      <section id="land-calc-section" className="scroll-mt-24 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-600" />
              <span>जग्गा नापजाँच तथा रूपान्तरण क्यालकुलेटर</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              रोपनी-आना, बिघा-कट्ठा, वर्गफिट, वर्गमिटर तथा आधिकारिक स्लिप प्रिन्ट
            </p>
          </div>
          <Link
            href="/tools/land-calculator"
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 shrink-0"
          >
            <span>पूरा पेज खोल्नुहोस्</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs p-1">
          <LandCalculator compact={true} />
        </div>
      </section>

      {/* 5. COMPACT MOBILE APPLICATIONS (Option 2: Action-Oriented) */}
      <section className="space-y-3 pt-1">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span>दैनिक कामलाई सजिलो बनाउने हाम्रा मोबाइल एपहरू</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              फिल्ड नापजाँच, कित्ताकाट तथा बचत हिसाबका लागि निर्मित आधिकारिक एन्ड्रोइड सफ्टवेयर
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          
          {/* App 1: Land Solution (Compact & Action-Oriented) */}
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
                  फिल्डमा जग्गा नाप्ने, कित्ताकाट गर्ने र नक्सा रेखांकन गर्ने सजिलो एप
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowDemoModal(true)}
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shrink-0 transition-colors shadow-2xs cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span className="hidden sm:inline">Web Demo</span>
            </button>
          </div>

          {/* App 2: Hamro Kosh (Compact & Action-Oriented) */}
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
                  सहकारी, समूह तथा व्यक्तिगत बचत, ऋण र हिसाब-किताबको डिजिटल समाधान
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

      {/* 🚀 FULL-SCREEN INTERACTIVE LAND SOLUTION DEMO MODAL */}
      {showDemoModal && (
        <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex flex-col p-2 sm:p-4">
          <div className="relative w-full h-full max-w-6xl mx-auto bg-slate-950 rounded-2xl overflow-hidden flex flex-col border border-slate-800 shadow-2xl">
            {/* Top Modal Navigation Bar */}
            <div className="h-14 sm:h-16 bg-slate-900 text-white px-3 sm:px-6 flex items-center justify-between border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white p-1 shrink-0 flex items-center justify-center shadow-xs">
                  <img src="/logo.png" alt="Land Solution" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-xs sm:text-base text-white block leading-tight">
                      Land Solution (Live Web Demo)
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 hidden sm:inline">
                      ⚡ Browser Interactive
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-emerald-400">
                    डाउनलोड नगरी सिधै ब्राउजरमा चल्ने आधिकारिक नापी सफ्टवेयर
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIframeKey((k) => k + 1)}
                  title="पुनः लोड गर्नुहोस् (Reload)"
                  className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCw className="w-4 h-4" />
                  <span className="hidden sm:inline">Reload</span>
                </button>
                <a
                  href="/land-solution-demo/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="नयाँ ट्याबमा पूरै स्क्रिन खोल्नुहोस्"
                  className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">New Tab</span>
                </a>
                <button
                  type="button"
                  onClick={() => setShowDemoModal(false)}
                  title="बन्द गर्नुहोस्"
                  className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white transition-colors flex items-center gap-1.5 font-bold text-xs cursor-pointer shadow-xs"
                >
                  <X className="w-4 h-4" />
                  <span>बन्द</span>
                </button>
              </div>
            </div>

            {/* Embedded Iframe */}
            <div className="flex-1 w-full h-full bg-slate-950 relative">
              <iframe
                key={iframeKey}
                src="/land-solution-demo/index.html"
                title="Land Solution Interactive Live Demo"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
