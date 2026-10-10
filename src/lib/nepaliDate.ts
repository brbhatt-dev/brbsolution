// @ts-ignore
import NepaliDate from 'nepali-date-converter';
import { getPanchangDetails } from './panchang';

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
  nakshatra?: string;
  yoga?: string;
  karana?: string;
  sunrise?: string;
  sunset?: string;
  moonRashi?: string;
  sunRashi?: string;
  abhijitMuhurta?: string;
  rahuKaal?: string;
  yamaganda?: string;
  gulikaKaal?: string;
  dishaShoola?: string;
}

export function getNepaliCalendarDetails(date = new Date()): NepaliCalendarDetails {
  return getPanchangDetails(date);
}
