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
  FileCheck,
  FolderOpen,
  MapPin,
  ExternalLink
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';

export default function StyleGovPortal() {
  const citizenServices = [
    {
      title: 'जग्गा नापी तथा रूपान्तरण',
      desc: 'रोपनी-आना, बिघा-कट्ठा, र वर्गमिटरको आधिकारिक नाप प्रणाली।',
      icon: Calculator,
      href: '/tools/land-calculator',
      badge: 'अनलाइन सेवा',
      color: 'blue'
    },
    {
      title: 'मालपोत तथा रजिस्ट्रेसन दस्तुर',
      desc: 'आ.व. २०८१/८२ अनुसार रजिस्ट्रेसन शुल्क, महिला छुट र वाग्मती कर।',
      icon: Coins,
      href: '/tools/malpot-calculator',
      badge: 'कर गणना',
      color: 'amber'
    },
    {
      title: 'कित्ताकाट मापदण्ड जाँच',
      desc: 'राष्ट्रिय भू-उपयोग नियमावली २०७९ बमोजिम आवासीय र कृषि कित्ताकाट नियम।',
      icon: Scale,
      href: '/tools/kitta-kat-checker',
      badge: 'नियमावली २०७९',
      color: 'emerald'
    },
    {
      title: '७७ जिल्ला नापी कार्यालय निर्देशिका',
      desc: 'नेपालभरका नापी र मालपोत कार्यालयहरूको आधिकारिक सम्पर्क नम्बर र स्थान।',
      icon: Building2,
      href: '/tools/survey-offices',
      badge: 'सम्पर्क डेस्क',
      color: 'purple'
    },
    {
      title: 'लालपुर्जा/कागजात A4 PDF',
      desc: 'नागरिकता र जग्गाधनी प्रमाणपुर्जाका फोटोहरू मिलाएर A4 प्रिन्टेबल PDF।',
      icon: FileCheck,
      href: '/tools/images-to-pdf',
      badge: 'डिजिटल कागजात',
      color: 'red'
    },
    {
      title: 'Preeti युनिकोड नेपाली टाइप',
      desc: 'सरकारी कामकाज र निवेदनमा प्रयोग हुने शुद्ध युनिकोड रूपान्तरण।',
      icon: FileText,
      href: '/tools/preeti-to-unicode',
      badge: 'कार्यालय सहायता',
      color: 'indigo'
    }
  ];

  const gazettes = [
    { title: 'भू-उपयोग ऐन, २०७६ तथा नियमावली २०७९', cat: 'ऐन-नियम', date: '२०७९/०२/२७' },
    { title: 'मालपोत रजिस्ट्रेसन दस्तुर तथा महिला/दलित छुट सम्बन्धी परिपत्र', cat: 'राजस्व', date: '२०८१/०४/०१' },
    { title: 'कित्ताकाट सम्बन्धी मन्त्रिपरिषद्को पछिल्लो निर्णय तथा कार्यविधि', cat: 'कार्यविधि', date: '२०८१' },
    { title: 'जग्गा नापजाँच ऐन, २०१९ (आठौँ संशोधनसहित)', cat: 'मूल ऐन', date: '२०१९' }
  ];

  return (
    <div className="space-y-10">
      
      {/* 1. Official Header / National Banner */}
      <section className="bg-white dark:bg-slate-900 border-t-4 border-red-700 rounded-2xl shadow-sm border-x border-b border-slate-200 dark:border-slate-800 p-6 sm:p-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 flex items-center justify-center shrink-0 shadow-xs">
              <span className="text-3xl">🇳🇵</span>
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wider">
                <span>नेपाल सरकार भू-सूचना सहयोग स्तम्भ</span>
                <span>&bull;</span>
                <span>Digital Land Portal</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                नागरिक डिजिटल नापी तथा भू-अभिलेख सहायता केन्द्र
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                जग्गा नाप-जाँच, कित्ताकाट नियम, रजिस्ट्रेसन दस्तुर र आधिकारिक निर्देशिका एकै ठाउँमा।
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <TithiWidget />
          </div>

        </div>
      </section>

      {/* 2. Notice / Circular Banner */}
      <div className="bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-500 p-4 rounded-r-xl flex items-center justify-between gap-3 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>
            <strong>नागरिक सूचना:</strong> आ.व. २०८१/८२ को मालपोत रजिस्ट्रेसन दस्तुर र भू-उपयोग नियमावली २०७९ का अद्यावधिक नियमहरू समावेश गरिएको छ।
          </span>
        </div>
        <Link href="/laws" className="font-bold underline shrink-0 hover:text-amber-700">
          परिपत्र पढ्नुहोस् &rarr;
        </Link>
      </div>

      {/* 3. Main Split Engine: Official Calculator & Services */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: The Official Calculator */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-600"></div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white">
                जग्गा नाप-जाँच तथा मूल्यांकन प्रणाली
              </h2>
            </div>
            <span className="text-[11px] font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400">
              प्रमाणित सूत्र
            </span>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xs">
            <LandCalculator />
          </div>
        </div>

        {/* Right: Citizen Services Desk & Directory */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-black text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>डिजिटल नागरिक सहायता सेवाहरू</span>
              </h3>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                नि:शुल्क
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {citizenServices.slice(1, 5).map((srv, idx) => (
                <Link
                  key={idx}
                  href={srv.href}
                  className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 transition flex items-center justify-between border border-slate-700/60 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-700 text-emerald-400 flex items-center justify-center shrink-0">
                      <srv.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition">
                        {srv.title}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {srv.badge}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>

          {/* Laws & Directives Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>भूमि सम्बन्धी मुख्य ऐन तथा परिपत्र</span>
              <FolderOpen className="w-3.5 h-3.5" />
            </h4>

            <div className="space-y-2">
              {gazettes.map((g, idx) => (
                <Link
                  key={idx}
                  href="/laws"
                  className="block p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 transition border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                >
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-1">
                    {g.title}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-0.5">
                    <span className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.2 rounded font-mono">{g.cat}</span>
                    <span>{g.date}</span>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/laws"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 dark:text-red-400 hover:underline pt-1"
            >
              <span>सबै ऐन र नियमावलीहरू हेर्नुहोस्</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
