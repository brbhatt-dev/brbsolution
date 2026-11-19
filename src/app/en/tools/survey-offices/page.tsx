import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import EnglishPageShell from '@/components/en/EnglishPageShell';
import EnglishSurveyOfficesDirectory from '@/components/en/EnglishSurveyOfficesDirectory';
import { getBilingualAlternates } from '@/lib/i18nRoutes';
import { DISTRICT_SLUGS } from '@/lib/districtSlugs';

export const metadata: Metadata = {
  title: 'Malpot & Survey Office Nepal Phone Number, Address [77 Districts] | Department of Survey (dos.gov.np)',
  description:
    'Official phone numbers, addresses, emails & ward jurisdictions for all 185 Malpot Karyalaya (dolrm.gov.np) & Survey Offices / Napi Karyalaya (dos.gov.np) in Kathmandu, Lagankhel, Pokhara, Mahendranagar, Janakpur, Damak & 77 districts.',
  keywords: [
    'Malpot Office Nepal Phone Number',
    'Survey Department Nepal dos.gov.np',
    'www.dos.gov.np nepal',
    'Malpot Office Lagankhel Phone Number',
    'Malpot Office Mahendranagar',
    'Malpot Karyalaya Pokhara',
    'Malpot Office Janakpur',
    'Napi Karyalaya Contact Directory',
    'Land Revenue Office Nepal 77 Districts',
  ],
  alternates: getBilingualAlternates('/tools/survey-offices', '/en/tools/survey-offices', 'en'),
  openGraph: {
    title: 'Nepal Survey (Napi) & Malpot Offices Directory | BR Bhatta',
    description:
      'Find official landline numbers, emails, and district links for Survey and Land Revenue (Malpot) Offices across Nepal.',
    url: 'https://www.brbhatta.com/en/tools/survey-offices',
    siteName: 'BR Bhatta',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EnglishSurveyOfficesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Nepal Survey & Malpot Office Contact Directory',
        applicationCategory: 'GovernmentService',
        operatingSystem: 'All',
        inLanguage: 'en',
        url: 'https://www.brbhatta.com/en/tools/survey-offices',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the difference between Survey Office (Napi) and Land Revenue Office (Malpot)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Survey Office (Napi Karyalaya) handles technical cadastral mapping, boundary demarcation, plot splitting (Kitta Kat), field books, and official trace maps. The Land Revenue Office (Malpot Karyalaya) handles legal ownership transfers (Likhat Pass), title deeds (Lalpurja), collateral freeze/release (Rokka/Fukuwa), and deed tax collection.',
            },
          },
          {
            '@type': 'Question',
            name: 'What documents are required at Malpot Office for land registration in Nepal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Essential documents include the original Land Ownership Certificate (Lalpurja), original citizenship certificates of buyer and seller, ward-level road/house recommendation letter (Ghar Bato Sifaris), up-to-date local land tax receipt (Malpot Tiro), and certified cadastral trace map.',
            },
          },
        ],
      },
    ],
  };

  return (
    <EnglishPageShell
      breadcrumbLabel="Survey & Malpot Offices"
      nePath="/tools/survey-offices"
      enPath="/en/tools/survey-offices"
      shareTitle="Nepal Survey (Napi) & Land Revenue (Malpot) Offices Directory"
      jsonLd={jsonLd}
      maxWidthClass="max-w-6xl"
    >
      <header className="space-y-3">
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Nepal Survey (Napi) &amp; Land Revenue (Malpot) Offices Directory
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Search official landline numbers, emails, and branch locations for Department of Survey (Napi) and Land Revenue (Malpot) offices across all provinces of Nepal.
        </p>
      </header>

      <EnglishSurveyOfficesDirectory />

      <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
          Browse Malpot &amp; Survey (Napi) Offices by District (All 77 Districts)
        </h2>
        <div className="flex flex-wrap gap-2">
          {DISTRICT_SLUGS.map((d) => (
            <Link
              key={d.slug}
              href={`/tools/survey-offices/${d.slug}`}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-emerald-700 transition-colors"
            >
              {d.districtEn} ({d.districtNp})
            </Link>
          ))}
        </div>
      </section>
    </EnglishPageShell>
  );
}
