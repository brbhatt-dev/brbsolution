import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SurveyOfficesDirectory from '@/components/SurveyOfficesDirectory';
import SocialShareBar from '@/components/SocialShareBar';
import { Building2, ArrowLeft, Compass, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'नेपालका नापी तथा मालपोत कार्यालयहरूको निर्देशिका (Survey & Malpot Offices Directory) | BR Bhatta',
  description: 'नेपालका ७७ वटै जिल्लाका नापी कार्यालय (Survey Office) र मालपोत कार्यालय (Land Revenue Office) हरूको फोन नम्बर, ठेगाना, इमेल र कार्यक्षेत्र (Jurisdiction) को आधिकारिक डिजिटल निर्देशिका।',
  keywords: [
    'Survey Offices Nepal',
    'Malpot Office Contact Nepal',
    'Nepal Napi Karyalaya Phone Number',
    'Dillibazar Napi Phone Number',
    'नापी कार्यालय फोन नम्बर',
    'मालपोत कार्यालय ठेगाना',
    'काठमाडौँ नापी कार्यालय कार्यक्षेत्र'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/survey-offices',
  },
  openGraph: {
    title: 'नेपालका नापी तथा मालपोत कार्यालयहरूको निर्देशिका | BR Bhatta',
    description: 'नेपालभरिका नापी तथा मालपोत कार्यालयहरूको आधिकारिक सम्पर्क नम्बर, ठेगाना र कार्यक्षेत्र खोज्नुहोस्।',
    url: 'https://www.brbhatta.com/tools/survey-offices',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function SurveyOfficesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentOrganization',
    name: 'नेपाल नापी तथा मालपोत कार्यालयहरूको निर्देशिका',
    description: 'Official contact and location directory of survey and land revenue offices in Nepal.',
    url: 'https://www.brbhatta.com/tools/survey-offices',
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
          <span className="text-slate-800 dark:text-slate-200">नापी तथा मालपोत कार्यालय निर्देशिका</span>
        </div>

        {/* Page Hero */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-bold">
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>नेपाल सरकार नापी तथा भूमि व्यवस्थापन कार्यालयहरू</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            नेपालका नापी तथा मालपोत कार्यालयहरूको सम्पर्क निर्देशिका
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            नेपालका ७७ वटै जिल्लाका नापी र मालपोत कार्यालयहरूको आधिकारिक सम्पर्क नम्बर, ठेगाना, इमेल र वडा कार्यक्षेत्र खोज्नुहोस्।
          </p>
        </div>

        {/* Directory Component */}
        <SurveyOfficesDirectory />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="नेपालका नापी तथा मालपोत कार्यालयहरूको आधिकारिक सम्पर्क निर्देशिका" 
          url="/tools/survey-offices" 
        />

      </main>

      <Footer />
    </div>
  );
}
