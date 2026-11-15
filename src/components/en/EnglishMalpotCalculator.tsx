'use client';

import React, { useState } from 'react';
import { Receipt } from 'lucide-react';

export default function EnglishMalpotCalculator() {
  const [valuationRs, setValuationRs] = useState<string>('5000000');
  const [purchaseRs, setPurchaseRs] = useState<string>('3000000');
  const [localBody, setLocalBody] = useState<'metro' | 'submetro' | 'muni' | 'rural'>('metro');
  const [buyerType, setBuyerType] = useState<'male' | 'female' | 'remote_female'>('male');
  const [ownedYears, setOwnedYears] = useState<'under5' | 'over5'>('over5');

  const baseVal = parseFloat(valuationRs) || 0;
  const boughtVal = parseFloat(purchaseRs) || 0;

  // Standard approximate Nepal provincial deed registration rate references
  const baseRatePct = localBody === 'metro' ? 4.5 : localBody === 'submetro' ? 4.5 : localBody === 'muni' ? 4.0 : 2.5;
  const grossRegFee = (baseVal * baseRatePct) / 100;
  const femaleDiscountPct = buyerType === 'remote_female' ? 50 : buyerType === 'female' ? 25 : 0;
  const netRegFee = grossRegFee * (1 - femaleDiscountPct / 100);

  // Capital Gains Tax (Income Tax Act 2058)
  const profit = Math.max(0, baseVal - boughtVal);
  const cgtRatePct = ownedYears === 'over5' ? 5.0 : 7.5;
  const cgtTax = (profit * cgtRatePct) / 100;

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-4">
        <Receipt className="w-5 h-5 text-emerald-600" />
        <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
          Nepal Land Registration Fee (Malpot) &amp; Capital Gains Tax (CGT) Estimator
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <label className="space-y-1.5">
          <span className="text-xs font-bold text-slate-600 dark:text-slate-400 block">
            Transaction / Thaili Valuation Amount (NPR)
          </span>
          <input
            type="number"
            min={0}
            value={valuationRs}
            onChange={(e) => setValuationRs(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white font-mono"
          />
        </label>

        <label className="space-y-1.5">
          <span className="text-xs font-bold text-slate-600 dark:text-slate-400 block">
            Seller&apos;s Original Purchase Price (NPR, for CGT)
          </span>
          <input
            type="number"
            min={0}
            value={purchaseRs}
            onChange={(e) => setPurchaseRs(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white font-mono"
          />
        </label>

        <label className="space-y-1.5">
          <span className="text-xs font-bold text-slate-600 dark:text-slate-400 block">
            Municipality Category
          </span>
          <select
            value={localBody}
            onChange={(e) => setLocalBody(e.target.value as any)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white"
          >
            <option value="metro">Metropolitan City (~4.5%)</option>
            <option value="submetro">Sub-Metropolitan City (~4.5%)</option>
            <option value="muni">Urban Municipality (~4.0%)</option>
            <option value="rural">Rural Municipality / Gaupalika (~2.5%)</option>
          </select>
        </label>

        <label className="space-y-1.5">
          <span className="text-xs font-bold text-slate-600 dark:text-slate-400 block">
            Buyer Rebate Eligibility
          </span>
          <select
            value={buyerType}
            onChange={(e) => setBuyerType(e.target.value as any)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white"
          >
            <option value="male">Standard Buyer (0% Rebate)</option>
            <option value="female">Single Female Ownership (25% Exemption)</option>
            <option value="remote_female">Female Ownership in Remote Himalayan Area (50% Exemption)</option>
          </select>
        </label>

        <label className="space-y-1.5">
          <span className="text-xs font-bold text-slate-600 dark:text-slate-400 block">
            Seller Holding Period (for Capital Gains Tax)
          </span>
          <select
            value={ownedYears}
            onChange={(e) => setOwnedYears(e.target.value as any)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white"
          >
            <option value="over5">Owned 5 Years or More (5% CGT)</option>
            <option value="under5">Owned Less Than 5 Years (7.5% CGT)</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Buyer Registration Fee (Net)</span>
          <p className="text-xl font-black text-emerald-700 dark:text-emerald-400 font-mono mt-1">
            Rs. {Math.round(netRegFee).toLocaleString('en-IN')} /-
          </p>
          <span className="text-[11px] text-slate-500">
            Rate {baseRatePct}% {femaleDiscountPct > 0 ? `(after ${femaleDiscountPct}% female exemption)` : ''}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Seller Capital Gains Tax ({cgtRatePct}%)</span>
          <p className="text-xl font-black text-amber-700 dark:text-amber-400 font-mono mt-1">
            Rs. {Math.round(cgtTax).toLocaleString('en-IN')} /-
          </p>
          <span className="text-[11px] text-slate-500">
            Calculated on Rs. {Math.round(profit).toLocaleString('en-IN')} net gain
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 text-white border border-slate-800">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Combined Gov Revenue Estimate</span>
          <p className="text-xl font-black text-emerald-400 font-mono mt-1">
            Rs. {Math.round(netRegFee + cgtTax).toLocaleString('en-IN')} /-
          </p>
          <span className="text-[11px] text-slate-400">Rates vary slightly by Provincial Finance Act</span>
        </div>
      </div>
    </div>
  );
}
