'use client';

import React, { useState, useEffect } from 'react';
import { Compass, Wallet, FileCode, HelpCircle, Mail, Sparkles } from 'lucide-react';

export default function QuickTabNav() {
  const [activeSection, setActiveSection] = useState('land-solution');

  const tabs = [
    { id: 'land-solution', name: 'ल्याण्ड सोलुसन', icon: Compass, color: 'text-emerald-500', activeBg: 'bg-emerald-600 text-white' },
    { id: 'hamro-kosh', name: 'हाम्रो कोष', icon: Wallet, color: 'text-indigo-500', activeBg: 'bg-indigo-600 text-white' },
    { id: 'autocad-lsp', name: 'AutoCAD LSP', icon: FileCode, color: 'text-amber-500', activeBg: 'bg-amber-600 text-white' },
    { id: 'faq', name: 'FAQ', icon: HelpCircle, color: 'text-purple-500', activeBg: 'bg-purple-600 text-white' },
    { id: 'contact', name: 'सम्पर्क & म्याप', icon: Mail, color: 'text-blue-500', activeBg: 'bg-blue-600 text-white' },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-14 sm:top-18 md:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-2.5 px-3 shadow-xs">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider pr-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>क्विक ट्याब:</span>
          </span>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition-all shrink-0 min-h-[36px] ${
                  isActive
                    ? `${tab.activeBg} shadow-xs scale-[1.02]`
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 active:scale-95'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : tab.color}`} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        <a
          href="#land-solution"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('land-solution');
          }}
          className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 shrink-0 px-2"
        >
          <span>लाइभ डेमो →</span>
        </a>
      </div>
    </div>
  );
}
