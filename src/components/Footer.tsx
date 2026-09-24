'use client';

import React from 'react';
import { ArrowUp, Mail, Facebook, Instagram, Github, MapPin, Heart, Globe, Compass, Wallet, FileCode, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800 overflow-hidden notranslate" translate="no">
      {/* Top Colorful Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-400 via-indigo-500 to-rose-500"></div>

      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-10 relative z-10">
        
        {/* Main 4-Column Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center shadow-md shadow-emerald-500/10 shrink-0 border border-slate-700">
                <img
                  src="/logo.png"
                  alt="Land Solution Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-left">
                <span className="text-lg font-black tracking-tight text-white block leading-tight">
                  Land Solution
                </span>
                <span className="text-xs text-emerald-400 font-semibold">
                  BR Bhatta • Nepal Land Tech
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mx-auto sm:mx-0">
              नेपालको जग्गा नापजाँच, कित्ताकाट, डिजिटल क्यालकुलेसन तथा वित्तीय व्यवस्थापनलाई प्रविधिमैत्री बनाउन निर्माण गरिएका आधुनिक सफ्टवेयर तथा सोलुसनहरू।
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>काठमाडौँ, नेपाल (Kathmandu, Nepal)</span>
            </div>
          </div>

          {/* Column 2: Software & Demos (3 Cols) */}
          <div className="lg:col-span-3 space-y-3.5 text-center sm:text-left">
            <p className="text-xs font-bold text-white uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>सफ्टवेयर र डेमोहरू</span>
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a 
                  href="#land-solution" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  <span>Land Solution (नापजाँच)</span>
                </a>
              </li>
              <li>
                <a 
                  href="/land-solution-demo/index.html" 
                  target="_blank" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  <span>Land Solution Live Web Demo</span>
                </a>
              </li>
              <li>
                <a 
                  href="#hamro-kosh" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                  <span>हाम्रो कोष (Hamro Kosh Demo)</span>
                </a>
              </li>
              <li>
                <a 
                  href="#autocad-lsp" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                  <span>AutoCAD LSP Scripts (.lsp)</span>
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-400 hover:text-purple-400 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all" />
                  <span>बारम्बार सोधिने प्रश्नहरू (FAQ)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Support (3 Cols) */}
          <div className="lg:col-span-3 space-y-3.5 text-center sm:text-left">
            <p className="text-xs font-bold text-white uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>सम्पर्क तथा सहयोग</span>
            </p>
            
            <div className="space-y-2.5">
              {/* Email Pill */}
              <a
                href="mailto:aabiralbhatt@gmail.com"
                className="flex items-center justify-center sm:justify-start gap-2 p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs text-slate-300 hover:text-emerald-400 transition-all group"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate font-mono">aabiralbhatt@gmail.com</span>
              </a>

              {/* Status Pill */}
              <div className="flex items-center justify-center sm:justify-start gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>अनलाइन प्राविधिक सहायता उपलब्ध</span>
              </div>

              {/* Domain Pill */}
              <div className="flex items-center justify-center sm:justify-start gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
                <Globe className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="font-mono text-slate-300">www.brbhatta.com</span>
              </div>
            </div>
          </div>

          {/* Column 4: Social Media Profiles (2 Cols) */}
          <div className="lg:col-span-2 space-y-3.5 text-center sm:text-left">
            <p className="text-xs font-bold text-white uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              <span>सामाजिक सञ्जाल</span>
            </p>

            <div className="flex flex-col gap-2 max-w-[200px] mx-auto sm:mx-0">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/aabiral.bhatt/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-gradient-to-r from-[#1877F2] to-[#0A66C2] text-white text-xs font-bold shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all border border-blue-400/30"
              >
                <Facebook className="w-4 h-4 fill-white shrink-0" />
                <span>Facebook</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white text-xs font-bold shadow-md shadow-rose-500/20 hover:shadow-rose-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all border border-pink-400/30"
              >
                <Instagram className="w-4 h-4 shrink-0" />
                <span>Instagram</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/brbhatt-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-gradient-to-r from-[#0d1117] via-[#161b22] to-[#24292f] text-white text-xs font-bold shadow-md shadow-slate-900/30 hover:shadow-slate-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all border border-slate-700"
              >
                <Github className="w-4 h-4 shrink-0" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p className="text-[11px] sm:text-xs">
            &copy; {new Date().getFullYear()} <strong className="text-slate-400">Land Solution • BR Bhatta</strong> (brbhatta.com). सर्वाधिकार सुरक्षित।
          </p>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-slate-400 text-[11px]">
              Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" /> in Nepal
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 font-bold text-slate-300 hover:text-white px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-95 transition-all border border-slate-800 shadow-sm"
            >
              <span>माथि जानुहोस्</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
