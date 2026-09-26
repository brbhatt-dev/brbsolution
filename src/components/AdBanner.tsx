'use client';

import React, { useEffect, useRef } from 'react';

interface AdBannerProps {
  slotId?: string;
  format?: 'auto' | 'horizontal' | 'rectangle' | 'vertical';
  responsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdBanner({
  slotId = '0000000000',
  format = 'auto',
  responsive = true,
  className = '',
}: AdBannerProps) {
  const adRef = useRef<HTMLModElement | null>(null);
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (!adsenseClientId) return;

    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.warn('Google AdSense render error:', err);
    }
  }, [adsenseClientId, slotId]);

  // If AdSense client ID is not configured, hide gracefully without layout disruption
  if (!adsenseClientId) {
    return null;
  }

  return (
    <div className={`my-6 text-center overflow-hidden notranslate ${className}`} translate="no">
      <div className="inline-block text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5">
        विज्ञापन • Advertisement
      </div>
      <div className="w-full flex justify-center bg-slate-50/50 dark:bg-slate-900/40 rounded-xl p-2 border border-slate-100 dark:border-slate-800/60 min-h-[90px]">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client={adsenseClientId}
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        ></ins>
      </div>
    </div>
  );
}
