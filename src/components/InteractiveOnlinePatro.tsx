'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { 
  toNepaliDigits, 
  nepaliMonths, 
  nepaliDays, 
  sanskritDays,
  bs2adExact, 
  ad2bsExact, 
  getBsMonthLengths, 
  calculateFullPanchanga, 
  FullPanchangaDetails,
  getEventsForMonth,
  getSaitForMonth,
  getAllFestivalLores,
  tithiShortNames
} from '@/lib/brPatroEngine';
import { 
  Calendar, 
  ArrowRightLeft, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Sun, 
  Moon, 
  Clock, 
  Download, 
  CheckCircle2, 
  Compass, 
  Heart, 
  ExternalLink,
  ShieldCheck,
  Star,
  Flame,
  Info,
  BookOpen,
  MapPin,
  AlertTriangle
} from 'lucide-react';

export default function InteractiveOnlinePatro() {
  const [activeTab, setActiveTab] = useState<'calendar' | 'sait' | 'converter' | 'festivals'>('calendar');
  
  // Real-time current BS Date
  const todayBs = useMemo(() => ad2bsExact(new Date()), []);

  // Calendar View State
  const [viewYear, setViewYear] = useState<number>(todayBs.year);
  const [viewMonth, setViewMonth] = useState<number>(todayBs.month); // 1-12
  const [selectedDay, setSelectedDay] = useState<number>(todayBs.day);

  // Sait Category State
  const [saitCategory, setSaitCategory] = useState<'Bibaha' | 'BrataBandha' | 'Pasni'>('Bibaha');

  // Converter States
  const [convertMode, setConvertMode] = useState<'bs2ad' | 'ad2bs'>('bs2ad');
  const [cBsYear, setCBsYear] = useState<number>(todayBs.year);
  const [cBsMonth, setCBsMonth] = useState<number>(todayBs.month);
  const [cBsDay, setCBsDay] = useState<number>(todayBs.day);
  const [convertedAdResult, setConvertedAdResult] = useState<string>('');

  const [cAdDateStr, setCAdDateStr] = useState<string>(() => new Date().toISOString().split('T')[0]);
  const [convertedBsResult, setConvertedBsResult] = useState<string>('');

  // Calculate days in the current view month and weekday offset
  const monthInfo = useMemo(() => {
    const lengths = getBsMonthLengths(viewYear);
    const totalDays = lengths[viewMonth - 1] || 30;
    const firstDayAd = bs2adExact(viewYear, viewMonth, 1);
    const startDayOfWeek = firstDayAd.getDay(); // 0 = Sunday, 6 = Saturday
    return { startDayOfWeek, totalDays };
  }, [viewYear, viewMonth]);

  // Selected Day Panchang
  const selectedDateKey = useMemo(() => {
    const safeDay = Math.min(selectedDay, monthInfo.totalDays);
    return `${viewYear}-${String(viewMonth).padStart(2, '0')}-${String(safeDay).padStart(2, '0')}`;
  }, [viewYear, viewMonth, selectedDay, monthInfo.totalDays]);

  const selectedPanchang: FullPanchangaDetails = useMemo(() => {
    return calculateFullPanchanga(selectedDateKey);
  }, [selectedDateKey]);

  // Events for current month
  const monthEvents = useMemo(() => {
    return getEventsForMonth(viewYear, viewMonth);
  }, [viewYear, viewMonth]);

  // Sait for current month
  const monthSaits = useMemo(() => {
    return getSaitForMonth(viewYear, saitCategory, viewMonth);
  }, [viewYear, saitCategory, viewMonth]);

  // Festival Lore data
  const festivalLores = useMemo(() => {
    return getAllFestivalLores();
  }, []);

  // BS to AD Converter Handler
  const handleBsToAd = () => {
    try {
      const lengths = getBsMonthLengths(cBsYear);
      const safeD = Math.min(cBsDay, lengths[cBsMonth - 1] || 30);
      const adDate = bs2adExact(cBsYear, cBsMonth, safeD);
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      const formattedEn = adDate.toLocaleDateString('en-US', options);
      const p = calculateFullPanchanga(`${cBsYear}-${String(cBsMonth).padStart(2, '0')}-${String(safeD).padStart(2, '0')}`);
      setConvertedAdResult(`वि.सं. ${toNepaliDigits(cBsYear)} ${nepaliMonths[cBsMonth - 1]} ${toNepaliDigits(safeD)} गते = ई.सं. ${formattedEn} (${p.tithiDisplay.split('(')[0]?.trim()}, ${p.warName})`);
    } catch {
      setConvertedAdResult('अमान्य मिति। कृपया सही वि.सं. मिति छान्नुहोस्।');
    }
  };

  // AD to BS Converter Handler
  const handleAdToBs = (dateStr: string) => {
    try {
      if (!dateStr) return;
      const jsDate = new Date(dateStr + 'T12:00:00');
      const bs = ad2bsExact(jsDate);
      const p = calculateFullPanchanga(`${bs.year}-${String(bs.month).padStart(2, '0')}-${String(bs.day).padStart(2, '0')}`);
      setConvertedBsResult(`ई.सं. ${dateStr} = वि.सं. ${toNepaliDigits(bs.year)} ${nepaliMonths[bs.month - 1]} ${toNepaliDigits(bs.day)} गते, ${p.warName} (${p.tithiDisplay.split('(')[0]?.trim()}, ${p.nakshatraDisplay.split('(')[0]?.trim()} नक्षत्र)`);
    } catch {
      setConvertedBsResult('अमान्य मिति।');
    }
  };

  useEffect(() => {
    handleBsToAd();
  }, [cBsYear, cBsMonth, cBsDay]);

  useEffect(() => {
    handleAdToBs(cAdDateStr);
  }, [cAdDateStr]);

  const handlePrevMonth = () => {
    if (viewMonth === 1) {
      if (viewYear > 2081) {
        setViewYear(prev => prev - 1);
        setViewMonth(12);
      }
    } else {
      setViewMonth(prev => prev - 1);
    }
    setSelectedDay(1);
  };

  const handleNextMonth = () => {
    if (viewMonth === 12) {
      if (viewYear < 2084) {
        setViewYear(prev => prev + 1);
        setViewMonth(1);
      }
    } else {
      setViewMonth(prev => prev + 1);
    }
    setSelectedDay(1);
  };

  const handleGoToday = () => {
    setViewYear(todayBs.year);
    setViewMonth(todayBs.month);
    setSelectedDay(todayBs.day);
  };

  const downloadApkUrl = "https://github.com/imtechboss/imtechboss/releases/download/v7.9.69/BR_Patro.apk";

  return (
    <div className="space-y-8">
      {/* Top Banner: BR Patro Engine Verified Safety */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-red-950/80 via-slate-900 to-amber-950/80 border border-amber-500/30 text-white shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-red-600 p-1 flex-shrink-0 flex items-center justify-center shadow-md">
            <img src="/assets/ganesh_badge.png" alt="BR Patro" className="w-full h-full object-contain drop-shadow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-amber-300 uppercase tracking-wider">
                Official BR Patro Astrological Engine v7.9.69
              </span>
              <span className="px-2 py-0.5 rounded-full text-3xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                १००% शुद्ध पञ्चाङ्ग
              </span>
            </div>
            <p className="text-xs text-slate-300">
              नेपाल पञ्चाङ्ग निर्णायक विकास समिति तथा वैदिक अथोला अहरगण खगोलीय गणना अनुसार आधिकारिक क्यालेन्डर।
            </p>
          </div>
        </div>

        <a
          href={downloadApkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-black shadow-md transition-transform active:scale-95"
        >
          <Download className="w-4 h-4" />
          <span>अफलाइन एप डाउनलोड (37MB)</span>
        </a>
      </div>

      {/* Navigation Mode Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-1 sm:gap-2 overflow-x-auto pb-px">
        <button
          onClick={() => setActiveTab('calendar')}
          className={`flex items-center gap-2 px-4 py-3 border-b-2 font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
            activeTab === 'calendar'
              ? 'border-red-600 text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-red-950/20 rounded-t-xl'
              : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>मासिक पञ्चाङ्ग क्यालेन्डर</span>
        </button>

        <button
          onClick={() => setActiveTab('sait')}
          className={`flex items-center gap-2 px-4 py-3 border-b-2 font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
            activeTab === 'sait'
              ? 'border-red-600 text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-red-950/20 rounded-t-xl'
              : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Heart className="w-4 h-4" />
          <span>शुभ साइत (विवाह/व्रतबन्ध/पास्नी)</span>
        </button>

        <button
          onClick={() => setActiveTab('converter')}
          className={`flex items-center gap-2 px-4 py-3 border-b-2 font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
            activeTab === 'converter'
              ? 'border-red-600 text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-red-950/20 rounded-t-xl'
              : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <ArrowRightLeft className="w-4 h-4" />
          <span>मिति रूपान्तरण (BS ⇄ AD)</span>
        </button>

        <button
          onClick={() => setActiveTab('festivals')}
          className={`flex items-center gap-2 px-4 py-3 border-b-2 font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
            activeTab === 'festivals'
              ? 'border-red-600 text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-red-950/20 rounded-t-xl'
              : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>चाडपर्व तथा धार्मिक महत्व</span>
        </button>
      </div>

      {/* ======================================================== */}
      {/* TAB 1: MONTHLY CALENDAR GRID & FULL PANCHANGA CARD       */}
      {/* ======================================================== */}
      {activeTab === 'calendar' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Calendar Grid Section */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-sm space-y-5">
            {/* Year & Month Controller */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevMonth}
                  className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 transition"
                  title="अघिल्लो महिना"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Month Dropdown */}
                <select
                  value={viewMonth}
                  onChange={(e) => {
                    setViewMonth(parseInt(e.target.value, 10));
                    setSelectedDay(1);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-black text-base sm:text-lg border-none focus:ring-2 focus:ring-red-500 cursor-pointer"
                >
                  {nepaliMonths.map((mName, idx) => (
                    <option key={idx} value={idx + 1}>
                      {mName}
                    </option>
                  ))}
                </select>

                {/* Year Dropdown */}
                <select
                  value={viewYear}
                  onChange={(e) => {
                    setViewYear(parseInt(e.target.value, 10));
                    setSelectedDay(1);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-black text-base sm:text-lg border-none focus:ring-2 focus:ring-red-500 cursor-pointer"
                >
                  <option value={2081}>२०८१</option>
                  <option value={2082}>२०८२</option>
                  <option value={2083}>२०८३</option>
                  <option value={2084}>२०८४</option>
                </select>

                <button
                  onClick={handleNextMonth}
                  className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 transition"
                  title="पछिल्लो महिना"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleGoToday}
                  className="px-3 py-1.5 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900/60 font-bold text-xs hover:bg-red-100 dark:hover:bg-red-900/60 transition shadow-xs"
                >
                  आज (Today)
                </button>
              </div>
            </div>

            {/* Weekdays Header */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-black tracking-wider">
              {nepaliDays.map((day, idx) => (
                <div
                  key={idx}
                  className={`py-2 rounded-lg ${
                    idx === 6 
                      ? 'text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-red-950/20' 
                      : 'text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/40'
                  }`}
                >
                  <span className="hidden sm:inline">{day}</span>
                  <span className="sm:hidden">{day.slice(0, 3)}</span>
                </div>
              ))}
            </div>

            {/* 7x5 Days Grid */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {/* Empty leading days */}
              {Array.from({ length: monthInfo.startDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`} className="h-16 sm:h-20 rounded-xl bg-slate-50/40 dark:bg-slate-900/40 opacity-30 border border-transparent" />
              ))}

              {/* Month Days */}
              {Array.from({ length: monthInfo.totalDays }).map((_, i) => {
                const dayNum = i + 1;
                const isSelected = selectedDay === dayNum;
                const isToday = viewYear === todayBs.year && viewMonth === todayBs.month && dayNum === todayBs.day;
                const dayOfWeek = (monthInfo.startDayOfWeek + i) % 7;
                const isSaturday = dayOfWeek === 6;

                // Day key for panchang & events
                const dKey = `${viewYear}-${String(viewMonth).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
                const dayPanchang = calculateFullPanchanga(dKey);
                const hasEvents = dayPanchang.eventTitles.length > 0;
                const isHoliday = dayPanchang.isHoliday;

                // Corresponding AD Date day number
                const adDate = bs2adExact(viewYear, viewMonth, dayNum);
                const adDayNum = adDate.getDate();

                // Tithi short code
                const tithiPart = dayPanchang.tithiDisplay.split(' ')[0] || '';

                return (
                  <button
                    key={dayNum}
                    onClick={() => setSelectedDay(dayNum)}
                    className={`h-16 sm:h-20 p-1 sm:p-2 rounded-xl flex flex-col justify-between text-left transition-all border relative overflow-hidden ${
                      isSelected
                        ? 'border-red-600 bg-red-50 dark:bg-red-950/50 ring-2 ring-red-500/40 shadow-md font-bold'
                        : isToday
                        ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 ring-2 ring-amber-400/40'
                        : isSaturday
                        ? 'border-red-200/60 dark:border-red-900/40 bg-red-50/20 dark:bg-red-950/10 hover:border-red-300'
                        : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {/* Top Row: Nepali Day & English Day */}
                    <div className="flex items-center justify-between w-full">
                      <span className={`text-sm sm:text-base font-black ${
                        isSaturday || isHoliday 
                          ? 'text-red-600 dark:text-red-400' 
                          : 'text-slate-800 dark:text-slate-100'
                      }`}>
                        {toNepaliDigits(dayNum)}
                      </span>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                        {adDayNum}
                      </span>
                    </div>

                    {/* Middle: Tithi Short Abbr */}
                    <div className="text-[9px] sm:text-[10px] font-semibold text-slate-500 dark:text-slate-400 truncate">
                      {tithiPart}
                    </div>

                    {/* Bottom: Holiday / Event Indicator */}
                    <div className="flex items-center justify-between w-full text-[9px] truncate">
                      {hasEvents ? (
                        <span className="inline-block px-1 py-0.2 rounded text-3xs font-bold bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 truncate max-w-full">
                          {dayPanchang.eventTitles[0].split(',')[0]}
                        </span>
                      ) : isSaturday ? (
                        <span className="text-red-500 font-bold">बिदा</span>
                      ) : (
                        <span className="text-3xs text-slate-400">{dayPanchang.warName.slice(0, 3)}</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Month Events Summary */}
            {monthEvents.length > 0 && (
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>यस महिनाका मुख्य चाडपर्व तथा विशेष दिवसहरू:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {monthEvents.slice(0, 8).map((ev, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                      <span className="px-1.5 py-0.5 rounded font-black bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 shrink-0">
                        {toNepaliDigits(ev.day)} गते
                      </span>
                      <span className="text-slate-700 dark:text-slate-200 line-clamp-1">
                        {ev.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* Right Column: Complete Vedic Panchanga Details Card     */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-red-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-5 sm:p-6 shadow-xl space-y-5 border border-red-900/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-black border border-red-400/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>वैदिक पञ्चाङ्ग (Vedic Panchanga)</span>
                  </div>
                  <span className="text-3xs font-mono px-2 py-0.5 rounded-md bg-white/10 text-slate-300">
                    काठमाडौँ मानक (+५:४५)
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight">
                  {selectedPanchang.bsDateFormatted}
                </h3>

                <div className="flex flex-wrap items-center gap-2 text-xs text-rose-200">
                  <span className="font-bold text-amber-300">{selectedPanchang.warName}</span>
                  <span>({selectedPanchang.warSanskrit})</span>
                  <span>•</span>
                  <span>{selectedPanchang.adDateFormatted}</span>
                </div>

                {/* Day Festival Banner */}
                {selectedPanchang.eventTitles.length > 0 && (
                  <div className="mt-2 p-3 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-200 text-xs font-bold flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      {selectedPanchang.eventTitles.map((t, idx) => (
                        <div key={idx}>{t}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 5 Core Limbs of Panchanga (पञ्चाङ्गका ५ अङ्ग) */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="text-xs font-black uppercase tracking-wider text-rose-300 flex items-center gap-1.5">
                  <span>पञ्चाङ्गका ५ मुख्य अङ्गहरू:</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5 col-span-2">
                    <span className="text-rose-300 block text-3xs font-bold uppercase">१. तिथि (Tithi):</span>
                    <span className="font-black text-white text-sm">{selectedPanchang.tithiDisplay}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5 col-span-2">
                    <span className="text-rose-300 block text-3xs font-bold uppercase">२. नक्षत्र (Nakshatra):</span>
                    <span className="font-bold text-white text-xs">{selectedPanchang.nakshatraDisplay}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5 col-span-2">
                    <span className="text-rose-300 block text-3xs font-bold uppercase">३. योग (Yoga):</span>
                    <span className="font-bold text-white text-xs">{selectedPanchang.yogaDisplay}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5 col-span-2">
                    <span className="text-rose-300 block text-3xs font-bold uppercase">४. करण (Karana):</span>
                    <span className="font-bold text-white text-xs">{selectedPanchang.karanaDisplay}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                    <span className="text-rose-300 block text-3xs font-bold uppercase">५. वार (Day):</span>
                    <span className="font-bold text-white text-xs">{selectedPanchang.warName}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                    <span className="text-rose-300 block text-3xs font-bold uppercase">आनन्दादि योग:</span>
                    <span className="font-bold text-amber-300 text-xs">{selectedPanchang.anandadiYoga} योग</span>
                  </div>
                </div>
              </div>

              {/* Auspicious & Inauspicious Muhurtas (मुहूर्त तथा काल) */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="text-xs font-black uppercase tracking-wider text-rose-300">
                  मुहूर्त तथा काल विचार:
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-0.5">
                    <span className="text-emerald-300 block text-3xs font-bold uppercase">अभिजित् मुहूर्त (शुभ):</span>
                    <span className="font-black text-emerald-200 text-xs">{selectedPanchang.abhijitMuhurta}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-500/30 space-y-0.5">
                    <span className="text-red-300 block text-3xs font-bold uppercase">राहुकाल (वर्जित):</span>
                    <span className="font-black text-red-200 text-xs">{selectedPanchang.rahuKala}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                    <span className="text-slate-400 block text-3xs font-bold">यमघण्ट काल:</span>
                    <span className="font-semibold text-slate-200 text-xs">{selectedPanchang.yamaGhanta}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                    <span className="text-slate-400 block text-3xs font-bold">गुलिक काल:</span>
                    <span className="font-semibold text-slate-200 text-xs">{selectedPanchang.gulikaKala}</span>
                  </div>
                </div>
              </div>

              {/* Sun & Moon Details */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="text-xs font-black uppercase tracking-wider text-rose-300">
                  सूर्य, चन्द्र तथा कालगणना:
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                    <span className="text-slate-400 block text-3xs font-bold">सूर्योदय / सूर्यास्त:</span>
                    <span className="font-bold text-amber-200 text-xs">☀️ {selectedPanchang.sunrise} / 🌙 {selectedPanchang.sunset}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                    <span className="text-slate-400 block text-3xs font-bold">चन्द्रोदय / चन्द्रास्त:</span>
                    <span className="font-bold text-indigo-200 text-xs">🌔 {selectedPanchang.moonrise} / 🌘 {selectedPanchang.moonset}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                    <span className="text-slate-400 block text-3xs font-bold">सूर्य राशि / अयन:</span>
                    <span className="font-bold text-white text-xs">{selectedPanchang.suryaRashi} ({selectedPanchang.ayan})</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                    <span className="text-slate-400 block text-3xs font-bold">चन्द्र राशि:</span>
                    <span className="font-bold text-white text-xs">{selectedPanchang.chandraRashiDisplay}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                    <span className="text-slate-400 block text-3xs font-bold">दिनमान:</span>
                    <span className="font-bold text-white text-xs">{selectedPanchang.dinamana}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                    <span className="text-slate-400 block text-3xs font-bold">ऋतु / चान्द्रमास:</span>
                    <span className="font-bold text-white text-xs">{selectedPanchang.ritu}</span>
                  </div>
                </div>
              </div>

              {/* Travel & Ritual Astrological Factors */}
              <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                <div className="text-xs font-black uppercase tracking-wider text-rose-300">
                  यात्रा तथा कर्मकाण्ड विचार:
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                    <span className="text-slate-400 block text-3xs font-bold">चन्द्रवास:</span>
                    <span className="font-bold text-white">{selectedPanchang.chandraVasa}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                    <span className="text-slate-400 block text-3xs font-bold">योगिनीवास:</span>
                    <span className="font-bold text-white">{selectedPanchang.yoginiVasa}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                    <span className="text-slate-400 block text-3xs font-bold">अग्निवास (हवन):</span>
                    <span className="font-bold text-emerald-300">{selectedPanchang.agniVasa}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                    <span className="text-slate-400 block text-3xs font-bold">पञ्चक / नागशिर:</span>
                    <span className="font-bold text-white">{selectedPanchang.panchak}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5 col-span-2">
                    <span className="text-rose-300 block text-3xs font-bold">दिशाशूल तथा परिहार:</span>
                    <span className="font-bold text-red-300">{selectedPanchang.dishaShoola} दिशा</span>
                    <p className="text-3xs text-slate-300 font-normal">
                      यात्रा परिहार: {selectedPanchang.dishaParihara}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: AUSPICIOUS SAIT CALENDAR (विवाह / व्रतबन्ध / पास्नी) */}
      {/* ======================================================== */}
      {activeTab === 'sait' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                शुभ साइत क्यालेन्डर (Auspicious Saait Dates)
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                वैदिक सिद्धान्त अनुसार निर्धारित विवाह, व्रतबन्ध तथा पास्नीका शुद्ध लगन तथा साइतहरू।
              </p>
            </div>

            {/* Category Selector */}
            <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setSaitCategory('Bibaha')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-black transition ${
                  saitCategory === 'Bibaha'
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                💍 विवाह (Marriage)
              </button>
              <button
                onClick={() => setSaitCategory('BrataBandha')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-black transition ${
                  saitCategory === 'BrataBandha'
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                🧵 व्रतबन्ध (Upanayana)
              </button>
              <button
                onClick={() => setSaitCategory('Pasni')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-black transition ${
                  saitCategory === 'Pasni'
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                🥣 पास्नी (Annaprashana)
              </button>
            </div>
          </div>

          {/* Month by month saait cards for 2083 and 2084 */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300">
                वर्ष {toNepaliDigits(viewYear)} का उपलब्ध साइतहरू
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {nepaliMonths.map((mName, idx) => {
                const mNum = idx + 1;
                const saits = getSaitForMonth(viewYear, saitCategory, mNum);
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border transition-all ${
                      saits.length > 0
                        ? 'bg-gradient-to-br from-amber-50/40 via-white to-red-50/30 dark:from-slate-900 dark:to-slate-800 border-amber-300 dark:border-amber-700/60 shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-800/30 border-slate-200/60 dark:border-slate-800 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-black text-slate-900 dark:text-white text-base">
                        {mName}
                      </h4>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        saits.length > 0 
                          ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                      }`}>
                        {saits.length > 0 ? `${toNepaliDigits(saits.length)} वटा साइत` : 'साइत छैन'}
                      </span>
                    </div>

                    {saits.length > 0 ? (
                      <div className="flex flex-wrap gap-1.5">
                        {saits.map((dayVal, sIdx) => {
                          const dKey = `${viewYear}-${String(mNum).padStart(2, '0')}-${String(dayVal).padStart(2, '0')}`;
                          const p = calculateFullPanchanga(dKey);
                          return (
                            <button
                              key={sIdx}
                              onClick={() => {
                                setViewMonth(mNum);
                                setSelectedDay(dayVal);
                                setActiveTab('calendar');
                              }}
                              className="px-2.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-red-500 text-xs font-black text-slate-800 dark:text-slate-100 flex items-center gap-1.5 shadow-xs transition"
                              title={`${p.tithiDisplay} • ${p.warName}`}
                            >
                              <span className="text-red-600 dark:text-red-400">{toNepaliDigits(dayVal)} गते</span>
                              <span className="text-3xs font-normal text-slate-400">({p.warName.slice(0, 3)})</span>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-2xs text-slate-400 italic">
                        यस महिनामा शास्त्रोक्त रूपमा {saitCategory === 'Bibaha' ? 'विवाह' : saitCategory === 'BrataBandha' ? 'व्रतबन्ध' : 'पास्नी'}को साइत जुरेको छैन।
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: EXACT DATE CONVERTER (BS ⇄ AD)                    */}
      {/* ======================================================== */}
      {activeTab === 'converter' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              सटीक नेपाली मिति रूपान्तरण (BS ⇄ AD Date Converter)
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              २०८१ देखि २०८४ सम्मका जुनसुकै मितिलाई अङ्ग्रेजी र विक्रम संवत्मा तत्काल बदल्नुहोस्।
            </p>
          </div>

          <div className="flex justify-center">
            <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setConvertMode('bs2ad')}
                className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition ${
                  convertMode === 'bs2ad'
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                वि.सं. बाट ई.सं. (BS to AD)
              </button>
              <button
                onClick={() => setConvertMode('ad2bs')}
                className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition ${
                  convertMode === 'ad2bs'
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                ई.सं. बाट वि.सं. (AD to BS)
              </button>
            </div>
          </div>

          {convertMode === 'bs2ad' ? (
            <div className="max-w-md mx-auto space-y-5">
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">वर्ष (Year)</label>
                  <select
                    value={cBsYear}
                    onChange={(e) => setCBsYear(parseInt(e.target.value, 10))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-sm"
                  >
                    <option value={2081}>२०८१</option>
                    <option value={2082}>२०८२</option>
                    <option value={2083}>२०८३</option>
                    <option value={2084}>२०८४</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">महिना (Month)</label>
                  <select
                    value={cBsMonth}
                    onChange={(e) => setCBsMonth(parseInt(e.target.value, 10))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-sm"
                  >
                    {nepaliMonths.map((m, idx) => (
                      <option key={idx} value={idx + 1}>{m}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">गते (Day)</label>
                  <select
                    value={cBsDay}
                    onChange={(e) => setCBsDay(parseInt(e.target.value, 10))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-sm"
                  >
                    {Array.from({ length: 32 }).map((_, idx) => (
                      <option key={idx} value={idx + 1}>{toNepaliDigits(idx + 1)}</option>
                    ))}
                  </select>
                </div>
              </div>

              {convertedAdResult && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-center font-bold text-sm shadow-xs">
                  {convertedAdResult}
                </div>
              )}
            </div>
          ) : (
            <div className="max-w-md mx-auto space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">अंग्रेजी मिति (AD Date)</label>
                <input
                  type="date"
                  value={cAdDateStr}
                  onChange={(e) => setCAdDateStr(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-sm"
                />
              </div>

              {convertedBsResult && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-center font-bold text-sm shadow-xs">
                  {convertedBsResult}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 4: FESTIVALS FOLKLORE & SIGNIFICANCE                */}
      {/* ======================================================== */}
      {activeTab === 'festivals' && (
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              नेपाली चाडपर्व, पौराणिक कथा तथा परिकारहरू
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              BR Patro द्वारा संकलित नेपालका महान् चाडपर्वहरूको धार्मिक महत्व, विधि र परम्परागत परिकार।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {festivalLores.map((lore: any) => (
              <div 
                key={lore.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4 relative overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                    {lore.icon || '🌺'}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900 dark:text-white">
                      {lore.title}
                    </h4>
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                      {lore.tithiTag}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p><strong>धार्मिक महत्व:</strong> {lore.significance}</p>
                  {lore.story && <p><strong>पौराणिक कथा:</strong> {lore.story}</p>}
                </div>

                {lore.foods && lore.foods.length > 0 && (
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-2xs font-black uppercase text-slate-400 block mb-1.5">
                      विशेष परम्परागत परिकार:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {lore.foods.map((f: any, fIdx: number) => (
                        <span key={fIdx} className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                          🍲 {f.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
