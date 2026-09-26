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
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Download,
  Calendar,
  ExternalLink,
  Award,
  Users
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';
import UniversalSmartSearch from './UniversalSmartSearch';

export default function StyleMinistryMolcpa() {
  const policies = [
    { title: 'राष्ट्रिय भू-उपयोग ऐन, २०७६ तथा नियमावली २०७९', date: '२०७९/०२/२७', cat: 'मूल ऐन' },
    { title: 'कित्ताकाट सम्बन्धी मन्त्रिपरिषद्को निर्णय तथा कार्यविधि परिपत्र', date: '२०८१ भदौ', cat: 'मन्त्रिपरिषद्' },
    { title: 'आर्थिक ऐन २०८१ बमोजिम मालपोत रजिस्ट्रेसन दस्तुर तथा छुट सम्बन्धी राजपत्र', date: '२०८१/०४/०१', cat: 'राजपत्र' },
    { title: 'जग्गा (नाप जाँच) ऐन, २०१९ (संशोधनसहित)', date: '२०१९', cat: 'ऐन' },
  ];

  return (
    <div className="space-y-8 font-sans text-slate-800 dark:text-slate-100 max-w-6xl mx-auto">
      
      {/* 1. Official Ministry Banner (molcpa.gov.np) */}
      <header className="bg-white dark:bg-slate-900 border-t-4 border-red-700 border-x border-b border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-6 space-y-4">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-red-50 dark:bg-red-950/40 rounded-2xl border border-red-200 dark:border-red-900 flex items-center justify-center p-2 shadow-xs">
              <span className="text-3xl sm:text-4xl">🇳🇵</span>
            </div>
            
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-widest">
                नेपाल सरकार (Government of Nepal)
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                भूमि व्यवस्था, सहकारी तथा गरिबी निवारण मन्त्रालय
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Ministry of Land Management, Cooperatives and Poverty Alleviation
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
            <div className="text-xs font-serif italic text-red-700 dark:text-red-400">
              "जननी जन्मभूमिश्च स्वर्गादपि गरीयसी"
            </div>
            <TithiWidget />
          </div>
        </div>

        {/* Ministry Ribbon Navigation */}
        <div className="bg-red-800 text-white rounded-xl p-2 px-3 flex flex-wrap items-center justify-between gap-2 text-xs font-bold shadow-xs">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="px-2 py-1 rounded hover:bg-red-900 transition">गृहपृष्ठ</Link>
            <span>&bull;</span>
            <Link href="/laws" className="px-2 py-1 rounded hover:bg-red-900 transition">नीति, ऐन तथा नियमावली</Link>
            <span>&bull;</span>
            <Link href="/tools/land-calculator" className="px-2 py-1 rounded hover:bg-red-900 transition">जग्गा नापी इन्जिन</Link>
            <span>&bull;</span>
            <Link href="/tools/malpot-calculator" className="px-2 py-1 rounded hover:bg-red-900 transition">मालपोत राजस्व दर</Link>
            <span>&bull;</span>
            <Link href="/tools/survey-offices" className="px-2 py-1 rounded hover:bg-red-900 transition">मातहतका कार्यालयहरू</Link>
          </div>

          <span className="text-[11px] font-mono text-red-200">
            केन्द्रीय मन्त्रालय वेब पोर्टल
          </span>
        </div>

      </header>

      {/* 2. Ministerial Universal Search Bar */}
      <UniversalSmartSearch placeholder="मन्त्रालयका ऐन-कानुन, कित्ताकाट परिपत्र, नापी वा मालपोत सेवा खोज्नुहोस्..." />

      {/* 3. Split: Official Land Engine + Ministerial Directives */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: The Precision Measurement Engine */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-red-700" />
              <h2 className="text-lg font-black text-slate-900 dark:text-white">
                जग्गा क्षेत्रफल मापन तथा रूपान्तरण प्रणाली
              </h2>
            </div>
            <span className="text-xs bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-400 font-bold px-2 py-0.5 rounded">
              आधिकारिक सूत्र
            </span>
          </div>

          <LandCalculator />
        </div>

        {/* Right: Ministerial Directives & Gazettes */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <Scale className="w-4 h-4 text-red-700" />
              <h3 className="font-black text-sm text-slate-900 dark:text-white">
                नीति तथा मन्त्रिपरिषद् परिपत्र
              </h3>
            </div>

            <div className="space-y-2.5">
              {policies.map((p, idx) => (
                <Link
                  key={idx}
                  href="/laws"
                  className="block p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition border border-slate-100 dark:border-slate-800"
                >
                  <div className="text-xs font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug">
                    {p.title}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-1">
                    <span className="bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 px-1.5 py-0.2 rounded font-semibold">{p.cat}</span>
                    <span>{p.date}</span>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/laws"
              className="inline-flex items-center gap-1 text-xs font-bold text-red-700 dark:text-red-400 hover:underline pt-1"
            >
              <span>सबै ऐन र राजपत्रहरू हेर्नुहोस्</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Subordinate Departments Card */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xs space-y-3">
            <h4 className="font-bold text-xs uppercase text-slate-400 tracking-wider">
              मन्त्रालय मातहतका विभागहरू:
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 flex justify-between items-center">
                <span className="font-bold">नापी विभाग</span>
                <span className="text-[10px] text-emerald-400">dos.gov.np</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 flex justify-between items-center">
                <span className="font-bold">भूमि व्यवस्थापन तथा अभिलेख विभाग</span>
                <span className="text-[10px] text-blue-400">dolrm.gov.np</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
