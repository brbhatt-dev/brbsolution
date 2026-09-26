'use client';

import React from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  ArrowRight, 
  Compass, 
  Calculator, 
  Layers, 
  Scale, 
  Feather,
  Info
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';
import UniversalSmartSearch from './UniversalSmartSearch';

export default function StyleArchitecturalAtlas() {
  const mathematicalAxioms = [
    { system: 'पहाडी प्रणाली (Pahadi System)', base: '१ रोपनी = १६ आना', detail: '१ आना = ४ पैसा = १६ दाम (३४२.२५ वर्गफिट)', area: '५,४७६.०० SQ.FT' },
    { system: 'तराई प्रणाली (Terai System)', base: '१ बिघा = २० कट्ठा', detail: '१ कट्ठा = २० धुर = ३,६४५ वर्गफिट (१ बिघा = ७२,९०० sq.ft)', area: '७२,९००.०० SQ.FT' },
    { system: 'अन्तर्राष्ट्रिय मापदण्ड (Metric)', base: '१ हेक्टर = १९.६६ रोपनी', detail: '१ वर्गमिटर = १०.७६३९ वर्गफिट', area: '१०,०००.०० SQ.METER' },
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto font-serif text-[#2D2A26] dark:text-[#EDE8E1]">
      
      {/* 1. Stripe Press Architectural Monograph Header */}
      <header className="border-b border-[#D8D2C6] dark:border-[#332F2A] pb-8 pt-4 space-y-4">
        
        <div className="flex items-center justify-between text-xs font-mono tracking-widest uppercase text-stone-500 border-b border-[#E8E2D6] dark:border-[#262320] pb-2">
          <span>आधिकारिक भू-मापन एटलस (CADASTRAL ATLAS OF NEPAL)</span>
          <span>संस्मरण २०२६</span>
        </div>

        <div className="py-2 space-y-2">
          <h1 className="text-3xl sm:text-6xl font-normal tracking-tight leading-tight">
            नेपाल भू-मापन तथा <br />
            <span className="italic font-light text-stone-600 dark:text-stone-300">
              क्षेत्रफल वास्तुशिल्प एटलस
            </span>
          </h1>
          <p className="text-xs sm:text-sm font-sans text-stone-600 dark:text-stone-400 max-w-xl">
            नेपालको पहाडी र तराई भूमि नाप प्रणालीबीचको ऐतिहासिक, गणितीय, र कानुनी सम्बन्धको विशुद्ध डिजिटल सङ्ग्रह।
          </p>
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="flex-1 max-w-xl font-sans">
            <UniversalSmartSearch placeholder="एटलस खोजी: ४ आना, कित्ताकाट नियम, मालपोत कर..." />
          </div>
          <div className="hidden sm:block">
            <TithiWidget />
          </div>
        </div>

      </header>

      {/* 2. The Mathematical Axioms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
        {mathematicalAxioms.map((ax, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white dark:bg-[#1A1815] border border-[#E0D9CC] dark:border-[#2E2A24] space-y-2 shadow-xs"
          >
            <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500">
              {ax.system}
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              {ax.base}
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              {ax.detail}
            </p>
            <div className="pt-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
              {ax.area}
            </div>
          </div>
        ))}
      </div>

      {/* 3. The Refined Precision Engine */}
      <section className="bg-white dark:bg-[#1A1815] rounded-3xl border border-[#D8D2C6] dark:border-[#332F2A] p-6 sm:p-10 shadow-sm space-y-6 font-sans">
        <div className="flex items-center justify-between border-b border-[#E8E2D6] dark:border-[#262320] pb-4">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl text-stone-900 dark:text-stone-100">
              सटीक डिजिटल नापी इन्जिन
            </h2>
            <p className="text-xs text-stone-500">
              आधिकारिक नापी सूत्र अनुसार क्षेत्रफल रूपान्तरण र स्लिप प्रिन्ट।
            </p>
          </div>
          <span className="text-xs font-mono bg-stone-100 dark:bg-stone-800 px-3 py-1 rounded-full text-stone-600 dark:text-stone-300">
            ६ दशमलव शुद्धता
          </span>
        </div>

        <LandCalculator />
      </section>

      {/* 4. Curated Legal Directives */}
      <div className="p-6 rounded-2xl bg-[#F2EDE2] dark:bg-[#1F1C18] border border-[#DDD6C8] dark:border-[#2B2722] flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs">
        <div className="space-y-1">
          <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm">
            भू-उपयोग ऐन तथा कित्ताकाट मापदण्ड २०७९
          </h4>
          <p className="text-stone-600 dark:text-stone-400">
            आवासीय क्षेत्रमा न्यूनतम १३० वर्गमिटर (४ आना) र कृषिमा ६७५ वर्गमिटर मापदण्डको पूर्ण परिपत्र।
          </p>
        </div>

        <Link
          href="/laws"
          className="px-4 py-2 rounded-xl bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 font-bold shrink-0 transition"
        >
          ऐन अध्ययन गर्नुहोस् &rarr;
        </Link>
      </div>

    </div>
  );
}
