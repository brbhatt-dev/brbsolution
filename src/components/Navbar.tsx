'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Facebook, Instagram, Github, ChevronRight, ChevronDown, Scale, FileText } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lawsDropdownOpen, setLawsDropdownOpen] = useState(false);

  // Clean, focused desktop nav links
  const desktopNavLinks = [
    { name: 'सफ्टवेयरहरू', href: '/#land-solution' },
    { name: 'क्यालकुलेटर', href: '/#land-calculator' },
    { name: 'गाइड तथा लेखहरू', href: '/articles' },
    { name: 'हाम्रो बारेमा', href: '/about' },
    { name: 'सम्पर्क', href: '/contact' },
  ];

  // Comprehensive mobile drawer links
  const mobileNavLinks = [
    { name: 'गृहपृष्ठ (Home)', href: '/' },
    { name: 'मौजूदा कानुनहरू (Laws & Directives)', href: '/laws' },
    { name: 'Land Solution (नापजाँच)', href: '/#land-solution' },
    { name: 'अनलाइन जग्गा क्यालकुलेटर', href: '/#land-calculator' },
    { name: 'हाम्रो कोष (Hamro Kosh)', href: '/#hamro-kosh' },
    { name: 'AutoCAD LSP Scripts', href: '/#autocad-lsp' },
    { name: 'गाइड तथा जानकारीमूलक लेखहरू', href: '/articles' },
    { name: 'हाम्रो बारेमा (About Us)', href: '/about' },
    { name: 'सम्पर्क (Contact)', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-xs transition-colors duration-200 notranslate" translate="no">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-18 md:h-20 gap-4">
          
          {/* Logo with Land Solution Official Image */}
          <Link href="/" className="flex items-center gap-2.5 group py-1 shrink-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-0.5 flex items-center justify-center shrink-0 shadow-xs group-hover:border-emerald-500 transition-colors">
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
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                Land Solution
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-semibold -mt-1">
                BR Bhatta • brbhatta.com
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with 'मौजूदा कानुनहरू' Dropdown */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            <Link
              href="/#land-solution"
              className="text-sm font-bold text-slate-600 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              सफ्टवेयरहरू
            </Link>

            <Link
              href="/#land-calculator"
              className="text-sm font-bold text-slate-600 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              क्यालकुलेटर
            </Link>

            {/* मौजूदा कानुनहरू Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setLawsDropdownOpen(true)}
              onMouseLeave={() => setLawsDropdownOpen(false)}
            >
              <Link
                href="/laws"
                className="inline-flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors whitespace-nowrap"
              >
                <span>मौजूदा कानुनहरू</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </Link>

              {/* Dropdown Menu matching dos.gov.np structure */}
              <div 
                className={`absolute top-full left-0 w-60 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 space-y-1 transition-all duration-150 z-50 ${
                  lawsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                }`}
              >
                <Link
                  href="/laws"
                  onClick={() => setLawsDropdownOpen(false)}
                  className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-slate-800 dark:text-slate-200 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors text-xs font-bold"
                >
                  <Scale className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <div>ऐन तथा नियमावलीहरू</div>
                    <div className="text-[10px] text-slate-400 font-normal">Acts & Regulations</div>
                  </div>
                </Link>

                <Link
                  href="/laws"
                  onClick={() => setLawsDropdownOpen(false)}
                  className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950/60 text-slate-800 dark:text-slate-200 hover:text-sky-800 dark:hover:text-sky-300 transition-colors text-xs font-bold"
                >
                  <FileText className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <div>
                    <div>निर्देशिका तथा कार्यविधि</div>
                    <div className="text-[10px] text-slate-400 font-normal">Directives & Procedures</div>
                  </div>
                </Link>
              </div>
            </div>

            <Link
              href="/articles"
              className="text-sm font-bold text-slate-600 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              गाइड तथा लेखहरू
            </Link>

            <Link
              href="/about"
              className="text-sm font-bold text-slate-600 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              हाम्रो बारेमा
            </Link>

            <Link
              href="/contact"
              className="text-sm font-bold text-slate-600 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              सम्पर्क
            </Link>
          </nav>

          {/* Desktop Right Side: Social Media Profiles + Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Social Media Profile Links (Separated by clean divider) */}
            <div className="flex items-center gap-1.5 pl-3 border-l border-slate-200 dark:border-slate-800">
              <a
                href="https://www.facebook.com/aabiral.bhatt/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#1877F2] to-[#0A66C2] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xs border border-blue-400/30"
                aria-label="Facebook Profile"
                title="Facebook"
              >
                <Facebook className="w-4 h-4 fill-white shrink-0" />
              </a>
              <a
                href="https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xs border border-pink-400/30"
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <Instagram className="w-4 h-4 text-white shrink-0" />
              </a>
              <a
                href="https://x.com/LandSolutionNpl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-black via-slate-900 to-slate-800 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xs border border-slate-700/60"
                aria-label="X (Twitter) Profile"
                title="X (Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.threads.com/@landsolutionnepal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-black via-slate-900 to-zinc-800 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xs border border-slate-700/60"
                aria-label="Threads Profile"
                title="Threads"
              >
                <svg className="w-3.5 h-3.5 fill-white shrink-0" viewBox="0 0 192 192">
                  <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2109 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.0328C81.4045 63.6575 90.0153 60.4065 97.222 60.4065C108.618 60.4065 117.818 67.2415 119.827 82.0494C113.883 80.7061 107.566 80.0526 100.973 80.0526C74.6558 80.0526 56.6346 94.3826 56.6346 116.141C56.6346 136.216 71.9547 150.316 93.3644 150.316C109.845 150.316 122.253 141.975 128.539 126.68C133.565 136.657 141.921 142.336 153.864 142.336C168.04 142.336 179.351 133.407 182.261 116.635L166.425 113.863C164.717 123.699 158.647 128.125 152.016 128.125C141.777 128.125 137.073 118.89 137.073 103.072C137.073 99.8735 137.339 96.7909 137.844 93.856C139.117 94.4075 140.354 94.9922 141.537 95.6083C155.074 102.664 163.535 113.208 163.535 126.969H179.197C179.197 108.685 167.348 95.0345 141.537 88.9883ZM122.091 109.308C120.301 123.703 109.734 135.253 94.2796 135.253C80.3955 135.253 71.7486 126.241 71.7486 114.733C71.7486 100.865 83.2104 94.3917 101.442 94.3917C107.575 94.3917 113.242 94.9458 118.324 96.0125C121.218 100.17 122.476 104.708 122.091 109.308Z"/>
                </svg>
              </a>
              <a
                href="https://github.com/brbhatt-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0d1117] via-[#161b22] to-[#24292f] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xs border border-slate-700/60"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-4 h-4 text-white shrink-0" />
              </a>
            </div>

            <ThemeToggle variant="icon" />
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Direct Theme Toggle (1 Tap on header!) */}
            <ThemeToggle variant="icon" />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 text-slate-800 dark:text-slate-200 flex items-center justify-center transition-colors border border-slate-200 dark:border-slate-700"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900 dark:text-white" /> : <Menu className="w-5 h-5 text-slate-900 dark:text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Clean, high-contrast, modern) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto">
          
          {/* Navigation Links */}
          <div className="space-y-1">
            {mobileNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800 active:bg-emerald-100 hover:text-emerald-800 dark:hover:text-emerald-400 transition-colors min-h-[46px]"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              </Link>
            ))}
          </div>

        </div>
      )}
    </header>
  );
}
