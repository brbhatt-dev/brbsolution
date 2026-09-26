import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StylePerplexitySearch from '@/components/demos/StylePerplexitySearch';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Demo13Page() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100">
      <Navbar />

      {/* Top Banner */}
      <div className="bg-slate-900 text-white px-4 py-2.5 text-xs border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-emerald-400">Demo १३: Perplexity AI / Deep Search Cadastre</span>
          <span className="text-slate-400 hidden sm:inline">&bull; इन्टेलिजेन्ट एआई खोज र तत्काल गणितीय उत्तर</span>
        </div>
        <Link href="/demo" className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>सबै १७ वटा डेमो हेर्नुहोस्</span>
        </Link>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <StylePerplexitySearch />
      </main>

      <Footer />
    </div>
  );
}
