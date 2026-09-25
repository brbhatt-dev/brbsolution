import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LandCalculator from '@/components/LandCalculator';
import SocialShareBar from '@/components/SocialShareBar';
import { Calculator, ArrowLeft, BookOpen, Sparkles, Scale, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'नेपाल अनलाइन जग्गा क्यालकुलेटर (Ropani to Bigha Converter) | BR Bhatta',
  description: 'नेपालको आधिकारिक जग्गा नापजाँच क्यालकुलेटर। रोपनी, आना, पैसा, दाम र बिघा, कट्ठा, धुरबीच १००% सटीक रूपान्तरण, वर्गफिट, वर्गमिटर र जग्गाको मूल्य निर्धारण।',
  keywords: [
    'Nepal Land Calculator',
    'Ropani to Bigha Converter',
    'Aana to Sqft Calculator',
    'Bigha to Katha Dhur',
    'Land Measurement Nepal Formula',
    'जग्गा नापजाँच क्यालकुलेटर',
    'रोपनी आना पैसा दाम',
    'बिघा कट्ठा धुर'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/land-calculator',
  },
};

export default function StandaloneLandCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'नेपाल जग्गा नापजाँच तथा रूपान्तरण क्यालकुलेटर',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    url: 'https://www.brbhatta.com/tools/land-calculator',
    description: 'Official online land unit converter for Nepal supporting Ropani-Aana-Paisa-Daam and Bigha-Katha-Dhur systems.',
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
        
        {/* Breadcrumb Nav */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>उपकरणहरू (Tools Hub)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200">जग्गा क्यालकुलेटर</span>
        </div>

        {/* Embedded Full Land Calculator */}
        <LandCalculator />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="नेपाल अनलाइन जग्गा क्यालकुलेटर (रोपनी ⇄ बिघा ⇄ वर्गफिट)" 
          url="/tools/land-calculator" 
        />

        {/* Informative Formula Table */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              नेपालमा जग्गा नापजाँचका आधिकारिक सूत्र तथा एकाइहरू
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            {/* Pahadi System Table */}
            <div className="space-y-3 p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/40">
              <h3 className="font-extrabold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                <span>पहाडी प्रणाली (Pahadi System)</span>
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 font-mono text-xs">
                <li>• १ रोपनी = १६ आना (५,४७६ वर्गफिट / ५०८.७२ वर्गमिटर)</li>
                <li>• १ आना = ४ पैसा (३४२.२५ वर्गफिट / ३१.८० वर्गमिटर)</li>
                <li>• १ पैसा = ४ दाम (८५.५६ वर्गफिट / ७.९५ वर्गमिटर)</li>
                <li>• १ दाम = २१.३९ वर्गफिट (१.९९ वर्गमिटर)</li>
              </ul>
            </div>

            {/* Terai System Table */}
            <div className="space-y-3 p-5 rounded-2xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-200/80 dark:border-sky-900/40">
              <h3 className="font-extrabold text-sky-900 dark:text-sky-300 flex items-center gap-1.5">
                <span>तराई प्रणाली (Terai System)</span>
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 font-mono text-xs">
                <li>• १ बिघा = २० कट्ठा (७२,९०० वर्गफिट / ६,७७२.६३ वर्गमिटर)</li>
                <li>• १ कट्ठा = २० धुर (३,६४५ वर्गफिट / ३३८.६३ वर्गमिटर)</li>
                <li>• १ धुर = १६ कन्वा (१८२.२५ वर्गफिट / १६.९३ वर्गमिटर)</li>
                <li>• १ बिघा = करिब १३.३१ रोपनी</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <span>
              <strong>नापी विभागको मापदण्ड:</strong> जग्गाको क्षेत्रफल नाप्दा नापी टोलीले जहिले पनि मिट्रिक प्रणाली (वर्गमिटर) मा फिल्डबुक कायम गर्छ र त्यसलाई लालपुर्जामा पहाडमा रोपनी-आना र तराईमा बिघा-कट्ठामा रूपान्तरण गर्दछ।
            </span>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
