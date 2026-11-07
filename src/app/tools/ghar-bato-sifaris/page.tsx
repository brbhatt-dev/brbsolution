import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import GharBatoSifarisHub from '@/components/GharBatoSifarisHub';
import SocialShareBar from '@/components/SocialShareBar';
import { 
  Building2, 
  MapPin, 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle,
  AlertTriangle,
  Compass,
  FileCheck2,
  ChevronRight
} from 'lucide-react';

export default function GharBatoSifarisPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/ghar-bato-sifaris#app',
        name: 'घरबाटो सिफारिस तथा चारकिल्ला प्रमाणित निवेदन जेनेरेटर',
        description: 'Interactive generator for Nepal Ward Office road access certification (घरबाटो सिफारिस) and boundary certification (चारकिल्ला प्रमाणित) with fee matrix and document checklist.',
        url: 'https://www.brbhatta.com/tools/ghar-bato-sifaris',
        applicationCategory: 'GovernmentApplication',
        operatingSystem: 'All',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.brbhatta.com/tools/ghar-bato-sifaris#breadcrumb',
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
            name: 'घरबाटो सिफारिस हब',
            item: 'https://www.brbhatta.com/tools/ghar-bato-sifaris'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/ghar-bato-sifaris#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'घरबाटो सिफारिस लिनु किन अनिवार्य छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'जग्गामा नयाँ घर निर्माण गरी नक्सा पास गर्न, बैंक वा वित्तीय संस्थाबाट घरजग्गा धितो राखी ऋण (Home Loan) लिन, वा जग्गाको वास्तविक सडक पहुँच प्रमाणित गर्न स्थानीय तह (वडा कार्यालय) बाट घरबाटो सिफारिस लिनु कानुनी रूपमा अनिवार्य हुन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'घरबाटो सिफारिस लिन वडा कार्यालयमा कति दस्तुर लाग्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'सडकको चौडाइ र पालिकाको आर्थिक ऐन अनुसार दस्तुर निर्धारण हुन्छ। सामान्यतया ६ मिटरभन्दा फराकिलो कालोपत्रे बाटोका लागि रु. १,००० देखि २,००० सम्म, १३ देखि १६ फिट बाटोका लागि रु. ५०० देखि १,००० सम्म, र साँघुरो वा गोरेटो बाटोका लागि रु. ३०० देखि ५०० सम्म शुल्क लाग्ने गर्दछ।'
            }
          },
          {
            '@type': 'Question',
            name: 'यदि नापीको नक्सामा बाटो नदेखिए तर फिल्डमा बाटो चलेको भए के हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'यदि नापी नक्सामा बाटो नजनिएको तर फिल्डमा परापूर्वकालदेखि बाटो चलिरहेको छ भने वडा कार्यालयले स्थलगत सर्जमिन मुचुल्का तयार गरी साँधियारहरूको रोहबरमा घरबाटो सिफारिस जारी गर्न सक्दछ।'
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

          <span className="text-2xs font-bold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            🏛️ Ward Citizen Service Hub
          </span>
        </div>

        {/* Hero Section */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>स्थानीय सरकार सञ्चालन ऐन २०७४ बमोजिम वडा सिफारिस ढाँचा</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            घरबाटो सिफारिस तथा चारकिल्ला प्रमाणित निवेदन जेनेरेटर
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            बैंक कर्जा, घर नक्सा पास, वा जग्गा मूल्यांकनका लागि वडा कार्यालयबाट घरबाटो सिफारिस र चारकिल्ला प्रमाणित लिन आधिकारिक नेपाली निवेदन अनलाइनमै तयार गर्नुहोस्। सडक चौडाइ मापदण्ड, वडा दस्तुर दररेट र आवश्यक ५ कागजात चेकलिस्ट।
          </p>
        </div>

        {/* Interactive Ghar Bato Hub Component */}
        <GharBatoSifarisHub />

        {/* Deep Explanatory Section */}
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
              <Building2 className="w-6 h-6 text-emerald-600" />
              <span>घरबाटो सिफारिस लिने सरल ५-चरणीय प्रक्रिया</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              वडा कार्यालयमा लाइन नबसी १ दिनमै सिफारिस प्राप्त गर्ने तरिका
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="w-7 h-7 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                १
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                निवेदन र कागजात तयारी
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                हाम्रो टुलबाट निवेदक र जग्गाको विवरण भरी आधिकारिक निवेदन A4 मा प्रिन्ट गर्नुहोस् र लालपुर्जा, नागरिकता, तिरो रसिद र नापी नक्सा साथमा राख्नुहोस्।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="w-7 h-7 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                २
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                वडा प्राविधिक टोलीको स्थलगत निरीक्षण
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                वडा कार्यालयमा निवेदन दर्ता भएपछि वडाका सब-ओभरसियर वा अमिनले फिल्डमा गएर बाटोको वास्तविक चौडाइ (फिताले नापेर) र सडकको प्रकार प्रमाणित गर्छन्।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="w-7 h-7 rounded-xl bg-amber-600 text-white font-bold text-xs flex items-center justify-center">
                ३
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                दस्तुर भुक्तानी र सिफारिस पत्र
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                तोकिएको दस्तुर बुझाएपछि वडा अध्यक्ष वा वडा सचिवको हस्ताक्षर र छाप सहित आधिकारिक घरबाटो सिफारिस पत्र प्रदान गरिन्छ।
              </p>
            </div>
          </div>

        </div>

        {/* Social Share Bar */}
        <div className="pt-4">
          <SocialShareBar 
            title="घरबाटो सिफारिस तथा चारकिल्ला प्रमाणित निवेदन जेनेरेटर | BR Bhatta"
            url="/tools/ghar-bato-sifaris"
          />
        </div>

      </main>

      <Footer />
    </div>
  );
}
