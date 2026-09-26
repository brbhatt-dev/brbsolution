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
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import UniversalSmartSearch from './UniversalSmartSearch';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';

export default function StyleGovUkClean() {
  const servicePillars = [
    {
      step: '१',
      title: 'जग्गा नाप-जाँच तथा रूपान्तरण',
      desc: 'रोपनी, आना, पैसा, दाम र बिघा, कट्ठा, धुरको आधिकारिक सरकारी सूत्रमा क्षेत्रफल हिसाब।',
      href: '/tools/land-calculator',
      action: 'नाप सुरु गर्नुहोस्'
    },
    {
      step: '२',
      title: 'मालपोत तथा रजिस्ट्रेसन दस्तुर',
      desc: 'आ.व. २०८१/८२ को बजेट अनुसार महानगर, उप-महानगर र गाउँपालिकाको लिखत पास राजस्व र महिला छुट।',
      href: '/tools/malpot-calculator',
      action: 'कर हिसाब गर्नुहोस्'
    },
    {
      step: '३',
      title: 'भू-उपयोग कित्ताकाट मापदण्ड',
      desc: 'भू-उपयोग नियमावली २०७९ अनुसार आवासीय (१३० वर्गमिटर) र कृषि (६७५ वर्गमिटर) कित्ताकाट योग्यता।',
      href: '/tools/kitta-kat-checker',
      action: 'मापदण्ड चेक गर्नुहोस्'
    },
    {
      step: '४',
      title: 'सरकारी फारम तथा PDF डकुमेन्ट',
      desc: 'नागरिकता/लालपुर्जाबाट A4 PDF बनाउने र लोकसेवा फारमका लागि फोटो २००KB मुनि झार्ने।',
      href: '/tools/images-to-pdf',
      action: 'कागजात तयार पार्नुहोस्'
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto font-sans">
      
      {/* 1. Official National Gov Header */}
      <header className="border-b-2 border-slate-900 dark:border-slate-100 pb-6 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🇳🇵</span>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-red-700 dark:text-red-400">
                नेपाल डिजिटल भू-सूचना तथा नापी सेवा
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                नागरिक डिजिटल सेवा केन्द्र (GovTech Nepal)
              </h1>
            </div>
          </div>

          <TithiWidget />
        </div>
      </header>

      {/* 2. World-Class Accessible Search Hero */}
      <section className="bg-slate-50 dark:bg-slate-900 border-l-4 border-red-700 p-6 sm:p-8 rounded-r-3xl space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            आज तपाईंलाई कुन सेवा वा जानकारी चाहिएको छ?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            जग्गाको क्षेत्रफल, मालपोत शुल्क, कित्ताकाट ऐन, वा ७७ जिल्लाका नापी कार्यालय सम्बन्धी कुनै पनि प्रश्न खोज्नुहोस्:
          </p>
        </div>

        <UniversalSmartSearch placeholder="यहाँ टाइप गरी खोज्नुहोस् (जस्तै: ४ आना, कित्ताकाट, मालपोत कर, कास्की नापी)..." />
      </section>

      {/* 3. The 4 Essential Citizen Service Pillars */}
      <section className="space-y-6">
        <h3 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-2">
          प्रमुख नागरिक सेवाहरू (Core Citizen Services)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicePillars.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-slate-400 transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-black text-sm flex items-center justify-center">
                  {p.step}
                </span>
                <h4 className="text-lg font-black text-slate-900 dark:text-white">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div>
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 dark:text-red-400 hover:underline"
                >
                  <span>{p.action}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Embedded Land Measurement Core */}
      <section className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
          <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-red-700" />
            <span>जग्गा नाप-जाँच प्रणाली</span>
          </h3>
          <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded font-mono text-slate-600 dark:text-slate-300">
            आधिकारिक सूत्र
          </span>
        </div>

        <LandCalculator />
      </section>

      {/* 5. Official Verification Guarantee */}
      <footer className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <span className="text-emerald-900 dark:text-emerald-200">
            <strong>नागरिक सुरक्षा ग्यारेन्टी:</strong> यहाँ गरिने सबै हिसाबहरू तपाईंको आफ्नै मोबाइल वा कम्प्युटरमै हुन्छन्। कुनै पनि जग्गा विवरण वा कागजात सर्भरमा अपलोड हुँदैन।
          </span>
        </div>

        <Link
          href="/contact"
          className="font-bold underline text-emerald-800 dark:text-emerald-300 shrink-0"
        >
          सहायता डेस्क सम्पर्क &rarr;
        </Link>
      </footer>

    </div>
  );
}
