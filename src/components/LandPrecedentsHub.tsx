'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Scale, 
  Gavel, 
  FileText, 
  Search, 
  Check, 
  Copy, 
  ChevronDown, 
  ChevronUp, 
  ShieldAlert, 
  Sparkles, 
  BookOpen, 
  Layers, 
  ExternalLink,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { 
  SUPREME_COURT_PRECEDENTS, 
  PRECEDENT_CATEGORIES, 
  SupremeCourtPrecedent 
} from '@/data/landPrecedentsData';

export default function LandPrecedentsHub() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Toggle card expansion
  const toggleExpand = (id: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Copy Citation Helper
  const handleCopyCitation = (precedent: SupremeCourtPrecedent, e: React.MouseEvent) => {
    e.stopPropagation();
    const citationText = `${precedent.titleNp}\n• उद्धरण: ${precedent.citation}\n• इजलास: ${precedent.bench} (${precedent.benchJudges || ''})\n• मुख्य कानुनी सिद्धान्त: ${precedent.corePrinciple}`;
    navigator.clipboard.writeText(citationText);
    setCopiedId(precedent.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Filtered Precedents
  const filteredPrecedents = useMemo(() => {
    return SUPREME_COURT_PRECEDENTS.filter(item => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchesCat) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        item.titleNp.toLowerCase().includes(q) ||
        item.decisionNo.toLowerCase().includes(q) ||
        item.nkpYear.toString().includes(q) ||
        item.corePrinciple.toLowerCase().includes(q) ||
        item.disputeSummary.toLowerCase().includes(q) ||
        item.citation.toLowerCase().includes(q) ||
        item.lawsApplied.some(law => law.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      
      {/* Top Controls: Search + Stats */}
      <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
                <Gavel className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                नेपाल कानून पत्रिका (नेकाप) फैसला संग्रह
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              सर्वोच्च अदालतका ऐतिहासिक घरजग्गा तथा नापी नजीरहरू
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
              बाटो थुनेको (सुखाधिकार), नापी नक्सा र फिल्ड फरक परेको, साँध-सीमाना, मोही हक, अंशबन्डा र बैना विवादमा अदालत, वडा र मालपोतमा पेस गर्न मिल्ने आधिकारिक नजीरहरू।
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-2xl font-black text-emerald-600">{SUPREME_COURT_PRECEDENTS.length}</span>
              <span className="block text-2xs font-bold text-slate-400 uppercase">महत्वपूर्ण नजीर</span>
            </div>
            <div className="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-2xl font-black text-blue-600">८</span>
              <span className="block text-2xs font-bold text-slate-400 uppercase">विवाद विधा</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="निर्णय नं. (उदा: १०३३३), बाटो, नक्सा, मोही, बैना, अंशियार वा ऐनको नाम खोज्नुहोस्..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white text-sm font-medium focus:outline-emerald-500 transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
            >
              हटाउनुहोस्
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {PRECEDENT_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-2">
        <span>
          भेटिएका नजीरहरू: <strong className="text-slate-900 dark:text-white font-bold">{filteredPrecedents.length}</strong>
        </span>
        <span>
          {selectedCategory !== 'all' && `विधा: ${PRECEDENT_CATEGORIES.find(c => c.id === selectedCategory)?.label}`}
        </span>
      </div>

      {/* Precedents List */}
      <div className="space-y-6">
        {filteredPrecedents.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-3">
            <Scale className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
              कुनै नजीर भेटिएन
            </h3>
            <p className="text-xs text-slate-500">
              कृपया अर्को शब्द खोज्नुहोस् वा विधा रिसेट गर्नुहोस्।
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
            >
              सबै नजीरहरू देखाउनुहोस्
            </button>
          </div>
        ) : (
          filteredPrecedents.map((item) => {
            const isExpanded = expandedCards[item.id] || false;
            const isCopied = copiedId === item.id;

            return (
              <div 
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all overflow-hidden"
              >
                {/* Header Bar */}
                <div className="p-5 sm:p-6 space-y-4">
                  
                  {/* Meta Badges */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-200 font-mono font-black text-xs">
                        {item.citation}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-2xs font-bold">
                        {item.categoryNp}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleCopyCitation(item, e)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                        isCopied 
                          ? 'bg-emerald-600 text-white shadow-xs' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'उद्धरण कपी भयो!' : 'उद्धरण कपी गर्नुहोस्'}</span>
                    </button>
                  </div>

                  {/* Title & Parties */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-snug">
                      {item.titleNp}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-slate-500 flex-wrap">
                      <span>{item.parties.appellant}</span>
                      <span>vs</span>
                      <span>{item.parties.respondent}</span>
                      <span className="text-slate-300 dark:text-slate-700">•</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {item.bench} {item.benchJudges ? `(${item.benchJudges})` : ''}
                      </span>
                    </div>
                  </div>

                  {/* Core Principle (Ratio Decidendi) Hero Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/80 space-y-2">
                    <div className="flex items-center gap-2">
                      <Scale className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
                        प्रतिपादित मुख्य कानुनी सिद्धान्त (Ratio Decidendi):
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      "{item.corePrinciple}"
                    </p>
                  </div>

                  {/* Collapsible Trigger */}
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full pt-2 flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors border-t border-slate-100 dark:border-slate-800"
                  >
                    <span>
                      {isExpanded ? 'विस्तृत विवरण बन्द गर्नुहोस्' : 'मुद्दाको पृष्ठभूमि, दफाहरू र व्यावहारिक सुझाव हेर्नुहोस्'}
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-800 space-y-5">
                    
                    {/* Dispute Summary */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        १. मुद्दाको संक्षिप्त तथ्य र पृष्ठभूमि (Dispute Facts):
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        {item.disputeSummary}
                      </p>
                    </div>

                    {/* Applied Laws */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        २. आकर्षित ऐन तथा कानुनी दफाहरू (Applicable Laws):
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.lawsApplied.map((law, lIdx) => (
                          <span 
                            key={lIdx}
                            className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300"
                          >
                            ⚖️ {law}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Practical Takeaway */}
                    <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/80 space-y-1.5 text-xs sm:text-sm text-amber-950 dark:text-amber-200">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                        <span className="font-bold">जग्गाधनी तथा कानुन व्यवसायीलाई व्यावहारिक फाइदा:</span>
                      </div>
                      <p className="leading-relaxed">
                        {item.practicalTakeaway}
                      </p>
                    </div>

                  </div>
                )}

              </div>
            );
          })
        )}
      </div>

      {/* Cross-Link Callouts */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
        <div className="flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-emerald-400" />
          <h3 className="text-lg sm:text-xl font-bold">
            घरजग्गा कानुन तथा नापी सम्बन्धी सम्बन्धित सामग्रीहरू
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
          नजीरहरूका अतिरिक्त घरजग्गा खरिदबिक्री गर्दा बैनापट्टाको कानुनी मान्यता, कित्ताकाटको नयाँ नियम, र नापी नक्सा संकेतहरू अध्ययन गर्नुहोस्:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <Link
            href="/articles/land-earnest-money-bayana-rules-fraud-prevention-commission-nepal"
            className="p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-xs font-bold transition-all flex items-center justify-between"
          >
            <span>📜 घरजग्गा बैना गर्दा ठगीबाट बच्ने उपाय</span>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
          </Link>
          <Link
            href="/tools/cadastral-map-symbols-legend"
            className="p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-xs font-bold transition-all flex items-center justify-between"
          >
            <span>🗺️ नापी नक्सा संकेत तथा लेजेन्ड गाइड</span>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
          </Link>
          <Link
            href="/articles/kitta-kat-process-rules-nepal-land-reform"
            className="p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-xs font-bold transition-all flex items-center justify-between"
          >
            <span>📐 कित्ताकाट मापदण्ड र भू-उपयोग वर्गीकरण</span>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
          </Link>
        </div>
      </div>

    </div>
  );
}
