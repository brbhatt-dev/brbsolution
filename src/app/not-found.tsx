import React from 'react';
import Link from 'next/link';
import { Home, Compass, ArrowLeft, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: '४०४ - पृष्ठ फेला परेन | 404 Page Not Found - BR Bhatta',
  description: 'माफ गर्नुहोस्, तपाईंले खोज्नुभएको पृष्ठ फेला परेन। (Page not found)',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-16 sm:py-24">
        <div className="max-w-md w-full text-center space-y-6">
          
          {/* 404 Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold tracking-wide">
            <Compass className="w-3.5 h-3.5 animate-spin" />
            <span>त्रुटि कोड: ४०४ (Error 404)</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              पृष्ठ फेला परेन
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              तपाईंले खोज्नुभएको वेबपेज स्थानान्तरण गरिएको वा मेटाइएको हुनसक्छ।
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold transition-all shadow-xs"
            >
              <Home className="w-4 h-4" />
              <span>गृहपृष्ठ (Homepage) जानुहोस्</span>
            </Link>

            <Link
              href="/tools"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all"
            >
              <Search className="w-4 h-4" />
              <span>डिजिटल उपकरणहरू हेर्नुहोस्</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
