import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import CadastralScaleCalculator from '@/components/CadastralScaleCalculator';
import SocialShareBar from '@/components/SocialShareBar';
import { 
  Compass, 
  Ruler, 
  ArrowLeft, 
  Sparkles, 
  HelpCircle, 
  Layers, 
  MapPin,
  ChevronRight
} from 'lucide-react';

export default function CadastralScalePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/cadastral-scale-calculator#app',
        name: 'नापी नक्सा सिट नम्बर तथा स्केल क्याल्कुलेटर',
        description: 'Engineering tool to convert Nepal cadastral trace map scale measurements (1:500, 1:1250, 1:2500, 1:4800) into real-world ground meters, feet, ropani, and bigha.',
        url: 'https://www.brbhatta.com/tools/cadastral-scale-calculator',
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'All',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.brbhatta.com/tools/cadastral-scale-calculator#breadcrumb',
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
            name: 'नापी नक्सा स्केल क्याल्कुलेटर',
            item: 'https://www.brbhatta.com/tools/cadastral-scale-calculator'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/cadastral-scale-calculator#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: '१:५०० स्केलको नापी नक्सामा १ सेन्टिमिटर बराबर फिल्डमा कति मिटर हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '१:५०० स्केलको नक्सामा १ सेन्टिमिटर बराबर वास्तविक जमिनमा ५०० सेन्टिमिटर अर्थात् ठ्याक्कै ५ मिटर (१६.४ फिट) हुन्छ। त्यसैगरी १ मिलिमिटर (mm) बराबर आधा मिटर (०.५ मिटर) हुन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: '१:१२५० र १:२५०० स्केल कुन कुन क्षेत्रमा प्रयोग गरिन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '१:१२५० स्केल सामान्यतया अर्ध-शहरी र विकसित हुँदै गरेका नगरपालिकाहरूमा प्रयोग हुन्छ जहाँ १ से.मि. बराबर १२.५ मिटर हुन्छ। १:२५०० स्केल भने तराई र पहाडका ठूला कृषि फाँट तथा ग्रामीण क्षेत्रहरूमा प्रयोग हुन्छ जहाँ १ से.मि. बराबर २५ मिटर हुन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'नापी नक्साको सिट नम्बर कसरी पत्ता लगाउने?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'जग्गाधनी दर्ता प्रमाण पुर्जा (लालपुर्जा) को माथिल्लो भागमा वा नापी शाखाबाट लिएको डिजिटल ट्रेस नक्साको दायाँ सिरानमा सिट नम्बर (जस्तै: १०२-१२३४) स्पष्ट उल्लेख गरिएको हुन्छ।'
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
            📐 Cadastral Engineering Tool
          </span>
        </div>

        {/* Hero Section */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>नापी विभाग (DOS) को आधिकारिक १:५००, १:१२५० र १:२५०० स्केल मापदण्ड</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            नापी नक्सा सिट नम्बर तथा स्केल क्याल्कुलेटर
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            हातमा भएको नापीको कित्ता नक्सा (ट्रेस म्याप) मा साधारण रुलरले नापेर जमिनको वास्तविक लम्बाइ, चौडाइ र क्षेत्रफल निकाल्नुहोस्। १:५००, १:१२५०, १:२५०० स्केल रूपान्तरण र राष्ट्रिय ग्रिड सिट नम्बर विश्लेषक।
          </p>
        </div>

        {/* Interactive Scale Component */}
        <CadastralScaleCalculator />

        {/* Deep Explanatory Section */}
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
              <Compass className="w-6 h-6 text-emerald-600" />
              <span>नेपालमा प्रयोग हुने प्रमुख ४ नापी नक्सा स्केलहरूको तुलना</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              नक्साको १ सेन्टिमिटर बराबर जमिनमा कति हुन्छ?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="font-black text-emerald-600 text-base">१:५०० स्केल</span>
              <p className="text-slate-600 dark:text-slate-400">
                • <strong>१ से.मि. = ५ मिटर (१६.४ फिट)</strong>
                <br />• १ मि.मि. = ०.५ मिटर
                <br />• शहरी तथा बाक्लो बस्तीको घडेरी नक्सा
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="font-black text-blue-600 text-base">१:१२५० स्केल</span>
              <p className="text-slate-600 dark:text-slate-400">
                • <strong>१ से.मि. = १२.५ मिटर (४१ फिट)</strong>
                <br />• १ मि.मि. = १.२५ मिटर
                <br />• उपत्यका वरपर र नगरपालिका क्षेत्र
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="font-black text-amber-600 text-base">१:२५०० स्केल</span>
              <p className="text-slate-600 dark:text-slate-400">
                • <strong>१ से.मि. = २५ मिटर (८२ फिट)</strong>
                <br />• १ मि.मि. = २.५ मिटर
                <br />• कृषि क्षेत्र तथा ग्रामीण भेग
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="font-black text-purple-600 text-base">१:४८०० स्केल</span>
              <p className="text-slate-600 dark:text-slate-400">
                • <strong>१६ इन्च = १ माइल (पुरानो नापी)</strong>
                <br />• १ से.मि. = ४८ मिटर (१५७.५ फिट)
                <br />• साविक नापीको नक्सा
              </p>
            </div>
          </div>

        </div>

        {/* Social Share Bar */}
        <div className="pt-4">
          <SocialShareBar 
            title="नापी नक्सा सिट नम्बर तथा स्केल क्याल्कुलेटर | BR Bhatta"
            url="/tools/cadastral-scale-calculator"
          />
        </div>

      </main>

      <Footer />
    </div>
  );
}
