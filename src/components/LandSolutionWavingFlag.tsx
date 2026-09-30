'use client';

import React, { useRef, useEffect } from 'react';

interface LandSolutionWavingFlagProps {
  width?: number;
  height?: number;
  scale?: number;
  speed?: number; // duration in ms, default 1600ms matching Land Solution app
  className?: string;
}

/**
 * 🇳🇵 LandSolutionWavingFlag
 * Exact 100% mathematical port of `NepalFlagWavePainter` & `WavingNepalFlag`
 * from the Land Solution Flutter application (`patro_dashboard_widget.dart`).
 *
 * Features:
 * - Multi-frequency harmonic wave flutter (sin + cos physics)
 * - Authentic curved double-pennant flag boundary
 * - Dynamic lighting sheen & cloth shading ripples
 * - Metallic golden flagpole with highlighted finial
 * - Mathematically exact 12-ray sun and 8-ray crescent moon
 * - Deep royal blue border (#003893) and crimson field (#DC143C)
 */
export default function LandSolutionWavingFlag({
  width = 64,
  height = 92,
  scale = 1.0,
  speed = 1600,
  className = '',
}: LandSolutionWavingFlagProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let startTime: number | null = null;

    const render = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % speed) / speed;

      // Handle Retina / HiDPI screens for crystal crisp rendering
      const dpr = window.devicePixelRatio || 1;
      const actualW = width * scale;
      const actualH = height * scale;

      if (canvas.width !== actualW * dpr || canvas.height !== actualH * dpr) {
        canvas.width = actualW * dpr;
        canvas.height = actualH * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, actualW, actualH);

      // Relative scaling ratio matching Land Solution base dimensions (base width 32, base height 46)
      const s = actualH / 46.0;

      // ==============================================================
      // 1. Metallic Flagpole on Left (Matches Flutter polePaint)
      // ==============================================================
      const poleX = 2.2 * s;
      const poleStartY = 3.5 * s;
      const poleEndY = actualH - 1.0 * s;

      const poleGradient = ctx.createLinearGradient(0, 0, 0, actualH);
      poleGradient.addColorStop(0.0, '#FBBF24'); // Gold highlight
      poleGradient.addColorStop(0.5, '#D97706'); // Amber body
      poleGradient.addColorStop(1.0, '#92400E'); // Shadow base

      ctx.strokeStyle = poleGradient;
      ctx.lineWidth = 2.4 * s;
      ctx.lineCap = 'round';

      ctx.beginPath();
      ctx.moveTo(poleX, poleStartY);
      ctx.lineTo(poleX, poleEndY);
      ctx.stroke();

      // Top Golden Finial Spearhead / Knob
      ctx.beginPath();
      ctx.arc(poleX, 3.0 * s, 2.5 * s, 0, Math.PI * 2);
      ctx.fillStyle = '#F59E0B';
      ctx.fill();

      // Finial specular highlight
      ctx.beginPath();
      ctx.arc(1.8 * s, 2.2 * s, 0.9 * s, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.fill();

      // ==============================================================
      // Flag dimensions & harmonic wave physics (from Land Solution)
      // ==============================================================
      const startX = 3.8 * s;
      const w = actualW - startX;
      const h = actualH;

      // Harmonic multi-frequency waves for natural cloth flutter
      const wave1 = (Math.sin(progress * 2 * Math.PI) * 2.2 + Math.cos(progress * 4 * Math.PI) * 0.4) * s;
      const wave2 = (Math.sin(progress * 2 * Math.PI + Math.PI * 0.6) * 2.4) * s;
      const waveMid = (Math.sin(progress * 2 * Math.PI + Math.PI * 0.3) * 1.5) * s;

      // ==============================================================
      // 2. Build Authentic Curved Double-Pennant Flag Path
      // ==============================================================
      ctx.beginPath();
      ctx.moveTo(startX, 4.0 * s);

      // Top pennant upper edge (gently undulating slope)
      ctx.quadraticCurveTo(
        startX + w * 0.5,
        4.0 * s + waveMid * 0.5,
        startX + w + wave1,
        h * 0.43
      );

      // Top pennant trailing edge (curving inward to notch)
      ctx.quadraticCurveTo(
        startX + w * 0.65 + waveMid,
        h * 0.43,
        startX + w * 0.34 + waveMid * 0.4,
        h * 0.43
      );

      // Lower pennant upper slope (extending out to bottom tip)
      ctx.quadraticCurveTo(
        startX + w * 0.65 + wave2 * 0.5,
        h * 0.68,
        startX + w + wave2,
        h * 0.94
      );

      // Lower pennant bottom edge (curving back to hoist base)
      ctx.quadraticCurveTo(
        startX + w * 0.45,
        h * 0.94 - wave2 * 0.3,
        startX,
        h * 0.94
      );

      ctx.closePath();

      // ==============================================================
      // 3. Draw Crimson Field (#DC143C)
      // ==============================================================
      ctx.fillStyle = '#DC143C';
      ctx.fill();

      // ==============================================================
      // 4. Draw 3D Realistic Cloth Shading & Dynamic Lighting Ripples
      // ==============================================================
      ctx.save();
      ctx.clip();

      const shadeShift = (progress * w * 2.0);
      const clothShadeGradient = ctx.createLinearGradient(
        startX - shadeShift,
        0,
        startX - shadeShift + w * 3.5,
        h
      );

      clothShadeGradient.addColorStop(0.0, 'rgba(255, 255, 255, 0.22)');
      clothShadeGradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.0)');
      clothShadeGradient.addColorStop(0.4, 'rgba(0, 0, 0, 0.26)');
      clothShadeGradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.0)');
      clothShadeGradient.addColorStop(0.75, 'rgba(255, 255, 255, 0.25)');
      clothShadeGradient.addColorStop(0.9, 'rgba(0, 0, 0, 0.28)');
      clothShadeGradient.addColorStop(1.0, 'rgba(255, 255, 255, 0.0)');

      ctx.fillStyle = clothShadeGradient;
      ctx.fillRect(0, 0, actualW + 20, actualH + 20);

      // ==============================================================
      // 5. Draw Authentic Symbols (Sun & Moon)
      // ==============================================================
      ctx.fillStyle = '#FFFFFF';

      // A. UPPER PENNANT: Crescent Moon with 8 rays
      const moonCenterX = startX + w * 0.30 + (wave1 * 0.28);
      const moonCenterY = h * 0.24 + (waveMid * 0.2);
      drawAuthenticMoon(ctx, moonCenterX, moonCenterY, 4.2 * s);

      // B. LOWER PENNANT: 12-Pointed Sun
      const sunCenterX = startX + w * 0.32 + (wave2 * 0.3);
      const sunCenterY = h * 0.70 + (wave2 * 0.2);
      drawAuthenticSun(ctx, sunCenterX, sunCenterY, 4.8 * s, 2.5 * s);

      ctx.restore();

      // ==============================================================
      // 6. Draw Deep Royal Blue Border (#003893) along perimeter
      // ==============================================================
      ctx.strokeStyle = '#003893';
      ctx.lineWidth = 2.0 * s;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [width, height, scale, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: width * scale,
        height: height * scale,
        display: 'block',
      }}
      className={`select-none pointer-events-none drop-shadow-md ${className}`}
      title="Land Solution Official Waving Nepal Flag 🇳🇵"
    />
  );
}

// 🌞 Authentic 12-Ray Sun Function (Translated from Dart _drawAuthenticSun)
function drawAuthenticSun(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  outerR: number,
  innerR: number
) {
  ctx.beginPath();
  const numPoints = 12;
  for (let i = 0; i < numPoints * 2; i++) {
    const angle = (i * Math.PI / numPoints) - (Math.PI / 2);
    const r = (i % 2 === 0) ? outerR : innerR;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.closePath();
  ctx.fill();
}

// 🌙 Authentic Crescent Moon with 8 Rays Function (Translated from Dart _drawAuthenticMoon)
function drawAuthenticMoon(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number
) {
  // 1. Crescent Moon Base (Lower half curved cradle)
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI, false);
  ctx.arc(cx, cy - radius * 0.38, radius * 0.82, Math.PI, 0, true);
  ctx.closePath();
  ctx.fill();

  // 2. 8 Sun rays inside the cradle
  ctx.beginPath();
  const rays = 8;
  const rOut = radius * 0.70;
  const rIn = radius * 0.38;
  const sunCy = cy + radius * 0.05;

  for (let i = 0; i < rays * 2; i++) {
    const angle = (i * Math.PI / rays) - Math.PI;
    if (angle < -Math.PI - 0.1 || angle > 0.1) continue; // Upward-facing rays
    const r = (i % 2 === 0) ? rOut : rIn;
    const x = cx + r * Math.cos(angle);
    const y = sunCy + r * Math.sin(angle);
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.closePath();
  ctx.fill();
}
