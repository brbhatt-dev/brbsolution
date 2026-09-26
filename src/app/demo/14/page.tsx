import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyleBloombergTerminal from '@/components/demos/StyleBloombergTerminal';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Demo14Page() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-slate-200">
      <Navbar />

      {/* Top Banner */}
      <div className="bg-slate-950 text-amber-400 px-4 py-2.5 text-xs border-b border-amber-900/60 flex items-center justify-between font-mono">
        <div className="flex items-center gap-2">
          <span className="font-bold">Demo १४: Bloomberg Financial Cadastre Terminal</span>
          <span className="text-slate-400 hidden sm:inline">&bull; रियल-टाइम वित्तीय टिमर र राजस्व म्याट्रिक्स</span>
        </div>
        <Link href="/demo" className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>सबै १७ वटा डेमो हेर्नुहोस्</span>
        </Link>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <StyleBloombergTerminal />
      </main>

      <Footer />
    </div>
  );
}
