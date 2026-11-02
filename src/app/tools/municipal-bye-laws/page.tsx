import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MunicipalByeLawsHub from '@/components/MunicipalByeLawsHub';
import SocialShareBar from '@/components/SocialShareBar';
import { 
  ArrowLeft, 
  Building2, 
  BookOpen, 
  HelpCircle, 
  ShieldCheck, 
  Ruler, 
  MapPin, 
  Table 
} from 'lucide-react';
import { MUNICIPALITIES_BYELAWS } from '@/data/municipalitiesData';

export const metadata: Metadata = {
  title: 'नेपालका प्रमुख १० सहर "घरबाटो, नक्सा पास र बाइ-लज हब" (Municipal Bye-Laws Nepal) | BR Bhatta',
  description: 'काठमाडौँ, पोखरा, ललितपुर, भरतपुर, बुटवल, वीरगञ्ज लगायत नेपालका १० प्रमुख पालिकाहरूको नक्सा पास मापदण्ड, अनिवार्य सडक चौडाइ, सेतब्याक (Setback), ग्राउन्ड कभरेज, FAR र घरबाटो सिफारिस दस्तुर।',
  keywords: [
    'Municipal Building Bye-Laws Nepal',
    'काठमाडौँ नक्सा पास नियम',
    'पोखरा महानगरपालिका सेतब्याक मापदण्ड',
    'ललितपुर घर निर्माण मापदण्ड',
    'भरतपुर घरबाटो सिफारिस दस्तुर',
    'बुटवल नक्सा पास नियम २०८१',
    'Building Setback Criteria Nepal',
    'E-BPS Online Naksa Pass Portal'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/municipal-bye-laws',
  },
  openGraph: {
    title: 'नेपालका प्रमुख १० सहर "घरबाटो, नक्सा पास र बाइ-लज हब" | BR Bhatta',
    description: 'काठमाडौँ, पोखरा, ललितपुर, भरतपुर, बुटवल लगायत प्रमुख सहरहरूको नक्सा पास सेतब्याक, बाटोको अधिकार र घरबाटो दस्तुर।',
    url: 'https://www.brbhatta.com/tools/municipal-bye-laws',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function MunicipalByeLawsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/municipal-bye-laws#app',
        name: 'नेपाल १० प्रमुख सहर नक्सा पास तथा बाइ-लज हब',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        url: 'https://www.brbhatta.com/tools/municipal-bye-laws',
        description: 'Comprehensive building permit bye-laws, road setback criteria, ground coverage, and ghar-bato fees across 10 major municipalities in Nepal.',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/municipal-bye-laws#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'नेपालका सहरहरूमा आवासीय घरको नक्सा पास गर्न न्यूनतम बाटो कति चाहिन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'बस्ती विकास तथा भवन निर्माण सम्बन्धी आधारभूत मापदण्ड २०७२ (संशोधन २०८१) अनुसार काठमाडौँ उपत्यका तथा पहाडी सहरहरूमा न्यूनतम ६ मिटर (करिब २० फिट) र तराईका सहरहरू (जस्तै भरतपुर, बुटवल, वीरगञ्ज, विराटनगर) मा न्यूनतम ८ मिटर (करिब २६ फिट) बाटो हुनु अनिवार्य छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'घर बनाउँदा छिमेकीको साँधतर्फ झ्याल राख्न कति सेतब्याक छोड्नुपर्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'मुलुकी देवानी संहिता २०७४ र राष्ट्रिय भवन संहिता अनुसार छिमेकीको जग्गा तर्फ झ्याल, भेन्टिलेटर वा बाल्कोनी निकाल्दा साँध-सिमानाबाट कम्तीमा १.५ मिटर (५ फिट) खाली ठाउँ (Side Setback) छोड्नु अनिवार्य छ। डेड-वाल (झ्याल नभएको भित्ता) को हकमा सामान्यतया ०.९ मिटर (३ फिट) सम्म अनुमति पाइन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'ग्राउन्ड कभरेज (Ground Coverage) र FAR भन्नाले के बुझिन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ग्राउन्ड कभरेज भन्नाले आफ्नो कुल जग्गाको कति प्रतिशत क्षेत्रफलमा घरको भुइँतला (Plinth Area) ओगट्न पाइन्छ भन्ने सीमा हो (सामान्यतया ६०% देखि ७०%)। FAR (Floor Area Ratio) भन्नाले सबै तलाको कुल निर्माण क्षेत्रफल र जग्गाको कुल क्षेत्रफलको अनुपात हो, जसले घर कति अग्लो बनाउन पाइन्छ भन्ने सीमा तोक्छ।'
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
          <span className="text-slate-800 dark:text-slate-200">१० प्रमुख सहर बाइ-लज हब</span>
        </div>

        {/* Interactive Hub Component */}
        <MunicipalByeLawsHub />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="नेपालका प्रमुख १० सहर घरबाटो, नक्सा पास र बाइ-लज हब (Setback & Bye-Laws)" 
          url="/tools/municipal-bye-laws" 
        />

        {/* Static In-depth Guide Section */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 text-xs font-bold border border-blue-200 dark:border-blue-800">
              <BookOpen className="w-3.5 h-3.5" />
              <span>सहरी विकास मन्त्रालय तथा स्थानीय सरकार सञ्चालन ऐन</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              नेपालमा भवन निर्माण बाइ-लज (Municipal Bye-Laws): नियम, सेतब्याक र प्रक्रिया
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              सहरी क्षेत्रको तीव्र अव्यवस्थित विस्तार रोक्न र भूकम्पीय जोखिम न्यून गर्न प्रत्येक स्थानीय तहले बस्ती विकास तथा भवन निर्माण मापदण्ड कार्यान्वयन गरेका छन्।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-2">
              <h3 className="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Ruler className="w-4 h-4 text-blue-600" />
                <span>१. सडकको अधिकार (Right of Way - ROW) र सेतब्याक</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                सडक छेउमा घर बनाउँदा सडक केन्द्र रेखा (Centerline) बाट आधा सडक चौडाइ बाटोको अधिकार (ROW) छोडेर त्यसपछि थप १.५ देखि ३ मिटर अगाडिको सेतब्याक (Front Setback) छोड्नुपर्दछ। यो ठाउँमा कुनै पक्की संरचना बनाउन पाइँदैन।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-2">
              <h3 className="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>२. अनलाइन नक्सा पास प्रणाली (E-BPS System)</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                काठमाडौँ, पोखरा, ललितपुर, भरतपुर लगायतका अधिकांश पालिकाहरूमा अब घरको नक्सा पास भौतिक रूपमा कागजात बोकेर धाउनु पर्दैन। दर्तावाला इन्जिनियरले नगरपालिकाको E-BPS सफ्टवेयरमा डिजिटल आर्किटेक्चरल र स्ट्रक्चरल ड्रइङ अपलोड गरी घरमै बसेर नक्सा पास गराउन सक्छन्।
              </p>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>बाइ-लज सम्बन्धी बारम्बार सोधिने प्रश्नहरू (FAQs)</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <p className="font-extrabold text-slate-900 dark:text-white">
                  प्रश्न: सेतब्याक नछोडी घर बनाएमा के हुन्छ?
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  उत्तर: स्थानीय सरकार सञ्चालन ऐन २०७४ अनुसार स्वीकृत नक्सा भन्दा बढी वा सेतब्याक मिचेर घर बनाएमा नगरपालिकाले निर्माण सम्पन्न प्रमाणपत्र (Completion Certificate) दिँदैन, जरिवाना तिराउन सक्छ वा अनधिकृत भाग भत्काउन आदेश दिन सक्छ।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <p className="font-extrabold text-slate-900 dark:text-white">
                  प्रश्न: घरबाटो सिफारिस लिन कति समय लाग्छ?
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  उत्तर: वडा कार्यालयमा आवश्यक कागजात (लालपुर्जा, तिरो रसिद, चारकिल्ला) पेश गरेपछि वडाका प्राविधिकले फिल्ड नापजाँच गरी सामान्यतया १ देखि २ कार्यदिनभित्र घरबाटो सिफारिस पत्र जारी गर्दछन्।
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
