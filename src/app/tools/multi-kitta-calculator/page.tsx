import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MultiKittaCalculator from '@/components/MultiKittaCalculator';
import SocialShareBar from '@/components/SocialShareBar';
import { Layers, ArrowLeft, BookOpen, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'बहु-कित्ता (Multi-Kitta) क्षेत्रफल योग क्यालकुलेटर | BR Bhatta',
  description: 'नेपालमा धेरै कित्ताहरूको क्षेत्रफललाई शुद्ध पहाडी (रोपनी, आना, पैसा, दाम) र तराई (बिघा, कट्ठा, धुर) प्रणालीमा जोड्ने आधिकारिक बहु-कित्ता क्यालकुलेटर तथा स्लिप प्रिन्ट।',
  keywords: [
    'Multi Kitta Calculator Nepal',
    'Parcel Area Accumulator',
    'Ropani Bigha Sum Calculator',
    'धेरै कित्ता जोड्ने क्यालकुलेटर',
    'कित्ताकाट क्षेत्रफल योग',
    'BR Bhatta Multi Kitta Calculator'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/multi-kitta-calculator',
  },
};

export default function MultiKittaCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'नेपाल बहु-कित्ता क्षेत्रफल योग क्यालकुलेटर',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    url: 'https://www.brbhatta.com/tools/multi-kitta-calculator',
    description: 'Multi-parcel land area accumulator and sum calculator for Nepal supporting mixed Ropani and Bigha units.',
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
        
        {/* Breadcrumb Nav */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>उपकरणहरू (Tools Hub)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200">बहु-कित्ता योग क्यालकुलेटर</span>
        </div>

        {/* Embedded Calculator */}
        <MultiKittaCalculator />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="बहु-कित्ता (Multi-Kitta) क्षेत्रफल योग क्यालकुलेटर (नेपाल जग्गा नाप)" 
          url="/tools/multi-kitta-calculator" 
        />

        {/* Information Box */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
              बहु-कित्ता गणना गर्दा ध्यान दिनुपर्ने कुराहरू
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-300 leading-relaxed">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1">
              <h3 className="font-bold text-slate-900 dark:text-white">१६ आना र २० कट्ठाको क्यारी गणित:</h3>
              <p>
                पहाडी नापमा ४ दाम पुगेपछि १ पैसा, ४ पैसा पुगेपछि १ आना र १६ आना पुगेपछि १ रोपनी कायम हुन्छ। हाम्रो क्यालकुलेटरले यो जटिल क्यारीलाई १००% शुद्ध रूपमा स्वचालित गणना गर्दछ।
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1">
              <h3 className="font-bold text-slate-900 dark:text-white">आधिकारिक प्रिन्ट स्लिप:</h3>
              <p>
                तपाईंसँग ५ वा १० वटा जतिसुकै कित्ता भए पनि सबैलाई एकै पानामा प्रिन्ट गरेर मालपोत वा नापी कार्यालयमा पेश गर्न मिल्ने गरी A4 साइजको स्लिप तयार हुन्छ।
              </p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
