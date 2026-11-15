import React from 'react';
import type { Metadata } from 'next';
import EnglishPageShell from '@/components/en/EnglishPageShell';
import EnglishMalpotValuationFinder from '@/components/en/EnglishMalpotValuationFinder';
import { getBilingualAlternates } from '@/lib/i18nRoutes';

export const metadata: Metadata = {
  title: 'Land Valuation in Nepal — District Malpot Minimum Rate Finder | BR Bhatta',
  description:
    'Search official government minimum Malpot land valuation rates (per Aana & per Kattha) and real estate market benchmark prices across districts in Nepal for bank loans, tax calculation, and deed registration.',
  keywords: [
    'Land Valuation in Nepal',
    'Malpot Valuation Rate Nepal',
    'Government Land Rate per Aana Kathmandu',
    'Sarkari Mulyankan Rate Nepal',
    'Property Valuation Guide Nepal',
    'Land Rate per Kattha Nepal',
  ],
  alternates: getBilingualAlternates('/tools/malpot-valuation-rates', '/en/tools/malpot-valuation-rates', 'en'),
  openGraph: {
    title: 'Land Valuation in Nepal — Malpot Official Rate & Benchmark Finder | BR Bhatta',
    description:
      'Compare district-wise government Malpot minimum rates (per Aana / per Kattha) with market price benchmarks across Nepal.',
    url: 'https://www.brbhatta.com/en/tools/malpot-valuation-rates',
    siteName: 'BR Bhatta',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EnglishMalpotValuationRatesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Nepal Land Valuation & Malpot Rate Finder',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'All',
        inLanguage: 'en',
        url: 'https://www.brbhatta.com/en/tools/malpot-valuation-rates',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How is government land valuation (Malpot rate) determined in Nepal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Each district Land Revenue Office (Malpot Karyalaya) fixes an annual Minimum Valuation Rate per Aana or per Kattha based on road access (blacktopped highway, graveled road, foot trail) and local administrative zone. Registration taxes cannot be paid below this minimum threshold.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why do banks use both government Malpot rate and market rate for home loans?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nepalese banks and A/B/C class financial institutions compute collateral Fair Market Value (FMV) using a weighted blend of market comparable rates (typically 70% weight) and official Malpot minimum rates (typically 30% weight) before applying NRB Loan-to-Value (LTV) limits.',
            },
          },
        ],
      },
    ],
  };

  return (
    <EnglishPageShell
      breadcrumbLabel="Land Valuation Rates"
      nePath="/tools/malpot-valuation-rates"
      enPath="/en/tools/malpot-valuation-rates"
      shareTitle="Land Valuation in Nepal — District Malpot Minimum Rate Finder"
      jsonLd={jsonLd}
      maxWidthClass="max-w-6xl"
    >
      <header className="space-y-3">
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Land Valuation in Nepal — District Malpot Rate &amp; Market Benchmark Finder
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Look up government minimum valuation benchmarks (Sarkari Mulyankan) and typical market rate ranges across major Nepalese districts for deed registration, bank collateral valuation, and capital gains planning.
        </p>
      </header>

      <EnglishMalpotValuationFinder />
    </EnglishPageShell>
  );
}
