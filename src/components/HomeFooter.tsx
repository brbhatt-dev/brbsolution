'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowUp, 
  Mail, 
  Facebook, 
  Instagram, 
  Github
} from 'lucide-react';

export default function HomeFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="relative bg-[#070e17] text-slate-300 border-t border-emerald-900/40 overflow-hidden notranslate" 
      translate="no"
    >
      {/* Top Emerald Gradient Accent Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-emerald-600 via-teal-400 to-emerald-600" />

      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-32 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 sm:pb-8 relative z-10">
        
        {/* Top Section: Brand + Social Icons + Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          
          {/* Brand & Identity */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center shadow-md border border-slate-700 group-hover:border-emerald-500 transition-colors shrink-0">
                <img
                  src="/logo.png"
                  alt="BR Bhatta Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="text-base font-black tracking-tight text-white block leading-tight group-hover:text-emerald-400 transition-colors">
                  BR Bhatta
                </span>
                <span className="text-[11px] text-emerald-400 font-medium">
                  Land Solution & Survey Tech Nepal
                </span>
              </div>
            </Link>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/aabiral.bhatt/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900/90 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 hover:border-transparent transition-all shadow-xs"
              aria-label="Facebook Profile"
              title="Facebook"
            >
              <Facebook className="w-4 h-4 shrink-0" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900/90 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 hover:border-transparent transition-all shadow-xs"
              aria-label="Instagram Profile"
              title="Instagram"
            >
              <Instagram className="w-4 h-4 shrink-0" />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@br_bhatta?_r=1&_t=ZS-9A2ydU7e8Rd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900/90 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 hover:border-slate-700 transition-all shadow-xs"
              aria-label="TikTok Profile"
              title="TikTok (@br_bhatta)"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/LandSolutionNpl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900/90 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 hover:border-slate-700 transition-all shadow-xs"
              aria-label="X Profile"
              title="X (Twitter)"
            >
              <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/brbhatt-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 hover:border-slate-700 transition-all shadow-xs"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="w-4 h-4 shrink-0" />
            </a>

            {/* Email */}
            <a
              href="mailto:aabiralbhatt@gmail.com"
              className="w-8 h-8 rounded-lg bg-slate-900/90 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 hover:border-emerald-500 transition-all shadow-xs"
              aria-label="Send Email"
              title="Email: aabiralbhatt@gmail.com"
            >
              <Mail className="w-4 h-4 shrink-0" />
            </a>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 ml-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-emerald-950 text-slate-300 hover:text-emerald-300 border border-slate-800 hover:border-emerald-700/60 text-xs font-semibold transition-all active:scale-95 cursor-pointer shadow-xs"
              title="शीर्षमा जानुहोस्"
            >
              <span>माथि जानुहोस्</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
            </button>
          </div>
        </div>

        {/* Middle Section: Clear Centered Legal & Utility Links (Safe from AI Floating Badge) */}
        {/* We add sm:pr-48 lg:pr-56 or centered layout so the floating widget at bottom-right never covers any link */}
        <div className="py-4 border-b border-slate-800/80 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-[13px] text-slate-400 sm:pr-48 lg:pr-56">
          <Link href="/about" className="hover:text-emerald-400 transition-colors font-medium">
            हाम्रो बारेमा (About Us)
          </Link>
          <span className="text-slate-700 hidden sm:inline">&bull;</span>
          <Link href="/contact" className="hover:text-emerald-400 transition-colors font-medium">
            सम्पर्क (Contact)
          </Link>
          <span className="text-slate-700 hidden sm:inline">&bull;</span>
          <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors font-medium">
            गोपनीयता नीति (Privacy Policy)
          </Link>
          <span className="text-slate-700 hidden sm:inline">&bull;</span>
          <Link href="/terms" className="hover:text-emerald-400 transition-colors font-medium">
            प्रयोगका सर्तहरू (Terms)
          </Link>
          <span className="text-slate-700 hidden sm:inline">&bull;</span>
          <Link href="/disclaimer" className="hover:text-emerald-400 transition-colors font-medium">
            अस्वीकरण (Disclaimer)
          </Link>
        </div>

        {/* Bottom Section: Pure & Minimal (Tagline on Left, Curated by BR BHATTA on Right) */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-center sm:text-left sm:pr-48 lg:pr-56">
          <p className="text-xs sm:text-[13px] text-emerald-300 font-medium">
            नेपाली माटो, आफ्नै प्रविधि — इन्जिनियर, अमिन र आम नागरिकका लागि निःशुल्क डिजिटल सहयोगी।
          </p>

          <p className="text-xs sm:text-[12px] text-slate-400 font-medium tracking-wide shrink-0">
            curated by <span className="text-white font-bold tracking-wider">BR BHATTA</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
