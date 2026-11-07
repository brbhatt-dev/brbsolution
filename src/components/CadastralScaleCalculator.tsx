'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Compass, 
  Ruler, 
  Layers, 
  Calculator, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  RotateCcw, 
  ChevronRight, 
  Info,
  ExternalLink,
  BookOpen
} from 'lucide-react';

export default function CadastralScaleCalculator() {
  const [activeTab, setActiveTab] = useState<'distance' | 'area' | 'sheet_grid'>('distance');

  // 1. Distance Converter State
  const [scale, setScale] = useState<number>(500); // 500, 1250, 2500, 4800
  const [mapDistance, setMapDistance] = useState<string>('२.५'); // 2.5 cm
  const [mapUnit, setMapUnit] = useState<'cm' | 'mm'>('cm');

  // Parse nepali numbers or normal floats
  const parseNum = (str: string): number => {
    const nepaliMap: Record<string, string> = {
      '०': '0', '१': '1', '२': '2', '३': '3', '४': '4',
      '५': '5', '६': '6', '७': '7', '८': '8', '९': '9'
    };
    const eng = str.replace(/[०-९]/g, d => nepaliMap[d] || d);
    const n = parseFloat(eng);
    return isNaN(n) ? 0 : n;
  };

  const parsedDist = parseNum(mapDistance);
  // Convert map distance to meters
  // If cm: ground_meters = (dist_cm / 100) * scale
  // If mm: ground_meters = (dist_mm / 1000) * scale
  const groundMeters = mapUnit === 'cm' 
    ? (parsedDist / 100) * scale 
    : (parsedDist / 1000) * scale;
  
  const groundFeet = groundMeters * 3.28084;
  const groundHath = groundFeet / 1.5; // 1 hath ~ 1.5 ft

  // 2. Area Converter State
  const [areaScale, setAreaScale] = useState<number>(500);
  const [mapLength, setMapLength] = useState<string>('३.०'); // cm
  const [mapWidth, setMapWidth] = useState<string>('२.०'); // cm
  
  const pLength = parseNum(mapLength);
  const pWidth = parseNum(mapWidth);

  const lengthMeters = (pLength / 100) * areaScale;
  const widthMeters = (pWidth / 100) * areaScale;
  const totalSqMeters = lengthMeters * widthMeters;
  const totalSqFeet = totalSqMeters * 10.7639;

  // Convert to R-A-P-D
  // 1 Ropani = 5476 sq ft (or 508.72 sq m)
  // 1 Aana = 342.25 sq ft
  // 1 Paisa = 85.56 sq ft
  // 1 Daam = 21.39 sq ft
  const ropani = Math.floor(totalSqFeet / 5476);
  const rem1 = totalSqFeet % 5476;
  const aana = Math.floor(rem1 / 342.25);
  const rem2 = rem1 % 342.25;
  const paisa = Math.floor(rem2 / 85.56);
  const rem3 = rem2 % 85.56;
  const daam = (rem3 / 21.39).toFixed(1);

  // Convert to B-K-D
  // 1 Bigha = 72900 sq ft (or 6772.63 sq m)
  // 1 Kattha = 3645 sq ft
  // 1 Dhur = 182.25 sq ft
  const bigha = Math.floor(totalSqFeet / 72900);
  const remB1 = totalSqFeet % 72900;
  const kattha = Math.floor(remB1 / 3645);
  const remB2 = remB1 % 3645;
  const dhur = (remB2 / 182.25).toFixed(1);

  // 3. Cadastral Sheet Decoder
  const [sheetInput, setSheetInput] = useState<string>('१०२-१२३४');

  return (
    <div className="space-y-8">
      
      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs gap-1">
          
          <button
            onClick={() => setActiveTab('distance')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'distance'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Ruler className="w-4 h-4" />
            <span>१. लम्बाइ क्याल्कुलेटर (Distance)</span>
          </button>

          <button
            onClick={() => setActiveTab('area')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'area'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>२. कित्ता क्षेत्रफल (Area Converter)</span>
          </button>

          <button
            onClick={() => setActiveTab('sheet_grid')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'sheet_grid'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>३. नापी सिट नम्बर विश्लेषक</span>
          </button>

        </div>
      </div>

      {/* ==================================================== */}
      {/* TAB 1: DISTANCE CONVERTER */}
      {/* ==================================================== */}
      {activeTab === 'distance' && (
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
          
          <div className="space-y-1">
            <span className="text-2xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
              Cadastral Scale to Field Distance
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              नापी नक्साको स्केलबाट वास्तविक जमिनको लम्बाइ निकाल्नुहोस्
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              ट्रेस नक्सामा स्केलले नाप्दा आएको सेन्टिमिटर (cm) वा मिलिमिटर (mm) लाई वास्तविक फिल्डको मिटर, फिट र हातमा रूपान्तरण गर्नुहोस्।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Controls */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-4">
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400">
                  नक्साको आधिकारिक स्केल (Scale) छान्नुहोस्:
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { val: 500, label: '१:५०० (शहरी / बाक्लो घडेरी)' },
                    { val: 1250, label: '१:१२५० (अर्ध-शहरी क्षेत्र)' },
                    { val: 2500, label: '१:२५०० (कृषि तथा ग्रामीण)' },
                    { val: 4800, label: '१:४८०० (साविक पुरानो १६ इन्च)' }
                  ].map(s => (
                    <button
                      key={s.val}
                      onClick={() => setScale(s.val)}
                      className={`p-3 rounded-xl border text-left font-bold transition-all ${
                        scale === s.val
                          ? 'bg-emerald-600 text-white border-transparent shadow-xs'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400">
                  नक्सामा स्केल/रुलरले नापिएको दूरी:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={mapDistance}
                    onChange={e => setMapDistance(e.target.value)}
                    placeholder="उदा: २.५"
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-base font-black text-emerald-600"
                  />
                  <div className="inline-flex p-1 rounded-xl bg-slate-200 dark:bg-slate-700 text-xs font-bold">
                    <button
                      onClick={() => setMapUnit('cm')}
                      className={`px-3 py-1.5 rounded-lg ${mapUnit === 'cm' ? 'bg-white dark:bg-slate-800 text-emerald-600 shadow-xs' : 'text-slate-600'}`}
                    >
                      cm (सें.मि.)
                    </button>
                    <button
                      onClick={() => setMapUnit('mm')}
                      className={`px-3 py-1.5 rounded-lg ${mapUnit === 'mm' ? 'bg-white dark:bg-slate-800 text-emerald-600 shadow-xs' : 'text-slate-600'}`}
                    >
                      mm (मि.मि.)
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300">
                💡 <strong>स्केल सूत्र (Scale Rule):</strong> १:५०० स्केलको नक्सामा १ से.मि. दूरी बराबर जमिनमा ठीक <strong>५ मिटर (१६.४ फिट)</strong> हुन्छ।
              </div>

            </div>

            {/* Output Display */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col justify-between space-y-6 shadow-md">
              <div className="space-y-2">
                <span className="text-2xs font-bold uppercase tracking-wider text-emerald-400">
                  वास्तविक जमिनको दूरी (Ground Distance):
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono">
                    {groundMeters.toFixed(2)}
                  </span>
                  <span className="text-xl font-bold text-slate-300">मिटर (Meters)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-4">
                <div className="p-3 rounded-xl bg-slate-800/80">
                  <span className="text-2xs font-bold text-slate-400 uppercase">फिटमा (Feet):</span>
                  <p className="text-xl font-black text-white font-mono">{groundFeet.toFixed(2)} ft</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80">
                  <span className="text-2xs font-bold text-slate-400 uppercase">हातमा (Hath):</span>
                  <p className="text-xl font-black text-white font-mono">{groundHath.toFixed(1)} हात</p>
                </div>
              </div>

              <p className="text-2xs text-slate-400">
                • स्केल: १:{scale} | नक्सा नाप: {mapDistance} {mapUnit} = जमिनमा {groundMeters.toFixed(2)} मिटर ({groundFeet.toFixed(2)} फिट)
              </p>
            </div>

          </div>

        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 2: AREA CONVERTER */}
      {/* ==================================================== */}
      {activeTab === 'area' && (
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
          
          <div className="space-y-1">
            <span className="text-2xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
              Parcel Dimensions to Area
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              नक्साको लम्बाई-चौडाइबाट कित्ताको क्षेत्रफल (रोपनी र बिघा)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              नापी नक्सामा कित्ताको लम्बाई र चौडाइ (cm मा) नापेर जमिनको कुल क्षेत्रफल तुरुन्त निकाल्नुहोस्:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Input Form */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-4 text-xs">
              
              <div>
                <label className="font-bold text-slate-600 dark:text-slate-400 block mb-1">
                  नक्साको स्केल छान्नुहोस्:
                </label>
                <div className="grid grid-cols-2 gap-2 font-bold">
                  {[500, 1250, 2500, 4800].map(s => (
                    <button
                      key={s}
                      onClick={() => setAreaScale(s)}
                      className={`p-2.5 rounded-xl border text-center ${
                        areaScale === s ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-slate-900'
                      }`}
                    >
                      १:{s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">नक्सामा लम्बाई (cm):</label>
                  <input
                    type="text"
                    value={mapLength}
                    onChange={e => setMapLength(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border font-black text-sm text-emerald-600 bg-white dark:bg-slate-900"
                  />
                  <span className="text-2xs text-slate-500">जमिनमा: {lengthMeters.toFixed(1)}m ({ (lengthMeters*3.28084).toFixed(1) } ft)</span>
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">नक्सामा चौडाइ (cm):</label>
                  <input
                    type="text"
                    value={mapWidth}
                    onChange={e => setMapWidth(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border font-black text-sm text-emerald-600 bg-white dark:bg-slate-900"
                  />
                  <span className="text-2xs text-slate-500">जमिनमा: {widthMeters.toFixed(1)}m ({ (widthMeters*3.28084).toFixed(1) } ft)</span>
                </div>
              </div>

            </div>

            {/* Area Outputs */}
            <div className="space-y-4">
              
              {/* Ropani Card */}
              <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
                <span className="text-2xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                  काठमाडौँ तथा पहाडी प्रणाली (Ropani-Aana):
                </span>
                <p className="text-2xl font-black text-emerald-900 dark:text-emerald-200 font-mono">
                  {ropani}-{aana}-{paisa}-{daam}
                </p>
                <p className="text-xs text-emerald-800 dark:text-emerald-300">
                  {ropani} रोपनी {aana} आना {paisa} पैसा {daam} दाम
                </p>
              </div>

              {/* Bigha Card */}
              <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 space-y-2">
                <span className="text-2xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  तराई प्रणाली (Bigha-Kattha-Dhur):
                </span>
                <p className="text-2xl font-black text-blue-900 dark:text-blue-200 font-mono">
                  {bigha}-{kattha}-{dhur}
                </p>
                <p className="text-xs text-blue-800 dark:text-blue-300">
                  {bigha} बिघा {kattha} कट्ठा {dhur} धुर
                </p>
              </div>

              {/* Metric Card */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono">
                <span>कुल वर्गमिटर: <strong>{totalSqMeters.toFixed(2)} sq.m</strong></span>
                <span>कुल वर्गफिट: <strong>{totalSqFeet.toFixed(1)} sq.ft</strong></span>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 3: CADASTRAL SHEET GRID EXPLAINER */}
      {/* ==================================================== */}
      {activeTab === 'sheet_grid' && (
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
          
          <div className="space-y-1">
            <span className="text-2xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
              National Cadastral Grid System
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              नापी नक्साको सिट नम्बर (Sheet Number) कसरी बुझ्ने?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              लालपुर्जा वा ट्रेस नक्साको सिरानमा लेखिएको सिट नम्बर (उदा: १०२-१२३४) को कानुनी र प्राविधिक अर्थ:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center">
                १०२
              </span>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                १. मूल सिट नम्बर (Base Sheet)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                पहिलो ३ वा ४ अंकले नेपालको राष्ट्रिय ग्रिड (National Grid) अनुसारको मूल नापी सिट जनाउँछ, जसले कुन जिल्ला वा क्षेत्र हो भन्ने निर्धारण गर्दछ।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center justify-center">
                १२
              </span>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                २. उप-सिट तथा विभाजन (Sub-division)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                मूल सिटलाई १:२५०० स्केलमा १६ वटा वा १:१२५० मा ६४ वटा उप-सिटमा विभाजन गरिएको ग्रिड संकेत।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-amber-600 text-white font-bold text-sm flex items-center justify-center">
                ३४
              </span>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                ३. १:५०० स्केल ब्लक (Urban Block)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                शहरी क्षेत्रका बाक्ला घडेरीहरू छुट्याउन १:५०० स्केलमा तयार पारिएको अन्तिम ब्लक नक्सा नम्बर।
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/80 text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between flex-wrap gap-4">
            <div>
              <strong>🗺️ नापी नक्सा संकेत गाइड:</strong>
              <p className="text-slate-500 mt-0.5">नक्सामा हुने पर्खाल, डिल, गोरेटो, कुलो र मठमन्दिरका आधिकारिक लेजेन्ड चिन्हहरू हेर्नुहोस्।</p>
            </div>
            <Link
              href="/tools/cadastral-map-symbols"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shrink-0"
            >
              <span>नक्सा लेजेन्ड गाइड खोल्नुहोस्</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      )}

    </div>
  );
}
