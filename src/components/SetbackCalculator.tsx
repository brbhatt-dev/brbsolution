'use client';

import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  Ruler, 
  Compass, 
  CheckCircle2, 
  AlertTriangle, 
  Copy, 
  Check, 
  RotateCcw, 
  Layers, 
  Info,
  Maximize2
} from 'lucide-react';

interface RoadStandard {
  id: string;
  name: string;
  widthMeters: number;
  widthFeet: number;
  centerlineDistanceM: number;
  frontSetbackM: number;
  sideSetbackM: number;
  rearSetbackM: number;
  maxGroundCoverage: number;
  description: string;
}

const ROAD_STANDARDS: Record<string, RoadStandard> = {
  'highway': {
    id: 'highway',
    name: 'राष्ट्रिय राजमार्ग / सहायक राजमार्ग (Highway)',
    widthMeters: 30,
    widthFeet: 98.4,
    centerlineDistanceM: 15,
    frontSetbackM: 6,
    sideSetbackM: 2,
    rearSetbackM: 2,
    maxGroundCoverage: 50,
    description: 'सडक केन्द्र रेखा (Centerline) बाट कम्तिमा १५ मिटर छोडी थप ६ मिटर निर्माण सीमा (Setback) कायम गर्नुपर्छ।'
  },
  'major_urban': {
    id: 'major_urban',
    name: 'नगरस्तरीय प्रमुख सडक (चौडाइ १०–१४ मिटर)',
    widthMeters: 12,
    widthFeet: 39.4,
    centerlineDistanceM: 6,
    frontSetbackM: 3,
    sideSetbackM: 1.5,
    rearSetbackM: 1.5,
    maxGroundCoverage: 60,
    description: 'सडक केन्द्रबाट ६ मिटर बाटोको अधिकार (ROW) र थप ३ मिटर घरको सेतब्याक छोड्नुपर्छ।'
  },
  'secondary_road': {
    id: 'secondary_road',
    name: 'स्थानीय सहायक सडक (चौडाइ ८ मिटर / २६ फिट)',
    widthMeters: 8,
    widthFeet: 26.2,
    centerlineDistanceM: 4,
    frontSetbackM: 1.5,
    sideSetbackM: 1.5,
    rearSetbackM: 1.5,
    maxGroundCoverage: 65,
    description: 'सडकको बीच केन्द्रबाट ४ मिटर सडक सीमा र बाटोतर्फ १.५ मिटर (५ फिट) सेटब्याक अनिवार्य।'
  },
  'sub_branch': {
    id: 'sub_branch',
    name: 'बस्ती भित्री शाखा बाटो (चौडाइ ६ मिटर / २० फिट)',
    widthMeters: 6,
    widthFeet: 19.7,
    centerlineDistanceM: 3,
    frontSetbackM: 1.5,
    sideSetbackM: 1.5,
    rearSetbackM: 1.5,
    maxGroundCoverage: 70,
    description: 'काठमाडौँ उपत्यका तथा अन्य नगरहरूमा सामान्य आवासीय घरका लागि सर्वाधिक लागू हुने मापदण्ड।'
  },
  'feeder_road': {
    id: 'feeder_road',
    name: 'भित्री गल्ली वा आवासीय बाटो (चौडाइ ४ मिटर / १३ फिट)',
    widthMeters: 4,
    widthFeet: 13.1,
    centerlineDistanceM: 2,
    frontSetbackM: 1.5,
    sideSetbackM: 1.5,
    rearSetbackM: 1.5,
    maxGroundCoverage: 70,
    description: 'सडक केन्द्रबाट २ मिटर सडक चौडाइ र १.५ मिटर भवन निर्माण सेतब्याक गरी केन्द्रबाट ३.५ मिटर।'
  },
  'dead_end': {
    id: 'dead_end',
    name: 'टुङ्गिने बाटो (Dead-End Road - ३ मिटर / १० फिट)',
    widthMeters: 3,
    widthFeet: 9.8,
    centerlineDistanceM: 1.5,
    frontSetbackM: 1.5,
    sideSetbackM: 1.5,
    rearSetbackM: 1.5,
    maxGroundCoverage: 70,
    description: 'अधिकतम ५० मिटरसम्म लम्बाइ भएको डेड-एन्ड सडकमा केन्द्रबाट १.५ मिटर र थप १.५ मिटर सेटब्याक।'
  }
};

export default function SetbackCalculator() {
  const [selectedRoad, setSelectedRoad] = useState<string>('sub_branch');
  const [buildingType, setBuildingType] = useState<'residential' | 'commercial'>('residential');
  const [hasWindowsOnSide, setHasWindowsOnSide] = useState<boolean>(true);
  const [landAreaSqFt, setLandAreaSqFt] = useState<string>('1369'); // 4 aana
  const [copied, setCopied] = useState<boolean>(false);

  const roadData = ROAD_STANDARDS[selectedRoad];

  const results = useMemo(() => {
    // Total distance from road center to building wall
    const totalFromCenterM = roadData.centerlineDistanceM + roadData.frontSetbackM;
    const totalFromCenterFt = totalFromCenterM * 3.28084;

    // Side setback logic: 1.5m (5 ft) if opening window/door, 0m to 1m if blank wall
    const actualSideM = hasWindowsOnSide ? roadData.sideSetbackM : 1.0;
    const actualSideFt = actualSideM * 3.28084;

    const actualRearM = roadData.rearSetbackM;
    const actualRearFt = actualRearM * 3.28084;

    // Ground coverage
    const coveragePercent = buildingType === 'commercial' ? Math.min(roadData.maxGroundCoverage, 55) : roadData.maxGroundCoverage;
    const totalArea = parseFloat(landAreaSqFt) || 0;
    const maxPlinthAreaSqFt = (totalArea * coveragePercent) / 100;
    const maxPlinthAreaSqM = maxPlinthAreaSqFt * 0.092903;

    return {
      roadWidthM: roadData.widthMeters,
      roadWidthFt: roadData.widthFeet,
      centerlineDistM: roadData.centerlineDistanceM,
      frontSetbackM: roadData.frontSetbackM,
      frontSetbackFt: (roadData.frontSetbackM * 3.28084).toFixed(1),
      totalFromCenterM: totalFromCenterM.toFixed(1),
      totalFromCenterFt: totalFromCenterFt.toFixed(1),
      sideSetbackM: actualSideM.toFixed(1),
      sideSetbackFt: actualSideFt.toFixed(1),
      rearSetbackM: actualRearM.toFixed(1),
      rearSetbackFt: actualRearFt.toFixed(1),
      coveragePercent,
      maxPlinthAreaSqFt: maxPlinthAreaSqFt.toLocaleString('en-IN', { maximumFractionDigits: 1 }),
      maxPlinthAreaSqM: maxPlinthAreaSqM.toLocaleString('en-IN', { maximumFractionDigits: 1 }),
      description: roadData.description
    };
  }, [roadData, buildingType, hasWindowsOnSide, landAreaSqFt]);

  const handleCopy = () => {
    const text = `घर नक्सा पास तथा सेतब्याक मापदण्ड हिसाब (BR Bhatta Setback Calculator):
सडक प्रकार: ${roadData.name}
सडकको चौडाइ: ${results.roadWidthM} मिटर (${results.roadWidthFt} फिट)
सडक केन्द्रबाट कुल दुरी: ${results.totalFromCenterM} मिटर (${results.totalFromCenterFt} फिट)
अगाडि छोड्नुपर्ने सेटब्याक (Front): ${results.frontSetbackM} मिटर (${results.frontSetbackFt} फिट)
दायाँ/बायाँ सेटब्याक (Side): ${results.sideSetbackM} मिटर (${results.sideSetbackFt} फिट)
पछाडि सेटब्याक (Rear): ${results.rearSetbackM} मिटर (${results.rearSetbackFt} फिट)
अधिकतम ग्राउन्ड कभरेज: ${results.coveragePercent}% (अधिकतम निर्माण क्षेत्रफल: ${results.maxPlinthAreaSqFt} sq.ft)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      
      {/* Header */}
      <div className="space-y-1.5 pb-5 border-b border-slate-100 dark:border-slate-800">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
          <Building2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>नेपाल राष्ट्रिय भवन निर्माण तथा सडक मापदण्ड २०८१</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          घर नक्सा पास गर्दा बाटो र चारैतिर कति जग्गा छोड्नुपर्छ?
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          सहरी विकास मन्त्रालय तथा स्थानीय तह (महानगर/उपमहानगर/नगरपालिका) को आधारभूत निर्माण मापदण्ड अनुसार तुरुन्त गणना गर्नुहोस्।
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Road Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              १. जग्गा अगाडिको बाटोको प्रकार वा विद्यमान चौडाइ रोज्नुहोस्:
            </label>
            <select
              value={selectedRoad}
              onChange={(e) => setSelectedRoad(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              {Object.values(ROAD_STANDARDS).map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          {/* Building Type */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              २. बनाउन लागिएको भवनको प्रकार:
            </label>
            <div className="grid grid-cols-2 gap-3 text-xs font-bold">
              <button
                type="button"
                onClick={() => setBuildingType('residential')}
                className={`p-3 rounded-xl border transition-all text-left space-y-1 ${
                  buildingType === 'residential'
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-300'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>आवासीय भवन</span>
                  {buildingType === 'residential' && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                </div>
                <p className="text-[11px] font-normal text-slate-500">घर बस्ने प्रयोजनका लागि (३ तलासम्म)</p>
              </button>

              <button
                type="button"
                onClick={() => setBuildingType('commercial')}
                className={`p-3 rounded-xl border transition-all text-left space-y-1 ${
                  buildingType === 'commercial'
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-300'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>व्यावसायिक भवन</span>
                  {buildingType === 'commercial' && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                </div>
                <p className="text-[11px] font-normal text-slate-500">पसल, कम्प्लेक्स, कार्यालय प्रयोजन</p>
              </button>
            </div>
          </div>

          {/* Windows / Openings on Side */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              ३. दायाँ-बायाँ साँध-सँधियारातर्फ झ्याल वा भेन्टिलेसन राख्ने हो?
            </label>
            <div className="grid grid-cols-2 gap-3 text-xs font-bold">
              <button
                type="button"
                onClick={() => setHasWindowsOnSide(true)}
                className={`p-3 rounded-xl border text-center transition-all ${
                  hasWindowsOnSide
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                हो, झ्याल राख्ने (५ फिट अनिवार्य)
              </button>

              <button
                type="button"
                onClick={() => setHasWindowsOnSide(false)}
                className={`p-3 rounded-xl border text-center transition-all ${
                  !hasWindowsOnSide
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                होइन, अन्धो भित्ता (Blank Wall)
              </button>
            </div>
          </div>

          {/* Land Area for Ground Coverage */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>४. जग्गाको कुल क्षेत्रफल (वर्गफिटमा):</span>
              <span className="text-[11px] text-slate-500">उदा: ४ आना = १३६९ वर्गफिट</span>
            </label>
            <input
              type="number"
              value={landAreaSqFt}
              onChange={(e) => setLandAreaSqFt(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              placeholder="1369"
            />
          </div>

        </div>

        {/* Right Results Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 border border-slate-800 flex flex-col justify-between space-y-5">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                नक्सा पास सेतब्याक मापदण्ड
              </span>
              <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded-full text-slate-300 font-mono">
                {results.roadWidthM}m बाटो
              </span>
            </div>

            {/* Front Distance from Centerline Highlight */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/90 to-teal-950/90 border border-emerald-500/40 space-y-1">
              <span className="text-[11px] font-bold text-emerald-300">
                सडकको बीच केन्द्र (Centerline) बाट घरसम्मको कुल दुरी:
              </span>
              <h3 className="text-2xl font-black text-white">
                {results.totalFromCenterM} मिटर <span className="text-sm font-normal text-emerald-300">({results.totalFromCenterFt} फिट)</span>
              </h3>
              <p className="text-[11px] text-slate-300">
                सडक सीमा ({results.centerlineDistM}m) + भवन सेतब्याक ({results.frontSetbackM}m)
              </p>
            </div>

            {/* 4-Direction Setbacks Grid */}
            <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">अगाडि (Front)</span>
                <p className="text-base font-black text-emerald-400">{results.frontSetbackM} m</p>
                <span className="text-[10px] text-slate-400 font-mono">{results.frontSetbackFt} ft</span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">दायाँ/बायाँ (Side)</span>
                <p className="text-base font-black text-emerald-400">{results.sideSetbackM} m</p>
                <span className="text-[10px] text-slate-400 font-mono">{results.sideSetbackFt} ft</span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">पछाडि (Rear)</span>
                <p className="text-base font-black text-emerald-400">{results.rearSetbackM} m</p>
                <span className="text-[10px] text-slate-400 font-mono">{results.rearSetbackFt} ft</span>
              </div>
            </div>

            {/* Ground Coverage Box */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">अधिकतम भुईंतला कभरेज (Ground Coverage):</span>
                <strong className="text-white font-mono">{results.coveragePercent}%</strong>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-300 font-mono pt-1">
                <span>अधिकतम निर्माण क्षेत्रफल (Plinth Area):</span>
                <span className="text-emerald-400 font-bold">{results.maxPlinthAreaSqFt} sq.ft</span>
              </div>
            </div>

          </div>

          <button
            onClick={handleCopy}
            className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>मापदण्ड कपी भयो!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>सम्पूर्ण सेतब्याक मापदण्ड कपी गर्नुहोस्</span>
              </>
            )}
          </button>

        </div>

      </div>

    </div>
  );
}
