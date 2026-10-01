'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { TickerItem, defaultTickerItems } from './tickerData';

export default function TopTickerBanner() {
  const [items, setItems] = useState<TickerItem[]>(defaultTickerItems);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check session storage if user dismissed the banner
    try {
      if (sessionStorage.getItem('brbhatta_top_ticker_dismissed') === 'true') {
        setIsDismissed(true);
      }
    } catch {
      // Ignore storage errors in incognito/restricted modes
    }

    // Attempt to fetch latest live DOS notice in background to keep it genuinely 100% live
    async function syncLatestDosNotice() {
      try {
        const res = await fetch('/api/dos-notices');
        if (res.ok) {
          const data = await res.json();
          if (data && Array.isArray(data.notices) && data.notices.length > 0) {
            const latestNotice = data.notices[0];
            setItems((prev) =>
              prev.map((item) => {
                if (item.category === 'notice') {
                  return {
                    ...item,
                    title: `नापी विभाग: ${latestNotice.title}`,
                    href: '/notices',
                    date: latestNotice.nepaliDate || 'LIVE',
                  };
                }
                return item;
              })
            );
          }
        }
      } catch (err) {
        // Fallback to default items on network/edge timeout
      }
    }

    syncLatestDosNotice();
  }, []);

  if (isDismissed || items.length === 0) return null;

  const handleDismiss = () => {
    setIsDismissed(true);
    try {
      sessionStorage.setItem('brbhatta_top_ticker_dismissed', 'true');
    } catch {
      // Ignore storage errors
    }
  };

  // Duplicate items for seamless continuous infinite marquee
  const marqueeList = [...items, ...items];

  return (
    <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-slate-100 border-b border-rose-950/40 text-xs sm:text-sm font-medium overflow-hidden relative select-none">
      <div className="flex items-center h-8 sm:h-9">
        
        {/* Left Fixed Breaking Badge */}
        <div className="z-10 bg-gradient-to-r from-rose-600 to-rose-700 text-white font-bold px-3 sm:px-4 h-full flex items-center gap-1.5 shrink-0 shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <span className="tracking-wide uppercase text-[10px] sm:text-xs">ताजा अपडेट</span>
        </div>

        {/* Continuous Marquee Track */}
        <div className="flex-1 overflow-hidden relative group">
          <div className="animate-marquee items-center gap-8 pl-4">
            {marqueeList.map((item, idx) => (
              <Link
                key={`${item.id}-${idx}`}
                href={item.href}
                className="inline-flex items-center gap-2 text-slate-200 hover:text-emerald-400 transition-colors whitespace-nowrap py-1 group/item"
              >
                <span className={`inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-semibold border ${item.badgeColor}`}>
                  {item.badgeLabel}
                </span>
                <span className="group-hover/item:underline decoration-emerald-400 underline-offset-4 text-xs sm:text-[13px]">
                  {item.title}
                </span>
                <span className="text-slate-600 mx-2 text-xs">✦</span>
              </Link>
            ))}
          </div>

          {/* Subtle gradient fades on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
        </div>

        {/* Right Dismiss Button */}
        <div className="z-10 px-2 sm:px-3 bg-slate-950/80 backdrop-blur-xs h-full flex items-center shrink-0 border-l border-slate-800">
          <button
            onClick={handleDismiss}
            aria-label="Close live ticker"
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-rose-400 transition-colors"
            title="सूचना बार बन्द गर्नुहोस्"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
