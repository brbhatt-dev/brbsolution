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
  Receipt,
  Building2,
  Percent
} from 'lucide-react';
import AdSenseSlot from '@/components/AdSenseSlot';

type Mode = 'pahadi' | 'terai' | 'sqft' | 'tax';

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

  // Tax / Malpot registration inputs
  const [propertyValue, setPropertyValue] = useState<number>(2500000);
  const [muniType, setMuniType] = useState<'metro' | 'submetro' | 'muni' | 'rural'>('metro');
  const [ownershipType, setOwnershipType] = useState<'general' | 'female' | 'disadvantaged' | 'joint'>('general');
  const [cgtType, setCgtType] = useState<'none' | 'over5' | 'under5'>('none');
  const [gainAmount, setGainAmount] = useState<number>(500000);

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
  } else if (mode === 'sqft') {
    totalSqft = unitType === 'sqft' ? sqftInput : (sqftInput * SQFT_TO_SQM);
  }

  // Conversions from master sqft
  // 1. Pahadi
  const outRopani = Math.floor(totalSqft / SQFT_PER_ROPANI);
  const remRopani = totalSqft % SQFT_PER_ROPANI;
  const outAana = Math.floor(remRopani / SQFT_PER_AANA);
  const remAana = remRopani % SQFT_PER_AANA;
  const outPaisa = Math.floor(remAana / SQFT_PER_PAISA);
  const remPaisa = remAana % SQFT_PER_PAISA;
  const outDaam = (remPaisa / SQFT_PER_DAAM).toFixed(2);

  // 2. Terai
  const outBigha = Math.floor(totalSqft / SQFT_PER_BIGHA);
  const remBigha = totalSqft % SQFT_PER_BIGHA;
  const outKatha = Math.floor(remBigha / SQFT_PER_KATHA);
  const remKatha = remBigha % SQFT_PER_KATHA;
  const outDhur = Math.floor(remKatha / SQFT_PER_DHUR);
  const remDhur = remKatha % SQFT_PER_DHUR;
  const outKanwa = (remDhur / SQFT_PER_KANWA).toFixed(2);

  // 3. Metric
  const outSqm = (totalSqft / SQFT_TO_SQM).toFixed(2);

  // Price estimation
  let estimatedPrice = 0;
  if (pricePerUnit > 0) {
    if (mode === 'terai') {
      const totalDhur = totalSqft / SQFT_PER_DHUR;
      estimatedPrice = totalDhur * pricePerUnit;
    } else {
      const totalAana = totalSqft / SQFT_PER_AANA;
      estimatedPrice = totalAana * pricePerUnit;
    }
  }

  // Tax calculations
  const muniRates = {
    metro: 0.05,
    submetro: 0.045,
    muni: 0.04,
    rural: 0.03,
  };
  const regBaseRate = muniRates[muniType];
  const grossRegFee = propertyValue * regBaseRate;
  
  let discountRate = 0;
  if (ownershipType === 'female' || ownershipType === 'disadvantaged') {
    discountRate = (muniType === 'rural') ? 0.50 : 0.25;
  }
  
  const discountAmount = ownershipType === 'joint' 
    ? Math.max(0, grossRegFee - 100) 
    : grossRegFee * discountRate;

  const netRegFee = ownershipType === 'joint' 
    ? 100 
    : (grossRegFee - discountAmount);

  const cgtRate = cgtType === 'under5' ? 0.075 : (cgtType === 'over5' ? 0.05 : 0);
  const cgtAmount = gainAmount * cgtRate;

  const totalGovernmentFee = netRegFee + cgtAmount;

  // Presets
  const applyPreset = (presetSqft: number) => {
    setMode('sqft');
    setUnitType('sqft');
    setSqftInput(presetSqft);
  };

  const copyResult = () => {
    let summary = '';
    if (mode === 'tax') {
      summary = `--- मालपोत घर-जग्गा रजिस्ट्रेसन कर हिसाब ---\nथैली अङ्क: रु. ${propertyValue.toLocaleString('en-IN')}\nस्थानीय तह दर: ${(regBaseRate * 100)}%\nकुल रजिस्ट्रेसन दस्तुर: रु. ${grossRegFee.toLocaleString('en-IN')}\nछुट रकम: रु. ${discountAmount.toLocaleString('en-IN')}\nखुद रजिस्ट्रेसन राजस्व: रु. ${netRegFee.toLocaleString('en-IN')}\nपुँजीगत लाभकर (CGT): रु. ${cgtAmount.toLocaleString('en-IN')}\nकुल सरकारी खर्च: रु. ${totalGovernmentFee.toLocaleString('en-IN')}\nस्रोत: www.brbhatta.com`;
    } else {
      summary = `--- नेपाल जग्गा क्षेत्रफल नाप विवरण ---\nकुल क्षेत्रफल: ${totalSqft.toFixed(2)} वर्गफिट (${outSqm} वर्गमिटर)\nपहाडी नाप: ${outRopani} रोपनी - ${outAana} आना - ${outPaisa} पैसा - ${outDaam} दाम\nतराई नाप: ${outBigha} बिघा - ${outKatha} कट्ठा - ${outDhur} धुर - ${outKanwa} कन्वा\nस्रोत: www.brbhatta.com`;
    }
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="land-calculator" className="py-12 sm:py-16 bg-white dark:bg-[#070b14] border-t border-slate-200 dark:border-slate-800 transition-colors notranslate" translate="no">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-2">
            <Calculator className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>अनलाइन जग्गा क्यालकुलेटर (Online Land & Tax Converter)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            नेपाल जग्गा नाप तथा मालपोत कर क्यालकुलेटर
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            रोपनी-आना, बिघा-कट्ठा, वर्गफिट, वर्गमिटर तथा घर-जग्गा रजिस्ट्रेसन दस्तुर र पुँजीगत लाभकरको आधिकारिक हिसाब।
          </p>

          {/* Quick Presets */}
          {mode !== 'tax' && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">द्रुत छनोट (Presets):</span>
              <button onClick={() => applyPreset(1369)} className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all active:scale-95">
                ४ आना (घडेरी)
              </button>
              <button onClick={() => applyPreset(5476)} className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all active:scale-95">
                १ रोपनी
              </button>
              <button onClick={() => applyPreset(3645)} className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-teal-50 dark:bg-slate-800 dark:hover:bg-teal-950/40 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all active:scale-95">
                १ कट्ठा (तराई)
              </button>
              <button onClick={() => applyPreset(72900)} className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-teal-50 dark:bg-slate-800 dark:hover:bg-teal-950/40 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all active:scale-95">
                १ बिघा
              </button>
            </div>
          )}
        </div>

        {/* Calculator Main Box */}
        <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-sm">
          
          {/* Mode Switcher Tabs (4 Modes) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 p-1.5 bg-slate-200/80 dark:bg-slate-800/80 rounded-xl mb-6">
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
            <button
              onClick={() => setMode('tax')}
              className={`py-2 sm:py-2.5 px-2 rounded-lg font-bold text-xs sm:text-sm transition-all ${
                mode === 'tax'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              ४. मालपोत कर (Tax)
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
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 w-full">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    क्षेत्रफल (Area Quantity):
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={sqftInput}
                    onChange={(e) => setSqftInput(Math.max(0, Number(e.target.value)))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-lg focus:ring-2 focus:ring-indigo-500/20 focus:outline-indigo-600"
                  />
                </div>
                <div className="w-full sm:w-auto">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    एकाइ (Unit):
                  </label>
                  <div className="flex items-center gap-2 p-1 bg-slate-200 dark:bg-slate-800 rounded-xl">
                    <button
                      onClick={() => setUnitType('sqft')}
                      className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                        unitType === 'sqft'
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      वर्ग फिट (Sq.Ft)
                    </button>
                    <button
                      onClick={() => setUnitType('sqm')}
                      className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                        unitType === 'sqm'
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      वर्ग मिटर (Sq.M)
                    </button>
                  </div>
                </div>
              </div>
            )}

            {mode === 'tax' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                {/* Property Value */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    थैली अङ्क / जग्गाको मूल्य (रु.):
                  </label>
                  <input
                    type="number"
                    min="10000"
                    step="50000"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-mono font-bold text-sm focus:ring-2 focus:ring-amber-500/20 focus:outline-amber-600"
                  />
                </div>

                {/* Municipality Category */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    स्थानीय तहको वर्ग (Municipality):
                  </label>
                  <select
                    value={muniType}
                    onChange={(e) => setMuniType(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-medium text-xs focus:ring-2 focus:ring-amber-500/20 focus:outline-amber-600"
                  >
                    <option value="metro">महानगरपालिका (५%)</option>
                    <option value="submetro">उप-महानगरपालिका (४.५%)</option>
                    <option value="muni">नगरपालिका (४%)</option>
                    <option value="rural">गाउँपालिका (३%)</option>
                  </select>
                </div>

                {/* Ownership Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    स्वामित्व प्रकार (छुट वर्ग):
                  </label>
                  <select
                    value={ownershipType}
                    onChange={(e) => setOwnershipType(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-medium text-xs focus:ring-2 focus:ring-amber-500/20 focus:outline-amber-600"
                  >
                    <option value="general">सामान्य / पुरुष (छुट छैन)</option>
                    <option value="female">महिला स्वामित्व (२५% देखि ५०% छुट)</option>
                    <option value="disadvantaged">दलित / अपाङ्गता (२५% छुट)</option>
                    <option value="joint">दम्पती संयुक्त दर्ता (रु. १०० मात्र)</option>
                  </select>
                </div>

                {/* Capital Gains Tax */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    पुँजीगत लाभकर (बिक्रेता CGT):
                  </label>
                  <select
                    value={cgtType}
                    onChange={(e) => setCgtType(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-medium text-xs focus:ring-2 focus:ring-amber-500/20 focus:outline-amber-600"
                  >
                    <option value="none">लागू नहुने (No Capital Gain)</option>
                    <option value="over5">५ वर्षभन्दा बढी स्वामित्व (५%)</option>
                    <option value="under5">५ वर्षभन्दा कम स्वामित्व (७.५%)</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* DYNAMIC RESULTS DISPLAY */}
          {mode === 'tax' ? (
            /* Tax Results Display */
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700">
                  <span className="text-[11px] font-bold text-slate-400 block mb-1">कुल रजिस्ट्रेसन दस्तुर</span>
                  <p className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-200 font-mono">
                    रु. {grossRegFee.toLocaleString('en-IN')}
                  </p>
                  <span className="text-[10px] text-slate-400">दर: {(regBaseRate * 100)}%</span>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60">
                  <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 block mb-1">
                    सहुलियत / महिला छुट
                  </span>
                  <p className="text-base sm:text-lg font-black text-emerald-700 dark:text-emerald-400 font-mono">
                    - रु. {discountAmount.toLocaleString('en-IN')}
                  </p>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-500">
                    {ownershipType === 'joint' ? 'दम्पती संयुक्त सहुलियत' : `${(discountRate * 100)}% छुट`}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60">
                  <span className="text-[11px] font-bold text-amber-800 dark:text-amber-300 block mb-1">
                    खुद बुझाउनुपर्ने राजस्व (Net Payable)
                  </span>
                  <p className="text-xl sm:text-2xl font-black text-amber-700 dark:text-amber-300 font-mono">
                    रु. {netRegFee.toLocaleString('en-IN')}
                  </p>
                  <span className="text-[10px] text-amber-600">मालपोतमा तिर्नुपर्ने</span>
                </div>
              </div>

              {cgtType !== 'none' && (
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-300">
                    पुँजीगत लाभकर (CGT {(cgtRate * 100)}%):
                  </span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">
                    रु. {cgtAmount.toLocaleString('en-IN')}
                  </span>
                </div>
              )}
            </div>
          ) : (
            /* Area Conversion Results Display */
            <div className="space-y-4 pt-2">
              
              {/* Output Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* 1. Pahadi Format */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-emerald-200 dark:border-emerald-800/60 shadow-xs relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      पहाडी प्रणाली (R-A-P-D)
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-semibold">
                      काठमाडौँ तथा पहाड
                    </span>
                  </div>

                  <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono tracking-tight leading-relaxed">
                    <span className="text-emerald-700 dark:text-emerald-400">{outRopani}</span> रोपनी - {' '}
                    <span className="text-emerald-700 dark:text-emerald-400">{outAana}</span> आना - {' '}
                    <span className="text-emerald-700 dark:text-emerald-400">{outPaisa}</span> पैसा - {' '}
                    <span className="text-emerald-700 dark:text-emerald-400">{outDaam}</span> दाम
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-700 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                    <span>(१ रोपनी = १६ आना = ६४ पैसा = २५६ दाम)</span>
                  </div>
                </div>

                {/* 2. Terai Format */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-teal-200 dark:border-teal-800/60 shadow-xs relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                      तराई प्रणाली (B-K-D)
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 font-semibold">
                      तराई तथा भित्री मधेस
                    </span>
                  </div>

                  <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono tracking-tight leading-relaxed">
                    <span className="text-teal-700 dark:text-teal-400">{outBigha}</span> बिघा - {' '}
                    <span className="text-teal-700 dark:text-teal-400">{outKatha}</span> कट्ठा - {' '}
                    <span className="text-teal-700 dark:text-teal-400">{outDhur}</span> धुर - {' '}
                    <span className="text-teal-700 dark:text-teal-400">{outKanwa}</span> कन्वा
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-700 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                    <span>(१ बिघा = २० कट्ठा = ४०० धुर = ६४०० कन्वा)</span>
                  </div>
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
          )}

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
                  <span>{mode === 'tax' ? 'कर हिसाब कपी गर्नुहोस्' : 'हिसाब कपी गर्नुहोस् (Copy Summary)'}</span>
                </>
              )}
            </button>

            <a
              href="/land-solution-demo/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 hover:underline font-semibold"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>कित्ताकाट तथा डिजिटल नापजाँचको लागि Land Solution वेब डेमो प्रयोग गर्नुहोस् &rarr;</span>
            </a>
          </div>

        </div>

        {/* AdSense Slot below calculator */}
        <AdSenseSlot userFacingLabel="विज्ञापन (AdSense In-Feed)" />

      </div>
    </section>
  );
}
