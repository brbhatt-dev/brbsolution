import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import LandPrecedentsHub from '@/components/LandPrecedentsHub';
import SocialShareBar from '@/components/SocialShareBar';
import { 
  Scale, 
  Gavel, 
  ArrowLeft, 
  FileText, 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle,
  AlertTriangle,
  Compass,
  CheckCircle2
} from 'lucide-react';

export default function LandDisputePrecedentsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/land-dispute-precedents#app',
        name: 'सर्वोच्च अदालतका ऐतिहासिक घरजग्गा तथा नापी नजीरहरू (नेकाप फैसला संग्रह)',
        description: 'Landmark Supreme Court of Nepal judgments and precedents on land dispute, right of easement, boundary wall, cadastral map discrepancy, Mohi rights, partition and earnest money contract.',
        url: 'https://www.brbhatta.com/tools/land-dispute-precedents',
        applicationCategory: 'LegalService',
        operatingSystem: 'All',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.brbhatta.com/tools/land-dispute-precedents#breadcrumb',
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
            name: 'घरजग्गा तथा नापी नजीर भल्ट',
            item: 'https://www.brbhatta.com/tools/land-dispute-precedents'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/land-dispute-precedents#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'सर्वोच्च अदालतको नजीर (Precedent) भनेको के हो र यसको कानुनी मान्यता कति हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'नेपालको संविधानको धारा १२८ को उपधारा (४) अनुसार सर्वोच्च अदालतले गरेको मुद्दाको व्याख्या वा प्रतिपादन गरेको कानुनी सिद्धान्त (नजीर) नेपालका सम्पूर्ण अदालतहरू, न्यायिक समितिहरू, मालपोत तथा नापी कार्यालयहरूका लागि कानुन सरह बाध्यात्मक हुन्छ। मातहतका निकायले नजीर विपरित निर्णय गर्न पाउँदैनन्।'
            }
          },
          {
            '@type': 'Question',
            name: 'छिमेकीले परम्परागत बाटो थुनिदिएमा कुन नजीर र दफा अनुसार बाटो खुलाउन सकिन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'मुलुकी देवानी संहिता २०७४ को सुखाधिकार (Right of Easement) सम्बन्धी व्यवस्था र सर्वोच्च अदालतको नेकाप २०७६ नि.नं. १०३३३ को ऐतिहासिक नजीर अनुसार परापूर्वकालदेखिको बाटो कसैको निजी जग्गामा पर्छ भन्दैमा थुन्न पाइँदैन। स्थानीय तहको न्यायिक समिति वा जिल्ला अदालतमा उजुरी गरी तत्काल बाटो खुलाउन सकिन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'नापी नक्सामा जग्गाको क्षेत्रफल पुर्जाभन्दा कम देखिएमा के गर्ने?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'नेकाप २०६८ नि.नं. ८६९५ को नजीर अनुसार नापीको प्राविधिक त्रुटि वा स्केल विचलनका कारण नक्सा र फिल्ड फरक परेमा साविक भोग, स्रेस्ता र चारकिल्लालाई प्राथमिकता दिइन्छ। नापी कार्यालयमा कित्ता सच्याउने निवेदन दिएर फिल्ड बुक र भोगका आधारमा सच्याउन सकिन्छ।'
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
        
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>सबै डिजिटल टुलहरूमा फर्कनुहोस्</span>
          </Link>

          <span className="text-2xs font-bold px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            ⚖️ Legal Precedents Vault
          </span>
        </div>

        {/* Hero Section */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>नेपाल कानून पत्रिका (नेकाप) तथा सर्वोच्च अदालत नजिर भल्ट</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            सर्वोच्च अदालतका ऐतिहासिक घरजग्गा तथा नापी नजीरहरू
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            नेपालमा घरजग्गा तथा नापी सम्बन्धी विवादहरू (बाटो थुनेको, नक्सा र फिल्ड फरक परेको, साँध-सीमाना, मोही हक, अंशबन्डा, र बैनापट्टा करार उल्लङ्घन) मा सर्वोच्च अदालतले प्रतिपादन गरेका ऐतिहासिक नजिरहरू, कानुनी सिद्धान्त, र अदालत तथा वडामा पेस गर्न मिल्ने औपचारिक उद्धरण (Citation) डाइरेक्टरी।
          </p>
        </div>

        {/* Interactive Precedents Hub Component */}
        <LandPrecedentsHub />

        {/* Deep Explanatory Guide Section */}
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
              <Gavel className="w-6 h-6 text-emerald-600" />
              <span>घरजग्गा विवादमा सर्वोच्च अदालतको नजीर कसरी प्रयोग गर्ने?</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              अदालत, पालिका न्यायिक समिति र मालपोत कार्यालयमा नजीर उद्धृत गर्ने कानुनी प्रक्रिया
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="w-7 h-7 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                १
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                संवैधानिक बाध्यकारिता
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                नेपालको संविधानको धारा १२८ (४) अनुसार सर्वोच्च अदालतले प्रतिपादन गरेको सिद्धान्त मातहतका सबै अदालत, निकाय र कार्यालयहरूले अनिवार्य पालना गर्नुपर्छ।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="w-7 h-7 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                २
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                औपचारिक उद्धरण (Citation)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                बहस नोट वा फिरादपत्रमा नेकाप साल, महिना वा अंक, निर्णय नम्बर (नि.नं.) र प्रतिपादित सिद्धान्त स्पष्ट रूपमा उल्लेख गर्नुपर्दछ। हाम्रो टुलको "उद्धरण कपी" बटनले यो काम सहज बनाउँछ।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="w-7 h-7 rounded-xl bg-amber-600 text-white font-bold text-xs flex items-center justify-center">
                ३
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                तथ्यगत समानता (Ratio Matching)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                नजीर प्रयोग गर्दा आफ्नो मुद्दाको तथ्य र सर्वोच्चको मुद्दाको तथ्य मिल्दोजुल्दो हुनुपर्छ। तथ्य फरक भएमा 'Distinguish' भई नजीर लागु नहुन सक्छ।
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-600" />
              <span>बारम्बार सोधिने प्रश्नहरू (Frequently Asked Questions)</span>
            </h3>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  प्रश्न: के वडा कार्यालय वा पालिकाको न्यायिक समितिमा नजीर लागु हुन्छ?
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  उत्तर: हो, स्थानीय सरकार सञ्चालन ऐन २०७४ अनुसार न्यायिक समितिलाई साँध-सीमाना, बाटो, कुलो, र पानीको निकास सम्बन्धी विवाद मिलाउने अधिकार छ। न्यायिक समितिले निर्णय गर्दा सर्वोच्च अदालतका नजीरहरू अनिवार्य रूपमा मान्नुपर्दछ।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  प्रश्न: सरकारी वा सार्वजनिक बाटो कसैले दर्ता गराएर धेरै वर्ष भोग गर्यो भने निजी हुन्छ?
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  उत्तर: हुँदैन। सर्वोच्च अदालतको नेकाप २०७८ नि.नं. १०६४० को नजीर अनुसार सार्वजनिक, सरकारी वा नदी किनारको जग्गामा जतिसुकै वर्ष कसैले भोग गरे पनि वा गलत तरिकाले लालपुर्जा बनाए पनि सरकारले मालपोत ऐनको दफा २४ प्रयोग गरेर जुनसुकै बेला बदर गर्न सक्छ।
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Social Share Bar */}
        <div className="pt-4">
          <SocialShareBar 
            title="सर्वोच्च अदालतका ऐतिहासिक घरजग्गा तथा नापी नजीरहरू (नेकाप फैसला संग्रह) | BR Bhatta"
            url="/tools/land-dispute-precedents"
          />
        </div>

      </main>

      <Footer />
    </div>
  );
}
