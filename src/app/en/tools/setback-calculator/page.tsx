import React from 'react';
import type { Metadata } from 'next';
import EnglishPageShell from '@/components/en/EnglishPageShell';
import EnglishSetbackCalculator from '@/components/en/EnglishSetbackCalculator';
import { getBilingualAlternates } from '@/lib/i18nRoutes';

export const metadata: Metadata = {
  title: 'High Tension Line Setback in Nepal (11kV, 33kV, 132kV ROW) & Building Setback Calculator',
  description:
    'Official NEA High Tension Line setback rules in Nepal (400V, 11kV, 33kV, 66kV, 132kV, 220kV, 400kV Right-of-Way corridor) & municipal road ROW, 1.5m (5 ft) neighbor window setback & ground coverage calculator.',
  keywords: [
    'High Tension Line Setback in Nepal',
    'NEA High Tension Line Right of Way Nepal',
    '11kV 33kV 132kV Transmission Line Setback Nepal',
    'Setback Distance for Residential Building in Nepal',
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
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Nepal Building Setback & High Tension Line Clearance Calculator',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        inLanguage: 'en',
        url: 'https://www.brbhatta.com/en/tools/setback-calculator',
        description:
          'Interactive road setback, neighbor clearance, ground coverage, and NEA high-tension electrical corridor calculator for Nepal.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the High Tension Line setback distance (Right of Way) in Nepal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'According to Nepal Electricity Authority (NEA) Electricity Rules, permanent house construction is strictly prohibited inside the High Tension Right-of-Way (ROW) corridor from the line centerline: 11kV/33kV lines require 1.5m–2.0m horizontal clearance from the outer conductor (3m–6m total corridor), 66kV requires 9m on each side (18m corridor), 132kV requires 9m on each side (18m total corridor), 220kV requires 15m on each side (30m corridor), and 400kV requires 23m on each side (46m total corridor).',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the minimum neighbor boundary setback for windows in Nepal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under Nepal Settlement Development, Urban Planning & Building Construction Basic Bylaws, a minimum setback of 1.5 meters (approx. 5 feet) from the neighbor boundary is mandatory if you place windows, doors, or ventilation facing the neighbor.',
            },
          },
        ],
      },
    ],
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
          High Tension Line Setback in Nepal &amp; Building ROW Calculator
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Check mandatory NEA High Tension line clearances (11kV, 33kV, 66kV, 132kV, 220kV, 400kV Right-of-Way), road centerline distance (ROW + Front Setback), and 1.5 m (5 ft) neighbor window setback before applying for municipal Naksa Pas.
        </p>
      </header>

      <EnglishSetbackCalculator />

      <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
          NEA High Tension Line Setback &amp; Right-of-Way (ROW) Table in Nepal
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-900 dark:text-white">
              <tr>
                <th className="px-4 py-3">Voltage Level</th>
                <th className="px-4 py-3">Setback from Centerline (Each Side)</th>
                <th className="px-4 py-3">Total ROW Corridor Width</th>
                <th className="px-4 py-3">Building &amp; Bank Loan Eligibility</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              <tr><td className="px-4 py-3 font-bold">230V / 400V (Low Voltage)</td><td className="px-4 py-3 font-mono">1.25 m (4.1 ft) horizontal</td><td className="px-4 py-3 font-mono">2.5 m</td><td className="px-4 py-3">Safe outside 1.25m clearance from wire</td></tr>
              <tr><td className="px-4 py-3 font-bold">11 kV (Distribution Line)</td><td className="px-4 py-3 font-mono">1.5 m – 2.0 m (~5–6.5 ft)</td><td className="px-4 py-3 font-mono">3 m – 4 m</td><td className="px-4 py-3">No balcony/window within 1.5m–2m</td></tr>
              <tr><td className="px-4 py-3 font-bold">33 kV (Sub-Transmission)</td><td className="px-4 py-3 font-mono">3.0 m (9.84 ft) each side</td><td className="px-4 py-3 font-mono">6 m (~20 ft)</td><td className="px-4 py-3">No building inside 3m from centerline</td></tr>
              <tr><td className="px-4 py-3 font-bold">66 kV (High Tension)</td><td className="px-4 py-3 font-mono">9.0 m (29.5 ft) each side</td><td className="px-4 py-3 font-mono">18 m (~59 ft)</td><td className="px-4 py-3">No house construction / bank collateral inside ROW</td></tr>
              <tr><td className="px-4 py-3 font-bold">132 kV (High Tension Grid)</td><td className="px-4 py-3 font-mono">9.0 m (29.5 ft) each side</td><td className="px-4 py-3 font-mono">18 m (~59 ft)</td><td className="px-4 py-3">Strict No-Build Zone; 10%–20% ROW compensation only</td></tr>
              <tr><td className="px-4 py-3 font-bold">220 kV (Extra High Voltage)</td><td className="px-4 py-3 font-mono">15.0 m (49.2 ft) each side</td><td className="px-4 py-3 font-mono">30 m (~98 ft)</td><td className="px-4 py-3">Strict No-Build &amp; No Tall Tree Zone</td></tr>
              <tr><td className="px-4 py-3 font-bold">400 kV (National Trunk Grid)</td><td className="px-4 py-3 font-mono">23.0 m (75.5 ft) each side</td><td className="px-4 py-3 font-mono">46 m (~151 ft)</td><td className="px-4 py-3">Strict No-Build Zone across 46m corridor</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </EnglishPageShell>
  );
}
