'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Calculator, 
  Scale, 
  Building2, 
  FileText, 
  ArrowRight, 
  Sparkles, 
  X, 
  Clock, 
  Layers, 
  TrendingUp,
  Coins,
  ChevronRight,
  ExternalLink,
  CornerDownLeft
} from 'lucide-react';
import { SURVEY_OFFICES } from '@/data/surveyOffices';
import { ARTICLES_DATA } from '@/data/articles';
import { LAW_DOCUMENTS } from '@/data/laws';

interface SearchResultItem {
  id: string;
  title: string;
  category: 'tool' | 'law' | 'office' | 'article' | 'conversion';
  categoryLabel: string;
  subtitle: string;
  href: string;
  badge?: string;
  icon: any;
}

interface UniversalSmartSearchProps {
  variant?: 'hero' | 'bar' | 'compact';
  placeholder?: string;
  onSelect?: (item: SearchResultItem) => void;
}

export default function UniversalSmartSearch({ 
  variant = 'hero', 
  placeholder = 'खोज्नुहोस्: जग्गा नाप, मालपोत कर, ऐन-नियम, वा नापी कार्यालय (जस्तै: "४ आना", "कास्की", "कित्ताकाट")...' 
}: UniversalSmartSearchProps) {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'tool' | 'calc' | 'law' | 'office' | 'article'>('all');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Suggested prompt chips
  const quickPillQueries = [
    { label: '📐 ४ आना = वर्गफिट?', q: '४ आना' },
    { label: '💰 मालपोत रजिस्ट्रेसन कर', q: 'मालपोत' },
    { label: '⚖️ आवासीय कित्ताकाट मापदण्ड', q: 'कित्ताकाट' },
    { label: '🏢 काठमाडौँ नापी कार्यालय', q: 'काठमाडौँ' },
    { label: '📄 फोटो कम्प्रेसर २००KB', q: 'कम्प्रेसर' },
    { label: '⌨️ Preeti Unicode', q: 'preeti' },
  ];

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Compute live smart math if query has numbers and land units
  let liveSmartAnswer: { title: string; desc: string; ropani?: string; bigha?: string; sqft?: string } | null = null;
  const trimmed = query.trim().toLowerCase();

  // Match: e.g. "4 aana" or "४ आना" or "2 ropani"
  const aanaMatch = trimmed.match(/(\d+(?:\.\d+)?)\s*(?:aana|ana|आना)/i) || (trimmed.includes('आना') ? trimmed.match(/([०-९]+)/) : null);
  if (aanaMatch) {
    let num = parseFloat(aanaMatch[1]);
    if (isNaN(num)) {
      // Nepali digit translation
      const nepDigits = ['०','१','२','३','४','५','६','७','८','९'];
      const str = aanaMatch[1].split('').map(c => nepDigits.indexOf(c) > -1 ? nepDigits.indexOf(c) : c).join('');
      num = parseFloat(str) || 4;
    }
    const sqftVal = num * 342.25;
    const sqmVal = sqftVal / 10.7639;
    const ropaniVal = Math.floor(num / 16);
    const remAana = num % 16;
    liveSmartAnswer = {
      title: `${num} आना = ${sqftVal.toLocaleString()} वर्गफिट (${sqmVal.toFixed(2)} वर्गमिटर)`,
      desc: `पहाड प्रणाली: ${ropaniVal > 0 ? `${ropaniVal} रोपनी ` : ''}${remAana} आना | तराई प्रणाली: ${(sqftVal / 182.25).toFixed(2)} धुर`,
      ropani: `${ropaniVal}-${remAana}-0-0`,
      sqft: `${sqftVal.toLocaleString()} sq.ft`
    };
  }

  // Pre-configured searchable tools list
  const coreTools: SearchResultItem[] = [
    { id: 't1', title: 'जग्गा क्यालकुलेटर (रोपनी-आना / बिघा-कट्ठा)', category: 'tool', categoryLabel: 'क्यालकुलेटर', subtitle: 'क्षेत्रफल रूपान्तरण, वर्गफिट हिसाब र आधिकारिक स्लिप प्रिन्ट।', href: '/tools/land-calculator', badge: 'प्रमुख टुल', icon: Calculator },
    { id: 't2', title: 'Preeti ⇄ Nepali Unicode Converter', category: 'tool', categoryLabel: 'कार्यालय', subtitle: 'सरकारी कामकाज र निवेदनका लागि प्रितीलाई युनिकोडमा बदल्ने।', href: '/tools/preeti-to-unicode', badge: 'इन्स्ट्यान्ट', icon: FileText },
    { id: 't3', title: 'फोटो कम्प्रेसर (<२००KB लोकसेवा)', category: 'tool', categoryLabel: 'तस्विर', subtitle: 'नागरिकता, शैक्षिक प्रमाणपत्र र लालपुर्जा फोटोलाई २००KB मुनि झार्ने।', href: '/tools/image-compressor', badge: 'लोकसेवा', icon: Sparkles },
    { id: 't4', title: 'तस्विरबाट A4 PDF निर्माता', category: 'tool', categoryLabel: 'कागजात', subtitle: 'मोबाइलबाट खिचेका फोटोहरू मिलाएर क्रमबद्ध A4 प्रिन्टेबल PDF बनाउने।', href: '/tools/images-to-pdf', badge: 'A4 साइज', icon: FileText },
    { id: 't5', title: 'मालपोत तथा रजिस्ट्रेसन दस्तुर क्यालकुलेटर', category: 'tool', categoryLabel: 'राजस्व', subtitle: 'आ.व. २०८१/८२ अनुसार रजिस्ट्रेसन शुल्क, महिला २५% छुट र वाग्मती कर।', href: '/tools/malpot-calculator', badge: '२०८१/८२ कर', icon: Coins },
    { id: 't6', title: 'कित्ताकाट मापदण्ड जाँच (भू-उपयोग नियम)', category: 'tool', categoryLabel: 'नियम', subtitle: 'आवासीय (१३० m²) र कृषि (६७५ m²) कित्ताकाट योग्यता जाँच।', href: '/tools/kitta-kat-checker', badge: 'नियमावली २०७९', icon: Scale },
    { id: 't7', title: 'अक्षरेपी (Number to Words Cheque)', category: 'tool', categoryLabel: 'बैंकिङ', subtitle: 'चेक काट्न र रसिद लेख्न अंकलाई शुद्ध नेपाली अक्षरेपीमा बदल्ने।', href: '/tools/number-to-words', badge: 'चेक नमुना', icon: Coins },
    { id: 't8', title: 'बहु-कित्ता जोड क्यालकुलेटर (Multi-Kitta)', category: 'tool', categoryLabel: 'क्यालकुलेटर', subtitle: 'धेरै कित्ताहरूको क्षेत्रफल एकैपटक जोड्ने र कूल क्षेत्रफल निकाल्ने।', href: '/tools/multi-kitta-calculator', badge: 'अमिन विशेष', icon: Calculator },
    { id: 't9', title: 'AutoCAD सर्भेयर स्क्रिप्ट जेनेरेटर', category: 'tool', categoryLabel: 'क्याड', subtitle: 'कोअर्डिनेट्सबाट क्याड पोलिलाइन र कित्ता ड्रइङ बनाउने।', href: '/tools/autocad-scripts', badge: 'इन्जिनियरिङ', icon: Layers },
    { id: 't10', title: 'Excel / CSV to Google Earth KML', category: 'tool', categoryLabel: 'GIS', subtitle: 'सर्भे डेटा र प्लटलाई गुगल अर्थमा हेर्ने KML फाइल कन्भर्टर।', href: '/tools/excel-to-kml', badge: 'GIS टुल', icon: Layers },
  ];

  // Dynamic search matching across tools, laws, offices, articles
  let results: SearchResultItem[] = [];

  if (trimmed.length > 0) {
    // 1. Filter tools
    coreTools.forEach(t => {
      if (t.title.toLowerCase().includes(trimmed) || t.subtitle.toLowerCase().includes(trimmed) || t.categoryLabel.includes(trimmed)) {
        results.push(t);
      }
    });

    // 2. Filter survey offices
    SURVEY_OFFICES.forEach(off => {
      if (off.nameNp.toLowerCase().includes(trimmed) || off.nameEn.toLowerCase().includes(trimmed) || off.district.toLowerCase().includes(trimmed) || off.province.toLowerCase().includes(trimmed)) {
        results.push({
          id: `off-${off.id}`,
          title: `${off.nameNp} (${off.district})`,
          category: 'office',
          categoryLabel: 'नापी कार्यालय',
          subtitle: `सम्पर्क: ${off.phone} | स्थान: ${off.location}`,
          href: '/tools/survey-offices',
          badge: off.province,
          icon: Building2
        });
      }
    });

    // 3. Filter laws
    LAW_DOCUMENTS.forEach(law => {
      if (law.titleNp.toLowerCase().includes(trimmed) || law.summaryNp.toLowerCase().includes(trimmed) || law.categoryTitleNp.toLowerCase().includes(trimmed)) {
        results.push({
          id: `law-${law.id}`,
          title: law.titleNp,
          category: 'law',
          categoryLabel: 'ऐन-नियम',
          subtitle: law.summaryNp,
          href: '/laws',
          badge: law.categoryTitleNp,
          icon: Scale
        });
      }
    });

    // 4. Filter articles
    ARTICLES_DATA.forEach(art => {
      if (art.title.toLowerCase().includes(trimmed) || art.summary.toLowerCase().includes(trimmed)) {
        results.push({
          id: `art-${art.slug}`,
          title: art.title,
          category: 'article',
          categoryLabel: 'जानकारी लेख',
          subtitle: art.summary,
          href: `/articles/${art.slug}`,
          badge: `${art.readTime} अध्ययन`,
          icon: FileText
        });
      }
    });
  } else {
    // Default popular recommendations when query is empty
    results = coreTools.slice(0, 5);
  }

  // Apply active category filter
  const filteredResults = activeFilter === 'all' 
    ? results 
    : results.filter(r => {
        if (activeFilter === 'tool') return r.category === 'tool';
        if (activeFilter === 'law') return r.category === 'law';
        if (activeFilter === 'office') return r.category === 'office';
        if (activeFilter === 'article') return r.category === 'article';
        return true;
      });

  return (
    <div ref={containerRef} className="w-full relative">
      
      {/* Search Input Box */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-md opacity-30 group-hover:opacity-70 transition duration-300 pointer-events-none"></div>

        <div className="relative flex items-center bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl transition-all focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/20">
          
          <div className="pl-4 sm:pl-5 pr-2 text-emerald-600 dark:text-emerald-400">
            <Search className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}
            className="w-full py-4 sm:py-5 pr-12 text-sm sm:text-base font-bold bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />

          {query && (
            <button
              onClick={() => {
                setQuery('');
                setIsOpen(false);
              }}
              className="p-1.5 mr-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <div className="hidden md:flex items-center gap-1.5 mr-4 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-500 border border-slate-200 dark:border-slate-700">
            <span>स्मार्ट खोज</span>
            <CornerDownLeft className="w-3 h-3" />
          </div>

        </div>
      </div>

      {/* Suggested Quick Query Pills */}
      <div className="flex flex-wrap items-center gap-1.5 pt-3 px-1">
        <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1 mr-1">
          <Sparkles className="w-3 h-3 text-emerald-500" />
          <span>द्रुत प्रश्न:</span>
        </span>
        {quickPillQueries.map((pill, idx) => (
          <button
            key={idx}
            onClick={() => {
              setQuery(pill.q);
              setIsOpen(true);
            }}
            className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-300 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 transition cursor-pointer"
          >
            {pill.label}
          </button>
        ))}
      </div>

      {/* Dropdown Results Box */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-white dark:bg-slate-900 border-2 border-emerald-500/30 rounded-3xl shadow-2xl z-50 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 animate-in fade-in slide-in-from-top-2 duration-200">
          
          {/* Smart AI Direct Answer Box */}
          {liveSmartAnswer && (
            <div className="p-4 sm:p-5 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border-b border-emerald-500/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0 font-black shadow-md">
                  <Calculator className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase text-emerald-700 dark:text-emerald-400 tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    <span>तत्काल गणितीय रूपान्तरण (Instant Smart Answer)</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                    {liveSmartAnswer.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {liveSmartAnswer.desc}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Category Filter Pills in Dropdown */}
          <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950/60 flex items-center gap-1.5 overflow-x-auto text-xs font-bold scrollbar-none no-scrollbar">
            {[
              { id: 'all', label: 'सबै (All)' },
              { id: 'tool', label: '🛠️ टुल्स' },
              { id: 'law', label: '⚖️ ऐन-नियम' },
              { id: 'office', label: '🏢 नापी कार्यालय' },
              { id: 'article', label: '📖 लेखहरू' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id as any)}
                className={`px-3 py-1 rounded-xl transition cursor-pointer shrink-0 ${
                  activeFilter === cat.id
                    ? 'bg-emerald-500 text-slate-950 font-black shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
            <span className="text-[11px] text-slate-400 ml-auto font-mono shrink-0 hidden sm:inline">
              {filteredResults.length} परिणाम भेटियो
            </span>
          </div>

          {/* Results List */}
          <div className="max-h-96 overflow-y-auto p-2 space-y-1 divide-y divide-slate-100/60 dark:divide-slate-800/60">
            {filteredResults.length > 0 ? (
              filteredResults.slice(0, 10).map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="p-3 sm:p-3.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition flex items-center justify-between group border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-black transition">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-800 transition">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 max-w-lg">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition transform group-hover:translate-x-1 shrink-0 ml-2" />
                </Link>
              ))
            ) : (
              <div className="text-center py-8 space-y-2 text-slate-500">
                <p className="text-sm font-bold">"{query}" सम्बन्धी कुनै प्रत्यक्ष नतिजा भेटिएन।</p>
                <p className="text-xs">कृपया अन्य शब्दहरू (जस्तै: जग्गा, PDF, मालपोत, कित्ताकाट) प्रयोग गरी खोज्नुहोस्।</p>
              </div>
            )}
          </div>

          {/* Footer of Dropdown */}
          <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950/80 flex items-center justify-between text-[11px] text-slate-500">
            <span>💡 कुनै पनि कित्ता, जग्गा नाप वा ऐन-नियम सिधै खोज्न सक्नुहुन्छ</span>
            <Link 
              href="/tools" 
              onClick={() => setIsOpen(false)}
              className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              सबै १५+ टुल्स हेर्नुहोस् &rarr;
            </Link>
          </div>

        </div>
      )}

    </div>
  );
}
