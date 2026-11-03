import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JaggaRokkaPhukuwa from '@/components/JaggaRokkaPhukuwa';
import SocialShareBar from '@/components/SocialShareBar';
import { 
  ArrowLeft, 
  Landmark, 
  BookOpen, 
  HelpCircle, 
  ShieldCheck, 
  Building2, 
  Scale 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'जग्गा रोक्का तथा फुकुवा (Rokka & Phukuwa) सम्पूर्ण गाइड तथा निवेदन ढाँचा | BR Bhatta',
  description: 'नेपालमा बैंक, वित्तीय संस्था वा सहकारीको कर्जा चुक्तापछि मालपोत कार्यालयबाट जग्गा फुकुवा गर्ने ५ चरणबद्ध प्रक्रिया, चाहिने कागजात र आधिकारिक फुकुवा निवेदन ढाँचा।',
  keywords: [
    'Jagga Rokka Phukuwa Process Nepal',
    'जग्गा रोक्का फुकुवा गर्ने प्रक्रिया',
    'Bank Mortgage Release Malpot Nepal',
    'Rokka Phukuwa Nibedan Dhacha Format',
    'Bank NOC Loan Clearance Lalpurja Release',
    'Malpot Rokka Phukuwa Dastur',
    'Cooperative Court Jagga Rokka Release'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/jagga-rokka-phukuwa',
  },
  openGraph: {
    title: 'जग्गा रोक्का तथा फुकुवा (Rokka & Phukuwa) सम्पूर्ण गाइड तथा निवेदन ढाँचा | BR Bhatta',
    description: 'बैंकको ऋण चुक्ता गरेपछि मालपोतबाट लालपुर्जा फुकुवा गर्ने चरणबद्ध तरिका, बैंकको फुकुवा पत्र र मालपोतमा दिने आधिकारिक निवेदन ढाँचा।',
    url: 'https://www.brbhatta.com/tools/jagga-rokka-phukuwa',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function JaggaRokkaPhukuwaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/jagga-rokka-phukuwa#app',
        name: 'जग्गा रोक्का तथा फुकुवा गाइड र निवेदन ढाँचा (Jagga Rokka Phukuwa Guide Nepal)',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'All',
        url: 'https://www.brbhatta.com/tools/jagga-rokka-phukuwa',
        description: 'Interactive procedure guide and downloadable application formats for releasing bank mortgage and court property freeze at Land Revenue Offices in Nepal.',
      },
      {
        '@type': 'HowTo',
        '@id': 'https://www.brbhatta.com/tools/jagga-rokka-phukuwa#howto',
        name: 'ऋण चुक्तापछि जग्गा रोक्का फुकुवा कसरी गर्ने?',
        description: 'बैंक वा वित्तीय संस्थाको कर्जा चुक्तापछि मालपोत कार्यालयबाट जग्गा फुकुवा गर्ने ५ चरणहरू।',
        step: [
          {
            '@type': 'HowToStep',
            name: 'बैंक कर्जाको सम्पूर्ण हिसाब चुक्ता गर्ने',
            text: 'सम्बन्धित बैंक वा वित्तीय संस्थामा सम्पूर्ण सावाँ, ब्याज र सेवा शुल्क चुक्ता गरी हिसाब शून्य बनाउनुहोस्।',
          },
          {
            '@type': 'HowToStep',
            name: 'बैंकबाट ऋण चुक्ता पत्र (NOC) र फुकुवा पत्र लिने',
            text: 'बैंकबाट ऋण चुक्ता प्रमाणपत्र (NOC), मालपोत कार्यालयलाई सम्बोधन गरिएको आधिकारिक फुकुवा पत्र र सक्कल लालपुर्जा बुझिलिनुहोस्।',
          },
          {
            '@type': 'HowToStep',
            name: 'मालपोत कार्यालयमा निवेदन दर्ता गर्ने',
            text: 'बैंकको पत्र, नागरिकता र लालपुर्जा संलग्न राखी मालपोतको दर्ता फाँटमा फुकुवा निवेदन दर्ता गर्नुहोस्।',
          },
          {
            '@type': 'HowToStep',
            name: 'मोठ तथा कम्प्युटर श्रेस्ता (DLIS) बाट रोक्का कट्टा',
            text: 'मालपोतको मोठ तथा रोक्का फाँटले सरकारी सफ्टवेयर (DLIS) र ढड्डाबाट रोक्का हटाउँछ।',
          },
          {
            '@type': 'HowToStep',
            name: 'लालपुर्जामा फुकुवाको छाप र पुर्जा फिर्ता',
            text: 'लालपुर्जामा फुकुवा प्रमाणित रातो छाप र अधिकृतको हस्ताक्षर गराई लालपुर्जा फिर्ता बुझ्नुहोस्।',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/jagga-rokka-phukuwa#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'ऋण चुक्ता गरेपछि जग्गा फुकुवा हुन कति समय लाग्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'बैंकबाट आधिकारिक फुकुवा पत्र र लालपुर्जा हात परिसकेपछि मालपोत कार्यालयमा निवेदन पेश गरेको सोही दिन (१ कार्यदिनभित्र) वा बढीमा २ दिनभित्र रोक्का फुकुवा कार्य सम्पन्न हुन्छ।',
            },
          },
          {
            '@type': 'Question',
            name: 'मालपोतमा जग्गा फुकुवा गर्दा कति सरकारी दस्तुर लाग्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'जग्गा फुकुवा गर्दा मालपोत कार्यालयमा सामान्य प्रशासनिक दस्तुर (प्रायः रु ५० देखि रु २५० सम्म) मात्र लाग्छ। कुनै ठूलो रजिष्ट्रेशन राजस्व लाग्दैन।',
            },
          },
          {
            '@type': 'Question',
            name: 'के बैंकको फुकुवा पत्र आएपछि मालपोत नगई जग्गा बेच्न मिल्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'बिल्कुल मिल्दैन। बैंकले पत्र दिँदैमा मालपोतको सरकारी श्रेस्तामा रोक्का हट्दैन। जबसम्म मालपोत कार्यालयको मोठ र कम्प्युटर प्रणाली (DLIS) मा फुकुवा दर्ता हुँदैन, तबसम्म जग्गा बिक्री वा कित्ताकाट गर्न सकिँदैन।',
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
            name: 'जग्गा रोक्का तथा फुकुवा',
            item: 'https://www.brbhatta.com/tools/jagga-rokka-phukuwa',
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
            अपडेट: वि.सं. २०८१ / मालपोत ऐन तथा BAFIA अनुकूल
          </span>
        </div>

        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300">
              <Landmark className="w-3.5 h-3.5" /> बैंकिङ तथा मालपोत प्रक्रिया
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300">
              तयारी निवेदन ढाँचा सहित
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            जग्गा रोक्का तथा फुकुवा (Rokka & Phukuwa) सम्पूर्ण गाइड तथा निवेदन ढाँचा
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            बैंक, सहकारी वा अदालतमा धितो रोक्का रहेको जग्गा ऋण चुक्तापछि मालपोतबाट कसरी फुकुवा गर्ने? सम्पूर्ण ५ चरणहरू, आवश्यक कागजात र आधिकारिक निवेदन ढाँचा।
          </p>
        </div>

        {/* Interactive Component */}
        <JaggaRokkaPhukuwa />

        {/* In-depth Educational Guide */}
        <div className="mt-12 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <BookOpen className="w-6 h-6 text-emerald-600" />
              जग्गा रोक्का तथा फुकुवा सम्बन्धी कानुनी जानकारी
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              नेपालको <strong>मालपोत ऐन, २०३४</strong> तथा <strong>बैंक तथा वित्तीय संस्था सम्बन्धी ऐन (बाफिया), २०७३</strong> अनुसार कुनै पनि व्यक्तिले घर वा जग्गा धितो राखी बैंकबाट कर्जा लिँदा उक्त जग्गाको मोठ श्रेस्तामा बैंकको नाममा <strong>&apos;धितो रोक्का&apos; (Mortgage Freeze)</strong> जनाइन्छ। रोक्का रहेको अवस्थामा जग्गाधनीले उक्त जग्गा अन्य कसैलाई बिक्री, दान, बकस वा कित्ताकाट गर्न पाउँदैन।
            </p>
          </div>

          {/* 2 Column Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                🏦 धितो रोक्का (Mortgage) कसरी हुन्छ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                ऋणीले बैंकबाट कर्जा स्वीकृत गराएपछि बैंकको आधिकारिक पत्र, कर्जा तमसुक, र सक्कल लालपुर्जा मालपोतको रोक्का फाँटमा पेश गरिन्छ। मालपोतले कम्प्युटर श्रेस्ता (DLIS) र ढड्डामा रोक्का जनाई लालपुर्जामा रोक्का छाप लगाएर बैंकलाई जिम्मा दिन्छ।
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                🔓 फुकुवा (Mortgage Release) कसरी हुन्छ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                कर्जा पूर्ण चुक्ता भएपछि बैंकले मालपोत कार्यालयलाई रोक्का फुकुवा गरिदिन आधिकारिक पत्र लेख्छ। उक्त पत्र दर्ता भएपछि मालपोतले कम्प्युटर श्रेस्ताबाट बैंकको नाम कट्टा गर्छ र लालपुर्जामा फुकुवाको छाप लगाएर जग्गाधनीलाई फिर्ता गर्छ।
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-emerald-600" />
              रोक्का तथा फुकुवा सम्बन्धी बारम्बार सोधिने प्रश्नहरू (FAQs)
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  के रोक्का रहेको जग्गाको केही कित्ता मात्र आंशिक फुकुवा गर्न मिल्छ?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  मिल्छ। यदि तपाईंले धेरै कित्ता वा ठूलो क्षेत्रफल धितो राख्नुभएको छ र ऋणको केही हिस्सा चुक्ता गरिसक्नुभएको छ भने बैंकको मूल्याङ्कन र सहमति अनुसार बैंकले तोकिएको कित्ता मात्र आंशिक फुकुवा (Partial Release) को पत्र मालपोतलाई पठाउन सक्छ।
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  बैंक वा सहकारी संस्था समस्याग्रस्त भएमा कसरी फुकुवा गर्ने?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  यदि सम्बन्धित संस्था खारेज वा समस्याग्रस्त भएको छ भने नेपाल राष्ट्र बैंक वा भूमि व्यवस्था, सहकारी तथा गरिबी निवारण मन्त्रालय अन्तर्गतको समस्याग्रस्त सहकारी व्यवस्थापन समितिमा निवेदन दिई चुक्ता प्रमाणित गराएर फुकुवा सिफारिस लिनुपर्छ।
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  के रोक्का फुकुवा नगरी जग्गा कित्ताकाट गर्न सकिन्छ?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  सकिँदैन। प्रचलित नापी तथा मालपोत नियमावली अनुसार कुनै पनि संस्था वा निकायको रोक्का कायम रहेको कित्तालाई फुकुवा वा उक्त संस्थाको लिखित पूर्वस्वीकृति बेगर कित्ताकाट गर्न पाइँदैन।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="mt-8">
          <SocialShareBar
            url="https://www.brbhatta.com/tools/jagga-rokka-phukuwa"
            title="जग्गा रोक्का तथा फुकुवा सम्पूर्ण गाइड तथा ढाँचा - BR Bhatta"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
