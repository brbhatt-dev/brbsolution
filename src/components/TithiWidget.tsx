'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Moon, Sun, Sparkles } from 'lucide-react';
import { getNepaliCalendarDetails, NepaliCalendarDetails } from '@/lib/nepaliDate';

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

  // WIDE PANORAMIC VARIANT (Full width, horizontal panoramic bar)
  if (variant === 'panoramic') {
    return (
      <div className="w-full bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white rounded-3xl p-4 sm:p-5 shadow-md border border-emerald-500/30 relative overflow-hidden">
        
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left: Big Date Number & BS/AD Month */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col items-center justify-center shrink-0 shadow-inner">
              <span className="text-3xl font-black text-white font-mono leading-none">{details.bsDate}</span>
              <span className="text-[11px] font-bold text-emerald-300 mt-1">{details.dayName}</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>नेपाली पात्रो</span>
                </span>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  वि.सं.
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-0.5">
                {details.bsMonthName} {details.bsYear}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">ईस्वी संवत् (AD): {details.adDateString}</p>
            </div>
          </div>

          {/* Center: Tithi & Ritu Pill */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 py-2.5 px-4 sm:px-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs w-full md:w-auto">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-300 font-semibold">
              <Moon className="w-4 h-4 text-amber-400 fill-amber-400/40 shrink-0" />
              <span>{details.paksha}, {details.tithiName}</span>
            </div>
            <div className="h-4 w-px bg-white/20"></div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-emerald-300 font-semibold">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{details.ritu} ऋतु</span>
            </div>
          </div>

          {/* Right: Live Ticking Clock & Nepal Standard Time */}
          <div className="flex items-center justify-end gap-3 w-full md:w-auto shrink-0 border-t md:border-t-0 pt-2 md:pt-0 border-white/10">
            <div className="text-center md:text-right w-full md:w-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-xs sm:text-sm font-mono font-bold text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>{liveTime} NPT</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-1 text-[11px] text-slate-400 mt-1">
                <Sun className="w-3 h-3 text-amber-400 shrink-0" />
                <span>नेपाल मानक समय</span>
              </div>
            </div>
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

      </div>

    </div>
  );
}
