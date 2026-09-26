import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyleMinistryMolcpa from '@/components/demos/StyleMinistryMolcpa';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Demo21Page() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100">
      <Navbar />

      {/* Top Banner */}
      <div className="bg-red-900 text-white px-4 py-2.5 text-xs border-b border-red-950 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold">Demo २१: भूमि व्यवस्था मन्त्रालय (molcpa.gov.np)</span>
          <span className="text-red-200 hidden sm:inline">&bull; राष्ट्रिय भू-उपयोग ऐन, राजपत्र तथा मन्त्रिपरिषद् परिपत्र</span>
        </div>
        <Link href="/demo" className="text-white hover:text-red-200 font-bold flex items-center gap-1 underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>सबै २२ वटा डेमो हेर्नुहोस्</span>
        </Link>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <StyleMinistryMolcpa />
      </main>

      <Footer />
    </div>
  );
}
