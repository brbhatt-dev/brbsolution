'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  Calculator, 
  Scale, 
  Building2, 
  FileText, 
  Coins, 
  TrendingUp,
  HelpCircle,
  Compass,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import UniversalSmartSearch from './UniversalSmartSearch';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';

export default function StylePerplexitySearch() {
  const trendingSearches = [
    { label: '४ आनाको कति वर्गफिट हुन्छ?', q: '४ आना', desc: '१,३६८.९८ वर्गफिट' },
    { label: 'काठमाडौँमा कित्ताकाटको नयाँ नियम', q: 'कित्ताकाट', desc: 'आवासीय १३० m² / कृषि ६७५ m²' },
    { label: 'मालपोतमा महिला छुट कति प्रतिशत छ?', q: 'मालपोत', desc: '२५% देखि ५०% सम्म छुट' },
    { label: 'नागरिकता फोटोलाई २००KB मुनि कसरी झार्ने?', q: 'कम्प्रेसर', desc: 'लोकसेवा अनलाइन फारम' },
  ];

  const knowledgeClusters = [
    {
      title: 'जग्गा नापजाँच तथा इकाइ रूपान्तरण',
      desc: 'पहाडको १६ आना = १ रोपनी र तराईको २० कट्ठा = १ बिघा प्रणालीको शुद्ध गणित।',
      icon: Calculator,
      href: '/tools/land-calculator',
      badge: 'लाइभ इन्जिन'
    },
    {
      title: 'मालपोत तथा रजिस्ट्रेसन दस्तुर ऐन',
      desc: 'आ.व. २०८१/८२ अनुसार महानगरपालिका, उप-महानगरपालिका र गाउँपालिकाको लिखत पास दर।',
      icon: Coins,
      href: '/tools/malpot-calculator',
      badge: '२०८१ अद्यावधिक'
    },
    {
      title: 'भू-उपयोग नियमावली २०७९ कित्ताकाट मापदण्ड',
      desc: 'कृषि, आवासीय, र व्यापारिक जमिन विभाजनका अनिवार्य सरकारी मापदण्डहरू।',
      icon: Scale,
      href: '/tools/kitta-kat-checker',
      badge: 'ऐन-नियम'
    },
    {
      title: 'नेपालभरका नापी तथा मालपोत कार्यालयहरू',
      desc: '७७ वटै जिल्लाका नापी प्रमुख, फोन नम्बर, इमेल र कार्यालय ठेगाना।',
      icon: Building2,
      href: '/tools/survey-offices',
      badge: 'सम्पर्क निर्देशिका'
    }
  ];

  return (
    <div className="space-y-14 max-w-4xl mx-auto">
      
      {/* 1. Deep AI Search Hero */}
      <section className="text-center space-y-6 pt-4">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>नेपालको इन्टेलिजेन्ट जग्गा तथा भू-सूचना खोज इन्जिन</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            तपाईंलाई जग्गा वा अफिस सम्बन्धी <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              के जानकारी चाहिएको छ?
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            जग्गाको क्षेत्रफल नाप्न, मालपोत कर बुझ्न, ऐन-कानुन हेर्न वा सरकारी कार्यालय खोज्न तल टाइप गर्नुहोस्:
          </p>
        </div>

        {/* Master Universal Smart Search Component */}
        <div className="pt-2">
          <UniversalSmartSearch variant="hero" />
        </div>

      </section>

      {/* 2. Trending Answers Stream */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-500" />
            <span>सबैभन्दा धेरै खोजिएका विषयहरू (Trending Queries)</span>
          </span>
          <span>ताजा उत्तर</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {trendingSearches.map((ts, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-emerald-500/50 transition flex items-center justify-between"
            >
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {ts.label}
                </h4>
                <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{ts.desc}</span>
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Precision Calculator Workspace */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-500" />
              <span>प्रत्यक्ष जग्गा नापजाँच इन्जिन</span>
            </h3>
            <p className="text-xs text-slate-500">
              आफ्नो जग्गाको नाप इन्टर गरी आधिकारिक स्लिप प्रिन्ट गर्नुहोस्।
            </p>
          </div>
          <TithiWidget />
        </div>

        <LandCalculator />
      </section>

      {/* 4. Categorized Knowledge Base Clusters */}
      <section className="space-y-4">
        <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
          महत्वपूर्ण सेवा स्तम्भहरू (Knowledge Clusters)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {knowledgeClusters.map((kc, idx) => (
            <Link
              key={idx}
              href={kc.href}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 transition group shadow-xs flex flex-col justify-between space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <kc.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  {kc.badge}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                  {kc.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {kc.desc}
                </p>
              </div>

              <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 pt-1">
                <span>खोल्नुहोस्</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
