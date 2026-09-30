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
  Compass
} from 'lucide-react';
import { getNepaliCalendarDetails, NepaliCalendarDetails } from '@/lib/nepaliDate';
import UpcomingFestivalsBar from './UpcomingFestivalsBar';
import FlutteringNepalFlag from './FlutteringNepalFlag';

export default function PatroWithFlagDemo() {
  const [details, setDetails] = useState<NepaliCalendarDetails>(() => getNepaliCalendarDetails(new Date()));
  const [liveTime, setLiveTime] = useState<string>('लाइभ समय...');
  const [windSpeed, setWindSpeed] = useState<'gentle' | 'normal' | 'strong'>('strong');
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
      
      {/* Demo Controls Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
              नेपाली पात्रो + नेपालको झण्डा (Live Interactive Demo)
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            तपाईंले खोज्नुभएको जस्तै आधा भागमा पात्रो र बाँकी भागमा फरर्र फहराएको झण्डाका ३ वटा डिजाइनहरू:
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Wind Speed Selector */}
          <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
            <Wind className="w-3.5 h-3.5 text-sky-500 ml-1.5" />
            <span className="text-[11px] text-slate-500 dark:text-slate-400 mr-1">हावा:</span>
            <button
              onClick={() => setWindSpeed('gentle')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${windSpeed === 'gentle' ? 'bg-white dark:bg-slate-900 text-emerald-600 shadow-2xs' : 'text-slate-600 dark:text-slate-400'}`}
            >
              मन्द
            </button>
            <button
              onClick={() => setWindSpeed('normal')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${windSpeed === 'normal' ? 'bg-white dark:bg-slate-900 text-emerald-600 shadow-2xs' : 'text-slate-600 dark:text-slate-400'}`}
            >
              मध्यम
            </button>
            <button
              onClick={() => setWindSpeed('strong')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${windSpeed === 'strong' ? 'bg-emerald-600 text-white shadow-2xs' : 'text-slate-600 dark:text-slate-400'}`}
            >
              तीव्र (फरर्र)
            </button>
          </div>
        </div>
      </div>

      {/* Selector Tabs for Demo Designs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={() => setSelectedDemo('option1')}
          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
            selectedDemo === 'option1'
              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm text-emerald-950 dark:text-emerald-200'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between font-bold text-xs">
            <span>डिजाइन १: Integrated Panoramic Split</span>
            {selectedDemo === 'option1' && <Check className="w-4 h-4 text-emerald-600" />}
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            एउटै फराकिलो ब्यानरमा बाँया पात्रो र दायाँ फहराएको झण्डा (तपाईंले रोज्नुभएको)
          </p>
        </button>

        <button
          onClick={() => setSelectedDemo('option2')}
          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
            selectedDemo === 'option2'
              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm text-emerald-950 dark:text-emerald-200'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between font-bold text-xs">
            <span>डिजाइन २: Dual Bento Twin Cards</span>
            {selectedDemo === 'option2' && <Check className="w-4 h-4 text-emerald-600" />}
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            दुईवटा चिटिक्क परेका कार्ड: एउटामा पात्रो, अर्कोमा राष्ट्रिय झण्डा र गौरव
          </p>
        </button>

        <button
          onClick={() => setSelectedDemo('option3')}
          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
            selectedDemo === 'option3'
              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm text-emerald-950 dark:text-emerald-200'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between font-bold text-xs">
            <span>डिजाइन ३: Himalayan Heritage Banner</span>
            {selectedDemo === 'option3' && <Check className="w-4 h-4 text-emerald-600" />}
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            सगरमाथाको पृष्ठभूमि, स्वर्ण बोर्डर, ठूलो झण्डा र राष्ट्रिय गान उद्धरण
          </p>
        </button>
      </div>

      {/* ============================================================== */}
      {/* OPTION 1: INTEGRATED PANORAMIC SPLIT (User's Exact Vision)      */}
      {/* ============================================================== */}
      {selectedDemo === 'option1' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <Eye className="w-3.5 h-3.5" />
              <span>लाइभ प्रिभ्यु (डिजाइन १): ५०/५० Panoramic Split</span>
            </span>
            <span className="text-[11px]">Desktop: दुई भाग | Mobile: क्रमबद्ध</span>
          </div>

          <div className="w-full bg-gradient-to-r from-[#061814] via-[#091e19] to-[#040e0b] text-white rounded-3xl p-5 sm:p-6 shadow-xl border border-emerald-500/30 relative overflow-hidden">
            
            {/* Subtle atmospheric ambient glows */}
            <div className="absolute top-0 right-1/3 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* LEFT SIDE (60%): Compact, Elegant Nepali Patro & Live Clock */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Header Line */}
                <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
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
                <div className="flex items-center gap-4">
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
                  <div className="space-y-1.5">
                    <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                      {details.bsMonthName} {details.bsYear}
                    </h2>
                    <p className="text-xs text-slate-300">
                      ईस्वी संवत् (AD): <span className="font-semibold text-white">{details.adDateString}</span>
                    </p>

                    {/* Tithi & Ritu Badge */}
                    <div className="flex flex-wrap items-center gap-2 pt-0.5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-400/30 text-xs text-amber-300 font-semibold">
                        <Moon className="w-3.5 h-3.5 text-amber-400 fill-amber-400/40" />
                        <span>{details.paksha}, {details.tithiName}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-xs text-emerald-300 font-semibold">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{details.ritu} ऋतु</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Upcoming Festivals Marquee / Countdown */}
                <div className="pt-1">
                  <UpcomingFestivalsBar variant="inline" />
                </div>
              </div>

              {/* VERTICAL DIVIDER ON DESKTOP */}
              <div className="hidden lg:block lg:col-span-1 h-44 w-px bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent mx-auto" />

              {/* RIGHT SIDE (40%): Fluttering Nepal Flag with Mountain Breeze */}
              <div className="lg:col-span-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 p-4 border border-white/10 relative overflow-hidden flex flex-col justify-between h-full min-h-[190px]">
                
                {/* Mountain Silhouette Background */}
                <div className="absolute inset-0 opacity-15 pointer-events-none flex items-end">
                  <svg viewBox="0 0 500 150" className="w-full text-white fill-current">
                    <path d="M0,150 L80,70 L140,110 L230,30 L310,90 L390,40 L450,80 L500,150 Z" />
                  </svg>
                </div>

                {/* Top Badge: National Pride */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-600/30 text-red-300 text-[10px] font-bold border border-red-500/40">
                    <Heart className="w-3 h-3 fill-red-400 text-red-400" />
                    <span>राष्ट्रिय स्वाभिमान</span>
                  </span>
                  <span className="text-[10px] text-emerald-300 font-mono">
                    विश्वकै अद्वितीय झण्डा 🇳🇵
                  </span>
                </div>

                {/* Centerpiece: Waving Nepal Flag */}
                <div className="relative z-10 flex items-center justify-center py-2">
                  <FlutteringNepalFlag 
                    size="md" 
                    windSpeed={windSpeed}
                    showPole={true}
                    showGlow={true}
                  />
                </div>

                {/* Bottom Slogan / Motto */}
                <div className="relative z-10 text-center pt-2 border-t border-white/10">
                  <p className="text-xs font-bold text-amber-300 tracking-wide">
                    &ldquo;जननी जन्मभूमिश्च स्वर्गादपि गरीयसी&rdquo;
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    संसारकै एकमात्र त्रिकोणात्मक, चन्द्र-सूर्य अंकित जीवित झण्डा
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* OPTION 2: DUAL BENTO TWIN CARDS (50% / 50% Separate Cards)    */}
      {/* ============================================================== */}
      {selectedDemo === 'option2' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <Eye className="w-3.5 h-3.5" />
              <span>लाइभ प्रिभ्यु (डिजाइन २): दुई समान बक्स (Twin Bento Cards)</span>
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

              <div className="flex items-center justify-around gap-4 py-2 relative z-10">
                <FlutteringNepalFlag 
                  size="md" 
                  windSpeed={windSpeed}
                  showPole={true}
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

      {/* ============================================================== */}
      {/* OPTION 3: HIMALAYAN HERITAGE HERO BANNER                       */}
      {/* ============================================================== */}
      {selectedDemo === 'option3' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <Eye className="w-3.5 h-3.5" />
              <span>लाइभ प्रिभ्यु (डिजाइन ३): Himalayan Heritage Banner</span>
            </span>
            <span className="text-[11px]">लामो ब्यानर + दायाँ ठूलो झण्डा</span>
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
                  size="lg" 
                  windSpeed={windSpeed}
                  showPole={true}
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
