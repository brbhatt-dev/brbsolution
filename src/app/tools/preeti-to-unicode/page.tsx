'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  ArrowRightLeft, 
  Copy, 
  Check, 
  Trash2, 
  Download, 
  Sparkles, 
  FileText, 
  Type, 
  ArrowLeft,
  Share2
} from 'lucide-react';
import { preetiToUnicode, unicodeToPreeti } from '@/lib/unicodeConverter';

export default function PreetiToUnicodePage() {
  const [direction, setDirection] = useState<'preetiToUnicode' | 'unicodeToPreeti'>('preetiToUnicode');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!inputText) {
      setOutputText('');
      return;
    }

    if (direction === 'preetiToUnicode') {
      setOutputText(preetiToUnicode(inputText));
    } else {
      setOutputText(unicodeToPreeti(inputText));
    }
  }, [inputText, direction]);

  const handleCopy = () => {
    if (!outputText) return;
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInputText('');
    setOutputText('');
  };

  const handleSwap = () => {
    setDirection((prev) => (prev === 'preetiToUnicode' ? 'unicodeToPreeti' : 'preetiToUnicode'));
    setInputText(outputText);
  };

  const handleDownload = () => {
    if (!outputText) return;
    const blob = new Blob([outputText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = direction === 'preetiToUnicode' ? 'converted-nepali-unicode.txt' : 'converted-preeti.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const charCount = inputText.length;
  const wordCount = inputText.trim() ? inputText.trim().split(/\s+/).length : 0;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>सबै टूल्सहरू (All Tools)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-semibold">Preeti ⇄ Unicode Converter</span>
        </div>

        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>द्रुत तथा शुद्ध नेपाली युनिकोड रूपान्तरण</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Preeti ⇄ Nepali Unicode Converter
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            सरकारी कार्यालय, नापी, मालपोत, अदालत तथा वेबसाइटहरूमा प्रयोग गर्न प्रिती फन्टको अक्षरलाई युनिकोडमा वा युनिकोडलाई प्रितीमा तत्काल रूपान्तरण गर्नुहोस्।
          </p>
        </div>

        {/* Direction Switcher & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDirection('preetiToUnicode')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                direction === 'preetiToUnicode'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              Preeti ➔ Nepali Unicode
            </button>

            <button
              onClick={handleSwap}
              title="दिशा उल्टाउनुहोस् (Swap Direction)"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => setDirection('unicodeToPreeti')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                direction === 'unicodeToPreeti'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              Nepali Unicode ➔ Preeti
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>अक्षर: <strong className="text-slate-800 dark:text-slate-200">{charCount}</strong></span>
            <span>•</span>
            <span>शब्द: <strong className="text-slate-800 dark:text-slate-200">{wordCount}</strong></span>
          </div>
        </div>

        {/* Dual Text Editor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Input Box */}
          <div className="flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-200/80 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Type className="w-4 h-4 text-emerald-600" />
                <span>{direction === 'preetiToUnicode' ? 'यहाँ Preeti फन्ट टाइप वा पेस्ट गर्नुहोस्' : 'यहाँ नेपाली Unicode टाइप वा पेस्ट गर्नुहोस्'}</span>
              </span>
              {inputText && (
                <button
                  onClick={handleClear}
                  className="text-xs text-rose-500 hover:text-rose-600 font-semibold flex items-center gap-1 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>खाली गर्नुहोस्</span>
                </button>
              )}
            </div>

            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={direction === 'preetiToUnicode' ? 'उदा: gfd:t] (नमस्ते)...' : 'उदा: नमस्ते (gfd:t])...'}
              rows={12}
              className="w-full p-5 bg-transparent resize-y focus:outline-none text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 leading-relaxed font-mono"
            />
          </div>

          {/* Output Box */}
          <div className="flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-200/80 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-teal-600" />
                <span>{direction === 'preetiToUnicode' ? 'रूपान्तरित नेपाली Unicode' : 'रूपान्तरित Preeti Text'}</span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  disabled={!outputText}
                  title="टेक्स्ट फाइल डाउनलोड गर्नुहोस्"
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 disabled:opacity-40 transition-colors flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </button>

                <button
                  onClick={handleCopy}
                  disabled={!outputText}
                  className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold disabled:opacity-40 transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>कपी भयो!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>कपी गर्नुहोस्</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <textarea
              value={outputText}
              readOnly
              placeholder="यहाँ रूपान्तरण भएको नतिजा स्वतः आउनेछ..."
              rows={12}
              className="w-full p-5 bg-slate-50/30 dark:bg-slate-950/30 resize-y focus:outline-none text-sm text-slate-900 dark:text-slate-50 leading-relaxed font-sans"
            />
          </div>

        </div>

        {/* Informative Guidance & Preeti Keystroke Guide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              १००% अफलाइन र सुरक्षित
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              तपाईंको कुनै पनि गोप्य निवेदन, कानुनी मिसिल वा लेख बाहिरी सर्भरमा जाँदैन। सम्पूर्ण रूपान्तरण सिधै तपाईंको कम्प्युटर वा मोबाइल ब्राउजरमै हुन्छ।
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              मालपोत तथा अदालतमा उपयोगी
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              सरकारी ढड्डा वा पुरानो लिखतमा प्रीति (Preeti/Kantipur) फन्टमा टाइप भएको पाठलाई अनलाइन फारम, नागरिक एप वा वेबसाइटका लागि युनिकोडमा बदल्न सकिन्छ।
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              स्वचालित र तत्काल नतिजा
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              कुनै अतिरिक्त बटन थिचिरहनु पर्दैन। तपाईंले टाइप वा पेस्ट गर्ने बित्तिकै दोस्रो बक्समा युनिकोड पाठ तयार हुन्छ र एक क्लिकमा कपी गर्न सकिन्छ।
            </p>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
