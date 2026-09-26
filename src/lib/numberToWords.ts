/**
 * Nepali Number to Words (अक्षरेपी) Converter Library
 * Supports South Asian numbering system (हजार, लाख, करोड, अरब, खरब, शंख)
 * Handles currency (रुपैयाँ, पैसा) and general numbers.
 */

const NEP_ONES = [
  '', 'एक', 'दुई', 'तीन', 'चार', 'पाँच', 'छ', 'सात', 'आठ', 'नौ',
  'दश', 'एघार', 'बाह्र', 'तेह्र', 'चौध', 'पन्ध्र', 'सोह्र', 'सत्र', 'अठार', 'उन्नाइस',
  'बीस', 'एक्काइस', 'बाइस', 'तेइस', 'चौबिस', 'पच्चीस', 'छब्बीस', 'सत्ताइस', 'अठ्ठाइस', 'उनन्तिस',
  'तीस', 'एकत्तिस', 'बत्तीस', 'तेत्तीस', 'चौँतीस', 'पैँतीस', 'छत्तीस', 'सैँतीस', 'अठतीस', 'उनन्चालीस',
  'चालीस', 'एकचालीस', 'बयालीस', 'त्रियालीस', 'चवालीस', 'पैँतालीस', 'छयालीस', 'सच्चालीस', 'अठचालीस', 'उनन्चास',
  'पचास', 'एकाउन्न', 'बाउन्न', 'त्रिपन्न', 'चवन्न', 'पचपन्न', 'छपन्न', 'सन्ताउन्न', 'अन्ठाउन्न', 'उनन्साठी',
  'साठी', 'एकसट्ठी', 'बासट्ठी', 'त्रिसट्ठी', 'चौंसट्ठी', 'पैंसट्ठी', 'छयसट्ठी', 'सतसट्ठी', 'अठसट्ठी', 'उनन्सत्तरी',
  'सत्तरी', 'एकहत्तर', 'बहत्तर', 'त्रिहत्तर', 'चौहत्तर', 'पचहत्तर', 'छयहत्तर', 'सतहत्तर', 'अठहत्तर', 'उनासी',
  'असी', 'एकासी', 'बयासी', 'त्रियासी', 'चौरासी', 'पचासी', 'छयासी', 'सतासी', 'अठासी', 'उनान्नब्बे',
  'नब्बे', 'एकानब्बे', 'बयानब्बे', 'त्रियानब्बे', 'चौरानब्बे', 'पन्चानब्बे', 'छयानब्बे', 'सन्तानब्बे', 'अन्ठानब्बे', 'उनान्सय'
];

const ENG_ONES = [
  '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
  'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
];

const ENG_TENS = [
  '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
];

function engUnderThousand(n: number): string {
  let s = '';
  if (n >= 100) {
    s += ENG_ONES[Math.floor(n / 100)] + ' Hundred ';
    n %= 100;
  }
  if (n >= 20) {
    s += ENG_TENS[Math.floor(n / 10)] + ' ';
    n %= 10;
  }
  if (n > 0) {
    s += ENG_ONES[n] + ' ';
  }
  return s.trim();
}

export function numberToNepaliWords(num: number): string {
  if (isNaN(num) || num === 0) return 'शून्य रुपैयाँ मात्र';

  let n = Math.floor(Math.abs(num));
  let paisa = Math.round((Math.abs(num) - n) * 100);

  if (n === 0 && paisa > 0) {
    return `${NEP_ONES[paisa]} पैसा मात्र`;
  }

  const scales = [
    { value: 100000000000, name: 'खरब' },
    { value: 1000000000, name: 'अरब' },
    { value: 10000000, name: 'करोड' },
    { value: 100000, name: 'लाख' },
    { value: 1000, name: 'हजार' },
    { value: 100, name: 'सय' }
  ];

  let parts: string[] = [];

  for (const scale of scales) {
    if (n >= scale.value) {
      let count = Math.floor(n / scale.value);
      if (count > 0 && count < 100) {
        parts.push(`${NEP_ONES[count]} ${scale.name}`);
      } else if (count >= 100) {
        parts.push(`${numberToNepaliWords(count).replace(' रुपैयाँ मात्र', '')} ${scale.name}`);
      }
      n %= scale.value;
    }
  }

  if (n > 0 && n < 100) {
    parts.push(NEP_ONES[n]);
  }

  let words = parts.join(' ').trim();
  let result = words ? `${words} रुपैयाँ` : '';

  if (paisa > 0 && paisa < 100) {
    result += ` ${NEP_ONES[paisa]} पैसा`;
  }

  return `अक्षेरुपी ${result} मात्र`;
}

export function numberToEnglishWords(num: number): string {
  if (isNaN(num) || num === 0) return 'Zero Rupees Only';

  let n = Math.floor(Math.abs(num));
  let paisa = Math.round((Math.abs(num) - n) * 100);

  if (n === 0 && paisa > 0) {
    return `${engUnderThousand(paisa)} Paisa Only`;
  }

  const scales = [
    { value: 100000000000, name: 'Kharab' },
    { value: 1000000000, name: 'Arab' },
    { value: 10000000, name: 'Crore' },
    { value: 100000, name: 'Lakh' },
    { value: 1000, name: 'Thousand' },
    { value: 100, name: 'Hundred' }
  ];

  let parts: string[] = [];

  for (const scale of scales) {
    if (n >= scale.value) {
      let count = Math.floor(n / scale.value);
      parts.push(`${engUnderThousand(count)} ${scale.name}`);
      n %= scale.value;
    }
  }

  if (n > 0) {
    parts.push(engUnderThousand(n));
  }

  let words = parts.join(' ').trim();
  let result = words ? `${words} Rupees` : '';

  if (paisa > 0) {
    result += ` and ${engUnderThousand(paisa)} Paisa`;
  }

  return `${result} Only`;
}

export function formatNepaliCurrency(num: number): string {
  if (isNaN(num)) return '०';
  let parts = num.toString().split('.');
  let integerPart = parts[0];
  let decimalPart = parts[1] ? '.' + parts[1].slice(0, 2) : '';

  // South Asian commas: 12,34,56,789
  let lastThree = integerPart.slice(-3);
  let otherNumbers = integerPart.slice(0, -3);
  if (otherNumbers !== '') {
    lastThree = ',' + lastThree;
  }
  let formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree + decimalPart;

  // Convert to Nepali digits
  const nepDigits: Record<string, string> = {
    '0': '०', '1': '१', '2': '२', '3': '३', '4': '४',
    '5': '५', '6': '६', '7': '७', '8': '८', '9': '९',
    ',': ',', '.': '.'
  };

  return formatted.split('').map(c => nepDigits[c] || c).join('');
}
