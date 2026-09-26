'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Facebook, 
  Instagram, 
  Github, 
  ChevronRight, 
  ChevronDown, 
  Scale, 
  FileText, 
  Calculator, 
  Split, 
  Receipt, 
  GraduationCap, 
  Layers, 
  Building2, 
  QrCode, 
  FileCode, 
  ArrowRightLeft,
  ImageIcon,
  FileStack,
  Coins,
  ScrollText,
  Compass,
  Wallet,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [lawsDropdownOpen, setLawsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-2xs transition-colors duration-200 notranslate" translate="no">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-4">
          
          {/* Logo with Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 group py-1 shrink-0">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-0.5 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-emerald-500 transition-colors">
              <img
                src="/logo.png"
                alt="Land Solution Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                Land Solution
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">
                BR Bhatta • brbhatta.com
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            
            {/* All Tools Hub Dropdown */}
            <div 
              className="relative py-2 group"
              onMouseEnter={() => setToolsDropdownOpen(true)}
              onMouseLeave={() => setToolsDropdownOpen(false)}
            >
              <Link
                href="/tools"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors uppercase tracking-wider"
              >
                <span>उपकरणहरू (Tools Hub)</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </Link>

              {/* Mega Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 w-[420px] bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-3 space-y-2 transition-all duration-150 z-50 ${
                  toolsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                }`}
              >
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <Link
                    href="/tools/land-calculator"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-semibold"
                  >
                    <Calculator className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="truncate">जग्गा क्यालकुलेटर</span>
                  </Link>

                  <Link
                    href="/tools/preeti-to-unicode"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-semibold"
                  >
                    <ArrowRightLeft className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="truncate">Preeti ⇄ Unicode</span>
                  </Link>

                  <Link
                    href="/tools/image-compressor"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-semibold"
                  >
                    <ImageIcon className="w-4 h-4 text-rose-500 shrink-0" />
                    <span className="truncate">फोटो कम्प्रेसर (२००KB)</span>
                  </Link>

                  <Link
                    href="/tools/images-to-pdf"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-semibold"
                  >
                    <FileText className="w-4 h-4 text-indigo-500 shrink-0" />
                    <span className="truncate">तस्विरबाट A4 PDF</span>
                  </Link>

                  <Link
                    href="/tools/malpot-calculator"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-semibold"
                  >
                    <Receipt className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="truncate">मालपोत तथा कर</span>
                  </Link>

                  <Link
                    href="/tools/pdf-tools"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-semibold"
                  >
                    <FileStack className="w-4 h-4 text-teal-500 shrink-0" />
                    <span className="truncate">PDF Merge & Split</span>
                  </Link>

                  <Link
                    href="/tools/kitta-kat-checker"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-semibold"
                  >
                    <Split className="w-4 h-4 text-indigo-500 shrink-0" />
                    <span className="truncate">कित्ताकाट योग्यता</span>
                  </Link>

                  <Link
                    href="/tools/number-to-words"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-semibold"
                  >
                    <Coins className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="truncate">अक्षरेपी क्यालकुलेटर</span>
                  </Link>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href="/tools"
                    onClick={() => setToolsDropdownOpen(false)}
                    className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-700 dark:hover:text-emerald-300 text-xs font-bold transition-colors"
                  >
                    <span>सम्पूर्ण १७+ डिजिटल उपकरणहरू हेर्नुहोस्</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Laws Dropdown */}
            <div 
              className="relative py-2 group"
              onMouseEnter={() => setLawsDropdownOpen(true)}
              onMouseLeave={() => setLawsDropdownOpen(false)}
            >
              <Link
                href="/laws"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors uppercase tracking-wider"
              >
                <span>नापी कानुन (Laws)</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </Link>

              <div 
                className={`absolute top-full left-0 w-64 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 space-y-1 transition-all duration-150 z-50 ${
                  lawsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                }`}
              >
                <Link
                  href="/laws"
                  onClick={() => setLawsDropdownOpen(false)}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 text-xs font-bold transition-colors"
                >
                  <Scale className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ऐन तथा नियमावलीहरू</span>
                </Link>
                <Link
                  href="/tools/survey-offices"
                  onClick={() => setLawsDropdownOpen(false)}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 text-xs font-bold transition-colors"
                >
                  <Building2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>७७ जिल्ला नापी निर्देशिका</span>
                </Link>
              </div>
            </div>

            <Link
              href="/#land-solution"
              className="text-xs font-bold text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors uppercase tracking-wider"
            >
              सफ्टवेयर
            </Link>

            <Link
              href="/articles"
              className="text-xs font-bold text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors uppercase tracking-wider"
            >
              गाइड तथा लेखहरू
            </Link>

            <Link
              href="/about"
              className="text-xs font-bold text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors uppercase tracking-wider"
            >
              हाम्रो बारेमा
            </Link>

            <Link
              href="/contact"
              className="text-xs font-bold text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors uppercase tracking-wider"
            >
              सम्पर्क
            </Link>

            <Link
              href="/builder"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black shadow-xs transition-transform active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Live Builder</span>
            </Link>
          </nav>

          {/* Desktop Right Side: Social Media Icons + Theme Toggle */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <div className="flex items-center gap-1.5 pl-3 border-l border-slate-200 dark:border-slate-800">
              <a
                href="https://www.tiktok.com/@br_bhatta?_r=1&_t=ZS-9A2ydU7e8Rd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-2xs border border-slate-800 hover:border-pink-500/50"
                aria-label="TikTok Profile"
                title="TikTok (@br_bhatta)"
              >
                <svg className="w-3.5 h-3.5 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>

              <a
                href="https://www.facebook.com/aabiral.bhatt/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-2xs"
                aria-label="Facebook Profile"
                title="Facebook"
              >
                <Facebook className="w-3.5 h-3.5 fill-white shrink-0" />
              </a>

              <a
                href="https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-2xs"
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5 text-white shrink-0" />
              </a>
            </div>

            <ThemeToggle variant="icon" />
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle variant="icon" />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center transition-colors border border-slate-200 dark:border-slate-700"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* MODERN CATEGORIZED MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 pt-3 pb-8 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          
          {/* Top Quick Action to All Tools */}
          <Link
            href="/tools"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-xs shadow-xs"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>सम्पूर्ण १७+ डिजिटल उपकरण हब (Open Tools Hub)</span>
            </div>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Category 1: नापी तथा जग्गा टूल्स */}
          <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block px-1">
              📐 नापी तथा जग्गा क्यालकुलेटर
            </span>
            <div className="grid grid-cols-2 gap-1.5 text-xs font-bold">
              <Link
                href="/tools/land-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <Calculator className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">जग्गा क्यालकुलेटर</span>
              </Link>
              <Link
                href="/tools/malpot-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <Receipt className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="truncate">मालपोत तथा कर</span>
              </Link>
              <Link
                href="/tools/kitta-kat-checker"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <Split className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span className="truncate">कित्ताकाट योग्यता</span>
              </Link>
              <Link
                href="/tools/multi-kitta-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <Layers className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                <span className="truncate">बहु-कित्ता जोड</span>
              </Link>
            </div>
          </div>

          {/* Category 2: डकुमेन्ट तथा PDF स्टुडियो */}
          <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block px-1">
              📑 डकुमेन्ट तथा PDF स्टुडियो
            </span>
            <div className="grid grid-cols-2 gap-1.5 text-xs font-bold">
              <Link
                href="/tools/preeti-to-unicode"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <ArrowRightLeft className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">Preeti ⇄ Unicode</span>
              </Link>
              <Link
                href="/tools/image-compressor"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <ImageIcon className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span className="truncate">फोटो कम्प्रेसर</span>
              </Link>
              <Link
                href="/tools/images-to-pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span className="truncate">तस्विरबाट PDF</span>
              </Link>
              <Link
                href="/tools/pdf-tools"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <FileStack className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                <span className="truncate">PDF Merge/Split</span>
              </Link>
            </div>
          </div>

          {/* Category 3: कानुनी निर्देशिका तथा अध्ययन */}
          <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block px-1">
              📚 कानुन, निर्देशिका तथा अध्ययन
            </span>
            <div className="grid grid-cols-2 gap-1.5 text-xs font-bold">
              <Link
                href="/tools/survey-offices"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <Building2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                <span className="truncate">७७ जिल्ला नापी</span>
              </Link>
              <Link
                href="/laws"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <Scale className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                <span className="truncate">मौजूदा कानुनहरू</span>
              </Link>
              <Link
                href="/tools/aamin-quiz"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <GraduationCap className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="truncate">नापी अमिन क्विज</span>
              </Link>
              <Link
                href="/articles"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span className="truncate">गाइड तथा लेखहरू</span>
              </Link>
            </div>
          </div>

          {/* Category 4: मुख्य सफ्टवेयर र सम्पर्क */}
          <div className="flex flex-col gap-2 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold">
            <div className="flex items-center justify-between">
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 dark:text-slate-300 hover:text-emerald-600"
              >
                हाम्रो बारेमा
              </Link>
              <span>•</span>
              <Link
                href="/#land-solution"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 dark:text-slate-300 hover:text-emerald-600"
              >
                Land Solution
              </Link>
              <span>•</span>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-emerald-600 dark:text-emerald-400 font-extrabold"
              >
                सम्पर्क
              </Link>
            </div>
            
            <Link
              href="/builder"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-black text-center flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Live Visual Builder (सम्पादक खोल्नुहोस्)</span>
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}
