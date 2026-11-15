'use client';

import React, { useState } from 'react';
import { Calculator, RotateCcw, Coins } from 'lucide-react';

const SQFT_PER_ROPANI = 5476;
const SQFT_PER_AANA = 342.25;
const SQFT_PER_PAISA = 85.5625;
const SQFT_PER_DAAM = 21.390625;
const SQFT_PER_BIGHA = 72900;
const SQFT_PER_KATTHA = 3645;
const SQFT_PER_DHUR = 182.25;
const SQFT_PER_SQM = 10.7639104167;
const SQFT_PER_ACRE = 43560;
const SQFT_PER_HECTARE = 107639.104167;

export default function EnglishLandConverter() {
  const [sqFt, setSqFt] = useState<number>(1369); // 4 Aana (~130 sqm min kitta)
  const [pricePerAana, setPricePerAana] = useState<string>('2500000');

  // Direct input helpers
  const ropaniWhole = Math.floor(sqFt / SQFT_PER_ROPANI);
  const remAfterRopani = sqFt - ropaniWhole * SQFT_PER_ROPANI;
  const aanaWhole = Math.floor(remAfterRopani / SQFT_PER_AANA);
  const remAfterAana = remAfterRopani - aanaWhole * SQFT_PER_AANA;
  const paisaWhole = Math.floor(remAfterAana / SQFT_PER_PAISA);
  const daamExact = (remAfterAana - paisaWhole * SQFT_PER_PAISA) / SQFT_PER_DAAM;

  const bighaWhole = Math.floor(sqFt / SQFT_PER_BIGHA);
  const remAfterBigha = sqFt - bighaWhole * SQFT_PER_BIGHA;
  const katthaWhole = Math.floor(remAfterBigha / SQFT_PER_KATTHA);
  const dhurExact = (remAfterBigha - katthaWhole * SQFT_PER_KATTHA) / SQFT_PER_DHUR;

  const [rIn, setRIn] = useState({ r: '0', a: '4', p: '0', d: '0' });
  const [bIn, setBIn] = useState({ b: '0', k: '1', d: '0' });

  const updateFromRopani = (next: { r: string; a: string; p: string; d: string }) => {
    setRIn(next);
    const total =
      (parseFloat(next.r) || 0) * SQFT_PER_ROPANI +
      (parseFloat(next.a) || 0) * SQFT_PER_AANA +
      (parseFloat(next.p) || 0) * SQFT_PER_PAISA +
      (parseFloat(next.d) || 0) * SQFT_PER_DAAM;
    setSqFt(Math.max(0, total));
  };

  const updateFromBigha = (next: { b: string; k: string; d: string }) => {
    setBIn(next);
    const total =
      (parseFloat(next.b) || 0) * SQFT_PER_BIGHA +
      (parseFloat(next.k) || 0) * SQFT_PER_KATTHA +
      (parseFloat(next.d) || 0) * SQFT_PER_DHUR;
    setSqFt(Math.max(0, total));
  };

  const totalAana = sqFt / SQFT_PER_AANA;
  const totalKattha = sqFt / SQFT_PER_KATTHA;
  const sqMeters = sqFt / SQFT_PER_SQM;
  const acres = sqFt / SQFT_PER_ACRE;
  const hectares = sqFt / SQFT_PER_HECTARE;
  const estPrice = totalAana * (parseFloat(pricePerAana) || 0);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2.5">
          <Calculator className="w-5 h-5 text-emerald-600" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
            Interactive Nepal Land Area &amp; Unit Converter
          </h2>
        </div>
        <button
          type="button"
          onClick={() => {
            setSqFt(5476);
            setRIn({ r: '1', a: '0', p: '0', d: '0' });
            setBIn({ b: '0', k: '1.5', d: '0.04' });
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 text-xs font-bold text-slate-600 dark:text-slate-300 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>1 Ropani Preset</span>
        </button>
      </div>

      {/* Input Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Ropani-Aana-Paisa-Daam */}
        <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-900/40 space-y-3">
          <p className="text-xs font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
            Hilly System (Ropani - Aana - Paisa - Daam)
          </p>
          <div className="grid grid-cols-4 gap-2">
            {(
              [
                ['r', 'Ropani'],
                ['a', 'Aana'],
                ['p', 'Paisa'],
                ['d', 'Daam'],
              ] as const
            ).map(([k, lbl]) => (
              <label key={k} className="space-y-1">
                <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block">{lbl}</span>
                <input
                  type="number"
                  min={0}
                  step="any"
                  value={rIn[k]}
                  onChange={(e) => updateFromRopani({ ...rIn, [k]: e.target.value })}
                  className="w-full px-2.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white font-mono"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Bigha-Kattha-Dhur */}
        <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 space-y-3">
          <p className="text-xs font-black text-amber-800 dark:text-amber-300 uppercase tracking-wider">
            Terai System (Bigha - Kattha - Dhur)
          </p>
          <div className="grid grid-cols-3 gap-2">
            {(
              [
                ['b', 'Bigha'],
                ['k', 'Kattha'],
                ['d', 'Dhur'],
              ] as const
            ).map(([k, lbl]) => (
              <label key={k} className="space-y-1">
                <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block">{lbl}</span>
                <input
                  type="number"
                  min={0}
                  step="any"
                  value={bIn[k]}
                  onChange={(e) => updateFromBigha({ ...bIn, [k]: e.target.value })}
                  className="w-full px-2.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white font-mono"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Metric / Imperial */}
        <div className="p-4 rounded-2xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-200/70 dark:border-sky-900/40 space-y-3">
          <p className="text-xs font-black text-sky-800 dark:text-sky-300 uppercase tracking-wider">
            Metric / Imperial (Sq. Ft or Sq. Meters)
          </p>
          <div className="grid grid-cols-2 gap-2">
            <label className="space-y-1">
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block">Square Feet</span>
              <input
                type="number"
                min={0}
                step="any"
                value={Number(sqFt.toFixed(2))}
                onChange={(e) => setSqFt(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full px-2.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white font-mono"
              />
            </label>
            <label className="space-y-1">
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block">Square Meters</span>
              <input
                type="number"
                min={0}
                step="any"
                value={Number(sqMeters.toFixed(2))}
                onChange={(e) => setSqFt(Math.max(0, (parseFloat(e.target.value) || 0) * SQFT_PER_SQM))}
                className="w-full px-2.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white font-mono"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Results Output Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Ropani-Aana Breakdown</span>
          <p className="text-sm sm:text-base font-black text-emerald-700 dark:text-emerald-400 mt-1 font-mono">
            {ropaniWhole}-{aanaWhole}-{paisaWhole}-{daamExact.toFixed(2)}
          </p>
          <span className="text-[11px] text-slate-500">({totalAana.toFixed(3)} total Aana)</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Bigha-Kattha Breakdown</span>
          <p className="text-sm sm:text-base font-black text-amber-700 dark:text-amber-400 mt-1 font-mono">
            {bighaWhole}-{katthaWhole}-{dhurExact.toFixed(2)}
          </p>
          <span className="text-[11px] text-slate-500">({totalKattha.toFixed(3)} total Kattha)</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Sq. Feet &amp; Sq. Meters</span>
          <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-1 font-mono">
            {sqFt.toLocaleString('en-US', { maximumFractionDigits: 2 })} sq.ft
          </p>
          <span className="text-[11px] text-slate-500">{sqMeters.toFixed(2)} sq.m</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Acre &amp; Hectare</span>
          <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-1 font-mono">
            {acres.toFixed(4)} Acres
          </p>
          <span className="text-[11px] text-slate-500">{hectares.toFixed(4)} Hectares</span>
        </div>
      </div>

      {/* Price Estimator */}
      <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Coins className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <p className="text-xs text-slate-300 font-semibold">Estimated Total Land Value (at Price per Aana NPR)</p>
            <p className="text-lg sm:text-xl font-black text-emerald-400 font-mono">
              Rs. {Math.round(estPrice).toLocaleString('en-IN')} /-
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Rate / Aana:</span>
          <input
            type="number"
            value={pricePerAana}
            onChange={(e) => setPricePerAana(e.target.value)}
            className="w-36 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-sm font-bold text-white font-mono"
          />
        </div>
      </div>
    </div>
  );
}
