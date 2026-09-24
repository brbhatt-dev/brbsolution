'use client';

import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Moon } from 'lucide-react';
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
    return (
      <div className="bg-slate-950 border-b border-slate-800 text-slate-300 py-2 px-3 text-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px]">नेपाली पात्रो तथा डिजिटल घडी...</span>
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

  return (
    <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 text-white py-1.5 sm:py-2 px-3 sm:px-6 shadow-sm z-[60] relative">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
        
        {/* Mobile Row 1 (on mobile: Clock + AD date; on sm+: full layout) */}
        <div className="flex sm:hidden w-full items-center justify-between border-b border-slate-800/80 pb-1">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-slate-800/90 border border-slate-700/80">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Clock className="w-3 h-3 text-emerald-400" />
            <span className="text-xs font-bold font-mono text-emerald-400 tracking-wider">
              {formattedTimeEn}
            </span>
            <span className="text-[9px] text-slate-400 uppercase font-semibold">NPT</span>
          </div>

          <span className="text-[10px] text-slate-400">
            AD: {calendarInfo.adDateString}
          </span>
        </div>

        {/* Nepali Bikram Sambat Date & Tithi */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2.5 text-center sm:text-left w-full sm:w-auto">
          
          {/* BS Date Badge */}
          <div className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] sm:text-xs">
            <Calendar className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="font-bold text-white tracking-wide">
              {calendarInfo.fullBsDate}
            </span>
          </div>

          {/* Tithi Badge */}
          <div className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-200 text-[10px] sm:text-xs">
            <Moon className="w-3 h-3 text-indigo-400 shrink-0" />
            <span>
              तिथि: <strong className="text-white">{calendarInfo.paksha}, {calendarInfo.tithiName}</strong>
            </span>
          </div>

          {/* Desktop AD date */}
          <div className="hidden md:inline-flex items-center text-slate-400 text-[11px] ml-1">
            <span>AD: {calendarInfo.adDateString}</span>
          </div>

        </div>

        {/* Desktop Digital Clock */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-800/90 border border-slate-700/80 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs sm:text-sm font-bold font-mono text-emerald-400 tracking-wider">
              {formattedTimeEn}
            </span>
            <span className="text-[10px] text-slate-400 uppercase font-semibold">
              NPT
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
