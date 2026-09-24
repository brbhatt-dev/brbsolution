'use client';

import React from 'react';
import { Play, Clock, CheckCircle2, Compass, Wallet, Facebook, Instagram, Github, Mail } from 'lucide-react';
import TithiWidget from './TithiWidget';

export default function Hero() {
  return (
    <section className="relative py-4 sm:py-12 md:py-16 bg-gradient-to-b from-emerald-50/40 via-white to-white overflow-hidden notranslate" translate="no">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            {/* Mobile Only: Nepali Patro & Tithi Widget at the very top */}
            <div className="lg:hidden pb-1 text-left">
              <TithiWidget />
            </div>

            {/* Friendly Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0"></span>
              <span className="truncate">ल्याण्ड सोलुसन &bull; हाम्रो कोष &bull; AutoCAD LSP</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.2] break-words">
              जग्गा नापजाँच, कित्ताकाट तथा{' '}
              <span className="text-emerald-700">डिजिटल प्रविधि समाधान</span>
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              स्वागत छ <span className="font-bold text-slate-900">www.brbhatta.com</span> मा। यहाँ तपाईंले 
              <strong className="text-slate-800"> ल्याण्ड सोलुसन (Land Solution)</strong> को लाइभ वेब डेमो, 
              <strong className="text-slate-800"> हाम्रो कोष (Hamro Kosh)</strong> डेमो एप, र 
              नापी तथा इन्जिनियरिङका लागि आवश्यक <strong className="text-slate-800">AutoCAD LSP</strong> फाइल्स सहजै चलाउन सक्नुहुन्छ।
            </p>

            {/* Action Buttons (Stacked on mobile for easy thumb reach) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
              <a
                href="#land-solution"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all min-h-[48px]"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>ल्याण्ड सोलुसन Web Demo</span>
              </a>

              <a
                href="#hamro-kosh"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition-all min-h-[48px]"
              >
                <Wallet className="w-4 h-4" />
                <span>हाम्रो कोष Demo चलाउनुहोस्</span>
              </a>

              {/* Coming Soon Notice */}
              <div className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold min-h-[44px]">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>APK Downloads: Coming Soon</span>
              </div>
            </div>

            {/* Social Connect Icons in Hero (Hidden on Mobile View as requested) */}
            <div className="pt-1 hidden sm:flex items-center justify-center lg:justify-start gap-2.5">
              <span className="text-xs font-bold text-slate-700">जोडिनुहोस्:</span>
              <a
                href="https://www.facebook.com/aabiral.bhatt/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1877F2] to-[#0A66C2] text-white flex items-center justify-center shadow-md shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-110 active:scale-95 transition-all border border-blue-400/40"
              >
                <Facebook className="w-4 h-4 fill-white" />
              </a>
              <a
                href="https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-110 active:scale-95 transition-all border border-pink-400/40"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/LandSolutionNpl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter) Profile"
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-black via-slate-900 to-slate-800 text-white flex items-center justify-center shadow-md shadow-slate-900/40 hover:shadow-slate-900/60 hover:scale-110 active:scale-95 transition-all border border-slate-700"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://github.com/brbhatt-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0d1117] via-[#161b22] to-[#24292f] text-white flex items-center justify-center shadow-md shadow-slate-900/40 hover:shadow-slate-900/60 hover:scale-110 active:scale-95 transition-all border border-slate-700"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:aabiralbhatt@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all border border-emerald-400/40"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-5 text-[11px] sm:text-xs text-slate-600 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>कित्ताकाट & नक्सा गणना</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>रोपनी / बिघा क्यालकुलेटर</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>नेपाली पात्रो & तिथि</span>
              </div>
            </div>

          </div>

          {/* Right Column (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 space-y-4">
            
            {/* Dedicated Tithi Widget from Land Solution */}
            <TithiWidget />

            {/* Portal Overview Card with Land Solution Logo */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/50 p-6 space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-white border border-slate-200 p-1 flex items-center justify-center shadow-xs shrink-0">
                    <img
                      src="/logo.png"
                      alt="Land Solution Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Land Solution Portal</h3>
                    <p className="text-xs text-emerald-700 font-semibold">www.brbhatta.com</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  Active
                </span>
              </div>

              {/* Quick links to demos */}
              <div className="space-y-2.5 text-sm">
                <a
                  href="#land-solution"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 hover:bg-emerald-100/70 active:bg-emerald-100 transition-colors group min-h-[48px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 group-hover:text-emerald-800 text-xs">Land Solution</p>
                      <p className="text-[10px] text-slate-500">Live Web Demo (नापजाँच)</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded shadow-2xs">
                    चलाउनुहोस् →
                  </span>
                </a>

                <a
                  href="#hamro-kosh"
                  className="flex items-center justify-between p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 hover:bg-indigo-100/70 active:bg-indigo-100 transition-colors group min-h-[48px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
                      <Wallet className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 group-hover:text-indigo-800 text-xs">हाम्रो कोष (Hamro Kosh)</p>
                      <p className="text-[10px] text-slate-500">बचत तथा ऋण सिमुलेटर</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-indigo-700 bg-white px-2 py-0.5 rounded shadow-2xs">
                    डेमो खोल्नुहोस् →
                  </span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
