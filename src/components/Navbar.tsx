'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Play, Facebook, Instagram, Github, ChevronRight, Wallet } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'हाम्रो बारेमा', href: '/about' },
    { name: 'Land Solution', href: '/#land-solution' },
    { name: 'हाम्रो कोष', href: '/#hamro-kosh' },
    { name: 'AutoCAD LSP', href: '/#autocad-lsp' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'सम्पर्क', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all notranslate" translate="no">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-18 md:h-20">
          
          {/* Logo with Land Solution Official Image */}
          <Link href="/" className="flex items-center gap-2.5 group py-1">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-white border border-slate-200 p-0.5 flex items-center justify-center shrink-0 shadow-xs group-hover:border-emerald-500 transition-colors">
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
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                Land Solution
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 font-semibold -mt-1">
                BR Bhatta • brbhatta.com
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Social Links */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://www.facebook.com/aabiral.bhatt/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#1877F2] to-[#0A66C2] text-white flex items-center justify-center shadow-xs hover:scale-105 transition-all"
            >
              <Facebook className="w-3.5 h-3.5 fill-white" />
            </a>
            <a
              href="https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Page"
              className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-xs hover:scale-105 transition-all"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://x.com/LandSolutionNpl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) Profile"
              className="w-8 h-8 rounded-lg bg-gradient-to-tr from-black to-slate-800 text-white flex items-center justify-center shadow-xs hover:scale-105 transition-all border border-slate-700"
            >
              <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://github.com/brbhatt-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0d1117] to-[#24292f] text-white flex items-center justify-center shadow-xs hover:scale-105 transition-all border border-slate-700"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Controls: Menu Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 flex items-center justify-center transition-colors border border-slate-200"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Clean, high-contrast, modern) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-2xl max-h-[85vh] overflow-y-auto">
          
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-emerald-50 active:bg-emerald-100 hover:text-emerald-800 transition-colors min-h-[46px]"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </div>

          {/* Social Icons inside Mobile Menu (Digital Style) */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/aabiral.bhatt/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#1877F2] to-[#0A66C2] text-white flex items-center justify-center shadow-md shadow-blue-500/25 border border-blue-400/30 active:scale-95 transition-transform"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 fill-white" />
            </a>
            <a
              href="https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md shadow-pink-500/25 border border-pink-400/30 active:scale-95 transition-transform"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/LandSolutionNpl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-gradient-to-tr from-black via-slate-900 to-slate-800 text-white flex items-center justify-center shadow-md shadow-slate-900/30 border border-slate-700 active:scale-95 transition-transform"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://github.com/brbhatt-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#0d1117] to-[#24292f] text-white flex items-center justify-center shadow-md shadow-slate-900/30 border border-slate-700 active:scale-95 transition-transform"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
