import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Share2, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  HelpCircle, 
  ArrowRight,
  User,
  ShieldCheck,
  BookOpen
} from 'lucide-react';
import { ARTICLES_DATA, ArticleDetail } from '@/data/articles';
import AdSenseSlot from '@/components/AdSenseSlot';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'लेख फेला परेन | BR Bhatta',
    };
  }

  const url = `https://www.brbhatta.com/articles/${article.slug}`;

  return {
    title: `${article.title} | BR Bhatta & Land Solution`,
    description: article.summary,
    alternates: {
      canonical: url,
    },
    keywords: [
      article.tag,
      article.categoryNepali,
      'जग्गा नापजाँच नेपाल',
      'किताकाट नियम',
      'मालपोत दस्तुर',
      'BR Bhatta',
      'Land Solution Nepal',
    ],
    openGraph: {
      title: article.title,
      description: article.summary,
      url,
      type: 'article',
      siteName: 'BR Bhatta | Land Solution',
      locale: 'ne_NP',
      authors: [article.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES_DATA.filter((a) =>
    article.relatedSlugs?.includes(a.slug)
  );

  // Article JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.summary,
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: 'https://www.brbhatta.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BR Bhatta & Land Solution',
      url: 'https://www.brbhatta.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.brbhatta.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.brbhatta.com/articles/${article.slug}`,
    },
    inLanguage: 'ne',
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* Schema.org Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Header Bar */}
      <header className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 transition-colors">
        <div className="max-w-4xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <Link 
            href="/articles" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>सबै लेखहरू (All Guides)</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link 
              href="/"
              className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              गृहपृष्ठ (Home)
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <article className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 font-medium pb-2 border-b border-slate-100 dark:border-slate-800">
            <Link href="/" className="hover:text-emerald-600 transition-colors">गृहपृष्ठ</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-emerald-600 transition-colors">गाइड तथा लेखहरू</Link>
            <span>/</span>
            <span className="text-slate-600 dark:text-slate-300 truncate max-w-[200px] sm:max-w-xs">{article.tag}</span>
          </nav>

          {/* Article Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                {article.tag}
              </span>
              <span className="text-xs text-slate-400">
                • {article.categoryNepali}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.25]">
              {article.title}
            </h1>

            {/* Author & Timestamp Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 pb-4 border-b border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-emerald-100 dark:bg-slate-800 p-0.5 border border-emerald-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                  <img src={article.author.avatar} alt={article.author.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 dark:text-slate-200 block">{article.author.name}</span>
                  <span className="text-[10px] text-slate-400">{article.author.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {article.publishedDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {article.readTime}
                </span>
              </div>
            </div>

            {/* Quick Summary Lead Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed font-medium">
              <p><strong>सारांश (Summary):</strong> {article.summary}</p>
            </div>
          </div>

          {/* Table of Contents */}
          {article.tableOfContents && article.tableOfContents.length > 0 && (
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                विषयसूची (Table of Contents)
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                {article.tableOfContents.map((toc) => (
                  <li key={toc.id}>
                    <a
                      href={`#${toc.id}`}
                      className="text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 hover:underline transition-colors"
                    >
                      {toc.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Top In-Article AdSense Slot */}
          <AdSenseSlot userFacingLabel="विज्ञापन (In-Article Ad)" />

          {/* Article Sections */}
          <div className="space-y-8 text-slate-800 dark:text-slate-200 leading-relaxed text-sm sm:text-base">
            {article.sections.map((section, idx) => (
              <section key={section.id} id={section.id} className="space-y-3.5 scroll-mt-20">
                
                <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight pt-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                  {section.heading}
                </h2>

                <div className="whitespace-pre-line text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
                  {section.content}
                </div>

                {/* Optional Table */}
                {section.table && (
                  <div className="overflow-x-auto my-4 rounded-xl border border-slate-200 dark:border-slate-800">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 font-bold border-b border-slate-200 dark:border-slate-700">
                        <tr>
                          {section.table.headers.map((h, i) => (
                            <th key={i} className="px-4 py-3">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-4 py-2.5 font-medium">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Optional Highlight Alert */}
                {section.alert && (
                  <div className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed border my-3 ${
                    section.alert.type === 'warning'
                      ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200'
                      : 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                  }`}>
                    <span className="font-bold block mb-1">
                      {section.alert.title}:
                    </span>
                    <p>{section.alert.text}</p>
                  </div>
                )}

                {/* Mid-Article Ad Slot after Section 2 */}
                {idx === 2 && (
                  <AdSenseSlot userFacingLabel="विज्ञापन (Mid-Article Ad)" />
                )}

              </section>
            ))}
          </div>

          {/* FAQ Section */}
          {article.faq && article.faq.length > 0 && (
            <section id="faq" className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-600" />
                <span>बारम्बार सोधिने प्रश्नहरू (Frequently Asked Questions)</span>
              </h2>

              <div className="space-y-3">
                {article.faq.map((item, fIdx) => (
                  <div key={fIdx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                      Q: {item.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-4 border-l-2 border-emerald-500">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Bottom AdSense Slot */}
          <AdSenseSlot userFacingLabel="विज्ञापन (Bottom In-Feed)" />

          {/* Author Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1 flex items-center justify-center shrink-0">
              <img src="/logo.png" alt="BR Bhatta" className="w-full h-full object-contain" />
            </div>
            <div className="space-y-1 text-center sm:text-left flex-1">
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase">लेखक परिचय</span>
              <h3 className="font-black text-slate-900 dark:text-white text-base">BR Bhatta</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                सफ्टवेयर विकासकर्ता तथा नापी प्रविधि अनुसन्धानकर्ता। नेपालमा जग्गा नापजाँच, कित्ताकाट, र क्याड अटोमेसनलाई सरल र डिजिटल बनाउने अभियानमा समर्पित।
              </p>
              <div className="pt-2 flex items-center justify-center sm:justify-start gap-3 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                <Link href="/about" className="hover:underline">हाम्रो बारेमा विस्तृत हेर्नुहोस् →</Link>
                <span>•</span>
                <Link href="/contact" className="hover:underline">सम्पर्क गर्नुहोस्</Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                सम्बन्धित अन्य गाइडहरू (Related Guides)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/articles/${rel.slug}`}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all group"
                  >
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100/60 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300">
                      {rel.tag}
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors mt-1.5 line-clamp-2">
                      {rel.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="pt-4 text-center">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-200 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>ज्ञान केन्द्रका सम्पूर्ण लेखहरू हेर्नुहोस्</span>
            </Link>
          </div>

        </article>
      </main>

    </div>
  );
}
