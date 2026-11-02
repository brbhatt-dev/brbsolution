'use client';

import React, { useState, useMemo } from 'react';
import { 
  Building, 
  Layers, 
  Package, 
  Hammer, 
  Coins, 
  Copy, 
  Check, 
  RotateCcw, 
  Info, 
  ShieldCheck, 
  Flame, 
  ArrowRight,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';
import { copyToClipboard } from '@/lib/clipboard';

type ConstructionGrade = 'budget' | 'standard' | 'premium';
type SoilCondition = 'normal' | 'soft';

interface GradeConfig {
  id: ConstructionGrade;
  title: string;
  tagline: string;
  ratePerSqFt: number;
  description: string;
  specs: string[];
}

const CONSTRUCTION_GRADES: Record<ConstructionGrade, GradeConfig> = {
  budget: {
    id: 'budget',
    title: 'बजेट / साधारण (Budget RCC)',
    tagline: 'किफायती र भरपर्दो संरचना',
    ratePerSqFt: 2500,
    description: 'सामान्य आवासीय घर, जसमा गुणस्तरीय संरचनात्मक कङ्क्रिट र सामान्य फिनिसिङ (स्थानीय टायल्स, साधारण सेनेटरी, डिस्टेम्पर/इनामेल पेन्ट) प्रयोग हुन्छ।',
    specs: [
      'एम२० (M20 Grade) कङ्क्रिट र Fe500 टीएमटी डण्डी',
      '१ नम्बर चिम्नी रातो इँटाको बाहिरी ९ इन्च, भित्री ४.५ इन्च पर्खाल',
      'सामान्य सेरामिक टायल्स र स्ट्यान्डर्ड सेनेटरी फिटिङ्स',
      'आल्मुनियम झ्याल (सामान्य सेक्सन) र फ्लस ढोका',
      'साधारण वाल पुट्टी र डिस्टेम्पर/ट्र्याक्टर इमल्सन पेन्ट'
    ]
  },
  standard: {
    id: 'standard',
    title: 'स्तरीय / आधुनिक (Standard Modern)',
    tagline: 'धेरैले रोज्ने उत्कृष्ट सन्तुलन',
    ratePerSqFt: 3200,
    description: 'आधुनिक सहरिया घरहरूको लागि सबैभन्दा लोकप्रिय। यसमा ब्रान्डेड निर्माण सामग्री, प्रिमियम टायल्स, ग्रेनाइट भान्सा, युपिभिसी/हेभी आल्मुनियम र ब्रान्डेड पेन्ट समावेश हुन्छ।',
    specs: [
      'एम२०/एम२५ (M25) उच्च भारवहन कङ्क्रिट र Fe500D भूकम्प प्रतिरोधी डण्डी',
      'भित्री भुइँमा २×२ फिट प्रिमियम भिट्रिफाइड टायल्स र सिँढीमा ग्रेनाइट',
      'किचेनमा ग्रेनाइट टप, मोड्युलर बास्केट र एसएस सिङ्क',
      'युपिभिसी (UPVC) वा हेभी पाउडर कोटेड आल्मुनियम विन्डोज',
      'प्रीमियम प्लास्टिक इमल्सन र बाहिरी वेदरकोट एपेक्स पेन्ट',
      'ब्रान्डेड कन्सील्ड कन्सर्ट स्यानिटरी र मोड्युलर इलेक्ट्रिकल स्विचेस'
    ]
  },
  premium: {
    id: 'premium',
    title: 'प्रिमियम / लक्जरी (Luxury Villa)',
    tagline: 'सर्वोत्कृष्ट फिनिसिङ र सौन्दर्य',
    ratePerSqFt: 4000,
    description: 'लक्जरी भिल्ला र हाइ-इन्ड आवास। इटालियन मार्बल, फल्स सिलिङ, काठको हेभी फ्रेम ढोका, ज्याकुजी, इन्टरियर डिजाइन र उच्च प्रविधियुक्त संरचना।',
    specs: [
      'स्ट्रक्चरल इन्जिनियरिङ प्रमाणित हेभी पिलर (१४×१४ इन्च वा सोभन्दा बढी)',
      'इटालियन मार्बल वा ८०×१६० सेमी लार्ज फर्म्याट जिभिटी टायल्स',
      'सगुन/सालको काठको मुख्य ढोका र उच्च कोटीको फल्स सिलिङ',
      'ज्याक्वार / कोहलर (Jaquar/Kohler) का लक्जरी सेनेटरी वेयर्स',
      'साउन्डप्रुफ डबल ग्लाज्ड युपिभिसी झ्यालहरू',
      'आधुनिक इन्टेरियर आर्किटेक्चर, वाल प्यानलिङ र टेक्सचर फिनिसिङ'
    ]
  }
};

export default function ConstructionCostCalculator() {
  // Inputs
  const [areaPerFloor, setAreaPerFloor] = useState<number>(800); // sq ft
  const [floors, setFloors] = useState<number>(2.5); // storeys
  const [grade, setGrade] = useState<ConstructionGrade>('standard');
  const [soil, setSoil] = useState<SoilCondition>('normal');
  const [copied, setCopied] = useState(false);

  // Calculations
  const totalBuiltUpArea = useMemo(() => {
    return Math.round(areaPerFloor * floors);
  }, [areaPerFloor, floors]);

  const totalBuiltUpAreaSqm = useMemo(() => {
    return (totalBuiltUpArea * 0.092903).toFixed(1);
  }, [totalBuiltUpArea]);

  const equivalentAana = useMemo(() => {
    return (areaPerFloor / 342.25).toFixed(1);
  }, [areaPerFloor]);

  const activeGrade = CONSTRUCTION_GRADES[grade];

  const estimatedCost = useMemo(() => {
    const baseRate = activeGrade.ratePerSqFt;
    const soilMultiplier = soil === 'soft' ? 1.08 : 1.0; // +8% for raft/mat foundation on soft soil
    const total = Math.round(totalBuiltUpArea * baseRate * soilMultiplier);
    const min = Math.round(total * 0.95);
    const max = Math.round(total * 1.05);
    return { total, min, max, baseRate: Math.round(baseRate * soilMultiplier) };
  }, [totalBuiltUpArea, activeGrade, soil]);

  // Material estimates based on Nepal NBC & DUDBC standards
  const materials = useMemo(() => {
    const area = totalBuiltUpArea;
    const cementBags = Math.round(area * 0.40);
    const steelKg = Math.round(area * 3.8);
    const steelTonnes = (steelKg / 1000).toFixed(2);
    const sandCft = Math.round(area * 1.8);
    const sandTippers = (sandCft / 350).toFixed(1); // 1 tipper approx 350 cu ft
    const gravelCft = Math.round(area * 1.35);
    const gravelTippers = (gravelCft / 350).toFixed(1);
    const bricksCount = Math.round(area * 19);

    return {
      cementBags,
      steelKg,
      steelTonnes,
      sandCft,
      sandTippers,
      gravelCft,
      gravelTippers,
      bricksCount
    };
  }, [totalBuiltUpArea]);

  // Phase-wise budget breakdown
  const phases = useMemo(() => {
    const total = estimatedCost.total;
    return [
      {
        phase: 'चरण १: जग तथा डीपीसी (Foundation & Plinth)',
        percent: 15,
        cost: Math.round(total * 0.15),
        details: 'माटो खन्ने, सोलिङ, पिसिसी, फुटिङ ढलान, पिलर उठाउने र डीपीसी टाइ-बीम।'
      },
      {
        phase: 'चरण २: पिलर, बीम तथा छत ढलान (RCC Frame Structure)',
        percent: 32,
        cost: Math.round(total * 0.32),
        details: `${floors} तला सम्मका सबै पिलर, बिम, स्ल्याब र सिँढी ढलान सम्पन्न गर्ने।`
      },
      {
        phase: 'चरण ३: पर्खाल गाह्रो तथा प्लास्टर (Masonry & Plaster)',
        percent: 18,
        cost: Math.round(total * 0.18),
        details: 'इँटाको पर्खाल चिनाइ, झ्यालढोकाका फ्रेम राख्ने, भित्री र बाहिरी पूर्ण प्लास्टर।'
      },
      {
        phase: 'चरण ४: टायल्स, मार्बल तथा रङरोगन (Flooring & Painting)',
        percent: 18,
        cost: Math.round(total * 0.18),
        details: 'भुइँमा टायल्स/मार्बल बिछ्याउने, बाथरुम वाल टायल्स, भित्तामा पुट्टी र पेन्टिङ।'
      },
      {
        phase: 'चरण ५: झ्याल, ढोका, विद्युतीय तथा स्यानिटरी (Finishing)',
        percent: 17,
        cost: Math.round(total * 0.17),
        details: 'युपिभिसी/आल्मुनियम झ्याल, काठका ढोका, वायरिङ/लाइटिङ, धारा र बाथरुम फिटिङ्स।'
      }
    ];
  }, [estimatedCost, floors]);

  const handleCopySummary = async () => {
    const summaryText = `🏠 घर निर्माण लागत तथा सामग्री अनुमान (BR Bhatta Construction Calculator)
--------------------------------------------------
• भुइँतला क्षेत्रफल: ${areaPerFloor} sq.ft (~${equivalentAana} आना)
• तला सङ्ख्या: ${floors} तला
• कुल निर्माण क्षेत्रफल: ${totalBuiltUpArea} sq.ft (${totalBuiltUpAreaSqm} sq.m)
• निर्माण स्तर: ${activeGrade.title} (दर: रु. ${estimatedCost.baseRate}/sq.ft)
• जमिनको अवस्था: ${soil === 'soft' ? 'कालो/नरम माटो (र्याफ्ट फाउन्डेसन)' : 'कडा/सामान्य माटो'}

💰 अनुमानित कुल निर्माण बजेट:
• मुख्य अनुमान: रु. ${estimatedCost.total.toLocaleString('ne-NP')} /-
• सम्भावित दायरा: रु. ${estimatedCost.min.toLocaleString('ne-NP')} देखि रु. ${estimatedCost.max.toLocaleString('ne-NP')}

🧱 मुख्य निर्माण सामग्री परिमाण:
• सिमेन्ट: ${materials.cementBags.toLocaleString('ne-NP')} बोरा (५० केजी)
• डण्डी (TMT Steel): ${materials.steelKg.toLocaleString('ne-NP')} केजी (${materials.steelTonnes} टन)
• बालुवा (River Sand): ${materials.sandCft.toLocaleString('ne-NP')} घनफिट (~${materials.sandTippers} टिपर)
• गिट्टी (Crushed Aggregate): ${materials.gravelCft.toLocaleString('ne-NP')} घनफिट (~${materials.gravelTippers} टिपर)
• इँटा (Chimney Bricks): ${materials.bricksCount.toLocaleString('ne-NP')} थान

🔗 विस्तृत विवरण: https://www.brbhatta.com/tools/construction-cost-calculator`;

    const ok = await copyToClipboard(summaryText);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setAreaPerFloor(800);
    setFloors(2.5);
    setGrade('standard');
    setSoil('normal');
  };

  return (
    <div className="space-y-8">
      {/* Top Banner Card */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 border border-indigo-900/40 shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-bold">
              <Building className="w-3.5 h-3.5 text-indigo-400" />
              <span>नेपाल भवन संहिता (NBC 105:2020) र DUDBC मापदण्ड अनुसार</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              घर निर्माण लागत तथा निर्माण सामग्री क्याल्कुलेटर
            </h2>
            <p className="text-sm text-indigo-200/90 leading-relaxed">
              आफ्नो जग्गामा बन्ने घरको तला र क्षेत्रफल चयन गर्नुहोस्। सिमेन्ट, डण्डी, बालुवा, गिट्टी, इँटाको परिमाण र चरणबद्ध बजेट तुरुन्तै प्राप्त गर्नुहोस्।
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <button
              onClick={handleReset}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>रिसेट</span>
            </button>
            <button
              onClick={handleCopySummary}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all active:scale-95"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'कपी भयो!' : 'लागत विवरण कपी'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Inputs vs Real-time Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-6 bg-white dark:bg-slate-900 p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <Hammer className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>घरको आधारभूत विवरण भर्नुहोस्:</span>
          </h3>

          {/* 1. Floor Area in Sq. Ft. */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold">
              <label className="text-slate-700 dark:text-slate-300">
                भुइँतला प्लिन्थ क्षेत्रफल (Ground Floor Plinth Area):
              </label>
              <span className="text-indigo-600 dark:text-indigo-400 font-mono">
                {areaPerFloor} sq.ft (~{equivalentAana} आना)
              </span>
            </div>
            <input
              type="range"
              min={300}
              max={3500}
              step={25}
              value={areaPerFloor}
              onChange={(e) => setAreaPerFloor(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={100}
                max={10000}
                value={areaPerFloor}
                onChange={(e) => setAreaPerFloor(Math.max(100, Number(e.target.value)))}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-sm text-slate-900 dark:text-slate-100"
              />
              <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">वर्गफिट (Sq. Ft.)</span>
            </div>
            <p className="text-2xs text-slate-500 dark:text-slate-400">
              * ३ आना जग्गामा सामान्यतया ७५० देखि ८५० वर्गफिटको भुइँतला बन्दछ (सेतब्याक कटाएर)।
            </p>
          </div>

          {/* 2. Number of Floors */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold">
              <label className="text-slate-700 dark:text-slate-300">
                तलाको सङ्ख्या (Number of Storeys):
              </label>
              <span className="text-indigo-600 dark:text-indigo-400 font-mono">
                {floors} तला
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 2.5, 3].map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFloors(f)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    floors === f
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {f} तला
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1">
              {[1.5, 3.5, 4].map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFloors(f)}
                  className={`py-1.5 px-2 rounded-xl text-2xs font-bold transition-all ${
                    floors === f
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:bg-slate-100'
                  }`}
                >
                  {f} तला
                </button>
              ))}
            </div>
          </div>

          {/* 3. Construction Package/Grade */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
              निर्माण तथा फिनिसिङ स्तर (Construction Grade):
            </label>
            <div className="space-y-2">
              {(Object.keys(CONSTRUCTION_GRADES) as ConstructionGrade[]).map((key) => {
                const item = CONSTRUCTION_GRADES[key];
                const isSelected = grade === key;
                return (
                  <div
                    key={key}
                    onClick={() => setGrade(key)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 shadow-xs ring-1 ring-indigo-500'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white">
                        {item.title}
                      </span>
                      <span className="text-xs font-black font-mono text-indigo-600 dark:text-indigo-400">
                        रु. {item.ratePerSqFt.toLocaleString('ne-NP')}/sq.ft
                      </span>
                    </div>
                    <p className="text-2xs text-slate-600 dark:text-slate-400 mt-1 leading-snug">
                      {item.tagline}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. Soil Condition */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
              जमिनको माटो तथा फाउन्डेसन प्रकार:
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setSoil('normal')}
                className={`p-2.5 rounded-xl border text-left font-semibold transition-all ${
                  soil === 'normal'
                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200'
                    : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="font-bold text-xs">कडा / सामान्य जमिन</div>
                <div className="text-2xs text-slate-500 dark:text-slate-400">आइसोलेटेड फुटिङ (साधारण)</div>
              </button>

              <button
                type="button"
                onClick={() => setSoil('soft')}
                className={`p-2.5 rounded-xl border text-left font-semibold transition-all ${
                  soil === 'soft'
                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200'
                    : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="font-bold text-xs">नरम / कालो माटो (+८%)</div>
                <div className="text-2xs text-slate-500 dark:text-slate-400">र्याफ्ट / म्याट फाउन्डेसन</div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Computed Cost & Material Breakdown (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Total Highlight Box */}
          <div className="bg-linear-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-44 h-44 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-indigo-100 text-xs font-semibold">
                <span>कुल निर्माण क्षेत्रफल: <strong>{totalBuiltUpArea} sq.ft</strong> ({totalBuiltUpAreaSqm} m²)</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white font-mono">
                  दर: रु. {estimatedCost.baseRate.toLocaleString('ne-NP')} / sq.ft
                </span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-indigo-200 font-bold">
                  अनुमानित कुल निर्माण लागत (Estimated Total Budget):
                </p>
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-1">
                  रु. {estimatedCost.total.toLocaleString('ne-NP')} /-
                </h3>
              </div>

              <div className="pt-2 border-t border-indigo-400/30 flex flex-wrap items-center justify-between gap-2 text-2xs sm:text-xs text-indigo-100">
                <span>सम्भावित लागत दायरा (±५%):</span>
                <span className="font-mono font-bold text-white">
                  रु. {estimatedCost.min.toLocaleString('ne-NP')} — रु. {estimatedCost.max.toLocaleString('ne-NP')}
                </span>
              </div>
            </div>
          </div>

          {/* Material Quantities Breakdown Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Package className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>आवश्यक मुख्य निर्माण सामग्रीको परिमाण (Material Estimator):</span>
              </h4>
              <span className="text-2xs text-slate-500 font-mono">NBC Norms</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              {/* Cement */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 space-y-1">
                <span className="text-2xs font-bold text-slate-500 dark:text-slate-400">सिमेन्ट (Cement):</span>
                <div className="text-lg font-black text-slate-900 dark:text-white font-mono">
                  {materials.cementBags.toLocaleString('ne-NP')}
                </div>
                <p className="text-2xs text-slate-500">बोरा (OPC + PPC)</p>
              </div>

              {/* Steel */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 space-y-1">
                <span className="text-2xs font-bold text-slate-500 dark:text-slate-400">डण्डी (TMT Steel):</span>
                <div className="text-lg font-black text-indigo-600 dark:text-indigo-400 font-mono">
                  {materials.steelKg.toLocaleString('ne-NP')}
                </div>
                <p className="text-2xs text-slate-500">केजी ({materials.steelTonnes} टन Fe500)</p>
              </div>

              {/* Sand */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 space-y-1">
                <span className="text-2xs font-bold text-slate-500 dark:text-slate-400">बालुवा (River Sand):</span>
                <div className="text-lg font-black text-slate-900 dark:text-white font-mono">
                  {materials.sandCft.toLocaleString('ne-NP')}
                </div>
                <p className="text-2xs text-slate-500">CFT (~{materials.sandTippers} टिपर)</p>
              </div>

              {/* Gravel */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 space-y-1">
                <span className="text-2xs font-bold text-slate-500 dark:text-slate-400">गिट्टी (Crushed Aggregate):</span>
                <div className="text-lg font-black text-slate-900 dark:text-white font-mono">
                  {materials.gravelCft.toLocaleString('ne-NP')}
                </div>
                <p className="text-2xs text-slate-500">CFT (~{materials.gravelTippers} टिपर)</p>
              </div>

              {/* Bricks */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 space-y-1">
                <span className="text-2xs font-bold text-slate-500 dark:text-slate-400">इँटा (Chimney Bricks):</span>
                <div className="text-lg font-black text-amber-600 dark:text-amber-400 font-mono">
                  {materials.bricksCount.toLocaleString('ne-NP')}
                </div>
                <p className="text-2xs text-slate-500">थान (१ नम्बर रातो इँटा)</p>
              </div>

              {/* Plinth Area Info */}
              <div className="p-3.5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-900/40 space-y-1">
                <span className="text-2xs font-bold text-indigo-700 dark:text-indigo-300">घरको आकार:</span>
                <div className="text-base font-extrabold text-indigo-900 dark:text-indigo-200 font-mono">
                  {areaPerFloor} × {floors}
                </div>
                <p className="text-2xs text-indigo-600 dark:text-indigo-400">कुल {totalBuiltUpArea} sq.ft</p>
              </div>
            </div>
          </div>

          {/* Stage-wise Payment Schedule Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <TrendingUp className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>चरणबद्ध भुक्तानी तथा निर्माण प्रगति तालिका (Phased Cash Flow):</span>
            </h4>

            <div className="space-y-3">
              {phases.map((p, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-900 dark:text-white">{p.phase}</span>
                    <span className="font-mono text-indigo-600 dark:text-indigo-400">
                      रु. {p.cost.toLocaleString('ne-NP')} ({p.percent}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-indigo-600 h-full rounded-full transition-all duration-300" 
                      style={{ width: `${p.percent * 2.5}%` }}
                    />
                  </div>
                  <p className="text-2xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {p.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications Included in Selected Grade */}
          <div className="bg-slate-50 dark:bg-slate-850 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
              {activeGrade.title} प्याकेजमा समावेश विशेषताहरू:
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {activeGrade.specs.map((spec, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
