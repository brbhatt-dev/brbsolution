import React from 'react';
import type { Metadata } from 'next';
import EnglishPageShell from '@/components/en/EnglishPageShell';
import EnglishLandConverter from '@/components/en/EnglishLandConverter';
import { getBilingualAlternates } from '@/lib/i18nRoutes';

export const metadata: Metadata = {
  title: 'Nepal Land Area Converter (Ropani to Aana, Bigha to Kattha, Sq.Ft & Sq.M) | BR Bhatta',
  description:
    'Convert Ropani-Aana-Paisa-Daam to Bigha-Kattha-Dhur, Square Feet, Square Meters, Acres, and Hectares instantly using official Nepal Survey Department standards (1 Ropani = 5476 sq ft, 1 Bigha = 72900 sq ft).',
  keywords: [
    'Nepal Land Unit Converter',
    'Ropani to Aana to Sq Ft',
    'Bigha to Kattha Dhur Calculator',
    '1 Ropani in Sq Feet',
    '1 Aana in Sq Feet',
    '1 Kattha in Sq Feet',
    'Land Measurement Units Nepal',
  ],
  alternates: getBilingualAlternates('/tools/land-calculator', '/en/tools/land-calculator', 'en'),
  openGraph: {
    title: 'Nepal Land Area Converter — Ropani, Aana, Bigha, Kattha & Sq.Ft | BR Bhatta',
    description:
      'Precision bidirectional Nepal land measurement converter with per-Aana valuation calculator and reference chart.',
    url: 'https://www.brbhatta.com/en/tools/land-calculator',
    siteName: 'BR Bhatta',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EnglishLandCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Nepal Land Area & Unit Converter (Ropani to Bigha & Sq.Ft)',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    inLanguage: 'en',
    url: 'https://www.brbhatta.com/en/tools/land-calculator',
    description:
      'Convert Nepal hilly (Ropani-Aana-Paisa-Daam) and Terai (Bigha-Kattha-Dhur) land units to Square Feet, Square Meters, Acres, and Hectares.',
  };

  return (
    <EnglishPageShell
      breadcrumbLabel="Nepal Land Unit Converter"
      nePath="/tools/land-calculator"
      enPath="/en/tools/land-calculator"
      shareTitle="Nepal Land Area Converter (Ropani, Aana, Bigha, Kattha & Sq.Ft)"
      jsonLd={jsonLd}
    >
      <header className="space-y-3">
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Nepal Land Unit Converter — Ropani, Aana, Bigha, Kattha &amp; Square Feet
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Convert hilly (Ropani-Aana-Paisa-Daam) and Terai (Bigha-Kattha-Dhur) land parcels to Square Feet, Square Meters, Acres, and Hectares with Survey Department floating-point precision.
        </p>
      </header>

      <EnglishLandConverter />

      <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
          Official Nepal Land Measurement Reference Table
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-900 dark:text-white">
              <tr>
                <th className="px-4 py-3">Unit Name</th>
                <th className="px-4 py-3">Sub-Divisions</th>
                <th className="px-4 py-3">Square Feet</th>
                <th className="px-4 py-3">Square Meters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              <tr><td className="px-4 py-3 font-bold">1 Ropani</td><td className="px-4 py-3">16 Aana / 64 Paisa / 256 Daam</td><td className="px-4 py-3 font-mono">5,476 sq.ft</td><td className="px-4 py-3 font-mono">508.74 sq.m</td></tr>
              <tr><td className="px-4 py-3 font-bold">1 Aana</td><td className="px-4 py-3">4 Paisa / 16 Daam</td><td className="px-4 py-3 font-mono">342.25 sq.ft</td><td className="px-4 py-3 font-mono">31.80 sq.m</td></tr>
              <tr><td className="px-4 py-3 font-bold">1 Paisa</td><td className="px-4 py-3">4 Daam</td><td className="px-4 py-3 font-mono">85.56 sq.ft</td><td className="px-4 py-3 font-mono">7.95 sq.m</td></tr>
              <tr><td className="px-4 py-3 font-bold">1 Bigha</td><td className="px-4 py-3">20 Kattha / 400 Dhur</td><td className="px-4 py-3 font-mono">72,900 sq.ft</td><td className="px-4 py-3 font-mono">6,772.63 sq.m</td></tr>
              <tr><td className="px-4 py-3 font-bold">1 Kattha</td><td className="px-4 py-3">20 Dhur</td><td className="px-4 py-3 font-mono">3,645 sq.ft</td><td className="px-4 py-3 font-mono">338.63 sq.m</td></tr>
              <tr><td className="px-4 py-3 font-bold">1 Dhur</td><td className="px-4 py-3">4 Kanwa</td><td className="px-4 py-3 font-mono">182.25 sq.ft</td><td className="px-4 py-3 font-mono">16.93 sq.m</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </EnglishPageShell>
  );
}
