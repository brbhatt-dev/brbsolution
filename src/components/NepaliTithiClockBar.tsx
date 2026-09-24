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
    return null;
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
      className="notranslate hidden sm:block bg-slate-950 border-b border-slate-800 text-white text-xs py-2 px-4 shadow-xs z-[60] relative"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Left: Nepali Bikram Sambat Date & Tithi */}
        <div className="flex items-center gap-3">
          {/* BS Date Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-semibold text-xs">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-bold text-white tracking-wide">
              {calendarInfo.fullBsDate}
            </span>
          </div>

          {/* Tithi Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-200 text-xs">
            <Moon className="w-3.5 h-3.5 text-indigo-400" />
            <span>
              {calendarInfo.paksha}, {calendarInfo.tithiName}
            </span>
          </div>

          {/* Gregorian Date */}
          <span className="text-slate-400 text-[11px] hidden md:inline">
            (AD: {calendarInfo.adDateString})
          </span>
        </div>

        {/* Right: Single Live Digital Clock */}
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-900 border border-slate-700/80 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
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
