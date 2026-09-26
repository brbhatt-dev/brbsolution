'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Map, 
  FileText, 
  Calculator, 
  Coins, 
  Scale, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  ArrowRightLeft, 
  ImageIcon, 
  Layers,
  ChevronRight,
  QrCode
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';
import UniversalSmartSearch from './UniversalSmartSearch';

export default function StyleNagarikAppOfficial() {
  const nagarikServices = [
    { title: 'मेरो कित्ता (Mero Kitta)', sub: 'नापी नक्सा, फिल्डबुक र क्षेत्रफल', icon: Map, color: 'bg-blue-600', href: '/tools/land-calculator', badge: 'प्रमुख सेवा' },
    { title: 'मालपोत तथा रजिस्ट्रेसन कर', sub: 'आ.व. २०८१/८२ राजस्व र छुट', icon: Coins, color: 'bg-emerald-600', href: '/tools/malpot-calculator', badge: 'राजस्व' },
    { title: 'कित्ताकाट मापदण्ड जाँच', sub: 'आवासीय (१३० m²) र कृषि (६७५ m²)', icon: Scale, color: 'bg-purple-600', href: '/tools/kitta-kat-checker', badge: 'नियमावली २०७९' },
    { title: 'कागजातबाट A4 PDF', sub: 'नागरिकता र पुर्जा मिलाएर PDF', icon: FileText, color: 'bg-red-600', href: '/tools/images-to-pdf', badge: 'डकुमेन्ट' },
    { title: 'Preeti ⇄ Unicode टाइप', sub: 'सरकारी कामकाज र निवेदन', icon: ArrowRightLeft, color: 'bg-teal-600', href: '/tools/preeti-to-unicode', badge: 'युटिलिटी' },
    { title: 'फोटो कम्प्रेसर (<२००KB)', sub: 'लोकसेवा तथा अनलाइन फारम', icon: ImageIcon, color: 'bg-rose-500', href: '/tools/image-compressor', badge: 'लोकसेवा' },
  ];

  return (
    <div className="space-y-8 font-sans text-slate-900 dark:text-slate-100 max-w-5xl mx-auto">
      
      {/* 1. Nagarik App Verified Citizen Profile Card */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-blue-600/60 pb-5">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-white text-blue-800 flex items-center justify-center font-black text-2xl shadow-md shrink-0">
              🇳🇵
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black">
                  नागरिक एप डिजिटल भूमि सेवा
                </h1>
                <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-400 text-slate-950 font-black px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3 stroke-[3]" />
                  <span>प्रमाणित पोर्टल</span>
                </span>
              </div>
              <p className="text-xs text-blue-200 mt-0.5">
                सबै सरकारी नापी, कित्ता र मालपोत सेवाहरू एउटै सुरक्षित प्लेटफर्ममा
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <TithiWidget />
          </div>
        </div>

        {/* Integrated Universal Smart Search within Nagarik App Banner */}
        <div className="pt-1">
          <UniversalSmartSearch placeholder="कुनै पनि सेवा खोज्नुहोस्: जग्गा नाप, मालपोत कर, कित्ताकाट, नापी अफिस..." />
        </div>

      </section>

      {/* 2. Nagarik App Clean Touch Service Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-base font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>नागरिक सेवाहरू (Citizen Services)</span>
          </h2>
          <span className="text-xs text-slate-500 font-bold">१००% नि:शुल्क अनलाइन</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nagarikServices.map((s, idx) => (
            <Link
              key={idx}
              href={s.href}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition shadow-xs hover:shadow-md flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-12 h-12 rounded-2xl ${s.color} text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                  <s.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition">
                      {s.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                    {s.sub}
                  </p>
                </div>
              </div>

              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition transform group-hover:translate-x-1 shrink-0 ml-2" />
            </Link>
          ))}
        </div>
      </section>

      {/* 3. The Embedded Precision Mero Kitta Land Engine */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-blue-600" />
              <span>मेरो कित्ता डिजिटल नापी क्यालकुलेटर</span>
            </h3>
            <p className="text-xs text-slate-500">
              आफ्नो कित्ताको नाप टाइप गरी आधिकारिक प्रिन्ट स्लिप निकाल्नुहोस्।
            </p>
          </div>
          <span className="text-xs bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold px-2.5 py-1 rounded-full">
            नागरिक सेवा
          </span>
        </div>

        <LandCalculator />
      </section>

    </div>
  );
}
