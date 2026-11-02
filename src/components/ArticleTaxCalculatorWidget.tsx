'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  Coins, 
  ShieldCheck, 
  ArrowRight, 
  Percent, 
  Building2, 
  Sparkles, 
  Receipt,
  UserCheck,
  CheckCircle2,
  Info
} from 'lucide-react';

interface ArticleTaxCalculatorWidgetProps {
  initialPrice?: number;
  compact?: boolean;
}

export default function ArticleTaxCalculatorWidget({
  initialPrice = 5000000,
  compact = false,
}: ArticleTaxCalculatorWidgetProps) {
  // Input States
  const [price, setPrice] = useState<number>(initialPrice);
  const [muniType, setMuniType] = useState<'metro_ktm' | 'metro_other' | 'submetro' | 'mun' | 'rural'>('metro_ktm');
  const [discountType, setDiscountType] = useState<'none' | 'female_urban' | 'female_rural' | 'dalit_senior'>('none');
  const [hasCgt, setHasCgt] = useState<boolean>(false);
  const [cgtPeriod, setCgtPeriod] = useState<'more5' | 'less5'>('more5');
  const [profitAmount, setProfitAmount] = useState<number>(1000000);

  // Rate mapping based on Nepal Finance Act 2081/82
  const regRatePercent = useMemo(() => {
    switch (muniType) {
      case 'metro_ktm':
        return 5.0; // काठमाडौँ/ललितपुर महानगर (५%)
      case 'metro_other':
        return 5.0; // अन्य महानगरपालिका (५%)
      case 'submetro':
        return 4.5; // उपमहानगरपालिका (४.५%)
      case 'mun':
        return 4.0; // नगरपालिका (४%)
      case 'rural':
        return 2.0; // गाउँपालिका (२%)
      default:
        return 5.0;
    }
  }, [muniType]);

  // Discount percentage on registration fee
  const discountPercent = useMemo(() => {
    switch (discountType) {
      case 'female_urban':
        return 25; // सहरी क्षेत्र महिला २५%
      case 'female_rural':
        return 50; // ग्रामीण / दुर्गम क्षेत्र महिला ५०%
      case 'dalit_senior':
        return 25; // दलित / ज्येष्ठ नागरिक / अपाङ्गता २५%
      default:
        return 0;
    }
  }, [discountType]);

  // CGT Rate
  const cgtRate = cgtPeriod === 'more5' ? 0.05 : 0.075; // 5% if > 5 yrs, 7.5% if <= 5 yrs

  // Calculations
  const grossRegistrationFee = Math.round(price * (regRatePercent / 100));
  const discountSaved = Math.round(grossRegistrationFee * (discountPercent / 100));
  const netRegistrationFee = grossRegistrationFee - discountSaved;
  const cgtAmount = hasCgt ? Math.round(profitAmount * cgtRate) : 0;
  const officialServiceCharges = 500; // मालपोत विविध सेवा/दर्ता दस्तुर
  const grandTotal = netRegistrationFee + cgtAmount + officialServiceCharges;

  // Format Nepali Currency with commas (Lakh/Crore format)
  const formatNpr = (val: number): string => {
    return 'रु. ' + val.toLocaleString('en-IN');
  };

  // Convert large numbers to Nepali words representation
  const formatNepaliWords = (num: number): string => {
    if (num >= 10000000) {
      const crore = (num / 10000000).toFixed(2);
      return `${crore} करोड`;
    } else if (num >= 100000) {
      const lakh = (num / 100000).toFixed(2);
      return `${lakh} लाख`;
    } else if (num >= 1000) {
      const thousand = (num / 1000).toFixed(1);
      return `${thousand} हजार`;
    }
    return `${num}`;
  };

  const quickPricePills = [
    { label: '२० लाख', value: 2000000 },
    { label: '५० लाख', value: 5000000 },
    { label: '१ करोड', value: 10000000 },
    { label: '२ करोड', value: 20000000 },
  ];

  return (
    <div className="my-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white p-5 sm:p-7 shadow-xl border border-emerald-500/30 overflow-hidden relative">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      {/* Header */}
      <div className="relative z-10 space-y-2 pb-5 border-b border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span>तत्काल मालपोत कर क्याल्कुलेटर (Interactive Live Tool)</span>
          </div>
          <span className="text-[11px] text-slate-400 font-medium">
            आर्थिक ऐन २०८१/८२ मापदण्ड
          </span>
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight">
          जग्गा पास गर्दा लाग्ने शुल्क तथा महिला छुट हिसाब गर्नुहोस्
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          तपाईंको थैली अंक (वा सरकारी मूल्याङ्कन) राखेर पालिका स्तर र सहुलियत अनुसार मालपोतमा लाग्ने रजिष्ट्रेसन दस्तुर र पुँजीगत लाभकर एक क्लिकमा थाहा पाउनुहोस्:
        </p>
      </div>

      {/* Inputs Form */}
      <div className="relative z-10 pt-5 space-y-5">
        {/* Step 1: Land Amount Input & Quick Chips */}
        <div className="space-y-2.5">
          <label className="block text-xs sm:text-sm font-bold text-slate-200">
            १. जग्गाको थैली अंक / सरकारी मूल्याङ्कन (रकम रू.)
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
              रु.
            </span>
            <input
              type="number"
              min="100000"
              step="50000"
              value={price || ''}
              onChange={(e) => setPrice(Math.max(0, Number(e.target.value)))}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/90 border border-slate-700 rounded-xl text-white text-base sm:text-lg font-black tracking-wide focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              placeholder="5000000"
            />
          </div>

          {/* Quick Amount Selector Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] text-slate-400">द्रुत छनोट:</span>
            {quickPricePills.map((pill) => (
              <button
                key={pill.value}
                type="button"
                onClick={() => setPrice(pill.value)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  price === pill.value
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Municipality Level */}
        <div className="space-y-2">
          <label className="block text-xs sm:text-sm font-bold text-slate-200 flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>२. जग्गा रहेको स्थानीय तह (पालिका क्षेत्र)</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { id: 'metro_ktm', title: 'काठमाडौँ/ललितपुर', subtitle: '५% दस्तुर' },
              { id: 'metro_other', title: 'अन्य महानगर', subtitle: 'पोखरा, भरतपुर आदि (५%)' },
              { id: 'submetro', title: 'उपमहानगरपालिका', subtitle: 'इटहरी, दाङ आदि (४.५%)' },
              { id: 'mun', title: 'नगरपालिका क्षेत्र', subtitle: '४% दस्तुर' },
              { id: 'rural', title: 'गाउँपालिका क्षेत्र', subtitle: '२% न्यूनतम दस्तुर' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setMuniType(item.id as any)}
                className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                  muniType === item.id
                    ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-xs'
                    : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="font-bold text-xs">{item.title}</div>
                <div className="text-[10px] text-emerald-400 font-medium">{item.subtitle}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Female / Social Rebate Discount */}
        <div className="space-y-2">
          <label className="block text-xs sm:text-sm font-bold text-slate-200 flex items-center gap-1.5">
            <UserCheck className="w-4 h-4 text-pink-400" />
            <span>३. खरिदकर्ता सहुलियत छुट (महिला / दलित / अपाङ्गता)</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { id: 'none', label: 'सामान्य दर (छुट बिना)', badge: '०% छुट' },
              { id: 'female_urban', label: 'महिला (सहरी क्षेत्र)', badge: '२५% छुट' },
              { id: 'female_rural', label: 'महिला (दुर्गम/ग्रामीण)', badge: '५०% छुट' },
            ].map((disc) => (
              <button
                key={disc.id}
                type="button"
                onClick={() => setDiscountType(disc.id as any)}
                className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                  discountType === disc.id
                    ? 'bg-pink-500/20 border-pink-400 text-white shadow-xs'
                    : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span className="text-xs font-semibold">{disc.label}</span>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                  discountType === disc.id ? 'bg-pink-500 text-white' : 'bg-slate-700 text-slate-300'
                }`}>
                  {disc.badge}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 4: Optional Capital Gains Tax (CGT) Toggle */}
        <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/80 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Coins className="w-4 h-4 text-amber-400" />
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-200 block">
                  पुँजीगत लाभकर (CGT) पनि समावेश गर्ने?
                </span>
                <span className="text-[10px] text-slate-400">
                  बिक्रेताले नाफा कमाएको खण्डमा मालपोतमै बुझाउनुपर्छ
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setHasCgt(!hasCgt)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                hasCgt
                  ? 'bg-amber-500 text-slate-950 font-black'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {hasCgt ? 'समावेश छ (ON)' : 'छैन (OFF)'}
            </button>
          </div>

          {hasCgt && (
            <div className="pt-2 border-t border-slate-700/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-[11px] text-slate-300 mb-1 font-semibold">
                  स्वामित्व अवधि (बिक्रेताले कति समय राखेको?)
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setCgtPeriod('more5')}
                    className={`p-2 rounded-lg text-center font-bold border transition-all cursor-pointer ${
                      cgtPeriod === 'more5'
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    ५ वर्षभन्दा बढी (५%)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCgtPeriod('less5')}
                    className={`p-2 rounded-lg text-center font-bold border transition-all cursor-pointer ${
                      cgtPeriod === 'less5'
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    ५ वर्षभन्दा कम (७.५%)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-slate-300 mb-1 font-semibold">
                  अनुमानित शुद्ध नाफा रकम (रू.)
                </label>
                <input
                  type="number"
                  step="50000"
                  value={profitAmount}
                  onChange={(e) => setProfitAmount(Math.max(0, Number(e.target.value)))}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white font-bold text-xs focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  placeholder="1000000"
                />
              </div>
            </div>
          )}
        </div>

        {/* RESULTS CARD */}
        <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-emerald-800/60">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              हिसाबको विस्तृत विवरण (Calculation Breakdown)
            </span>
            <span className="text-xs font-mono font-bold text-slate-300">
              {formatNepaliWords(price)} को कारोबार
            </span>
          </div>

          <div className="space-y-2 text-xs sm:text-sm">
            <div className="flex items-center justify-between text-slate-300">
              <span>मूल रजिष्ट्रेसन दस्तुर ({regRatePercent}%):</span>
              <span className="font-mono font-bold text-white">{formatNpr(grossRegistrationFee)}</span>
            </div>

            {discountSaved > 0 && (
              <div className="flex items-center justify-between text-pink-300 font-semibold">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  महिला/सहुलियत छुट बचत ({discountPercent}%):
                </span>
                <span className="font-mono font-bold">- {formatNpr(discountSaved)}</span>
              </div>
            )}

            <div className="flex items-center justify-between text-slate-200 font-semibold pt-1 border-t border-slate-800">
              <span>शुद्ध रजिष्ट्रेसन राजस्व (Net Fee):</span>
              <span className="font-mono font-bold text-emerald-400">{formatNpr(netRegistrationFee)}</span>
            </div>

            {hasCgt && (
              <div className="flex items-center justify-between text-amber-300">
                <span>पुँजीगत लाभकर ({cgtPeriod === 'more5' ? '५%' : '७.५%'} of {formatNpr(profitAmount)}):</span>
                <span className="font-mono font-bold">+{formatNpr(cgtAmount)}</span>
              </div>
            )}

            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>मालपोत विविध/रोक्का दस्तुर (अनुमानित):</span>
              <span className="font-mono">+{formatNpr(officialServiceCharges)}</span>
            </div>
          </div>

          {/* GRAND TOTAL HIGHLIGHT */}
          <div className="pt-3 border-t border-emerald-700/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-xs text-slate-300 block font-medium">
                मालपोतमा बुझाउनुपर्ने जम्मा कुल अनुमानित राजस्व:
              </span>
              <span className="text-[11px] text-emerald-400 font-semibold">
                (करिब {formatNepaliWords(grandTotal)})
              </span>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-2xl sm:text-3xl font-black text-emerald-300 font-mono tracking-tight">
                {formatNpr(grandTotal)}
              </div>
            </div>
          </div>

          {/* Call-to-action for Full Slip & Print */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <div className="text-[11px] text-slate-300 flex items-center gap-1.5">
              <Receipt className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>आधिकारिक ७७ जिल्लाको दररेट र रसिद स्लिप प्रिन्ट चाहिन्छ?</span>
            </div>
            <Link
              href="/tools/malpot-calculator"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-colors shrink-0"
            >
              <span>पूर्ण मालपोत क्याल्कुलेटर खोल्नुहोस्</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
