'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Landmark, Building2, Coins } from 'lucide-react';
import { MALPOT_VALUATION_DATA } from '@/data/malpotRates';
import { DISTRICT_SLUGS, DistrictSlugInfo } from '@/lib/districtSlugs';

export default function EnglishMalpotValuationFinder() {
  const [selectedDistrictNp, setSelectedDistrictNp] = useState<string>('काठमाडौँ');

  const districtMap = useMemo(() => {
    const m = new Map<string, DistrictSlugInfo>();
    DISTRICT_SLUGS.forEach((d) => m.set(d.districtNp, d));
    return m;
  }, []);

  const availableDistricts = useMemo(() => {
    const seen = Array.from(new Set(MALPOT_VALUATION_DATA.map((d) => d.district)));
    return seen.map((np) => ({
      np,
      en: districtMap.get(np)?.districtEn || np,
      slug: districtMap.get(np)?.slug || '',
    }));
  }, [districtMap]);

  const entries = useMemo(
    () => MALPOT_VALUATION_DATA.filter((d) => d.district === selectedDistrictNp),
    [selectedDistrictNp]
  );

  const [entryIdx, setEntryIdx] = useState(0);
  const activeEntry = entries[entryIdx] || entries[0] || MALPOT_VALUATION_DATA[0];
  const unitEn = activeEntry.unit === 'प्रति आना' ? 'per Aana' : 'per Kattha';

  return (
    <div className="space-y-6">
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <Landmark className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              District Government Land Valuation &amp; Market Benchmark Finder
            </h2>
          </div>
          {districtMap.get(selectedDistrictNp)?.slug && (
            <Link
              href={`/tools/malpot-valuation-rates/${districtMap.get(selectedDistrictNp)!.slug}`}
              className="text-xs font-bold text-emerald-600 hover:underline"
            >
              Open Full District Rate Page &rarr;
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="space-y-1.5">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 block">
              Select Major District / Malpot Region
            </span>
            <select
              value={selectedDistrictNp}
              onChange={(e) => {
                setSelectedDistrictNp(e.target.value);
                setEntryIdx(0);
              }}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white"
            >
              {availableDistricts.map((d) => (
                <option key={d.np} value={d.np}>
                  {d.en} ({d.np})
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-1.5">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 block">
              Select Malpot Office &amp; Area Segment
            </span>
            <select
              value={entryIdx}
              onChange={(e) => setEntryIdx(parseInt(e.target.value, 10) || 0)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white"
            >
              {entries.map((entry, idx) => (
                <option key={entry.id} value={idx}>
                  {entry.officeName} — {entry.areaName}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-emerald-600" />
            <strong>Office:</strong> {activeEntry.officeName}
          </span>
          <span className="flex items-center gap-1.5">
            <Coins className="w-4 h-4 text-amber-600" />
            <strong>Municipality / Ward:</strong> {activeEntry.municipality}
          </span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-900 dark:text-white">
              <tr>
                <th className="px-4 py-3">Road Category</th>
                <th className="px-4 py-3">Gov Minimum Rate ({unitEn})</th>
                <th className="px-4 py-3">Est. Market Rate ({unitEn})</th>
                <th className="px-4 py-3">Est. Bank Valuation (30/70 Weight)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {activeEntry.rates.map((r, i) => {
                const bankEst = Math.round(r.govRate * 0.3 + r.marketRateEstimate * 0.7);
                return (
                  <tr key={i}>
                    <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{r.roadType}</td>
                    <td className="px-4 py-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">
                      Rs. {r.govRate.toLocaleString('en-IN')}
                    </td>
                    <td className="px-4 py-3 font-mono">Rs. {r.marketRateEstimate.toLocaleString('en-IN')}</td>
                    <td className="px-4 py-3 font-mono font-bold text-sky-700 dark:text-sky-400">
                      Rs. {bankEst.toLocaleString('en-IN')}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* All 77 District Links */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
          Browse All 77 Districts Government Land Valuation Guides in Nepal
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {DISTRICT_SLUGS.map((d) => (
            <Link
              key={d.slug}
              href={`/tools/malpot-valuation-rates/${d.slug}`}
              className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-700 transition-colors"
            >
              {d.districtEn}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
