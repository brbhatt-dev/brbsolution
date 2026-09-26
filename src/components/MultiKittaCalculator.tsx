'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  Plus, 
  Trash2, 
  Printer, 
  Copy, 
  CheckCircle2, 
  Layers, 
  FileText, 
  RotateCcw,
  Sparkles,
  Coins,
  Compass
} from 'lucide-react';
import AdSenseSlot from '@/components/AdSenseSlot';

interface KittaRow {
  id: string;
  kittaNo: string;
  remarks: string;
  system: 'pahadi' | 'terai' | 'sqft';
  // Pahadi
  ropani: number;
  aana: number;
  paisa: number;
  daam: number;
  // Terai
  bigha: number;
  katha: number;
  dhur: number;
  kanwa: number;
  // Sqft
  sqft: number;
}

export default function MultiKittaCalculator() {
  const [kittas, setKittas] = useState<KittaRow[]>([
    {
      id: 'kitta-1',
      kittaNo: '१०१',
      remarks: 'घडेरी भाग-१',
      system: 'pahadi',
      ropani: 0,
      aana: 4,
      paisa: 2,
      daam: 1,
      bigha: 0,
      katha: 0,
      dhur: 0,
      kanwa: 0,
      sqft: 0
    },
    {
      id: 'kitta-2',
      kittaNo: '१०२',
      remarks: 'घडेरी भाग-२',
      system: 'pahadi',
      ropani: 1,
      aana: 2,
      paisa: 1,
      daam: 3,
      bigha: 0,
      katha: 0,
      dhur: 0,
      kanwa: 0,
      sqft: 0
    },
    {
      id: 'kitta-3',
      kittaNo: '१०३',
      remarks: 'पछाडिको कित्ता',
      system: 'pahadi',
      ropani: 0,
      aana: 8,
      paisa: 0,
      daam: 0,
      bigha: 0,
      katha: 0,
      dhur: 0,
      kanwa: 0,
      sqft: 0
    }
  ]);

  const [pricePerAana, setPricePerAana] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [clientName, setClientName] = useState<string>('');
  const [locationName, setLocationName] = useState<string>('');

  // Constants
  const SQFT_PER_ROPANI = 5476;
  const SQFT_PER_AANA = 342.25;
  const SQFT_PER_PAISA = 85.5625;
  const SQFT_PER_DAAM = 21.390625;

  const SQFT_PER_BIGHA = 72900;
  const SQFT_PER_KATHA = 3645;
  const SQFT_PER_DHUR = 182.25;
  const SQFT_PER_KANWA = 11.390625;

  const SQFT_TO_SQM = 10.7639;

  // Calculate individual row sqft
  const getRowSqft = (kitta: KittaRow): number => {
    if (kitta.system === 'pahadi') {
      return (kitta.ropani * SQFT_PER_ROPANI) + 
             (kitta.aana * SQFT_PER_AANA) + 
             (kitta.paisa * SQFT_PER_PAISA) + 
             (kitta.daam * SQFT_PER_DAAM);
    } else if (kitta.system === 'terai') {
      return (kitta.bigha * SQFT_PER_BIGHA) + 
             (kitta.katha * SQFT_PER_KATHA) + 
             (kitta.dhur * SQFT_PER_DHUR) + 
             (kitta.kanwa * SQFT_PER_KANWA);
    } else {
      return kitta.sqft || 0;
    }
  };

  // Grand total calculations
  const grandTotalSqft = kittas.reduce((acc, row) => acc + getRowSqft(row), 0);
  const grandTotalSqm = (grandTotalSqft / SQFT_TO_SQM).toFixed(2);

  // Pahadi Grand Total
  const grandRopani = Math.floor(grandTotalSqft / SQFT_PER_ROPANI);
  const remRopani = grandTotalSqft % SQFT_PER_ROPANI;
  const grandAana = Math.floor(remRopani / SQFT_PER_AANA);
  const remAana = remRopani % SQFT_PER_AANA;
  const grandPaisa = Math.floor(remAana / SQFT_PER_PAISA);
  const remPaisa = remAana % SQFT_PER_PAISA;
  const grandDaam = (remPaisa / SQFT_PER_DAAM).toFixed(2);

  // Terai Grand Total
  const grandBigha = Math.floor(grandTotalSqft / SQFT_PER_BIGHA);
  const remBigha = grandTotalSqft % SQFT_PER_BIGHA;
  const grandKatha = Math.floor(remBigha / SQFT_PER_KATHA);
  const remKatha = remBigha % SQFT_PER_KATHA;
  const grandDhur = Math.floor(remKatha / SQFT_PER_DHUR);
  const remDhur = remKatha % SQFT_PER_DHUR;
  const grandKanwa = (remDhur / SQFT_PER_KANWA).toFixed(2);

  // Total Estimated Value
  const totalAanaUnits = grandTotalSqft / SQFT_PER_AANA;
  const grandTotalPrice = pricePerAana > 0 ? totalAanaUnits * pricePerAana : 0;

  // Handlers
  const addRow = () => {
    const newKitta: KittaRow = {
      id: `kitta-${Date.now()}`,
      kittaNo: `${kittas.length + 101}`,
      remarks: '',
      system: 'pahadi',
      ropani: 0,
      aana: 0,
      paisa: 0,
      daam: 0,
      bigha: 0,
      katha: 0,
      dhur: 0,
      kanwa: 0,
      sqft: 0
    };
    setKittas([...kittas, newKitta]);
  };

  const removeRow = (id: string) => {
    if (kittas.length <= 1) return;
    setKittas(kittas.filter((k) => k.id !== id));
  };

  const updateRow = (id: string, field: keyof KittaRow, val: any) => {
    setKittas(kittas.map((k) => k.id === id ? { ...k, [field]: val } : k));
  };

  const resetAll = () => {
    setKittas([
      {
        id: `kitta-${Date.now()}`,
        kittaNo: '१',
        remarks: '',
        system: 'pahadi',
        ropani: 0,
        aana: 0,
        paisa: 0,
        daam: 0,
        bigha: 0,
        katha: 0,
        dhur: 0,
        kanwa: 0,
        sqft: 0
      }
    ]);
    setPricePerAana(0);
  };

  const copySummary = () => {
    let text = `--- बहु-कित्ता जग्गा कुल क्षेत्रफल विवरण ---\n`;
    if (clientName) text += `ग्राहक: ${clientName}\n`;
    if (locationName) text += `स्थान: ${locationName}\n`;
    text += `कुल कित्ता संख्या: ${kittas.length}\n------------------------------------------\n`;
    
    kittas.forEach((k, idx) => {
      const sq = getRowSqft(k);
      text += `${idx + 1}. कित्ता नं ${k.kittaNo || '—'}: `;
      if (k.system === 'pahadi') {
        text += `${k.ropani}-${k.aana}-${k.paisa}-${k.daam} (रो-आ-पै-दा)`;
      } else if (k.system === 'terai') {
        text += `${k.bigha}-${k.katha}-${k.dhur}-${k.kanwa} (बि-क-धु-क)`;
      } else {
        text += `${k.sqft} वर्गफिट`;
      }
      text += ` [${sq.toFixed(2)} Sq.Ft]\n`;
    });

    text += `------------------------------------------\n`;
    text += `कुल पहाडी नाप: ${grandRopani} रोपनी - ${grandAana} आना - ${grandPaisa} पैसा - ${grandDaam} दाम\n`;
    text += `कुल तराई नाप: ${grandBigha} बिघा - ${grandKatha} कट्ठा - ${grandDhur} धुर - ${grandKanwa} कन्वा\n`;
    text += `कुल क्षेत्रफल: ${grandTotalSqft.toFixed(2)} वर्गफिट (${grandTotalSqm} वर्गमिटर)\n`;
    if (grandTotalPrice > 0) {
      text += `कुल अनुमानित मूल्य: रु. ${grandTotalPrice.toLocaleString('en-IN')}\n`;
    }
    text += `स्रोत: www.brbhatta.com/tools/multi-kitta-calculator`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-bold">
          <Layers className="w-3.5 h-3.5 text-emerald-600" />
          <span>Parcel Accumulator • बहु-कित्ता गणना</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          बहु-कित्ता (Multi-Kitta) क्षेत्रफल योग क्यालकुलेटर
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          एकभन्दा बढी कित्ताहरूको क्षेत्रफललाई १६ आना र २० कट्ठाको शुद्ध क्यारी गणित सहित जोडेर कुल क्षेत्रफल र मूल्य तुरुन्त निकाल्नुहोस्।
        </p>
      </div>

      {/* Main Calculator Box */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-sm space-y-6 no-print">
        
        {/* Optional Metadata Row (Client / Location) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700/80">
          <div>
            <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
              सेवाग्राही / जग्गाधनीको नाम (वैकल्पिक):
            </label>
            <input
              type="text"
              placeholder="उदा: हरि शरण श्रेष्ठ"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
              जग्गाको स्थान / वडा (वैकल्पिक):
            </label>
            <input
              type="text"
              placeholder="उदा: काठमाडौँ-४, चन्डोल"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Kitta Rows Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              कित्ताहरूको सूची (List of Kittas):
            </span>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">
              जम्मा {kittas.length} कित्ताहरू
            </span>
          </div>

          <div className="space-y-3">
            {kittas.map((kitta, idx) => {
              const rowSqft = getRowSqft(kitta);
              return (
                <div 
                  key={kitta.id}
                  className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 space-y-3 transition-all hover:border-emerald-500/40"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700/60 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-slate-500 font-bold">कित्ता नं:</span>
                        <input
                          type="text"
                          value={kitta.kittaNo}
                          onChange={(e) => updateRow(kitta.id, 'kittaNo', e.target.value)}
                          placeholder="नं."
                          className="w-20 px-2 py-1 text-xs font-mono font-bold rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                        />
                      </div>
                      <input
                        type="text"
                        value={kitta.remarks}
                        onChange={(e) => updateRow(kitta.id, 'remarks', e.target.value)}
                        placeholder="कैफियत (वैकल्पिक)"
                        className="w-32 sm:w-44 px-2 py-1 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hidden sm:block"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      {/* System Switch */}
                      <select
                        value={kitta.system}
                        onChange={(e) => updateRow(kitta.id, 'system', e.target.value as any)}
                        className="text-xs px-2.5 py-1 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-semibold"
                      >
                        <option value="pahadi">पहाड (R-A-P-D)</option>
                        <option value="terai">तराई (B-K-D-K)</option>
                        <option value="sqft">वर्गफिट (Sq.Ft)</option>
                      </select>

                      {/* Delete Row Button */}
                      <button
                        onClick={() => removeRow(kitta.id)}
                        disabled={kittas.length <= 1}
                        className="p-1 text-slate-400 hover:text-rose-600 disabled:opacity-30 transition-colors"
                        title="हटाउनुहोस्"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Input Fields depending on system */}
                  {kitta.system === 'pahadi' && (
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      <div>
                        <label className="text-[11px] text-slate-500 font-medium block">रोपनी</label>
                        <input
                          type="number"
                          min="0"
                          value={kitta.ropani}
                          onChange={(e) => updateRow(kitta.id, 'ropani', Math.max(0, Number(e.target.value)))}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono font-bold"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-500 font-medium block">आना (०-१५)</label>
                        <input
                          type="number"
                          min="0"
                          max="15"
                          value={kitta.aana}
                          onChange={(e) => updateRow(kitta.id, 'aana', Math.max(0, Number(e.target.value)))}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono font-bold"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-500 font-medium block">पैसा (०-३)</label>
                        <input
                          type="number"
                          min="0"
                          max="3"
                          value={kitta.paisa}
                          onChange={(e) => updateRow(kitta.id, 'paisa', Math.max(0, Number(e.target.value)))}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono font-bold"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-500 font-medium block">दाम (०-३.९)</label>
                        <input
                          type="number"
                          min="0"
                          step="0.1"
                          value={kitta.daam}
                          onChange={(e) => updateRow(kitta.id, 'daam', Math.max(0, Number(e.target.value)))}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono font-bold"
                        />
                      </div>
                    </div>
                  )}

                  {kitta.system === 'terai' && (
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      <div>
                        <label className="text-[11px] text-slate-500 font-medium block">बिघा</label>
                        <input
                          type="number"
                          min="0"
                          value={kitta.bigha}
                          onChange={(e) => updateRow(kitta.id, 'bigha', Math.max(0, Number(e.target.value)))}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono font-bold"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-500 font-medium block">कट्ठा (०-१९)</label>
                        <input
                          type="number"
                          min="0"
                          max="19"
                          value={kitta.katha}
                          onChange={(e) => updateRow(kitta.id, 'katha', Math.max(0, Number(e.target.value)))}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono font-bold"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-500 font-medium block">धुर (०-१९)</label>
                        <input
                          type="number"
                          min="0"
                          max="19"
                          value={kitta.dhur}
                          onChange={(e) => updateRow(kitta.id, 'dhur', Math.max(0, Number(e.target.value)))}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono font-bold"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-500 font-medium block">कन्वा</label>
                        <input
                          type="number"
                          min="0"
                          step="0.1"
                          value={kitta.kanwa}
                          onChange={(e) => updateRow(kitta.id, 'kanwa', Math.max(0, Number(e.target.value)))}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono font-bold"
                        />
                      </div>
                    </div>
                  )}

                  {kitta.system === 'sqft' && (
                    <div className="text-xs">
                      <label className="text-[11px] text-slate-500 font-medium block">कुल वर्गफिट (Sq.Ft)</label>
                      <input
                        type="number"
                        min="0"
                        value={kitta.sqft}
                        onChange={(e) => updateRow(kitta.id, 'sqft', Math.max(0, Number(e.target.value)))}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono font-bold"
                      />
                    </div>
                  )}

                  {/* Row Total Sub-badge */}
                  <div className="text-right text-[11px] text-slate-500 font-mono">
                    समतुल्य: <span className="font-bold text-slate-700 dark:text-slate-300">{rowSqft.toFixed(2)}</span> वर्गफिट ({(rowSqft / SQFT_TO_SQM).toFixed(2)} व.मि.)
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons: Add Row & Reset */}
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={addRow}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>थप कित्ता थप्नुहोस् (+ Add Kitta)</span>
            </button>

            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>सबै रिसेट</span>
            </button>
          </div>
        </div>

        {/* GRAND TOTAL SUMMARY DISPLAY */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-black text-slate-900 dark:text-white text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>सबै कित्ताहरूको कुल संयुक्त क्षेत्रफल (Grand Total Area)</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Pahadi Grand Total */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-slate-800 border border-emerald-200 dark:border-emerald-800 space-y-2">
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider block">
                कुल पहाडी नाप (R-A-P-D)
              </span>
              <p className="text-xl sm:text-2xl font-black text-emerald-950 dark:text-emerald-200 font-mono">
                {grandRopani} रोपनी - {grandAana} आना - {grandPaisa} पैसा - {grandDaam} दाम
              </p>
              <p className="text-[11px] text-emerald-700 dark:text-emerald-400">
                कुल आना एकाइ: {totalAanaUnits.toFixed(2)} आना
              </p>
            </div>

            {/* Terai Grand Total */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-sky-50 dark:from-teal-950/40 dark:to-slate-800 border border-teal-200 dark:border-teal-800 space-y-2">
              <span className="text-xs font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wider block">
                कुल तराई नाप (B-K-D-K)
              </span>
              <p className="text-xl sm:text-2xl font-black text-teal-950 dark:text-teal-200 font-mono">
                {grandBigha} बिघा - {grandKatha} कट्ठा - {grandDhur} धुर - {grandKanwa} कन्वा
              </p>
              <p className="text-[11px] text-teal-700 dark:text-teal-400">
                कुल धुर एकाइ: {(grandTotalSqft / SQFT_PER_DHUR).toFixed(2)} धुर
              </p>
            </div>

          </div>

          {/* Metric & Imperial Total Bar */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div>
              <span className="text-slate-500 block">कुल वर्गफिट:</span>
              <span className="text-lg font-black text-slate-900 dark:text-white font-mono">
                {grandTotalSqft.toLocaleString('en-IN', { maximumFractionDigits: 2 })} Sq.Ft
              </span>
            </div>
            <div>
              <span className="text-slate-500 block">कुल वर्गमिटर:</span>
              <span className="text-lg font-black text-slate-900 dark:text-white font-mono">
                {Number(grandTotalSqm).toLocaleString('en-IN', { maximumFractionDigits: 2 })} Sq.M
              </span>
            </div>
            <div>
              <span className="text-slate-500 block">दर (प्रति आना):</span>
              <input
                type="number"
                placeholder="दर राख्नुहोस्"
                value={pricePerAana || ''}
                onChange={(e) => setPricePerAana(Math.max(0, Number(e.target.value)))}
                className="w-28 px-2 py-1 text-xs rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono"
              />
            </div>
            {grandTotalPrice > 0 && (
              <div>
                <span className="text-amber-700 dark:text-amber-400 font-bold block">कुल मूल्य:</span>
                <span className="text-lg font-black text-amber-600 dark:text-amber-400 font-mono">
                  रु. {grandTotalPrice.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                </span>
              </div>
            )}
          </div>

          {/* Action Footer: Print Slip & Copy */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>बहु-कित्ता स्लिप प्रिन्ट (Print Multi-Slip)</span>
              </button>

              <button
                onClick={copySummary}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs transition-all active:scale-95"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>कपी भयो!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-300" />
                    <span>समग्र विवरण कपी</span>
                  </>
                )}
              </button>
            </div>

            <a
              href="/land-solution-demo/index.html"
              target="_blank"
              className="text-xs text-emerald-700 dark:text-emerald-400 hover:underline font-semibold"
            >
              Land Solution वेब डेमो हेर्नुहोस् &rarr;
            </a>
          </div>

        </div>

      </div>

      {/* PRINT-ONLY MULTI-KITTA REPORT SLIP */}
      <div 
        id="printable-land-slip"
        className="hidden print:block p-8 bg-white text-slate-900 border border-slate-300 rounded-xl space-y-6 font-sans mx-auto max-w-[210mm]"
      >
        <div className="border-b-2 border-emerald-800 pb-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-emerald-900">BR BHATTA • LAND SOLUTION</h1>
            <p className="text-xs text-slate-600">बहु-कित्ता जग्गा नापजाँच तथा संयुक्त क्षेत्रफल प्रतिवेदन पत्र</p>
            <p className="text-[10px] text-slate-500">पोर्टल: www.brbhatta.com/tools/multi-kitta-calculator</p>
          </div>
          <div className="text-right text-xs">
            <p className="font-bold text-slate-800">मिति: {new Date().toLocaleDateString('ne-NP')}</p>
            <p className="text-[10px] text-slate-500">स्लिप नं: BRB-MK-{Math.floor(100000 + Math.random() * 900000)}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-3 rounded-lg border border-slate-200">
          <div>
            <span className="text-slate-500 block text-[10px]">ग्राहक / जग्गाधनीको नाम:</span>
            <span className="font-bold text-slate-900">{clientName || '—'}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px]">स्थान / ठेगाना:</span>
            <span className="font-bold text-slate-900">{locationName || 'नेपाल'}</span>
          </div>
        </div>

        {/* Detailed Kitta Table */}
        <table className="w-full text-xs text-left border border-slate-200 rounded-lg overflow-hidden">
          <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
            <tr>
              <th className="py-2 px-3">क्र.सं.</th>
              <th className="py-2 px-3">कित्ता नं.</th>
              <th className="py-2 px-3">कैफियत</th>
              <th className="py-2 px-3">नाप (रोपनी वा बिघा)</th>
              <th className="py-2 px-3 text-right">समतुल्य वर्गफिट</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {kittas.map((k, i) => {
              const sq = getRowSqft(k);
              return (
                <tr key={k.id}>
                  <td className="py-2 px-3">{i + 1}</td>
                  <td className="py-2 px-3 font-bold">{k.kittaNo || '—'}</td>
                  <td className="py-2 px-3 text-slate-600">{k.remarks || '—'}</td>
                  <td className="py-2 px-3 font-mono font-bold">
                    {k.system === 'pahadi' 
                      ? `${k.ropani}-${k.aana}-${k.paisa}-${k.daam}`
                      : (k.system === 'terai' ? `${k.bigha}-${k.katha}-${k.dhur}-${k.kanwa}` : `${k.sqft} sqft`)}
                  </td>
                  <td className="py-2 px-3 text-right font-mono">{sq.toFixed(2)}</td>
                </tr>
              );
            })}
            <tr className="bg-emerald-50 text-emerald-950 font-black">
              <td colSpan={3} className="py-2.5 px-3">कुल संयुक्त क्षेत्रफल (GRAND TOTAL)</td>
              <td className="py-2.5 px-3 font-mono text-sm">
                {grandRopani}-{grandAana}-{grandPaisa}-{grandDaam}
              </td>
              <td className="py-2.5 px-3 text-right font-mono text-sm">
                {grandTotalSqft.toFixed(2)} Sq.Ft
              </td>
            </tr>
          </tbody>
        </table>

        <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-3 rounded-lg border border-slate-200">
          <div>
            <span className="text-slate-500 block text-[10px]">तराई नाप समतुल्य:</span>
            <span className="font-bold">{grandBigha} बिघा - {grandKatha} कट्ठा - {grandDhur} धुर - {grandKanwa} कन्वा</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px]">मिट्रिक नाप समतुल्य:</span>
            <span className="font-bold">{grandTotalSqm} वर्गमिटर (Sq. Metres)</span>
          </div>
          {grandTotalPrice > 0 && (
            <div className="col-span-2 pt-1 border-t border-slate-200">
              <span className="text-slate-500 text-[10px]">कुल अनुमानित मूल्य (रु.): </span>
              <span className="font-black text-sm">रु. {grandTotalPrice.toLocaleString('en-IN')}</span>
            </div>
          )}
        </div>

        <div className="pt-8 grid grid-cols-2 gap-8 text-xs text-center border-t border-slate-200">
          <div>
            <div className="w-36 border-b border-slate-400 mx-auto mb-2"></div>
            <p className="font-bold">तयार गर्ने प्राविधिक / अमिन</p>
          </div>
          <div>
            <div className="w-36 border-b border-slate-400 mx-auto mb-2"></div>
            <p className="font-bold">जग्गाधनी / अधिकृत प्रतिनिधि</p>
          </div>
        </div>
      </div>

      {/* AdSense Slot */}
      <AdSenseSlot userFacingLabel="विज्ञापन (AdSense Slot)" />

    </div>
  );
}
