import React from 'react';
import type { Metadata } from 'next';
import EnglishPageShell from '@/components/en/EnglishPageShell';
import EnglishPatroHub from '@/components/en/EnglishPatroHub';
import { getBilingualAlternates } from '@/lib/i18nRoutes';

export const metadata: Metadata = {
  title: 'BR Patro 2083/2084 — Nepali Calendar & BS to AD Date Converter | BR Bhatta',
  description:
    'Convert Bikram Sambat (BS) to English (AD) dates accurately for 2081–2084 BS, check today’s Nepali date, and download the lightweight BR Patro Android APK.',
  keywords: [
    'Nepali Date Converter BS to AD',
    'AD to BS Date Converter Nepal',
    'Nepali Calendar 2083 English',
    'BR Patro APK Download',
    'Today Nepali Date in English',
    'Bikram Sambat Converter Online',
  ],
  alternates: getBilingualAlternates('/patro', '/en/patro', 'en'),
  openGraph: {
    title: 'BR Patro — Nepali Calendar & BS ⇄ AD Date Converter | BR Bhatta',
    description:
      'Accurate BS to AD and AD to BS Nepali date converter plus direct access to full Tithi, Panchanga, and BR Patro Android app.',
    url: 'https://www.brbhatta.com/en/patro',
    siteName: 'BR Bhatta',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'BR Patro — Nepali Calendar & BS to AD Date Converter' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BR Patro — Nepali Calendar & BS ⇄ AD Date Converter | BR Bhatta',
    description: 'Convert Bikram Sambat (BS) to English (AD) dates accurately for 2081–2084 BS and check today’s Nepali date.',
    images: ['/og-image.png'],
  },
};

export default function EnglishPatroPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'BR Patro BS to AD & AD to BS Date Converter',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        inLanguage: 'en',
        url: 'https://www.brbhatta.com/en/patro',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How accurate is the Bikram Sambat (BS) to AD date converter?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The converter uses BR Patro’s exact official calendar day-length tables for 2081–2084 BS (Surya Siddhanta aligned calendar), ensuring exact day-level precision between Bikram Sambat and Gregorian AD dates.',
            },
          },
          {
            '@type': 'Question',
            name: 'Where can I view today’s full Panchanga, Tithi, and Muhurat?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Click "Open Full Nepali Calendar" to access the complete monthly Nepali Patro grid with daily Tithi, Nakshatra, Rahukal, Sunrise/Sunset across all 753 municipalities, and auspicious wedding/Bratabandha dates.',
            },
          },
        ],
      },
    ],
  };

  return (
    <EnglishPageShell
      breadcrumbLabel="Nepali Date Converter & BR Patro"
      nePath="/patro"
      enPath="/en/patro"
      shareTitle="BR Patro — Nepali Calendar & BS to AD Date Converter"
      jsonLd={jsonLd}
    >
      <header className="space-y-3">
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Nepali Date Converter (BS &harr; AD) &amp; BR Patro Calendar 2083/2084
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Convert Bikram Sambat (BS) dates to Gregorian (AD) or vice versa with official calendar precision, and explore daily Nepali Panchanga and the offline BR Patro Android app.
        </p>
      </header>

      <EnglishPatroHub />

      <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
          About the Bikram Sambat (BS) Calendar System
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Bikram Sambat (BS) is Nepal&apos;s official solar-lunar calendar and runs approximately 56.7 years ahead of the Gregorian (AD) calendar. Each BS year consists of 12 months (Baisakh through Chaitra) whose exact lengths range from 29 to 32 days according to astronomical solar transits (Sankranti). Because month lengths vary annually, reliable software tables are essential for exact BS &harr; AD date conversion in legal deeds, bank vouchers, and birth/citizenship records.
        </p>
      </section>
    </EnglishPageShell>
  );
}
