'use client';

import React, { useState, useEffect } from 'react';
import {
  Building2,
  FileText,
  Calculator,
  AlertTriangle,
  Info,
  ExternalLink,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

export const DOLMA_PROCESSES = [
  { id: '1', name: 'लिखत पारित' },
  { id: '15', name: 'फुकुवा' },
  { id: '3', name: 'नामसारी' },
  { id: '4', name: 'दाखिल खारेज' },
  { id: '5', name: 'संशोधन' },
  { id: '7', name: 'हाल साविक' },
  { id: '8', name: 'रोक्का' },
  { id: '21', name: 'प्रतिलिपी' },
];

export const DOLMA_SUB_PROCESSES: Record<string, { id: string; name: string }[]> = {
  '1': [
    { id: '1', name: 'राजिनामा' },
    { id: '54', name: 'हक़हिस्सा राजिनामा' },
    { id: '71', name: 'पतिपत्नीका नाममा हुने संयुक्त राजिनामा' },
    { id: '69', name: 'पति-पत्नीबीचको सगोलनामा' },
    { id: '2', name: 'हालैदेखिको बकसपत्र' },
    { id: '8', name: 'शेषपछिको बकसपत्र' },
    { id: '73', name: 'हक़हिस्सा हालैदेखिको बकसपत्र' },
    { id: '86', name: 'हक़हिस्सा शेषपछिको बकसपत्र' },
    { id: '74', name: 'पति पत्नी हालैदेखिको बकस' },
    { id: '3', name: 'अंशवण्डा' },
    { id: '10', name: 'अंश बुझेको भरपाई' },
    { id: '4', name: 'सट्टापट्टा' },
    { id: '5', name: 'छोडपत्र' },
    { id: '6', name: 'दर्ताफारी' },
    { id: '7', name: 'सगोलनामा' },
    { id: '9', name: 'दान-पत्र' },
    { id: '11', name: 'बकसपत्र' },
    { id: '53', name: 'चक्लाबन्दी' },
  ],
  '15': [
    { id: '1', name: 'फुकुवा' }
  ],
  '3': [
    { id: '39', name: 'मृत्युपछिको' },
    { id: '40', name: 'महिलाको दोस्रो विवाहपछिको' },
    { id: '41', name: 'बेपत्ते जग्गाधनीको' }
  ],
  '4': [
    { id: '68', name: 'हकसफी- मिलापत्र' },
    { id: '62', name: 'अदालतको फैसला/ मिलापत्र' },
    { id: '63', name: 'अन्य मिलापत्र' },
    { id: '64', name: 'बैंक/वित्तीय संस्थाबाट तेस्रो पक्षले लिलाम सकार' },
    { id: '65', name: 'बैंक/वित्तीय संस्था आफैंले लिलाम सकार' },
    { id: '66', name: 'बैंक/वित्तीय संस्थाबाट साविक ऋणीलाई फिर्ता' },
    { id: '67', name: 'शेषपछिको बकसपत्र बमोजिम' },
    { id: '19', name: 'लगतकट्टा' },
    { id: '16', name: 'हकसफी निर्णयले' },
    { id: '82', name: 'भूमिसुधारको निर्णय' },
    { id: '83', name: 'अदालतबाट भएको लिलाम बमोजिम' },
    { id: '17', name: 'अंशबण्डा' },
    { id: '18', name: 'अंश र अपुताली' }
  ],
  '5': [
    { id: '2', name: 'संशोधन' },
    { id: '3', name: 'नेपाल सरकार-पुरा कित्ता' },
    { id: '84', name: 'घरकायम' },
    { id: '5', name: 'घरपाताल' },
    { id: '1', name: 'सरकारको नाममा लगतकायम' }
  ],
  '7': [
    { id: '22', name: 'स्रेस्ता अद्यावधिक' },
    { id: '23', name: 'हाल-साविक' },
    { id: '24', name: 'ना.सा. हा.सा.' },
    { id: '25', name: 'ना.सा. हा.सा. दा. खा.' },
    { id: '26', name: 'हा.सा. दा. खा.' },
    { id: '75', name: 'कित्ता एकीकरण' }
  ],
  '8': [
    { id: '70', name: 'व्यक्तिगत दृष्टि/भोग/लख बन्धकी' },
    { id: '43', name: 'कित्ताका आधारमा रोक्का' },
    { id: '47', name: 'गोश्वारा रोक्का' },
    { id: '49', name: 'जग्गाधनीका नामका आधारमा रोक्का' }
  ],
  '21': [
    { id: '75', name: 'जग्गाधनी दर्ता प्रमाण पुर्जा' },
    { id: '76', name: 'एकीकृत जग्गाधनी दर्ता प्रमाण पुर्जा' },
    { id: '77', name: 'जग्गाधनी दर्ता स्रेस्ता' },
    { id: '79', name: 'रोक्का पत्र' },
    { id: '80', name: 'फुकुवा पत्र' },
    { id: '82', name: 'पुरानो खिँची नयाँ जग्गाधनी दर्ता प्रमाण पुर्जा' }
  ]
};

export const DOLMA_EXEMPTIONS = [
  { id: '', name: 'छान्नुहोस् (छुट छैन)' },
  { id: 'female', name: 'महिला (Female)' },
  { id: 'single_female', name: 'एकल महिला (Single Female / Widow)' },
  { id: '1', name: 'ज्येष्ठ (Senior Citizen)' },
  { id: '2', name: 'अपाङ्ग (Disabled)' },
  { id: '3', name: 'दृष्टिविहीन (Visually Impaired)' },
  { id: '4', name: 'वाक्य विहीन (Speech Impaired)' },
  { id: '5', name: 'अन्य' },
  { id: '6', name: 'हलिया / मुक्त कमैया (Freed Haliya / Kamaiya)' },
  { id: '7', name: 'दलित/पिछडिएको जाति (Dalit / Backward Caste)' },
  { id: '8', name: 'जन आन्दोलनका सहिद परिवार (Martyr Family)' },
  { id: '9', name: 'नाबालिक (Minor)' },
  { id: '10', name: 'रेमिट्यान्स प्राप्त (Remittance Received via Banking)' },
];

export const DOLMA_PROVINCES = [
  { id: '1', name: 'प्रदेश १ (कोशी)' },
  { id: '2', name: 'प्रदेश २ (मधेश)' },
  { id: '3', name: 'प्रदेश ३ (बागमती)' },
  { id: '4', name: 'गण्डकी प्रदेश' },
  { id: '5', name: 'प्रदेश ५ (लुम्बिनी)' },
  { id: '6', name: 'कर्णाली प्रदेश' },
  { id: '7', name: 'सुदुर पश्चिम प्रदेश' },
];

export const DOLMA_DISTRICTS: Record<string, { id: string; name: string }[]> = {
  '1': [
    { id: '1', name: 'ताप्लेजुङ्ग' },
    { id: '2', name: 'पाँचथर' },
    { id: '3', name: 'इलाम' },
    { id: '4', name: 'झापा' },
    { id: '5', name: 'मोरङ्ग' },
    { id: '6', name: 'सुनसरी' },
    { id: '7', name: 'धनकुटा' },
    { id: '8', name: 'तेह्रथुम' },
    { id: '9', name: 'संखुवासभा' },
    { id: '10', name: 'भोजपुर' },
    { id: '11', name: 'सोलुखुम्बु' },
    { id: '12', name: 'खोटाङ्ग' },
    { id: '13', name: 'ओखलढुङ्गा' },
    { id: '14', name: 'उदयपुर' },
  ],
  '2': [
    { id: '15', name: 'सप्तरी' },
    { id: '16', name: 'सिराहा' },
    { id: '17', name: 'धनुषा' },
    { id: '18', name: 'महोत्तरी' },
    { id: '19', name: 'सर्लाही' },
    { id: '32', name: 'रौतहट' },
    { id: '33', name: 'बारा' },
    { id: '34', name: 'पर्सा' },
  ],
  '3': [
    { id: '20', name: 'सिन्धुली' },
    { id: '21', name: 'रामेछाप' },
    { id: '22', name: 'दोलखा' },
    { id: '23', name: 'सिन्धुपाल्चोक' },
    { id: '24', name: 'काभ्रेपलान्चोक' },
    { id: '25', name: 'ललितपुर' },
    { id: '26', name: 'भक्तपुर' },
    { id: '27', name: 'काठमाण्डौं' },
    { id: '28', name: 'नुवाकोट' },
    { id: '29', name: 'रसुवा' },
    { id: '30', name: 'धादिङ्ग' },
    { id: '31', name: 'मकवानपुर' },
    { id: '35', name: 'चितवन' },
  ],
  '4': [
    { id: '36', name: 'गोरखा' },
    { id: '37', name: 'लमजुङ्ग' },
    { id: '38', name: 'मनाङ्ग' },
    { id: '39', name: 'कास्की' },
    { id: '40', name: 'तनहुँ' },
    { id: '41', name: 'स्याङ्गजा' },
    { id: '42', name: 'पर्वत' },
    { id: '43', name: 'बाग्लुङ्ग' },
    { id: '44', name: 'म्याग्दी' },
    { id: '45', name: 'मुस्ताङ्ग' },
    { id: '47', name: 'नवलपरासी' },
    { id: '408', name: 'नवलपारसी पुर्व' },
  ],
  '5': [
    { id: '46', name: 'पाल्पा' },
    { id: '48', name: 'रुपन्देही' },
    { id: '49', name: 'कपिलवस्तु' },
    { id: '50', name: 'अर्घाखाँची' },
    { id: '51', name: 'गुल्मी' },
    { id: '52', name: 'रुकुम' },
    { id: '54', name: 'रोल्पा' },
    { id: '55', name: 'प्यूठान' },
    { id: '56', name: 'दाङ्ग' },
    { id: '57', name: 'बाँके' },
    { id: '58', name: 'बर्दिया' },
    { id: '501', name: 'रुकुम पुर्व' },
    { id: '507', name: 'नवलपारसी पश्चिम' },
  ],
  '6': [
    { id: '53', name: 'सल्यान' },
    { id: '59', name: 'सुर्खेत' },
    { id: '60', name: 'जाजरकोट' },
    { id: '61', name: 'दैलेख' },
    { id: '62', name: 'डोल्पा' },
    { id: '63', name: 'जुम्ला' },
    { id: '64', name: 'कालीकोट' },
    { id: '65', name: 'मुगु' },
    { id: '66', name: 'हुम्ला' },
    { id: '608', name: 'रुकुम पश्चिम' },
  ],
  '7': [
    { id: '67', name: 'बझाङ्ग' },
    { id: '68', name: 'बाजुरा' },
    { id: '69', name: 'अछाम' },
    { id: '70', name: 'डोटी' },
    { id: '71', name: 'कैलाली' },
    { id: '72', name: 'कन्चनपुर' },
    { id: '73', name: 'डडेंलधुरा' },
    { id: '74', name: 'बैतडी' },
    { id: '75', name: 'दार्चुला' },
  ],
};

const PROVINCE_NOTES: Record<string, { notes: string | null; url: string }> = {
  '1': {
    notes: `१. जलविद्युत उद्योग, चिया खेती, कफी खेती, कपास खेती, पुष्प व्यवसाय, तरकारी खेती, पशुपंक्षीपालन, अलंैची खेती, जडिबुटी खेती एवं फलफूल उद्योगको नाममा खरीद गर्ने जग्गाको लिखत पारित गर्दा लाग्ने रजिष्ट्रेशन शुल्कमा ७५% छुट हुनेछ।\n२. सामूहिक खेती योजना अन्तर्गत कृषि उत्पादन बढाउने उद्देश्यले व्यक्तिहरू मिली उद्योग खोली पारित भएमा रजिष्ट्रेशन शुल्कमा ७५% छुट हुनेछ।\n३. उत्पादनमूलक उद्योग स्थापना तथा सञ्चालन गर्न जग्गा खरीद गर्दा रजिष्ट्रेशन शुल्कमा ५०% छुट हुनेछ।\n४. अपाङ्गता भएका व्यक्ति, दलित एवं पिछडिएका जातिको नाममा स्वामित्व प्राप्त हुँदा २५% छुट हुनेछ।\n५. महिला, ७० वर्षभन्दा बढी उमेरका ज्येष्ठ नागरिक र नाबालकको नाममा पारित हुने लिखतमा २५% छुट, तथा एकल महिलाको हकमा ३५% छुट हुनेछ।\n६. पति-पत्नीको संयुक्त स्वामित्वको सङ्गोलनामा लिखतमा रु. १०० मात्र रजिष्ट्रेशन शुल्क लाग्नेछ।\n७. ५० लाख रुपैयाँ वा सोभन्दा माथिको कारोबारमा गुड फर पेमेन्ट चेक वा बैंक भौचर अनिवार्य पेश गर्नुपर्नेछ।\n८. वैदेशिक रोजगारीबाट बैंकिङ प्रणालीमार्फत रेमिट्यान्स प्राप्त भएको प्रमाणित भएमा सो रकमबाट खरीद हुने जग्गामा २५% छुट हुनेछ।`,
    url: 'https://dolrm.gov.np/api/uploads/registration_rates/registration_rates_pradesh_1.pdf'
  },
  '2': { notes: null, url: '' },
  '3': { notes: null, url: 'https://dolrm.gov.np/api/uploads/registration_rates/registration_rates_pradesh_3.pdf' },
  '4': { notes: null, url: 'https://dolrm.gov.np/api/uploads/registration_rates/registration_rates_pradesh_4.pdf' },
  '5': { notes: null, url: 'https://dolrm.gov.np/api/uploads/registration_rates/registration_rates_pradesh_5.pdf' },
  '6': { notes: null, url: '' },
  '7': { notes: null, url: 'https://dolrm.gov.np/api/uploads/registration_rates/registration_rates_pradesh_7.pdf' },
};

function formatNepaliDigits(num: number): string {
  const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  const formatted = num.toLocaleString('en-IN');
  return formatted.replace(/[0-9]/g, (d) => nepaliDigits[parseInt(d, 10)]);
}

export default function DolmaRegistrationRateCalculator() {
  const [process, setProcess] = useState<string>('1'); // लिखत पारित
  const [subProcess, setSubProcess] = useState<string>('1'); // राजिनामा
  const [personCategory, setPersonCategory] = useState<string>(''); // छुट
  const [amount, setAmount] = useState<string>('5000000'); // ५० लाख
  const [curGeneration, setCurGeneration] = useState<string>('1'); // तीन पुस्ता भित्र
  const [dorFee, setDorFee] = useState<string>('0'); // द्वार सुविधा
  const [province, setProvince] = useState<string>('3'); // बागमती
  const [district, setDistrict] = useState<string>('27'); // काठमाडौं
  const [munType, setMunType] = useState<string>('P'); // महानगरपालिका
  const [landType, setLandType] = useState<string>('0'); // जग्गा / घर जग्गा

  const [loading, setLoading] = useState<boolean>(false);
  const [resultHtml, setResultHtml] = useState<string | null>(null);
  const [localRows, setLocalRows] = useState<{ sn: string; subject: string; fee: string }[] | null>(null);
  const [totalFee, setTotalFee] = useState<string | null>(null);

  // When process changes, reset subProcess to first available
  useEffect(() => {
    const subs = DOLMA_SUB_PROCESSES[process] || [];
    if (subs.length > 0) {
      setSubProcess(subs[0].id);
    } else {
      setSubProcess('');
    }
  }, [process]);

  // When province changes, reset district to first available
  useEffect(() => {
    const dists = DOLMA_DISTRICTS[province] || [];
    if (dists.length > 0) {
      setDistrict(dists[0].id);
    } else {
      setDistrict('');
    }
  }, [province]);

  // Handle Calculation
  const handleCalculate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    setResultHtml(null);
    setLocalRows(null);
    setTotalFee(null);

    const formData = new URLSearchParams();
    formData.append('process', process);
    formData.append('sub_process', subProcess);
    formData.append('person_category', personCategory);
    formData.append('amount', amount);
    formData.append('province', province);
    formData.append('district', district);
    formData.append('mun_type', munType);
    formData.append('land_type', landType);
    if (process === '1' && (subProcess === '8' || subProcess === '2')) {
      formData.append('curGeneration', curGeneration);
    }
    if (process === '1') {
      formData.append('dorFee', dorFee);
    }

    try {
      // 1. Try calling the live Cloudflare Pages Function (which proxies to DOLMA)
      const res = await fetch('/api/dolma-calc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString()
      });

      if (res.ok) {
        const text = await res.text();
        if (text && text.includes('<table')) {
          setResultHtml(text);
          setLoading(false);
          return;
        }
      }
      throw new Error('API fallback');
    } catch {
      // 2. Exact Local DOLMA Calculation Engine Fallback
      calculateLocally();
      setLoading(false);
    }
  };

  const calculateLocally = () => {
    const val = parseFloat(amount) || 0;
    const isKathmanduValley = province === '3' && ['25', '26', '27'].includes(district);
    const rows: { sn: string; subject: string; fee: string }[] = [];
    let grandTotal = 0;
    let snCounter = 1;

    if (process === '1') {
      // लिखत पारित
      if (subProcess === '69') {
        // पति-पत्नीबीचको सगोलनामा (रु. ५००)
        rows.push({ sn: formatNepaliDigits(snCounter++), subject: 'रजिष्ट्रेशन दस्तुर', fee: '५००' });
        grandTotal = 500;
      } else if (subProcess === '3') {
        // अंशवण्डा (0.2%)
        const fee = val * 0.002;
        rows.push({ sn: formatNepaliDigits(snCounter++), subject: 'रजिष्ट्रेशन दस्तुर (0.2%)', fee: formatNepaliDigits(fee) });
        grandTotal = fee;
      } else if (subProcess === '8') {
        // शेषपछिको बकसपत्र
        const fee = curGeneration === '1' ? 7000 : 12000;
        rows.push({
          sn: formatNepaliDigits(snCounter++),
          subject: curGeneration === '1' ? 'रजिष्ट्रेशन दस्तुर (तीन पुस्ता भित्र)' : 'रजिष्ट्रेशन दस्तुर (तीन पुस्ता बाहिर)',
          fee: formatNepaliDigits(fee)
        });
        grandTotal = fee;
      } else if (subProcess === '2') {
        // हालैदेखिको बकसपत्र
        let bagmati = 0;
        if (isKathmanduValley) {
          bagmati = val * 0.005;
          rows.push({ sn: formatNepaliDigits(snCounter++), subject: 'बागमती (0.5%)', fee: formatNepaliDigits(bagmati) });
        }
        grandTotal = bagmati;
      } else {
        // राजिनामा (Subprocess 1, 54, 71, etc.)
        let baseRate = 0.04;
        let ratePct = '4%';
        if (munType === 'P') { baseRate = 0.05; ratePct = '5%'; }
        else if (munType === 'S') { baseRate = 0.045; ratePct = '4.5%'; }
        else if (munType === 'M') { baseRate = 0.04; ratePct = '4%'; }
        else if (munType === 'V') {
          baseRate = (province === '4' || province === '6' || province === '7') ? 0.02 : 0.03;
          ratePct = baseRate === 0.02 ? '2%' : '3%';
        }

        // Bagmati cess in Kathmandu Valley
        let bagmati = 0;
        if (isKathmanduValley) {
          bagmati = val * 0.005;
          rows.push({ sn: formatNepaliDigits(snCounter++), subject: 'बागमती (0.5%)', fee: formatNepaliDigits(bagmati) });
        }

        const regFee = val * baseRate;
        rows.push({ sn: formatNepaliDigits(snCounter++), subject: `रजिष्ट्रेशन दस्तुर (${ratePct})`, fee: formatNepaliDigits(regFee) });

        // Discounts
        let discount = 0;
        if (personCategory === 'female') {
          discount = regFee * 0.25;
          rows.push({ sn: formatNepaliDigits(snCounter++), subject: 'महिला (25%)', fee: formatNepaliDigits(discount) });
        } else if (personCategory === 'single_female') {
          discount = regFee * 0.35;
          rows.push({ sn: formatNepaliDigits(snCounter++), subject: 'एकल महिला (35%)', fee: formatNepaliDigits(discount) });
        } else if (personCategory === '8') {
          discount = regFee * 1.0;
          rows.push({ sn: formatNepaliDigits(snCounter++), subject: 'छुट - जन आन्दोलनका सहिद परिवार (100%)', fee: formatNepaliDigits(discount) });
        } else if (personCategory === '6') {
          discount = regFee * 1.0;
          rows.push({ sn: formatNepaliDigits(snCounter++), subject: 'छुट - हलिया / मुक्त कमैया (100%)', fee: formatNepaliDigits(discount) });
        } else if (['1', '2', '3', '4', '7', '9', '10'].includes(personCategory)) {
          discount = regFee * 0.25;
          const labelMap: Record<string, string> = {
            '1': 'ज्येष्ठ नागरिक',
            '2': 'अपाङ्ग',
            '3': 'दृष्टिविहीन',
            '4': 'वाक्य विहीन',
            '7': 'दलित/पिछडिएको जाति',
            '9': 'नाबालिक',
            '10': 'रेमिट्यान्स प्राप्त'
          };
          rows.push({ sn: formatNepaliDigits(snCounter++), subject: `छुट - ${labelMap[personCategory] || 'विशेष'} (25%)`, fee: formatNepaliDigits(discount) });
        }

        grandTotal = bagmati + (regFee - discount);
      }
    } else {
      // रोक्का, फुकुवा वा अन्य सेवा
      rows.push({ sn: formatNepaliDigits(snCounter++), subject: 'रजिष्ट्रेशन / सेवा दस्तुर', fee: '०' });
      grandTotal = 0;
    }

    setLocalRows(rows);
    setTotalFee(formatNepaliDigits(grandTotal));
  };

  const currentNotes = PROVINCE_NOTES[province];
  const activeSubProcesses = DOLMA_SUB_PROCESSES[process] || [];
  const activeDistricts = DOLMA_DISTRICTS[province] || [];

  return (
    <div className="space-y-6">

      {/* 1. OFFICIAL DOLMA HEADER BANNER */}
      <div className="bg-gradient-to-r from-red-950 via-slate-900 to-blue-950 border border-red-500/30 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white rounded-2xl p-1.5 shadow-md flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Nepal Emblem / DOLMA"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold text-red-300">नेपाल सरकार | भूमि व्यवस्था, सहकारी तथा गरिबी निवारण मन्त्रालय</p>
              <h1 className="text-xl sm:text-2xl font-black text-white">
                भूमि व्यवस्थापन तथा अभिलेख विभाग (DOLMA)
              </h1>
              <p className="text-xs text-slate-300 font-medium">बबरमहल, काठमाडौं | अनलाइन रजिष्ट्रेशन रेट क्यालकुलेटर</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold text-amber-300 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>आधिकारिक सरकारी ढाँचा (Test Mode)</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN FORM CARD */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        
        <div className="text-center pb-2 border-b border-slate-200 dark:border-slate-800">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
            रजिष्ट्रेशन दस्तुर, सेवा शुल्क र घरजग्गा रोक्का दस्तुर
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            कारोबार विवरण, ठेगाना र थैली अंक भरी आधिकारिक सरकारी दस्तुर तुरुन्त निकाल्नुहोस्
          </p>
        </div>

        <form onSubmit={handleCalculate} className="space-y-6">
          
          {/* FIELDSET 1: कारोबार विवरण */}
          <fieldset className="border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
            <legend className="px-3 text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              <span>कारोबार विवरण</span>
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* प्रक्रिया */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  <span>प्रक्रिया</span>
                  <span className="text-red-500">*</span>
                </label>
                <select
                  value={process}
                  onChange={(e) => setProcess(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500 font-medium"
                  required
                >
                  {DOLMA_PROCESSES.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>

              {/* कारोबार किसिम */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  <span>कारोबार किसिम</span>
                  <span className="text-red-500">*</span>
                </label>
                <select
                  value={subProcess}
                  onChange={(e) => setSubProcess(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500 font-medium"
                  required
                >
                  {activeSubProcesses.map((sp) => (
                    <option key={sp.id} value={sp.id}>{sp.name}</option>
                  ))}
                </select>
              </div>

              {/* छूट किसिम */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  छूटको लागि योग्य भएमा किसिम
                </label>
                <select
                  value={personCategory}
                  onChange={(e) => setPersonCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500 font-medium"
                >
                  {DOLMA_EXEMPTIONS.map((ex) => (
                    <option key={ex.id} value={ex.id}>{ex.name}</option>
                  ))}
                </select>
              </div>

              {/* थैली अंक */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  <span>थैली अंक (रु.)</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="उदा: 5000000"
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white font-mono font-bold focus:outline-hidden focus:border-emerald-500"
                  required
                />
              </div>

            </div>

            {/* Conditional Extras (पुस्ता & द्वार सुविधा) */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-xs text-slate-700 dark:text-slate-300">
              
              {/* तीन पुस्ता भित्र / बाहिर (shown for बकसपत्र sub_process 8 or 2) */}
              {process === '1' && (subProcess === '8' || subProcess === '2') && (
                <div className="flex items-center gap-4 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span className="font-bold text-slate-900 dark:text-white">पुस्ता विवरण:</span>
                  <label className="inline-flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="curGeneration"
                      value="1"
                      checked={curGeneration === '1'}
                      onChange={(e) => setCurGeneration(e.target.value)}
                      className="accent-emerald-600"
                    />
                    <span>तीन पुस्ता भित्र</span>
                  </label>
                  <label className="inline-flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="curGeneration"
                      value="2"
                      checked={curGeneration === '2'}
                      onChange={(e) => setCurGeneration(e.target.value)}
                      className="accent-emerald-600"
                    />
                    <span>तीन पुस्ता बाहिर</span>
                  </label>
                </div>
              )}

              {/* द्वार सुविधा शुल्क (shown for लिखत पारित process 1) */}
              {process === '1' && (
                <div className="flex items-center gap-4 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span className="font-bold text-slate-900 dark:text-white">द्वार सुविधा:</span>
                  <label className="inline-flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="dorFee"
                      value="1"
                      checked={dorFee === '1'}
                      onChange={(e) => setDorFee(e.target.value)}
                      className="accent-emerald-600"
                    />
                    <span>द्वार सुविधा शुल्क लिने</span>
                  </label>
                  <label className="inline-flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="dorFee"
                      value="0"
                      checked={dorFee === '0'}
                      onChange={(e) => setDorFee(e.target.value)}
                      className="accent-emerald-600"
                    />
                    <span>द्वार सुविधा शुल्क नलिने</span>
                  </label>
                </div>
              )}

            </div>

          </fieldset>

          {/* FIELDSET 2: जग्गाको ठेगाना */}
          <fieldset className="border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
            <legend className="px-3 text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              <span>जग्गाको ठेगाना</span>
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* प्रदेश */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  <span>प्रदेश</span>
                  <span className="text-red-500">*</span>
                </label>
                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500 font-medium"
                  required
                >
                  {DOLMA_PROVINCES.map((pr) => (
                    <option key={pr.id} value={pr.id}>{pr.name}</option>
                  ))}
                </select>
              </div>

              {/* जिल्ला */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  <span>जिल्ला</span>
                  <span className="text-red-500">*</span>
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500 font-medium"
                  required
                >
                  {activeDistricts.map((d) => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>

              {/* स्थानीय तहको किसिम */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  <span>स्थानीय तहको किसिम</span>
                  <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  {[
                    { id: 'V', label: 'गाउँपालिका' },
                    { id: 'M', label: 'नगरपालिका' },
                    { id: 'S', label: 'उप-महानगर' },
                    { id: 'P', label: 'महानगरपालिका' }
                  ].map((m) => (
                    <label key={m.id} className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer">
                      <input
                        type="radio"
                        name="mun_type"
                        value={m.id}
                        checked={munType === m.id}
                        onChange={(e) => setMunType(e.target.value)}
                        className="accent-emerald-600"
                        required
                      />
                      <span className="text-[11px] truncate">{m.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* जग्गा / घर जग्गाको प्रकार */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  <span>जग्गाको प्रकार</span>
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col gap-1.5 text-xs">
                  <label className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="land_type"
                      value="0"
                      checked={landType === '0'}
                      onChange={(e) => setLandType(e.target.value)}
                      className="accent-emerald-600"
                    />
                    <span className="text-[11px]">जग्गा / घर जग्गा</span>
                  </label>
                  <label className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="land_type"
                      value="1"
                      checked={landType === '1'}
                      onChange={(e) => setLandType(e.target.value)}
                      className="accent-emerald-600"
                    />
                    <span className="text-[11px]">सामूहिक आवास (Housing)</span>
                  </label>
                </div>
              </div>

            </div>

          </fieldset>

          {/* SUBMIT BUTTON */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-white text-sm font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer disabled:opacity-50"
            >
              <Calculator className="w-4 h-4" />
              <span>{loading ? 'गणना हुँदैछ...' : 'गणना गर्नुहोस'}</span>
            </button>
          </div>

        </form>

        {/* 3. CALCULATION RESULT TABLE */}
        {(resultHtml || localRows) && (
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>गणना परिणाम (Calculation Result)</span>
              </h3>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 font-bold border border-emerald-300 dark:border-emerald-800">
                आधिकारिक दर
              </span>
            </div>

            {/* If Raw DOLMA HTML returned */}
            {resultHtml ? (
              <div 
                className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-100 [&_table]:w-full [&_table]:border-collapse [&_th]:bg-slate-200 dark:[&_th]:bg-slate-700 [&_th]:p-2.5 [&_td]:p-2.5 [&_td]:border-b [&_td]:border-slate-200 dark:[&_td]:border-slate-700"
                dangerouslySetInnerHTML={{ __html: resultHtml }}
              />
            ) : localRows ? (
              /* Local Clean Table Fallback */
              <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-200/80 dark:bg-slate-700/80 border-b border-slate-300 dark:border-slate-600 font-bold text-slate-900 dark:text-white">
                      <th className="p-3 text-center w-16">क्र. सं.</th>
                      <th className="p-3">बिषय</th>
                      <th className="p-3 text-right">दस्तुर / शुल्क</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {localRows.map((r, idx) => (
                      <tr key={idx} className="hover:bg-slate-100/60 dark:hover:bg-slate-700/40">
                        <td className="p-3 text-center font-mono">{r.sn}</td>
                        <td className="p-3 font-medium">{r.subject}</td>
                        <td className="p-3 text-right font-mono font-bold text-emerald-600 dark:text-emerald-400">
                          रु. {r.fee}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-emerald-50/60 dark:bg-emerald-950/30 font-black border-t-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white">
                      <td className="p-3"></td>
                      <td className="p-3 text-base">जम्मा</td>
                      <td className="p-3 text-right text-base font-mono text-emerald-600 dark:text-emerald-300">
                        रु. {totalFee}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : null}

          </div>
        )}

        {/* 4. VIVIDH (NOTES) & PROVINCIAL RULES SECTION */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              विविध (नोट) तथा प्रदेशीय कानुन:
            </h4>
          </div>

          {currentNotes?.notes && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
              {currentNotes.notes}
            </div>
          )}

          {currentNotes?.url && (
            <div>
              <a
                href={currentNotes.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors shadow-2xs"
              >
                <span>प्रदेशको आधिकारिक कानुन PDF हेर्नुहोस्</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Official Disclaimer */}
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>कृपया :</strong> यसमा देखिएको रकम र सम्बन्धित प्रदेशको रजिष्ट्रेशन दस्तुर, सेवा शुल्क र घरजग्गा रोक्का दस्तुर फरक देखिएमा, सम्बन्धित प्रदेशले तोकेको दरलाई मान्यता दिइनेछ।
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
