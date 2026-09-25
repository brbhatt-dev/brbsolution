'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Receipt, 
  Calculator, 
  Percent, 
  CheckCircle2, 
  Copy, 
  Info, 
  Printer, 
  ShieldCheck, 
  HelpCircle, 
  Coins, 
  Sparkles,
  ArrowRight,
  TrendingDown,
  UserCheck
} from 'lucide-react';
import AdSenseSlot from '@/components/AdSenseSlot';

export default function MalpotCalculator() {
  // Inputs
  const [propertyValue, setPropertyValue] = useState<number>(3000000);
  const [muniType, setMuniType] = useState<'metro' | 'submetro' | 'muni' | 'rural'>('metro');
  const [ownershipType, setOwnershipType] = useState<'general' | 'female' | 'senior' | 'marginalized' | 'joint'>('general');
  const [isMountainOrRemote, setIsMountainOrRemote] = useState<boolean>(false);

  // Capital Gains Tax (CGT) inputs
  const [hasGain, setHasGain] = useState<boolean>(true);
  const [purchasePrice, setPurchasePrice] = useState<number>(2000000);
  const [holdingYears, setHoldingYears] = useState<'over5' | 'under5' | 'private_resident'>('over5');

  // Print Slip State
  const [clientName, setClientName] = useState('');
  const [kittaNo, setKittaNo] = useState('');
  const [copied, setCopied] = useState(false);

  // Registration Tax Rates (Provincial & Local Financial Acts)
  const muniRates = {
    metro: { rate: 0.05, label: 'महानगरपालिका (५.०%)' },
    submetro: { rate: 0.045, label: 'उप-महानगरपालिका (४.५%)' },
    muni: { rate: 0.04, label: 'नगरपालिका (४.०%)' },
    rural: { rate: 0.03, label: 'गाउँपालिका (३.०%)' },
  };

  const regBaseRate = muniRates[muniType].rate;
  const grossRegFee = propertyValue * regBaseRate;

  // Rebate / Discount Calculation
  let discountRate = 0;
  let discountLabel = 'छुट छैन';

  if (ownershipType === 'joint') {
    discountLabel = 'दम्पती संयुक्त जग्गाधनी सहुलियत (रु. १०० मात्र)';
  } else if (ownershipType === 'female') {
    if (isMountainOrRemote || muniType === 'rural') {
      discountRate = 0.50;
      discountLabel = 'दुर्गम/गाउँपालिका महिला ५०% छुट';
    } else {
      discountRate = 0.25;
      discountLabel = 'महिला स्वामित्व २५% छुट';
    }
  } else if (ownershipType === 'senior' || ownershipType === 'marginalized') {
    discountRate = 0.25;
    discountLabel = 'ज्येष्ठ नागरिक / दलित / अपाङ्गता २५% छुट';
  }

  const discountAmount = ownershipType === 'joint' 
    ? Math.max(0, grossRegFee - 100) 
    : grossRegFee * discountRate;

  const netRegFee = ownershipType === 'joint' 
    ? 100 
    : (grossRegFee - discountAmount);

  // Capital Gains Tax (पुँजीगत लाभकर) Calculation
  const netGain = Math.max(0, propertyValue - purchasePrice);
  let cgtRate = 0;
  let cgtLabel = 'छैन';

  if (!hasGain || holdingYears === 'private_resident') {
    cgtRate = 0;
    cgtLabel = holdingYears === 'private_resident' ? '१० वर्ष बसोबास निजी घरजग्गा (पूर्ण छुट)' : 'पुँजीगत लाभ नभएको';
  } else if (holdingYears === 'over5') {
    cgtRate = 0.05;
    cgtLabel = '५ वर्ष वा सोभन्दा बढी स्वामित्व (५%)';
  } else {
    cgtRate = 0.075;
    cgtLabel = '५ वर्षभन्दा कम स्वामित्व (७.५%)';
  }

  const cgtAmount = netGain * cgtRate;

  // Auxiliary / Administrative fees
  const stampDocFee = 150; // लिखत फाराम तथा टिकट दस्तुर
  const totalGovtRevenue = netRegFee + cgtAmount + stampDocFee;

  const copySummary = () => {
    const text = `--- मालपोत रजिस्ट्रेसन तथा लाभकर हिसाब विवरण ---
थैली अङ्क (जग्गाको मूल्याङ्कन): रु. ${propertyValue.toLocaleString('en-IN')}
स्थानीय तह: ${muniRates[muniType].label}
स्वामित्व प्रकार: ${discountLabel}
---------------------------------------------
१. कुल रजिस्ट्रेसन दस्तुर: रु. ${grossRegFee.toLocaleString('en-IN')}
२. प्राप्त छुट रकम: - रु. ${discountAmount.toLocaleString('en-IN')}
३. खुद रजिस्ट्रेसन राजस्व (क्रेताले तिर्ने): रु. ${netRegFee.toLocaleString('en-IN')}
४. खुद पुँजीगत लाभ: रु. ${netGain.toLocaleString('en-IN')}
५. पुँजीगत लाभकर (CGT - बिक्रेताले तिर्ने): रु. ${cgtAmount.toLocaleString('en-IN')} (${(cgtRate * 100)}%)
६. लिखत टिकट दस्तुर: रु. ${stampDocFee}
---------------------------------------------
कुल सरकारी राजस्व: रु. ${totalGovtRevenue.toLocaleString('en-IN')}
गणना मिति: ${new Date().toLocaleDateString('ne-NP')}
स्रोत: www.brbhatta.com/tools/malpot-calculator`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-300 text-xs font-bold">
          <Receipt className="w-3.5 h-3.5 text-amber-600" />
          <span>आर्थिक ऐन तथा मालपोत नियमावली २०८१/८२ मापदण्ड</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          मालपोत रजिस्ट्रेसन दस्तुर तथा पुँजीगत लाभकर क्यालकुलेटर
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          नेपालमा घरजग्गा खरिद-बिक्री गर्दा लाग्ने रजिस्ट्रेसन शुल्क, महिला छुट सहुलियत, र पुँजीगत लाभकर (CGT) को १००% सही डिजिटल हिसाब।
        </p>
      </div>

      {/* Main Calculator Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-sm space-y-8 no-print">
        
        {/* Section 1: Property Valuation & Local Category */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
            <Building2 className="w-4 h-4 text-emerald-600" />
            <span>१. जग्गाको मूल्याङ्कन तथा स्थानीय तह छनोट (Property Details)</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Property Value Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                थैली अङ्क / रजिस्ट्रेसन मूल्याङ्कन (रु.):
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="50000"
                  step="50000"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Math.max(0, Number(e.target.value)))}
                  className="w-full pl-8 pr-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-sm focus:ring-2 focus:ring-emerald-500/20 focus:outline-emerald-600"
                />
                <span className="absolute left-3 top-2.5 text-xs font-bold text-slate-400">रु</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-1">
                मालपोतको न्यूनतम सरकारी मूल्याङ्कन वा आपसी सहमति थैली अङ्क।
              </p>
            </div>

            {/* Municipality Tier */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                स्थानीय तहको वर्ग (Municipality Tier):
              </label>
              <select
                value={muniType}
                onChange={(e) => setMuniType(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium text-xs focus:ring-2 focus:ring-emerald-500/20 focus:outline-emerald-600"
              >
                <option value="metro">काठमाडौँ उपत्यका / महानगरपालिका (५.०%)</option>
                <option value="submetro">उप-महानगरपालिका (४.५%)</option>
                <option value="muni">नगरपालिका (४.०%)</option>
                <option value="rural">गाउँपालिका क्षेत्र (३.०%)</option>
              </select>
              <p className="text-[10px] text-slate-500 mt-1">
                आर्थिक ऐन अनुसार सम्बन्धित स्थानीय निकायमा लाग्ने आधार दर।
              </p>
            </div>

            {/* Ownership / Rebate Category */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                स्वामित्व वर्ग / सहुलियत छुट:
              </label>
              <select
                value={ownershipType}
                onChange={(e) => setOwnershipType(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium text-xs focus:ring-2 focus:ring-emerald-500/20 focus:outline-emerald-600"
              >
                <option value="general">सामान्य / पुरुष (कुनै छुट छैन)</option>
                <option value="female">महिलाको एकल नाममा दर्ता (२५% - ५०% छुट)</option>
                <option value="joint">श्रीमान्-श्रीमती संयुक्त दर्ता (रु. १०० मात्र)</option>
                <option value="senior">ज्येष्ठ नागरिक (७० वर्ष माथि - २५% छुट)</option>
                <option value="marginalized">दलित / अपाङ्गता / सहिद परिवार (२५% छुट)</option>
              </select>
              <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1">
                {discountLabel}
              </p>
            </div>
          </div>

          {/* Toggle for Mountain/Remote Region if Female */}
          {ownershipType === 'female' && (
            <div className="flex items-center gap-2 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800/60 text-xs">
              <input
                type="checkbox"
                id="mountainRemote"
                checked={isMountainOrRemote}
                onChange={(e) => setIsMountainOrRemote(e.target.checked)}
                className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500 cursor-pointer"
              />
              <label htmlFor="mountainRemote" className="text-emerald-900 dark:text-emerald-200 font-medium cursor-pointer">
                जग्गा हिमाली, दुर्गम वा पिछडिएको क्षेत्रको गाउँपालिकामा पर्दछ (५०% अधिक छुट लागू हुने)
              </label>
            </div>
          )}
        </div>

        {/* Section 2: Capital Gains Tax (बिक्रेताले तिर्नुपर्ने लाभकर) */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Coins className="w-4 h-4 text-amber-600" />
              <span>२. पुँजीगत लाभकर हिसाब - बिक्रेता (Capital Gains Tax - Seller)</span>
            </h2>
            <div className="flex items-center gap-2">
              <label className="text-xs text-slate-600 dark:text-slate-400 font-medium cursor-pointer">
                बिक्रीमा नाफा (लाभ) भएको छ?
              </label>
              <input
                type="checkbox"
                checked={hasGain}
                onChange={(e) => setHasGain(e.target.checked)}
                className="w-4 h-4 text-amber-600 rounded border-slate-300 cursor-pointer"
              />
            </div>
          </div>

          {hasGain ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  साबिक खरिद मूल्य / आधार लागत (रु.):
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    step="50000"
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(Math.max(0, Number(e.target.value)))}
                    className="w-full pl-8 pr-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-sm focus:ring-2 focus:ring-amber-500/20 focus:outline-amber-600"
                  />
                  <span className="absolute left-3 top-2.5 text-xs font-bold text-slate-400">रु</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">
                  जग्गा खरिद गर्दाको लिखत थैली अङ्क।
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  स्वामित्व अवधि (Holding Duration):
                </label>
                <select
                  value={holdingYears}
                  onChange={(e) => setHoldingYears(e.target.value as any)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium text-xs focus:ring-2 focus:ring-amber-500/20 focus:outline-amber-600"
                >
                  <option value="over5">५ वर्ष वा सोभन्दा बढी स्वामित्व (५.०% लाभकर)</option>
                  <option value="under5">५ वर्षभन्दा कम स्वामित्व (७.५% लाभकर)</option>
                  <option value="private_resident">निजी आवासीय घरजग्गा (१० वर्ष बसोबास - ०% कर)</option>
                </select>
                <p className="text-[10px] text-slate-500 mt-1">
                  दर्ता मितिदेखि हालसम्मको जग्गाधनी प्रमाण।
                </p>
              </div>

              <div className="p-3 bg-amber-50/70 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800/60 flex flex-col justify-center">
                <span className="text-[11px] font-bold text-amber-800 dark:text-amber-300">
                  खुद पुँजीगत लाभ (Net Capital Gain):
                </span>
                <span className="text-lg font-black text-amber-900 dark:text-amber-200 font-mono">
                  रु. {netGain.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-amber-700 dark:text-amber-400">
                  (बिक्री मूल्य - खरिद लागत)
                </span>
              </div>
            </div>
          ) : (
            <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs text-slate-600 dark:text-slate-300">
              बिक्रीमा कुनै पुँजीगत नाफा नभएको खण्डमा बिक्रेताले कुनै लाभकर (CGT) तिर्नुपर्दैन।
            </div>
          )}
        </div>

        {/* Section 3: Summary Results Cards */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <Receipt className="w-4 h-4 text-indigo-600" />
            <span>३. भुक्तानी विवरण सारांश (Calculated Financial Summary)</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* 1. Buyer's Registration Fee */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-slate-800 border border-emerald-200 dark:border-emerald-800 space-y-2">
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider block">
                क्रेता (खरिदकर्ता) ले तिर्ने
              </span>
              <p className="text-2xl sm:text-3xl font-black text-emerald-900 dark:text-emerald-200 font-mono">
                रु. {netRegFee.toLocaleString('en-IN')}
              </p>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 space-y-1 pt-1 border-t border-emerald-200/60 dark:border-emerald-800/60">
                <div className="flex justify-between">
                  <span>कुल दस्तुर ({(regBaseRate * 100)}%):</span>
                  <span className="font-mono">रु. {grossRegFee.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-emerald-700 dark:text-emerald-400 font-bold">
                  <span>सहुलियत छुट:</span>
                  <span className="font-mono">- रु. {discountAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* 2. Seller's Capital Gains Tax */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-slate-800 border border-amber-200 dark:border-amber-800 space-y-2">
              <span className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider block">
                बिक्रेताले तिर्ने (पुँजीगत लाभकर)
              </span>
              <p className="text-2xl sm:text-3xl font-black text-amber-900 dark:text-amber-200 font-mono">
                रु. {cgtAmount.toLocaleString('en-IN')}
              </p>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 space-y-1 pt-1 border-t border-amber-200/60 dark:border-amber-800/60">
                <div className="flex justify-between">
                  <span>लाभकर दर:</span>
                  <span className="font-bold">{(cgtRate * 100)}%</span>
                </div>
                <div className="flex justify-between">
                  <span>पुँजीगत लाभ रकम:</span>
                  <span className="font-mono">रु. {netGain.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* 3. Total Combined Revenue */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-slate-100 dark:from-indigo-950/40 dark:to-slate-800 border border-indigo-200 dark:border-indigo-800 space-y-2">
              <span className="text-xs font-bold text-indigo-800 dark:text-indigo-300 uppercase tracking-wider block">
                कुल सरकारी राजस्व (Total Govt. Fee)
              </span>
              <p className="text-2xl sm:text-3xl font-black text-indigo-900 dark:text-indigo-200 font-mono">
                रु. {totalGovtRevenue.toLocaleString('en-IN')}
              </p>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 space-y-1 pt-1 border-t border-indigo-200/60 dark:border-indigo-800/60">
                <div className="flex justify-between">
                  <span>रजिस्ट्रेसन + लाभकर:</span>
                  <span className="font-mono">रु. {(netRegFee + cgtAmount).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>लिखत फाराम/टिकट:</span>
                  <span className="font-mono">रु. {stampDocFee}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Action Buttons: Print Land Slip & Copy Summary */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all active:scale-95 shadow-xs cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>कर स्लिप प्रिन्ट गर्नुहोस् (Print Tax Slip)</span>
            </button>

            <button
              onClick={copySummary}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold transition-all active:scale-95 shadow-xs cursor-pointer"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>विवरण कपी भयो!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-300" />
                  <span>हिसाब कपी गर्नुहोस् (Copy Summary)</span>
                </>
              )}
            </button>
          </div>

          <span className="text-[11px] text-slate-500">
            * स्थानीय कानुन तथा वार्षिक बजेट संशोधन अनुसार सामान्य फरक पर्न सक्छ।
          </span>
        </div>

      </div>

      {/* PRINT-ONLY FORMAL TAX CALCULATION SLIP */}
      <div 
        id="printable-land-slip"
        className="hidden print:block p-8 bg-white text-slate-900 border border-slate-300 rounded-xl space-y-6 font-sans mx-auto max-w-[210mm]"
      >
        <div className="border-b-2 border-emerald-800 pb-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-emerald-900">BR BHATTA • LAND SOLUTION</h1>
            <p className="text-xs text-slate-600">घरजग्गा रजिस्ट्रेसन दस्तुर तथा पुँजीगत लाभकर आधिकारिक स्लिप</p>
            <p className="text-[10px] text-slate-500">पोर्टल: www.brbhatta.com/tools/malpot-calculator</p>
          </div>
          <div className="text-right text-xs">
            <p className="font-bold text-slate-800">मिति: {new Date().toLocaleDateString('ne-NP')}</p>
            <p className="text-[10px] text-slate-500">स्लिप नं: BRB-TAX-{Math.floor(100000 + Math.random() * 900000)}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-200">
          <div>
            <span className="text-slate-500 block text-[10px]">थैली अङ्क (जग्गाको मूल्याङ्कन):</span>
            <span className="font-bold text-slate-900 text-sm">रु. {propertyValue.toLocaleString('en-IN')}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px]">स्थानीय तह वर्ग:</span>
            <span className="font-bold text-slate-900 text-sm">{muniRates[muniType].label}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px]">स्वामित्व सहुलियत:</span>
            <span className="font-bold text-slate-900 text-sm">{discountLabel}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px]">पुँजीगत लाभकर दर:</span>
            <span className="font-bold text-slate-900 text-sm">{cgtLabel}</span>
          </div>
        </div>

        <table className="w-full text-xs text-left border border-slate-200 rounded-lg overflow-hidden">
          <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
            <tr>
              <th className="py-2 px-3">विवरण</th>
              <th className="py-2 px-3">दर / प्रतिशत</th>
              <th className="py-2 px-3 text-right">रकम (रु.)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr>
              <td className="py-2 px-3">कुल रजिस्ट्रेसन दस्तुर</td>
              <td className="py-2 px-3">{(regBaseRate * 100)}%</td>
              <td className="py-2 px-3 text-right font-mono">रु. {grossRegFee.toLocaleString('en-IN')}</td>
            </tr>
            <tr>
              <td className="py-2 px-3 text-emerald-800">सहुलियत छुट</td>
              <td className="py-2 px-3 text-emerald-800 font-semibold">{discountLabel}</td>
              <td className="py-2 px-3 text-right font-mono text-emerald-800">- रु. {discountAmount.toLocaleString('en-IN')}</td>
            </tr>
            <tr className="bg-slate-50 font-bold">
              <td className="py-2 px-3 text-slate-900">खुद रजिस्ट्रेसन राजस्व (क्रेता)</td>
              <td className="py-2 px-3">—</td>
              <td className="py-2 px-3 text-right font-mono">रु. {netRegFee.toLocaleString('en-IN')}</td>
            </tr>
            <tr>
              <td className="py-2 px-3">पुँजीगत लाभकर (CGT - बिक्रेता)</td>
              <td className="py-2 px-3">{(cgtRate * 100)}%</td>
              <td className="py-2 px-3 text-right font-mono">रु. {cgtAmount.toLocaleString('en-IN')}</td>
            </tr>
            <tr>
              <td className="py-2 px-3">लिखत फाराम तथा टिकट</td>
              <td className="py-2 px-3">नियम अनुसार</td>
              <td className="py-2 px-3 text-right font-mono">रु. {stampDocFee}</td>
            </tr>
            <tr className="bg-emerald-50 text-emerald-950 font-black text-sm">
              <td className="py-2.5 px-3">कुल सरकारी राजस्व भुक्तानी</td>
              <td className="py-2.5 px-3">—</td>
              <td className="py-2.5 px-3 text-right font-mono">रु. {totalGovtRevenue.toLocaleString('en-IN')}</td>
            </tr>
          </tbody>
        </table>

        <div className="pt-10 grid grid-cols-2 gap-8 text-xs text-center border-t border-slate-200">
          <div>
            <div className="w-36 border-b border-slate-400 mx-auto mb-2"></div>
            <p className="font-bold">तयार गर्ने / लेखापढी व्यवसायी</p>
          </div>
          <div>
            <div className="w-36 border-b border-slate-400 mx-auto mb-2"></div>
            <p className="font-bold">जग्गाधनी / खरिदकर्ता</p>
          </div>
        </div>
      </div>

      {/* In-feed AdSense Slot */}
      <AdSenseSlot userFacingLabel="विज्ञापन (AdSense Slot)" />

      {/* Educational Guide on Malpot Fees */}
      <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 text-xs sm:text-sm">
        <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg flex items-center gap-2">
          <Info className="w-5 h-5 text-emerald-600" />
          <span>नेपालमा घरजग्गा रजिस्ट्रेसन तथा लाभकर सम्बन्धी मुख्य कानुनी व्यवस्थाहरू</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <h4 className="font-bold text-slate-900 dark:text-white">महिला स्वामित्व छुट (२५% देखि ५०%):</h4>
            <p>
              महिलाको नाममा मात्र जग्गा खरिद गरी रजिस्ट्रेसन पारित गर्दा सम्बन्धित प्रदेश आर्थिक ऐन अनुसार रजिस्ट्रेसन शुल्कमा २५% छुट पाइन्छ। हिमाली वा दुर्गम गाउँपालिकामा यो छुट ५०% सम्म हुन सक्छ।
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <h4 className="font-bold text-slate-900 dark:text-white">दम्पती संयुक्त जग्गाधनी (रु. १०० शुल्क):</h4>
            <p>
              कुनै एक श्रीमान् वा श्रीमतीको नाममा रहेको जग्गामा दुवैजनालाई संयुक्त जग्गाधनी कायम गर्न नामसारी गर्दा वा संयुक्त लिखत गर्दा सरकारले प्रोत्साहन स्वरूप मात्र रु. १०० को टोकन शुल्क लिने गर्दछ।
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <h4 className="font-bold text-slate-900 dark:text-white">पुँजीगत लाभकर (CGT ५% र ७.५%):</h4>
            <p>
              बिक्रेताले जग्गा बेच्दा साबिक खरिद मूल्यभन्दा बढीमा बेचेको खुद मुनाफामा ५ वर्षभन्दा बढी स्वामित्व भए ५% र ५ वर्षभन्दा कम स्वामित्व भए ७.५% पुँजीगत लाभकर मालपोत कार्यालयमा बुझाउनुपर्छ।
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <h4 className="font-bold text-slate-900 dark:text-white">निजी आवासीय घरजग्गा कर छुट:</h4>
            <p>
              यदि कुनै प्राकृतिक व्यक्तिले कम्तीमा १० वर्षदेखि बसोबास गरेको १ रोपनी (काठमाडौँ उपत्यका) वा १० कट्ठा (तराई) सम्मको निजी आवास बिक्री गर्दा पुँजीगत लाभकर पूर्ण छुट हुन्छ।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
