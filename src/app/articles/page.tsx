import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Newspaper, BookOpen, Clock, ArrowRight, ArrowLeft, Search, Tag, Sparkles } from 'lucide-react';
import { ARTICLES_DATA } from '@/data/articles';
import AdSenseSlot from '@/components/AdSenseSlot';
import DynamicArticlesGrid from '@/components/DynamicArticlesGrid';
import ArticleQueryBox from '@/components/ArticleQueryBox';
import { HomeEnglishDocumentation } from '@/components/BilingualEnglishGuide';

export const metadata: Metadata = {
  title: 'गाइड तथा ज्ञान केन्द्र (Articles & Guides) | BR Bhatta & Land Solution Nepal',
  description: 'नेपालमा जग्गा नापजाँच, कित्ताकाट कानुन, मालपोत दस्तुर, अंशबन्डा, र AutoCAD LSP सम्बन्धी आधिकारिक तथा विस्तृत गाइडहरू। Official Nepal Land Surveying & Real Estate Knowledge Base.',
  alternates: {
    canonical: 'https://www.brbhatta.com/articles',
  },
  openGraph: {
    title: 'ब्लग तथा ज्ञान केन्द्र (Blog & Articles) | BR Bhatta & Land Solution Nepal',
    description: 'नेपालमा जग्गा नापजाँच, कित्ताकाट कानुन, मालपोत दस्तुर, अंशबन्डा, र AutoCAD सम्बन्धी आधिकारिक तथा विस्तृत ब्लग र प्राविधिक गाइडहरू।',
    url: 'https://www.brbhatta.com/articles',
    siteName: 'BR Bhatta',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.brbhatta.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BR Bhatta | Land Solution Nepal Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ब्लग तथा ज्ञान केन्द्र (Blog & Articles) | BR Bhatta & Land Solution Nepal',
    description: 'नेपालमा जग्गा नापजाँच, कित्ताकाट कानुन, मालपोत दस्तुर, र नापी गाइडहरू।',
    images: ['https://www.brbhatta.com/og-image.png'],
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
            <span>KNOWLEDGE BASE &amp; SURVEY GUIDES</span>
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
        <DynamicArticlesGrid initialArticles={ARTICLES_DATA} />

        {/* Official Bilingual Technical Documentation */}
        <HomeEnglishDocumentation />

        {/* 💬 Reader Land Question & AI Answer Box */}
        <ArticleQueryBox articleTitle="नापी, मालपोत तथा प्राविधिक ज्ञान केन्द्र" articleCategory="जग्गा नापजाँच तथा कानुन" />

        {/* Bottom AdSense Slot */}
        <AdSenseSlot userFacingLabel="विज्ञापन (AdSense In-Feed)" />

      </main>

    </div>
  );
}
