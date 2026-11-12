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
  getAllFestivalLores
} from '@/lib/brPatroEngine';
import rashifalDataRaw from '@/data/panchanga/rashifal_data.json';
import { 
  Calendar as CalendarIcon, 
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
  X,
  Radio,
  BookMarked,
  Share2
} from 'lucide-react';

const rashifalData = rashifalDataRaw as Record<string, Record<string, string[]>>;

const RASHI_LIST = [
  { name: 'मेष', en: 'Aries', icon: '♈', color: 'from-red-500 to-rose-600' },
  { name: 'वृष', en: 'Taurus', icon: '♉', color: 'from-amber-500 to-orange-600' },
  { name: 'मिथुन', en: 'Gemini', icon: '♊', color: 'from-emerald-500 to-teal-600' },
  { name: 'कर्कट', en: 'Cancer', icon: '♋', color: 'from-cyan-500 to-blue-600' },
  { name: 'सिंह', en: 'Leo', icon: '♌', color: 'from-amber-600 to-yellow-500' },
  { name: 'कन्या', en: 'Virgo', icon: '♍', color: 'from-indigo-500 to-purple-600' },
  { name: 'तुला', en: 'Libra', icon: '♎', color: 'from-pink-500 to-rose-600' },
  { name: 'वृश्चिक', en: 'Scorpio', icon: '♏', color: 'from-red-600 to-rose-700' },
  { name: 'धनु', en: 'Sagittarius', icon: '♐', color: 'from-purple-600 to-indigo-700' },
  { name: 'मकर', en: 'Capricorn', icon: '♑', color: 'from-blue-600 to-cyan-700' },
  { name: 'कुम्भ', en: 'Aquarius', icon: '♒', color: 'from-teal-600 to-emerald-700' },
  { name: 'मीन', en: 'Pisces', icon: '♓', color: 'from-violet-600 to-purple-700' }
];

export default function InteractiveOnlinePatro() {
  // Real-time ticking clock
  const [now, setNow] = useState<Date>(() => new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Today's real BS Date
  const todayBs = useMemo(() => ad2bsExact(now), [now]);

  // Calendar View State (Year & Month)
  const [viewYear, setViewYear] = useState<number>(todayBs.year);
  const [viewMonth, setViewMonth] = useState<number>(todayBs.month); // 1-12
  const [selectedDay, setSelectedDay] = useState<number>(todayBs.day);

  // Modal Dialogs
  const [activeModal, setActiveModal] = useState<'panchang' | 'sait' | 'rashifal' | 'choghadiya' | 'converter' | 'lore' | null>(null);
  const [selectedRashi, setSelectedRashi] = useState<string>('मेष');
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

  // Selected Day Key & Panchang Data
  const selectedDateKey = useMemo(() => {
    const safeDay = Math.min(selectedDay, monthInfo.totalDays);
    return `${viewYear}-${String(viewMonth).padStart(2, '0')}-${String(safeDay).padStart(2, '0')}`;
  }, [viewYear, viewMonth, selectedDay, monthInfo.totalDays]);

  const selectedPanchang: FullPanchangaDetails = useMemo(() => {
    return calculateFullPanchanga(selectedDateKey);
  }, [selectedDateKey]);

  // Today's Panchang for Hero Card
  const todayDateKey = useMemo(() => {
    return `${todayBs.year}-${String(todayBs.month).padStart(2, '0')}-${String(todayBs.day).padStart(2, '0')}`;
  }, [todayBs]);

  const todayPanchang: FullPanchangaDetails = useMemo(() => {
    return calculateFullPanchanga(todayDateKey);
  }, [todayDateKey]);

  // Month Events
  const monthEvents = useMemo(() => {
    return getEventsForMonth(viewYear, viewMonth);
  }, [viewYear, viewMonth]);

  // Month Saits
  const monthSaits = useMemo(() => {
    return getSaitForMonth(viewYear, saitCategory, viewMonth);
  }, [viewYear, saitCategory, viewMonth]);

  // Festival Lore
  const festivalLores = useMemo(() => {
    return getAllFestivalLores();
  }, []);

  // Time-aware greeting
  const greetingText = useMemo(() => {
    const hr = now.getHours();
    if (hr >= 4 && hr < 12) return '🌅 शुभ प्रभात';
    if (hr >= 12 && hr < 16) return '☀️ शुभ दिउँसो';
    if (hr >= 16 && hr < 20) return '🌇 शुभ साँझ';
    return '🌙 शुभ रात्रि';
  }, [now]);

  // Converter logic
  useEffect(() => {
    try {
      const lengths = getBsMonthLengths(cBsYear);
      const safeD = Math.min(cBsDay, lengths[cBsMonth - 1] || 30);
      const adDate = bs2adExact(cBsYear, cBsMonth, safeD);
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedEn = adDate.toLocaleDateString('en-US', options);
      const p = calculateFullPanchanga(`${cBsYear}-${String(cBsMonth).padStart(2, '0')}-${String(safeD).padStart(2, '0')}`);
      setConvertedAdResult(`वि.सं. ${toNepaliDigits(cBsYear)} ${nepaliMonths[cBsMonth - 1]} ${toNepaliDigits(safeD)} गते = ई.सं. ${formattedEn} (${p.tithiDisplay.split('(')[0]?.trim()}, ${p.warName})`);
    } catch {
      setConvertedAdResult('अमान्य मिति।');
    }
  }, [cBsYear, cBsMonth, cBsDay]);

  useEffect(() => {
    try {
      if (!cAdDateStr) return;
      const jsDate = new Date(cAdDateStr + 'T12:00:00');
      const bs = ad2bsExact(jsDate);
      const p = calculateFullPanchanga(`${bs.year}-${String(bs.month).padStart(2, '0')}-${String(bs.day).padStart(2, '0')}`);
      setConvertedBsResult(`ई.सं. ${cAdDateStr} = वि.सं. ${toNepaliDigits(bs.year)} ${nepaliMonths[bs.month - 1]} ${toNepaliDigits(bs.day)} गते, ${p.warName} (${p.tithiDisplay.split('(')[0]?.trim()}, ${p.nakshatraDisplay.split('(')[0]?.trim()} नक्षत्र)`);
    } catch {
      setConvertedBsResult('अमान्य मिति।');
    }
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

  const downloadApkUrl = "https://github.com/imtechboss/imtechboss/releases/download/v7.9.80/BR_Patro_v7.9.80.apk";

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 font-sans">
      
      {/* ======================================================== */}
      {/* 1. APP HEADER & TOP BRAND BAR                            */}
      {/* ======================================================== */}
      <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-red-600 p-1 flex items-center justify-center shadow-md shadow-red-500/20 border-2 border-amber-300">
            <img src="/assets/ganesh_badge.png" alt="BR Patro Logo" className="w-full h-full object-contain rounded-xl drop-shadow" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                BR PATRO
              </h1>
              <span className="px-1.5 py-0.5 rounded text-3xs font-black uppercase bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300">
                PRO
              </span>
            </div>
            <p className="text-2xs sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
              नेपालको आधिकारिक वैदिक पञ्चाङ्ग • {toNepaliDigits(todayBs.year)} वि.सं.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={downloadApkUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="BR_Patro_v7.9.74.apk"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white text-xs font-bold shadow-sm transition-transform active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">एप डाउनलोड</span>
            <span className="sm:hidden">APK</span>
          </a>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. SCENIC RED/CRIMSON HERO CARD (Hamro / BR Patro Style) */}
      {/* ======================================================== */}
      <div 
        onClick={() => {
          setSelectedDay(todayBs.day);
          setViewYear(todayBs.year);
          setViewMonth(todayBs.month);
          setActiveModal('panchang');
        }}
        className="cursor-pointer relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#881337] via-[#991b1b] to-[#7f1d1d] text-white p-5 sm:p-7 shadow-xl shadow-red-950/20 border border-red-500/30 transition-transform active:scale-[0.99]"
      >
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-red-400/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="relative z-10 space-y-4">
          {/* Top Row: Greeting, Location & Live Clock */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 backdrop-blur-md text-amber-200 text-xs font-bold border border-white/10">
              <span>{greetingText}</span>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-1 text-white">
                <MapPin className="w-3 h-3 text-amber-400" />
                काठमाडौँ (+५:४५)
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md font-mono text-xs font-bold text-white border border-white/10">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>{now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
            </div>
          </div>

          {/* Middle: Large Date & Tithi Tag */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-1">
            <div>
              <div className="text-2xl sm:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                {toNepaliDigits(todayBs.day)} {nepaliMonths[todayBs.month - 1]} {toNepaliDigits(todayBs.year)}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-rose-200 mt-1">
                {todayPanchang.warName} ({todayPanchang.warSanskrit}) | {todayPanchang.adDateFormatted}
              </div>
            </div>

            {/* Right: Golden Tithi Tag & Sun Times */}
            <div className="text-left sm:text-right space-y-1">
              <span className="inline-block px-3 py-1 rounded-xl bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-sm">
                {todayPanchang.tithiDisplay.split('(')[0]?.trim() || 'तिथि'}
              </span>
              <div className="text-2xs text-rose-100 flex sm:justify-end items-center gap-2 font-medium">
                <span>☀️ {todayPanchang.sunrise}</span>
                <span>•</span>
                <span>🌙 {todayPanchang.sunset}</span>
              </div>
            </div>
          </div>

          {/* Bottom Strip: Tithi details & Festivals */}
          <div className="pt-3 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
            <div className="text-rose-100 font-medium">
              <span className="text-amber-300 font-bold">{todayPanchang.chandraMasa}</span>: {todayPanchang.tithiDisplay}
            </div>
            
            {todayPanchang.eventTitles.length > 0 ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-400/20 text-amber-200 border border-amber-300/30 text-2xs font-bold truncate max-w-full">
                <Sparkles className="w-3 h-3 text-amber-300 shrink-0" />
                <span className="truncate">{todayPanchang.eventTitles[0]}</span>
              </span>
            ) : (
              <span className="text-2xs text-rose-300">
                👉 विस्तृत वैदिक पञ्चाङ्ग हेर्न ट्याप गर्नुहोस्
              </span>
            )}
          </div>

          {/* Astrological King & Minister Bar */}
          <div className="p-2 sm:px-3 rounded-xl bg-black/30 border border-amber-400/20 text-3xs sm:text-2xs text-amber-200 flex flex-wrap items-center justify-between gap-2">
            <span>👑 <strong>राजा:</strong> गुरु (बृहस्पति)</span>
            <span>⚔️ <strong>मन्त्री:</strong> भौम (मङ्गल)</span>
            <span>📜 <strong>संवत्सर:</strong> कालयुक्त</span>
            <span>🧭 <strong>चन्द्रवास:</strong> {todayPanchang.chandraVasa.split(' ')[0]}</span>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. DAILY TRAVEL & MUHURTA STRIP (दिशाशूल, राहुकाल, अभिजित्) */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* 1. Disha Shoola */}
        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="text-2xs font-black uppercase text-slate-400 flex items-center gap-1">
              <Compass className="w-3 h-3 text-rose-500" />
              दिशाशूल (Travel Direction)
            </span>
            <span className="px-1.5 py-0.5 rounded text-3xs font-bold bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
              बार्ने
            </span>
          </div>
          <div className="text-sm font-black text-rose-600 dark:text-rose-400">
            {todayPanchang.dishaShoola} दिशा
          </div>
          <div className="text-3xs text-slate-500 dark:text-slate-400 mt-1 truncate" title={todayPanchang.dishaParihara}>
            परिहार: {todayPanchang.dishaParihara}
          </div>
        </div>

        {/* 2. Rahu Kaal */}
        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="text-2xs font-black uppercase text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3 text-red-500" />
              राहुकाल (Inauspicious)
            </span>
            <span className="px-1.5 py-0.5 rounded text-3xs font-bold bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300">
              वर्जित
            </span>
          </div>
          <div className="text-xs sm:text-sm font-black text-red-600 dark:text-red-400">
            {todayPanchang.rahuKala}
          </div>
          <div className="text-3xs text-slate-500 dark:text-slate-400 mt-1">
            नयाँ तथा शुभ कार्य नथाल्नुहोस्
          </div>
        </div>

        {/* 3. Abhijit Muhurta */}
        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="text-2xs font-black uppercase text-slate-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-500" />
              अभिजित् मुहूर्त (Auspicious)
            </span>
            <span className="px-1.5 py-0.5 rounded text-3xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              शुभ
            </span>
          </div>
          <div className="text-xs sm:text-sm font-black text-emerald-600 dark:text-emerald-400">
            {todayPanchang.abhijitMuhurta}
          </div>
          <div className="text-3xs text-slate-500 dark:text-slate-400 mt-1">
            मध्याह्नको सर्वकार्य सिद्धि समय
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 4. QUICK SERVICES 8-GRID (Hamro Patro / BR Patro Style)  */}
      {/* ======================================================== */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-sm">
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-3 text-center">
          {/* 1. Panchanga */}
          <button 
            onClick={() => setActiveModal('panchang')}
            className="flex flex-col items-center gap-1.5 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition group"
          >
            <div className="w-11 h-11 rounded-2xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/60 flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
              🕉️
            </div>
            <span className="text-2xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-red-600">पञ्चाङ्ग</span>
          </button>

          {/* 2. Sait */}
          <button 
            onClick={() => setActiveModal('sait')}
            className="flex flex-col items-center gap-1.5 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition group"
          >
            <div className="w-11 h-11 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900/60 flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
              💍
            </div>
            <span className="text-2xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-amber-600">शुभ साइत</span>
          </button>

          {/* 3. 12 Rashifal */}
          <button 
            onClick={() => setActiveModal('rashifal')}
            className="flex flex-col items-center gap-1.5 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition group"
          >
            <div className="w-11 h-11 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-900/60 flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
              ♈
            </div>
            <span className="text-2xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-purple-600">१२ राशिफल</span>
          </button>

          {/* 4. Converter */}
          <button 
            onClick={() => setActiveModal('converter')}
            className="flex flex-col items-center gap-1.5 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition group"
          >
            <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
              🔄
            </div>
            <span className="text-2xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-blue-600">मिति बदल्नुहोस्</span>
          </button>

          {/* 5. Choghadiya */}
          <button 
            onClick={() => setActiveModal('choghadiya')}
            className="flex flex-col items-center gap-1.5 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition group"
          >
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900/60 flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
              ⏳
            </div>
            <span className="text-2xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-emerald-600">चोघडिया</span>
          </button>

          {/* 6. Folklore / Lore */}
          <button 
            onClick={() => setActiveModal('lore')}
            className="flex flex-col items-center gap-1.5 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition group"
          >
            <div className="w-11 h-11 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900/60 flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
              🌺
            </div>
            <span className="text-2xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-rose-600">चाडपर्व कथा</span>
          </button>

          {/* 7. Karmakanda & Pooja */}
          <a
            href="https://github.com/imtechboss/imtechboss/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1.5 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition group"
          >
            <div className="w-11 h-11 rounded-2xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900/60 flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
              📜
            </div>
            <span className="text-2xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-teal-600">कर्मकाण्ड</span>
          </a>

          {/* 8. Download APK */}
          <a
            href={downloadApkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1.5 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition group"
          >
            <div className="w-11 h-11 rounded-2xl bg-red-600 text-white flex items-center justify-center text-xl group-hover:scale-105 transition-transform shadow-md shadow-red-500/30">
              <Download className="w-5 h-5" />
            </div>
            <span className="text-2xs font-black text-red-600 dark:text-red-400">BR Patro एप</span>
          </a>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 5. MONTHLY CALENDAR GRID (Clean Hamro Patro Style)       */}
      {/* ======================================================== */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-sm space-y-4">
        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3.5">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handlePrevMonth}
              className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 transition"
              title="अघिल्लो महिना"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Month Select */}
            <select
              value={viewMonth}
              onChange={(e) => {
                setViewMonth(parseInt(e.target.value, 10));
                setSelectedDay(1);
              }}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-black text-base sm:text-lg border-none focus:ring-2 focus:ring-red-500 cursor-pointer"
            >
              {nepaliMonths.map((mName, idx) => (
                <option key={idx} value={idx + 1}>{mName}</option>
              ))}
            </select>

            {/* Year Select */}
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
              className="px-3.5 py-1.5 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900/60 font-bold text-xs hover:bg-red-100 transition shadow-xs"
            >
              आज (Today)
            </button>
          </div>
        </div>

        {/* 7 Weekday Columns */}
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
          {Array.from({ length: monthInfo.startDayOfWeek }).map((_, i) => (
            <div key={`empty-${i}`} className="h-16 sm:h-20 rounded-xl bg-slate-50/30 dark:bg-slate-900/30 opacity-20 border border-transparent" />
          ))}

          {Array.from({ length: monthInfo.totalDays }).map((_, i) => {
            const dayNum = i + 1;
            const isToday = viewYear === todayBs.year && viewMonth === todayBs.month && dayNum === todayBs.day;
            const isSelected = selectedDay === dayNum;
            const dayOfWeek = (monthInfo.startDayOfWeek + i) % 7;
            const isSaturday = dayOfWeek === 6;

            const dKey = `${viewYear}-${String(viewMonth).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
            const dayPanchang = calculateFullPanchanga(dKey);
            const hasEvents = dayPanchang.eventTitles.length > 0;
            const isHoliday = dayPanchang.isHoliday;

            const adDate = bs2adExact(viewYear, viewMonth, dayNum);
            const adDayNum = adDate.getDate();
            const tithiPart = dayPanchang.tithiDisplay.split(' ')[0] || '';

            return (
              <button
                key={dayNum}
                onClick={() => {
                  setSelectedDay(dayNum);
                  setActiveModal('panchang');
                }}
                className={`h-16 sm:h-20 p-1 sm:p-2 rounded-xl flex flex-col justify-between text-left transition-all border relative overflow-hidden ${
                  isToday
                    ? 'border-amber-500 bg-amber-50/60 dark:bg-amber-950/30 ring-2 ring-amber-400/50 shadow-sm'
                    : isSelected
                    ? 'border-red-600 bg-red-50 dark:bg-red-950/50 ring-2 ring-red-500/40'
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

                {/* Bottom: Event / Holiday Pill */}
                <div className="flex items-center justify-between w-full text-[9px] truncate">
                  {hasEvents ? (
                    <span className="inline-block px-1 py-0.2 rounded text-3xs font-bold bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 truncate max-w-full">
                      {dayPanchang.eventTitles[0].split(',')[0]}
                    </span>
                  ) : isSaturday ? (
                    <span className="text-red-500 font-bold">शनिबार</span>
                  ) : (
                    <span className="text-3xs text-slate-400">{dayPanchang.warName.slice(0, 3)}</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Month Events Strip */}
        {monthEvents.length > 0 && (
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>{nepaliMonths[viewMonth - 1]} {toNepaliDigits(viewYear)} का मुख्य चाडपर्वहरू</span>
              </span>
              <span className="text-3xs text-slate-400">{toNepaliDigits(monthEvents.length)} वटा पर्व/दिवस</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {monthEvents.slice(0, 6).map((ev, idx) => (
                <div 
                  key={idx}
                  onClick={() => {
                    setSelectedDay(ev.day);
                    setActiveModal('panchang');
                  }}
                  className="cursor-pointer flex items-start gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 hover:border-red-400 transition"
                >
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
      {/* MODAL 1: FULL VEDIC PANCHANGA CARD (25+ Attributes)      */}
      {/* ======================================================== */}
      {activeModal === 'panchang' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 text-white p-5 sm:p-7 shadow-2xl border border-red-500/30 space-y-5">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1 pr-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-black border border-red-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>आधिकारिक वैदिक पञ्चाङ्ग</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                {selectedPanchang.bsDateFormatted}
              </h3>
              <div className="text-xs text-rose-200">
                {selectedPanchang.warName} ({selectedPanchang.warSanskrit}) • {selectedPanchang.adDateFormatted}
              </div>
            </div>

            {/* Festivals if any */}
            {selectedPanchang.eventTitles.length > 0 && (
              <div className="p-3 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-200 text-xs font-bold">
                🌺 {selectedPanchang.eventTitles.join(' • ')}
              </div>
            )}

            {/* 5 Core Limbs */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <span className="text-xs font-black uppercase text-rose-300">पञ्चाङ्गका ५ मुख्य अङ्गहरू:</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 col-span-2">
                  <span className="text-3xs text-rose-300 block uppercase font-bold">१. तिथि (Tithi)</span>
                  <span className="font-black text-white text-sm">{selectedPanchang.tithiDisplay}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 col-span-2">
                  <span className="text-3xs text-rose-300 block uppercase font-bold">२. नक्षत्र (Nakshatra)</span>
                  <span className="font-bold text-white text-xs">{selectedPanchang.nakshatraDisplay}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 col-span-2">
                  <span className="text-3xs text-rose-300 block uppercase font-bold">३. योग (Yoga)</span>
                  <span className="font-bold text-white text-xs">{selectedPanchang.yogaDisplay}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 col-span-2">
                  <span className="text-3xs text-rose-300 block uppercase font-bold">४. करण (Karana)</span>
                  <span className="font-bold text-white text-xs">{selectedPanchang.karanaDisplay}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-3xs text-rose-300 block uppercase font-bold">५. वार (Day)</span>
                  <span className="font-bold text-white text-xs">{selectedPanchang.warName}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-3xs text-rose-300 block uppercase font-bold">आनन्दादि योग</span>
                  <span className="font-bold text-amber-300 text-xs">{selectedPanchang.anandadiYoga} योग</span>
                </div>
              </div>
            </div>

            {/* Auspicious & Inauspicious Muhurtas */}
            <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
              <span className="text-xs font-black uppercase text-rose-300">मुहूर्त तथा काल साधन:</span>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/30">
                  <span className="text-3xs text-emerald-300 block font-bold">अभिजित् मुहूर्त (शुभ)</span>
                  <span className="font-bold text-emerald-200">{selectedPanchang.abhijitMuhurta}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-red-950/50 border border-red-500/30">
                  <span className="text-3xs text-red-300 block font-bold">राहुकाल (वर्जित)</span>
                  <span className="font-bold text-red-200">{selectedPanchang.rahuKala}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-3xs text-slate-400 block">यमघण्ट काल</span>
                  <span className="font-semibold text-white">{selectedPanchang.yamaGhanta}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-3xs text-slate-400 block">गुलिक काल</span>
                  <span className="font-semibold text-white">{selectedPanchang.gulikaKala}</span>
                </div>
              </div>
            </div>

            {/* Sun & Moon Details */}
            <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
              <span className="text-xs font-black uppercase text-rose-300">सूर्य, चन्द्र तथा कालगणना:</span>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-3xs text-slate-400 block">सूर्योदय / सूर्यास्त</span>
                  <span className="font-bold text-amber-200">☀️ {selectedPanchang.sunrise} / 🌙 {selectedPanchang.sunset}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-3xs text-slate-400 block">चन्द्रोदय / चन्द्रास्त</span>
                  <span className="font-bold text-indigo-200">🌔 {selectedPanchang.moonrise} / 🌘 {selectedPanchang.moonset}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-3xs text-slate-400 block">चन्द्र राशि</span>
                  <span className="font-bold text-white">{selectedPanchang.chandraRashiDisplay}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-3xs text-slate-400 block">सूर्य राशि</span>
                  <span className="font-bold text-white">{selectedPanchang.suryaRashi} ({selectedPanchang.ayan})</span>
                </div>
              </div>
            </div>

            {/* Rituals & Travel */}
            <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
              <span className="text-xs font-black uppercase text-rose-300">यात्रा तथा कर्मकाण्ड:</span>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-3xs text-slate-400 block">चन्द्रवास</span>
                  <span className="font-bold text-white">{selectedPanchang.chandraVasa}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-3xs text-slate-400 block">अग्निवास (हवन)</span>
                  <span className="font-bold text-emerald-300">{selectedPanchang.agniVasa}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 col-span-2">
                  <span className="text-3xs text-rose-300 block">दिशाशूल तथा परिहार</span>
                  <span className="font-bold text-red-300">{selectedPanchang.dishaShoola} दिशा</span>
                  <p className="text-3xs text-slate-300 mt-0.5">परिहार: {selectedPanchang.dishaParihara}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 2: 12 RASHIFAL                                     */}
      {/* ======================================================== */}
      {activeModal === 'rashifal' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-6">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-black">
                <span>🪐 दैनिक १२ राशि फलादेश</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                आजको राशिफल (Daily Rashifal)
              </h3>
            </div>

            {/* 12 Rashi Grid Selector */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {RASHI_LIST.map((r, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedRashi(r.name)}
                  className={`p-2.5 rounded-2xl flex flex-col items-center gap-1 transition-all border ${
                    selectedRashi === r.name
                      ? 'border-purple-600 bg-purple-50 dark:bg-purple-950/50 ring-2 ring-purple-500/30 font-bold'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                  }`}
                >
                  <span className="text-2xl">{r.icon}</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">{r.name}</span>
                </button>
              ))}
            </div>

            {/* Selected Rashi Forecast Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-purple-950/30 dark:to-slate-900 border border-purple-200 dark:border-purple-900/40 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">
                  {RASHI_LIST.find(r => r.name === selectedRashi)?.icon}
                </span>
                <div>
                  <h4 className="text-lg font-black text-purple-900 dark:text-purple-200">
                    {selectedRashi} राशि (आजको फलादेश)
                  </h4>
                  <p className="text-2xs text-purple-600 dark:text-purple-400">
                    चन्द्र राशि गोचर तथा वैदिक ग्रह स्थिति अनुसार
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed pt-2 border-t border-purple-100 dark:border-purple-900/30">
                <p><strong>💼 कार्य तथा व्यापार:</strong> {rashifalData?.career?.very_positive?.[0] || 'कार्यक्षेत्रमा मान-सम्मान मिल्नेछ, व्यापारमा लाभ हुने योग छ।'}</p>
                <p><strong>💰 धन तथा आर्थिक:</strong> {rashifalData?.finance?.very_positive?.[0] || 'आर्थिक दृष्टिकोणले आजको दिन अनुकूल रहनेछ। लगानीबाट फाइदा मिल्नेछ।'}</p>
                <p><strong>❤️ प्रेम तथा परिवार:</strong> {rashifalData?.love?.very_positive?.[0] || 'पारिवारिक सम्बन्ध सुमधुर रहनेछ भने प्रियजनको साथ मिल्नेछ।'}</p>
                <p><strong>🌿 स्वास्थ्य विचार:</strong> {rashifalData?.health?.very_positive?.[0] || 'स्वास्थ्य सामान्यतया राम्रो रहनेछ। खानपानमा सन्तुलन राख्नुहोला।'}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 3: SHUBHA SAIT (विवाह, व्रतबन्ध, पास्नी)          */}
      {/* ======================================================== */}
      {activeModal === 'sait' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-6">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pr-10">
              <div>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400">वि.सं. {toNepaliDigits(viewYear)}</span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">शुभ साइत क्यालेन्डर</h3>
              </div>

              <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-800">
                <button
                  onClick={() => setSaitCategory('Bibaha')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    saitCategory === 'Bibaha' ? 'bg-red-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  💍 विवाह
                </button>
                <button
                  onClick={() => setSaitCategory('BrataBandha')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    saitCategory === 'BrataBandha' ? 'bg-red-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  🧵 व्रतबन्ध
                </button>
                <button
                  onClick={() => setSaitCategory('Pasni')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    saitCategory === 'Pasni' ? 'bg-red-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  🥣 पास्नी
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {nepaliMonths.map((mName, idx) => {
                const saits = getSaitForMonth(viewYear, saitCategory, idx + 1);
                return (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900 dark:text-white text-sm">{mName}</span>
                      <span className="text-2xs font-semibold text-slate-400">{saits.length} साइत</span>
                    </div>
                    {saits.length > 0 ? (
                      <div className="flex flex-wrap gap-1.5">
                        {saits.map((d, sIdx) => (
                          <span key={sIdx} className="px-2 py-1 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-bold">
                            {toNepaliDigits(d)} गते
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-3xs text-slate-400 italic">यस महिनामा साइत छैन</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 4: CHOGHADIYA (वारवेला / चोघडिया)                  */}
      {/* ======================================================== */}
      {activeModal === 'choghadiya' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-black">
                <span>⏳ दैनिक चोघडिया मुहूर्त</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                वारवेला चक्र ({todayPanchang.warName})
              </h3>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 text-emerald-900 dark:text-emerald-200 font-bold flex justify-between">
                <span>🟢 अमृत / शुभ / लाभ</span>
                <span>अति उत्तम (नयाँ कार्य सुरु गर्न)</span>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 text-amber-900 dark:text-amber-200 font-bold flex justify-between">
                <span>🟡 चर</span>
                <span>सामान्य (यात्रा तथा चलायमान काम)</span>
              </div>
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-300 text-red-900 dark:text-red-200 font-bold flex justify-between">
                <span>🔴 काल / रोग / उद्वेग</span>
                <span>अशुभ (वर्जित समय)</span>
              </div>
            </div>

            <p className="text-2xs text-slate-400">
              प्रत्येक दिन सूर्योदयदेखि सूर्यास्तसम्मको दिनमानलाई ८ भागमा विभाजन गरी चोघडिया निर्धारण गरिन्छ।
            </p>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 5: EXACT DATE CONVERTER                           */}
      {/* ======================================================== */}
      {activeModal === 'converter' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-6">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-1">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                सटीक मिति रूपान्तरण (BS ⇄ AD)
              </h3>
              <p className="text-xs text-slate-400">
                २०८१ देखि २०८४ सम्मका जुनसुकै मितिलाई १००% सही रूपान्तरण गर्नुहोस्।
              </p>
            </div>

            <div className="flex justify-center">
              <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-800">
                <button
                  onClick={() => setConvertMode('bs2ad')}
                  className={`px-4 py-2 rounded-xl font-bold text-xs transition ${
                    convertMode === 'bs2ad' ? 'bg-red-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  वि.सं. ➔ ई.सं.
                </button>
                <button
                  onClick={() => setConvertMode('ad2bs')}
                  className={`px-4 py-2 rounded-xl font-bold text-xs transition ${
                    convertMode === 'ad2bs' ? 'bg-red-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  ई.सं. ➔ वि.सं.
                </button>
              </div>
            </div>

            {convertMode === 'bs2ad' ? (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  <select
                    value={cBsYear}
                    onChange={(e) => setCBsYear(parseInt(e.target.value, 10))}
                    className="px-2 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-xs"
                  >
                    <option value={2081}>२०८१</option>
                    <option value={2082}>२०८२</option>
                    <option value={2083}>२०८३</option>
                    <option value={2084}>२०८४</option>
                  </select>

                  <select
                    value={cBsMonth}
                    onChange={(e) => setCBsMonth(parseInt(e.target.value, 10))}
                    className="px-2 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-xs"
                  >
                    {nepaliMonths.map((m, idx) => (
                      <option key={idx} value={idx + 1}>{m}</option>
                    ))}
                  </select>

                  <select
                    value={cBsDay}
                    onChange={(e) => setCBsDay(parseInt(e.target.value, 10))}
                    className="px-2 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-xs"
                  >
                    {Array.from({ length: 32 }).map((_, idx) => (
                      <option key={idx} value={idx + 1}>{toNepaliDigits(idx + 1)} गते</option>
                    ))}
                  </select>
                </div>

                {convertedAdResult && (
                  <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-center font-bold text-xs">
                    {convertedAdResult}
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  type="date"
                  value={cAdDateStr}
                  onChange={(e) => setCAdDateStr(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-sm"
                />

                {convertedBsResult && (
                  <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-center font-bold text-xs">
                    {convertedBsResult}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 6: FESTIVALS LORE & SIGNIFICANCE                   */}
      {/* ======================================================== */}
      {activeModal === 'lore' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 text-xs font-black">
                <span>🌺 चाडपर्व कथा तथा विधि</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                नेपालका महान् चाडपर्वहरू
              </h3>
            </div>

            <div className="space-y-4">
              {festivalLores.map((lore: any) => (
                <div key={lore.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{lore.icon || '🌺'}</span>
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white text-base">{lore.title}</h4>
                      <span className="text-2xs font-semibold text-rose-600 dark:text-rose-400">{lore.tithiTag}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {lore.significance}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
