'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  ArrowRight, 
  Sparkles, 
  FileStack, 
  ArrowRightLeft, 
  ImageIcon, 
  FileText, 
  Coins, 
  Scale, 
  Zap, 
  Flame, 
  Check, 
  Star,
  Printer
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';

export default function StyleNeoBrutalist() {
  const tools = [
    {
      title: 'जग्गा नाप क्यालकुलेटर',
      desc: 'रोपनी, आना, बिघा, कट्ठा र वर्गफिट रूपान्तरण। स्लिप प्रिन्ट सहित।',
      icon: Calculator,
      bg: 'bg-emerald-300',
      badge: '🔥 नम्बर १ टुल',
      href: '/tools/land-calculator'
    },
    {
      title: 'Preeti ⇄ Nepali Unicode',
      desc: 'सरकारी कागजातका लागि प्रितीलाई युनिकोडमा बदल्ने द्रुत औजार।',
      icon: ArrowRightLeft,
      bg: 'bg-sky-300',
      badge: '⚡ इन्स्ट्यान्ट',
      href: '/tools/preeti-to-unicode'
    },
    {
      title: 'फोटो कम्प्रेसर (<२००KB)',
      desc: 'लोकसेवा र सरकारी फारम भर्न नागरिकता फोटो तुरुन्तै सानो बनाउने।',
      icon: ImageIcon,
      bg: 'bg-rose-300',
      badge: '🎯 लोकसेवा',
      href: '/tools/image-compressor'
    },
    {
      title: 'तस्विरबाट A4 PDF',
      desc: 'कागजातका फोटोहरू छानेर सफा A4 प्रिन्ट योग्य PDF तयार पार्नुहोस्।',
      icon: FileText,
      bg: 'bg-amber-300',
      badge: '📄 A4 साइज',
      href: '/tools/images-to-pdf'
    },
    {
      title: 'मालपोत तथा रजिस्ट्रेसन कर',
      desc: 'आ.व. २०८१/८२ अनुसार रजिस्ट्रेसन शुल्क र महिला २५% छुट हिसाब।',
      icon: Coins,
      bg: 'bg-purple-300',
      badge: '💰 नयाँ दर',
      href: '/tools/malpot-calculator'
    },
    {
      title: 'कित्ताकाट मापदण्ड जाँच',
      desc: 'भू-उपयोग नियमावली २०७९ बमोजिम आवासीय र कृषि कित्ताकाट नियम।',
      icon: Scale,
      bg: 'bg-lime-300',
      badge: '⚖️ नियम २०७९',
      href: '/tools/kitta-kat-checker'
    },
  ];

  return (
    <div className="space-y-12">
      
      {/* 1. Punchy Neo-Brutalist Hero */}
      <section className="p-6 sm:p-10 rounded-3xl bg-[#FEF08A] dark:bg-yellow-500 text-black border-4 border-black shadow-[8px_8px_0px_0px_#000] space-y-6">
        
        {/* Playful Stickers */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1 rounded-full bg-black text-white text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_0px_#fff]">
            🇳🇵 NEPAL'S LAND & OFFICE SUITE
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-300 border-2 border-black text-xs font-black shadow-[3px_3px_0px_0px_#000]">
            ⚡ १००% नि:शुल्क र खुला
          </span>
          <span className="px-3 py-1 rounded-full bg-rose-300 border-2 border-black text-xs font-black shadow-[3px_3px_0px_0px_#000]">
            🔒 डाटा सुरक्षित (No Server Upload)
          </span>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-6xl font-black tracking-tight leading-none uppercase">
            जग्गा नापी, PDF र युनिकोड <br />
            <span className="bg-white px-2 py-0.5 border-3 border-black inline-block mt-2 shadow-[4px_4px_0px_0px_#000]">
              सुपर फास्ट औजारहरू!
            </span>
          </h1>

          <p className="text-sm sm:text-base font-bold text-slate-900 max-w-2xl leading-relaxed">
            कुनै झन्झटिलो विज्ञापन छैन, कुनै लगइन चाहिँदैन। सिधै आफ्नो जग्गा नाप्नुहोस्, PDF बनाउनुहोस्, र काम फत्ते गर्नुहोस्!
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/tools/land-calculator"
            className="px-6 py-3 rounded-2xl bg-black text-white font-black text-sm uppercase tracking-wider border-2 border-black hover:bg-slate-800 transition active:translate-x-1 active:translate-y-1 shadow-[4px_4px_0px_0px_#fff]"
          >
            🚀 जग्गा क्यालकुलेटर सुरु गर्नुहोस्
          </Link>
          <Link
            href="/tools/images-to-pdf"
            className="px-6 py-3 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-wider border-3 border-black hover:bg-slate-100 transition active:translate-x-1 active:translate-y-1 shadow-[4px_4px_0px_0px_#000]"
          >
            📄 PDF बनाउनुहोस्
          </Link>
        </div>

      </section>

      {/* 2. Embedded Engine with Neo-Brutalist Frame */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border-4 border-black shadow-[8px_8px_0px_0px_#000] space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-4 border-black pb-4">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded bg-emerald-300 border-2 border-black text-[11px] font-black uppercase shadow-[2px_2px_0px_0px_#000]">
              लाइभ इन्जिन
            </span>
            <h2 className="text-2xl font-black text-black dark:text-white uppercase tracking-tight">
              जग्गा क्षेत्रफल नाप तथा रूपान्तरण
            </h2>
          </div>

          <div className="border-2 border-black p-1 rounded-2xl shadow-[3px_3px_0px_0px_#000]">
            <TithiWidget />
          </div>
        </div>

        <LandCalculator />
      </section>

      {/* 3. Chunky High-Impact Tool Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-black dark:text-white uppercase tracking-tight">
            सबै ६ वटा सुपर औजारहरू
          </h2>
          <span className="text-xs font-black bg-black text-white px-3 py-1 rounded-full">
            १००% कार्यरत
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((t, idx) => (
            <Link
              key={idx}
              href={t.href}
              className={`p-6 rounded-3xl ${t.bg} text-black border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4 group`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_#000] group-hover:rotate-6 transition-transform">
                    <t.icon className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-xs font-black bg-white px-2.5 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                    {t.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-black leading-snug">
                    {t.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-800 mt-1 leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-black text-xs font-black shadow-[3px_3px_0px_0px_#000] group-hover:bg-black group-hover:text-white transition">
                  <span>टुल खोल्नुहोस्</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
