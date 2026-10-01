'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, X } from 'lucide-react';
import { TickerItem, defaultTickerItems } from './tickerData';

interface TickerProps {
  items?: TickerItem[];
  onDismiss?: () => void;
  showDismiss?: boolean;
}

export default function TickerStyleCapsule({
  items = defaultTickerItems,
  onDismiss,
  showDismiss = true
}: TickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || items.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  if (isDismissed || items.length === 0) return null;

  const current = items[currentIndex];

  return (
    <div 
      className="bg-white/95 dark:bg-slate-950/95 border-b border-slate-200/90 dark:border-slate-800/90 py-1.5 px-3 sm:px-4 transition-colors"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Centered Modern Pill Container */}
        <div className="flex-1 flex items-center justify-center min-w-0">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1 rounded-full bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 max-w-full shadow-2xs group hover:border-emerald-500/50 transition-colors">
            
            {/* Sparkle or Live Beacon */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>

            {/* Category Tag */}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400 shrink-0 text-[11px] sm:text-xs">
              [{current.badgeLabel}]
            </span>

            {/* Truncated Title */}
            <span className="truncate font-normal text-slate-700 dark:text-slate-300">
              {current.title}
            </span>

            {/* Action CTA Button */}
            <Link
              href={current.href}
              className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full shrink-0 shadow-xs transition-colors ml-1"
            >
              <span>हेर्नुहोस्</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Right Dismiss */}
        {showDismiss && (
          <button
            onClick={() => {
              setIsDismissed(true);
              onDismiss?.();
            }}
            aria-label="Dismiss banner"
            className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}

      </div>
    </div>
  );
}
