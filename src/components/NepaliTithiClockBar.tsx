'use client';

import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Moon } from 'lucide-react';
import { getNepaliCalendarDetails, NepaliCalendarDetails } from '@/lib/nepaliDate';

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
      <div className="h-12 rounded-2xl bg-slate-900/40 animate-pulse mb-6"></div>
    );
  }

  // Format 12-hour clock
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  const formattedTime = `${pad(displayHours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;

  return (
    <div 
      translate="no" 
      className="notranslate w-full rounded-2xl bg-slate-950 border border-slate-800 text-white p-2.5 sm:px-4 sm:py-3 shadow-lg shadow-slate-950/20 mb-6 sm:mb-8"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3">
        
        {/* Left: Nepali Bikram Sambat Date & Tithi */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-2.5">
          {/* BS Date Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-semibold text-xs sm:text-sm">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
            <span className="font-bold text-white tracking-wide">
              {calendarInfo.fullBsDate}
            </span>
          </div>

          {/* Tithi Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-200 text-xs sm:text-sm">
            <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400 shrink-0" />
            <span>
              {calendarInfo.paksha}, {calendarInfo.tithiName}
            </span>
          </div>

          {/* Gregorian Date */}
          <span className="text-slate-400 text-[11px] sm:text-xs">
            (AD: {calendarInfo.adDateString})
          </span>
        </div>

        {/* Right: Live Digital Clock */}
        <div className="flex items-center justify-center shrink-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm font-bold font-mono text-emerald-400 tracking-wider">
              {formattedTime}
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
