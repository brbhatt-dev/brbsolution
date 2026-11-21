import React from 'react';
import type { Metadata } from 'next';
import EnglishPageShell from '@/components/en/EnglishPageShell';
import EnglishMalpotCalculator from '@/components/en/EnglishMalpotCalculator';
import { getBilingualAlternates } from '@/lib/i18nRoutes';

export const metadata: Metadata = {
  title: 'Nepal Malpot Registration Fee & Capital Gains Tax (CGT) Calculator | BR Bhatta',
  description:
    'Estimate Nepal land registration fee (Malpot Likhat Pass), 25%–50% female ownership tax discount, and 5% / 7.5% Capital Gains Tax (Labhkar) for Metropolitan, Sub-Metropolitan, Municipality, and Rural lands.',
  keywords: [
    'Malpot Registration Fee Calculator Nepal',
    'Nepal Land Transfer Tax Calculator',
    'Capital Gains Tax Land Nepal',
    'Likhat Pass Fee Nepal',
    'Female Land Ownership Discount Nepal',
    'Labhkar Calculation Nepal',
  ],
  alternates: getBilingualAlternates('/tools/malpot-calculator', '/en/tools/malpot-calculator', 'en'),
  openGraph: {
    title: 'Nepal Malpot Registration Fee & CGT Calculator | BR Bhatta',
    description:
      'Instant calculator for Nepal Land Revenue Office (Malpot) deed registration fees, female exemption discounts, and Capital Gains Tax.',
    url: 'https://www.brbhatta.com/en/tools/malpot-calculator',
    siteName: 'BR Bhatta',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Nepal Malpot Registration Fee & CGT Calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nepal Malpot Registration Fee & CGT Calculator | BR Bhatta',
    description: 'Instant calculator for Nepal Land Revenue Office (Malpot) deed registration fees, female exemption discounts, and Capital Gains Tax.',
    images: ['/og-image.png'],
  },
};

export default function EnglishMalpotCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Nepal Malpot Registration Fee & Capital Gains Tax Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'All',
        inLanguage: 'en',
        url: 'https://www.brbhatta.com/en/tools/malpot-calculator',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much is the land registration fee (Malpot fee) in Nepal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Depending on provincial Finance Acts, standard deed registration fees are typically around 4.5% in Metropolitan and Sub-Metropolitan cities, 4.0% in Municipalities, and 2.0%–2.5% in Rural Municipalities based on the transaction valuation (Thaili) or government minimum valuation, whichever is higher.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the female ownership discount in Nepal land registration?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under Nepal Finance Act provisions, registering land solely in a woman’s name typically receives a 25% discount on registration fees in urban/accessible areas and up to 50% exemption in specified remote mountain regions.',
            },
          },
          {
            '@type': 'Question',
            name: 'How is Capital Gains Tax (Labhkar) calculated on property sales in Nepal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For individual sellers under the Income Tax Act 2058, net capital gain (selling value minus original purchase cost and approved expenses) is taxed at 5% if the property was owned for 5 years or more, and 7.5% if owned for less than 5 years.',
            },
          },
        ],
      },
    ],
  };

  return (
    <EnglishPageShell
      breadcrumbLabel="Malpot Fee & CGT Calculator"
      nePath="/tools/malpot-calculator"
      enPath="/en/tools/malpot-calculator"
      shareTitle="Nepal Malpot Registration Fee & Capital Gains Tax (CGT) Calculator"
      jsonLd={jsonLd}
    >
      <header className="space-y-3">
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Nepal Malpot Registration Fee &amp; Capital Gains Tax (CGT) Calculator
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Estimate Land Revenue Office (Malpot Karyalaya) likhat registration fees, female tax rebates (25% / 50%), and seller Capital Gains Tax (Labhkar) at 5% or 7.5%.
        </p>
      </header>

      <EnglishMalpotCalculator />

      <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
          Key Rules for Malpot Deed Registration &amp; Labhkar in Nepal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
            <h3 className="font-bold text-slate-900 dark:text-white">1. Minimum Valuation Base</h3>
            <p>
              Fees apply on the higher of either the agreed deed price (Thaili) or the annual government minimum valuation rate fixed by the district Malpot office.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
            <h3 className="font-bold text-slate-900 dark:text-white">2. Female Ownership Rebate</h3>
            <p>
              Single-female deed transfers qualify for 25% standard registration relief (or 50% in designated remote districts), with a 3-year lock-in condition for sale.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
            <h3 className="font-bold text-slate-900 dark:text-white">3. 5-Year Holding CGT Rule</h3>
            <p>
              Individual properties held 5+ years attract 5% Capital Gains Tax on profit; properties held under 5 years attract 7.5% on net gain.
            </p>
          </div>
        </div>
      </section>
    </EnglishPageShell>
  );
}
