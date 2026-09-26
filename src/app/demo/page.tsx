'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyleSwitcherBar, { DemoStyleId } from '@/components/demos/StyleSwitcherBar';
import StyleModernTech from '@/components/demos/StyleModernTech';
import StyleCitizenPortal from '@/components/demos/StyleCitizenPortal';
import StyleEngineeringStudio from '@/components/demos/StyleEngineeringStudio';
import StyleBentoGrid from '@/components/demos/StyleBentoGrid';
import StyleGovPortal from '@/components/demos/StyleGovPortal';
import StyleToolWorkspace from '@/components/demos/StyleToolWorkspace';
import StyleFintechLuxury from '@/components/demos/StyleFintechLuxury';
import StyleEditorialMagazine from '@/components/demos/StyleEditorialMagazine';
import { Sparkles, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function DemoShowroomPage() {
  const [currentStyle, setCurrentStyle] = useState<DemoStyleId>('style1');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      {/* Floating Interactive Live Switcher Bar */}
      <StyleSwitcherBar
        currentStyle={currentStyle}
        onChangeStyle={(style) => setCurrentStyle(style)}
      />

      {/* Active Demo Canvas */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full space-y-12">
        
        {/* Style Introduction Notice with direct links to all 8 styles */}
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              <strong>८ वटा लाइभ डिजाइन डेमो उपलब्ध:</strong> माथिका बटनहरूबाट सिधै १-क्लिकमा डिजाइन परिवर्तन गरी परीक्षण गर्नुहोस्। जुन मन पर्छ च्याटमा नम्बर भन्नुहोस्।
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0 text-xs font-bold text-emerald-700 dark:text-emerald-400">
            <span className="text-slate-500">प्रत्यक्ष लिङ्कहरू:</span>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <Link 
                key={num} 
                href={`/demo/${num}`} 
                className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 hover:bg-emerald-200 text-emerald-800 dark:text-emerald-300 transition"
              >
                Style {num}
              </Link>
            ))}
          </div>
        </div>

        {/* Dynamic Style Container */}
        <div className="transition-all duration-300">
          {currentStyle === 'style1' && <StyleModernTech />}
          {currentStyle === 'style2' && <StyleCitizenPortal />}
          {currentStyle === 'style3' && <StyleEngineeringStudio />}
          {currentStyle === 'style4' && <StyleBentoGrid />}
          {currentStyle === 'style5' && <StyleGovPortal />}
          {currentStyle === 'style6' && <StyleToolWorkspace />}
          {currentStyle === 'style7' && <StyleFintechLuxury />}
          {currentStyle === 'style8' && <StyleEditorialMagazine />}
        </div>

        {/* Decision / Feedback Box at Bottom */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-md text-center max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-black">
              तपाईंलाई यी ८ डिजाइनहरू मध्ये कुन सबैभन्दा उत्कृष्ट लाग्यो?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
              <strong>१ देखि ८</strong> सम्मको कुनै पनि नम्बर रोज्नुहोस्। तपाईंले रोज्नुभएको डिजाइन अनुसार हामी मुख्य वेबसाइट (brbhatta.com) को पूरा होमपेज तुरुन्तै परिवर्तन गरिदिनेछौँ!
            </p>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
