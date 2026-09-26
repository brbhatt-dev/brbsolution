'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ArrowUp, 
  ArrowDown, 
  Trash2, 
  RotateCcw, 
  Sparkles, 
  Copy, 
  Check, 
  Eye, 
  EyeOff, 
  Columns, 
  Plus, 
  Minus, 
  Maximize2, 
  Minimize2, 
  GripVertical, 
  Move, 
  Type, 
  MapPin, 
  Mail, 
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
  Sliders,
  ChevronRight
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';
import KnowledgeBaseSection from '../KnowledgeBaseSection';

export default function InteractiveLayoutBuilder() {
  const [copied, setCopied] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);
  
  // Section Ordering (Top to Bottom)
  const [sections, setSections] = useState<string[]>([
    'sec-greeting',
    'sec-tiles',
    'sec-chips',
    'sec-calc',
    'sec-apps',
    'sec-articles',
    'sec-contact',
    'sec-footer'
  ]);

  // Section Widths (% or custom)
  const [widths, setWidths] = useState<Record<string, number>>({
    'sec-greeting': 100,
    'sec-tiles': 100,
    'sec-chips': 100,
    'sec-calc': 100,
    'sec-apps': 100,
    'sec-articles': 100,
    'sec-contact': 100,
    'sec-footer': 100,
  });

  const [deletedSections, setDeletedSections] = useState<string[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Activate Browser designMode for 100% UNRESTRICTED TYPING & EDITING ON EVERY WORD
  useEffect(() => {
    if (typeof document !== 'undefined') {
      try {
        document.designMode = 'on';
      } catch (e) {}
    }
  }, []);

  // Drag and drop handlers for section reordering
  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    const newSections = [...sections];
    const draggedItem = newSections[draggedIndex];
    newSections.splice(draggedIndex, 1);
    newSections.splice(index, 0, draggedItem);
    setDraggedIndex(index);
    setSections(newSections);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  // Move Section Up/Down
  const moveUp = (index: number) => {
    if (index === 0) return;
    const newSections = [...sections];
    const temp = newSections[index - 1];
    newSections[index - 1] = newSections[index];
    newSections[index] = temp;
    setSections(newSections);
  };

  const moveDown = (index: number) => {
    if (index === sections.length - 1) return;
    const newSections = [...sections];
    const temp = newSections[index + 1];
    newSections[index + 1] = newSections[index];
    newSections[index] = temp;
    setSections(newSections);
  };

  // Custom Resize (सानो / ठूलो बनाउने)
  const changeWidth = (id: string, delta: number) => {
    const current = widths[id] || 100;
    const next = Math.max(30, Math.min(100, current + delta));
    setWidths(prev => ({ ...prev, [id]: next }));
  };

  const setExactWidth = (id: string, pct: number) => {
    setWidths(prev => ({ ...prev, [id]: pct }));
  };

  // Delete Section
  const deleteSection = (id: string) => {
    setDeletedSections(prev => [...prev, id]);
  };

  // Restore Section
  const restoreSection = (id: string) => {
    setDeletedSections(prev => prev.filter(x => x !== id));
  };

  // Mouse drag-resize corner handle
  const handleCornerResizeMouseDown = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    const startX = e.clientX;
    const startWidthPct = widths[id] || 100;
    const containerWidth = containerRef.current?.offsetWidth || window.innerWidth;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaPct = Math.round((deltaX / containerWidth) * 100);
      const newWidth = Math.max(30, Math.min(100, startWidthPct + deltaPct));
      setWidths(prev => ({ ...prev, [id]: newWidth }));
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  // Copy Full Design for Agent
  const copyLayoutResult = () => {
    const visibleOrder = sections
      .filter(id => !deletedSections.includes(id))
      .map((id, i) => `${i + 1}. [${id}] - चौडाइ: ${widths[id] || 100}%`)
      .join('\n');

    const deletedList = deletedSections.join(', ');

    const text = `नमस्ते! मैले वेबसाइटको सम्पूर्ण भागहरू (Drag & Drop, साइज सानो/ठूलो, अक्षर सम्पादन, र डिलिट) यसरी तयार पारें। कृपया यही डिजाइन मुख्य होमपेजमा सेट गरिदिनुहोस्:\n\n【क्रम र चौडाइ (Order & Size)】:\n${visibleOrder}\n\n【हटाइएका खण्डहरू】: ${deletedList || 'कुनै छैन'}\n\n[ब्राउजरमा टाइप गरिएका सबै अक्षरहरू सुरक्षित छन्]`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* ========================================================= */}
      {/* 1. MASTER FLOATING STUDIO BAR (DRAG, RESIZE, EDIT ACCESS) */}
      {/* ========================================================= */}
      <div 
        contentEditable={false}
        suppressContentEditableWarning={true}
        className="sticky top-14 z-50 bg-slate-950/95 text-white backdrop-blur-md px-4 py-3 rounded-2xl border-2 border-emerald-500 shadow-2xl space-y-2 select-none"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-2.5 w-full lg:w-auto">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-black text-white">
                  ड्र्याग-ड्रप & साइज स्टुडियो (Drag-Drop, Move & Custom Resize Studio)
                </span>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950">
                  Full Access
                </span>
              </div>
              <p className="text-[11px] text-emerald-200">
                प्रत्येक सेक्सनलाई <strong>माउसले समातेर माथि/तल सार्नुहोस् (Drag & Drop)</strong>, <strong>दायाँ कुना तानेर साइज सानो/ठूलो (Resize)</strong> बनाउनुहोस्, र <strong>कुनै पनि अक्षरमा क्लिक गरेर सीधै टाइप गर्नुहोस्</strong>।
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap w-full lg:w-auto justify-end">
            
            {/* Toggle Controls */}
            <button
              onClick={() => setShowControls(!showControls)}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 cursor-pointer"
            >
              {showControls ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showControls ? 'कन्ट्रोल बार लुकाउनुहोस्' : 'कन्ट्रोल देखाउनुहोस्'}</span>
            </button>

            {/* Reset */}
            <button
              onClick={() => window.location.reload()}
              title="सुरुको अवस्थामा फर्काउनुहोस्"
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Copy Button */}
            <button
              onClick={copyLayoutResult}
              className={`px-4 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer ${
                copied ? 'bg-emerald-400 text-slate-950' : 'bg-emerald-600 hover:bg-emerald-500 text-white'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'कपी गरियो!' : '💾 यो लेआउट सेभ & कपी गर्नुहोस्'}</span>
            </button>

          </div>

        </div>

        {/* Deleted Items Bar */}
        {deletedSections.length > 0 && (
          <div className="bg-amber-950/80 border border-amber-500/40 p-2 rounded-xl text-xs text-amber-200 flex items-center justify-between flex-wrap gap-2">
            <span>हटाइएका सेक्सनहरू ({deletedSections.length}):</span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {deletedSections.map(id => (
                <button
                  key={id}
                  onClick={() => restoreSection(id)}
                  className="px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                  <span>{id} फिर्ता ल्याउनुहोस्</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* 2. THE DRAGGABLE, RESIZABLE, AND EDITABLE CANVAS          */}
      {/* ========================================================= */}
      <div 
        ref={containerRef} 
        className="space-y-8 flex flex-col items-center w-full"
      >
        {sections.map((sectionId, idx) => {
          if (deletedSections.includes(sectionId)) return null;

          const currentWidth = widths[sectionId] || 100;

          return (
            <div
              key={sectionId}
              draggable={showControls}
              onDragStart={(e) => handleDragStart(e, idx)}
              onDragOver={(e) => handleDragOver(e, idx)}
              onDragEnd={handleDragEnd}
              style={{ width: `${currentWidth}%` }}
              className={`transition-all duration-150 relative group/section ${
                showControls ? 'ring-1 ring-slate-300 dark:ring-slate-800 hover:ring-2 hover:ring-emerald-500 rounded-3xl p-1' : ''
              }`}
            >
              
              {/* Floating Element Top Bar (Drag, Move, Custom Size, Delete) */}
              {showControls && (
                <div 
                  contentEditable={false}
                  suppressContentEditableWarning={true}
                  className="mb-2 p-2 rounded-2xl bg-slate-900/95 text-white backdrop-blur-md border border-slate-700 shadow-md flex items-center justify-between gap-2 select-none"
                >
                  
                  {/* Left: Drag Handle, Order, Title */}
                  <div className="flex items-center gap-2 min-w-0">
                    <div 
                      title="यसलाई समातेर माथि/तल जहाँ पनि सार्नुहोस् (Drag & Drop)"
                      className="cursor-grab active:cursor-grabbing p-1.5 rounded-lg bg-emerald-600 text-white flex items-center gap-1 text-[11px] font-bold"
                    >
                      <GripVertical className="w-4 h-4" />
                      <span className="hidden sm:inline">ड्र्याग (Drag)</span>
                    </div>

                    <span className="w-5 h-5 rounded-md bg-slate-800 text-slate-200 text-xs font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>

                    <span className="text-xs font-bold text-slate-200 truncate">
                      {sectionId}
                    </span>
                  </div>

                  {/* Right: Quick Resize, Move Up/Down, Delete */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    
                    {/* Size Selector Buttons: 100%, 75%, 50%, 33% */}
                    <div className="flex items-center bg-slate-800 rounded-lg p-0.5 text-[10px] font-bold">
                      <button 
                        onClick={() => setExactWidth(sectionId, 100)} 
                        className={`px-1.5 py-0.5 rounded cursor-pointer ${currentWidth === 100 ? 'bg-emerald-500 text-black' : 'text-slate-400'}`}
                      >
                        100%
                      </button>
                      <button 
                        onClick={() => setExactWidth(sectionId, 75)} 
                        className={`px-1.5 py-0.5 rounded cursor-pointer ${currentWidth === 75 ? 'bg-emerald-500 text-black' : 'text-slate-400'}`}
                      >
                        75%
                      </button>
                      <button 
                        onClick={() => setExactWidth(sectionId, 50)} 
                        className={`px-1.5 py-0.5 rounded cursor-pointer ${currentWidth === 50 ? 'bg-emerald-500 text-black' : 'text-slate-400'}`}
                      >
                        50%
                      </button>
                    </div>

                    {/* Finer Size: Sano / Thulo Buttons */}
                    <button
                      onClick={() => changeWidth(sectionId, -10)}
                      title="सानो बनाउनुहोस् (Narrow)"
                      className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => changeWidth(sectionId, 10)}
                      title="ठूलो बनाउनुहोस् (Widen)"
                      className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>

                    {/* Move Up / Down */}
                    <button
                      onClick={() => moveUp(idx)}
                      disabled={idx === 0}
                      title="माथि सार्नुहोस्"
                      className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white disabled:opacity-30 cursor-pointer"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => moveDown(idx)}
                      disabled={idx === sections.length - 1}
                      title="तल सार्नुहोस्"
                      className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white disabled:opacity-30 cursor-pointer"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => deleteSection(sectionId)}
                      title="यो सेक्सन हटाउनुहोस्"
                      className="p-1 rounded-lg bg-rose-950 hover:bg-rose-900 text-rose-300 border border-rose-700 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                  </div>

                </div>
              )}

              {/* RENDER THE ACTUAL SECTION */}
              <div className="relative">
                
                {/* SECTION: GREETING & TITHI */}
                {sectionId === 'sec-greeting' && (
                  <section className="p-5 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-indigo-800 text-white shadow-lg space-y-4">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="space-y-2 max-w-2xl">
                        <span className="text-xs font-bold text-emerald-200 tracking-wider uppercase flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>नेपाल डिजिटल नागरिक सेवा (Citizen Services Portal)</span>
                        </span>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                          तपाईंलाई आज कुन सेवा वा टूल आवश्यक छ?
                        </h1>
                        <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-xl">
                          जग्गा नापजाँच, सरकारी फारमका लागि फोटो साइज घटाउने, प्रिती युनिकोड, मालपोत कर वा PDF बनाउने सम्पूर्ण काम एकै स्थानबाट गर्नुहोस्।
                        </p>
                      </div>
                      <div className="shrink-0 w-full sm:w-auto" contentEditable={false}>
                        <TithiWidget />
                      </div>
                    </div>
                  </section>
                )}

                {/* SECTION: 8 QUICK ACCESS TILES */}
                {sectionId === 'sec-tiles' && (
                  <section className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span>प्रमुख अनलाइन सेवाहरू (Quick Access Tiles)</span>
                      </h2>
                      <Link href="/tools" className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                        सबै १५+ टूल्स हेर्नुहोस् →
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
                      
                      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-emerald-500 transition-all flex flex-col justify-between space-y-3">
                        <div className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-xs shrink-0">
                          <Calculator className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">जग्गा क्यालकुलेटर</h3>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">रोपनी-बिघा-वर्गमिटर हिसाब</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-emerald-500 transition-all flex flex-col justify-between space-y-3">
                        <div className="w-11 h-11 rounded-xl bg-rose-500 text-white flex items-center justify-center shadow-xs shrink-0">
                          <ImageIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">फोटो कम्प्रेसर</h3>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">सरकारी फारमका लागि २००KB</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-emerald-500 transition-all flex flex-col justify-between space-y-3">
                        <div className="w-11 h-11 rounded-xl bg-teal-500 text-white flex items-center justify-center shadow-xs shrink-0">
                          <ArrowRightLeft className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Preeti ⇄ Unicode</h3>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">नेपाली टाइपिङ कन्भर्टर</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-emerald-500 transition-all flex flex-col justify-between space-y-3">
                        <div className="w-11 h-11 rounded-xl bg-indigo-500 text-white flex items-center justify-center shadow-xs shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">तस्विरबाट A4 PDF</h3>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">लालपुर्जा / नक्सा डकुमेन्ट</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-emerald-500 transition-all flex flex-col justify-between space-y-3">
                        <div className="w-11 h-11 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs shrink-0">
                          <Coins className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">मालपोत तथा कर</h3>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">रजिस्ट्रेसन & CGT दस्तुर</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-emerald-500 transition-all flex flex-col justify-between space-y-3">
                        <div className="w-11 h-11 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-xs shrink-0">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">७७ जिल्ला नापी</h3>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">कार्यालय फोन, इमेल र ठेगाना</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-emerald-500 transition-all flex flex-col justify-between space-y-3">
                        <div className="w-11 h-11 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-xs shrink-0">
                          <ScrollText className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">जग्गा बैना कागज</h3>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">A4 कानुनी लिखत तमसुक</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-emerald-500 transition-all flex flex-col justify-between space-y-3">
                        <div className="w-11 h-11 rounded-xl bg-purple-500 text-white flex items-center justify-center shadow-xs shrink-0">
                          <Split className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">कित्ताकाट मापदण्ड</h3>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">१३० वर्गमिटर नियम चेकर</p>
                        </div>
                      </div>

                    </div>
                  </section>
                )}

                {/* SECTION: SECONDARY CHIPS STRIP */}
                {sectionId === 'sec-chips' && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar pt-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">
                      थप टूल्स:
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-800 shadow-2xs shrink-0">
                      <Layers className="w-3.5 h-3.5 text-emerald-600" />
                      <span>बहु-कित्ता क्यालकुलेटर</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-800 shadow-2xs shrink-0">
                      <Compass className="w-3.5 h-3.5 text-emerald-600" />
                      <span>AutoCAD Scripts</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-800 shadow-2xs shrink-0">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Excel to KML</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-800 shadow-2xs shrink-0">
                      <FileStack className="w-3.5 h-3.5 text-emerald-600" />
                      <span>PDF सुइट</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-800 shadow-2xs shrink-0">
                      <ScrollText className="w-3.5 h-3.5 text-emerald-600" />
                      <span>अक्षरेपी (Number to Words)</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-800 shadow-2xs shrink-0">
                      <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                      <span>कित्ता QR कोड</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-800 shadow-2xs shrink-0">
                      <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                      <span>अमिन लोकसेवा क्विज</span>
                    </span>
                  </div>
                )}

                {/* SECTION: LAND CALCULATOR */}
                {sectionId === 'sec-calc' && (
                  <section id="land-calc-section" className="scroll-mt-24 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                          <Calculator className="w-5 h-5 text-emerald-600" />
                          <span>जग्गा नापजाँच तथा रूपान्तरण क्यालकुलेटर</span>
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          रोपनी-आना-पैसा-दाम र बिघा-कट्ठा-धुर-कनुवा हिसाब र आधिकारिक स्लिप प्रिन्ट
                        </p>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 shrink-0 hidden sm:inline-block">
                        स्लिप प्रिन्ट उपलब्ध
                      </span>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs p-1" contentEditable={false}>
                      <LandCalculator />
                    </div>
                  </section>
                )}

                {/* SECTION: MOBILE APPS */}
                {sectionId === 'sec-apps' && (
                  <section className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-emerald-600" />
                        <span>हाम्रा आधिकारिक मोबाइल सफ्टवेयरहरू</span>
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white border border-emerald-800/40 shadow-xs flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 p-2 flex items-center justify-center shrink-0">
                            <img src="/logo.png" alt="Land Solution" className="w-full h-full object-contain" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="text-base font-black truncate">Land Solution</h3>
                              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 shrink-0">
                                नापी एप
                              </span>
                            </div>
                            <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                              फिल्ड नापजाँच, कित्ताकाट, चारकिल्ला र नक्सा रेखांकन
                            </p>
                          </div>
                        </div>

                        <span className="px-3.5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 shrink-0 transition-colors shadow-2xs">
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span className="hidden sm:inline">Web Demo</span>
                        </span>
                      </div>

                      <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white border border-indigo-800/40 shadow-xs flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400 shrink-0">
                            <Wallet className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="text-base font-black truncate">हाम्रो कोष (Hamro Kosh)</h3>
                              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 shrink-0">
                                बचत सफ्टवेयर
                              </span>
                            </div>
                            <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                              सहकारी, समूह तथा व्यक्तिगत बचत, ऋण र ब्याज हिसाब
                            </p>
                          </div>
                        </div>

                        <span className="px-3.5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold flex items-center gap-1.5 shrink-0 transition-colors shadow-2xs">
                          <span>विवरण</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                    </div>
                  </section>
                )}

                {/* SECTION: ARTICLES */}
                {sectionId === 'sec-articles' && (
                  <section className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800">
                    <KnowledgeBaseSection />
                  </section>
                )}

                {/* SECTION: CONTACT */}
                {sectionId === 'sec-contact' && (
                  <section id="contact" className="rounded-3xl p-6 sm:p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-8">
                    
                    <div className="text-center max-w-2xl mx-auto space-y-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        <span>सम्पर्क तथा ठेगाना (Contact & Location)</span>
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                        कुनै सोधपुछ वा सहकार्यका लागि सम्पर्क गर्नुहोस्
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        ल्याण्ड सोलुसन, हाम्रो कोष एप, वा AutoCAD LSP फाइल्स सम्बन्धी कुनै पनि जिज्ञासाका लागि सिधै इमेल, सोसियल मिडिया वा तलको फर्ममार्फत सम्पर्क गर्न सक्नुहुन्छ।
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Left: Contact Info & Map */}
                      <div className="lg:col-span-5 space-y-4">
                        
                        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                            <Mail className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[11px] font-bold text-slate-500 uppercase block">आधिकारिक इमेल</span>
                            <span className="text-sm font-mono font-bold text-slate-900 dark:text-white">aabiralbhatt@gmail.com</span>
                          </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[11px] font-bold text-slate-500 uppercase block">स्थान / LOCATION</span>
                            <span className="text-sm font-bold text-slate-900 dark:text-white block">काठमाडौँ, नेपाल (Kathmandu, Nepal)</span>
                            <p className="text-[11px] text-slate-500 mt-0.5">नेपालभर अनलाइन सफ्टवेयर सपोर्ट, ल्याण्ड क्याल्कुलेसन परामर्श तथा प्राविधिक सहायता उपलब्ध छ।</p>
                          </div>
                        </div>

                        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                          <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-emerald-600" />काठमाडौँ, नेपाल (Interactive Map)</span>
                            <span className="text-[10px] text-slate-400">Kathmandu 44600</span>
                          </div>
                          <div className="h-44 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 relative bg-slate-200 dark:bg-slate-950" contentEditable={false}>
                            <iframe 
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.64621422784!2d85.25607519967727!3d27.708942727142404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1710000000000!5m2!1sen!2snp" 
                              width="100%" 
                              height="100%" 
                              style={{ border: 0 }} 
                              loading="lazy" 
                              title="Kathmandu Location"
                            ></iframe>
                          </div>
                        </div>

                      </div>

                      {/* Right: Message Form */}
                      <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 space-y-4">
                        <div>
                          <h3 className="text-lg font-black text-slate-900 dark:text-white">सिधै सन्देश पठाउनुहोस्</h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400">आफ्नो विवरण र आवश्यकता तल फारममा भर्नुहोस्:</p>
                        </div>

                        <div className="space-y-3.5">
                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">तपाईंको पूरा नाम *</label>
                            <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-400">
                              उदा. रमेश अधिकारी
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">सम्पर्क मोबाइल / फोन नम्बर *</label>
                            <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-400">
                              उदा. 98XXXXXXXX
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">कुन विषयमा सहयोग चाहिएको हो?</label>
                            <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-700 dark:text-slate-300">
                              Land Solution (नापजाँच तथा कित्ताकाट एप)
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">तपाईंको सन्देश वा प्रश्न *</label>
                            <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-400 h-20">
                              आफ्नो जिज्ञासा यहाँ लेख्नुहोस्...
                            </div>
                          </div>

                          <div>
                            <span className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm">
                              <Send className="w-3.5 h-3.5" />
                              <span>सन्देश पठाउनुहोस् (Send Message)</span>
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </section>
                )}

                {/* SECTION: FOOTER */}
                {sectionId === 'sec-footer' && (
                  <footer className="relative bg-slate-950 text-slate-300 rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                      
                      {/* Col 1 */}
                      <div className="space-y-3.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center shrink-0" contentEditable={false}>
                            <img src="/logo.png" alt="BR Bhatta" className="w-full h-full object-contain" />
                          </div>
                          <div>
                            <h4 className="text-base font-black text-white leading-tight">BR Bhatta</h4>
                            <span className="text-[11px] text-emerald-400 font-semibold block">Nepal Land Tech & Surveying</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed">
                          नेपालको नापी, नक्सा, जग्गा व्यवस्थापन, कित्ताकाट तथा डिजिटल इन्जिनियरिङको आधिकारिक पोर्टल।
                        </p>

                        <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg">
                          <MapPin className="w-3 h-3 text-emerald-400" />
                          <span>काठमाडौँ, नेपाल (Kathmandu, Nepal)</span>
                        </div>

                        <div className="flex items-center gap-2 pt-1">
                          <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center"><Facebook className="w-4 h-4" /></span>
                          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center"><Instagram className="w-4 h-4" /></span>
                          <span className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center"><Github className="w-4 h-4" /></span>
                          <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 text-white flex items-center justify-center text-xs font-bold">TikTok</span>
                        </div>
                      </div>

                      {/* Col 2 */}
                      <div className="space-y-2.5">
                        <h5 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          <span>डिजिटल उपकरण तथा PDF</span>
                        </h5>
                        <div className="space-y-1.5 text-xs text-slate-400">
                          <div className="hover:text-emerald-400">› Preeti ⇄ Unicode कन्भर्टर</div>
                          <div className="hover:text-emerald-400">› कागजात फोटो कम्प्रेसर (२००KB)</div>
                          <div className="hover:text-emerald-400">› तस्विरबाट A4 PDF जेनेरेटर</div>
                          <div className="hover:text-emerald-400">› PDF Merge & Split (जोड्ने/छुटाउने)</div>
                          <div className="hover:text-emerald-400">› नेपाली संख्या अक्षरेपी (Number to Words)</div>
                          <div className="hover:text-emerald-400">› जग्गा क्यालकुलेटर (रोपनी/बिघा)</div>
                          <div className="text-emerald-400 font-bold pt-1">सबै १६+ उपकरणहरू हेर्नुहोस् ›</div>
                        </div>
                      </div>

                      {/* Col 3 */}
                      <div className="space-y-2.5">
                        <h5 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                          <span>स्रोत तथा अध्ययन</span>
                        </h5>
                        <div className="space-y-1.5 text-xs text-slate-400">
                          <div className="hover:text-emerald-400">› ७७ जिल्ला नापी र मालपोत निर्देशिका</div>
                          <div className="hover:text-emerald-400">› AutoCAD LSP Scripts हब (.lsp)</div>
                          <div className="hover:text-emerald-400">› लोकसेवा नापी अमिन पाठ्यक्रम र प्रश्न</div>
                          <div className="hover:text-emerald-400">› लोकसेवा नापी अमिन अनलाइन क्विज</div>
                          <div className="hover:text-emerald-400">› मौजुदा नापी तथा भूमि कानुन संग्रह</div>
                          <div className="text-cyan-400 font-bold pt-1">प्राविधिक गाइड तथा लेखहरू ›</div>
                        </div>
                      </div>

                      {/* Col 4 */}
                      <div className="space-y-2.5">
                        <h5 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                          <span>सम्पर्क तथा सहयोग</span>
                        </h5>
                        <div className="space-y-2 text-xs text-slate-400">
                          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-emerald-400 font-mono">
                            <Mail className="w-3.5 h-3.5 shrink-0" />
                            <span className="truncate">aabiralbhatt@gmail.com</span>
                          </div>
                          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-[11px]">
                            🟢 अनलाइन प्राविधिक सहायता उपलब्ध
                          </div>
                          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono flex items-center gap-1.5">
                            <Globe className="w-3.5 h-3.5 text-slate-400" />
                            <span>www.brbhatta.com</span>
                          </div>
                          <div>
                            <span className="w-full py-2 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center gap-1">
                              <span>सम्पर्क फारम पठाउनुहोस् ›</span>
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                      <div className="flex items-center gap-4 flex-wrap justify-center">
                        <span className="hover:text-white">हाम्रो बारेमा (About Us)</span>
                        <span className="hover:text-white">सम्पर्क (Contact Us)</span>
                        <span className="hover:text-white">गोपनीयता नीति (Privacy Policy)</span>
                        <span className="hover:text-white">प्रयोगका सर्तहरू (Terms of Service)</span>
                        <span className="hover:text-white">अस्वीकरण (Disclaimer)</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1.5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm">
                          <Bot className="w-3.5 h-3.5" />
                          <span>नेपाल जग्गा AI सहायक</span>
                        </span>
                      </div>
                    </div>

                    <div className="text-center pt-2 text-[11px] text-slate-600 border-t border-slate-900">
                      <span>© 2026 BR Bhatta (brbhatta.com). सर्वाधिकार सुरक्षित।</span>
                    </div>

                  </footer>
                )}

                {/* Corner Drag-Resize Handle (Custom Sizing by Dragging Corner) */}
                {showControls && (
                  <div 
                    contentEditable={false}
                    suppressContentEditableWarning={true}
                    onMouseDown={(e) => handleCornerResizeMouseDown(e, sectionId)}
                    title="यो कुना तानेर साइज सानो वा ठूलो बनाउनुहोस् (Drag to Resize)"
                    className="absolute -bottom-2 -right-2 w-6 h-6 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center cursor-se-resize shadow-md z-30 select-none hover:scale-110 active:scale-125 transition-transform"
                  >
                    <Sliders className="w-3 h-3 rotate-90" />
                  </div>
                )}

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
