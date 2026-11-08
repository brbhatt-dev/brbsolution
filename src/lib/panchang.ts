// Vedic Panchanga Calculator Engine - Powered by BR Patro Astrological Engine
// Re-exporting from the authentic BR Patro Engine

export { 
  calculateFullPanchanga, 
  getPanchangDetails,
  type FullPanchangaDetails 
} from './brPatroEngine';

export interface PanchangDetails {
  bsYear: string;
  bsMonthName: string;
  bsDate: string;
  dayName: string;
  fullBsDate: string;
  adDateString: string;
  ritu: string;
  paksha: string;
  tithiName: string;
  nakshatra: string;
  yoga: string;
  karana: string;
  sunRashi: string;
  moonRashi: string;
  sunrise: string;
  sunset: string;
  abhijitMuhurta: string;
  rahuKaal: string;
  yamaganda: string;
  gulikaKaal: string;
  dishaShoola: string;
}
