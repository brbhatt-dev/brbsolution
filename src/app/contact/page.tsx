import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'सम्पर्क गर्नुहोस् (Contact Us) | BR Bhatta & Land Solution Nepal',
  description: 'Get in touch with BR Bhatta for Land Solution technical support, AutoCAD LSP custom tools, or software inquiries in Kathmandu, Nepal.',
  alternates: {
    canonical: 'https://www.brbhatta.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Header Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>गृहपृष्ठ (Home) फर्कनुहोस्</span>
          </Link>
          <span className="text-xs font-mono text-slate-500 font-semibold">www.brbhatta.com</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
        <Contact />
      </main>

    </div>
  );
}
