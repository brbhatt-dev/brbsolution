/**
 * Preeti to Nepali Unicode & Unicode to Preeti Converter Engine
 * Comprehensive character mapping supporting conjuncts, matras, and repha.
 */

// Mapping dictionary for Preeti characters to Unicode
const PREETI_TO_UNICODE_MAP: [string, string][] = [
  // Numbers
  ['0', '०'], ['1', '१'], ['2', '२'], ['3', '३'], ['4', '४'],
  ['5', '५'], ['6', '६'], ['7', '७'], ['8', '८'], ['9', '९'],

  // Special Conjuncts & Ligatures
  ['qm', 'क्र'], ['Qm', 'क्र'],
  ['If', 'क्ष'], ['I', 'क्ष्'],
  ['q', 'त्र'], ['Q', 'त्त्'],
  ['1/2', '½'], ['1/4', '¼'], ['3/4', '¾'],
  ['ज्ञ', 'ज्ञ'], ['¡', 'ज्ञ'],

  // Matras with Consonants
  ['cf]', 'ओ'], ['cf}', 'औ'], ['cf', 'आ'], ['c', 'अ'],
  ['O{', 'ई'], ['O', 'इ'], ['pm', 'ऊ'], ['p', 'उ'],
  ['P', 'ए'], ['P}', 'ऐ'],

  // Vowels and Signs
  ['f', 'ा'],
  ['g', 'ु'], ['G', 'ू'],
  ['\'', 'ु'], ['"', 'ू'],
  [']', 'े'], ['}', 'ै'],
  ['f]', 'ो'], ['f}', 'ौ'],
  ['fa', 'ाँ'], ['a', 'ँ'], ['M', 'ं'], ['W', 'ः'],
  ['्', '्'],

  // Consonants
  ['k', 'क'], ['v', 'ख'], ['u', 'ग'], ['3', 'घ'], ['ª', 'ङ'],
  ['r', 'च'], ['5', 'छ'], ['h', 'ज'], ['em', 'झ'], ['h\\', 'ञ'],
  ['6', 'ट'], ['7', 'ठ'], ['8', 'ड'], ['9', 'ढ'], ['0', 'ण'],
  ['t', 'त'], ['y', 'थ'], ['b', 'द'], ['w', 'ध'], ['g', 'न'],
  ['k', 'प'], ['km', 'फ'], ['a', 'ब'], ['e', 'भ'], ['d', 'म'],
  ['o', 'य'], ['/', 'र'], ['n', 'ल'], ['j', 'व'],
  ['z', 'श'], ['i', 'ष'], [';m', 'स'], ['x', 'ह'],

  // Punctuations
  ['.', '।'], ['?', '?'], [',', ','], [';', ';'], [':', ':'],
  ['-', '-'], ['_', '_'], ['!', '!'], ['/', '/']
];

export function preetiToUnicode(input: string): string {
  if (!input) return '';

  let text = input;

  // Handle common ligatures and combinations in Preeti
  // Repha: { after consonant or sign
  text = text.replace(/([k-z0-9A-Z])\{/g, '{$1'); // pull repha forward
  
  // Replace direct mapping
  const map: Record<string, string> = {
    '~': 'ञ्',
    '`': 'ऽ',
    '!': '!',
    '@': 'द्द',
    '#': 'ध्',
    '$': 'द्र',
    '%': 'प्र',
    '^': 'ट्र',
    '&': 'ठ्र',
    '*': 'ड्र',
    '(': '(',
    ')': ')',
    '-': '-',
    '_': '्र',
    '+': 'ं',
    '=': 'ृ',
    '[': 'ृ',
    '{': 'र्',
    ']': 'े',
    '}': 'ै',
    '\\': '्',
    '|': '्र',
    ';': 'स',
    ':': 'स्',
    "'": 'ु',
    '"': 'ू',
    ',': ',',
    '<': '?',
    '.': '।',
    '>': 'श्र',
    '/': 'र',
    '?': 'रु',
    '0': '०',
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
    'a': 'ब',
    'b': 'द',
    'c': 'अ',
    'd': 'म',
    'e': 'भ',
    'f': 'ा',
    'g': 'ु',
    'h': 'ज',
    'i': 'ष',
    'j': 'व',
    'k': 'क',
    'l': 'त',
    'm': 'फ',
    'n': 'ल',
    'o': 'य',
    'p': 'उ',
    'q': 'त्र',
    'r': 'च',
    's': 'क',
    't': 'त',
    'u': 'ग',
    'v': 'ख',
    'w': 'ध',
    'x': 'ह',
    'y': 'थ',
    'z': 'श',
    'A': 'ब्',
    'B': 'द्य',
    'C': 'ऋ',
    'D': 'म्',
    'E': 'भ्',
    'F': 'ँ',
    'G': 'ू',
    'H': 'ज्',
    'I': 'क्ष्',
    'J': 'व्',
    'K': 'क्',
    'L': 'ल्',
    'M': 'ं',
    'N': 'न्',
    'O': 'इ',
    'P': 'ए',
    'Q': 'त्त',
    'R': 'च्',
    'S': 'क्',
    'T': 'त्',
    'U': 'ग्',
    'V': 'ख्',
    'W': 'ध्',
    'X': 'ह्',
    'Y': 'थ्',
    'Z': 'श्'
  };

  // Pre-processing step for 'l' which in Preeti is hraswa I-kaar preceding the consonant
  // e.g. "la" -> "बि", "lk" -> "कि"
  // Look for 'l' followed by a character and swap it with i-kaar (ि)
  let result = '';
  let i = 0;
  while (i < text.length) {
    if (text[i] === 'l' && i + 1 < text.length) {
      // Lookahead: could be a consonant or ligature
      let nextChar = text[i + 1];
      let mapped = map[nextChar] || nextChar;
      result += mapped + 'ि';
      i += 2;
      continue;
    }

    // Two-character combinations
    if (i + 1 < text.length) {
      let pair = text.substr(i, 2);
      if (pair === 'cf') {
        result += 'आ';
        i += 2;
        continue;
      }
      if (pair === 'qm') {
        result += 'क्र';
        i += 2;
        continue;
      }
      if (pair === 'Qm') {
        result += 'क्र';
        i += 2;
        continue;
      }
      if (pair === 'If') {
        result += 'क्षा';
        i += 2;
        continue;
      }
      if (pair === 'km') {
        result += 'फ';
        i += 2;
        continue;
      }
      if (pair === 'em') {
        result += 'झ';
        i += 2;
        continue;
      }
      if (pair === 'pm') {
        result += 'ऊ';
        i += 2;
        continue;
      }
      if (pair === 'O{') {
        result += 'ई';
        i += 2;
        continue;
      }
      if (pair === 'P}') {
        result += 'ऐ';
        i += 2;
        continue;
      }
      if (pair === 'cf]') {
        result += 'ओ';
        i += 2;
        continue;
      }
      if (pair === 'cf}') {
        result += 'औ';
        i += 2;
        continue;
      }
    }

    let char = text[i];
    result += map[char] !== undefined ? map[char] : char;
    i++;
  }

  // Post-fix repha ordering: { followed by letter -> consonant + repha
  result = result.replace(/र्([क-ह])/g, '$1्'); // basic repha cleanup

  return result;
}

export function unicodeToPreeti(input: string): string {
  if (!input) return '';

  const reverseMap: Record<string, string> = {
    '०': '0', '१': '1', '२': '2', '३': '3', '४': '4',
    '५': '5', '६': '6', '७': '7', '८': '8', '९': '9',
    'अ': 'c', 'आ': 'cf', 'इ': 'O', 'ई': 'O{', 'उ': 'p', 'ऊ': 'pm',
    'ए': 'P', 'ऐ': 'P}', 'ओ': 'cf]', 'औ': 'cf}',
    'क': 'k', 'ख': 'v', 'ग': 'u', 'घ': '3', 'ङ': 'ª',
    'च': 'r', 'छ': '5', 'ज': 'h', 'झ': 'em', 'ञ': '~',
    'ट': '6', 'ठ': '7', 'ड': '8', 'ढ': '9', 'ण': '0',
    'त': 't', 'थ': 'y', 'द': 'b', 'ध': 'w', 'न': 'g',
    'प': 'k', 'फ': 'km', 'ब': 'a', 'भ': 'e', 'म': 'd',
    'य': 'o', 'र': '/', 'ल': 'n', 'व': 'j',
    'श': 'z', 'ष': 'i', 'स': ';', 'ह': 'x',
    'क्ष': 'If', 'त्र': 'q', 'ज्ञ': '1',
    'ा': 'f', 'ु': '\'', 'ू': '"', 'े': ']', 'ै': '}',
    'ो': 'f]', 'ौ': 'f}', 'ं': 'M', 'ँ': 'F', 'ः': 'W', 'ृ': '[',
    '।': '.', '?': '<'
  };

  let result = '';
  let i = 0;
  while (i < input.length) {
    // Check if current char has hraswa i-kaar following a consonant
    if (i + 1 < input.length && input[i + 1] === 'ि') {
      let consonant = input[i];
      let preetiChar = reverseMap[consonant] || consonant;
      result += 'l' + preetiChar;
      i += 2;
      continue;
    }

    let char = input[i];
    result += reverseMap[char] !== undefined ? reverseMap[char] : char;
    i++;
  }

  return result;
}
