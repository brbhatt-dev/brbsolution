import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialShareBar from '@/components/SocialShareBar';
import BilingualSwitchBanner from '@/components/BilingualSwitchBanner';
import { ArrowLeft } from 'lucide-react';
import { BILINGUAL_ROUTE_PAIRS } from '@/lib/i18nRoutes';

interface EnglishPageShellProps {
  breadcrumbLabel: string;
  nePath: string;
  enPath: string;
  shareTitle: string;
  jsonLd?: Record<string, any>;
  maxWidthClass?: string;
  children: React.ReactNode;
}

export default function EnglishPageShell({
  breadcrumbLabel,
  nePath,
  enPath,
  shareTitle,
  jsonLd,
  maxWidthClass = 'max-w-5xl',
  children,
}: EnglishPageShellProps) {
  const otherEnglishTools = BILINGUAL_ROUTE_PAIRS.filter(
    (p) => p.en !== '/en' && p.en !== enPath
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Navbar />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <main className={`flex-grow ${maxWidthClass} mx-auto w-full px-4 sm:px-6 py-6 sm:py-10 space-y-8`}>
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Link href="/en" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>English Tools Hub</span>
            </Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200">{breadcrumbLabel}</span>
          </div>
          <Link href={nePath} className="text-emerald-700 dark:text-emerald-400 hover:underline font-bold">
            🇳🇵 नेपालीमा हेर्नुहोस्
          </Link>
        </div>

        <BilingualSwitchBanner mode="to-ne" href={nePath} />

        {children}

        <SocialShareBar title={shareTitle} url={enPath} />

        {/* Cross-linking grid for English pages */}
        <section className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
            More English Land &amp; Utility Tools for Nepal
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
            {otherEnglishTools.map((item) => (
              <Link
                key={item.en}
                href={item.en}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-slate-200/80 dark:border-slate-700/70 transition-colors"
              >
                <p className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                  {item.labelEn}
                </p>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-0.5">
                  {item.labelNe}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
