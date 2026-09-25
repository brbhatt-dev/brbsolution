import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MalpotCalculator from '@/components/MalpotCalculator';
import SocialShareBar from '@/components/SocialShareBar';
import { Receipt, ArrowLeft, BookOpen, ShieldCheck, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'मालपोत रजिस्ट्रेसन दस्तुर तथा पुँजीगत लाभकर क्यालकुलेटर (Nepal Malpot Tax Calculator) | BR Bhatta',
  description: 'नेपालमा घरजग्गा खरिदबिक्री गर्दा लाग्ने मालपोत रजिस्ट्रेसन दस्तुर, महिला छुट (२५%-५०%), संयुक्त दम्पती दर्ता (रु. १००) र पुँजीगत लाभकर (CGT ५% र ७.५%) को आधिकारिक अनलाइन हिसाब।',
  keywords: [
    'Malpot Tax Calculator Nepal',
    'Nepal Land Registration Fee Calculator',
    'Capital Gains Tax Nepal Land',
    'घरजग्गा रजिस्ट्रेसन दस्तुर',
    'पुँजीगत लाभकर हिसाब',
    'महिला जग्गा रजिस्ट्रेसन छुट',
    'मालपोत कर २०८१',
    'BR Bhatta Malpot Calculator'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/malpot-calculator',
  },
  openGraph: {
    title: 'नेपाल मालपोत रजिस्ट्रेसन दस्तुर तथा पुँजीगत लाभकर क्यालकुलेटर | BR Bhatta',
    description: 'आर्थिक ऐन तथा मालपोत नियमावली अनुसार घरजग्गा खरिदबिक्रीमा लाग्ने सरकारी राजस्व तथा पुँजीगत लाभकरको तुरुन्त हिसाब।',
    url: 'https://www.brbhatta.com/tools/malpot-calculator',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function MalpotCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'नेपाल मालपोत रजिस्ट्रेसन दस्तुर तथा पुँजीगत लाभकर क्यालकुलेटर',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'All',
    url: 'https://www.brbhatta.com/tools/malpot-calculator',
    description: 'Nepal land registration tax and capital gains tax (CGT) calculator with female rebates and local municipality rates.',
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
        
        {/* Breadcrumb Nav */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>उपकरणहरू (Tools Hub)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200">मालपोत तथा लाभकर क्यालकुलेटर</span>
        </div>

        {/* Embedded Malpot Calculator */}
        <MalpotCalculator />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="नेपाल मालपोत रजिस्ट्रेसन दस्तुर तथा पुँजीगत लाभकर क्यालकुलेटर" 
          url="/tools/malpot-calculator" 
        />

        {/* FAQ Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5">
            <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              घरजग्गा रजिस्ट्रेसन तथा कर सम्बन्धी बारम्बार सोधिने प्रश्नहरू (FAQ)
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h3 className="font-bold text-slate-900 dark:text-white">
                Q: मालपोतमा थैली अङ्क कसरी निर्धारण गरिन्छ?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                प्रत्येक जिल्लाको प्रमुख जिल्ला अधिकारी (CDO) को अध्यक्षतामा रहेको न्यूनतम मूल्याङ्कन समितिले प्रत्येक आर्थिक वर्षमा बाटोको वर्गीकरण अनुसार न्यूनतम सरकारी मूल्याङ्कन तोकेको हुन्छ। रजिस्ट्रेसन लिखत गर्दा सरकारी न्यूनतम दरभन्दा कम थैली अङ्क राख्न पाइँदैन।
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h3 className="font-bold text-slate-900 dark:text-white">
                Q: महिलाको नाममा जग्गा किन्दा प्राप्त हुने छुट कस्तो अवस्थामा लागू हुन्छ?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                जग्गाको पूर्ण स्वामित्व महिलाको एकल नाममा रजिस्ट्रेसन पारित गर्दा प्रदेश आर्थिक ऐन अनुसार २५% छुट पाइन्छ। यदि जग्गा हिमाली वा दुर्गम जिल्लाको गाउँपालिका क्षेत्रमा पर्दछ भने ५०% सम्म छुट प्राप्त हुन्छ।
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h3 className="font-bold text-slate-900 dark:text-white">
                Q: पुँजीगत लाभकर (CGT) कसले तिर्नुपर्छ — क्रेता कि बिक्रेता?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                नेपाल आयकर ऐन २०५८ अनुसार पुँजीगत लाभकर जग्गा बिक्री गरी लाभ आर्जन गर्ने <strong>बिक्रेता (Seller)</strong> ले तिर्नुपर्ने प्रत्यक्ष कर हो। यो कर जग्गा पारित गर्ने बेलामा मालपोत कार्यालयमै बुझाउनुपर्छ।
              </p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
