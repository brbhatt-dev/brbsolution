import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Clock } from 'lucide-react';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact Us (सम्पर्क गर्नुहोस्) | BR Bhatta & Land Solution Nepal',
  description: 'Get in touch with BR Bhatta for Land Solution Android app support, AutoCAD LSP automation scripts, or technical inquiries in Kathmandu, Nepal.',
  alternates: {
    canonical: 'https://www.brbhatta.com/contact',
  },
  openGraph: {
    title: 'Contact Us (सम्पर्क गर्नुहोस्) | BR Bhatta & Land Solution Nepal',
    description: 'Official contact and technical support desk for www.brbhatta.com and Land Solution Nepal.',
    url: 'https://www.brbhatta.com/contact',
    siteName: 'BR Bhatta',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      
      {/* Header Bar */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home (गृहपृष्ठ)</span>
          </Link>
          <span className="text-xs font-mono text-slate-500 font-semibold">www.brbhatta.com</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-8">
        <Contact />

        {/* Official English Support & Editorial Contact Information */}
        <section className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <h2 className="text-lg font-black text-slate-900 dark:text-white">
            Official Technical Support &amp; Editorial Contact Desk (English Information)
          </h2>
          <p>
            Have a question regarding the <strong>Land Solution Android Application</strong> (<code className="font-mono text-xs">com.brbhatta.landsolution</code>), our <strong>AutoCAD AutoLISP (.LSP) Surveying Suite</strong>, <strong>Hamro Kosh</strong>, or any of the online cadastral and tax calculators on <strong>www.brbhatta.com</strong>? Use the direct inquiry form above or reach out to our team via email:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white text-xs">
                <Mail className="w-4 h-4 text-emerald-600" />
                <span>Official Email</span>
              </div>
              <p className="text-xs font-mono text-emerald-700 dark:text-emerald-400">info@brbhatta.com</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white text-xs">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Headquarters</span>
              </div>
              <p className="text-xs">Kathmandu, Bagmati Province, Nepal</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white text-xs">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Response Time</span>
              </div>
              <p className="text-xs">Within 24 Hours (Sun–Fri, NPT)</p>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
