'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  ArrowRight, 
  Terminal, 
  Layers, 
  Compass, 
  FileCode, 
  Building2, 
  Scale, 
  Coins, 
  Play, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Crosshair,
  MapPin,
  FileSpreadsheet
} from 'lucide-react';
import LandCalculator from '../LandCalculator';

export default function StyleEngineeringStudio() {
  const [activePane, setActivePane] = useState<'calc' | 'scripts' | 'kml'>('calc');

  return (
    <div className="space-y-8">
      
      {/* 1. Engineering Top Command Header */}
      <section className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-md space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Crosshair className="w-4 h-4 animate-spin text-emerald-400" />
              <span>NEPAL CADASTRE & SURVEY ENGINEERING STUDIO [MUTM 84°E]</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              नापी, नक्सा तथा इन्जिनियरिङ वर्कस्टेशन
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/land-solution-demo/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-xs"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Launch Land Solution WebApp</span>
              <ExternalLink className="w-3 h-3 opacity-75" />
            </a>
          </div>
        </div>

        {/* Studio Technical Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
            <span className="text-slate-400 block text-[10px]">COORDINATE REF:</span>
            <span className="text-emerald-400 font-bold">MUTM / Everest 1830</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
            <span className="text-slate-400 block text-[10px]">CENTRAL MERIDIANS:</span>
            <span className="text-slate-200 font-bold">81°E, 84°E, 87°E</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
            <span className="text-slate-400 block text-[10px]">CADASTRAL STANDARDS:</span>
            <span className="text-slate-200 font-bold">130 sq.m / 8m Road</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
            <span className="text-slate-400 block text-[10px]">SYSTEM STATUS:</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              All 17 Tools Online
            </span>
          </div>
        </div>
      </section>

      {/* 2. Studio Workstation Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Interactive Calculator Panel (8 cols) */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-1 shadow-xs">
          <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
              <Terminal className="w-4 h-4 text-emerald-600" />
              <span>Primary Cadastral Calculation Engine</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Pahadi & Terai Pure Carry</span>
          </div>

          <LandCalculator />
        </div>

        {/* Right Column: Surveyor Quick Palette (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Engineering Palette Card */}
          <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
              ENGINEERING TOOL PALETTE:
            </span>

            <div className="space-y-2">
              <Link
                href="/tools/excel-to-kml"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 group transition-colors"
              >
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Survey Excel ➔ Google Earth (KML)</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/tools/autocad-scripts"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 group transition-colors"
              >
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>AutoCAD Surveyor LISP (.lsp)</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/tools/multi-kitta-calculator"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 group transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Multi-Kitta Area Accumulator</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/tools/kitta-kat-checker"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 group transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>Kitta-Kat Road & Setback Checker</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/tools/survey-offices"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 group transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>77 District Survey Offices Directory</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Quick Legal Ref Card */}
          <div className="p-5 rounded-3xl bg-slate-900 text-slate-300 border border-slate-800 space-y-2 text-xs">
            <span className="text-emerald-400 font-bold block text-[11px] uppercase">
              आधिकारिक नापी ऐन & नियमावली:
            </span>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              जग्गा (नाप जाँच) ऐन २०१९, भू-उपयोग नियमावली २०७९ (संशोधन २०८१) र नापी विभागका सबै १२ वटा आधिकारिक निर्देशिकाहरू।
            </p>
            <Link
              href="/laws"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold pt-1"
            >
              <span>कानुन संग्रह हेर्नुहोस् &rarr;</span>
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
