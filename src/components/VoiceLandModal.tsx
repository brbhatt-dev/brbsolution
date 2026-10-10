'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, 
  MicOff, 
  X, 
  Sparkles, 
  Volume2, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  HelpCircle
} from 'lucide-react';

export interface ParsedLandResult {
  mode: 'pahadi' | 'terai' | 'sqft' | 'tax';
  values: {
    ropani?: number;
    aana?: number;
    paisa?: number;
    daam?: number;
    bigha?: number;
    katha?: number;
    dhur?: number;
    kanwa?: number;
    sqft?: number;
    propertyValue?: number;
  };
  transcript: string;
  summaryNp: string;
}

interface VoiceLandModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (result: ParsedLandResult) => void;
}

// Convert Nepali numerals (०, १, २...) to standard numbers
function normalizeNepDigits(str: string): string {
  const nepDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  let res = str;
  nepDigits.forEach((digit, index) => {
    res = res.replaceAll(digit, index.toString());
  });
  return res;
}

export default function VoiceLandModal({ isOpen, onClose, onApply }: VoiceLandModalProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [parsedResult, setParsedResult] = useState<ParsedLandResult | null>(null);
  const [isSupported, setIsSupported] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'ne-NP';
    recognition.continuous = false;
    recognition.interimResults = true;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      const current = event.resultIndex;
      const text = event.results[current][0].transcript;
      setTranscript(text);

      if (event.results[current].isFinal) {
        processVoiceCommand(text);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onerror = (event: any) => {
      setIsListening(false);
      if (event.error === 'not-allowed') {
        setErrorMessage('माइक्रोफोन अनुमति अस्वीकार गरियो। कृपया ब्राउजर सेटिङबाट माइक अन गर्नुहोस्।');
      } else if (event.error === 'no-speech') {
        setErrorMessage('कुनै बोली सुनिएन। कृपया माइक नजिक गएर पुनः बोल्नुहोस्।');
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  // Start listening automatically when modal opens
  useEffect(() => {
    if (isOpen) {
      setTranscript('');
      setParsedResult(null);
      setErrorMessage('');
      startListening();
    } else {
      stopListening();
    }
  }, [isOpen]);

  const startListening = () => {
    setErrorMessage('');
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (e) {
        // Already started
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }
    setIsListening(false);
  };

  // Natural language parsing of Nepali land speech
  const processVoiceCommand = (rawText: string) => {
    const text = normalizeNepDigits(rawText.toLowerCase().trim());

    // Helper to find number before keywords
    const extractNumber = (keywords: string[]): number | null => {
      for (const kw of keywords) {
        const regex = new RegExp(`([\\d.]+)\\s*${kw}`);
        const m = text.match(regex);
        if (m && !isNaN(parseFloat(m[1]))) {
          return parseFloat(m[1]);
        }
      }
      return null;
    };

    // 1. Check for Terai units (Bigha, Katha, Dhur, Kanwa)
    const bigha = extractNumber(['बिघा', 'bigha', 'विघा']);
    const katha = extractNumber(['कट्ठा', 'कठ्ठा', 'katha', 'kattha', 'कट्टा']);
    const dhur = extractNumber(['धुर', 'dhur', 'धूर']);
    const kanwa = extractNumber(['कान्भा', 'कन्वा', 'kanwa', 'कन्भा']);

    if (bigha !== null || katha !== null || dhur !== null || kanwa !== null) {
      const res: ParsedLandResult = {
        mode: 'terai',
        values: {
          bigha: bigha || 0,
          katha: katha || 0,
          dhur: dhur || 0,
          kanwa: kanwa || 0,
        },
        transcript: rawText,
        summaryNp: `तराई प्रणाली: ${bigha || 0} बिघा ${katha || 0} कट्ठा ${dhur || 0} धुर ${kanwa || 0} कान्भा`
      };
      setParsedResult(res);
      speakFeedback(`तराई प्रणाली हिसाब: ${bigha || 0} बिघा ${katha || 0} कट्ठा`);
      return;
    }

    // 2. Check for Pahadi units (Ropani, Aana, Paisa, Daam)
    const ropani = extractNumber(['रोपनी', 'ropani']);
    const aana = extractNumber(['आना', 'aana', 'ana']);
    const paisa = extractNumber(['पैसा', 'paisa']);
    const daam = extractNumber(['दाम', 'daam', 'dam']);

    if (ropani !== null || aana !== null || paisa !== null || daam !== null) {
      const res: ParsedLandResult = {
        mode: 'pahadi',
        values: {
          ropani: ropani || 0,
          aana: aana || 0,
          paisa: paisa || 0,
          daam: daam || 0,
        },
        transcript: rawText,
        summaryNp: `पहाडी प्रणाली: ${ropani || 0} रोपनी ${aana || 0} आना ${paisa || 0} पैसा ${daam || 0} दाम`
      };
      setParsedResult(res);
      speakFeedback(`पहाडी प्रणाली हिसाब: ${ropani || 0} रोपनी ${aana || 0} आना`);
      return;
    }

    // 3. Check for Square Feet / Square Meter
    const sqft = extractNumber(['वर्गफिट', 'वर्ग फिट', 'sqft', 'sq.ft', 'फिट']);
    if (sqft !== null) {
      const res: ParsedLandResult = {
        mode: 'sqft',
        values: { sqft },
        transcript: rawText,
        summaryNp: `${sqft} वर्गफिट`
      };
      setParsedResult(res);
      speakFeedback(`${sqft} वर्गफिटको हिसाब तयार भयो`);
      return;
    }

    // 4. Check for Monetary amount for Malpot Tax (लख, करोड)
    const crore = extractNumber(['करोड', 'crore', 'cr']);
    const lakh = extractNumber(['लाख', 'lakh', 'lac']);

    if (crore !== null || lakh !== null) {
      const totalAmount = ((crore || 0) * 10000000) + ((lakh || 0) * 100000);
      const res: ParsedLandResult = {
        mode: 'tax',
        values: { propertyValue: totalAmount },
        transcript: rawText,
        summaryNp: `मालपोत कर हिसाब: रु. ${totalAmount.toLocaleString('en-IN')}`
      };
      setParsedResult(res);
      speakFeedback(`रु. ${totalAmount.toLocaleString('en-IN')} को मालपोत कर हिसाब`);
      return;
    }

    // Unrecognized land command
    setErrorMessage(`बोली सुनियो: "${rawText}"। तर कुनै रोपनी, आना, वा बिघा एकाइ फेला परेन। कृपया "५ आना" वा "२ बिघा" भनेर बोल्नुहोस्।`);
  };

  const speakFeedback = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ne-NP';
      utterance.rate = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleApply = () => {
    if (parsedResult) {
      onApply(parsedResult);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in notranslate no-print" translate="no">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-emerald-800 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-300 shrink-0">
              <Mic className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-black text-sm sm:text-base text-white flex items-center gap-1.5">
                <span>नेपाली भ्वाइस कमान्ड क्यालकुलेटर</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Voice AI
                </span>
              </h3>
              <p className="text-[11px] text-emerald-200">
                मुखले बोल्नुहोस् — हिसाब तत्काल तयार हुन्छ
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="बन्द गर्नुहोस्"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Central Listening State & Pulse */}
        <div className="p-6 sm:p-8 text-center space-y-6 flex flex-col items-center justify-center">
          
          {/* Animated Microphone Orb */}
          <div className="relative">
            {isListening && (
              <>
                <div className="absolute -inset-4 rounded-full bg-emerald-500/20 animate-ping pointer-events-none" />
                <div className="absolute -inset-8 rounded-full bg-teal-500/15 animate-pulse pointer-events-none" />
              </>
            )}
            
            <button
              type="button"
              onClick={isListening ? stopListening : startListening}
              className={`w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 active:scale-95 cursor-pointer relative z-10 ${
                isListening
                  ? 'bg-gradient-to-tr from-rose-600 to-red-500 text-white ring-4 ring-rose-500/30 scale-105'
                  : 'bg-gradient-to-tr from-emerald-600 to-teal-500 text-white hover:scale-105 shadow-emerald-500/30'
              }`}
            >
              {isListening ? (
                <Mic className="w-9 h-9 animate-bounce" />
              ) : (
                <Mic className="w-9 h-9" />
              )}
            </button>
          </div>

          {/* Status Label */}
          <div className="space-y-1">
            <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
              {isListening ? 'सुन्दैछ... कृपया स्पष्ट बोल्नुहोस् 🎙️' : 'माइक थिचेर बोल्नुहोस्'}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              उदा: <em>"५ आना"</em>, <em>"२ रोपनी ४ आना"</em>, <em>"१ बिघा १० कट्ठा"</em> वा <em>"५० लाख"</em>
            </p>
          </div>

          {/* Live Transcript Bubble */}
          {transcript && (
            <div className="w-full p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm font-bold animate-in fade-in">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                पहिचान भएको बोली (Recognized):
              </span>
              <span>"{transcript}"</span>
            </div>
          )}

          {/* Parsed Result Display */}
          {parsedResult && (
            <div className="w-full p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm text-left flex items-start gap-3 animate-in zoom-in-95">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="flex-1 space-y-1">
                <span className="font-extrabold text-emerald-800 dark:text-emerald-300 block">
                  सफलतापूर्वक हिसाब पत्ता लाग्यो!
                </span>
                <p className="font-bold">{parsedResult.summaryNp}</p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="w-full p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Sample Tap-to-Test Prompts */}
          <div className="w-full pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <span className="text-[11px] font-bold text-slate-400 block text-left">
              वा नमुना वाक्यांश छान्नुहोस् (Tap to test):
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                '४ आना',
                '१ रोपनी ८ आना',
                '१ बिघा ५ कट्ठा',
                '१५०० वर्गफिट',
                '५० लाख'
              ].map((sample) => (
                <button
                  key={sample}
                  type="button"
                  onClick={() => {
                    setTranscript(sample);
                    processVoiceCommand(sample);
                  }}
                  className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-600 text-[11px] font-medium transition-colors cursor-pointer"
                >
                  {sample}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Actions */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            रद्द गर्नुहोस्
          </button>

          <button
            type="button"
            disabled={!parsedResult}
            onClick={handleApply}
            className={`px-5 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              parsedResult
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30 active:scale-95'
                : 'bg-slate-300 dark:bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            <span>क्यालकुलेटरमा भर्नुहोस्</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
