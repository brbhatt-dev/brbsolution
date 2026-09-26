'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Terminal, 
  Search, 
  TrendingUp, 
  Activity, 
  Calculator, 
  ArrowRight, 
  Coins, 
  Percent, 
  ShieldCheck, 
  Clock,
  Layers,
  Database
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import UniversalSmartSearch from './UniversalSmartSearch';

export default function StyleBloombergTerminal() {
  const tickerItems = [
    { label: '१ रोपनी', val: '५,४७६.०० SQ.FT', change: '+FIXED' },
    { label: '१ आना', val: '३४२.२५ SQ.FT', change: '+FIXED' },
    { label: '१ बिघा', val: '७२,९००.०० SQ.FT', change: '+FIXED' },
    { label: 'महानगर रजिस्ट्रेसन', val: '५.००%', change: 'FY 2081/82' },
    { label: 'महिला छुट', val: '२५.००%', change: 'REBATE' },
    { label: 'आवासीय कित्ताकाट', val: '१३०.०० M²', change: 'MINIMUM' },
    { label: 'कृषि कित्ताकाट', val: '६७५.०० M²', change: 'MINIMUM' },
    { label: 'पुँजीगत लाभकर', val: '५.०% / ७.५%', change: 'CGT' },
  ];

  const financialMatrix = [
    { title: 'महानगरपालिका (Kathmandu / Lalitpur / Pokhara)', rate: '५%', femaleRate: '३.७५%', cgt5: '५%', cgtUnder5: '७.५%' },
    { title: 'उप-महानगरपालिका (Dharan / Butwal / Hetauda)', rate: '४.५%', femaleRate: '३.३७५%', cgt5: '५%', cgtUnder5: '७.५%' },
    { title: 'नगरपालिका (Municipalities)', rate: '४%', femaleRate: '३.००%', cgt5: '५%', cgtUnder5: '७.५%' },
    { title: 'गाउँपालिका (Rural Municipalities)', rate: '२%', femaleRate: '१.५०%', cgt5: '५%', cgtUnder5: '७.५%' },
  ];

  return (
    <div className="space-y-8 font-mono text-slate-200">
      
      {/* 1. Terminal Live Financial Cadastre Ticker */}
      <div className="bg-black border-y border-amber-500/40 p-2 overflow-x-auto scrollbar-none no-scrollbar flex items-center gap-6 text-xs">
        <div className="flex items-center gap-1.5 text-amber-400 font-black shrink-0">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span>NEPAL.CADASTRE.TICKER &bull; FY 2081/82</span>
        </div>
        <div className="flex items-center gap-6 shrink-0 text-[11px]">
          {tickerItems.map((tick, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-slate-400">{tick.label}:</span>
              <span className="text-white font-bold">{tick.val}</span>
              <span className="text-[9px] px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 font-extrabold">
                {tick.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Bloomberg Search & Terminal Header */}
      <section className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-black">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                <span>BLOOMBERG CADASTRE TERMINAL</span>
                <span className="text-[10px] bg-amber-500 text-black px-1.5 py-0.5 rounded font-black">
                  PRO
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                नेपालको एकीकृत डिजिटल नापी, वित्तीय राजस्व, र कित्ताकाट डाटाबेस प्रणाली।
              </p>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 text-right font-mono hidden sm:block">
            <div>STATUS: <span className="text-emerald-400 font-bold">ONLINE</span></div>
            <div>FEED: <span className="text-slate-300">LAND REVENUE 2081</span></div>
          </div>
        </div>

        {/* Search Engine embedded in terminal */}
        <div>
          <UniversalSmartSearch placeholder="TERMINAL QUERY: जग्गा नाप, कित्ताकाट नियम, मालपोत कर, वा नापी कार्यालय..." />
        </div>

      </section>

      {/* 3. Terminal Dual Panel: Calculator + Official Tax Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: The Calculator Workstation */}
        <div className="lg:col-span-7 bg-slate-950 p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
            <span className="text-amber-400 font-bold flex items-center gap-1.5">
              <Calculator className="w-4 h-4" />
              <span>CALCULATION_ENGINE_CORE</span>
            </span>
            <span className="text-slate-400">PRECISION: ZERO_ROUND_ERR</span>
          </div>

          <LandCalculator />
        </div>

        {/* Right: Data Density Matrix Table */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-amber-400 font-bold flex items-center gap-1.5">
                <Coins className="w-4 h-4" />
                <span>मालपोत रजिस्ट्रेसन कर म्याट्रिक्स (२०८१/८२)</span>
              </span>
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                आधिकारिक दर
              </span>
            </div>

            <div className="space-y-3">
              {financialMatrix.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="font-bold text-white text-[11px] leading-snug">
                    {item.title}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[10px] text-slate-400">
                    <div>
                      <span>सामान्य दर: </span>
                      <strong className="text-amber-300">{item.rate}</strong>
                    </div>
                    <div>
                      <span>महिला २५% छुट: </span>
                      <strong className="text-emerald-400">{item.femaleRate}</strong>
                    </div>
                    <div>
                      <span>पुँजीगत लाभ: </span>
                      <strong className="text-cyan-400">{item.cgt5}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/tools/malpot-calculator"
              className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs flex items-center justify-center gap-1.5 transition"
            >
              <span>पूर्ण मालपोत क्यालकुलेटर चलाउनुहोस्</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Terminal Links */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">७७ वटै जिल्लाका नापी कार्यालय डेटाबेस:</span>
            <Link href="/tools/survey-offices" className="text-amber-400 hover:underline font-bold flex items-center gap-1">
              <span>हेर्नुहोस्</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
