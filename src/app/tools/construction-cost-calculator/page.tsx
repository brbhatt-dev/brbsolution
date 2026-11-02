import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConstructionCostCalculator from '@/components/ConstructionCostCalculator';
import SocialShareBar from '@/components/SocialShareBar';
import { 
  ArrowLeft, 
  Building2, 
  Hammer, 
  HelpCircle, 
  ShieldCheck, 
  FileCheck2, 
  AlertTriangle,
  Coins,
  Sparkles,
  BookOpen
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'घर निर्माण लागत तथा सामग्री क्याल्कुलेटर (Building Construction Cost Calculator Nepal) | BR Bhatta',
  description: 'नेपालमा घर बनाउँदा लाग्ने कुल लागत र आवश्यक निर्माण सामग्री (सिमेन्ट, डण्डी, बालुवा, गिट्टी, इँटा) को आधिकारिक क्याल्कुलेटर। नेपाल भवन संहिता (NBC 105:2020) र DUDBC मापदण्ड अनुसार प्रति वर्गफिट दर र बजेट तुरुन्त निकाल्नुहोस्।',
  keywords: [
    'Construction Cost Calculator Nepal',
    'घर निर्माण लागत क्याल्कुलेटर',
    'House Construction Rate Nepal 2081 2082',
    'Cement Steel Sand Brick Estimator Nepal',
    'Building Material Calculator Nepal',
    'RCC Frame House Cost per Sq Ft',
    'NBC 105 2020 Construction Guide Nepal',
    'घर बनाउन कति खर्च लाग्छ'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/construction-cost-calculator',
  },
  openGraph: {
    title: 'घर निर्माण लागत तथा सामग्री क्याल्कुलेटर नेपाल | BR Bhatta',
    description: 'नेपालमा घर बनाउँदा लाग्ने प्रति वर्गफिट दर, कुल बजेट र सिमेन्ट, डण्डी, बालुवा, गिट्टीको परिमाण तुरुन्त जाँच्ने आधिकारिक टूल।',
    url: 'https://www.brbhatta.com/tools/construction-cost-calculator',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function ConstructionCostCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/construction-cost-calculator#app',
        name: 'नेपाल घर निर्माण लागत तथा सामग्री क्याल्कुलेटर',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        url: 'https://www.brbhatta.com/tools/construction-cost-calculator',
        description: 'Interactive building construction cost and material quantity estimator for residential houses in Nepal according to NBC 105:2020 norms.',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/construction-cost-calculator#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'नेपालमा हाल (२०८१/२०८२) घर निर्माण गर्दा प्रति वर्गफिट कति खर्च लाग्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'नेपालका मुख्य सहरी क्षेत्रमा आरसीसी फ्रेम (RCC Frame) संरचनाको सामान्य आवासीय घर निर्माण गर्दा प्रति वर्गफिट करिब रु. २,४०० देखि २,६०० (बजेट प्याकेज), मध्यम तथा आधुनिक फिनिसिङका लागि रु. ३,००० देखि ३,५०० (स्ट्यान्डर्ड प्याकेज) र उत्कृष्ट लक्जरी भिल्लाका लागि रु. ३,८०० देखि ४,५०० प्रति वर्गफिट खर्च लाग्दछ।'
            }
          },
          {
            '@type': 'Question',
            name: '१,००० वर्गफिटको घर निर्माण गर्दा कति बोरा सिमेन्ट र कति केजी डण्डी चाहिन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'सामान्य इन्जिनियरिङ नियम (Rule of Thumb) अनुसार प्रति वर्गफिट ०.४० बोरा सिमेन्ट र ३.८ केजी डण्डी आवश्यक पर्दछ। त्यसैले १,००० वर्गफिट निर्माण क्षेत्रफल भएको २.५ तलाको घर (कुल २,५०० वर्गफिट) का लागि करिब १,००० बोरा सिमेन्ट र ९,५०० केजी (९.५ टन) Fe500 टीएमटी डण्डी खपत हुन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'घरको नक्सा पास नगरी निर्माण सुरु गरेमा के कानुनी कारबाही हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'स्थानीय सरकार सञ्चालन ऐन, २०७४ अनुसार सम्बन्धित नगरपालिका वा गाउँपालिकाबाट नक्सा पास (Building Permit) र निर्माण इजाजत नलिई घर निर्माण गर्न पाइँदैन। बिना नक्सा पास घर बनाएमा स्थानीय तहले रु. ५ लाखसम्म जरिवाना गर्ने, बत्ती-पानीको सिफारिस रोक्ने वा अनधिकृत संरचना भत्काउन सक्ने कानुनी प्रावधान छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'घर बनाउँदा ठेकेदारसँग कस्तो सम्झौता (Contract) गर्नुपर्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'घर निर्माण गर्दा केवल मौखिक सहमतिमा काम सुरु गर्नु हुँदैन। काम सुरु हुनु अगावै निर्माण सामग्रीको ब्रान्ड (सिमेन्ट, डण्डी, टायल्स), प्रति वर्गफिट दर, भुक्तानी चरण (Payment Milestones), ढलानको क्युरीङ अवधि, काम सम्पन्न गर्ने अन्तिम म्याद र ५% धरौटी रकम (Retention Money) १ वर्षसम्म रोक्ने गरी लिखित सम्झौता पत्र गर्नुपर्छ।'
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
          <span className="text-slate-800 dark:text-slate-200">घर निर्माण लागत क्याल्कुलेटर</span>
        </div>

        {/* Interactive Component */}
        <ConstructionCostCalculator />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="नेपाल घर निर्माण लागत तथा सामग्री क्याल्कुलेटर (NBC 105:2020)" 
          url="/tools/construction-cost-calculator" 
        />

        {/* Static No-JS & Educational Guide Section */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
              <BookOpen className="w-3.5 h-3.5" />
              <span>विस्तृत प्राविधिक तथा कानुनी निर्देशिका</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              नेपालमा घर निर्माण: लागत निर्धारण, सामग्री परिमाण र कानुनी प्रक्रिया
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              आफ्नै घर बनाउनु जीवनको सबैभन्दा ठूलो लगानी हो। तर स्पष्ट प्राविधिक ज्ञान र सही लागत अनुमानको अभावमा धेरै घरधनीहरू बजेट अभाव, ठेकेदारको लापरबाही र कानुनी उल्झनमा पर्ने गर्दछन्। नेपाल भवन संहिता (Nepal National Building Code - NBC 105:2020) र सहरी विकास तथा भवन निर्माण विभाग (DUDBC) को मापदण्ड अनुसार घर निर्माण गर्दा ध्यान दिनुपर्ने महत्वपूर्ण पक्षहरू तल प्रस्तुत गरिएको छ।
            </p>
          </div>

          {/* Quick Rate & Material Table */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Coins className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>१. घर निर्माण लागत तथा मुख्य सामग्री खपत अनुपात (Rule of Thumb)</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    <th className="p-3 text-left border border-slate-200 dark:border-slate-700">निर्माण सामग्री / विवरण</th>
                    <th className="p-3 text-left border border-slate-200 dark:border-slate-700">प्रति वर्गफिट खपत (Per Sq. Ft.)</th>
                    <th className="p-3 text-left border border-slate-200 dark:border-slate-700">१,००० sq.ft (२.५ तला घरमा)</th>
                    <th className="p-3 text-left border border-slate-200 dark:border-slate-700">औसत बजार दर (अनुमानित)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                  <tr>
                    <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">सिमेन्ट (Cement - OPC/PPC)</td>
                    <td className="p-3">०.४० देखि ०.४२ बोरा</td>
                    <td className="p-3 text-indigo-600 dark:text-indigo-400 font-bold">१,००० बोरा</td>
                    <td className="p-3">रु. ६५० - ७५० प्रति बोरा</td>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-850/50">
                    <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">फलामे डण्डी (Fe500 Rebar)</td>
                    <td className="p-3">३.५ देखि ४.० केजी</td>
                    <td className="p-3 text-indigo-600 dark:text-indigo-400 font-bold">९,५०० केजी (९.५ टन)</td>
                    <td className="p-3">रु. ९५ - १०५ प्रति केजी</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">नदीको बालुवा (River Sand)</td>
                    <td className="p-3">१.६ देखि १.८ घनफिट (CFT)</td>
                    <td className="p-3">४,५०० CFT (~१३ टिपर)</td>
                    <td className="p-3">रु. ४५ - ५५ प्रति CFT</td>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-850/50">
                    <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">गिट्टी / रोडा (Crushed Aggregate)</td>
                    <td className="p-3">१.२ देखि १.३५ घनफिट (CFT)</td>
                    <td className="p-3">३,३७५ CFT (~१० टिपर)</td>
                    <td className="p-3">रु. ५० - ६० प्रति CFT</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">१ नम्बर रातो इँटा (Bricks)</td>
                    <td className="p-3">१८ देखि २० वटा</td>
                    <td className="p-3 text-amber-600 dark:text-amber-400 font-bold">४७,५०० थान</td>
                    <td className="p-3">रु. १५ - १७ प्रति गोटा</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-2xs text-slate-500">
              * उल्लिखित दरहरू काठमाडौँ उपत्यका तथा प्रमुख राजमार्ग जोडिएका सहरहरूका लागि हुन्। ढुवानी दूरी र स्थानीय स्रोत अनुसार केही फरक पर्न सक्छ।
            </p>
          </div>

          {/* Construction Workflow in Nepal */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>२. नेपालमा घर बनाउँदा पार गर्नुपर्ने अनिवार्य ५ सरकारी चरणहरू</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-extrabold text-indigo-600 dark:text-indigo-400">१. माटो परीक्षण र डिजिटल सर्भे (Soil Test & Survey)</span>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  ३ तला भन्दा अग्लो वा व्यापारिक भवनका लागि माटो परीक्षण अनिवार्य हुन्छ। यसले जमिनको भार वहन क्षमता (Safe Bearing Capacity - SBC) निर्धारण गरी उपयुक्त जग (Footing) छनोट गर्न सहयोग गर्छ।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-extrabold text-indigo-600 dark:text-indigo-400">२. वास्तु तथा आर्किटेक्चरल नक्साङ्कन (Architectural Design)</span>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  इन्जिनियरिङ काउन्सिल (NEC) दर्तावाला सिभिल इन्जिनियरबाट नगरपालिकाको बाइलज (Setback, Ground Coverage, FAR) अनुसार नक्सा तयार गर्नुपर्छ।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-extrabold text-indigo-600 dark:text-indigo-400">३. अस्थायी नक्सा पास र १५ दिने सूचना (Temporary Permit)</span>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  नगरपालिकामा निवेदन पेश गरेपछि १५ दिने छिमेकी साँध-सिमाना म्याद टाँस हुन्छ। छिमेकीको कुनै उजुरबाजुर नपरेमा प्लिन्थ लेभलसम्मको अस्थायी निर्माण अनुमति प्राप्त हुन्छ।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-extrabold text-indigo-600 dark:text-indigo-400">४. सुपरस्ट्रक्चर इजाजत र स्थायी नक्सा पास (Permanent Permit)</span>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  डीपीसी ढलान सम्पन्न भएपछि नगरपालिकाका प्राविधिकले फिल्ड जाँच गरी स्वीकृत सेतब्याक भित्र रहेको पुष्टि गरेपछि बाँकी तला निर्माणको स्थायी स्वीकृति प्रदान गर्छन्।
                </p>
              </div>
            </div>
          </div>

          {/* Contractor Contract Tips */}
          <div className="p-6 rounded-3xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>ठेकेदारसँग सम्झौता गर्दा घरधनीले ध्यान दिनुपर्ने ५ सावधानीहरू:</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-amber-950 dark:text-amber-300">
              <li>• <strong>सामग्रीको ब्रान्ड तोक्नुहोस्:</strong> सिमेन्ट (उदा. जगदम्बा, शिवम, अर्घाखाँची), डण्डी (Fe500D), टायल्स र वायरिङको ब्रान्ड सम्झौतामै स्पष्ट लेख्नुहोस्।</li>
              <li>• <strong>क्युरीङ (पानी हाल्ने) अवधि:</strong> छत वा पिलर ढलानपछि कम्तीमा १४ देखि २१ दिनसम्म नियमित पानी हाल्ने जिम्मेवारी कसको हुने स्पष्ट पार्नुहोस्।</li>
              <li>• <strong>धरौटी रकम (Retention Money):</strong> काम सम्पन्न भएपछि कुल बिलको ५% रकम कम्तीमा ६ महिना वा १ वर्षसम्म धरौटी राख्नुहोस्, ताकि कुनै चर्कने वा चुहिने समस्या आएमा मर्मत गराउन सकियोस्।</li>
              <li>• <strong>समय सीमा (Deadline):</strong> काम सम्पन्न गर्ने मिति तोक्नुहोस् र बिना उचित कारण ढिलाइ भएमा प्रति हप्ता हर्जना लाग्ने सर्त राख्नुहोस्।</li>
            </ul>
          </div>

          {/* Frequently Asked Questions */}
          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>घर निर्माण सम्बन्धी बारम्बार सोधिने प्रश्नहरू (FAQs)</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <p className="font-extrabold text-slate-900 dark:text-white">
                  प्रश्न: नेपालमा हाल घर निर्माण गर्दा प्रति वर्गफिट कति खर्च लाग्छ?
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  उत्तर: सामान्य आवासीय आरसीसी फ्रेम घर निर्माण गर्दा प्रति वर्गफिट करिब रु. २,४०० देखि २,६०० (बजेट), मध्यम स्तरको आधुनिक फिनिसिङका लागि रु. ३,००० देखि ३,५०० (स्ट्यान्डर्ड) र लक्जरी भिल्लाका लागि रु. ३,८०० देखि ४,५०० सम्म लाग्दछ।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <p className="font-extrabold text-slate-900 dark:text-white">
                  प्रश्न: १,००० वर्गफिटको घर निर्माण गर्दा कति बोरा सिमेन्ट र कति केजी डण्डी चाहिन्छ?
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  उत्तर: इन्जिनियरिङ थम्ब रुल अनुसार प्रति वर्गफिट ०.४० बोरा सिमेन्ट र ३.८ केजी डण्डी खपत हुन्छ। १,००० वर्गफिट भुइँतला भएको २.५ तला घर (कुल २,५०० sq.ft) का लागि करिब १,००० बोरा सिमेन्ट र ९,५०० केजी डण्डी चाहिन्छ।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <p className="font-extrabold text-slate-900 dark:text-white">
                  प्रश्न: घर निर्माण सम्पन्न प्रमाणपत्र (Building Completion Certificate) किन चाहिन्छ?
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  उत्तर: घर निर्माण सम्पन्न भएपछि नगरपालिकाबाट निर्माण सम्पन्न प्रमाणपत्र लिनु अनिवार्य छ। यो प्रमाणपत्र नभएसम्म घर बैंकमा धितो राख्न, सरकारी मूल्याङ्कन गराउन वा भविष्यमा बिक्री गर्दा रजिष्ट्रेसन पास गर्न पाइँदैन।
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
