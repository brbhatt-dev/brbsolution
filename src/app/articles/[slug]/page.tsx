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
import SocialShareBar from '@/components/SocialShareBar';
import AudioArticlePlayer from '@/components/AudioArticlePlayer';
import ArticleQueryBox from '@/components/ArticleQueryBox';
import SmartRelatedArticles from '@/components/SmartRelatedArticles';
import StickyFloatingShare from '@/components/StickyFloatingShare';
import ArticleTaxCalculatorWidget from '@/components/ArticleTaxCalculatorWidget';
import ArticleKittaKatWidget from '@/components/ArticleKittaKatWidget';

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
      article.slug.replace(/-/g, ' '),
      'Nepal land rules 2081',
      'Nepal surveying guide',
      'Ropani Bigha calculator',
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
      images: [
        {
          url: 'https://www.brbhatta.com/og-image.png',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
      images: ['https://www.brbhatta.com/og-image.png'],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Contextual smart related articles (always exactly 4 top recommendations)
  const explicitRelated = ARTICLES_DATA.filter((a) => article.relatedSlugs?.includes(a.slug));
  const sameCategoryRelated = ARTICLES_DATA.filter((a) => a.category === article.category && a.slug !== article.slug && !article.relatedSlugs?.includes(a.slug));
  const otherRelated = ARTICLES_DATA.filter((a) => a.slug !== article.slug && !article.relatedSlugs?.includes(a.slug) && a.category !== article.category);
  const smartRelatedArticles = [...explicitRelated, ...sameCategoryRelated, ...otherRelated].slice(0, 4);
  const relatedArticles = smartRelatedArticles;

  const isTaxArticle = [
    'malpot-land-registration-fee-tax-calculator-nepal',
    'government-land-valuation-minimum-rate-district-nepal',
    'women-land-registration-discount-nepal-tax-rebate',
    'nepal-government-land-valuation-minimum-rate-guide',
  ].includes(article.slug);

  const isKittaKatArticle = [
    'kitta-kat-minimum-area-criteria-residential-agricultural-nepal',
    'kitta-kat-process-rules-nepal-land-reform',
    'bato-chhodne-mapdanda-naksa-pas-nepal',
  ].includes(article.slug);

  // 1. Article JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.summary,
    image: 'https://www.brbhatta.com/og-image.png',
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

  // 2. BreadcrumbList JSON-LD Structured Data
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'गृहपृष्ठ (Home)',
        item: 'https://www.brbhatta.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'ब्लग तथा लेखहरू (Blog)',
        item: 'https://www.brbhatta.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://www.brbhatta.com/articles/${article.slug}`,
      },
    ],
  };

  // 3. FAQPage JSON-LD Structured Data (If article has FAQs)
  const faqJsonLd =
    article.faq && article.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: article.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* Schema.org Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

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

            {/* 🎧 Interactive Nepali Audio Player */}
            <AudioArticlePlayer 
              title={article.title} 
              summary={article.summary} 
              sections={article.sections} 
            />

            {/* Social Share Bar Top */}
            <SocialShareBar title={article.title} url={`/articles/${article.slug}`} />
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

                {/* Embedded Interactive Live Widgets */}
                {idx === 0 && isTaxArticle && (
                  <ArticleTaxCalculatorWidget 
                    initialPrice={
                      article.slug === 'women-land-registration-discount-nepal-tax-rebate' 
                        ? 4000000 
                        : 5000000
                    } 
                  />
                )}
                {idx === 0 && isKittaKatArticle && (
                  <ArticleKittaKatWidget />
                )}

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

          {/* Social Share Bar Bottom */}
          <div className="py-2">
            <SocialShareBar title={article.title} url={`/articles/${article.slug}`} />
          </div>

          {/* 💬 Reader Land Question & AI Answer Box */}
          <ArticleQueryBox articleTitle={article.title} articleCategory={article.categoryNepali} />

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

          {/* Internal Linking: Interactive Tools CTA */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800/60 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🧮</span>
              <h3 className="font-black text-sm sm:text-base text-slate-900 dark:text-white">
                सम्बन्धित उपयोगी डिजिटल क्याल्कुलेटरहरू (Interactive Tools):
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              यस लेखसँग सम्बन्धित हिसाब तथा नापी कार्यलाई १००% सटीक बनाउन तलका निःशुल्क टूल्सहरू चलाउनुहोस्:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <Link
                href="/tools/land-calculator"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300/80 dark:border-emerald-700/60 text-center hover:shadow-sm hover:scale-[1.02] transition-all"
              >
                <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">जग्गा क्याल्कुलेटर</p>
                <p className="text-[10px] text-slate-500">रोपनी-आना / बिघा-कट्ठा</p>
              </Link>
              <Link
                href="/tools/kitta-kat-checker"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300/80 dark:border-emerald-700/60 text-center hover:shadow-sm hover:scale-[1.02] transition-all"
              >
                <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">कित्ताकाट चेकर</p>
                <p className="text-[10px] text-slate-500">न्यूनतम मापदण्ड २०८१</p>
              </Link>
              <Link
                href="/tools/malpot-calculator"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300/80 dark:border-emerald-700/60 text-center hover:shadow-sm hover:scale-[1.02] transition-all"
              >
                <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">मालपोत तथा कर</p>
                <p className="text-[10px] text-slate-500">रजिष्ट्रेसन र लाभकर</p>
              </Link>
              <Link
                href="/tools/aamin-quiz"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300/80 dark:border-emerald-700/60 text-center hover:shadow-sm hover:scale-[1.02] transition-all"
              >
                <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">नापी अमिन क्विज</p>
                <p className="text-[10px] text-slate-500">लोकसेवा परीक्षा अभ्यास</p>
              </Link>
            </div>
          </div>

          {/* Smart Contextual Related Articles */}
          <SmartRelatedArticles articles={smartRelatedArticles} />

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

      {/* 🚀 Sticky Floating Quick Share Pill */}
      <StickyFloatingShare title={article.title} url={`/articles/${article.slug}`} />

    </div>
  );
}
