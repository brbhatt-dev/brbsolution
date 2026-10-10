'use client';

import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Moon, 
  Sun, 
  Sparkles, 
  Heart, 
  X, 
  Compass, 
  Clock, 
  ShieldAlert, 
  CheckCircle2, 
  Star,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { getNepaliCalendarDetails, NepaliCalendarDetails } from '@/lib/nepaliDate';
import UpcomingFestivalsBar from './UpcomingFestivalsBar';

interface TithiWidgetProps {
  variant?: 'compact' | 'panoramic';
}

export default function TithiWidget({ variant = 'compact' }: TithiWidgetProps) {
  const [details, setDetails] = useState<NepaliCalendarDetails | null>(null);
  const [liveTime, setLiveTime] = useState<string>('');
  const [showPanchangModal, setShowPanchangModal] = useState<boolean>(false);

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

  // Keyboard shortcut (Escape) to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowPanchangModal(false);
    };
    if (showPanchangModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [showPanchangModal]);

  if (!details) {
    return (
      <div className={`rounded-3xl bg-slate-900 border border-slate-800 animate-pulse ${variant === 'panoramic' ? 'h-24 w-full' : 'h-40 w-full'}`} />
    );
  }

  // WIDE PANORAMIC VARIANT (50/50 Panoramic Split: Compact Patro + Waving Nepal Flag)
  if (variant === 'panoramic') {
    return (
      <>
        <div className="w-full bg-gradient-to-r from-[#061814] via-[#091e19] to-[#040e0b] text-white rounded-3xl p-4 sm:p-6 shadow-xl border border-emerald-500/30 relative overflow-hidden">
          
          {/* Subtle atmospheric ambient glows */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">

            {/* 50/50 SPLIT GRID: Left Patro + Right Land Solution Flag */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
              
              {/* LEFT HALF (50%): Compact Nepali Patro & Live Clock */}
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 flex flex-col justify-between space-y-3.5">
                
                {/* Header Line */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>नेपाली पात्रो & वैदिक पञ्चाङ्ग</span>
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
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

                {/* Vedic Panchang Quick Strip (Sunrise, Sunset, Nakshatra & Modal CTA) */}
                <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex flex-wrap items-center gap-3 text-slate-300 text-[11px]">
                    <span className="inline-flex items-center gap-1 text-amber-300">
                      <Sun className="w-3 h-3 text-amber-400" />
                      <span>सूर्योदय: {details.sunrise}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-rose-300">
                      <Moon className="w-3 h-3 text-rose-400" />
                      <span>सूर्यास्त: {details.sunset}</span>
                    </span>
                    {details.nakshatra && (
                      <span className="inline-flex items-center gap-1 text-emerald-300 hidden sm:inline-flex">
                        <Star className="w-3 h-3 text-emerald-400" />
                        <span>नक्षत्र: {details.nakshatra}</span>
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setShowPanchangModal(true)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600/80 hover:bg-emerald-600 text-white font-bold text-[11px] transition-all hover:scale-105 active:scale-95 shadow-xs"
                    title="विस्तृत वैदिक पञ्चाङ्ग हेर्नुहोस्"
                  >
                    <Compass className="w-3 h-3" />
                    <span>विस्तृत पञ्चाङ्ग</span>
                  </button>
                </div>

              </div>

              {/* RIGHT HALF (50%): Land Solution Fluttering Nepal Flag Container */}
              <div
                className="rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-4 sm:p-5 border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[190px]"
                title="नेपालको राष्ट्रिय झण्डा फरर्र 🇳🇵"
              >
                {/* Top Badge: National Pride */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/25 text-red-200 text-xs font-bold border border-red-500/40">
                    <Heart className="w-3.5 h-3.5 fill-red-400 text-red-400" />
                    <span>राष्ट्रिय स्वाभिमान</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-300">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>अद्वितीय राष्ट्रिय झण्डा</span>
                  </span>
                </div>

                {/* Centerpiece: Official Animated Nepal Flag */}
                <div className="relative z-10 flex items-center justify-center py-2 sm:py-3">
                  <div className="absolute w-32 h-32 bg-red-600/20 rounded-full blur-2xl pointer-events-none" />
                  
                  <picture className="relative z-10">
                    <source srcSet="/nepal_flag.webp" type="image/webp" />
                    <img 
                      src="/nepal_flag.gif" 
                      alt="नेपालको राष्ट्रिय झण्डा"
                      width={249}
                      height={338}
                      loading="eager"
                      decoding="async"
                      className="h-28 sm:h-36 w-auto object-contain select-none pointer-events-none transition-transform duration-300 hover:scale-105 drop-shadow-md"
                      style={{ WebkitTransform: 'translate3d(0, 0, 0)', transform: 'translate3d(0, 0, 0)' }}
                    />
                  </picture>
                </div>

                {/* Bottom Slogan / Motto */}
                <div className="relative z-10 text-center pt-2.5 pb-0.5 border-t border-white/10 space-y-1">
                  <p className="text-sm sm:text-base font-extrabold text-amber-300 tracking-wide leading-tight">
                    &ldquo;जननी जन्मभूमिश्च स्वर्गादपि गरीयसी&rdquo;
                  </p>
                  <p className="text-xs sm:text-[13px] font-medium text-slate-200 leading-normal">
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

        {/* Detailed Panchang Modal */}
        {showPanchangModal && (
          <PanchangDetailsModal details={details} onClose={() => setShowPanchangModal(false)} />
        )}
      </>
    );
  }

  // DEFAULT COMPACT VARIANT
  return (
    <>
      <div className="bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-950 text-white rounded-2xl p-3.5 sm:p-4 shadow-inner border border-emerald-500/30 relative overflow-hidden">
        
        {/* Background glow decoration */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-2.5">
          
          {/* Top Header */}
          <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                नेपाली पात्रो & वैदिक पञ्चाङ्ग
              </span>
            </div>

            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-[10px] font-mono text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>{liveTime} NPT</span>
            </div>
          </div>

          {/* Date Display Card */}
          <div className="grid grid-cols-12 gap-2.5 items-center">
            
            {/* Day Big Number Box */}
            <div className="col-span-4 bg-white/10 backdrop-blur-md rounded-xl p-2 sm:p-2.5 text-center border border-white/10 shrink-0">
              <span className="text-3xl sm:text-4xl font-black text-white font-mono block leading-none">
                {details.bsDate}
              </span>
              <span className="text-[10px] font-semibold text-emerald-300 block mt-1 truncate">
                गते, {details.dayName}
              </span>
            </div>

            {/* Month, Year & Tithi */}
            <div className="col-span-8 space-y-1 pl-1">
              <div className="flex items-center gap-1.5">
                <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                  {details.bsMonthName} {details.bsYear}
                </h3>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-200 font-bold">
                  वि.सं.
                </span>
              </div>

              {/* Tithi Detail */}
              <div className="flex items-center gap-1 text-xs text-amber-300 font-medium">
                <Moon className="w-3.5 h-3.5 shrink-0 text-amber-400 fill-amber-400/40" />
                <span className="truncate">
                  <strong>{details.paksha}</strong>, {details.tithiName}
                </span>
              </div>

              {/* Gregorian Date */}
              <p className="text-[10px] text-slate-300 truncate">
                AD: {details.adDateString}
              </p>
            </div>

          </div>

          {/* Panchang Quick Summary (Sunrise, Sunset & View Button) */}
          <div className="pt-2 border-t border-emerald-500/20 flex items-center justify-between text-[11px] text-slate-300">
            <div className="flex items-center gap-2 text-[10px]">
              <span className="inline-flex items-center gap-1 text-amber-300">
                <Sun className="w-3 h-3 text-amber-400" />
                <span>{details.sunrise}</span>
              </span>
              <span className="text-slate-500">•</span>
              <span className="inline-flex items-center gap-1 text-rose-300">
                <Moon className="w-3 h-3 text-rose-400" />
                <span>{details.sunset}</span>
              </span>
            </div>

            <button
              onClick={() => setShowPanchangModal(true)}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-emerald-600/70 hover:bg-emerald-600 text-white font-bold text-[10px] transition-colors"
            >
              <Compass className="w-2.5 h-2.5" />
              <span>पञ्चाङ्ग</span>
            </button>
          </div>

          {/* Compact Upcoming Festival Ticker */}
          <UpcomingFestivalsBar variant="compact" />

        </div>

      </div>

      {/* Detailed Panchang Modal */}
      {showPanchangModal && (
        <PanchangDetailsModal details={details} onClose={() => setShowPanchangModal(false)} />
      )}
    </>
  );
}

// Full Vedic Panchanga Modal Component inspired by Brihat Karmakanda
function PanchangDetailsModal({ details, onClose }: { details: NepaliCalendarDetails; onClose: () => void }) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-emerald-500/40 rounded-3xl p-5 sm:p-7 shadow-2xl text-white space-y-5 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <Compass className="w-3.5 h-3.5" />
              <span>वैदिक पञ्चाङ्ग (Vedic Panchanga)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {details.fullBsDate}
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>काठमाडौं, नेपाल (नेपाल मानक समय UTC+५:४५)</span>
              </span>
              <span>•</span>
              <span>AD: {details.adDateString}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="बन्द गर्नुहोस्"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 1. पञ्चाङ्गका ५ अङ्गहरू (5 Limbs of Panchang) */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>पञ्चाङ्गका ५ मुख्य अङ्गहरू</span>
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-center">
            <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">१. तिथि</span>
              <span className="text-sm font-bold text-amber-300 mt-0.5 block truncate">
                {details.tithiName}
              </span>
              <span className="text-[10px] text-slate-400 block">{details.paksha}</span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">२. वार</span>
              <span className="text-sm font-bold text-emerald-300 mt-0.5 block">
                {details.dayName}
              </span>
              <span className="text-[10px] text-slate-400 block">सप्ताहान्त</span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">३. नक्षत्र</span>
              <span className="text-sm font-bold text-sky-300 mt-0.5 block truncate">
                {details.nakshatra || 'हस्त'}
              </span>
              <span className="text-[10px] text-slate-400 block">२७ नक्षत्र</span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">४. योग</span>
              <span className="text-sm font-bold text-purple-300 mt-0.5 block truncate">
                {details.yoga || 'ऐन्द्र'}
              </span>
              <span className="text-[10px] text-slate-400 block">२७ योग</span>
            </div>

            <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">५. करण</span>
              <span className="text-sm font-bold text-rose-300 mt-0.5 block truncate">
                {details.karana || 'शकुनि'}
              </span>
              <span className="text-[10px] text-slate-400 block">११ करण</span>
            </div>
          </div>
        </div>

        {/* 2. सूर्य र चन्द्र विवरण (Solar & Lunar Status) */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Sun className="w-3.5 h-3.5" />
            <span>सूर्य, चन्द्र र ऋतु विवरण</span>
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                <Sun className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">सूर्योदय</span>
                <span className="font-bold text-amber-300 text-sm">{details.sunrise}</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-rose-500/20 flex items-center justify-center shrink-0 text-rose-400">
                <Moon className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">सूर्यास्त</span>
                <span className="font-bold text-rose-300 text-sm">{details.sunset}</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-400">
                <Star className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">चन्द्र राशि</span>
                <span className="font-bold text-indigo-300 text-sm">{details.moonRashi || 'कन्या'} राशि</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">ऋतु / सूर्य राशि</span>
                <span className="font-bold text-emerald-300 text-sm">{details.ritu} / {details.sunRashi || 'कन्या'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. शुभ तथा अशुभ समयहरू (Muhurta & Kaal) */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>मुहूर्त तथा काल समय (Kathmandu NPT)</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            {/* Auspicious: Abhijit Muhurta */}
            <div className="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block">अभिजित मुहूर्त (अति शुभ काल)</span>
                  <span className="text-[11px] text-emerald-300/80">नयाँ काम तथा यात्रा शुभारम्भ</span>
                </div>
              </div>
              <span className="font-mono font-bold text-emerald-300 text-xs sm:text-sm bg-emerald-500/20 px-2 py-1 rounded-lg">
                {details.abhijitMuhurta || '११:३० AM - १२:१८ PM'}
              </span>
            </div>

            {/* Inauspicious: Rahu Kaal */}
            <div className="p-3 rounded-2xl bg-rose-950/60 border border-rose-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block">राहु काल (वर्जित/अशुभ काल)</span>
                  <span className="text-[11px] text-rose-300/80">शुभ कार्य गर्न निषेध</span>
                </div>
              </div>
              <span className="font-mono font-bold text-rose-300 text-xs sm:text-sm bg-rose-500/20 px-2 py-1 rounded-lg">
                {details.rahuKaal || '०९:०० AM - १०:३० AM'}
              </span>
            </div>

            {/* Yamaganda */}
            <div className="p-3 rounded-2xl bg-slate-800/70 border border-slate-700 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-300 block">यमगण्ड काल</span>
                <span className="text-[10px] text-slate-400">अशुभ समय</span>
              </div>
              <span className="font-mono text-slate-300 text-xs bg-slate-700/60 px-2 py-1 rounded-lg">
                {details.yamaganda || '०१:३० PM - ०३:०० PM'}
              </span>
            </div>

            {/* Disha Shoola */}
            <div className="p-3 rounded-2xl bg-slate-800/70 border border-slate-700 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-300 block">दिशा शूल (यात्रा नगर्ने दिशा)</span>
                <span className="text-[10px] text-slate-400">आजको निषेधित दिशा</span>
              </div>
              <span className="font-bold text-amber-300 text-xs bg-amber-500/20 px-2.5 py-1 rounded-lg">
                {details.dishaShoola || 'पूर्व'}
              </span>
            </div>
          </div>
        </div>

        {/* Footer info & close CTA */}
        <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <span>* वैदिक पञ्चाङ्ग गणना सुर्यसिद्धान्त तथा आधुनिक खगोलीय स्थिति (Ephemeris) मा आधारित।</span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
          >
            बन्द गर्नुहोस्
          </button>
        </div>

      </div>
    </div>
  );
}
