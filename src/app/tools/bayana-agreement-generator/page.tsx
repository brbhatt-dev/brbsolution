import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import BayanaAgreementGenerator from '@/components/BayanaAgreementGenerator';
import SocialShareBar from '@/components/SocialShareBar';
import { 
  Scale, 
  FileText, 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle,
  AlertTriangle,
  BookOpen,
  Printer,
  ChevronRight
} from 'lucide-react';

export default function BayanaAgreementPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/bayana-agreement-generator#app',
        name: 'घरजग्गा बैनापट्टा (Earnest Money Agreement) A4 PDF जेनेरेटर',
        description: 'Interactive legal generator for Nepal land purchase earnest money agreement (बैनापट्टा) conforming to Muluki Civil Code 2074 with printable A4 deed layout.',
        url: 'https://www.brbhatta.com/tools/bayana-agreement-generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'All',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.brbhatta.com/tools/bayana-agreement-generator#breadcrumb',
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
            name: 'घरजग्गा बैनापट्टा जेनेरेटर',
            item: 'https://www.brbhatta.com/tools/bayana-agreement-generator'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/bayana-agreement-generator#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'के यो टुलबाट बनेको बैनापट्टा अदालत तथा मालपोतमा कानुनी रूपमा मान्य हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'हो, यो सम्झौतापत्र मुलुकी देवानी संहिता २०७४ को भाग ५ (करार सम्बन्धी व्यवस्था) र प्रमाण ऐन २०३१ बमोजिम अदालतमा पूर्ण प्रमाण लाग्ने गरी तयार पारिएको छ। रु. १ लाखभन्दा बढी थैली अंक भएको कारोबारमा स्थानीय वडा कार्यालयमा दर्ता वा नोटरी पब्लिकबाट प्रमाणित गराउँदा अझ बलियो प्रमाण बन्दछ।'
            }
          },
          {
            '@type': 'Question',
            name: 'बैना गरिसकेपछि बिक्रेताले जग्गा पास गर्न मानेन भने के हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'यदि बिक्रेताले जग्गा पास गर्न आलटाल गरेमा वा अन्यत्र बिक्री गर्न खोजेमा बैनापट्टामा उल्लिखित सर्त अनुसार बैना रकमको दोब्बर हर्जाना भराउन वा अदालतमा करार बमोजिम काम गराई पाउँ भनी मुद्दा दायर गरी अदालतको आदेशबाटै जग्गा पास गराउन सकिन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'बैना रकम कसरी भुक्तानी गर्नु सबैभन्दा सुरक्षित हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'बैना रकम कहिल्यै नगद नदिनुहोस्। जग्गाधनीको आफ्नै नाममा रहेको बैंक खातामा एकाउन्टपेयी चेक (Account Payee Cheque) वा कनेक्ट आईपीएस (ConnectIPS) बाट मात्र पठाउनुहोस् र बैकिङ भौचर बैना कागजसँगै सुरक्षित राख्नुहोस्।'
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>सबै डिजिटल टुलहरूमा फर्कनुहोस्</span>
          </Link>

          <span className="text-2xs font-bold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            ⚖️ Legal Deed Generator
          </span>
        </div>

        {/* Hero Section */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>मुलुकी देवानी संहिता २०७४ बमोजिम प्रमाणित कानुनी ढाँचा</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            घरजग्गा बैनापट्टा (Earnest Money Agreement) A4 PDF जेनेरेटर
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            नेपालमा घर वा जग्गा खरिदबिक्री गर्दा दुवै पक्षलाई सुरक्षित राख्ने आधिकारिक बैनापट्टा लिखित सम्झौतापत्र अनलाइनमै तयार गर्नुहोस्। कित्ता नम्बर, चारकिल्ला, बैना रकम, दोब्बर हर्जाना सर्त र साक्षी विवरण भरी १-क्लिकमा A4 साइजमा सिधै प्रिन्ट वा PDF सेभ गर्नुहोस्।
          </p>
        </div>

        {/* Interactive Bayana Generator Component */}
        <BayanaAgreementGenerator />

        {/* Deep Legal Context & Cross-Link to Article #32 */}
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                <span>बैना गर्दा ठगीबाट बच्ने सुनौलो नियमहरू</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                बैना कागजमा हस्ताक्षर गर्नुपूर्व अनिवार्य पालना गर्नुपर्ने कानूनी सावधानीहरू
              </p>
            </div>

            <Link
              href="/articles/land-earnest-money-bayana-rules-fraud-prevention-commission-nepal"
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white text-emerald-600 dark:text-emerald-400 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
            >
              <span>पूर्ण बैना गाईड (लेख #३२) पढ्नुहोस्</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="w-7 h-7 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                १
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                मालपोतमा रोक्का जाँच (Rokka Check)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                बैना दिनुभन्दा अगाडि मालपोत कार्यालयमा गएर वा LRIMS अनलाइन प्रणालीबाट उक्त कित्ता बैंक, अदालत वा अख्तियारबाट रोक्का छ कि छैन १००% यकिन गर्नुहोस्।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="w-7 h-7 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                २
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                नापी ट्रेस नक्सा र बाटो चौडाइ
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                नापी कार्यालयबाट कित्ताको आधिकारिक डिजिटल ट्रेस नक्सा लिई फिल्डमा अमिन लगेर चारकिल्ला र बाटोको वास्तविक चौडाइ (१३ फिट/२० फिट) नाप्नुहोस्।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="w-7 h-7 rounded-xl bg-amber-600 text-white font-bold text-xs flex items-center justify-center">
                ३
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                १ लाखमाथिको वडा प्रमाणीकरण
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                मुलुकी देवानी संहिता २०७४ को दफा ३६ (२) बमोजिम रु. १ लाखभन्दा बढी थैली अंक भएको बैनापट्टा वडा कार्यालयमा दर्ता वा नोटरीबाट प्रमाणित गराउनु कानुनी रूपमा अनिवार्य मानिन्छ।
              </p>
            </div>
          </div>

        </div>

        {/* Social Share Bar */}
        <div className="pt-4">
          <SocialShareBar 
            title="घरजग्गा बैनापट्टा (Earnest Money Agreement) A4 PDF जेनेरेटर | BR Bhatta"
            url="/tools/bayana-agreement-generator"
          />
        </div>

      </main>

      <Footer />
    </div>
  );
}
