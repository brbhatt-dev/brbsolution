'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Flame, 
  Tag, 
  Search, 
  Newspaper, 
  Scale, 
  Eye, 
  TrendingUp, 
  ChevronRight,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { ARTICLES_DATA, ArticleDetail } from '@/data/articles';
import { sortArticlesDescending } from '@/lib/articlesSort';

// Category Definitions with localized labels and icons
const CATEGORIES = [
  { id: 'all', labelNp: 'सबै (All 25+)', labelEn: 'All' },
  { id: 'Legal & Cadastre', labelNp: '📜 कित्ताकाट तथा कानुन', labelEn: 'Land Laws' },
  { id: 'Financial Management', labelNp: '💰 मालपोत तथा कर छुट', labelEn: 'Taxes & Malpot' },
  { id: 'Land Measurement', labelNp: '📐 जग्गा नापजाँच', labelEn: 'Measurement' },
  { id: 'Property Guide', labelNp: '🏠 सम्पत्ति तथा नक्सा', labelEn: 'Property & House' },
  { id: 'Technical Automation', labelNp: '💻 क्याड तथा प्रविधि', labelEn: 'CAD & Tech' },
] as const;

// Trending quick topics for the top ribbon
const TRENDING_TOPICS = [
  { label: '🤝 जग्गा बैना गर्दा ध्यान दिनुपर्ने ५ कुरा', slug: 'land-earnest-money-bayana-rules-fraud-prevention-commission-nepal' },
  { label: '💍 २०८१-२०८४ विवाह र गृहप्रवेश शुभ साइत', slug: 'nepali-patro-2081-2082-festivals-holidays-bibaha-saait-panchanga' },
  { label: '🗺️ मेरोकित्ता अनलाइन नक्सा र फिल्डबुक', slug: 'online-lalpurja-naksa-trace-print-merokitta-dlis-guide' },
  { label: '🏦 नयाँ बैंक धितो मूल्याङ्कन नियम', slug: 'bank-land-loan-valuation-rules-process-nepal' },
  { label: '✈️ विदेशबाट जग्गा किन्ने वारेसनामा', slug: 'foreign-country-land-buying-power-of-attorney-nepal-embassy' },
  { label: '⚡ खोला तथा हाइटेन्सन सेटब्याक मापदण्ड', slug: 'river-high-tension-wire-forest-boundary-land-setback-rules-nepal' },
  { label: '🔥 नयाँ कित्ताकाट नियम २०२६', slug: 'kitta-kat-process-rules-nepal-land-reform' },
  { label: '💰 महिला ३५% जग्गा कर छुट', slug: 'women-land-registration-discount-nepal-tax-rebate' },
  { label: '⚖️ अंशबन्डा र बकसपत्र फरक', slug: 'amsa-banda-land-partition-process-nepal-law' },
  { label: '🏠 घर निर्माण सडक सेटब्याक', slug: 'house-boundary-setback-neighbor-distance-building-rules-nepal' },
  { label: '📝 अमिन लोकसेवा २५ प्रश्न', slug: 'aamin-surveyor-exam-important-questions-answers-nepal' },
  { label: '📐 रोपनी-बिघा रूपान्तरण सूत्र', slug: 'nepal-land-measurement-units-ropani-bigha-converter' },
];

export default function MagazineArticlesSection() {
  const [articles, setArticles] = useState<ArticleDetail[]>(() => sortArticlesDescending(ARTICLES_DATA));
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Fetch dynamic posts from Cloudflare KV if any exist, merge at top
  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.posts) && data.posts.length > 0) {
          const dynamicSlugs = new Set(data.posts.map((p: any) => p.slug));
          const filteredInitial = ARTICLES_DATA.filter((a) => !dynamicSlugs.has(a.slug));
          setArticles(sortArticlesDescending([...data.posts, ...filteredInitial]));
        }
      })
      .catch(() => {});
  }, []);

  // Filtered articles based on category and search query
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'all' || article.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.tag.toLowerCase().includes(q) ||
        article.categoryNepali.toLowerCase().includes(q)
      );
    });
  }, [articles, selectedCategory, searchQuery]);

  // Lead spotlight article: if in 'all' and no search, pick the most viral guide
  const leadArticle = useMemo(() => {
    if (filteredArticles.length === 0) return null;
    // Newly added article always appears first in the top spotlight lead
    return filteredArticles[0];
  }, [filteredArticles]);

  // Secondary grid articles (excluding lead if shown as spotlight)
  const secondaryArticles = useMemo(() => {
    if (!leadArticle) return [];
    return filteredArticles.filter((a) => a.slug !== leadArticle.slug).slice(0, 6);
  }, [filteredArticles, leadArticle]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: articles.length };
    articles.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return counts;
  }, [articles]);

  return (
    <section id="magazine-guides" className="scroll-mt-24 space-y-5">
      
      {/* 1. TOP HEADER & INTRO */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/90 dark:border-slate-800 pb-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>आधिकारिक ब्लग तथा ज्ञान केन्द्र • KNOWLEDGE MAGAZINE</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            जग्गा, कानुन तथा नापजाँचका ताजा र चर्चित गाइडहरू
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            नेपाल सरकारको पछिल्लो कित्ताकाट नियम, मालपोत कर छुट, नापजाँच र घर निर्माण मापदण्ड सम्बन्धी २२+ आधिकारिक निर्देशिकाहरू।
          </p>
        </div>

        {/* View All Blog Link */}
        <div className="shrink-0">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95 group"
          >
            <Newspaper className="w-4 h-4" />
            <span>सबै २२+ लेखहरू (Blog Hub)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 2. TRENDING TOPICS MARQUEE RIBBON */}
      <div className="p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-teal-500/10 border border-amber-500/20 dark:border-amber-400/20 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs">
        <div className="flex items-center gap-1.5 font-black text-amber-700 dark:text-amber-400 shrink-0">
          <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
          <span>अहिले धेरै पढिएका (Trending):</span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {TRENDING_TOPICS.map((topic, idx) => (
            <Link
              key={idx}
              href={`/articles/${topic.slug}`}
              className="px-2.5 py-1 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 text-[11px] font-semibold whitespace-nowrap transition-colors shrink-0 shadow-2xs"
            >
              {topic.label}
            </Link>
          ))}
        </div>
      </div>

      {/* 3. CATEGORY TABS & SEARCH BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
          {CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.id] || 0;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>{cat.labelNp}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Filter Search Input */}
        <div className="relative w-full sm:w-64 shrink-0">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="लेखहरूमा खोज्नुहोस्..."
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-emerald-500 transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* 4. ARTICLES DISPLAY (Lead Story + Secondary Grid) */}
      {filteredArticles.length === 0 ? (
        <div className="py-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2">
          <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
            "{searchQuery}" सँग मिल्दोजुल्दो कुनै पनि लेख भेटिएन।
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            सबै लेखहरू देखाउनुहोस्
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          
          {/* A. FEATURED LEAD ARTICLE SPOTLIGHT */}
          {leadArticle && (
            <article className="p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white border border-emerald-500/30 hover:border-emerald-400/60 shadow-xl transition-all duration-300 group relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3.5 max-w-3xl">
                  
                  {/* Meta Bar */}
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-black flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>विशेष सम्पादकीय आलेख (Featured Story)</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-slate-200 text-[11px] font-semibold">
                      {leadArticle.categoryNepali}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{leadArticle.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl font-black text-white group-hover:text-emerald-300 transition-colors leading-snug">
                    <Link href={`/articles/${leadArticle.slug}`}>
                      {leadArticle.title}
                    </Link>
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {leadArticle.summary}
                  </p>

                  {/* Author & Published Info */}
                  <div className="flex items-center gap-3 pt-1 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5 font-bold text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-black">
                        B
                      </div>
                      <span>BR Bhatta • नापी प्राविधिक</span>
                    </div>
                    <span>•</span>
                    <span>{leadArticle.publishedDate}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>नेपाल कानुन प्रमाणित</span>
                    </span>
                  </div>

                </div>

                {/* Read CTA Button */}
                <div className="shrink-0 flex items-center">
                  <Link
                    href={`/articles/${leadArticle.slug}`}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-emerald-50 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95 group/btn cursor-pointer"
                  >
                    <span>पूरा निर्देशिका पढ्नुहोस्</span>
                    <ArrowRight className="w-4 h-4 text-emerald-700 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* B. SECONDARY ARTICLES GRID (6 CARDS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5">
            {secondaryArticles.map((article) => (
              <article
                key={article.slug}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 hover:border-emerald-500 dark:hover:border-emerald-400/80 shadow-2xs hover:shadow-xl dark:hover:shadow-emerald-950/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-3 group backdrop-blur-xs"
              >
                <div className="space-y-3">
                  
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-lg border border-emerald-200/60 dark:border-emerald-800/60">
                      {article.tag}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug line-clamp-2">
                    <Link href={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h4>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 font-normal">
                    {article.summary}
                  </p>

                </div>

                {/* Card Footer */}
                <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {article.categoryNepali}
                  </span>

                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 group-hover:gap-1.5 transition-all"
                  >
                    <span>पढ्नुहोस्</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

              </article>
            ))}
          </div>

        </div>
      )}

      {/* 5. BOTTOM VIEW ALL GUIDES & LAWS CTA BAR */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/blog"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
        >
          <Newspaper className="w-4 h-4" />
          <span>सम्पूर्ण २२+ निर्देशिका तथा ब्लग हेर्नुहोस् (Browse All 22 Guides) →</span>
        </Link>

        <Link
          href="/laws"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-95"
        >
          <Scale className="w-4 h-4 text-emerald-600" />
          <span>मौजूदा नापी तथा भूउपयोग कानुनहरू (Acts & Laws)</span>
        </Link>
      </div>

    </section>
  );
}
