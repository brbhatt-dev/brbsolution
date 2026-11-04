'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Car, 
  Bike, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  Clock, 
  HelpCircle, 
  AlertTriangle, 
  ShieldCheck, 
  FileText, 
  Sparkles, 
  ChevronRight, 
  Layers, 
  Smartphone, 
  Calculator, 
  Zap, 
  Info,
  Check,
  Copy
} from 'lucide-react';
import { 
  DRIVING_LICENSE_QUESTIONS, 
  TRIAL_RULES_CATEGORY_A, 
  VEHICLE_TAX_RATES,
  LicenseQuestion 
} from '@/data/drivingLicenseQuestions';

export default function DrivingLicenseExamHub() {
  const [activeTab, setActiveTab] = useState<'quiz' | 'trial' | 'print' | 'tax'>('quiz');

  // ----------------------------------------------------
  // 1. QUIZ STATE
  // ----------------------------------------------------
  const [quizVehicle, setQuizVehicle] = useState<'bike' | 'car'>('bike');
  const [currentQuestions, setCurrentQuestions] = useState<LicenseQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 mins
  const [timerActive, setTimerActive] = useState(false);

  // Initialize Quiz
  const startNewQuiz = () => {
    // Filter questions relevant to vehicle type
    const relevant = DRIVING_LICENSE_QUESTIONS.filter(
      q => q.vehicleType === 'both' || (quizVehicle === 'bike' ? q.vehicleType === 'bike' : q.vehicleType === 'car')
    );
    // Shuffle and pick 20
    const shuffled = [...relevant].sort(() => 0.5 - Math.random()).slice(0, 20);
    setCurrentQuestions(shuffled);
    setUserAnswers({});
    setIsSubmitted(false);
    setTimeLeft(1800);
    setTimerActive(true);
  };

  useEffect(() => {
    startNewQuiz();
  }, [quizVehicle]);

  // Timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && timeLeft > 0 && !isSubmitted) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsSubmitted(true);
            setTimerActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft, isSubmitted]);

  const handleSelectOption = (qId: number, optionIdx: number) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    setTimerActive(false);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  // Score calculation
  const totalQuestions = currentQuestions.length;
  const correctCount = currentQuestions.filter(q => userAnswers[q.id] === q.correctIndex).length;
  const isPassed = correctCount >= Math.ceil(totalQuestions * 0.6); // 60% pass mark (12/20)

  // ----------------------------------------------------
  // 2. TRIAL SIMULATOR STATE
  // ----------------------------------------------------
  const [trialMistakes, setTrialMistakes] = useState<Record<string, boolean>>({});

  const toggleMistake = (ruleKey: string) => {
    setTrialMistakes(prev => ({
      ...prev,
      [ruleKey]: !prev[ruleKey]
    }));
  };

  // Calculate Trial Score
  let trialScore = 100;
  let isDisqualified = false;
  let disqualificationReason = '';

  TRIAL_RULES_CATEGORY_A.forEach(section => {
    section.rules.forEach((r, idx) => {
      const key = `${section.id}-${idx}`;
      if (trialMistakes[key]) {
        trialScore -= r.penalty;
        if (r.isDisqualified) {
          isDisqualified = true;
          disqualificationReason = r.description;
        }
      }
    });
  });

  const trialPassed = trialScore >= 70 && !isDisqualified;

  // ----------------------------------------------------
  // 3. VEHICLE TAX CALCULATOR STATE
  // ----------------------------------------------------
  const [taxVehicleType, setTaxVehicleType] = useState<'motorcycle' | 'car_jeep' | 'electric_bike' | 'electric_car'>('motorcycle');
  const [selectedRangeIdx, setSelectedRangeIdx] = useState(0);

  const currentTaxOptions = VEHICLE_TAX_RATES[taxVehicleType] || [];
  const activeTaxObj = currentTaxOptions[selectedRangeIdx] || currentTaxOptions[0];

  // ----------------------------------------------------
  // 4. SMART CARD SMS HELPER STATE
  // ----------------------------------------------------
  const [appId, setAppId] = useState('');
  const [copiedSMS, setCopiedSMS] = useState(false);

  const smsBody = `LC ${appId.trim() || '12345678'}`;

  const handleCopySMS = () => {
    navigator.clipboard.writeText(smsBody);
    setCopiedSMS(true);
    setTimeout(() => setCopiedSMS(false), 2000);
  };

  // Format timer
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="space-y-8">
      
      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs gap-1">
          
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'quiz'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>१. लिखित परीक्षा क्विज (Exam Quiz)</span>
          </button>

          <button
            onClick={() => setActiveTab('trial')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'trial'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>२. ७० अंकको ट्रायल सिम्युलेटर</span>
          </button>

          <button
            onClick={() => setActiveTab('print')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'print'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>३. स्मार्ट लाइसेन्स प्रिन्ट चेक</span>
          </button>

          <button
            onClick={() => setActiveTab('tax')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'tax'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>४. सवारी कर तथा ब्लुबुक शुल्क</span>
          </button>

        </div>
      </div>

      {/* ==================================================== */}
      {/* TAB 1: WRITTEN EXAM QUIZ */}
      {/* ==================================================== */}
      {activeTab === 'quiz' && (
        <div className="space-y-6">
          
          {/* Quiz Header Bar */}
          <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <span className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                {quizVehicle === 'bike' ? <Bike className="w-6 h-6" /> : <Car className="w-6 h-6" />}
              </span>
              <div>
                <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  सवारी चालक अनुमतिपत्र लिखित परीक्षा (Mock Test)
                </h2>
                <p className="text-xs text-slate-500">
                  यातायात व्यवस्था विभागको ५०० आधिकारिक प्रश्नहरूबाट छानिएका २० वस्तुगत प्रश्न
                </p>
              </div>
            </div>

            {/* Vehicle Selector + Timer */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
                <button
                  onClick={() => setQuizVehicle('bike')}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                    quizVehicle === 'bike' ? 'bg-white dark:bg-slate-700 text-emerald-600 shadow-xs' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <Bike className="w-3.5 h-3.5" />
                  <span>वर्ग 'क' (A: बाइक)</span>
                </button>
                <button
                  onClick={() => setQuizVehicle('car')}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                    quizVehicle === 'car' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-xs' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>वर्ग 'ख' (B: कार)</span>
                </button>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300">
                <Clock className="w-4 h-4 text-emerald-600 animate-pulse" />
                <span>बाँकी समय: {formatTime(timeLeft)}</span>
              </div>
            </div>

          </div>

          {/* Result Alert if Submitted */}
          {isSubmitted && (
            <div className={`p-6 sm:p-8 rounded-3xl border shadow-md space-y-4 ${
              isPassed 
                ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 text-emerald-950 dark:text-emerald-200' 
                : 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 text-rose-950 dark:text-rose-200'
            }`}>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  {isPassed ? (
                    <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-2xl shadow-sm">
                      ✓
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-bold text-2xl shadow-sm">
                      ✕
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black">
                      {isPassed ? 'बधाई छ! तपाईं लिखित परीक्षामा उत्तीर्ण हुनुभयो।' : 'दुःखको कुरा! तपाईं अनुत्तीर्ण हुनुभयो।'}
                    </h3>
                    <p className="text-xs sm:text-sm opacity-90">
                      पास हुनका लागि कम्तीमा १२ प्रश्न (६०%) मिलाउनुपर्नेछ।
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-3xl font-black">{correctCount} / {totalQuestions}</span>
                  <span className="block text-xs font-bold uppercase tracking-wider opacity-80">
                    अंक प्राप्त ({((correctCount / totalQuestions) * 100).toFixed(0)}%)
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={startNewQuiz}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-transform active:scale-95"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>नयाँ २० प्रश्नहरूको सेट सुरु गर्नुहोस्</span>
                </button>
              </div>
            </div>
          )}

          {/* Question List */}
          <div className="space-y-4">
            {currentQuestions.map((q, idx) => {
              const selectedOpt = userAnswers[q.id];
              const isAnswered = selectedOpt !== undefined;
              const isCorrect = selectedOpt === q.correctIndex;

              return (
                <div 
                  key={q.id}
                  className={`p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border transition-all shadow-xs space-y-4 ${
                    isSubmitted 
                      ? isCorrect 
                        ? 'border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/20' 
                        : 'border-rose-300 dark:border-rose-800/80 bg-rose-50/20'
                      : 'border-slate-200 dark:border-slate-800'
                  }`}
                >
                  
                  {/* Question Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
                        {q.question}
                      </h4>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 text-2xs font-bold shrink-0">
                      {q.categoryNp}
                    </span>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {q.options.map((opt, optIdx) => {
                      const isOptionSelected = selectedOpt === optIdx;
                      const isOptionCorrect = optIdx === q.correctIndex;

                      let btnStyle = 'border-slate-200 dark:border-slate-800 hover:border-emerald-400 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300';
                      
                      if (isSubmitted) {
                        if (isOptionCorrect) {
                          btnStyle = 'border-emerald-500 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200 font-bold';
                        } else if (isOptionSelected && !isOptionCorrect) {
                          btnStyle = 'border-rose-500 bg-rose-100 dark:bg-rose-950/80 text-rose-900 dark:text-rose-200';
                        } else {
                          btnStyle = 'border-slate-200 dark:border-slate-800 opacity-50';
                        }
                      } else if (isOptionSelected) {
                        btnStyle = 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-bold ring-2 ring-emerald-500/20';
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={isSubmitted}
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`p-3 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full border border-current text-2xs flex items-center justify-center font-bold shrink-0">
                              {['क', 'ख', 'ग', 'घ'][optIdx]}
                            </span>
                            <span>{opt}</span>
                          </div>
                          
                          {isSubmitted && isOptionCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          )}
                          {isSubmitted && isOptionSelected && !isOptionCorrect && (
                            <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation after submit */}
                  {isSubmitted && q.explanation && (
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <p><strong>आधिकारिक व्याख्या:</strong> {q.explanation}</p>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* Submit Action Bar */}
          {!isSubmitted && (
            <div className="sticky bottom-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center justify-between gap-4">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                हल गरिएका प्रश्नहरू: <strong className="text-emerald-600">{Object.keys(userAnswers).length}</strong> / {totalQuestions}
              </span>

              <button
                onClick={handleSubmitQuiz}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-transform active:scale-95"
              >
                <span>परीक्षा बुझाउनुहोस् (Submit Exam)</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 2: 70-POINT TRIAL MARKS SIMULATOR */}
      {/* ==================================================== */}
      {activeTab === 'trial' && (
        <div className="space-y-6">
          
          {/* Trial Scoreboard Hero */}
          <div className={`p-6 sm:p-8 rounded-3xl border shadow-sm transition-all ${
            isDisqualified
              ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 text-rose-950 dark:text-rose-200'
              : trialPassed
                ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 text-emerald-950 dark:text-emerald-200'
                : 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 text-amber-950 dark:text-amber-200'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full bg-white/60 dark:bg-black/40 text-xs font-bold inline-block">
                  नयाँ ७० अंकको ट्रायल नियम (70-Point Trial Criteria)
                </span>
                <h3 className="text-2xl sm:text-3xl font-black">
                  {isDisqualified
                    ? '🔴 सिधै फेल (Disqualified)!'
                    : trialPassed
                      ? '🟢 ट्रायल उत्तीर्ण (TRIAL PASSED)!'
                      : '🟡 अंक नपुगेर फेल (Score Below 70)'}
                </h3>
                <p className="text-xs sm:text-sm opacity-90 max-w-xl">
                  {isDisqualified
                    ? `तपाईंले गम्भीर गल्ती गर्नुभयो: "${disqualificationReason}"। यसमा अंक नकाटी सिधै फेल गरिन्छ।`
                    : '१०० पूर्णाङ्कमा ७० वा सोभन्दा बढी अंक ल्याएमा लाइसेन्स ट्रायल पास भइन्छ। तलका सम्भावित गल्तीहरू छान्नुहोस्:'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-current/20 text-center shrink-0">
                <span className="block text-3xs uppercase font-bold text-slate-500">तपाईंको लाइभ स्कोर</span>
                <span className={`text-4xl font-black ${
                  trialPassed && !isDisqualified ? 'text-emerald-600' : 'text-rose-600'
                }`}>
                  {trialScore} <span className="text-base font-medium">/ १००</span>
                </span>
                <span className="block text-2xs font-bold pt-1">
                  न्यूनतम आवश्यक: ७० अंक
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Checklist by Test Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TRIAL_RULES_CATEGORY_A.map(sec => (
              <div 
                key={sec.id}
                className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      {sec.nameNp}
                    </h4>
                    <span className="text-2xs text-slate-500">{sec.nameEn}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 text-xs font-bold">
                    भार: {sec.totalMarks} अंक
                  </span>
                </div>

                <div className="space-y-2.5">
                  {sec.rules.map((rule, rIdx) => {
                    const key = `${sec.id}-${rIdx}`;
                    const isChecked = trialMistakes[key] || false;

                    return (
                      <button
                        key={rIdx}
                        onClick={() => toggleMistake(key)}
                        className={`w-full p-3 rounded-2xl border text-left text-xs transition-all flex items-start justify-between gap-3 ${
                          isChecked 
                            ? rule.isDisqualified
                              ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 font-bold'
                              : 'border-amber-500 bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 font-bold'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 bg-slate-50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          <span className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                            isChecked ? 'bg-current text-white border-transparent' : 'border-slate-400'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 text-white" />}
                          </span>
                          <span>{rule.description}</span>
                        </div>

                        <span className={`text-2xs font-bold px-2 py-0.5 rounded-md shrink-0 ${
                          rule.isDisqualified 
                            ? 'bg-rose-200 text-rose-900 dark:bg-rose-900 dark:text-rose-200' 
                            : 'bg-amber-200 text-amber-900 dark:bg-amber-900 dark:text-amber-200'
                        }`}>
                          {rule.isDisqualified ? 'सिधै फेल' : `-${rule.penalty} अंक`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-center">
            <button
              onClick={() => setTrialMistakes({})}
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>सिम्युलेटर रिसेट गर्नुहोस् (१०० अंकबाट फेरि सुरु)</span>
            </button>
          </div>

        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 3: SMART LICENSE PRINT STATUS CHECKER */}
      {/* ==================================================== */}
      {activeTab === 'print' && (
        <div className="space-y-6 max-w-3xl mx-auto">
          
          {/* SMS Checker Tool */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 text-xs font-bold border border-blue-200 dark:border-blue-800">
                <Smartphone className="w-3.5 h-3.5" />
                <span>१-सेकेन्ड SMS स्थिति जाँच (Quick SMS Check)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                स्मार्ट लाइसेन्स कार्ड छापियो कि छैन? तुरुन्त हेर्नुहोस्
              </h3>
              <p className="text-xs text-slate-500">
                यातायात व्यवस्था विभागको ३३००१ नम्बरमा एसएमएस गरेर आफ्नो कार्ड प्रिन्ट भए/नभएको थाहा पाउनुहोस्:
              </p>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                आफ्नो Application ID वा Applicant No. राख्नुहोस्:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="उदा: 12345678"
                  value={appId}
                  onChange={(e) => setAppId(e.target.value)}
                  className="flex-grow p-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-sm font-bold"
                />
                <button
                  onClick={handleCopySMS}
                  className="px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 shrink-0 transition-colors"
                >
                  {copiedSMS ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedSMS ? 'कपी भयो!' : 'SMS कपी'}</span>
                </button>
              </div>
            </div>

            {/* Ready Mobile Link */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs">
                <p className="font-bold text-slate-800 dark:text-slate-200">पठाउनुपर्ने सन्देश:</p>
                <p className="font-mono text-emerald-600 font-bold text-sm">
                  {smsBody} ➔ ३३००१ (33001) मा
                </p>
              </div>

              <a
                href={`sms:33001?body=${encodeURIComponent(smsBody)}`}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-transform active:scale-95 shrink-0"
              >
                <Smartphone className="w-4 h-4" />
                <span>मोबाइलबाट सिधै SMS पठाउनुहोस्</span>
              </a>
            </div>
          </div>

          {/* Official Online Portals & Legal Alternative */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>नागरिक एप (Nagarik App) डिजिटल लाइसेन्स</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                स्मार्ट कार्ड हातमा नआउँदा पनि नागरिक एपमा देखिने ई-लाइसेन्स (QR Code सहित) लाई नेपाल सरकार र ट्राफिक प्रहरीले <strong>पूर्ण कानुनी मान्यता</strong> दिएको छ। चेकिङमा यो देखाएमा जरिवाना हुँदैन।
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>यातायात विभाग आधिकारिक अनलाइन पोर्टल</span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                  DOTM को सर्भर चलेको बेला <code className="text-emerald-600 font-bold">applydl.dotm.gov.np</code> मा गएर पनि आफ्नो कार्ड प्रिन्ट स्थिति हेर्न सकिन्छ।
                </p>
              </div>

              <a
                href="https://applydl.dotm.gov.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-600 hover:underline inline-flex items-center gap-1"
              >
                <span>DOTM पोर्टल खोल्नुहोस्</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 4: VEHICLE TAX & BLUEBOOK RENEWAL CALCULATOR */}
      {/* ==================================================== */}
      {activeTab === 'tax' && (
        <div className="space-y-6 max-w-4xl mx-auto">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            
            <div className="space-y-1 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="text-2xs font-bold uppercase tracking-wider text-emerald-600">
                आर्थिक ऐन २०८१/८२ (बागमती प्रदेश दररेट)
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                सवारी साधन वार्षिक कर तथा ब्लुबुक नवीकरण क्यालकुलेटर
              </h3>
              <p className="text-xs text-slate-500">
                आफ्नो सवारीको इन्जिन क्षमता (CC वा kW) चयन गर्नुहोस् र लाग्ने वार्षिक कर तथा तेस्रो पक्ष बिमा हिसाब गर्नुहोस्:
              </p>
            </div>

            {/* Vehicle Category Select */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-bold">
              {[
                { id: 'motorcycle', name: 'मोटरसाइकल / स्कुटर', icon: Bike },
                { id: 'car_jeep', name: 'कार / जिप / भ्यान', icon: Car },
                { id: 'electric_bike', name: 'विद्युतीय बाइक/स्कुटर', icon: Zap },
                { id: 'electric_car', name: 'विद्युतीय कार (EV)', icon: Zap },
              ].map(cat => {
                const Icon = cat.icon;
                const isSelected = taxVehicleType === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setTaxVehicleType(cat.id as any);
                      setSelectedRangeIdx(0);
                    }}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 shadow-xs'
                        : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Engine Capacity (CC/kW) selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                इन्जिन क्षमता (Engine Displacement / Power):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {currentTaxOptions.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedRangeIdx(i)}
                    className={`p-3 rounded-xl border text-left text-xs font-bold transition-all flex items-center justify-between ${
                      selectedRangeIdx === i
                        ? 'border-emerald-600 bg-emerald-600 text-white shadow-xs'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span>{opt.range}</span>
                    <span>रु. {opt.annualTax.toLocaleString('ne-NP')}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Output Calculation Breakdown */}
            {activeTaxObj && (
              <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 font-sans">
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                  वार्षिक भुक्तानी गर्नुपर्ने कुल अनुमानित रकम:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <span className="text-slate-500 block text-2xs">सवारी साधन वार्षिक कर:</span>
                    <span className="text-base font-black text-slate-900 dark:text-white">
                      रु. {activeTaxObj.annualTax.toLocaleString('ne-NP')} /-
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                    <span className="text-slate-500 block text-2xs">तेस्रो पक्ष बिमा (Third Party):</span>
                    <span className="text-base font-black text-slate-900 dark:text-white">
                      रु. {activeTaxObj.insurance.toLocaleString('ne-NP')} /-
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-emerald-600 text-white">
                    <span className="text-emerald-100 block text-2xs">जम्मा एकमुष्ट भुक्तानी:</span>
                    <span className="text-base font-black">
                      रु. {(activeTaxObj.annualTax + activeTaxObj.insurance).toLocaleString('ne-NP')} /-
                    </span>
                  </div>
                </div>

                <p className="text-3xs text-slate-400 pt-1">
                  * नोट: आर्थिक वर्ष समाप्त भएको ३ महिनाभित्र नवीकरण नगरेमा पहिलो ३० दिन ५%, त्यसपछिको ४५ दिन १०%, र सोभन्दा बढी ढिला भएमा २०% सम्म थप जरिवाना लाग्नेछ।
                </p>
              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
}
