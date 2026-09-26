'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Cpu, 
  Compass, 
  Terminal, 
  Sliders, 
  Calculator, 
  ArrowRight, 
  Zap, 
  Activity, 
  Eye, 
  Sparkles,
  Layers,
  Crosshair,
  Printer
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';

export default function StyleCyberSpatial() {
  const [aanaSlider, setAanaSlider] = useState<number>(4);

  // Dynamic calculations based on Aana slider
  const sqft = aanaSlider * 342.25;
  const sqm = sqft / 10.7639;
  const ropani = Math.floor(aanaSlider / 16);
  const remAana = aanaSlider % 16;
  const katha = (sqft / 3645).toFixed(2);
  const dhur = (sqft / 182.25).toFixed(2);

  const cyberTools = [
    { title: 'जग्गा नाप क्यालकुलेटर', code: 'SYS.CALC.01', href: '/tools/land-calculator', icon: Calculator, color: 'text-cyan-400' },
    { title: 'Preeti to Unicode Engine', code: 'SYS.FONT.02', href: '/tools/preeti-to-unicode', icon: Terminal, color: 'text-emerald-400' },
    { title: 'फोटो कम्प्रेसर (<२००KB)', code: 'SYS.IMG.03', href: '/tools/image-compressor', icon: Eye, color: 'text-rose-400' },
    { title: 'A4 PDF डकुमेन्ट स्टुडियो', code: 'SYS.DOC.04', href: '/tools/images-to-pdf', icon: Layers, color: 'text-purple-400' },
    { title: 'मालपोत राजस्व म्याट्रिक्स', code: 'SYS.TAX.05', href: '/tools/malpot-calculator', icon: Activity, color: 'text-amber-400' },
    { title: 'भू-उपयोग कित्ताकाट प्रोटोकल', code: 'SYS.RULE.06', href: '/tools/kitta-kat-checker', icon: Crosshair, color: 'text-teal-400' },
  ];

  return (
    <div className="space-y-12 text-slate-100">
      
      {/* 1. Cyber-Spatial Hologram Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-[#030712] border border-cyan-500/40 p-6 sm:p-12 shadow-[0_0_50px_-15px_rgba(6,182,212,0.3)]">
        
        {/* Neon Grid Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-400 text-xs font-mono tracking-wider shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>NEPAL CADASTRE PROTOCOL &bull; v4.0 QUANTUM</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-black tracking-tight leading-none text-white">
            SPATIAL LAND CADASTRE & <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              DIGITAL COMPUTATION HUD
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-cyan-100/70 max-w-xl mx-auto font-mono leading-relaxed">
            नेपालका १६ आनाको १ रोपनी र २० कट्ठाको १ बिघा गणितलाई न्यानो-शुद्धतामा रूपान्तरण गर्ने आधुनिक साइबर इन्जिन।
          </p>

        </div>
      </section>

      {/* 2. THE CYBER HUD INTERACTIVE SLIDER MODULE */}
      <section className="bg-slate-950/90 rounded-3xl border border-cyan-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-cyan-900/50 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 flex items-center justify-center">
              <Sliders className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2 font-mono">
                <span>लाइभ स्लाइडर नापी सिमुलेटर (Instant Slider HUD)</span>
              </h2>
              <p className="text-xs text-cyan-400/80 font-mono">
                तलको स्लाइडर दायाँ-बायाँ सार्नुहोस् — सम्पूर्ण नाप तत्काल परिवर्तन हुन्छ:
              </p>
            </div>
          </div>

          <div className="px-3 py-1 rounded-lg bg-cyan-950 border border-cyan-700/50 text-cyan-300 font-mono text-xs">
            स्थिति: सक्रिय सिमुलेसन
          </div>
        </div>

        {/* The Range Slider */}
        <div className="space-y-3 p-4 sm:p-6 rounded-2xl bg-cyan-950/20 border border-cyan-800/40">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-slate-400">१ आना (३४२.२५ sq.ft)</span>
            <span className="text-base font-black text-cyan-300 bg-cyan-950 px-3 py-1 rounded-lg border border-cyan-500/50">
              {aanaSlider} आना {ropani > 0 ? `(${ropani} रोपनी ${remAana} आना)` : ''}
            </span>
            <span className="text-slate-400">३२ आना (२ रोपनी)</span>
          </div>

          <input
            type="range"
            min="1"
            max="32"
            step="1"
            value={aanaSlider}
            onChange={(e) => setAanaSlider(parseInt(e.target.value))}
            className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />

          {/* Realtime Cyber Gauges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-cyan-500/20 text-center font-mono">
              <span className="text-[10px] text-cyan-400 uppercase tracking-widest block">वर्गफिट (Sq. Feet)</span>
              <span className="text-lg sm:text-xl font-black text-white mt-1 block">
                {sqft.toLocaleString()}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-500/20 text-center font-mono">
              <span className="text-[10px] text-emerald-400 uppercase tracking-widest block">वर्गमिटर (Sq. Meter)</span>
              <span className="text-lg sm:text-xl font-black text-emerald-300 mt-1 block">
                {sqm.toFixed(2)} m²
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-teal-500/20 text-center font-mono">
              <span className="text-[10px] text-teal-400 uppercase tracking-widest block">कट्ठा (Terai Katha)</span>
              <span className="text-lg sm:text-xl font-black text-teal-300 mt-1 block">
                {katha} कट्ठा
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-purple-500/20 text-center font-mono">
              <span className="text-[10px] text-purple-400 uppercase tracking-widest block">धुर (Terai Dhur)</span>
              <span className="text-lg sm:text-xl font-black text-purple-300 mt-1 block">
                {dhur} धुर
              </span>
            </div>
          </div>
        </div>

        {/* Embedded Full Precision Engine */}
        <div className="pt-4 border-t border-cyan-900/40">
          <LandCalculator />
        </div>

      </section>

      {/* 3. Cyber Terminal Tool Deck */}
      <section className="space-y-4">
        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-cyan-400 flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span>EXECUTIVE TOOL SUITE MATRIX</span>
          </span>
          <span className="text-slate-500">६/६ नोड्स अनलाइन</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cyberTools.map((t, idx) => (
            <Link
              key={idx}
              href={t.href}
              className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/60 transition group font-mono flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center justify-between">
                <t.icon className={`w-6 h-6 ${t.color}`} />
                <span className="text-[10px] text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  {t.code}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                  {t.title}
                </h3>
              </div>

              <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-xs text-slate-400 group-hover:text-cyan-400 transition">
                <span>EXECUTE_NODE</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
