'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Search, 
  Calculator, 
  ArrowRight, 
  Share2, 
  Coins, 
  Scale, 
  FileText, 
  ArrowRightLeft, 
  ImageIcon, 
  Building2, 
  Check, 
  Delete,
  Sparkles
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';
import UniversalSmartSearch from './UniversalSmartSearch';

export default function StyleMobileSuperApp() {
  const [thumbInput, setThumbInput] = useState<string>('4');
  const [unitMode, setUnitMode] = useState<'aana' | 'ropani' | 'katha' | 'sqft'>('aana');

  // Math for thumb input
  const val = parseFloat(thumbInput) || 0;
  let calcSummary = { ropaniStr: '', bighaStr: '', sqft: 0, sqm: 0 };
  if (unitMode === 'aana') {
    const totalSqft = val * 342.25;
    calcSummary = {
      ropaniStr: `${Math.floor(val/16)} रोपनी ${val%16} आना`,
      bighaStr: `${(totalSqft / 182.25).toFixed(1)} धुर`,
      sqft: totalSqft,
      sqm: totalSqft / 10.7639
    };
  } else if (unitMode === 'ropani') {
    const totalSqft = val * 5476;
    calcSummary = {
      ropaniStr: `${val} रोपनी (० आना)`,
      bighaStr: `${(totalSqft / 3645).toFixed(1)} कट्ठा`,
      sqft: totalSqft,
      sqm: totalSqft / 10.7639
    };
  } else if (unitMode === 'katha') {
    const totalSqft = val * 3645;
    calcSummary = {
      ropaniStr: `${(totalSqft / 342.25).toFixed(1)} आना`,
      bighaStr: `${val} कट्ठा`,
      sqft: totalSqft,
      sqm: totalSqft / 10.7639
    };
  } else {
    calcSummary = {
      ropaniStr: `${(val / 342.25).toFixed(2)} आना`,
      bighaStr: `${(val / 182.25).toFixed(2)} धुर`,
      sqft: val,
      sqm: val / 10.7639
    };
  }

  const handleKeypadPress = (digit: string) => {
    if (digit === 'C') {
      setThumbInput('0');
    } else if (digit === 'DEL') {
      setThumbInput(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
    } else {
      setThumbInput(prev => prev === '0' ? digit : prev + digit);
    }
  };

  const serviceBubbles = [
    { name: 'जग्गा नाप', icon: Calculator, href: '/tools/land-calculator', bg: 'bg-emerald-500' },
    { name: 'मालपोत कर', icon: Coins, href: '/tools/malpot-calculator', bg: 'bg-amber-500' },
    { name: 'कित्ताकाट', icon: Scale, href: '/tools/kitta-kat-checker', bg: 'bg-blue-600' },
    { name: 'तस्विर PDF', icon: FileText, href: '/tools/images-to-pdf', bg: 'bg-red-500' },
    { name: 'युनिकोड', icon: ArrowRightLeft, href: '/tools/preeti-to-unicode', bg: 'bg-purple-600' },
    { name: 'कम्प्रेसर', icon: ImageIcon, href: '/tools/image-compressor', bg: 'bg-rose-500' },
    { name: 'नापी अफिस', icon: Building2, href: '/tools/survey-offices', bg: 'bg-teal-600' },
  ];

  return (
    <div className="space-y-6 max-w-md mx-auto font-sans pb-12">
      
      {/* 1. Mobile App Top Bar */}
      <div className="p-4 rounded-3xl bg-slate-900 text-white shadow-lg space-y-4">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase">नेपाल डिजिटल नापी</div>
              <div className="text-xs font-black text-white">काठमाडौँ, नेपाल</div>
            </div>
          </div>

          <div className="text-[11px] font-bold bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full">
            सुपर-एप मोड
          </div>
        </div>

        {/* Master Universal Search in Mobile View */}
        <UniversalSmartSearch variant="compact" placeholder="खोज्नुहोस्: जग्गा, PDF, मालपोत, कित्ता..." />

      </div>

      {/* 2. Horizontal Service Story Bubbles */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
            द्रुत सेवाहरू (Quick Services)
          </span>
          <Link href="/tools" className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
            सबै &rarr;
          </Link>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none no-scrollbar px-1">
          {serviceBubbles.map((bubble, idx) => (
            <Link
              key={idx}
              href={bubble.href}
              className="flex flex-col items-center gap-1.5 shrink-0 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${bubble.bg} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                <bubble.icon className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                {bubble.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* 3. SHOWSTOPPER: 1-Hand Thumb Touch Keypad Calculator */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 shadow-xl space-y-4">
        
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="font-black text-sm text-slate-900 dark:text-white">
              १-हातले चलाउने टच क्यालकुलेटर (Thumb Keypad)
            </h3>
          </div>
          <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-mono text-slate-500">
            मोबाइल-फर्स्ट
          </span>
        </div>

        {/* Selected Unit Switcher */}
        <div className="grid grid-cols-4 gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-center">
          {[
            { id: 'aana', label: 'आना' },
            { id: 'ropani', label: 'रोपनी' },
            { id: 'katha', label: 'कट्ठा' },
            { id: 'sqft', label: 'वर्गफिट' },
          ].map((u) => (
            <button
              key={u.id}
              onClick={() => setUnitMode(u.id as any)}
              className={`py-1.5 rounded-lg transition cursor-pointer ${
                unitMode === u.id
                  ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-300 font-black shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {u.label}
            </button>
          ))}
        </div>

        {/* Big Display Screen */}
        <div className="p-4 rounded-2xl bg-slate-950 text-white space-y-2">
          <div className="flex justify-between items-baseline text-xs text-slate-400 font-mono">
            <span>प्रविष्ट एकाइ: {unitMode.toUpperCase()}</span>
            <span>नेपाल आधिकारिक दर</span>
          </div>

          <div className="text-3xl font-black text-emerald-400 font-mono tracking-tight flex items-baseline justify-between">
            <span>{thumbInput}</span>
            <span className="text-xs text-slate-400 font-sans">
              {unitMode === 'aana' ? 'आना' : unitMode === 'ropani' ? 'रोपनी' : unitMode === 'katha' ? 'कट्ठा' : 'sq.ft'}
            </span>
          </div>

          <div className="border-t border-slate-800 pt-2 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
            <div>
              <span className="text-slate-400 block text-[9px] uppercase">पहाड नाप:</span>
              <strong className="text-white">{calcSummary.ropaniStr}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[9px] uppercase">तराई नाप:</span>
              <strong className="text-white">{calcSummary.bighaStr}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[9px] uppercase">वर्गफिट:</span>
              <strong className="text-emerald-300">{calcSummary.sqft.toLocaleString()} sq.ft</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[9px] uppercase">वर्गमिटर:</span>
              <strong className="text-teal-300">{calcSummary.sqm.toFixed(2)} m²</strong>
            </div>
          </div>
        </div>

        {/* Thumb Keypad Grid */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', 'DEL'].map((k) => (
            <button
              key={k}
              onClick={() => handleKeypadPress(k)}
              className={`py-3.5 rounded-2xl font-black text-lg transition active:scale-95 cursor-pointer shadow-xs flex items-center justify-center ${
                k === 'C'
                  ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300'
                  : k === 'DEL'
                    ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
              }`}
            >
              {k === 'DEL' ? <Delete className="w-5 h-5" /> : k}
            </button>
          ))}
        </div>

        {/* Instant Share / Full Mode Buttons */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            href="/tools/land-calculator"
            className="flex-1 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center shadow-md transition"
          >
            आधिकारिक स्लिप प्रिन्ट गर्नुहोस् &rarr;
          </Link>
        </div>

      </section>

      {/* 4. Nepali Patro Tithi Card */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex justify-center">
        <TithiWidget />
      </div>

    </div>
  );
}
