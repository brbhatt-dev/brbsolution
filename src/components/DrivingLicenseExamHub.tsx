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
  Copy,
  BookOpen,
  Filter
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
  // 1. QUIZ STATE & MULTI-SET / TOPIC-WISE
  // ----------------------------------------------------
  const [quizVehicle, setQuizVehicle] = useState<'bike' | 'car'>('bike');
  const [quizMode, setQuizMode] = useState<'exam' | 'practice'>('exam');
  const [selectedSet, setSelectedSet] = useState<'random' | 'set1' | 'set2' | 'set3'>('random');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'rules' | 'signs' | 'mechanical' | 'safety' | 'pollution'>('all');
  
  const [currentQuestions, setCurrentQuestions] = useState<LicenseQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 mins
  const [timerActive, setTimerActive] = useState(false);

  // Initialize or re-load questions
  const loadQuestions = () => {
    let relevant = DRIVING_LICENSE_QUESTIONS.filter(
      q => q.vehicleType === 'both' || (quizVehicle === 'bike' ? q.vehicleType === 'bike' : q.vehicleType === 'car')
    );

    if (quizMode === 'practice') {
      if (selectedCategory !== 'all') {
        relevant = relevant.filter(q => q.category === selectedCategory);
      }
      setCurrentQuestions(relevant);
      setUserAnswers({});
      setIsSubmitted(false);
      setTimerActive(false);
    } else {
      // Exam Mode
      let questionsToUse: LicenseQuestion[] = [];
      if (selectedSet === 'set1') {
        questionsToUse = relevant.slice(0, 20);
      } else if (selectedSet === 'set2') {
        questionsToUse = relevant.slice(20, 40);
        if (questionsToUse.length < 20) questionsToUse = relevant.slice(0, 20);
      } else if (selectedSet === 'set3') {
        questionsToUse = relevant.slice(40, 60);
        if (questionsToUse.length < 20) questionsToUse = relevant.slice(20, 40);
      } else {
        // Random 20
        questionsToUse = [...relevant].sort(() => 0.5 - Math.random()).slice(0, 20);
      }
      setCurrentQuestions(questionsToUse);
      setUserAnswers({});
      setIsSubmitted(false);
      setTimeLeft(1800);
      setTimerActive(true);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, [quizVehicle, quizMode, selectedSet, selectedCategory]);

  // Timer countdown for Exam Mode
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (quizMode === 'exam' && timerActive && timeLeft > 0 && !isSubmitted) {
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
  }, [quizMode, timerActive, timeLeft, isSubmitted]);

  const handleSelectOption = (qId: number, optionIdx: number) => {
    if (quizMode === 'exam' && isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const handleResetQuestion = (qId: number) => {
    setUserAnswers(prev => {
      const updated = { ...prev };
      delete updated[qId];
      return updated;
    });
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
          
          {/* Quiz Top Control Bar */}
          <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <span className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                  {quizVehicle === 'bike' ? <Bike className="w-6 h-6" /> : <Car className="w-6 h-6" />}
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                    सवारी चालक अनुमतिपत्र अनलाइन तयारी हब
                  </h2>
                  <p className="text-xs text-slate-500">
                    यातायात व्यवस्था विभागको ५०० आधिकारिक प्रश्नोत्तर संग्रह
                  </p>
                </div>
              </div>

              {/* Vehicle Type Toggle */}
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold self-start md:self-auto">
                <button
                  onClick={() => setQuizVehicle('bike')}
                  className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                    quizVehicle === 'bike' ? 'bg-white dark:bg-slate-700 text-emerald-600 shadow-xs' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <Bike className="w-3.5 h-3.5" />
                  <span>वर्ग 'क' (A: बाइक/स्कुटर)</span>
                </button>
                <button
                  onClick={() => setQuizVehicle('car')}
                  className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                    quizVehicle === 'car' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-xs' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>वर्ग 'ख' (B: कार/जिप)</span>
                </button>
              </div>
            </div>

            {/* Mode & Set Controls */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-1">
              {/* Exam vs Practice Mode */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-slate-500">तयारी विधि:</span>
                <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold">
                  <button
                    onClick={() => setQuizMode('exam')}
                    className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                      quizMode === 'exam' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>🎯 मोडल परीक्षा (Exam Mock)</span>
                  </button>
                  <button
                    onClick={() => setQuizMode('practice')}
                    className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                      quizMode === 'practice' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>📚 विषयगत अभ्यास (Practice)</span>
                  </button>
                </div>
              </div>

              {/* Sub-selectors */}
              {quizMode === 'exam' ? (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-slate-500">सेट छान्नुहोस्:</span>
                  <div className="inline-flex p-0.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold">
                    <button
                      onClick={() => setSelectedSet('random')}
                      className={`px-2.5 py-1.5 rounded-lg transition-all ${selectedSet === 'random' ? 'bg-white dark:bg-slate-700 text-emerald-600 shadow-xs' : 'text-slate-600 dark:text-slate-400'}`}
                    >
                      🎲 र्‍यान्डम २०
                    </button>
                    <button
                      onClick={() => setSelectedSet('set1')}
                      className={`px-2.5 py-1.5 rounded-lg transition-all ${selectedSet === 'set1' ? 'bg-white dark:bg-slate-700 text-emerald-600 shadow-xs' : 'text-slate-600 dark:text-slate-400'}`}
                    >
                      सेट १
                    </button>
                    <button
                      onClick={() => setSelectedSet('set2')}
                      className={`px-2.5 py-1.5 rounded-lg transition-all ${selectedSet === 'set2' ? 'bg-white dark:bg-slate-700 text-emerald-600 shadow-xs' : 'text-slate-600 dark:text-slate-400'}`}
                    >
                      सेट २
                    </button>
                    <button
                      onClick={() => setSelectedSet('set3')}
                      className={`px-2.5 py-1.5 rounded-lg transition-all ${selectedSet === 'set3' ? 'bg-white dark:bg-slate-700 text-emerald-600 shadow-xs' : 'text-slate-600 dark:text-slate-400'}`}
                    >
                      सेट ३
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                    <span>{formatTime(timeLeft)}</span>
                  </div>
                </div>
              ) : (
                /* Practice Mode: Topic filter pills */
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs font-bold text-slate-500">विषय:</span>
                  {[
                    { id: 'all', label: 'सबै' },
                    { id: 'rules', label: 'नियम/ऐन' },
                    { id: 'signs', label: 'ट्राफिक संकेत' },
                    { id: 'mechanical', label: 'यान्त्रिक ज्ञान' },
                    { id: 'safety', label: 'सडक सुरक्षा' },
                    { id: 'pollution', label: 'प्रदूषण' }
                  ].map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id as any)}
                      className={`px-2.5 py-1 rounded-lg text-2xs font-bold transition-all ${
                        selectedCategory === cat.id 
                          ? 'bg-emerald-600 text-white shadow-xs' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Result Alert if Exam Submitted */}
          {quizMode === 'exam' && isSubmitted && (
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
                      पास हुनका लागि २० मध्ये कम्तीमा १२ प्रश्न (६०%) मिलाउनुपर्नेछ।
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
                  onClick={loadQuestions}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-transform active:scale-95"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>पुनः परीक्षा दिनुहोस् (Retake Exam)</span>
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

              // In practice mode, instant feedback is given when answered
              const showFeedback = quizMode === 'practice' ? isAnswered : isSubmitted;

              return (
                <div 
                  key={q.id}
                  className={`p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border transition-all shadow-xs space-y-4 ${
                    showFeedback 
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

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 text-2xs font-bold">
                        {q.categoryNp}
                      </span>
                      {quizMode === 'practice' && isAnswered && (
                        <button
                          onClick={() => handleResetQuestion(q.id)}
                          title="पुनः प्रयास गर्नुहोस्"
                          className="p-1 rounded-md text-slate-400 hover:text-emerald-600 transition-colors"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {q.options.map((opt, optIdx) => {
                      const isOptionSelected = selectedOpt === optIdx;
                      const isOptionCorrect = optIdx === q.correctIndex;

                      let btnStyle = 'border-slate-200 dark:border-slate-800 hover:border-emerald-400 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300';
                      
                      if (showFeedback) {
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
                          disabled={quizMode === 'exam' && isSubmitted}
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`p-3 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full border border-current text-2xs flex items-center justify-center font-bold shrink-0">
                              {['क', 'ख', 'ग', 'घ'][optIdx]}
                            </span>
                            <span>{opt}</span>
                          </div>
                          
                          {showFeedback && isOptionCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          )}
                          {showFeedback && isOptionSelected && !isOptionCorrect && (
                            <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  {showFeedback && q.explanation && (
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <p><strong>आधिकारिक व्याख्या:</strong> {q.explanation}</p>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* Exam Mode: Sticky Submit Action Bar */}
          {quizMode === 'exam' && !isSubmitted && (
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
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/60 dark:bg-black/30">
                    ७० अंक प्रणाली (New 70-Point Trial Rules)
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black">
                  {isDisqualified 
                    ? '❌ फेल (Fail / Disqualified)' 
                    : trialPassed 
                      ? '✓ उत्तीर्ण (Passed Trial)' 
                      : 'अंक पुगेन (Fail)'}
                </h3>
                <p className="text-xs sm:text-sm opacity-90 max-w-xl">
                  {isDisqualified 
                    ? `गम्भीर गल्तीका कारण सिधै फेल: ${disqualificationReason}` 
                    : 'नयाँ नियमानुसार ७० वा सोभन्दा बढी अंक ल्याएमा ट्रायल परीक्षा पास भइन्छ।'}
                </p>
              </div>

              <div className="text-right">
                <span className="text-4xl sm:text-5xl font-black">{trialScore}</span>
                <span className="text-xs font-bold block opacity-80 uppercase tracking-widest">
                  / १०० पूर्णांक (Pass: ७०)
                </span>
              </div>
            </div>
          </div>

          {/* Trial Stages Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TRIAL_RULES_CATEGORY_A.map(stage => (
              <div 
                key={stage.id}
                className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {stage.nameNp}
                  </h4>
                  <span className="text-2xs font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    पूर्णांक: {stage.totalMarks}
                  </span>
                </div>

                <div className="space-y-2">
                  {stage.rules.map((rule, rIdx) => {
                    const ruleKey = `${stage.id}-${rIdx}`;
                    const isChecked = trialMistakes[ruleKey] || false;

                    return (
                      <button
                        key={rIdx}
                        onClick={() => toggleMistake(ruleKey)}
                        className={`w-full text-left p-3 rounded-2xl border text-xs transition-all flex items-start justify-between gap-3 ${
                          isChecked
                            ? rule.isDisqualified
                              ? 'border-rose-400 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200'
                              : 'border-amber-400 bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200'
                            : 'border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <span className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                            isChecked ? 'bg-current text-white border-transparent' : 'border-slate-300 dark:border-slate-600'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 text-white" />}
                          </span>
                          <span>{rule.description}</span>
                        </div>

                        <span className={`text-2xs font-black shrink-0 px-1.5 py-0.5 rounded ${
                          rule.isDisqualified 
                            ? 'bg-rose-600 text-white' 
                            : 'bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200'
                        }`}>
                          {rule.isDisqualified ? 'सिधै फेल' : `-${rule.penalty}`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 3: SMART CARD SMS PRINT CHECKER */}
      {/* ==================================================== */}
      {activeTab === 'print' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
            
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-2xs font-black uppercase tracking-wider">
                SMS & Online Status Tool
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                स्मार्ट लाइसेन्स कार्ड छापियो कि छैन? तुरुन्तै जाँच्नुहोस्
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                यातायात व्यवस्था विभागको सर्भर ढिलो चलेको बेला SMS मार्फत १ सेकेन्डमा यकिन विवरण प्राप्त गर्न सकिन्छ।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Method 1: SMS */}
              <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-4">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    विधि १: SMS मार्फत स्थिति जाँच
                  </h4>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400">
                    तपाईंको Application ID वा Reference No. हाल्नुहोस्:
                  </label>
                  <input
                    type="text"
                    value={appId}
                    onChange={(e) => setAppId(e.target.value)}
                    placeholder="उदा: 12345678"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm font-bold focus:outline-emerald-500"
                  />
                </div>

                <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-2">
                  <span className="text-2xs text-slate-400 uppercase font-black tracking-wider">पठाउने म्यासेज ढाँचा:</span>
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono font-black text-emerald-600">{smsBody}</code>
                    <button
                      onClick={handleCopySMS}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1 transition-all"
                    >
                      {copiedSMS ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedSMS ? 'कपी भयो!' : 'Copy SMS'}</span>
                    </button>
                  </div>
                  <p className="text-2xs text-slate-500">
                    यसलाई <strong className="text-slate-800 dark:text-slate-200">33001</strong> नम्बरमा SMS पठाउनुहोस्।
                  </p>
                </div>

                <div className="text-2xs text-slate-500 space-y-1">
                  <p>• नेपाल टेलिकम वा एनसेलको सिमबाट SMS गर्न सकिन्छ।</p>
                  <p>• कार्ड छापिएको भए "Printed" र नछापिएको भए "Not Printed" म्यासेज आउँछ।</p>
                </div>
              </div>

              {/* Method 2: Online Link */}
              <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      विधि २: यातायात विभागको अनलाइन पोर्टल
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    यातायात व्यवस्था विभागको आधिकारिक अनलाइन पोर्टलबाट स्मार्ट कार्ड प्रिन्ट स्थिति र बाँकी विवरण हेर्न सक्नुहुन्छ:
                  </p>
                </div>

                <div className="space-y-2">
                  <a
                    href="https://dotm.gov.np"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-transform active:scale-95"
                  >
                    <span>DoTM Official Site खोल्नुहोस्</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://applydl.dotm.gov.np"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-transform active:scale-95"
                  >
                    <span>ApplyDL पोर्टल लगइन</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 4: VEHICLE ANNUAL TAX & BLUEBOOK CALCULATOR */}
      {/* ==================================================== */}
      {activeTab === 'tax' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
            
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-2xs font-black uppercase tracking-wider">
                बागमती प्रदेश दररेट (२०८१/२०८२)
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                सवारी साधन वार्षिक कर तथा ब्लुबुक नवीकरण शुल्क क्याल्कुलेटर
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                इन्जिन क्षमता (CC / kW) अनुसार वार्षिक लाग्ने कर, तेस्रो पक्ष बिमा र नवीकरण दस्तुरको हिसाब
              </p>
            </div>

            {/* Vehicle Type Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { id: 'motorcycle', label: 'मोटरसाइकल / स्कुटर' },
                { id: 'car_jeep', label: 'कार / जिप / भ्यान' },
                { id: 'electric_bike', label: 'विद्युतीय दुईपाङ्ग्रे (EV)' },
                { id: 'electric_car', label: 'विद्युतीय कार (EV)' }
              ].map(type => (
                <button
                  key={type.id}
                  onClick={() => {
                    setTaxVehicleType(type.id as any);
                    setSelectedRangeIdx(0);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    taxVehicleType === type.id
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            {/* Range Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">
                सवारीको इन्जिन क्षमता (CC / kW) छान्नुहोस्:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {currentTaxOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedRangeIdx(idx)}
                    className={`p-3.5 rounded-2xl border text-left text-xs transition-all ${
                      selectedRangeIdx === idx
                        ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 font-bold text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/20'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    <span>{opt.range}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tax Output Summary Card */}
            {activeTaxObj && (
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-4">
                <h4 className="font-black text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                  शुल्क विवरण ({activeTaxObj.range}):
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <span className="text-2xs font-bold text-slate-400 uppercase">१. वार्षिक सवारी कर</span>
                    <p className="text-xl font-black text-emerald-600">रु. {activeTaxObj.annualTax.toLocaleString()}</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <span className="text-2xs font-bold text-slate-400 uppercase">२. तेस्रो पक्ष बिमा (अनुमानित)</span>
                    <p className="text-xl font-black text-blue-600">रु. {activeTaxObj.insurance.toLocaleString()}</p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <span className="text-2xs font-bold text-slate-400 uppercase">कुल वार्षिक खर्च</span>
                    <p className="text-xl font-black text-slate-900 dark:text-white">
                      रु. {(activeTaxObj.annualTax + activeTaxObj.insurance).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200">
                  ⚠️ <strong>जरिवाना सम्बन्धी जानकारी:</strong> म्याद नाघेको ३० दिनसम्म ५%, ४५ दिनसम्म १०%, आर्थिक वर्ष कटेमा २०% र ५ वर्ष कटेमा १००% सम्म जरिवाना लाग्दछ।
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
