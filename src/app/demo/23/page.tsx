import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyleSpatialGlass from '@/components/demos/StyleSpatialGlass';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Demo23Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050811] text-white">
      <Navbar />

      {/* Top Banner */}
      <div className="bg-slate-950 text-emerald-300 px-4 py-2.5 text-xs border-b border-emerald-950 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold">Masterpiece २३: Spatial Glassmorphism (Vision Pro OS)</span>
          <span className="text-slate-400 hidden sm:inline">&bull; भविष्यको लिक्विड ग्लास र पारदर्शी स्पेसियल कम्प्युटिङ</span>
        </div>
        <Link href="/demo" className="text-emerald-300 hover:text-white font-bold flex items-center gap-1 underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>सबै २७ वटा डेमो हेर्नुहोस्</span>
        </Link>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <StyleSpatialGlass />
      </main>

      <Footer />
    </div>
  );
}
