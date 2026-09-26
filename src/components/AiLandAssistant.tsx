'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  HelpCircle, 
  RotateCcw, 
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Compass,
  MessageSquare,
  Calculator
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  link?: {
    label: string;
    href: string;
  };
  isAiGenerated?: boolean;
}

const PRESET_QUESTIONS = [
  '५० लाखको जग्गा पास गर्दा कर कति लाग्छ?',
  '१ रोपनीमा कति आना र वर्गफिट हुन्छ?',
  'मेरो बाटो ८ फिट छ, कित्ताकाट हुन्छ?',
  'पुँजीगत लाभकर (CGT) कति लाग्छ?',
  'लालपुर्जा हरायो, के गर्ने?',
  'महिला र एकल महिला छुट कति पाइन्छ?'
];

// Helper to convert Nepali numerals to standard digits
function normalizeNumbers(str: string): string {
  const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  let res = str;
  nepaliDigits.forEach((digit, index) => {
    res = res.replaceAll(digit, index.toString());
  });
  return res;
}

// Helper to parse Nepali monetary amounts (उदा: ५० लाख, १ करोड, ३० lakh, 5000000)
function parseMoneyAmount(query: string): number | null {
  const q = normalizeNumbers(query.toLowerCase());

  // Check for crore / करोड
  const croreMatch = q.match(/([\d.]+)\s*(?:करोड|crore|cr)/);
  if (croreMatch && !isNaN(parseFloat(croreMatch[1]))) {
    return parseFloat(croreMatch[1]) * 10000000;
  }

  // Check for lakh / लाख
  const lakhMatch = q.match(/([\d.]+)\s*(?:लाख|lakh|lac)/);
  if (lakhMatch && !isNaN(parseFloat(lakhMatch[1]))) {
    return parseFloat(lakhMatch[1]) * 100000;
  }

  // Check for thousand / हजार
  const hajarMatch = q.match(/([\d.]+)\s*(?:हजार|hajar|k)/);
  if (hajarMatch && !isNaN(parseFloat(hajarMatch[1]))) {
    return parseFloat(hajarMatch[1]) * 1000;
  }

  // Raw large digits >= 50,000
  const rawNumberMatch = q.match(/\b(\d{5,10})\b/);
  if (rawNumberMatch && !isNaN(parseFloat(rawNumberMatch[1]))) {
    return parseFloat(rawNumberMatch[1]);
  }

  return null;
}

// Helper to parse land unit numbers (उदा: २ रोपनी, ४ आना, ५ बिघा, १० कट्ठा, १०० वर्गफिट)
function parseUnitQuantity(query: string, unitKeywords: string[]): number | null {
  const q = normalizeNumbers(query.toLowerCase());
  for (const kw of unitKeywords) {
    const regexBefore = new RegExp(`([\\d.]+)\\s*${kw}`);
    const mBefore = q.match(regexBefore);
    if (mBefore && !isNaN(parseFloat(mBefore[1]))) {
      return parseFloat(mBefore[1]);
    }
  }
  return null;
}

export default function AiLandAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'नमस्ते! म BR Bhatta नेपाल जग्गा तथा कानुनी एआई सहायक (Land AI 2.0) हुँ। \n\nपछिल्लो आर्थिक ऐन २०८१/८२, मालपोत कर हिसाब, कित्ताकाट मापदण्ड वा क्षेत्रफल रूपान्तरण सम्बन्धी कुनै पनि प्रश्न सोध्नुहोस्।'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Comprehensive Knowledge Base & Live Computational Matcher
  const generateAnswer = (rawQuery: string): { text: string; link?: { label: string; href: string } } => {
    const q = rawQuery.toLowerCase().trim();
    const qNormalized = normalizeNumbers(q);

    // -------------------------------------------------------------
    // INTENT 1: LIVE TAX CALCULATION WITH MONETARY VALUE
    // e.g. "५० लाखको जग्गा पास गर्दा कर कति लाग्छ?", "१ करोडको जग्गामा मालपोत कति?"
    // -------------------------------------------------------------
    const isTaxInquiry = 
      q.includes('कर') || q.includes('tax') || q.includes('मालपोत') || q.includes('खर्च') || 
      q.includes('दस्तुर') || q.includes('रजिस्ट्रेसन') || q.includes('पास गर्दा') || q.includes('cgt') || q.includes('लाभकर');

    const parsedMoney = parseMoneyAmount(rawQuery);
    if (parsedMoney && isTaxInquiry) {
      const amount = parsedMoney;
      const metroFee = amount * 0.05;
      const bagmatiFee = amount * 0.005; // 0.5% Bagmati Cess in Kathmandu Valley
      const ktmValleyTotal = metroFee + bagmatiFee;
      const submetroFee = amount * 0.045;
      const muniFee = amount * 0.04;
      const ruralFee = amount * 0.03;
      const femaleDiscountedMetro = metroFee * 0.75;
      const singleFemaleDiscountedMetro = metroFee * 0.65;

      return {
        text: `रु. ${amount.toLocaleString('en-IN')} थैली अङ्क भएको जग्गा पास गर्दा लाग्ने आधिकारिक सरकारी राजस्व (आर्थिक ऐन २०८१/८२ अनुसार):\n\n१. क्रेताले तिर्ने रजिस्ट्रेसन दस्तुर:\n• काठमाडौँ उपत्यका महानगर (काठमाडौँ/ललितपुर): रु. ${ktmValleyTotal.toLocaleString('en-IN')} (५% दस्तुर रु. ${metroFee.toLocaleString('en-IN')} + ०.५% वाग्मती सभ्यता कोष रु. ${bagmatiFee.toLocaleString('en-IN')})\n• अन्य महानगरपालिका (५%): रु. ${metroFee.toLocaleString('en-IN')}\n• उप-महानगरपालिका (४.५%): रु. ${submetroFee.toLocaleString('en-IN')}\n• नगरपालिका (४%): रु. ${muniFee.toLocaleString('en-IN')}\n• गाउँपालिका (३%): रु. ${ruralFee.toLocaleString('en-IN')}\n\n२. प्राप्त हुने सहुलियत छुट:\n• महिलाको एकल स्वामित्वमा (२५% छुट): महानगरमा रु. ${femaleDiscountedMetro.toLocaleString('en-IN')} मात्र (दुर्गम गाउँपालिकामा ५०% छुट)\n• एकल महिला / विधवा (३५% छुट): महानगरमा रु. ${singleFemaleDiscountedMetro.toLocaleString('en-IN')} मात्र\n• श्रीमान्-श्रीमती संयुक्त नामसारी: मात्र रु. १०० को टोकन शुल्क\n\n३. बिक्रेताले तिर्ने पुँजीगत लाभकर (CGT):\n(नाफा कमाएको रकममा मात्र लाग्छ)\n• ५ वर्ष वा सोभन्दा बढी स्वामित्व: ५% लाभकर\n• ५ वर्षभन्दा कम स्वामित्व: ७.५% लाभकर\n• १० वर्ष बसोबास गरेको निजी आवासीय घरजग्गा: पूर्ण छुट (०%)\n\n* थप लिखत टिकट दस्तुर करिब रु. १५० लाग्दछ।`,
        link: {
          label: 'अनलाइन मालपोत क्यालकुलेटरमा विस्तृत हिसाब निकाल्नुहोस्',
          href: '/tools/malpot-calculator'
        }
      };
    }

    // -------------------------------------------------------------
    // INTENT 2: LIVE UNIT CONVERSIONS (DYNAMIC COMPUTATION)
    // -------------------------------------------------------------
    // A. ROPANI computation
    const ropaniQty = parseUnitQuantity(rawQuery, ['रोपनी', 'ropani']);
    if (ropaniQty !== null) {
      const aana = ropaniQty * 16;
      const paisa = ropaniQty * 64;
      const daam = ropaniQty * 256;
      const sqft = ropaniQty * 5476;
      const sqm = (ropaniQty * 508.72).toFixed(2);
      const bigha = (ropaniQty / 13.31).toFixed(3);

      return {
        text: `${ropaniQty} रोपनीको आधिकारिक शुद्ध नाप हिसाब:\n\n• आना: ${aana.toLocaleString('en-IN')} आना\n• पैसा: ${paisa.toLocaleString('en-IN')} पैसा\n• दाम: ${daam.toLocaleString('en-IN')} दाम\n• वर्गफिट: ${sqft.toLocaleString('en-IN')} वर्गफिट (Sq.Ft)\n• वर्गमिटर: ${sqm} वर्गमिटर (Sq.M)\n• तराई प्रणालीमा: करिब ${bigha} बिघा (वा करिब ${(ropaniQty * 1.5).toFixed(1)} कट्ठा)`,
        link: {
          label: 'अनलाइन जग्गा क्यालकुलेटर चलाउनुहोस् (स्लिप प्रिन्ट)',
          href: '/tools/land-calculator'
        }
      };
    }

    // B. AANA computation
    const aanaQty = parseUnitQuantity(rawQuery, ['आना', 'aana']);
    if (aanaQty !== null) {
      const paisa = aanaQty * 4;
      const daam = aanaQty * 16;
      const sqft = (aanaQty * 342.25).toFixed(2);
      const sqm = (aanaQty * 31.80).toFixed(2);
      const ropani = (aanaQty / 16).toFixed(3);

      return {
        text: `${aanaQty} आनाको आधिकारिक शुद्ध नाप हिसाब:\n\n• वर्गफिट: ${sqft} वर्गफिट (Sq.Ft)\n• वर्गमिटर: ${sqm} वर्गमिटर (Sq.M)\n• पैसा: ${paisa} पैसा\n• दाम: ${daam} दाम\n• रोपनीमा: ${ropani} रोपनी (${Math.floor(aanaQty / 16)} रोपनी ${(aanaQty % 16).toFixed(1)} आना)`,
        link: {
          label: 'अनलाइन जग्गा क्यालकुलेटर चलाउनुहोस्',
          href: '/tools/land-calculator'
        }
      };
    }

    // C. BIGHA computation
    const bighaQty = parseUnitQuantity(rawQuery, ['बिघा', 'bigha']);
    if (bighaQty !== null) {
      const kattha = bighaQty * 20;
      const dhur = bighaQty * 400;
      const kanwa = bighaQty * 6400;
      const sqft = bighaQty * 72900;
      const sqm = (bighaQty * 6772.63).toFixed(2);
      const ropani = (bighaQty * 13.31).toFixed(2);

      return {
        text: `${bighaQty} बिघाको आधिकारिक शुद्ध नाप हिसाब:\n\n• कट्ठा: ${kattha.toLocaleString('en-IN')} कट्ठा\n• धुर: ${dhur.toLocaleString('en-IN')} धुर\n• कान्भा: ${kanwa.toLocaleString('en-IN')} कान्भा\n• वर्गफिट: ${sqft.toLocaleString('en-IN')} वर्गफिट (Sq.Ft)\n• वर्गमिटर: ${sqm} वर्गमिटर (Sq.M)\n• पहाडी प्रणालीमा: करिब ${ropani} रोपनी (१३ रोपनी ४ आना ३ पैसा २ दाम प्रति बिघा)`,
        link: {
          label: 'अनलाइन जग्गा क्यालकुलेटर चलाउनुहोस्',
          href: '/tools/land-calculator'
        }
      };
    }

    // D. KATTHA computation
    const katthaQty = parseUnitQuantity(rawQuery, ['कट्ठा', 'कठ्ठा', 'kattha']);
    if (katthaQty !== null) {
      const dhur = katthaQty * 20;
      const kanwa = katthaQty * 320;
      const sqft = katthaQty * 3645;
      const sqm = (katthaQty * 338.63).toFixed(2);
      const bigha = (katthaQty / 20).toFixed(2);

      return {
        text: `${katthaQty} कट्ठाको आधिकारिक शुद्ध नाप हिसाब:\n\n• धुर: ${dhur} धुर\n• कान्भा: ${kanwa} कान्भा\n• वर्गफिट: ${sqft.toLocaleString('en-IN')} वर्गफिट\n• वर्गमिटर: ${sqm} वर्गमिटर\n• बिघामा: ${bigha} बिघा\n• रोपनीमा: करिब ${(katthaQty * 0.665).toFixed(2)} रोपनी`,
        link: {
          label: 'अनलाइन जग्गा क्यालकुलेटर चलाउनुहोस्',
          href: '/tools/land-calculator'
        }
      };
    }

    // E. DHUR computation
    const dhurQty = parseUnitQuantity(rawQuery, ['धुर', 'dhur']);
    if (dhurQty !== null) {
      const kanwa = dhurQty * 16;
      const sqft = (dhurQty * 182.25).toFixed(2);
      const sqm = (dhurQty * 16.93).toFixed(2);

      return {
        text: `${dhurQty} धुरको आधिकारिक शुद्ध नाप हिसाब:\n\n• वर्गफिट: ${sqft} वर्गफिट\n• वर्गमिटर: ${sqm} वर्गमिटर\n• कान्भा: ${kanwa} कान्भा\n• कट्ठामा: ${(dhurQty / 20).toFixed(2)} कट्ठा`,
        link: {
          label: 'अनलाइन जग्गा क्यालकुलेटर चलाउनुहोस्',
          href: '/tools/land-calculator'
        }
      };
    }

    // F. SQFT computation
    const sqftQty = parseUnitQuantity(rawQuery, ['वर्गफिट', 'sqft', 'sq.ft', 'sq ft']);
    if (sqftQty !== null) {
      const aana = (sqftQty / 342.25).toFixed(2);
      const ropani = (sqftQty / 5476).toFixed(3);
      const dhur = (sqftQty / 182.25).toFixed(2);
      const sqm = (sqftQty / 10.7639).toFixed(2);

      return {
        text: `${sqftQty.toLocaleString('en-IN')} वर्गफिटको आधिकारिक रूपान्तरण:\n\n• आना: करिब ${aana} आना\n• रोपनी: करिब ${ropani} रोपनी\n• वर्गमिटर: ${sqm} वर्गमिटर\n• धुर (तराई): करिब ${dhur} धुर`,
        link: {
          label: 'अनलाइन जग्गा क्यालकुलेटर चलाउनुहोस्',
          href: '/tools/land-calculator'
        }
      };
    }

    // G. General Units query without a specific number
    const isGeneralUnitQuery = 
      q.includes('रोपनी') || q.includes('आना') || q.includes('पैसा') || q.includes('दाम') ||
      q.includes('बिघा') || q.includes('कठ्ठा') || q.includes('कट्ठा') || q.includes('धुर') ||
      q.includes('कन्वा') || q.includes('कान्भा') || q.includes('वर्गफिट') || q.includes('वर्ग मिटर') ||
      q.includes('वर्गमिटर') || q.includes('sqft') || q.includes('sqm') || q.includes('इकाइ') || 
      q.includes('सूत्र') || q.includes('unit') || q.includes('conversion');

    if (isGeneralUnitQuery && !q.includes('कित्ताकाट') && !q.includes('बाटो') && !q.includes('मापदण्ड')) {
      if (q.includes('बिघा') || q.includes('कठ्ठा') || q.includes('कट्ठा') || q.includes('धुर') || q.includes('कान्भा')) {
        return {
          text: 'नेपाल तराई जग्गा नापजाँच प्रणाली (बिघा-कठ्ठा-धुर सूत्र):\n\n• १ बिघा = २० कट्ठा = ४०० धुर = ६,४०० कान्भा\n• १ बिघा = ७२,९०० वर्गफिट (वा ६,७७२.६३ वर्गमिटर)\n• १ कट्ठा = २० धुर = ३,६४५ वर्गफिट (३३८.६३ वर्गमिटर)\n• १ धुर = १६ कान्भा = १८२.२५ वर्गफिट (१६.९३ वर्गमिटर)\n• १ कान्भा = ११.३९ वर्गफिट (१.०६ वर्गमिटर)\n\n(१ बिघा बराबर करिब १३.३१ रोपनी अर्थात् १३ रोपनी ४ आना ३ पैसा २ दाम हुन्छ।)',
          link: {
            label: 'अनलाइन जग्गा क्षेत्रफल क्यालकुलेटर चलाउनुहोस्',
            href: '/tools/land-calculator'
          }
        };
      }

      return {
        text: 'नेपाल पहाडी जग्गा नापजाँच प्रणाली (रोपनी-आना-पैसा-दाम सूत्र):\n\n• १ रोपनी = १६ आना = ६४ पैसा = २५६ दाम\n• १ रोपनी = ५,४७६ वर्गफिट (वा ५०८.७२ वर्गमिटर)\n• १ आना = ४ पैसा = १६ दाम (३४२.२५ वर्गफिट वा ३१.८० वर्गमिटर)\n• १ पैसा = ४ दाम (८५.५६ वर्गफिट वा ७.९५ वर्गमिटर)\n• १ दाम = २१.३९ वर्गफिट (वा १.९९ वर्गमिटर)\n\n(१ रोपनी बराबर करिब ०.०७५ बिघा अर्थात् करिब १ कट्ठा १० धुर हुन्छ।)',
        link: {
          label: 'अनलाइन जग्गा क्यालकुलेटर चलाउनुहोस् (स्लिप प्रिन्ट)',
          href: '/tools/land-calculator'
        }
      };
    }

    // -------------------------------------------------------------
    // INTENT 3: GENERAL MALPOT TAX & CAPITAL GAINS TAX (LATEST ACT 2081/82)
    // -------------------------------------------------------------
    const isGeneralTax = 
      q.includes('मालपोत') || q.includes('रजिस्ट्रेसन') || q.includes('कर') || 
      q.includes('tax') || q.includes('cgt') || q.includes('लाभकर') || q.includes('पुँजीगत') ||
      q.includes('राजस्व') || q.includes('दस्तुर') || q.includes('छुट');

    if (isGeneralTax && !q.includes('कित्ताकाट') && !q.includes('साँधियार')) {
      // Check if specifically asking about female rebate
      if (q.includes('महिला') || q.includes('विधवा') || q.includes('एकल महिला')) {
        return {
          text: 'महिला तथा सहुलियत छुट (आर्थिक ऐन २०८१/८२):\n\n• महिलाको एकल स्वामित्व: महानगर/उपमहानगरमा २५% राजस्व छुट, नगरपालिकामा ३५% र दुर्गम वा हिमाली गाउँपालिकामा ५०% सम्म छुट पाइन्छ।\n• एकल महिला (विधवा): ऐन अनुसार ३५% सम्म रजिस्ट्रेसन राजस्व छुटको व्यवस्था छ।\n• श्रीमान्-श्रीमती संयुक्त नामसारी: घरपरिवारमा समानता प्रवर्द्धन गर्न मात्र रु. १०० को टोकन शुल्क लिइन्छ।\n• ज्येष्ठ नागरिक (७० वर्ष माथि) / दलित / अपाङ्गता / सहिद परिवार: २५% छुट उपलब्ध छ।',
          link: {
            label: 'मालपोत रजिस्ट्रेसन तथा कर क्यालकुलेटर चलाउनुहोस्',
            href: '/tools/malpot-calculator'
          }
        };
      }

      // Check if specifically asking about Capital Gains Tax (CGT)
      if (q.includes('लाभकर') || q.includes('cgt') || q.includes('पुँजीगत') || q.includes('नाफा')) {
        return {
          text: 'पुँजीगत लाभकर (Capital Gains Tax - CGT) पछिल्लो व्यवस्था:\n\n• यो कर बिक्रेताले जग्गा बिक्री गर्दा खुद नाफा (बिक्री मूल्य - खरिद लागत) मा मात्र तिर्नुपर्छ।\n• ५ वर्ष वा सोभन्दा बढी स्वामित्व: ५.०% लाभकर\n• ५ वर्षभन्दा कम स्वामित्व: ७.५% लाभकर\n• १० वर्ष लगातार बसोबास गरेको निजी आवासीय घरजग्गा (उपत्यकामा १ रोपनी, तराईमा १० कट्ठासम्म): पूर्ण कर छुट (०%)\n• संस्था वा कम्पनीको नाममा रहेको जग्गा निसर्ग गर्दा: १०% देखि १५% अग्रिम कर कट्टी हुन्छ।',
          link: {
            label: 'पुँजीगत लाभकर क्यालकुलेटर चलाउनुहोस्',
            href: '/tools/malpot-calculator'
          }
        };
      }

      // General Malpot Registration Overview
      return {
        text: 'नेपालमा घरजग्गा रजिस्ट्रेसन दस्तुर तथा कर दर (आर्थिक ऐन २०८१/८२):\n\n१. रजिस्ट्रेसन दस्तुर (क्रेताले तिर्ने):\n• काठमाडौँ उपत्यका महानगर: ५.३% (५% दर्ता + ०.५% वाग्मती सभ्यता कोष कर)\n• अन्य महानगरपालिका: ५.०%\n• उप-महानगरपालिका: ४.५%\n• नगरपालिका क्षेत्र: ४.०%\n• गाउँपालिका क्षेत्र: ३.०%\n\n२. राजस्व छुट सहुलियत:\n• महिलाको एकल स्वामित्व: २५% - ५०% छुट\n• एकल महिला: ३५% छुट\n• दम्पती संयुक्त दर्ता: मात्र रु. १००\n\n३. पुँजीगत लाभकर (बिक्रेताले तिर्ने):\n• ५ वर्षमाथि: ५% | ५ वर्षमुनि: ७.५% | १० वर्ष बसोबास: ०%',
        link: {
          label: 'अनलाइन मालपोत तथा लाभकर क्यालकुलेटर',
          href: '/tools/malpot-calculator'
        }
      };
    }

    // -------------------------------------------------------------
    // INTENT 4: MULTI-KITTA CALCULATOR
    // -------------------------------------------------------------
    if (q.includes('धेरै कित्ता') || q.includes('बहु कित्ता') || q.includes('multi') || q.includes('जोडफल') || q.includes('कित्ता जोड्न') || q.includes('कुल क्षेत्रफल')) {
      return {
        text: 'एकभन्दा बढी कित्ताहरूको क्षेत्रफल जोड्न हाम्रो "बहु-कित्ता (Multi-Kitta) क्षेत्रफल योग क्यालकुलेटर" प्रयोग गर्न सक्नुहुन्छ। यसले पहाडी (R-A-P-D) र तराई (B-K-D-K) दुवै ढाँचाको क्यारी-ओभर सही हिसाब गर्छ र प्रिन्ट गर्न मिल्ने औपचारिक स्लिप दिन्छ।',
        link: {
          label: 'बहु-कित्ता क्यालकुलेटर खोल्नुहोस्',
          href: '/tools/multi-kitta-calculator'
        }
      };
    }

    // -------------------------------------------------------------
    // INTENT 5: KITTA KAT & ROAD SPECIFICATIONS
    // -------------------------------------------------------------
    const isRoadOrKittaKat = 
      q.includes('कित्ताकाट') || q.includes('टुक्रा') || q.includes('kittakat') || q.includes('kitta kat') ||
      (q.includes('बाटो') && !q.includes('हिँड्ने')) || q.includes('road') ||
      (q.includes('सडक') && (q.includes('चौडाइ') || q.includes('नियम') || q.includes('मापदण्ड'))) ||
      ((q.includes('फिट') || q.includes('fit') || q.includes('feet') || q.includes('मिटर')) && (q.includes('बाटो') || q.includes('सडक') || q.includes('मोहडा') || q.includes('कति')));

    if (isRoadOrKittaKat) {
      return {
        text: 'भू-उपयोग नियमावली २०७९ (संशोधन २०८१) अनुसार कित्ताकाट मापदण्ड:\n\n• आवासीय क्षेत्र: नयाँ कित्ताकाट गर्दा न्यूनतम १३० वर्गमिटर (करिब ४ आना वा ०-३-३-३) क्षेत्रफल चाहिन्छ।\n• बाटोको न्यूनतम मोहडा (Frontage): कम्तीमा ८ मिटर हुनुपर्छ।\n• यदि बाटो ८ मिटरभन्दा साँघुरो छ भने सामान्यतया नयाँ कित्ताकाट गर्न पाइँदैन।\n• कृषि क्षेत्र: काठमाडौँ उपत्यकामा ५०० वर्गमिटर (करिब १ रोपनी), तराईमा ६७५ वर्गमिटर (करिब २ कट्ठा) भन्दा कम कित्ताकाट रोक्का हुन्छ।',
        link: {
          label: 'अनलाइन कित्ताकाट योग्यता परीक्षक चलाउनुहोस्',
          href: '/tools/kitta-kat-checker'
        }
      };
    }

    // -------------------------------------------------------------
    // INTENT 6: LALPURJA LOST / DUPLICATE PROCESS
    // -------------------------------------------------------------
    if (q.includes('लालपुर्जा') || q.includes('हरायो') || q.includes('प्रतिलिपि') || q.includes('स्रेस्ता') || q.includes('lalpurja') || q.includes('harayo')) {
      return {
        text: 'लालपुर्जा हराएमा नयाँ प्रतिलिपि (Duplicate Copy) निकाल्ने कानुनी प्रक्रिया:\n\n१. सम्बन्धित वडा कार्यालयबाट सिफारिस लिने।\n२. स्थानीय वा राष्ट्रिय पत्रिकामा १५ दिने सार्वजनिक सूचना प्रकाशन गर्ने।\n३. पत्रिकाको सक्कल कटिङ, नागरिकता, तिरो तिरेको रसिद सहित सम्बन्धित मालपोत कार्यालयमा निवेदन दिने।\n४. मालपोतले मोठ स्रेस्ता भिडाएर नयाँ प्रतिलिपि लालपुर्जा जारी गर्दछ।',
        link: {
          label: 'लालपुर्जा प्रतिलिपि निकाल्ने पूर्ण गाइड पढ्नुहोस्',
          href: '/articles/lost-lalpurja-duplicate-process-nepal'
        }
      };
    }

    // -------------------------------------------------------------
    // INTENT 7: SANDHIYAR / BOUNDARY DISPUTE
    // -------------------------------------------------------------
    if (q.includes('साँधियार') || q.includes('सिमाना') || q.includes('विवाद') || q.includes('मिच्यो') || q.includes('किला') || q.includes('sandhiyar') || q.includes('boundary')) {
      return {
        text: 'साँधियारले सिमाना मिचेमा वा विवाद भएमा समाधानका उपायहरू:\n\n१. पहिले वडा कार्यालयको न्यायिक समितिमा सिमाना छुट्याइपाउँ भनी निवेदन दिनुपर्छ।\n२. न्यायिक समितिले नापी कार्यालयबाट अमिन खटाई सक्कल नक्सा (Trace) अनुसार सिमानामा किला ठोक्ने काम गर्छ।\n३. चित्त नबुझेमा जग्गा (नाप जाँच) ऐन २०१९ अनुसार सम्बन्धित जिल्ला अदालतमा फिरादपत्र दर्ता गर्न सकिन्छ।',
        link: {
          label: 'साँधियार सिमाना विवाद कानुनी समाधान गाइड पढ्नुहोस्',
          href: '/articles/land-boundary-sandhiyar-dispute-resolution-nepal'
        }
      };
    }

    // -------------------------------------------------------------
    // INTENT 8: BUILDING CODE & SETBACK
    // -------------------------------------------------------------
    if (q.includes('घर') || q.includes('नक्सा पास') || q.includes('सेतब्याक') || q.includes('setback') || q.includes('तला') || q.includes('झ्याल')) {
      return {
        text: 'भवन निर्माण आचारसंहिता (Building Code) र पालिका मापदण्ड अनुसार:\n\n• बाटोतर्फ सडकको केन्द्र (Centerline) बाट तोकिएको दूरी (उदा: ५ वा ६ मिटर) सेतब्याक छोड्नुपर्छ।\n• साँधियारको सिमानातर्फ झ्याल राख्दा न्यूनतम ५ फिट र झ्याल नराख्दा न्यूनतम ३ फिट सेतब्याक अनिवार्य हुन्छ।\n• अनुमतिबिना मापदण्ड मिचेर बनाएको घरको नक्सा पास हुँदैन र बैंक धितोमा रोक्का हुन सक्दैन।',
        link: {
          label: 'घर नक्सा पास र सेतब्याक नियम विस्तृत पढ्नुहोस्',
          href: '/articles/building-code-naksa-pas-setback-rules-nepal'
        }
      };
    }

    // -------------------------------------------------------------
    // INTENT 9: LOK SEWA AAMIN / SYLLABUS / EXAM
    // -------------------------------------------------------------
    if (q.includes('अमिन') || q.includes('सर्भेक्षक') || q.includes('लोकसेवा') || q.includes('पाठ्यक्रम') || q.includes('syllabus') || q.includes('क्विज') || q.includes('quiz') || q.includes('amin')) {
      return {
        text: 'लोकसेवा आयोगको नापी अमिन तथा सर्भेक्षक परीक्षाका लागि हाम्रो विशेष हबहरू उपलब्ध छन्:\n\n• प्रथम र द्वितीय पत्रको पूर्ण पाठ्यक्रम तथा विगतका प्रश्नोत्तरहरू हेर्न सकिन्छ।\n• ५० वस्तुगत प्रश्नहरूको समयबद्ध अनलाइन मक टेस्ट (Mock Exam) अभ्यास गर्न सकिन्छ।',
        link: {
          label: 'अमिन पाठ्यक्रम तथा पुराना प्रश्नहरू हेर्नुहोस्',
          href: '/tools/aamin-syllabus'
        }
      };
    }

    // -------------------------------------------------------------
    // INTENT 10: AUTOCAD LISP SCRIPTS
    // -------------------------------------------------------------
    if (q.includes('autocad') || q.includes('cad') || q.includes('लस्प') || q.includes('lsp') || q.includes('स्क्रिप्ट') || q.includes('अटोक्याड') || q.includes('lisp')) {
      return {
        text: 'AutoCAD मा नापी नक्सा तथा जग्गाको क्षेत्रफल (रोपनी-आना / बिघा-कठ्ठा) निकाल्न र कोअर्डिनेट्स निर्यात गर्न हाम्रा ४ वटा प्रमाणीकृत LISP (.lsp) स्क्रिप्टहरू नि:शुल्क डाउनलोड गर्न सक्नुहुन्छ।',
        link: {
          label: 'AutoCAD LSP स्क्रिप्ट्स हब खोल्नुहोस्',
          href: '/tools/autocad-scripts'
        }
      };
    }

    // -------------------------------------------------------------
    // INTENT 11: SURVEY & MALPOT DIRECTORY
    // -------------------------------------------------------------
    if (q.includes('नापी कार्यालय') || q.includes('मालपोत कार्यालय') || q.includes('फोन') || q.includes('कार्यालय') || q.includes('सम्पर्क') || q.includes('निर्देशिका') || q.includes('office')) {
      return {
        text: 'नेपालका ७ वटै प्रदेशका ७७ वटै जिल्लाका नापी तथा मालपोत कार्यालयहरूको फोन नम्बर, इमेल र कार्यक्षेत्र विवरण हाम्रो निर्देशिकामा उपलब्ध छ। सिधै १-क्लिकमा कल गर्न सकिन्छ।',
        link: {
          label: '७७ जिल्ला नापी तथा मालपोत निर्देशिका हेर्नुहोस्',
          href: '/tools/survey-offices'
        }
      };
    }

    // -------------------------------------------------------------
    // INTENT 12: SMART KITTA QR CODE
    // -------------------------------------------------------------
    if (q.includes('qr') || q.includes('क्युआर') || q.includes('बिक्री') || q.includes('पोष्टर') || q.includes('विज्ञापन') || q.includes('sale')) {
      return {
        text: 'आफ्नो जग्गा बिक्री गर्न वा कित्ताको गुगल म्याप्स लोकेसन सेयर गर्न "कित्ता स्मार्ट QR कोड जेनेरेटर" प्रयोग गरी आकर्षक "जग्गा बिक्रीमा" A4 पोष्टर प्रिन्ट गर्न सक्नुहुन्छ।',
        link: {
          label: 'कित्ता स्मार्ट QR कोड बनाउनुहोस्',
          href: '/tools/kitta-qr'
        }
      };
    }

    // -------------------------------------------------------------
    // DEFAULT FALLBACK
    // -------------------------------------------------------------
    return {
      text: 'तपाईंको जिज्ञासा प्राप्त भयो। नेपालको जग्गा नापजाँच, कित्ताकाट मापदण्ड, आर्थिक ऐन २०८१/८२ अनुसारको मालपोत कर, वा कानुन सम्बन्धी जानकारीका लागि हाम्रो ज्ञान केन्द्र र क्यालकुलेटरहरू प्रयोग गर्न सक्नुहुन्छ। \n\nकुनै निश्चित रकम (उदा: ५० लाखमा कर कति?) वा इकाइ (उदा: ५ आना कति वर्गफिट?) लेखेर सोध्नुभएमा म तुरुन्तै हिसाब निकालिदिन सक्छु!',
      link: {
        label: 'सम्पूर्ण डिजिटल उपकरणहरू हेर्नुहोस्',
        href: '/tools'
      }
    };
  };

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query.trim()
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // Try calling Cloudflare serverless Gemini 3.1 Flash endpoint
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query.trim() })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.answer && data.answer.trim().length > 0) {
          const botMsg: ChatMessage = {
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: data.answer.trim(),
            isAiGenerated: true
          };
          setMessages((prev) => [...prev, botMsg]);
          setIsTyping(false);
          return;
        }
      }
    } catch (err) {
      console.warn('Serverless endpoint fetch error, trying direct Gemini API...', err);
    }

    // 2. Direct client-side Gemini fallback using NEXT_PUBLIC_GEMINI_KEY
    const clientKey = process.env.NEXT_PUBLIC_GEMINI_KEY;
    if (clientKey) {
      try {
        const sysPrompt = "You are BR Bhatta Land AI (नेपाल जग्गा तथा कानुनी एआई सहायक), authoritative expert on Nepal cadastral surveying, land laws, land revenue (आर्थिक ऐन २०८१/८२, महानगर ५%, उपत्यका वाग्मती कर ०.५%, महिला छुट २५%-५०%, एकल महिला ३५%, पुँजीगत लाभकर ५%/७.५%), Land Use Act 2079/2081 (आवासीय १३० वर्गमिटर, ८ मिटर बाटो), and land measurements (Ropani/Bigha). Respond in clear, polite, structured Nepali with markdown bold points and reference tools on brbhatta.com.";
        const gResp = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${clientKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              systemInstruction: { parts: [{ text: sysPrompt }] },
              contents: [{ parts: [{ text: query.trim() }] }]
            })
          }
        );
        if (gResp.ok) {
          const gData = await gResp.json();
          const ans = gData?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (ans && ans.trim().length > 0) {
            const botMsg: ChatMessage = {
              id: `bot-${Date.now()}`,
              sender: 'bot',
              text: ans.trim(),
              isAiGenerated: true
            };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
            return;
          }
        }
      } catch (e) {
        console.warn('Direct Gemini API error:', e);
      }
    }

    // Fallback: Local instant math & knowledge base
    const localResponse = generateAnswer(query);
    const botMsg: ChatMessage = {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: localResponse.text,
      link: localResponse.link
    };
    setMessages((prev) => [...prev, botMsg]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 notranslate no-print" translate="no">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-800 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 border-2 border-white/30 cursor-pointer group"
            aria-label="Open Nepal Land AI Assistant"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
              <Bot className="w-4 h-4 text-emerald-100" />
            </div>
            <span>नेपाल जग्गा AI सहायक</span>
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
          </button>
        </div>
      )}

      {/* Floating Chat Modal Window */}
      {isOpen && (
        <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-24px)] sm:w-[430px] h-[560px] max-h-[85vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 notranslate no-print" translate="no">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-800 to-slate-900 text-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <h3 className="font-black text-sm text-white flex items-center gap-1.5">
                  <span>BR Bhatta • Land AI</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </h3>
                <p className="text-[10px] text-emerald-200 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
                  <span>Google Gemini 3.1 Flash • २४/७ कानुनी सहायक</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages([{
                  id: 'welcome',
                  sender: 'bot',
                  text: 'च्याट रिसेट भयो! जग्गाको कुनै रकम वा इकाइ लेखेर सोध्नुहोस्, म तुरुन्तै शुद्ध हिसाब निकालिदिनेछु।'
                }])}
                title="च्याट रिसेट"
                className="p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs bg-slate-50/60 dark:bg-slate-950/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-xs shadow-xs font-medium'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-xs border border-slate-200 dark:border-slate-700 shadow-2xs'
                  }`}
                >
                  {msg.isAiGenerated && (
                    <div className="mb-2 flex items-center gap-1.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-bold border-b border-emerald-100 dark:border-emerald-900/50 pb-1">
                      <Sparkles className="w-3 h-3 text-emerald-500 animate-pulse" />
                      <span>Gemini 3.1 Flash AI</span>
                    </div>
                  )}

                  {msg.text}

                  {/* Optional Suggestion Link */}
                  {msg.link && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-700">
                      <Link
                        href={msg.link.href}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400 hover:underline text-[11px]"
                      >
                        <span>{msg.link.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 w-24">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Preset Prompts */}
          <div className="p-2.5 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
            {PRESET_QUESTIONS.map((pq, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(pq)}
                className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 whitespace-nowrap transition-colors cursor-pointer"
              >
                {pq}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              placeholder="जग्गा वा कर सम्बन्धी प्रश्न लेख्नुहोस् (उदा: ५० लाखमा कर कति?)..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500/20 focus:outline-emerald-600"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 shadow-xs cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
