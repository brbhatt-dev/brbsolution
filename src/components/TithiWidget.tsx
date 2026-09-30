'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Moon, Sun, Sparkles, Heart } from 'lucide-react';
import { getNepaliCalendarDetails, NepaliCalendarDetails } from '@/lib/nepaliDate';
import UpcomingFestivalsBar from './UpcomingFestivalsBar';
import LandSolutionWavingFlag from './LandSolutionWavingFlag';

interface TithiWidgetProps {
  variant?: 'compact' | 'panoramic';
}

export default function TithiWidget({ variant = 'compact' }: TithiWidgetProps) {
  const [details, setDetails] = useState<NepaliCalendarDetails | null>(null);
  const [liveTime, setLiveTime] = useState<string>('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setDetails(getNepaliCalendarDetails(now));
      setLiveTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!details) {
    return (
      <div className={`rounded-3xl bg-slate-900 border border-slate-800 animate-pulse ${variant === 'panoramic' ? 'h-24 w-full' : 'h-40 w-full'}`}></div>
    );
  }

  // WIDE PANORAMIC VARIANT (50/50 Panoramic Split: Compact Patro + Waving Nepal Flag)
  if (variant === 'panoramic') {
    return (
      <div className="w-full bg-gradient-to-r from-[#061814] via-[#091e19] to-[#040e0b] text-white rounded-3xl p-4 sm:p-6 shadow-xl border border-emerald-500/30 relative overflow-hidden">
        
        {/* Subtle atmospheric ambient glows */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">

          {/* 50/50 SPLIT GRID: Left Patro + Right Land Solution Flag */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
            
            {/* LEFT HALF (50%): Compact Nepali Patro & Live Clock */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 flex flex-col justify-between space-y-3.5">
              
              {/* Header Line */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>नेपाली पात्रो</span>
                  </span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                    वि.सं.
                  </span>
                </div>

                {/* Live Clock with Pulsing Green Dot */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-xs sm:text-sm font-mono font-bold text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>{liveTime} NPT</span>
                </div>
              </div>

              {/* Main Date & Details Row */}
              <div className="flex items-center gap-3.5 sm:gap-4">
                {/* Big Date Box */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col items-center justify-center shrink-0 shadow-inner">
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono leading-none">
                    {details.bsDate}
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-emerald-300 mt-1">
                    {details.dayName}
                  </span>
                </div>

                {/* Month, Year & Tithi */}
                <div className="space-y-1 min-w-0">
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                    {details.bsMonthName} {details.bsYear}
                  </h2>
                  <p className="text-xs text-slate-300">
                    ईस्वी संवत् (AD): <span className="font-semibold text-white">{details.adDateString}</span>
                  </p>

                  {/* Tithi & Ritu Badge */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-0.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-amber-500/20 border border-amber-400/30 text-xs text-amber-300 font-semibold">
                      <Moon className="w-3.5 h-3.5 text-amber-400 fill-amber-400/40" />
                      <span>{details.paksha}, {details.tithiName}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-xs text-emerald-300 font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{details.ritu} ऋतु</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT HALF (50%): Land Solution Fluttering Nepal Flag Container */}
            <Link
              href="/demo/flag"
              className="rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-4 sm:p-5 border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[190px] group hover:border-emerald-500/40 transition-colors"
              title="नेपालको राष्ट्रिय झण्डा फरर्र (हाम्रो ल्याण्ड सोलुसन एपको म्याथ) - सम्पूर्ण विकल्पहरू हेर्नुहोस्"
            >
              {/* Top Badge: National Pride */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-600/30 text-red-300 text-[10px] font-bold border border-red-500/40">
                  <Heart className="w-3 h-3 fill-red-400 text-red-400" />
                  <span>राष्ट्रिय स्वाभिमान</span>
                </span>
                <span className="text-[10px] text-emerald-300 font-mono">
                  अद्वितीय झण्डा 🇳🇵
                </span>
              </div>

              {/* Centerpiece: Land Solution Waving Nepal Flag */}
              <div className="relative z-10 flex items-center justify-center py-1">
                <LandSolutionWavingFlag 
                  scale={1.3}
                  speed={1600}
                  className="filter drop-shadow-[0_10px_22px_rgba(220,20,60,0.35)]"
                />
              </div>

              {/* Bottom Slogan / Motto */}
              <div className="relative z-10 text-center pt-2 border-t border-white/10">
                <p className="text-xs font-bold text-amber-300 tracking-wide">
                  &ldquo;जननी जन्मभूमिश्च स्वर्गादपि गरीयसी&rdquo;
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  संसारकै एकमात्र त्रिकोणात्मक, चन्द्र-सूर्य अंकित जीवित झण्डा
                </p>
              </div>
            </Link>

          </div>

          {/* FULL-WIDTH UPCOMING FESTIVALS STRIP */}
          <div>
            <UpcomingFestivalsBar variant="inline" />
          </div>

        </div>

      </div>
    );
  }

  // DEFAULT COMPACT VARIANT
  return (
    <div className="bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-950 text-white rounded-2xl p-3.5 sm:p-4 shadow-inner border border-emerald-500/30 relative overflow-hidden">
      
      {/* Background glow decoration */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 space-y-2.5">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
              नेपाली पात्रो & पञ्चाङ्ग
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-[10px] font-mono text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>{liveTime} NPT</span>
          </div>
        </div>

        {/* Date Display Card */}
        <div className="grid grid-cols-12 gap-2.5 items-center">
          
          {/* Day Big Number Box */}
          <div className="col-span-4 bg-white/10 backdrop-blur-md rounded-xl p-2 sm:p-2.5 text-center border border-white/10 shrink-0">
            <span className="text-3xl sm:text-4xl font-black text-white font-mono block leading-none">
              {details.bsDate}
            </span>
            <span className="text-[10px] font-semibold text-emerald-300 block mt-1 truncate">
              गते, {details.dayName}
            </span>
          </div>

          {/* Month, Year & Tithi */}
          <div className="col-span-8 space-y-1 pl-1">
            <div className="flex items-center gap-1.5">
              <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                {details.bsMonthName} {details.bsYear}
              </h3>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-200 font-bold">
                वि.सं.
              </span>
            </div>

            {/* Tithi Detail */}
            <div className="flex items-center gap-1 text-xs text-amber-300 font-medium">
              <Moon className="w-3.5 h-3.5 shrink-0 text-amber-400 fill-amber-400/40" />
              <span className="truncate">
                <strong>{details.paksha}</strong>, {details.tithiName}
              </span>
            </div>

            {/* Gregorian Date */}
            <p className="text-[10px] text-slate-300 truncate">
              AD: {details.adDateString}
            </p>
          </div>

        </div>

        {/* Bottom Details Footer */}
        <div className="pt-2 border-t border-emerald-500/20 flex items-center justify-between text-[11px] text-slate-300">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>ऋतु: <strong className="text-white">{details.ritu}</strong></span>
          </div>
          <div className="flex items-center gap-1">
            <Sun className="w-3 h-3 text-amber-400 shrink-0" />
            <span className="text-slate-300 text-[10px]">नेपाल मानक समय</span>
          </div>
        </div>

        {/* Compact Upcoming Festival Ticker */}
        <UpcomingFestivalsBar variant="compact" />

      </div>

    </div>
  );
}
