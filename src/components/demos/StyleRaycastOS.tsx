'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Command, 
  Search, 
  Calculator, 
  FileStack, 
  ArrowRightLeft, 
  ImageIcon, 
  FileText, 
  Coins, 
  Scale, 
  ArrowRight, 
  Check, 
  Sparkles,
  Keyboard,
  Compass,
  Building2,
  FolderOpen
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';

export default function StyleRaycastOS() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeQuickTool, setActiveQuickTool] = useState<'calc' | 'tithi' | 'laws'>('calc');

  const commands = [
    { title: 'जग्गा नाप क्यालकुलेटर (स्लिप प्रिन्ट)', tag: 'कन्भर्टर', shortcut: '⌘1', icon: Calculator, href: '/tools/land-calculator' },
    { title: 'Preeti ⇄ Nepali Unicode', tag: 'युटिलिटी', shortcut: '⌘2', icon: ArrowRightLeft, href: '/tools/preeti-to-unicode' },
    { title: 'फोटो कम्प्रेसर (<२००KB लोकसेवा)', tag: 'तस्विर', shortcut: '⌘3', icon: ImageIcon, href: '/tools/image-compressor' },
    { title: 'तस्विरबाट क्रमबद्ध A4 PDF', tag: 'कागजात', shortcut: '⌘4', icon: FileText, href: '/tools/images-to-pdf' },
    { title: 'मालपोत तथा रजिस्ट्रेसन कर (२०८१)', tag: 'राजस्व', shortcut: '⌘5', icon: Coins, href: '/tools/malpot-calculator' },
    { title: 'कित्ताकाट मापदण्ड तथा भू-उपयोग नियम', tag: 'ऐन-नियम', shortcut: '⌘6', icon: Scale, href: '/tools/kitta-kat-checker' },
    { title: '७७ जिल्ला नापी कार्यालय निर्देशिका', tag: 'सम्पर्क', shortcut: '⌘7', icon: Building2, href: '/tools/survey-offices' },
  ];

  const filteredCommands = searchQuery.trim() === '' 
    ? commands 
    : commands.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.tag.includes(searchQuery));

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      
      {/* 1. OS Command Spotlight Bar */}
      <section className="relative">
        <div className="p-3 sm:p-4 rounded-3xl bg-slate-900/95 dark:bg-black/95 text-white border-2 border-emerald-500/40 shadow-2xl backdrop-blur-2xl space-y-3">
          
          {/* Top Bar Label */}
          <div className="flex items-center justify-between text-[11px] px-2 text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono text-emerald-400">BRBhatta OS &bull; Command Center v2.5</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono">
              <Keyboard className="w-3.5 h-3.5" />
              <span>नेपालको फास्टेस्ट टुल लन्चर</span>
            </div>
          </div>

          {/* Interactive Search Input */}
          <div className="relative flex items-center">
            <Search className="w-5 h-5 absolute left-4 text-emerald-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="कुनै पनि टुल वा नियम खोज्नुहोस् (जस्तै: जग्गा, PDF, प्रिती, मालपोत)..."
              className="w-full pl-12 pr-20 py-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 text-sm sm:text-base font-bold focus:outline-none focus:border-emerald-400 transition"
            />
            <div className="absolute right-3 hidden sm:flex items-center gap-1 bg-slate-700/80 px-2 py-1 rounded-lg text-[10px] font-mono text-slate-300">
              <span>ESC</span>
            </div>
          </div>

          {/* Filtered Instant Command Results */}
          <div className="space-y-1 pt-1 max-h-72 overflow-y-auto pr-1">
            {filteredCommands.map((cmd, idx) => (
              <Link
                key={idx}
                href={cmd.href}
                className="p-2.5 rounded-xl hover:bg-slate-800/90 transition flex items-center justify-between group border border-transparent hover:border-slate-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-black transition">
                    <cmd.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition">
                      {cmd.title}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {cmd.tag}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 hidden sm:inline">
                    {cmd.shortcut}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Embedded Floating Workstation Canvas */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
        
        {/* Module Switcher Tabs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="space-y-1">
            <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-500" />
              <span>डिजिटल वर्कस्टेशन मोड्युल (Live Workstation)</span>
            </h2>
            <p className="text-xs text-slate-500">
              सिधै क्षेत्रफल निकाल्नुहोस् वा स्लिप प्रिन्ट गर्नुहोस्।
            </p>
          </div>

          <TithiWidget />
        </div>

        {/* The Live Calculator App */}
        <LandCalculator />

      </section>

      {/* 3. Floating Bottom macOS App Dock */}
      <div className="sticky bottom-6 z-30 flex justify-center px-4">
        <div className="p-2 sm:p-2.5 rounded-2xl bg-slate-900/90 dark:bg-black/90 text-white border border-slate-700/80 shadow-2xl backdrop-blur-xl flex items-center gap-2 sm:gap-3">
          
          {[
            { name: 'जग्गा नाप', icon: Calculator, href: '/tools/land-calculator', color: 'text-emerald-400' },
            { name: 'युनिकोड', icon: ArrowRightLeft, href: '/tools/preeti-to-unicode', color: 'text-blue-400' },
            { name: 'कम्प्रेसर', icon: ImageIcon, href: '/tools/image-compressor', color: 'text-rose-400' },
            { name: 'A4 PDF', icon: FileText, href: '/tools/images-to-pdf', color: 'text-red-400' },
            { name: 'मालपोत', icon: Coins, href: '/tools/malpot-calculator', color: 'text-amber-400' },
            { name: 'कित्ताकाट', icon: Scale, href: '/tools/kitta-kat-checker', color: 'text-purple-400' },
          ].map((dock, idx) => (
            <Link
              key={idx}
              href={dock.href}
              className="p-2 sm:p-2.5 rounded-xl hover:bg-slate-800/90 transition flex flex-col items-center gap-1 group transform hover:-translate-y-1.5"
            >
              <dock.icon className={`w-5 h-5 ${dock.color}`} />
              <span className="text-[10px] text-slate-300 font-bold whitespace-nowrap">
                {dock.name}
              </span>
            </Link>
          ))}

        </div>
      </div>

    </div>
  );
}
