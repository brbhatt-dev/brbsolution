import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SetbackCalculator from '@/components/SetbackCalculator';
import SocialShareBar from '@/components/SocialShareBar';
import { 
  ArrowLeft, 
  BookOpen, 
  Building2, 
  Ruler, 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck, 
  AlertTriangle 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'घर नक्सा पास तथा बाटो छोड्ने मापदण्ड क्याल्कुलेटर (Building Setback Calculator Nepal) | BR Bhatta',
  description: 'नेपालमा घर बनाउँदा बाटोको केन्द्रबाट कति दुरी छोड्नुपर्छ? राष्ट्रिय भवन निर्माण मापदण्ड २०८१ अनुसार बाटोको चौडाइ, अगाडि (Front), दायाँ-बायाँ (Side) र पछाडि (Rear) छोड्नुपर्ने सेटब्याक र ग्राउन्ड कभरेज तुरुन्त हिसाब गर्नुहोस्।',
  keywords: [
    'Building Setback Calculator Nepal',
    'घर नक्सा पास मापदण्ड',
    'बाटो छोड्ने नियम नेपाल',
    'Right of Way Nepal Road',
    'Bato Chhodne Mapdanda',
    'Building Bye Laws Nepal 2081',
    'Kathmandu Naksa Pas Rules',
    'Setback Distance 5 Feet Nepal'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/setback-calculator',
  },
  openGraph: {
    title: 'घर नक्सा पास तथा बाटो छोड्ने मापदण्ड क्याल्कुलेटर | BR Bhatta',
    description: 'नेपाल सरकारको आधारभूत भवन निर्माण तथा सडक मापदण्ड २०७२ (संशोधन २०८१) अनुसार घरको चारैतिर छोड्नुपर्ने न्यूनतम दुरी र नक्सा पास प्रक्रिया।',
    url: 'https://www.brbhatta.com/tools/setback-calculator',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function SetbackCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/setback-calculator#app',
        name: 'घर नक्सा पास तथा बाटो छोड्ने मापदण्ड क्याल्कुलेटर',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        url: 'https://www.brbhatta.com/tools/setback-calculator',
        description: 'Interactive building setback and road right-of-way calculator for Nepal based on National Building Bye-laws.',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/setback-calculator#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'घर बनाउँदा बाटोको केन्द्रबाट कति दुरी छोड्नुपर्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'सडकको प्रकार अनुसार सडकको बीच केन्द्र (Centerline) बाट आधा सडक चौडाइ र त्यसमा थप १.५ मिटर (५ फिट) भवन निर्माण सेटब्याक छोड्नुपर्छ। उदाहरणका लागि, ६ मिटरको शाखा बाटो छ भने केन्द्रबाट ३ मिटर सडक र १.५ मिटर सेटब्याक गरी कुल ४.५ मिटर (करिब १५ फिट) टाढा मात्र घरको पिलर उठाउन पाइन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'साँध-सँधियारातर्फ ५ फिट (१.५ मिटर) जग्गा नछाडे के हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'यदि छिमेकीतर्फ ५ फिट जग्गा नछाडी झ्याल, भेन्टिलेसन वा बार्दली निकालिएमा स्थानीय नगरपालिकाले नक्सा पास गर्दैन र छिमेकीले उजुरी गरेमा नगरपालिकाले पर्खाल वा झ्याल भत्काउन वा बन्द गराउन सक्छ। यदि १.५ मिटरभन्दा नजिक घर बनाउने हो भने उक्त भित्तामा कुनै पनि झ्याल-भेन्टिलेसन नभएको अन्धो भित्ता (Blank Wall) हुनुपर्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'अधिकतम भुईंतला कभरेज (Ground Coverage) भनेको के हो?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'आफ्नो जग्गाको कुल क्षेत्रफलमध्ये कति प्रतिशत भागमा भुईंतलाको घरले ओगट्न पाउँछ भन्ने नियमलाई ग्राउन्ड कभरेज भनिन्छ। नेपालमा आवासीय क्षेत्रमा सामान्यतया ६०% देखि ७०% र व्यापारिक क्षेत्रमा ५०% सम्म मात्र जमिन ओगट्न पाइन्छ, बाँकी भाग खुला छाड्नुपर्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'नगरपालिकाबाट घरको नक्सा पास नगरी घर बनाए के कारबाही हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'नक्सा पास नगरी बनाएको घरलाई स्थानीय सरकार सञ्चालन ऐन २०७४ अनुसार ५ लाख रुपैयाँसम्म जरिवाना हुन सक्छ, बिजुली-पानीको स्थायी मिटर जडान हुँदैन, बैंकले धितो स्वीकार गर्दैन र निर्माण सम्पन्न प्रमाणपत्र (Nirman Sampanna) पाइँदैन।'
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
          <span className="text-slate-800 dark:text-slate-200">घर नक्सा पास तथा सेतब्याक क्याल्कुलेटर</span>
        </div>

        {/* Embedded Interactive Setback Calculator */}
        <SetbackCalculator />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="घर नक्सा पास तथा बाटो छोड्ने मापदण्ड क्याल्कुलेटर (नेपाल भवन निर्माण मापदण्ड)" 
          url="/tools/setback-calculator" 
        />

        {/* Detailed Static Educational Guide (500+ Words for SEO & AdSense) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
              <span>नेपाल सरकार भवन निर्माण तथा सहरी विकास मापदण्ड</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              घर बनाउँदा बाटो र सिमाना छोड्ने नियम (Building Bye-laws & Setback Rules)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              नेपालमा घर बनाउँदा सडक विस्तार, दमकल/एम्बुलेन्स आवागमन, विपद् व्यवस्थापन र छिमेकीको उज्यालो-हावाको अधिकार सुरक्षित गर्न सडक सीमा (Right of Way) र भवन निर्माण सीमा (Setback) सम्बन्धी कडा मापदण्ड तोकिएको छ। यी मापदण्डहरू पालना नगरी बनाइएका घरको नक्सा पास हुँदैन।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                <Ruler className="w-4 h-4 text-emerald-600" />
                <span>१. सडक केन्द्र रेखा (Centerline)</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                बाटो नाप्दा सधैं बाटोको बीच केन्द्र (Centerline) बाट नापिन्छ। यदि बाटो ६ मिटरको छ भने बीचबाट ३ मिटर दुवैतर्फका जग्गाधनीले बाटोका लागि छोड्नुपर्दछ।
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>२. अगाडिको सेतब्याक (Front)</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                बाटोको अन्तिम सिमानाबाट थप १.५ मिटर (५ फिट) भित्र मात्र भवनको जग र पिलर उठाउन पाइन्छ। मुख्य सडक वा राजमार्गहरूमा यो दुरी ३ देखि ६ मिटरसम्म हुन्छ।
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-emerald-600" />
                <span>३. ५ फिटको नियम (Side/Rear)</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                छिमेकीको साँधतर्फ झ्याल, भेन्टिलेसन वा बार्दली खोल्न कम्तिमा १.५ मिटर (५ फिट) जग्गा छोड्नै पर्छ। ५ फिट नछाडी झ्याल राख्न कानुनले निषेध गरेको छ।
              </p>
            </div>
          </div>

          {/* 4-Stage Municipal Approval Process */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>नगरपालिकामा घर नक्सा पास गराउने ४-चरणीय सरकारी प्रक्रिया</span>
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="p-3">चरण</th>
                    <th className="p-3">स्वीकृति स्तर</th>
                    <th className="p-3">जाँच गरिने विषयहरू</th>
                    <th className="p-3">प्राप्त हुने प्रमाणपत्र</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                  <tr>
                    <td className="p-3 font-mono font-bold">१</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">अस्थायी इजाजत (Temporary Permit)</td>
                    <td className="p-3">नापी ट्रेस, लालपुर्जा, घरबाटो सिफारिस र प्रारम्भिक आर्किटेक्चरल नक्सा।</td>
                    <td className="p-3 text-emerald-600 font-semibold">निर्माण इजाजत पत्र (DPC तहसम्म)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold">२</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">डिपिसी (Plinth Level) जाँच</td>
                    <td className="p-3">जमिनको सतहमा पिलर र जग उठाउँदा बाटो र सेतब्याक ठ्याक्कै छाडेको छ कि छैन इन्जिनियरबाट स्थलगत जाँच।</td>
                    <td className="p-3 text-emerald-600 font-semibold">DPC तह प्रमाणीकरण</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold">३</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">स्थायी इजाजत (Permanent Permit)</td>
                    <td className="p-3">स्ट्रक्चरल डिजाइन, भूकम्पीय सुरक्षा (NBC कोड) र तल्लाको उचाइ प्रमाणीकरण।</td>
                    <td className="p-3 text-emerald-600 font-semibold">स्थायी निर्माण इजाजत पत्र</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold">४</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">निर्माण सम्पन्न प्रमाणपत्र (Completion Certificate)</td>
                    <td className="p-3">घर सम्पन्न भएपछि स्वीकृत नक्सा बमोजिम मात्र बनेको यकिन गरी अन्तिम नापजाँच।</td>
                    <td className="p-3 text-emerald-600 font-bold">निर्माण सम्पन्न प्रमाणपत्र (Nirman Sampanna)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-600" />
              <span>नक्सा पास तथा सेतब्याक सम्बन्धी बारम्बार सोधिने प्रश्नहरू (FAQs)</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  प्रश्न: के ३ आना जग्गामा घर नक्सा पास हुन्छ?
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  उत्तर: काठमाडौँ उपत्यकाको योजनाबद्ध आवास (प्लानिङ) मा २.५ आना (८० वर्गमिटर) र सामान्य जग्गामा साविकदेखि छुट्टै कित्ता भएको अवस्थामा ३ आनामा पनि आवासीय घरको नक्सा पास हुन सक्छ। तर नयाँ कित्ताकाट गर्दा भने न्यूनतम १३० वर्गमिटर (करिब ४ आना ०.३ पैसा) हुनैपर्छ।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  प्रश्न: बाटोमा बार्दली (Cantilever / Balcony) निकाल्न पाइन्छ?
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  उत्तर: सार्वजनिक सडकको सीमा (Right of Way) माथि पर्ने गरी कुनै पनि बार्दली वा छाना निकाल्न पाइँदैन। बार्दली आफ्नै निजी जग्गाको १.५ मिटर सेतब्याक क्षेत्रभित्र पनि सामान्यतया अधिकतम १ मिटर (३ फिट ३ इन्च) भन्दा बढी निकाल्न निषेध गरिएको छ।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  प्रश्न: नक्सा पास नगरी घर बनाए के समस्या पर्छ?
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  उत्तर: नक्सा पास नभएको घरमा खानेपानी र बिजुलीको स्थायी मिटर जडान हुँदैन, बैंकले ऋण (Loan) दिँदैन, भविष्यमा घर बिक्री गर्दा मालपोतमा मूल्यांकन हुँदैन र पालिकाले जरिवाना वा भत्काउने आदेश दिन सक्छ।
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
