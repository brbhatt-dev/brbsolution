'use client';

import React from 'react';
import { Eye, Check, Search, Sparkles } from 'lucide-react';

export type DemoStyleId = 
  | 'style1' 
  | 'style2' 
  | 'style3' 
  | 'style4'
  | 'style5'
  | 'style6'
  | 'style7'
  | 'style8'
  | 'style9'
  | 'style10'
  | 'style11'
  | 'style12'
  | 'style13'
  | 'style14'
  | 'style15'
  | 'style16'
  | 'style17';

interface StyleSwitcherBarProps {
  currentStyle: DemoStyleId;
  onChangeStyle: (style: DemoStyleId) => void;
}

export default function StyleSwitcherBar({ currentStyle, onChangeStyle }: StyleSwitcherBarProps) {
  const styles = [
    {
      id: 'style13' as DemoStyleId,
      name: 'Style १३: Perplexity Deep Search',
      vibe: 'स्मार्ट एआई सर्च इन्जिन',
      badge: '🔥 BEST SEARCH',
      highlight: true
    },
    {
      id: 'style14' as DemoStyleId,
      name: 'Style १४: Bloomberg Terminal',
      vibe: 'वित्तीय टिमर र म्याट्रिक्स',
      badge: 'PRO FINANCE',
      highlight: true
    },
    {
      id: 'style15' as DemoStyleId,
      name: 'Style १५: Gov.uk Minimal Standard',
      vibe: 'आधिकारिक डिजिटल नेपाल',
      badge: 'विश्वस्तरीय सरकारी',
      highlight: true
    },
    {
      id: 'style16' as DemoStyleId,
      name: 'Style १६: Linear Enterprise',
      vibe: 'Stripe / Linear स्लिक सास',
      badge: 'एक्जिक्युटिभ',
      highlight: true
    },
    {
      id: 'style17' as DemoStyleId,
      name: 'Style १७: Mobile Super-App',
      vibe: '१-हात टच किप्याड र बबल्स',
      badge: 'सुपर-एप',
      highlight: true
    },
    {
      id: 'style9' as DemoStyleId,
      name: 'Style ९: Visual Parcel Map',
      vibe: 'नक्सामा प्लट छुने इन्जिन',
      badge: 'म्याप स्टुडियो',
      highlight: false
    },
    {
      id: 'style10' as DemoStyleId,
      name: 'Style १०: Raycast OS',
      vibe: 'Spotlight & Floating Dock',
      badge: 'कमान्ड सेन्टर',
      highlight: false
    },
    {
      id: 'style11' as DemoStyleId,
      name: 'Style ११: Neo-Brutalist Pop',
      vibe: 'Bold Gumroad / Retrowave',
      badge: 'बोल्ड पप',
      highlight: false
    },
    {
      id: 'style12' as DemoStyleId,
      name: 'Style १२: Cyber Spatial HUD',
      vibe: 'लाइभ स्लाइडर + होलोग्राफिक',
      badge: 'फ्युचरिस्टिक',
      highlight: false
    },
    {
      id: 'style1' as DemoStyleId,
      name: 'Style १: Modern Tech SaaS',
      vibe: 'Linear / Stripe',
      badge: 'सिलिकन भ्याली',
      highlight: false
    },
    {
      id: 'style2' as DemoStyleId,
      name: 'Style २: Citizen Utility',
      vibe: 'हाम्रोपात्रो / नागरिक एप',
      badge: 'मोबाइल-फर्स्ट',
      highlight: false
    },
    {
      id: 'style3' as DemoStyleId,
      name: 'Style ३: CAD & Cadastre',
      vibe: 'AutoCAD / GIS इन्जिनियर',
      badge: 'प्राविधिक',
      highlight: false
    },
    {
      id: 'style4' as DemoStyleId,
      name: 'Style ४: Apple Bento Grid',
      vibe: 'आधुनिक बेन्टो ग्रिड',
      badge: 'एप्पल लुक',
      highlight: false
    },
    {
      id: 'style5' as DemoStyleId,
      name: 'Style ५: GovTech Nepal',
      vibe: 'आधिकारिक नागरिक पोर्टल',
      badge: 'विश्वसनीय',
      highlight: false
    },
    {
      id: 'style6' as DemoStyleId,
      name: 'Style ६: Micro-Tool Rapid',
      vibe: 'iLovePDF / Tool-First',
      badge: 'द्रुत औजार',
      highlight: false
    },
    {
      id: 'style7' as DemoStyleId,
      name: 'Style ७: Fintech & Wealth',
      vibe: 'Stripe / eSewa वित्तीय',
      badge: 'सम्पत्ति मूल्यांकन',
      highlight: false
    },
    {
      id: 'style8' as DemoStyleId,
      name: 'Style ८: Nordic Editorial',
      vibe: 'Kinfolk / Substack',
      badge: 'शान्त मिनिमलिस्ट',
      highlight: false
    },
  ];

  return (
    <div className="sticky top-16 sm:top-20 z-40 bg-slate-900/95 dark:bg-black/95 backdrop-blur-md text-white border-y border-emerald-500/40 p-3 sm:p-4 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-3">
        
        {/* Top Info Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center shrink-0">
              <Search className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                <span>लाइभ डिजाइन छनोट (Live Design Switcher)</span>
                <span className="text-[10px] bg-gradient-to-r from-emerald-500 to-teal-400 text-black px-2 py-0.5 rounded font-black">
                  १७ वटा शैलीहरू (17 Designs Ready)
                </span>
              </h3>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                विशेष गरी <strong>Style १३ (Perplexity AI Search)</strong> र <strong>Style १४, १५, १६, १७</strong> हेर्नुहोस्:
              </p>
            </div>
          </div>

          <div className="text-[11px] font-mono text-emerald-400 hidden md:block">
            सक्रिय: <strong>{styles.find(s => s.id === currentStyle)?.name}</strong>
          </div>
        </div>

        {/* 17 Horizontal Scrollable Selector Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none no-scrollbar">
          {styles.map((s) => {
            const isSelected = currentStyle === s.id;
            return (
              <button
                key={s.id}
                onClick={() => onChangeStyle(s.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 font-black shadow-lg scale-102 ring-2 ring-emerald-300'
                    : s.highlight
                      ? 'bg-slate-800 text-emerald-300 border border-emerald-500/60 hover:bg-slate-700'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 hover:border-slate-600'
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3] shrink-0" />}
                <div className="text-left">
                  <div className="leading-tight whitespace-nowrap flex items-center gap-1.5">
                    <span>{s.name}</span>
                    {s.highlight && !isSelected && (
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1 rounded font-black">
                        NEW
                      </span>
                    )}
                  </div>
                  <div className={`text-[10px] whitespace-nowrap ${isSelected ? 'text-slate-900 font-semibold' : 'text-slate-400 font-normal'}`}>
                    {s.vibe}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
