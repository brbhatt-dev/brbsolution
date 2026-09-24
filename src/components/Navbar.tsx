'use client';

import React, { useState } from 'react';
import { Menu, X, MessageCircle, Play, Facebook, Instagram, Github, ChevronRight, Wallet } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Land Solution (डेमो)', href: '#land-solution' },
    { name: 'हाम्रो कोष (डेमो)', href: '#hamro-kosh' },
    { name: 'AutoCAD LSP', href: '#autocad-lsp' },
    { name: 'FAQ', href: '#faq' },
    { name: 'सम्पर्क & Location', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo with Land Solution Official Image */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group py-1">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shrink-0 shadow-xs group-hover:border-emerald-500 transition-colors">
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
              <span className="text-[10px] sm:text-[11px] text-slate-500 font-semibold -mt-1 truncate max-w-[170px] sm:max-w-none">
                BR Bhatta • brbhatta.com
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Social Links & CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 border-r border-slate-200 pr-3">
              <a
                href="https://www.facebook.com/aabiral.bhatt/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Page"
                className="p-2 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-slate-50 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/brbhatt-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#land-solution"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Demo</span>
            </a>

            <a
              href="mailto:aabiralbhatt@gmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 text-xs font-bold border border-slate-200 transition-colors"
            >
              <span>सम्पर्क</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#land-solution"
              className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-2xs"
            >
              <Play className="w-3 h-3 fill-white" />
              <span>Demo</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 min-w-[44px] min-h-[44px] flex items-center justify-center border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Touch-optimized full overlay) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
          
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-emerald-50 active:bg-emerald-100 hover:text-emerald-800 transition-colors min-h-[48px]"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          {/* Quick Demo CTA Buttons on Mobile */}
          <div className="pt-2 flex flex-col gap-2.5 border-t border-slate-100">
            <a
              href="#land-solution"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-600 text-white text-sm font-bold shadow-sm active:bg-emerald-700 min-h-[48px]"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>ल्याण्ड सोलुसन Web Demo</span>
            </a>
            <a
              href="#hamro-kosh"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-indigo-50 text-indigo-900 text-sm font-bold border border-indigo-200 active:bg-indigo-100 min-h-[48px]"
            >
              <Wallet className="w-4 h-4 text-indigo-600" />
              <span>हाम्रो कोष Web Demo (Sample)</span>
            </a>
          </div>

          {/* Social Profiles Grid on Mobile */}
          <div className="pt-3 border-t border-slate-100">
            <p className="text-center text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-2">
              सामाजिक सञ्जालमा जोडिनुहोस्
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.facebook.com/aabiral.bhatt/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 active:scale-95 transition-transform"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100 active:scale-95 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/brbhatt-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center border border-slate-200 active:scale-95 transition-transform"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
