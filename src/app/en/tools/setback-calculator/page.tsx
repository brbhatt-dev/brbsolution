import React from 'react';
import type { Metadata } from 'next';
import EnglishPageShell from '@/components/en/EnglishPageShell';
import EnglishSetbackCalculator from '@/components/en/EnglishSetbackCalculator';
import { getBilingualAlternates } from '@/lib/i18nRoutes';

export const metadata: Metadata = {
  title: 'High Tension Line & Building Setback Rules in Nepal (11kV, 33kV, 132kV & Road ROW) | BR Bhatta',
  description:
    'Calculate minimum building setback distance, road Right-of-Way (ROW), ground coverage, and NEA High Tension electrical transmission line clearances (11kV, 33kV, 66kV, 132kV, 220kV, 400kV) in Nepal.',
  keywords: [
    'High Tension Line Setback in Nepal',
    'Setback Distance for Residential Building in Nepal',
    '132kV Transmission Line Setback Nepal',
    'Nepal Building Bye Laws 2083',
    'Road Right of Way Nepal',
    'Naksa Pas Rules Nepal',
  ],
  alternates: getBilingualAlternates('/tools/setback-calculator', '/en/tools/setback-calculator', 'en'),
  openGraph: {
    title: 'High Tension Line & Building Setback Calculator Nepal | BR Bhatta',
    description:
      'Official road ROW, neighbor window setback (5 ft / 1.5m), and NEA 11kV–400kV High Tension clearance guide for Nepal.',
    url: 'https://www.brbhatta.com/en/tools/setback-calculator',
    siteName: 'BR Bhatta',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EnglishSetbackCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Nepal Building Setback & High Tension Line Clearance Calculator',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    inLanguage: 'en',
    url: 'https://www.brbhatta.com/en/tools/setback-calculator',
    description:
      'Interactive road setback, neighbor clearance, ground coverage, and NEA high-tension electrical corridor calculator for Nepal.',
  };

  return (
    <EnglishPageShell
      breadcrumbLabel="Building & High Tension Setback"
      nePath="/tools/setback-calculator"
      enPath="/en/tools/setback-calculator"
      shareTitle="High Tension Line & Building Setback Rules in Nepal"
      jsonLd={jsonLd}
    >
      <header className="space-y-3">
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Building Setback &amp; High Tension Line Clearance Calculator in Nepal
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Check the mandatory road centerline distance (Right-of-Way + Front Setback), 1.5 m (5 ft) neighbor window setback, maximum ground coverage, and NEA High Tension line clearances (11kV to 400kV) before applying for municipal Naksa Pas.
        </p>
      </header>

      <EnglishSetbackCalculator />
    </EnglishPageShell>
  );
}
