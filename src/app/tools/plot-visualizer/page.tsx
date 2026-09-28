import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlotVisualizer from '@/components/PlotVisualizer';
import SocialShareBar from '@/components/SocialShareBar';
import { Maximize2, ArrowLeft, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'जग्गाको आकार र रेखाचित्र स्केचर (Plot Visualizer) | BR Bhatta & Land Solution',
  description: 'नेपालमा बाङ्गो-टिङ्गो जग्गा (विषमबाहु चतुर्भुज) का ४ भुजा र विकर्ण हाल्नुहोस्—स्क्रिनमा जग्गाको प्रत्यक्ष नक्सा (SVG Plot) कोरिन्छ, कुल क्षेत्रफल (रोपनी-आना / बिघा-कट्ठा) र A4 साइजको नाप प्रतिवेदन स्लिप तयार हुन्छ।',
  keywords: [
    'Plot Visualizer Nepal',
    'Land Shape Sketcher Nepal',
    'जग्गाको नक्सा बनाउने सफ्टवेयर',
    'जग्गा रेखाचित्र स्केचर',
    'Heron Formula Land Area Nepal',
    'Quadrilateral Plot Area Calculator',
    'बाङ्गो जग्गा नाप्ने तरिका',
    'Land Solution Plot Sketcher',
    'अमिन जग्गा नाप क्यालकुलेटर'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/plot-visualizer',
  },
  openGraph: {
    title: 'जग्गाको आकार र रेखाचित्र स्केचर (Interactive Plot Visualizer) | Nepal Land Tools',
    description: 'चारै भुजा र विकर्ण हालेर जग्गाको प्रत्यक्ष नक्सा हेर्नुहोस् र रोपनी-आना / बिघा-कट्ठामा क्षेत्रफल गणना गर्नुहोस्।',
    url: 'https://www.brbhatta.com/tools/plot-visualizer',
    siteName: 'BR Bhatta & Land Solution',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function PlotVisualizerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'जग्गाको आकार र रेखाचित्र स्केचर (Interactive Plot Visualizer)',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    url: 'https://www.brbhatta.com/tools/plot-visualizer',
    description: 'Interactive cadastral land plot visualizer and irregular polygon sketcher for Nepal supporting Heron formula, Ropani, and Bigha units.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'NPR',
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
        
        {/* Breadcrumb Nav */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>उपकरणहरू (Tools Hub)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200">जग्गा रेखाचित्र स्केचर</span>
        </div>

        {/* Embedded Interactive Plot Visualizer Tool */}
        <PlotVisualizer />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="जग्गाको आकार र रेखाचित्र स्केचर (Interactive Plot Visualizer) - Land Solution" 
          url="/tools/plot-visualizer" 
        />

        {/* Technical Guide & FAQ for Citizens and Surveyors */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
              जग्गाको रेखाचित्र स्केचर सम्बन्धी प्रायः सोधिने प्रश्नहरू (FAQ)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-slate-700 dark:text-slate-300 leading-relaxed">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
                १. विकर्ण (Diagonal) नलिईकन ४ वटा भुजाले मात्र जग्गाको क्षेत्रफल किन निस्कँदैन?
              </h3>
              <p>
                ज्यामिति (Geometry) को नियम अनुसार, कुनै पनि चारवटा लट्ठीलाई चार कुनामा जोड्दा त्यो खुम्चिएर वा तन्किएर धेरै आकार लिन सक्छ (आयत, समानान्तर चतुर्भुज, वा विषमबाहु)। त्यसैले कुनै एउटा कुनाबाट अर्को कुनासम्मको विकर्ण (Diagonal) नापेपछि मात्र जग्गा २ वटा त्रिभुजमा बाँधिन्छ र क्षेत्रफल १००% स्थिर तथा यथार्थ हुन्छ।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
                २. यदि मेरो जग्गा त्रिभुज (३ कुने) वा आयताकार (४ कुने सिधा) छ भने के गर्ने?
              </h3>
              <p>
                माथिको टूलमा रहेको ट्याबबाट सिधै <strong>"३-भुजा (त्रिभुज)"</strong> वा <strong>"आयताकार (साधारण)"</strong> छान्नुहोस्। त्रिभुजमा ३ भुजा हाल्नासाथ हेरोन्स सूत्रबाट र आयतमा लम्बाइ × चौडाइबाट तत्कालै रेखाचित्र र क्षेत्रफल निस्कन्छ।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
                ३. तराईमा हात (Haat) वा मिटरमा नापेको छ भने कसरी हिसाब गर्ने?
              </h3>
              <p>
                नापको एकाइ (Unit) ड्रपडाउनबाट <strong>हात (Haat)</strong>, <strong>मिटर (Meters)</strong>, वा <strong>गज (Gaj)</strong> छान्नुहोस्। नेपालमा १ हात = १.५ फिट मानिन्छ। हाम्रो प्रणालीले जुनसुकै एकाइलाई पनि स्वतः वर्ग फिट, वर्ग मिटर, र बिघा-कट्ठा-धुर वा रोपनी-आनामा रूपान्तरण गर्दछ।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
                ४. यो प्रतिवेदन कहाँ-कहाँ प्रयोग गर्न सकिन्छ?
              </h3>
              <p>
                यो A4 स्लिपमा जग्गाको वास्तविक रेखाचित्र, चारैतिरको घेरा, विकर्ण, त्रिभुज विभाजन, र रोपनी तथा बिघा दुवैको प्रमाणित हिसाब प्रिन्ट हुन्छ। यसलाई घडेरी खरिद-बिक्री सम्झौता, बैंक भ्यालुएसन तयारी, अंशबन्डा छलफल, र फिल्ड नापी प्रतिवेदनको रूपमा प्रयोग गर्न सकिन्छ।
              </p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
