import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VirtualAminGame from '@/components/VirtualAminGame';
import SocialShareBar from '@/components/SocialShareBar';
import AdSenseSlot from '@/components/AdSenseSlot';
import { ArrowLeft, Sparkles, BookOpen, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'भर्चुअल अमिन फिल्ड नापी सिमुलेटर खेल (Virtual Amin Cadastral Game) | BR Bhatta',
  description: 'नेपालमा वास्तविक नापी फित्ता, हेरन सूत्र र कित्ताकाट नियम प्रयोग गरी बाङ्गो-टिङ्गो जग्गा नाप्ने, क्षेत्रफल निकाल्ने र "प्रमाणित डिजिटल अमिन" प्रमाणपत्र जित्ने अन्तरक्रियात्मक खेल।',
  keywords: [
    'Virtual Amin Game Nepal',
    'Cadastral Survey Simulator',
    'नापी अमिन खेल',
    'जग्गा नाप्ने खेल',
    'Heron Formula Simulator',
    'अमिन तालिम खेल',
    'BR Bhatta Amin Game'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/virtual-amin-game',
  },
  openGraph: {
    title: 'भर्चुअल अमिन फिल्ड नापी सिमुलेटर खेल (Virtual Amin Game)',
    description: 'वास्तविक नापी फित्ताले जग्गा नाप्नुहोस्, हेरन सूत्र लगाउनुहोस् र डिजिटल अमिन प्रमाणपत्र जित्नुहोस्!',
    url: 'https://www.brbhatta.com/tools/virtual-amin-game',
    siteName: 'BR Bhatta & Land Solution',
    locale: 'ne_NP',
    type: 'website',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Virtual Amin Game' }],
  },
};

export default function VirtualAminGamePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 w-full">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>सबै उपकरणहरू (Tools Hub)</span>
          </Link>

          <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-bold">
            <Trophy className="w-3.5 h-3.5" />
            <span>इन्टर्याक्टिभ नापी सिमुलेटर</span>
          </div>
        </div>

        {/* AdSense Top Slot */}
        <AdSenseSlot userFacingLabel="प्रायोजित सूचना (Sponsored Notice)" />

        {/* 🎮 The Interactive Virtual Amin Game Core */}
        <VirtualAminGame />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="भर्चुअल अमिन फिल्ड नापी सिमुलेटर खेल — जग्गा नाप्नुहोस् र प्रमाणपत्र जित्नुहोस्!" 
          url="/tools/virtual-amin-game" 
        />

        {/* Educational Information Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-black text-base sm:text-lg">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <span>यो खेलबाट तपाईंले के सिक्नुहुन्छ?</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
              <span className="font-extrabold text-slate-900 dark:text-white block">१. लम्बाइ र चौडाइ गुणन:</span>
              <p>सीधा चारपाटे घडेरीको क्षेत्रफल निकाली त्यसलाई पहाडी (आना-पैसा-दाम) मा बदल्ने शुद्ध सूत्र।</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
              <span className="font-extrabold text-slate-900 dark:text-white block">२. हेरन सूत्र (Heron's Formula):</span>
              <p>बाङ्गो-टिङ्गो चारपाटे जग्गामा विकर्ण तानेर दुईवटा त्रिभुज बनाएर शुद्ध क्षेत्रफल निकाल्ने अमिन प्रविधि।</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
              <span className="font-extrabold text-slate-900 dark:text-white block">३. कित्ताकाट मापदण्ड:</span>
              <p>नेपाल सरकारको भू-उपयोग नियमावली २०७९ अनुसार नयाँ घडेरीका लागि चाहिने न्यूनतम १३० वर्गमिटर मापदण्ड।</p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
