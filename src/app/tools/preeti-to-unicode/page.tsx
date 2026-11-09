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
  Share2,
  BookOpen,
  HelpCircle,
  Keyboard,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { preetiToUnicode, unicodeToPreeti } from '@/lib/unicodeConverter';
import { copyToClipboard } from '@/lib/clipboard';

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

  const handleCopy = async () => {
    if (!outputText) return;
    const ok = await copyToClipboard(outputText);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
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

  const faqs = [
    {
      q: 'प्रीति (Preeti) फन्ट र नेपाली युनिकोड (Nepali Unicode) बीच के फरक छ?',
      a: 'प्रीति एउटा लिगेसी टीटीएफ (TTF) फन्ट हो जुन पढ्नका लागि कम्प्युटरमा अनिवार्य रूपमा प्रीति फन्ट इन्स्टल भएको हुनुपर्छ। युनिकोड भनेको विश्वव्यापी अन्तर्राष्ट्रिय स्ट्यान्डर्ड हो, जसलाई कुनै अतिरिक्त फन्ट डाउनलोड नगरी जुनसुकै मोबाइल, इन्टरनेट ब्राउजर वा फेसबुक/नागरिक एपमा सोझै पढ्न र लेख्न सकिन्छ।'
    },
    {
      q: 'के सरकारी कार्यालय र लोक सेवा फारममा प्रीति फन्ट चल्छ?',
      a: 'चल्दैन। लोक सेवा आयोग, अनलाइन मालपोत, बैंक वा राहदानी विभागको अनलाइन फारममा नेपाली नाम र ठेगाना लेख्दा अनिवार्य रूपमा नेपाली युनिकोड (Nepali Unicode) मात्र स्वीकार हुन्छ।'
    },
    {
      q: 'के यो कन्भर्टरले पुरानो कान्तिपुर (Kantipur) वा सगरमाथा फन्ट पनि रूपान्तरण गर्छ?',
      a: 'हो। कान्तिपुर, हिमाल, र सगरमाथा जस्ता परम्परागत नेपाली फन्टहरू प्रीति फन्टको कीबोर्ड लेआउटसँगै मिल्दोजुल्दो भएकाले यस टुलले ती सबैलाई शुद्ध नेपाली युनिकोडमा रूपान्तरण गर्दछ।'
    },
    {
      q: 'के मेरो गोप्य सरकारी मिसिल वा निवेदन इन्टरनेटमा लिक हुने सम्भावना छ?',
      a: 'छैन, शून्य सम्भावना छ। यो टुल शतप्रतिशत क्लाइन्ट-साइड (तपाईंको ब्राउजर भित्र) मात्र चल्दछ। तपाईंले टाइप वा पेस्ट गरेको कुनै पनि शब्द हाम्रो सर्भर वा बाह्य क्लाउडमा जाँदैन।'
    }
  ];

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };

  const jsonLdApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'प्रीति युनिकोड रूपान्तरण टुल (Preeti to Unicode Converter Nepal)',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    url: 'https://www.brbhatta.com/tools/preeti-to-unicode',
    description: 'Instant, offline and accurate Preeti to Nepali Unicode and Unicode to Preeti font converter for documents, government portals, and mobile.'
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
      />

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
            प्रीति (Preeti/Kantipur) फन्टमा टाइप भएको पाठलाई सजिलै युनिकोडमा बदल्नुहोस् वा युनिकोडलाई प्रीतिमा रूपान्तरण गर्नुहोस्। १००% शुद्ध र तत्काल।
          </p>
        </div>

        {/* Direction Switcher & Stats Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDirection('preetiToUnicode')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                direction === 'preetiToUnicode'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              Preeti → Unicode
            </button>
            <button
              onClick={handleSwap}
              title="दिशा उल्टाउनुहोस् (Swap Direction)"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDirection('unicodeToPreeti')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                direction === 'unicodeToPreeti'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              Unicode → Preeti
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>वर्ण (Chars): <strong className="text-slate-800 dark:text-slate-200">{charCount}</strong></span>
            <span>शब्द (Words): <strong className="text-slate-800 dark:text-slate-200">{wordCount}</strong></span>
          </div>
        </div>

        {/* Dual Editor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[360px]">
          
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
                  className="text-xs text-rose-500 hover:text-rose-600 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
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
              translate="no"
              className="w-full p-5 bg-transparent resize-y focus:outline-none text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 leading-relaxed font-mono min-h-[260px] notranslate"
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
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 disabled:opacity-40 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </button>

                <button
                  onClick={handleCopy}
                  disabled={!outputText}
                  className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold disabled:opacity-40 transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
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
              translate="no"
              className="w-full p-5 bg-slate-50/30 dark:bg-slate-950/30 resize-y focus:outline-none text-sm text-slate-900 dark:text-slate-50 leading-relaxed font-sans min-h-[260px] notranslate"
            />
          </div>

        </div>

        {/* Informative Guidance & Preeti Keystroke Guide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              १००% अफलाइन र सुरक्षित
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              तपाईंको कुनै पनि गोप्य निवेदन, कानुनी मिसिल वा लेख बाहिरी सर्भरमा जाँदैन। सम्पूर्ण रूपान्तरण सिधै तपाईंको कम्प्युटर वा मोबाइल ब्राउजरमै हुन्छ।
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              मालपोत तथा अदालतमा उपयोगी
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              सरकारी ढड्डा वा पुरानो लिखतमा प्रीति (Preeti/Kantipur) फन्टमा टाइप भएको पाठलाई अनलाइन फारम, नागरिक एप वा वेबसाइटका लागि युनिकोडमा बदल्न सकिन्छ।
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              स्वचालित र तत्काल नतिजा
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              कुनै अतिरिक्त बटन थिचिरहनु पर्दैन। तपाईंले टाइप वा पेस्ट गर्ने बित्तिकै दोस्रो बक्समा युनिकोड पाठ तयार हुन्छ र एक क्लिकमा कपी गर्न सकिन्छ।
            </p>
          </div>
        </div>

        {/* 📚 COMPREHENSIVE EDUCATIONAL GUIDE: PREETI VS UNICODE */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-3">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              प्रीति (Preeti) फन्ट र नेपाली युनिकोड (Unicode) बीचको मुख्य भिन्नता
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            नेपालमा विगत लामो समयदेखि डेस्कटप पब्लिसिङ र सरकारी कामकाजमा परम्परागत प्रीति फन्ट प्रयोग हुँदै आएको छ। तर इन्टरनेट र डिजिटल युगमा युनिकोड किन अनिवार्य छ, तलको तुलनाबाट स्पष्ट हुन्छ:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="px-4 py-3">सूचक (Feature)</th>
                  <th className="px-4 py-3">प्रीति फन्ट (Preeti Font)</th>
                  <th className="px-4 py-3">नेपाली युनिकोड (Nepali Unicode)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium text-slate-700 dark:text-slate-300">
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">उपकरण आवश्यकता</td>
                  <td className="px-4 py-3 text-rose-600 dark:text-rose-400">Preeti.ttf फन्ट इन्स्टल हुनैपर्छ</td>
                  <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">कुनै फन्ट चाहिँदैन, सबै डिभाइसमा देखिन्छ</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">मोबाइल तथा फेसबुक/इन्टरनेट</td>
                  <td className="px-4 py-3">बिग्रिएर अनौठो अंग्रेजी अक्षर (Garbled) देखिन्छ</td>
                  <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">मोबाइल, सोसल मिडियामा १००% प्रष्ट देखिन्छ</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">गुगल सर्च इन्जिन (SEO)</td>
                  <td className="px-4 py-3">गुगलले खोज्न वा पढ्न सक्दैन</td>
                  <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">गुगलले नेपाली शब्द सहजै इन्डेक्स गर्छ</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">सरकारी अनलाइन प्रणाली</td>
                  <td className="px-4 py-3">लोक सेवा आयोग, मालपोतमा अमान्य</td>
                  <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">नेपाल सरकारको आधिकारिक अनलाइन मापदण्ड</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key Keystrokes Table */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Keyboard className="w-4 h-4 text-emerald-600" />
              <span>प्रीति फन्टका प्रमुख की-म्यापिङ अक्षरहरू (Quick Reference):</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex justify-between">
                <span className="text-slate-500">k</span> <span className="font-bold text-emerald-600 text-sm">क</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex justify-between">
                <span className="text-slate-500">v</span> <span className="font-bold text-emerald-600 text-sm">म</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex justify-between">
                <span className="text-slate-500">l</span> <span className="font-bold text-emerald-600 text-sm">ता</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex justify-between">
                <span className="text-slate-500">s</span> <span className="font-bold text-emerald-600 text-sm">क</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex justify-between">
                <span className="text-slate-500">[</span> <span className="font-bold text-emerald-600 text-sm">ृ</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex justify-between">
                <span className="text-slate-500">&#123;</span> <span className="font-bold text-emerald-600 text-sm">र्</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex justify-between">
                <span className="text-slate-500">/</span> <span className="font-bold text-emerald-600 text-sm">र</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex justify-between">
                <span className="text-slate-500">`</span> <span className="font-bold text-emerald-600 text-sm">ँ</span>
              </div>
            </div>
          </div>
        </section>

        {/* ❓ FREQUENTLY ASKED QUESTIONS SECTION */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              बारम्बार सोधिने प्रश्नहरू (Frequently Asked Questions)
            </h2>
          </div>

          <div className="space-y-3 pt-1">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  Q: {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-3.5 border-l-2 border-emerald-500">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 🔗 RELATED TOOLS CTA */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800/60 space-y-3">
          <h3 className="font-black text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
            <span>🛠️</span>
            <span>सम्बन्धित अन्य उपयोगी डिजिटल टुल्सहरू:</span>
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            दैनिक कागजात तयारी, कम्प्रेस तथा नापी कार्यका लागि तलका टुल्सहरू चलाउनुहोस्:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            <Link
              href="/tools/image-compressor"
              className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700/60 text-center hover:shadow-xs hover:scale-[1.02] transition-all"
            >
              <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">फोटो कम्प्रेसर</p>
              <p className="text-[10px] text-slate-500">&lt; २०० KB सरकारी फारम</p>
            </Link>
            <Link
              href="/tools/number-to-words"
              className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700/60 text-center hover:shadow-xs hover:scale-[1.02] transition-all"
            >
              <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">संख्या अक्षरेपी</p>
              <p className="text-[10px] text-slate-500">चेक/तमसुक रकम रूपान्तरक</p>
            </Link>
            <Link
              href="/tools/images-to-pdf"
              className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700/60 text-center hover:shadow-xs hover:scale-[1.02] transition-all"
            >
              <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">फोटोबाट PDF</p>
              <p className="text-[10px] text-slate-500">नागरिकता/पुर्जा PDF बनाउने</p>
            </Link>
            <Link
              href="/tools/land-calculator"
              className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700/60 text-center hover:shadow-xs hover:scale-[1.02] transition-all"
            >
              <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">जग्गा क्याल्कुलेटर</p>
              <p className="text-[10px] text-slate-500">रोपनी ⇄ बिघा ⇄ आना</p>
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
