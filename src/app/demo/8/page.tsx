import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyleEditorialMagazine from '@/components/demos/StyleEditorialMagazine';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Demo8Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] dark:bg-[#121110] text-[#2D2A26] dark:text-[#EDE8E1]">
      <Navbar />

      {/* Top Banner */}
      <div className="bg-stone-900 text-stone-200 px-4 py-2.5 text-xs border-b border-stone-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-amber-300">Demo ८: Nordic Editorial Gazette</span>
          <span className="text-stone-400 hidden sm:inline">&bull; Kinfolk / Substack Quiet Minimalist Theme</span>
        </div>
        <Link href="/demo" className="text-amber-300 hover:text-amber-200 font-bold flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>सबै ८ वटा डेमो हेर्नुहोस्</span>
        </Link>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <StyleEditorialMagazine />
      </main>

      <Footer />
    </div>
  );
}
