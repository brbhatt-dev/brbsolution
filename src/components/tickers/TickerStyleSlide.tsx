'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, X, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { TickerItem, defaultTickerItems } from './tickerData';

interface TickerProps {
  items?: TickerItem[];
  onDismiss?: () => void;
  showDismiss?: boolean;
}

export default function TickerStyleSlide({
  items = defaultTickerItems,
  onDismiss,
  showDismiss = true
}: TickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isPaused || items.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  if (isDismissed || items.length === 0) return null;

  const current = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div 
      className="bg-slate-900 dark:bg-[#070b14] text-slate-100 border-b border-slate-800 text-xs sm:text-sm font-medium transition-colors select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-9 sm:h-10 flex items-center justify-between gap-2">
        
        {/* Left: Category Badge & Update Headline */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          {/* Category Pill */}
          <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold border shrink-0 ${current.badgeColor}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse shrink-0" />
            {current.badgeLabel}
          </span>

          {/* Headline link with smooth transition */}
          <Link
            href={current.href}
            className="flex items-center gap-1.5 text-slate-200 hover:text-emerald-400 transition-colors truncate group min-w-0"
          >
            <span className="truncate">{current.title}</span>
            <span className="hidden md:inline-flex items-center text-emerald-400 font-semibold group-hover:translate-x-0.5 transition-transform text-[11px] shrink-0">
              हेर्नुहोस् <ArrowRight className="w-3 h-3 ml-0.5" />
            </span>
          </Link>
        </div>

        {/* Right: Controls & Counter */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0 text-slate-400">
          {/* Index Counter */}
          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
            {currentIndex + 1}/{items.length}
          </span>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-0.5">
            <button
              onClick={handlePrev}
              aria-label="Previous update"
              className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next update"
              className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Close / Dismiss */}
          {showDismiss && (
            <button
              onClick={() => {
                setIsDismissed(true);
                onDismiss?.();
              }}
              aria-label="Close announcement bar"
              className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-rose-400 transition-colors ml-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
