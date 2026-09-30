import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PatroWithFlagDemo from '@/components/PatroWithFlagDemo';
import { ArrowLeft, Sparkles, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'नेपाली पात्रो + फरर्र फहराएको झण्डा (Live Demo) | BR Bhatta',
  description: 'नेपाली पात्रो (वि.सं., तिथि, समय) को आधा भागमा चिटिक्क डिजाइन र बाँकी भागमा फरर्र फहराएको राष्ट्रिय झण्डाको प्रत्यक्ष डेमो।',
  robots: {
    index: false,
    follow: true,
  }
};

export default function FlagPatroDemoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
        
        {/* Breadcrumb Nav */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>गृहपृष्ठ (Home)</span>
            </Link>
            <span>/</span>
            <Link href="/demo" className="hover:text-emerald-600 transition-colors">
              <span>डेमोहरू (Showroom)</span>
            </Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200">पात्रो + फहराएको झण्डा डेमो</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs font-bold border border-red-200 dark:border-red-900">
            <Heart className="w-3.5 h-3.5 fill-red-500" />
            <span>नेपालको झण्डा फरर्र 🇳🇵</span>
          </div>
        </div>

        {/* Compact Title & Subtitle */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span>🇳🇵</span>
              <span>नेपाली पात्रो (५०%) + फरर्र फहराएको राष्ट्रिय झण्डा</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              तपाईंले भन्नुभए अनुसार आधा भागमा पात्रो र बाँकी ठाउँमा ३D हावाको लहरसहित फहराएको नेपालको झण्डाका प्रत्यक्ष विकल्पहरू:
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20 shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>३ वटा प्रत्यक्ष विकल्पहरू (Live)</span>
          </div>
        </div>

        {/* Interactive Patro + Flag Showcase Component */}
        <PatroWithFlagDemo />

      </main>

      <Footer />
    </div>
  );
}
