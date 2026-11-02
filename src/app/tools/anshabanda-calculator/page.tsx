import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnshabandaCalculator from '@/components/AnshabandaCalculator';
import SocialShareBar from '@/components/SocialShareBar';
import { 
  ArrowLeft, 
  BookOpen, 
  Scale, 
  FileText, 
  CheckCircle2, 
  HelpCircle, 
  Users, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'जग्गा अंशबन्डा तथा कित्ता हिस्सा क्याल्कुलेटर (Land Partition Calculator Nepal) | BR Bhatta',
  description: 'नेपालमा जग्गा अंशबन्डा गर्दा दाजुभाइ तथा अंशियारहरू बीच बराबर जग्गा भाग लगाउने आधिकारिक क्याल्कुलेटर। रोपनी, आना, पैसा, दाम र बिघा, कट्ठा, धुरमा प्रत्येकको भाग, बाँकी क्षेत्रफल र कित्ताकाट योग्यता तुरुन्त निकाल्नुहोस्।',
  keywords: [
    'Anshabanda Calculator Nepal',
    'जग्गा अंशबन्डा क्याल्कुलेटर',
    'Land Partition Calculator Nepal',
    'अंशबन्डा नियम २०८१',
    'मुलुकी देवानी संहिता अंशबन्डा',
    'Ropani Aana Division Calculator',
    'Bigha Kattha Share Partition',
    'कित्ताकाट अंशबन्डा मापदण्ड'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/anshabanda-calculator',
  },
  openGraph: {
    title: 'जग्गा अंशबन्डा तथा कित्ता हिस्सा क्याल्कुलेटर | BR Bhatta',
    description: 'नेपालको मुलुकी देवानी संहिता २०७४ र भू-उपयोग नियमावली २०८१ अनुसार अंशियारहरू बीच जग्गाको बराबर भाग र कित्ताकाट योग्यता जाँच्ने आधिकारिक टूल।',
    url: 'https://www.brbhatta.com/tools/anshabanda-calculator',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function AnshabandaCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/anshabanda-calculator#app',
        name: 'नेपाल जग्गा अंशबन्डा तथा कित्ता हिस्सा क्याल्कुलेटर',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        url: 'https://www.brbhatta.com/tools/anshabanda-calculator',
        description: 'Online land partition calculator for Nepal supporting Ropani-Aana and Bigha-Kattha systems with legal kitta-kat eligibility check.',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/anshabanda-calculator#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'मुलुकी देवानी संहिता २०७४ अनुसार अंशियार को-को हुन्छन्?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'मुलुकी देवानी संहिता २०७४ को दफा २०५ अनुसार पति, पत्नी, बाबु, आमा, छोरा, र छोरी अंशबन्डाका समान अंशियार मानिन्छन्। छोरा र छोरीबीच कुनै विभेद नगरी सबै सन्तानले आमाबाबुको सम्पत्तिमा बराबर हिस्सा पाउने कानुनी व्यवस्था छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'अंशबन्डा गर्दा जग्गाको क्षेत्रफल कित्ताकाट मापदण्डभन्दा सानो भए के हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'भू-उपयोग नियमावली २०७९ (पहिलो संशोधन २०८१) अनुसार आवासीय क्षेत्रमा कम्तिमा १३० वर्गमिटर (करिब ४ आना ०.३ पैसा) वा तराईमा १६९.३ वर्गमिटर (करिब १० धुर) क्षेत्रफल नपुगे छुट्टै कित्ताकाट गर्न मिल्दैन। यस्तो अवस्थामा सबै अंशियारको नाममा संयुक्त (एकल) लालपुर्जा कायम गर्नुपर्ने हुन्छ वा आपसी सहमतिमा एक जनाले जग्गा लिएर अरूलाई नगद मुआब्जा दिनुपर्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'अंशबन्डा पास गर्दा मालपोत कार्यालयमा कति दस्तुर लाग्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'नाता प्रमाणितका आधारमा गरिने घरपरिवार भित्रको अंशबन्डामा सामान्य राजीनामा पासभन्दा निकै न्यून रजिष्ट्रेसन दस्तुर लाग्दछ। सामान्यतया स्थानीय तह र जिल्ला मालपोत अनुसार प्रति अंशियार केही सय देखि केही हजार रुपैयाँसम्मको प्रशासनिक दस्तुर मात्र तिर्नुपर्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'अंशबन्डाको लिखत कहाँ प्रमाणित गर्नुपर्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'अंशबन्डाको भरपाई वा लिखत तयार पारेपछि स्थानीय वडा कार्यालयबाट नाता प्रमाणित र घरबाटो सिफारिस लिई सम्बन्धित मालपोत कार्यालयमा गएर रजिष्ट्रेसन (रजिष्ट्री) पास गराउनुपर्छ। मालपोतमा दर्ता नभएको घरसारको कागजले कानुनी मान्यता पाउँदैन।'
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

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
        
        {/* Breadcrumb Nav */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>उपकरणहरू (Tools Hub)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200">जग्गा अंशबन्डा क्याल्कुलेटर</span>
        </div>

        {/* Embedded Interactive Anshabanda Calculator */}
        <AnshabandaCalculator />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="नेपाल जग्गा अंशबन्डा तथा कित्ता हिस्सा क्याल्कुलेटर (मुलुकी देवानी संहिता २०७४)" 
          url="/tools/anshabanda-calculator" 
        />

        {/* Comprehensive Static Educational Guide (500+ Words for SEO & AdSense) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 text-xs font-bold">
              <Scale className="w-3.5 h-3.5 text-blue-600" />
              <span>नेपालको कानुन र अंशबन्डा सम्बन्धी आधिकारिक व्यवस्था</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              मुलुकी देवानी संहिता २०७४ अनुसार जग्गा अंशबन्डाका मुख्य कानुनी नियमहरू
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              नेपालमा पैतृक वा सगोलको सम्पत्ति अंशबन्डा गर्दा कानुनले स्पष्ट मापदण्डहरू तोकेको छ। परम्परागत रूपमा जग्गा भाग लगाउँदा आना, पैसा र दाम वा कट्ठा र धुरको सानो भिन्नताले परिवारमा विवाद आउने गर्दछ। हाम्रो क्याल्कुलेटरले गणितीय शुद्धताका साथ प्रत्येक अंशियारको ठ्याक्कै हिस्सा निकालिदिन्छ।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2.5">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>१. समान अंशियार र अधिकार</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                मुलुकी देवानी संहिताको दफा २०५ अनुसार पति, पत्नी, बाबु, आमा, छोरा र छोरी सबै समान अंशियार हुन्। छोरा र छोरी दुवैलाई समान अधिकार दिइएको छ। विवाहित वा अविवाहित छोरीले पनि आमाबाबुको सम्पत्तिमा छोरासरह बराबर अंश पाउँछन्।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2.5">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>२. भू-उपयोग नियमावली २०८१ र कित्ताकाट</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                अंशबन्डा भए तापनि जग्गाको प्रत्येक कित्ताले सरकारले तोकेको न्यूनतम क्षेत्रफल मापदण्ड पूरा गर्नुपर्छ। काठमाडौँ उपत्यकामा न्यूनतम १३० वर्गमिटर (करिब ४ आना ०.३ पैसा) र तराईमा १६९.३ वर्गमिटर (करिब १० धुर) भन्दा सानो कित्तामा नापी कार्यालयले कित्ताकाट गर्दैन।
              </p>
            </div>
          </div>

          {/* Solutions when land is too small */}
          <div className="space-y-4 pt-2">
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              <span>कित्ताकाट मापदण्डभन्दा जग्गा सानो भए के गर्ने? (३ विकल्प)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-1.5">
                <strong className="text-amber-900 dark:text-amber-300 font-bold">विकल्प १: संयुक्त लालपुर्जा</strong>
                <p className="text-slate-600 dark:text-slate-300">
                  कित्ता नटुक्र्याई एउटै कित्तामा सबै अंशियारको नाम र हिस्सा (उदा: १/३ वा १/४) खुलाएर संयुक्त दर्ता प्रमाण पुर्जा कायम गर्ने।
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-1.5">
                <strong className="text-amber-900 dark:text-amber-300 font-bold">विकल्प २: नगद मुआब्जा (सोधभर्ना)</strong>
                <p className="text-slate-600 dark:text-slate-300">
                  एक अंशियारले सम्पूर्ण जग्गा आफ्नो नाममा राखी अन्य अंशियारहरूलाई जग्गाको चलनचल्ती वा सरकारी मूल्याङ्कन अनुसार नगद भुक्तानी गर्ने।
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-1.5">
                <strong className="text-amber-900 dark:text-amber-300 font-bold">विकल्प ३: अन्य सम्पत्ति मिलान</strong>
                <p className="text-slate-600 dark:text-slate-300">
                  एउटा अंशियारले जग्गा लिने र अर्कोले घर, पसल, सुनचाँदी वा बैंक मौज्दात जस्ता अन्य पैतृक सम्पत्ति लिएर हिसाब मिलान गर्ने।
                </p>
              </div>
            </div>
          </div>

          {/* Checklist for Anshabanda Registration */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>अंशबन्डा पास गर्दा मालपोत कार्यालय लैजानुपर्ने कागजातहरू</span>
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="p-3">क्र.सं.</th>
                    <th className="p-3">कागजातको नाम</th>
                    <th className="p-3">जारी गर्ने निकाय</th>
                    <th className="p-3">विवरण</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                  <tr>
                    <td className="p-3 font-mono font-bold">१</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">सक्कल जग्गाधनी प्रमाण पुर्जा (लालपुर्जा)</td>
                    <td className="p-3">मालपोत कार्यालय</td>
                    <td className="p-3">अंशबन्डा गरिने सम्पूर्ण जग्गाको सक्कल पुर्जा।</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold">२</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">नाता प्रमाणित प्रमाणपत्र</td>
                    <td className="p-3">सम्बन्धित वडा कार्यालय</td>
                    <td className="p-3">सबै अंशियारहरूको तीनपुस्ते नाता खुल्ने आधिकारिक सिफारिस।</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold">३</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">सबै अंशियारहरूको नागरिकता प्रतिलिपि</td>
                    <td className="p-3">जिल्ला प्रशासन कार्यालय</td>
                    <td className="p-3">सक्कल नागरिकता साथमा लिएर उपस्थित हुनुपर्दछ।</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold">४</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">अंशबन्डाको लिखत (फाराम)</td>
                    <td className="p-3">लेखापढी व्यवसायी / मालपोत</td>
                    <td className="p-3">कसले कुन कित्ता कति क्षेत्रफल पाउने स्पष्ट खुलाइएको कानुनी लिखत।</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold">५</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">सम्पत्ति कर / मालपोत तिरो रसिद</td>
                    <td className="p-3">सम्बन्धित वडा कार्यालय</td>
                    <td className="p-3">चालू आर्थिक वर्षको कर चुक्ता गरेको प्रमाणपत्र।</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-600" />
              <span>अंशबन्डा सम्बन्धी बारम्बार सोधिने प्रश्नहरू (FAQs)</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  प्रश्न: के छोरीले विवाहपछि पनि माइतीको जग्गामा अंश पाउँछिन्?
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  उत्तर: हो, मुलुकी देवानी संहिता २०७४ ले छोरा र छोरीलाई समान अंशियार मानेको छ। विवाह भएकी छोरीले पनि आमाबाबुको सम्पत्तिमा अन्य सन्तानसरह समान अंश दाबी गर्न सक्ने स्पष्ट कानुनी व्यवस्था छ।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  प्रश्न: अंशबन्डा गर्दा मालपोतमा कति खर्च लाग्छ?
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  उत्तर: परिवारभित्रको नाता प्रमाणित अंशबन्डामा सामान्य जग्गा खरिद-बिक्रीको जस्तो चर्को रजिष्ट्रेसन शुल्क (२% देखि ५%) र लाभकर लाग्दैन। यसमा केवल सामान्य प्रशासनिक दर्ता दस्तुर र वडाको सिफारिस शुल्क मात्र लाग्दछ।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  प्रश्न: घरसारमा भएको अंशबन्डाको कागजले मान्यता पाउँछ?
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  उत्तर: घरसारमा गरिएको अंशबन्डाको कागजलाई मालपोत कार्यालयमा लगेर विधिवत रजिष्ट्रेसन पास नगराएसम्म जग्गाको स्रेस्ता (लालपुर्जा) छुट्टिँदैन र कानुनी रूपमा सरकारी निकायमा मान्यता पाउँदैन। त्यसैले मालपोतमा दर्ता अनिवार्य छ।
                </p>
              </div>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
