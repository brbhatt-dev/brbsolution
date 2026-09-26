'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowUp, 
  Mail, 
  Facebook, 
  Instagram, 
  Github,
  Heart
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Centered Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-24 sm:pb-28 relative z-10 flex flex-col items-center text-center space-y-6">
        
        {/* Brand Identity */}
        <Link href="/" className="inline-flex flex-col items-center gap-2 group">
          <div className="w-12 h-12 rounded-2xl overflow-hidden bg-white p-1.5 flex items-center justify-center shadow-lg border border-slate-700 group-hover:border-emerald-500 transition-all duration-200 group-hover:scale-105">
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
            <span className="text-lg font-black tracking-tight text-white block leading-tight group-hover:text-emerald-400 transition-colors">
              BR Bhatta
            </span>
            <span className="text-xs text-emerald-400 font-medium">
              Land Solution & Survey Tech Nepal
            </span>
          </div>
        </Link>

        {/* Proud Nepali Mission Tagline */}
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
          <span className="text-emerald-400 font-semibold">“नेपाली माटो, आफ्नै प्रविधि</span> — इन्जिनियर, अमिन र आम नागरिकका लागि निःशुल्क डिजिटल सहयोगी।”
        </p>

        {/* Social Icons + Scroll to Top in a Centered Row */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap pt-1">
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

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 ml-1 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-emerald-950 text-slate-300 hover:text-emerald-300 border border-slate-800 hover:border-emerald-700/60 text-xs font-semibold transition-all active:scale-95 cursor-pointer shadow-xs"
            title="शीर्षमा जानुहोस्"
          >
            <span>माथि जानुहोस्</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>

        {/* Clean Centered Legal Links */}
        <div className="py-3 px-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-6 gap-y-2 text-xs text-slate-400">
          <Link href="/about" className="hover:text-emerald-400 transition-colors font-medium">
            हाम्रो बारेमा
          </Link>
          <span className="text-slate-700 hidden sm:inline">&bull;</span>
          <Link href="/contact" className="hover:text-emerald-400 transition-colors font-medium">
            सम्पर्क
          </Link>
          <span className="text-slate-700 hidden sm:inline">&bull;</span>
          <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors font-medium">
            गोपनीयता नीति
          </Link>
          <span className="text-slate-700 hidden sm:inline">&bull;</span>
          <Link href="/terms" className="hover:text-emerald-400 transition-colors font-medium">
            प्रयोगका सर्तहरू
          </Link>
          <span className="text-slate-700 hidden sm:inline">&bull;</span>
          <Link href="/disclaimer" className="hover:text-emerald-400 transition-colors font-medium">
            अस्वीकरण
          </Link>
        </div>

        {/* Signature Line */}
        <div className="pt-2 text-xs text-slate-400 flex items-center justify-center gap-2 flex-wrap">
          <span className="text-slate-400">
            परिकल्पना तथा निर्माण:
          </span>
          <strong className="text-white font-bold tracking-wide">
            BR Bhatta
          </strong>
          <span className="text-slate-700">&bull;</span>
          <span className="text-slate-400">
            &copy; {new Date().getFullYear()} सर्वाधिकार सुरक्षित
          </span>
        </div>

      </div>
    </footer>
  );
}
