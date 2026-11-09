'use client';

import React, { useEffect, useRef } from 'react';

interface AdSenseSlotProps {
  slotId?: string;
  format?: 'auto' | 'horizontal' | 'rectangle';
  className?: string;
  userFacingLabel?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdSenseSlot({
  slotId = '0000000000',
  format = 'auto',
  className = '',
  userFacingLabel = 'विज्ञापन (Advertisement)',
}: AdSenseSlotProps) {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-9731623018158379';
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    if (!adsenseClientId || slotId === '0000000000') return;

    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.warn('AdSense render warning:', err);
    }
  }, [adsenseClientId, slotId]);

  // Before manual ad unit slot IDs are configured, rely on Google Auto Ads from <head> and avoid rendering placeholder 0000000000 slots
  if (!adsenseClientId || slotId === '0000000000') {
    return null;
  }

  return (
    <div className={`my-6 text-center overflow-hidden min-h-[120px] sm:min-h-[260px] flex flex-col justify-center items-center notranslate ${className}`} translate="no">
      <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">
        {userFacingLabel}
      </span>
      <ins
        ref={adRef}
        className="adsbygoogle block w-full"
        style={{ display: 'block' }}
        data-ad-client={adsenseClientId}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
