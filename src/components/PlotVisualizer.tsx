'use client';

import React, { useState, useRef, useMemo } from 'react';
import { 
  Compass, 
  Printer, 
  Download, 
  RotateCcw, 
  Info, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Copy, 
  Sparkles, 
  Share2, 
  Square, 
  Triangle, 
  Maximize2,
  FileText,
  User,
  MapPin,
  Hash,
  X
} from 'lucide-react';
import AdSenseSlot from '@/components/AdSenseSlot';
import { copyToClipboard } from '@/lib/clipboard';

type UnitType = 'ft' | 'm' | 'haat' | 'gaj';
type PlotMode = 'quad' | 'tri' | 'rect';

interface Point {
  x: number;
  y: number;
}

export default function PlotVisualizer() {
  const [plotMode, setPlotMode] = useState<PlotMode>('quad');
  const [unit, setUnit] = useState<UnitType>('ft');
  const [facing, setFacing] = useState<'N' | 'E' | 'S' | 'W'>('N');
  const [showDiagonal, setShowDiagonal] = useState(true);
  const [showTriangles, setShowTriangles] = useState(true);
  const [showAngles, setShowAngles] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  // Print slip custom fields
  const [ownerName, setOwnerName] = useState('');
  const [kittaNo, setKittaNo] = useState('');
  const [location, setLocation] = useState('');
  const [surveyorName, setSurveyorName] = useState('');

  // 4-Sided Quadrilateral Inputs (Default: A typical 4-aana Nepali plot)
  const [sideAB, setSideAB] = useState<number>(40); // Front (अगाडि)
  const [sideBC, setSideBC] = useState<number>(55); // Right (दायाँ)
  const [sideCD, setSideCD] = useState<number>(42); // Back (पछाडि)
  const [sideDA, setSideDA] = useState<number>(50); // Left (बायाँ)
  const [diagAC, setDiagAC] = useState<number>(68); // Diagonal (विकर्ण AC)

  // 3-Sided Triangle Inputs
  const [triA, setTriA] = useState<number>(50);
  const [triB, setTriB] = useState<number>(60);
  const [triC, setTriC] = useState<number>(70);

  // Rectangle Inputs
  const [rectLength, setRectLength] = useState<number>(50);
  const [rectWidth, setRectWidth] = useState<number>(30);

  const svgRef = useRef<SVGSVGElement>(null);

  // Unit conversion factor to FEET
  const unitFactorToFeet: Record<UnitType, number> = {
    ft: 1,
    m: 3.28084,
    haat: 1.5,
    gaj: 3,
  };

  const unitLabels: Record<UnitType, string> = {
    ft: 'फिट (ft)',
    m: 'मिटर (m)',
    haat: 'हात (Haat)',
    gaj: 'गज (Gaj)',
  };

  const shortUnitLabels: Record<UnitType, string> = {
    ft: 'फिट',
    m: 'मि.',
    haat: 'हात',
    gaj: 'गज',
  };

  // Pre-set samples
  const loadPreset = (type: 'standard' | 'irregular' | 'triangle' | 'terai') => {
    if (type === 'standard') {
      setPlotMode('quad');
      setUnit('ft');
      setSideAB(40);
      setSideBC(50);
      setSideCD(40);
      setSideDA(50);
      setDiagAC(64.03); // Perfect rectangle diagonal ~ sqrt(40^2 + 50^2)
    } else if (type === 'irregular') {
      setPlotMode('quad');
      setUnit('ft');
      setSideAB(38);
      setSideBC(58);
      setSideCD(44);
      setSideDA(52);
      setDiagAC(69);
    } else if (type === 'triangle') {
      setPlotMode('tri');
      setUnit('ft');
      setTriA(45);
      setTriB(55);
      setTriC(65);
    } else if (type === 'terai') {
      setPlotMode('rect');
      setUnit('haat');
      setRectLength(45);
      setRectWidth(30);
    }
  };

  // Convert Heron's formula for a triangle with sides a, b, c
  const calcTriangleHeron = (a: number, b: number, c: number) => {
    if (a + b <= c || a + c <= b || b + c <= a) {
      return { area: 0, isValid: false };
    }
    const s = (a + b + c) / 2;
    const area = Math.sqrt(Math.max(0, s * (s - a) * (s - b) * (s - c)));
    return { area, isValid: true };
  };

  // Geometric computation for Quadrilateral
  const quadGeometry = useMemo(() => {
    // Check Triangle 1: ABC (sides: AB, BC, AC)
    const t1 = calcTriangleHeron(sideAB, sideBC, diagAC);
    // Check Triangle 2: CDA (sides: CD, DA, diagAC)
    const t2 = calcTriangleHeron(sideCD, sideDA, diagAC);

    if (!t1.isValid || !t2.isValid) {
      return {
        isValid: false,
        error: 'दिएका ४ भुजा र विकर्णबाट वास्तविक जग्गा बन्न सक्दैन। कृपया विकर्ण वा भुजाको नाप जाँच गर्नुहोस् (त्रिभुजको दुई भुजाको जोड तेस्रो भुजाभन्दा बढी हुनुपर्छ)।',
        points: [] as Point[],
        areaInputUnit: 0,
        areaSqft: 0,
        area1Sqft: 0,
        area2Sqft: 0,
        perimeterInputUnit: 0,
        diag2InputUnit: 0,
        angles: { A: 0, B: 0, C: 0, D: 0 }
      };
    }

    // Coordinates:
    // Place A at (0, 0)
    // Place B at (sideAB, 0)
    const Ax = 0;
    const Ay = 0;
    const Bx = sideAB;
    const By = 0;

    // Angle CAB in Triangle ABC
    // cos(CAB) = (AB^2 + AC^2 - BC^2) / (2 * AB * AC)
    const cosCAB = (sideAB * sideAB + diagAC * diagAC - sideBC * sideBC) / (2 * sideAB * diagAC);
    const angleCAB = Math.acos(Math.max(-1, Math.min(1, cosCAB)));
    const Cx = diagAC * Math.cos(angleCAB);
    const Cy = diagAC * Math.sin(angleCAB);

    // Angle CAD in Triangle ACD
    // cos(CAD) = (AC^2 + DA^2 - CD^2) / (2 * AC * DA)
    const cosCAD = (diagAC * diagAC + sideDA * sideDA - sideCD * sideCD) / (2 * diagAC * sideDA);
    const angleCAD = Math.acos(Math.max(-1, Math.min(1, cosCAD)));
    
    // Direction of AD from X-axis = angleCAB + angleCAD
    const thetaAD = angleCAB + angleCAD;
    const Dx = sideDA * Math.cos(thetaAD);
    const Dy = sideDA * Math.sin(thetaAD);

    // Diagonal BD
    const diagBD = Math.sqrt(Math.pow(Dx - Bx, 2) + Math.pow(Dy - By, 2));

    // Interior Angles
    const rad2deg = (r: number) => (r * 180) / Math.PI;
    const angleA = rad2deg(thetaAD);

    // Angle at B (in triangle ABC)
    const cosB = (sideAB * sideAB + sideBC * sideBC - diagAC * diagAC) / (2 * sideAB * sideBC);
    const angleB = rad2deg(Math.acos(Math.max(-1, Math.min(1, cosB))));

    // Angle at D (in triangle ACD)
    const cosD = (sideDA * sideDA + sideCD * sideCD - diagAC * diagAC) / (2 * sideDA * sideCD);
    const angleD = rad2deg(Math.acos(Math.max(-1, Math.min(1, cosD))));

    const angleC = Math.max(0, 360 - (angleA + angleB + angleD));

    const totalAreaInputUnit = t1.area + t2.area;
    const factorSq = Math.pow(unitFactorToFeet[unit], 2);
    const areaSqft = totalAreaInputUnit * factorSq;
    const area1Sqft = t1.area * factorSq;
    const area2Sqft = t2.area * factorSq;
    const perimeterInputUnit = sideAB + sideBC + sideCD + sideDA;

    return {
      isValid: true,
      error: '',
      points: [
        { x: Ax, y: Ay },
        { x: Bx, y: By },
        { x: Cx, y: Cy },
        { x: Dx, y: Dy },
      ],
      areaInputUnit: totalAreaInputUnit,
      areaSqft,
      area1Sqft,
      area2Sqft,
      perimeterInputUnit,
      diag2InputUnit: diagBD,
      angles: {
        A: angleA,
        B: angleB,
        C: angleC,
        D: angleD
      }
    };
  }, [sideAB, sideBC, sideCD, sideDA, diagAC, unit]);

  // Geometric computation for Triangle
  const triGeometry = useMemo(() => {
    const t = calcTriangleHeron(triA, triB, triC);
    if (!t.isValid) {
      return {
        isValid: false,
        error: 'दिएका ३ भुजाबाट त्रिभुज बन्न सक्दैन। कुनै दुई भुजाको जोड तेस्रो भुजाभन्दा ठूलो हुनुपर्छ।',
        points: [] as Point[],
        areaInputUnit: 0,
        areaSqft: 0,
        perimeterInputUnit: 0,
        angles: { A: 0, B: 0, C: 0 }
      };
    }

    const Ax = 0;
    const Ay = 0;
    const Bx = triA;
    const By = 0;

    const cosA = (triA * triA + triC * triC - triB * triB) / (2 * triA * triC);
    const angleA = Math.acos(Math.max(-1, Math.min(1, cosA)));
    const Cx = triC * Math.cos(angleA);
    const Cy = triC * Math.sin(angleA);

    const rad2deg = (r: number) => (r * 180) / Math.PI;
    const cosB = (triA * triA + triB * triB - triC * triC) / (2 * triA * triB);
    const angleB = Math.acos(Math.max(-1, Math.min(1, cosB)));
    const degA = rad2deg(angleA);
    const degB = rad2deg(angleB);
    const degC = 180 - (degA + degB);

    const factorSq = Math.pow(unitFactorToFeet[unit], 2);
    const areaSqft = t.area * factorSq;

    return {
      isValid: true,
      error: '',
      points: [
        { x: Ax, y: Ay },
        { x: Bx, y: By },
        { x: Cx, y: Cy },
      ],
      areaInputUnit: t.area,
      areaSqft,
      perimeterInputUnit: triA + triB + triC,
      angles: {
        A: degA,
        B: degB,
        C: degC
      }
    };
  }, [triA, triB, triC, unit]);

  // Geometric computation for Rectangle
  const rectGeometry = useMemo(() => {
    if (rectLength <= 0 || rectWidth <= 0) {
      return {
        isValid: false,
        error: 'लम्बाइ र चौडाइ शून्यभन्दा ठूलो हुनुपर्छ।',
        points: [] as Point[],
        areaInputUnit: 0,
        areaSqft: 0,
        perimeterInputUnit: 0,
        diag: 0
      };
    }

    const areaInput = rectLength * rectWidth;
    const factorSq = Math.pow(unitFactorToFeet[unit], 2);
    const areaSqft = areaInput * factorSq;
    const diag = Math.sqrt(rectLength * rectLength + rectWidth * rectWidth);

    return {
      isValid: true,
      error: '',
      points: [
        { x: 0, y: 0 },
        { x: rectLength, y: 0 },
        { x: rectLength, y: rectWidth },
        { x: 0, y: rectWidth },
      ],
      areaInputUnit: areaInput,
      areaSqft,
      perimeterInputUnit: 2 * (rectLength + rectWidth),
      diag
    };
  }, [rectLength, rectWidth, unit]);

  // Current active plot values
  const currentPlot = useMemo(() => {
    if (plotMode === 'quad') {
      return {
        isValid: quadGeometry.isValid,
        error: quadGeometry.error,
        points: quadGeometry.points,
        areaSqft: quadGeometry.areaSqft,
        perimeter: quadGeometry.perimeterInputUnit,
      };
    } else if (plotMode === 'tri') {
      return {
        isValid: triGeometry.isValid,
        error: triGeometry.error,
        points: triGeometry.points,
        areaSqft: triGeometry.areaSqft,
        perimeter: triGeometry.perimeterInputUnit,
      };
    } else {
      return {
        isValid: rectGeometry.isValid,
        error: rectGeometry.error,
        points: rectGeometry.points,
        areaSqft: rectGeometry.areaSqft,
        perimeter: rectGeometry.perimeterInputUnit,
      };
    }
  }, [plotMode, quadGeometry, triGeometry, rectGeometry]);

  // Area conversions to Nepali Units
  const areaBreakdown = useMemo(() => {
    const totalSqft = currentPlot.areaSqft;
    const totalSqm = totalSqft / 10.76391;

    // Pahadi Constants
    const SQFT_PER_ROPANI = 5476;
    const SQFT_PER_AANA = 342.25;
    const SQFT_PER_PAISA = 85.5625;
    const SQFT_PER_DAAM = 21.390625;

    // Terai Constants
    const SQFT_PER_BIGHA = 72900;
    const SQFT_PER_KATHA = 3645;
    const SQFT_PER_DHUR = 182.25;
    const SQFT_PER_KANWA = 11.390625;

    // 1. Ropani
    const ropani = Math.floor(totalSqft / SQFT_PER_ROPANI);
    const remRopani = totalSqft % SQFT_PER_ROPANI;
    const aana = Math.floor(remRopani / SQFT_PER_AANA);
    const remAana = remRopani % SQFT_PER_AANA;
    const paisa = Math.floor(remAana / SQFT_PER_PAISA);
    const remPaisa = remAana % SQFT_PER_PAISA;
    const daam = (remPaisa / SQFT_PER_DAAM).toFixed(2);

    // 2. Terai
    const bigha = Math.floor(totalSqft / SQFT_PER_BIGHA);
    const remBigha = totalSqft % SQFT_PER_BIGHA;
    const katha = Math.floor(remBigha / SQFT_PER_KATHA);
    const remKatha = remBigha % SQFT_PER_KATHA;
    const dhur = Math.floor(remKatha / SQFT_PER_DHUR);
    const remDhur = remKatha % SQFT_PER_DHUR;
    const kanwa = (remDhur / SQFT_PER_KANWA).toFixed(2);

    return {
      sqft: totalSqft.toFixed(2),
      sqm: totalSqm.toFixed(2),
      pahadiText: `${ropani}-${aana}-${paisa}-${daam} (रोपनी-आना-पैसा-दाम)`,
      teraiText: `${bigha}-${katha}-${dhur}-${kanwa} (बिघा-कट्ठा-धुर-कनवा)`,
      pahadiShort: `${ropani}-${aana}-${paisa}-${daam}`,
      teraiShort: `${bigha}-${katha}-${dhur}-${kanwa}`,
      ropani,
      aana,
      paisa,
      daam,
      bigha,
      katha,
      dhur,
      kanwa,
    };
  }, [currentPlot.areaSqft]);

  // Scaled Coordinates for SVG viewport (width: 520, height: 420)
  const svgRenderData = useMemo(() => {
    if (!currentPlot.isValid || currentPlot.points.length === 0) return null;

    const pts = currentPlot.points;
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;

    pts.forEach((p) => {
      if (p.x < minX) minX = p.x;
      if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.y > maxY) maxY = p.y;
    });

    const plotWidth = Math.max(1, maxX - minX);
    const plotHeight = Math.max(1, maxY - minY);

    // SVG Target Box
    const svgW = 540;
    const svgH = 420;
    const padding = 75;

    const availableW = svgW - padding * 2;
    const availableH = svgH - padding * 2;

    const scale = Math.min(availableW / plotWidth, availableH / plotHeight);

    // Rotation angle based on facing direction
    let rotDeg = 0;
    if (facing === 'E') rotDeg = 90;
    if (facing === 'S') rotDeg = 180;
    if (facing === 'W') rotDeg = 270;

    // Center offsets
    const plotCenterX = minX + plotWidth / 2;
    const plotCenterY = minY + plotHeight / 2;

    // Transform points: invert Y because SVG Y goes downward
    const transformed = pts.map((p) => {
      // translate relative to center
      const relX = (p.x - plotCenterX) * scale;
      const relY = -(p.y - plotCenterY) * scale; // invert Y

      // apply rotation
      const rad = (rotDeg * Math.PI) / 180;
      const rotX = relX * Math.cos(rad) - relY * Math.sin(rad);
      const rotY = relX * Math.sin(rad) + relY * Math.cos(rad);

      return {
        x: svgW / 2 + rotX,
        y: svgH / 2 + rotY,
        rawX: p.x,
        rawY: p.y,
      };
    });

    // Polygon path string
    const polygonPointsStr = transformed.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

    return {
      svgW,
      svgH,
      scale,
      transformed,
      polygonPointsStr,
    };
  }, [currentPlot, facing]);

  // Copy share summary
  const handleCopy = async () => {
    const summary = `📐 जग्गाको नाप तथा रेखाचित्र प्रतिवेदन (Land Solution)
--------------------------------------
कुल क्षेत्रफल: ${areaBreakdown.sqft} वर्ग फिट (${areaBreakdown.sqm} वर्ग मिटर)
• पहाडी प्रणाली: ${areaBreakdown.pahadiText}
• तराई प्रणाली: ${areaBreakdown.teraiText}
• कुल परिमिति (चारैतिरको घेरा): ${currentPlot.perimeter.toFixed(2)} ${unitLabels[unit]}
--------------------------------------
तयार गरिएको: www.brbhatta.com/tools/plot-visualizer`;

    const ok = await copyToClipboard(summary);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Download SVG
  const handleDownloadSvg = () => {
    if (!svgRef.current) return;
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `land-plot-sketch-${Date.now()}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const vertexLabels = ['क (A)', 'ख (B)', 'ग (C)', 'घ (D)'];

  return (
    <div className="space-y-8">
      {/* Top Banner & Quick Presets */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-emerald-500/20">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>नेपालको पहिलो इन्टरएक्टिभ जग्गा रेखाचित्र स्केचर</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              जग्गाको आकार र रेखाचित्र स्केचर (Plot Visualizer)
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              जग्गाका भुजाहरू र छड्के विकर्ण (Diagonal) हाल्नुहोस्—स्क्रिनमा जग्गाको वास्तविक नक्सा (SVG Plot) प्रत्यक्ष कोरिन्छ र कुल क्षेत्रफल (रोपनी-आना / बिघा-कट्ठा) सहित A4 प्रिन्ट रिपोर्ट तयार हुन्छ।
            </p>
          </div>

          {/* Quick Presets */}
          <div className="flex flex-wrap gap-2 shrink-0">
            <span className="text-xs font-bold text-slate-400 w-full mb-1">नमुना लोड गर्नुहोस्:</span>
            <button
              onClick={() => loadPreset('standard')}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 transition-colors"
            >
              घडेरी (४०×५०)
            </button>
            <button
              onClick={() => loadPreset('irregular')}
              className="px-3 py-1.5 rounded-xl bg-emerald-500/30 hover:bg-emerald-500/40 text-emerald-200 text-xs font-semibold border border-emerald-400/30 transition-colors"
            >
              बाङ्गो जग्गा (Irregular)
            </button>
            <button
              onClick={() => loadPreset('triangle')}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 transition-colors"
            >
              त्रिभुज जग्गा
            </button>
            <button
              onClick={() => loadPreset('terai')}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 transition-colors"
            >
              तराई घडेरी (हातमा)
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Controls Left, Canvas & Results Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Input Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Mode Selector Tabs */}
          <div className="p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-1">
            <button
              onClick={() => setPlotMode('quad')}
              className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                plotMode === 'quad'
                  ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>४-भुजा (विषमबाहु)</span>
            </button>
            <button
              onClick={() => setPlotMode('tri')}
              className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                plotMode === 'tri'
                  ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Triangle className="w-3.5 h-3.5" />
              <span>३-भुजा (त्रिभुज)</span>
            </button>
            <button
              onClick={() => setPlotMode('rect')}
              className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                plotMode === 'rect'
                  ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Square className="w-3.5 h-3.5" />
              <span>आयताकार (साधारण)</span>
            </button>
          </div>

          {/* Unit & Orientation Panel */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  नापको एकाइ (Unit):
                </label>
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value as UnitType)}
                  className="w-full px-3 py-2 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                >
                  <option value="ft">फिट (Feet - ft)</option>
                  <option value="m">मिटर (Meters - m)</option>
                  <option value="haat">हात (Haat - १.५ फिट)</option>
                  <option value="gaj">गज (Gaj - ३ फिट)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  मोहोडा / अगाडिको दिशा:
                </label>
                <select
                  value={facing}
                  onChange={(e) => setFacing(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                >
                  <option value="N">उत्तर (North Facing)</option>
                  <option value="E">पूर्व (East Facing)</option>
                  <option value="S">दक्षिण (South Facing)</option>
                  <option value="W">पश्चिम (West Facing)</option>
                </select>
              </div>
            </div>

            {/* Visual Toggles */}
            <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-600 dark:text-slate-400">
                <input
                  type="checkbox"
                  checked={showDiagonal}
                  onChange={(e) => setShowDiagonal(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span>विकर्ण देखाउनुहोस्</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-600 dark:text-slate-400">
                <input
                  type="checkbox"
                  checked={showAngles}
                  onChange={(e) => setShowAngles(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span>कुनाको डिग्री (Angles)</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-600 dark:text-slate-400">
                <input
                  type="checkbox"
                  checked={showTriangles}
                  onChange={(e) => setShowTriangles(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span>त्रिभुज छायाँ (Triangles)</span>
              </label>
            </div>
          </div>

          {/* DYNAMIC INPUT FIELDS BASED ON PLOT MODE */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center justify-between">
              <span>जग्गाका भुजाहरूको नाप ({unitLabels[unit]})</span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                अमिन फिल्डबुक ढाँचा
              </span>
            </h3>

            {/* QUADRILATERAL INPUTS */}
            {plotMode === 'quad' && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      भुजा क-ख (AB - अगाडि):
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.1"
                      value={sideAB}
                      onChange={(e) => setSideAB(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      भुजा ख-ग (BC - दायाँ):
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.1"
                      value={sideBC}
                      onChange={(e) => setSideBC(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      भुजा ग-घ (CD - पछाडि):
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.1"
                      value={sideCD}
                      onChange={(e) => setSideCD(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      भुजा घ-क (DA - बायाँ):
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.1"
                      value={sideDA}
                      onChange={(e) => setSideDA(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>

                {/* Diagonal Input */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 space-y-1.5">
                    <label className="block text-xs font-black text-amber-900 dark:text-amber-200 flex items-center justify-between">
                      <span>छड्के विकर्ण (Diagonal AC - क बाट ग):</span>
                      <span className="text-[10px] text-amber-700 font-normal">जग्गाको आकार बाँध्न अनिवार्य</span>
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.1"
                      value={diagAC}
                      onChange={(e) => setDiagAC(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-sm font-black rounded-lg border border-amber-300 dark:border-amber-700 bg-white dark:bg-slate-900 text-amber-950 dark:text-amber-100 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                    <p className="text-[10px] text-amber-700 dark:text-amber-300 leading-tight">
                      * अमिनहरूले फिल्डमा बाङ्गो जग्गा नाप्दा विकर्ण लिएर २ वटा त्रिभुजमा हिसाब निकाल्छन्।
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TRIANGLE INPUTS */}
            {plotMode === 'tri' && (
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      भुजा क-ख (A):
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.1"
                      value={triA}
                      onChange={(e) => setTriA(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      भुजा ख-ग (B):
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.1"
                      value={triB}
                      onChange={(e) => setTriB(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      भुजा ग-क (C):
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.1"
                      value={triC}
                      onChange={(e) => setTriC(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300">
                  <span className="font-bold">हेरोन्स सूत्र (Heron's Formula):</span> √[s(s-a)(s-b)(s-c)] प्रयोग गरी शुद्ध क्षेत्रफल निकालिन्छ।
                </div>
              </div>
            )}

            {/* RECTANGLE INPUTS */}
            {plotMode === 'rect' && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    लम्बाइ (Length):
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0.1"
                    value={rectLength}
                    onChange={(e) => setRectLength(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    चौडाइ (Width):
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0.1"
                    value={rectWidth}
                    onChange={(e) => setRectWidth(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
              </div>
            )}

            {/* Error Message if shape is impossible */}
            {!currentPlot.isValid && (
              <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60 text-rose-800 dark:text-rose-200 text-xs flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">{currentPlot.error}</p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive SVG Canvas & Area Output (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Interactive Plot Canvas Card */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden">
            
            {/* Canvas Header / Action Bar */}
            <div className="px-5 py-3.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/70 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                  जग्गाको प्रत्यक्ष रेखाचित्र (Live SVG Plot)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadSvg}
                  disabled={!currentPlot.isValid}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all disabled:opacity-50"
                  title="SVG फोटो डाउनलोड गर्नुहोस्"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">डाउनलोड</span>
                </button>

                <button
                  onClick={() => setIsPrintModalOpen(true)}
                  disabled={!currentPlot.isValid}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-all disabled:opacity-50"
                  title="A4 प्रिन्ट स्लिप खोल्नुहोस्"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>प्रिन्ट प्रतिवेदन</span>
                </button>
              </div>
            </div>

            {/* SVG Visual Canvas Area */}
            <div className="relative p-2 sm:p-4 bg-slate-950 flex items-center justify-center min-h-[380px] sm:min-h-[420px] select-none overflow-hidden">
              
              {/* Background Grid Pattern (Blueprint Aesthetic) */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />

              {/* Compass Direction Badge (Top Right) */}
              <div className="absolute top-4 right-4 z-10 flex flex-col items-center bg-slate-900/80 backdrop-blur-md px-2.5 py-2 rounded-2xl border border-slate-700/60 shadow-lg">
                <div className="w-7 h-7 relative flex items-center justify-center">
                  <Compass className="w-6 h-6 text-emerald-400" />
                  <span className="absolute -top-1 text-[9px] font-black text-rose-400">N</span>
                </div>
                <span className="text-[9px] font-bold text-slate-300 mt-0.5">
                  {facing === 'N' ? 'उत्तर' : facing === 'E' ? 'पूर्व' : facing === 'S' ? 'दक्षिण' : 'पश्चिम'}
                </span>
              </div>

              {/* RENDER THE ACTUAL SVG PLOT */}
              {currentPlot.isValid && svgRenderData ? (
                <svg
                  ref={svgRef}
                  viewBox={`0 0 ${svgRenderData.svgW} ${svgRenderData.svgH}`}
                  className="w-full h-auto max-w-[540px] drop-shadow-2xl"
                >
                  <defs>
                    {/* Linear Gradient for Plot Surface */}
                    <linearGradient id="plotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#059669" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#0d9488" stopOpacity="0.15" />
                    </linearGradient>

                    {/* Gradient for Triangle 1 */}
                    <linearGradient id="tri1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0284c7" stopOpacity="0.30" />
                      <stop offset="100%" stopColor="#0369a1" stopOpacity="0.10" />
                    </linearGradient>

                    {/* Gradient for Triangle 2 */}
                    <linearGradient id="tri2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.30" />
                      <stop offset="100%" stopColor="#059669" stopOpacity="0.10" />
                    </linearGradient>
                  </defs>

                  {/* Shaded Triangle 1 (ABC) if enabled */}
                  {plotMode === 'quad' && showTriangles && svgRenderData.transformed.length >= 4 && (
                    <>
                      <polygon
                        points={`${svgRenderData.transformed[0].x},${svgRenderData.transformed[0].y} ${svgRenderData.transformed[1].x},${svgRenderData.transformed[1].y} ${svgRenderData.transformed[2].x},${svgRenderData.transformed[2].y}`}
                        fill="url(#tri1Grad)"
                      />
                      <polygon
                        points={`${svgRenderData.transformed[0].x},${svgRenderData.transformed[0].y} ${svgRenderData.transformed[2].x},${svgRenderData.transformed[2].y} ${svgRenderData.transformed[3].x},${svgRenderData.transformed[3].y}`}
                        fill="url(#tri2Grad)"
                      />
                    </>
                  )}

                  {/* Main Closed Plot Polygon */}
                  <polygon
                    points={svgRenderData.polygonPointsStr}
                    fill={plotMode === 'quad' && showTriangles ? 'none' : 'url(#plotGradient)'}
                    stroke="#10b981"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />

                  {/* Dashed Diagonal Line for Quadrilateral */}
                  {plotMode === 'quad' && showDiagonal && svgRenderData.transformed.length >= 4 && (
                    <g>
                      <line
                        x1={svgRenderData.transformed[0].x}
                        y1={svgRenderData.transformed[0].y}
                        x2={svgRenderData.transformed[2].x}
                        y2={svgRenderData.transformed[2].y}
                        stroke="#f59e0b"
                        strokeWidth="2"
                        strokeDasharray="6 4"
                      />
                      {/* Diagonal Text Badge */}
                      <g
                        transform={`translate(${
                          (svgRenderData.transformed[0].x + svgRenderData.transformed[2].x) / 2
                        }, ${
                          (svgRenderData.transformed[0].y + svgRenderData.transformed[2].y) / 2 - 10
                        })`}
                      >
                        <rect
                          x="-45"
                          y="-10"
                          width="90"
                          height="20"
                          rx="6"
                          fill="#78350f"
                          stroke="#f59e0b"
                          strokeWidth="1"
                        />
                        <text
                          x="0"
                          y="4"
                          fill="#fef3c7"
                          fontSize="10"
                          fontWeight="bold"
                          textAnchor="middle"
                        >
                          विकर्ण: {diagAC} {shortUnitLabels[unit]}
                        </text>
                      </g>
                    </g>
                  )}

                  {/* Edge Dimension Labels */}
                  {svgRenderData.transformed.map((p, idx) => {
                    const nextP = svgRenderData.transformed[(idx + 1) % svgRenderData.transformed.length];
                    const midX = (p.x + nextP.x) / 2;
                    const midY = (p.y + nextP.y) / 2;

                    // Edge length value
                    let val = 0;
                    if (plotMode === 'quad') {
                      val = [sideAB, sideBC, sideCD, sideDA][idx];
                    } else if (plotMode === 'tri') {
                      val = [triA, triB, triC][idx];
                    } else {
                      val = [rectLength, rectWidth, rectLength, rectWidth][idx];
                    }

                    return (
                      <g key={`edge-${idx}`} transform={`translate(${midX}, ${midY})`}>
                        <rect
                          x="-32"
                          y="-9"
                          width="64"
                          height="18"
                          rx="5"
                          fill="#0f172a"
                          stroke="#334155"
                          strokeWidth="1"
                        />
                        <text
                          x="0"
                          y="4"
                          fill="#38bdf8"
                          fontSize="9.5"
                          fontWeight="bold"
                          textAnchor="middle"
                        >
                          {val} {shortUnitLabels[unit]}
                        </text>
                      </g>
                    );
                  })}

                  {/* Vertex Pins & Corner Labels */}
                  {svgRenderData.transformed.map((p, idx) => {
                    // Small offset to keep vertex text outside
                    const label = vertexLabels[idx];
                    return (
                      <g key={`vertex-${idx}`} transform={`translate(${p.x}, ${p.y})`}>
                        <circle r="7" fill="#10b981" stroke="#ffffff" strokeWidth="2.5" />
                        <circle r="2.5" fill="#ffffff" />
                        
                        {/* Vertex Name Tag */}
                        <g transform="translate(0, -14)">
                          <rect
                            x="-18"
                            y="-9"
                            width="36"
                            height="17"
                            rx="4"
                            fill="#065f46"
                            stroke="#34d399"
                            strokeWidth="1"
                          />
                          <text
                            x="0"
                            y="3"
                            fill="#ffffff"
                            fontSize="10"
                            fontWeight="900"
                            textAnchor="middle"
                          >
                            {label.split(' ')[0]}
                          </text>
                        </g>

                        {/* Angle Text if enabled */}
                        {showAngles && plotMode === 'quad' && (
                          <text
                            x="0"
                            y="22"
                            fill="#cbd5e1"
                            fontSize="9"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            {[quadGeometry.angles.A, quadGeometry.angles.B, quadGeometry.angles.C, quadGeometry.angles.D][idx]?.toFixed(1)}°
                          </text>
                        )}
                        {showAngles && plotMode === 'tri' && (
                          <text
                            x="0"
                            y="22"
                            fill="#cbd5e1"
                            fontSize="9"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            {[triGeometry.angles.A, triGeometry.angles.B, triGeometry.angles.C][idx]?.toFixed(1)}°
                          </text>
                        )}
                      </g>
                    );
                  })}
                </svg>
              ) : (
                <div className="text-center p-8 text-slate-500 space-y-2">
                  <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto" />
                  <p className="text-sm font-bold text-slate-400">
                    नक्सा देखाउन वैध नापहरू प्रविष्ट गर्नुहोस्।
                  </p>
                </div>
              )}
            </div>

            {/* Canvas Footer Status */}
            <div className="p-3.5 bg-slate-900 border-t border-slate-800 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span>
                  चारैतिरको घेरा (Perimeter):{' '}
                  <strong className="text-white">
                    {currentPlot.perimeter.toFixed(2)} {unitLabels[unit]}
                  </strong>
                </span>
                {plotMode === 'quad' && quadGeometry.isValid && (
                  <span>
                    दोस्रो विकर्ण (BD):{' '}
                    <strong className="text-amber-400">
                      {quadGeometry.diag2InputUnit.toFixed(2)} {shortUnitLabels[unit]}
                    </strong>
                  </span>
                )}
              </div>
              <span className="text-emerald-400 font-semibold">
                ✓ डिजिटल नाप शुद्धता
              </span>
            </div>
          </div>

          {/* AREA CALCULATION RESULTS CARD */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  गणना गरिएको कुल क्षेत्रफल (Area Summary)
                </h3>
                <p className="text-xs text-slate-500">
                  पहाडी र तराई दुवै आधिकारिक नाप प्रणालीमा रूपान्तरित
                </p>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'कपी गरियो!' : 'कपी गर्नुहोस्'}</span>
              </button>
            </div>

            {/* Standard Metrics (Sq. Ft & Sq. Meters) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <span className="text-[11px] font-bold text-slate-500 block mb-1">
                  कुल वर्ग फिट (Square Feet)
                </span>
                <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {areaBreakdown.sqft} <span className="text-xs font-bold text-slate-500">sq.ft</span>
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <span className="text-[11px] font-bold text-slate-500 block mb-1">
                  कुल वर्ग मिटर (Square Meters)
                </span>
                <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {areaBreakdown.sqm} <span className="text-xs font-bold text-slate-500">sq.m</span>
                </span>
              </div>
            </div>

            {/* Pahadi & Terai Official Breakdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Pahadi System Box */}
              <div className="p-4.5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-emerald-900 dark:text-emerald-200 uppercase tracking-wider">
                    🏔️ पहाडी नाप प्रणाली
                  </span>
                  <span className="text-[10px] font-bold bg-emerald-200/60 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 px-2 py-0.5 rounded-full">
                    काठमाडौँ तथा पहाड
                  </span>
                </div>
                
                <div className="text-2xl font-black text-emerald-800 dark:text-emerald-300 tracking-tight">
                  {areaBreakdown.pahadiShort}
                </div>

                <div className="grid grid-cols-4 gap-1 pt-1 text-center border-t border-emerald-200/60 dark:border-emerald-800/60 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 block">रोपनी</span>
                    <strong className="text-emerald-900 dark:text-emerald-200">{areaBreakdown.ropani}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">आना</span>
                    <strong className="text-emerald-900 dark:text-emerald-200">{areaBreakdown.aana}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">पैसा</span>
                    <strong className="text-emerald-900 dark:text-emerald-200">{areaBreakdown.paisa}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">दाम</span>
                    <strong className="text-emerald-900 dark:text-emerald-200">{areaBreakdown.daam}</strong>
                  </div>
                </div>
              </div>

              {/* Terai System Box */}
              <div className="p-4.5 rounded-2xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-teal-900 dark:text-teal-200 uppercase tracking-wider">
                    🌾 तराई नाप प्रणाली
                  </span>
                  <span className="text-[10px] font-bold bg-teal-200/60 dark:bg-teal-800 text-teal-900 dark:text-teal-100 px-2 py-0.5 rounded-full">
                    तराई तथा मधेश
                  </span>
                </div>

                <div className="text-2xl font-black text-teal-800 dark:text-teal-300 tracking-tight">
                  {areaBreakdown.teraiShort}
                </div>

                <div className="grid grid-cols-4 gap-1 pt-1 text-center border-t border-teal-200/60 dark:border-teal-800/60 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 block">बिघा</span>
                    <strong className="text-teal-900 dark:text-teal-200">{areaBreakdown.bigha}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">कट्ठा</span>
                    <strong className="text-teal-900 dark:text-teal-200">{areaBreakdown.katha}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">धुर</span>
                    <strong className="text-teal-900 dark:text-teal-200">{areaBreakdown.dhur}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">कनवा</span>
                    <strong className="text-teal-900 dark:text-teal-200">{areaBreakdown.kanwa}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Triangle 1 & 2 Breakdown if Quad */}
            {plotMode === 'quad' && quadGeometry.isValid && (
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <span>
                  त्रिभुज १ (ABC): <strong>{quadGeometry.area1Sqft.toFixed(1)} sq.ft</strong>
                </span>
                <span>
                  त्रिभुज २ (CDA): <strong>{quadGeometry.area2Sqft.toFixed(1)} sq.ft</strong>
                </span>
                <span className="text-emerald-600 font-bold">
                  जोड: {areaBreakdown.sqft} sq.ft
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* PRINT SLIP MODAL (A4 Size Official Report) */}
      {isPrintModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 my-8 overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header (No Print) */}
            <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between shrink-0 no-print">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700">
                  <Printer className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white">
                    जग्गाको रेखाचित्र तथा क्षेत्रफल नाप प्रतिवेदन
                  </h3>
                  <p className="text-xs text-slate-500">
                    A4 साइजमा आधिकारिक स्लिप प्रिन्ट वा PDF सेभ गर्नुहोस्
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
                >
                  <Printer className="w-4 h-4" />
                  <span>प्रिन्ट गर्नुहोस्</span>
                </button>
                <button
                  onClick={() => setIsPrintModalOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Custom Inputs Toolbar (No Print) */}
            <div className="p-4 bg-slate-100/70 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs no-print shrink-0">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  जग्गाधनीको नाम:
                </label>
                <input
                  type="text"
                  placeholder="उदा: राम बहादुर श्रेष्ठ"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  कित्ता नम्बर:
                </label>
                <input
                  type="text"
                  placeholder="उदा: १२३"
                  value={kittaNo}
                  onChange={(e) => setKittaNo(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  स्थान / ठेगाना:
                </label>
                <input
                  type="text"
                  placeholder="उदा: भक्तपुर, वडा नं. ४"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  अमिन / प्राविधिक:
                </label>
                <input
                  type="text"
                  placeholder="उदा: नापी प्राविधिक"
                  value={surveyorName}
                  onChange={(e) => setSurveyorName(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            {/* A4 PRINT SHEET VIEW (PRINTABLE) */}
            <div className="p-6 sm:p-10 bg-white text-slate-900 overflow-y-auto space-y-6 print-clean-sheet font-sans">
              
              {/* Header: Pure Land Solution Identity */}
              <div className="border-b-2 border-emerald-800 pb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-black text-xl">
                    LS
                  </div>
                  <div>
                    <h1 className="text-xl font-black text-emerald-950 tracking-tight">
                      LAND SOLUTION
                    </h1>
                    <p className="text-[11px] font-bold text-emerald-800 uppercase tracking-widest">
                      नेपाल डिजिटल जग्गा नापजाँच तथा कित्ताकाट प्रणाली
                    </p>
                  </div>
                </div>

                <div className="text-right text-[11px] text-slate-600 space-y-0.5">
                  <p className="font-bold">मिति: {new Date().toLocaleDateString('ne-NP')}</p>
                  <p>वेबसाइट: www.brbhatta.com</p>
                  <p className="text-emerald-700 font-bold">स्लिप नं: LS-PL-{Math.floor(100000 + Math.random() * 900000)}</p>
                </div>
              </div>

              {/* Title */}
              <div className="text-center py-1">
                <h2 className="text-lg font-black text-slate-900 tracking-tight uppercase underline decoration-emerald-600 underline-offset-4">
                  जग्गाको रेखाचित्र तथा क्षेत्रफल नाप प्रतिवेदन
                </h2>
              </div>

              {/* Land Details Metadata Table */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs border border-slate-200 rounded-xl p-3 bg-slate-50/50">
                <div>
                  <span className="text-slate-500 block text-[10px]">जग्गाधनीको नाम:</span>
                  <strong className="text-slate-900">{ownerName || '—'}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">कित्ता नम्बर:</span>
                  <strong className="text-slate-900">{kittaNo || '—'}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">स्थान / ठेगाना:</span>
                  <strong className="text-slate-900">{location || '—'}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">मोहोडा / दिशा:</span>
                  <strong className="text-slate-900">
                    {facing === 'N' ? 'उत्तर' : facing === 'E' ? 'पूर्व' : facing === 'S' ? 'दक्षिण' : 'पश्चिम'}
                  </strong>
                </div>
              </div>

              {/* Vector SVG Plot in Print */}
              <div className="border border-slate-300 rounded-2xl p-4 bg-slate-950 flex flex-col items-center justify-center">
                <span className="text-[10px] font-bold text-slate-400 mb-2 self-start">
                  📐 जग्गाको वास्तविक रेखाचित्र (Plot Sketch):
                </span>
                {svgRenderData && (
                  <svg
                    viewBox={`0 0 ${svgRenderData.svgW} ${svgRenderData.svgH}`}
                    className="w-full max-w-[460px] h-auto"
                  >
                    <polygon
                      points={svgRenderData.polygonPointsStr}
                      fill="#065f46"
                      fillOpacity="0.3"
                      stroke="#34d399"
                      strokeWidth="3"
                    />
                    {plotMode === 'quad' && svgRenderData.transformed.length >= 4 && (
                      <line
                        x1={svgRenderData.transformed[0].x}
                        y1={svgRenderData.transformed[0].y}
                        x2={svgRenderData.transformed[2].x}
                        y2={svgRenderData.transformed[2].y}
                        stroke="#fbbf24"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                    )}
                    {svgRenderData.transformed.map((p, idx) => (
                      <g key={`print-v-${idx}`} transform={`translate(${p.x}, ${p.y})`}>
                        <circle r="6" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                        <text x="0" y="-10" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
                          {vertexLabels[idx].split(' ')[0]}
                        </text>
                      </g>
                    ))}
                  </svg>
                )}
              </div>

              {/* Measurement Table & Area Breakdown */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                
                {/* Sides Table */}
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-100 p-2 font-bold text-slate-800 border-b border-slate-200">
                    भुजाहरूको नाप विवरण ({unitLabels[unit]})
                  </div>
                  <div className="p-3 space-y-1 text-slate-700">
                    {plotMode === 'quad' && (
                      <>
                        <div className="flex justify-between">
                          <span>अगाडि (AB):</span>
                          <strong>{sideAB} {shortUnitLabels[unit]}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>दायाँ (BC):</span>
                          <strong>{sideBC} {shortUnitLabels[unit]}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>पछाडि (CD):</span>
                          <strong>{sideCD} {shortUnitLabels[unit]}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>बायाँ (DA):</span>
                          <strong>{sideDA} {shortUnitLabels[unit]}</strong>
                        </div>
                        <div className="flex justify-between text-amber-800 border-t border-slate-100 pt-1 font-bold">
                          <span>छड्के विकर्ण (AC):</span>
                          <span>{diagAC} {shortUnitLabels[unit]}</span>
                        </div>
                      </>
                    )}
                    {plotMode === 'tri' && (
                      <>
                        <div className="flex justify-between">
                          <span>भुजा A:</span>
                          <strong>{triA} {shortUnitLabels[unit]}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>भुजा B:</span>
                          <strong>{triB} {shortUnitLabels[unit]}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>भुजा C:</span>
                          <strong>{triC} {shortUnitLabels[unit]}</strong>
                        </div>
                      </>
                    )}
                    {plotMode === 'rect' && (
                      <>
                        <div className="flex justify-between">
                          <span>लम्बाइ (Length):</span>
                          <strong>{rectLength} {shortUnitLabels[unit]}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>चौडाइ (Width):</span>
                          <strong>{rectWidth} {shortUnitLabels[unit]}</strong>
                        </div>
                      </>
                    )}
                    <div className="flex justify-between border-t border-slate-200 pt-1.5 font-black text-slate-900">
                      <span>चारैतिरको परिमिति:</span>
                      <span>{currentPlot.perimeter.toFixed(2)} {shortUnitLabels[unit]}</span>
                    </div>
                  </div>
                </div>

                {/* Final Area Result Box */}
                <div className="border border-emerald-300 rounded-xl overflow-hidden bg-emerald-50/50">
                  <div className="bg-emerald-700 text-white p-2 font-bold flex justify-between items-center">
                    <span>प्रमाणित क्षेत्रफल हिसाब</span>
                    <span>{areaBreakdown.sqft} sq.ft</span>
                  </div>
                  <div className="p-3 space-y-2.5 text-xs text-slate-800">
                    <div>
                      <span className="text-[10px] text-slate-500 block">पहाडी नाप (काठमाडौँ तथा पहाड):</span>
                      <strong className="text-base text-emerald-950 font-black">{areaBreakdown.pahadiText}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">तराई नाप (मधेश तथा तराई):</span>
                      <strong className="text-base text-teal-950 font-black">{areaBreakdown.teraiText}</strong>
                    </div>
                    <div className="border-t border-emerald-200/80 pt-1 text-[11px] text-slate-600">
                      वर्ग मिटर: <strong>{areaBreakdown.sqm} sq.m</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signature Blocks */}
              <div className="pt-10 flex justify-between text-xs text-slate-800">
                <div className="text-center w-48">
                  <div className="border-b border-slate-400 mb-1 h-10" />
                  <p className="font-bold">जग्गाधनीको हस्ताक्षर</p>
                  <p className="text-[10px] text-slate-500">{ownerName || 'नाम/मिति'}</p>
                </div>

                <div className="text-center w-48">
                  <div className="border-b border-slate-400 mb-1 h-10" />
                  <p className="font-bold">नापी प्राविधिक / अमिन</p>
                  <p className="text-[10px] text-slate-500">{surveyorName || 'लाइसेन्स नं. / हस्ताक्षर'}</p>
                </div>
              </div>

              {/* Footer Notice */}
              <div className="border-t border-slate-200 pt-3 text-[10px] text-slate-500 text-center space-y-0.5">
                <p>* यो प्रतिवेदन Land Solution डिजिटल प्रणालीद्वारा ज्यामितीय गणित र हेरोन्स सूत्र अनुसार तयार गरिएको हो।</p>
                <p>Land Solution • www.brbhatta.com/tools/plot-visualizer</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Educational & Explanatory Guide Section */}
      <div className="rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
        <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
          <Info className="w-5 h-5 text-emerald-600" />
          <span>बाङ्गो जग्गा (विषमबाहु चतुर्भुज) नाप्ने अमिन सूत्र र तरिका</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <span className="font-black text-emerald-700 dark:text-emerald-400 block text-sm">
              १. विकर्ण (Diagonal) किन चाहिन्छ?
            </span>
            <p>
              कुनै पनि ४ वटा भुजा मात्र नापेर जग्गाको क्षेत्रफल कहिल्यै निश्चित हुँदैन किनकि कुनाहरू तन्किन वा खुम्चिन सक्छन्। तर कुनै एउटा कुनाबाट विपरीत कुना (उदा: क बाट ग) सम्म छड्के विकर्ण नापेपछि जग्गा दुईवटा दृढ त्रिभुजमा विभाजित हुन्छ।
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <span className="font-black text-emerald-700 dark:text-emerald-400 block text-sm">
              २. हेरोन्स सूत्र (Heron's Formula)
            </span>
            <p>
              नापी विभाग र विश्वभरका अमिनहरूले त्रिभुजको क्षेत्रफल निकाल्न हेरोन्स सूत्र प्रयोग गर्छन्:
              <br />
              <code className="text-emerald-600 font-mono font-bold block pt-1">
                s = (a + b + c) / 2
              </code>
              <code className="text-emerald-600 font-mono font-bold block">
                Area = √[s(s-a)(s-b)(s-c)]
              </code>
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <span className="font-black text-emerald-700 dark:text-emerald-400 block text-sm">
              ३. रोपनी र बिघा रूपान्तरण
            </span>
            <p>
              १ रोपनी = ५४७६ वर्ग फिट (१६ आना)
              <br />
              १ आना = ३४२.२५ वर्ग फिट (४ पैसा)
              <br />
              १ बिघा = ७२९०० वर्ग फिट (२० कट्ठा)
              <br />
              १ कट्ठा = ३६४५ वर्ग फिट (२० धुर)
            </p>
          </div>
        </div>
      </div>

      {/* AdSense Slot */}
      <AdSenseSlot slotId="plot-visualizer-bottom" format="auto" />
    </div>
  );
}
