'use client';

import React, { useState } from 'react';
import { Split, CheckCircle2, AlertCircle } from 'lucide-react';

export default function EnglishKittaKatChecker() {
  const [region, setRegion] = useState<'valley' | 'terai' | 'hills'>('valley');
  const [landType, setLandType] = useState<'residential' | 'agricultural' | 'commercial'>('residential');
  const [areaSqM, setAreaSqM] = useState<string>('260');
  const [roadFt, setRoadFt] = useState<string>('13');
  const [pieces, setPieces] = useState<number>(2);

  const area = parseFloat(areaSqM) || 0;
  const road = parseFloat(roadFt) || 0;
  const perPieceSqM = pieces > 0 ? area / pieces : 0;

  // Exact Land Use Regulation 2079 thresholds matching KittaKatChecker.tsx
  const minAreaPerPiece =
    landType === 'commercial'
      ? 200
      : landType === 'residential'
      ? region === 'terai'
        ? 169.3
        : 130
      : region === 'valley'
      ? 500
      : region === 'terai'
      ? 675
      : 1000;

  const minRoadFt = landType === 'commercial' ? 16 : landType === 'residential' ? 10 : 8;
  const areaOk = perPieceSqM >= minAreaPerPiece;
  const roadOk = road >= minRoadFt;
  const eligible = areaOk && roadOk;

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-4">
        <Split className="w-5 h-5 text-emerald-600" />
        <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
          Nepal Kitta Kat (Land Partition) Eligibility Checker
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <label className="space-y-1">
          <span className="text-xs font-bold text-slate-600 dark:text-slate-400 block">Region</span>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value as any)}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white"
          >
            <option value="valley">Kathmandu Valley</option>
            <option value="terai">Terai / Inner Madhesh</option>
            <option value="hills">Hilly / Mountain Districts</option>
          </select>
        </label>

        <label className="space-y-1">
          <span className="text-xs font-bold text-slate-600 dark:text-slate-400 block">Land Classification</span>
          <select
            value={landType}
            onChange={(e) => setLandType(e.target.value as any)}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white"
          >
            <option value="residential">Residential (Awasiya)</option>
            <option value="agricultural">Agricultural (Krishi)</option>
            <option value="commercial">Commercial / Urban Core</option>
          </select>
        </label>

        <label className="space-y-1">
          <span className="text-xs font-bold text-slate-600 dark:text-slate-400 block">Total Area (Sq. Meters)</span>
          <input
            type="number"
            min={1}
            value={areaSqM}
            onChange={(e) => setAreaSqM(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white font-mono"
          />
        </label>

        <label className="space-y-1">
          <span className="text-xs font-bold text-slate-600 dark:text-slate-400 block">Road Width (Feet)</span>
          <input
            type="number"
            min={0}
            value={roadFt}
            onChange={(e) => setRoadFt(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white font-mono"
          />
        </label>

        <label className="space-y-1">
          <span className="text-xs font-bold text-slate-600 dark:text-slate-400 block">Split Into Plots</span>
          <input
            type="number"
            min={2}
            max={50}
            value={pieces}
            onChange={(e) => setPieces(Math.max(2, parseInt(e.target.value, 10) || 2))}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white font-mono"
          />
        </label>
      </div>

      <div
        className={`p-5 rounded-2xl border flex items-start gap-3 ${
          eligible
            ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
            : 'bg-rose-50/70 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200'
        }`}
      >
        {eligible ? (
          <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
        ) : (
          <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
        )}
        <div className="space-y-1 text-xs sm:text-sm">
          <p className="font-black text-base">
            {eligible
              ? 'ELIGIBLE: Meets Baseline Minimum Area & Road Width Standards'
              : 'NOT ELIGIBLE: Below Minimum Statutory Kitta Kat Threshold'}
          </p>
          <p>
            Each partitioned plot gets <strong>{perPieceSqM.toFixed(1)} sq.m</strong> ({(perPieceSqM / 31.796).toFixed(2)} Aana / {(perPieceSqM / 16.93).toFixed(2)} Dhur). Minimum required for <strong>{landType}</strong> in <strong>{region}</strong> is <strong>{minAreaPerPiece} sq.m</strong> per parcel and at least <strong>{minRoadFt} ft</strong> road width.
          </p>
        </div>
      </div>
    </div>
  );
}
