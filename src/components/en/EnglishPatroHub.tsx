'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar as CalendarIcon, ArrowRightLeft, Download, Sparkles } from 'lucide-react';
import { bs2adExact, ad2bsExact, getBsMonthLengths } from '@/lib/brPatroEngine';

const BS_MONTHS_EN = [
  'Baisakh', 'Jestha', 'Ashadh', 'Shrawan', 'Bhadra', 'Ashwin',
  'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra',
];

const WEEKDAYS_EN = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
];

export default function EnglishPatroHub() {
  const [todayBs, setTodayBs] = useState<{ year: number; month: number; day: number; weekday: string } | null>(null);
  const [bsYear, setBsYear] = useState(2083);
  const [bsMonth, setBsMonth] = useState(8);
  const [bsDay, setBsDay] = useState(1);
  const [adInput, setAdInput] = useState('2026-11-15');

  useEffect(() => {
    const now = new Date();
    const bs = ad2bsExact(now);
    setTodayBs({ ...bs, weekday: WEEKDAYS_EN[now.getDay()] });
    setBsYear(bs.year);
    setBsMonth(bs.month);
    setBsDay(bs.day);
    setAdInput(now.toISOString().split('T')[0]);
  }, []);

  const maxDaysInMonth = getBsMonthLengths(bsYear)[bsMonth - 1] || 30;
  const safeBsDay = Math.min(bsDay, maxDaysInMonth);
  const convertedAd = bs2adExact(bsYear, bsMonth, safeBsDay);

  const parsedAd = new Date(`${adInput}T00:00:00`);
  const isValidAd = !isNaN(parsedAd.getTime()) && parsedAd.getFullYear() >= 2024 && parsedAd.getFullYear() <= 2028;
  const convertedBs = isValidAd ? ad2bsExact(parsedAd) : null;

  return (
    <div className="space-y-6">
      {/* Live Today Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-red-700 via-rose-700 to-amber-700 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span>BR Patro 2083/2084 • Nepali Calendar &amp; Date Converter</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            {todayBs
              ? `${BS_MONTHS_EN[todayBs.month - 1]} ${todayBs.day}, ${todayBs.year} BS (${todayBs.weekday})`
              : 'Nepali Patro 2083 / 2084 BS'}
          </h2>
          <p className="text-xs sm:text-sm text-rose-100">
            Convert Bikram Sambat (BS) to Gregorian (AD) dates accurately for 2081–2084 BS, or open the full interactive calendar for Tithi, Panchanga &amp; Muhurat.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 shrink-0">
          <Link
            href="/patro"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-rose-800 text-xs sm:text-sm font-black shadow-sm hover:bg-rose-50 transition-colors"
          >
            <CalendarIcon className="w-4 h-4" />
            <span>Open Full Nepali Calendar</span>
          </Link>
          <a
            href="https://github.com/imtechboss/imtechboss/releases/download/v7.9.90/BR_Patro_v7.9.90.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white text-xs sm:text-sm font-bold border border-white/20 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>BR Patro Android APK</span>
          </a>
        </div>
      </div>

      {/* Dual Date Converters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* BS -> AD */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="w-4 h-4 text-emerald-600" />
            <h3 className="text-base font-black text-slate-900 dark:text-white">
              BS to AD Converter (Bikram Sambat &rarr; English)
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <label className="space-y-1">
              <span className="text-[11px] font-bold text-slate-500 block">BS Year</span>
              <select
                value={bsYear}
                onChange={(e) => setBsYear(parseInt(e.target.value, 10))}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-bold"
              >
                {[2081, 2082, 2083, 2084].map((y) => (
                  <option key={y} value={y}>
                    {y} BS
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-1">
              <span className="text-[11px] font-bold text-slate-500 block">BS Month</span>
              <select
                value={bsMonth}
                onChange={(e) => setBsMonth(parseInt(e.target.value, 10))}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-bold"
              >
                {BS_MONTHS_EN.map((m, idx) => (
                  <option key={m} value={idx + 1}>
                    {idx + 1}. {m}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-1">
              <span className="text-[11px] font-bold text-slate-500 block">BS Day</span>
              <select
                value={safeBsDay}
                onChange={(e) => setBsDay(parseInt(e.target.value, 10))}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-bold"
              >
                {Array.from({ length: maxDaysInMonth }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Equivalent English (AD) Date</span>
            <p className="text-lg font-black text-emerald-700 dark:text-emerald-400 font-mono mt-0.5">
              {convertedAd.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>

        {/* AD -> BS */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="w-4 h-4 text-sky-600" />
            <h3 className="text-base font-black text-slate-900 dark:text-white">
              AD to BS Converter (English &rarr; Nepali Date)
            </h3>
          </div>

          <label className="space-y-1 block">
            <span className="text-[11px] font-bold text-slate-500 block">
              Select Gregorian (AD) Date (2024 – 2028)
            </span>
            <input
              type="date"
              min="2024-04-13"
              max="2028-04-12"
              value={adInput}
              onChange={(e) => setAdInput(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-bold font-mono"
            />
          </label>

          <div className="p-4 rounded-2xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Equivalent Nepali (BS) Date</span>
            <p className="text-lg font-black text-sky-700 dark:text-sky-400 font-mono mt-0.5">
              {convertedBs
                ? `${BS_MONTHS_EN[convertedBs.month - 1]} ${convertedBs.day}, ${convertedBs.year} BS (${WEEKDAYS_EN[parsedAd.getDay()]})`
                : 'Select a date between Apr 2024 and Apr 2028'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
