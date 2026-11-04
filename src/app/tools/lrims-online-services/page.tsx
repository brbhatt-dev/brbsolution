import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LrimsOnlineHub from '@/components/LrimsOnlineHub';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LRIMS_FAQS } from '@/data/lrimsServicesData';

export default function LrimsOnlineServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/lrims-online-services#app',
        name: 'LRIMS अनलाइन जग्गा सेवा, रोक्का/फुकुवा तथा न्यूनतम मूल्याङ्कन हब | Department of Land Reform and Management',
        description: 'नेपाल सरकार भूमिसुधार तथा मालपोत विभाग (DOLRM) को LRIMS अनलाइन टोकन, बैंक रोक्का/फुकुवा ट्र्याकिङ, ७७ जिल्ला न्यूनतम मूल्याङ्कन दररेट र लेखापढी व्यवसायी सेवा शुल्क गाइड।',
        url: 'https://www.brbhatta.com/tools/lrims-online-services',
        applicationCategory: 'GovernmentApplication',
        operatingSystem: 'All',
        author: {
          '@type': 'Person',
          name: 'BR Bhatta',
          url: 'https://www.brbhatta.com'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.brbhatta.com/tools/lrims-online-services#breadcrumb',
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
            name: 'LRIMS अनलाइन जग्गा सेवा हब',
            item: 'https://www.brbhatta.com/tools/lrims-online-services'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/lrims-online-services#faq',
        mainEntity: LRIMS_FAQS.map(faq => ({
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
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">गृहपृष्ठ</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">डिजिटल टूल्स</Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200 font-medium">LRIMS अनलाइन जग्गा सेवा हब</span>
          </nav>

          {/* Interactive Hub */}
          <LrimsOnlineHub />

          {/* Related Tools Callout */}
          <section className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              सम्बन्धित मालपोत तथा जग्गा कारोबार टूल्स:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link 
                href="/tools/malpot-calculator"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
              >
                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">रजिस्ट्रेसन & कर</div>
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 flex items-center justify-between">
                  <span>मालपोत रजिस्ट्रेसन क्याल्कुलेटर</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
              <Link 
                href="/tools/legal-templates"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
              >
                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">कानुनी ढाँचाहरू</div>
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 flex items-center justify-between">
                  <span>बैनापट्टा, रोक्का/फुकुवा टेम्प्लेट</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
              <Link 
                href="/tools/survey-offices"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
              >
                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">७७ जिल्ला डाइरेक्टरी</div>
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 flex items-center justify-between">
                  <span>नापी तथा मालपोत सम्पर्क</span>
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
