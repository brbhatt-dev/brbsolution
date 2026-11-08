'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
      <div className={`rounded-3xl bg-[#1c0404] border border-red-500/20 animate-pulse ${variant === 'panoramic' ? 'h-24 w-full' : 'h-40 w-full'}`} />
    );
  }

  // =========================================================================
  // WIDE PANORAMIC VARIANT (50/50 Split: BR Patro Crimson Card + Waving Nepal Flag)
  // =========================================================================
  if (variant === 'panoramic') {
    return (
      <>
        <div className="w-full bg-gradient-to-br from-[#2f0606] via-[#1c0404] to-[#0d0101] text-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-red-500/35 relative overflow-hidden">
          
          {/* Subtle Royal Crimson & Amber Ambient Gradients */}
          <div 
            className="absolute top-0 right-1/4 w-80 h-80 rounded-full pointer-events-none opacity-40" 
            style={{ background: 'radial-gradient(circle, rgba(220, 38, 38, 0.3) 0%, transparent 70%)' }}
          />
          <div 
            className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full pointer-events-none opacity-30" 
            style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 space-y-4">

            {/* 50/50 SPLIT GRID: Left BR Patro + Right Fluttering Nepal Flag */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
              
              {/* LEFT HALF (50%): Compact BR Patro Card & Live Clock */}
              <div className="rounded-2xl bg-[#180303]/90 border border-red-500/25 p-4 sm:p-5 flex flex-col justify-between space-y-3.5 shadow-md backdrop-blur-xs">
                
                {/* Header Line */}
                <div className="flex items-center justify-between border-b border-red-500/20 pb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-amber-500 to-red-600 p-0.5 flex items-center justify-center shrink-0 shadow-xs border border-amber-300">
                      <img src="/assets/ganesh_badge.png" alt="Ganesh Badge" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs font-black text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                      <span>बी.आर. पात्रो • पञ्चाङ्ग</span>
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-600/30 text-amber-200 font-black border border-amber-400/30">
                      PRO
                    </span>
                  </div>

                  {/* Live Clock with Pulsing Amber Dot */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-amber-400/40 text-xs sm:text-sm font-mono font-bold text-amber-300 shadow-inner">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <span>{liveTime} NPT</span>
                  </div>
                </div>

                {/* Main Date & Details Row */}
                <div className="flex items-center gap-3.5 sm:gap-4">
                  {/* Big Date Box (Royal Golden & Crimson) */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-b from-amber-500/25 via-[#2b0808] to-black/70 border-2 border-amber-400/50 flex flex-col items-center justify-center shrink-0 shadow-md">
                    <span className="text-3xl sm:text-4xl font-black text-amber-300 leading-none drop-shadow-sm">
                      {details.bsDate}
                    </span>
                    <span className="text-xs sm:text-[13px] font-extrabold text-white mt-1">
                      {details.dayName}
                    </span>
                  </div>

                  {/* Month, Year & Tithi */}
                  <div className="space-y-1 min-w-0">
                    <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      {details.bsMonthName} {details.bsYear}
                    </h2>
                    <p className="text-xs sm:text-[13px] text-amber-100/80 font-medium">
                      ईस्वी संवत् (AD): <span className="font-bold text-white">{details.adDateString}</span>
                    </p>

                    {/* Tithi & Ritu Badges */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-0.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-400/40 text-xs sm:text-[13px] text-amber-300 font-bold">
                        <Moon className="w-3.5 h-3.5 text-amber-300 fill-amber-300/40" />
                        <span>{details.paksha}, {details.tithiName}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-500/20 border border-red-400/40 text-xs sm:text-[13px] text-rose-200 font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-rose-300" />
                        <span>{details.ritu} ऋतु {details.ayan ? `(${details.ayan})` : ''}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Vedic Panchang Quick Strip (Sunrise, Sunset, Nakshatra & Action Buttons) */}
                <div className="pt-2 border-t border-red-500/20 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex flex-wrap items-center gap-3.5 text-slate-100 text-xs font-semibold">
                    <span className="inline-flex items-center gap-1 text-amber-200 font-semibold">
                      <Sun className="w-3.5 h-3.5 text-amber-300" />
                      <span>सूर्योदय: {details.sunrise}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-rose-200 font-semibold">
                      <Moon className="w-3.5 h-3.5 text-rose-300" />
                      <span>सूर्यास्त: {details.sunset}</span>
                    </span>
                    {details.nakshatra && (
                      <span className="inline-flex items-center gap-1 text-amber-100 font-semibold hidden sm:inline-flex">
                        <Star className="w-3.5 h-3.5 text-amber-300" />
                        <span>नक्षत्र: {details.nakshatra}</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setShowPanchangModal(true)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                      title="विस्तृत वैदिक पञ्चाङ्ग हेर्नुहोस्"
                    >
                      <Compass className="w-3 h-3" />
                      <span>विस्तृत पञ्चाङ्ग</span>
                    </button>
                    <Link
                      href="/patro"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs transition-all hover:scale-105 active:scale-95 shadow-sm"
                      title="पूर्ण बी.आर. पात्रो एप खोल्नुहोस्"
                    >
                      <Calendar className="w-3 h-3" />
                      <span>पूर्ण पात्रो ▶</span>
                    </Link>
                  </div>
                </div>

                {/* Astrological King & Minister Micro-bar */}
                <div className="pt-2 border-t border-red-500/20 flex flex-wrap items-center justify-between text-[11px] text-amber-200/90 font-medium">
                  <span>👑 राजा: <strong>{details.raja || 'गुरु (बृहस्पति)'}</strong> | ⚔️ मन्त्री: <strong>{details.mantri || 'भौम (मङ्गल)'}</strong></span>
                  <span>🧭 चन्द्रवास: <strong>{details.chandraVasa || 'पूर्व'}</strong> | 📜 संवत्सर: <strong>{details.samvatsara || 'कालयुक्त'}</strong></span>
                </div>

              </div>

              {/* RIGHT HALF (50%): Majestic Royal Crimson Nepal Flag Container */}
              <div
                className="rounded-2xl bg-[#180303]/90 p-4 sm:p-5 border border-red-500/25 relative overflow-hidden flex flex-col justify-between min-h-[190px] shadow-md backdrop-blur-xs"
                title="नेपालको राष्ट्रिय झण्डा फरर्र 🇳🇵"
              >
                {/* Top Badge: National Pride */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/30 text-rose-200 text-xs font-bold border border-red-500/40">
                    <Heart className="w-3.5 h-3.5 fill-red-400 text-red-400" />
                    <span>राष्ट्रिय स्वाभिमान</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>अद्वितीय राष्ट्रिय झण्डा</span>
                  </span>
                </div>

                {/* Centerpiece: Official Animated Nepal Flag with Warm Amber/Crimson Glow */}
                <div className="relative z-10 flex items-center justify-center py-2 sm:py-3">
                  <div 
                    className="absolute w-36 h-36 rounded-full pointer-events-none opacity-40" 
                    style={{ background: 'radial-gradient(circle, rgba(220, 38, 38, 0.4) 0%, rgba(245, 158, 11, 0.2) 50%, transparent 70%)' }}
                  />
                  
                  <picture className="relative z-10">
                    <source srcSet="/nepal_flag.webp" type="image/webp" />
                    <img 
                      src="/nepal_flag.gif" 
                      alt="नेपालको राष्ट्रिय झण्डा"
                      width={249}
                      height={338}
                      loading="eager"
                      decoding="async"
                      className="h-28 sm:h-36 w-auto object-contain select-none pointer-events-none transition-transform duration-300 hover:scale-105 drop-shadow-lg"
                    />
                  </picture>
                </div>

                {/* Bottom Slogan / Motto */}
                <div className="relative z-10 text-center pt-2.5 pb-0.5 border-t border-red-500/20 space-y-1">
                  <p className="text-sm sm:text-base font-black text-amber-300 leading-tight">
                    &ldquo;जननी जन्मभूमिश्च स्वर्गादपि गरीयसी&rdquo;
                  </p>
                  <p className="text-xs sm:text-[13px] font-bold text-white leading-normal">
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

  // =========================================================================
  // DEFAULT COMPACT VARIANT (Matching BR Patro Crimson & Amber Theme)
  // =========================================================================
  return (
    <>
      <div className="bg-[#1c0404] text-white rounded-2xl p-3.5 sm:p-4 shadow-inner border border-red-500/30 relative overflow-hidden">
        
        {/* Background glow decoration */}
        <div 
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none opacity-40" 
          style={{ background: 'radial-gradient(circle, rgba(220, 38, 38, 0.35) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full pointer-events-none opacity-30" 
          style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 space-y-2.5">
          
          {/* Top Header */}
          <div className="flex items-center justify-between pb-2 border-b border-red-500/20">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-300">
                बी.आर. पात्रो • पञ्चाङ्ग
              </span>
            </div>

            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/50 border border-amber-400/30 text-[10px] font-mono text-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              <span>{liveTime} NPT</span>
            </div>
          </div>

          {/* Date Display Card */}
          <div className="grid grid-cols-12 gap-2.5 items-center">
            
            {/* Day Big Number Box */}
            <div className="col-span-4 bg-[#260606] rounded-xl p-2 sm:p-2.5 text-center border border-amber-400/40 shrink-0 shadow-xs">
              <span className="text-3xl sm:text-4xl font-black text-amber-300 font-mono block leading-none">
                {details.bsDate}
              </span>
              <span className="text-[10px] font-extrabold text-white block mt-1 truncate">
                गते, {details.dayName}
              </span>
            </div>

            {/* Month, Year & Tithi */}
            <div className="col-span-8 space-y-1 pl-1">
              <div className="flex items-center gap-1.5">
                <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                  {details.bsMonthName} {details.bsYear}
                </h3>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-600/30 text-amber-200 font-bold border border-amber-400/30">
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
              <p className="text-[10px] text-amber-100/80 truncate">
                AD: {details.adDateString}
              </p>
            </div>

          </div>

          {/* Panchang Quick Summary (Sunrise, Sunset & View Button) */}
          <div className="pt-2 border-t border-red-500/20 flex items-center justify-between text-[11px] text-slate-300">
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

            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowPanchangModal(true)}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[10px] transition-colors cursor-pointer"
              >
                <Compass className="w-2.5 h-2.5" />
                <span>पञ्चाङ्ग</span>
              </button>
              <Link
                href="/patro"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-[10px] transition-colors"
              >
                <span>पात्रो ▶</span>
              </Link>
            </div>
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

// Full Vedic Panchanga Modal Component styled in BR Patro Royal Crimson & Amber
function PanchangDetailsModal({ details, onClose }: { details: NepaliCalendarDetails; onClose: () => void }) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#160303] border border-red-500/40 rounded-3xl p-5 sm:p-7 shadow-2xl text-white space-y-5 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-red-500/20">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-red-600/30 text-amber-200 text-xs font-bold border border-amber-400/30">
              <Compass className="w-3.5 h-3.5 text-amber-300" />
              <span>बी.आर. पात्रो • वैदिक पञ्चाङ्ग</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {details.fullBsDate}
            </h3>
            <div className="flex items-center gap-2 text-xs text-amber-100/70">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>काठमाडौं, नेपाल (नेपाल मानक समय UTC+५:४५)</span>
              </span>
              <span>•</span>
              <span>AD: {details.adDateString}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="बन्द गर्नुहोस्"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 1. पञ्चाङ्गका ५ अङ्गहरू (5 Limbs of Panchang) */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>पञ्चाङ्गका ५ मुख्य अङ्गहरू</span>
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-center">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">१. तिथि</span>
              <span className="text-sm font-bold text-amber-300 mt-0.5 block truncate">
                {details.tithiName}
              </span>
              <span className="text-[10px] text-slate-400 block">{details.paksha}</span>
            </div>

            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">२. वार</span>
              <span className="text-sm font-bold text-rose-300 mt-0.5 block">
                {details.dayName}
              </span>
              <span className="text-[10px] text-slate-400 block">सप्ताहान्त</span>
            </div>

            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">३. नक्षत्र</span>
              <span className="text-sm font-bold text-amber-200 mt-0.5 block truncate">
                {details.nakshatra || 'हस्त'}
              </span>
              <span className="text-[10px] text-slate-400 block">२७ नक्षत्र</span>
            </div>

            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">४. योग</span>
              <span className="text-sm font-bold text-purple-300 mt-0.5 block truncate">
                {details.yoga || 'ऐन्द्र'}
              </span>
              <span className="text-[10px] text-slate-400 block">२७ योग</span>
            </div>

            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">५. करण</span>
              <span className="text-sm font-bold text-teal-300 mt-0.5 block truncate">
                {details.karana || 'कौलव'}
              </span>
              <span className="text-[10px] text-slate-400 block">११ करण</span>
            </div>
          </div>
        </div>

        {/* 2. सूर्य र चन्द्र विवरण (Solar & Lunar Status) */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
            <Sun className="w-3.5 h-3.5 text-amber-400" />
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
          <h4 className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>मुहूर्त तथा काल समय (Kathmandu NPT)</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            {/* Auspicious: Abhijit Muhurta */}
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-bold text-emerald-300 block">अभिजित् मुहूर्त (शुभ समय)</span>
                  <span className="text-[10px] text-slate-400">सर्वकार्य सिद्धिदायक समय</span>
                </div>
              </div>
              <span className="font-bold text-emerald-300 text-xs bg-emerald-500/20 px-2.5 py-1 rounded-lg">
                {details.abhijitMuhurta || '११:४२ AM - १२:२६ PM'}
              </span>
            </div>

            {/* Inauspicious: Rahu Kaal */}
            <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                <div>
                  <span className="font-bold text-rose-300 block">राहु काल (वर्जित समय)</span>
                  <span className="text-[10px] text-slate-400">कुनै नयाँ काम नथाल्नुहोस्</span>
                </div>
              </div>
              <span className="font-bold text-rose-300 text-xs bg-rose-500/20 px-2.5 py-1 rounded-lg">
                {details.rahuKaal || '१०:३० AM - १२:०० PM'}
              </span>
            </div>

            {/* Yamaganda */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-300 block">यमगण्ड काल</span>
                <span className="text-[10px] text-slate-400">अशुभ समय</span>
              </div>
              <span className="font-mono text-slate-300 text-xs bg-white/10 px-2 py-1 rounded-lg">
                {details.yamaganda || '०१:३० PM - ०३:०० PM'}
              </span>
            </div>

            {/* Disha Shoola */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
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

        {/* Footer info & action CTA */}
        <div className="pt-3 border-t border-red-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <span>* वैदिक पञ्चाङ्ग गणना सुर्यसिद्धान्त तथा बी.आर. पात्रो खगोलीय डेटाबेसमा आधारित।</span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Link
              href="/patro"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-md"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>पूर्ण पात्रो खोल्नुहोस् ▶</span>
            </Link>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              बन्द गर्नुहोस्
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
