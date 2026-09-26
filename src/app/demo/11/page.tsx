import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyleNeoBrutalist from '@/components/demos/StyleNeoBrutalist';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Demo11Page() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50 dark:bg-slate-950 text-slate-950 dark:text-slate-100">
      <Navbar />

      {/* Top Banner */}
      <div className="bg-black text-white px-4 py-2.5 text-xs border-b-2 border-black flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-yellow-300">Demo ११: Neo-Brutalist Bold Pop</span>
          <span className="text-slate-400 hidden sm:inline">&bull; Gumroad / Retrowave Chunky Retro High-Contrast</span>
        </div>
        <Link href="/demo" className="text-yellow-300 hover:text-white font-bold flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>सबै १२ वटा डेमो हेर्नुहोस्</span>
        </Link>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <StyleNeoBrutalist />
      </main>

      <Footer />
    </div>
  );
}
