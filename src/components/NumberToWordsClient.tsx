'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import BilingualSwitchBanner from '@/components/BilingualSwitchBanner';
import {
  Copy,
  Check,
  Sparkles,
  ArrowLeft,
  FileCheck2,
  BookOpen,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';
import { numberToNepaliWords, numberToEnglishWords, formatNepaliCurrency } from '@/lib/numberToWords';
import { copyToClipboard } from '@/lib/clipboard';

interface NumberToWordsClientProps {
  lang?: 'ne' | 'en';
}

export default function NumberToWordsClient({ lang = 'ne' }: NumberToWordsClientProps) {
  const isEn = lang === 'en';
  const [amount, setAmount] = useState<string>(isEn ? '10000000' : '1250000');
  const [payee, setPayee] = useState<string>(isEn ? 'Ram Bahadur Shrestha' : 'राम बहादुर श्रेष्ठ');
  const [copiedNep, setCopiedNep] = useState(false);
  const [copiedEng, setCopiedEng] = useState(false);

  const numVal = parseFloat(amount) || 0;
  const nepaliWords = numberToNepaliWords(numVal);
  const englishWords = numberToEnglishWords(numVal);
  const formattedNepDigits = formatNepaliCurrency(numVal);

  const handleCopyNep = async () => {
    const ok = await copyToClipboard(nepaliWords);
    if (ok) {
      setCopiedNep(true);
      setTimeout(() => setCopiedNep(false), 2000);
    }
  };

  const handleCopyEng = async () => {
    const ok = await copyToClipboard(englishWords);
    if (ok) {
      setCopiedEng(true);
      setTimeout(() => setCopiedEng(false), 2000);
    }
  };

  const faqs = isEn
    ? [
        {
          q: 'How much is 10 Million in Nepali Rupees in words?',
          a: '10 Million (10,000,000) equals 1 Crore (Rs. 1,00,00,000) in the Nepali and South Asian numbering system — written in Nepali as "एक करोड रुपैयाँ मात्र" and in Nepali-English cheque format as "One Crore Rupees Only".',
        },
        {
          q: 'How much is 1 Million in Nepali Rupees?',
          a: '1 Million (1,000,000) equals 10 Lakh (Rs. 10,00,000) in Nepal. Similarly, 100 Million equals 10 Crore (Rs. 10,00,00,000), and 1 Billion equals 1 Arab (Rs. 1,00,00,00,000).',
        },
        {
          q: 'Which format is required for Malpot land deeds vs Nepal bank cheques?',
          a: 'Nepali commercial banks accept English words ("Only" at the end) or Nepali Devanagari words on cheques. However, Malpot (Land Revenue) registration deeds and Tamasuk contracts officially require Devanagari words ("अक्षरेपी ... रुपैयाँ मात्र").',
        },
        {
          q: 'Does this converter handle decimal paisa amounts?',
          a: 'Yes. For example, entering 25000.50 automatically converts to "Twenty Five Thousand Rupees and Fifty Paisa Only" and "पच्चीस हजार रुपैयाँ पचास पैसा मात्र".',
        },
      ]
    : [
        {
          q: 'चेक वा भौचरमा रकम लेख्दा अन्त्यमा "मात्र" वा "Only" किन लेख्नैपर्छ?',
          a: 'अन्त्यमा "मात्र" वा "Only" लेख्दा पछाडि कुनै अंक वा थप शब्द थपेर रकम कीर्ते (Fraud) गर्न मिल्दैन। यो नेपाल राष्ट्र बैंक तथा अन्तर्राष्ट्रिय बैंकिङ कानुन बमोजिम अनिवार्य गरिएको सुरक्षा मापदण्ड हो।',
        },
        {
          q: 'नेपालको १ करोड बराबर अन्तर्राष्ट्रिय प्रणालीमा कति मिलियन हुन्छ?',
          a: 'नेपाल तथा दक्षिण एसियाली संख्या प्रणालीमा १ करोड बराबर अन्तर्राष्ट्रिय प्रणालीमा १० मिलियन (10 Million = 10,000,000) हुन्छ। त्यसैगरी १० लाख बराबर १ मिलियन (1 Million = 1,000,000) हुन्छ।',
        },
        {
          q: 'मालपोतको लिखत (तमसुक) मा थैली अंक अक्षरमा लेख्दा कुन भाषा मान्य हुन्छ?',
          a: 'नेपालको मुलुकी देवानी संहिता अनुसार मालपोत कार्यालयमा जग्गा पास गर्दा थैली अंक नेपाली देवनागरी लिपीमा (जस्तै: अक्षरेपी पचास लाख रुपैयाँ मात्र) लेखिनु अनिवार्य हुन्छ।',
        },
        {
          q: 'के यो टुलले दशमलव पछिको पैसा (Cents/Paisa) पनि अक्षरमा रूपान्तरण गर्छ?',
          a: 'हो, यदि तपाईंले रु. २५,०००.५० प्रविष्ट गर्नुभयो भने यसले शुद्ध रूपमा "पच्चीस हजार रुपैयाँ पचास पैसा मात्र" (Twenty Five Thousand Rupees and Fifty Paisa Only) स्वतः तयार गर्दछ।',
        },
      ];

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const jsonLdApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: isEn
      ? 'Nepali Rupees Number to Words Converter (Lakh, Crore & Million)'
      : 'नेपाली संख्या अक्षरेपी क्यालकुलेटर (Nepali Number to Words Converter)',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    inLanguage: isEn ? 'en' : 'ne',
    url: isEn
      ? 'https://www.brbhatta.com/en/tools/number-to-words'
      : 'https://www.brbhatta.com/tools/number-to-words',
    description:
      'Convert currency numbers into Nepali words (अक्षरेपी लाख/करोड) and English words for bank cheques, vouchers, and land revenue deeds.',
  };

  const presets = isEn
    ? [
        { val: 100000, label: '1 Lakh (100K)' },
        { val: 500000, label: '5 Lakh' },
        { val: 1000000, label: '1 Million (10 Lakh)' },
        { val: 2500000, label: '25 Lakh' },
        { val: 5000000, label: '50 Lakh' },
        { val: 10000000, label: '10 Million (1 Crore)' },
        { val: 100000000, label: '100 Million (10 Crore)' },
        { val: 1000000000, label: '1 Billion (1 Arab)' },
      ]
    : [
        { val: 50000, label: '५० हजार' },
        { val: 100000, label: '१ लाख' },
        { val: 500000, label: '५ लाख' },
        { val: 1000000, label: '१० लाख (1 Million)' },
        { val: 2500000, label: '२५ लाख' },
        { val: 5000000, label: '५० लाख' },
        { val: 10000000, label: '१ करोड (10 Million)' },
        { val: 100000000, label: '१० करोड (100 Million)' },
      ];

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

      <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Link href={isEn ? '/en' : '/tools'} className="hover:text-emerald-600 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isEn ? 'English Tools Hub' : 'सबै टूल्सहरू (All Tools)'}</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-semibold">
            {isEn ? 'Nepali Number to Words Converter' : 'नेपाली संख्या अक्षरेपी क्यालकुलेटर'}
          </span>
        </div>

        <BilingualSwitchBanner
          mode={isEn ? 'to-ne' : 'to-en'}
          href={isEn ? '/tools/number-to-words' : '/en/tools/number-to-words'}
        />

        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>
              {isEn
                ? 'Nepal Banking Cheques, Million-to-Crore & Malpot Deeds'
                : 'बैंक चेक, भौचर तथा मालपोत लिखत विशेष'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {isEn
              ? 'Number to Nepali Rupees in Words (Lakhs, Crores & Millions)'
              : 'नेपाली संख्या अक्षरेपी क्यालकुलेटर (Number to Words)'}
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {isEn
              ? 'Instantly convert any amount—such as 1 Million (10 Lakh) or 10 Million (1 Crore)—into Nepali Rupees English words, official Devanagari words (अक्षरेपी), and a live bank cheque preview.'
              : 'अंकमा रकम टाइप गर्नुहोस् र तुरुन्तै शुद्ध नेपाली शब्द (अक्षेरुपी), अंग्रेजी शब्द र चेक/भौचर ढाँचामा प्राप्त गर्नुहोस्।'}
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 min-h-[300px]">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>
                {isEn
                  ? 'Enter Amount in Digits (NPR / Rupees):'
                  : 'रकम अंकमा प्रविष्ट गर्नुहोस् (Enter Amount in Digits):'}
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm">
                {isEn ? `Rs. ${formattedNepDigits} /-` : `रु. ${formattedNepDigits} /-`}
              </span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 font-bold text-lg">
                Rs.
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="e.g. 10000000"
                className="w-full pl-14 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-xl sm:text-2xl font-black text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-mono"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 mr-1">
              {isEn ? 'Quick Presets:' : 'द्रुत रकम छनोट:'}
            </span>
            {presets.map((item) => (
              <button
                key={item.val}
                type="button"
                onClick={() => setAmount(item.val.toString())}
                className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-700 text-xs font-bold text-slate-600 dark:text-slate-300 transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="p-5 rounded-2xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-200/80 dark:border-sky-900/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-900 dark:text-sky-300 uppercase tracking-wider">
                  {isEn ? 'Nepali Rupees in English Words:' : 'अंग्रेजी शब्दमा (In English Words):'}
                </span>
                <button
                  onClick={handleCopyEng}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all shadow-2xs cursor-pointer"
                >
                  {copiedEng ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEng ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-sky-200/60 dark:border-sky-800/40 text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed select-all font-mono">
                {englishWords}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider">
                  {isEn ? 'Nepali Devanagari Words (अक्षरेपी):' : 'शुद्ध नेपाली अक्षरेपी (Nepali Words):'}
                </span>
                <button
                  onClick={handleCopyNep}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-2xs cursor-pointer"
                >
                  {copiedNep ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedNep ? (isEn ? 'Copied!' : 'कपी भयो!') : (isEn ? 'Copy' : 'कपी')}</span>
                </button>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200/60 dark:border-emerald-800/40 text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed select-all">
                {nepaliWords}
              </div>
            </div>
          </div>
        </div>

        {/* Cheque Preview */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-50/60 via-amber-100/30 to-amber-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 border-2 border-dashed border-amber-300 dark:border-slate-700 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-200 dark:border-slate-700 pb-3">
            <div className="flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-amber-700 dark:text-amber-400" />
              <h3 className="text-sm font-bold text-amber-900 dark:text-amber-200">
                {isEn ? 'Nepal Bank Cheque Preview' : 'बैंक चेक नमुना (Bank Cheque Preview)'}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">
                {isEn ? 'Payee Name:' : 'पाउनेको नाम (Payee):'}
              </span>
              <input
                type="text"
                value={payee}
                onChange={(e) => setPayee(e.target.value)}
                placeholder="Payee Name"
                className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-xs font-bold text-slate-800 dark:text-white focus:outline-none"
              />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-amber-200 dark:border-slate-800 shadow-sm space-y-4 font-serif">
            <div className="flex justify-between items-start">
              <div className="space-y-0.5">
                <span className="text-base font-black tracking-widest text-slate-800 dark:text-white">
                  NEPAL COMMERCIAL BANK
                </span>
                <span className="block text-[10px] text-slate-400 uppercase">Kathmandu Main Branch</span>
              </div>
              <div className="text-right text-xs font-mono text-slate-600 dark:text-slate-300 border px-2 py-1 rounded">
                Date: {new Date().toISOString().split('T')[0]}
              </div>
            </div>

            <div className="pt-2 flex items-baseline gap-3 border-b border-slate-300 dark:border-slate-700 pb-1.5">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400 shrink-0">Pay:</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                {payee || '...................................................'}
              </span>
              <span className="text-xs text-slate-400 ml-auto">or Bearer</span>
            </div>

            <div className="pt-2 flex items-baseline gap-3 border-b border-slate-300 dark:border-slate-700 pb-1.5">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400 shrink-0">Rupees:</span>
              <span className="text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-400 leading-relaxed">
                {englishWords}
              </span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="text-[11px] text-slate-400">A/C No: 01234567890123</div>
              <div className="px-4 py-2 rounded-xl bg-amber-50 dark:bg-slate-900 border-2 border-amber-400 dark:border-amber-600 text-base sm:text-lg font-black text-slate-900 dark:text-white font-mono">
                Rs. {formattedNepDigits} /-
              </div>
            </div>
          </div>
        </div>

        {/* Educational Guide */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-3">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              {isEn
                ? 'Nepali Numbering System (Lakh, Crore, Arab) vs International (Million, Billion)'
                : 'नेपाली संख्या प्रणाली (Lakh, Crore) र अन्तर्राष्ट्रिय प्रणाली (Million, Billion) तुलना'}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {isEn
              ? 'Nepal uses the 2-digit comma grouping after the first three digits (e.g., 1,00,00,000 for 1 Crore), whereas international banking uses 3-digit grouping (10,000,000 for 10 Million). Use the table below to avoid errors on cheques and remittances:'
              : 'नेपाल, भारत र दक्षिण एसियामा २-२ अंकको अल्पविराम (Comma) प्रणाली प्रयोग गरिन्छ भने अन्तर्राष्ट्रिय बैंकिङमा ३-३ अंकको (Million/Billion) प्रणाली प्रयोग गरिन्छ। तलको तुलनात्मक तालिकाले दुवै प्रणाली बुझ्न मद्दत गर्दछ:'}
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="px-4 py-3">{isEn ? 'Nepali Format' : 'संख्या (अंकमा)'}</th>
                  <th className="px-4 py-3">{isEn ? 'Nepali / South Asian' : 'नेपाली पद्धति (South Asian)'}</th>
                  <th className="px-4 py-3">{isEn ? 'International Equivalent' : 'अन्तर्राष्ट्रिय पद्धति (International)'}</th>
                  <th className="px-4 py-3">{isEn ? 'Zeros' : 'शून्यको संख्या (Zeros)'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="px-4 py-3 font-mono font-bold">1,00,000</td>
                  <td className="px-4 py-3 font-bold text-emerald-700 dark:text-emerald-400">1 Lakh (१ लाख)</td>
                  <td className="px-4 py-3 font-mono">100 Thousand</td>
                  <td className="px-4 py-3">5 Zeros (10⁵)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono font-bold">10,00,000</td>
                  <td className="px-4 py-3 font-bold text-emerald-700 dark:text-emerald-400">10 Lakh (१० लाख)</td>
                  <td className="px-4 py-3 font-mono font-bold text-sky-600 dark:text-sky-400">1 Million</td>
                  <td className="px-4 py-3">6 Zeros (10⁶)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono font-bold">1,00,00,000</td>
                  <td className="px-4 py-3 font-bold text-emerald-700 dark:text-emerald-400">1 Crore (१ करोड)</td>
                  <td className="px-4 py-3 font-mono font-bold text-sky-600 dark:text-sky-400">10 Million</td>
                  <td className="px-4 py-3">7 Zeros (10⁷)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono font-bold">10,00,00,000</td>
                  <td className="px-4 py-3 font-bold text-emerald-700 dark:text-emerald-400">10 Crore (१० करोड)</td>
                  <td className="px-4 py-3 font-mono">100 Million</td>
                  <td className="px-4 py-3">8 Zeros (10⁸)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono font-bold">1,00,00,00,000</td>
                  <td className="px-4 py-3 font-bold text-emerald-700 dark:text-emerald-400">1 Arab (१ अर्ब)</td>
                  <td className="px-4 py-3 font-mono font-bold text-sky-600 dark:text-sky-400">1 Billion</td>
                  <td className="px-4 py-3">9 Zeros (10⁹)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>
                {isEn
                  ? '4 Essential Rules for Writing Nepal Bank Cheques & Deeds'
                  : 'बैंक चेक तथा जग्गाको तमसुक लेख्दा ध्यान दिनुपर्ने ४ नियमहरू:'}
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 block">
                  {isEn ? '1. Always End With "Only" or "मात्र"' : '१. अन्त्यमा सधैँ \'मात्र\' वा \'Only\' लेख्नुहोस्'}
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isEn
                    ? 'Draw a horizontal line immediately after writing "Only" so no one can append extra digits or words.'
                    : 'शब्द लेखिसकेपछि पछाडि खाली ठाउँ भएमा तेर्सो धर्को (Slash/Line) तानिदिनुहोस् ताकि कसैले पछाडि थप रकम लेख्न नसकोस्।'}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 block">
                  {isEn ? '2. Wrap Digits with "Rs." and "/-"' : '२. अंकमा लेख्दा /- चिन्ह अनिवार्य लगाउनुहोस्'}
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isEn
                    ? 'Writing Rs. before and /- after the digits prevents alteration on both sides of the amount box.'
                    : 'अंक लेख्दा अगाडि \'Rs.\' वा \'रु.\' र पछाडि \'/-\' लेख्नाले रकमको अगाडि वा पछाडि कुनै अंक थप्ने जोखिम बन्द हुन्छ।'}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 block">
                  {isEn ? '3. Words & Figures Must Match 100%' : '३. अंक र अक्षरको रकम शतप्रतिशत मिल्नुपर्छ'}
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isEn
                    ? 'If numeric figures and written words mismatch, banks typically reject/return the cheque.'
                    : 'यदि अंकमा र अक्षरमा लेखिएको रकम फरक परेमा बैंकले अक्षरमा लेखिएको रकमलाई मान्यता दिन्छ वा चेक अस्वीकार (Bounce) गर्दछ।'}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 block">
                  {isEn ? '4. Zero Overwriting or Correction Fluid' : '४. केरमेट भएको चेक बैंकले स्वीकार गर्दैन'}
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isEn
                    ? 'Under Nepal Rastra Bank cheque clearing rules, any alteration or correction on amount fields leads to automatic rejection.'
                    : 'अक्षर वा अंकमा सामान्य केरमेट भएमा पनि काउन्टरबाट चेक पास हुँदैन। केरमेट भएको खण्डमा नयाँ चेक काट्नु सुरक्षित हुन्छ।'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              {isEn ? 'Frequently Asked Questions (FAQ)' : 'बारम्बार सोधिने प्रश्नहरू (Frequently Asked Questions)'}
            </h2>
          </div>

          <div className="space-y-3 pt-1">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1.5"
              >
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

        {/* Related Tools */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800/60 space-y-3">
          <h3 className="font-black text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
            <span>🪙</span>
            <span>
              {isEn
                ? 'Related Financial & Land Calculators for Nepal:'
                : 'सम्बन्धित मालपोत तथा वित्तीय डिजिटल क्याल्कुलेटरहरू:'}
            </span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            <Link
              href={isEn ? '/en/tools/malpot-calculator' : '/tools/malpot-calculator'}
              className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700/60 text-center hover:shadow-xs hover:scale-[1.02] transition-all"
            >
              <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                {isEn ? 'Malpot Tax Calculator' : 'मालपोत तथा कर'}
              </p>
              <p className="text-[10px] text-slate-500">
                {isEn ? 'Registration & CGT' : 'रजिष्ट्रेसन र CGT लाभकर'}
              </p>
            </Link>
            <Link
              href={isEn ? '/en/tools/land-calculator' : '/tools/land-calculator'}
              className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700/60 text-center hover:shadow-xs hover:scale-[1.02] transition-all"
            >
              <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                {isEn ? 'Land Unit Converter' : 'जग्गा क्याल्कुलेटर'}
              </p>
              <p className="text-[10px] text-slate-500">
                {isEn ? 'Ropani ⇄ Bigha ⇄ SqFt' : 'रोपनी ⇄ बिघा ⇄ आना'}
              </p>
            </Link>
            <Link
              href={isEn ? '/en/tools/kitta-kat-checker' : '/tools/kitta-kat-checker'}
              className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700/60 text-center hover:shadow-xs hover:scale-[1.02] transition-all"
            >
              <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                {isEn ? 'Kitta Kat Checker' : 'कित्ताकाट चेकर'}
              </p>
              <p className="text-[10px] text-slate-500">
                {isEn ? 'Minimum Area Rules' : 'भू-उपयोग मापदण्ड'}
              </p>
            </Link>
            <Link
              href="/tools/preeti-to-unicode"
              className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700/60 text-center hover:shadow-xs hover:scale-[1.02] transition-all"
            >
              <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">Preeti ⇄ Unicode</p>
              <p className="text-[10px] text-slate-500">
                {isEn ? 'Nepali Font Converter' : 'नेपाली फन्ट रूपान्तरक'}
              </p>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
