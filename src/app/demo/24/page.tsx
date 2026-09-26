import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyleLeicaWorkstation from '@/components/demos/StyleLeicaWorkstation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Demo24Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0d10] text-slate-200">
      <Navbar />

      {/* Top Banner */}
      <div className="bg-black text-orange-400 px-4 py-2.5 text-xs border-b border-orange-950 flex items-center justify-between font-mono">
        <div className="flex items-center gap-2">
          <span className="font-bold">Masterpiece २४: Leica / Trimble Geospatial Workstation</span>
          <span className="text-slate-400 hidden sm:inline">&bull; स्विस इन्जिनियरिङ, गनमेटल टाइटेनियम र इन्स्ट्रुमेन्टेसन</span>
        </div>
        <Link href="/demo" className="text-orange-400 hover:text-white font-bold flex items-center gap-1 underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>सबै २७ वटा डेमो हेर्नुहोस्</span>
        </Link>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <StyleLeicaWorkstation />
      </main>

      <Footer />
    </div>
  );
}
