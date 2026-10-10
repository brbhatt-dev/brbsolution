'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Trophy, 
  Sparkles, 
  Ruler, 
  CheckCircle2, 
  HelpCircle, 
  RotateCcw, 
  ArrowRight, 
  Medal, 
  Share2, 
  Download, 
  Printer, 
  Flame,
  Award,
  ChevronRight,
  Calculator,
  Compass
} from 'lucide-react';

interface GameLevel {
  levelNum: number;
  title: string;
  sub: string;
  description: string;
  shapeType: 'rect' | 'quad' | 'subdivide';
  measurements: {
    label: string;
    value: string;
  }[];
  formulaHint: string;
  correctSqft: number;
  toleranceSqft: number; // allowed +/- error margin
  correctAanaText: string;
  explanation: string;
}

const GAME_LEVELS: GameLevel[] = [
  {
    levelNum: 1,
    title: 'लेभल १: सामान्य समकोण घडेरी नाप (Level 1: Rectangular Plot)',
    sub: 'सहरी क्षेत्रको सीधा ४ कुने घडेरीको क्षेत्रफल र आना निकाल्नुहोस्',
    description: 'फिल्डमा नाप्दा लम्बाइ ५० फिट र चौडाइ ३० फिट भएको घडेरी फेला पर्यो। यसको कुल वर्गफिट र आना हिसाब गर्नुहोस्।',
    shapeType: 'rect',
    measurements: [
      { label: 'लम्बाइ (Length)', value: '५० फिट (50 ft)' },
      { label: 'चौडाइ (Width)', value: '३० फिट (30 ft)' },
      { label: 'दिशा', value: 'पूर्वमुखी (East Facing)' }
    ],
    formulaHint: 'सूत्र: क्षेत्रफल = लम्बाइ × चौडाइ (Area = L × W) | १ आना = ३४२.२५ वर्गफिट',
    correctSqft: 1500,
    toleranceSqft: 20,
    correctAanaText: '४ आना १ पैसा २ दाम (४.३८ आना)',
    explanation: '५० × ३० = १,५०० वर्गफिट। आनामा रूपान्तरण गर्दा १,५०० ÷ ३४२.२५ = ४.३८ आना (अर्थात् ४ आना १ पैसा २ दाम) हुन्छ।'
  },
  {
    levelNum: 2,
    title: 'लेभल २: बाङ्गो-टिङ्गो चारपाटे जग्गा र हेरन सूत्र (Level 2: Irregular Quadrilateral)',
    sub: 'नेपालको पहाडी भूभागमा पाइने विषमबाहु जग्गाको २ त्रिभुज विधि',
    description: 'चारै भुजा फरक भएको जग्गामा भुजा AB=४० फिट, BC=५० फिट, CD=४० फिट, DA=५० फिट र विकर्ण AC=६० फिट छ। विकर्णले बनेका दुवै त्रिभुजको क्षेत्रफल जोडेर कुल जग्गा निकाल्नुहोस्।',
    shapeType: 'quad',
    measurements: [
      { label: 'भुजा AB', value: '४० फिट' },
      { label: 'भुजा BC', value: '५० फिट' },
      { label: 'भुजा CD', value: '४० फिट' },
      { label: 'भुजा DA', value: '५० फिट' },
      { label: 'विकर्ण AC', value: '६० फिट' }
    ],
    formulaHint: 'हेरन सूत्र: s = (a+b+c)/2, क्षेत्रफल = √[s(s-a)(s-b)(s-c)]। कुल = त्रिभुज १ + त्रिभुज २',
    correctSqft: 1984,
    toleranceSqft: 40,
    correctAanaText: '५ आना ३ पैसा २ दाम (५.८ आना)',
    explanation: 'हेरन सूत्रबाट त्रिभुज ABC को क्षेत्रफल ९९२.१५ वर्गफिट र त्रिभुज CDA को क्षेत्रफल ९९२.१५ वर्गफिट आउँछ। दुवै जोड्दा कुल क्षेत्रफल करिब १,९८४ वर्गफिट (करिब ५.८ आना) हुन्छ।'
  },
  {
    levelNum: 3,
    title: 'लेभल ३: कित्ताकाट तथा बाटो मापदण्ड मास्टर (Level 3: Cadastral Subdivision)',
    sub: 'भू-उपयोग नियमावली २०७९ अनुसार नयाँ कित्ता छुट्याउने अमिन परीक्षा',
    description: '१ रोपनी (५,४७६ वर्गफिट) को मूल कित्ताबाट घर बनाउनका लागि न्यूनतम मापदण्ड अनुसार १३० वर्गमिटर (१,३९९.३ वर्गफिट) को १ कित्ता छुट्याएर बिक्री गरियो भने मूल कित्तामा अब कति वर्गफिट जग्गा बाँकी रहन्छ?',
    shapeType: 'subdivide',
    measurements: [
      { label: 'साबिक मूल कित्ता', value: '१ रोपनी = ५,४७६ वर्गफिट' },
      { label: 'कित्ताकाट भएको भाग', value: '१३० वर्गमिटर = १,३९९.३ वर्गफिट' },
      { label: 'बाटोको न्यूनतम चौडाइ', value: '१३ फिट (स्वीकृत)' }
    ],
    formulaHint: 'सूत्र: बाँकी जग्गा = कुल ५,४७६ वर्गफिट - १३० वर्गमिटर (१,३९९.३ वर्गफिट)',
    correctSqft: 4077,
    toleranceSqft: 25,
    correctAanaText: '११ आना ३ पैसा ३ दाम (११.९१ आना)',
    explanation: '५,४७६ - १,३९९.३ = ४,०७६.७ वर्गफिट (करिब ४,०७७ वर्गफिट)। आनामा निकाल्दा ४,०७७ ÷ ३४२.२५ = ११.९१ आना बाँकी रहन्छ।'
  }
];

export default function VirtualAminGame() {
  const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
  const [userSqftInput, setUserSqftInput] = useState('');
  const [feedback, setFeedback] = useState<{ isSuccess: boolean; msg: string } | null>(null);
  const [score, setScore] = useState(0);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [playerName, setPlayerName] = useState('अमिन परीक्षार्थी');
  const [isGameOver, setIsGameOver] = useState(false);

  const currentLevel = GAME_LEVELS[currentLevelIdx];

  const handleSubmitAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(userSqftInput.trim());
    if (isNaN(val)) {
      setFeedback({ isSuccess: false, msg: 'कृपया शुद्ध अङ्कमा वर्गफिट प्रविष्ट गर्नुहोस्!' });
      return;
    }

    const diff = Math.abs(val - currentLevel.correctSqft);
    if (diff <= currentLevel.toleranceSqft) {
      // Correct!
      const levelPoints = 100 - (showHint ? 20 : 0);
      setScore((prev) => prev + levelPoints);
      setCompletedLevels((prev) => Array.from(new Set([...prev, currentLevel.levelNum])));
      setFeedback({
        isSuccess: true,
        msg: `🎉 उत्कृष्ट! १००% शुद्ध हिसाब! तपाईंले ${levelPoints} अङ्क प्राप्त गर्नुभयो। (${currentLevel.explanation})`
      });
    } else {
      setFeedback({
        isSuccess: false,
        msg: `❌ नाप अलि मिलेन (तपाईंको उत्तर: ${val} वर्गफिट)। वास्तविक हिसाब करिब ${currentLevel.correctSqft} वर्गफिट हो। कृपया सूत्र हेरेर पुनः प्रयास गर्नुहोस्!`
      });
    }
  };

  const handleNextLevel = () => {
    setFeedback(null);
    setUserSqftInput('');
    setShowHint(false);
    if (currentLevelIdx < GAME_LEVELS.length - 1) {
      setCurrentLevelIdx((prev) => prev + 1);
    } else {
      setIsGameOver(true);
    }
  };

  const handleRestartGame = () => {
    setCurrentLevelIdx(0);
    setUserSqftInput('');
    setFeedback(null);
    setScore(0);
    setCompletedLevels([]);
    setShowHint(false);
    setIsGameOver(false);
  };

  return (
    <div className="space-y-6 sm:space-y-8 notranslate" translate="no">
      
      {/* Top Game Hero Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-950 text-white border border-emerald-700/40 shadow-xl relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>नेपाल नापी सिमुलेटर खेल</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              🎮 भर्चुअल अमिन फिल्ड नापी सिमुलेटर
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              वास्तविक नापी फित्ता, हेरन सूत्र र कित्ताकाट नियम प्रयोग गरी जग्गाको शुद्ध क्षेत्रफल निकाल्नुहोस् र <strong>"प्रमाणित डिजिटल अमिन"</strong> उपाधि जित्नुहोस्!
            </p>
          </div>

          {/* Player Score & Status Board */}
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-around gap-6 shrink-0 text-center">
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-200 block">कुल स्कोर</span>
              <span className="text-2xl sm:text-3xl font-black text-amber-300 flex items-center justify-center gap-1">
                <Flame className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span>{score}</span>
              </span>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-200 block">प्रगति (Progress)</span>
              <span className="text-2xl sm:text-3xl font-black text-white">
                {completedLevels.length}/३
              </span>
            </div>
          </div>
        </div>
      </div>

      {!isGameOver ? (
        /* ACTIVE LEVEL PLAYING BOARD */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Side: Interactive Cadastral Canvas / Plot Diagram */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-xs space-y-5">
            
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                  चुनौती {currentLevel.levelNum} / ३
                </span>
                <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">
                  {currentLevel.title}
                </h2>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                +१०० अङ्क
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentLevel.description}
            </p>

            {/* Simulated Land Plot SVG Display */}
            <div className="w-full h-64 sm:h-72 rounded-2xl bg-slate-950 border border-slate-800 p-4 flex items-center justify-center relative overflow-hidden shadow-inner">
              {/* Grid lines */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none" 
                style={{ backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)', backgroundSize: '16px 16px' }}
              />

              {currentLevel.shapeType === 'rect' && (
                <svg className="w-full h-full max-w-sm" viewBox="0 0 300 200">
                  <rect x="50" y="30" width="200" height="120" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="3" rx="4" />
                  {/* Dimensions Labels */}
                  <text x="150" y="20" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="middle">५० फिट (लम्बाइ)</text>
                  <text x="150" y="170" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="middle">५० फिट</text>
                  <text x="35" y="95" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="end">३० फिट</text>
                  <text x="265" y="95" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="start">३० फिट (चौडाइ)</text>
                  <circle cx="50" cy="30" r="4" fill="#fbbf24" />
                  <circle cx="250" cy="30" r="4" fill="#fbbf24" />
                  <circle cx="250" cy="150" r="4" fill="#fbbf24" />
                  <circle cx="50" cy="150" r="4" fill="#fbbf24" />
                </svg>
              )}

              {currentLevel.shapeType === 'quad' && (
                <svg className="w-full h-full max-w-sm" viewBox="0 0 300 220">
                  {/* Irregular Quad Polygon */}
                  <polygon points="50,170 240,170 210,40 70,40" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="3" />
                  {/* Diagonal Line AC */}
                  <line x1="50" y1="170" x2="210" y2="40" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="5,5" />
                  
                  {/* Node Corner Labels */}
                  <text x="35" y="185" fill="#fbbf24" fontSize="13" fontWeight="bold">A</text>
                  <text x="250" y="185" fill="#fbbf24" fontSize="13" fontWeight="bold">B</text>
                  <text x="220" y="30" fill="#fbbf24" fontSize="13" fontWeight="bold">C</text>
                  <text x="55" y="30" fill="#fbbf24" fontSize="13" fontWeight="bold">D</text>

                  {/* Diagonal Tag */}
                  <text x="135" y="115" fill="#f59e0b" fontSize="12" fontWeight="bold" transform="rotate(-30 135,115)">विकर्ण AC = ६० फिट</text>
                  <text x="145" y="190" fill="#34d399" fontSize="11" fontWeight="bold">AB = ४० फिट</text>
                  <text x="140" y="32" fill="#34d399" fontSize="11" fontWeight="bold">CD = ४० फिट</text>
                  <text x="40" y="105" fill="#38bdf8" fontSize="11" fontWeight="bold">DA = ५० फिट</text>
                  <text x="235" y="105" fill="#38bdf8" fontSize="11" fontWeight="bold">BC = ५० फिट</text>
                </svg>
              )}

              {currentLevel.shapeType === 'subdivide' && (
                <svg className="w-full h-full max-w-sm" viewBox="0 0 300 200">
                  {/* Main 1 Ropani Block */}
                  <rect x="40" y="30" width="220" height="130" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="3" rx="4" />
                  {/* Subdivided 130 sqm plot */}
                  <rect x="40" y="30" width="80" height="130" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4,4" />
                  
                  <text x="80" y="95" fill="#fda4af" fontSize="11" fontWeight="bold" textAnchor="middle">कित्ताकाट</text>
                  <text x="80" y="115" fill="#fda4af" fontSize="10" textAnchor="middle">१३० वर्गमिटर</text>

                  <text x="180" y="95" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="middle">बाँकी मूल कित्ता ?</text>
                  <text x="180" y="115" fill="#a7f3d0" fontSize="11" textAnchor="middle">(हिसाब निकाल्नुहोस्)</text>
                  
                  <text x="150" y="185" fill="#94a3b8" fontSize="11" textAnchor="middle">कुल साबिक जग्गा: १ रोपनी (५,४७६ वर्गफिट)</text>
                </svg>
              )}
            </div>

            {/* Field Measurement Data Table */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {currentLevel.measurements.map((m, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block">{m.label}</span>
                  <span className="font-bold text-slate-900 dark:text-white mt-0.5 block">{m.value}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Side: Answer Input Form, Hints & Actions */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-xs space-y-5">
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                अमिन नाप फारम (Answer Sheet)
              </span>
              <button
                type="button"
                onClick={() => setShowHint(!showHint)}
                className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{showHint ? 'सूत्र लुकाउनुहोस्' : 'सूत्र संकेत (Hint)'}</span>
              </button>
            </div>

            {/* Formula Hint Box */}
            {showHint && (
              <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs space-y-1 animate-in fade-in">
                <span className="font-extrabold block">💡 नापी सूत्र संकेत (-२० अङ्क):</span>
                <p>{currentLevel.formulaHint}</p>
              </div>
            )}

            {/* Answer Submission Form */}
            <form onSubmit={handleSubmitAnswer} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  तपाईंले निकालेको कुल क्षेत्रफल (वर्गफिटमा):
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="any"
                    value={userSqftInput}
                    onChange={(e) => setUserSqftInput(e.target.value)}
                    placeholder="उदा: १५०० वा १९८४"
                    className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-lg focus:outline-emerald-500"
                    required
                  />
                  <span className="absolute right-4 top-3.5 text-xs text-slate-400 font-bold">
                    वर्गफिट (sq.ft)
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <Ruler className="w-4 h-4" />
                <span>उत्तर जाँच्नुहोस् (Submit Answer)</span>
              </button>
            </form>

            {/* Live Feedback Box */}
            {feedback && (
              <div
                className={`p-4 rounded-2xl border text-xs sm:text-sm space-y-3 animate-in zoom-in-95 ${
                  feedback.isSuccess
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200'
                    : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-700 text-rose-900 dark:text-rose-200'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  {feedback.isSuccess ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <span className="text-base shrink-0">⚠️</span>
                  )}
                  <p className="leading-relaxed font-semibold">{feedback.msg}</p>
                </div>

                {feedback.isSuccess && (
                  <button
                    type="button"
                    onClick={handleNextLevel}
                    className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 text-white font-black text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm"
                  >
                    <span>{currentLevelIdx === GAME_LEVELS.length - 1 ? 'प्रमाणपत्र हेर्नुहोस् 🏆' : 'अर्को लेभल जानुहोस्'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}

            {/* Quick Helper Conversions */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-bold text-slate-700 dark:text-slate-300 block">
                📐 द्रुत स्मरण इकाइहरू:
              </span>
              <p>• १ रोपनी = १६ आना = ५,४७६ वर्गफिट</p>
              <p>• १ आना = ३४२.२५ वर्गफिट (३१.८० वर्गमिटर)</p>
              <p>• १ वर्गमिटर = १०.७६३९ वर्गफिट</p>
            </div>

          </div>

        </div>
      ) : (
        /* 🏆 GAME COMPLETED: OFFICIAL DIGITAL AMIN CERTIFICATE */
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xl space-y-8 animate-in zoom-in-95">
          
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 border border-amber-400/30 mx-auto flex items-center justify-center shadow-lg">
              <Trophy className="w-8 h-8 animate-bounce" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              हार्दिक बधाई छ! नापी परीक्षा उत्तीर्ण 🎉
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              तपाईंले सम्पूर्ण ३ वटा लेभल सफलतापूर्वक पूरा गर्नुभएको छ। तपाईंलाई <strong>"प्रमाणित डिजिटल अमिन"</strong> को उपाधि प्रदान गरिएको छ!
            </p>
          </div>

          {/* Player Name Input Field for Certificate */}
          <div className="max-w-xs mx-auto text-center space-y-1.5 no-print">
            <label className="text-xs font-bold text-slate-600 dark:text-slate-400">
              प्रमाणपत्रमा तपाईंको नाम:
            </label>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="आफ्नो पूरा नाम लेख्नुहोस्"
              className="w-full px-4 py-2 text-center rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-black text-sm"
            />
          </div>

          {/* 📜 OFFICIAL PRINTABLE CERTIFICATE CARD */}
          <div 
            id="printable-certificate"
            className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950 border-4 border-amber-500/40 shadow-2xl relative text-center space-y-6"
          >
            
            {/* Top Seal & Flag */}
            <div className="flex items-center justify-between pb-4 border-b border-amber-300/60 dark:border-amber-700/60">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Land Solution" className="w-8 h-8 object-contain" />
                <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200">
                  Land Solution • BR Bhatta
                </span>
              </div>
              <div className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-300">
                दर्ता नं: LS-AMIN-2083
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-amber-700 dark:text-amber-400 block">
                CERTIFICATE OF CADASTRAL EXCELLENCE
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                प्रमाणित डिजिटल अमिन (Certified Digital Amin)
              </h3>
            </div>

            <div className="space-y-1.5 py-2">
              <p className="text-xs text-slate-500 dark:text-slate-400">यो प्रमाणपत्र प्रमाणित गर्दछ कि</p>
              <h4 className="text-2xl sm:text-3xl font-black text-emerald-700 dark:text-emerald-400 tracking-tight">
                {playerName || 'अमिन परीक्षार्थी'}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed pt-1">
                ले नेपालको जग्गा नापजाँच प्रणाली, हेरन सूत्रबाट विषमबाहु क्षेत्रफल, र कित्ताकाट मापदण्डका सम्पूर्ण प्राविधिक चरणहरू <strong>{score} अङ्क</strong> सहित सफलतापूर्वक सम्पन्न गर्नुभएको छ।
              </p>
            </div>

            {/* Bottom Signature & Stamp */}
            <div className="pt-6 border-t border-amber-300/60 dark:border-amber-700/60 flex items-center justify-between text-xs text-slate-500">
              <div className="text-left">
                <span className="block font-bold text-slate-800 dark:text-slate-200">जारी मिति: २०८३ साल</span>
                <span className="text-[10px]">प्रमाणित डिजिटल सर्भेक्षण</span>
              </div>
              <div className="text-right">
                <span className="block font-bold text-emerald-700 dark:text-emerald-400">BR Bhatta</span>
                <span className="text-[10px]">Land Solution Nepal</span>
              </div>
            </div>

          </div>

          {/* Action Buttons: Share, Print & Restart */}
          <div className="flex flex-wrap items-center justify-center gap-3 no-print">
            <button
              type="button"
              onClick={() => {
                const shareText = `🎉 मैले BR Bhatta नापी सिमुलेटरमा ${score}/१०० अङ्क ल्याएर "प्रमाणित डिजिटल अमिन" प्रमाणपत्र प्राप्त गरेँ! तपाईं पनि जग्गा नाप्ने परीक्षा दिएर प्रमाणपत्र जित्नुहोस्:`;
                const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://www.brbhatta.com/tools/virtual-amin-game';

                if (typeof navigator !== 'undefined' && navigator.share) {
                  navigator.share({
                    title: 'प्रमाणित डिजिटल अमिन प्रमाणपत्र - BR Bhatta',
                    text: shareText,
                    url: shareUrl,
                  }).catch(() => {});
                } else {
                  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
                  window.open(whatsappUrl, '_blank');
                }
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>ह्वाट्सएप / साथीलाई सेयर गर्नुहोस्</span>
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 font-bold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>प्रमाणपत्र प्रिन्ट (Print / PDF)</span>
            </button>

            <button
              type="button"
              onClick={handleRestartGame}
              className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>फेरि सुरुबाट खेल्नुहोस्</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
