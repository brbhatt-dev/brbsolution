'use client';

import React from 'react';
import Link from 'next/link';
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-4 sm:pb-5 relative z-10">
        
        {/* Main 3-Column Compact & Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-5 sm:pb-6 border-b border-slate-800/80 items-start">
          
          {/* Column 1: Brand & Identity + Social Media Row */}
          <div className="space-y-2.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <div className="w-9 h-9 rounded-lg overflow-hidden bg-white p-1 flex items-center justify-center shadow-sm shrink-0 border border-slate-700">
                <img
                  src="/logo.png"
                  alt="Land Solution Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-left">
                <span className="text-base font-black tracking-tight text-white block leading-tight">
                  Land Solution
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold">
                  BR Bhatta • Nepal Land Tech
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 dark:text-slate-200 leading-snug max-w-sm mx-auto sm:mx-0">
              नेपालको जग्गा नापजाँच, कित्ताकाट, डिजिटल क्यालकुलेसन तथा वित्तीय व्यवस्थापनलाई प्रविधिमैत्री बनाउन निर्माण गरिएका आधुनिक सफ्टवेयर तथा सोलुसनहरू।
            </p>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-[11px] text-slate-300">
              <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>काठमाडौँ, नेपाल (Kathmandu, Nepal)</span>
            </div>

            {/* Compact Social Media Icons Row */}
            <div className="flex items-center justify-center sm:justify-start gap-1.5 pt-0.5 flex-wrap">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/aabiral.bhatt/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#1877F2] to-[#0A66C2] text-white flex items-center justify-center shadow-2xs hover:scale-110 active:scale-95 transition-all border border-blue-400/30 shrink-0"
                aria-label="Facebook Profile"
                title="Facebook"
              >
                <Facebook className="w-3 h-3 fill-white shrink-0" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-2xs hover:scale-110 active:scale-95 transition-all border border-pink-400/30 shrink-0"
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <Instagram className="w-3 h-3 text-white shrink-0" />
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/LandSolutionNpl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-gradient-to-tr from-black via-slate-900 to-slate-800 text-white flex items-center justify-center shadow-2xs hover:scale-110 active:scale-95 transition-all border border-slate-700 shrink-0"
                aria-label="X (Twitter) Profile"
                title="X (Twitter)"
              >
                <svg className="w-3 h-3 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Threads */}
              <a
                href="https://www.threads.com/@landsolutionnepal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-gradient-to-tr from-black via-slate-900 to-zinc-800 text-white flex items-center justify-center shadow-2xs hover:scale-110 active:scale-95 transition-all border border-slate-700 shrink-0"
                aria-label="Threads Profile"
                title="Threads"
              >
                <svg className="w-3 h-3 fill-white shrink-0" viewBox="0 0 192 192">
                  <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2109 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.0328C81.4045 63.6575 90.0153 60.4065 97.222 60.4065C108.618 60.4065 117.818 67.2415 119.827 82.0494C113.883 80.7061 107.566 80.0526 100.973 80.0526C74.6558 80.0526 56.6346 94.3826 56.6346 116.141C56.6346 136.216 71.9547 150.316 93.3644 150.316C109.845 150.316 122.253 141.975 128.539 126.68C133.565 136.657 141.921 142.336 153.864 142.336C168.04 142.336 179.351 133.407 182.261 116.635L166.425 113.863C164.717 123.699 158.647 128.125 152.016 128.125C141.777 128.125 137.073 118.89 137.073 103.072C137.073 99.8735 137.339 96.7909 137.844 93.856C139.117 94.4075 140.354 94.9922 141.537 95.6083C155.074 102.664 163.535 113.208 163.535 126.969H179.197C179.197 108.685 167.348 95.0345 141.537 88.9883ZM122.091 109.308C120.301 123.703 109.734 135.253 94.2796 135.253C80.3955 135.253 71.7486 126.241 71.7486 114.733C71.7486 100.865 83.2104 94.3917 101.442 94.3917C107.575 94.3917 113.242 94.9458 118.324 96.0125C121.218 100.17 122.476 104.708 122.091 109.308Z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/brbhatt-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#0d1117] via-[#161b22] to-[#24292f] text-white flex items-center justify-center shadow-2xs hover:scale-110 active:scale-95 transition-all border border-slate-700 shrink-0"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-3 h-3 shrink-0" />
              </a>
            </div>
          </div>

          {/* Column 2: Software & Demos */}
          <div className="space-y-2 text-center sm:text-left">
            <p className="text-xs font-bold text-white uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>सफ्टवेयर र डेमोहरू</span>
            </p>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a 
                  href="#land-solution" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>Land Solution (नापजाँच)</span>
                </a>
              </li>
              <li>
                <a 
                  href="#land-calculator" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>अनलाइन जग्गा क्यालकुलेटर (RAPD & BKD)</span>
                </a>
              </li>
              <li>
                <a 
                  href="/land-solution-demo/index.html" 
                  target="_blank" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>Land Solution Live Web Demo</span>
                </a>
              </li>
              <li>
                <a 
                  href="#hamro-kosh" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-300 hover:text-indigo-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-indigo-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>हाम्रो कोष (Hamro Kosh Demo)</span>
                </a>
              </li>
              <li>
                <a 
                  href="#autocad-lsp" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-300 hover:text-amber-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>AutoCAD LSP Scripts (.lsp)</span>
                </a>
              </li>
              <li>
                <Link 
                  href="/laws" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>मौजूदा कानुनहरू (नापी ऐन, नियमावली र कार्यविधि)</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/articles" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>प्राविधिक गाइड तथा लेखहरू (Articles Hub)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Support */}
          <div className="space-y-2 text-center sm:text-left">
            <p className="text-xs font-bold text-white uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span>सम्पर्क तथा सहयोग</span>
            </p>
            
            <div className="space-y-1.5">
              {/* Email Pill */}
              <a
                href="mailto:aabiralbhatt@gmail.com"
                className="flex items-center justify-center sm:justify-start gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-200 hover:text-emerald-300 transition-all group"
              >
                <div className="w-5 h-5 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                  <Mail className="w-3 h-3" />
                </div>
                <span className="truncate font-mono">aabiralbhatt@gmail.com</span>
              </a>

              {/* Status Pill */}
              <div className="flex items-center justify-center sm:justify-start gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="truncate">अनलाइन प्राविधिक सहायता उपलब्ध</span>
              </div>

              {/* Domain Pill */}
              <div className="flex items-center justify-center sm:justify-start gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200">
                <Globe className="w-3 h-3 text-indigo-400 shrink-0" />
                <span className="font-mono text-slate-200">www.brbhatta.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Policy Links (AdSense & Regulatory Compliance) */}
        <div className="py-3 border-b border-slate-800/80 flex flex-wrap items-center justify-center gap-y-1.5 gap-x-4 sm:gap-x-6 text-[11px] text-slate-300">
          <Link href="/about" className="hover:text-emerald-300 transition-colors font-medium">
            हाम्रो बारेमा (About Us)
          </Link>
          <span className="text-slate-600 hidden sm:inline">&bull;</span>
          <Link href="/contact" className="hover:text-emerald-300 transition-colors font-medium">
            सम्पर्क (Contact Us)
          </Link>
          <span className="text-slate-600 hidden sm:inline">&bull;</span>
          <Link href="/privacy-policy" className="hover:text-emerald-300 transition-colors font-medium">
            गोपनीयता नीति (Privacy Policy)
          </Link>
          <span className="text-slate-600 hidden sm:inline">&bull;</span>
          <Link href="/terms" className="hover:text-emerald-300 transition-colors font-medium">
            प्रयोगका सर्तहरू (Terms of Service)
          </Link>
          <span className="text-slate-600 hidden sm:inline">&bull;</span>
          <Link href="/disclaimer" className="hover:text-emerald-300 transition-colors font-medium">
            अस्वीकरण (Disclaimer)
          </Link>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <p className="text-[11px]">
            &copy; {new Date().getFullYear()} <strong className="text-slate-200">Land Solution • BR Bhatta</strong> (brbhatta.com). सर्वाधिकार सुरक्षित।
          </p>

          <div className="flex items-center gap-3 sm:gap-5">
            <span className="flex items-center gap-1.5 text-slate-300 text-[11px]">
              Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500 animate-pulse" /> in Nepal
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 font-semibold text-slate-200 hover:text-white px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 active:scale-95 transition-all border border-slate-700 shadow-2xs text-xs"
            >
              <span>माथि जानुहोस्</span>
              <ArrowUp className="w-3 h-3 text-emerald-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
