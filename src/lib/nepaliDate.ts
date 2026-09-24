// @ts-ignore
import NepaliDate from 'nepali-date-converter';

const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

export function toNepaliDigits(num: number | string): string {
  return String(num).replace(/[0-9]/g, (d) => nepaliDigits[parseInt(d, 10)]);
}

export const nepaliMonths = [
  'वैशाख', 'जेठ', 'असार', 'साउन', 'भदौ', 'असोज',
  'कात्तिक', 'मङ्सिर', 'पुस', 'माघ', 'फागुन', 'चैत'
];

export const nepaliDays = [
  'आइतबार', 'सोमबार', 'मङ्गलबार', 'बुधबार', 'बिहीबार', 'शुक्रबार', 'शनिबार'
];

export interface NepaliCalendarDetails {
  bsYear: string;
  bsMonthName: string;
  bsDate: string;
  dayName: string;
  paksha: string;
  tithiName: string;
  fullBsDate: string;
  adDateString: string;
  ritu: string;
}

export function getNepaliCalendarDetails(date = new Date()): NepaliCalendarDetails {
  let bsYear = 2083;
  let bsMonth = 5; // 0-indexed, 5 is Ashwin/Asoj
  let bsDate = 8;
  
  try {
    const nd = new (NepaliDate as any)(date);
    bsYear = nd.getYear();
    bsMonth = nd.getMonth();
    bsDate = nd.getDate();
  } catch (err) {
    // Fallback if conversion fails
    bsYear = 2083;
    bsMonth = 5;
    bsDate = 8;
  }

  const dayIndex = date.getDay();

  // Lunar Tithi calculation (synodic month = 29.53058867 days)
  const synodicMonth = 29.53058867;
  const refDate = new Date('2000-01-06T18:14:00Z').getTime();
  const diffDays = (date.getTime() - refDate) / (1000 * 60 * 60 * 24);
  const lunarAge = ((diffDays % synodicMonth) + synodicMonth) % synodicMonth;
  const tithiIndex = Math.floor((lunarAge / synodicMonth) * 30); // 0 to 29
  
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

  // Nepali Ritu calculation (6 seasons: 2 months each)
  const rituNames = ['वसन्त', 'ग्रीष्म', 'वर्षा', 'शरद', 'हेमन्त', 'शिशिर'];
  const ritu = rituNames[Math.floor(bsMonth / 2)] || 'शरद';

  const formattedDate = bsDate < 10 ? `०${toNepaliDigits(bsDate)}` : toNepaliDigits(bsDate);
  const monthName = nepaliMonths[bsMonth] || 'असोज';
  const dayName = nepaliDays[dayIndex] || 'बिहीबार';

  return {
    bsYear: toNepaliDigits(bsYear),
    bsMonthName: monthName,
    bsDate: formattedDate,
    dayName,
    paksha,
    tithiName,
    fullBsDate: `वि.सं. ${toNepaliDigits(bsYear)} ${monthName} ${formattedDate} गते, ${dayName}`,
    adDateString: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    ritu,
  };
}
