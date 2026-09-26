'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Move, 
  Trash2, 
  RotateCcw, 
  Sparkles, 
  Copy, 
  Check, 
  Plus, 
  Minus, 
  Maximize2, 
  X,
  Sliders,
  Calendar, 
  Calculator, 
  ImageIcon, 
  ArrowRightLeft, 
  FileText, 
  Coins, 
  Building2, 
  ScrollText, 
  Split, 
  Layers, 
  Compass, 
  FileSpreadsheet, 
  FileStack, 
  GraduationCap, 
  QrCode, 
  Smartphone, 
  Play, 
  Wallet, 
  Send, 
  Bot, 
  Facebook, 
  Instagram, 
  Github, 
  Globe, 
  Mail, 
  MapPin,
  ChevronRight,
  Eye,
  Grid
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';

export interface FreeWidget {
  id: string;
  nameNp: string;
  x: number;
  y: number;
  width: number;
  height?: number;
  zIndex: number;
  deleted: boolean;
}

// Initial 2D Positions & Sizes for every independent component on the canvas
const INITIAL_WIDGETS: FreeWidget[] = [
  // 1. Citizen Greeting Headline
  { id: 'w-greeting-text', nameNp: 'नागरिक सेवा शीर्षक & सन्देश', x: 20, y: 30, width: 720, zIndex: 10, deleted: false },
  
  // 2. Nepali Tithi Widget (Independently movable!)
  { id: 'w-tithi-widget', nameNp: 'नेपाली पात्रो & पञ्चाङ्ग (Tithi Widget)', x: 760, y: 30, width: 380, zIndex: 11, deleted: false },

  // 3. Quick Access Tiles (Independently movable & resizable!)
  { id: 'w-tile-calc', nameNp: 'टाइल १: जग्गा क्यालकुलेटर', x: 20, y: 250, width: 260, zIndex: 12, deleted: false },
  { id: 'w-tile-photo', nameNp: 'टाइल २: फोटो कम्प्रेसर', x: 300, y: 250, width: 260, zIndex: 13, deleted: false },
  { id: 'w-tile-unicode', nameNp: 'टाइल ३: Preeti ⇄ Unicode', x: 580, y: 250, width: 260, zIndex: 14, deleted: false },
  { id: 'w-tile-pdf', nameNp: 'टाइल ४: तस्विरबाट A4 PDF', x: 860, y: 250, width: 260, zIndex: 15, deleted: false },
  { id: 'w-tile-malpot', nameNp: 'टाइल ५: मालपोत तथा कर', x: 20, y: 390, width: 260, zIndex: 16, deleted: false },
  { id: 'w-tile-offices', nameNp: 'टाइल ६: ७७ जिल्ला नापी', x: 300, y: 390, width: 260, zIndex: 17, deleted: false },
  { id: 'w-tile-legal', nameNp: 'टाइल ७: जग्गा बैना कागज', x: 580, y: 390, width: 260, zIndex: 18, deleted: false },
  { id: 'w-tile-kitta', nameNp: 'टाइल ८: कित्ताकाट मापदण्ड', x: 860, y: 390, width: 260, zIndex: 19, deleted: false },

  // 4. Secondary Chips Strip
  { id: 'w-chips-strip', nameNp: 'थप टूल्स चिप्स पट्टी (AutoCAD, KML, Quiz)', x: 20, y: 530, width: 1100, zIndex: 20, deleted: false },

  // 5. Precision Land Calculator
  { id: 'w-land-calculator', nameNp: 'जग्गा क्यालकुलेटर मुख्य इन्जिन', x: 20, y: 610, width: 1120, zIndex: 21, deleted: false },

  // 6. Mobile Apps Showcase
  { id: 'w-app-land-solution', nameNp: 'एप कार्ड १: Land Solution नापी एप', x: 20, y: 1180, width: 540, zIndex: 22, deleted: false },
  { id: 'w-app-hamro-kosh', nameNp: 'एप कार्ड २: हाम्रो कोष बचत सफ्टवेयर', x: 580, y: 1180, width: 540, zIndex: 23, deleted: false },

  // 7. Contact Info & Map (Separate movable boxes!)
  { id: 'w-contact-info', nameNp: 'सम्पर्क विवरण (इमेल र ठेगाना)', x: 20, y: 1380, width: 440, zIndex: 24, deleted: false },
  { id: 'w-contact-map', nameNp: 'काठमाडौँ गुगल नक्सा (Interactive Map)', x: 20, y: 1600, width: 440, zIndex: 25, deleted: false },
  { id: 'w-contact-form', nameNp: 'सिधै सन्देश पठाउने फारम (Message Form)', x: 480, y: 1380, width: 660, zIndex: 26, deleted: false },

  // 8. Footer Columns (Separate movable boxes!)
  { id: 'w-footer-brand', nameNp: 'फुटर १: ब्रान्ड, विवरण & सोसियल', x: 20, y: 1920, width: 340, zIndex: 27, deleted: false },
  { id: 'w-footer-tools', nameNp: 'फुटर २: डिजिटल उपकरण तथा PDF लिङ्कहरू', x: 380, y: 1920, width: 240, zIndex: 28, deleted: false },
  { id: 'w-footer-study', nameNp: 'फुटर ३: स्रोत तथा अध्ययन लिङ्कहरू', x: 640, y: 1920, width: 240, zIndex: 29, deleted: false },
  { id: 'w-footer-contact', nameNp: 'फुटर ४: सम्पर्क तथा सहयोग बक्स', x: 900, y: 1920, width: 240, zIndex: 30, deleted: false },
  { id: 'w-footer-bottom', nameNp: 'फुटर तल्लो पट्टी (कपीराइट & AI बटन)', x: 20, y: 2200, width: 1120, zIndex: 31, deleted: false }
];

export default function InteractiveLayoutBuilder() {
  const [widgets, setWidgets] = useState<FreeWidget[]>(INITIAL_WIDGETS);
  const [maxZ, setMaxZ] = useState<number>(40);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeWidgetId, setActiveWidgetId] = useState<string | null>(null);
  const [canvasHeight, setCanvasHeight] = useState<number>(2400);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Activate Browser designMode for UNRESTRICTED TYPING OF EVERY WORD
  useEffect(() => {
    if (typeof document !== 'undefined') {
      try {
        document.designMode = 'on';
      } catch (e) {}
    }
  }, []);

  // Free Dragging (Mouse Move anywhere in 2D Space)
  const handleDragStart = (e: React.MouseEvent, widgetId: string) => {
    // Don't drag if clicking inside an input or button
    const target = e.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.classList.contains('resize-corner-handle') || target.classList.contains('no-drag')) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    setActiveWidgetId(widgetId);
    const newZ = maxZ + 1;
    setMaxZ(newZ);

    const startX = e.clientX;
    const startY = e.clientY;
    const widget = widgets.find(w => w.id === widgetId);
    if (!widget) return;
    const initialX = widget.x;
    const initialY = widget.y;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;
      const newX = Math.max(0, initialX + dx);
      const newY = Math.max(0, initialY + dy);

      setWidgets(prev => prev.map(w => {
        if (w.id === widgetId) {
          return { ...w, x: newX, y: newY, zIndex: newZ };
        }
        return w;
      }));

      // Adjust canvas height if moved past bottom
      if (newY + 400 > canvasHeight) {
        setCanvasHeight(newY + 600);
      }
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  // Custom Corner Drag Resizing (Stretches width and height like a picture!)
  const handleCornerResize = (e: React.MouseEvent, widgetId: string) => {
    e.preventDefault();
    e.stopPropagation();

    const startX = e.clientX;
    const startY = e.clientY;
    const widget = widgets.find(w => w.id === widgetId);
    if (!widget) return;
    const initialWidth = widget.width;
    const initialHeight = widget.height || 150;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;
      const newWidth = Math.max(160, initialWidth + dx);
      const newHeight = Math.max(60, initialHeight + dy);

      setWidgets(prev => prev.map(w => {
        if (w.id === widgetId) {
          return { ...w, width: newWidth, height: newHeight };
        }
        return w;
      }));
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  // Delete Widget
  const deleteWidget = (widgetId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWidgets(prev => prev.map(w => w.id === widgetId ? { ...w, deleted: true } : w));
  };

  // Restore Widget
  const restoreWidget = (widgetId: string) => {
    setWidgets(prev => prev.map(w => w.id === widgetId ? { ...w, deleted: false } : w));
  };

  // Reset Everything
  const resetCanvas = () => {
    if (window.confirm('सुरुको सामान्य अवस्थामा फर्काउन चाहनुहुन्छ?')) {
      setWidgets(INITIAL_WIDGETS);
    }
  };

  // Quick resize buttons (+ / -)
  const adjustWidth = (widgetId: string, delta: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setWidgets(prev => prev.map(w => {
      if (w.id === widgetId) {
        return { ...w, width: Math.max(180, w.width + delta) };
      }
      return w;
    }));
  };

  // Copy Full Coordinates & Design Code for Agent
  const copyLayoutPlan = () => {
    const active = widgets.filter(w => !w.deleted);
    const summary = active.map(w => `• [${w.nameNp}]: X=${w.x}px, Y=${w.y}px, चौडाइ=${w.width}px`).join('\n');
    const deletedList = widgets.filter(w => w.deleted).map(w => w.nameNp).join(', ');

    const text = `नमस्ते! मैले वेबसाइटलाई क्यानभासमा तस्विर जस्तै फ्री-ड्र्याग गरेर आफ्नो इच्छा अनुसार मिलाएँ। कृपया यसै अनुसार मुख्य होमपेज सेट गरिदिनुहोस्:\n\n【प्रत्येक बक्सको स्थान र साइज】:\n${summary}\n\n【हटाइएका बक्सहरू】: ${deletedList || 'कुनै छैन'}\n\n[Code]: ${JSON.stringify(active.map(w => ({ id: w.id, x: w.x, y: w.y, width: w.width })))}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const deletedList = widgets.filter(w => w.deleted);

  return (
    <div className="space-y-4">
      
      {/* ========================================================= */}
      {/* TOP FLOATING CANVAS STUDIO HEADER                         */}
      {/* ========================================================= */}
      <div 
        contentEditable={false}
        suppressContentEditableWarning={true}
        className="sticky top-14 z-50 bg-slate-950/95 text-white backdrop-blur-md px-4 py-3 rounded-2xl border-2 border-emerald-500 shadow-2xl space-y-2 select-none"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-black text-white">
                  🎨 क्यानभास फ्री-मुभ स्टुडियो (Canva-Style Free Move & Drag Studio)
                </span>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950">
                  २D Free Canvas
                </span>
              </div>
              <p className="text-[11px] text-emerald-200">
                वेबसाइटको <strong>हरेक भाग (पात्रो, क्यालकुलेटर, टाइल, नक्सा, फारम, फुटर) लाई माउसले समातेर जहाँ मन लाग्छ त्यहाँ तान्नुहोस्</strong>। दायाँ कुना तानेर <strong>साइज जत्रो पनि बनाउनुहोस्</strong>, र <strong>अक्षर सिधै टाइप गर्नुहोस्</strong>।
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={resetCanvas}
              title="सुरुको अवस्थामा फर्काउनुहोस्"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={copyLayoutPlan}
              className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer ${
                copied ? 'bg-emerald-400 text-slate-950' : 'bg-emerald-600 hover:bg-emerald-500 text-white'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'कपी गरियो!' : '💾 यो फाइनल तस्विर/लेआउट सेभ & कपी गर्नुहोस्'}</span>
            </button>
          </div>

        </div>

        {/* Deleted Restoration Strip */}
        {deletedList.length > 0 && (
          <div className="bg-amber-950/80 border border-amber-500/40 p-2 rounded-xl text-xs text-amber-200 flex items-center justify-between flex-wrap gap-2">
            <span>हटाइएका बक्सहरू ({deletedList.length}):</span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {deletedList.map(w => (
                <button
                  key={w.id}
                  onClick={() => restoreWidget(w.id)}
                  className="px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                  <span>{w.nameNp} फिर्ता</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* THE 2D FREE-FLOATING CANVAS WORKSPACE                      */}
      {/* ========================================================= */}
      <div 
        ref={canvasRef}
        style={{ height: `${canvasHeight}px` }}
        className="relative w-full rounded-3xl border-2 border-dashed border-emerald-500/40 bg-slate-900/20 backdrop-blur-xs overflow-hidden select-text p-4"
      >
        
        {/* Background Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

        {/* RENDER EVERY INDEPENDENT FREE-FLOATING WIDGET */}
        {widgets.map((widget) => {
          if (widget.deleted) return null;

          return (
            <div
              key={widget.id}
              style={{
                position: 'absolute',
                left: `${widget.x}px`,
                top: `${widget.y}px`,
                width: `${widget.width}px`,
                height: widget.height ? `${widget.height}px` : 'auto',
                zIndex: widget.zIndex,
              }}
              onMouseDown={(e) => handleDragStart(e, widget.id)}
              className="group/widget absolute transition-shadow duration-75 cursor-grab active:cursor-grabbing hover:ring-2 hover:ring-emerald-400 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md select-text"
            >
              
              {/* Widget Top Controller Pill (Always Visible on Hover) */}
              <div 
                contentEditable={false}
                suppressContentEditableWarning={true}
                className="no-drag absolute -top-8 left-0 right-0 h-7 px-2 bg-slate-950/90 text-white rounded-t-xl border border-slate-700 flex items-center justify-between text-[11px] font-bold select-none opacity-90 group-hover/widget:opacity-100 transition-opacity z-30"
              >
                <div className="flex items-center gap-1.5 truncate">
                  <Move className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{widget.nameNp}</span>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button 
                    onClick={(e) => adjustWidth(widget.id, -40, e)}
                    title="चौडाइ सानो बनाउनुहोस्"
                    className="p-1 hover:bg-slate-800 rounded text-slate-300 hover:text-white"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <button 
                    onClick={(e) => adjustWidth(widget.id, 40, e)}
                    title="चौडाइ ठूलो बनाउनुहोस्"
                    className="p-1 hover:bg-slate-800 rounded text-slate-300 hover:text-white"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                  <button 
                    onClick={(e) => deleteWidget(widget.id, e)}
                    title="यो बक्स हटाउनुहोस्"
                    className="p-1 hover:bg-rose-900 rounded text-rose-400"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* WIDGET CONTENT */}
              <div className="p-3 w-full h-full overflow-hidden">
                
                {/* 1. Greeting Headline */}
                {widget.id === 'w-greeting-text' && (
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-700 via-teal-700 to-indigo-800 text-white space-y-2 h-full flex flex-col justify-center">
                    <span className="text-xs font-bold text-emerald-200 tracking-wider uppercase flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>नेपाल डिजिटल नागरिक सेवा (Citizen Services Portal)</span>
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                      तपाईंलाई आज कुन सेवा वा टूल आवश्यक छ?
                    </h1>
                    <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                      जग्गा नापजाँच, सरकारी फारमका लागि फोटो साइज घटाउने, प्रिती युनिकोड, मालपोत कर वा PDF बनाउने सम्पूर्ण काम एकै स्थानबाट गर्नुहोस्।
                    </p>
                  </div>
                )}

                {/* 2. Tithi Widget (Image 2 - Standalone movable object!) */}
                {widget.id === 'w-tithi-widget' && (
                  <div className="h-full flex items-center justify-center" contentEditable={false}>
                    <TithiWidget />
                  </div>
                )}

                {/* 3. Individual Tiles */}
                {widget.id === 'w-tile-calc' && (
                  <div className="flex items-center gap-3 h-full">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">जग्गा क्यालकुलेटर</h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">रोपनी-बिघा-वर्गमिटर हिसाब</p>
                    </div>
                  </div>
                )}

                {widget.id === 'w-tile-photo' && (
                  <div className="flex items-center gap-3 h-full">
                    <div className="w-11 h-11 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">फोटो कम्प्रेसर</h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">सरकारी फारमका लागि २००KB</p>
                    </div>
                  </div>
                )}

                {widget.id === 'w-tile-unicode' && (
                  <div className="flex items-center gap-3 h-full">
                    <div className="w-11 h-11 rounded-xl bg-teal-500 text-white flex items-center justify-center shrink-0">
                      <ArrowRightLeft className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Preeti ⇄ Unicode</h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">नेपाली टाइपिङ कन्भर्टर</p>
                    </div>
                  </div>
                )}

                {widget.id === 'w-tile-pdf' && (
                  <div className="flex items-center gap-3 h-full">
                    <div className="w-11 h-11 rounded-xl bg-indigo-500 text-white flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">तस्विरबाट A4 PDF</h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">लालपुर्जा / नक्सा डकुमेन्ट</p>
                    </div>
                  </div>
                )}

                {widget.id === 'w-tile-malpot' && (
                  <div className="flex items-center gap-3 h-full">
                    <div className="w-11 h-11 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                      <Coins className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">मालपोत तथा कर</h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">रजिस्ट्रेसन & CGT दस्तुर</p>
                    </div>
                  </div>
                )}

                {widget.id === 'w-tile-offices' && (
                  <div className="flex items-center gap-3 h-full">
                    <div className="w-11 h-11 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">७७ जिल्ला नापी</h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">कार्यालय फोन, इमेल र ठेगाना</p>
                    </div>
                  </div>
                )}

                {widget.id === 'w-tile-legal' && (
                  <div className="flex items-center gap-3 h-full">
                    <div className="w-11 h-11 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0">
                      <ScrollText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">जग्गा बैना कागज</h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">A4 कानुनी लिखत तमसुक</p>
                    </div>
                  </div>
                )}

                {widget.id === 'w-tile-kitta' && (
                  <div className="flex items-center gap-3 h-full">
                    <div className="w-11 h-11 rounded-xl bg-purple-500 text-white flex items-center justify-center shrink-0">
                      <Split className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">कित्ताकाट मापदण्ड</h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">१३० वर्गमिटर नियम चेकर</p>
                    </div>
                  </div>
                )}

                {/* 4. Chips Strip */}
                {widget.id === 'w-chips-strip' && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">थप टूल्स:</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold shrink-0">
                      <Layers className="w-3.5 h-3.5 text-emerald-600" />
                      <span>बहु-कित्ता</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold shrink-0">
                      <Compass className="w-3.5 h-3.5 text-emerald-600" />
                      <span>AutoCAD Scripts</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold shrink-0">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Excel to KML</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold shrink-0">
                      <FileStack className="w-3.5 h-3.5 text-emerald-600" />
                      <span>PDF सुइट</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold shrink-0">
                      <ScrollText className="w-3.5 h-3.5 text-emerald-600" />
                      <span>अक्षरेपी</span>
                    </span>
                  </div>
                )}

                {/* 5. Precision Land Calculator */}
                {widget.id === 'w-land-calculator' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800">
                      <h2 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-emerald-600" />
                        <span>जग्गा नापजाँच तथा रूपान्तरण क्यालकुलेटर</span>
                      </h2>
                      <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-300">
                        स्लिप प्रिन्ट उपलब्ध
                      </span>
                    </div>
                    <div contentEditable={false}>
                      <LandCalculator />
                    </div>
                  </div>
                )}

                {/* 6. Mobile Apps */}
                {widget.id === 'w-app-land-solution' && (
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white flex items-center justify-between gap-3 h-full">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400/30 p-1 flex items-center justify-center shrink-0">
                        <img src="/logo.png" alt="Land Solution" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="text-sm font-black">Land Solution (नापी एप)</h3>
                        <p className="text-[11px] text-slate-300">फिल्ड नापजाँच, कित्ताकाट र नक्सा</p>
                      </div>
                    </div>
                    <span className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold shrink-0">Web Demo</span>
                  </div>
                )}

                {widget.id === 'w-app-hamro-kosh' && (
                  <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white flex items-center justify-between gap-3 h-full">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400 shrink-0">
                        <Wallet className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-black">हाम्रो कोष (बचत सफ्टवेयर)</h3>
                        <p className="text-[11px] text-slate-300">सहकारी, समूह तथा बचत हिसाब</p>
                      </div>
                    </div>
                    <span className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold shrink-0">विवरण</span>
                  </div>
                )}

                {/* 7. Contact Details, Map & Form */}
                {widget.id === 'w-contact-info' && (
                  <div className="space-y-3 h-full">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                      <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                      <div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase block">इमेल</span>
                        <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">aabiralbhatt@gmail.com</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                      <div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase block">स्थान</span>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">काठमाडौँ, नेपाल (Kathmandu)</span>
                      </div>
                    </div>
                  </div>
                )}

                {widget.id === 'w-contact-map' && (
                  <div className="h-full flex flex-col space-y-1">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      <span>काठमाडौँ, नेपाल नक्सा</span>
                    </span>
                    <div className="flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 min-h-[140px]" contentEditable={false}>
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.64621422784!2d85.25607519967727!3d27.708942727142404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1710000000000!5m2!1sen!2snp" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        loading="lazy" 
                        title="Map"
                      ></iframe>
                    </div>
                  </div>
                )}

                {widget.id === 'w-contact-form' && (
                  <div className="space-y-3 h-full">
                    <div>
                      <h3 className="text-sm font-black text-slate-900 dark:text-white">सिधै सन्देश पठाउनुहोस्</h3>
                      <p className="text-[11px] text-slate-500">आफ्नो विवरण र आवश्यकता तल फारममा भर्नुहोस्:</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-400">नाम: उदा. रमेश अधिकारी</div>
                      <div className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-400">फोन: उदा. 98XXXXXXXX</div>
                    </div>
                    <div className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-400 h-14">
                      सन्देश यहाँ लेख्नुहोस्...
                    </div>
                    <div className="py-2 rounded-lg bg-emerald-600 text-white font-bold text-xs text-center">
                      सन्देश पठाउनुहोस्
                    </div>
                  </div>
                )}

                {/* 8. Footer Columns (Image 1) */}
                {widget.id === 'w-footer-brand' && (
                  <div className="space-y-2 h-full">
                    <div className="flex items-center gap-2">
                      <img src="/logo.png" alt="BR Bhatta" className="w-8 h-8 object-contain" />
                      <div>
                        <h4 className="text-sm font-black text-slate-900 dark:text-white leading-tight">BR Bhatta</h4>
                        <span className="text-[10px] text-emerald-600 font-semibold block">Nepal Land Tech & Surveying</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      नेपालको नापी, नक्सा, जग्गा व्यवस्थापन, कित्ताकाट तथा डिजिटल इन्जिनियरिङको आधिकारिक पोर्टल।
                    </p>
                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center text-xs"><Facebook className="w-3.5 h-3.5" /></span>
                      <span className="w-6 h-6 rounded bg-rose-500 text-white flex items-center justify-center text-xs"><Instagram className="w-3.5 h-3.5" /></span>
                      <span className="w-6 h-6 rounded bg-slate-800 text-white flex items-center justify-center text-xs"><Github className="w-3.5 h-3.5" /></span>
                    </div>
                  </div>
                )}

                {widget.id === 'w-footer-tools' && (
                  <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 h-full">
                    <h5 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">डिजिटल उपकरण तथा PDF</h5>
                    <div>› Preeti ⇄ Unicode कन्भर्टर</div>
                    <div>› कागजात फोटो कम्प्रेसर (२००KB)</div>
                    <div>› तस्विरबाट A4 PDF जेनेरेटर</div>
                    <div>› जग्गा क्यालकुलेटर (रोपनी/बिघा)</div>
                  </div>
                )}

                {widget.id === 'w-footer-study' && (
                  <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 h-full">
                    <h5 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">स्रोत तथा अध्ययन</h5>
                    <div>› ७७ जिल्ला नापी निर्देशिका</div>
                    <div>› AutoCAD LSP Scripts हब</div>
                    <div>› लोकसेवा नापी अमिन अनलाइन क्विज</div>
                    <div>› मौजुदा नापी तथा भूमि कानुन</div>
                  </div>
                )}

                {widget.id === 'w-footer-contact' && (
                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400 h-full">
                    <h5 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">सम्पर्क तथा सहयोग</h5>
                    <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 font-mono text-emerald-600 text-[11px]">
                      aabiralbhatt@gmail.com
                    </div>
                    <div className="text-[11px]">🟢 अनलाइन सहायता उपलब्ध</div>
                  </div>
                )}

                {widget.id === 'w-footer-bottom' && (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 py-2">
                    <div>© 2026 BR Bhatta (brbhatta.com). सर्वाधिकार सुरक्षित।</div>
                    <div className="flex items-center gap-3">
                      <span>हाम्रो बारेमा</span>
                      <span>गोपनीयता नीति</span>
                      <span>सर्तहरू</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center gap-1">
                      <Bot className="w-3.5 h-3.5" />
                      <span>नेपाल जग्गा AI सहायक</span>
                    </span>
                  </div>
                )}

              </div>

              {/* Bottom-Right Corner Drag-Resize Handle (Custom Resize Handle) */}
              <div
                contentEditable={false}
                suppressContentEditableWarning={true}
                onMouseDown={(e) => handleCornerResize(e, widget.id)}
                title="यो कुना तानेर साइज जत्रो पनि (सानो वा ठूलो) बनाउनुहोस् (Drag to Resize)"
                className="resize-corner-handle absolute -bottom-1 -right-1 w-5 h-5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center cursor-se-resize shadow-sm z-30 select-none"
              >
                <Sliders className="w-2.5 h-2.5 rotate-90" />
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}
