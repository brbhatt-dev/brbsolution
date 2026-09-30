import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DolmaTestTabs from '@/components/DolmaTestTabs';
import SocialShareBar from '@/components/SocialShareBar';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'घरजग्गा कर क्यालकुलेटर (Tax Calculator) | BR Bhatta',
  description: 'नेपालको घरजग्गा रजिस्ट्रेसन दस्तुर, रोक्का दस्तुर, सेवा शुल्क तथा पुँजीगत लाभकर (CGT) को पूर्ण नेपाली क्यालकुलेटर।',
  robots: {
    index: true,
    follow: true,
  }
};

export default function TaxCalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
        
        {/* Breadcrumb Nav */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Link href="/tools" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>उपकरणहरू (Tools Hub)</span>
            </Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200">कर क्यालकुलेटर (Tax Calculator)</span>
          </div>
        </div>

        {/* The Exact Registration Rate & CGT Tabs Component */}
        <DolmaTestTabs />

        {/* Share Bar */}
        <div className="pt-2">
          <SocialShareBar 
            title="घरजग्गा कर तथा पुँजीगत लाभकर क्यालकुलेटर (Tax Calculator)" 
            url="/tools/test" 
          />
        </div>

      </main>

      <Footer />
    </div>
  );
}
