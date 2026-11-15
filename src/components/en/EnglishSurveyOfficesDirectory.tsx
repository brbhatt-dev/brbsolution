'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Phone, Mail, MapPin, Building2, Compass, Receipt } from 'lucide-react';
import { SURVEY_OFFICES } from '@/data/surveyOffices';
import { DISTRICT_SLUGS, DistrictSlugInfo } from '@/lib/districtSlugs';

const DEV_DIGITS = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
function toAsciiDigits(str: string): string {
  return str.replace(/[०-९]/g, (ch) => String(DEV_DIGITS.indexOf(ch)));
}

const POPULAR_CITIES = [
  { label: 'All Districts', query: '' },
  { label: 'Kathmandu', query: 'kathmandu' },
  { label: 'Lalitpur', query: 'lalitpur' },
  { label: 'Bhaktapur', query: 'bhaktapur' },
  { label: 'Pokhara / Kaski', query: 'pokhara' },
  { label: 'Chitwan / Bharatpur', query: 'chitwan' },
  { label: 'Butwal / Rupandehi', query: 'butwal' },
  { label: 'Birgunj / Parsa', query: 'birgunj' },
  { label: 'Janakpur / Dhanusha', query: 'janakpur' },
  { label: 'Biratnagar / Morang', query: 'biratnagar' },
  { label: 'Mahendranagar / Kanchanpur', query: 'mahendranagar' },
  { label: 'Dhangadhi / Kailali', query: 'dhangadhi' },
];

export default function EnglishSurveyOfficesDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'survey' | 'malpot'>('all');

  const districtMap = useMemo(() => {
    const m = new Map<string, DistrictSlugInfo>();
    DISTRICT_SLUGS.forEach((d) => m.set(d.districtNp, d));
    return m;
  }, []);

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return SURVEY_OFFICES.filter((office) => {
      if (typeFilter !== 'all' && office.type !== typeFilter) return false;
      if (!q) return true;
      const dInfo = districtMap.get(office.district);
      const haystack = [
        office.nameEn,
        office.nameNp,
        office.email,
        office.district,
        office.location,
        office.jurisdiction,
        dInfo?.districtEn || '',
        dInfo?.cityAliasesEn || '',
        dInfo?.slug || '',
      ]
        .join(' ')
        .toLowerCase();
      return q.split(/\s+/).every((part) => haystack.includes(part));
    });
  }, [searchTerm, typeFilter, districtMap]);

  return (
    <div className="space-y-6">
      <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search district or city (e.g. Dillibazar, Maitidevi, Mahendranagar, Janakpur, Lagankhel)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0">
            {(
              [
                ['all', `All (${SURVEY_OFFICES.length})`],
                ['survey', 'Survey (Napi)'],
                ['malpot', 'Land Revenue (Malpot)'],
              ] as const
            ).map(([val, lbl]) => (
              <button
                key={val}
                type="button"
                onClick={() => setTypeFilter(val)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                  typeFilter === val
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                {lbl}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {POPULAR_CITIES.map((city) => (
            <button
              key={city.label}
              type="button"
              onClick={() => setSearchTerm(city.query)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold border cursor-pointer transition-colors ${
                searchTerm.toLowerCase() === city.query
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-slate-50 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
              }`}
            >
              {city.label}
            </button>
          ))}
        </div>

        <p className="text-xs text-slate-500 font-semibold">
          Showing <strong>{filtered.length}</strong> official offices across Nepal
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.slice(0, 60).map((office) => {
          const dInfo = districtMap.get(office.district);
          const phoneAscii = toAsciiDigits(office.phone);
          const isSurvey = office.type === 'survey';
          return (
            <div
              key={office.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      isSurvey
                        ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300'
                        : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                    }`}
                  >
                    {isSurvey ? <Compass className="w-3 h-3" /> : <Receipt className="w-3 h-3" />}
                    <span>{isSurvey ? 'Survey Office (Napi)' : 'Land Revenue (Malpot)'}</span>
                  </span>
                  {dInfo && (
                    <Link
                      href={`/tools/survey-offices/${dInfo.slug}`}
                      className="text-[11px] font-bold text-slate-500 hover:text-emerald-600 underline"
                    >
                      {dInfo.districtEn}
                    </Link>
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-black text-slate-900 dark:text-white leading-snug">
                    {office.nameEn}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{office.nameNp}</p>
                </div>

                <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300 pt-1">
                  <p className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>
                      {dInfo ? `${dInfo.districtEn} District` : office.district} — {office.location}
                    </span>
                  </p>
                  {office.phone && (
                    <p className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <a
                        href={`tel:${phoneAscii.replace(/[^0-9+]/g, '')}`}
                        className="font-mono font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
                      >
                        {phoneAscii}
                      </a>
                    </p>
                  )}
                  {office.email && (
                    <p className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <a href={`mailto:${office.email}`} className="font-mono hover:underline truncate">
                        {office.email}
                      </a>
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 line-clamp-2">
                <strong>Jurisdiction:</strong> {office.jurisdiction}
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length > 60 && (
        <p className="text-center text-xs text-slate-500">
          Showing first 60 matches out of {filtered.length}. Type a city or district name above to narrow down results.
        </p>
      )}
    </div>
  );
}
