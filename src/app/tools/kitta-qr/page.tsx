import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KittaQrGenerator from '@/components/KittaQrGenerator';
import SocialShareBar from '@/components/SocialShareBar';
import { QrCode, ArrowLeft, BookOpen, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'कित्ता स्मार्ट QR कोड तथा जग्गा बिक्री फ्लायर जेनेरेटर (Real Estate Land QR) | BR Bhatta',
  description: 'नेपालमा घरजग्गा बिक्रीका लागि गुगल म्याप लोकेशन, कित्ता नम्बर, मूल्य र सम्पर्क नम्बर समेटिएको स्मार्ट QR कोड र A4 साइजको आकर्षक बिक्री साइनबोर्ड तुरुन्त बनाउनुहोस्।',
  keywords: [
    'Nepal Land QR Code Generator',
    'Real Estate QR Code Nepal',
    'Land For Sale Signboard Generator',
    'कित्ता QR कोड',
    'जग्गा बिक्री फ्लायर',
    'घरजग्गा साइनबोर्ड'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/kitta-qr',
  },
};

export default function KittaQrPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'कित्ता स्मार्ट QR कोड तथा जग्गा बिक्री फ्लायर जेनेरेटर',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    url: 'https://www.brbhatta.com/tools/kitta-qr',
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
          <span className="text-slate-800 dark:text-slate-200">कित्ता स्मार्ट QR कोड जेनेरेटर</span>
        </div>

        {/* Embedded QR Generator */}
        <KittaQrGenerator />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="कित्ता स्मार्ट QR कोड तथा जग्गा बिक्री फ्लायर जेनेरेटर" 
          url="/tools/kitta-qr" 
        />

        {/* Informative Guidance */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
              स्मार्ट QR कोड साइनबोर्ड प्रयोग गर्नुका फाइदाहरू
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-300 leading-relaxed">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1">
              <h3 className="font-bold text-slate-900 dark:text-white">सिधै गुगल म्याप नेभिगेसन:</h3>
              <p>
                ग्राहकले आफ्नो मोबाइलको क्यामराले QR कोड स्क्यान गर्नासाथ जग्गाको वास्तविक लोकेशन गुगल म्यापमा खुल्छ, जसले गर्दा बाटो खोज्न र जग्गा पत्ता लगाउन निकै सहज हुन्छ।
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1">
              <h3 className="font-bold text-slate-900 dark:text-white">व्यावसायिक विश्वसनीयता:</h3>
              <p>
                जग्गाको सिमाना वा कम्पाउन्डमा सामान्य हातले लेखेको बोर्ड भन्दा क्युआर कोड सहितको सफा प्रिन्ट गरिएको बोर्डले खरिदकर्तामा उच्च विश्वास जगाउँछ।
              </p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
