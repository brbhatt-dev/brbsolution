'use client';

import React, { useState } from 'react';
import {
  Calculator,
  RotateCcw,
  AlertTriangle,
  Info,
  Calendar,
  Plus,
  Trash2,
  TrendingUp,
  Landmark,
  Coins
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
  ],
};

export const PREV_SUB_PROCESS_OPTIONS = [
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
];

interface FiscalItem {
  process: string;
  subProcess: string;
  amount: string;
  generation: string;
  prevSubProcess: string;
  prevAmount: string;
  date: string;
  expense: string;
}

function formatNepaliDigits(num: number): string {
  const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  const formatted = Math.round(num).toLocaleString('en-IN');
  return formatted.replace(/[0-9]/g, (d) => nepaliDigits[parseInt(d, 10)]);
}

function parseNepaliYear(dateStr: string): number {
  if (!dateStr) return 2075;
  const match = dateStr.match(/^(\d{4})/);
  if (match) {
    return parseInt(match[1], 10);
  }
  return 2075;
}

export default function DolmaCgtCalculator() {
  // Owner: 1 = व्यक्ति, 2 = संस्था
  const [owner, setOwner] = useState<string>('1');

  // Current Transaction
  const [process, setProcess] = useState<string>('1');
  const [curSubProcess, setCurSubProcess] = useState<string>('1');
  const [curAmount, setCurAmount] = useState<string>('5000000');
  const [curGeneration, setCurGeneration] = useState<string>('2'); // 1 = तीन पुस्ता भित्र, 2 = तीन पुस्ता बाहिर

  // Previous Acquisition Details
  const [prevSubProcess, setPrevSubProcess] = useState<string>('1');
  const [prevAmount, setPrevAmount] = useState<string>('3000000');
  const [prevDate, setPrevDate] = useState<string>('2075-01-01');
  const [prevExpense, setPrevExpense] = useState<string>('100000');

  // Other Transactions in Current Fiscal Year
  const [otherTransaction, setOtherTransaction] = useState<string>('2'); // 1 = छ, 2 = छैन
  const [fiscalItems, setFiscalItems] = useState<FiscalItem[]>([]);

  // State for result & loading
  const [loading, setLoading] = useState<boolean>(false);
  const [resultHtml, setResultHtml] = useState<string | null>(null);
  const [localRows, setLocalRows] = useState<any[] | null>(null);
  const [grandTotalTax, setGrandTotalTax] = useState<number>(0);
  const [holdingYearsInfo, setHoldingYearsInfo] = useState<string>('');

  // Handle process change
  const handleProcessChange = (procId: string) => {
    setProcess(procId);
    const subList = DOLMA_SUB_PROCESSES[procId] || [];
    setCurSubProcess(subList[0]?.id || '1');
  };

  // Add Fiscal Item
  const handleAddFiscalItem = () => {
    setFiscalItems((prev) => [
      ...prev,
      {
        process: '1',
        subProcess: '1',
        amount: '',
        generation: '2',
        prevSubProcess: '1',
        prevAmount: '',
        date: '2078-01-01',
        expense: '0',
      }
    ]);
  };

  // Remove Fiscal Item
  const handleRemoveFiscalItem = (idx: number) => {
    setFiscalItems((prev) => prev.filter((_, i) => i !== idx));
  };

  // Update Fiscal Item
  const handleUpdateFiscalItem = (idx: number, field: keyof FiscalItem, val: string) => {
    setFiscalItems((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [field]: val };
      return copy;
    });
  };

  // Check if generation selector should be shown
  const showGenerationSelector = (proc: string, sub: string) => {
    if (proc === '1' && ['1', '2', '4', '9', '11', '54', '71', '73'].includes(sub)) {
      return true;
    }
    return false;
  };

  // Calculate CGT
  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResultHtml(null);
    setLocalRows(null);

    // Compute holding years info
    const pYear = parseNepaliYear(prevDate);
    const currentNepaliYear = 2081;
    const diff = currentNepaliYear - pYear;
    if (diff >= 5) {
      setHoldingYearsInfo(`५ वर्ष वा सोभन्दा बढी स्वामित्व (${diff} वर्ष, २०७६ पूर्व दर्ता)`);
    } else {
      setHoldingYearsInfo(`५ वर्षभन्दा कम स्वामित्व (${diff} वर्ष, २०७६ पछि दर्ता)`);
    }

    const formData = new URLSearchParams();
    formData.append('owner', owner);
    formData.append('process', process);
    formData.append('curSubProcess', curSubProcess);
    formData.append('curAmount', curAmount);
    if (showGenerationSelector(process, curSubProcess)) {
      formData.append('curGeneration', curGeneration);
    }
    formData.append('prevSubProcess', prevSubProcess);
    formData.append('prevAmount', prevAmount);
    formData.append('prevDate', prevDate);
    formData.append('prevExpense', prevExpense || '0');
    formData.append('otherTransaction', otherTransaction);

    if (otherTransaction === '1') {
      fiscalItems.forEach((item, idx) => {
        formData.append('fiscalProcess[]', item.process);
        formData.append('fiscalSubProcess[]', item.subProcess);
        formData.append('fiscalAmount[]', item.amount || '0');
        formData.append(`fiscalGeneration${idx}`, item.generation);
        formData.append('fiscalPrevSubProcess[]', item.prevSubProcess);
        formData.append('fiscalPrevAmount[]', item.prevAmount || '0');
        formData.append('fiscalDate[]', item.date);
        formData.append('fiscalExpense[]', item.expense || '0');
      });
    }

    try {
      // 1. Call Cloudflare Pages edge function proxy
      const res = await fetch('/api/dolma-cgt', {
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
      // 2. High-precision offline local calculation engine
      calculateLocally();
      setLoading(false);
    }
  };

  const calculateLocally = () => {
    const rows: any[] = [];
    let totalTax = 0;

    // Helper to calculate a single transaction row
    const calcSingle = (
      sn: number,
      amtStr: string,
      pSub: string,
      pAmtStr: string,
      pDateStr: string,
      pExpStr: string,
      genStr: string,
      cSub: string
    ) => {
      const curVal = parseFloat(amtStr) || 0;
      const prevVal = parseFloat(pAmtStr) || 0;
      const expVal = parseFloat(pExpStr) || 0;
      const totalCost = prevVal + expVal;

      const pYear = parseNepaliYear(pDateStr);
      const isFivePlus = (2081 - pYear) >= 5;

      let taxable = 0;
      let rateStr = '०%';
      let rateDec = 0;
      let tax = 0;

      if (cSub === '3' || (cSub === '2' && genStr === '1')) {
        // अंशवण्डा वा तीन पुस्ता भित्रको बकसपत्र => ०%
        taxable = curVal;
        rateStr = '०%';
        rateDec = 0;
        tax = 0;
      } else if (owner === '2') {
        // संस्था (१.५% अग्रिम कर / TDS)
        taxable = curVal;
        rateStr = '१.५%';
        rateDec = 0.015;
        tax = Math.round(curVal * rateDec);
      } else if (cSub === '2' && genStr === '2') {
        // तीन पुस्ता बाहिरको बकसपत्र
        taxable = curVal;
        rateStr = isFivePlus ? '२.५%' : '५%';
        rateDec = isFivePlus ? 0.025 : 0.05;
        tax = Math.round(curVal * rateDec);
      } else {
        // राजिनामा (सामान्य बिक्री)
        taxable = curVal - totalCost;
        rateStr = isFivePlus ? '२.५%' : '५%';
        rateDec = isFivePlus ? 0.025 : 0.05;
        if (taxable > 0) {
          tax = Math.round(taxable * rateDec);
        } else {
          tax = 0;
        }
      }

      return {
        sn: formatNepaliDigits(sn),
        curAmount: formatNepaliDigits(curVal),
        cost: formatNepaliDigits(totalCost),
        taxable: (taxable < 0 ? '-' : '') + formatNepaliDigits(Math.abs(taxable)),
        rate: rateStr,
        tax: formatNepaliDigits(tax),
        rawTax: tax
      };
    };

    // 1. Current transaction
    const row1 = calcSingle(
      1,
      curAmount,
      prevSubProcess,
      prevAmount,
      prevDate,
      prevExpense,
      curGeneration,
      curSubProcess
    );
    rows.push(row1);
    totalTax += row1.rawTax;

    // 2. Additional transactions if any
    if (otherTransaction === '1') {
      fiscalItems.forEach((item, idx) => {
        const row = calcSingle(
          idx + 2,
          item.amount,
          item.prevSubProcess,
          item.prevAmount,
          item.date,
          item.expense,
          item.generation,
          item.subProcess
        );
        rows.push(row);
        totalTax += row.rawTax;
      });
    }

    setLocalRows(rows);
    setGrandTotalTax(totalTax);
  };

  const handleReset = () => {
    setOwner('1');
    setProcess('1');
    setCurSubProcess('1');
    setCurAmount('5000000');
    setCurGeneration('2');
    setPrevSubProcess('1');
    setPrevAmount('3000000');
    setPrevDate('2075-01-01');
    setPrevExpense('100000');
    setOtherTransaction('2');
    setFiscalItems([]);
    setResultHtml(null);
    setLocalRows(null);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-4 sm:p-7 space-y-6">
      
      {/* Header Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 mb-2">
            <Coins className="w-3.5 h-3.5" />
            <span>BR Bhatta | Land Solution Nepal</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            पुँजीगत लाभकर क्यालकुलेटर (Capital Gain Tax)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            मालपोत कार्यालयमा जग्गा वा घरजग्गा बिक्री गर्दा आन्तरिक राजस्व विभाग (IRD) लाई बुझाउनुपर्ने लाभकरको हिसाब गर्नुहोस्।
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>पुनः रिसेट</span>
          </button>
        </div>
      </div>

      {/* Main Calculation Form */}
      <form onSubmit={handleCalculate} className="space-y-6">
        
        {/* Section 1: जग्गाधनी छान्नुहोस् */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-3">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200">
            १. जग्गाधनीको किसिम छान्नुहोस् <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3 max-w-md">
            <label
              className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition-all ${
                owner === '1'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              <input
                type="radio"
                name="owner"
                value="1"
                checked={owner === '1'}
                onChange={() => setOwner('1')}
                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
              />
              <span>व्यक्ति (Individual)</span>
            </label>

            <label
              className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition-all ${
                owner === '2'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              <input
                type="radio"
                name="owner"
                value="2"
                checked={owner === '2'}
                onChange={() => setOwner('2')}
                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
              />
              <span>संस्था (Company / Entity)</span>
            </label>
          </div>
        </div>

        {/* Section 2: हाल गर्न खोजेको कारोबार विवरण */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              २. हाल गर्न खोजेको बिक्री कारोबार विवरण
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* प्रक्रिया */}
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                प्रक्रिया <span className="text-red-500">*</span>
              </label>
              <select
                value={process}
                onChange={(e) => handleProcessChange(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 dark:text-slate-100"
              >
                {DOLMA_PROCESSES.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            {/* कारोबार किसिम */}
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                कारोबार किसिम <span className="text-red-500">*</span>
              </label>
              <select
                value={curSubProcess}
                onChange={(e) => setCurSubProcess(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 dark:text-slate-100"
              >
                {(DOLMA_SUB_PROCESSES[process] || []).map((sub) => (
                  <option key={sub.id} value={sub.id}>{sub.name}</option>
                ))}
              </select>
            </div>

            {/* थैली अंक */}
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                थैली अंक (घर लगायत अन्य सहित रु.) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={curAmount}
                onChange={(e) => setCurAmount(e.target.value)}
                placeholder="उदा. ५०,००,०००"
                required
                className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 dark:text-slate-100 font-mono"
              />
              <div className="flex gap-1.5 mt-1.5">
                {['2500000', '5000000', '10000000'].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setCurAmount(preset)}
                    className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900 cursor-pointer"
                  >
                    रु. {formatNepaliDigits(parseInt(preset, 10))}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* तीन पुस्ता भित्र / बाहिर (Conditional) */}
          {showGenerationSelector(process, curSubProcess) && (
            <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center gap-4">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">नाता सम्बन्ध:</span>
              <label className="inline-flex items-center gap-1.5 text-xs text-slate-800 dark:text-slate-200 cursor-pointer">
                <input
                  type="radio"
                  name="curGeneration"
                  value="1"
                  checked={curGeneration === '1'}
                  onChange={() => setCurGeneration('1')}
                  className="text-emerald-600 focus:ring-emerald-500"
                />
                <span>तीन पुस्ता भित्र</span>
              </label>
              <label className="inline-flex items-center gap-1.5 text-xs text-slate-800 dark:text-slate-200 cursor-pointer">
                <input
                  type="radio"
                  name="curGeneration"
                  value="2"
                  checked={curGeneration === '2'}
                  onChange={() => setCurGeneration('2')}
                  className="text-emerald-600 focus:ring-emerald-500"
                />
                <span>तीन पुस्ता बाहिर</span>
              </label>
            </div>
          )}
        </div>

        {/* Section 3: स्वामित्व कायम हुँदाको कारोबार विवरण */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <Landmark className="w-4 h-4 text-emerald-600" />
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              ३. स्वामित्व कायम हुँदाको साविक कारोबार विवरण (खरिद / प्राप्ति)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* साविक कारोबार किसिम */}
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                साविक कारोबार किसिम
              </label>
              <select
                value={prevSubProcess}
                onChange={(e) => setPrevSubProcess(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 dark:text-slate-100"
              >
                {PREV_SUB_PROCESS_OPTIONS.map((sub) => (
                  <option key={sub.id} value={sub.id}>{sub.name}</option>
                ))}
              </select>
            </div>

            {/* साविक थैली अंक */}
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                साविक थैली अंक (रु.)
              </label>
              <input
                type="number"
                value={prevAmount}
                onChange={(e) => setPrevAmount(e.target.value)}
                placeholder="उदा. ३०,००,०००"
                className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 dark:text-slate-100 font-mono"
              />
            </div>

            {/* कारोबार मिति (नेपाली वि.सं.) */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                  कारोबार मिति (वि.सं.)
                </label>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">YYYY-MM-DD</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={prevDate}
                  onChange={(e) => setPrevDate(e.target.value)}
                  placeholder="उदा. 2075-01-01"
                  className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 dark:text-slate-100 font-mono pl-8"
                />
                <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3 pointer-events-none" />
              </div>
              <div className="flex gap-1.5 mt-1.5">
                <button
                  type="button"
                  onClick={() => setPrevDate('2074-05-15')}
                  className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-medium cursor-pointer"
                >
                  &ge; ५ वर्ष (२०७४)
                </button>
                <button
                  type="button"
                  onClick={() => setPrevDate('2079-05-15')}
                  className="text-[10px] px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-medium cursor-pointer"
                >
                  &lt; ५ वर्ष (२०७९)
                </button>
              </div>
            </div>

            {/* अन्य मान्य खर्च */}
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                अन्य खर्च (रु.)
              </label>
              <input
                type="number"
                value={prevExpense}
                onChange={(e) => setPrevExpense(e.target.value)}
                placeholder="उदा. १,००,०००"
                className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 dark:text-slate-100 font-mono"
              />
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                घर/जग्गा सुधार वा प्रमाणित दस्तुर खर्च
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: चालु आर्थिक वर्षभित्र गरिएका अन्य बिक्री कारोबार */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                ४. चालु आर्थिक वर्षभित्र जग्गाधनीले मुलुकभित्र गरेका अन्य बिक्री कारोबार
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                के चालु आ.व. मा सोही जग्गाधनीका अन्य जग्गा पनि बिक्री भएका छन्?
              </p>
            </div>

            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-1.5 text-xs text-slate-800 dark:text-slate-200 cursor-pointer">
                <input
                  type="radio"
                  name="otherTransaction"
                  value="1"
                  checked={otherTransaction === '1'}
                  onChange={() => {
                    setOtherTransaction('1');
                    if (fiscalItems.length === 0) handleAddFiscalItem();
                  }}
                  className="text-emerald-600 focus:ring-emerald-500"
                />
                <span>छ (Yes)</span>
              </label>

              <label className="inline-flex items-center gap-1.5 text-xs text-slate-800 dark:text-slate-200 cursor-pointer">
                <input
                  type="radio"
                  name="otherTransaction"
                  value="2"
                  checked={otherTransaction === '2'}
                  onChange={() => setOtherTransaction('2')}
                  className="text-emerald-600 focus:ring-emerald-500"
                />
                <span>छैन (No)</span>
              </label>
            </div>
          </div>

          {/* Dynamic Repeater for Other Fiscal Year Transactions */}
          {otherTransaction === '1' && (
            <div className="space-y-4 pt-3 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  चालु आ.व. का अन्य कारोबारहरूको सूची ({fiscalItems.length})
                </span>
                <button
                  type="button"
                  onClick={handleAddFiscalItem}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>थप कारोबार थप्नुहोस्</span>
                </button>
              </div>

              {fiscalItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3 relative"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-700">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      अन्य कारोबार #{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFiscalItem(idx)}
                      className="inline-flex items-center gap-1 text-xs text-red-600 hover:text-red-700 dark:text-red-400 hover:underline cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>हटाउनुहोस्</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    <div>
                      <label className="block mb-1 font-medium">बिक्री कारोबार किसिम</label>
                      <select
                        value={item.subProcess}
                        onChange={(e) => handleUpdateFiscalItem(idx, 'subProcess', e.target.value)}
                        className="w-full px-2 py-1.5 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded"
                      >
                        {DOLMA_SUB_PROCESSES['1'].map((sub) => (
                          <option key={sub.id} value={sub.id}>{sub.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block mb-1 font-medium">बिक्री थैली अंक (रु.)</label>
                      <input
                        type="number"
                        value={item.amount}
                        onChange={(e) => handleUpdateFiscalItem(idx, 'amount', e.target.value)}
                        placeholder="उदा. २०,००,०००"
                        className="w-full px-2 py-1.5 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded font-mono"
                      />
                    </div>

                    <div>
                      <label className="block mb-1 font-medium">साविक खरिद थैली (रु.)</label>
                      <input
                        type="number"
                        value={item.prevAmount}
                        onChange={(e) => handleUpdateFiscalItem(idx, 'prevAmount', e.target.value)}
                        placeholder="उदा. १५,००,०००"
                        className="w-full px-2 py-1.5 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded font-mono"
                      />
                    </div>

                    <div>
                      <label className="block mb-1 font-medium">साविक खरिद मिति (वि.सं.)</label>
                      <input
                        type="text"
                        value={item.date}
                        onChange={(e) => handleUpdateFiscalItem(idx, 'date', e.target.value)}
                        placeholder="2078-01-01"
                        className="w-full px-2 py-1.5 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded font-mono"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-500/20 disabled:opacity-50 transition-all cursor-pointer"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>पुँजीगत लाभकर हिसाब हुँदैछ...</span>
              </>
            ) : (
              <>
                <Calculator className="w-4 h-4" />
                <span>पुँजीगत लाभकर (CGT) गणना गर्नुहोस्</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Results Display */}
      {(resultHtml || localRows) && (
        <div className="mt-8 space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800 animate-fadeIn">
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                गणना नतिजा (Calculation Breakdown)
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                पुँजीगत लाभकर हिसाब विवरण
              </h3>
            </div>
            {holdingYearsInfo && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                {holdingYearsInfo}
              </span>
            )}
          </div>

          {/* Official HTML Table Rendered with Modern Styles */}
          {resultHtml ? (
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div 
                className="dolma-table-container p-2 text-sm"
                dangerouslySetInnerHTML={{ __html: resultHtml }} 
              />
            </div>
          ) : localRows && (
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 text-xs font-semibold">
                  <tr>
                    <th className="px-4 py-3">क्र. सं.</th>
                    <th className="px-4 py-3">थैली अंक (रु.)</th>
                    <th className="px-4 py-3">लागत / खर्च (रु.)</th>
                    <th className="px-4 py-3">करयोग्य रकम (रु.)</th>
                    <th className="px-4 py-3">कर दर</th>
                    <th className="px-4 py-3 text-right">कर रकम (रु.)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {localRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                      <td className="px-4 py-3 font-medium">{row.sn}</td>
                      <td className="px-4 py-3 font-mono">{row.curAmount}</td>
                      <td className="px-4 py-3 font-mono">{row.cost}</td>
                      <td className="px-4 py-3 font-mono font-semibold text-slate-800 dark:text-slate-200">{row.taxable}</td>
                      <td className="px-4 py-3">
                        <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                          {row.rate}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-right">
                        रु. {row.tax}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-emerald-50/70 dark:bg-emerald-950/30 font-bold border-t-2 border-emerald-500">
                    <td colSpan={5} className="px-4 py-3 text-slate-900 dark:text-slate-100">
                      जम्मा पुँजीगत लाभकर (Total CGT)
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-emerald-700 dark:text-emerald-300 text-base">
                      रु. {formatNepaliDigits(grandTotalTax)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Quick Info & Tax Rules Reference Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 text-xs text-blue-900 dark:text-blue-200 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-sm text-blue-800 dark:text-blue-300">
                <Info className="w-4 h-4" />
                <span>पुँजीगत लाभकर सम्बन्धी प्रमुख नियमहरू:</span>
              </div>
              <ul className="list-disc pl-4 space-y-1">
                <li><b>५ वर्ष वा सोभन्दा बढी स्वामित्व:</b> जग्गा वा घरजग्गा खरिद गरी ५ वर्ष वा सोभन्दा बढी समयपछि बिक्री गर्दा खुद नाफाको <b>५%</b> (वा ऐतिहासिक दर २.५%) लाग्दछ।</li>
                <li><b>५ वर्षभन्दा कम स्वामित्व:</b> ५ वर्षभित्रै खरिद-बिक्री गर्दा खुद नाफाको <b>७.५%</b> (वा ५%) लाभकर लाग्दछ।</li>
                <li><b>संस्था (कम्पनी):</b> संस्थाको हकमा सम्पूर्ण थैली रकममा १.५% अग्रिम कर (TDS) मालपोतमा लाग्ने व्यवस्था छ।</li>
                <li><b>अंशवण्डा र ३ पुस्ता भित्रको बकस:</b> लाभकर लाग्दैन (०%)।</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-sm text-amber-800 dark:text-amber-300">
                <AlertTriangle className="w-4 h-4" />
                <span>कृपया ध्यान दिनुहोला (Disclaimer):</span>
              </div>
              <p>
                यस क्यालकुलेटरमा देखिएको रकम नेपालको प्रचलित कानुन र राजस्व नियमावली अनुसारको अनुमानित हिसाब हो। लिखत पास गर्दा सम्बन्धित मालपोत कार्यालयका राजस्व अधिकृतले निर्धारण गरेको दरलाई नै अन्तिम आधिकारिक मान्यता दिइनेछ।
              </p>
            </div>
          </div>

        </div>
      )}

      {/* Global CSS for Styling the Official Table */}
      <style jsx global>{`
        .dolma-table-container table {
          width: 100%;
          border-collapse: collapse;
          font-family: inherit;
        }
        .dolma-table-container th {
          background-color: rgba(241, 245, 249, 0.8);
          padding: 10px 14px;
          text-align: left;
          font-size: 13px;
          font-weight: 600;
          color: #334155;
          border-bottom: 1px solid #e2e8f0;
        }
        .dark .dolma-table-container th {
          background-color: rgba(30, 41, 59, 0.8);
          color: #cbd5e1;
          border-bottom: 1px solid #334155;
        }
        .dolma-table-container td {
          padding: 10px 14px;
          font-size: 13px;
          border-bottom: 1px solid #f1f5f9;
          color: #0f172a;
        }
        .dark .dolma-table-container td {
          border-bottom: 1px solid #1e293b;
          color: #f8fafc;
        }
        .dolma-table-container tr:last-child {
          background-color: rgba(16, 185, 129, 0.08);
          font-weight: bold;
          border-top: 2px solid #10b981;
        }
        .dolma-table-container tr:last-child td {
          color: #059669;
          font-size: 14px;
        }
        .dark .dolma-table-container tr:last-child td {
          color: #34d399;
        }
      `}</style>

    </div>
  );
}
