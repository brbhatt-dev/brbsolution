'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyleSwitcherBar, { DemoStyleId } from '@/components/demos/StyleSwitcherBar';
import StyleModernTech from '@/components/demos/StyleModernTech';
import StyleCitizenPortal from '@/components/demos/StyleCitizenPortal';
import StyleEngineeringStudio from '@/components/demos/StyleEngineeringStudio';
import StyleBentoGrid from '@/components/demos/StyleBentoGrid';
import { Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
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
        
        {/* Style Introduction Notice */}
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              <strong>लाइभ डेमो मोड सक्रिय छ:</strong> माथिका ४ वटा बटन थिचेर डिजाइन परिवर्तन गर्नुहोस्। जुन मन पर्छ, च्याटमा <strong>"१", "२", "३" वा "४"</strong> भन्नुहोस्।
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0 text-xs font-bold text-emerald-700 dark:text-emerald-400">
            <span>अलग अलग लिङ्क:</span>
            <Link href="/demo/1" className="underline hover:text-emerald-600">Style 1</Link> &bull;
            <Link href="/demo/2" className="underline hover:text-emerald-600">Style 2</Link> &bull;
            <Link href="/demo/3" className="underline hover:text-emerald-600">Style 3</Link> &bull;
            <Link href="/demo/4" className="underline hover:text-emerald-600">Style 4</Link>
          </div>
        </div>

        {/* Dynamic Style Container */}
        <div className="transition-all duration-300">
          {currentStyle === 'style1' && <StyleModernTech />}
          {currentStyle === 'style2' && <StyleCitizenPortal />}
          {currentStyle === 'style3' && <StyleEngineeringStudio />}
          {currentStyle === 'style4' && <StyleBentoGrid />}
        </div>

        {/* Decision / Feedback Box at Bottom */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-md text-center max-w-2xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-black">
              तपाईंलाई कुन डिजाइन सबैभन्दा बढी मन पर्‍यो?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong>Style १ (Modern Tech)</strong>, <strong>Style २ (HamroPatro / Nagarik App)</strong>, <strong>Style ३ (Engineering Studio)</strong>, वा <strong>Style ४ (Apple Bento)</strong> — आफूलाई मन परेको नम्बर च्याटमा लेख्नुहोस्, हामी सम्पूर्ण वेबसाइटलाई त्यसै अनुसार स्थायी बनाइदिनेछौँ!
            </p>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
