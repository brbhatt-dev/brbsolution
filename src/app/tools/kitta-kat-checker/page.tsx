import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KittaKatChecker from '@/components/KittaKatChecker';
import { ArrowLeft, BookOpen, ShieldCheck, Info, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'कित्ताकाट योग्यता तथा सडक मापदण्ड परीक्षक (Kitta-Kat Eligibility Checker) | BR Bhatta',
  description: 'नेपालमा आफ्नो जग्गा कित्ताकाट गर्न मिल्छ कि मिल्दैन? भू-उपयोग नियमावली २०७९ (संशोधन २०८१) अनुसार न्यूनतम १३० वर्गमिटर, सडक चौडाइ र पालिका मापदण्ड तुरुन्त जाँच्नुहोस्।',
  keywords: [
    'Kitta Kat Checker Nepal',
    'Kitta Kat Rules Nepal 2081',
    'Land Partition Eligibility Nepal',
    'Bhumisudhar Kitta Kat',
    'Land Use Regulations 2079',
    'कित्ताकाट नियम नेपाल',
    'भूउपयोग नियमावली २०८१'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/kitta-kat-checker',
  },
};

export default function StandaloneKittaKatCheckerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'कित्ताकाट योग्यता तथा सडक मापदण्ड परीक्षक',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    url: 'https://www.brbhatta.com/tools/kitta-kat-checker',
    description: 'Interactive eligibility checker for land partition and kitta-kat in Nepal based on Land Use Act 2076 & Rules 2079.',
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
          <span className="text-slate-800 dark:text-slate-200">कित्ताकाट परीक्षक</span>
        </div>

        {/* Embedded Kitta Kat Checker Component */}
        <KittaKatChecker />

        {/* Detailed Guidelines & Table */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5">
            <Scale className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              नेपाल सरकारको भू-उपयोग नियमावली २०७९ अनुसार न्यूनतम कित्ताकाट मापदण्ड
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                  <th className="py-3 px-4 font-bold text-slate-700 dark:text-slate-300">जग्गाको क्षेत्र / वर्गीकरण</th>
                  <th className="py-3 px-4 font-bold text-slate-700 dark:text-slate-300">न्यूनतम क्षेत्रफल प्रति कित्ता</th>
                  <th className="py-3 px-4 font-bold text-slate-700 dark:text-slate-300">परम्परागत एकाइमा</th>
                  <th className="py-3 px-4 font-bold text-slate-700 dark:text-slate-300">कैफियत</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">काठमाडौँ उपत्यका (आवासीय)</td>
                  <td className="py-3 px-4 font-mono font-bold text-emerald-600">१३० वर्गमिटर</td>
                  <td className="py-3 px-4">करिब ४ आना ०.३ पैसा</td>
                  <td className="py-3 px-4 text-slate-500">योजनाबद्ध आवासमा ८० वर्गमिटर (२.५ आना)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">तराई र भित्री मधेस (आवासीय)</td>
                  <td className="py-3 px-4 font-mono font-bold text-emerald-600">१६९.३ वर्गमिटर</td>
                  <td className="py-3 px-4">करिब १० धुर</td>
                  <td className="py-3 px-4 text-slate-500">सडक मोहडा न्यूनतम २० फिट हुनुपर्ने</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">काठमाडौँ उपत्यका (कृषि क्षेत्र)</td>
                  <td className="py-3 px-4 font-mono font-bold text-emerald-600">५०० वर्गमिटर</td>
                  <td className="py-3 px-4">करिब १ रोपनी</td>
                  <td className="py-3 px-4 text-slate-500">कृषि योग्य जग्गाको खण्डीकरण रोक्न</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">तराई र भित्री मधेस (कृषि क्षेत्र)</td>
                  <td className="py-3 px-4 font-mono font-bold text-emerald-600">६७५ वर्गमिटर</td>
                  <td className="py-3 px-4">करिब २ कट्ठा</td>
                  <td className="py-3 px-4 text-slate-500">खेतीयोग्य भूमिको उत्पादकत्व संरक्षण</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">पहाडी क्षेत्र (कृषि क्षेत्र)</td>
                  <td className="py-3 px-4 font-mono font-bold text-emerald-600">१००० वर्गमिटर</td>
                  <td className="py-3 px-4">करिब २ रोपनी</td>
                  <td className="py-3 px-4 text-slate-500">पाखो तथा कान्ला भएको जमिन</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50 text-xs text-indigo-900 dark:text-indigo-300 flex items-start gap-2">
            <Info className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
            <span>
              <strong>महत्त्वपूर्ण नोट:</strong> यदि सम्बन्धित स्थानीय तह (नगरपालिका वा गाउँपालिका) ले आफ्नो भू-उपयोग नक्सा स्वीकृत गरी वर्गीकरण खुलाइसकेको छ भने सोही पालिकाको भू-उपयोग परिषद्को निर्णय नै अन्तिम मानिन्छ।
            </span>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
