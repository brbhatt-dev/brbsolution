'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Coins, 
  TrendingUp, 
  ShieldCheck, 
  Calculator, 
  Receipt, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Scale, 
  Layers,
  Percent,
  Wallet
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';

export default function StyleFintechLuxury() {
  const [propertyValuation, setPropertyValuation] = useState<string>('5000000');
  const [selectedMunicipality, setSelectedMunicipality] = useState<'metro' | 'submetro' | 'muni' | 'rural'>('metro');
  const [hasFemaleDiscount, setHasFemaleDiscount] = useState<boolean>(true);

  // Quick live estimated tax computation
  const valNum = parseFloat(propertyValuation) || 0;
  const regRate = selectedMunicipality === 'metro' ? 0.05 : selectedMunicipality === 'submetro' ? 0.045 : selectedMunicipality === 'muni' ? 0.04 : 0.02;
  const baseRegFee = valNum * regRate;
  const discount = hasFemaleDiscount ? baseRegFee * 0.25 : 0;
  const finalRegFee = Math.max(0, baseRegFee - discount);

  const metrics = [
    { label: 'दैनिक प्रयोगकर्ता', val: '१०,०००+', sub: 'नेपालभर' },
    { label: 'डिजिटल टुल्स', val: '१५+ टुल्स', sub: 'नि:शुल्क' },
    { label: 'गणितीय शुद्धता', val: '१००%', sub: 'प्रमाणित सूत्र' },
    { label: 'आर्थिक वर्ष', val: '२०८१/८२', sub: 'अद्यावधिक' },
  ];

  return (
    <div className="space-y-12">
      
      {/* 1. High-End Fintech Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white p-6 sm:p-12 border border-emerald-500/20 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>नेपालको आधुनिक भूमि तथा सम्पत्ति मूल्यांकन प्लेटफर्म</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
            स्मार्ट जग्गा नापी र <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              वित्तीय राजस्व इन्जिन
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            रोपनी-आना र बिघा-कट्ठा क्षेत्रफल गणना, मालपोत रजिस्ट्रेसन दस्तुर, पुँजीगत लाभकर र महिला छुटको पारदर्शी वित्तीय हिसाब।
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 max-w-3xl mx-auto">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-white">{m.val}</div>
                <div className="text-[11px] text-emerald-400 font-semibold">{m.label}</div>
                <div className="text-[10px] text-slate-400">{m.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Interactive Split: Area Calculator + Rapid Tax Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: The Precision Land Engine */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Calculator className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                क्षेत्रफल रूपान्तरण इन्जिन
              </h2>
            </div>
            <span className="text-xs text-slate-500">स्लिप प्रिन्ट उपलब्ध</span>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-sm">
            <LandCalculator />
          </div>
        </div>

        {/* Right: Rapid Land Financial Estimator */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5 text-emerald-400" />
                <h3 className="font-black text-base">मालपोत रजिस्ट्रेसन वित्तीय अनुमान</h3>
              </div>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono">
                २०८१/८२
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-slate-300 font-bold block mb-1">
                  जग्गाको थैली अंक / सरकारी मूल्यांकन (रुपैयाँ):
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-mono">रू</span>
                  <input
                    type="number"
                    value={propertyValuation}
                    onChange={(e) => setPropertyValuation(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm font-bold focus:outline-none focus:border-emerald-400"
                    placeholder="५०,००,०००"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-bold block mb-1">
                  स्थान / नगरपालिका स्तर:
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'metro', label: 'महानगर (५%)' },
                    { id: 'submetro', label: 'उप-महानगर (४.५%)' },
                    { id: 'muni', label: 'नगरपालिका (४%)' },
                    { id: 'rural', label: 'गाउँपालिका (२%)' },
                  ].map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedMunicipality(loc.id as any)}
                      className={`p-2 rounded-lg font-bold border transition text-center cursor-pointer ${
                        selectedMunicipality === loc.id
                          ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-black'
                          : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800'
                      }`}
                    >
                      {loc.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700">
                <div className="text-xs">
                  <div className="font-bold text-white">महिला जग्गाधनी २५% छुट</div>
                  <div className="text-[10px] text-slate-400">नामसारी तथा खरिदमा लागू हुने</div>
                </div>
                <input
                  type="checkbox"
                  checked={hasFemaleDiscount}
                  onChange={(e) => setHasFemaleDiscount(e.target.checked)}
                  className="w-5 h-5 accent-emerald-500 cursor-pointer"
                />
              </div>

              {/* Result Summary Box */}
              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>मूल रजिस्ट्रेसन शुल्क:</span>
                  <span className="font-mono">रू. {baseRegFee.toLocaleString('en-IN')}</span>
                </div>
                {hasFemaleDiscount && (
                  <div className="flex justify-between text-xs text-emerald-400">
                    <span>महिला २५% छुट:</span>
                    <span className="font-mono">- रू. {discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="border-t border-emerald-500/20 pt-2 flex justify-between items-baseline">
                  <span className="text-xs font-bold text-white">अनुमानित बुझाउनुपर्ने कर:</span>
                  <span className="text-lg font-black text-emerald-300 font-mono">
                    रू. {finalRegFee.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <Link
                href="/tools/malpot-calculator"
                className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 transition shadow-lg shadow-emerald-500/20"
              >
                <span>विस्तृत मालपोत क्यालकुलेटर खोल्नुहोस्</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Financial Utilities */}
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/tools/number-to-words"
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition group"
            >
              <Receipt className="w-5 h-5 text-emerald-600 mb-2" />
              <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition">
                अक्षरेपी (Number to Words)
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                चेक तथा रसिद नमुना
              </div>
            </Link>

            <Link
              href="/tools/kitta-kat-checker"
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition group"
            >
              <Scale className="w-5 h-5 text-emerald-600 mb-2" />
              <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition">
                कित्ताकाट मापदण्ड
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                न्यूनतम क्षेत्रफल चेक
              </div>
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
