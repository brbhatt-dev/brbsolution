'use client';

import React, { useState, useMemo } from 'react';
import { 
  Split, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  RotateCcw, 
  Scale, 
  Building2, 
  MapPin, 
  Ruler, 
  Compass,
  ArrowRight,
  ShieldAlert,
  Info
} from 'lucide-react';
import Link from 'next/link';

export default function KittaKatChecker() {
  // Inputs
  const [region, setRegion] = useState<'valley' | 'terai' | 'hills'>('valley');
  const [landType, setLandType] = useState<'residential' | 'agricultural' | 'commercial'>('residential');
  const [unitSystem, setUnitSystem] = useState<'ropani' | 'bigha' | 'sqft' | 'sqm'>('ropani');

  // Input numbers
  const [ropaniVal, setRopaniVal] = useState<number>(0);
  const [aanaVal, setAanaVal] = useState<number>(8);
  const [paisaVal, setPaisaVal] = useState<number>(0);

  const [bighaVal, setBighaVal] = useState<number>(0);
  const [kathaVal, setKathaVal] = useState<number>(2);
  const [dhurVal, setDhurVal] = useState<number>(0);

  const [sqftVal, setSqftVal] = useState<number>(2738);
  const [sqmVal, setSqmVal] = useState<number>(254);

  const [roadWidthFeet, setRoadWidthFeet] = useState<number>(13);
  const [frontageFeet, setFrontageFeet] = useState<number>(24);
  const [targetPieces, setTargetPieces] = useState<number>(2);

  // Constants
  const SQM_PER_ROPANI = 508.72;
  const SQM_PER_AANA = 31.795;
  const SQM_PER_PAISA = 7.948;

  const SQM_PER_BIGHA = 6772.63;
  const SQM_PER_KATHA = 338.63;
  const SQM_PER_DHUR = 16.93;

  const SQFT_TO_SQM = 0.092903;

  // Calculate Total Square Meters
  const totalSqm = useMemo(() => {
    if (unitSystem === 'ropani') {
      return (ropaniVal * SQM_PER_ROPANI) + (aanaVal * SQM_PER_AANA) + (paisaVal * SQM_PER_PAISA);
    } else if (unitSystem === 'bigha') {
      return (bighaVal * SQM_PER_BIGHA) + (kathaVal * SQM_PER_KATHA) + (dhurVal * SQM_PER_DHUR);
    } else if (unitSystem === 'sqft') {
      return sqftVal * SQFT_TO_SQM;
    } else {
      return sqmVal;
    }
  }, [unitSystem, ropaniVal, aanaVal, paisaVal, bighaVal, kathaVal, dhurVal, sqftVal, sqmVal]);

  // Determine Minimum Area Required per Piece (in Sq. Meters)
  const minRequiredPerPiece = useMemo(() => {
    if (landType === 'residential') {
      if (region === 'valley') {
        return 130; // 130 sqm (approx 4.08 aana)
      } else if (region === 'terai') {
        return 169.3; // approx 10 dhur
      } else {
        return 130; // approx 4 aana
      }
    } else if (landType === 'agricultural') {
      if (region === 'valley') {
        return 500; // 500 sqm (approx 1 ropani)
      } else if (region === 'terai') {
        return 675; // 675 sqm (approx 2 katha)
      } else {
        return 1000; // 1000 sqm (approx 2 ropani)
      }
    } else {
      return 200; // Commercial
    }
  }, [landType, region]);

  // Minimum Road Width required
  const minRoadRequiredFeet = useMemo(() => {
    if (landType === 'residential') return 10; // minimum 10-13 ft
    if (landType === 'commercial') return 16;
    return 8; // agricultural
  }, [landType]);

  // Minimum Frontage required per piece
  const minFrontageRequiredFeet = 20;

  // Evaluation
  const areaPerPiece = targetPieces > 0 ? totalSqm / targetPieces : 0;
  const isAreaEligible = areaPerPiece >= minRequiredPerPiece;
  const isRoadEligible = roadWidthFeet >= minRoadRequiredFeet;
  const isFrontageEligible = frontageFeet >= (minFrontageRequiredFeet * targetPieces);

  const isEligible = isAreaEligible && isRoadEligible;

  // Convert sqm to Aana & Dhur for display
  const areaPerPieceAana = (areaPerPiece / SQM_PER_AANA).toFixed(2);
  const areaPerPieceDhur = (areaPerPiece / SQM_PER_DHUR).toFixed(2);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
      
      {/* Tool Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
            <Split className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              कित्ताकाट योग्यता तथा सडक मापदण्ड परीक्षक
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              भू-उपयोग नियमावली २०७९ (संशोधन २०८१) को आधिकारिक मापदण्डमा आधारित
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setRegion('valley');
            setLandType('residential');
            setUnitSystem('ropani');
            setRopaniVal(0);
            setAanaVal(8);
            setPaisaVal(0);
            setRoadWidthFeet(13);
            setFrontageFeet(24);
            setTargetPieces(2);
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>रिसेट गर्नुहोस्</span>
        </button>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Inputs (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Step 1: Region & Classification */}
          <div className="space-y-4">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>१. जग्गा रहेको भौगोलिक क्षेत्र छान्नुहोस्:</span>
            </label>

            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'valley', label: 'काठमाडौँ उपत्यका' },
                { id: 'terai', label: 'तराई र भित्री मधेस' },
                { id: 'hills', label: 'पहाडी भूभाग' },
              ].map((r) => (
                <button
                  key={r.id}
                  onClick={() => setRegion(r.id as any)}
                  className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all text-center ${
                    region === r.id
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Land Use Classification */}
          <div className="space-y-4">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span>२. भू-उपयोग वर्गीकरण (जग्गाको किसिम):</span>
            </label>

            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'residential', label: 'आवासीय क्षेत्र (Ghar/Ghari)' },
                { id: 'agricultural', label: 'कृषि क्षेत्र (Krishi)' },
                { id: 'commercial', label: 'व्यापारिक / औद्योगिक' },
              ].map((lt) => (
                <button
                  key={lt.id}
                  onClick={() => setLandType(lt.id as any)}
                  className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all text-center ${
                    landType === lt.id
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {lt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Land Area Input */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-emerald-600" />
                <span>३. हालको कुल क्षेत्रफल प्रविष्ट गर्नुहोस्:</span>
              </label>

              {/* Unit Selector */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                {[
                  { id: 'ropani', label: 'रोपनी-आना' },
                  { id: 'bigha', label: 'बिघा-कट्ठा' },
                  { id: 'sqft', label: 'वर्गफिट' },
                  { id: 'sqm', label: 'वर्गमिटर' },
                ].map((u) => (
                  <button
                    key={u.id}
                    onClick={() => setUnitSystem(u.id as any)}
                    className={`px-2 py-1 rounded-md text-[11px] font-bold transition-all ${
                      unitSystem === u.id
                        ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-2xs'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {u.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Conditional input fields */}
            {unitSystem === 'ropani' && (
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <span className="text-[11px] font-bold text-slate-500 block mb-1">रोपनी:</span>
                  <input
                    type="number"
                    min="0"
                    value={ropaniVal || ''}
                    onChange={(e) => setRopaniVal(Math.max(0, Number(e.target.value)))}
                    placeholder="0"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm font-bold text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 block mb-1">आना:</span>
                  <input
                    type="number"
                    min="0"
                    max="15"
                    value={aanaVal || ''}
                    onChange={(e) => setAanaVal(Math.max(0, Number(e.target.value)))}
                    placeholder="0"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm font-bold text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 block mb-1">पैसा:</span>
                  <input
                    type="number"
                    min="0"
                    max="3"
                    value={paisaVal || ''}
                    onChange={(e) => setPaisaVal(Math.max(0, Number(e.target.value)))}
                    placeholder="0"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm font-bold text-slate-900 dark:text-white"
                  />
                </div>
              </div>
            )}

            {unitSystem === 'bigha' && (
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <span className="text-[11px] font-bold text-slate-500 block mb-1">बिघा:</span>
                  <input
                    type="number"
                    min="0"
                    value={bighaVal || ''}
                    onChange={(e) => setBighaVal(Math.max(0, Number(e.target.value)))}
                    placeholder="0"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm font-bold text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 block mb-1">कट्ठा:</span>
                  <input
                    type="number"
                    min="0"
                    max="19"
                    value={kathaVal || ''}
                    onChange={(e) => setKathaVal(Math.max(0, Number(e.target.value)))}
                    placeholder="0"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm font-bold text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 block mb-1">धुर:</span>
                  <input
                    type="number"
                    min="0"
                    max="19"
                    value={dhurVal || ''}
                    onChange={(e) => setDhurVal(Math.max(0, Number(e.target.value)))}
                    placeholder="0"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm font-bold text-slate-900 dark:text-white"
                  />
                </div>
              </div>
            )}

            {unitSystem === 'sqft' && (
              <div>
                <span className="text-[11px] font-bold text-slate-500 block mb-1">वर्गफिट (Sq. Feet):</span>
                <input
                  type="number"
                  min="0"
                  value={sqftVal || ''}
                  onChange={(e) => setSqftVal(Math.max(0, Number(e.target.value)))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm font-bold text-slate-900 dark:text-white"
                />
              </div>
            )}

            {unitSystem === 'sqm' && (
              <div>
                <span className="text-[11px] font-bold text-slate-500 block mb-1">वर्गमिटर (Sq. Meters):</span>
                <input
                  type="number"
                  min="0"
                  value={sqmVal || ''}
                  onChange={(e) => setSqmVal(Math.max(0, Number(e.target.value)))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm font-bold text-slate-900 dark:text-white"
                />
              </div>
            )}
          </div>

          {/* Step 4: Road, Frontage & Pieces */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block mb-1">
                बाटोको चौडाइ (फिटमा):
              </label>
              <input
                type="number"
                min="0"
                value={roadWidthFeet || ''}
                onChange={(e) => setRoadWidthFeet(Math.max(0, Number(e.target.value)))}
                placeholder="13"
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm font-bold text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block mb-1">
                सडक मोहडा (Frontage फिटमा):
              </label>
              <input
                type="number"
                min="0"
                value={frontageFeet || ''}
                onChange={(e) => setFrontageFeet(Math.max(0, Number(e.target.value)))}
                placeholder="24"
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm font-bold text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block mb-1">
                कित्ताकाट गर्ने संख्या (टुक्रा):
              </label>
              <input
                type="number"
                min="2"
                max="50"
                value={targetPieces || ''}
                onChange={(e) => setTargetPieces(Math.max(2, Number(e.target.value)))}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm font-bold text-slate-900 dark:text-white"
              />
            </div>
          </div>

        </div>

        {/* Right Output Card (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="space-y-4">
            
            {/* Status Banner */}
            <div
              className={`p-6 rounded-3xl border transition-all ${
                isEligible
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                  : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200'
              }`}
            >
              <div className="flex items-center gap-3">
                {isEligible ? (
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 shrink-0" />
                ) : (
                  <AlertCircle className="w-8 h-8 text-rose-600 dark:text-rose-400 shrink-0" />
                )}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider block opacity-75">
                    परीक्षण परिणाम (Result)
                  </span>
                  <h3 className="text-xl font-black">
                    {isEligible
                      ? 'कित्ताकाट गर्न सम्भव छ (Eligible)'
                      : 'कित्ताकाट गर्न मिल्दैन (Not Eligible)'}
                  </h3>
                </div>
              </div>

              <p className="text-xs mt-3 leading-relaxed opacity-90">
                {isEligible
                  ? `तपाईंको जग्गालाई ${targetPieces} टुक्रामा कित्ताकाट गर्दा प्रत्येक टुक्राले भू-उपयोग नियमावलीको न्यूनतम क्षेत्रफल र सडक मापदण्ड पूरा गर्दछ।`
                  : !isAreaEligible
                  ? `प्रत्येक कित्ताको क्षेत्रफल (${areaPerPiece.toFixed(1)} वर्गमिटर) न्यूनतम तोकिएको ${minRequiredPerPiece} वर्गमिटर भन्दा कम हुन आउँछ।`
                  : `सडकको चौडाइ (${roadWidthFeet} फिट) यस प्रयोजनका लागि तोकिएको न्यूनतम मापदण्ड (${minRoadRequiredFeet} फिट) भन्दा कम छ।`}
              </p>
            </div>

            {/* Calculations Breakdown */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
              <span className="font-extrabold uppercase tracking-wider text-slate-500 block">
                विस्तृत प्राविधिक विवरण (Details):
              </span>

              <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-2">
                <span className="text-slate-600 dark:text-slate-400">कुल जग्गाको क्षेत्रफल:</span>
                <span className="font-bold text-slate-900 dark:text-white font-mono">
                  {totalSqm.toFixed(1)} वर्गमिटर ({(totalSqm / SQM_PER_AANA).toFixed(2)} आना)
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-2">
                <span className="text-slate-600 dark:text-slate-400">कित्ताकाट पछिको प्रति टुक्रा क्षेत्रफल:</span>
                <span className="font-bold text-slate-900 dark:text-white font-mono">
                  {areaPerPiece.toFixed(1)} वर्गमिटर ({areaPerPieceAana} आना / {areaPerPieceDhur} धुर)
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-2">
                <span className="text-slate-600 dark:text-slate-400">सरकारी न्यूनतम मापदण्ड प्रति टुक्रा:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                  {minRequiredPerPiece} वर्गमिटर
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">न्यूनतम आवश्यक बाटो:</span>
                <span className="font-bold text-slate-900 dark:text-white font-mono">
                  न्यूनतम {minRoadRequiredFeet} फिट
                </span>
              </div>
            </div>

          </div>

          {/* Legal Reference & Action Button */}
          <div className="pt-4 space-y-3">
            <div className="p-3.5 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-900/40 text-[11px] text-indigo-900 dark:text-indigo-300 flex items-start gap-2">
              <Scale className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <span>
                <strong>कानुनी आधार:</strong> भू-उपयोग ऐन २०७६, भू-उपयोग नियमावली २०७९ को अनुसूची ७ र स्थानीय तहको भू-उपयोग परिषद्को निर्णय अनुसार।
              </span>
            </div>

            <Link
              href="/laws"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold transition-all"
            >
              <span>मूल कानुन तथा निर्देशिकाहरू हेर्नुहोस्</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
