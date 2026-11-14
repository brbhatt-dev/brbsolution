import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MalpotValuationFinder from '@/components/MalpotValuationFinder';
import SocialShareBar from '@/components/SocialShareBar';
import PatroAppPromoBanner from '@/components/PatroAppPromoBanner';
import { 
  ArrowLeft, 
  Landmark, 
  BookOpen, 
  HelpCircle, 
  ShieldCheck, 
  Coins, 
  Scale, 
  Table 
} from 'lucide-react';
import { MALPOT_VALUATION_DATA } from '@/data/malpotRates';

export const metadata: Metadata = {
  title: 'जिल्ला मालपोत न्यूनतम सरकारी मूल्याङ्कन सर्च इन्जिन (District Malpot Rate Nepal) | BR Bhatta',
  description: 'नेपालका प्रमुख जिल्लाहरू (काठमाडौँ, ललितपुर, भक्तपुर, कास्की, चितवन, रूपन्देही) को आर्थिक वर्ष २०८१/२०८२ को आधिकारिक सरकारी जग्गा मूल्याङ्कन दर, बजार दर र बैंक भ्यालुएसन तुरुन्त खोज्नुहोस्।',
  keywords: [
    'Malpot Government Valuation Rate Nepal 2081 2082',
    'कलंकी मालपोत सरकारी मूल्याङ्कन दर',
    'डिल्लीबजार मालपोत रेट',
    'काठमाडौँ जग्गाको सरकारी मूल्याङ्कन',
    'पोखरा मालपोत जग्गा दर',
    'चितवन भरतपुर जग्गा रेट',
    'Land Valuation Rate Nepal',
    'जग्गाको थैली रकम'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/malpot-valuation-rates',
  },
  openGraph: {
    title: 'जिल्ला मालपोत न्यूनतम सरकारी मूल्याङ्कन सर्च इन्जिन | BR Bhatta',
    description: 'काठमाडौँ उपत्यका तथा प्रमुख सहरहरूको सडक वर्गीकरण अनुसार सरकारी न्यूनतम प्रतिआना/प्रतिकट्ठा दर र बैंक भ्यालुएसन दर।',
    url: 'https://www.brbhatta.com/tools/malpot-valuation-rates',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function MalpotValuationRatesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/malpot-valuation-rates#app',
        name: 'नेपाल जिल्ला मालपोत न्यूनतम सरकारी मूल्याङ्कन सर्च इन्जिन',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'All',
        url: 'https://www.brbhatta.com/tools/malpot-valuation-rates',
        description: 'Search official government minimum land valuation rates for property registration and bank valuation across districts in Nepal.',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/malpot-valuation-rates#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'जिल्ला मालपोत सरकारी मूल्याङ्कन दर कसले निर्धारण गर्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'मालपोत ऐन, २०३४ अनुसार प्रमुख जिल्ला अधिकारी (CDO) को अध्यक्षतामा नापी अधिकृत, मालपोत अधिकृत र स्थानीय तहका प्रतिनिधि सम्मिलित "जिल्ला मूल्याङ्कन समिति" ले हरेक आर्थिक वर्षको साउन १ गतेदेखि लागू हुने गरी सडकको वर्गीकरणका आधारमा सरकारी न्यूनतम दर निर्धारण गर्दछ।'
            }
          },
          {
            '@type': 'Question',
            name: 'सरकारी मूल्याङ्कन दर भन्दा कम मूल्यमा जग्गा पास गर्न मिल्छ कि मिल्दैन?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'मिल्दैन। मालपोत कार्यालयमा जग्गा रजिष्ट्रेसन पास गर्दा थैली रकम (Transaction Value) सरकारी न्यूनतम मूल्याङ्कन दर बराबर वा सोभन्दा बढी हुनुपर्दछ। सरकारी दरभन्दा कम थैली राखेर लिखत पास गर्न कानुनतः पाइँदैन।'
            }
          },
          {
            '@type': 'Question',
            name: 'सरकारी मूल्याङ्कन दर र बजार मूल्यमा किन ठूलो फरक हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'सरकारी दर मुख्यतया रजिष्ट्रेसन दस्तुर र सम्पत्ति कर संकलनका लागि न्यूनतम आधार तय गर्न बनाइएको हुन्छ। बजार मूल्य भने माग र आपूर्ति, व्यावसायिक सम्भावना र भविष्यको विकासका आधारमा निर्धारण हुने हुँदा सरकारी दरभन्दा सामान्यतया २ देखि ३ गुणासम्म बढी हुने गर्छ।'
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>सबै टूल्सहरू (Tools Hub)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200">मालपोत सरकारी मूल्याङ्कन सर्च इन्जिन</span>
        </div>

        {/* Interactive Finder Component */}
        <MalpotValuationFinder />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="जिल्ला मालपोत न्यूनतम सरकारी मूल्याङ्कन सर्च इन्जिन (आ.व. २०८१/८२)" 
          url="/tools/malpot-valuation-rates" 
        />

        {/* Static In-depth Guide Section */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
              <BookOpen className="w-3.5 h-3.5" />
              <span>आधिकारिक सरकारी कार्यविधि तथा नियम</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              नेपालमा सरकारी जग्गा मूल्याङ्कन: निर्धारण प्रक्रिया, सडक वर्गीकरण र कर प्रणाली
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              जग्गाको सरकारी मूल्याङ्कन दरले रजिष्ट्रेसन दस्तुर, पुँजीगत लाभकर (CGT), स्थानीय तहको सम्पत्ति कर र बैंक कर्जाको सीमा प्रत्यक्ष रूपमा निर्धारण गर्दछ।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-2">
              <h3 className="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Landmark className="w-4 h-4 text-emerald-600" />
                <span>१. सडकको चौडाइ अनुसार मूल्याङ्कनका ५ तह</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                जिल्ला मूल्याङ्कन समितिले जग्गालाई सधैं सडकको चौडाइका आधारमा ५ वर्गमा विभाजन गर्छ: १) राष्ट्रिय राजमार्ग/चक्रपथ, २) नगरस्तरीय मुख्य पिच सडक, ३) शाखा पिच तथा ग्राभेल सडक, ४) भित्री कच्ची बाटो, र ५) गोरेटो वा बाटो नभएको खेतीयोग्य जग्गा।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-2">
              <h3 className="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Coins className="w-4 h-4 text-emerald-600" />
                <span>२. बैंक भ्यालुएसनमा सरकारी दरको भार</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                वाणिज्य बैंकहरूले धितो मूल्यांकन गर्दा सरकारी दरलाई ३०% र बजार दरलाई ७०% भार (Weighted Average) दिएर "फेयर मार्केट भ्यालु" (Fair Market Value) निकाल्छन्। त्यसैले सरकारी दर बढ्दा बैंकबाट पाउने ऋण सीमा पनि स्वतः बढ्छ।
              </p>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>मालपोत मूल्याङ्कन सम्बन्धी बारम्बार सोधिने प्रश्नहरू (FAQs)</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <p className="font-extrabold text-slate-900 dark:text-white">
                  प्रश्न: जग्गा किन्दा महिलाको नाममा पास गर्दा कति छुट पाइन्छ?
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  उत्तर: आर्थिक ऐन २०८१/८२ अनुसार महिलाको नाममा जग्गा रजिष्ट्रेसन पास गर्दा महानगरपालिकामा २५%, उपमहानगर र नगरपालिकामा ३५% र गाउँपालिकामा ५०% सम्म रजिष्ट्रेसन दस्तुर छुट पाइन्छ।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <p className="font-extrabold text-slate-900 dark:text-white">
                  प्रश्न: सरकारी मूल्याङ्कन किताब कहाँ हेर्न पाइन्छ?
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  उत्तर: सम्बन्धित जिल्लाको मालपोत कार्यालयको सूचना पाटी वा हाम्रो अनलाइन सर्च इन्जिनबाट जिल्ला र सडक छानी तुरुन्त हेर्न सकिन्छ।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BR Patro Conversion Banner */}
        <PatroAppPromoBanner variant="inline" />

      </main>

      <Footer />
    </div>
  );
}
