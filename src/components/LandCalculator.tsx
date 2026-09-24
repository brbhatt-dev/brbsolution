'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  ArrowRightLeft, 
  Copy, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  Coins, 
  RotateCcw,
  Maximize2
} from 'lucide-react';

type Mode = 'pahadi' | 'terai' | 'sqft';

export default function LandCalculator() {
  const [mode, setMode] = useState<Mode>('pahadi');

  // Pahadi inputs
  const [ropani, setRopani] = useState<number>(1);
  const [aana, setAana] = useState<number>(0);
  const [paisa, setPaisa] = useState<number>(0);
  const [daam, setDaam] = useState<number>(0);

  // Terai inputs
  const [bigha, setBigha] = useState<number>(0);
  const [katha, setKatha] = useState<number>(1);
  const [dhur, setDhur] = useState<number>(0);
  const [kanwa, setKanwa] = useState<number>(0);

  // Sqft / Sqm inputs
  const [sqftInput, setSqftInput] = useState<number>(5476);
  const [unitType, setUnitType] = useState<'sqft' | 'sqm'>('sqft');

  // Land price estimation
  const [pricePerUnit, setPricePerUnit] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  // Constants
  const SQFT_PER_ROPANI = 5476;
  const SQFT_PER_AANA = 342.25;
  const SQFT_PER_PAISA = 85.5625;
  const SQFT_PER_DAAM = 21.390625;

  const SQFT_PER_BIGHA = 72900;
  const SQFT_PER_KATHA = 3645;
  const SQFT_PER_DHUR = 182.25;
  const SQFT_PER_KANWA = 11.390625; // 1 dhur = 16 kanwa

  const SQFT_TO_SQM = 10.7639;

  // Calculate master sqft based on mode
  let totalSqft = 0;

  if (mode === 'pahadi') {
    totalSqft = (ropani * SQFT_PER_ROPANI) + (aana * SQFT_PER_AANA) + (paisa * SQFT_PER_PAISA) + (daam * SQFT_PER_DAAM);
  } else if (mode === 'terai') {
    totalSqft = (bigha * SQFT_PER_BIGHA) + (katha * SQFT_PER_KATHA) + (dhur * SQFT_PER_DHUR) + (kanwa * SQFT_PER_KANWA);
  } else {
    totalSqft = unitType === 'sqft' ? sqftInput : sqftInput * SQFT_TO_SQM;
  }

  // Derived Pahadi Breakdown
  const outRopani = Math.floor(totalSqft / SQFT_PER_ROPANI);
  const remR = totalSqft % SQFT_PER_ROPANI;
  const outAana = Math.floor(remR / SQFT_PER_AANA);
  const remA = remR % SQFT_PER_AANA;
  const outPaisa = Math.floor(remA / SQFT_PER_PAISA);
  const remP = remA % SQFT_PER_PAISA;
  const outDaam = (remP / SQFT_PER_DAAM).toFixed(2);

  // Derived Terai Breakdown
  const outBigha = Math.floor(totalSqft / SQFT_PER_BIGHA);
  const remB = totalSqft % SQFT_PER_BIGHA;
  const outKatha = Math.floor(remB / SQFT_PER_KATHA);
  const remK = remB % SQFT_PER_KATHA;
  const outDhur = Math.floor(remK / SQFT_PER_DHUR);
  const remD = remK % SQFT_PER_DHUR;
  const outKanwa = (remD / SQFT_PER_KANWA).toFixed(2);

  // Standard metric
  const outSqm = (totalSqft / SQFT_TO_SQM).toFixed(2);

  // Estimated Price
  const estimatedPrice = pricePerUnit > 0 ? (
    mode === 'terai' 
      ? (totalSqft / SQFT_PER_DHUR) * pricePerUnit 
      : (totalSqft / SQFT_PER_AANA) * pricePerUnit
  ) : 0;

  const copyResult = () => {
    const text = `नेपाली जग्गा क्षेत्रफल गणना:\n- पहाडी: ${outRopani} रोपनी - ${outAana} आना - ${outPaisa} पैसा - ${outDaam} दाम\n- तराई: ${outBigha} बिघा - ${outKatha} कट्ठा - ${outDhur} धुर (${outKanwa} कन्वा)\n- वर्गफिट: ${totalSqft.toFixed(2)} Sq.Ft\n- वर्गमिटर: ${outSqm} Sq.M\n(Land Solution - brbhatta.com)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const setPreset = (type: '4aana' | '1ropani' | '1katha' | '1bigha') => {
    if (type === '4aana') {
      setMode('pahadi');
      setRopani(0);
      setAana(4);
      setPaisa(0);
      setDaam(0);
    } else if (type === '1ropani') {
      setMode('pahadi');
      setRopani(1);
      setAana(0);
      setPaisa(0);
      setDaam(0);
    } else if (type === '1katha') {
      setMode('terai');
      setBigha(0);
      setKatha(1);
      setDhur(0);
      setKanwa(0);
    } else if (type === '1bigha') {
      setMode('terai');
      setBigha(1);
      setKatha(0);
      setDhur(0);
      setKanwa(0);
    }
  };

  return (
    <section id="land-calculator" className="py-12 sm:py-16 bg-white dark:bg-[#070b14] border-t border-slate-200 dark:border-slate-800 transition-colors notranslate" translate="no">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-2">
            <Calculator className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>अनलाइन जग्गा क्यालकुलेटर (Online Land Converter)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            नेपाल जग्गा क्षेत्रफल रूपान्तरण टुल
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            रोपनी-आना, बिघा-कट्ठा, वर्गफिट तथा वर्गमिटर बीच तत्काल दुई-तर्फी हिसाब निकाल्नुहोस्।
          </p>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">द्रुत छनोट (Presets):</span>
            <button
              onClick={() => setPreset('4aana')}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all active:scale-95"
            >
              ४ आना (घडेरी)
            </button>
            <button
              onClick={() => setPreset('1ropani')}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all active:scale-95"
            >
              १ रोपनी
            </button>
            <button
              onClick={() => setPreset('1katha')}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-teal-50 dark:bg-slate-800 dark:hover:bg-teal-950/40 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all active:scale-95"
            >
              १ कट्ठा (तराई)
            </button>
            <button
              onClick={() => setPreset('1bigha')}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-teal-50 dark:bg-slate-800 dark:hover:bg-teal-950/40 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all active:scale-95"
            >
              १ बिघा
            </button>
          </div>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-sm">
          
          {/* Mode Switcher Tabs */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 p-1.5 bg-slate-200/80 dark:bg-slate-800/80 rounded-xl mb-6">
            <button
              onClick={() => setMode('pahadi')}
              className={`py-2 sm:py-2.5 px-2 rounded-lg font-bold text-xs sm:text-sm transition-all ${
                mode === 'pahadi'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              १. पहाडी (रोपनी-आना)
            </button>
            <button
              onClick={() => setMode('terai')}
              className={`py-2 sm:py-2.5 px-2 rounded-lg font-bold text-xs sm:text-sm transition-all ${
                mode === 'terai'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              २. तराई (बिघा-कट्ठा)
            </button>
            <button
              onClick={() => setMode('sqft')}
              className={`py-2 sm:py-2.5 px-2 rounded-lg font-bold text-xs sm:text-sm transition-all ${
                mode === 'sqft'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              ३. वर्ग फिट / मिटर
            </button>
          </div>

          {/* INPUT FORM FIELDS */}
          <div className="mb-6">
            {mode === 'pahadi' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">रोपनी (Ropani):</label>
                  <input
                    type="number"
                    min="0"
                    value={ropani}
                    onChange={(e) => setRopani(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-base focus:ring-2 focus:ring-emerald-500/20 focus:outline-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">आना (Aana):</label>
                  <input
                    type="number"
                    min="0"
                    max="15"
                    value={aana}
                    onChange={(e) => setAana(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-base focus:ring-2 focus:ring-emerald-500/20 focus:outline-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">पैसा (Paisa):</label>
                  <input
                    type="number"
                    min="0"
                    max="3"
                    value={paisa}
                    onChange={(e) => setPaisa(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-base focus:ring-2 focus:ring-emerald-500/20 focus:outline-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">दाम (Daam):</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    max="3.99"
                    value={daam}
                    onChange={(e) => setDaam(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-base focus:ring-2 focus:ring-emerald-500/20 focus:outline-emerald-600"
                  />
                </div>
              </div>
            )}

            {mode === 'terai' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">बिघा (Bigha):</label>
                  <input
                    type="number"
                    min="0"
                    value={bigha}
                    onChange={(e) => setBigha(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-base focus:ring-2 focus:ring-teal-500/20 focus:outline-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">कट्ठा (Katha):</label>
                  <input
                    type="number"
                    min="0"
                    max="19"
                    value={katha}
                    onChange={(e) => setKatha(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-base focus:ring-2 focus:ring-teal-500/20 focus:outline-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">धुर (Dhur):</label>
                  <input
                    type="number"
                    min="0"
                    max="19"
                    value={dhur}
                    onChange={(e) => setDhur(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-base focus:ring-2 focus:ring-teal-500/20 focus:outline-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">कन्वा (Kanwa):</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    max="15.99"
                    value={kanwa}
                    onChange={(e) => setKanwa(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-base focus:ring-2 focus:ring-teal-500/20 focus:outline-teal-600"
                  />
                </div>
              </div>
            )}

            {mode === 'sqft' && (
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="flex-1 w-full">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    क्षेत्रफल लेख्नुहोस् (Enter Value):
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={sqftInput}
                    onChange={(e) => setSqftInput(Math.max(0, Number(e.target.value)))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-base focus:ring-2 focus:ring-indigo-500/20 focus:outline-indigo-600"
                  />
                </div>
                <div className="w-full sm:w-48">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">एकाइ (Unit):</label>
                  <select
                    value={unitType}
                    onChange={(e) => setUnitType(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm"
                  >
                    <option value="sqft">वर्ग फिट (Sq. Feet)</option>
                    <option value="sqm">वर्ग मिटर (Sq. Meters)</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* RESULTS DISPLAY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            
            {/* Result: Pahadi */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-800/90 border border-emerald-300 dark:border-emerald-800/80 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-bl-full pointer-events-none"></div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-extrabold text-emerald-800 dark:text-emerald-400 uppercase tracking-wide">
                  पहाडी नाप (RAPD)
                </span>
                <span className="text-[11px] text-slate-400 font-mono">१ रोपनी = १६ आना</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
                {outRopani} <span className="text-xs font-bold text-slate-500 font-sans">रोपनी</span> {outAana} <span className="text-xs font-bold text-slate-500 font-sans">आना</span> {outPaisa} <span className="text-xs font-bold text-slate-500 font-sans">पैसा</span> {outDaam} <span className="text-xs font-bold text-slate-500 font-sans">दाम</span>
              </p>
              <div className="mt-2 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>कुल आना: <strong>{(totalSqft / SQFT_PER_AANA).toFixed(2)}</strong> आना</span>
                <span>(१ आना = ३४२.२५ sq.ft)</span>
              </div>
            </div>

            {/* Result: Terai */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-800/90 border border-teal-300 dark:border-teal-800/80 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-teal-500/10 rounded-bl-full pointer-events-none"></div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-extrabold text-teal-800 dark:text-teal-400 uppercase tracking-wide">
                  तराई नाप (BKD)
                </span>
                <span className="text-[11px] text-slate-400 font-mono">१ बिघा = २० कट्ठा</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
                {outBigha} <span className="text-xs font-bold text-slate-500 font-sans">बिघा</span> {outKatha} <span className="text-xs font-bold text-slate-500 font-sans">कट्ठा</span> {outDhur} <span className="text-xs font-bold text-slate-500 font-sans">धुर</span>
              </p>
              <div className="mt-2 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>कन्वा: <strong>{outKanwa}</strong> कन्वा</span>
                <span>(१ कट्ठा = ३६४५ sq.ft)</span>
              </div>
            </div>

            {/* Result: Metric & Imperial */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-800/90 border border-indigo-200 dark:border-indigo-800/60 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block mb-0.5">
                  कुल वर्ग फिट (Square Feet)
                </span>
                <p className="text-lg sm:text-xl font-black text-indigo-700 dark:text-indigo-400 font-mono">
                  {totalSqft.toLocaleString('en-IN', { maximumFractionDigits: 2 })} <span className="text-xs font-sans text-slate-500">Sq.Ft</span>
                </p>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block mb-0.5">
                  कुल वर्ग मिटर (Square Meters)
                </span>
                <p className="text-lg sm:text-xl font-black text-indigo-700 dark:text-indigo-400 font-mono">
                  {Number(outSqm).toLocaleString('en-IN', { maximumFractionDigits: 2 })} <span className="text-xs font-sans text-slate-500">Sq.M</span>
                </p>
              </div>
            </div>

            {/* Optional Price Estimation */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-800/90 border border-amber-200 dark:border-amber-800/60 shadow-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase flex items-center gap-1">
                  <Coins className="w-3.5 h-3.5 text-amber-500" />
                  <span>जग्गाको अनुमानित मूल्य (रु.)</span>
                </span>
                <span className="text-[10px] text-slate-400">
                  {mode === 'terai' ? 'प्रति धुर दर' : 'प्रति आना दर'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder={mode === 'terai' ? 'दर (प्रति धुर)' : 'दर (प्रति आना)'}
                  value={pricePerUnit || ''}
                  onChange={(e) => setPricePerUnit(Math.max(0, Number(e.target.value)))}
                  className="w-32 px-2.5 py-1 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono"
                />
                <p className="font-mono font-bold text-base text-slate-900 dark:text-white truncate">
                  {estimatedPrice > 0 ? `रु. ${estimatedPrice.toLocaleString('en-IN', { maximumFractionDigits: 0 })}` : 'दर राख्नुहोस्'}
                </p>
              </div>
            </div>

          </div>

          {/* Action Footer: Copy Results & Land Solution CTA */}
          <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <button
              onClick={copyResult}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold transition-all active:scale-95 shadow-xs"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>नतिजा कपी भयो!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-300" />
                  <span>हिसाब कपी गर्नुहोस् (Copy Summary)</span>
                </>
              )}
            </button>

            <a
              href="#land-solution"
              className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 hover:underline font-semibold"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>कित्ताकाट तथा डिजिटल नापजाँचको लागि Land Solution एप प्रयोग गर्नुहोस् &rarr;</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
