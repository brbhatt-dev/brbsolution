import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JaggaNamsariGuide from '@/components/JaggaNamsariGuide';
import SocialShareBar from '@/components/SocialShareBar';
import { 
  ArrowLeft, 
  Users, 
  BookOpen, 
  HelpCircle, 
  ShieldCheck, 
  Building2, 
  Scale 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'मृत्युपश्चात जग्गा नामसारी (दाखिल खारेज) सम्पूर्ण गाइड तथा निवेदन ढाँचा | BR Bhatta',
  description: 'नेपालमा मृत्युपश्चात जग्गा नामसारी (दाखिल खारेज) गर्ने सम्पूर्ण प्रक्रिया, चाहिने कागजात चेकलिस्ट (नाता प्रमाणित, सर्जमिन मुचुल्का) र मालपोत/वडामा दिइने तयारी निवेदन ढाँचा।',
  keywords: [
    'Jagga Namsari Nepal Process',
    'मृत्युपश्चात जग्गा नामसारी प्रक्रिया',
    'Dakhil Kharij Malpot Nepal Application Format',
    'Namsari Nibedan Dhacha Word PDF',
    'Nata Pramanit Sarjamin Muchulka Ward Sifaris',
    'Aputali Succession Law Nepal Muluki Samhita',
    'Jagga Namsari Required Documents Nepal'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/jagga-namsari-guide',
  },
  openGraph: {
    title: 'मृत्युपश्चात जग्गा नामसारी (दाखिल खारेज) सम्पूर्ण गाइड तथा निवेदन ढाँचा | BR Bhatta',
    description: 'बाबु/आमा वा पति/पत्नी बितेपछि उहाँको नामको जग्गा हकवालाको नाममा नामसारी गर्ने वडा, नापी र मालपोतको सम्पूर्ण प्रक्रिया र डाउनलोड गर्न मिल्ने निवेदन ढाँचाहरू।',
    url: 'https://www.brbhatta.com/tools/jagga-namsari-guide',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function JaggaNamsariGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/jagga-namsari-guide#app',
        name: 'जग्गा नामसारी तथा दाखिला खारेज सम्पूर्ण गाइड र ढाँचा (Jagga Namsari Guide Nepal)',
        applicationCategory: 'LegalApplication',
        operatingSystem: 'All',
        url: 'https://www.brbhatta.com/tools/jagga-namsari-guide',
        description: 'Comprehensive legal guide, document checker, and downloadable application templates for property inheritance transfer (Dakhil Kharij) in Nepal.',
      },
      {
        '@type': 'HowTo',
        '@id': 'https://www.brbhatta.com/tools/jagga-namsari-guide#howto',
        name: 'मृत्युपश्चात जग्गा नामसारी (दाखिल खारेज) कसरी गर्ने?',
        description: 'नेपालमा जग्गाधनीको मृत्युपश्चात हकवालाहरूको नाममा जग्गा नामसारी गर्ने ४ चरणहरू।',
        step: [
          {
            '@type': 'HowToStep',
            name: 'वडा कार्यालयबाट नाता प्रमाणित र सर्जमिन मुचुल्का',
            text: 'स्थानीय वडामा मृत्यु दर्ता, नाता प्रमाणित प्रमाणपत्र, सँधियार रोहवरको सर्जमिन मुचुल्का र सम्पत्ति कर चुक्ता रसिद लिनुहोस्।',
          },
          {
            '@type': 'HowToStep',
            name: 'नापी शाखाबाट नक्सा ट्रेस प्रमाणीकरण',
            text: 'सम्बन्धित नापी कार्यालयबाट जग्गाको प्रमाणित कित्ता नक्सा (ब्लुप्रिन्ट) प्राप्त गर्नुहोस्।',
          },
          {
            '@type': 'HowToStep',
            name: 'मालपोत कार्यालयमा दाखिला खारेज निवेदन दर्ता',
            text: 'मालपोत कार्यालयमा आवश्यक कागजात सहित नामसारी निवेदन दर्ता गरी श्रेस्ता र रोक्का जाँच गराउनुहोस्।',
          },
          {
            '@type': 'HowToStep',
            name: 'निर्णय पारित र नयाँ लालपुर्जा प्राप्ति',
            text: 'मालपोत अधिकृतबाट निर्णय पारित भएपछि मृतकको नाम कट्टा भई नयाँ कम्प्युटर लालपुर्जा प्राप्त गर्नुहोस्।',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/jagga-namsari-guide#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'मृत्युपश्चात जग्गा नामसारी गर्न कति समय लाग्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'यदि वडाको नाता प्रमाणित, सर्जमिन मुचुल्का र आवश्यक सबै कागजात तयार छन् र परिवारभित्र कुनै विवाद छैन भने मालपोत कार्यालयमा निवेदन दिएको १ देखि ३ कार्यदिनभित्र नामसारी सम्पन्न हुन्छ। कुनै शंका वा दाबी विरोध परेमा मालपोतले १५ दिने हकदाबी सूचना जारी गर्छ।',
            },
          },
          {
            '@type': 'Question',
            name: 'विवाहित छोरीको बाबुको जग्गामा नामसारी हक लाग्छ कि लाग्दैन?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'मुलुकी देवानी संहिता २०७४ अनुसार विवाहित वा अविवाहित दुवै छोरीहरूको बाबु-आमाको सम्पत्तिमा छोरा सरह समान अपूताली हक लाग्दछ। नामसारी गर्दा छोरीहरूको पनि सहमति वा नाता प्रमाणितमा नाम समावेश हुनुपर्छ।',
            },
          },
          {
            '@type': 'Question',
            name: 'एकजना हकवाला विदेशमा भए नामसारी कसरी गर्ने?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'विदेशमा रहेका हकवालाले सम्बन्धित देशस्थित नेपाली राजदूतावास (Embassy) बाट कन्सुलर वारिसनामा गराई नेपालमा रहेका परिवारका सदस्यलाई आफ्नो भाग बुझ्न वा मञ्जुरीनामा दिन अधिकार दिन सक्छन्।',
            },
          },
          {
            '@type': 'Question',
            name: 'जग्गा नामसारी गर्दा मालपोत दस्तुर कति लाग्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'हकवालाहरूको नाममा मृत्युपश्चात नामसारी गर्दा खरिद-बिक्री (राजीनामा) जस्तो लाखौं दस्तुर लाग्दैन। यसमा केवल सामान्य प्रशासनिक दाखिल खारेज दस्तुर (प्रायः रु ५०० देखि रु २,००० सम्म) मात्र लाग्छ।',
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
            name: 'जग्गा नामसारी गाइड',
            item: 'https://www.brbhatta.com/tools/jagga-namsari-guide',
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
            अपडेट: वि.सं. २०८१ / मुलुकी देवानी संहिता अनुकूल
          </span>
        </div>

        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300">
              <Users className="w-3.5 h-3.5" /> अपूताली तथा नामसारी गाइड
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300">
              आधिकारिक निवेदन ढाँचा सहित
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            मृत्युपश्चात जग्गा नामसारी (दाखिल खारेज) सम्पूर्ण गाइड तथा निवेदन ढाँचा
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            जग्गाधनीको मृत्युपछि हकवालाहरूको नाममा जग्गा नामसारी गर्ने कानुनी प्रक्रिया, वडाको नाता प्रमाणित, सर्जमिन मुचुल्का, र मालपोतमा दिने आधिकारिक निवेदन ढाँचाहरू।
          </p>
        </div>

        {/* Interactive Guide & Template Component */}
        <JaggaNamsariGuide />

        {/* In-depth Informational Section */}
        <div className="mt-12 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <BookOpen className="w-6 h-6 text-emerald-600" />
              नेपालमा जग्गा नामसारी (दाखिल खारेज) सम्बन्धी कानुनी जानकारी
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              जग्गाधनीको मृत्युपश्चात निजको स्वामित्वमा रहेको जग्गा श्रेस्ताबाट मृतकको नाम कट्टा गरी कानुनी हकवालाहरूको नाममा दर्ता कायम गर्ने प्रक्रियालाई मालपोतको भाषामा <strong>&apos;दाखिल खारेज&apos; (Dakhil Kharij)</strong> भनिन्छ। यो मुलुकी देवानी संहिता २०७४ को अपूताली सम्बन्धी परिच्छेद र भूमिसुधार तथा मालपोत नियमावली अनुसार गरिन्छ।
            </p>
          </div>

          {/* Key Checklist Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                📌 नामसारी गर्दा ध्यान दिनुपर्ने ३ मुख्य नियमहरू
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <li>• <strong>सर्जमिन मुचुल्काको सत्यता:</strong> वडाको सर्जमिन मुचुल्कामा मृतकका सबै अंशियार हकवालाहरूको नाम उल्लेख हुनुपर्छ। कुनै एकलाई छुटाएर गरिएको नामसारी गैरकानुनी ठहरिन्छ।</li>
                <li>• <strong>ऋण वा रोक्का जाँच:</strong> जग्गा बैंक वा अदालतमा रोक्का छ भने पहिले रोक्का फुकुवा वा बैंकको सहमति आवश्यक पर्न सक्छ।</li>
                <li>• <strong>कर चुक्ता:</strong> सम्बन्धित स्थानीय तहमा सम्पत्ति कर र मालपोत कर चालु आर्थिक वर्षसम्मको चुक्ता भएको हुनुपर्छ।</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                ⚖️ विवाद परेमा के गर्ने?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                यदि हकवालाहरू बीच भागबण्डामा विवाद छ वा कुनै अंशियारले सहमति दिएन भने मालपोत कार्यालयले विवादित जग्गा एकल नाममा नामसारी नगरी <strong>सबै अंशियारहरूको संयुक्त नाममा</strong> नामसारी गरिदिन्छ। त्यसपछि अंशियारहरूले आपसी अंशबण्डा वा अदालतमा अंश मुद्दा दायर गरी आफ्नो भाग छुट्याउन सक्छन्।
              </p>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-emerald-600" />
              जग्गा नामसारी सम्बन्धी बारम्बार सोधिने प्रश्नहरू (FAQs)
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  के मृत्यु भएको धेरै वर्षपछि पनि नामसारी गर्न मिल्छ?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  मिल्छ। मृत्यु भएको जतिसुकै वर्ष बितेको भए पनि मृत्यु दर्ता, नाता प्रमाणित र सर्जमिन मुचुल्का पेश गरी जुनसुकै बेला नामसारी (दाखिल खारेज) गराउन सकिन्छ। तर जति ढिलो गर्यो, हकवाला थपिँदै जाने हुँदा कागजात जुटाउन झन्झट हुन सक्छ।
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  नाता प्रमाणितमा नाम छुटेको हकवालाले के गर्ने?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  यदि वडाको नाता प्रमाणितमा कुनै हकवालाको नाम छुटेको भए वडा कार्यालयमा पुनः प्रमाण पेश गरी नाता प्रमाणित सच्याउन सकिन्छ। नामसारी भइसकेको अवस्थामा मालपोत वा अदालतमा बदरको लागि उजुरी गर्न सकिन्छ।
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  नामसारी गर्दा पुँजीगत लाभकर (CGT) लाग्छ कि लाग्दैन?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  लाग्दैन। मृत्युपश्चात हकवालाको नाममा नामसारी गर्दा कुनै पनि पुँजीगत लाभकर (Capital Gains Tax) लाग्दैन किनभने यो खरिद-बिक्री नभई प्राकृतिक उत्तराधिकार (अपूताली) हो।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="mt-8">
          <SocialShareBar
            url="https://www.brbhatta.com/tools/jagga-namsari-guide"
            title="मृत्युपश्चात जग्गा नामसारी सम्पूर्ण गाइड तथा निवेदन ढाँचा - BR Bhatta"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
