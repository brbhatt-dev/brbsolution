'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  Receipt, 
  Split, 
  Layers, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  ArrowRightLeft,
  ImageIcon,
  FileText,
  CheckCircle2
} from 'lucide-react';

interface ToolItem {
  id: string;
  titleNp: string;
  titleEn: string;
  category: string;
  badge: string;
  description: string;
  icon: React.ElementType;
  href: string;
  features: string[];
}

const TOP_TOOLS: ToolItem[] = [
  {
    id: 'land-calculator',
    titleNp: 'जग्गा नापजाँच तथा रूपान्तरण',
    titleEn: 'Land Measurement & Slip Print',
    category: 'नापी गणित',
    badge: 'सर्वाधिक प्रयोग हुने',
    description: 'रोपनी-आना र बिघा-कट्ठा रूपान्तरण, वर्गफिट/वर्गमिटर हिसाब, कुल मूल्य र आधिकारिक हिसाब स्लिप प्रिन्ट।',
    icon: Calculator,
    href: '/tools/land-calculator',
    features: ['रोपनी ⇄ बिघा शुद्ध रूपान्तरण', 'आधिकारिक A4 स्लिप प्रिन्ट']
  },
  {
    id: 'preeti-to-unicode',
    titleNp: 'Preeti ⇄ Nepali Unicode',
    titleEn: 'Dual Font Converter',
    category: 'नेपाली टाइपिङ',
    badge: 'दैनिक कार्यालयीय टूल',
    description: 'प्रिती फन्टलाई युनिकोडमा र युनिकोडलाई प्रितीमा तत्काल रूपान्तरण, १-क्लिक कपी तथा टेक्स्ट डाउनलोड।',
    icon: ArrowRightLeft,
    href: '/tools/preeti-to-unicode',
    features: ['Preeti ➔ Unicode र विपरित', '१-क्लिक कपी र वर्ड काउन्ट']
  },
  {
    id: 'image-compressor',
    titleNp: 'नागरिकता तथा फोटो कम्प्रेसर',
    titleEn: 'Compress under 200KB',
    category: 'सरकारी फारम',
    badge: 'लोकसेवा / मालपोत',
    description: 'मोबाइलबाट खिचेको ५–१० MB को ठूलो फोटोलाई गुणस्तर नघटाई १००-२०० KB भन्दा सानो बनाउनुहोस्।',
    icon: ImageIcon,
    href: '/tools/image-compressor',
    features: ['१०० KB र २०० KB प्रिसेट', '१००% निजी (नो सर्भर अपलोड)']
  },
  {
    id: 'malpot-calculator',
    titleNp: 'मालपोत तथा लाभकर क्यालकुलेटर',
    titleEn: 'Malpot Registration & CGT Tax',
    category: 'कर तथा राजस्व',
    badge: 'आर्थिक ऐन २०८१/८२',
    description: 'रजिस्ट्रेसन दस्तुर, वाग्मती सभ्यता कर (०.५%), महिला छुट (२५%-५०%) र पुँजीगत लाभकर (CGT) को आधिकारिक हिसाब।',
    icon: Receipt,
    href: '/tools/malpot-calculator',
    features: ['महानगर/नगरपालिका दर', 'महिला छुट तथा राजस्व स्लिप']
  },
  {
    id: 'images-to-pdf',
    titleNp: 'तस्विरहरूबाट A4 PDF जेनेरेटर',
    titleEn: 'Photos to A4 PDF Converter',
    category: 'डकुमेन्ट स्टुडियो',
    badge: 'प्रिन्टेबल PDF',
    description: 'लालपुर्जा, नक्सा वा नागरिकताका फोटोहरू मिलाएर क्रमबद्ध आधिकारिक A4 PDF फाइल निर्माण गर्नुहोस्।',
    icon: FileText,
    href: '/tools/images-to-pdf',
    features: ['धेरै पानाहरूको क्रम मिलाउन मिल्ने', 'A4 ठाडो वा तेर्सो प्रिन्ट']
  },
  {
    id: 'kitta-kat-checker',
    titleNp: 'कित्ताकाट योग्यता परीक्षक',
    titleEn: 'Kitta-Kat Eligibility Checker',
    category: 'कानुनी मापदण्ड',
    badge: 'भू-उपयोग नियमावली २०८१',
    description: 'आवासीय क्षेत्रमा १३० वर्गमिटर (४ आना) र ८ मिटर बाटोको मापदण्ड अनुसार कित्ताकाट सम्भव छ कि छैन जाँच्नुहोस्।',
    icon: Split,
    href: '/tools/kitta-kat-checker',
    features: ['१३० वर्गमिटर नियम परीक्षण', 'नापी कानुनी सल्लाह']
  }
];

export default function FeaturedToolsSection() {
  return (
    <section id="featured-tools" className="py-12 sm:py-16 bg-white dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800 transition-colors notranslate" translate="no">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>प्रमुख डिजिटल उपकरणहरू (Featured Tools)</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            नेपालका लागि अत्यावश्यक डिजिटल उपकरणहरू
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            जग्गा नापजाँच, सरकारी फारम, फोटो रिसाइजर र PDF सम्पादनलाई छिटो र भरपर्दो बनाउने निःशुल्क टूल्सहरू।
          </p>
        </div>

        {/* 6-Card Clean & Uniform Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOP_TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.id}
                href={tool.href}
                className="group flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-slate-50/70 hover:bg-white dark:bg-slate-800/40 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500/60 dark:hover:border-emerald-500/60 shadow-2xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="space-y-3.5">
                  {/* Top Bar with Icon & Clean Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {tool.badge}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      {tool.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {tool.titleNp}
                    </h3>
                    <span className="text-[11px] font-medium text-slate-400 block mt-0.5">
                      {tool.titleEn}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {tool.description}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-700/60 space-y-2.5">
                  <div className="space-y-1">
                    {tool.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-600 transition-colors">
                    <span>टूल प्रयोग गर्नुहोस्</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Clean Hub Callout Banner */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-3xl bg-slate-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left border border-slate-800">
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-bold">
              थप १७+ निःशुल्क डिजिटल तथा नापी उपकरणहरू उपलब्ध छन्
            </h4>
            <p className="text-xs text-slate-300 max-w-xl">
              PDF Merge/Split, सर्वे KML जेनेरेटर, ७७ जिल्ला नापी निर्देशिका, बैना कागज टेम्प्लेट, र AutoCAD LSP स्क्रिप्टहरू।
            </p>
          </div>

          <Link
            href="/tools"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs sm:text-sm font-bold shadow-xs transition-all shrink-0 cursor-pointer"
          >
            <span>सम्पूर्ण टूल्स हब हेर्नुहोस्</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
