'use client';

import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Moon, Sparkles } from 'lucide-react';
import { getNepaliCalendarDetails, NepaliCalendarDetails, toNepaliDigits } from '@/lib/nepaliDate';

export default function NepaliTithiClockBar() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [calendarInfo, setCalendarInfo] = useState<NepaliCalendarDetails | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now);
      setCalendarInfo(getNepaliCalendarDetails(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!currentTime || !calendarInfo) {
    // SSR / initial hydration skeleton
    return (
      <div className="bg-slate-900 border-b border-slate-800 text-slate-300 py-1.5 px-4 text-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>नेपाली पात्रो तथा डिजिटल घडी लोड हुँदैछ...</span>
          </div>
        </div>
      </div>
    );
  }

  // Format 12-hour clock
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  const formattedTimeEn = `${pad(displayHours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
  const formattedTimeNp = `${toNepaliDigits(pad(displayHours))}:${toNepaliDigits(pad(minutes))}:${toNepaliDigits(pad(seconds))} ${ampm === 'PM' ? 'अपराह्न' : 'पूर्वाह्न'}`;

  return (
    <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 text-white text-xs py-2 px-3 sm:px-6 shadow-sm sticky top-0 z-[60]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        
        {/* Left: Nepali Bikram Sambat Date & Tithi Widget */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-center md:text-left">
          
          {/* Live indicator & BS Date */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-semibold text-[11px] sm:text-xs">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-bold text-white tracking-wide">
              {calendarInfo.fullBsDate}
            </span>
          </div>

          {/* Tithi Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-200 text-[11px] sm:text-xs">
            <Moon className="w-3.5 h-3.5 text-indigo-400" />
            <span>
              तिथि: <strong className="text-white">{calendarInfo.paksha}, {calendarInfo.tithiName}</strong>
            </span>
            <span className="hidden lg:inline text-indigo-400/70">({calendarInfo.ritu} ऋतु)</span>
          </div>

          {/* AD Gregorian Date */}
          <div className="hidden sm:inline-flex items-center text-slate-400 text-[11px]">
            <span>AD: {calendarInfo.adDateString}</span>
          </div>

        </div>

        {/* Right: Digital Clock */}
        <div className="flex items-center gap-3">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-800/90 border border-slate-700/80 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            
            {/* Live digital time */}
            <div className="flex items-baseline gap-1 font-mono">
              <span className="text-xs sm:text-sm font-bold text-emerald-400 tracking-wider">
                {formattedTimeEn}
              </span>
              <span className="text-[10px] text-slate-400 uppercase font-semibold">
                NPT
              </span>
            </div>
          </div>

          {/* Nepali digits clock (visible on sm+) */}
          <div className="hidden xl:inline-flex items-center text-[11px] font-mono text-slate-400">
            <span>({formattedTimeNp})</span>
          </div>

        </div>

      </div>
    </div>
  );
}
