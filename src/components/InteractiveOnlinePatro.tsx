'use client';

import React, { useState, useMemo, useEffect } from 'react';
// @ts-ignore
import NepaliDate from 'nepali-date-converter';
import { toNepaliDigits, nepaliMonths, nepaliDays } from '@/lib/nepaliDate';
import { getPanchangDetails, PanchangDetails } from '@/lib/panchang';
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
  Star
} from 'lucide-react';

export default function InteractiveOnlinePatro() {
  const [activeTab, setActiveTab] = useState<'calendar' | 'converter'>('calendar');
  
  // Current real date
  const [currentDate, setCurrentDate] = useState(() => new Date());
  
  // Calendar view state (BS year & month)
  const initialNepali = useMemo(() => new NepaliDate(new Date()), []);
  const [viewYear, setViewYear] = useState<number>(initialNepali.getYear());
  const [viewMonth, setViewMonth] = useState<number>(initialNepali.getMonth()); // 0-11
  
  // Selected date for panchang inspection
  const [selectedDay, setSelectedDay] = useState<number>(initialNepali.getDate());
  
  // Converter States
  const [convertMode, setConvertMode] = useState<'bs2ad' | 'ad2bs'>('bs2ad');
  
  // BS to AD state
  const [cBsYear, setCBsYear] = useState<number>(initialNepali.getYear());
  const [cBsMonth, setCBsMonth] = useState<number>(initialNepali.getMonth());
  const [cBsDay, setCBsDay] = useState<number>(initialNepali.getDate());
  const [convertedAdResult, setConvertedAdResult] = useState<string>('');
  
  // AD to BS state
  const [cAdDateStr, setCAdDateStr] = useState<string>(() => new Date().toISOString().split('T')[0]);
  const [convertedBsResult, setConvertedBsResult] = useState<string>('');

  // Calculate days in the view month
  const monthInfo = useMemo(() => {
    try {
      const firstDay = new NepaliDate(viewYear, viewMonth, 1);
      const startDayOfWeek = firstDay.toJsDate().getDay(); // 0 = Sunday, 6 = Saturday
      
      let daysInMonth = 28;
      for (let d = 29; d <= 32; d++) {
        try {
          const test = new NepaliDate(viewYear, viewMonth, d);
          if (test.getMonth() === viewMonth) {
            daysInMonth = d;
          } else {
            break;
          }
        } catch {
          break;
        }
      }
      return { startDayOfWeek, daysInMonth };
    } catch {
      return { startDayOfWeek: 0, daysInMonth: 30 };
    }
  }, [viewYear, viewMonth]);

  // Selected Day Panchang
  const selectedPanchang: PanchangDetails | null = useMemo(() => {
    try {
      const bsDateObj = new NepaliDate(viewYear, viewMonth, Math.min(selectedDay, monthInfo.daysInMonth));
      const jsDate = bsDateObj.toJsDate();
      return getPanchangDetails(jsDate);
    } catch {
      return null;
    }
  }, [viewYear, viewMonth, selectedDay, monthInfo.daysInMonth]);

  // BS to AD conversion logic
  const handleBsToAd = () => {
    try {
      const bsObj = new NepaliDate(cBsYear, cBsMonth, cBsDay);
      const jsDate = bsObj.toJsDate();
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      const formattedEn = jsDate.toLocaleDateString('en-US', options);
      const formattedNp = `${cBsYear} ${nepaliMonths[cBsMonth]} ${toNepaliDigits(cBsDay)} गते = ई.सं. ${formattedEn}`;
      setConvertedAdResult(formattedNp);
    } catch (e) {
      setConvertedAdResult('अमान्य मिति। कृपया सही वि.सं. मिति छान्नुहोस्।');
    }
  };

  // AD to BS conversion logic
  const handleAdToBs = (dateStr: string) => {
    try {
      if (!dateStr) return;
      const jsDate = new Date(dateStr + 'T12:00:00');
      const nepDate = new NepaliDate(jsDate);
      const bsFormatted = `${toNepaliDigits(nepDate.getYear())} ${nepaliMonths[nepDate.getMonth()]} ${toNepaliDigits(nepDate.getDate())} गते ${nepaliDays[jsDate.getDay()]}`;
      const p = getPanchangDetails(jsDate);
      setConvertedBsResult(`${bsFormatted} (${p.tithiName}, ${p.paksha} पक्ष)`);
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
    if (viewMonth === 0) {
      setViewYear(prev => prev - 1);
      setViewMonth(11);
    } else {
      setViewMonth(prev => prev - 1);
    }
    setSelectedDay(1);
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewYear(prev => prev + 1);
      setViewMonth(0);
    } else {
      setViewMonth(prev => prev + 1);
    }
    setSelectedDay(1);
  };

  const handleGoToday = () => {
    const todayNepali = new NepaliDate(new Date());
    setViewYear(todayNepali.getYear());
    setViewMonth(todayNepali.getMonth());
    setSelectedDay(todayNepali.getDate());
  };

  const downloadUrl = "https://github.com/imtechboss/imtechboss/releases/download/v7.9.64/BR_Patro_v7.9.64.apk";

  return (
    <div className="space-y-8">
      {/* Top Navigation Mode Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-2">
        <button
          onClick={() => setActiveTab('calendar')}
          className={`flex items-center gap-2 px-5 py-3 border-b-2 font-bold text-sm transition-all ${
            activeTab === 'calendar'
              ? 'border-red-600 text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-red-950/20 rounded-t-xl'
              : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>मासिक नेपाली पात्रो (Monthly Patro)</span>
        </button>

        <button
          onClick={() => setActiveTab('converter')}
          className={`flex items-center gap-2 px-5 py-3 border-b-2 font-bold text-sm transition-all ${
            activeTab === 'converter'
              ? 'border-red-600 text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-red-950/20 rounded-t-xl'
              : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <ArrowRightLeft className="w-4 h-4" />
          <span>मिति रूपान्तरण (BS ⇄ AD Converter)</span>
        </button>
      </div>

      {/* TAB 1: MONTHLY CALENDAR GRID */}
      {activeTab === 'calendar' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Calendar Grid Section */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-sm space-y-6">
            {/* Header: Month/Year navigation */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={handlePrevMonth}
                  className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 transition"
                  aria-label="Previous Month"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    {nepaliMonths[viewMonth]} {toNepaliDigits(viewYear)}
                  </h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Bikram Sambat {viewYear}
                  </div>
                </div>
                <button
                  onClick={handleNextMonth}
                  className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 transition"
                  aria-label="Next Month"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleGoToday}
                  className="px-3.5 py-1.5 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900/60 font-bold text-xs hover:bg-red-100 transition shadow-xs"
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

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {/* Empty leading slots */}
              {Array.from({ length: monthInfo.startDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`} className="h-14 sm:h-20 rounded-xl bg-slate-50/40 dark:bg-slate-900/40 opacity-30 border border-transparent" />
              ))}

              {/* Month Days */}
              {Array.from({ length: monthInfo.daysInMonth }).map((_, i) => {
                const dayNum = i + 1;
                const isSelected = selectedDay === dayNum;
                
                // Day of week
                const dayOfWeek = (monthInfo.startDayOfWeek + i) % 7;
                const isSaturday = dayOfWeek === 6;

                // Gregorian Date for this day
                let engDay = '';
                try {
                  const bObj = new NepaliDate(viewYear, viewMonth, dayNum);
                  engDay = String(bObj.toJsDate().getDate());
                } catch {
                  engDay = '';
                }

                return (
                  <button
                    key={dayNum}
                    onClick={() => setSelectedDay(dayNum)}
                    className={`h-14 sm:h-20 p-1.5 sm:p-2 rounded-xl flex flex-col justify-between text-left transition-all border ${
                      isSelected
                        ? 'border-red-600 bg-red-50 dark:bg-red-950/50 ring-2 ring-red-500/30 shadow-md font-bold'
                        : isSaturday
                        ? 'border-red-200/60 dark:border-red-900/40 bg-red-50/30 dark:bg-red-950/10 hover:border-red-300'
                        : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className={`text-sm sm:text-base font-black ${
                        isSaturday 
                          ? 'text-red-600 dark:text-red-400' 
                          : 'text-slate-800 dark:text-slate-100'
                      }`}>
                        {toNepaliDigits(dayNum)}
                      </span>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                        {engDay}
                      </span>
                    </div>

                    <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 truncate">
                      {isSaturday ? <span className="text-red-500 font-semibold">बिदा</span> : null}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Day Panchanga Card */}
          <div className="lg:col-span-4 space-y-6">
            {selectedPanchang ? (
              <div className="bg-gradient-to-br from-red-900 via-rose-950 to-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-400/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>दैनिक वैदिक पञ्चाङ्ग</span>
                  </div>

                  <h4 className="text-2xl font-black text-white">
                    {nepaliMonths[viewMonth]} {toNepaliDigits(selectedDay)} गते
                  </h4>

                  <div className="text-xs text-rose-200">
                    {selectedPanchang.dayName} | {selectedPanchang.adDateString}
                  </div>
                </div>

                {/* 5 Limbs of Panchanga */}
                <div className="grid grid-cols-2 gap-3 text-xs pt-2 border-t border-white/10">
                  <div className="bg-white/10 p-2.5 rounded-xl">
                    <span className="text-rose-300 block text-[10px]">तिथि:</span>
                    <span className="font-bold text-white text-sm">{selectedPanchang.tithiName}</span>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl">
                    <span className="text-rose-300 block text-[10px]">पक्ष:</span>
                    <span className="font-bold text-white text-sm">{selectedPanchang.paksha} पक्ष</span>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl">
                    <span className="text-rose-300 block text-[10px]">नक्षत्र:</span>
                    <span className="font-bold text-white">{selectedPanchang.nakshatra}</span>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl">
                    <span className="text-rose-300 block text-[10px]">ऋतु:</span>
                    <span className="font-bold text-white">{selectedPanchang.ritu}</span>
                  </div>
                </div>

                {/* Sunrise / Sunset & Rahu Kaal */}
                <div className="space-y-2 text-xs pt-2 border-t border-white/10">
                  <div className="flex justify-between text-rose-200">
                    <span className="flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      सूर्योदय / सूर्यास्त:
                    </span>
                    <span className="font-bold text-white">{selectedPanchang.sunrise} / {selectedPanchang.sunset}</span>
                  </div>
                  <div className="flex justify-between text-rose-200">
                    <span className="flex items-center gap-1.5">
                      <Moon className="w-3.5 h-3.5 text-cyan-300" />
                      सूर्य / चन्द्र राशि:
                    </span>
                    <span className="font-bold text-white">{selectedPanchang.sunRashi} / {selectedPanchang.moonRashi}</span>
                  </div>
                  <div className="flex justify-between text-rose-200">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-red-400" />
                      राहुकाल:
                    </span>
                    <span className="font-bold text-amber-300">{selectedPanchang.rahuKaal}</span>
                  </div>
                  <div className="flex justify-between text-rose-200">
                    <span className="flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-emerald-400" />
                      अभिजीत मुहूर्त:
                    </span>
                    <span className="font-bold text-emerald-300">{selectedPanchang.abhijitMuhurta}</span>
                  </div>
                </div>

                {/* App Download Prompt */}
                <div className="pt-3">
                  <a
                    href={downloadUrl}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white text-slate-900 font-extrabold text-xs shadow-lg hover:bg-rose-50 transition"
                  >
                    <Download className="w-4 h-4 text-red-600" />
                    <span>पूर्ण कुण्डलीका लागि BR Patro एप डाउनलोड</span>
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}

      {/* TAB 2: BS <-> AD DATE CONVERTER */}
      {activeTab === 'converter' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
            <div>
              <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">
                सटीक मिति रूपान्तरण इन्जिन
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                वि.सं. ⇄ ई.सं. मिति रूपान्तरण (Nepali Date Converter)
              </h3>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setConvertMode('bs2ad')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  convertMode === 'bs2ad'
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                वि.सं. ➔ ई.सं. (BS to AD)
              </button>
              <button
                onClick={() => setConvertMode('ad2bs')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  convertMode === 'ad2bs'
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                ई.सं. ➔ वि.सं. (AD to BS)
              </button>
            </div>
          </div>

          {/* BS to AD Inputs */}
          {convertMode === 'bs2ad' && (
            <div className="space-y-6 max-w-2xl">
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    वर्ष (Year BS):
                  </label>
                  <select
                    value={cBsYear}
                    onChange={(e) => setCBsYear(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-bold text-slate-900 dark:text-white"
                  >
                    {Array.from({ length: 25 }, (_, i) => 2070 + i).map(yr => (
                      <option key={yr} value={yr}>{toNepaliDigits(yr)}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    महिना (Month):
                  </label>
                  <select
                    value={cBsMonth}
                    onChange={(e) => setCBsMonth(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-bold text-slate-900 dark:text-white"
                  >
                    {nepaliMonths.map((m, idx) => (
                      <option key={idx} value={idx}>{m}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    गते (Day):
                  </label>
                  <select
                    value={cBsDay}
                    onChange={(e) => setCBsDay(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-bold text-slate-900 dark:text-white"
                  >
                    {Array.from({ length: 32 }, (_, i) => i + 1).map(d => (
                      <option key={d} value={d}>{toNepaliDigits(d)}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Converted Result Banner */}
              <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block">
                  ई.सं. (Gregorian AD Date):
                </span>
                <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {convertedAdResult}
                </div>
              </div>
            </div>
          )}

          {/* AD to BS Inputs */}
          {convertMode === 'ad2bs' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  अंग्रेजी मिति छान्नुहोस् (Select AD Date):
                </label>
                <input
                  type="date"
                  value={cAdDateStr}
                  onChange={(e) => setCAdDateStr(e.target.value)}
                  className="w-full sm:w-72 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-bold text-slate-900 dark:text-white"
                />
              </div>

              {/* Converted Result Banner */}
              <div className="p-5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 space-y-2">
                <span className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wider block">
                  वि.सं. (Nepali BS Date):
                </span>
                <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {convertedBsResult}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
