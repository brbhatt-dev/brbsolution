import React from 'react';
import type { Metadata } from 'next';
import EnglishPageShell from '@/components/en/EnglishPageShell';
import EnglishKittaKatChecker from '@/components/en/EnglishKittaKatChecker';
import { getBilingualAlternates } from '@/lib/i18nRoutes';

export const metadata: Metadata = {
  title: 'Nepal Kitta Kat Eligibility Checker (Land Use Regulation 2079) | BR Bhatta',
  description:
    'Verify minimum parcel size (sq.m / Aana / Dhur) and access road width required for land subdivision (Kitta Kat) in Kathmandu Valley, Terai, and Hill districts under Nepal Land Use Regulation 2079.',
  keywords: [
    'Kitta Kat Rules Nepal',
    'Land Use Regulation 2079 Nepal',
    'Minimum Land Area for Kitta Kat',
    'Land Subdivision Checker Nepal',
    'Residential Agricultural Kitta Kat Limit',
    'Kitta Kat Calculator Nepal',
  ],
  alternates: getBilingualAlternates('/tools/kitta-kat-checker', '/en/tools/kitta-kat-checker', 'en'),
  openGraph: {
    title: 'Nepal Kitta Kat Eligibility Checker — Land Use Regulation 2079 | BR Bhatta',
    description:
      'Instant check for residential, commercial, and agricultural land fragmentation rules across Kathmandu Valley, Terai, and Hilly Nepal.',
    url: 'https://www.brbhatta.com/en/tools/kitta-kat-checker',
    siteName: 'BR Bhatta',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EnglishKittaKatCheckerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Nepal Kitta Kat (Land Subdivision) Eligibility Checker',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        inLanguage: 'en',
        url: 'https://www.brbhatta.com/en/tools/kitta-kat-checker',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the minimum area for residential Kitta Kat in Nepal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under Nepal Land Use Regulation 2079 (First Amendment), residential parcels generally require at least 130 sq.m (approx. 4 Aana 0 Paisa 1.2 Daam) per split plot in Kathmandu Valley and hilly areas, or 169.3 sq.m (10 Dhur) in Terai.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the agricultural land Kitta Kat thresholds in Nepal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Agricultural land subdivision requires a larger minimum plot size per split parcel: 500 sq.m in Kathmandu Valley, 675 sq.m (approx. 2 Kattha) in Terai & Inner Terai, and 1,000 sq.m in other mountainous/hilly districts.',
            },
          },
        ],
      },
    ],
  };

  return (
    <EnglishPageShell
      breadcrumbLabel="Kitta Kat Checker"
      nePath="/tools/kitta-kat-checker"
      enPath="/en/tools/kitta-kat-checker"
      shareTitle="Nepal Kitta Kat (Land Subdivision) Eligibility Checker"
      jsonLd={jsonLd}
    >
      <header className="space-y-3">
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Nepal Kitta Kat Eligibility Checker (Land Use Regulation 2079)
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Check if a land parcel qualifies for Survey Office subdivision (Kitta Kat) based on regional minimum plot area and road access requirements under Nepal&apos;s Land Use Regulation 2079.
        </p>
      </header>

      <EnglishKittaKatChecker />

      <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
          Minimum Parcel Thresholds — Land Use Regulation 2079 Reference
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-900 dark:text-white">
              <tr>
                <th className="px-4 py-3">Land Zone / Classification</th>
                <th className="px-4 py-3">Kathmandu Valley</th>
                <th className="px-4 py-3">Terai Districts</th>
                <th className="px-4 py-3">Hill &amp; Mountain</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <td className="px-4 py-3 font-bold">Residential Zone</td>
                <td className="px-4 py-3 font-mono">130 sq.m (~4.09 Aana)</td>
                <td className="px-4 py-3 font-mono">169.3 sq.m (10 Dhur)</td>
                <td className="px-4 py-3 font-mono">130 sq.m (~4.09 Aana)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-bold">Agricultural Zone</td>
                <td className="px-4 py-3 font-mono">500 sq.m (~15.7 Aana)</td>
                <td className="px-4 py-3 font-mono">675 sq.m (~2 Kattha)</td>
                <td className="px-4 py-3 font-mono">1,000 sq.m (~1.96 Ropani)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-bold">Commercial Zone</td>
                <td className="px-4 py-3 font-mono">200 sq.m</td>
                <td className="px-4 py-3 font-mono">200 sq.m</td>
                <td className="px-4 py-3 font-mono">200 sq.m</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
            <h3 className="font-bold text-slate-900 dark:text-white">1. Road Access &amp; Frontage Requirements</h3>
            <p>
              To obtain subdivision (Kitta-Kat) approval from a municipal ward office and Survey Office (Napi Karyalaya), every newly created residential parcel must have legal access to a minimum 6-meter (approx. 20 ft) wide motorable road for new plotting developments, or meet the specific municipal right-of-way (ROW) setback standard for existing ancestral partitions (Anshabanda).
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
            <h3 className="font-bold text-slate-900 dark:text-white">2. Small Plot Relaxation &amp; Ancestral Partition</h3>
            <p>
              Under the First Amendment to Nepal&apos;s Land Use Regulation 2079, if a parent residential parcel is smaller than 500 sq. meters, local municipalities may permit subdivision down to 80 sq. meters (approx. 2.5 Aana) per plot. Agricultural land, however, cannot be fragmented below the regional threshold without formal municipal Land Use Council reclassification.
            </p>
          </div>
        </div>
      </section>
    </EnglishPageShell>
  );
}
