import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JaggaPassChecklist from '@/components/JaggaPassChecklist';
import SocialShareBar from '@/components/SocialShareBar';
import { 
  ArrowLeft, 
  FileCheck2, 
  BookOpen, 
  HelpCircle, 
  ShieldCheck, 
  Building2, 
  Scale, 
  Calendar 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'जग्गा पास सम्पूर्ण आवश्यक कागजात चेकलिस्ट तथा तयारी टुल | Jagga Pass Documents Nepal',
  description: 'नेपालमा जग्गा खरिद-बिक्री (राजीनामा), नामसारी, बकसपत्र वा अंशबण्डा गर्दा वडा कार्यालय, नापी र मालपोतमा चाहिने सम्पूर्ण आधिकारिक कागजातहरूको इन्टरएक्टिभ चेकलिस्ट र चरणबद्ध प्रक्रिया।',
  keywords: [
    'Jagga Pass Documents Checklist Nepal',
    'जग्गा पास गर्न चाहिने कागजातहरू',
    'Malpot Jagga Registration Process Nepal',
    'Char Killa Sifaris Napi Trace Blueprint',
    'Rajinama Likhat Pass Malpot Procedure',
    'Ward Sifaris Napi Naksa Kar Chukta',
    'Nepal Land Revenue Office Process'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/jagga-pass-checklist',
  },
  openGraph: {
    title: 'जग्गा पास सम्पूर्ण आवश्यक कागजात चेकलिस्ट तथा तयारी टुल | BR Bhatta',
    description: 'नेपालमा जग्गा पास (राजीनामा, नामसारी, बकसपत्र) गर्दा वडा, नापी र मालपोतमा चाहिने आधिकारिक कागजातहरूको अनुकूलित चेकलिस्ट र चरणबद्ध गाइड।',
    url: 'https://www.brbhatta.com/tools/jagga-pass-checklist',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function JaggaPassChecklistPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/jagga-pass-checklist#app',
        name: 'जग्गा पास आवश्यक कागजात चेकलिस्ट तथा तयारी टुल (Jagga Pass Checklist Nepal)',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'All',
        url: 'https://www.brbhatta.com/tools/jagga-pass-checklist',
        description: 'Interactive checklist and procedural guide for land transfer and registration at Land Revenue Offices (Malpot) in Nepal.',
      },
      {
        '@type': 'HowTo',
        '@id': 'https://www.brbhatta.com/tools/jagga-pass-checklist#howto',
        name: 'नेपालमा जग्गा पास (राजीनामा लिखत पारित) कसरी गर्ने?',
        description: 'स्थानीय वडा कार्यालय, नापी कार्यालय र मालपोत कार्यालयबाट जग्गा खरिद-बिक्री सम्पन्न गर्ने आधिकारिक ५ चरणहरू।',
        step: [
          {
            '@type': 'HowToStep',
            name: 'वडा कार्यालयबाट कर चुक्ता र चार किल्ला सिफारिस',
            text: 'स्थानीय वडामा चालु आ.व. सम्मको मालपोत तथा सम्पत्ति कर चुक्ता गरी ३५ दिनको म्याद भएको चार किल्ला प्रमाणित सिफारिस पत्र लिनुहोस्।',
          },
          {
            '@type': 'HowToStep',
            name: 'नापी कार्यालयबाट प्रमाणित कित्ता नक्सा (ट्रेस)',
            text: 'सम्बन्धित नापी शाखामा गई जग्गाको प्रमाणित कित्ता नक्सा (ब्लुप्रिन्ट/ट्रेस) र फिल्डबुक उतार प्राप्त गर्नुहोस्।',
          },
          {
            '@type': 'HowToStep',
            name: 'लिखत फारम तयारी तथा सहीछाप',
            text: 'लेखापढी व्यवसायीबाट सरकारी ढाँचाको राजीनामा लिखत फारम तयार गरी क्रेता र विक्रेता दुवै पक्षले सहीछाप गर्नुहोस्।',
          },
          {
            '@type': 'HowToStep',
            name: 'मालपोत कार्यालयमा टोकन, बायोमेट्रिक र राजस्व दाखिला',
            text: 'मालपोत कार्यालयमा कागजात दर्ता गरी औंठाछाप, डिजिटल तस्बिर खिचाउनुहोस् र तोकिएको रजिष्ट्रेशन दस्तुर बैंकमा तिर्नुहोस्।',
          },
          {
            '@type': 'HowToStep',
            name: 'मालपोत अधिकृतबाट लिखत पारित र लालपुर्जा बुझ्ने',
            text: 'अधिकृतको रोहवरमा सनाखत गरी हस्ताक्षर गर्नुहोस् र नयाँ कम्प्युटर लालपुर्जा बुझ्नुहोस्।',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/jagga-pass-checklist#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'जग्गा पास गर्दा चार किल्ला सिफारिसको म्याद कति दिन हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'स्थानीय वडा कार्यालयबाट जारी भएको चार किल्ला प्रमाणित सिफारिस पत्रको कानुनी म्याद जारी भएको मितिले ३५ (पैंतीस) दिनको हुन्छ। ३५ दिन नाघेपछि मालपोत कार्यालयले उक्त सिफारिस मान्यता दिँदैन र पुनः नयाँ सिफारिस लिनुपर्छ।',
            },
          },
          {
            '@type': 'Question',
            name: 'घर भएको जग्गा पास गर्दा के-के थप कागजात चाहिन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'जग्गामा घर वा पक्की भवन बनेको भए नगरपालिकाबाट स्वीकृत भएको घर नक्सा पास प्रमाणपत्र (Building Permit) र भवन निर्माण सम्पन्न प्रमाणपत्र (Completion Certificate) अनिवार्य पेश गर्नुपर्छ।',
            },
          },
          {
            '@type': 'Question',
            name: 'जग्गाधनी आफैं मालपोत उपस्थित हुन नसके के गर्ने?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'जग्गाधनी आफैं उपस्थित हुन नसक्ने अवस्थामा नेपालभित्र भए जिल्ला अदालतबाट प्रमाणित अधिकृत वारिसनामा (Power of Attorney) वा विदेशमा भए सम्बन्धित देशस्थित नेपाली राजदूतावास (Embassy) बाट प्रमाणित कन्सुलर वारिसनामा गराई प्रतिनिधिमार्फत पास गर्न सकिन्छ।',
            },
          },
          {
            '@type': 'Question',
            name: 'जग्गा पास गर्दा रजिष्ट्रेशन दस्तुर कति लाग्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'रजिष्ट्रेशन दस्तुर जग्गाको मालपोत सरकारी न्यूनतम मूल्यांकन वा थैली अंक (लेनदेन रकम) मध्ये जुन बढी हुन्छ, त्यसको आधारमा लाग्छ। महानगरपालिकामा सामान्यतया ४.५% देखि ५%, नगरपालिकामा ४% देखि ४.५% र गाउँपालिकामा २% देखि ३% सम्म लाग्छ। महिला वा ज्येष्ठ नागरिकको नाममा पास गर्दा २५% देखि ५०% सम्म राजस्व छुट पाइन्छ।',
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
            name: 'जग्गा पास चेकलिस्ट',
            item: 'https://www.brbhatta.com/tools/jagga-pass-checklist',
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
            अपडेट: वि.सं. २०८१ / आर्थिक वर्ष २०८१/८२
          </span>
        </div>

        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300">
              <FileCheck2 className="w-3.5 h-3.5" /> मालपोत तयारी टुल
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300">
              १००% निःशुल्क र आधिकारिक
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            जग्गा पास सम्पूर्ण आवश्यक कागजात चेकलिस्ट
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            नेपालमा जग्गा खरिद-बिक्री, नामसारी वा बकसपत्र गर्दा चाहिने वडा कार्यालय, नापी र मालपोतका सम्पूर्ण कागजातहरूको अन्तरक्रियात्मक जाँच गर्नुहोस् र मालपोत जानुअघि ढुक्क हुनुहोस्।
          </p>
        </div>

        {/* Interactive Checklist Component */}
        <JaggaPassChecklist />

        {/* In-depth Educational Guide */}
        <div className="mt-12 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <BookOpen className="w-6 h-6 text-emerald-600" />
              नेपालमा जग्गा पास सम्बन्धी कानुनी जानकारी तथा मालपोत प्रक्रिया
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              नेपालको <strong>मुलुकी देवानी संहिता, २०७४</strong> र <strong>मालपोत ऐन, २०३४</strong> अनुसार कुनै पनि अचल सम्पत्ति (घर वा जग्गा) को स्वामित्व हस्तान्तरण गर्न सम्बन्धित जिल्लाको भूमिसुधार तथा मालपोत कार्यालयमा आधिकारिक लिखत पारित (Registration) गराउनु कानुनी रूपमा अनिवार्य छ। सामान्य तमसुक वा बैनाबट्टाको कागजले स्वामित्व हस्तान्तरण हुँदैन।
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold mb-3">
                १
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1.5 text-base">
                १. स्थानीय वडा कार्यालय
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                जग्गाको स्थानीय सम्पत्ति कर चुक्ता, चार किल्ला प्रमाणीकरण, बाटोको चौडाइ प्रमाणित र घर भए सम्पन्नता प्रमाणपत्र वडाबाट लिइन्छ।
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
              <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold mb-3">
                २
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1.5 text-base">
                २. नापी कार्यालय (शाखा)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                कित्ताको आधिकारिक आकार, साँध-सिमाना र बाटोको रेखांकन खुल्ने प्रमाणित नक्सा ट्रेस (ब्लुप्रिन्ट) र फिल्डबुक उतार नापीबाट लिनुपर्छ।
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
              <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold mb-3">
                ३
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1.5 text-base">
                ३. मालपोत कार्यालय
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                मोठ श्रेस्ता रुजु, रोक्का जाँच, बायोमेट्रिक औंठाछाप, डिजिटल फोटो, रजिष्ट्रेशन राजस्व दाखिला र अधिकृतबाट लिखत पारित गरी लालपुर्जा प्रदान गरिन्छ।
              </p>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-emerald-600" />
              जग्गा पास सम्बन्धी बारम्बार सोधिने प्रश्नहरू (FAQs)
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  चार किल्ला सिफारिस पत्रको म्याद कति दिन हुन्छ?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  स्थानीय वडा कार्यालयबाट जारी भएको चार किल्ला प्रमाणित सिफारिस पत्रको आधिकारिक म्याद जारी भएको मितिले ३५ (पैंतीस) दिनको हुन्छ। ३५ दिन नाघेपछि मालपोत कार्यालयले उक्त सिफारिस मान्यता दिँदैन र पुनः नयाँ सिफारिस लिनुपर्छ।
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  महिलाको नाममा जग्गा पास गर्दा राजस्व छुट कति पाइन्छ?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  महिलाको नाममा जग्गा लिखत पारित गर्दा महानगरपालिका र उपमहानगरपालिकामा २५% तथा अन्य नगरपालिका र गाउँपालिकामा ३५% देखि ५०% सम्म रजिष्ट्रेशन दस्तुर छुट पाइने व्यवस्था प्रदेश आर्थिक ऐनहरूमा गरिएको छ।
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  जग्गा पास गर्दा पुँजीगत लाभकर (CGT) कसले तिर्नुपर्छ?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  पुँजीगत लाभकर (Capital Gains Tax - CGT) विक्रेता (जग्गा बेच्ने व्यक्ति) ले तिर्नुपर्ने कर हो। जग्गा किनेको ५ वर्षभित्र बेचेमा लाभको ७.५% र ५ वर्षभन्दा बढी स्वामित्व रहेर बेचेमा लाभको ५% का दरले मालपोत कार्यालयमै राजस्व बुझाउनुपर्छ।
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  नापी नक्सामा बाटो नभएमा के जग्गा पास हुन्छ?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  नापी नक्सामा बाटो नदेखिए पनि फिल्डमा बाटो चलेको अवस्थामा स्थानीय वडा कार्यालयले स्थलगत सर्जमिन गरी बाटोको चौडाइ प्रमाणित गरेको सिफारिस दिएमा मालपोतबाट पास गर्न सकिन्छ। तर बाटोको कुनै निकास नभएको (ल्याण्डलक) जग्गा भने कित्ताकाट वा पास गर्न कानुनी जटिलता आउँछ।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Share Bar */}
        <div className="mt-8">
          <SocialShareBar
            url="https://www.brbhatta.com/tools/jagga-pass-checklist"
            title="जग्गा पास आवश्यक कागजात चेकलिस्ट तथा तयारी टुल - BR Bhatta"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
