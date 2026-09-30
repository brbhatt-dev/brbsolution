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

        {/* Intro Card */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-red-950 text-white border border-emerald-500/20 shadow-xl relative overflow-hidden space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-emerald-300 border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>तपाईंको परिकल्पना अनुसारको प्रत्यक्ष नमुना (Design Demo)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            नेपाली पात्रो आधा भागमा + बाँकी भागमा फरर्र फहराएको झण्डा
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            तपाईंले भन्नुभए जस्तै पात्रो ब्यानरलाई चिटिक्क आधा साइज (५०%) बनाएर बाँकी खाली ठाउँमा हावाको गति अनुसार जीवन्त फहराउने (Fluttering 3D Animation) नेपालको चन्द्र-सूर्य अंकित झण्डा राखिएका ३ वटा प्रत्यक्ष विकल्पहरू तल हेर्न सक्नुहुन्छ:
          </p>
        </div>

        {/* Interactive Patro + Flag Showcase Component */}
        <PatroWithFlagDemo />

      </main>

      <Footer />
    </div>
  );
}
