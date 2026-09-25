'use client';

import React, { useState } from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  Award, 
  ArrowRight, 
  ArrowLeft,
  BookOpen, 
  Sparkles,
  Share2,
  Copy,
  Check
} from 'lucide-react';
import { AAMIN_QUIZ_QUESTIONS, QuizQuestion } from '@/data/quiz';
import AdSenseSlot from '@/components/AdSenseSlot';

export default function AaminQuiz() {
  const [selectedCategory, setSelectedCategory] = useState<string>('सबै');
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [copied, setCopied] = useState<boolean>(false);

  // Filtered Questions
  const filteredQuestions = selectedCategory === 'सबै'
    ? AAMIN_QUIZ_QUESTIONS
    : AAMIN_QUIZ_QUESTIONS.filter((q) => q.category === selectedCategory);

  const currentQuestion = filteredQuestions[currentIdx] || filteredQuestions[0];

  const handleSelectOption = (questionId: number, optionIdx: number) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
    setShowExplanation((prev) => ({
      ...prev,
      [questionId]: true,
    }));
  };

  const handleNext = () => {
    if (currentIdx < filteredQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    setShowExplanation({});
    setCurrentIdx(0);
  };

  // Score Calculations
  const totalQuestions = filteredQuestions.length;
  let correctCount = 0;
  let wrongCount = 0;

  filteredQuestions.forEach((q) => {
    const answered = userAnswers[q.id];
    if (answered !== undefined) {
      if (answered === q.correctIndex) {
        correctCount += 1;
      } else {
        wrongCount += 1;
      }
    }
  });

  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

  // Performance Badge
  let badgeText = 'प्रयास राम्रो छ!';
  let badgeColor = 'text-amber-600 bg-amber-50 border-amber-200';
  if (scorePercentage >= 80) {
    badgeText = 'उत्कृष्ट तयारी! तपाईं लोकसेवा अमिन/सर्भेक्षक परीक्षा उत्तीर्ण गर्न सक्षम हुनुहुन्छ।';
    badgeColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
  } else if (scorePercentage >= 50) {
    badgeText = 'सन्तोषजनक! केही सर्भे उपकरण र ऐन-नियमका प्रश्नहरूमा थप अभ्यास गर्नुहोस्।';
    badgeColor = 'text-blue-700 bg-blue-50 border-blue-200';
  } else {
    badgeText = 'अझै धेरै अध्ययन आवश्यक छ! तल दिइएका व्याख्या तथा ज्ञान केन्द्रका लेखहरू अध्ययन गर्नुहोस्।';
    badgeColor = 'text-rose-700 bg-rose-50 border-rose-200';
  }

  const handleShareScore = () => {
    const text = `मैले BR Bhatta नापी अमिन तथा सर्भेक्षक अनलाइन क्विजमा ${totalQuestions} मध्ये ${correctCount} प्रश्न सही गरी ${scorePercentage}% अङ्क प्राप्त गरेँ! \nतपाईं पनि आफ्नो तयारी जाँच्नुहोस्: https://www.brbhatta.com/tools/aamin-quiz`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-6">
      
      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800 text-xs font-bold scrollbar-none">
        {['सबै', 'नापजाँच तथा एकाइ', 'सर्भे उपकरण र चेनिङ', 'कम्पास र लेभलिङ', 'नापी ऐन तथा नियम'].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentIdx(0);
            }}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Progress & Counter */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
        <span>
          प्रश्न: <strong>{currentIdx + 1}</strong> / {totalQuestions}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">
            सही: {correctCount}
          </span>
          <span className="text-rose-600 dark:text-rose-400 font-bold">
            गलत: {wrongCount}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
        <div 
          className="bg-emerald-600 h-full transition-all duration-300 rounded-full"
          style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
        ></div>
      </div>

      {/* Active Question Card */}
      {!isSubmitted ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-sm space-y-6">
          
          {/* Question Header */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-bold text-slate-600 dark:text-slate-400">
              <BookOpen className="w-3 h-3 text-emerald-600" />
              <span>{currentQuestion.category}</span>
            </div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-relaxed">
              {currentIdx + 1}. {currentQuestion.question}
            </h2>
          </div>

          {/* Options List */}
          <div className="space-y-2.5">
            {currentQuestion.options.map((opt, optIdx) => {
              const selected = userAnswers[currentQuestion.id] === optIdx;
              const isAnswered = userAnswers[currentQuestion.id] !== undefined;
              const isCorrect = optIdx === currentQuestion.correctIndex;
              
              let btnClass = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 hover:border-emerald-500/50';

              if (isAnswered) {
                if (isCorrect) {
                  btnClass = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                } else if (selected && !isCorrect) {
                  btnClass = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200 font-bold';
                } else {
                  btnClass = 'opacity-60 bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800';
                }
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(currentQuestion.id, optIdx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${btnClass} ${!isAnswered ? 'cursor-pointer active:scale-[0.99]' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                      {['क', 'ख', 'ग', 'घ'][optIdx]}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {isAnswered && (
                    <div>
                      {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                      {selected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box (Shows as soon as user answers) */}
          {userAnswers[currentQuestion.id] !== undefined && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-1.5 animate-in fade-in duration-200 text-xs sm:text-sm">
              <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                <span>सही उत्तरको व्याख्या (Explanation):</span>
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-bold">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>अघिल्लो प्रश्न</span>
            </button>

            {currentIdx < totalQuestions - 1 ? (
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xs active:scale-95"
              >
                <span>पछिल्लो प्रश्न</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setIsSubmitted(true)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white transition-all shadow-md active:scale-95"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>नतिजा हेर्नुहोस् (Finish Exam)</span>
              </button>
            )}
          </div>

        </div>
      ) : (
        /* Result Scorecard Card */
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-6 text-center animate-in zoom-in-95 duration-200">
          
          <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950/60 border border-amber-200 text-amber-800 dark:text-amber-300 flex items-center justify-center mx-auto">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              तपाईंको परीक्षा नतिजा
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              नापी अमिन तथा सर्भेक्षक नमुना वस्तुगत परीक्षा अभ्यास
            </p>
          </div>

          {/* Big Score Number */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 max-w-sm mx-auto border border-slate-200 dark:border-slate-700 space-y-1">
            <span className="text-4xl sm:text-5xl font-black text-emerald-600 font-mono">
              {scorePercentage}%
            </span>
            <p className="text-xs text-slate-500 font-bold">
              कुल {totalQuestions} मध्ये {correctCount} प्रश्न सही
            </p>
          </div>

          {/* Performance Assessment Badge */}
          <div className={`p-4 rounded-2xl border text-xs sm:text-sm font-semibold max-w-lg mx-auto ${badgeColor}`}>
            {badgeText}
          </div>

          {/* Action Buttons: Retry & Share Score */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>पुनः अभ्यास गर्नुहोस् (Retry)</span>
            </button>

            <button
              onClick={handleShareScore}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>नतिजा कपी भयो!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>नतिजा साथीभाइसँग सेयर गर्नुहोस्</span>
                </>
              )}
            </button>
          </div>

        </div>
      )}

      {/* AdSense Slot */}
      <AdSenseSlot userFacingLabel="विज्ञापन (AdSense Slot)" />

    </div>
  );
}
