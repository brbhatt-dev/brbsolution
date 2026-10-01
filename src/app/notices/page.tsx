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
  title: 'नापी विभाग: प्रत्यक्ष सूचना तथा परिपत्र बोर्ड | Department of Survey Nepal Live Notices | BR Bhatta',
  description: 'नेपाल सरकार नापी विभाग (dos.gov.np) द्वारा जारी गरिएका सम्पूर्ण आधिकारिक सूचना, परिपत्र, निर्देशिका, सरुवा तथा तालिम विवरणहरूको प्रत्यक्ष अपडेट (Live Sync)।',
  keywords: [
    'नापी विभाग सूचना',
    'Department of Survey notices nepal',
    'dos.gov.np notice',
    'नापी परिपत्र',
    'अमिन तालिम सूचना',
    'सरकारी जग्गा संरक्षण निर्देशिका',
    'BR Bhatta Notices'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/notices',
  },
  openGraph: {
    title: 'नापी विभाग: ताजा सूचना तथा परिपत्र बोर्ड (Live Survey Notices)',
    description: 'नेपाल सरकार नापी विभाग (dos.gov.np) का आधिकारिक सूचनाहरू अब प्रत्यक्ष हेर्नुहोस्।',
    url: 'https://www.brbhatta.com/notices',
    siteName: 'BR Bhatta',
    locale: 'ne_NP',
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
