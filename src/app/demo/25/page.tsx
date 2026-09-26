import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyleNotionWorkspace from '@/components/demos/StyleNotionWorkspace';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Demo25Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#191919] text-stone-900 dark:text-stone-100">
      <Navbar />

      {/* Top Banner */}
      <div className="bg-stone-900 text-stone-300 px-4 py-2.5 text-xs border-b border-stone-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-amber-300">Masterpiece २५: Notion / Craft Zen Workspace</span>
          <span className="text-stone-400 hidden sm:inline">&bull; शान्त ज्ञान र औजार वर्कस्पेस (Mindful Modular Productivity)</span>
        </div>
        <Link href="/demo" className="text-amber-300 hover:text-white font-bold flex items-center gap-1 underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>सबै २७ वटा डेमो हेर्नुहोस्</span>
        </Link>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <StyleNotionWorkspace />
      </main>

      <Footer />
    </div>
  );
}
