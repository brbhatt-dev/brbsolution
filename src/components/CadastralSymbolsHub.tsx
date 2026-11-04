'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  CADASTRAL_SYMBOLS, 
  MAP_SCALES, 
  SHEET_NUMBER_GUIDE, 
  TRIG_CONTROL_POINTS, 
  CADASTRAL_SYMBOLS_FAQS,
  CadastralSymbol,
  MapScaleOption
} from '@/data/cadastralSymbolsData';
import { 
  Compass, 
  Ruler, 
  Search, 
  Layers, 
  ShieldCheck, 
  AlertTriangle, 
  HelpCircle, 
  ExternalLink, 
  MapPin, 
  Info,
  ChevronDown,
  ChevronUp,
  Landmark,
  Calculator,
  CheckCircle2,
  FileText,
  Building2,
  TreePine,
  Sparkles
} from 'lucide-react';

// Custom SVG visual renderer for official cadastral symbols
const CadastralSvgIcon: React.FC<{ type: string; color: string }> = ({ type, color }) => {
  switch (type) {
    case 'pillar-main':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 drop-shadow-sm">
          <circle cx="40" cy="40" r="32" fill="#fef2f2" stroke="#dc2626" strokeWidth="3" />
          <polygon points="40,16 60,56 20,56" fill="#dc2626" />
          <circle cx="40" cy="43" r="5" fill="#ffffff" />
          <text x="40" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#dc2626">BP-1</text>
        </svg>
      );
    case 'pillar-secondary':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 drop-shadow-sm">
          <circle cx="40" cy="40" r="30" fill="#fff7ed" stroke="#ea580c" strokeWidth="2.5" />
          <circle cx="40" cy="40" r="18" fill="#ea580c" />
          <circle cx="40" cy="40" r="6" fill="#ffffff" />
        </svg>
      );
    case 'parcel-corner':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 drop-shadow-sm">
          <line x1="20" y1="40" x2="60" y2="40" stroke="#0284c7" strokeWidth="3" />
          <line x1="40" y1="20" x2="40" y2="60" stroke="#0284c7" strokeWidth="3" />
          <circle cx="40" cy="40" r="10" fill="#0284c7" />
          <circle cx="40" cy="40" r="3" fill="#ffffff" />
        </svg>
      );
    case 'road-paved':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 rounded-lg bg-slate-100 dark:bg-slate-800 p-1">
          <rect x="15" y="10" width="50" height="60" fill="#334155" rx="4" />
          <line x1="15" y1="10" x2="15" y2="70" stroke="#dc2626" strokeWidth="2.5" />
          <line x1="65" y1="10" x2="65" y2="70" stroke="#dc2626" strokeWidth="2.5" />
          <line x1="40" y1="15" x2="40" y2="28" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="6,4" />
          <line x1="40" y1="36" x2="40" y2="49" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="6,4" />
          <line x1="40" y1="57" x2="40" y2="68" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="6,4" />
        </svg>
      );
    case 'road-gravel':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 rounded-lg bg-amber-50 dark:bg-amber-950/40 p-1">
          <rect x="18" y="10" width="44" height="60" fill="#fef3c7" stroke="#d97706" strokeWidth="2" strokeDasharray="4,3" rx="3" />
          <circle cx="28" cy="25" r="2.5" fill="#b45309" />
          <circle cx="45" cy="35" r="3" fill="#92400e" />
          <circle cx="33" cy="50" r="2" fill="#b45309" />
          <circle cx="52" cy="55" r="2.5" fill="#78350f" />
        </svg>
      );
    case 'trail-dashed':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 rounded-lg bg-stone-100 dark:bg-stone-800 p-1">
          <path d="M 20,65 Q 35,45 25,30 T 60,15" fill="none" stroke="#854d0e" strokeWidth="3.5" strokeDasharray="6,5" strokeLinecap="round" />
          <text x="40" y="72" textAnchor="middle" fontSize="9" fill="#854d0e" fontWeight="bold">गोरेटो</text>
        </svg>
      );
    case 'access-passage':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 p-1">
          <rect x="22" y="15" width="36" height="50" fill="#d1fae5" stroke="#059669" strokeWidth="2.5" />
          <path d="M 40,25 L 40,55 M 34,45 L 40,55 L 46,45" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'water-river':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 rounded-lg bg-sky-50 dark:bg-sky-950/40 p-1">
          <path d="M 15,20 Q 40,10 65,25 Q 40,40 65,55 Q 40,70 15,60" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2.5" />
          <path d="M 20,38 Q 40,30 60,42" fill="none" stroke="#0369a1" strokeWidth="2" strokeDasharray="5,3" />
        </svg>
      );
    case 'water-canal':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 p-1">
          <line x1="22" y1="12" x2="22" y2="68" stroke="#0891b2" strokeWidth="3" />
          <line x1="58" y1="12" x2="58" y2="68" stroke="#0891b2" strokeWidth="3" />
          <line x1="40" y1="20" x2="40" y2="60" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4,4" />
          <polygon points="40,55 35,45 45,45" fill="#0891b2" />
        </svg>
      );
    case 'water-pond':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 drop-shadow-sm">
          <ellipse cx="40" cy="40" rx="30" ry="22" fill="#cffafe" stroke="#0891b2" strokeWidth="2.5" />
          <path d="M 25,40 Q 32,36 40,40 Q 48,44 55,40" fill="none" stroke="#0284c7" strokeWidth="2" />
        </svg>
      );
    case 'building-permanent':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 drop-shadow-sm">
          <rect x="18" y="18" width="44" height="44" fill="#fee2e2" stroke="#dc2626" strokeWidth="2.5" />
          <line x1="18" y1="32" x2="62" y2="32" stroke="#dc2626" strokeWidth="1.5" />
          <line x1="18" y1="48" x2="62" y2="48" stroke="#dc2626" strokeWidth="1.5" />
          <line x1="32" y1="18" x2="32" y2="62" stroke="#dc2626" strokeWidth="1.5" />
          <line x1="48" y1="18" x2="48" y2="62" stroke="#dc2626" strokeWidth="1.5" />
        </svg>
      );
    case 'building-hut':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 drop-shadow-sm">
          <polygon points="40,16 65,34 15,34" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
          <rect x="22" y="34" width="36" height="30" fill="#fff7ed" stroke="#ea580c" strokeWidth="2" />
        </svg>
      );
    case 'wall-compound':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 rounded-lg bg-slate-100 dark:bg-slate-800 p-1">
          <line x1="12" y1="40" x2="68" y2="40" stroke="#334155" strokeWidth="5" />
          <line x1="24" y1="32" x2="24" y2="48" stroke="#334155" strokeWidth="3" />
          <line x1="40" y1="32" x2="40" y2="48" stroke="#334155" strokeWidth="3" />
          <line x1="56" y1="32" x2="56" y2="48" stroke="#334155" strokeWidth="3" />
        </svg>
      );
    case 'religious-temple':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 drop-shadow-sm">
          <polygon points="40,12 58,35 22,35" fill="#fef3c7" stroke="#b45309" strokeWidth="2" />
          <rect x="26" y="35" width="28" height="28" fill="#fef3c7" stroke="#b45309" strokeWidth="2" />
          <line x1="40" y1="8" x2="40" y2="15" stroke="#b45309" strokeWidth="2" />
          <circle cx="40" cy="7" r="2.5" fill="#dc2626" />
        </svg>
      );
    case 'religious-gumba':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 drop-shadow-sm">
          <rect x="20" y="52" width="40" height="14" fill="#ffedd5" stroke="#d97706" strokeWidth="2" />
          <ellipse cx="40" cy="42" rx="18" ry="12" fill="#fed7aa" stroke="#d97706" strokeWidth="2" />
          <polygon points="40,16 45,30 35,30" fill="#d97706" />
        </svg>
      );
    case 'public-school':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 drop-shadow-sm">
          <rect x="18" y="26" width="44" height="38" fill="#eff6ff" stroke="#2563eb" strokeWidth="2.5" />
          <line x1="40" y1="12" x2="40" y2="26" stroke="#2563eb" strokeWidth="2.5" />
          <polygon points="40,14 55,19 40,24" fill="#ef4444" />
          <line x1="40" y1="36" x2="40" y2="52" stroke="#2563eb" strokeWidth="2" />
          <line x1="32" y1="44" x2="48" y2="44" stroke="#2563eb" strokeWidth="2" />
        </svg>
      );
    case 'utility-hightension':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 rounded-lg bg-purple-50 dark:bg-purple-950/40 p-1">
          <line x1="20" y1="20" x2="60" y2="20" stroke="#7c3aed" strokeWidth="3" />
          <line x1="12" y1="32" x2="68" y2="32" stroke="#7c3aed" strokeWidth="3" />
          <polygon points="40,14 56,66 24,66" fill="none" stroke="#7c3aed" strokeWidth="2.5" />
          <line x1="30" y1="48" x2="50" y2="48" stroke="#7c3aed" strokeWidth="2" />
          <circle cx="40" cy="48" r="4" fill="#ef4444" />
        </svg>
      );
    case 'utility-pole':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 drop-shadow-sm">
          <circle cx="40" cy="40" r="16" fill="#f5f3ff" stroke="#6d28d9" strokeWidth="3" />
          <line x1="40" y1="28" x2="40" y2="52" stroke="#6d28d9" strokeWidth="2.5" />
          <line x1="28" y1="40" x2="52" y2="40" stroke="#6d28d9" strokeWidth="2.5" />
        </svg>
      );
    case 'topo-forest':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 p-1">
          <polygon points="40,15 56,36 47,36 58,54 22,54 33,36 24,36" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
          <rect x="37" y="54" width="6" height="12" fill="#78350f" />
        </svg>
      );
    case 'topo-cliff':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 rounded-lg bg-amber-50 dark:bg-amber-950/40 p-1">
          <path d="M 15,30 Q 40,25 65,30" stroke="#78350f" strokeWidth="3" fill="none" />
          <line x1="20" y1="30" x2="18" y2="44" stroke="#78350f" strokeWidth="2" />
          <line x1="28" y1="30" x2="27" y2="48" stroke="#78350f" strokeWidth="2" />
          <line x1="36" y1="29" x2="35" y2="42" stroke="#78350f" strokeWidth="2" />
          <line x1="45" y1="28" x2="45" y2="49" stroke="#78350f" strokeWidth="2" />
          <line x1="53" y1="29" x2="54" y2="43" stroke="#78350f" strokeWidth="2" />
          <line x1="60" y1="30" x2="62" y2="46" stroke="#78350f" strokeWidth="2" />
        </svg>
      );
    case 'line-boundary':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 rounded-lg bg-slate-100 dark:bg-slate-800 p-1">
          <line x1="12" y1="40" x2="68" y2="40" stroke="#0f172a" strokeWidth="5" />
          <circle cx="20" cy="40" r="5" fill="#0f172a" />
          <circle cx="60" cy="40" r="5" fill="#0f172a" />
        </svg>
      );
    case 'line-amended':
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16 rounded-lg bg-pink-50 dark:bg-pink-950/40 p-1">
          <line x1="12" y1="40" x2="68" y2="40" stroke="#be185d" strokeWidth="3.5" strokeDasharray="5,4" />
        </svg>
      );
    default:
      return (
        <div className="w-16 h-16 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600">
          DOS
        </div>
      );
  }
};

export default function CadastralSymbolsHub() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedScaleIndex, setSelectedScaleIndex] = useState<number>(0);
  const [measuredMm, setMeasuredMm] = useState<number>(20); // Default 20 mm on paper
  const [plotLengthMm, setPlotLengthMm] = useState<number>(25);
  const [plotWidthMm, setPlotWidthMm] = useState<number>(15);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const categories = [
    { id: 'all', labelNp: 'सबै संकेतहरू' },
    { id: 'boundary', labelNp: 'सिमाना स्तम्भ' },
    { id: 'roads', labelNp: 'सडक तथा बाटो' },
    { id: 'water', labelNp: 'जलस्रोत र कुलो' },
    { id: 'buildings', labelNp: 'घर तथा कम्पाउन्ड' },
    { id: 'public', labelNp: 'सार्वजनिक र धार्मिक' },
    { id: 'utilities', labelNp: 'विद्युत र प्रसारण' },
    { id: 'topography', labelNp: 'भू-बनोट र वन' },
    { id: 'lines', labelNp: 'कित्ता रेखाहरू' },
  ];

  const filteredSymbols = useMemo(() => {
    return CADASTRAL_SYMBOLS.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = 
        !q ||
        item.nameNp.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q) ||
        item.descriptionNp.toLowerCase().includes(q) ||
        item.legalSignificance.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Current scale
  const currentScale = MAP_SCALES[selectedScaleIndex];

  // Scale distance computation
  const groundMeters = (measuredMm * currentScale.unitMmInMeters).toFixed(2);
  const groundFeet = (measuredMm * currentScale.unitMmInFeet).toFixed(2);
  const groundHaat = (parseFloat(groundFeet) / 1.5).toFixed(1); // 1 haat = ~1.5 ft

  // Scale plot area computation
  const calcPlotArea = useMemo(() => {
    const lMeters = plotLengthMm * currentScale.unitMmInMeters;
    const wMeters = plotWidthMm * currentScale.unitMmInMeters;
    const sqMeters = lMeters * wMeters;
    const sqFeet = sqMeters * 10.7639;

    // Ropani system (1 Ropani = 5476 sq ft, 1 Aana = 342.25 sq ft, 1 Paisa = 85.56 sq ft, 1 Daam = 21.39 sq ft)
    const ropani = Math.floor(sqFeet / 5476);
    const rem1 = sqFeet % 5476;
    const aana = Math.floor(rem1 / 342.25);
    const rem2 = rem1 % 342.25;
    const paisa = Math.floor(rem2 / 85.56);
    const daam = Math.floor((rem2 % 85.56) / 21.39);

    // Bigha system (1 Bigha = 72900 sq ft, 1 Kattha = 3645 sq ft, 1 Dhur = 182.25 sq ft)
    const bigha = Math.floor(sqFeet / 72900);
    const remB1 = sqFeet % 72900;
    const kattha = Math.floor(remB1 / 3645);
    const remB2 = remB1 % 3645;
    const dhur = Math.floor(remB2 / 182.25);

    return {
      sqMeters: sqMeters.toFixed(1),
      sqFeet: sqFeet.toFixed(1),
      ropaniStr: `${ropani} रोपनी - ${aana} आना - ${paisa} पैसा - ${daam} दाम`,
      bighaStr: `${bigha} बिघा - ${kattha} कट्ठा - ${dhur} धुर`
    };
  }, [plotLengthMm, plotWidthMm, currentScale]);

  return (
    <div className="space-y-12">
      {/* Hero Notification Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
            <Sparkles className="w-4 h-4" />
            <span>नापी विभाग (DOS) आधिकारिक कार्टोग्राफिक मापदण्ड २०८१</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            नापी कित्ता नक्सा संकेत (Cadastral Legend) तथा स्केल क्यालकुलेटर
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            मेरोकित्ता (MeroKitta) वा नापी कार्यालयबाट लिएको ट्रेस नक्सामा रहेका सिमाना स्तम्भ, पक्की घर, कालोपत्रे बाटो, गोरेटो, राजकुलो, र हाइ-टेन्सन लाइनका आधिकारिक संकेतहरू बुझ्नुहोस् र १:५०० देखि १:५००० स्केलमा जग्गाको वास्तविक लम्बाइ, चौडाइ र क्षेत्रफल निकाल्नुहोस्।
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a 
              href="#symbols-directory" 
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-all shadow-md"
            >
              <Compass className="w-4 h-4" />
              <span>संकेत चिन्ह डाइरेक्टरी</span>
            </a>
            <a 
              href="#scale-calculator" 
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20"
            >
              <Ruler className="w-4 h-4" />
              <span>नापी स्केल क्यालकुलेटर</span>
            </a>
            <a 
              href="#trig-points" 
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20"
            >
              <Landmark className="w-4 h-4" />
              <span>कन्ट्रोल पोइन्ट & बेन्चमार्क</span>
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 1: INTERACTIVE SCALE & AREA CALCULATOR */}
      <section id="scale-calculator" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-1">
              <Ruler className="w-4 h-4" />
              <span>इन्जिनियरिङ टुल</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              नापी सिट स्केल तथा जग्गा नाप क्यालकुलेटर
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              कागजको नक्सामा सामान्य प्लास्टिक रुलर (फित्ता) ले नापेको मिलिमिटर (mm) राख्नुहोस्, वास्तविक जमिनको दूरी र क्षेत्रफल निस्कन्छ।
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                १. नक्साको स्केल छान्नुहोस् (Select Map Scale):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {MAP_SCALES.map((scale, idx) => (
                  <button
                    key={scale.scaleRatio}
                    onClick={() => setSelectedScaleIndex(idx)}
                    className={`p-3 rounded-xl text-left border transition-all text-xs ${
                      selectedScaleIndex === idx
                        ? 'border-emerald-600 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 shadow-sm font-bold'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="font-semibold text-sm">{scale.nameNp}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{scale.commonUsage}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Single Frontage Measurement */}
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-4 border border-slate-200 dark:border-slate-700 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-900 dark:text-white">
                  २. नक्सामा रुलरले नापिएको दूरी (mm):
                </label>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">
                  {measuredMm} mm = {(measuredMm / 10).toFixed(1)} cm
                </span>
              </div>
              
              <input
                type="range"
                min="1"
                max="100"
                value={measuredMm}
                onChange={(e) => setMeasuredMm(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />

              <div className="flex gap-3">
                <input
                  type="number"
                  min="0.1"
                  step="0.5"
                  value={measuredMm}
                  onChange={(e) => setMeasuredMm(Math.max(0.1, Number(e.target.value)))}
                  className="w-32 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm font-semibold"
                  placeholder="mm"
                />
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center">
                  (१ सेन्टिमिटर = १० मिलिमिटर हुन्छ)
                </span>
              </div>

              {/* Conversion Display Cards */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
                  <div className="text-xs text-slate-500">वास्तविक मिटर</div>
                  <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">{groundMeters} m</div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
                  <div className="text-xs text-slate-500">वास्तविक फिट</div>
                  <div className="text-lg font-extrabold text-blue-600 dark:text-blue-400">{groundFeet} ft</div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
                  <div className="text-xs text-slate-500">नेपाली हात</div>
                  <div className="text-lg font-extrabold text-amber-600 dark:text-amber-400">{groundHaat} हात</div>
                </div>
              </div>
            </div>

            {/* Area Computation from Trace Dimensions */}
            <div className="bg-emerald-50/50 dark:bg-emerald-950/20 rounded-xl p-4 border border-emerald-200 dark:border-emerald-800 space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Calculator className="w-4 h-4 text-emerald-600" />
                <span>कित्ताको लम्बाइ x चौडाइबाट कुल क्षेत्रफल</span>
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    नक्सामा लम्बाइ (mm):
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={plotLengthMm}
                    onChange={(e) => setPlotLengthMm(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm font-semibold text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    नक्सामा चौडाइ (mm):
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={plotWidthMm}
                    onChange={(e) => setPlotWidthMm(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm font-semibold text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800 space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>वर्ग फिट (Sq. Ft):</span>
                  <span className="font-bold text-slate-900 dark:text-white">{calcPlotArea.sqFeet} sq ft</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>वर्ग मिटर (Sq. M):</span>
                  <span className="font-bold text-slate-900 dark:text-white">{calcPlotArea.sqMeters} sq m</span>
                </div>
                <div className="flex justify-between text-emerald-700 dark:text-emerald-400 font-semibold pt-1 border-t border-slate-100 dark:border-slate-800">
                  <span>पहाडी नाप:</span>
                  <span className="font-bold">{calcPlotArea.ropaniStr}</span>
                </div>
                <div className="flex justify-between text-amber-700 dark:text-amber-400 font-semibold">
                  <span>तराई नाप:</span>
                  <span className="font-bold">{calcPlotArea.bighaStr}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scale Reference Table & Sheet Number Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-50 dark:bg-slate-800/40 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <Info className="w-4 h-4 text-blue-600" />
                <span>नापी सिट नम्बर बुझ्ने तरिका (Sheet Number Breakdown)</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                नापी विभागले नेपालभरिका नक्साहरूलाई MUTM प्रणाली अनुसार विशिष्ट सिट नम्बर दिएको हुन्छ:
              </p>
              <div className="space-y-3">
                {SHEET_NUMBER_GUIDE.map((item, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">{item.sheetNo}</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-400 font-semibold">
                        स्केल: {item.scale}
                      </span>
                    </div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">{item.type}</div>
                    <div className="text-slate-500 dark:text-slate-400">{item.breakdown}</div>
                    <div className="text-slate-600 dark:text-slate-300 text-[11px] pt-1">{item.explanation}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Golden Rule Callout */}
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 rounded-xl p-4 text-xs text-amber-900 dark:text-amber-200 space-y-1.5">
              <div className="font-bold flex items-center gap-2 text-sm text-amber-800 dark:text-amber-300">
                <AlertTriangle className="w-4 h-4" />
                <span>नापी ट्रेस नाप्दा ख्याल गर्नुपर्ने मुख्य नियम:</span>
              </div>
              <p className="leading-relaxed">
                कागजको नक्सा प्रिन्ट गर्दा &quot;Actual Size / 100%&quot; मा प्रिन्ट भएको हुनुपर्छ। यदि &quot;Fit to Page&quot; गरेर प्रिन्ट गरियो भने नक्साको स्केल खुम्चिन्छ र रुलरले नापेको हिसाब जमिनसँग मिल्दैन। मेरोकित्ताबाट नक्सा डाउनलोड गर्दा सधैं स्केल बार प्रमाणित गर्नुहोस्।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CADASTRAL SYMBOLS DIRECTORY */}
      <section id="symbols-directory" className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-1">
              <Compass className="w-4 h-4" />
              <span>सचित्र लेजेन्ड</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              नापी नक्साका आधिकारिक संकेत चिन्हहरू (Cadastral Legend)
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              नापी विभागको प्रमाणित नक्सा तथा ट्रेसमा देखिने प्रत्येक चिन्हको दृश्य रूप, कानुनी अर्थ र फिल्डमा अपनाउनुपर्ने सावधानी।
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="संकेत खोज्नुहोस् (उदा: बाटो, घर, कुलो)..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat.labelNp}
            </button>
          ))}
        </div>

        {/* Symbols Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSymbols.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                      {item.cadastralCode || 'DOS'}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                      {item.nameNp}
                    </h4>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {item.nameEn}
                    </div>
                  </div>
                  
                  {/* SVG Icon Display */}
                  <div className="flex-shrink-0">
                    <CadastralSvgIcon type={item.svgType} color={item.colorCode} />
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {item.descriptionNp}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="bg-red-50/70 dark:bg-red-950/20 p-2.5 rounded-lg border border-red-200/50 dark:border-red-900/30">
                  <div className="font-semibold text-red-800 dark:text-red-300 flex items-center gap-1.5 mb-1 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>कानुनी महत्व / असर:</span>
                  </div>
                  <p className="text-[11px] text-red-900/80 dark:text-red-200/90 leading-normal">
                    {item.legalSignificance}
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-700/60">
                  <div className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mb-1 text-[11px]">
                    <Info className="w-3.5 h-3.5 text-blue-500" />
                    <span>फिल्डमा जग्गाधनीले बुझ्नुपर्ने:</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-normal">
                    {item.fieldTips}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSymbols.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-600 dark:text-slate-400 font-semibold">कुनै संकेत भेटिएन।</p>
            <p className="text-xs text-slate-500 mt-1">कृपया अन्य शब्द वा श्रेणी छानेर प्रयास गर्नुहोस्।</p>
          </div>
        )}
      </section>

      {/* SECTION 3: TRIG CONTROL POINTS & BENCHMARK DIRECTORY */}
      <section id="trig-points" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-1">
            <Landmark className="w-4 h-4" />
            <span>जिओडेटिक सर्भे नेटवर्क</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
            नापी कन्ट्रोल पोइन्ट, बेन्चमार्क र CORS नेटवर्क गाइड
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            नेपालका अमिन, सर्भेयर र सिभिल इन्जिनियरहरूलाई फिल्डमा Total Station तथा DGPS सेट गर्न अनिवार्य चाहिने आधिकारिक आधार बिन्दुहरू।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TRIG_CONTROL_POINTS.map((pt, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 dark:bg-slate-800/40 rounded-xl p-5 border border-slate-200 dark:border-slate-700 space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {pt.orderNameNp}
                </h4>
                <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
                  {pt.accuracy}
                </span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {pt.orderNameEn}
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">पिल्लर बनोट: </span>
                  <span className="text-slate-600 dark:text-slate-400">{pt.pillarDesign}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">उपयोग: </span>
                  <span className="text-slate-600 dark:text-slate-400">{pt.usageNp}</span>
                </div>
                <div className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 mt-2">
                  <span className="font-semibold text-blue-600 dark:text-blue-400 block mb-0.5">
                    कोर्डिनेट लिन आधिकारिक प्रक्रिया:
                  </span>
                  <span className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                    {pt.howToRequest}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: HOW TO READ YOUR MEROKITTA TRACE STEP-BY-STEP */}
      <section className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-2xl p-6 md:p-8 space-y-6">
        <div>
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            व्यावहारिक नागरिक गाइड
          </span>
          <h3 className="text-xl md:text-2xl font-bold mt-1">
            मेरोकित्ताको नक्सा (ट्रेस) हेर्दा जाँच्नुपर्ने ५ मुख्य कुराहरू
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-white/10 rounded-xl p-4 border border-white/10 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 text-white font-extrabold flex items-center justify-center text-sm">
              १
            </div>
            <h5 className="font-bold text-sm text-white">उत्तर दिशा (North Arrow)</h5>
            <p className="text-slate-300 leading-relaxed">
              नक्साको दायाँ वा बायाँ माथिल्लो कुनामा तीर चिन्ह (↑ N) हुन्छ। नक्सालाई सधैं जमिनको उत्तर दिशासँग समानान्तर मिलाएर हेर्नुपर्छ।
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-4 border border-white/10 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 text-white font-extrabold flex items-center justify-center text-sm">
              २
            </div>
            <h5 className="font-bold text-sm text-white">कित्ता नम्बर र साँध-सिमाना</h5>
            <p className="text-slate-300 leading-relaxed">
              आफ्नो कित्ता नम्बरको चारैतिर पूर्व, पश्चिम, उत्तर, दक्षिणमा कुन-कुन कित्ता नम्बरहरू छन् स्पष्ट टिपोट गर्नुहोस् र लालपुर्जासँग भिडाउनुहोस्।
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-4 border border-white/10 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 text-white font-extrabold flex items-center justify-center text-sm">
              ३
            </div>
            <h5 className="font-bold text-sm text-white">बाटोको कित्ता कि निजी जग्गा?</h5>
            <p className="text-slate-300 leading-relaxed">
              जग्गाअगाडिको बाटोमा छुट्टै सार्वजनिक कित्ता नम्बर छ कि छिमेकीको निजी जग्गामै बाटो बनाइएको छ यकिन गर्नुहोस्।
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-4 border border-white/10 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 text-white font-extrabold flex items-center justify-center text-sm">
              ४
            </div>
            <h5 className="font-bold text-sm text-white">कुलो वा खोलाको सेटब्याक</h5>
            <p className="text-slate-300 leading-relaxed">
              यदि नक्सामा खोला वा राजकुलोको रेखा जोडिएको छ भने स्थानीय नगरपालिकाको नियम अनुसार ३ देखि २० मिटरसम्म जग्गा छोड्नुपर्ने हुन सक्छ।
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-4 border border-white/10 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 text-white font-extrabold flex items-center justify-center text-sm">
              ५
            </div>
            <h5 className="font-bold text-sm text-white">विद्युत हाइ-टेन्सन लाइन</h5>
            <p className="text-slate-300 leading-relaxed">
              नक्सामा हाइ-टेन्सन प्रसारण लाइनको रेखा छ भने बैंकले धितो नलिने र घर बनाउन नक्सा पास नहुने उच्च जोखिम रहन्छ।
            </p>
          </div>

          <div className="bg-emerald-500/20 rounded-xl p-4 border border-emerald-400/30 flex flex-col justify-between">
            <div>
              <h5 className="font-bold text-sm text-emerald-300 mb-1">मेरोकित्ताबाट नक्सा निकाल्नुहोस्</h5>
              <p className="text-slate-200 text-[11px] leading-relaxed">
                घरमै बसी अनलाइनबाट आफ्नो कित्ताको डिजिटल नक्सा (Trace) र फिल्डबुक डाउनलोड गर्न हाम्रो गाइड हेर्नुहोस्।
              </p>
            </div>
            <Link 
              href="/tools/merokitta-online-naksa"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white"
            >
              <span>मेरोकित्ता नक्सा गाइड हेर्नुहोस्</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQS */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            नापी नक्सा र संकेत सम्बन्धी बारम्बार सोधिने प्रश्नहरू (FAQs)
          </h3>
        </div>

        <div className="space-y-3">
          {CADASTRAL_SYMBOLS_FAQS.map((faq, idx) => (
            <div 
              key={idx}
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-slate-100/50 dark:hover:bg-slate-800/80 transition-colors"
              >
                <span className="font-semibold text-slate-900 dark:text-white text-sm">
                  {faq.qNp}
                </span>
                {activeFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {activeFaq === idx && (
                <div className="p-4 bg-white dark:bg-slate-900 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800">
                  {faq.aNp}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
