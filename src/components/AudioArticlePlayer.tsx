'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Headphones,
  Gauge
} from 'lucide-react';

interface AudioArticlePlayerProps {
  title: string;
  summary: string;
  sections?: {
    heading: string;
    content: string;
  }[];
}

export default function AudioArticlePlayer({
  title,
  summary,
  sections = []
}: AudioArticlePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState<number>(1);
  const [isSupported, setIsSupported] = useState(true);
  const [progress, setProgress] = useState<number>(0);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  // Full clean text array to read paragraph by paragraph
  const textQueue = useRef<string[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    // Assemble text queue
    const queue: string[] = [];
    queue.push(title);
    if (summary) queue.push(summary);
    sections.forEach((sec) => {
      if (sec.heading) queue.push(sec.heading);
      if (sec.content) {
        // Strip markdown-like links or extra spaces
        const cleanContent = sec.content
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
          .replace(/[#*`_]/g, '')
          .trim();
        if (cleanContent) queue.push(cleanContent);
      }
    });
    textQueue.current = queue;

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [title, summary, sections]);

  const speakQueueItem = (index: number) => {
    if (!('speechSynthesis' in window)) return;
    if (index >= textQueue.current.length) {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentTextIndex(0);
      setProgress(100);
      return;
    }

    window.speechSynthesis.cancel();

    const text = textQueue.current[index];
    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    // Pick best available voice (Nepali > Hindi > Default)
    const voices = window.speechSynthesis.getVoices();
    const neVoice = voices.find((v) => v.lang.includes('ne') || v.lang.includes('hi'));
    if (neVoice) {
      utterance.voice = neVoice;
    }

    utterance.lang = neVoice ? neVoice.lang : 'ne-NP';
    utterance.rate = rate;
    utterance.pitch = 1;

    utterance.onend = () => {
      const nextIndex = index + 1;
      setCurrentTextIndex(nextIndex);
      setProgress(Math.round((nextIndex / textQueue.current.length) * 100));
      speakQueueItem(nextIndex);
    };

    utterance.onerror = (e) => {
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        setIsPlaying(false);
        setIsPaused(false);
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  const handlePlay = () => {
    if (!('speechSynthesis' in window)) return;

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
      setIsPaused(false);
    } else {
      setIsPlaying(true);
      setIsPaused(false);
      speakQueueItem(currentTextIndex);
    }
  };

  const handlePause = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.pause();
    setIsPlaying(false);
    setIsPaused(true);
  };

  const handleRestart = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setCurrentTextIndex(0);
    setProgress(0);
    setIsPlaying(true);
    setIsPaused(false);
    speakQueueItem(0);
  };

  const handleRateChange = () => {
    const nextRate = rate === 1 ? 1.25 : rate === 1.25 ? 1.5 : 1;
    setRate(nextRate);
    if (isPlaying) {
      // restart current item with new rate
      speakQueueItem(currentTextIndex);
    }
  };

  if (!isSupported) {
    return null;
  }

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/90 via-slate-900 to-teal-950/90 text-white border border-emerald-700/40 shadow-lg relative overflow-hidden notranslate no-print" translate="no">
      {/* Ambient background light */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Left Side: Icon & Title */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-emerald-600/30">
            <Headphones className="w-5 h-5 animate-pulse" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs sm:text-sm font-black text-white truncate">
                नेपाली अडियो गाथा (Listen in Audio)
              </span>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                <span>AI Voice</span>
              </span>
            </div>
            <p className="text-[11px] text-emerald-200/90 line-clamp-1 mt-0.5">
              {isPlaying 
                ? 'अडियो बजिरहेको छ... (हेडफोन वा स्पिकरमा सुन्नुहोस्)' 
                : isPaused 
                ? 'अडियो रोकिएको छ (पज गरिएको)' 
                : 'पढ्न समय छैन? यो लेख सम्पूर्ण नेपालीमा सुन्नुहोस्'}
            </p>
          </div>
        </div>

        {/* Right Side: Player Controls */}
        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
          
          {/* Speed Toggle (1x, 1.25x, 1.5x) */}
          <button
            type="button"
            onClick={handleRateChange}
            className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition-colors border border-slate-700 cursor-pointer flex items-center gap-1"
            title="गति परिवर्तन (Speed)"
          >
            <Gauge className="w-3.5 h-3.5" />
            <span>{rate}x</span>
          </button>

          {/* Reset / Replay */}
          {(isPlaying || isPaused || progress > 0) && (
            <button
              type="button"
              onClick={handleRestart}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 cursor-pointer"
              title="पुनः सुरुबाट सुन्नुहोस्"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          {/* Primary Play / Pause Button */}
          {isPlaying ? (
            <button
              type="button"
              onClick={handlePause}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Pause className="w-4 h-4 fill-current" />
              <span>पज (Pause)</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePlay}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs flex items-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{isPaused ? 'पुनः बजाउनुहोस्' : 'सुन्नुहोस् (Play)'}</span>
            </button>
          )}

        </div>

      </div>

      {/* Progress & Waveform Bar */}
      {(isPlaying || isPaused || progress > 0) && (
        <div className="mt-3 pt-3 border-t border-emerald-900/50 space-y-1.5 relative z-10">
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
            <span>प्रगति: {progress}%</span>
            {isPlaying && (
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>वाचन हुँदैछ</span>
              </span>
            )}
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

    </div>
  );
}
