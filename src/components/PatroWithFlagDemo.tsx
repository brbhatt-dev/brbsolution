'use client';

import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Moon, 
  Sun, 
  Sparkles, 
  Wind, 
  Eye, 
  Check, 
  Layers, 
  Heart,
  Mountain,
  Compass,
  Crown,
  Flame,
  ShieldCheck
} from 'lucide-react';
import { getNepaliCalendarDetails, NepaliCalendarDetails } from '@/lib/nepaliDate';
import UpcomingFestivalsBar from './UpcomingFestivalsBar';
import FlutteringNepalFlag, { NepalFlagVariant } from './FlutteringNepalFlag';
import LandSolutionWavingFlag from './LandSolutionWavingFlag';

interface FlagOptionItem {
  id: NepalFlagVariant;
  name: string;
  subtitle: string;
  tag: string;
  badgeColor: string;
  description: string;
}

const FLAG_OPTIONS: FlagOptionItem[] = [
  {
    id: 'land-solution',
    name: '⭐ ल्याण्ड सोलुसन एपको झण्डा (Land Solution Canvas)',
    subtitle: 'Flutter patro_dashboard_widget.dart म्याथ',
    tag: 'हाम्रो एपको आधिकारिक 🇳🇵',
    badgeColor: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    description: 'हाम्रो ल्याण्ड सोलुसन मोबाइल एपमा भएको झण्डाको exact harmonic wave physics, सुनौलो खम्बा, र dynamic cloth sheen।',
  },
  {
    id: 'classic',
    name: '२. क्लासिक फरर्र झण्डा (Classic)',
    subtitle: 'सिल्भर खम्बा + सुनौलो टुप्पो',
    tag: 'लोकप्रिय ३D',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    description: 'धातुको स्टिल खम्बामा सुनौलो गजुर, गोल्डेन डोरी र प्राकृतिक ३D फरर्र कपडाको लहर।',
  },
  {
    id: 'royal-gold',
    name: '३. शाही स्वर्ण स्तम्भ (Royal Gold)',
    subtitle: 'स्वर्ण खम्बा + लाल मणि गजुर',
    tag: 'प्रिमियम लक्जरी',
    badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    description: 'पूर्ण सुनौलो पित्तलको स्तम्भ, टुप्पोमा रातो मणियुक्त गजुर र सुनौलो झुम्कासहितको भव्य रूप।',
  },
  {
    id: 'floating',
    name: '४. हावामा तैरिएको (Free Floating)',
    subtitle: 'खम्बा बिना स्वच्छ रेशम',
    tag: 'आधुनिक न्यूनतम',
    badgeColor: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
    description: 'खम्बा बिना सिधै हावाको सिरेटोमा मडारिएर तैरिने शुद्ध रेशमी झण्डा—आधुनिक इन्टरफेसका लागि उपयुक्त।',
  },
  {
    id: 'himalayan',
    name: '५. सगरमाथा सिरेटो (Himalayan Peak)',
    subtitle: 'हिमशिखर पृष्ठभूमि + चिसो हावा',
    tag: 'राष्ट्रिय स्वाभिमान',
    badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    description: 'सगरमाथाको पृष्ठभूमि, हिउँका कणहरू र नीलो आकाशीय आभासहित उच्च हिमशिखरमा फहराएको झण्डा।',
  },
  {
    id: 'glow',
    name: '६. नियन दिव्य आभा (Neon Glow)',
    subtitle: 'रातो-नीलो चहकिलो ज्योति',
    tag: 'चहकिलो डिजिटल',
    badgeColor: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
    description: 'डार्क थिममा चम्किने रातो र नीलो स्वर्गीय नियन किरणहरू (Multi-layer Glow Aura)।',
  },
];

export default function PatroWithFlagDemo() {
  const [details, setDetails] = useState<NepaliCalendarDetails>(() => getNepaliCalendarDetails(new Date()));
  const [liveTime, setLiveTime] = useState<string>('लाइभ समय...');
  const [activeFlag, setActiveFlag] = useState<NepalFlagVariant>('land-solution');
  const [windSpeed, setWindSpeed] = useState<'gentle' | 'normal' | 'strong'>('strong');
  const [flagSize, setFlagSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [selectedDemo, setSelectedDemo] = useState<'option1' | 'option2' | 'option3'>('option1');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setDetails(getNepaliCalendarDetails(now));
      setLiveTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">

      {/* ================================================================ */}
      {/* 1. DEDICATED FLAG OPTIONS GALLERY (Interactive Selector)         */}
      {/* ================================================================ */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-lg bg-red-600 text-white font-bold text-xs">🇳🇵</span>
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                नेपालको झण्डाका ६ वटा फरक विकल्पहरू (Flag Options Gallery)
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              तलका कुनै पनि झण्डामा क्लिक गर्नुहोस्—पात्रो ब्यानरमा त्यही झण्डा तुरुन्तै अपडेट हुनेछ:
            </p>
          </div>

          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>क्लिक गरेर छान्नुहोस्</span>
          </div>
        </div>

        {/* 6 Flag Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
          {FLAG_OPTIONS.map((opt) => {
            const isSelected = activeFlag === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setActiveFlag(opt.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-gradient-to-b from-red-500/10 via-emerald-500/5 to-slate-900/40 border-red-500 shadow-md ring-2 ring-red-500/30'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Active Selection Check Badge */}
                {isSelected && (
                  <span className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                )}

                {/* Live Flag Preview inside card */}
                <div className="w-full h-32 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-center p-2 mb-3 relative overflow-hidden">
                  <FlutteringNepalFlag 
                    size="sm" 
                    variant={opt.id} 
                    windSpeed={windSpeed}
                    showGlow={true}
                  />
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${opt.badgeColor}`}>
                      {opt.tag}
                    </span>
                  </div>

                  <h3 className="text-xs font-black text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {opt.name}
                  </h3>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                    {opt.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================================================================ */}
      {/* LAND SOLUTION APP EXACT WIDGET REPLICA                           */}
      {/* ================================================================ */}
      <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-[#0d111a] via-[#141720] to-[#0d111a] border border-emerald-500/30 shadow-xl space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-emerald-600 text-white font-bold text-xs">📱</span>
            <h3 className="text-sm font-black text-white flex items-center gap-1.5">
              <span>हाम्रो &quot;ल्याण्ड सोलुसन&quot; Flutter मोबाइल एपको वास्तविक विजेट</span>
              <span className="text-emerald-400 font-mono text-xs">(Exact In-App Widget)</span>
            </h3>
          </div>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30 self-start sm:self-auto">
            patro_dashboard_widget.dart बाट १००% क्यानभास म्याथ
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-around gap-6 py-2">
          {/* Exact Replica Card matching Land Solution Flutter patro_dashboard_widget.dart */}
          <div className="w-full max-w-sm rounded-2xl bg-[#141720] border border-[#222530] p-3 sm:p-4 shadow-2xl flex items-center gap-3 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            
            {/* Subtle glow inside card */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

            {/* Exact Waving Flag */}
            <div className="shrink-0 flex items-center justify-center pl-1">
              <img src="/nepal_flag.gif" alt="Nepal Flag" className="h-12 w-auto object-contain select-none" />
            </div>

            {/* Date & Time Column matching Flutter styling */}
            <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5 space-y-1">
              {/* 1. Live Time (Outfit bold) */}
              <div className="text-[15px] font-extrabold text-white font-mono tracking-wide leading-none">
                {liveTime}
              </div>

              {/* 2. BS Date (Royal Blue with Martel font) */}
              <div className="text-[13px] font-bold text-[#60A5FA] tracking-tight leading-snug">
                {details.bsYear} {details.bsMonthName} {details.bsDate} गते, {details.dayName}
              </div>

              {/* 3. Nepal Sambat & Tithi (Royal Green with Martel font) */}
              <div className="text-[11.5px] font-semibold text-[#34D399] truncate leading-tight">
                ने.सं. {details.paksha} {details.tithiName}
              </div>

              {/* 4. English Date (Slate Grey) */}
              <div className="text-[10.5px] font-medium text-[#94A3B8] leading-tight">
                {details.adDateString}
              </div>
            </div>
          </div>

          {/* Explanation Text */}
          <div className="text-xs text-slate-300 max-w-md space-y-2">
            <div className="font-bold text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>ल्याण्ड सोलुसन एपको म्याथ वेबसाइटमा जस्ताको तस्तै!</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              तपाईंको एप <code className="text-emerald-300 bg-emerald-950/80 px-1.5 py-0.5 rounded font-mono text-[10px]">patro_dashboard_widget.dart</code> मा प्रयोग भएको 
              <code className="text-amber-300 bg-amber-950/80 px-1.5 py-0.5 rounded font-mono text-[10px] ml-1">NepalFlagWavePainter</code> को multi-frequency sine wave गणित, 
              सुनौलो खम्बा (gold pole) र dynamic cloth ripples लाई HTML5 60fps Canvas मा १००% दुरुस्त उतारिएको छ।
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-emerald-400 font-semibold">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>अब तलका जुनसुकै ५०/५० ब्यानर लेआउटमा पनि यही झण्डा देखिन्छ!</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* 2. LIVE CONTROLS: WIND SPEED & SIZE                              */}
      {/* ================================================================ */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
              अहिले छानिएको झण्डा: <span className="text-red-600 dark:text-red-400 font-black">{FLAG_OPTIONS.find(f => f.id === activeFlag)?.name}</span>
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              हावाको गति वा साइज परिवर्तन गरी तलको ब्यानरमा प्रत्यक्ष प्रभाव हेर्नुहोस्
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {/* Wind Speed Selector */}
          <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
            <Wind className="w-3.5 h-3.5 text-sky-500 ml-1.5" />
            <span className="text-[11px] text-slate-500 dark:text-slate-400 mr-1">हावा:</span>
            <button
              onClick={() => setWindSpeed('gentle')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${windSpeed === 'gentle' ? 'bg-white dark:bg-slate-900 text-emerald-600 shadow-2xs font-bold' : 'text-slate-600 dark:text-slate-400'}`}
            >
              मन्द
            </button>
            <button
              onClick={() => setWindSpeed('normal')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${windSpeed === 'normal' ? 'bg-white dark:bg-slate-900 text-emerald-600 shadow-2xs font-bold' : 'text-slate-600 dark:text-slate-400'}`}
            >
              मध्यम
            </button>
            <button
              onClick={() => setWindSpeed('strong')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${windSpeed === 'strong' ? 'bg-emerald-600 text-white shadow-2xs font-bold' : 'text-slate-600 dark:text-slate-400'}`}
            >
              तीव्र फरर्र
            </button>
          </div>

          {/* Flag Size Selector */}
          <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 ml-1.5 mr-1">साइज:</span>
            <button
              onClick={() => setFlagSize('sm')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${flagSize === 'sm' ? 'bg-white dark:bg-slate-900 text-emerald-600 shadow-2xs font-bold' : 'text-slate-600 dark:text-slate-400'}`}
            >
              सानो
            </button>
            <button
              onClick={() => setFlagSize('md')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${flagSize === 'md' ? 'bg-white dark:bg-slate-900 text-emerald-600 shadow-2xs font-bold' : 'text-slate-600 dark:text-slate-400'}`}
            >
              मध्यम
            </button>
            <button
              onClick={() => setFlagSize('lg')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${flagSize === 'lg' ? 'bg-white dark:bg-slate-900 text-emerald-600 shadow-2xs font-bold' : 'text-slate-600 dark:text-slate-400'}`}
            >
              ठूलो
            </button>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* 3. LAYOUT TABS (How it integrates with Patro)                     */}
      {/* ================================================================ */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-emerald-500" />
            <span>पात्रोसँग समायोजन गरिएका ३ लेआउटहरू (Choose Layout):</span>
          </h3>
          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
            लाइभ प्रिभ्यु तल देखिन्छ
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => setSelectedDemo('option1')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              selectedDemo === 'option1'
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm text-emerald-950 dark:text-emerald-200'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between font-bold text-xs">
              <span>लेआउट १: ५०/५० Panoramic Split</span>
              {selectedDemo === 'option1' && <Check className="w-4 h-4 text-emerald-600" />}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              एउटै फराकिलो ब्यानरमा बाँया पात्रो र दायाँ फहराएको झण्डा (तपाईंको रोजाइ)
            </p>
          </button>

          <button
            onClick={() => setSelectedDemo('option2')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              selectedDemo === 'option2'
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm text-emerald-950 dark:text-emerald-200'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between font-bold text-xs">
              <span>लेआउट २: Dual Bento Twin Cards</span>
              {selectedDemo === 'option2' && <Check className="w-4 h-4 text-emerald-600" />}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              दुई बराबर चिटिक्क बक्सहरू: ५०% पात्रो कार्ड + ५०% राष्ट्रिय झण्डा
            </p>
          </button>

          <button
            onClick={() => setSelectedDemo('option3')}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              selectedDemo === 'option3'
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm text-emerald-950 dark:text-emerald-200'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between font-bold text-xs">
              <span>लेआउट ३: Himalayan Heritage Banner</span>
              {selectedDemo === 'option3' && <Check className="w-4 h-4 text-emerald-600" />}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              स्वर्णिम किनारा, ठूलो फन्ट र दायाँ ठूलो आकारको फहराएको झण्डा
            </p>
          </button>
        </div>
      </div>

      {/* ================================================================ */}
      {/* 4. ACTUAL LIVE DEMO RENDERING                                     */}
      {/* ================================================================ */}
      
      {/* OPTION 1: INTEGRATED PANORAMIC SPLIT */}
      {selectedDemo === 'option1' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <Eye className="w-3.5 h-3.5" />
              <span>प्रत्यक्ष ब्यानर: ५०% पात्रो + ५०% फहराएको राष्ट्रिय झण्डा ({FLAG_OPTIONS.find(f => f.id === activeFlag)?.name})</span>
            </span>
            <span className="text-[11px]">कम्प्युटरमा आधा-आधा | मोबाइलमा मिलेर बस्ने</span>
          </div>

          <div className="w-full bg-gradient-to-r from-[#061814] via-[#091e19] to-[#040e0b] text-white rounded-3xl p-4 sm:p-6 shadow-xl border border-emerald-500/30 relative overflow-hidden">
            
            {/* Subtle atmospheric ambient glows */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">

              {/* 50/50 SPLIT GRID: Left Patro + Right Flag */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
                
                {/* LEFT HALF (50%): Compact Nepali Patro & Live Clock */}
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 flex flex-col justify-between space-y-3.5">
                  
                  {/* Header Line */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>नेपाली पात्रो</span>
                      </span>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                        वि.सं.
                      </span>
                    </div>

                    {/* Live Clock with Pulsing Green Dot */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-xs sm:text-sm font-mono font-bold text-emerald-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>{liveTime} NPT</span>
                    </div>
                  </div>

                  {/* Main Date & Details Row */}
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    {/* Big Date Box */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col items-center justify-center shrink-0 shadow-inner">
                      <span className="text-3xl sm:text-4xl font-black text-white font-mono leading-none">
                        {details.bsDate}
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-emerald-300 mt-1">
                        {details.dayName}
                      </span>
                    </div>

                    {/* Month, Year & Tithi */}
                    <div className="space-y-1 min-w-0">
                      <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                        {details.bsMonthName} {details.bsYear}
                      </h2>
                      <p className="text-xs text-slate-300">
                        ईस्वी संवत् (AD): <span className="font-semibold text-white">{details.adDateString}</span>
                      </p>

                      {/* Tithi & Ritu Badge */}
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-0.5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-amber-500/20 border border-amber-400/30 text-xs text-amber-300 font-semibold">
                          <Moon className="w-3.5 h-3.5 text-amber-400 fill-amber-400/40" />
                          <span>{details.paksha}, {details.tithiName}</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-xs text-emerald-300 font-semibold">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{details.ritu} ऋतु</span>
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* RIGHT HALF (50%): Fluttering Nepal Flag Container */}
                <div className="rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-4 sm:p-5 border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[190px]">
                  
                  {/* Top Badge: National Pride */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-600/30 text-red-300 text-[10px] font-bold border border-red-500/40">
                      <Heart className="w-3 h-3 fill-red-400 text-red-400" />
                      <span>राष्ट्रिय स्वाभिमान</span>
                    </span>
                    <span className="text-[10px] text-emerald-300 font-mono">
                      अद्वितीय झण्डा 🇳🇵
                    </span>
                  </div>

                  {/* Centerpiece: Waving Nepal Flag */}
                  <div className="relative z-10 flex items-center justify-center py-1">
                    <FlutteringNepalFlag 
                      size={flagSize}
                      variant={activeFlag}
                      windSpeed={windSpeed}
                      showGlow={true}
                    />
                  </div>

                  {/* Bottom Slogan / Motto */}
                  <div className="relative z-10 text-center pt-1.5 border-t border-white/10">
                    <p className="text-xs font-bold text-amber-300 tracking-wide">
                      &ldquo;जननी जन्मभूमिश्च स्वर्गादपि गरीयसी&rdquo;
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      संसारकै एकमात्र त्रिकोणात्मक, चन्द्र-सूर्य अंकित जीवित झण्डा
                    </p>
                  </div>

                </div>

              </div>

              {/* FULL-WIDTH UPCOMING FESTIVALS STRIP */}
              <div>
                <UpcomingFestivalsBar variant="inline" />
              </div>

            </div>

          </div>
        </div>
      )}

      {/* OPTION 2: DUAL BENTO TWIN CARDS */}
      {selectedDemo === 'option2' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <Eye className="w-3.5 h-3.5" />
              <span>प्रत्यक्ष ब्यानर: दुई समान बक्स (Twin Bento Cards)</span>
            </span>
            <span className="text-[11px]">५०% पात्रो + ५०% झण्डा</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            
            {/* Card 1: Complete Patro Card */}
            <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950 text-white rounded-3xl p-5 sm:p-6 shadow-md border border-emerald-500/30 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-emerald-300">नेपाली पात्रो & पञ्चाङ्ग</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>{liveTime} NPT</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 border border-white/15 flex flex-col items-center justify-center shrink-0">
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono leading-none">
                    {details.bsDate}
                  </span>
                  <span className="text-xs font-bold text-emerald-300 mt-1">
                    {details.dayName}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-white">
                    {details.bsMonthName} {details.bsYear}
                  </h3>
                  <p className="text-xs text-slate-300">AD: {details.adDateString}</p>
                  <p className="text-xs text-amber-300 font-semibold">
                    {details.paksha}, {details.tithiName} • {details.ritu} ऋतु
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <UpcomingFestivalsBar variant="compact" />
              </div>
            </div>

            {/* Card 2: Dedicated National Flag Card */}
            <div className="bg-gradient-to-br from-[#12080a] via-[#1c0c10] to-[#0a0406] text-white rounded-3xl p-5 sm:p-6 shadow-md border border-red-500/30 flex flex-col justify-between space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-red-500/20 relative z-10">
                <div className="flex items-center gap-2">
                  <Mountain className="w-4 h-4 text-red-400" />
                  <span className="text-xs font-bold text-red-300">हाम्रो गौरव, हाम्रो पहिचान</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-200 border border-red-400/30 font-bold">
                  नेपाल 🇳🇵
                </span>
              </div>

              <div className="flex items-center justify-around gap-4 py-3 relative z-10">
                <FlutteringNepalFlag 
                  size={flagSize}
                  variant={activeFlag}
                  windSpeed={windSpeed}
                  showGlow={true}
                />
                <div className="space-y-2 text-left max-w-xs">
                  <h4 className="text-base sm:text-lg font-black text-white leading-snug">
                    सयौं थुँगा फूलका हामी, एउटै माला नेपाली
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    सार्वभौम, समृद्ध र शान्त नेपालको प्रतीक — चन्द्र र सूर्य अंकित अटल राष्ट्रिय झण्डा।
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-[11px] text-amber-300 font-medium">
                    <Sun className="w-3 h-3 text-amber-400" />
                    <span>सगरमाथाको देश (Land of Everest)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 text-center relative z-10">
                <p className="text-xs font-bold text-red-300 tracking-wider">
                  रातो र चन्द्र सूर्य, जङ्गी निशान हाम्रो!
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* OPTION 3: HIMALAYAN HERITAGE HERO BANNER */}
      {selectedDemo === 'option3' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <Eye className="w-3.5 h-3.5" />
              <span>प्रत्यक्ष ब्यानर: Himalayan Heritage Banner</span>
            </span>
            <span className="text-[11px]">लामो ब्यानर + दायाँ फहराएको झण्डा</span>
          </div>

          <div className="w-full bg-gradient-to-r from-slate-950 via-teal-950 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-amber-500/40 relative overflow-hidden">
            
            {/* Top Golden Trim */}
            <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 absolute top-0 left-0" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-bold text-amber-300">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>नेपाल राष्ट्रिय पञ्चाङ्ग & समय प्रणाली</span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-5xl sm:text-6xl font-black font-mono text-white leading-none">
                    {details.bsDate}
                  </span>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-amber-300">
                      {details.bsMonthName} {details.bsYear}, {details.dayName}
                    </h2>
                    <p className="text-xs text-slate-300 mt-1">
                      {details.adDateString} (ईस्वी) • {details.paksha} पक्ष, {details.tithiName}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <UpcomingFestivalsBar variant="inline" />
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col items-center justify-center text-center border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                <FlutteringNepalFlag 
                  size={flagSize === 'sm' ? 'md' : 'lg'}
                  variant={activeFlag}
                  windSpeed={windSpeed}
                  showGlow={true}
                />
                <span className="text-xs font-bold text-white mt-2 block">
                  नेपालको झण्डा फरर्र! 🇳🇵
                </span>
                <span className="text-[11px] text-amber-300/90 font-medium">
                  विश्वको शिखरमा सधैं उच्च
                </span>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
