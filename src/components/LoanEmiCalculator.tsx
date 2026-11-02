'use client';

import React, { useState, useMemo } from 'react';
import { 
  Landmark, 
  Coins, 
  Calendar, 
  Percent, 
  ShieldAlert, 
  CheckCircle2, 
  Copy, 
  Check, 
  RotateCcw, 
  TrendingUp, 
  FileText, 
  Info,
  Scale
} from 'lucide-react';
import { copyToClipboard } from '@/lib/clipboard';

type LoanCategory = 'first_home' | 'inside_valley' | 'outside_valley' | 'land_mortgage';

interface LoanCategoryConfig {
  id: LoanCategory;
  name: string;
  maxLtvPercent: number;
  description: string;
}

const LOAN_CATEGORIES: Record<LoanCategory, LoanCategoryConfig> = {
  first_home: {
    id: 'first_home',
    name: 'पहिलो घर खरिद कर्जा (First Home Buyer)',
    maxLtvPercent: 70,
    description: 'नेपाल राष्ट्र बैंकको मौद्रिक नीति २०८१/८२ अनुसार पहिलो आवासीय घर निर्माण वा खरिदका लागि मूल्याङ्कनको अधिकतम ७०% सम्म कर्जा पाइन्छ।'
  },
  inside_valley: {
    id: 'inside_valley',
    name: 'आवासीय घर/जग्गा (काठमाडौँ उपत्यका भित्र)',
    maxLtvPercent: 50,
    description: 'काठमाडौँ, ललितपुर र भक्तपुर उपत्यका भित्र घरजग्गा धितो राख्दा बजार मूल्याङ्कनको अधिकतम ५०% सम्म ऋण लिन पाइन्छ।'
  },
  outside_valley: {
    id: 'outside_valley',
    name: 'आवासीय घर/जग्गा (उपत्यका बाहिर)',
    maxLtvPercent: 60,
    description: 'काठमाडौँ उपत्यका बाहिरका नगरपालिका तथा सहरहरूमा घरजग्गा धितोको अधिकतम ६०% सम्म कर्जा प्रवाह हुन्छ।'
  },
  land_mortgage: {
    id: 'land_mortgage',
    name: 'खाली जग्गा धितो / मोर्टगेज लोन (Land Mortgage)',
    maxLtvPercent: 40,
    description: 'घर नभएको खाली जग्गा मात्र धितो राखेर व्यक्तिगत वा व्यापारिक मोर्टगेज ऋण लिँदा अधिकतम ४०% सम्म मात्र सीमा तोकिएको छ।'
  }
};

export default function LoanEmiCalculator() {
  // Inputs
  const [propertyValuation, setPropertyValuation] = useState<number>(10000000); // 1 crore
  const [category, setCategory] = useState<LoanCategory>('inside_valley');
  const [loanAmount, setLoanAmount] = useState<number>(5000000); // 50 lakhs
  const [interestRate, setInterestRate] = useState<number>(9.5); // % p.a.
  const [tenureYears, setTenureYears] = useState<number>(15); // years
  const [copied, setCopied] = useState(false);

  const activeCategory = LOAN_CATEGORIES[category];

  // Maximum loan allowed by NRB LTV
  const maxAllowableLoan = useMemo(() => {
    return Math.round((propertyValuation * activeCategory.maxLtvPercent) / 100);
  }, [propertyValuation, activeCategory]);

  const isLtvExceeded = loanAmount > maxAllowableLoan;

  // Monthly EMI Calculation: [P * r * (1+r)^n] / [(1+r)^n - 1]
  const calculation = useMemo(() => {
    const P = loanAmount;
    const annualRate = interestRate;
    const r = annualRate / 12 / 100; // monthly rate
    const n = tenureYears * 12; // total months

    if (P <= 0 || r <= 0 || n <= 0) {
      return {
        monthlyEmi: 0,
        totalPayment: 0,
        totalInterest: 0,
        minIncomeRequired: 0,
        principalPercent: 50,
        interestPercent: 50
      };
    }

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const monthlyEmi = Math.round(emi);
    const totalPayment = Math.round(monthlyEmi * n);
    const totalInterest = Math.max(0, totalPayment - P);

    // DSR 50% Rule: EMI should not exceed 50% of gross verified income
    const minIncomeRequired = Math.round(monthlyEmi * 2);

    const principalPercent = Math.round((P / totalPayment) * 100) || 50;
    const interestPercent = 100 - principalPercent;

    return {
      monthlyEmi,
      totalPayment,
      totalInterest,
      minIncomeRequired,
      principalPercent,
      interestPercent
    };
  }, [loanAmount, interestRate, tenureYears]);

  // Year-by-year Amortization (first 5 years + year 10 + year 15)
  const schedule = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const emi = calculation.monthlyEmi;
    const rows = [];
    let balance = P;

    for (let year = 1; year <= Math.min(tenureYears, 10); year++) {
      let yearlyInterest = 0;
      let yearlyPrincipal = 0;

      for (let m = 1; m <= 12; m++) {
        if (balance <= 0) break;
        const interest = balance * r;
        const principal = emi - interest;
        yearlyInterest += interest;
        yearlyPrincipal += principal;
        balance -= principal;
      }

      rows.push({
        year,
        yearlyPrincipal: Math.round(yearlyPrincipal),
        yearlyInterest: Math.round(yearlyInterest),
        remainingBalance: Math.max(0, Math.round(balance))
      });
    }

    return rows;
  }, [loanAmount, interestRate, tenureYears, calculation.monthlyEmi]);

  const handleCopySummary = async () => {
    const text = `🏦 घरजग्गा धितो बैंक लोन EMI तथा मूल्याङ्कन हिसाब (BR Bhatta EMI Calculator)
--------------------------------------------------
• धितो सम्पत्ति बजार मूल्याङ्कन: रु. ${propertyValuation.toLocaleString('ne-NP')} /-
• कर्जाको प्रकार: ${activeCategory.name} (अधिकतम LTV: ${activeCategory.maxLtvPercent}%)
• स्वीकृत हुन सक्ने अधिकतम ऋण: रु. ${maxAllowableLoan.toLocaleString('ne-NP')} /-
• माग गरिएको ऋण रकम: रु. ${loanAmount.toLocaleString('ne-NP')} /-
• वार्षिक ब्याजदर: ${interestRate}%
• ऋणको अवधि: ${tenureYears} वर्ष (${tenureYears * 12} महिना)

💰 भुक्तानी विवरण:
• मासिक किस्ता (EMI): रु. ${calculation.monthlyEmi.toLocaleString('ne-NP')} /-
• कुल तिर्नुपर्ने ब्याज: रु. ${calculation.totalInterest.toLocaleString('ne-NP')} /-
• कुल भुक्तानी (साँवा + ब्याज): रु. ${calculation.totalPayment.toLocaleString('ne-NP')} /-
• आवश्यक न्यूनतम मासिक आम्दानी (DSR 50%): रु. ${calculation.minIncomeRequired.toLocaleString('ne-NP')} /-

🔗 पूर्ण हिसाब: https://www.brbhatta.com/tools/loan-emi-calculator`;

    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setPropertyValuation(10000000);
    setCategory('inside_valley');
    setLoanAmount(5000000);
    setInterestRate(9.5);
    setTenureYears(15);
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-6 sm:p-8 border border-emerald-900/40 shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-bold">
              <Landmark className="w-3.5 h-3.5 text-emerald-400" />
              <span>नेपाल राष्ट्र बैंकको मौद्रिक नीति २०८१/८२ (LTV र DSR) मापदण्ड अनुसार</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              जग्गा धितो बैंक लोन EMI तथा मूल्याङ्कन क्याल्कुलेटर
            </h2>
            <p className="text-sm text-emerald-200/90 leading-relaxed">
              आफ्नो जग्गा वा घरको बजार मूल्याङ्कन र ब्याजदर राख्नुहोस्। राष्ट्र बैंकको नियम अनुसार कतिसम्म ऋण पाइन्छ, मासिक EMI कति तिर्नुपर्छ र आवश्यक मासिक आम्दानी तुरुन्त पत्ता लगाउनुहोस्।
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <button
              onClick={handleReset}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>रिसेट</span>
            </button>
            <button
              onClick={handleCopySummary}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all active:scale-95"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'कपी भयो!' : 'लागत विवरण कपी'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Controls vs Computed Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form: Inputs (5 cols) */}
        <div className="lg:col-span-5 space-y-6 bg-white dark:bg-slate-900 p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <Coins className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>ऋण तथा धितोको विवरण भर्नुहोस्:</span>
          </h3>

          {/* 1. Category Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
              धितो सम्पत्तिको स्थान र कर्जाको प्रकार:
            </label>
            <div className="space-y-2">
              {(Object.keys(LOAN_CATEGORIES) as LoanCategory[]).map((key) => {
                const item = LOAN_CATEGORIES[key];
                const isSelected = category === key;
                return (
                  <div
                    key={key}
                    onClick={() => {
                      setCategory(key);
                      // Adjust loan if exceeds new LTV
                      const newMax = Math.round((propertyValuation * item.maxLtvPercent) / 100);
                      if (loanAmount > newMax) setLoanAmount(newMax);
                    }}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/60 dark:bg-emerald-950/40 shadow-xs ring-1 ring-emerald-500'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white">
                        {item.name}
                      </span>
                      <span className="text-xs font-black font-mono text-emerald-600 dark:text-emerald-400">
                        {item.maxLtvPercent}% LTV
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Property Valuation */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold">
              <label className="text-slate-700 dark:text-slate-300">
                सम्पत्ति बजार मूल्याङ्कन (Property Valuation):
              </label>
              <span className="text-emerald-600 dark:text-emerald-400 font-mono">
                रु. {(propertyValuation / 100000).toFixed(1)} लाख
              </span>
            </div>
            <input
              type="range"
              min={1000000}
              max={50000000}
              step={500000}
              value={propertyValuation}
              onChange={(e) => {
                const val = Number(e.target.value);
                setPropertyValuation(val);
                const max = Math.round((val * activeCategory.maxLtvPercent) / 100);
                if (loanAmount > max) setLoanAmount(max);
              }}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">रु.</span>
              <input
                type="number"
                min={500000}
                max={100000000}
                step={100000}
                value={propertyValuation}
                onChange={(e) => setPropertyValuation(Math.max(100000, Number(e.target.value)))}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-sm text-slate-900 dark:text-slate-100 font-mono"
              />
            </div>
            <p className="text-2xs text-slate-500">
              * बैंक भ्यालुएटरले निकालेको फेयर मार्केट भ्यालु (Fair Market Value) राख्नुहोस्।
            </p>
          </div>

          {/* 3. Loan Amount Requested */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold">
              <label className="text-slate-700 dark:text-slate-300">
                माग गरिएको ऋण रकम (Requested Loan Amount):
              </label>
              <span className="text-emerald-600 dark:text-emerald-400 font-mono">
                रु. {(loanAmount / 100000).toFixed(1)} लाख
              </span>
            </div>
            <input
              type="range"
              min={200000}
              max={Math.max(propertyValuation, 1000000)}
              step={100000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">रु.</span>
              <input
                type="number"
                min={100000}
                max={propertyValuation}
                step={50000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Math.max(50000, Number(e.target.value)))}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-sm text-slate-900 dark:text-slate-100 font-mono"
              />
            </div>

            {/* LTV Warning or Success notice */}
            {isLtvExceeded ? (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-2xs text-rose-800 dark:text-rose-300 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>
                  <strong>LTV सीमा नाघ्यो:</strong> राष्ट्र बैंकको नियम अनुसार यस श्रेणीमा मूल्याङ्कनको {activeCategory.maxLtvPercent}% भन्दा बढी (रु. {maxAllowableLoan.toLocaleString('ne-NP')}) कर्जा स्वीकृत हुन सक्दैन।
                </span>
              </div>
            ) : (
              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 text-2xs text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
                <span>स्वीकृत हुन सक्ने अधिकतम सीमा:</span>
                <span className="font-mono font-bold">रु. {maxAllowableLoan.toLocaleString('ne-NP')}</span>
              </div>
            )}
          </div>

          {/* 4. Interest Rate & Tenure */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                वार्षिक ब्याजदर (%):
              </label>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  min={5}
                  max={24}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-sm text-slate-900 dark:text-slate-100 font-mono"
                />
                <span className="text-xs font-bold text-slate-500">%</span>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                ऋण अवधि (वर्ष):
              </label>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  min={1}
                  max={30}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Math.max(1, Number(e.target.value)))}
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-sm text-slate-900 dark:text-slate-100 font-mono"
                />
                <span className="text-xs font-bold text-slate-500">वर्ष</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Output: EMI Summary & Visual Breakdown (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main EMI Highlight Box */}
          <div className="bg-linear-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-44 h-44 bg-white/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-emerald-100 text-xs font-semibold">
                <span>ऋण रकम: <strong>रु. {loanAmount.toLocaleString('ne-NP')}</strong> ({tenureYears} वर्षका लागि)</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white font-mono">
                  ब्याजदर: {interestRate}%
                </span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-emerald-200 font-bold">
                  मासिक किस्ता रकम (Monthly EMI):
                </p>
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-1">
                  रु. {calculation.monthlyEmi.toLocaleString('ne-NP')} /-
                </h3>
                <p className="text-2xs text-emerald-100 mt-1">
                  * प्रत्येक महिना बैंकलाई नियमित बुझाउनुपर्ने साँवा तथा ब्याजको बराबर किस्ता
                </p>
              </div>

              <div className="pt-3 border-t border-emerald-400/30 grid grid-cols-2 sm:grid-cols-3 gap-3 text-emerald-100 text-2xs sm:text-xs">
                <div>
                  <span className="block opacity-80">कुल ब्याज (Interest):</span>
                  <span className="font-mono font-bold text-white text-xs sm:text-sm">
                    रु. {calculation.totalInterest.toLocaleString('ne-NP')}
                  </span>
                </div>
                <div>
                  <span className="block opacity-80">कुल भुक्तानी (Total):</span>
                  <span className="font-mono font-bold text-white text-xs sm:text-sm">
                    रु. {calculation.totalPayment.toLocaleString('ne-NP')}
                  </span>
                </div>
                <div>
                  <span className="block opacity-80">आवश्यक मासिक तलब:</span>
                  <span className="font-mono font-bold text-amber-200 text-xs sm:text-sm">
                    रु. {calculation.minIncomeRequired.toLocaleString('ne-NP')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Proportion Bar */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center justify-between">
              <span>कुल भुक्तानी अनुपात (Principal vs Interest Ratio):</span>
              <span className="text-2xs text-slate-500 font-mono">{tenureYears * 12} किस्ता</span>
            </h4>

            <div className="space-y-2">
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-4 rounded-full overflow-hidden flex">
                <div 
                  className="bg-emerald-600 h-full transition-all duration-300"
                  style={{ width: `${calculation.principalPercent}%` }}
                />
                <div 
                  className="bg-amber-500 h-full transition-all duration-300"
                  style={{ width: `${calculation.interestPercent}%` }}
                />
              </div>

              <div className="flex justify-between text-xs font-semibold">
                <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
                  <span>मूल साँवा रकम (Principal): {calculation.principalPercent}%</span>
                </span>
                <span className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                  <span>कुल ब्याज (Interest): {calculation.interestPercent}%</span>
                </span>
              </div>
            </div>
          </div>

          {/* Yearly Amortization Schedule */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>वार्षिक सावाँ तथा ब्याज भुक्तानी तालिका (Amortization Schedule):</span>
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500">
                    <th className="py-2 text-left">वर्ष</th>
                    <th className="py-2 text-right">तिरेको साँवा (Principal)</th>
                    <th className="py-2 text-right">तिरेको ब्याज (Interest)</th>
                    <th className="py-2 text-right">बाँकी साँवा (Balance)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono">
                  {schedule.map((row) => (
                    <tr key={row.year} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2 text-left font-sans font-bold text-slate-700 dark:text-slate-300">
                        वर्ष {row.year}
                      </td>
                      <td className="py-2 text-right text-emerald-600 dark:text-emerald-400">
                        रु. {row.yearlyPrincipal.toLocaleString('ne-NP')}
                      </td>
                      <td className="py-2 text-right text-amber-600 dark:text-amber-400">
                        रु. {row.yearlyInterest.toLocaleString('ne-NP')}
                      </td>
                      <td className="py-2 text-right text-slate-900 dark:text-white font-bold">
                        रु. {row.remainingBalance.toLocaleString('ne-NP')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-2xs text-slate-500 dark:text-slate-400">
              * सुरुवाती वर्षहरूमा मासिक किस्ताको अधिकांश हिस्सा ब्याजमा जान्छ भने पछिल्ला वर्षहरूमा साँवा चुक्ता हुने दर द्रुत गतिमा बढ्छ।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
