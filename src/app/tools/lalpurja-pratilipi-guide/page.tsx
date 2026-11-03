import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LalpurjaPratilipiGuide from '@/components/LalpurjaPratilipiGuide';
import SocialShareBar from '@/components/SocialShareBar';
import { 
  ArrowLeft, 
  FileStack, 
  BookOpen, 
  HelpCircle, 
  ShieldCheck, 
  Building2, 
  Newspaper 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'लालपुर्जा हराएमा वा च्यातिएमा प्रतिलिपि लिने प्रक्रिया तथा पत्रिका सूचना ढाँचा | BR Bhatta',
  description: 'नेपालमा लालपुर्जा हराएमा, चोरी भएमा वा च्यातिएमा मालपोत कार्यालयबाट नयाँ लालपुर्जा (प्रतिलिपि) बनाउने ५ अनिवार्य चरणहरू, राष्ट्रिय पत्रिकामा छाप्ने १५ दिने सूचना र निवेदनको ढाँचा।',
  keywords: [
    'Lalpurja Harayema Pratilipi Nepal',
    'लालपुर्जा हराएमा के गर्ने',
    'Duplicate Land Certificate Malpot Nepal',
    'Lalpurja 15 Days Newspaper Notice Format',
    'Lalpurja Pratilipi Sifaris Police Ward Application',
    'Land Ownership Certificate Lost Duplicate Procedure',
    'Malpot Pratilipi Lalpurja Dastur'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/lalpurja-pratilipi-guide',
  },
  openGraph: {
    title: 'लालपुर्जा हराएमा वा च्यातिएमा प्रतिलिपि लिने प्रक्रिया तथा पत्रिका सूचना ढाँचा | BR Bhatta',
    description: 'लालपुर्जा हराएमा नआत्तिनुहोस्! प्रहरी सिफारिस, वडा मुचुल्का, दैनिक पत्रिकामा १५ दिने हकदाबी सूचना र मालपोतबाट नयाँ लालपुर्जा लिने सम्पूर्ण प्रक्रिया र ढाँचाहरू।',
    url: 'https://www.brbhatta.com/tools/lalpurja-pratilipi-guide',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function LalpurjaPratilipiGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/lalpurja-pratilipi-guide#app',
        name: 'लालपुर्जा प्रतिलिपि प्रक्रिया र पत्रिका सूचना ढाँचा टुल (Lalpurja Pratilipi Guide Nepal)',
        applicationCategory: 'LegalApplication',
        operatingSystem: 'All',
        url: 'https://www.brbhatta.com/tools/lalpurja-pratilipi-guide',
        description: 'Interactive procedure guide, document checklist, and newspaper notice generator for obtaining duplicate land ownership certificates in Nepal.',
      },
      {
        '@type': 'HowTo',
        '@id': 'https://www.brbhatta.com/tools/lalpurja-pratilipi-guide#howto',
        name: 'लालपुर्जा हराएमा नयाँ प्रतिलिपि लालपुर्जा कसरी लिने?',
        description: 'प्रहरी चौकी, वडा कार्यालय, राष्ट्रिय दैनिक पत्रिका र मालपोत कार्यालयबाट नयाँ लालपुर्जा बनाउने ५ चरणहरू।',
        step: [
          {
            '@type': 'HowToStep',
            name: 'प्रहरी कार्यालयमा लालपुर्जा हराएको निवेदन र प्रतिवेदन',
            text: 'नजिकको प्रहरी वृत्तमा जग्गाको कित्ता विवरण सहित निवेदन दिई हराएको प्रहरी प्रतिवेदन लिनुहोस्।',
          },
          {
            '@type': 'HowToStep',
            name: 'सम्बन्धित वडा कार्यालयबाट सिफारिस र कर चुक्ता',
            text: 'जग्गा रहेको वडा कार्यालयमा चालु आर्थिक वर्षको सम्पत्ति कर चुक्ता गरी प्रतिलिपि पुर्जा सिफारिस पत्र लिनुहोस्।',
          },
          {
            '@type': 'HowToStep',
            name: 'मालपोत कार्यालयमा निवेदन दर्ता र श्रेस्ता रुजु',
            text: 'मालपोत कार्यालयमा निवेदन दर्ता गरी मोठ ढड्डा र कम्प्युटर श्रेस्ता (DLIS) मा जग्गा रुजु गराउनुहोस्।',
          },
          {
            '@type': 'HowToStep',
            name: 'दैनिक पत्रिकामा १५ दिने सार्वजनिक हकदाबी सूचना',
            text: 'राष्ट्रिय वा स्थानीय दैनिक पत्रिकामा १५ दिने सार्वजनिक सूचना प्रकाशन गरी पत्रिकाको सक्कल प्रति मालपोतमा पेश गर्नुहोस्।',
          },
          {
            '@type': 'HowToStep',
            name: 'नयाँ लालपुर्जा (प्रतिलिपि) प्राप्त गर्ने',
            text: '१५ दिनभित्र कसैको दाबी विरोध नपरेमा मालपोत अधिकृतको निर्णय अनुसार नयाँ कम्प्युटर लालपुर्जा प्राप्त गर्नुहोस्।',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/lalpurja-pratilipi-guide#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'लालपुर्जा हराएमा अरु कसैले दुरुपयोग वा बिक्री गर्न सक्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'बिल्कुल सक्दैन। नेपालको कानुन अनुसार जग्गा बिक्री वा बैंकमा रोक्का राख्न जग्गाधनी स्वयं सक्कल नागरिकता, बायोमेट्रिक औंठाछाप र डिजिटल फोटो खिचाउन उपस्थित हुनै पर्छ। केवल लालपुर्जा हात पर्दैमा जग्गामा कुनै जोखिम हुँदैन।',
            },
          },
          {
            '@type': 'Question',
            name: 'लालपुर्जा प्रतिलिपि बनाउन कति समय लाग्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'दैनिक पत्रिकामा १५ दिने सूचना अनिवार्य रहने भएकाले प्रहरी र वडा सिफारिस सहित कुल १५ देखि २५ दिनभित्र मालपोत कार्यालयबाट नयाँ लालपुर्जा हात पर्छ।',
            },
          },
          {
            '@type': 'Question',
            name: 'च्यातिएको वा अक्षर नबुझिने लालपुर्जा भए पनि पत्रिकामा सूचना निकाल्नुपर्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'यदि च्यातिएको वा धमिलो भएको पुरानो सक्कल लालपुर्जा तपाईं आफैंसँग छ र मालपोतमा बुझाउन सकिन्छ भने धेरैजसो अवस्थामा प्रहरी प्रतिवेदन र पत्रिकामा सूचना निकाल्नु पर्दैन। पुरानो पुर्जा खिचेर मालपोतले तत्काल नयाँ पुर्जा बनाइदिन्छ।',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'गृहपृष्ठ',
            item: 'https://www.brbhatta.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'टूल्स',
            item: 'https://www.brbhatta.com/tools',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'लालपुर्जा प्रतिलिपि गाइड',
            item: 'https://www.brbhatta.com/tools/lalpurja-pratilipi-guide',
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            सबै टूल्सहरूमा फर्कनुहोस्
          </Link>
          <span className="text-xs text-slate-400">
            अपडेट: वि.सं. २०८१ / मालपोत नियमावली अनुकूल
          </span>
        </div>

        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300">
              <FileStack className="w-3.5 h-3.5" /> लालपुर्जा प्रतिलिपि सेवा
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300">
              पत्रिका सूचना ढाँचा सहित
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            लालपुर्जा हराएमा वा च्यातिएमा प्रतिलिपि लिने प्रक्रिया तथा पत्रिका सूचना ढाँचा
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            जग्गाधनी प्रमाणपुर्जा हराएमा, चोरी भएमा वा च्यातिएमा नयाँ कम्प्युटर लालपुर्जा (प्रतिलिपि) बनाउने ५ अनिवार्य चरणहरू, राष्ट्रिय दैनिक पत्रिकामा छपाउने १५ दिने सूचना र सम्पूर्ण निवेदन ढाँचाहरू।
          </p>
        </div>

        {/* Interactive Guide Component */}
        <LalpurjaPratilipiGuide />

        {/* In-depth Educational Guide */}
        <div className="mt-12 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <BookOpen className="w-6 h-6 text-emerald-600" />
              लालपुर्जा हराउँदा के-के गर्ने? कानुनी व्यवस्था तथा मालपोत प्रक्रिया
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              नेपालको <strong>मालपोत ऐन, २०३४</strong> तथा <strong>मालपोत नियमावली</strong> अनुसार जग्गाधनी प्रमाणपुर्जा हराएमा, नासिएमा वा च्यातिएमा जग्गाधनी स्वयंले निवेदन दिई प्रतिलिपि (Duplicate Certificate) प्राप्त गर्न सक्ने स्पष्ट कानुनी व्यवस्था छ। लालपुर्जा हराउँदैमा जग्गामाथिको तपाईंको स्वामित्व गुम्दैन किनभने जग्गाको मूल श्रेस्ता (ढड्डा तथा DLIS डाटाबेस) मालपोत कार्यालयमा सुरक्षित हुन्छ।
            </p>
          </div>

          {/* 3 Steps Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-sm mb-3">
                १
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1.5 text-base">
                १. प्रहरी तथा वडा सिफारिस
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                पुर्जा हराएको स्थान र मिति खुलाई स्थानीय प्रहरी चौकीबाट प्रतिवेदन र वडा कार्यालयबाट चालु आ.व. को कर चुक्ता सहित प्रतिलिपि सिफारिस पत्र लिनुपर्छ।
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
              <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 flex items-center justify-center font-bold text-sm mb-3">
                २
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1.5 text-base">
                २. पत्रिकामा १५ दिने सूचना
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                मालपोत कार्यालयको अनुमति लिई राष्ट्रिय वा स्थानीय दैनिक पत्रिकामा १५ दिने हकदाबी सूचना अनिवार्य छपाउनुपर्छ र पत्रिकाको सक्कल प्रति मालपोतमा बुझाउनुपर्छ।
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold text-sm mb-3">
                ३
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1.5 text-base">
                ३. नयाँ कम्प्युटर पुर्जा
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                १५ दिनभित्र कसैको दाबी विरोध नपरेमा मालपोत अधिकृतको निर्णय अनुसार श्रेस्ता अद्यावधिक गरी &apos;प्रतिलिपि&apos; छाप सहित नयाँ कम्प्युटर लालपुर्जा जारी हुन्छ।
              </p>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-emerald-600" />
              लालपुर्जा प्रतिलिपि सम्बन्धी बारम्बार सोधिने प्रश्नहरू (FAQs)
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  नयाँ लालपुर्जा बनेपछि पुरानो भेटिएमा कुन चल्छ?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  नयाँ प्रतिलिपि लालपुर्जा बनेपछि पुरानो हराएको लालपुर्जाको कानुनी हैसियत स्वतः समाप्त र रद्द हुन्छ। यदि पछि पुरानो पुर्जा भेटिएमा पनि मालपोत कार्यालयमा बुझाई रद्द गराउनुपर्छ। कारोबारमा नयाँ प्रतिलिपि पुर्जा मात्र मान्य हुन्छ।
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  पत्रिकामा सूचना निकाल्न कति खर्च लाग्छ?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  राष्ट्रिय वा स्थानीय दैनिक पत्रिकाको दर अनुसार सूचना छपाउन सामान्यतया रु १,५०० देखि रु ३,५०० सम्म लाग्दछ। सूचना प्रकाशित भएको दिनको सक्कल पत्रिका किनेर मालपोत कार्यालयको फाइलमा पेश गर्नुपर्छ।
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  के जग्गाधनी बाहेक अन्य हकवालाले प्रतिलिपि माग्न पाउँछन्?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  जीवित जग्गाधनी भएको अवस्थामा जग्गाधनी स्वयं वा निजको अधिकृत वारिसनामा पाएको व्यक्तिले मात्र प्रतिलिपि लिन सक्छ। यदि जग्गाधनीको मृत्यु भइसकेको छ भने हकवालाहरूले मृत्यु दर्ता र नाता प्रमाणित पेश गरी सिधै नामसारी (दाखिल खारेज) प्रक्रियाबाट नयाँ लालपुर्जा बनाउन सक्छन्।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="mt-8">
          <SocialShareBar
            url="https://www.brbhatta.com/tools/lalpurja-pratilipi-guide"
            title="लालपुर्जा हराएमा वा च्यातिएमा प्रतिलिपि लिने प्रक्रिया तथा पत्रिका सूचना ढाँचा - BR Bhatta"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
