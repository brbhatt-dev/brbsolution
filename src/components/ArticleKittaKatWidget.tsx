'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Split, 
  CheckCircle2, 
  AlertTriangle, 
  Ruler, 
  MapPin, 
  ArrowRight, 
  Scale,
  Sparkles,
  Info
} from 'lucide-react';

export default function ArticleKittaKatWidget() {
  const [region, setRegion] = useState<'valley' | 'terai' | 'hills'>('valley');
  const [landType, setLandType] = useState<'residential' | 'agricultural'>('residential');
  const [unitSystem, setUnitSystem] = useState<'ropani' | 'bigha' | 'sqm'>('ropani');

  // Input Values
  const [ropani, setRopani] = useState<number>(0);
  const [aana, setAana] = useState<number>(8);
  const [paisa, setPaisa] = useState<number>(2);

  const [bigha, setBigha] = useState<number>(0);
  const [katha, setKatha] = useState<number>(3);
  const [dhur, setDhur] = useState<number>(0);

  const [sqmInput, setSqmInput] = useState<number>(270);
  const [roadWidthFeet, setRoadWidthFeet] = useState<number>(13);

  // Conversion Constants
  const SQM_PER_ROPANI = 508.72;
  const SQM_PER_AANA = 31.795;
  const SQM_PER_PAISA = 7.948;

  const SQM_PER_BIGHA = 6772.63;
  const SQM_PER_KATHA = 338.63;
  const SQM_PER_DHUR = 16.93;

  // Calculate Total Sq. Meters
  const totalSqm = useMemo(() => {
    if (unitSystem === 'ropani') {
      return (ropani * SQM_PER_ROPANI) + (aana * SQM_PER_AANA) + (paisa * SQM_PER_PAISA);
    } else if (unitSystem === 'bigha') {
      return (bigha * SQM_PER_BIGHA) + (katha * SQM_PER_KATHA) + (dhur * SQM_PER_DHUR);
    } else {
      return sqmInput;
    }
  }, [unitSystem, ropani, aana, paisa, bigha, katha, dhur, sqmInput]);

  // Minimum required area per piece under Nepal Land Use Regulations 2079/2081
  const minRequiredPerPieceSqm = useMemo(() => {
    if (landType === 'residential') {
      if (region === 'valley') return 130; // 130 sqm (4.08 aana)
      if (region === 'terai') return 169.3; // 10 dhur
      return 130; // 4 aana
    } else {
      // Agricultural
      if (region === 'valley') return 500; // ~1 ropani
      if (region === 'terai') return 675; // ~2 katha
      return 1000; // ~2 ropani
    }
  }, [landType, region]);

  // Minimum road required
  const minRoadRequired = landType === 'residential' ? 10 : 8;

  // Evaluation
  const maxPossiblePieces = Math.floor(totalSqm / minRequiredPerPieceSqm);
  const isKittaKatPossible = maxPossiblePieces >= 2;
  const isRoadSufficient = roadWidthFeet >= minRoadRequired;

  // Area in Aana equivalent for quick display
  const aanaEquivalent = (totalSqm / SQM_PER_AANA).toFixed(2);

  return (
    <div className="my-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 text-white p-5 sm:p-7 shadow-xl border border-teal-500/30 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      {/* Header */}
      <div className="relative z-10 space-y-2 pb-5 border-b border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
            <Split className="w-3.5 h-3.5 text-teal-400" />
            <span>कित्ताकाट मापदण्ड चेकर (Live Kitta-Kat Eligibility)</span>
          </div>
          <span className="text-[11px] text-slate-400 font-medium">
            भू-उपयोग नियमावली २०७९/२०८१
          </span>
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight">
          तपाईंको जग्गा कित्ताकाट हुन सक्छ कि सक्दैन? जाँच गर्नुहोस्
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          क्षेत्रफल, भू-उपयोग वर्गीकरण र बाटोको चौडाइ छानेर तुरुन्तै सरकारी मापदण्ड अनुसारको आधिकारिक अवस्था थाहा पाउनुहोस्:
        </p>
      </div>

      {/* Inputs Form */}
      <div className="relative z-10 pt-5 space-y-5">
        {/* Step 1: Geography & Classification */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-200 mb-1.5 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>१. जग्गा रहेको भूगोल (क्षेत्र):</span>
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: 'valley', label: 'काठमाडौँ उपत्यका' },
                { id: 'terai', label: 'तराई / भित्री मधेस' },
                { id: 'hills', label: 'पहाडी क्षेत्र' },
              ].map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRegion(r.id as any)}
                  className={`p-2 rounded-xl text-[11px] font-bold border transition-all cursor-pointer text-center ${
                    region === r.id
                      ? 'bg-teal-500/20 border-teal-400 text-teal-200'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-200 mb-1.5 flex items-center gap-1">
              <Scale className="w-3.5 h-3.5 text-emerald-400" />
              <span>२. भू-उपयोग वर्गीकरण (जग्गाको किसिम):</span>
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { id: 'residential', label: 'आवासीय (Residential)' },
                { id: 'agricultural', label: 'कृषि (Agricultural)' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setLandType(t.id as any)}
                  className={`p-2 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                    landType === t.id
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Step 2: Area Inputs */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-200 flex items-center gap-1">
              <Ruler className="w-3.5 h-3.5 text-teal-400" />
              <span>३. तपाईंको कुल जग्गाको क्षेत्रफल:</span>
            </label>
            <div className="flex items-center gap-1 text-[11px]">
              {(['ropani', 'bigha', 'sqm'] as const).map((unit) => (
                <button
                  key={unit}
                  type="button"
                  onClick={() => setUnitSystem(unit)}
                  className={`px-2 py-0.5 rounded-md font-semibold cursor-pointer ${
                    unitSystem === unit
                      ? 'bg-teal-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {unit === 'ropani' ? 'रोपनी' : unit === 'bigha' ? 'बिघा' : 'वर्गमिटर'}
                </button>
              ))}
            </div>
          </div>

          {unitSystem === 'ropani' && (
            <div className="grid grid-cols-3 gap-2">
              <div>
                <span className="text-[10px] text-slate-400 block mb-0.5">रोपनी</span>
                <input
                  type="number"
                  min="0"
                  value={ropani}
                  onChange={(e) => setRopani(Math.max(0, Number(e.target.value)))}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-bold text-sm"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block mb-0.5">आना</span>
                <input
                  type="number"
                  min="0"
                  max="15"
                  value={aana}
                  onChange={(e) => setAana(Math.max(0, Number(e.target.value)))}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-bold text-sm"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block mb-0.5">पैसा</span>
                <input
                  type="number"
                  min="0"
                  max="3"
                  value={paisa}
                  onChange={(e) => setPaisa(Math.max(0, Number(e.target.value)))}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-bold text-sm"
                />
              </div>
            </div>
          )}

          {unitSystem === 'bigha' && (
            <div className="grid grid-cols-3 gap-2">
              <div>
                <span className="text-[10px] text-slate-400 block mb-0.5">बिघा</span>
                <input
                  type="number"
                  min="0"
                  value={bigha}
                  onChange={(e) => setBigha(Math.max(0, Number(e.target.value)))}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-bold text-sm"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block mb-0.5">कट्ठा</span>
                <input
                  type="number"
                  min="0"
                  max="19"
                  value={katha}
                  onChange={(e) => setKatha(Math.max(0, Number(e.target.value)))}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-bold text-sm"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block mb-0.5">धुर</span>
                <input
                  type="number"
                  min="0"
                  max="19"
                  value={dhur}
                  onChange={(e) => setDhur(Math.max(0, Number(e.target.value)))}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-bold text-sm"
                />
              </div>
            </div>
          )}

          {unitSystem === 'sqm' && (
            <div>
              <input
                type="number"
                min="10"
                value={sqmInput}
                onChange={(e) => setSqmInput(Math.max(0, Number(e.target.value)))}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-bold text-sm"
                placeholder="270"
              />
            </div>
          )}
        </div>

        {/* Step 3: Road Width */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-200 block">
            ४. जग्गामा जोडिएको बाटोको चौडाइ:
          </label>
          <div className="flex flex-wrap items-center gap-1.5">
            {[8, 10, 13, 16, 20].map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => setRoadWidthFeet(w)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                  roadWidthFeet === w
                    ? 'bg-teal-500 text-slate-950 font-black'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {w} फिट
              </button>
            ))}
          </div>
        </div>

        {/* RESULTS CARD */}
        <div className={`mt-5 p-4 sm:p-5 rounded-2xl border space-y-4 ${
          isKittaKatPossible && isRoadSufficient
            ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-100'
            : 'bg-amber-950/60 border-amber-500/40 text-amber-100'
        }`}>
          {/* Status Verdict */}
          <div className="flex items-start gap-3">
            {isKittaKatPossible && isRoadSufficient ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            )}
            <div className="space-y-1 flex-1">
              <h4 className="font-black text-sm sm:text-base text-white">
                {isKittaKatPossible && isRoadSufficient
                  ? `✅ कित्ताकाट सम्भव छ: बढीमा ${maxPossiblePieces} कित्ता बनाउन सकिन्छ`
                  : isKittaKatPossible && !isRoadSufficient
                  ? '⚠️ बाटोको चौडाइ अपुग: न्यूनतम १० फिट बाटो चाहिन्छ'
                  : '⚠️ क्षेत्रफल नपुग: यो जग्गाबाट २ कित्ता बनाउन सम्भव छैन'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                तपाईंको कुल क्षेत्रफल <strong className="text-white">{totalSqm.toFixed(1)} वर्गमिटर</strong> (करिब {aanaEquivalent} आना) छ। 
                सरकारी नियम अनुसार प्रति कित्ता कम्तीमा <strong className="text-white">{minRequiredPerPieceSqm} वर्गमिटर</strong> अनिवार्य हुनुपर्छ।
              </p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-700/80 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] text-slate-400 block">प्रति कित्ता न्यूनतम मापदण्ड</span>
              <span className="font-bold text-white text-xs">{minRequiredPerPieceSqm} वर्गमिटर</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] text-slate-400 block">बनाउन मिल्ने अधिकतम कित्ता</span>
              <span className="font-bold text-teal-400 text-xs">{maxPossiblePieces} टुक्रा</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 col-span-2 sm:col-span-1">
              <span className="text-[10px] text-slate-400 block">न्यूनतम आवश्यक बाटो</span>
              <span className="font-bold text-white text-xs">{minRoadRequired} फिट</span>
            </div>
          </div>

          {/* Call-to-action for Full Kitta Kat Checker */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/90 p-3 rounded-xl border border-slate-800">
            <div className="text-[11px] text-slate-300 flex items-center gap-1.5">
              <Split className="w-4 h-4 text-teal-400 shrink-0" />
              <span>नक्सा मुख (Frontage), सेतब्याक र मोही नियमको पूर्ण विश्लेषण?</span>
            </div>
            <Link
              href="/tools/kitta-kat-checker"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs transition-colors shrink-0"
            >
              <span>पूर्ण कित्ताकाट चेकर खोल्नुहोस्</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
