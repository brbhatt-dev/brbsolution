'use client';

import React, { useState } from 'react';

interface FlutteringNepalFlagProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showPole?: boolean;
  windSpeed?: 'gentle' | 'normal' | 'strong';
  showGlow?: boolean;
  className?: string;
}

export default function FlutteringNepalFlag({
  size = 'md',
  showPole = true,
  windSpeed = 'normal',
  showGlow = true,
  className = '',
}: FlutteringNepalFlagProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Speed configs
  const speedDurations = {
    gentle: '3.2s',
    normal: '2.0s',
    strong: '1.2s',
  };

  const currentDuration = isHovered ? '0.8s' : speedDurations[windSpeed];

  // Scale configs based on size (Nepal Flag aspect ratio width:height = ~71.5:87.2)
  const sizeStyles = {
    sm: { width: 95, height: 116, poleHeight: 140, poleWidth: 4, knobSize: 10 },
    md: { width: 135, height: 165, poleHeight: 195, poleWidth: 5, knobSize: 13 },
    lg: { width: 185, height: 226, poleHeight: 260, poleWidth: 6, knobSize: 16 },
    xl: { width: 235, height: 287, poleHeight: 330, poleWidth: 7, knobSize: 20 },
  };

  const s = sizeStyles[size];

  return (
    <div 
      className={`relative inline-flex items-stretch select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="नेपालको राष्ट्रिय झण्डा (फरर्र फहराएको)"
    >
      {/* Metallic Flagpole on the Left */}
      {showPole && (
        <div className="relative shrink-0 flex flex-col items-center z-20 mr-[-2px]">
          {/* Golden Finial Knob */}
          <div 
            style={{ width: s.knobSize, height: s.knobSize }}
            className="rounded-full bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-200 shadow-md border border-amber-300 shrink-0"
          />
          {/* Metallic Silver Pole */}
          <div 
            style={{ width: s.poleWidth, minHeight: s.poleHeight }}
            className="flex-grow bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 shadow-sm relative rounded-b-xs"
          >
            {/* Cord ties / rings at top, middle, and bottom of flag */}
            <div className="absolute top-2 left-0 right-0 h-1 bg-amber-400/90 rounded-xs" />
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-amber-400/90 rounded-xs" />
            <div className="absolute bottom-2 left-0 right-0 h-1 bg-amber-400/90 rounded-xs" />
          </div>
          {/* Base Stand */}
          <div className="w-6 h-2 bg-gradient-to-t from-slate-700 to-slate-500 rounded-t-sm shadow-xs shrink-0 -mt-0.5" />
        </div>
      )}

      {/* Flag Canvas Wrapper with 3D Flutter and Wave Animation */}
      <div 
        className="relative z-10 self-start mt-2"
        style={{
          width: s.width,
          height: s.height,
          transformOrigin: 'left center',
          animation: `flagFlutter ${currentDuration} ease-in-out infinite alternate`,
          filter: showGlow ? 'drop-shadow(0 10px 20px rgba(220, 20, 60, 0.4))' : 'none',
        }}
      >
        {/* Exact Official Constitution SVG Flag of Nepal */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-17.582 -4.664 71.571 87.246"
          className="w-full h-full block drop-shadow-sm select-none pointer-events-none"
          style={{ overflow: 'visible' }}
        >
          {/* Official Flag Body: Crimson Red with Royal Navy Blue Border */}
          <path 
            d="M -15,37.5735931288 h 60 L -15,0 v 80 h 60 L -15,20 z" 
            stroke="#003893" 
            strokeWidth="5.165" 
            strokeLinejoin="round" 
            fill="#DC143C" 
          />

          <defs>
            <path id="np_b" d="M 0.195090322016,-0.980785280403 L 0,-1.388784109750 L -0.195090322016,-0.980785280403" transform="rotate(11.25)" />
            <path id="np_e" d="M 0.258819045103,0.965925826289 L 0,1.576749285537 L -0.258819045103,0.965925826289" />
          </defs>

          {/* Pure White Emblems */}
          <g fill="#FFFFFF">
            {/* Upper Moon Crescent */}
            <path d="M -11.9502769431,23.4834957055 A 12.8400974233,12.8400974233 0 0,0 11.9502769431,23.4834957055 A 11.9502769431 11.9502769431 0 0,1 -11.9502769431,23.4834957055" />
            
            {/* Upper Moon Rays (8 Rays) */}
            <g transform="translate(0 29.045) scale(5.56106)">
              <circle r="1" />
              <use href="#np_b" xlinkHref="#np_b" />
              <use href="#np_b" xlinkHref="#np_b" transform="rotate(22.5)" />
              <use href="#np_b" xlinkHref="#np_b" transform="rotate(45)" />
              <use href="#np_b" xlinkHref="#np_b" transform="rotate(67.5)" />
              <use href="#np_b" xlinkHref="#np_b" transform="scale(-1 1)" />
              <use href="#np_b" xlinkHref="#np_b" transform="scale(-1 1) rotate(22.5)" />
              <use href="#np_b" xlinkHref="#np_b" transform="scale(-1 1) rotate(45)" />
              <use href="#np_b" xlinkHref="#np_b" transform="scale(-1 1) rotate(67.5)" />
            </g>

            {/* Lower 12-Ray Sun */}
            <g transform="matrix(8.1434 0 0 8.1434 0 58.787)">
              <circle r="1" />
              <use href="#np_e" xlinkHref="#np_e" />
              <use href="#np_e" xlinkHref="#np_e" transform="rotate(30)" />
              <use href="#np_e" xlinkHref="#np_e" transform="rotate(60)" />
              <use href="#np_e" xlinkHref="#np_e" transform="rotate(90)" />
              <use href="#np_e" xlinkHref="#np_e" transform="rotate(120)" />
              <use href="#np_e" xlinkHref="#np_e" transform="rotate(150)" />
              <use href="#np_e" xlinkHref="#np_e" transform="rotate(180)" />
              <use href="#np_e" xlinkHref="#np_e" transform="rotate(210)" />
              <use href="#np_e" xlinkHref="#np_e" transform="rotate(240)" />
              <use href="#np_e" xlinkHref="#np_e" transform="rotate(270)" />
              <use href="#np_e" xlinkHref="#np_e" transform="rotate(300)" />
              <use href="#np_e" xlinkHref="#np_e" transform="rotate(330)" />
            </g>
          </g>
        </svg>

        {/* Dynamic Light Ripple Sheen (Simulating flowing wind waves on cloth) */}
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-60"
          style={{
            background: 'linear-gradient(110deg, transparent 15%, rgba(255,255,255,0.45) 45%, rgba(0,0,0,0.3) 60%, transparent 85%)',
            backgroundSize: '200% 100%',
            animation: `clothRipple ${currentDuration} linear infinite`,
          }}
        />

        {/* Subtle Wind Breeze Trails */}
        <div className="absolute -right-3 top-8 w-6 h-0.5 bg-white/40 rounded-full blur-[0.5px] animate-pulse pointer-events-none" />
        <div className="absolute -right-5 top-20 w-8 h-0.5 bg-white/30 rounded-full blur-[0.5px] animate-pulse pointer-events-none" style={{ animationDelay: '0.4s' }} />
        <div className="absolute -right-4 bottom-6 w-5 h-0.5 bg-white/30 rounded-full blur-[0.5px] animate-pulse pointer-events-none" style={{ animationDelay: '0.8s' }} />
      </div>
    </div>
  );
}
