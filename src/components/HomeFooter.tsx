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

// Official crisp SVG flag of Nepal (prevents "NP" fallback on Windows OS)
const NepalFlag = () => (
  <svg
    className="w-3.5 h-4.5 shrink-0 inline-block align-middle drop-shadow-xs"
    viewBox="0 0 395 505"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Nepal Flag"
  >
    <g fillRule="evenodd" transform="translate(0, 10)">
      <path
        fill="#ce0000"
        stroke="#000063"
        strokeWidth="14"
        strokeLinejoin="round"
        d="M6.5 489.5h378.8L137.4 238.1l257.3.3L6.6-9.5v499z"
      />
      <path
        fill="#fff"
        d="m180.7 355.8-27 9 21.2 19.8-28.5-1.8 11.7 26.2-25.5-12.3.5 28.6-18.8-20.9-10.7 26.6-9.2-26.3-20.3 20.6 1.8-27.7L49 409l12.6-25-29.3.6 21.5-18.3-27.3-10.5 27-9L32.2 327l28.4 1.8L49 302.6l25.6 12.3-.5-28.6 18.8 20.9 10.7-26.6 9.1 26.3 20.4-20.6-1.9 27.7 27-11.4-12.7 25 29.4-.6-21.5 18.3zm-32.4-184.7-11.3 8.4 5.6 4.6a94 94 0 0 0 30.7-36c1.8 21.3-17.7 69-68.7 69.5a70.6 70.6 0 0 1-71.5-70.3c10 18.2 16.2 27 32 36.5l4.7-4.4-10.6-8.9 13.7-3.6-7.4-12.4 14.4 1-1.8-14.4 12.6 7.4 4-13.5 9 10.8 8.5-10.3 4.6 14 11.8-8.2-1.5 14.3 14.2-1.7-6.7 13.2z"
      />
    </g>
  </svg>
);

export default function HomeFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070e17] text-slate-300 border-t border-emerald-900/40 overflow-hidden">
      {/* Top Emerald Accent Gradient Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-emerald-600 via-teal-400 to-emerald-600" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 pb-24 lg:pb-6 space-y-4">
        
        {/* Tier 1: Brand & Slogan on Left, Social Icons & Scroll-to-Top on Right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand Identity & Mission Matching the Land Solution App Logo */}
          <Link href="/" className="flex items-center gap-3 text-center md:text-left group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <img 
                src="/logo.png" 
                alt="Land Solution Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2">
                <span className="font-black text-white text-base tracking-tight leading-tight group-hover:text-emerald-400 transition-colors">
                  Land Solution
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-emerald-400 font-bold">
                  BR Bhatta
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                <NepalFlag />
                <span>डिजिटल नापी सफ्टवेयर — नेपाली माटो, आफ्नै प्रविधि</span>
              </p>
            </div>
          </Link>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center shrink-0">
            <a
              href="https://www.facebook.com/aabiral.bhatt/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900/90 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 hover:border-[#1877F2] transition-all shadow-2xs"
              aria-label="Facebook Profile"
              title="Facebook"
            >
              <Facebook className="w-3.5 h-3.5 shrink-0" />
            </a>
            <a
              href="https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900/90 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 hover:border-pink-500/50 transition-all shadow-2xs"
              aria-label="Instagram Profile"
              title="Instagram"
            >
              <Instagram className="w-3.5 h-3.5 shrink-0" />
            </a>
            <a
              href="https://www.tiktok.com/@br_bhatta?_r=1&_t=ZS-9A2ydU7e8Rd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900/90 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 hover:border-slate-600 transition-all shadow-2xs"
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
              className="w-8 h-8 rounded-lg bg-slate-900/90 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 hover:border-slate-600 transition-all shadow-2xs"
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
              className="w-8 h-8 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 transition-all shadow-2xs"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5 shrink-0" />
            </a>
            <a
              href="mailto:info@brbhatta.com"
              className="w-8 h-8 rounded-lg bg-slate-900/90 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 hover:border-emerald-500 transition-all shadow-2xs"
              aria-label="Send Email"
              title="Email (info@brbhatta.com)"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 ml-1 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-emerald-950 text-slate-300 hover:text-emerald-300 border border-slate-800 hover:border-emerald-700/60 text-xs font-medium transition-all active:scale-95 cursor-pointer shadow-2xs"
              title="शीर्षमा जानुहोस्"
            >
              <span>माथि</span>
              <ArrowUp className="w-3 h-3 text-emerald-400" />
            </button>
          </div>

        </div>

        {/* Tier 2: Legal & Information Links + Copyright Signature */}
        <div className="pt-3 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          
          {/* Navigation & Compliance Links with whitespace-nowrap */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3.5 gap-y-1.5">
            <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 font-semibold whitespace-nowrap transition-colors">
              ब्लग तथा लेखहरू
            </Link>
            <span className="text-slate-700 hidden sm:inline">&bull;</span>
            <Link href="/about" className="hover:text-emerald-400 whitespace-nowrap transition-colors">
              हाम्रो बारेमा
            </Link>
            <span className="text-slate-700 hidden sm:inline">&bull;</span>
            <Link href="/contact" className="hover:text-emerald-400 whitespace-nowrap transition-colors">
              सम्पर्क
            </Link>
            <span className="text-slate-700 hidden sm:inline">&bull;</span>
            <Link href="/privacy-policy" className="hover:text-emerald-400 whitespace-nowrap transition-colors">
              गोपनीयता नीति (Privacy)
            </Link>
            <span className="text-slate-700 hidden sm:inline">&bull;</span>
            <Link href="/terms" className="hover:text-emerald-400 whitespace-nowrap transition-colors">
              सर्तहरू (Terms)
            </Link>
            <span className="text-slate-700 hidden sm:inline">&bull;</span>
            <Link href="/disclaimer" className="hover:text-emerald-400 whitespace-nowrap transition-colors">
              अस्वीकरण (Disclaimer)
            </Link>
          </div>

          {/* Copyright & Creator Credit */}
          <div className="text-[11px] text-slate-400 whitespace-nowrap shrink-0">
            परिकल्पना तथा निर्माण: <strong className="text-white font-semibold">BR Bhatta</strong> &bull; &copy; २०२६
          </div>

        </div>

      </div>

    </footer>
  );
}
