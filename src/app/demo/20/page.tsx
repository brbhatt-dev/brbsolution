import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyleNagarikAppOfficial from '@/components/demos/StyleNagarikAppOfficial';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Demo20Page() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100">
      <Navbar />

      {/* Top Banner */}
      <div className="bg-indigo-900 text-white px-4 py-2.5 text-xs border-b border-indigo-950 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold">Demo २०: नागरिक एप 'मेरो कित्ता' पोर्टल (nagarikapp.gov.np)</span>
          <span className="text-indigo-200 hidden sm:inline">&bull; आधुनिक सरकारी मोबाइल-फर्स्ट नागरिक सेवाहरू</span>
        </div>
        <Link href="/demo" className="text-white hover:text-indigo-200 font-bold flex items-center gap-1 underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>सबै २२ वटा डेमो हेर्नुहोस्</span>
        </Link>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <StyleNagarikAppOfficial />
      </main>

      <Footer />
    </div>
  );
}
