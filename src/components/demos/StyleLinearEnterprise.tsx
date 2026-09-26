'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Command, 
  Terminal, 
  ArrowRight, 
  Calculator, 
  Layers, 
  Coins, 
  Scale, 
  FileStack, 
  Sparkles, 
  Cpu, 
  Compass,
  Building2,
  CheckCircle2
} from 'lucide-react';
import UniversalSmartSearch from './UniversalSmartSearch';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';

export default function StyleLinearEnterprise() {
  const enterpriseFeatures = [
    { title: 'Zero Rounding Drift', desc: 'नेपाल नापी ऐन २०१९ बमोजिम ६ दशमलव स्थानसम्म शुद्ध क्षेत्रफल परिमाण।', tag: 'ACCURACY' },
    { title: 'Offline-First Engine', desc: 'इन्टरनेट नहुँदा पनि ब्राउजरको LocalStorage र क्यासमा पूर्ण काम गर्ने।', tag: 'PRIVACY' },
    { title: 'Official Print Slips', desc: 'जग्गाधनी, कित्ता नम्बर र मिति सहितको सफा A4 नापी स्लिप तत्काल प्रिन्ट।', tag: 'EXECUTIVE' },
  ];

  return (
    <div className="space-y-12 text-slate-100 max-w-5xl mx-auto font-sans">
      
      {/* 1. Silicon Valley Linear Hero */}
      <section className="text-center space-y-5 pt-4">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>brbhatta.com &bull; Enterprise Cadastre Infrastructure</span>
        </div>

        <h1 className="text-3xl sm:text-6xl font-black tracking-tight text-white leading-tight">
          Precision Cadastre Engine & <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Executive Land Intelligence
          </span>
        </h1>

        <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto font-normal leading-relaxed">
          इन्जिनियर, नापी सर्भेयर र कानुन व्यवसायीहरूका लागि निर्मित तीव्र, शुद्ध र आधुनिक कम्प्युटेसनल इन्टरफेस।
        </p>

        {/* Master Universal Search */}
        <div className="pt-2 max-w-3xl mx-auto">
          <UniversalSmartSearch placeholder="कमान्ड वा टुल खोज्नुहोस् (⌘K / Ctrl+K): जग्गा, PDF, प्रिती, मालपोत..." />
        </div>

      </section>

      {/* 2. Enterprise Metric Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {enterpriseFeatures.map((feat, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between space-y-2 backdrop-blur-md"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                {feat.tag}
              </span>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <h3 className="text-sm font-bold text-white">
              {feat.title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 3. The Precision Workstation Module */}
      <section className="bg-slate-900/80 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-400" />
              <span>डिजिटल क्षेत्रफल रूपान्तरण इन्जिन</span>
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              रोपनी-आना-पैसा-दाम / बिघा-कट्ठा-धुर / वर्गमिटर / वर्गफिट
            </p>
          </div>

          <TithiWidget />
        </div>

        <LandCalculator />
      </section>

      {/* 4. Quick Architecture Links */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
        <Link
          href="/tools/kitta-kat-checker"
          className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/60 transition group"
        >
          <Scale className="w-5 h-5 text-emerald-400 mb-2" />
          <div className="font-bold text-white group-hover:text-emerald-400 transition">
            कित्ताकाट मापदण्ड
          </div>
          <div className="text-[10px] text-slate-500 mt-1">
            १३० m² / ६७५ m² नियम
          </div>
        </Link>

        <Link
          href="/tools/malpot-calculator"
          className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/60 transition group"
        >
          <Coins className="w-5 h-5 text-amber-400 mb-2" />
          <div className="font-bold text-white group-hover:text-amber-400 transition">
            मालपोत रजिस्ट्रेसन कर
          </div>
          <div className="text-[10px] text-slate-500 mt-1">
            आ.व. २०८१/८२ दर
          </div>
        </Link>

        <Link
          href="/tools/preeti-to-unicode"
          className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/60 transition group"
        >
          <Terminal className="w-5 h-5 text-blue-400 mb-2" />
          <div className="font-bold text-white group-hover:text-blue-400 transition">
            Preeti ⇄ Unicode
          </div>
          <div className="text-[10px] text-slate-500 mt-1">
            द्रुत फन्ट रूपान्तरण
          </div>
        </Link>

        <Link
          href="/tools/survey-offices"
          className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/60 transition group"
        >
          <Building2 className="w-5 h-5 text-purple-400 mb-2" />
          <div className="font-bold text-white group-hover:text-purple-400 transition">
            ७७ जिल्ला नापी
          </div>
          <div className="text-[10px] text-slate-500 mt-1">
            सम्पर्क निर्देशिका
          </div>
        </Link>
      </div>

    </div>
  );
}
