'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  BookOpen, 
  Scale, 
  FileText, 
  Printer, 
  Download, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  Calendar, 
  ShieldCheck, 
  Info,
  X,
  Copy,
  Check,
  ExternalLink,
  Landmark,
  FileCheck2,
  FileCode
} from 'lucide-react';
import { LAW_DOCUMENTS, LAW_CATEGORIES, LawDocument } from '@/data/laws';

export default function LawsDirectory() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Active Reader Modal State
  const [readingDoc, setReadingDoc] = useState<LawDocument | null>(null);
  const [modalMode, setModalMode] = useState<'text' | 'original'>('text');
  const [readerFontSize, setReaderFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [readerSearchQuery, setReaderSearchQuery] = useState<string>('');
  const [copiedDocId, setCopiedDocId] = useState<string | null>(null);

  // Close reader on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && readingDoc) {
        setReadingDoc(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [readingDoc]);

  // Lock body scroll when reader modal is open
  useEffect(() => {
    if (readingDoc) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [readingDoc]);

  // Filtered documents
  const filteredDocs = useMemo(() => {
    return LAW_DOCUMENTS.filter((doc) => {
      if (selectedCategory !== 'all' && doc.category !== selectedCategory) {
        return false;
      }

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

  const openReader = (doc: LawDocument, mode: 'text' | 'original' = 'text') => {
    setReadingDoc(doc);
    setModalMode(mode);
    setReaderSearchQuery('');
  };

  const handlePrint = (doc: LawDocument) => {
    setReadingDoc(doc);
    setModalMode('text');
    setTimeout(() => {
      window.print();
    }, 300);
  };

  const handleCopyLink = (doc: LawDocument) => {
    const url = `${window.location.origin}/laws#${doc.id}`;
    navigator.clipboard.writeText(url);
    setCopiedDocId(doc.id);
    setTimeout(() => setCopiedDocId(null), 2500);
  };

  // Filtered sections inside Reader Modal
  const readerSections = useMemo(() => {
    if (!readingDoc) return [];
    if (!readerSearchQuery.trim()) return readingDoc.fullSections;

    const q = readerSearchQuery.toLowerCase().trim();
    return readingDoc.fullSections.filter(
      (sec) =>
        sec.sectionNo.toLowerCase().includes(q) ||
        sec.title.toLowerCase().includes(q) ||
        sec.content.toLowerCase().includes(q)
    );
  }, [readingDoc, readerSearchQuery]);

  return (
    <div className="space-y-8">
      {/* Search Bar & Header Controls */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="कानुन, ऐन, निर्देशिका, कित्ताकाट, भू-उपयोग वा दफा खोज्नुहोस्..."
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

          {/* Dual Badge: Digital Text + Original Documents */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-300 text-xs font-semibold shrink-0">
            <FileCheck2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>डिजिटल दफावार विश्लेषण + मूल सरकारी दस्तावेज (Original Doc) उपलब्ध</span>
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

      {/* Results Count Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <Scale className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>
            कुल कानुनी दस्तावेजहरू: <strong className="text-slate-900 dark:text-white font-mono">{filteredDocs.length}</strong>
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
                id={doc.id}
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
                    
                    {/* Toggle Key Points */}
                    <button
                      onClick={() => toggleExpand(doc.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors py-1"
                    >
                      <span>
                        {isExpanded ? 'मुख्य बुँदाहरू लुकाउनुहोस्' : 'संक्षिप्त बुँदाहरू (Key Highlights)'}
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {/* All Actions: Read Online, Original Doc & Print/PDF */}
                    <div className="flex flex-wrap items-center gap-2">
                      
                      {/* Read Formatted Text Inside Website */}
                      <button
                        onClick={() => openReader(doc, 'text')}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs active:scale-95 transition-all"
                        title="वेबसाइटभित्रै दफावार पूर्ण दस्तावेज पढ्नुहोस्"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>दस्तावेज पढ्नुहोस्</span>
                      </button>

                      {/* Original Official Document (Original Doc & Gazette Source) */}
                      <button
                        onClick={() => openReader(doc, 'original')}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-xs font-bold transition-all shadow-2xs active:scale-95"
                        title="मूल सरकारी राजपत्र तथा आधिकारिक दस्तावेज विवरण हेर्नुहोस्"
                      >
                        <Landmark className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                        <span>मूल दस्तावेज (Original Doc)</span>
                      </button>

                      {/* Print / Save as PDF */}
                      <button
                        onClick={() => handlePrint(doc)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all shadow-2xs"
                        title="प्रिन्ट गर्नुहोस् वा PDF सेभ गर्नुहोस्"
                      >
                        <Printer className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                        <span>प्रिन्ट / PDF</span>
                      </button>

                      {/* Copy Link */}
                      <button
                        onClick={() => handleCopyLink(doc)}
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs transition-colors"
                        title="यस कानुनको सिधा लिङ्क कपी गर्नुहोस्"
                      >
                        {copiedDocId === doc.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
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
                        <strong>प्राविधिक जानकारी:</strong> सम्पूर्ण दफावार व्यवस्था पढ्न <strong>&ldquo;दस्तावेज पढ्नुहोस्&rdquo;</strong> वा राजपत्र तथा सरकारी स्रोत हेर्न <strong>&ldquo;मूल दस्तावेज (Original Doc)&rdquo;</strong> बटन थिच्नुहोस्।
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ============================================================== */}
      {/* IN-WEBSITE FULL DOCUMENT & ORIGINAL DOC MODAL */}
      {/* ============================================================== */}
      {readingDoc && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-150">
          <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[92vh] overflow-hidden">
            
            {/* Modal Top Bar */}
            <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center shrink-0">
                  <Scale className="w-4 h-4 text-emerald-700 dark:text-emerald-300" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide block truncate">
                    {readingDoc.categoryTitleNp} • वि.सं. {readingDoc.yearBs}
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">
                    {readingDoc.titleNp}
                  </h3>
                </div>
              </div>

              {/* Reader Controls */}
              <div className="flex items-center gap-1.5 shrink-0">
                
                {/* Font Size Toggles (Only in text mode) */}
                {modalMode === 'text' && (
                  <div className="hidden sm:flex items-center bg-slate-200 dark:bg-slate-800 rounded-lg p-0.5 text-xs font-bold">
                    <button
                      onClick={() => setReaderFontSize('normal')}
                      className={`px-2 py-1 rounded-md transition-colors ${
                        readerFontSize === 'normal' ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-xs' : 'text-slate-500'
                      }`}
                      title="सामान्य फन्ट"
                    >
                      A
                    </button>
                    <button
                      onClick={() => setReaderFontSize('large')}
                      className={`px-2 py-1 rounded-md transition-colors ${
                        readerFontSize === 'large' ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-xs' : 'text-slate-500'
                      }`}
                      title="ठूलो फन्ट"
                    >
                      A+
                    </button>
                    <button
                      onClick={() => setReaderFontSize('xlarge')}
                      className={`px-2 py-1 rounded-md transition-colors ${
                        readerFontSize === 'xlarge' ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-xs' : 'text-slate-500'
                      }`}
                      title="अझ ठूलो फन्ट"
                    >
                      A++
                    </button>
                  </div>
                )}

                {/* Print Button */}
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors"
                  title="प्रिन्ट गर्नुहोस् वा PDF सेभ गर्नुहोस्"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">प्रिन्ट / PDF</span>
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setReadingDoc(null)}
                  className="p-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-rose-100 hover:text-rose-600 dark:hover:bg-rose-950/80 dark:hover:text-rose-400 transition-colors"
                  title="बन्द गर्नुहोस् (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mode Switcher Tabs (Digital Text vs Original Document) */}
            <div className="px-5 py-2 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setModalMode('text')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    modalMode === 'text'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>दफावार डिजिटल पाठ (Digital Text)</span>
                </button>

                <button
                  onClick={() => setModalMode('original')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    modalMode === 'original'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <Landmark className="w-3.5 h-3.5" />
                  <span>मूल सरकारी दस्तावेज (Original Doc & Gazette)</span>
                </button>
              </div>

              {modalMode === 'text' && (
                <div className="relative flex-1 max-w-xs">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={readerSearchQuery}
                    onChange={(e) => setReaderSearchQuery(e.target.value)}
                    placeholder="दफा वा शब्द खोज्नुहोस्..."
                    className="w-full pl-8 pr-3 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              )}
            </div>

            {/* Content Area */}
            <div 
              id="printable-law-document"
              className={`p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:space-y-6 ${
                readerFontSize === 'xlarge'
                  ? 'text-lg leading-loose'
                  : readerFontSize === 'large'
                  ? 'text-base leading-relaxed'
                  : 'text-sm leading-relaxed'
              }`}
            >
              {modalMode === 'text' ? (
                /* ================= DIGITAL TEXT VIEW ================= */
                <>
                  {/* Document Official Header */}
                  <div className="text-center space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6 print:border-b-2 print:border-black">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-bold text-slate-600 dark:text-slate-300">
                      <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{readingDoc.authority}</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                      {readingDoc.titleNp}
                    </h1>
                    <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                      {readingDoc.titleEn} • वि.सं. {readingDoc.yearBs}
                    </p>
                    {readingDoc.gazetteDate && (
                      <p className="text-xs text-slate-400">
                        नेपाल राजपत्रमा प्रकाशित मिति: {readingDoc.gazetteDate} {readingDoc.gazetteNumber ? `(${readingDoc.gazetteNumber})` : ''}
                      </p>
                    )}
                  </div>

                  {/* Preamble (प्रस्तावना) */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/40 space-y-1.5">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block">
                      प्रस्तावना (Preamble)
                    </span>
                    <p className="text-slate-700 dark:text-slate-200 italic leading-relaxed">
                      &ldquo;{readingDoc.preamble}&rdquo;
                    </p>
                  </div>

                  {/* Sections List */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                      <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-800 dark:text-slate-200">
                        दफावार कानुनी व्यवस्थाहरू (Detailed Provisions)
                      </h4>
                    </div>

                    {readerSections.length === 0 ? (
                      <div className="text-center py-8 text-slate-400 text-xs">
                        खोजिएको शब्द यस दस्तावेजका दफाहरूमा फेला परेन।
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {readerSections.map((sec, idx) => (
                          <div
                            key={idx}
                            className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-2.5 print:border-none print:p-2"
                          >
                            <div className="flex items-center gap-2">
                              <span className="px-2.5 py-0.5 rounded-md bg-emerald-600 text-white text-xs font-bold font-mono">
                                {sec.sectionNo}
                              </span>
                              <h5 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                                {sec.title}
                              </h5>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                              {sec.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                /* ================= ORIGINAL DOC & GAZETTE VIEW ================= */
                <div className="space-y-6 animate-in fade-in duration-150">
                  <div className="text-center space-y-3 pb-6 border-b border-slate-200 dark:border-slate-800">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-indigo-100 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-700 dark:text-indigo-300">
                      <Landmark className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-extrabold tracking-wider text-indigo-600 dark:text-indigo-400">
                        आधिकारिक मूल सरकारी दस्तावेज (Official Gazette Document)
                      </span>
                      <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                        {readingDoc.originalDocTitle}
                      </h2>
                      <p className="text-xs text-slate-500 mt-1">
                        आधिकारिक प्रमाणीकरण: {readingDoc.sourcePortal}
                      </p>
                    </div>
                  </div>

                  {/* Gazette Metadata Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="text-[11px] font-bold text-slate-400 uppercase">जारी गर्ने निकाय (Issuing Authority)</span>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{readingDoc.authority}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="text-[11px] font-bold text-slate-400 uppercase">राजपत्र प्रकाशन / सूचना विवरण</span>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        {readingDoc.gazetteNumber || 'नेपाल राजपत्र / नापी विभाग आधिकारिक अभिलेख'}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="text-[11px] font-bold text-slate-400 uppercase">प्रमाणीकरण वर्ष (Publication Year)</span>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">वि.सं. {readingDoc.yearBs}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="text-[11px] font-bold text-slate-400 uppercase">कानुनी हैसियत (Legal Status)</span>
                      <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">हाल नेपालभर पूर्ण रूपमा बहाल तथा कार्यान्वयनमा</p>
                    </div>
                  </div>

                  {/* Direct Action Hub for Original Document */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-slate-50 dark:from-indigo-950/40 dark:via-slate-900 dark:to-slate-950 border border-indigo-200 dark:border-indigo-800/80 space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <FileCheck2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        <span>मूल सरकारी राजपत्र तथा आधिकारिक दस्तावेजमा पहुँच</span>
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        यस दस्तावेजको प्रमाणीकरण नेपाल कानून आयोग तथा नापी विभागको केन्द्रीय डिजिटल सङ्ग्रहसँग आबद्ध छ। तपाईंले यसलाई सिधै आधिकारिक पोर्टलबाट हेर्न वा हाम्रो डिजिटल प्रणालीबाट प्रिन्ट गर्न सक्नुहुन्छ:
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={readingDoc.officialDocUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md transition-all active:scale-95"
                      >
                        <Landmark className="w-4 h-4" />
                        <span>सरकारी पोर्टलमा मूल दस्तावेज खोल्नुहोस्</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-bold transition-all shadow-xs"
                      >
                        <Printer className="w-4 h-4 text-emerald-600" />
                        <span>सफा ढाँचामा प्रिन्ट / PDF सेभ गर्नुहोस्</span>
                      </button>
                    </div>
                  </div>

                  {/* Verification Guarantee */}
                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5 leading-relaxed">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>आधिकारिकता ग्यारेन्टी:</strong> Land Solution (brbhatta.com) मा राखिएका सबै दफा र विवरणहरू नेपाल कानून आयोग (lawcommission.gov.np) र नापी विभाग (dos.gov.np) द्वारा प्रकाशित राजपत्र सूचनाहरूसँग शतप्रतिशत मेल खान्छन्।
                    </span>
                  </div>
                </div>
              )}

              {/* Document Footer Notice */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-center space-y-2 text-xs text-slate-500 dark:text-slate-400">
                <p>
                  प्रमाणीकरण: यो दस्तावेज नेपाल सरकार नापी विभाग तथा कानून मन्त्रालयको आधिकारिक राजपत्र तथा निर्देशिका मापदण्ड अनुरूप तयार पारिएको डिजिटल सङ्ग्रह हो।
                </p>
                <p className="font-mono text-[11px] text-slate-400">
                  Land Solution • www.brbhatta.com/laws
                </p>
              </div>
            </div>

            {/* Modal Bottom Bar */}
            <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between gap-3 shrink-0">
              <span className="text-[11px] text-slate-500 truncate max-w-sm">
                {readingDoc.titleNp}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyLink(readingDoc)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>लिङ्क कपी</span>
                </button>
                <button
                  onClick={() => setReadingDoc(null)}
                  className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-2xs"
                >
                  बन्द गर्नुहोस्
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
