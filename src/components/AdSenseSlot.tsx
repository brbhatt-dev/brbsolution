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
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    if (!adsenseClientId) return;

    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.warn('AdSense render warning:', err);
    }
  }, [adsenseClientId, slotId]);

  // Before approval or when client ID is not configured, hide completely to prevent "Under construction / Empty ad placement" flags from Google reviewers
  if (!adsenseClientId) {
    return null;
  }

  return (
    <div className={`my-6 text-center overflow-hidden notranslate ${className}`} translate="no">
      <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">
        {userFacingLabel}
      </span>
      <ins
        ref={adRef}
        className="adsbygoogle block"
        style={{ display: 'block' }}
        data-ad-client={adsenseClientId}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
