'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Check, Eye } from 'lucide-react';

export type DemoStyleId = 'style1' | 'style2' | 'style3' | 'style4';

interface StyleSwitcherBarProps {
  currentStyle: DemoStyleId;
  onChangeStyle: (style: DemoStyleId) => void;
}

export default function StyleSwitcherBar({ currentStyle, onChangeStyle }: StyleSwitcherBarProps) {
  const styles = [
    {
      id: 'style1' as DemoStyleId,
      name: 'Style १: Modern Tech SaaS',
      vibe: 'Linear / Stripe स्टाइल',
      desc: 'सफा, हाइ-टेक, मिनिमल डार्क/लाइट लेआउट',
      badge: 'Silicon Valley Vibe'
    },
    {
      id: 'style2' as DemoStyleId,
      name: 'Style २: Citizen Utility Hub',
      vibe: 'हाम्रोपात्रो / नागरिक एप स्टाइल',
      desc: 'ठूला रंगीन टच टाइल्स र नेपाली पात्रो',
      badge: 'सबैभन्दा सजिलो'
    },
    {
      id: 'style3' as DemoStyleId,
      name: 'Style ३: Engineering Studio',
      vibe: 'AutoCAD / GIS वर्कस्टेशन',
      desc: 'प्राविधिक इन्जिनियरिङ र क्याड स्प्लिट प्यानल',
      badge: 'अमिन / इन्जिनियर'
    },
    {
      id: 'style4' as DemoStyleId,
      name: 'Style ४: Apple Bento Grid',
      vibe: 'आधुनिक बेन्टो ग्रिड ढाँचा',
      desc: 'ठूला सफा कार्डहरू, प्रिमियम र सास-फर्स्ट',
      badge: 'अत्याधुनिक लुक'
    },
  ];

  return (
    <div className="sticky top-16 sm:top-20 z-40 bg-slate-900/95 dark:bg-black/95 backdrop-blur-md text-white border-y border-emerald-500/40 p-3 sm:p-4 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Left Heading */}
        <div className="flex items-center gap-2 text-center md:text-left shrink-0">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center shrink-0">
            <Eye className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-1.5">
              <span>लाइभ डिजाइन छनोट (Live Design Switcher)</span>
              <span className="text-[10px] bg-emerald-500 text-black px-1.5 py-0.2 rounded font-extrabold">
                ४ वटा विकल्पहरू
              </span>
            </h3>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              तलका बटन थिचेर आफूलाई मन पर्ने डिजाइन रोज्नुहोस्:
            </p>
          </div>
        </div>

        {/* 4 Interactive Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto scrollbar-none no-scrollbar justify-start md:justify-end">
          {styles.map((s) => {
            const isSelected = currentStyle === s.id;
            return (
              <button
                key={s.id}
                onClick={() => onChangeStyle(s.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 font-black shadow-md scale-102 ring-2 ring-emerald-300'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                <div className="text-left">
                  <div className="leading-tight">{s.name}</div>
                  <div className={`text-[9px] ${isSelected ? 'text-slate-900 font-semibold' : 'text-slate-400 font-normal'}`}>
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
