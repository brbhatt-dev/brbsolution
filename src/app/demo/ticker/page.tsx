'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TickerStyleSlide from '@/components/tickers/TickerStyleSlide';
import TickerStyleMarquee from '@/components/tickers/TickerStyleMarquee';
import TickerStyleCapsule from '@/components/tickers/TickerStyleCapsule';
import { defaultTickerItems } from '@/components/tickers/tickerData';
import { 
  CheckCircle2, 
  Sparkles, 
  Flame, 
  Layers, 
  Eye, 
  ArrowRight, 
  Smartphone, 
  Monitor, 
  Check, 
  Settings2,
  Bell,
  Scale,
  Cpu,
  Calculator
} from 'lucide-react';
import Link from 'next/link';

type DemoStyle = 'slide' | 'marquee' | 'capsule';

export default function TickerDemoPage() {
  const [activeStyle, setActiveStyle] = useState<DemoStyle>('slide');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* 1. TOP LIVE DEMO STRIP (Directly above Navbar) */}
      <div className="sticky top-0 z-50">
        {activeStyle === 'slide' && <TickerStyleSlide showDismiss={false} />}
        {activeStyle === 'marquee' && <TickerStyleMarquee showDismiss={false} />}
        {activeStyle === 'capsule' && <TickerStyleCapsule showDismiss={false} />}
        <Navbar />
      </div>

      {/* 2. Interactive Switcher & Control Panel */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full space-y-10">
        
        {/* Header Introduction */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold border border-emerald-300 dark:border-emerald-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>लाइभ डेमो प्रदर्शनी (Interactive Live Demos)</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            शीर्ष ताजा अपडेट टिकर: ३ वटा फरक डिजाइनहरू
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            माथिको Navbar ठ्याक्कै माथि हेर्नुहोस्! तलका बटनहरू थिचेर ३ फरक शैलीको प्रत्यक्ष अनुभव लिनुहोस् र तपाईंलाई सबैभन्दा मन पर्ने एउटा छान्नुहोस्।
          </p>
        </div>

        {/* Style Selector Tabs */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 sm:p-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            
            {/* Option 1 Button */}
            <button
              onClick={() => setActiveStyle('slide')}
              className={`flex flex-col text-left p-4 rounded-xl border transition-all duration-200 relative ${
                activeStyle === 'slide'
                  ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 ring-2 ring-emerald-500/20 shadow-xs'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40'
              }`}
            >
              {activeStyle === 'slide' && (
                <div className="absolute top-3 right-3 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-5 h-5 fill-emerald-100 dark:fill-emerald-950" />
                </div>
              )}
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                <span className="w-6 h-6 rounded-md bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                  १
                </span>
                <span>विकल्प १: Smooth Rotating Slide</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                हरेक ४ सेकेन्डमा एक-एक सूचना बिस्तारै फेरिने। अघि/पछि (Next/Prev) गर्ने बटन र काउन्टर सहितको सफा (Clean & Sleek) डिजाइन।
              </p>
            </button>

            {/* Option 2 Button */}
            <button
              onClick={() => setActiveStyle('marquee')}
              className={`flex flex-col text-left p-4 rounded-xl border transition-all duration-200 relative ${
                activeStyle === 'marquee'
                  ? 'border-rose-500 bg-rose-50/50 dark:bg-rose-950/30 ring-2 ring-rose-500/20 shadow-xs'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40'
              }`}
            >
              {activeStyle === 'marquee' && (
                <div className="absolute top-3 right-3 text-rose-600 dark:text-rose-400">
                  <CheckCircle2 className="w-5 h-5 fill-rose-100 dark:fill-rose-950" />
                </div>
              )}
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                <span className="w-6 h-6 rounded-md bg-rose-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                  २
                </span>
                <span>विकल्प २: Continuous Breaking Marquee</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                टिभी न्युज च्यानल जस्तो बायाँतर्फ निरन्तर बग्ने (Scrolling Ticker)। माउस लैजाँदा रोकिने, आँखामा छिट्टै पर्ने डाइनामिक शैली।
              </p>
            </button>

            {/* Option 3 Button */}
            <button
              onClick={() => setActiveStyle('capsule')}
              className={`flex flex-col text-left p-4 rounded-xl border transition-all duration-200 relative ${
                activeStyle === 'capsule'
                  ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 ring-2 ring-blue-500/20 shadow-xs'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40'
              }`}
            >
              {activeStyle === 'capsule' && (
                <div className="absolute top-3 right-3 text-blue-600 dark:text-blue-400">
                  <CheckCircle2 className="w-5 h-5 fill-blue-100 dark:fill-blue-950" />
                </div>
              )}
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                <span className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                  ३
                </span>
                <span>विकल्प ३: Modern Capsule Pill</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                बीचमा गोलो क्याप्सुल (Pill) आकारमा बस्ने, "हेर्नुहोस् →" एक्सन बटन भएको आधुनिक टेक स्टार्टअप / SaaS शैली।
              </p>
            </button>

          </div>
        </div>

        {/* Direct Side-by-Side Comparison Showcase */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <Layers className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <span>३ वटै शैलीको प्रत्यक्ष तुलना र विशेषताहरू</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 flex flex-col justify-between shadow-2xs">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs">
                    स्टाइल १: Sliding Carousel
                  </span>
                  <span className="text-xs text-slate-500 font-mono">४.५ सेकेन्ड</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                  सफा र प्रोफेसनल (Professional & Non-distracting)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  यसले प्रयोगकर्तालाई अनावश्यक रूपमा विचलित (Distract) गराउँदैन। Apple, Vercel, वा Stripe जस्ता आधुनिक प्रविधि पोर्टलहरूमा यस्तै शैली प्रयोग गरिन्छ।
                </p>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>काउन्टर (१/४) र अघि/पछि बटन भएको</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>माउस लैजाँदा स्वतः रोकिने</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>मोबाइलमा अक्षरहरू काटिँदैन, चिटिक्क बस्छ</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => {
                    setActiveStyle('slide');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>यो शैली माथि हेर्नुहोस्</span>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 flex flex-col justify-between shadow-2xs">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-bold text-xs">
                    स्टाइल २: Breaking Marquee
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Continuous</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                  आँखामा तुरुन्त पर्ने (High Visibility)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  न्युज च्यानल वा मिडिया पोर्टलहरू जस्तै बायाँतर्फ निरन्तर हिँडिरहने भएकोले वेबसाइट खोल्ने जो-कोहीको पनि तुरुन्त ध्यान यसैमा तानिन्छ।
                </p>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>रातो झिमिक-झिमिक हुने 'ताजा अपडेट' ब्याज</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>सबै ४ वटै अपडेट एकैसाथ लगातार बग्ने</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>माउस राख्दा अक्षर रोकिने र क्लिक गर्न मिल्ने</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => {
                    setActiveStyle('marquee');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <Eye className="w-4 h-4" />
                  <span>यो शैली माथि हेर्नुहोस्</span>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 flex flex-col justify-between shadow-2xs">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold text-xs">
                    स्टाइल ३: Capsule Action Pill
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Modern SaaS</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                  आधुनिक टेक क्याप्सुल (Modern & Minimal)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  पूरा चौडाइ कालो नभई बीचमा चिटिक्क परेको क्याप्सुल बक्समा बस्छ र अन्तमा आकर्षक 'हेर्नुहोस् →' बटन हुन्छ।
                </p>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>चिटिक्क परेको गोल (Rounded-full) डिजाइन</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>स्पष्ट 'हेर्नुहोस्' एक्सन बटन</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>वेबसाइटको मुख्य डिजाइनसँग मिल्दोजुल्दो</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => {
                    setActiveStyle('capsule');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <Eye className="w-4 h-4" />
                  <span>यो शैली माथि हेर्नुहोस्</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Content Breakdown: How our items are mixed */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              यसमा समावेश गरिएका सामग्रीहरू (The Mixed Content):
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              तपाईंले भन्नुभए अनुसार आफ्नै नयाँ टुल, नयाँ सफ्टवेयर, कानुन र नापी विभागको ताजा सूचना सबै मिलाइएको छ:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {defaultTickerItems.map((item) => (
              <div 
                key={item.id}
                className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${item.badgeColor}`}>
                    {item.badgeLabel}
                  </span>
                  <span className="text-[10px] text-slate-500">{item.date}</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium line-clamp-2">
                  {item.title}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline pt-1"
                >
                  <span>खुल्ने लिंक: {item.href}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
