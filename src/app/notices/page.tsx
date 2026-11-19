import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DosNoticesWidget from '@/components/DosNoticesWidget';
import SocialShareBar from '@/components/SocialShareBar';
import AdSenseSlot from '@/components/AdSenseSlot';
import { Building2, ArrowLeft, ShieldCheck, FileText, Bell } from 'lucide-react';

export const metadata: Metadata = {
  title: 'नापी विभाग ताजा सूचना २०८३: परिपत्र, सरुवा, अमिन तालिम र निर्देशिका PDF (DOS Live Notices) | BR Bhatta',
  description: 'नेपाल सरकार नापी विभाग (dos.gov.np) द्वारा २०८३ मा जारी गरिएका ताजा आधिकारिक सूचना, जग्गा नापजाँच परिपत्र, सरुवा सूची, नतिजा र निर्देशिका PDF प्रत्यक्ष हेर्नुहोस्।',
  keywords: [
    'नापी विभाग सूचना २०८३',
    'Department of Survey notices nepal',
    'dos.gov.np notice',
    'नापी परिपत्र २०८३',
    'अमिन तालिम सूचना',
    'सरकारी जग्गा संरक्षण निर्देशिका',
    'BR Bhatta Notices'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/notices',
  },
  openGraph: {
    title: 'नापी विभाग ताजा सूचना २०८३: परिपत्र, सरुवा र निर्देशिका PDF | BR Bhatta',
    description: 'नेपाल सरकार नापी विभाग (dos.gov.np) का ताजा आधिकारिक सूचना, परिपत्र तथा निर्देशिका PDF अब प्रत्यक्ष हेर्नुहोस्।',
    url: 'https://www.brbhatta.com/notices',
    siteName: 'BR Bhatta',
    locale: 'en_US',
    type: 'website',
  },
};

export default function NoticesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 w-full">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>गृहपृष्ठ फर्कनुहोस्</span>
          </Link>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>आधिकारिक प्रत्यक्ष सिङ्क (Live Sync)</span>
          </div>
        </div>

        {/* Semantic Page H1 Header */}
        <header className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            नापी विभाग (DOS) ताजा सूचना, परिपत्र तथा निर्देशिका २०८३
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            नेपाल सरकार नापी विभाग (dos.gov.np) बाट प्रकाशित आधिकारिक परिपत्र, सरुवा, अमिन तालिम, परीक्षा नतिजा र जग्गा नापजाँच निर्देशिका PDF को प्रत्यक्ष बोर्ड।
          </p>
        </header>

        {/* AdSense Top Slot */}
        <AdSenseSlot userFacingLabel="प्रायोजित सूचना (Sponsored Notice Hub)" />

        {/* Full Interactive Survey Department Notices Widget */}
        <DosNoticesWidget maxItems={20} showSearch={true} />

        {/* Social Share Bar */}
        <SocialShareBar
          title="नापी विभागका ताजा सूचना तथा परिपत्रहरू (Department of Survey Live Notices)"
          url="/notices"
        />
      </main>

      <Footer />
    </div>
  );
}
