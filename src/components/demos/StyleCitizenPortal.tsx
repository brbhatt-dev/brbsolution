'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  ArrowRight, 
  Sparkles, 
  ArrowRightLeft, 
  ImageIcon, 
  FileText, 
  FileStack, 
  Building2, 
  Scale, 
  Coins, 
  Play, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Layers,
  Split,
  QrCode,
  ScrollText,
  GraduationCap
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';

export default function StyleCitizenPortal() {
  const quickTiles = [
    { title: 'जग्गा क्यालकुलेटर', sub: 'रोपनी-बिघा हिसाब', icon: Calculator, color: 'bg-emerald-500 text-white', href: '#land-calc-section' },
    { title: 'फोटो कम्प्रेसर', sub: '२००KB भन्दा सानो', icon: ImageIcon, color: 'bg-rose-500 text-white', href: '/tools/image-compressor' },
    { title: 'Preeti ⇄ Unicode', sub: 'नेपाली टाइपिङ', icon: ArrowRightLeft, color: 'bg-teal-500 text-white', href: '/tools/preeti-to-unicode' },
    { title: 'तस्विरबाट A4 PDF', sub: 'लालपुर्जा / नक्सा', icon: FileText, color: 'bg-indigo-500 text-white', href: '/tools/images-to-pdf' },
    { title: 'मालपोत तथा कर', sub: 'रजिस्ट्रेसन & CGT', icon: Coins, color: 'bg-amber-500 text-white', href: '/tools/malpot-calculator' },
    { title: '७७ जिल्ला नापी', sub: 'कार्यालय फोन/इमेल', icon: Building2, color: 'bg-sky-500 text-white', href: '/tools/survey-offices' },
    { title: 'जग्गा बैना कागज', sub: 'A4 कानुनी लिखत', icon: ScrollText, color: 'bg-orange-500 text-white', href: '/tools/legal-templates' },
    { title: 'कित्ताकाट मापदण्ड', sub: '१३० वर्गमिटर नियम', icon: Split, color: 'bg-purple-500 text-white', href: '/tools/kitta-kat-checker' },
  ];

  return (
    <div className="space-y-10">
      
      {/* 1. Citizen Portal Top Greeting Card */}
      <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-indigo-800 text-white shadow-md space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-200 tracking-wide uppercase flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>नेपाल डिजिटल नागरिक सेवा (Citizen Services Portal)</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-black">
              तपाईंलाई आज कुन सेवा वा टूल आवश्यक छ?
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
              जग्गा नापजाँच, सरकारी फारमका लागि फोटो साइज घटाउने, प्रिती युनिकोड वा PDF बनाउने सम्पूर्ण काम एकै स्थानबाट गर्नुहोस्।
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shrink-0 text-right">
            <TithiWidget />
          </div>
        </div>
      </section>

      {/* 2. Big Vibrant App Touch-Tiles Grid (HamroPatro / Nagarik App style) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>प्रमुख अनलाइन सेवाहरू (Quick Access Tiles)</span>
          </h2>
          <span className="text-xs text-slate-500">१-ट्यापमा खोल्नुहोस्</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
          {quickTiles.map((tile, idx) => {
            const Icon = tile.icon;
            return (
              <Link
                key={idx}
                href={tile.href}
                className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-3 group active:scale-98"
              >
                <div className={`w-12 h-12 rounded-2xl ${tile.color} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors leading-tight">
                    {tile.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {tile.sub}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. Main Calculator Card */}
      <section id="land-calc-section" className="scroll-mt-24 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Calculator className="w-4 h-4 text-emerald-600" />
            <span>जग्गा नापजाँच तथा रूपान्तरण क्यालकुलेटर</span>
          </h2>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
            स्लिप प्रिन्ट उपलब्ध
          </span>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs p-1">
          <LandCalculator />
        </div>
      </section>

    </div>
  );
}
