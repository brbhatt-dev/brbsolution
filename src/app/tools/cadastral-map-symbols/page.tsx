import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CadastralSymbolsHub from '@/components/CadastralSymbolsHub';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CADASTRAL_SYMBOLS_FAQS } from '@/data/cadastralSymbolsData';

export default function CadastralMapSymbolsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/cadastral-map-symbols#app',
        name: 'नापी कित्ता नक्सा संकेत (Cadastral Legend) तथा १:५०० स्केल क्यालकुलेटर | Nepal Survey Department',
        description: 'नेपाल नापी विभाग (DOS) को आधिकारिक कित्ता नक्सा लेजेन्ड, सिमाना पिल्लर, बाटो, खोला, हाइ-टेन्सन संकेत र १:५०० देखि १:५००० सम्मको नक्सा स्केल क्याल्कुलेटर।',
        url: 'https://www.brbhatta.com/tools/cadastral-map-symbols',
        applicationCategory: 'EngineeringApplication',
        operatingSystem: 'All',
        author: {
          '@type': 'Person',
          name: 'BR Bhatta',
          url: 'https://www.brbhatta.com'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.brbhatta.com/tools/cadastral-map-symbols#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'गृहपृष्ठ (Home)',
            item: 'https://www.brbhatta.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'डिजिटल उपकरणहरू (Tools)',
            item: 'https://www.brbhatta.com/tools'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'नापी नक्सा संकेत र स्केल क्यालकुलेटर',
            item: 'https://www.brbhatta.com/tools/cadastral-map-symbols'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/cadastral-map-symbols#faq',
        mainEntity: CADASTRAL_SYMBOLS_FAQS.map(faq => ({
          '@type': 'Question',
          name: faq.qNp,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.aNp
          }
        }))
      }
    ]
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 md:py-12 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">गृहपृष्ठ</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">डिजिटल टूल्स</Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200 font-medium">नापी नक्सा संकेत र स्केल क्यालकुलेटर</span>
          </nav>

          {/* Interactive Hub */}
          <CadastralSymbolsHub />

          {/* Related Tools Callout */}
          <section className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              सम्बन्धित नापी तथा जग्गा टूल्सहरू:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link 
                href="/tools/merokitta-online-naksa"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all group"
              >
                <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">MeroKitta Portal</div>
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 flex items-center justify-between">
                  <span>मेरोकित्ता नक्सा डाउनलोड गाइड</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
              <Link 
                href="/tools/survey-offices"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all group"
              >
                <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">७७ जिल्ला डाइरेक्टरी</div>
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 flex items-center justify-between">
                  <span>नापी तथा मालपोत कार्यालयहरू</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
              <Link 
                href="/tools/land-calculator"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all group"
              >
                <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">क्षेत्रफल रूपान्तरण</div>
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 flex items-center justify-between">
                  <span>जग्गा नापजाँच क्याल्कुलेटर</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Footer />
    </>
  );
}
