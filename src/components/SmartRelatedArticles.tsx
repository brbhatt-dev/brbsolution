'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { ArticleDetail } from '@/data/articles';

interface SmartRelatedArticlesProps {
  articles: ArticleDetail[];
}

export default function SmartRelatedArticles({ articles }: SmartRelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
      
      {/* Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>सिफारिस गरिएका अन्य गाइडहरू • RECOMMENDED GUIDES</span>
        </div>
        <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
          यस विषयसँग सम्बन्धित अन्य उपयोगी लेखहरू
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          नेपालको पछिल्लो कानुन र नापजाँच सम्बन्धी थप स्पष्टताका लागि यी आधिकारिक आलेखहरू पनि अध्ययन गर्नुहोस्:
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {articles.map((item) => (
          <article
            key={item.slug}
            className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 hover:border-emerald-500/80 dark:hover:border-emerald-400/80 shadow-2xs hover:shadow-lg dark:hover:shadow-emerald-950/20 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-3 group"
          >
            <div className="space-y-2.5">
              
              {/* Meta Badges */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                  {item.tag}
                </span>
                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>{item.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h4 className="text-sm sm:text-[15px] font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug line-clamp-2">
                <Link href={`/articles/${item.slug}`}>
                  {item.title}
                </Link>
              </h4>

              {/* Summary */}
              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed font-normal">
                {item.summary}
              </p>

            </div>

            {/* Card Footer */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-[11px] text-slate-400 font-medium">
                {item.categoryNepali}
              </span>

              <Link
                href={`/articles/${item.slug}`}
                className="inline-flex items-center gap-1 font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 group-hover:gap-1.5 transition-all"
              >
                <span>पढ्नुहोस्</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
