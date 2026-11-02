// @ts-ignore
import NepaliDate from 'nepali-date-converter';

export function parseNepaliDigits(str: string | number): string {
  if (!str) return '';
  const devanagariDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  return String(str).replace(/[०-९]/g, (d) => String(devanagariDigits.indexOf(d)));
}

const NEP_MONTHS: Record<string, number> = {
  'बैशाख': 1, 'वैशाख': 1,
  'जेठ': 2, 'ज्येष्ठ': 2,
  'असार': 3, 'आषाढ': 3,
  'साउन': 4, 'श्रावण': 4,
  'भदौ': 5, 'भाद्र': 5,
  'असोज': 6, 'आश्विन': 6,
  'कार्तिक': 7, 'कात्तिक': 7,
  'मंसिर': 8, 'मङ्गसिर': 8, 'मङ्सिर': 8,
  'पुस': 9, 'पौष': 9,
  'माघ': 10,
  'फागुन': 11, 'फाल्गुन': 11,
  'चैत': 12, 'चैत्र': 12
};

/**
 * Extracts a comparable Unix timestamp (in milliseconds) from any post or article,
 * supporting numeric timestamps, ISO dates, English dates, and Nepali Bikram Sambat dates.
 */
export function getArticleTimestamp(article: any): number {
  if (!article) return 0;

  // 1. Explicit numeric timestamp (e.g. Date.now())
  if (article.timestamp && !isNaN(Number(article.timestamp))) {
    return Number(article.timestamp);
  }

  // 2. ISO or parseable standard Date in createdAt / publishedAt
  if (article.createdAt) {
    const t = new Date(article.createdAt).getTime();
    if (!isNaN(t) && t > 0) return t;
  }
  if (article.publishedAt) {
    const t = new Date(article.publishedAt).getTime();
    if (!isNaN(t) && t > 0) return t;
  }

  // 3. String date in updatedDate or publishedDate
  const dateStr = article.updatedDate || article.publishedDate || '';
  if (!dateStr) return 0;

  // Check if standard ISO format (e.g. "2026-10-30" or "2026-10-29")
  if (/^\d{4}-\d{2}/.test(dateStr)) {
    const t = new Date(dateStr).getTime();
    if (!isNaN(t) && t > 0) return t;
  }

  // Parse Nepali Bikram Sambat date string (e.g., "२०८३ कार्तिक १४" or "२०८३ असोज १५")
  try {
    const clean = parseNepaliDigits(dateStr);
    const yearMatch = clean.match(/(20\d{2})/);
    const year = yearMatch ? parseInt(yearMatch[1], 10) : 2083;

    let month = 1;
    for (const [mName, mNum] of Object.entries(NEP_MONTHS)) {
      if (dateStr.includes(mName)) {
        month = mNum;
        break;
      }
    }

    let day = 1;
    const dayMatch = clean.match(/\s+(\d{1,2})\b/);
    if (dayMatch) {
      day = Math.min(Math.max(parseInt(dayMatch[1], 10), 1), 32);
    }

    const nepDate = new NepaliDate(year, month - 1, day);
    return nepDate.toJsDate().getTime();
  } catch (e) {
    return 0;
  }
}

/**
 * Sorts articles descending by creation date or timestamp.
 * Newly created / updated posts will ALWAYS appear first (at the top).
 */
export function sortArticlesDescending<T = any>(articles: T[]): T[] {
  if (!Array.isArray(articles)) return [];
  return [...articles].sort((a: any, b: any) => {
    const diff = getArticleTimestamp(b) - getArticleTimestamp(a);
    if (diff !== 0) return diff;
    // Secondary fallback: custom posts first
    if (b.isCustom && !a.isCustom) return 1;
    if (!b.isCustom && a.isCustom) return -1;
    return 0;
  });
}
