'use client';

import React, { useState, useMemo } from 'react';
import { X, Search, Calendar, Sparkles, Filter, ChevronRight, CheckCircle2 } from 'lucide-react';
import {
  NepaliHolidayItem,
  getAllHolidaysForYear,
  formatDaysRemaining,
  HolidayCategory
} from '@/lib/nepaliHolidays';
import { toNepaliDigits } from '@/lib/nepaliDate';

interface UpcomingHolidaysModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentBsYear?: number;
}

export default function UpcomingHolidaysModal({
  isOpen,
  onClose,
  currentBsYear = 2083
}: UpcomingHolidaysModalProps) {
  const [selectedYear, setSelectedYear] = useState<number>(currentBsYear);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const holidays = useMemo(() => {
    return getAllHolidaysForYear(selectedYear);
  }, [selectedYear]);

  const filteredHolidays = useMemo(() => {
    return holidays.filter((item) => {
      // Category match
      if (activeCategory === 'public_holiday' && !item.isPublicHoliday) return false;
      if (activeCategory === 'festival' && item.category !== 'festival') return false;
      if (activeCategory === 'national_day' && item.category !== 'national_day') return false;

      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = item.nameNepali.toLowerCase().includes(q);
        const matchEn = item.nameEn.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchDate = (item.formattedBsDate || '').toLowerCase().includes(q);
        return matchName || matchEn || matchDesc || matchDate;
      }
      return true;
    });
  }, [holidays, activeCategory, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-emerald-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-gradient-to-r from-emerald-950/80 via-slate-900 to-teal-950/80 shrink-0 relative z-10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    नेपाली क्यालेन्डर
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                    वि.सं. {toNepaliDigits(selectedYear)}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  आगामी चाडपर्व तथा सार्वजनिक बिदा तालिका
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
              aria-label="बन्द गर्नुहोस्"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Year Switcher & Search Bar */}
          <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="चाडपर्व वा बिदा खोज्नुहोस् (उदा: दशैं, तिहार, छठ, बिदा)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-800/80 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-hidden focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  मेटाउनुहोस्
                </button>
              )}
            </div>

            {/* Year Selector */}
            <div className="flex items-center gap-1.5 self-center sm:self-auto bg-slate-800/80 p-1 rounded-xl border border-slate-700/80">
              {[2081, 2082, 2083].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedYear === yr
                      ? 'bg-emerald-500 text-slate-950 shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {toNepaliDigits(yr)}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1 no-scrollbar text-xs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1 rounded-full font-medium shrink-0 transition-all ${
                activeCategory === 'all'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-700/50'
              }`}
            >
              सबै ({holidays.length})
            </button>
            <button
              onClick={() => setActiveCategory('public_holiday')}
              className={`px-3 py-1 rounded-full font-medium shrink-0 transition-all ${
                activeCategory === 'public_holiday'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-700/50'
              }`}
            >
              🔴 सार्वजनिक बिदा ({holidays.filter((h) => h.isPublicHoliday).length})
            </button>
            <button
              onClick={() => setActiveCategory('festival')}
              className={`px-3 py-1 rounded-full font-medium shrink-0 transition-all ${
                activeCategory === 'festival'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-700/50'
              }`}
            >
              🌾 मुख्य चाडपर्व ({holidays.filter((h) => h.category === 'festival').length})
            </button>
            <button
              onClick={() => setActiveCategory('national_day')}
              className={`px-3 py-1 rounded-full font-medium shrink-0 transition-all ${
                activeCategory === 'national_day'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                  : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-700/50'
              }`}
            >
              🇳🇵 राष्ट्रिय दिवस ({holidays.filter((h) => h.category === 'national_day').length})
            </button>
          </div>
        </div>

        {/* Modal Body: Scrollable Holiday List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3 relative z-10 flex-1 divide-y divide-slate-800/60">
          {filteredHolidays.length === 0 ? (
            <div className="text-center py-12 space-y-2">
              <Calendar className="w-10 h-10 text-slate-600 mx-auto" />
              <p className="text-slate-300 font-medium">कुनै चाडपर्व वा बिदा भेटिएन।</p>
              <p className="text-xs text-slate-500">कृपया फरक शब्द प्रयोग गरेर खोज्नुहोस्।</p>
            </div>
          ) : (
            filteredHolidays.map((item) => {
              const isPast = (item.daysRemaining ?? -1) < 0;
              const isToday = item.daysRemaining === 0;
              const isTomorrow = item.daysRemaining === 1;

              return (
                <div
                  key={item.id}
                  className={`pt-3 first:pt-0 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group transition-colors rounded-xl px-2.5 hover:bg-white/[0.02] ${
                    isToday ? 'bg-emerald-500/10 border border-emerald-500/30' : ''
                  }`}
                >
                  {/* Left: Date Block & Info */}
                  <div className="flex items-start sm:items-center gap-3.5">
                    {/* Date Badge */}
                    <div className={`w-14 h-14 rounded-2xl border flex flex-col items-center justify-center shrink-0 shadow-inner ${
                      isToday
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                        : isPast
                        ? 'bg-slate-800/40 border-slate-800 text-slate-500'
                        : 'bg-slate-800/80 border-slate-700/70 text-slate-200'
                    }`}>
                      <span className="text-lg font-black font-mono leading-none">
                        {item.bsDay < 10 ? `०${toNepaliDigits(item.bsDay)}` : toNepaliDigits(item.bsDay)}
                      </span>
                      <span className="text-[10px] font-medium opacity-80 mt-0.5">
                        {item.formattedBsDate?.split(' ')[0]}
                      </span>
                    </div>

                    {/* Festival Details */}
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-lg shrink-0">{item.icon}</span>
                        <h4 className={`font-bold tracking-tight text-sm sm:text-base ${
                          isPast ? 'text-slate-400 line-through' : 'text-white'
                        }`}>
                          {item.nameNepali}
                        </h4>
                        {item.isPublicHoliday && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30 shrink-0">
                            सार्वजनिक बिदा
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-1 flex-wrap">
                        <span>{item.dayOfWeek}</span>
                        <span>•</span>
                        <span>ईस्वी संवत् (AD): {item.adDateString}</span>
                      </div>

                      {item.description && (
                        <p className="text-[11px] text-slate-400 mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right: Countdown Badge */}
                  <div className="self-end sm:self-center shrink-0">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                        isToday
                          ? 'bg-emerald-500 text-slate-950 border-emerald-400 animate-pulse'
                          : isTomorrow
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : isPast
                          ? 'bg-slate-800/50 text-slate-500 border-slate-800'
                          : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                      }`}
                    >
                      <Sparkles className="w-3 h-3 shrink-0" />
                      <span>{formatDaysRemaining(item.daysRemaining ?? -1)}</span>
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>नेपाल सरकारको आधिकारिक बिदा क्यालेन्डर अनुसार</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            बन्द गर्नुहोस्
          </button>
        </div>
      </div>
    </div>
  );
}
