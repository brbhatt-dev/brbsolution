'use client';

import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  MapPin, 
  Coins, 
  Landmark, 
  Percent, 
  CheckCircle2, 
  Copy, 
  Check, 
  Printer, 
  RotateCcw,
  Info,
  Scale,
  Search
} from 'lucide-react';
import { MALPOT_VALUATION_DATA, MalpotRateEntry } from '@/data/malpotRates';
import { copyToClipboard } from '@/lib/clipboard';

export default function MalpotValuationFinder() {
  const [selectedDistrict, setSelectedDistrict] = useState<string>('काठमाडौँ');
  const [selectedEntryId, setSelectedEntryId] = useState<string>('ktm-kalanki-01');
  const [selectedRoadIndex, setSelectedRoadIndex] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  // Available districts
  const districts = useMemo(() => {
    return Array.from(new Set(MALPOT_VALUATION_DATA.map((d) => d.district)));
  }, []);

  // Entries in selected district
  const districtEntries = useMemo(() => {
    return MALPOT_VALUATION_DATA.filter((d) => d.district === selectedDistrict);
  }, [selectedDistrict]);

  // Active Entry
  const activeEntry = useMemo(() => {
    return districtEntries.find((e) => e.id === selectedEntryId) || districtEntries[0] || MALPOT_VALUATION_DATA[0];
  }, [districtEntries, selectedEntryId]);

  // Active Road Rate
  const activeRoad = useMemo(() => {
    return activeEntry.rates[selectedRoadIndex] || activeEntry.rates[0];
  }, [activeEntry, selectedRoadIndex]);

  // Computed Bank Valuation (30% Gov + 70% Market weighted)
  const bankValuationEstimate = useMemo(() => {
    const gov = activeRoad.govRate;
    const mkt = activeRoad.marketRateEstimate;
    return Math.round((gov * 0.3) + (mkt * 0.7));
  }, [activeRoad]);

  // Registration Fee Estimation (approx 4.5% inside valley / metropolitan, 3.5% outside)
  const regFeeEstimate = useMemo(() => {
    const rate = selectedDistrict === 'काठमाडौँ' || selectedDistrict === 'ललितपुर' ? 0.045 : 0.035;
    return Math.round(activeRoad.govRate * rate);
  }, [activeRoad, selectedDistrict]);

  const handleCopy = async () => {
    const text = `🏛️ सरकारी मालपोत न्यूनतम मूल्याङ्कन प्रतिवेदन (BR Bhatta Malpot Valuation)
--------------------------------------------------
• जिल्ला: ${activeEntry.district}
• मालपोत कार्यालय: ${activeEntry.officeName}
• स्थान/पालिका: ${activeEntry.municipality}
• सडकको प्रकार: ${activeRoad.roadType}

💰 मूल्याङ्कन विवरण:
• सरकारी न्यूनतम दर: रु. ${activeRoad.govRate.toLocaleString('ne-NP')} /- (${activeEntry.unit})
• बजार मूल्य (अनुमानित): रु. ${activeRoad.marketRateEstimate.toLocaleString('ne-NP')} /- (${activeEntry.unit})
• बैंक भ्यालुएसन (औसत): रु. ${bankValuationEstimate.toLocaleString('ne-NP')} /- (${activeEntry.unit})
• अनुमानित रजिष्ट्रेसन राजस्व (४.५%): रु. ${regFeeEstimate.toLocaleString('ne-NP')} /-

🔗 पूर्ण मूल्याङ्कन हेर्नुहोस्: https://www.brbhatta.com/tools/malpot-valuation-rates`;

    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-6 sm:p-8 border border-emerald-900/40 shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-bold">
              <Landmark className="w-3.5 h-3.5 text-emerald-400" />
              <span>जिल्ला मालपोत मूल्याङ्कन समिति आ.व. २०८१/२०८२ अनुसार</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              जिल्ला मालपोत न्यूनतम सरकारी मूल्याङ्कन सर्च इन्जिन
            </h2>
            <p className="text-sm text-emerald-200/90 leading-relaxed">
              आफ्नो जिल्ला, मालपोत कार्यालय र सडकको चौडाइ चयन गर्नुहोस्। रजिस्ट्रेसन पास गर्दा चाहिने न्यूनतम सरकारी दर, बजार दर र बैंक मूल्याङ्कन तुरुन्त पत्ता लगाउनुहोस्।
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0 print:hidden">
            <button
              onClick={handleCopy}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'कपी भयो!' : 'दर विवरण कपी'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>A4 प्रिन्ट</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Selector & Result Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form: Selectors (5 cols) */}
        <div className="lg:col-span-5 space-y-5 bg-white dark:bg-slate-900 p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm print:hidden">
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <Search className="w-4 h-4 text-emerald-600" />
            <span>स्थान तथा सडक छान्नुहोस्:</span>
          </h3>

          {/* 1. District Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">जिल्ला (District):</label>
            <div className="grid grid-cols-3 gap-2">
              {districts.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => {
                    setSelectedDistrict(d);
                    const matching = MALPOT_VALUATION_DATA.filter((e) => e.district === d);
                    if (matching.length > 0) {
                      setSelectedEntryId(matching[0].id);
                      setSelectedRoadIndex(0);
                    }
                  }}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-all text-center ${
                    selectedDistrict === d
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Office & Area Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              मालपोत कार्यालय र पालिका क्षेत्र:
            </label>
            <div className="space-y-2">
              {districtEntries.map((e) => {
                const isSelected = activeEntry.id === e.id;
                return (
                  <div
                    key={e.id}
                    onClick={() => {
                      setSelectedEntryId(e.id);
                      setSelectedRoadIndex(0);
                    }}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/70 dark:bg-emerald-950/40 shadow-xs ring-1 ring-emerald-500'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 bg-white dark:bg-slate-900'
                    }`}
                  >
                    <div className="font-extrabold text-xs text-slate-900 dark:text-white">
                      {e.officeName}
                    </div>
                    <div className="text-2xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {e.municipality}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Road Type Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              सडकको वर्गीकरण / चौडाइ (Road Type):
            </label>
            <div className="space-y-2">
              {activeEntry.rates.map((r, idx) => {
                const isSelected = selectedRoadIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedRoadIndex(idx)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/60 dark:bg-emerald-950/40 font-bold text-emerald-950 dark:text-emerald-200 ring-1 ring-emerald-500'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span>{r.roadType}</span>
                      <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                        रु. {(r.govRate / 100000).toFixed(1)}L
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Output: Detailed Rate Breakdown (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Rate Highlight Card */}
          <div className="bg-linear-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-44 h-44 bg-white/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-emerald-100 text-xs font-semibold">
                <span>{activeEntry.district} • {activeEntry.officeName}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white font-mono">
                  आ.व. २०८१/८२
                </span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-emerald-200 font-bold">
                  सरकारी न्यूनतम मूल्याङ्कन दर (Official Government Rate):
                </p>
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-1">
                  रु. {activeRoad.govRate.toLocaleString('ne-NP')} /-
                </h3>
                <p className="text-xs text-emerald-100 mt-1">
                  {activeEntry.unit} ({activeRoad.roadType})
                </p>
              </div>

              <div className="pt-3 border-t border-emerald-400/30 grid grid-cols-2 sm:grid-cols-3 gap-3 text-emerald-100 text-2xs sm:text-xs">
                <div>
                  <span className="block opacity-80">बजार मूल्य (अनुमानित):</span>
                  <span className="font-mono font-bold text-white text-xs sm:text-sm">
                    रु. {activeRoad.marketRateEstimate.toLocaleString('ne-NP')}
                  </span>
                </div>
                <div>
                  <span className="block opacity-80">बैंक भ्यालुएसन (औसत):</span>
                  <span className="font-mono font-bold text-amber-200 text-xs sm:text-sm">
                    रु. {bankValuationEstimate.toLocaleString('ne-NP')}
                  </span>
                </div>
                <div>
                  <span className="block opacity-80">अनुमानित रजिष्ट्रेसन कर:</span>
                  <span className="font-mono font-bold text-white text-xs sm:text-sm">
                    रु. {regFeeEstimate.toLocaleString('ne-NP')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Matrix Table */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <span>{activeEntry.municipality} का सबै सडक दरहरू:</span>
              <span className="text-2xs text-slate-500 font-mono">{activeEntry.unit}</span>
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500">
                    <th className="py-2 text-left">सडकको प्रकृति</th>
                    <th className="py-2 text-right">सरकारी दर</th>
                    <th className="py-2 text-right">बजार दर (अनुमानित)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono">
                  {activeEntry.rates.map((r, idx) => (
                    <tr 
                      key={idx} 
                      className={`hover:bg-slate-50 dark:hover:bg-slate-850 ${
                        selectedRoadIndex === idx ? 'bg-emerald-50/50 dark:bg-emerald-950/20 font-bold' : ''
                      }`}
                    >
                      <td className="py-2.5 text-left font-sans text-slate-800 dark:text-slate-200">
                        {r.roadType}
                      </td>
                      <td className="py-2.5 text-right text-emerald-600 dark:text-emerald-400">
                        रु. {r.govRate.toLocaleString('ne-NP')}
                      </td>
                      <td className="py-2.5 text-right text-slate-600 dark:text-slate-400">
                        रु. {r.marketRateEstimate.toLocaleString('ne-NP')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Guidance Alert */}
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-950 dark:text-amber-200 flex items-start gap-2.5">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>मालपोत रजिष्ट्रेसन पास नियम:</strong> मालपोत कार्यालयमा जग्गा पास गर्दा सरकारी न्यूनतम मूल्याङ्कन भन्दा कम रकमको थैली (मूल्य) राख्न पाइँदैन। थैली रकम जति धेरै राख्यो, त्यही अनुसार ५% पुँजीगत लाभकर (CGT) र रजिष्ट्रेसन दस्तुर हिसाब हुन्छ।
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
