// Vedic Panchanga Calculator Engine inspired by Brihat Karmakanda (Swiss Ephemeris principles)
// Calculates: Tithi, Vara, Nakshatra, Yoga, Karana, Sunrise, Sunset, Sun & Moon Sign, Rahu Kaal, Abhijit Muhurta
// @ts-ignore
import NepaliDate from 'nepali-date-converter';
import { toNepaliDigits, nepaliMonths, nepaliDays } from './nepaliDate';

export interface PanchangDetails {
  // Calendar Details
  bsYear: string;
  bsMonthName: string;
  bsDate: string;
  dayName: string;
  fullBsDate: string;
  adDateString: string;
  ritu: string;

  // 5 Limbs of Panchanga (पञ्चाङ्गका ५ अङ्ग)
  paksha: string;
  tithiName: string;
  nakshatra: string;
  yoga: string;
  karana: string;

  // Solar & Lunar Signs (सूर्य र चन्द्र राशि)
  sunRashi: string;
  moonRashi: string;
  sunrise: string;
  sunset: string;

  // Auspicious & Inauspicious Muhurtas (मुहूर्त तथा काल)
  abhijitMuhurta: string;
  rahuKaal: string;
  yamaganda: string;
  gulikaKaal: string;
  dishaShoola: string;
}

const NAKSHATRAS = [
  'अश्विनी', 'भरणी', 'कृत्तिका', 'रोहिणी', 'मृगशिरा', 'आर्द्रा',
  'पुनर्वसु', 'पुष्य', 'अश्लेषा', 'मघा', 'पूर्वाफाल्गुनी', 'उत्तराफाल्गुनी',
  'हस्त', 'चित्रा', 'स्वाती', 'विशाखा', 'अनुराधा', 'ज्येष्ठा',
  'मूल', 'पूर्वाषाढा', 'उत्तराषाढा', 'श्रवण', 'धनिष्ठा', 'शतभिषा',
  'पूर्वाभाद्रपदा', 'उत्तराभाद्रपदा', 'रेवती'
];

const RASHIS = [
  'मेष', 'वृष', 'मिथुन', 'कर्कट', 'सिंह', 'कन्या',
  'तुला', 'वृश्चिक', 'धनु', 'मकर', 'कुम्भ', 'मीन'
];

const YOGAS = [
  'विष्कम्भ', 'प्रीति', 'आयुष्मान्', 'सौभाग्य', 'शोभन', 'अतिगण्ड',
  'सुकर्मा', 'धृति', 'शूल', 'गण्ड', 'वृद्धि', 'ध्रुव',
  'व्याघात', 'हर्षण', 'वज्र', 'असृक्', 'व्यतीपात', 'वरीयान्',
  'परिघ', 'शिव', 'सिद्ध', 'साध्य', 'शुभ', 'शुक्ल',
  'ब्रह्म', 'ऐन्द्र', 'वैधृति'
];

const KARANAS_MOVABLE = ['बव', 'बालव', 'कौलव', 'तैतिल', 'गर', 'वणिज', 'विष्टि (भद्रा)'];

const DISHA_SHOOLA = [
  'पश्चिम (आइतबार)',
  'पूर्व (सोमबार)',
  'उत्तर (मङ्गलबार)',
  'उत्तर (बुधबार)',
  'दक्षिण (बिहीबार)',
  'पश्चिम (शुक्रबार)',
  'पूर्व (शनिबार)'
];

// Rahu Kaal standard time slots for Nepal (approx based on sunrise/sunset)
const RAHU_KAAL_SLOTS = [
  '०४:३० PM - ०६:०० PM', // Sun
  '०७:३० AM - ०९:०० AM', // Mon
  '०३:०० PM - ०४:३० PM', // Tue
  '१२:०० PM - ०१:३० PM', // Wed
  '०१:३० PM - ०३:०० PM', // Thu
  '१०:३० AM - १२:०० PM', // Fri
  '०९:०० AM - १०:३० AM', // Sat
];

const YAMAGANDA_SLOTS = [
  '१२:०० PM - ०१:३० PM', // Sun
  '१०:३० AM - १२:०० PM', // Mon
  '०९:०० AM - १०:३० AM', // Tue
  '०७:३० AM - ०९:०० AM', // Wed
  '०६:०० AM - ०७:३० AM', // Thu
  '०३:०० PM - ०४:३० PM', // Fri
  '०१:३० PM - ०३:०० PM', // Sat
];

const GULIKA_SLOTS = [
  '०३:०० PM - ०४:३० PM', // Sun
  '०१:३० PM - ०३:०० PM', // Mon
  '१२:०० PM - ०१:३० PM', // Tue
  '१०:३० AM - १२:०० PM', // Wed
  '०९:०० AM - १०:३० AM', // Thu
  '०७:३० AM - ०९:०० AM', // Fri
  '०६:०० AM - ०७:३० AM', // Sat
];

// NOAA Astronomical Algorithm for accurate Kathmandu Sunrise / Sunset
function calculateSolarTimes(date: Date, lat = 27.7172, lon = 85.3240, tzOffsetMin = 345) {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

  const gamma = (2 * Math.PI / 365) * (dayOfYear - 1 + 6 / 24);
  const eqtime = 229.18 * (
    0.000075 +
    0.001868 * Math.cos(gamma) -
    0.032077 * Math.sin(gamma) -
    0.014615 * Math.cos(2 * gamma) -
    0.040849 * Math.sin(2 * gamma)
  );

  const decl = 0.006918 -
    0.399912 * Math.cos(gamma) +
    0.070257 * Math.sin(gamma) -
    0.006758 * Math.cos(2 * gamma) +
    0.000907 * Math.sin(2 * gamma) -
    0.002697 * Math.cos(3 * gamma) +
    0.00148 * Math.sin(3 * gamma);

  const latRad = lat * Math.PI / 180;
  const zenithRad = 90.833 * Math.PI / 180; // Atmospheric refraction zenith
  const cosHa = (Math.cos(zenithRad) / (Math.cos(latRad) * Math.cos(decl))) - (Math.tan(latRad) * Math.tan(decl));
  const haRad = Math.acos(Math.max(-1, Math.min(1, cosHa)));
  const haDeg = haRad * 180 / Math.PI;

  const sunriseMin = 720 - 4 * (lon + haDeg) - eqtime + tzOffsetMin;
  const sunsetMin = 720 - 4 * (lon - haDeg) - eqtime + tzOffsetMin;

  function formatNepaliTime(m: number) {
    const hours = Math.floor(m / 60);
    const mins = Math.floor(m % 60);
    const h12 = hours % 12 || 12;
    const ampm = hours < 12 ? 'AM' : 'PM';
    const hStr = h12 < 10 ? `०${toNepaliDigits(h12)}` : toNepaliDigits(h12);
    const mStr = mins < 10 ? `०${toNepaliDigits(mins)}` : toNepaliDigits(mins);
    return `${hStr}:${mStr} ${ampm}`;
  }

  // Abhijit Muhurta: 8th muhurta of day (midday ~48 mins window)
  const noonMin = (sunriseMin + sunsetMin) / 2;
  const abhijitStart = formatNepaliTime(noonMin - 24);
  const abhijitEnd = formatNepaliTime(noonMin + 24);

  return {
    sunrise: formatNepaliTime(sunriseMin),
    sunset: formatNepaliTime(sunsetMin),
    abhijitMuhurta: `${abhijitStart} - ${abhijitEnd}`,
  };
}

export function getPanchangDetails(date = new Date()): PanchangDetails {
  let bsYear = 2083;
  let bsMonth = 5;
  let bsDate = 24;

  try {
    const NepaliDateConstructor = (NepaliDate as any).default || NepaliDate;
    const nd = new NepaliDateConstructor(date);
    bsYear = nd.getYear();
    bsMonth = nd.getMonth();
    bsDate = nd.getDate();
  } catch (err) {
    bsYear = 2083;
    bsMonth = 5;
    bsDate = 24;
  }

  const dayIndex = date.getDay();
  const rad = Math.PI / 180;

  // Days since J2000.0 epoch
  const j2000 = new Date('2000-01-01T12:00:00Z').getTime();
  const d = (date.getTime() - j2000) / (1000 * 60 * 60 * 24);

  // Solar Ecliptic Longitude
  const L_sun = (280.46646 + 0.98564736 * d) % 360;
  const M_sun = ((357.52911 + 0.98560028 * d) % 360) * rad;
  const lambda_sun = (L_sun + 1.914602 * Math.sin(M_sun) + 0.019993 * Math.sin(2 * M_sun) + 360) % 360;

  // Lunar Ecliptic Longitude
  const L_moon = (218.3165 + 13.17639648 * d) % 360;
  const M_moon = ((134.9634 + 13.06499295 * d) % 360) * rad;
  const D_moon = ((297.8502 + 12.19074912 * d) % 360) * rad;
  const lambda_moon = (L_moon + 6.289 * Math.sin(M_moon) + 1.274 * Math.sin(2 * D_moon - M_moon) + 0.658 * Math.sin(2 * D_moon) + 360) % 360;

  // Lahiri Ayanamsha (Chitrapaksha)
  const ayanamsha = 23.85 + (d / 365.25) * (50.29 / 3600);
  const moonSidereal = (lambda_moon - ayanamsha + 360) % 360;
  const sunSidereal = (lambda_sun - ayanamsha + 360) % 360;

  // 1. Tithi (12 degrees elongation)
  const elongation = (lambda_moon - lambda_sun + 360) % 360;
  const tithiIndex = Math.floor(elongation / 12); // 0 to 29
  const paksha = tithiIndex < 15 ? 'शुक्ल पक्ष' : 'कृष्ण पक्ष';

  const tithiNames = [
    'प्रतिपदा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी',
    'षष्ठी', 'सप्तमी', 'अष्टमी', 'नवमी', 'दशमी',
    'एकादशी', 'द्वादशी', 'त्रयोदशी', 'चतुर्दशी', 'पूर्णिमा'
  ];
  let tithiName = tithiNames[tithiIndex % 15];
  if (tithiIndex === 29) {
    tithiName = 'औंसी (अमावस्या)';
  }

  // 2. Nakshatra (13°20' per nakshatra)
  const nakIndex = Math.floor(moonSidereal / (360 / 27));
  const nakshatra = NAKSHATRAS[nakIndex % 27];

  // 3. Yoga (Sum of Sun and Moon longitude / 13°20')
  const yogaIndex = Math.floor(((sunSidereal + moonSidereal) % 360) / (360 / 27));
  const yoga = YOGAS[yogaIndex % 27];

  // 4. Karana (Half of a tithi = 6 degrees)
  const karanaIndex = Math.floor(elongation / 6); // 0 to 59
  let karana = '';
  if (karanaIndex === 0) {
    karana = 'किंस्तुघ्न';
  } else if (karanaIndex >= 57) {
    const fixed = ['शकुनि', 'चतुष्पाद', 'नाग'];
    karana = fixed[karanaIndex - 57];
  } else {
    karana = KARANAS_MOVABLE[(karanaIndex - 1) % 7];
  }

  // 5. Rashi (Moon & Sun Signs)
  const moonRashi = RASHIS[Math.floor(moonSidereal / 30) % 12];
  const sunRashi = RASHIS[Math.floor(sunSidereal / 30) % 12];

  // Ritu
  const rituNames = ['ग्रीष्म', 'वर्षा', 'शरद', 'हेमन्त', 'शिशिर', 'वसन्त'];
  const ritu = rituNames[Math.floor(bsMonth / 2)] || 'शरद';

  // Solar times & Muhurtas
  const solar = calculateSolarTimes(date);

  const formattedDate = bsDate < 10 ? `०${toNepaliDigits(bsDate)}` : toNepaliDigits(bsDate);
  const monthName = nepaliMonths[bsMonth] || 'असोज';
  const dayName = nepaliDays[dayIndex] || 'शनिबार';

  return {
    bsYear: toNepaliDigits(bsYear),
    bsMonthName: monthName,
    bsDate: formattedDate,
    dayName,
    fullBsDate: `वि.सं. ${toNepaliDigits(bsYear)} ${monthName} ${formattedDate} गते, ${dayName}`,
    adDateString: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    ritu,

    paksha,
    tithiName,
    nakshatra,
    yoga,
    karana,

    sunRashi,
    moonRashi,
    sunrise: solar.sunrise,
    sunset: solar.sunset,

    abhijitMuhurta: solar.abhijitMuhurta,
    rahuKaal: RAHU_KAAL_SLOTS[dayIndex],
    yamaganda: YAMAGANDA_SLOTS[dayIndex],
    gulikaKaal: GULIKA_SLOTS[dayIndex],
    dishaShoola: DISHA_SHOOLA[dayIndex],
  };
}
