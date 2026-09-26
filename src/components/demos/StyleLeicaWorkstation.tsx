'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Crosshair, 
  Compass, 
  Terminal, 
  Layers, 
  Calculator, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Ruler, 
  Check, 
  Maximize2,
  FileCode,
  MapPin
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';
import UniversalSmartSearch from './UniversalSmartSearch';

export default function StyleLeicaWorkstation() {
  const surveySensors = [
    { label: 'CALIBRATION', val: 'ISO 17123-3 CERTIFIED', color: 'text-orange-400' },
    { label: 'COORDINATE PROJECTION', val: 'MUTM NEPAL (CENTRAL 84°)', color: 'text-amber-400' },
    { label: 'ACCURACY TOLERANCE', val: '± 0.0001 SQ.METER', color: 'text-emerald-400' },
    { label: 'FIELD GEODESY', val: 'WGS84 / LOCAL CADASTRE', color: 'text-cyan-400' },
  ];

  const surveySuites = [
    { title: 'AutoCAD सर्भेयर LISP स्क्रिप्ट', desc: 'कोअर्डिनेट्सबाट कित्ता ड्रइङ र पोलिलाइन निर्माण', href: '/tools/autocad-scripts', code: 'CAD.LISP' },
    { title: 'Excel / CSV to Google Earth KML', desc: 'सर्भे डेटा र सिमाना गुगल अर्थमा प्लट गर्ने', href: '/tools/excel-to-kml', code: 'GIS.KML' },
    { title: 'बहु-कित्ता जोड क्यालकुलेटर', desc: 'धेरै कित्ताहरूको क्षेत्रफल एकैपटक जोड्ने र हिसाब', href: '/tools/multi-kitta-calculator', code: 'MULTI.KITTA' },
    { title: 'कित्ताकाट मापदण्ड इन्स्पेक्टर', desc: 'आवासीय १३० m² र कृषि ६७५ m² नियम जाँच', href: '/tools/kitta-kat-checker', code: 'CHECK.79' },
  ];

  return (
    <div className="space-y-8 font-mono text-slate-200 max-w-6xl mx-auto">
      
      {/* 1. Leica Industrial Gunmetal Header */}
      <section className="bg-[#121417] border-2 border-orange-500/60 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
        
        {/* Top Crosshair Technical Watermark */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500 text-black flex items-center justify-center font-black shadow-lg">
              <Crosshair className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-[10px] text-orange-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                <span>SWISS GEOSPATIAL INSTRUMENTATION</span>
                <span>&bull;</span>
                <span>LEICA & TRIMBLE STANDARD</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                PRECISION CADASTRE WORKSTATION v5.0
              </h1>
            </div>
          </div>

          <div className="text-right hidden sm:block">
            <div className="text-xs text-slate-400">INSTRUMENT ID: <span className="text-orange-400 font-bold">BRB-TOTALSTATION-01</span></div>
            <div className="text-[10px] text-slate-500">KATHMANDU VALLEY &bull; NEPAL</div>
          </div>
        </div>

        {/* Real-Time Geodetic Sensor Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-black/60 p-3 rounded-2xl border border-slate-800 text-xs">
          {surveySensors.map((s, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">{s.label}</div>
              <div className={`font-bold text-[11px] ${s.color}`}>{s.val}</div>
            </div>
          ))}
        </div>

        {/* Search Input in Leica Styling */}
        <UniversalSmartSearch placeholder="GEODETIC SEARCH: जग्गा क्षेत्रफल, कित्ताकाट नियम, CAD स्क्रिप्ट वा कार्यालय..." />

      </section>

      {/* 2. Precision Dual Split Instrument Engine */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: The Technical Caliper Land Engine */}
        <div className="lg:col-span-8 bg-[#121417] p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
            <div className="flex items-center gap-2 text-orange-400 font-bold">
              <Ruler className="w-4 h-4" />
              <span>DIGITAL MEASUREMENT VERNIER CORE</span>
            </div>
            <span className="text-slate-400">UNITS: ROPANI / BIGHA / SQ.FT</span>
          </div>

          <LandCalculator />
        </div>

        {/* Right: Technical Surveyor Tool Suites */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-[#121417] p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-orange-400 font-bold flex items-center gap-1.5">
                <FileCode className="w-4 h-4" />
                <span>SURVEYOR TOOL SUITES</span>
              </span>
              <span className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                PRO APPS
              </span>
            </div>

            <div className="space-y-2.5">
              {surveySuites.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="p-3.5 rounded-2xl bg-black/50 border border-slate-800 hover:border-orange-500/60 transition block group"
                >
                  <div className="flex items-center justify-between text-[10px] text-orange-400 font-mono mb-1">
                    <span>{item.code}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-orange-400 transform group-hover:translate-x-1 transition" />
                  </div>
                  <h4 className="font-bold text-white text-xs group-hover:text-orange-300 transition">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Patro Calendar Widget in Technical Box */}
          <div className="p-4 rounded-2xl bg-[#121417] border border-slate-800 flex justify-center">
            <TithiWidget />
          </div>

        </div>

      </div>

    </div>
  );
}
