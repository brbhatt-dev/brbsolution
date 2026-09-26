'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  Receipt, 
  Split, 
  Layers, 
  QrCode, 
  Building2, 
  GraduationCap, 
  FileCode, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface ToolItem {
  id: string;
  titleNp: string;
  titleEn: string;
  category: string;
  description: string;
  badge?: string;
  icon: React.ElementType;
  colorClass: {
    bg: string;
    border: string;
    text: string;
    badgeBg: string;
    hoverBorder: string;
  };
  href: string;
  features: string[];
}

const FEATURED_TOOLS: ToolItem[] = [
  {
    id: 'malpot-calculator',
    titleNp: 'मालपोत तथा लाभकर क्यालकुलेटर',
    titleEn: 'Malpot & CGT Tax 2081/82',
    category: 'कर तथा राजस्व',
    badge: 'आर्थिक ऐन २०८१/८२',
    description: 'रजिस्ट्रेसन दस्तुर, वाग्मती सभ्यता कर (०.५%), महिला २५%-५०% छुट, एकल महिला ३५% छुट, र पुँजीगत लाभकर (CGT)।',
    icon: Receipt,
    colorClass: {
      bg: 'bg-amber-500/10 dark:bg-amber-500/15',
      border: 'border-amber-200 dark:border-amber-900/40',
      text: 'text-amber-600 dark:text-amber-400',
      badgeBg: 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800',
      hoverBorder: 'group-hover:border-amber-500/60 dark:group-hover:border-amber-500/50',
    },
    href: '/tools/malpot-calculator',
    features: ['महानगर/नगरपालिका दर', 'वाग्मती कर हिसाब', 'महिला/एकल महिला छुट', 'A4 ट्याक्स स्लिप प्रिन्ट'],
  },
  {
    id: 'kitta-kat-checker',
    titleNp: 'कित्ताकाट योग्यता परीक्षक',
    titleEn: 'Kitta-Kat Eligibility Checker',
    category: 'कानुनी मापदण्ड',
    badge: 'भू-उपयोग नियमावली २०८१',
    description: 'आवासीय क्षेत्रमा न्यूनतम १३० वर्गमिटर (४ आना) र कम्तीमा ८ मिटर बाटो मापदण्ड अनुसार कित्ताकाट सम्भव छ कि छैन जाँच्नुहोस्।',
    icon: Split,
    colorClass: {
      bg: 'bg-indigo-500/10 dark:bg-indigo-500/15',
      border: 'border-indigo-200 dark:border-indigo-900/40',
      text: 'text-indigo-600 dark:text-indigo-400',
      badgeBg: 'bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
      hoverBorder: 'group-hover:border-indigo-500/60 dark:group-hover:border-indigo-500/50',
    },
    href: '/tools/kitta-kat-checker',
    features: ['१३० वर्गमिटर नियम', '८ मिटर बाटो चौडाइ', 'कृषि तथा गैर-कृषि', 'नापी कानुनी सल्लाह'],
  },
  {
    id: 'multi-kitta-calculator',
    titleNp: 'बहु-कित्ता क्षेत्रफल योग क्यालकुलेटर',
    titleEn: 'Multi-Kitta Area Sum',
    category: 'क्षेत्रफल गणना',
    badge: 'फिल्ड अमिन विशेष',
    description: 'एकभन्दा बढी कित्ताहरूको क्षेत्रफल पहाडी (रोपनी-आना-पैसा-दाम) वा तराई (बिघा-कट्ठा-धुर) दुवैमा एकमुष्ट जोड्ने क्यालकुलेटर।',
    icon: Layers,
    colorClass: {
      bg: 'bg-teal-500/10 dark:bg-teal-500/15',
      border: 'border-teal-200 dark:border-teal-900/40',
      text: 'text-teal-600 dark:text-teal-400',
      badgeBg: 'bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-800',
      hoverBorder: 'group-hover:border-teal-500/60 dark:group-hover:border-teal-500/50',
    },
    href: '/tools/multi-kitta-calculator',
    features: ['अनगिन्ती कित्ता जोड्न मिल्ने', 'पहाडी तथा तराई प्रणाली', 'वर्गफिट र वर्गमिटर', 'स्लिप प्रिन्ट तथा कपी'],
  },
  {
    id: 'kitta-qr',
    titleNp: 'कित्ता स्मार्ट QR कोड जेनेरेटर',
    titleEn: 'Smart Kitta QR Code',
    category: 'रियल स्टेट तथा नापी',
    badge: 'स्मार्ट प्रविधि',
    description: 'जग्गाधनी, कित्ता नम्बर, क्षेत्रफल र Google Map लोकेसनसहितको व्यावसायिक QR कोड निर्माण गरी साइनबोर्ड वा पर्चामा छाप्नुहोस्।',
    icon: QrCode,
    colorClass: {
      bg: 'bg-rose-500/10 dark:bg-rose-500/15',
      border: 'border-rose-200 dark:border-rose-900/40',
      text: 'text-rose-600 dark:text-rose-400',
      badgeBg: 'bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800',
      hoverBorder: 'group-hover:border-rose-500/60 dark:group-hover:border-rose-500/50',
    },
    href: '/tools/kitta-qr',
    features: ['हाई-रिजोल्युसन PNG डाउनलोड', 'GPS नक्सा कोर्डिनेट', 'जग्गा बिक्री साइनबोर्ड', 'मोबाइलबाट तत्काल स्क्यान'],
  },
  {
    id: 'survey-offices',
    titleNp: '७७ जिल्ला नापी तथा मालपोत निर्देशिका',
    titleEn: '77 District Survey Directory',
    category: 'कार्यालय निर्देशिका',
    badge: '७७ वटै जिल्ला',
    description: 'नेपालभरका सबै नापी कार्यालय र मालपोत कार्यालयहरूको आधिकारिक सम्पर्क नम्बर, इमेल, प्रमुखको विवरण र स्थान नक्सा।',
    icon: Building2,
    colorClass: {
      bg: 'bg-cyan-500/10 dark:bg-cyan-500/15',
      border: 'border-cyan-200 dark:border-cyan-900/40',
      text: 'text-cyan-600 dark:text-cyan-400',
      badgeBg: 'bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
      hoverBorder: 'group-hover:border-cyan-500/60 dark:group-hover:border-cyan-500/50',
    },
    href: '/tools/survey-offices',
    features: ['प्रदेश अनुसार फिल्टर', 'नापी र मालपोत फोन', 'कार्यालय कोड तथा इमेल', 'Google Maps डिरेक्सन'],
  },
  {
    id: 'aamin-quiz',
    titleNp: 'लोकसेवा नापी अमिन अनलाइन क्विज',
    titleEn: 'Aamin Loksewa Practice Quiz',
    category: 'परीक्षा तयारी',
    badge: '२० महत्वपूर्ण प्रश्न',
    description: 'लोक सेवा आयोग नापी अमिन तथा सर्भेक्षक परीक्षाका लागि समय सीमासहितको २० प्रश्नहरूको नमुना अभ्यास र तत्काल नतिजा।',
    icon: GraduationCap,
    colorClass: {
      bg: 'bg-violet-500/10 dark:bg-violet-500/15',
      border: 'border-violet-200 dark:border-violet-900/40',
      text: 'text-violet-600 dark:text-violet-400',
      badgeBg: 'bg-violet-100 dark:bg-violet-950/80 text-violet-800 dark:text-violet-300 border-violet-200 dark:border-violet-800',
      hoverBorder: 'group-hover:border-violet-500/60 dark:group-hover:border-violet-500/50',
    },
    href: '/tools/aamin-quiz',
    features: ['१५ मिनेट टाइमर', 'नेगेटिभ मार्किङ हिसाब', 'विस्तृत उत्तर व्याख्या', 'असीमित निःशुल्क प्रयास'],
  },
  {
    id: 'aamin-syllabus',
    titleNp: 'नापी अमिन पाठ्यक्रम तथा पुराना प्रश्न',
    titleEn: 'Syllabus & Past Papers',
    category: 'अध्ययन सामग्री',
    badge: 'लोक सेवा आयोग',
    description: 'संघीय तथा प्रदेश लोक सेवा आयोगको आधिकारिक पाठ्यक्रम, परीक्षा योजना, अंक विभाजन, र विगतका प्रश्नपत्रहरूको संकलन।',
    icon: ShieldCheck,
    colorClass: {
      bg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
      border: 'border-emerald-200 dark:border-emerald-900/40',
      text: 'text-emerald-600 dark:text-emerald-400',
      badgeBg: 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
      hoverBorder: 'group-hover:border-emerald-500/60 dark:group-hover:border-emerald-500/50',
    },
    href: '/tools/aamin-syllabus',
    features: ['अंक विभाजन तालिका', 'वस्तुगत र विषयगत ढाँचा', 'विगतका प्रश्नोत्तर', 'अध्ययन रणनीति गाइड'],
  },
  {
    id: 'autocad-scripts',
    titleNp: 'AutoCAD नापी LSP स्क्रिप्ट्स हब',
    titleEn: 'AutoCAD Surveyor LISP Hub',
    category: 'क्याड अटोमेसन',
    badge: 'निःशुल्क .lsp कोड',
    description: 'AutoCAD मा जग्गाको रोपनी-आना र बिघा-कट्ठा क्षेत्रफल स्वतः निकाल्ने, कित्ता नम्बर लेख्ने र कोर्डिनेट निकाल्ने LSP कोड।',
    icon: FileCode,
    colorClass: {
      bg: 'bg-blue-500/10 dark:bg-blue-500/15',
      border: 'border-blue-200 dark:border-blue-900/40',
      text: 'text-blue-600 dark:text-blue-400',
      badgeBg: 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      hoverBorder: 'group-hover:border-blue-500/60 dark:group-hover:border-blue-500/50',
    },
    href: '/tools/autocad-scripts',
    features: ['रोपनी र बिघा LISP', 'कोर्डिनेट एक्सपोर्ट (.csv)', 'लोड गर्ने सजिलो गाइड', 'एकमुष्ट .zip डाउनलोड'],
  },
];

export default function FeaturedToolsSection() {
  return (
    <section className="py-14 sm:py-20 bg-white dark:bg-slate-900/70 border-y border-slate-200/80 dark:border-slate-800 relative overflow-hidden notranslate" translate="no">
      {/* Background Subtle Highlights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
            <span>निःशुल्क डिजिटल नापी तथा जग्गा औजारहरू (Free Land Tech Tools)</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            नेपालका लागि विशेष डिजिटल उपकरणहरू
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            जग्गा नापजाँच, कित्ताकाट मापदण्ड, आर्थिक ऐन २०८१/८२ अनुसार मालपोत कर, ७७ जिल्ला नापी निर्देशिका, अमिन परीक्षा तयारी र AutoCAD LSP स्क्रिप्ट्सको आधिकारिक डिजिटल केन्द्र।
          </p>
        </div>

        {/* 8-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FEATURED_TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.id}
                href={tool.href}
                className={`group flex flex-col justify-between p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 ${tool.colorClass.hoverBorder} shadow-2xs hover:shadow-md transition-all duration-200 hover:-translate-y-1 relative`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-start justify-between gap-2 mb-3.5">
                    <div className={`w-11 h-11 rounded-xl ${tool.colorClass.bg} border ${tool.colorClass.border} flex items-center justify-center shrink-0 ${tool.colorClass.text} group-hover:scale-105 transition-transform shadow-2xs`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {tool.badge && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${tool.colorClass.badgeBg} shrink-0`}>
                        {tool.badge}
                      </span>
                    )}
                  </div>

                  {/* Category & Title */}
                  <div className="space-y-1 mb-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {tool.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {tool.titleNp}
                    </h3>
                    <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      {tool.titleEn}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {tool.description}
                  </p>
                </div>

                {/* Features Pill List & Action Link */}
                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700/60 space-y-3">
                  <div className="space-y-1.5">
                    {tool.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-600 transition-colors">
                    <span>प्रयोग गर्नुहोस् (Open Tool)</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Hub Callout Banner */}
        <div className="mt-10 sm:mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold">
              सबै डिजिटल नापी तथा जग्गा उपकरणहरू एकै स्थानमा
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
              फिल्डमा काम गर्ने नापी अमिन, इन्जिनियर, कानुन व्यवसायी, घरजग्गा व्यवसायी तथा सर्वसाधारणका लागि उपयोगी निःशुल्क टूल्स हब।
            </p>
          </div>

          <Link
            href="/tools"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 active:scale-95 text-xs sm:text-sm font-bold shadow-xs transition-all shrink-0 cursor-pointer"
          >
            <span>सम्पूर्ण टूल्स हब हेर्नुहोस्</span>
            <ChevronRight className="w-4 h-4 text-emerald-700" />
          </Link>
        </div>

      </div>
    </section>
  );
}
