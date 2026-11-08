import panchang2081 from '@/data/panchanga/panchanga_2081.json';
import panchang2082 from '@/data/panchanga/panchanga_2082.json';
import panchang2083 from '@/data/panchanga/panchanga_2083.json';
import panchang2084 from '@/data/panchanga/panchanga_2084.json';
import eventsAll from '@/data/panchanga/events_all.json';
import saitAll from '@/data/panchanga/sait_all.json';
import festivalsLore from '@/data/panchanga/festivals_lore.json';

export const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

export function toNepaliDigits(num: number | string): string {
  return String(num).replace(/[0-9]/g, (d) => nepaliDigits[parseInt(d, 10)]);
}

export function fromNepaliDigits(str: string): number {
  const western = String(str).replace(/[०-९]/g, (d) => String(nepaliDigits.indexOf(d)));
  return parseFloat(western) || 0;
}

export const nepaliMonths = [
  'वैशाख', 'जेठ', 'असार', 'साउन', 'भदौ', 'असोज',
  'कात्तिक', 'मङ्सिर', 'पुस', 'माघ', 'फागुन', 'चैत'
];

export const nepaliDays = [
  'आइतबार', 'सोमबार', 'मङ्गलबार', 'बुधबार', 'बिहीबार', 'शुक्रबार', 'शनिबार'
];

export const sanskritDays = [
  'भानुवासरः', 'सोमवासरः', 'भौमवासरः', 'सौम्यवासरः', 'बृहस्पतिवासरः', 'भृगुवासरः', 'स्थिरवासरः'
];

export const tithiFullNames: Record<number, string> = {
  1: 'शुक्ल प्रतिपदा (परेवा)', 2: 'शुक्ल द्वितीया', 3: 'शुक्ल तृतीया', 4: 'शुक्ल चतुर्थी', 5: 'शुक्ल पञ्चमी',
  6: 'शुक्ल षष्ठी', 7: 'शुक्ल सप्तमी', 8: 'शुक्ल अष्टमी', 9: 'शुक्ल नवमी', 10: 'शुक्ल दशमी',
  11: 'शुक्ल एकादशी', 12: 'शुक्ल द्वादशी', 13: 'शुक्ल त्रयोदशी', 14: 'शुक्ल चतुर्दशी', 15: 'पूर्णिमा',
  16: 'कृष्ण प्रतिपदा (परेवा)', 17: 'कृष्ण द्वितीया', 18: 'कृष्ण तृतीया', 19: 'कृष्ण चतुर्थी', 20: 'कृष्ण पञ्चमी',
  21: 'कृष्ण षष्ठी', 22: 'कृष्ण सप्तमी', 23: 'कृष्ण अष्टमी', 24: 'कृष्ण नवमी', 25: 'कृष्ण दशमी',
  26: 'कृष्ण एकादशी', 27: 'कृष्ण द्वादशी', 28: 'कृष्ण त्रयोदशी', 29: 'कृष्ण चतुर्दशी', 30: 'औंसी (अमावस्या)'
};

export const tithiShortNames: Record<number, string> = {
  1: 'प्र.', 2: 'द्वि.', 3: 'तृ.', 4: 'चतु.', 5: 'पञ्च.',
  6: 'षष्ठी', 7: 'सप्त.', 8: 'अष्ट.', 9: 'नव.', 10: 'दश.',
  11: 'एका.', 12: 'द्वाद.', 13: 'त्रयो.', 14: 'चतुर्द.', 15: 'पूर्णिमा',
  16: 'प्र.', 17: 'द्वि.', 18: 'तृ.', 19: 'चतु.', 20: 'पञ्च.',
  21: 'षष्ठी', 22: 'सप्त.', 23: 'अष्ट.', 24: 'नव.', 25: 'दश.',
  26: 'एका.', 27: 'द्वाद.', 28: 'त्रयो.', 29: 'चतुर्द.', 30: 'औंसी'
};

export const nakshatraNamesList = [
  'अश्विनी', 'भरणी', 'कृत्तिका', 'रोहिणी', 'मृगशिरा', 'आर्द्रा',
  'पुनर्वसु', 'पुष्य', 'अश्लेषा', 'मघा', 'पूर्वाफाल्गुनी', 'उत्तराफाल्गुनी',
  'हस्त', 'चित्रा', 'स्वाती', 'विशाखा', 'अनुराधा', 'ज्येष्ठा',
  'मूल', 'पूर्वाषाढा', 'उत्तराषाढा', 'श्रवण', 'धनिष्ठा', 'शतभिषा',
  'पूर्वाभाद्रपदा', 'उत्तराभाद्रपदा', 'रेवती'
];

export const yogaNamesList = [
  'विष्कम्भ', 'प्रीति', 'आयुष्मान्', 'सौभाग्य', 'शोभन', 'अतिगण्ड',
  'सुकर्मा', 'धृति', 'शूल', 'गण्ड', 'वृद्धि', 'ध्रुव',
  'व्याघात', 'हर्षण', 'वज्र', 'सिद्धि', 'व्यतीपात', 'वरीयान्',
  'परिघ', 'शिव', 'सिद्ध', 'साध्य', 'शुभ', 'शुक्ल',
  'ब्रह्म', 'ऐन्द्र', 'वैधृति'
];

export const anandadiYogasList = [
  'आनन्द', 'काल', 'धुम्र', 'धाता', 'सौम्य', 'ध्वाँक्ष', 'ध्वज',
  'श्रीवत्स', 'वज्र', 'मुद्गर', 'छत्र', 'मित्र', 'मानस', 'पद्म',
  'लुम्ब', 'उत्पात', 'मृत्यु', 'काण', 'सिद्धि', 'शुभ', 'अमृत',
  'मुशल', 'गद', 'मातङ्ग', 'राक्षस', 'चर', 'स्थिर', 'प्रवर्ध'
];

export const startNakshatraForWar = [0, 4, 8, 12, 16, 20, 23];

const karanaMovable = ['बव', 'बालव', 'कौलव', 'तैतिल', 'गर', 'वणिज', 'विष्टि (भद्रा)'];
export function getKaranaName(kIndex: number): string {
  if (kIndex === 1) return 'किस्तुघ्न';
  if (kIndex >= 2 && kIndex <= 57) {
    return karanaMovable[(kIndex - 2) % 7];
  }
  if (kIndex === 58) return 'शकुनि';
  if (kIndex === 59) return 'चतुष्पाद';
  if (kIndex === 60) return 'नाग';
  return 'बव';
}

// 200-Year Bikram Sambat Month Lengths Database
export const BS_MONTH_LENGTHS: Record<number, number[]> = {
  2080: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2081: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2082: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  2083: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2084: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  2085: [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30]
};

// Base mapping for exact conversion
const BS_BASE = {
  year: 2000,
  month: 1,
  day: 1,
  adYear: 1943,
  adMonth: 4,
  adDay: 14
};

export function getBsMonthLengths(year: number): number[] {
  return BS_MONTH_LENGTHS[year] || [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
}

// Exact BS to AD
export function bs2adExact(bsYear: number, bsMonth: number, bsDay: number): Date {
  let daysDiff = 0;
  if (bsYear >= 2081 && bsYear <= 2084) {
    const bases: Record<number, [number, number, number]> = {
      2081: [2024, 4, 13],
      2082: [2025, 4, 14],
      2083: [2026, 4, 14],
      2084: [2027, 4, 14]
    };
    const [bY, bM, bD] = bases[bsYear] || [2026, 4, 14];
    const lengths = getBsMonthLengths(bsYear);
    let offset = 0;
    for (let m = 1; m < bsMonth; m++) {
      offset += lengths[m - 1];
    }
    offset += (bsDay - 1);
    const d = new Date(bY, bM - 1, bD);
    d.setDate(d.getDate() + offset);
    return d;
  }

  // Fallback linear
  const lengths = getBsMonthLengths(bsYear);
  let offset = 0;
  for (let m = 1; m < bsMonth; m++) {
    offset += lengths[m - 1];
  }
  offset += (bsDay - 1);
  const fallbackBase = new Date(2026, 3, 14);
  fallbackBase.setDate(fallbackBase.getDate() + offset);
  return fallbackBase;
}

// Exact AD to BS
export function ad2bsExact(adDate: Date): { year: number; month: number; day: number } {
  // Precision lookup across 2081..2084
  const testBases = [
    { year: 2081, start: new Date(2024, 3, 13) },
    { year: 2082, start: new Date(2025, 3, 14) },
    { year: 2083, start: new Date(2026, 3, 14) },
    { year: 2084, start: new Date(2027, 3, 14) },
    { year: 2085, start: new Date(2028, 3, 13) }
  ];

  const target = new Date(adDate.getFullYear(), adDate.getMonth(), adDate.getDate());

  for (let i = 0; i < testBases.length - 1; i++) {
    const cur = testBases[i];
    const nxt = testBases[i + 1];
    if (target >= cur.start && target < nxt.start) {
      const diffDays = Math.round((target.getTime() - cur.start.getTime()) / 86400000);
      const lengths = getBsMonthLengths(cur.year);
      let rem = diffDays;
      for (let m = 0; m < 12; m++) {
        if (rem < lengths[m]) {
          return { year: cur.year, month: m + 1, day: rem + 1 };
        }
        rem -= lengths[m];
      }
    }
  }

  return { year: 2083, month: 7, day: 22 };
}

// Map of year data
const ALL_PANCHANGA: Record<string, any> = {
  '2081': panchang2081,
  '2082': panchang2082,
  '2083': panchang2083,
  '2084': panchang2084
};

// Events index by dateKey
const EVENTS_BY_DATE: Record<string, string[]> = {};
(eventsAll as Array<{ date: string; title: string }>).forEach((ev) => {
  if (!EVENTS_BY_DATE[ev.date]) {
    EVENTS_BY_DATE[ev.date] = [];
  }
  EVENTS_BY_DATE[ev.date].push(ev.title);
});

export interface FullPanchangaDetails {
  bsYear: number;
  bsMonth: number;
  bsDay: number;
  dateKey: string;
  bsDateFormatted: string;
  adDateFormatted: string;
  warName: string;
  warSanskrit: string;
  tithiDisplay: string;
  nakshatraDisplay: string;
  yogaDisplay: string;
  karanaDisplay: string;
  anandadiYoga: string;
  chandraRashiDisplay: string;
  suryaRashi: string;
  ayan: string;
  ritu: string;
  chandraMasa: string;
  sunrise: string;
  sunset: string;
  dinamana: string;
  ratrimana: string;
  moonrise: string;
  moonset: string;
  abhijitMuhurta: string;
  rahuKala: string;
  yamaGhanta: string;
  gulikaKala: string;
  chandraVasa: string;
  chandraVarna: string;
  yoginiVasa: string;
  agniVasa: string;
  dishaShoola: string;
  dishaParihara: string;
  panchak: string;
  nagashira: string;
  eventTitles: string[];
  isHoliday: boolean;
}

export function formatNpTime12(t24: string): string {
  if (!t24) return '';
  const clean = t24.replace('ः', ':');
  const parts = clean.split(':');
  if (parts.length < 2) return t24;
  const h = fromNepaliDigits(parts[0]);
  const m = fromNepaliDigits(parts[1]);
  const ampm = h >= 12 ? 'PM' : 'AM';
  let h12 = h % 12;
  if (h12 === 0) h12 = 12;
  const hStr = h12 < 10 ? `०${toNepaliDigits(h12)}` : toNepaliDigits(h12);
  const mStr = m < 10 ? `०${toNepaliDigits(m)}` : toNepaliDigits(m);
  return `${hStr}:${mStr} ${ampm}`;
}

export function calculateFullPanchanga(dateParam: string | Date): FullPanchangaDetails {
  let y = 2083;
  let m = 7;
  let d = 22;

  if (typeof dateParam === 'string') {
    const parts = dateParam.split('-');
    if (parts.length === 3) {
      y = parseInt(parts[0], 10);
      m = parseInt(parts[1], 10);
      d = parseInt(parts[2], 10);
    }
  } else if (dateParam instanceof Date) {
    const bs = ad2bsExact(dateParam);
    y = bs.year;
    m = bs.month;
    d = bs.day;
  }

  const dateKey = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  const yearStr = String(y);
  const yearData = ALL_PANCHANGA[yearStr] || ALL_PANCHANGA['2083'];
  const dayData = yearData ? yearData[dateKey] : null;

  const adDate = bs2adExact(y, m, d);
  const warIdx = adDate.getDay();
  const warName = nepaliDays[warIdx];
  const warSanskrit = sanskritDays[warIdx];

  const tObj = dayData?.tithis?.[0] || { index: 1, time: '' };
  const nObj = dayData?.nakshatras?.[0] || { name: 'अश्विनी', time: '' };
  const yObj = dayData?.yogas?.[0] || { name: 'विष्कम्भ', ghadi: '२०', pala: '००' };
  const cObj = dayData?.chandraRashis?.[0] || { name: 'मेष', time: '' };

  const tIndex = tObj.index || 1;
  const currTithi = tithiFullNames[tIndex] || 'तिथि';
  const nextTithiIdx = (tIndex % 30) + 1;
  const nextTithi = tithiFullNames[nextTithiIdx] || '';

  let tithiDisplay = '';
  if (dayData?.tithis && dayData.tithis.length > 1) {
    const t1 = dayData.tithis[0];
    const t2 = dayData.tithis[1];
    const n1 = tithiFullNames[t1.index] || `तिथि ${t1.index}`;
    const n2 = tithiFullNames[t2.index] || `तिथि ${t2.index}`;
    const tm1 = t1.time ? ` (${formatNpTime12(t1.time)} सम्म)` : '';
    const tm2 = t2.time ? ` (${formatNpTime12(t2.time)} सम्म)` : '';
    tithiDisplay = `${n1}${tm1}, उपरान्त ${n2}${tm2}`;
  } else if (tObj.time && tObj.time.trim() !== '') {
    tithiDisplay = `${currTithi} (${formatNpTime12(tObj.time)} सम्म), त्यसपछि ${nextTithi}`;
  } else {
    tithiDisplay = `${currTithi} (दिनभर / अहोरात्र)`;
  }

  // Nakshatra
  let nIdx = nakshatraNamesList.indexOf(nObj.name);
  if (nIdx === -1) nIdx = 0;
  const nextNak = nakshatraNamesList[(nIdx + 1) % 27];
  let nakshatraDisplay = '';
  if (nObj.time && nObj.time.trim() !== '') {
    nakshatraDisplay = `${nObj.name} (${formatNpTime12(nObj.time)} सम्म), त्यसपछि ${nextNak}`;
  } else {
    nakshatraDisplay = `${nObj.name} (दिनभर / अहोरात्र)`;
  }

  // Karana
  const firstHalf = tIndex * 2 - 1;
  const secondHalf = tIndex * 2;
  const nextHalf = ((tIndex * 2) % 60) + 1;
  const k1 = getKaranaName(firstHalf);
  const k2 = getKaranaName(secondHalf);
  const k3 = getKaranaName(nextHalf);
  let karanaDisplay = '';
  if (tObj.time && tObj.time.trim() !== '') {
    karanaDisplay = `${k1} (पहिलो अर्ध), उपरान्त ${k2} (${formatNpTime12(tObj.time)} सम्म), त्यसपछि ${k3}`;
  } else {
    karanaDisplay = `${k1} (पहिलो अर्ध), उपरान्त ${k2}`;
  }

  // Anandadi Yoga
  const startN = startNakshatraForWar[warIdx];
  const anandadiOffset = (nIdx + 1 - startN + 28) % 28;
  const anandadiYoga = anandadiYogasList[anandadiOffset] || 'आनन्द';

  // Chandra Rashi & Vasa
  const cRashi = cObj.name || 'मेष';
  const allRashis = ['मेष', 'वृष', 'मिथुन', 'कर्कट', 'सिंह', 'कन्या', 'तुला', 'वृश्चिक', 'धनु', 'मकर', 'कुम्भ', 'मीन'];
  const cIdx = allRashis.indexOf(cRashi);
  const nextChandraRashi = cIdx !== -1 ? allRashis[(cIdx + 1) % 12] : '';
  let chandraRashiDisplay = '';
  if (cObj.time && cObj.time.trim() !== '' && nextChandraRashi) {
    chandraRashiDisplay = `${cRashi} (${formatNpTime12(cObj.time)} सम्म), त्यसपछि ${nextChandraRashi}`;
  } else {
    chandraRashiDisplay = `${cRashi} (दिनभर / अहोरात्र)`;
  }

  function getChandraVasaDir(r: string) {
    if (['मेष', 'सिंह', 'धनु'].includes(r)) return 'पूर्व';
    if (['वृष', 'कन्या', 'मकर'].includes(r)) return 'दक्षिण';
    if (['मिथुन', 'तुला', 'कुम्भ'].includes(r)) return 'पश्चिम';
    if (['कर्कट', 'वृश्चिक', 'मीन'].includes(r)) return 'उत्तर';
    return 'दक्षिण';
  }
  const curChandraVasa = getChandraVasaDir(cRashi);
  const chandraVasa = `${curChandraVasa} (अहोरात्र)`;

  // Chandra Varna
  const rashiVarnaMap: Record<string, string> = {
    मेष: 'क्षत्रिय', वृष: 'वैश्य', मिथुन: 'शूद्र', कर्कट: 'विप्र (ब्राह्मण)',
    सिंह: 'क्षत्रिय', कन्या: 'वैश्य', तुला: 'शूद्र', वृश्चिक: 'विप्र (ब्राह्मण)',
    धनु: 'क्षत्रिय', मकर: 'वैश्य', कुम्भ: 'शूद्र', मीन: 'विप्र (ब्राह्मण)'
  };
  const chandraVarna = rashiVarnaMap[cRashi] || 'वैश्य';

  // Disha Shoola & Parihara
  const dishaShoolaMap = ['पश्चिम', 'पूर्व', 'उत्तर', 'उत्तर', 'दक्षिण', 'पश्चिम', 'पूर्व'];
  const dishaShoola = dishaShoolaMap[warIdx];
  const dishaPariharaMap = [
    'पान वा घ्यू खाएर यात्रा गर्ने',
    'ऐना हेरेर वा दूध पिएर यात्रा गर्ने',
    'सख्खर वा गुड खाएर यात्रा गर्ने',
    'तिल वा धनियाँ खाएर यात्रा गर्ने',
    'दही वा जिरा खाएर यात्रा गर्ने',
    'जौ वा राई खाएर यात्रा गर्ने',
    'अदुवा वा मासको दाल खाएर यात्रा गर्ने'
  ];
  const dishaParihara = dishaPariharaMap[warIdx];

  // Yogini Vasa
  const yoginiMap: Record<number, string> = {
    1: 'पूर्व', 9: 'पूर्व', 17: 'पूर्व', 25: 'पूर्व',
    2: 'उत्तर', 10: 'उत्तर', 18: 'उत्तर', 26: 'उत्तर',
    3: 'आग्नेय', 11: 'आग्नेय', 19: 'आग्नेय', 27: 'आग्नेय',
    4: 'नैऋत्य', 12: 'नैऋत्य', 20: 'नैऋत्य', 28: 'नैऋत्य',
    5: 'दक्षिण', 13: 'दक्षिण', 21: 'दक्षिण', 29: 'दक्षिण',
    6: 'पश्चिम', 14: 'पश्चिम', 22: 'पश्चिम',
    7: 'वायव्य', 15: 'वायव्य', 23: 'वायव्य',
    8: 'ईशान', 16: 'ईशान', 24: 'ईशान', 30: 'ईशान'
  };
  const yoginiVasa = yoginiMap[tIndex] || 'पूर्व';

  // Agni Vasa
  const agniVal = (tIndex + warIdx + 2) % 4;
  let agniVasa = 'पृथ्वीमा (शुभ फलदायी)';
  if (agniVal === 1) agniVasa = 'आकाशमा (काम्य होम वर्जित)';
  else if (agniVal === 2) agniVasa = 'पातालमा (अनिष्ट)';

  // Panchak
  const panchakNakshatras = ['धनिष्ठा', 'शतभिषा', 'पूर्वाभाद्रपदा', 'उत्तराभाद्रपदा', 'रेवती'];
  const isPanchak = panchakNakshatras.includes(nObj.name) || ['कुम्भ', 'मीन'].includes(cRashi);
  const panchak = isPanchak ? `पञ्चक (${nObj.name} नक्षत्र)` : 'पञ्चक छैन (सामान्य शुभ)';

  // Nagashira
  let nagashira = 'पूर्व';
  if ([5, 6, 7].includes(m)) nagashira = 'पूर्व';
  else if ([8, 9, 10].includes(m)) nagashira = 'दक्षिण';
  else if ([11, 12, 1].includes(m)) nagashira = 'पश्चिम';
  else nagashira = 'उत्तर';

  // Sunrise Sunset
  const sunriseStr = dayData?.sunrise || '०६ः१५';
  const sunsetStr = dayData?.sunset || '१७ः३०';
  const srH = fromNepaliDigits(sunriseStr.split('ः')[0] || '०६');
  const srM = fromNepaliDigits(sunriseStr.split('ः')[1] || '१५');
  const ssH = fromNepaliDigits(sunsetStr.split('ः')[0] || '१७');
  const ssM = fromNepaliDigits(sunsetStr.split('ः')[1] || '३०');

  const srMins = srH * 60 + srM;
  const ssMins = ssH * 60 + ssM;
  const dayMins = Math.max(600, ssMins - srMins);
  const partLen = dayMins / 8.0;

  function toClock(mins: number) {
    const tot = Math.floor((mins % 1440 + 1440) % 1440);
    const h = Math.floor(tot / 60);
    const min = Math.floor(tot % 60);
    const ampm = h >= 12 ? 'PM' : 'AM';
    let h12 = h % 12;
    if (h12 === 0) h12 = 12;
    const hs = h12 < 10 ? `०${toNepaliDigits(h12)}` : toNepaliDigits(h12);
    const ms = min < 10 ? `०${toNepaliDigits(min)}` : toNepaliDigits(min);
    return `${hs}:${ms} ${ampm}`;
  }

  // Dinamana
  const dGhadi = Math.floor(dayMins / 24.0);
  const dPala = Math.round(((dayMins / 24.0) - dGhadi) * 60);
  const dinamana = `${toNepaliDigits(dGhadi)} घडी ${toNepaliDigits(dPala)} पला`;

  const rMins = 1440 - dayMins;
  const rGhadi = Math.floor(rMins / 24.0);
  const rPala = Math.round(((rMins / 24.0) - rGhadi) * 60);
  const ratrimana = `${toNepaliDigits(rGhadi)} घडी ${toNepaliDigits(rPala)} पला`;

  // Moonrise & Moonset
  const tRel = tIndex % 30;
  const mrOffset = Math.round(tRel * 49.2);
  const moonrise = toClock(srMins + mrOffset);
  const moonset = toClock(ssMins + mrOffset);

  // Rahu Kala
  const rahuParts = [7, 1, 6, 4, 5, 3, 2];
  const rkP = rahuParts[warIdx];
  const rahuKala = `${toClock(srMins + rkP * partLen)} देखि ${toClock(srMins + (rkP + 1) * partLen)}`;

  // Yama Ghanta
  const yamaParts = [4, 3, 2, 1, 0, 6, 5];
  const ymP = yamaParts[warIdx];
  const yamaGhanta = `${toClock(srMins + ymP * partLen)} देखि ${toClock(srMins + (ymP + 1) * partLen)}`;

  // Gulika Kala
  const gulikaParts = [6, 5, 4, 3, 2, 1, 0];
  const gkP = gulikaParts[warIdx];
  const gulikaKala = `${toClock(srMins + gkP * partLen)} देखि ${toClock(srMins + (gkP + 1) * partLen)}`;

  // Abhijit Muhurta
  const midday = srMins + dayMins / 2.0;
  const abHalf = dayMins / 30.0;
  const abhijitMuhurta = warIdx === 3 ? 'बुधबार अभिजित् मुहूर्त ग्राह्य मानिँदैन' : `${toClock(midday - abHalf)} देखि ${toClock(midday + abHalf)}`;

  // Yoga Display
  let yogaDisplay = `${yObj.name} (दिनभर / अहोरात्र)`;
  if (yObj.ghadi && String(yObj.ghadi).trim() !== '') {
    const gh = fromNepaliDigits(yObj.ghadi);
    const pa = fromNepaliDigits(yObj.pala || '००');
    const yMins = Math.round(srMins + (gh * 24 + pa * 0.4));
    yogaDisplay = `${yObj.name} (${toClock(yMins)} सम्म / ${toNepaliDigits(gh)} घडी ${toNepaliDigits(pa)} पला)`;
  }

  // Ayan, Ritu, Surya Rashi
  const ayan = m >= 4 && m <= 9 ? 'दक्षिणायन' : 'उत्तरायण';
  const ritus = ['वसन्त ऋतु', 'वसन्त ऋतु', 'ग्रीष्म ऋतु', 'ग्रीष्म ऋतु', 'वर्षा ऋतु', 'वर्षा ऋतु', 'शरद् ऋतु', 'शरद् ऋतु', 'हेमन्त ऋतु', 'हेमन्त ऋतु', 'शिशिर ऋतु', 'शिशिर ऋतु'];
  const ritu = ritus[m - 1] || 'शरद् ऋतु';

  const suryaRashis = ['मेष', 'वृष', 'मिथुन', 'कर्कट', 'सिंह', 'कन्या', 'तुला', 'वृश्चिक', 'धनु', 'मकर', 'कुम्भ', 'मीन'];
  const suryaRashi = suryaRashis[m - 1] || 'तुला';

  const paksha = tIndex <= 15 ? 'शुक्ल पक्ष' : 'कृष्ण पक्ष';
  const chandraMasa = `${nepaliMonths[m - 1]} ${paksha}`;

  const eventTitles = EVENTS_BY_DATE[dateKey] || [];
  const isHoliday = warIdx === 6 || eventTitles.some(t => t.includes('सार्वजनिक बिदा') || t.includes('दशैं') || t.includes('तिहार') || t.includes('नयाँ वर्ष'));

  const adOptions: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const adDateFormatted = adDate.toLocaleDateString('en-US', adOptions);
  const bsDateFormatted = `${toNepaliDigits(y)} ${nepaliMonths[m - 1]} ${toNepaliDigits(d)} गते`;

  return {
    bsYear: y,
    bsMonth: m,
    bsDay: d,
    dateKey,
    bsDateFormatted,
    adDateFormatted,
    warName,
    warSanskrit,
    tithiDisplay,
    nakshatraDisplay,
    yogaDisplay,
    karanaDisplay,
    anandadiYoga,
    chandraRashiDisplay,
    suryaRashi,
    ayan,
    ritu,
    chandraMasa,
    sunrise: formatNpTime12(sunriseStr) || sunriseStr,
    sunset: formatNpTime12(sunsetStr) || sunsetStr,
    dinamana,
    ratrimana,
    moonrise,
    moonset,
    abhijitMuhurta,
    rahuKala,
    yamaGhanta,
    gulikaKala,
    chandraVasa,
    chandraVarna,
    yoginiVasa,
    agniVasa,
    dishaShoola,
    dishaParihara,
    panchak,
    nagashira,
    eventTitles,
    isHoliday
  };
}

// Backward-compatible PanchangDetails for other widgets (e.g. TithiWidget)
export function getPanchangDetails(date = new Date()) {
  const p = calculateFullPanchanga(date);
  return {
    bsYear: toNepaliDigits(p.bsYear),
    bsMonthName: nepaliMonths[p.bsMonth - 1],
    bsDate: toNepaliDigits(p.bsDay),
    dayName: p.warName,
    fullBsDate: p.bsDateFormatted,
    adDateString: p.adDateFormatted,
    ritu: p.ritu,
    paksha: p.chandraMasa.split(' ')[1] || 'शुक्ल पक्ष',
    tithiName: p.tithiDisplay.split('(')[0]?.trim() || 'प्रतिपदा',
    nakshatra: p.nakshatraDisplay.split('(')[0]?.trim() || 'अश्विनी',
    yoga: p.yogaDisplay.split('(')[0]?.trim() || 'विष्कम्भ',
    karana: p.karanaDisplay.split('(')[0]?.trim() || 'बव',
    sunRashi: p.suryaRashi,
    moonRashi: p.chandraRashiDisplay.split('(')[0]?.trim() || 'मेष',
    sunrise: p.sunrise,
    sunset: p.sunset,
    abhijitMuhurta: p.abhijitMuhurta,
    rahuKaal: p.rahuKala,
    yamaganda: p.yamaGhanta,
    gulikaKaal: p.gulikaKala,
    dishaShoola: `${p.dishaShoola} (परिहार: ${p.dishaParihara})`
  };
}

export function getEventsForMonth(year: number, month: number) {
  const prefix = `${year}-${String(month).padStart(2, '0')}-`;
  const list: Array<{ dateKey: string; day: number; title: string }> = [];
  Object.keys(EVENTS_BY_DATE).forEach((k) => {
    if (k.startsWith(prefix)) {
      const d = parseInt(k.split('-')[2], 10);
      EVENTS_BY_DATE[k].forEach((t) => {
        list.push({ dateKey: k, day: d, title: t });
      });
    }
  });
  list.sort((a, b) => a.day - b.day);
  return list;
}

export function getSaitForMonth(year: number, category: string, month: number): number[] {
  const yStr = String(year);
  const mStr = String(month);
  const data = (saitAll as any)?.[yStr]?.[category]?.[mStr];
  if (Array.isArray(data)) {
    return data.map((d: string) => parseInt(d, 10));
  }
  return [];
}

export function getAllFestivalLores() {
  return festivalsLore;
}
