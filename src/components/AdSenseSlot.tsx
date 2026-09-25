'use client';

import React from 'react';

interface AdSenseSlotProps {
  slotId?: string;
  format?: 'auto' | 'horizontal' | 'rectangle';
  className?: string;
  userFacingLabel?: string;
}

export default function AdSenseSlot({
  slotId = '0000000000',
  format = 'auto',
  className = '',
  userFacingLabel = 'विज्ञापन (Advertisement Space)',
}: AdSenseSlotProps) {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  if (adsenseClientId) {
    return (
      <div className={`my-6 text-center overflow-hidden ${className}`}>
        <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">
          {userFacingLabel}
        </span>
        <ins
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

  // Elegant AdSense placeholder ready for live ads
  return (
    <div
      className={`my-6 p-4 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 text-center transition-colors ${className}`}
    >
      <div className="flex flex-col items-center justify-center py-2 space-y-1">
        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          {userFacingLabel}
        </span>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Google AdSense Verified Placement Zone • www.brbhatta.com
        </p>
      </div>
    </div>
  );
}
