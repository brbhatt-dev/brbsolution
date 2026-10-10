'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Calculator, 
  Search, 
  Layers, 
  Bot, 
  X, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  Scale, 
  Building2, 
  Smartphone, 
  ChevronRight,
  ArrowRightLeft,
  ImageIcon,
  Receipt,
  Split,
  Maximize2,
  Coins,
  QrCode,
  GraduationCap
} from 'lucide-react';

interface SearchItem {
  id: string;
  titleNp: string;
  titleEn: string;
  category: 'tool' | 'law' | 'article' | 'app';
  categoryLabel: string;
  badge: string;
  href: string;
  keywords: string[];
  icon: React.ElementType;
}

const SEARCH_DATABASE: SearchItem[] = [
  // 1. Digital Tools
  {
    id: 'land-calculator',
    titleNp: 'जग्गा क्यालकुलेटर (रोपनी-बिघा)',
    titleEn: 'Land Unit Area Calculator',
    category: 'tool',
    categoryLabel: 'डिजिटल उपकरण',
    badge: 'लोकप्रिय',
    href: '/tools/land-calculator',
    keywords: ['जग्गा', 'क्यालकुलेटर', 'रोपनी', 'आना', 'पैसा', 'दाम', 'बिघा', 'कट्ठा', 'धुर', 'वर्गमिटर', 'sqft', 'sqm', 'land calculator'],
    icon: Calculator
  },
  {
    id: 'preeti-unicode',
    titleNp: 'Preeti ⇄ Unicode कन्भर्टर',
    titleEn: 'Nepali Font Converter',
    category: 'tool',
    categoryLabel: 'टाइपिङ उपकरण',
    badge: '१००% शुद्ध',
    href: '/tools/preeti-to-unicode',
    keywords: ['preeti', 'unicode', 'प्रिती', 'युनिकोड', 'नेपाली टाइपिङ', 'फन्ट', 'टाइप'],
    icon: ArrowRightLeft
  },
  {
    id: 'image-compressor',
    titleNp: 'फोटो कम्प्रेसर (२०० KB)',
    titleEn: 'Photo Compressor for Loksewa',
    category: 'tool',
    categoryLabel: 'डकुमेन्ट टूल',
    badge: '२०० KB',
    href: '/tools/image-compressor',
    keywords: ['फोटो', 'कम्प्रेसर', 'image', 'compress', '200kb', 'लोकसेवा', 'फारम', 'साइज'],
    icon: ImageIcon
  },
  {
    id: 'images-to-pdf',
    titleNp: 'तस्विरबाट A4 PDF बनाउने',
    titleEn: 'Images to PDF Converter',
    category: 'tool',
    categoryLabel: 'डकुमेन्ट टूल',
    badge: 'द्रुत',
    href: '/tools/images-to-pdf',
    keywords: ['तस्विर', 'फोटो', 'pdf', 'लालपुर्जा', 'पिडिएफ', 'images to pdf'],
    icon: FileText
  },
  {
    id: 'malpot-tax',
    titleNp: 'मालपोत रजिस्ट्रेसन तथा कर',
    titleEn: 'Malpot Registration Tax & CGT',
    category: 'tool',
    categoryLabel: 'कर क्यालकुलेटर',
    badge: 'कर नियम',
    href: '/tools/malpot-calculator',
    keywords: ['मालपोत', 'रजिस्ट्रेसन', 'कर', 'tax', 'cgt', 'लाभकर', 'दस्तुर', 'राजस्व', 'महिला छुट'],
    icon: Receipt
  },
  {
    id: 'kitta-kat-checker',
    titleNp: 'कित्ताकाट मापदण्ड चेकर',
    titleEn: 'Kitta Kat Criteria Checker',
    category: 'tool',
    categoryLabel: 'कानुनी चेकर',
    badge: '१३० वर्गमिटर',
    href: '/tools/kitta-kat-checker',
    keywords: ['कित्ताकाट', 'मापदण्ड', '१३०', 'आवासीय', 'कृषि', 'बाटो', 'kitta kat'],
    icon: Split
  },
  {
    id: 'plot-visualizer',
    titleNp: 'जग्गा रेखाचित्र स्केचर (Plot Visualizer)',
    titleEn: 'Cadastral Plot Sketcher',
    category: 'tool',
    categoryLabel: 'सर्भे उपकरण',
    badge: 'हेरन सूत्र',
    href: '/tools/plot-visualizer',
    keywords: ['रेखाचित्र', 'प्लसिङ', 'हेरन', 'भुजा', 'विकर्ण', 'बाङ्गो जग्गा', 'plot visualizer'],
    icon: Maximize2
  },
  {
    id: 'number-to-words',
    titleNp: 'अक्षरेपी क्यालकुलेटर (Number to Words)',
    titleEn: 'Nepali Cheque & Word Writer',
    category: 'tool',
    categoryLabel: 'बैंकिङ टूल',
    badge: 'अक्षरेपी',
    href: '/tools/number-to-words',
    keywords: ['अक्षरेपी', 'शब्दमा', 'नम्बर', 'चेक', 'तमसुक', 'number to words'],
    icon: Coins
  },
  {
    id: 'survey-offices',
    titleNp: '७७ जिल्ला नापी कार्यालय निर्देशिका',
    titleEn: '77 District Survey Offices',
    category: 'tool',
    categoryLabel: 'सम्पर्क निर्देशिका',
    badge: 'आधिकारिक',
    href: '/tools/survey-offices',
    keywords: ['नापी कार्यालय', '७७ जिल्ला', 'फोन', 'इमेल', 'हाकिम', 'ठेगाना', 'काठमाडौँ', 'कैलाली', 'चितवन'],
    icon: Building2
  },
  {
    id: 'kitta-qr',
    titleNp: 'कित्ता QR कोड जनरेटर',
    titleEn: 'Land Plot QR Generator',
    category: 'tool',
    categoryLabel: 'डिजिटल पहिचान',
    badge: 'QR कोड',
    href: '/tools/kitta-qr',
    keywords: ['qr', 'क्युआर', 'कित्ता', 'जग्गा qr', 'gps'],
    icon: QrCode
  },
  {
    id: 'aamin-quiz',
    titleNp: 'नापी अमिन क्विज (Aamin Quiz)',
    titleEn: 'Loksewa Survey Practice Exam',
    category: 'tool',
    categoryLabel: 'अध्ययन टूल',
    badge: 'लोकसेवा',
    href: '/tools/aamin-quiz',
    keywords: ['अमिन', 'क्विज', 'लोकसेवा', 'सर्भे', 'aamin quiz', 'तयारी'],
    icon: GraduationCap
  },

  // 2. Mobile Applications & Software
  {
    id: 'land-solution-app',
    titleNp: 'Land Solution (नापी मोबाइल एप)',
    titleEn: 'Land Solution Official App',
    category: 'app',
    categoryLabel: 'सफ्टवेयर',
    badge: 'पूर्ण एप',
    href: '/land-solution',
    keywords: ['land solution', 'नापी एप', 'ल्याण्ड सोलुसन', 'मोबाइल एप', 'ios', 'android'],
    icon: Smartphone
  },
  {
    id: 'hamro-kosh',
    titleNp: 'हाम्रो कोष (Hamro Kosh)',
    titleEn: 'Savings & Cooperative Software',
    category: 'app',
    categoryLabel: 'सफ्टवेयर',
    badge: 'बचत कोष',
    href: '/software#other-apps',
    keywords: ['हाम्रो कोष', 'बचत', 'सहकारी', 'hamro kosh', 'ऋण हिसाब'],
    icon: Coins
  },
  {
    id: 'autocad-scripts',
    titleNp: 'AutoCAD AutoLISP (.LSP) टूल्स',
    titleEn: 'Survey AutoLISP CAD Scripts',
    category: 'tool',
    categoryLabel: 'इन्जिनियरिङ',
    badge: '.LSP कोड',
    href: '/tools/autocad-scripts',
    keywords: ['autocad', 'lisp', 'autolisp', 'क्याड', 'क्षेत्रफल', 'scripts'],
    icon: Layers
  },

  // 3. Laws & Notices
  {
    id: 'survey-notices',
    titleNp: 'नापी विभाग प्रत्यक्ष सूचना (Live Notices)',
    titleEn: 'Survey Department Live Circulars',
    category: 'law',
    categoryLabel: 'सूचना बोर्ड',
    badge: 'LIVE',
    href: '/notices',
    keywords: ['सूचना', 'नापी विभाग', 'परिपत्र', 'notices', 'dos.gov.np', 'ताजा'],
    icon: FileText
  },
  {
    id: 'survey-laws',
    titleNp: 'मौजूदा नापी तथा भूउपयोग कानुनहरू',
    titleEn: 'Survey & Land Use Acts Repository',
    category: 'law',
    categoryLabel: 'कानुन सङ्ग्रह',
    badge: 'ऐन नियमावली',
    href: '/laws',
    keywords: ['कानुन', 'ऐन', 'नियमावली', 'नाप जाँच ऐन २०१९', 'भूउपयोग ऐन २०७६', 'laws'],
    icon: Scale
  },

  // 4. Articles & Guides
  {
    id: 'guide-kitta-kat',
    titleNp: 'गाइड: कित्ताकाट गर्ने कानुनी प्रक्रिया र नियम',
    titleEn: 'Kitta Kat Process & Rules Guide',
    category: 'article',
    categoryLabel: 'मार्गदर्शन लेख',
    badge: 'गाइड',
    href: '/articles/kitta-kat-process-rules-nepal-land-reform',
    keywords: ['कित्ताकाट प्रक्रिया', 'जग्गा बाँडफाँड', 'नियम', 'लेख'],
    icon: FileText
  },
  {
    id: 'guide-tax',
    titleNp: 'गाइड: जग्गा पास गर्दा लाग्ने मालपोत र लाभकर',
    titleEn: 'Land Registration Tax & CGT Guide',
    category: 'article',
    categoryLabel: 'मार्गदर्शन लेख',
    badge: 'गाइड',
    href: '/articles/malpot-land-registration-fee-tax-calculator-nepal',
    keywords: ['जग्गा पास', 'खरिद बिक्री', 'रजिस्ट्रेसन', 'गाइड'],
    icon: FileText
  }
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Auto-focus search input when opened
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    } else {
      setSearchQuery('');
    }
  }, [searchOpen]);

  // Handle ESC key to close search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  // Handle open-quick-search event & Ctrl+K / Cmd+K shortcut
  useEffect(() => {
    const handleOpenSearch = () => setSearchOpen(true);
    const handleShortcut = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('open-quick-search', handleOpenSearch);
    window.addEventListener('keydown', handleShortcut);
    return () => {
      window.removeEventListener('open-quick-search', handleOpenSearch);
      window.removeEventListener('keydown', handleShortcut);
    };
  }, []);

  // Filter search results based on query
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return SEARCH_DATABASE.slice(0, 8); // Top featured items by default
    }
    const q = searchQuery.toLowerCase().trim();
    return SEARCH_DATABASE.filter((item) => {
      return (
        item.titleNp.toLowerCase().includes(q) ||
        item.titleEn.toLowerCase().includes(q) ||
        item.keywords.some((k) => k.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

  // Handle AI Assistant open trigger
  const handleOpenAi = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-land-ai'));
    }
  };

  // Handle calculator tab click
  const handleCalculatorClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      const el = document.getElementById('land-calc-section');
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Determine active tab
  const isHomeActive = pathname === '/';
  const isCalcActive = pathname === '/tools/land-calculator' || pathname.includes('calculator');
  const isToolsActive = pathname === '/tools' || pathname.startsWith('/tools/');

  return (
    <>
      {/* 📱 FLOATING MOBILE BOTTOM NAVIGATION DOCK (Visible on Mobile/Tablet < lg) */}
      <nav 
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] dark:shadow-[0_-4px_25px_rgba(0,0,0,0.4)] pb-[calc(0.4rem+env(safe-area-inset-bottom,0px))] transition-colors notranslate no-print"
        aria-label="Mobile Navigation"
        translate="no"
      >
        <div className="max-w-md mx-auto px-2 pt-1 flex items-center justify-around gap-1">
          
          {/* 1. गृहपृष्ठ (Home) */}
          <Link
            href="/"
            className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-2xl transition-all duration-200 active:scale-95 min-w-[58px] ${
              isHomeActive
                ? 'text-emerald-600 dark:text-emerald-400 font-extrabold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-medium'
            }`}
          >
            <div className={`p-1 rounded-xl transition-all ${isHomeActive ? 'bg-emerald-500/15' : ''}`}>
              <Home className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 leading-tight">गृहपृष्ठ</span>
          </Link>

          {/* 2. क्यालकुलेटर (Calc) */}
          <Link
            href={pathname === '/' ? '#land-calc-section' : '/tools/land-calculator'}
            onClick={handleCalculatorClick}
            className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-2xl transition-all duration-200 active:scale-95 min-w-[58px] ${
              isCalcActive
                ? 'text-emerald-600 dark:text-emerald-400 font-extrabold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-medium'
            }`}
          >
            <div className={`p-1 rounded-xl transition-all ${isCalcActive ? 'bg-emerald-500/15' : ''}`}>
              <Calculator className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 leading-tight">क्याल्कुलेटर</span>
          </Link>

          {/* 3. खोज्नुहोस् (Search Button - Center Action) */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 active:scale-95 min-w-[62px] text-slate-700 dark:text-slate-300 group cursor-pointer"
            aria-label="खोज्नुहोस्"
          >
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-600/30 group-hover:scale-105 transition-transform">
              <Search className="w-4.5 h-4.5" />
            </div>
            <span className="text-[10px] mt-0.5 font-bold text-slate-800 dark:text-slate-200 leading-tight">
              खोज
            </span>
          </button>

          {/* 4. उपकरणहरू (Tools) */}
          <Link
            href="/tools"
            className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-2xl transition-all duration-200 active:scale-95 min-w-[58px] relative ${
              isToolsActive
                ? 'text-emerald-600 dark:text-emerald-400 font-extrabold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-medium'
            }`}
          >
            <div className={`p-1 rounded-xl transition-all ${isToolsActive ? 'bg-emerald-500/15' : ''}`}>
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 leading-tight flex items-center gap-0.5">
              <span>टूल्स</span>
              <span className="text-[8px] font-black px-1 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                १८+
              </span>
            </span>
          </Link>

          {/* 5. AI सहयोगी (AI Assistant) */}
          <button
            type="button"
            onClick={handleOpenAi}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-2xl transition-all duration-200 active:scale-95 min-w-[58px] text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium cursor-pointer relative"
            aria-label="AI सहायक खोल्नुहोस्"
          >
            <div className="p-1 rounded-xl relative">
              <Bot className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute -top-0.5 -right-0.5" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 absolute -top-0.5 -right-0.5" />
            </div>
            <span className="text-[10px] mt-0.5 leading-tight font-bold text-emerald-600 dark:text-emerald-400">
              AI सहायक
            </span>
          </button>

        </div>
      </nav>

      {/* 🔍 INSTANT SEARCH MODAL (High-Speed Command Palette for Mobile & All Screens) */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex flex-col justify-start p-3 sm:p-6 animate-in fade-in duration-150 notranslate" translate="no">
          <div className="w-full max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[88vh]">
            
            {/* Search Header & Input */}
            <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50 flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Search className="w-5 h-5" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="टूल, कानुन, लेख वा जिल्ला खोज्नुहोस्... (उदा: रोपनी, Preeti, मालपोत)"
                className="w-full bg-transparent text-sm sm:text-base font-bold text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                aria-label="बन्द गर्नुहोस्"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Suggestion Chips */}
            <div className="px-4 py-2.5 bg-slate-100/60 dark:bg-slate-950/30 border-b border-slate-100 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 text-xs">
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 shrink-0">
                सुझाव:
              </span>
              {[
                'जग्गा हिसाब',
                'Preeti',
                'मालपोत',
                'फोटो २००KB',
                'कित्ताकाट',
                'नापी ऐन',
                '७७ जिल्ला'
              ].map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setSearchQuery(chip)}
                  className="px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 text-[11px] font-medium shrink-0 transition-colors cursor-pointer"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Search Results List */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 px-2 flex items-center justify-between">
                <span>
                  {searchQuery.trim() ? `नतिजाहरू (${filteredResults.length})` : 'प्रमुख सेवाहरू (Featured)'}
                </span>
                <span className="text-[10px] text-slate-400 font-normal">
                  सिधै क्लिक गरी खोल्नुहोस्
                </span>
              </div>

              {filteredResults.length === 0 ? (
                <div className="py-12 text-center space-y-2">
                  <p className="text-sm font-bold text-slate-600 dark:text-slate-400">
                    "{searchQuery}" सँग मिल्दोजुल्दो केही भेटिएन।
                  </p>
                  <p className="text-xs text-slate-400">
                    कृपया अन्य नेपाली वा अङ्ग्रेजी शब्द टाइप गर्नुहोस् वा मुख्य मेनु हेर्नुहोस्।
                  </p>
                </div>
              ) : (
                filteredResults.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setSearchOpen(false)}
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-slate-200/70 dark:border-slate-700/70 hover:border-emerald-500 dark:hover:border-emerald-500/80 transition-all flex items-center justify-between gap-3 group active:scale-[0.99]"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-2 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                              {item.titleNp}
                            </h4>
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 shrink-0">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                            {item.titleEn} • {item.categoryLabel}
                          </p>
                        </div>
                      </div>

                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  );
                })
              )}
            </div>

            {/* Bottom Modal Hint */}
            <div className="p-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-500 flex items-center justify-between shrink-0">
              <span className="text-[11px]">
                💡 कुनै पनि टूल वा कानुन तत्काल खोज्न यहाँ टाइप गर्नुहोस्।
              </span>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
              >
                बन्द
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
