import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyleArchitecturalAtlas from '@/components/demos/StyleArchitecturalAtlas';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Demo26Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F0] dark:bg-[#141210] text-[#2D2A26] dark:text-[#EDE8E1]">
      <Navbar />

      {/* Top Banner */}
      <div className="bg-[#1C1917] text-stone-300 px-4 py-2.5 text-xs border-b border-stone-800 flex items-center justify-between font-serif">
        <div className="flex items-center gap-2">
          <span className="font-bold text-amber-200">Masterpiece २६: Stripe Press Architectural Atlas</span>
          <span className="text-stone-400 hidden sm:inline">&bull; अन्तर्राष्ट्रिय आर्किटेक्चरल मोनोग्राफ र ऐतिहासिक भू-एटलस</span>
        </div>
        <Link href="/demo" className="text-amber-200 hover:text-white font-bold flex items-center gap-1 underline font-sans">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>सबै २७ वटा डेमो हेर्नुहोस्</span>
        </Link>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <StyleArchitecturalAtlas />
      </main>

      <Footer />
    </div>
  );
}
