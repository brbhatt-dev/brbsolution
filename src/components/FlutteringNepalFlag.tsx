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
    normal: '2.1s',
    strong: '1.2s',
  };

  const currentDuration = isHovered ? '0.9s' : speedDurations[windSpeed];

  // Scale configs based on size
  const sizeStyles = {
    sm: { width: 90, height: 115, poleHeight: 135, poleWidth: 4, knobSize: 10 },
    md: { width: 140, height: 180, poleHeight: 205, poleWidth: 5, knobSize: 13 },
    lg: { width: 190, height: 245, poleHeight: 275, poleWidth: 6, knobSize: 16 },
    xl: { width: 240, height: 310, poleHeight: 345, poleWidth: 7, knobSize: 19 },
  };

  const s = sizeStyles[size];

  return (
    <div 
      className={`relative inline-flex items-end select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="नेपालको राष्ट्रिय झण्डा (फरर्र फहराएको)"
    >
      {/* Flagpole (if enabled) */}
      {showPole && (
        <div className="relative shrink-0 flex flex-col items-center z-20">
          {/* Golden Finial (Knob) */}
          <div 
            style={{ width: s.knobSize, height: s.knobSize }}
            className="rounded-full bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-200 shadow-md border border-amber-400"
          />
          {/* Metallic Silver/Steel Pole */}
          <div 
            style={{ width: s.poleWidth, height: s.poleHeight }}
            className="bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 shadow-sm rounded-b-sm relative"
          >
            {/* Cord ties / rings */}
            <div className="absolute top-2 left-0 right-0 h-1 bg-amber-400/80 rounded-xs" />
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-amber-400/80 rounded-xs" />
            <div className="absolute bottom-4 left-0 right-0 h-1 bg-amber-400/80 rounded-xs" />
          </div>
          {/* Base Stand */}
          <div className="w-5 h-2 bg-gradient-to-t from-slate-700 to-slate-500 rounded-t-sm shadow-xs -mt-1" />
        </div>
      )}

      {/* Flag Canvas Wrapper with 3D Flutter and Wave Animation */}
      <div 
        className="relative flag-wave-container z-10"
        style={{
          width: s.width,
          height: s.height,
          transformOrigin: 'left center',
          animation: `flagFlutter ${currentDuration} ease-in-out infinite alternate`,
          filter: showGlow ? 'drop-shadow(0 8px 16px rgba(220, 20, 60, 0.28))' : 'none',
        }}
      >
        {/* Crisp Mathematical Vector Nepal Flag */}
        <svg
          viewBox="0 0 395 505"
          className="w-full h-full block overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Silk cloth gradient shimmer */}
            <linearGradient id="silkSheen" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DC143C" />
              <stop offset="35%" stopColor="#FF2E56" />
              <stop offset="70%" stopColor="#C40E32" />
              <stop offset="100%" stopColor="#E61943" />
            </linearGradient>

            {/* Deep Royal Blue Border */}
            <linearGradient id="blueBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#003893" />
              <stop offset="50%" stopColor="#002266" />
              <stop offset="100%" stopColor="#001440" />
            </linearGradient>
          </defs>

          {/* Double-Pennant Body with Deep Blue Border */}
          <path
            fill="url(#silkSheen)"
            stroke="url(#blueBorderGrad)"
            strokeWidth="15"
            strokeLinejoin="round"
            strokeLinecap="round"
            d="M 10 495 L 380 495 L 140 245 L 380 245 L 10 10 Z"
          />

          {/* Pure White Emblems: Crescent Moon with 8-ray Sun & 12-ray Sun */}
          {/* Upper Crescent Moon with 8 rays */}
          <path
            fill="#FFFFFF"
            d="m 180.7 355.8 l -27 9 l 21.2 19.8 l -28.5 -1.8 l 11.7 26.2 l -25.5 -12.3 l 0.5 28.6 l -18.8 -20.9 l -10.7 26.6 l -9.2 -26.3 l -20.3 20.6 l 1.8 -27.7 L 49 409 l 12.6 -25 l -29.3 0.6 l 21.5 -18.3 l -27.3 -10.5 l 27 -9 L 32.2 327 l 28.4 1.8 L 49 302.6 l 25.6 12.3 l -0.5 -28.6 l 18.8 20.9 l 10.7 -26.6 l 9.1 26.3 l 20.4 -20.6 l -1.9 27.7 l 27 -11.4 l -12.7 25 l 29.4 -0.6 l -21.5 18.3 z"
            transform="scale(0.85) translate(40, -110)"
          />

          {/* Lower 12-pointed Sun */}
          <path
            fill="#FFFFFF"
            d="m 180.7 355.8 l -27 9 l 21.2 19.8 l -28.5 -1.8 l 11.7 26.2 l -25.5 -12.3 l 0.5 28.6 l -18.8 -20.9 l -10.7 26.6 l -9.2 -26.3 l -20.3 20.6 l 1.8 -27.7 L 49 409 l 12.6 -25 l -29.3 0.6 l 21.5 -18.3 l -27.3 -10.5 l 27 -9 L 32.2 327 l 28.4 1.8 L 49 302.6 l 25.6 12.3 l -0.5 -28.6 l 18.8 20.9 l 10.7 -26.6 l 9.1 26.3 l 20.4 -20.6 l -1.9 27.7 l 27 -11.4 l -12.7 25 l 29.4 -0.6 l -21.5 18.3 z"
            transform="scale(0.7) translate(30, 200)"
          />
        </svg>

        {/* Dynamic Light Ripple Sheen (Simulating flowing wind waves on cloth) */}
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-70"
          style={{
            background: 'linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.45) 45%, rgba(0,0,0,0.35) 60%, transparent 85%)',
            backgroundSize: '200% 100%',
            animation: `clothRipple ${currentDuration} linear infinite`,
          }}
        />

        {/* Subtle Wind Breeze Trails */}
        <div className="absolute -right-3 top-8 w-6 h-0.5 bg-white/40 rounded-full blur-[0.5px] animate-pulse pointer-events-none" />
        <div className="absolute -right-5 top-24 w-8 h-0.5 bg-white/30 rounded-full blur-[0.5px] animate-pulse pointer-events-none" style={{ animationDelay: '0.4s' }} />
        <div className="absolute -right-4 bottom-8 w-5 h-0.5 bg-white/30 rounded-full blur-[0.5px] animate-pulse pointer-events-none" style={{ animationDelay: '0.8s' }} />
      </div>

      {/* Global Embedded Styles for Realistic Cloth Flutter Physics */}
      <style jsx>{`
        @keyframes flagFlutter {
          0% {
            transform: perspective(600px) rotateY(0deg) rotateZ(0deg) skewY(0deg) scaleY(1);
          }
          25% {
            transform: perspective(600px) rotateY(12deg) rotateZ(1.5deg) skewY(2deg) scaleY(0.97);
          }
          50% {
            transform: perspective(600px) rotateY(-8deg) rotateZ(-1deg) skewY(-2.5deg) scaleY(1.02);
          }
          75% {
            transform: perspective(600px) rotateY(15deg) rotateZ(2deg) skewY(1.5deg) scaleY(0.98);
          }
          100% {
            transform: perspective(600px) rotateY(-12deg) rotateZ(-1.5deg) skewY(-1.8deg) scaleY(1.01);
          }
        }

        @keyframes clothRipple {
          0% {
            background-position: -120% 0;
          }
          100% {
            background-position: 220% 0;
          }
        }
      `}</style>
    </div>
  );
}
