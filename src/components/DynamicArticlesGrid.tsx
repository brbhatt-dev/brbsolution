'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';
import { ArticleDetail } from '@/data/articles';
import { sortArticlesDescending } from '@/lib/articlesSort';

interface Props {
  initialArticles: ArticleDetail[];
}

export default function DynamicArticlesGrid({ initialArticles }: Props) {
  const [articles, setArticles] = useState<any[]>(() => sortArticlesDescending(initialArticles));

  useEffect(() => {
    // Check if any dynamic articles exist in Cloudflare KV
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        if (data && data.posts && data.posts.length > 0) {
          // Merge dynamic posts at the beginning, avoiding duplicates
          const dynamicSlugs = new Set(data.posts.map((p: any) => p.slug));
          const filteredInitial = initialArticles.filter(a => !dynamicSlugs.has(a.slug));
          setArticles(sortArticlesDescending([...data.posts, ...filteredInitial]));
        }
      })
      .catch(() => {});
  }, [initialArticles]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <article
          key={article.slug}
          className="flex flex-col justify-between bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all group relative overflow-hidden"
        >
          {article.isCustom && (
            <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-600 to-teal-600 text-white text-[9px] font-bold px-3 py-0.5 rounded-bl-xl shadow-sm">
              नयाँ अपडेट
            </div>
          )}

          <div className="space-y-4">
            
            {/* Meta Badge Bar */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                {article.tag}
              </span>
              <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-3">
              <Link href={`/articles/${article.slug}`}>
                {article.title}
              </Link>
            </h2>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
              {article.summary}
            </p>

          </div>

          {/* Card Footer */}
          <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-medium">
              {article.publishedDate}
            </span>
            <Link
              href={`/articles/${article.slug}`}
              className="inline-flex items-center gap-1 font-bold text-emerald-700 dark:text-emerald-400 group-hover:gap-2 transition-all"
            >
              <span>विस्तृत पढ्नुहोस्</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </article>
      ))}
    </div>
  );
}
