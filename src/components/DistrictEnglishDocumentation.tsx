import React from 'react';
import Link from 'next/link';
import { Globe, Building2, Scale, Calculator, FileCheck2, Compass } from 'lucide-react';
import type { SurveyOffice } from '@/data/surveyOffices';
import type { MALPOT_VALUATION_DATA } from '@/data/malpotRates';

type MalpotValuationEntry = (typeof MALPOT_VALUATION_DATA)[number];

interface DistrictEnglishDocumentationProps {
  districtEn: string;
  districtNp: string;
  slug: string;
  provinceName: string;
  cityAliasesEn?: string;
  offices: SurveyOffice[];
  valuationEntries?: MalpotValuationEntry[];
  mode: 'survey-office' | 'malpot-valuation';
}

const TERAI_DISTRICTS_EN = new Set([
  'Jhapa', 'Morang', 'Sunsari', 'Saptari', 'Siraha', 'Dhanusha', 'Mahottari', 'Sarlahi',
  'Rautahat', 'Bara', 'Parsa', 'Chitwan', 'Nawalparasi East', 'Nawalparasi West',
  'Rupandehi', 'Kapilvastu', 'Dang', 'Banke', 'Bardiya', 'Kailali', 'Kanchanpur', 'Udayapur', 'Makwanpur', 'Sindhuli'
]);

export default function DistrictEnglishDocumentation({
  districtEn,
  districtNp,
  slug,
  provinceName,
  cityAliasesEn,
  offices,
  valuationEntries = [],
  mode,
}: DistrictEnglishDocumentationProps) {
  const isTerai = TERAI_DISTRICTS_EN.has(districtEn);
  const surveyOffices = offices.filter((o) => o.type === 'survey');
  const malpotOffices = offices.filter((o) => o.type === 'malpot');
  const majorHubs = cityAliasesEn || districtEn;

  return (
    <section
      aria-label={`Official English Cadastral and Land Revenue Documentation for ${districtEn} District`}
      className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 text-slate-700 dark:text-slate-300"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
            <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>OFFICIAL ENGLISH DISTRICT CADASTRAL &amp; VALUATION REPORT</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
            {mode === 'malpot-valuation'
              ? `${districtEn} District Government Land Valuation Rates (FY 2083/84), Deed Registration Tax & Malpot Guide`
              : `${districtEn} District Survey Office (Napi Karyalaya) & Land Revenue Office (Malpot) Official Directory`}
          </h2>
        </div>
        <Link
          href="/en"
          className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline shrink-0"
        >
          Open English Tools Hub &rarr;
        </Link>
      </div>

      {/* 1. Executive District Profile in English */}
      <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
        <p>
          <strong>1. Administrative &amp; Cadastral Overview of {districtEn} District ({districtNp}):</strong>{' '}
          Located within <strong>{provinceName}</strong> of Nepal and covering key urban and commercial centers including{' '}
          <strong>{majorHubs}</strong>, {districtEn} District operates{' '}
          <strong>{offices.length} statutory land administration branches</strong> ({surveyOffices.length} Survey Office / Napi Karyalaya branches under the Department of Survey{' '}
          <code className="font-mono text-xs">dos.gov.np</code> and {malpotOffices.length} Land Revenue Office / Malpot Karyalaya branches under the Department of Land Management and Archive{' '}
          <code className="font-mono text-xs">dolrm.gov.np</code>). Property ownership records (Lalpurja), cadastral parcel maps (Kitta Naksa), digital field books, and statutory deed transfers in {districtEn} are administered primarily under the{' '}
          <strong>
            {isTerai
              ? 'Terai Bigha–Kattha–Dhur Cadastral Measurement System (1 Bigha = 20 Kattha = 400 Dhur = 72,900 sq. ft. / 6,772.63 sq. meters)'
              : 'Hilly Ropani–Aana–Paisa–Daam Cadastral Measurement System (1 Ropani = 16 Aana = 64 Paisa = 256 Daam = 5,476 sq. ft. / 508.74 sq. meters)'}
          </strong>{' '}
          alongside metric square-meter field books.
        </p>

        <p>
          Whether you are verifying parcel boundaries in <strong>{majorHubs}</strong>, downloading certified trace maps via the online{' '}
          <strong>MeroKitta (NELIS) portal</strong>, calculating deed registration fees (Rajinama Likhat Pass Dastur), or preparing collateral valuation reports for commercial bank mortgages in {districtEn}, this English technical reference compiles verified office contact details, statutory tax thresholds, and land subdivision rules enforced in Fiscal Year 2083/84 (2026/2027 AD).
        </p>
      </div>

      {/* 2. Verified English Office Table for This District */}
      <div className="space-y-3">
        <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
          <Building2 className="w-4 h-4 text-emerald-600" />
          <span>2. Verified Survey &amp; Land Revenue Offices in {districtEn} District (English Reference Table)</span>
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-900 dark:text-white">
              <tr>
                <th className="px-3.5 py-2.5">Office Name (English &amp; Nepali)</th>
                <th className="px-3.5 py-2.5">Department Type</th>
                <th className="px-3.5 py-2.5">Official Phone</th>
                <th className="px-3.5 py-2.5">Email Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {offices.map((o) => (
                <tr key={o.id}>
                  <td className="px-3.5 py-2.5 font-bold text-slate-900 dark:text-white">
                    {o.nameEn} <span className="text-slate-500 font-normal">({o.nameNp})</span>
                  </td>
                  <td className="px-3.5 py-2.5">
                    {o.type === 'malpot'
                      ? 'Land Revenue Office (Malpot / DOLRM)'
                      : 'Survey Office (Napi Karyalaya / DOS)'}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono font-bold">{o.phone}</td>
                  <td className="px-3.5 py-2.5 font-mono">{o.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Valuation & Statutory Rules in English */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm leading-relaxed">
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2.5">
          <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
            <Calculator className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>3. Government Minimum Land Valuation &amp; Bank FMV in {districtEn}</span>
          </h3>
          <p>
            Under the <strong>Land Revenue Act 2034 (Malpot Ain)</strong>, the {districtEn} District Valuation Committee—chaired by the Chief District Officer (CDO) with representatives from the Survey Office, Land Revenue Office, and local municipalities—revises the <strong>Minimum Government Land Valuation Rate (Sarkari Mulyankan)</strong> every Shrawan 1 based on road connectivity:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>
              <strong>Category A — National Highway &amp; Pitched Urban Arterial Roads:</strong> Commands the highest statutory minimum valuation per {isTerai ? 'Kattha / Dhur' : 'Aana / Ropani'} across {majorHubs}.
            </li>
            <li>
              <strong>Category B — Graveled &amp; Municipal Feeder Roads:</strong> Medium valuation tier applicable to developing residential neighborhoods in {districtEn}.
            </li>
            <li>
              <strong>Category C &amp; D — Earthen Tracks, Goreto Bato (Foot Trails) &amp; Agricultural Plots:</strong> Baseline valuation tier for rural and non-motorable parcels.
            </li>
            <li>
              <strong>Commercial Bank Collateral Valuation (FMV):</strong> Nepalese A/B/C class banks typically evaluate land collateral in {districtEn} using a weighted formula of <strong>70% prevailing market rate + 30% official {districtEn} Malpot minimum valuation rate</strong>.
            </li>
          </ul>
          {valuationEntries.length > 0 && (
            <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              Verified Benchmark in {districtEn}: Starting from NPR{' '}
              {Math.min(...valuationEntries.flatMap((v) => v.rates.map((r) => r.govRate))).toLocaleString('en-IN')}{' '}
              up to NPR{' '}
              {Math.max(...valuationEntries.flatMap((v) => v.rates.map((r) => r.govRate))).toLocaleString('en-IN')}{' '}
              ({valuationEntries[0].unit}).
            </p>
          )}
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2.5">
          <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
            <Scale className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>4. Deed Registration Tax, CGT &amp; Kitta-Kat Rules in {districtEn}</span>
          </h3>
          <p>
            Property buyers, sellers, and surveyors transacting at the {districtEn} Land Revenue and Survey Offices must comply with the following statutory standards for FY 2083/84:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>
              <strong>Deed Registration Fee (Rajinama Likhat Dastur):</strong> Charged at <strong>5%</strong> in Metropolitan cities, <strong>4.5%</strong> in Sub-Metropolitan and Municipal areas, and <strong>4%</strong> in Rural Municipalities of {districtEn}, calculated on the declared transaction value (Thaili) or government minimum valuation, whichever is higher.
            </li>
            <li>
              <strong>Female Ownership Tax Exemption:</strong> Registering property solely in a female citizen&apos;s name grants a <strong>25% to 50% registration fee rebate</strong> (subject to a 3-year minimum holding period), while joint husband-wife registration (Dampati Kayam) costs a flat <strong>NPR 100</strong> fee.
            </li>
            <li>
              <strong>Capital Gains Tax (Labhkar / CGT):</strong> Applicable to transactions exceeding NPR 10 Lakhs; individual sellers pay <strong>5% CGT</strong> if held for 5+ years, or <strong>7.5% CGT</strong> if held for under 5 years.
            </li>
            <li>
              <strong>Land Subdivision (Kitta-Kat) Minimum Area:</strong> Under the Land Use Regulation 2079/2081, residential subdivision in {districtEn} requires at least <strong>130 sq. meters</strong> ({isTerai ? 'approx. 7.68 Dhur' : 'approx. 4 Aana 0.38 Paisa'}), while agricultural subdivision requires <strong>{isTerai ? '675 sq. meters (approx. 2 Kattha)' : '1,000 sq. meters (500 sq.m in Kathmandu Valley)'}</strong>.
            </li>
          </ul>
        </div>
      </div>

      {/* 4. English Tools Cross-Navigation */}
      <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/70 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
          <FileCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Companion English Calculators for {districtEn} District:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/en/tools/land-calculator" className="px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-bold text-emerald-700 dark:text-emerald-400 hover:underline">
            Ropani / Bigha Converter
          </Link>
          <Link href="/en/tools/malpot-calculator" className="px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-bold text-emerald-700 dark:text-emerald-400 hover:underline">
            Malpot Tax &amp; CGT Calculator
          </Link>
          <Link href="/en/tools/kitta-kat-checker" className="px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-bold text-emerald-700 dark:text-emerald-400 hover:underline">
            Kitta-Kat Checker
          </Link>
          <Link href="/en/tools/setback-calculator" className="px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-bold text-emerald-700 dark:text-emerald-400 hover:underline">
            High-Tension &amp; Road Setback
          </Link>
          <Link
            href={mode === 'malpot-valuation' ? `/tools/survey-offices/${slug}` : `/tools/malpot-valuation-rates/${slug}`}
            className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-500"
          >
            {mode === 'malpot-valuation' ? `${districtEn} Survey Offices` : `${districtEn} Land Valuation Rates`}
          </Link>
        </div>
      </div>
    </section>
  );
}
