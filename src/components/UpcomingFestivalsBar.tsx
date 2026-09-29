'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, ChevronRight, Flame } from 'lucide-react';
import {
  NepaliHolidayItem,
  getUpcomingHolidays,
  formatDaysRemaining
} from '@/lib/nepaliHolidays';
import UpcomingHolidaysModal from './UpcomingHolidaysModal';

interface UpcomingFestivalsBarProps {
  variant?: 'inline' | 'standalone' | 'compact';
}

export default function UpcomingFestivalsBar({ variant = 'inline' }: UpcomingFestivalsBarProps) {
  const [upcomingEvents, setUpcomingEvents] = useState<NepaliHolidayItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState<number>(2083);

  useEffect(() => {
    const updateEvents = () => {
      const now = new Date();
      const events = getUpcomingHolidays(now, 5);
      setUpcomingEvents(events);
      if (events.length > 0) {
        setCurrentYear(events[0].bsYear);
      }
    };
    updateEvents();
  }, []);

  if (upcomingEvents.length === 0) return null;

  // COMPACT TICKER (Used inside compact TithiWidget sidebar)
  if (variant === 'compact') {
    const nextEvent = upcomingEvents[0];
    return (
      <>
        <div className="pt-2 border-t border-emerald-500/20">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full flex items-center justify-between gap-2 p-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left group"
          >
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-sm shrink-0">{nextEvent.icon}</span>
              <div className="truncate">
                <span className="text-[11px] font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {nextEvent.nameNepali}
                </span>
                <span className="text-[10px] text-slate-400 ml-1.5 font-mono">
                  ({nextEvent.formattedBsDate})
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {formatDaysRemaining(nextEvent.daysRemaining ?? 0)}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
            </div>
          </button>
        </div>

        <UpcomingHolidaysModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          currentBsYear={currentYear}
        />
      </>
    );
  }

  // INLINE (Within panoramic TithiWidget bar) or STANDALONE
  return (
    <>
      <div className={`w-full ${variant === 'standalone' ? 'bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-3 shadow-md' : 'pt-3.5 border-t border-white/10 mt-3.5'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          
          {/* Label / Title */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="p-1 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
              <Flame className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs font-bold text-slate-200 tracking-wide flex items-center gap-1.5">
              <span>आगामी चाडपर्व र बिदा:</span>
            </span>
          </div>

          {/* Horizontally scrollable festival cards */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar flex-1 sm:justify-start">
            {upcomingEvents.slice(0, 4).map((event, idx) => {
              const isToday = event.daysRemaining === 0;
              const isFirst = idx === 0;

              return (
                <button
                  key={event.id}
                  onClick={() => setIsModalOpen(true)}
                  className={`inline-flex items-center gap-2 py-1 px-2.5 sm:px-3 rounded-xl border text-xs transition-all shrink-0 text-left group hover:scale-[1.02] active:scale-[0.98] ${
                    isToday
                      ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-xs'
                      : isFirst
                      ? 'bg-white/10 border-white/20 text-white hover:bg-white/15'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-sm shrink-0">{event.icon}</span>
                  
                  <div className="flex flex-col leading-tight">
                    <span className="font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {event.nameNepali}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {event.formattedBsDate}
                    </span>
                  </div>

                  <span
                    className={`ml-1 text-[10px] font-bold px-1.5 py-0.5 rounded-md shrink-0 border ${
                      isToday
                        ? 'bg-emerald-500 text-slate-950 font-black border-emerald-400'
                        : event.isPublicHoliday
                        ? 'bg-rose-500/25 text-rose-300 border-rose-500/30'
                        : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                    }`}
                  >
                    {formatDaysRemaining(event.daysRemaining ?? 0)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* "View All" button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="self-end sm:self-auto shrink-0 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all"
          >
            <Calendar className="w-3 h-3" />
            <span>सबै हेर्नुहोस्</span>
            <ChevronRight className="w-3 h-3" />
          </button>

        </div>
      </div>

      {/* Full Modal */}
      <UpcomingHolidaysModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentBsYear={currentYear}
      />
    </>
  );
}
