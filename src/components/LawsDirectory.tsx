'use client';

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  BookOpen, 
  Scale, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  Building2, 
  Calendar, 
  ShieldCheck, 
  Filter,
  Info
} from 'lucide-react';
import { LAW_DOCUMENTS, LAW_CATEGORIES, LawDocument } from '@/data/laws';

export default function LawsDirectory() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Filtered documents
  const filteredDocs = useMemo(() => {
    return LAW_DOCUMENTS.filter((doc) => {
      // Category filter
      if (selectedCategory !== 'all' && doc.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitleNp = doc.titleNp.toLowerCase().includes(query);
        const matchesTitleEn = doc.titleEn.toLowerCase().includes(query);
        const matchesSummary = doc.summaryNp.toLowerCase().includes(query);
        const matchesTags = doc.tags.some(t => t.toLowerCase().includes(query));
        const matchesKeyPoints = doc.keyPoints.some(kp => kp.toLowerCase().includes(query));
        const matchesYear = doc.yearBs.toLowerCase().includes(query);

        if (!matchesTitleNp && !matchesTitleEn && !matchesSummary && !matchesTags && !matchesKeyPoints && !matchesYear) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const getCategoryCount = (catId: string) => {
    if (catId === 'all') return LAW_DOCUMENTS.length;
    return LAW_DOCUMENTS.filter(d => d.category === catId).length;
  };

  return (
    <div className="space-y-8">
      {/* Search Bar & Stats */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="कानुन, ऐन, निर्देशिका, कित्ताकाट, भू-उपयोग वा वर्ष खोज्नुहोस्..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded-md"
              >
                खाली गर्नुहोस्
              </button>
            )}
          </div>

          {/* Source Attribution Badge */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/60 text-blue-900 dark:text-blue-300 text-xs font-semibold shrink-0">
            <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>स्रोत: नापी विभाग (dos.gov.np)</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 border-t border-slate-100 dark:border-slate-800/80 pt-4 scrollbar-none">
          {LAW_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>{cat.labelNp}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                    isSelected
                      ? 'bg-emerald-700/60 text-emerald-100'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {getCategoryCount(cat.id)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <Scale className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>
            कुल भेटिएका कानुनी दस्तावेजहरू: <strong className="text-slate-900 dark:text-white font-mono">{filteredDocs.length}</strong>
          </span>
        </div>
        {searchQuery && (
          <span className="text-xs text-slate-500">
            &ldquo;{searchQuery}&rdquo; का लागि परिणाम
          </span>
        )}
      </div>

      {/* Laws List Cards */}
      {filteredDocs.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-12 text-center border border-dashed border-slate-300 dark:border-slate-800 space-y-3">
          <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">
            कुनै कानुनी दस्तावेज फेला परेन
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            कृपया फरक शब्द वा किवर्ड प्रयोग गरी खोज्नुहोस् वा &ldquo;सबै कानुनहरू&rdquo; ट्याबमा क्लिक गर्नुहोस्।
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 underline hover:no-underline pt-2 inline-block"
          >
            सबै पुनः देखाउनुहोस्
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5">
          {filteredDocs.map((doc) => {
            const isExpanded = expandedId === doc.id;
            const isAct = doc.category === 'acts_regulations';

            return (
              <div
                key={doc.id}
                className={`bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-emerald-500 dark:border-emerald-500 shadow-md ring-1 ring-emerald-500/20'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs'
                }`}
              >
                {/* Header Row */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                    
                    {/* Badge */}
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                          isAct
                            ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                            : 'bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800'
                        }`}
                      >
                        {isAct ? <Scale className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
                        <span>{doc.categoryTitleNp}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-full">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <span>वि.सं. {doc.yearBs}</span>
                      </span>
                    </div>

                    {/* Authority */}
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {doc.authority}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                      {doc.titleNp}
                    </h2>
                    <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                      {doc.titleEn}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {doc.summaryNp}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {doc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 px-2.5 py-0.5 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <button
                      onClick={() => toggleExpand(doc.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors py-1"
                    >
                      <span>
                        {isExpanded ? 'मुख्य व्यवस्थाहरू लुकाउनुहोस्' : 'मुख्य व्यवस्थाहरू हेर्नुहोस् (Key Provisions)'}
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={doc.dosUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors shadow-2xs"
                        title="नापी विभागको आधिकारिक वेबसाइटमा हेर्नुहोस्"
                      >
                        <span>आधिकारिक साइटमा हेर्नुहोस्</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Expanded Key Points Section */}
                {isExpanded && (
                  <div className="bg-slate-50 dark:bg-slate-950/80 p-5 sm:p-6 border-t border-slate-200 dark:border-slate-800 space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-700 dark:text-slate-300">
                        यस दस्तावेजका मुख्य व्यवस्थाहरू तथा व्यवहारिक महत्त्व
                      </h4>
                    </div>

                    <ul className="grid grid-cols-1 gap-2.5">
                      {doc.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-[12px] text-amber-900 dark:text-amber-300 flex items-start gap-2 leading-relaxed">
                      <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>प्राविधिक जानकारी:</strong> नापी नक्सा, कित्ताकाट वा श्रेस्ता सम्बन्धी कुनै पनि मुद्दा वा निर्णयमा नापी विभाग तथा सम्बन्धित नापी कार्यालयले जारी गरेका राजपत्र सूचना तथा पछिल्ला संशोधनहरू मात्र अन्तिम प्रमाण मानिन्छ।
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
