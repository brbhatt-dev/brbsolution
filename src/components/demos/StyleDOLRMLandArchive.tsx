'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Coins, 
  Scale, 
  FileText, 
  Calculator, 
  Search, 
  ShieldCheck, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  FileCheck, 
  Receipt,
  Download,
  PhoneCall,
  Mail,
  UserCheck,
  Percent
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';
import UniversalSmartSearch from './UniversalSmartSearch';

export default function StyleDOLRMLandArchive() {
  const [municipalityType, setMunicipalityType] = useState<'metro' | 'submetro' | 'muni' | 'rural'>('metro');
  const [propertyPrice, setPropertyPrice] = useState<string>('6000000');
  const [isFemale, setIsFemale] = useState<boolean>(true);

  // Quick live DOLRM registration fee formula
  const priceNum = parseFloat(propertyPrice) || 0;
  const rate = municipalityType === 'metro' ? 0.05 : municipalityType === 'submetro' ? 0.045 : municipalityType === 'muni' ? 0.04 : 0.02;
  const rawFee = priceNum * rate;
  const discountAmount = isFemale ? rawFee * 0.25 : 0;
  const netFee = Math.max(0, rawFee - discountAmount);

  return (
    <div className="space-y-8 font-sans text-slate-800 dark:text-slate-100 max-w-6xl mx-auto">
      
      {/* 1. Official DOLRM Header (dolrm.gov.np Style) */}
      <header className="bg-white dark:bg-slate-900 border-t-4 border-blue-800 border-x border-b border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-5 sm:p-7 space-y-4">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-blue-50 dark:bg-blue-950/40 rounded-2xl border border-blue-200 dark:border-blue-900 flex items-center justify-center p-2 shadow-xs">
              <span className="text-3xl sm:text-4xl">🇳🇵</span>
            </div>
            
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-blue-800 dark:text-blue-400 uppercase tracking-wider">
                नेपाल सरकार &bull; भूमि व्यवस्था, सहकारी तथा गरिबी निवारण मन्त्रालय
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                भूमि व्यवस्थापन तथा अभिलेख विभाग (DOLRM)
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                भू-अभिलेख सूचना व्यवस्था प्रणाली (LRIMS) तथा मालपोत राजस्व सेवा
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
            <div className="text-xs font-mono font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-900 dark:text-blue-300 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
              LRIMS 2.0 PORTAL
            </div>
            <TithiWidget />
          </div>
        </div>

        {/* Navy Ribbon Menu */}
        <div className="bg-blue-900 text-white rounded-xl p-2 px-3 flex flex-wrap items-center justify-between gap-2 text-xs font-bold shadow-xs">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="px-2.5 py-1 rounded hover:bg-blue-800 transition">गृहपृष्ठ</Link>
            <span>&bull;</span>
            <Link href="/tools/malpot-calculator" className="px-2.5 py-1 rounded hover:bg-blue-800 transition">मालपोत तथा कर क्यालकुलेटर</Link>
            <span>&bull;</span>
            <Link href="/tools/land-calculator" className="px-2.5 py-1 rounded hover:bg-blue-800 transition">जग्गा नापी</Link>
            <span>&bull;</span>
            <Link href="/laws" className="px-2.5 py-1 rounded hover:bg-blue-800 transition">मालपोत ऐन तथा परिपत्र</Link>
            <span>&bull;</span>
            <Link href="/tools/survey-offices" className="px-2.5 py-1 rounded hover:bg-blue-800 transition">मालपोत कार्यालय सूची</Link>
          </div>

          <span className="text-[11px] font-mono text-blue-200 hidden sm:inline">
            आ.व. २०८१/८२ राजस्व दर लागू
          </span>
        </div>

      </header>

      {/* 2. Official DOLRM Notice Marquee */}
      <div className="bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-700 rounded-r-xl p-2.5 px-4 flex items-center justify-between gap-3 text-xs text-blue-900 dark:text-blue-200 shadow-2xs">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="bg-blue-800 text-white text-[10px] font-bold px-2 py-0.5 rounded shrink-0">
            राजस्व सूचना:
          </span>
          <span className="truncate font-semibold">
            आ.व. २०८१/८२ को आर्थिक ऐन अनुसार महिलाको नाममा जग्गा रजिस्ट्रेसन गर्दा २५% र पहाडी पिछडिएका क्षेत्रमा ३५% सम्म राजस्व छुटको व्यवस्था छ।
          </span>
        </div>
        <Link href="/tools/malpot-calculator" className="shrink-0 font-bold underline text-[11px]">
          हिसाब गर्नुहोस् &rarr;
        </Link>
      </div>

      {/* 3. Universal Search */}
      <UniversalSmartSearch placeholder="मालपोत रजिस्ट्रेसन दस्तुर, ऐन, महिला छुट, वा मालपोत कार्यालय खोज्नुहोस्..." />

      {/* 4. Main Split: Land Engine & LRIMS Real-Time Tax Evaluator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: The Complete Land Area Calculation Engine */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-blue-800 dark:text-blue-400" />
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                जग्गा क्षेत्रफल रूपान्तरण तथा स्लिप प्रिन्ट
              </h2>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">
              रोपनी-बिघा प्रणाली
            </span>
          </div>

          <LandCalculator />
        </div>

        {/* Right: LRIMS Official Tax Calculator Simulator */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-gradient-to-b from-blue-950 to-slate-950 text-white rounded-2xl p-5 sm:p-6 border border-blue-900 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-blue-900 pb-3">
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-blue-400" />
                <h3 className="font-black text-sm">
                  LRIMS रजिस्ट्रेसन दस्तुर मूल्याङ्कन
                </h3>
              </div>
              <span className="text-[10px] bg-blue-800 text-blue-200 px-2 py-0.5 rounded font-mono">
                २०८१/८२
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 font-bold block mb-1">
                  थैली अंक / न्यूनतम सरकारी मूल्यांकन (रुपैयाँ):
                </label>
                <input
                  type="number"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">
                  कार्यालय / स्थानीय तहको प्रकार:
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { id: 'metro', label: 'महानगरपालिका (५%)' },
                    { id: 'submetro', label: 'उप-महानगर (४.५%)' },
                    { id: 'muni', label: 'नगरपालिका (४%)' },
                    { id: 'rural', label: 'गाउँपालिका (२%)' },
                  ].map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setMunicipalityType(loc.id as any)}
                      className={`p-2 rounded-lg font-bold border transition text-center cursor-pointer ${
                        municipalityType === loc.id
                          ? 'bg-blue-600 text-white border-blue-400'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-850'
                      }`}
                    >
                      {loc.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <div>
                  <div className="font-bold text-white">महिला जग्गाधनी २५% छुट</div>
                  <div className="text-[10px] text-slate-400">नामसारी तथा खरिदमा</div>
                </div>
                <input
                  type="checkbox"
                  checked={isFemale}
                  onChange={(e) => setIsFemale(e.target.checked)}
                  className="w-5 h-5 accent-blue-500 cursor-pointer"
                />
              </div>

              {/* Net Output Box */}
              <div className="p-3.5 rounded-xl bg-blue-900/40 border border-blue-700/60 space-y-1.5">
                <div className="flex justify-between text-slate-300">
                  <span>कुल रजिस्ट्रेसन दस्तुर:</span>
                  <span className="font-mono">रू. {rawFee.toLocaleString('en-IN')}</span>
                </div>
                {isFemale && (
                  <div className="flex justify-between text-emerald-400">
                    <span>महिला २५% छुट:</span>
                    <span className="font-mono">- रू. {discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="border-t border-blue-800 pt-1.5 flex justify-between items-baseline font-black">
                  <span>बुझाउनुपर्ने शुद्ध राजस्व:</span>
                  <span className="text-base text-blue-300 font-mono">
                    रू. {netFee.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <Link
                href="/tools/malpot-calculator"
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition shadow-sm"
              >
                <span>विस्तृत मालपोत क्यालकुलेटर चलाउनुहोस्</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Department Information Officer Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 space-y-2 text-xs">
            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-blue-800" />
              <span>विभागका सूचना अधिकारी:</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              भूमि व्यवस्थापन तथा अभिलेख विभाग, बबरमहल, काठमाडौँ &bull; फोन: ०१-४२५५२९०
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
