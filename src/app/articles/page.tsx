import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Newspaper, BookOpen, Clock, ArrowRight, ArrowLeft, Search, Tag, Sparkles } from 'lucide-react';
import { ARTICLES_DATA } from '@/data/articles';
import AdSenseSlot from '@/components/AdSenseSlot';

export const metadata: Metadata = {
  title: 'गाइड तथा ज्ञान केन्द्र (Articles & Guides) | BR Bhatta & Land Solution Nepal',
  description: 'नेपालमा जग्गा नापजाँच, कित्ताकाट कानुन, मालपोत दस्तुर, अंशबन्डा, र AutoCAD LSP सम्बन्धी आधिकारिक तथा विस्तृत गाइडहरू।',
  alternates: {
    canonical: 'https://www.brbhatta.com/articles',
  },
};

export default function ArticlesHubPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* Top Header Bar */}
      <header className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 transition-colors">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>गृहपृष्ठ (Home) फर्कनुहोस्</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-500 font-semibold">www.brbhatta.com</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-[#070b14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>KNOWLEDGE BASE & SURVEY GUIDES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            नापी, मालपोत तथा प्राविधिक ज्ञान केन्द्र
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            जग्गा नापजाँच, कित्ताकाट नियम, मालपोत रजिस्ट्रेसन कर, अंशबन्डा, र AutoCAD LSP सम्बन्धी नेपाल सरकारको मापदण्ड अनुसार तयार पारिएका आधिकारिक गाइडहरू।
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-10">
        
        {/* Top AdSense Slot */}
        <AdSenseSlot userFacingLabel="प्रायोजित स्थान (Sponsored Zone)" />

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES_DATA.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col justify-between bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all group"
            >
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

        {/* Bottom AdSense Slot */}
        <AdSenseSlot userFacingLabel="विज्ञापन (AdSense In-Feed)" />

      </main>

    </div>
  );
}
