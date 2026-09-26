import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyleCyberSpatial from '@/components/demos/StyleCyberSpatial';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Demo12Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-white">
      <Navbar />

      {/* Top Banner */}
      <div className="bg-black text-cyan-300 px-4 py-2.5 text-xs border-b border-cyan-800 flex items-center justify-between font-mono">
        <div className="flex items-center gap-2">
          <span className="font-bold text-cyan-400">Demo १२: Cyber Spatial HUD</span>
          <span className="text-slate-400 hidden sm:inline">&bull; Quantum Hologram & Dynamic Interactive Slider</span>
        </div>
        <Link href="/demo" className="text-cyan-400 hover:text-cyan-200 font-bold flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>सबै १२ वटा डेमो हेर्नुहोस्</span>
        </Link>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <StyleCyberSpatial />
      </main>

      <Footer />
    </div>
  );
}
