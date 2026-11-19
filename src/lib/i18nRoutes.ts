import type { Metadata } from 'next';

export const SITE_URL = 'https://www.brbhatta.com';

export interface BilingualRoutePair {
  ne: string;
  en: string;
  labelEn: string;
  labelNe: string;
}

export const BILINGUAL_ROUTE_PAIRS: BilingualRoutePair[] = [
  {
    ne: '/',
    en: '/en',
    labelEn: 'Home Portal',
    labelNe: 'गृहपृष्ठ',
  },
  {
    ne: '/tools/number-to-words',
    en: '/en/tools/number-to-words',
    labelEn: 'Number to Nepali Words',
    labelNe: 'अंकबाट नेपाली अक्षरमा',
  },
  {
    ne: '/tools/land-calculator',
    en: '/en/tools/land-calculator',
    labelEn: 'Nepal Land Unit Converter',
    labelNe: 'जग्गा नापजाँच क्यालकुलेटर',
  },
  {
    ne: '/tools/setback-calculator',
    en: '/en/tools/setback-calculator',
    labelEn: 'Building & High Tension Setback',
    labelNe: 'सेटब्याक र हाइटेन्सन मापदण्ड',
  },
  {
    ne: '/tools/malpot-calculator',
    en: '/en/tools/malpot-calculator',
    labelEn: 'Malpot Tax & CGT Calculator',
    labelNe: 'मालपोत रजिस्ट्रेसन र लाभकर',
  },
  {
    ne: '/tools/kitta-kat-checker',
    en: '/en/tools/kitta-kat-checker',
    labelEn: 'Kitta Kat Eligibility Checker',
    labelNe: 'कित्ताकाट योग्यता परीक्षक',
  },
  {
    ne: '/tools/malpot-valuation-rates',
    en: '/en/tools/malpot-valuation-rates',
    labelEn: 'Government Land Valuation Rates',
    labelNe: 'सरकारी जग्गा मूल्याङ्कन दर',
  },
  {
    ne: '/tools/survey-offices',
    en: '/en/tools/survey-offices',
    labelEn: 'Survey & Malpot Offices Directory',
    labelNe: 'नापी र मालपोत कार्यालय निर्देशिका',
  },
  {
    ne: '/patro',
    en: '/en/patro',
    labelEn: 'Nepali Patro & BS-AD Converter',
    labelNe: 'नेपाली पात्रो र BS-AD कन्भर्टर',
  },
];

export function normalizePathname(pathname: string): string {
  if (!pathname) return '/';
  const cleaned = pathname.split('?')[0].split('#')[0];
  if (cleaned.length > 1 && cleaned.endsWith('/')) {
    return cleaned.slice(0, -1);
  }
  return cleaned || '/';
}

export function getBilingualPair(pathname: string): BilingualRoutePair | undefined {
  const norm = normalizePathname(pathname);
  return BILINGUAL_ROUTE_PAIRS.find((p) => p.ne === norm || p.en === norm);
}

export function getAlternatePath(pathname: string, targetLang: 'ne' | 'en'): string | null {
  const pair = getBilingualPair(pathname);
  if (!pair) return null;
  return targetLang === 'en' ? pair.en : pair.ne;
}

export function getBilingualAlternates(
  nePath: string,
  enPath: string,
  activeLang: 'ne' | 'en'
): Metadata['alternates'] {
  const canonicalPath = activeLang === 'en' ? enPath : nePath;
  return {
    canonical: `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`,
    languages: {
      'en-US': `${SITE_URL}${enPath}`,
      'x-default': `${SITE_URL}${nePath === '/' ? '' : nePath}`,
    },
  };
}
