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
import StyleVisualParcel from '@/components/demos/StyleVisualParcel';
import StyleRaycastOS from '@/components/demos/StyleRaycastOS';
import StyleNeoBrutalist from '@/components/demos/StyleNeoBrutalist';
import StyleCyberSpatial from '@/components/demos/StyleCyberSpatial';
import { Sparkles, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function DemoShowroomPage() {
  const [currentStyle, setCurrentStyle] = useState<DemoStyleId>('style9');

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
        
        {/* Style Introduction Notice with direct links */}
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              <strong>१२ वटा युनिक डिजाइन डेमोहरू उपलब्ध:</strong> माथिका बटनहरूबाट १-क्लिकमै डिजाइन बदल्नुहोस्। विशेष गरी <strong>Style ९, १०, ११, र १२</strong> एकदमै फरक र अनौठो शैलीमा बनाइएका छन्।
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 shrink-0 text-xs font-bold text-emerald-700 dark:text-emerald-400">
            <span className="text-slate-500 mr-1">प्रत्यक्ष लिङ्कहरू:</span>
            {[9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <Link 
                key={num} 
                href={`/demo/${num}`} 
                className={`px-2 py-0.5 rounded transition ${
                  num >= 9 
                    ? 'bg-emerald-500 text-black font-black' 
                    : 'bg-emerald-100 dark:bg-emerald-900/60 hover:bg-emerald-200 text-emerald-800 dark:text-emerald-300'
                }`}
              >
                Style {num}
              </Link>
            ))}
          </div>
        </div>

        {/* Dynamic Style Container */}
        <div className="transition-all duration-300">
          {currentStyle === 'style9' && <StyleVisualParcel />}
          {currentStyle === 'style10' && <StyleRaycastOS />}
          {currentStyle === 'style11' && <StyleNeoBrutalist />}
          {currentStyle === 'style12' && <StyleCyberSpatial />}
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
              तपाईंलाई यी मध्ये कुन डिजाइन सबैभन्दा उत्कृष्ट र मनपर्ने लाग्यो?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
              <strong>१ देखि १२</strong> सम्मको नम्बर (जस्तै: <strong>Style ९</strong> - Visual Parcel Map, <strong>Style १०</strong> - Raycast OS, <strong>Style ११</strong> - Neo Brutalist, वा <strong>Style १२</strong> - Cyber HUD) रोज्नुहोस्। तपाईंले रोज्नुभएको डिजाइन अनुसार हामी मुख्य वेबसाइटलाई स्थायी बनाउनेछौँ!
            </p>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
