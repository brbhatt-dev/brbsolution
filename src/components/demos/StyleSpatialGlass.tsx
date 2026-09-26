'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Layers, 
  Calculator, 
  ArrowRight, 
  Compass, 
  FileText, 
  Coins, 
  Scale, 
  Sliders, 
  CheckCircle2, 
  Moon, 
  Sun,
  Eye,
  Maximize2
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';
import UniversalSmartSearch from './UniversalSmartSearch';

export default function StyleSpatialGlass() {
  const [activeSpatialTab, setActiveSpatialTab] = useState<'calc' | 'tax' | 'kitta'>('calc');

  return (
    <div className="space-y-12 max-w-5xl mx-auto text-slate-100 relative">
      
      {/* Ambient Aurora Glow in Background */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* 1. Spatial Floating Island Header */}
      <section className="text-center space-y-6 pt-4">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/20 backdrop-blur-2xl text-xs font-medium text-emerald-300 shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
          <span>Spatial Cadastre OS &bull; Vision Pro Edition</span>
        </div>

        <div className="space-y-2 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Seamless Land Tech in <br />
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
              Spatial Glass Dimension
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            नेपालको परम्परागत नापीलाई अत्याधुनिक पारदर्शी ग्लास र लिक्विड एनिमेशनमा अनुभव गर्नुहोस्।
          </p>
        </div>

        {/* Floating Spatial Search Capsule */}
        <div className="max-w-2xl mx-auto">
          <UniversalSmartSearch placeholder="स्पेसियल खोज: ४ आना, कित्ताकाट, मालपोत कर वा नापी कार्यालय..." />
        </div>

      </section>

      {/* 2. Floating Tactile Control Capsule */}
      <div className="flex justify-center">
        <div className="p-1.5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-2xl flex items-center gap-1.5 shadow-2xl">
          {[
            { id: 'calc', label: '📐 जग्गा क्यालकुलेटर', icon: Calculator },
            { id: 'tax', label: '💰 मालपोत कर इन्जिन', icon: Coins },
            { id: 'kitta', label: '⚖️ कित्ताकाट मापदण्ड', icon: Scale },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSpatialTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeSpatialTab === tab.id
                  ? 'bg-emerald-500 text-slate-950 shadow-lg scale-102 font-black'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. The Translucent Spatial Glass Workspace */}
      <section className="rounded-3xl bg-slate-950/70 border border-white/15 p-6 sm:p-10 backdrop-blur-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] space-y-6 relative overflow-hidden">
        
        {/* Corner Light Sheen */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4 relative z-10">
          <div>
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-400" />
              <span>डिजिटल क्षेत्रफल रूपान्तरण इन्जिन</span>
            </h2>
            <p className="text-xs text-slate-400">
              रोपनी-आना र बिघा-कट्ठा प्रणालीको वास्तविक स्लिप जेनेरेटर।
            </p>
          </div>

          <TithiWidget />
        </div>

        <div className="relative z-10">
          <LandCalculator />
        </div>

      </section>

      {/* 4. Glassmorphic Micro-App Dock Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { title: 'Preeti to Unicode', sub: 'द्रुत फन्ट रूपान्तरण', href: '/tools/preeti-to-unicode', color: 'text-cyan-400' },
          { title: 'तस्विरबाट A4 PDF', sub: 'कागजात मिलाउने', href: '/tools/images-to-pdf', color: 'text-emerald-400' },
          { title: 'फोटो कम्प्रेसर', sub: '<२००KB लोकसेवा', href: '/tools/image-compressor', color: 'text-rose-400' },
          { title: '७७ जिल्ला नापी', sub: 'सम्पर्क निर्देशिका', href: '/tools/survey-offices', color: 'text-purple-400' },
        ].map((card, i) => (
          <Link
            key={i}
            href={card.href}
            className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/40 hover:bg-white/[0.06] transition-all backdrop-blur-xl flex flex-col justify-between space-y-3 group shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className={`text-xs font-black ${card.color} font-mono`}>0{i+1}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transform group-hover:translate-x-1 transition" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white group-hover:text-emerald-300 transition">
                {card.title}
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {card.sub}
              </p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
