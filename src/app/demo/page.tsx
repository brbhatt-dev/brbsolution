'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyleSwitcherBar, { DemoStyleId } from '@/components/demos/StyleSwitcherBar';
import StyleDoSSurveyDept from '@/components/demos/StyleDoSSurveyDept';
import StyleDOLRMLandArchive from '@/components/demos/StyleDOLRMLandArchive';
import StyleNagarikAppOfficial from '@/components/demos/StyleNagarikAppOfficial';
import StyleMinistryMolcpa from '@/components/demos/StyleMinistryMolcpa';
import StyleDoITUnifiedPortal from '@/components/demos/StyleDoITUnifiedPortal';
import StylePerplexitySearch from '@/components/demos/StylePerplexitySearch';
import StyleBloombergTerminal from '@/components/demos/StyleBloombergTerminal';
import StyleGovUkClean from '@/components/demos/StyleGovUkClean';
import StyleLinearEnterprise from '@/components/demos/StyleLinearEnterprise';
import StyleMobileSuperApp from '@/components/demos/StyleMobileSuperApp';
import StyleVisualParcel from '@/components/demos/StyleVisualParcel';
import StyleRaycastOS from '@/components/demos/StyleRaycastOS';
import StyleNeoBrutalist from '@/components/demos/StyleNeoBrutalist';
import StyleCyberSpatial from '@/components/demos/StyleCyberSpatial';
import StyleModernTech from '@/components/demos/StyleModernTech';
import StyleCitizenPortal from '@/components/demos/StyleCitizenPortal';
import StyleEngineeringStudio from '@/components/demos/StyleEngineeringStudio';
import StyleBentoGrid from '@/components/demos/StyleBentoGrid';
import StyleGovPortal from '@/components/demos/StyleGovPortal';
import StyleToolWorkspace from '@/components/demos/StyleToolWorkspace';
import StyleFintechLuxury from '@/components/demos/StyleFintechLuxury';
import StyleEditorialMagazine from '@/components/demos/StyleEditorialMagazine';
import { Sparkles, MessageSquare, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function DemoShowroomPage() {
  const [currentStyle, setCurrentStyle] = useState<DemoStyleId>('style18');

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
        <div className="p-4 sm:p-5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-2.5">
            <Building2 className="w-5 h-5 text-red-700 shrink-0" />
            <span>
              <strong>नेपालका आधिकारिक सरकारी वेबसाइट ढाँचाहरू (Official Gov Models):</strong> विशेष गरी <strong>Style १८ (नापी विभाग)</strong>, <strong>Style १९ (मालपोत विभाग)</strong>, <strong>Style २० (नागरिक एप)</strong>, र <strong>Style २१ (मन्त्रालय)</strong> जाँच गर्नुहोस्।
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 shrink-0 text-xs font-bold text-red-700 dark:text-red-400">
            <span className="text-slate-500 mr-1">सरकारी मोडलहरू:</span>
            {[18, 19, 20, 21, 22, 13, 14, 15, 16, 17, 9, 10, 11, 12].map((num) => (
              <Link 
                key={num} 
                href={`/demo/${num}`} 
                className={`px-2 py-0.5 rounded transition ${
                  num >= 18 
                    ? 'bg-red-700 text-white font-black' 
                    : num >= 13
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                Style {num}
              </Link>
            ))}
          </div>
        </div>

        {/* Dynamic Style Container */}
        <div className="transition-all duration-300">
          {currentStyle === 'style18' && <StyleDoSSurveyDept />}
          {currentStyle === 'style19' && <StyleDOLRMLandArchive />}
          {currentStyle === 'style20' && <StyleNagarikAppOfficial />}
          {currentStyle === 'style21' && <StyleMinistryMolcpa />}
          {currentStyle === 'style22' && <StyleDoITUnifiedPortal />}
          {currentStyle === 'style13' && <StylePerplexitySearch />}
          {currentStyle === 'style14' && <StyleBloombergTerminal />}
          {currentStyle === 'style15' && <StyleGovUkClean />}
          {currentStyle === 'style16' && <StyleLinearEnterprise />}
          {currentStyle === 'style17' && <StyleMobileSuperApp />}
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
          <div className="w-12 h-12 rounded-2xl bg-red-600/30 text-red-400 flex items-center justify-center mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-black">
              तपाईंलाई कुन सरकारी वा आधुनिक ढाँचा सबैभन्दा बढी मन पर्यो?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
              विशेष गरी <strong>Style १८</strong> (नापी विभाग - dos.gov.np), <strong>Style १९</strong> (मालपोत विभाग - dolrm.gov.np), <strong>Style २०</strong> (नागरिक एप), वा <strong>Style १३</strong> (Perplexity AI Search) मध्ये आफ्नो मनपर्ने नम्बर बताउनुहोस्, हामी वेबसाइटलाई त्यसै अनुसार स्थायी बनाइदिनेछौँ!
            </p>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
