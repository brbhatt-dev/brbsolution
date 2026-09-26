'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Scale, 
  FileText, 
  Calculator, 
  Coins, 
  ShieldCheck, 
  Search, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle,
  ExternalLink,
  LifeBuoy
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';
import UniversalSmartSearch from './UniversalSmartSearch';

export default function StyleDoITUnifiedPortal() {
  const unifiedTaxonomy = [
    { title: 'भूमि तथा नापी सेवाहरू', count: '७ वटा टुल्स', desc: 'जग्गा नाप, कित्ताकाट, नक्सा र फिल्डबुक हिसाब', href: '/tools/land-calculator', icon: Calculator, color: 'text-red-700' },
    { title: 'राजस्व तथा मालपोत कर', count: 'आ.व. २०८१/८२', desc: 'रजिस्ट्रेसन दस्तुर, वाग्मती कर र महिला छुट', href: '/tools/malpot-calculator', icon: Coins, color: 'text-amber-600' },
    { title: 'ऐन, कानुन तथा राजपत्र', count: '१२ वटा ऐन', desc: 'भू-उपयोग, जग्गा नापजाँच र मालपोत ऐन', href: '/laws', icon: Scale, color: 'text-blue-700' },
    { title: 'डिजिटल कागजात तथा PDF', count: '५ वटा औजार', desc: 'तस्विरबाट A4 PDF र फोटो २००KB कम्प्रेसर', href: '/tools/images-to-pdf', icon: FileText, color: 'text-purple-700' },
  ];

  return (
    <div className="space-y-8 font-sans text-slate-800 dark:text-slate-100 max-w-6xl mx-auto">
      
      {/* 1. National Unified Header (nepal.gov.np DoIT Model) */}
      <header className="bg-white dark:bg-slate-900 border-t-4 border-red-700 border-x border-b border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-6 space-y-4">
        
        {/* Top Accessibility Bar */}
        <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-2">
          <span>नेपाल सरकार &bull; सूचना प्रविधि विभाग (DoIT) एकीकृत पोर्टल ढाँचा</span>
          <div className="flex items-center gap-2">
            <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">नेपाली (Nepali)</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-red-50 dark:bg-red-950/40 rounded-2xl border border-red-200 dark:border-red-900 flex items-center justify-center p-2 shadow-xs">
              <span className="text-3xl sm:text-4xl">🇳🇵</span>
            </div>
            
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-widest">
                नेपाल सरकार (Government of Nepal)
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                एकीकृत राष्ट्रिय डिजिटल भू-पोर्टल (National Land Portal)
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                एकल विन्दुबाट नापी, कित्ता र मालपोत नागरिक सेवाहरू
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <TithiWidget />
          </div>
        </div>

      </header>

      {/* 2. National Smart Search */}
      <section className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
        <h2 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
          <Search className="w-5 h-5 text-red-700" />
          <span>एकीकृत सरकारी सेवा खोज इन्जिन:</span>
        </h2>
        <UniversalSmartSearch placeholder="कुनै पनि सरकारी सेवा, ऐन-कानुन, नापी कार्यालय वा जग्गा नाप खोज्नुहोस्..." />
      </section>

      {/* 3. The 4 Unified Taxonomy Pillars */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {unifiedTaxonomy.map((tax, idx) => (
          <Link
            key={idx}
            href={tax.href}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-700 transition shadow-xs hover:shadow-md flex flex-col justify-between space-y-3 group"
          >
            <div className="flex items-center justify-between">
              <tax.icon className={`w-6 h-6 ${tax.color}`} />
              <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-full">
                {tax.count}
              </span>
            </div>

            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-red-700 transition">
                {tax.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {tax.desc}
              </p>
            </div>

            <div className="pt-2 text-xs font-bold text-red-700 dark:text-red-400 flex items-center gap-1">
              <span>सेवा खोल्नुहोस्</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
            </div>
          </Link>
        ))}
      </section>

      {/* 4. Embedded Land Measurement Engine */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
          <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-red-700" />
            <span>एकीकृत जग्गा क्षेत्रफल मापन प्रणाली</span>
          </h3>
          <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded font-mono font-bold">
            प्रमाणित सूत्र
          </span>
        </div>

        <LandCalculator />
      </section>

      {/* 5. Hello Sarkar / Citizen Help Banner */}
      <footer className="p-4 sm:p-5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <LifeBuoy className="w-6 h-6 text-red-700 shrink-0" />
          <span className="text-red-900 dark:text-red-200">
            <strong>हेलो सरकार तथा नागरिक सहायता:</strong> नापी वा मालपोत सेवा सम्बन्धी कुनै समस्या भएमा ११११ मा सिधै फोन गरी गुनासो दर्ता गर्न सक्नुहुन्छ।
          </span>
        </div>

        <Link
          href="/contact"
          className="font-bold underline text-red-700 dark:text-red-300 shrink-0"
        >
          हामीलाई सम्पर्क गर्नुहोस् &rarr;
        </Link>
      </footer>

    </div>
  );
}
