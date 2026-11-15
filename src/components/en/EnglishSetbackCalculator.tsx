'use client';

import React, { useState } from 'react';
import { Ruler, Zap, AlertTriangle } from 'lucide-react';

interface RoadStandardEn {
  id: string;
  name: string;
  widthM: number;
  centerlineRowM: number;
  frontSetbackM: number;
  sideSetbackM: number;
  maxCoveragePct: number;
}

const ROAD_STANDARDS_EN: RoadStandardEn[] = [
  { id: 'highway', name: 'National / Arterial Highway (30m ROW)', widthM: 30, centerlineRowM: 15, frontSetbackM: 6, sideSetbackM: 2, maxCoveragePct: 50 },
  { id: 'major', name: 'Major Urban Road (10–14m)', widthM: 12, centerlineRowM: 6, frontSetbackM: 3, sideSetbackM: 1.5, maxCoveragePct: 60 },
  { id: 'secondary', name: 'Secondary Urban Road (8m / 26 ft)', widthM: 8, centerlineRowM: 4, frontSetbackM: 1.5, sideSetbackM: 1.5, maxCoveragePct: 65 },
  { id: 'branch', name: 'Residential Branch Road (6m / 20 ft)', widthM: 6, centerlineRowM: 3, frontSetbackM: 1.5, sideSetbackM: 1.5, maxCoveragePct: 70 },
  { id: 'feeder', name: 'Inner Residential Lane (4m / 13 ft)', widthM: 4, centerlineRowM: 2, frontSetbackM: 1.5, sideSetbackM: 1.5, maxCoveragePct: 70 },
  { id: 'deadend', name: 'Dead-End Alley (3m / 10 ft)', widthM: 3, centerlineRowM: 1.5, frontSetbackM: 1.5, sideSetbackM: 1.5, maxCoveragePct: 70 },
];

const HT_STANDARDS = [
  { kv: '11 kV (Distribution Line)', eachSideM: '1.25 – 2.0 m', totalCorridorM: '2.5 – 4.0 m', notes: 'Minimum horizontal/vertical clearance from building balconies/windows' },
  { kv: '33 kV (Sub-Transmission)', eachSideM: '2.0 – 3.0 m', totalCorridorM: '4.0 – 6.0 m', notes: 'Restricted overhead construction directly under conductor' },
  { kv: '66 kV (High Tension)', eachSideM: '9.0 m (~29.5 ft)', totalCorridorM: '18.0 m (~59 ft)', notes: 'Standard NEA Right-of-Way corridor (no permanent RCC building)' },
  { kv: '132 kV (High Tension)', eachSideM: '9.0 m (~29.5 ft)', totalCorridorM: '18.0 m (~59 ft)', notes: 'Standard NEA ROW corridor from transmission centerline' },
  { kv: '220 kV (Extra High Voltage)', eachSideM: '15.0 m (~49.2 ft)', totalCorridorM: '30.0 m (~98 ft)', notes: 'Strict transmission corridor under Electricity Rules 2050' },
  { kv: '400 kV (National Grid)', eachSideM: '23.0 m (~75.5 ft)', totalCorridorM: '46.0 m (~151 ft)', notes: 'Maximum national grid corridor setback' },
];

export default function EnglishSetbackCalculator() {
  const [roadId, setRoadId] = useState<string>('branch');
  const [plotSqFt, setPlotSqFt] = useState<number>(1369);

  const selected = ROAD_STANDARDS_EN.find((r) => r.id === roadId) || ROAD_STANDARDS_EN[3];
  const totalFromCenterM = selected.centerlineRowM + selected.frontSetbackM;
  const totalFromCenterFt = totalFromCenterM * 3.28084;
  const maxFootprintSqFt = (plotSqFt * selected.maxCoveragePct) / 100;

  return (
    <div className="space-y-6">
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-4">
          <Ruler className="w-5 h-5 text-emerald-600" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
            Building Setback, Road ROW &amp; Ground Coverage Calculator
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="space-y-1.5">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 block">
              Select Adjacent Road Width Standard
            </span>
            <select
              value={roadId}
              onChange={(e) => setRoadId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white"
            >
              {ROAD_STANDARDS_EN.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-1.5">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 block">
              Your Land Plot Area (in Sq. Ft — e.g. 1369 sq.ft = 4 Aana)
            </span>
            <input
              type="number"
              min={100}
              value={plotSqFt}
              onChange={(e) => setPlotSqFt(Math.max(0, parseFloat(e.target.value) || 0))}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white font-mono"
            />
          </label>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Pillar Distance from Road Center</span>
            <p className="text-lg font-black text-emerald-700 dark:text-emerald-400 font-mono mt-1">
              {totalFromCenterM.toFixed(1)} m ({totalFromCenterFt.toFixed(1)} ft)
            </p>
            <span className="text-[11px] text-slate-500">
              {selected.centerlineRowM}m ROW + {selected.frontSetbackM}m Setback
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Neighbor / Window Setback</span>
            <p className="text-lg font-black text-slate-900 dark:text-white font-mono mt-1">
              {selected.sideSetbackM} m ({(selected.sideSetbackM * 3.28084).toFixed(1)} ft)
            </p>
            <span className="text-[11px] text-slate-500">Required when placing windows</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Max Ground Coverage</span>
            <p className="text-lg font-black text-slate-900 dark:text-white font-mono mt-1">
              {selected.maxCoveragePct}%
            </p>
            <span className="text-[11px] text-slate-500">Standard residential limit</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Max Ground Footprint</span>
            <p className="text-lg font-black text-sky-700 dark:text-sky-400 font-mono mt-1">
              {Math.round(maxFootprintSqFt).toLocaleString('en-US')} sq.ft
            </p>
            <span className="text-[11px] text-slate-500">Remaining stays open setback</span>
          </div>
        </div>
      </div>

      {/* High Tension Line Table */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center gap-2.5">
          <Zap className="w-5 h-5 text-amber-500" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
            High Tension Line Setback Distance in Nepal (NEA &amp; Electricity Rules 2050)
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-900 dark:text-white">
              <tr>
                <th className="px-4 py-3">Voltage Level</th>
                <th className="px-4 py-3">Each Side of Centerline</th>
                <th className="px-4 py-3">Total Corridor Width</th>
                <th className="px-4 py-3">Building Rule / Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {HT_STANDARDS.map((row) => (
                <tr key={row.kv}>
                  <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">{row.kv}</td>
                  <td className="px-4 py-3 font-mono font-bold text-amber-700 dark:text-amber-400">{row.eachSideM}</td>
                  <td className="px-4 py-3 font-mono">{row.totalCorridorM}</td>
                  <td className="px-4 py-3 text-xs">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Important:</strong> Local municipal building bye-laws (such as Kathmandu Valley, Pokhara, Lalitpur, or Bharatpur) may impose additional setback requirements for commercial high-rises, rivers/kholas (typically 4m–20m depending on river class), or airport zones. Always verify your ward&apos;s E-BPS engineering checklist before construction.
          </p>
        </div>
      </div>
    </div>
  );
}
