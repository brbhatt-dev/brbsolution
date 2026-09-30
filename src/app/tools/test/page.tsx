import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DolmaRegistrationRateCalculator from '@/components/DolmaRegistrationRateCalculator';
import SocialShareBar from '@/components/SocialShareBar';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'रजिष्ट्रेशन दस्तुर, सेवा शुल्क र रोक्का दस्तुर (DOLMA Test) | BR Bhatta',
  description: 'नेपाल सरकार, भूमि व्यवस्थापन तथा अभिलेख विभाग (DOLMA) को आधिकारिक रजिष्ट्रेशन दस्तुर, सेवा शुल्क र घरजग्गा रोक्का दस्तुर क्यालकुलेटर (परीक्षण संस्करण)।',
  robots: {
    index: false,
    follow: true,
  }
};

export default function DolmaTestPage() {
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
            <span className="text-slate-800 dark:text-slate-200">सरकारी दस्तुर क्यालकुलेटर (Test)</span>
          </div>

          <a
            href="https://dolma.gov.np/public/api/utilities/registration_rate.php"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>आधिकारिक स्रोत (dolma.gov.np)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* The Exact DOLMA Registration Rate Calculator Component */}
        <DolmaRegistrationRateCalculator />

        {/* Share Bar */}
        <div className="pt-2">
          <SocialShareBar 
            title="रजिष्ट्रेशन दस्तुर, सेवा शुल्क र रोक्का दस्तुर (DOLMA सरकारी दर)" 
            url="/tools/test" 
          />
        </div>

      </main>

      <Footer />
    </div>
  );
}
