import React from 'react';
import Link from 'next/link';
import { Globe, ArrowRight } from 'lucide-react';

interface BilingualSwitchBannerProps {
  mode: 'to-en' | 'to-ne';
  href: string;
  label?: string;
}

export default function BilingualSwitchBanner({
  mode,
  href,
  label,
}: BilingualSwitchBannerProps) {
  const isToEn = mode === 'to-en';

  return (
    <div
      translate="no"
      className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50 text-xs notranslate"
    >
      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold">
        <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
        <span>
          {label ||
            (isToEn
              ? 'Prefer English? Read & use the dedicated English edition of this tool.'
              : 'नेपाली भाषामा हेर्न चाहनुहुन्छ? पूर्ण नेपाली संस्करण उपलब्ध छ।')}
        </span>
      </div>
      <Link
        href={href}
        className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors shrink-0 shadow-2xs"
      >
        <span>{isToEn ? '🇬🇧 English Edition' : '🇳🇵 नेपाली संस्करण'}</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
