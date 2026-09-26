'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Map, 
  Layers, 
  Compass, 
  Ruler, 
  CheckCircle2, 
  AlertTriangle, 
  Calculator, 
  ArrowRight, 
  Maximize2,
  Navigation,
  FileText,
  Printer,
  Sparkles,
  Info
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';

interface PlotData {
  id: string;
  kittaNo: string;
  ropaniStr: string;
  bighaStr: string;
  sqft: number;
  sqm: number;
  usage: string;
  roadWidth: string;
  canSplit: boolean;
  notes: string;
  color: string;
  borderColor: string;
}

export default function StyleVisualParcel() {
  const plots: Record<string, PlotData> = {
    '214': {
      id: '214',
      kittaNo: '२१४',
      ropaniStr: '०-४-२-१ (४ आना २ पैसा १ दाम)',
      bighaStr: '०-०-४.५ (४.५ धुर)',
      sqft: 1546.5,
      sqm: 143.67,
      usage: 'आवासीय (Residential)',
      roadWidth: '२० फिट कालोपत्रे',
      canSplit: true,
      notes: 'आवासीय मापदण्ड १३० वर्गमिटर भन्दा बढी भएकोले कित्ताकाट सम्भव छ।',
      color: 'fill-emerald-500/20 hover:fill-emerald-500/30',
      borderColor: 'stroke-emerald-600'
    },
    '215': {
      id: '215',
      kittaNo: '२१५',
      ropaniStr: '०-२-१-० (२ आना १ पैसा)',
      bighaStr: '०-०-२.३ (२.३ धुर)',
      sqft: 770.8,
      sqm: 71.61,
      usage: 'आवासीय (Residential)',
      roadWidth: '१३ फिट ढलान',
      canSplit: false,
      notes: 'क्षेत्रफल १३० वर्गमिटर भन्दा कम भएकाले नयाँ कित्ताकाट गर्न पाइँदैन।',
      color: 'fill-amber-500/20 hover:fill-amber-500/30',
      borderColor: 'stroke-amber-600'
    },
    '216': {
      id: '216',
      kittaNo: '२१६',
      ropaniStr: '१-०-०-० (१ रोपनी / १६ आना)',
      bighaStr: '०-१-९.८ (१ कट्ठा ९.८ धुर)',
      sqft: 5476.0,
      sqm: 508.74,
      usage: 'कृषि / मिश्रित (Mixed)',
      roadWidth: '२४ फिट मुख्य सडक',
      canSplit: true,
      notes: 'ठूलो प्लट। ६७५ वर्गमिटर मापदण्ड पुगेमा कृषि कित्ताकाट तथा उप-विभाजन सम्भव छ।',
      color: 'fill-blue-500/20 hover:fill-blue-500/30',
      borderColor: 'stroke-blue-600'
    },
    '217': {
      id: '217',
      kittaNo: '२१७',
      ropaniStr: '०-८-०-० (८ आना)',
      bighaStr: '०-०-१५.० (१५ धुर)',
      sqft: 2738.0,
      sqm: 254.37,
      usage: 'आवासीय (Residential)',
      roadWidth: '२० फिट कालोपत्रे',
      canSplit: true,
      notes: 'आवासीय क्षेत्र। २ वटा ४-४ आनाका टुक्रामा कित्ताकाट गर्न योग्य।',
      color: 'fill-purple-500/20 hover:fill-purple-500/30',
      borderColor: 'stroke-purple-600'
    }
  };

  const [selectedPlotId, setSelectedPlotId] = useState<string>('214');
  const activePlot = plots[selectedPlotId];

  return (
    <div className="space-y-12">
      
      {/* 1. Header Banner */}
      <section className="text-center max-w-4xl mx-auto space-y-3 pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold shadow-xs">
          <Navigation className="w-3.5 h-3.5 animate-spin" />
          <span>नेपालकै पहिलो अन्तरक्रियात्मक डिजिटल कित्ता नक्सा तथा नापी इन्जिन</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          नक्सामा प्लट छुनुहोस् &bull; <span className="text-emerald-600 dark:text-emerald-400">तत्काल क्षेत्रफल नाप्नुहोस्</span>
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          तलको नक्सामा रहेका कित्ताहरूमा क्लिक गर्नुहोस् — क्षेत्रफल (रोपनी/बिघा), बाटोको चौडाइ र कित्ताकाट नियम तत्काल हेर्नुहोस्।
        </p>
      </section>

      {/* 2. SHOWSTOPPER: Interactive Visual Parcel Map Playground */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Visual Vector Parcel Canvas */}
        <div className="lg:col-span-7 bg-slate-900 text-white rounded-3xl border border-slate-800 p-4 sm:p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          
          <div className="flex items-center justify-between z-10 mb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Compass className="w-4 h-4 text-rose-500" />
              <span>उत्तर दिशामुखी (North-Oriented Cadastral Grid)</span>
            </div>
            <div className="text-[10px] bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-full text-slate-300">
              कित्तामा क्लिक गर्नुहोस् 👆
            </div>
          </div>

          {/* SVG Map Canvas */}
          <div className="relative w-full aspect-[4/3] bg-slate-950 rounded-2xl border border-slate-800/80 p-2 flex items-center justify-center overflow-hidden">
            
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

            <svg viewBox="0 0 500 380" className="w-full h-full relative z-10 drop-shadow-lg select-none">
              
              {/* Road 20 ft at top */}
              <rect x="20" y="20" width="460" height="40" rx="4" fill="#334155" stroke="#475569" strokeWidth="2" />
              <line x1="20" y1="40" x2="480" y2="40" stroke="#94a3b8" strokeWidth="2" strokeDasharray="8 6" />
              <text x="250" y="44" fill="#cbd5e1" fontSize="12" fontWeight="bold" textAnchor="middle" letterSpacing="2">
                २० फिट मुख्य कालोपत्रे बाटो (20 FT ROAD ACCESS)
              </text>

              {/* Plot 214 */}
              <g 
                onClick={() => setSelectedPlotId('214')} 
                className="cursor-pointer transition-transform hover:opacity-95"
              >
                <rect 
                  x="20" y="70" width="140" height="180" rx="6" 
                  className={`${plots['214'].color} ${selectedPlotId === '214' ? 'stroke-emerald-400 stroke-[3.5] filter drop-shadow-[0_0_12px_rgba(52,211,153,0.5)]' : 'stroke-emerald-600 stroke-[2]'}`}
                />
                <text x="90" y="145" fill="#34d399" fontSize="18" fontWeight="900" textAnchor="middle">
                  {plots['214'].kittaNo}
                </text>
                <text x="90" y="170" fill="#e2e8f0" fontSize="11" fontWeight="bold" textAnchor="middle">
                  ४ आना २ पैसा
                </text>
                <text x="90" y="190" fill="#94a3b8" fontSize="10" textAnchor="middle">
                  १,५४६.५ वर्गफिट
                </text>
              </g>

              {/* Plot 215 */}
              <g 
                onClick={() => setSelectedPlotId('215')} 
                className="cursor-pointer transition-transform hover:opacity-95"
              >
                <rect 
                  x="170" y="70" width="100" height="180" rx="6" 
                  className={`${plots['215'].color} ${selectedPlotId === '215' ? 'stroke-amber-400 stroke-[3.5] filter drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]' : 'stroke-amber-600 stroke-[2]'}`}
                />
                <text x="220" y="145" fill="#fbbf24" fontSize="18" fontWeight="900" textAnchor="middle">
                  {plots['215'].kittaNo}
                </text>
                <text x="220" y="170" fill="#e2e8f0" fontSize="11" fontWeight="bold" textAnchor="middle">
                  २ आना १ पैसा
                </text>
                <text x="220" y="190" fill="#94a3b8" fontSize="10" textAnchor="middle">
                  ७७०.८ वर्गफिट
                </text>
              </g>

              {/* Plot 217 */}
              <g 
                onClick={() => setSelectedPlotId('217')} 
                className="cursor-pointer transition-transform hover:opacity-95"
              >
                <rect 
                  x="280" y="70" width="200" height="180" rx="6" 
                  className={`${plots['217'].color} ${selectedPlotId === '217' ? 'stroke-purple-400 stroke-[3.5] filter drop-shadow-[0_0_12px_rgba(192,132,252,0.5)]' : 'stroke-purple-600 stroke-[2]'}`}
                />
                <text x="380" y="145" fill="#c084fc" fontSize="18" fontWeight="900" textAnchor="middle">
                  {plots['217'].kittaNo}
                </text>
                <text x="380" y="170" fill="#e2e8f0" fontSize="11" fontWeight="bold" textAnchor="middle">
                  ८ आना (आवासीय)
                </text>
                <text x="380" y="190" fill="#94a3b8" fontSize="10" textAnchor="middle">
                  २,७३८.० वर्गफिट
                </text>
              </g>

              {/* Secondary Branch Road 13 ft */}
              <rect x="20" y="260" width="460" height="25" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
              <text x="250" y="277" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">
                १३ फिट शाखा बाटो (13 FT BRANCH ROAD)
              </text>

              {/* Plot 216 at bottom */}
              <g 
                onClick={() => setSelectedPlotId('216')} 
                className="cursor-pointer transition-transform hover:opacity-95"
              >
                <rect 
                  x="20" y="295" width="460" height="65" rx="6" 
                  className={`${plots['216'].color} ${selectedPlotId === '216' ? 'stroke-blue-400 stroke-[3.5] filter drop-shadow-[0_0_12px_rgba(96,165,250,0.5)]' : 'stroke-blue-600 stroke-[2]'}`}
                />
                <text x="250" y="325" fill="#60a5fa" fontSize="18" fontWeight="900" textAnchor="middle">
                  {plots['216'].kittaNo} &bull; १ रोपनी (१६ आना) प्लट
                </text>
                <text x="250" y="345" fill="#94a3b8" fontSize="11" textAnchor="middle">
                  ५,४७६ वर्गफिट &bull; ५०८.७४ वर्गमिटर
                </text>
              </g>

            </svg>

          </div>

          <div className="flex items-center justify-between pt-3 text-[11px] text-slate-400 z-10">
            <span>सक्रिय कित्ता: <strong className="text-white font-mono">नं. {activePlot.kittaNo}</strong></span>
            <span className="text-emerald-400">१-क्लिकमै स्वचालित विवरण लोड भयो</span>
          </div>

        </div>

        {/* Live Parcel Inspector Card */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-lg space-y-6">
          
          <div className="space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
                <h3 className="font-black text-slate-900 dark:text-white text-lg">
                  कित्ता नं. {activePlot.kittaNo} को विवरण
                </h3>
              </div>
              <span className="text-xs font-mono bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">
                {activePlot.usage}
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700">
                <span className="text-[10px] text-slate-500 font-bold uppercase block">रोपनी-आना नाप</span>
                <span className="text-sm font-black text-slate-900 dark:text-white mt-1 block">
                  {activePlot.ropaniStr}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700">
                <span className="text-[10px] text-slate-500 font-bold uppercase block">बिघा-कट्ठा नाप</span>
                <span className="text-sm font-black text-slate-900 dark:text-white mt-1 block">
                  {activePlot.bighaStr}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700">
                <span className="text-[10px] text-slate-500 font-bold uppercase block">वर्गफिट (Square Feet)</span>
                <span className="text-base font-black text-emerald-600 dark:text-emerald-400 font-mono mt-0.5 block">
                  {activePlot.sqft.toLocaleString()} sq.ft
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700">
                <span className="text-[10px] text-slate-500 font-bold uppercase block">वर्गमिटर (Square Meter)</span>
                <span className="text-base font-black text-teal-600 dark:text-teal-400 font-mono mt-0.5 block">
                  {activePlot.sqm.toFixed(2)} m²
                </span>
              </div>
            </div>

            {/* Kitta Kat Assessment Rule */}
            <div className={`p-4 rounded-2xl border text-xs leading-relaxed space-y-1 ${
              activePlot.canSplit 
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                : 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200'
            }`}>
              <div className="font-black flex items-center gap-1.5">
                {activePlot.canSplit ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>कित्ताकाट मापदण्ड: योग्य (Eligible for Split)</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>कित्ताकाट मापदण्ड: सिमा नपुगेको (Under Minimum Area)</span>
                  </>
                )}
              </div>
              <p className="text-[11px] opacity-90 pl-5.5">
                {activePlot.notes}
              </p>
            </div>

          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-2">
            <Link
              href="/tools/land-calculator"
              className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center transition flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>कस्टम जग्गा हिसाब गर्नुहोस्</span>
            </Link>

            <Link
              href="/tools/kitta-kat-checker"
              className="py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 font-bold text-xs text-center transition"
            >
              मापदण्ड चेक &rarr;
            </Link>
          </div>

        </div>

      </div>

      {/* 3. Embedded Full Engine for Custom User Calculation */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              📐 आफ्नो जग्गाको नाप सिधै इन्टर गर्नुहोस्
            </h2>
            <p className="text-xs text-slate-500">
              रोपनी-आना-पैसा-दाम वा बिघा-कट्ठा-धुर जे टाइप गरेपनि तत्काल रूपान्तरण हुन्छ।
            </p>
          </div>
          <TithiWidget />
        </div>

        <LandCalculator />
      </section>

    </div>
  );
}
