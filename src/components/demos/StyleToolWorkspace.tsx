'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  FileStack, 
  ArrowRightLeft, 
  ImageIcon, 
  FileText, 
  Coins, 
  Scale, 
  QrCode, 
  Check, 
  ArrowRight, 
  Sparkles,
  Zap,
  Printer,
  FileCheck
} from 'lucide-react';
import LandCalculator from '../LandCalculator';

export default function StyleToolWorkspace() {
  const [activeTab, setActiveTab] = useState<'land' | 'pdf' | 'unicode' | 'tax'>('land');

  const microTools = [
    {
      id: 'land-calc',
      title: 'जग्गा नाप क्यालकुलेटर',
      sub: 'Ropani-Aana & Bigha-Katha',
      icon: Calculator,
      color: 'bg-emerald-500 text-white',
      border: 'border-emerald-200 dark:border-emerald-800',
      action: 'हिसाब गर्नुहोस्',
      href: '/tools/land-calculator'
    },
    {
      id: 'preeti',
      title: 'Preeti ⇄ Unicode',
      sub: 'द्रुत नेपाली फन्ट रूपान्तरण',
      icon: ArrowRightLeft,
      color: 'bg-blue-600 text-white',
      border: 'border-blue-200 dark:border-blue-800',
      action: 'टाइप बदल्नुहोस्',
      href: '/tools/preeti-to-unicode'
    },
    {
      id: 'img-compress',
      title: 'फोटो कम्प्रेसर (<२००KB)',
      sub: 'लोकसेवा तथा अनलाइन फारम',
      icon: ImageIcon,
      color: 'bg-rose-500 text-white',
      border: 'border-rose-200 dark:border-rose-800',
      action: 'साइज घटाउनुहोस्',
      href: '/tools/image-compressor'
    },
    {
      id: 'img-pdf',
      title: 'तस्विरबाट A4 PDF',
      sub: 'नागरिकता र लालपुर्जा डकुमेन्ट',
      icon: FileText,
      color: 'bg-red-600 text-white',
      border: 'border-red-200 dark:border-red-800',
      action: 'PDF बनाउनुहोस्',
      href: '/tools/images-to-pdf'
    },
    {
      id: 'pdf-tools',
      title: 'PDF Merge & Split',
      sub: 'कागजात जोड्ने र पाना छुट्टाउने',
      icon: FileStack,
      color: 'bg-purple-600 text-white',
      border: 'border-purple-200 dark:border-purple-800',
      action: 'सम्पादन गर्नुहोस्',
      href: '/tools/pdf-tools'
    },
    {
      id: 'malpot',
      title: 'मालपोत तथा रजिस्ट्रेसन कर',
      sub: 'आ.व. २०८१/८२ शुल्क र छुट',
      icon: Coins,
      color: 'bg-amber-500 text-white',
      border: 'border-amber-200 dark:border-amber-800',
      action: 'कर निकाल्नुहोस्',
      href: '/tools/malpot-calculator'
    },
    {
      id: 'kitta',
      title: 'कित्ताकाट मापदण्ड',
      sub: 'भू-उपयोग आवासीय/कृषि नियम',
      icon: Scale,
      color: 'bg-indigo-600 text-white',
      border: 'border-indigo-200 dark:border-indigo-800',
      action: 'चेक गर्नुहोस्',
      href: '/tools/kitta-kat-checker'
    },
    {
      id: 'kitta-qr',
      title: 'कित्ता QR कोड जेनेरेटर',
      sub: 'नक्सा र फाइलमा स्क्यान योग्य कोड',
      icon: QrCode,
      color: 'bg-teal-600 text-white',
      border: 'border-teal-200 dark:border-teal-800',
      action: 'QR बनाउनुहोस्',
      href: '/tools/kitta-qr'
    }
  ];

  return (
    <div className="space-y-12">
      
      {/* 1. iLovePDF Style Hero Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 text-xs font-bold">
          <Zap className="w-3.5 h-3.5 fill-red-600" />
          <span>१००% नि:शुल्क र ब्राउजरमै चल्ने डिजिटल टुल्स</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          हरेक नापी तथा अफिस कामको लागि <br />
          <span className="text-red-600">सजिलो अनलाइन टुल्स</span>
        </h1>

        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
          जग्गा नाप्न, PDF मिलाउन, फोटो कम्प्रेस गर्न, र नेपाली युनिकोड बदल्न कुनै एप डाउनलोड गर्नु पर्दैन।
        </p>

        {/* Quick Tabs Controller */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {[
            { id: 'land', label: '📐 जग्गा क्यालकुलेटर', badge: 'लाइभ' },
            { id: 'pdf', label: '📄 PDF र फोटो टुल्स', badge: 'लोकप्रिय' },
            { id: 'unicode', label: '⌨️ प्रिती युनिकोड', badge: 'अफिस' },
            { id: 'tax', label: '💰 मालपोत कर', badge: '२०८१' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/20 scale-102'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-extrabold ${
                activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
              }`}>
                {tab.badge}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 2. Interactive Docking Hero Workspace */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-red-500/30 p-4 sm:p-8 shadow-xl max-w-4xl mx-auto">
        {activeTab === 'land' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="font-black text-slate-900 dark:text-white text-base sm:text-lg">
                  📐 जग्गा क्षेत्रफल रूपान्तरण तथा हिसाब
                </h3>
                <p className="text-xs text-slate-500">
                  रोपनी, आना, पैसा, दाम र बिघा, कट्ठा, धुरको शुद्ध हिसाब र स्लिप प्रिन्ट।
                </p>
              </div>
              <Link 
                href="/tools/land-calculator"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:underline"
              >
                <span>फुल स्क्रिनमा खोल्नुहोस्</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <LandCalculator />
          </div>
        )}

        {activeTab === 'pdf' && (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-950/50 text-red-600 flex items-center justify-center mx-auto shadow-sm">
              <FileStack className="w-8 h-8" />
            </div>
            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                PDF र तस्विर द्रुत व्यवस्थापन
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                नागरिकता/लालपुर्जाका फोटोहरूबाट A4 PDF बनाउनुहोस्, वा लोकसेवा फारमको लागि फोटो २००KB मुनि झार्नुहोस्।
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                href="/tools/images-to-pdf"
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition"
              >
                <FileText className="w-4 h-4" />
                <span>तस्विरबाट A4 PDF बनाउनुहोस्</span>
              </Link>
              <Link 
                href="/tools/image-compressor"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition"
              >
                <ImageIcon className="w-4 h-4" />
                <span>फोटो कम्प्रेसर (&lt;२००KB)</span>
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'unicode' && (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-950/50 text-blue-600 flex items-center justify-center mx-auto shadow-sm">
              <ArrowRightLeft className="w-8 h-8" />
            </div>
            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Preeti ⇄ Nepali Unicode Converter
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                सरकारी कागजात र निवेदनका लागि प्रिती फन्टलाई युनिकोडमा र युनिकोडलाई प्रितीमा तत्काल बदल्नुहोस्।
              </p>
            </div>
            <div>
              <Link 
                href="/tools/preeti-to-unicode"
                className="inline-flex px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm items-center gap-2 shadow-md transition"
              >
                <span>युनिकोड कन्भर्टर खोल्नुहोस्</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'tax' && (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950/50 text-amber-600 flex items-center justify-center mx-auto shadow-sm">
              <Coins className="w-8 h-8" />
            </div>
            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                मालपोत रजिस्ट्रेसन तथा राजस्व क्यालकुलेटर
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                महानगरपालिका, उप-महानगरपालिका, नगरपालिका र गाउँपालिका अनुसार लिखत पास दस्तुर र महिला २५% छुट हिसाब।
              </p>
            </div>
            <div>
              <Link 
                href="/tools/malpot-calculator"
                className="inline-flex px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm items-center gap-2 shadow-md transition"
              >
                <span>मालपोत कर हिसाब गर्नुहोस्</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* 3. The 8 Micro-Tools Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              सबै डिजिटल टुल्सहरू (All Micro Tools)
            </h2>
            <p className="text-xs text-slate-500">
              आफूलाई चाहिएको टुलमा क्लिक गरेर सिधै काम सुरु गर्नुहोस्।
            </p>
          </div>
          <Link 
            href="/tools" 
            className="text-xs font-bold text-red-600 hover:underline flex items-center gap-1"
          >
            <span>सबै १५+ टुल्स</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {microTools.map((t) => (
            <div
              key={t.id}
              className={`p-5 rounded-2xl bg-white dark:bg-slate-900 border ${t.border} shadow-xs hover:shadow-md transition-all flex flex-col justify-between group`}
            >
              <div className="space-y-3">
                <div className={`w-12 h-12 rounded-xl ${t.color} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}>
                  <t.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 dark:text-white text-sm group-hover:text-red-600 transition">
                    {t.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    {t.sub}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={t.href}
                  className="w-full py-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-red-600 hover:text-white text-slate-700 dark:text-slate-300 text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  <span>{t.action}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
