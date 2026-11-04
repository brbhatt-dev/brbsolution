import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import DrivingLicenseExamHub from '@/components/DrivingLicenseExamHub';
import SocialShareBar from '@/components/SocialShareBar';
import { 
  Car, 
  Bike, 
  ArrowLeft, 
  FileText, 
  Award, 
  Smartphone, 
  Calculator, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle,
  AlertTriangle,
  Zap,
  BookOpen
} from 'lucide-react';

export default function DrivingLicensePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/driving-license-quiz#app',
        name: 'नेपाल सवारी चालक अनुमतिपत्र लिखित परीक्षा तथा ट्रायल सिम्युलेटर',
        description: 'Online practice quiz for DOTM Nepal driving license written examination and 70-point trial score simulator.',
        url: 'https://www.brbhatta.com/tools/driving-license-quiz',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'All',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.brbhatta.com/tools/driving-license-quiz#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'गृहपृष्ठ (Home)',
            item: 'https://www.brbhatta.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'डिजिटल उपकरणहरू (Tools)',
            item: 'https://www.brbhatta.com/tools'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'लाइसेन्स परीक्षा तथा ट्रायल सिम्युलेटर',
            item: 'https://www.brbhatta.com/tools/driving-license-quiz'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/driving-license-quiz#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'सवारी चालक अनुमतिपत्र (Driving License) लिखित परीक्षामा पास हुन कति अंक ल्याउनुपर्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'यातायात व्यवस्था विभागको नयाँ निर्देशिका अनुसार लिखित परीक्षामा कुल २० वटा वस्तुगत बहुउत्तर (Multiple Choice) प्रश्नहरू सोधिन्छ। प्रत्येक प्रश्नको १ अंक गरी २० पूर्णाङ्कमा कम्तीमा १२ वटा प्रश्न (६०%) सही मिलाएमा लिखित परीक्षा उत्तीर्ण भइन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'नयाँ ७० अंकको ट्रायल परीक्षा प्रणाली के हो?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'पहिले कुनै एउटा सानो गल्ती (जस्तै: एकपटक खुट्टा टेक्दा) सिधै फेल हुने नियम थियो। नयाँ ७० अंकको प्रणालीमा कुल १०० पूर्णाङ्क हुन्छ र सानातिना गल्तीमा निश्चित अंक मात्र काटिन्छ। यदि परीक्षार्थीले ७० वा सोभन्दा बढी अंक सुरक्षित राख्न सकेमा ट्रायल पास हुन्छ। यद्यपि रेखा छुने, उकालोमा पछाडि सर्ने जस्ता गम्भीर गल्तीमा भने सिधै फेल (Disqualify) हुन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'स्मार्ट लाइसेन्स हातमा नआउँदासम्म गाडी/मोटरसाइकल चलाउन पाइन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'पाइन्छ। ट्रायल पास गरेपछि यातायात कार्यालयले दिने राजस्व तिरेको सक्कल रसिद वा नागरिक एप (Nagarik App) मा देखिने डिजिटल ई-लाइसेन्स (QR Code सहित) देखाएर नेपालभर कानुनबमोजिम सवारी चलाउन पाइन्छ। ट्राफिक प्रहरीले यसलाई पूर्ण मान्यता दिएको छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'सवारी कर र ब्लुबुक समयमै नवीकरण नगरेमा कति जरिवाना लाग्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'चालू आर्थिक वर्ष समाप्त भएको मितिले ३ महिनाभित्र नवीकरण गर्दा कुनै जरिवाना लाग्दैन। त्यसपछिको पहिलो ३० दिनसम्म ५%, थप ४५ दिनसम्म १०%, र आर्थिक वर्षको अन्त्यसम्म ढिला भएमा २०% सम्म थप जरिवाना लाग्दछ। पाँच वर्षसम्म नवीकरण नगरे सवारी दर्ता नै खारेज हुन सक्छ।'
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

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10">
        
        {/* Breadcrumb Nav */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>उपकरणहरू (Tools Hub)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200">सवारी चालक अनुमतिपत्र परीक्षा हब</span>
        </div>

        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <Car className="w-4 h-4 text-emerald-600" />
            <span>यातायात व्यवस्था विभाग (DOTM) आधिकारिक परीक्षा तयारी प्रणाली</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            नेपाल सवारी चालक अनुमतिपत्र लिखित परीक्षा तथा ट्रायल सिम्युलेटर
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            वर्ग 'क' (मोटरसाइकल/स्कुटर) र वर्ग 'ख' (कार/जिप) को ५०० प्रश्नोत्तर मोडल टेस्ट, ७० अंकको नयाँ ट्रायल स्कोर क्यालकुलेटर, स्मार्ट कार्ड प्रिन्ट स्थिति जाँच र वार्षिक ब्लुबुक कर हिसाब गर्नुहोस्।
          </p>
        </div>

        {/* Interactive Hub Component */}
        <DrivingLicenseExamHub />

        {/* Social Share Bar */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
          <SocialShareBar 
            url="https://www.brbhatta.com/tools/driving-license-quiz"
            title="सवारी चालक अनुमतिपत्र लिखित परीक्षा तथा ७० अंकको नयाँ ट्रायल सिम्युलेटर | Driving License Exam Nepal"
          />
        </div>

        {/* Educational Content & Guidelines */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8 font-sans">
          
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              सवारी चालक अनुमतिपत्र (Driving License) परीक्षा सम्बन्धी महत्वपूर्ण जानकारी
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              नेपाल सरकार, भौतिक पूर्वाधार तथा यातायात मन्त्रालय, यातायात व्यवस्था विभाग (DOTM) ले सवारी चालक अनुमतिपत्र परीक्षा सञ्चालन कार्यविधि निर्देशिका बमोजिम नयाँ वस्तुगत प्रश्न बैंक र ७० अंकको प्रयोगात्मक (Trial) प्रणाली लागु गरेको छ।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span>लिखित परीक्षाको संरचना (Written Exam Structure)</span>
              </h3>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300 list-disc list-inside">
                <li>कुल प्रश्न संख्या: २० वटा बहुउत्तर प्रश्नहरू (MCQ)</li>
                <li>पूर्णाङ्क: २० अंक (प्रत्येक प्रश्नको १ अंक)</li>
                <li>उत्तीर्णाङ्क: कम्तीमा १२ अंक (६० प्रतिशत)</li>
                <li>समय: ३० मिनेट</li>
                <li>प्रश्न सोधिने क्षेत्रहरू: सवारी ऐन, ट्राफिक नियम, प्राविधिक ज्ञान, प्रदूषण र सुरक्षा</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span>७० अंकको नयाँ ट्रायल नियम (70-Point Trial Criteria)</span>
              </h3>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300 list-disc list-inside">
                <li>घुमाउरो ८ मा एकपटक खुट्टा टेकेमा ५ अंक काटिनेछ, तर दोस्रो पटक टेकेमा फेल।</li>
                <li>साँघुरो फल्याकबाट चक्का भुइँमा खसेमा सिधै फेल।</li>
                <li>रातो ट्राफिक बत्तीमा नरोकेमा १५ अंक काटिनेछ।</li>
                <li>उकालो (Ramp) मा ६ इन्चभन्दा बढी पछाडि सरेमा वा इन्जिन दुईपटक बन्द भएमा फेल।</li>
                <li>कुल १०० अंकमा ७० अंक वा सोभन्दा बढी ल्याएमा ट्रायल पास भइन्छ।</li>
              </ul>
            </div>
          </div>

          {/* Official FAQs */}
          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-600" />
              <span>प्रायः सोधिने प्रश्नहरू (Frequently Asked Questions)</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <p className="font-bold text-slate-900 dark:text-white">
                  १. अनलाइन लाइसेन्स फारम भर्दा के के कागजात चाहिन्छ?
                </p>
                <p className="text-slate-600 dark:text-slate-300 pt-1">
                  नागरिकता प्रमाणपत्रको दुवैतर्फको स्पष्ट फोटो, पासपोर्ट साइजको फोटो, र रगत समूह (Blood Group) खुल्ने रिपोर्ट चाहिन्छ।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <p className="font-bold text-slate-900 dark:text-white">
                  २. ट्रायलमा फेल भएमा फेरि कति पटक दिन पाइन्छ?
                </p>
                <p className="text-slate-600 dark:text-slate-300 pt-1">
                  लिखित परीक्षा पास भएको मितिले १८ महिनाभित्र ३ पटकसम्म प्रयोगात्मक (ट्रायल) परीक्षा दिन पाइन्छ (Retrial)। तेस्रो पटक पनि फेल भएमा पुनः सुरुदेखि फारम भर्नुपर्छ।
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
