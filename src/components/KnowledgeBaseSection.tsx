'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, Sparkles, Newspaper } from 'lucide-react';
import { ARTICLES_DATA } from '@/data/articles';

export default function KnowledgeBaseSection() {
  const featuredArticles = ARTICLES_DATA.slice(0, 4);

  return (
    <section id="guides" className="py-12 sm:py-16 bg-white dark:bg-[#070b14] border-t border-slate-200 dark:border-slate-800 transition-colors notranslate" translate="no">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 text-xs font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>जानकारीमूलक लेख तथा टिप्स (Knowledge Base)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            जग्गा, नापजाँच तथा प्राविधिक गाइडहरू
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            नेपालको जग्गा प्रशासन, कित्ताकाट नियम, क्याड अटोमेसन र वित्तीय व्यवस्थापन सम्बन्धी आधिकारिक आलेखहरू।
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {featuredArticles.map((item) => (
            <article
              key={item.slug}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 dark:hover:border-cyan-500/60 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-cyan-800 dark:text-cyan-300 bg-cyan-100/80 dark:bg-cyan-950/60 px-2.5 py-1 rounded-lg">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                  <Link href={`/articles/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {item.categoryNepali}
                </span>

                <Link
                  href={`/articles/${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 active:scale-95 transition-all"
                >
                  <span>पूरा लेख पढ्नुहोस्</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Guides Button */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            <Newspaper className="w-4 h-4" />
            <span>सबै १०+ वटा विस्तृत गाइड तथा लेखहरू हेर्नुहोस् (View All Articles) →</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
