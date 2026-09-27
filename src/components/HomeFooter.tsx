'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowUp, 
  Mail, 
  Facebook, 
  Instagram, 
  Github,
  Sparkles,
  Layers
} from 'lucide-react';

export default function HomeFooter() {
  const [activeDemo, setActiveDemo] = useState<number>(1);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('brbhatta_footer_demo');
      if (saved) {
        const num = parseInt(saved, 10);
        if (num >= 1 && num <= 5) setActiveDemo(num);
      }
    } catch (e) {}
  }, []);

  const changeDemo = (num: number) => {
    setActiveDemo(num);
    try {
      localStorage.setItem('brbhatta_footer_demo', num.toString());
    } catch (e) {}
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reusable Social Icons Component
  const SocialIcons = ({ size = 'sm' }: { size?: 'sm' | 'xs' }) => (
    <div className="flex items-center gap-1.5 flex-wrap">
      <a
        href="https://www.facebook.com/aabiral.bhatt/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-lg bg-slate-900/90 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 transition-colors shadow-2xs"
        aria-label="Facebook Profile"
        title="Facebook"
      >
        <Facebook className="w-3.5 h-3.5 shrink-0" />
      </a>
      <a
        href="https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4"
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-lg bg-slate-900/90 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 transition-colors shadow-2xs"
        aria-label="Instagram Profile"
        title="Instagram"
      >
        <Instagram className="w-3.5 h-3.5 shrink-0" />
      </a>
      <a
        href="https://www.tiktok.com/@br_bhatta?_r=1&_t=ZS-9A2ydU7e8Rd"
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-lg bg-slate-900/90 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 transition-colors shadow-2xs"
        aria-label="TikTok Profile"
        title="TikTok (@br_bhatta)"
      >
        <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      </a>
      <a
        href="https://x.com/LandSolutionNpl"
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-lg bg-slate-900/90 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 transition-colors shadow-2xs"
        aria-label="X Profile"
        title="X (Twitter)"
      >
        <svg className="w-3 h-3 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <a
        href="https://github.com/brbhatt-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 transition-colors shadow-2xs"
        aria-label="GitHub Profile"
        title="GitHub"
      >
        <Github className="w-3.5 h-3.5 shrink-0" />
      </a>
      <a
        href="mailto:aabiralbhatt@gmail.com"
        className="w-7 h-7 rounded-lg bg-slate-900/90 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 transition-colors shadow-2xs"
        aria-label="Send Email"
        title="Email"
      >
        <Mail className="w-3.5 h-3.5 shrink-0" />
      </a>
      <button
        onClick={scrollToTop}
        className="inline-flex items-center gap-1 ml-1 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-emerald-950 text-slate-300 hover:text-emerald-300 border border-slate-800 hover:border-emerald-700/60 text-[11px] font-semibold transition-all active:scale-95 cursor-pointer shadow-2xs"
        title="शीर्षमा जानुहोस्"
      >
        <span>माथि</span>
        <ArrowUp className="w-3 h-3 text-emerald-400" />
      </button>
    </div>
  );

  // Reusable Nav Links Component
  const NavLinks = () => (
    <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 gap-y-1 text-xs text-slate-400">
      <Link href="/about" className="hover:text-emerald-400 transition-colors">
        हाम्रो बारेमा
      </Link>
      <span className="text-slate-700 hidden sm:inline">&bull;</span>
      <Link href="/contact" className="hover:text-emerald-400 transition-colors">
        सम्पर्क
      </Link>
      <span className="text-slate-700 hidden sm:inline">&bull;</span>
      <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
        गोपनीयता नीति
      </Link>
      <span className="text-slate-700 hidden sm:inline">&bull;</span>
      <Link href="/terms" className="hover:text-emerald-400 transition-colors">
        सर्तहरू
      </Link>
      <span className="text-slate-700 hidden sm:inline">&bull;</span>
      <Link href="/disclaimer" className="hover:text-emerald-400 transition-colors">
        अस्वीकरण
      </Link>
    </div>
  );

  return (
    <footer className="relative bg-[#070e17] text-slate-300 border-t border-emerald-900/40 notranslate overflow-hidden" translate="no">
      
      {/* Top Accent Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-emerald-600 via-teal-400 to-emerald-600" />

      {/* Interactive Live Demo Switcher Bar */}
      <div className="bg-slate-900/90 border-b border-slate-800/80 px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-slate-300 font-bold">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>फुटर डेमो छनोट (Choose 1 of 5 Designs):</span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {[
              { id: 1, label: 'डेमो १: २-लाइन स्लिक' },
              { id: 2, label: 'डेमो २: २-कोलम ब्यालेन्स्ड' },
              { id: 3, label: 'डेमो ३: कम्प्याक्ट सेन्टर' },
              { id: 4, label: 'डेमो ४: स्प्लिट रिबन' },
              { id: 5, label: 'डेमो ५: आइल्यान्ड कार्ड' },
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => changeDemo(d.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeDemo === d.id
                    ? 'bg-emerald-600 text-white shadow-xs scale-105'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DEMO 1: 2-LINE ULTRA-SLEEK BAR (उचाइ मात्र ६५px, एकदमै छरितो र आधुनिक) */}
      {/* ========================================================================= */}
      {activeDemo === 1 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 pb-16 sm:pb-6 space-y-3">
          {/* Line 1: Brand & Tagline on Left, Social on Right */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <img src="/logo.png" alt="BR Bhatta" className="w-6 h-6 object-contain rounded-md bg-white p-0.5" />
              <span className="font-bold text-white text-sm">BR Bhatta</span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-xs text-emerald-400 font-medium hidden sm:inline">
                नेपाली माटो, आफ्नै प्रविधि
              </span>
              <span className="text-slate-600 hidden md:inline">&bull;</span>
              <span className="text-xs text-slate-400 font-normal hidden md:inline">
                इन्जिनियर, अमिन र नागरिकका लागि डिजिटल सहयोगी
              </span>
            </div>

            <SocialIcons />
          </div>

          {/* Line 2: Links on Left, Signature on Right */}
          <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-slate-400 text-center sm:text-left">
            <NavLinks />

            <div className="text-slate-400 text-[11px] shrink-0">
              परिकल्पना तथा निर्माण: <strong className="text-white font-semibold">BR Bhatta</strong> &bull; &copy; {new Date().getFullYear()}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* DEMO 2: 2-COLUMN BALANCED GRID (आधुनिक २-कोलम, सबै कुरा दायाँ-बायाँ सन्तुलित) */}
      {/* ========================================================================= */}
      {activeDemo === 2 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-16 sm:pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            
            {/* Left Column: Brand & Tagline */}
            <div className="space-y-1.5 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <img src="/logo.png" alt="BR Bhatta" className="w-7 h-7 object-contain rounded-md bg-white p-0.5" />
                <span className="font-bold text-white text-base">BR Bhatta</span>
                <span className="text-xs text-emerald-400 font-medium px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/60">
                  Land Solution
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                “नेपाली माटो, आफ्नै प्रविधि — इन्जिनियर, अमिन र आम नागरिकका लागि निःशुल्क डिजिटल सहयोगी।”
              </p>
              <p className="text-[11px] text-slate-500">
                परिकल्पना तथा निर्माण: <strong className="text-slate-300">BR Bhatta</strong> &bull; &copy; {new Date().getFullYear()}
              </p>
            </div>

            {/* Right Column: Links & Social Icons */}
            <div className="space-y-3 flex flex-col items-center md:items-end">
              <SocialIcons />
              <NavLinks />
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* DEMO 3: COMPACT CENTRAL BAND (केन्द्रित तर छरितो, उचाइ एकदम कम) */}
      {/* ========================================================================= */}
      {activeDemo === 3 && (
        <div className="max-w-3xl mx-auto px-4 py-5 pb-16 sm:pb-6 text-center space-y-3">
          {/* Row 1: Brand Logo & Tagline inline */}
          <div className="flex items-center justify-center gap-2 flex-wrap text-xs sm:text-sm">
            <img src="/logo.png" alt="BR Bhatta" className="w-6 h-6 object-contain rounded-md bg-white p-0.5" />
            <span className="font-black text-white">BR Bhatta</span>
            <span className="text-slate-700">&bull;</span>
            <span className="text-emerald-400 font-medium">नेपाली माटो, आफ्नै प्रविधि</span>
            <span className="text-slate-700 hidden sm:inline">&bull;</span>
            <span className="text-slate-400 text-xs hidden sm:inline">डिजिटल सहयोगी</span>
          </div>

          {/* Row 2: Links */}
          <NavLinks />

          {/* Row 3: Social & Signature */}
          <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
            <div className="text-[11px]">
              परिकल्पना तथा निर्माण: <strong className="text-white">BR Bhatta</strong> &bull; सर्वाधिकार सुरक्षित {new Date().getFullYear()}
            </div>
            <SocialIcons />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* DEMO 4: SPLIT RIBBON (शीर्षमा मसिनो एम्ब्रोल्ड रिबन र तल सफा सिंगल बार) */}
      {/* ========================================================================= */}
      {activeDemo === 4 && (
        <div>
          {/* Top Thin Ribbon */}
          <div className="bg-emerald-950/40 border-b border-emerald-900/40 px-4 py-1.5 text-center text-xs text-emerald-300 font-medium flex items-center justify-center gap-2">
            <span>🇳🇵</span>
            <span>नेपाली माटो, आफ्नै प्रविधि — इन्जिनियर, अमिन र आम नागरिकका लागि निःशुल्क डिजिटल सहयोगी।</span>
          </div>

          {/* Main Clean Row */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-16 sm:pb-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="BR Bhatta" className="w-6 h-6 object-contain rounded-md bg-white p-0.5" />
              <span className="font-bold text-white text-sm">BR Bhatta</span>
              <span className="text-slate-600">|</span>
              <span className="text-[11px] text-slate-400">
                परिकल्पना तथा निर्माण: <strong className="text-slate-200">BR Bhatta</strong>
              </span>
            </div>

            <NavLinks />

            <SocialIcons />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* DEMO 5: FLOATING ISLAND CARD (उचाइ नखाने, आधुनिक तैरिएको कार्ड शैली) */}
      {/* ========================================================================= */}
      {activeDemo === 5 && (
        <div className="max-w-6xl mx-auto px-4 py-5 pb-16 sm:pb-6">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0c1424] border border-emerald-800/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Left */}
            <div className="flex items-center gap-3 text-center md:text-left">
              <img src="/logo.png" alt="BR Bhatta" className="w-9 h-9 object-contain rounded-xl bg-white p-1 shadow-sm shrink-0" />
              <div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="font-bold text-white text-sm">BR Bhatta</span>
                  <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800/60">
                    नेपाली माटो, आफ्नै प्रविधि
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  परिकल्पना तथा निर्माण: <strong className="text-slate-200">BR Bhatta</strong> &bull; &copy; {new Date().getFullYear()}
                </p>
              </div>
            </div>

            {/* Center: Links */}
            <NavLinks />

            {/* Right: Social Icons */}
            <div className="shrink-0">
              <SocialIcons />
            </div>

          </div>
        </div>
      )}

    </footer>
  );
}
