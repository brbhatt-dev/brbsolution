'use client';

import React, { useState } from 'react';
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
  ExternalLink,
  MapPin,
  Mail,
  UserCheck,
  Download,
  Calendar,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';
import UniversalSmartSearch from './UniversalSmartSearch';

export default function StyleDoSSurveyDept() {
  const [activeNoticeTab, setActiveNoticeTab] = useState<'notices' | 'gazette' | 'procurement'>('notices');

  const citizenCharter = [
    { service: 'जग्गाको क्षेत्रफल रूपान्तरण तथा प्रमाणित स्लिप', time: 'तत्काल (१ मिनेट)', fee: 'नि:शुल्क (अनलाइन)', desk: 'डिजिटल नापी शाखा', doc: 'कित्ता नम्बर / नाप' },
    { service: 'कित्ताकाट मापदण्ड प्रारम्भिक जाँच (भू-उपयोग)', time: 'तत्काल', fee: 'नि:शुल्क', desk: 'प्राविधिक शाखा', doc: 'क्षेत्रफल विवरण' },
    { service: 'नापी नक्सा तथा फिल्डबुक जानकारी', time: 'कार्यालय समय', fee: 'नियमानुसार', desk: 'अभिलेख शाखा', doc: 'लालपुर्जा प्रतिलिपि' },
    { service: 'नापी कार्यालय सम्पर्क तथा गुनासो सुनुवाइ', time: '२४ घण्टाभित्र', fee: 'नि:शुल्क', desk: 'सूचना तथा गुनासो डेस्क', doc: 'निवेदन / फोन' },
  ];

  const notices = [
    { title: 'भू-उपयोग ऐन २०७६ बमोजिम कित्ताकाट सम्बन्धी मन्त्रिपरिषद्को निर्णय तथा कार्यान्वयन परिपत्र', date: '२०८१/०५/१२', cat: 'परिपत्र' },
    { title: 'आर्थिक वर्ष २०८१/८२ को मालपोत रजिस्ट्रेसन दस्तुर तथा वाग्मती प्रदेश पूर्वाधार कर सम्बन्धी सूचना', date: '२०८१/०४/०१', cat: 'राजस्व' },
    { title: 'नेपालभरका नापी कार्यालयहरूमा डिजिटल प्रणाली तथा मेरो कित्ता सेवा सञ्चालन सम्बन्धी', date: '२०८१/०३/२५', cat: 'सूचना' },
    { title: 'जग्गा नापजाँच नियमावली तथा प्राविधिक मापदण्ड निर्देशिका अद्यावधिक', date: '२०८०/११/१५', cat: 'निर्देशिका' },
  ];

  return (
    <div className="space-y-8 font-sans text-slate-800 dark:text-slate-100 max-w-6xl mx-auto">
      
      {/* 1. Official Government Header Bar (dos.gov.np Style) */}
      <header className="bg-white dark:bg-slate-900 border-t-4 border-red-700 border-x border-b border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 space-y-4">
        
        {/* Top Header Row with Coat of Arms & Emblem */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-red-50 dark:bg-red-950/40 rounded-2xl border border-red-200 dark:border-red-900 flex items-center justify-center p-2 shadow-xs">
              <span className="text-3xl sm:text-4xl">🇳🇵</span>
            </div>
            
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wider">
                नेपाल सरकार &bull; भूमि व्यवस्था, सहकारी तथा गरिबी निवारण मन्त्रालय
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                नापी विभाग (Department of Survey)
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                डिजिटल नापी, क्याडस्ट्रल नक्सा, र भू-सूचना सहयोग स्तम्भ
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
            <div className="text-[11px] font-serif italic text-red-700 dark:text-red-400 border-b border-red-200 dark:border-red-900 pb-1">
              "जननी जन्मभूमिश्च स्वर्गादपि गरीयसी"
            </div>
            <TithiWidget />
          </div>

        </div>

        {/* Official Navigation Menu Bar (Red Ribbon Style) */}
        <div className="bg-red-700 text-white rounded-xl p-2 px-3 flex flex-wrap items-center justify-between gap-2 text-xs font-bold shadow-xs">
          <div className="flex flex-wrap items-center gap-1 sm:gap-2">
            <Link href="/" className="px-2.5 py-1 rounded hover:bg-red-800 transition">गृहपृष्ठ (Home)</Link>
            <span>&bull;</span>
            <Link href="/tools/land-calculator" className="px-2.5 py-1 rounded hover:bg-red-800 transition">जग्गा क्यालकुलेटर</Link>
            <span>&bull;</span>
            <Link href="/tools/kitta-kat-checker" className="px-2.5 py-1 rounded hover:bg-red-800 transition">कित्ताकाट मापदण्ड</Link>
            <span>&bull;</span>
            <Link href="/tools/malpot-calculator" className="px-2.5 py-1 rounded hover:bg-red-800 transition">मालपोत दस्तुर</Link>
            <span>&bull;</span>
            <Link href="/laws" className="px-2.5 py-1 rounded hover:bg-red-800 transition">ऐन-कानुन</Link>
            <span>&bull;</span>
            <Link href="/tools/survey-offices" className="px-2.5 py-1 rounded hover:bg-red-800 transition">नापी कार्यालयहरू</Link>
          </div>

          <div className="text-[11px] font-mono bg-red-800 px-2 py-0.5 rounded">
            आधिकारिक वेब सेवा
          </div>
        </div>

      </header>

      {/* 2. Scrolling Notice Marquee Ticker */}
      <div className="bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-500 rounded-r-xl p-2.5 px-4 flex items-center justify-between gap-3 text-xs text-amber-900 dark:text-amber-200 shadow-2xs">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="bg-red-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shrink-0">
            ताजा सूचना:
          </span>
          <span className="truncate font-semibold">
            भू-उपयोग नियमावली २०७९ अनुसार आवासीय क्षेत्रमा १३० वर्गमिटर र कृषि क्षेत्रमा ६७५ वर्गमिटर भन्दा कम क्षेत्रफलमा कित्ताकाट गर्न नपाइने व्यवस्था लागू छ।
          </span>
        </div>

        <Link href="/laws" className="shrink-0 font-bold underline hover:text-amber-700 text-[11px]">
          थप हेर्नुहोस् &rarr;
        </Link>
      </div>

      {/* 3. Universal Smart Search for Government Services */}
      <section className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
        <div className="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
          <Search className="w-4 h-4 text-red-700" />
          <span>नापी विभाग एकीकृत सेवा तथा ऐन-नियम खोज प्रणाली:</span>
        </div>
        <UniversalSmartSearch placeholder="नापी सेवा, कित्ताकाट नियम, कार्यालय वा क्षेत्रफल टाइप गरी खोज्नुहोस्..." />
      </section>

      {/* 4. Split Main Content: Measurement Engine + Official Personnel Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: The Official Measurement Engine */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-red-700" />
                <h2 className="text-lg font-black text-slate-900 dark:text-white">
                  जग्गा क्षेत्रफल रूपान्तरण तथा आधिकारिक स्लिप प्रिन्ट
                </h2>
              </div>
              <span className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400 font-mono">
                विभाग प्रमाणित सूत्र
              </span>
            </div>

            <LandCalculator />
          </div>

          {/* Citizen Charter (नागरिक बडापत्र - Nagarik Badapatra) */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base font-black text-slate-900 dark:text-white">
                  डिजिटल नागरिक बडापत्र (Citizen Charter)
                </h3>
              </div>
              <span className="text-xs text-slate-500">अनलाइन सुविधा</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase">
                  <tr>
                    <th className="p-2.5 rounded-l-lg">सेवाको नाम</th>
                    <th className="p-2.5">लाग्ने समय</th>
                    <th className="p-2.5">दस्तुर</th>
                    <th className="p-2.5">जिम्मेवार शाखा</th>
                    <th className="p-2.5 rounded-r-lg">आवश्यक विवरण</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {citizenCharter.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-2.5 font-bold text-slate-900 dark:text-white">{item.service}</td>
                      <td className="p-2.5 text-emerald-600 dark:text-emerald-400 font-semibold">{item.time}</td>
                      <td className="p-2.5">{item.fee}</td>
                      <td className="p-2.5 text-slate-500">{item.desk}</td>
                      <td className="p-2.5 text-slate-500">{item.doc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Sidebar: Official Information Officer & Notice Board */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Official Information Officer Card (सूचना अधिकारी - Exactly like dos.gov.np) */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border-t-4 border-red-700 border-x border-b border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <UserCheck className="w-4 h-4 text-red-700" />
              <h4 className="font-black text-sm text-slate-900 dark:text-white">
                सूचना अधिकारी तथा सहायता डेस्क
              </h4>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-400 shrink-0 font-bold text-xl">
                👨‍💼
              </div>
              <div className="space-y-0.5 text-xs">
                <div className="font-bold text-slate-900 dark:text-white">सूचना तथा गुनासो शाखा</div>
                <div className="text-[11px] text-red-700 dark:text-red-400 font-semibold">नापी तथा भू-सूचना सहयोग</div>
                <div className="text-[11px] text-slate-500">काठमाडौँ, नेपाल</div>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-red-700 shrink-0" />
                <span>फोन: <strong>०१-४४२३८६० / ९८००००००००</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-red-700 shrink-0" />
                <span>इमेल: <strong>info@dos.gov.np</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-700 shrink-0" />
                <span>स्थान: मिनभवन / डिल्लीबजार, काठमाडौँ</span>
              </div>
            </div>

            <Link
              href="/tools/survey-offices"
              className="block w-full py-2 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-xs text-center transition shadow-xs"
            >
              ७७ जिल्ला नापी सम्पर्क निर्देशिका &rarr;
            </Link>
          </div>

          {/* Official Notices Tab Box */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-3">
            <h4 className="font-black text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-red-700" />
              <span>सूचना तथा परिपत्र (Notices & Gazettes)</span>
            </h4>

            <div className="space-y-2.5">
              {notices.map((n, idx) => (
                <Link
                  key={idx}
                  href="/laws"
                  className="block p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition border border-slate-100 dark:border-slate-800"
                >
                  <div className="text-xs font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug">
                    {n.title}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-1">
                    <span className="bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 px-1.5 py-0.2 rounded font-semibold">{n.cat}</span>
                    <span>{n.date}</span>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/laws"
              className="inline-flex items-center gap-1 text-xs font-bold text-red-700 dark:text-red-400 hover:underline pt-1"
            >
              <span>सबै सूचना तथा ऐनहरू हेर्नुहोस्</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
