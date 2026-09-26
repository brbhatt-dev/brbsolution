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
  Sliders, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Calculator,
  Calendar,
  Layers,
  Split,
  Building2,
  FileText,
  ImageIcon,
  ArrowRightLeft,
  Coins,
  ScrollText,
  Wallet,
  Compass,
  FileSpreadsheet,
  FileStack,
  GraduationCap,
  Play,
  Smartphone,
  BookOpen,
  Mail,
  GripVertical,
  Type,
  MousePointer,
  Maximize2,
  Undo2,
  MapPin,
  Facebook,
  Instagram,
  Github,
  Globe,
  Heart,
  QrCode
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';
import KnowledgeBaseSection from '../KnowledgeBaseSection';
import Contact from '../Contact';

type ActiveTool = 'type' | 'delete' | 'move' | 'preview';

export default function InteractiveLayoutBuilder() {
  const [activeTool, setActiveTool] = useState<ActiveTool>('type');
  const [copied, setCopied] = useState<boolean>(false);
  const [deletedIds, setDeletedIds] = useState<string[]>([]);
  const [deletedStack, setDeletedStack] = useState<{ id: string; name: string }[]>([]);
  
  // Section Ordering and Sizes
  const [sectionOrder, setSectionOrder] = useState<string[]>([
    'sec-greeting',
    'sec-tiles',
    'sec-chips',
    'sec-calc',
    'sec-apps',
    'sec-articles',
    'sec-contact',
    'sec-footer'
  ]);

  const [sectionSizes, setSectionSizes] = useState<Record<string, '100%' | '50%' | '75%'>>({
    'sec-greeting': '100%',
    'sec-tiles': '100%',
    'sec-chips': '100%',
    'sec-calc': '100%',
    'sec-apps': '100%',
    'sec-articles': '100%',
    'sec-contact': '100%',
    'sec-footer': '100%',
  });

  const canvasRef = useRef<HTMLDivElement>(null);

  // Load saved modifications from localStorage
  useEffect(() => {
    try {
      const savedHtml = localStorage.getItem('brbhatta_custom_dom_html');
      if (savedHtml && canvasRef.current) {
        canvasRef.current.innerHTML = savedHtml;
      }
      const savedDeleted = localStorage.getItem('brbhatta_deleted_ids');
      if (savedDeleted) {
        setDeletedIds(JSON.parse(savedDeleted));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Save changes to localStorage
  const saveCanvasHtml = () => {
    try {
      if (canvasRef.current) {
        localStorage.setItem('brbhatta_custom_dom_html', canvasRef.current.innerHTML);
      }
      localStorage.setItem('brbhatta_deleted_ids', JSON.stringify(deletedIds));
    } catch (e) {}
  };

  // Move Section Up
  const moveSectionUp = (id: string) => {
    const idx = sectionOrder.indexOf(id);
    if (idx <= 0) return;
    const newOrder = [...sectionOrder];
    const temp = newOrder[idx - 1];
    newOrder[idx - 1] = newOrder[idx];
    newOrder[idx] = temp;
    setSectionOrder(newOrder);
  };

  // Move Section Down
  const moveSectionDown = (id: string) => {
    const idx = sectionOrder.indexOf(id);
    if (idx === -1 || idx >= sectionOrder.length - 1) return;
    const newOrder = [...sectionOrder];
    const temp = newOrder[idx + 1];
    newOrder[idx + 1] = newOrder[idx];
    newOrder[idx] = temp;
    setSectionOrder(newOrder);
  };

  // Cycle Section Size
  const cycleSectionSize = (id: string) => {
    const current = sectionSizes[id] || '100%';
    const nextSize: '100%' | '50%' | '75%' = current === '100%' ? '50%' : current === '50%' ? '75%' : '100%';
    setSectionSizes(prev => ({ ...prev, [id]: nextSize }));
  };

  // Delete an Element or Section
  const handleDeleteElement = (id: string, name: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!deletedIds.includes(id)) {
      const nextDeleted = [...deletedIds, id];
      setDeletedIds(nextDeleted);
      setDeletedStack(prev => [...prev, { id, name }]);
    }
  };

  // Undo Last Deletion
  const undoLastDelete = () => {
    if (deletedStack.length === 0) return;
    const last = deletedStack[deletedStack.length - 1];
    setDeletedIds(prev => prev.filter(x => x !== last.id));
    setDeletedStack(prev => prev.slice(0, prev.length - 1));
  };

  // Reset Everything to Default
  const resetAll = () => {
    if (window.confirm('के तपाईं सबै सम्पादन र डिलिटहरू रिसेट गरेर सुरुको अवस्थामा फर्काउन चाहनुहुन्छ?')) {
      localStorage.removeItem('brbhatta_custom_dom_html');
      localStorage.removeItem('brbhatta_deleted_ids');
      window.location.reload();
    }
  };

  // Copy Full Custom Design Code for Agent
  const copyFullDesign = () => {
    saveCanvasHtml();
    const visibleOrder = sectionOrder
      .filter(id => !deletedIds.includes(id))
      .map((id, idx) => `${idx + 1}. [${id}] - चौडाइ: ${sectionSizes[id] || '100%'}`)
      .join('\n');

    const deletedList = deletedIds.join(', ');

    const text = `नमस्ते! मैले वेबसाइटको सम्पूर्ण भागहरू (हरेक अक्षर, साइज, र डिलिट) यसरी तयार पारें, कृपया मुख्य साइटमा स्थायी रूपमा सेट गरिदिनुहोस्:\n\n【सेक्सनहरूको क्रम र साइज】:\n${visibleOrder}\n\n【हटाइएका खण्ड/एलिमेन्टहरू】: ${deletedList || 'कुनै छैन'}\n\n[सबै नयाँ अक्षर र संरचना ब्राउजरमा सुरक्षित छ]।`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const isEditable = activeTool === 'type';
  const isDeleteMode = activeTool === 'delete';
  const isMoveMode = activeTool === 'move';

  // Helper for inline editable text
  const Editable = ({ 
    children, 
    className = "", 
    id,
    name
  }: { 
    children: React.ReactNode; 
    className?: string; 
    id: string;
    name: string;
  }) => {
    if (deletedIds.includes(id)) return null;

    return (
      <div 
        className={`relative group/elem transition-all ${className} ${
          isEditable ? 'hover:outline-1 hover:outline-dashed hover:outline-emerald-500 cursor-text rounded-xs' : ''
        } ${
          isDeleteMode ? 'hover:outline-2 hover:outline-rose-500 hover:bg-rose-50/20 cursor-pointer' : ''
        }`}
        onClick={isDeleteMode ? (e) => handleDeleteElement(id, name, e) : undefined}
      >
        {/* Delete Tooltip in Delete Mode */}
        {isDeleteMode && (
          <span className="hidden group-hover/elem:flex absolute -top-3 -right-2 bg-rose-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-md shadow-xs z-30 items-center gap-1 pointer-events-none">
            <Trash2 className="w-2.5 h-2.5" />
            <span>डिलिट</span>
          </span>
        )}

        {/* Contenteditable wrapper */}
        <div 
          contentEditable={isEditable} 
          suppressContentEditableWarning={true}
          onBlur={saveCanvasHtml}
          className="outline-none"
        >
          {children}
        </div>
      </div>
    );
  };

  // Section Wrapper with Move, Resize, Delete Controls
  const SectionWrapper = ({
    id,
    titleNp,
    children
  }: {
    id: string;
    titleNp: string;
    children: React.ReactNode;
  }) => {
    if (deletedIds.includes(id)) return null;

    const size = sectionSizes[id] || '100%';
    const isHalf = size === '50%';
    const isCompact = size === '75%';

    return (
      <div 
        id={id}
        className={`relative transition-all ${
          isHalf 
            ? 'col-span-1' 
            : isCompact 
              ? 'col-span-1 md:col-span-2 max-w-4xl mx-auto w-full' 
              : 'col-span-1 md:col-span-2 w-full'
        } ${
          isDeleteMode ? 'hover:ring-2 hover:ring-rose-500/50 rounded-2xl' : ''
        }`}
      >
        {/* Floating Section Toolbar in Move/Resize Mode */}
        {isMoveMode && (
          <div className="mb-2 p-2 rounded-xl bg-slate-900/95 text-white backdrop-blur-md border border-slate-700 shadow-lg flex items-center justify-between gap-2 z-20">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-bold text-slate-200 truncate">{titleNp}</span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => moveSectionUp(id)}
                title="माथि सार्नुहोस्"
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => moveSectionDown(id)}
                title="तल सार्नुहोस्"
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
              >
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => cycleSectionSize(id)}
                title="साइज बदल्नुहोस् (१००%, ५०%, ७५%)"
                className="px-2 py-0.5 rounded-lg text-[10px] font-bold text-indigo-300 bg-indigo-950/70 border border-indigo-700 hover:bg-indigo-900 flex items-center gap-1 cursor-pointer"
              >
                <Columns className="w-3 h-3" />
                <span>{size}</span>
              </button>
              <button
                onClick={(e) => handleDeleteElement(id, titleNp, e)}
                title="यो पूरा सेक्सन हटाउनुहोस्"
                className="p-1 rounded-lg text-rose-300 bg-rose-950/60 hover:bg-rose-900 border border-rose-700 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {children}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      
      {/* ========================================================= */}
      {/* 1. MASTER FLOATING STUDIO BAR (FULL ACCESS CONTROL)        */}
      {/* ========================================================= */}
      <div className="sticky top-14 z-50 bg-slate-950/95 text-white backdrop-blur-md px-4 py-3 rounded-2xl border border-emerald-500/40 shadow-2xl space-y-2">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
          
          {/* Status Indicator */}
          <div className="flex items-center gap-2.5 w-full lg:w-auto">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-black text-white">
                  पूर्ण नियन्त्रण सम्पादक (Full Access Visual Designer)
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  {activeTool === 'type' ? '✏️ हरेक अक्षर सम्पादन मोड' : activeTool === 'delete' ? '🗑️ डिलिट मोड' : activeTool === 'move' ? '↔ साइज & सार्ने मोड' : '👁️ प्रिभ्यु'}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 hidden sm:block">
                {activeTool === 'type' && 'वेबसाइटको कुनै पनि अक्षर, हेडिङ वा वाक्यमा क्लिक गरेर सीधै किबोर्डले बदल्नुहोस्।'}
                {activeTool === 'delete' && 'हटाउन मन लागेको कुनै पनि कार्ड, बटन, लेख वा खण्डमा क्लिक गर्नुहोस (सीधै हट्छ)।'}
                {activeTool === 'move' && 'प्रत्येक सेक्सनको माथिल्लो पट्टीबाट माथि/तल सार्नुहोस् वा १००%, ५०%, ७५% साइज बदल्नुहोस्।'}
                {activeTool === 'preview' && 'सबै टुलबार बन्द छ। तपाईंको फाइनल वेबसाइट यस्तो देखिनेछ।'}
              </p>
            </div>
          </div>

          {/* 4 Main Action Tool Buttons */}
          <div className="flex items-center gap-1.5 flex-wrap w-full lg:w-auto justify-end">
            
            {/* Tool 1: Direct Character Typing */}
            <button
              onClick={() => setActiveTool('type')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTool === 'type' 
                  ? 'bg-emerald-500 text-slate-950 font-black shadow-md' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
              }`}
            >
              <Type className="w-3.5 h-3.5" />
              <span>१. अक्षर बदल्नुहोस् (Type Text)</span>
            </button>

            {/* Tool 2: Click to Delete */}
            <button
              onClick={() => setActiveTool('delete')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTool === 'delete' 
                  ? 'bg-rose-500 text-white font-black shadow-md' 
                  : 'bg-slate-800 hover:bg-slate-700 text-rose-300'
              }`}
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>२. हटाउने मोड (Delete)</span>
            </button>

            {/* Tool 3: Size & Move */}
            <button
              onClick={() => setActiveTool('move')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTool === 'move' 
                  ? 'bg-indigo-500 text-white font-black shadow-md' 
                  : 'bg-slate-800 hover:bg-slate-700 text-indigo-300'
              }`}
            >
              <Columns className="w-3.5 h-3.5" />
              <span>३. साइज & सार्ने (Size/Move)</span>
            </button>

            {/* Tool 4: Clean Preview */}
            <button
              onClick={() => setActiveTool('preview')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTool === 'preview' 
                  ? 'bg-teal-500 text-slate-950 font-black shadow-md' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>४. फाइनल प्रिभ्यु</span>
            </button>

            {/* Undo Deletion */}
            {deletedStack.length > 0 && (
              <button
                onClick={undoLastDelete}
                title="अन्तिम डिलिट फिर्ता ल्याउनुहोस्"
                className="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 flex items-center gap-1 cursor-pointer"
              >
                <Undo2 className="w-3.5 h-3.5" />
                <span>फिर्ता ({deletedStack.length})</span>
              </button>
            )}

            {/* Reset */}
            <button
              onClick={resetAll}
              title="सबै परिवर्तनहरू रिसेट गर्नुहोस्"
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Copy Layout for Agent */}
            <button
              onClick={copyFullDesign}
              className={`px-4 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer ${
                copied 
                  ? 'bg-emerald-400 text-slate-950' 
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'कपी गरियो!' : 'सबै सेभ & कपी गर्नुहोस्'}</span>
            </button>

          </div>

        </div>

        {/* Tip Banner */}
        {activeTool === 'type' && (
          <div className="bg-emerald-950/70 border border-emerald-500/30 px-3 py-1.5 rounded-xl text-[11px] text-emerald-200 flex items-center justify-between">
            <span>💡 <strong>कसरी अक्षर बदल्ने:</strong> तल देखिने कुनै पनि हेडिङ, हरफ, बटन वा फुटरको अक्षरमा माउसले क्लिक गर्नुहोस् र सीधै किबोर्डले जे मन लाग्छ त्यही लेख्नुहोस्!</span>
            <span className="text-[10px] text-emerald-400 font-bold hidden md:inline">सीधै टाइप गर्नुहोस्</span>
          </div>
        )}

        {activeTool === 'delete' && (
          <div className="bg-rose-950/70 border border-rose-500/30 px-3 py-1.5 rounded-xl text-[11px] text-rose-200 flex items-center justify-between">
            <span>⚠️ <strong>डिलिट मोड सक्रिय छ:</strong> तपाईंले जे कुरा हटाउन चाहनुहुन्छ (कार्ड, बटन, नक्सा वा सेक्सन), त्यसमा सिधै क्लिक गर्नुहोस्, त्यो तुरुन्तै हट्नेछ। (गल्ती भए माथिको 'फिर्ता' थिच्नुहोस्)।</span>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* 2. THE COMPLETE AUTHENTIC LIVE WEBSITE (FULLY EDITABLE)    */}
      {/* ========================================================= */}
      <div ref={canvasRef} className="space-y-8 sm:space-y-10">

        {/* Grid Container for Ordered Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {sectionOrder.map((sectionId) => {
            
            // SECTION 1: CITIZEN GREETING BANNER & TITHI
            if (sectionId === 'sec-greeting') {
              return (
                <SectionWrapper key="sec-greeting" id="sec-greeting" titleNp="१. नागरिक सेवा ब्यानर & पञ्चाङ्ग">
                  <section className="p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-indigo-800 text-white shadow-md space-y-4">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                      <div className="space-y-1.5 max-w-2xl">
                        
                        <Editable id="greeting-badge" name="ब्यानर उप-शीर्षक">
                          <span className="text-xs font-bold text-emerald-200 tracking-wider uppercase flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>नेपाल डिजिटल नागरिक सेवा (CITIZEN SERVICES PORTAL)</span>
                          </span>
                        </Editable>

                        <Editable id="greeting-title" name="ब्यानर मुख्य शीर्षक">
                          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                            तपाईंलाई आज कुन सेवा वा टूल आवश्यक छ?
                          </h1>
                        </Editable>

                        <Editable id="greeting-desc" name="ब्यानर विवरण">
                          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-xl">
                            जग्गा नापजाँच, सरकारी फारमका लागि फोटो साइज घटाउने, प्रिती युनिकोड, मालपोत कर वा PDF बनाउने सम्पूर्ण काम एकै स्थानबाट गर्नुहोस्।
                          </p>
                        </Editable>

                      </div>

                      <div className="shrink-0 w-full sm:w-auto">
                        <Editable id="greeting-tithi" name="नेपाली पञ्चाङ्ग पात्रो">
                          <TithiWidget />
                        </Editable>
                      </div>
                    </div>
                  </section>
                </SectionWrapper>
              );
            }

            // SECTION 2: 8 QUICK ACCESS TILES
            if (sectionId === 'sec-tiles') {
              const tiles = [
                { id: 'tile-1', title: 'जग्गा क्यालकुलेटर', sub: 'रोपनी-बिघा-वर्गमिटर हिसाब', icon: Calculator, color: 'bg-emerald-500 text-white', href: '#land-calc-section' },
                { id: 'tile-2', title: 'फोटो कम्प्रेसर', sub: 'सरकारी फारमका लागि २००KB', icon: ImageIcon, color: 'bg-rose-500 text-white', href: '/tools/image-compressor' },
                { id: 'tile-3', title: 'Preeti ⇄ Unicode', sub: 'नेपाली टाइपिङ कन्भर्टर', icon: ArrowRightLeft, color: 'bg-teal-500 text-white', href: '/tools/preeti-to-unicode' },
                { id: 'tile-4', title: 'तस्विरबाट A4 PDF', sub: 'लालपुर्जा / नक्सा डकुमेन्ट', icon: FileText, color: 'bg-indigo-500 text-white', href: '/tools/images-to-pdf' },
                { id: 'tile-5', title: 'मालपोत तथा कर', sub: 'रजिस्ट्रेसन & CGT दस्तुर', icon: Coins, color: 'bg-amber-500 text-white', href: '/tools/malpot-calculator' },
                { id: 'tile-6', title: '७७ जिल्ला नापी', sub: 'कार्यालय फोन, इमेल र ठेगाना', icon: Building2, color: 'bg-sky-500 text-white', href: '/tools/survey-offices' },
                { id: 'tile-7', title: 'जग्गा बैना कागज', sub: 'A4 कानुनी लिखत तमसुक', icon: ScrollText, color: 'bg-orange-500 text-white', href: '/tools/legal-templates' },
                { id: 'tile-8', title: 'कित्ताकाट मापदण्ड', sub: '१३० वर्गमिटर नियम चेकर', icon: Split, color: 'bg-purple-500 text-white', href: '/tools/kitta-kat-checker' },
              ];

              return (
                <SectionWrapper key="sec-tiles" id="sec-tiles" titleNp="२. मुख्य ८ वटा अनलाइन सेवा टाइल्स">
                  <section className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <Editable id="tiles-header" name="टाइल्स शीर्षक">
                        <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-emerald-600" />
                          <span>प्रमुख अनलाइन सेवाहरू (Quick Access Tiles)</span>
                        </h2>
                      </Editable>
                      
                      <Editable id="tiles-link" name="सबै टूल्स लिङ्क">
                        <Link href="/tools" className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                          सबै १५+ टूल्स हेर्नुहोस् →
                        </Link>
                      </Editable>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                      {tiles.map((tile) => {
                        const Icon = tile.icon;
                        return (
                          <Editable key={tile.id} id={tile.id} name={tile.title}>
                            <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-2.5 h-full">
                              <div className={`w-11 h-11 rounded-xl ${tile.color} flex items-center justify-center shadow-xs shrink-0`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                                  {tile.title}
                                </h3>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                                  {tile.sub}
                                </p>
                              </div>
                            </div>
                          </Editable>
                        );
                      })}
                    </div>
                  </section>
                </SectionWrapper>
              );
            }

            // SECTION 3: COMPACT SECONDARY CHIPS STRIP
            if (sectionId === 'sec-chips') {
              const secondaryChips = [
                { id: 'chip-1', label: 'बहु-कित्ता क्यालकुलेटर', href: '/tools/multi-kitta-calculator', icon: Layers },
                { id: 'chip-2', label: 'AutoCAD Scripts', href: '/tools/autocad-scripts', icon: Compass },
                { id: 'chip-3', label: 'Excel to KML', href: '/tools/excel-to-kml', icon: FileSpreadsheet },
                { id: 'chip-4', label: 'PDF सुइट', href: '/tools/pdf-tools', icon: FileStack },
                { id: 'chip-5', label: 'अक्षरेपी (Number to Words)', href: '/tools/number-to-words', icon: ScrollText },
                { id: 'chip-6', label: 'कित्ता QR कोड', href: '/tools/kitta-qr', icon: QrCode },
                { id: 'chip-7', label: 'अमिन लोकसेवा क्विज', href: '/tools/aamin-quiz', icon: GraduationCap },
              ];

              return (
                <SectionWrapper key="sec-chips" id="sec-chips" titleNp="३. थप टूलहरूको छरितो चिप्स पट्टी">
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
                    <Editable id="chips-label" name="थप टूल्स लेबल">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">
                        थप टूल्स:
                      </span>
                    </Editable>

                    {secondaryChips.map((chip) => {
                      const Icon = chip.icon;
                      return (
                        <Editable key={chip.id} id={chip.id} name={chip.label}>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-800 shadow-2xs shrink-0">
                            <Icon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                            <span>{chip.label}</span>
                          </span>
                        </Editable>
                      );
                    })}
                  </div>
                </SectionWrapper>
              );
            }

            // SECTION 4: PRECISION LAND CALCULATOR
            if (sectionId === 'sec-calc') {
              return (
                <SectionWrapper key="sec-calc" id="sec-calc" titleNp="४. जग्गा नापजाँच तथा रूपान्तरण क्यालकुलेटर">
                  <section id="land-calc-section" className="scroll-mt-24 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Editable id="calc-title" name="क्यालकुलेटर शीर्षक">
                          <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-emerald-600" />
                            <span>जग्गा नापजाँच तथा रूपान्तरण क्यालकुलेटर</span>
                          </h2>
                        </Editable>
                        
                        <Editable id="calc-desc" name="क्यालकुलेटर विवरण">
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            रोपनी-आना-पैसा-दाम र बिघा-कट्ठा-धुर-कनुवा हिसाब र आधिकारिक स्लिप प्रिन्ट
                          </p>
                        </Editable>
                      </div>

                      <Editable id="calc-badge" name="स्लिप प्रिन्ट ब्याज">
                        <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 shrink-0 hidden sm:inline-block">
                          स्लिप प्रिन्ट उपलब्ध
                        </span>
                      </Editable>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs p-1">
                      <LandCalculator />
                    </div>
                  </section>
                </SectionWrapper>
              );
            }

            // SECTION 5: MOBILE APPS & FLAGSHIP SOFTWARE
            if (sectionId === 'sec-apps') {
              return (
                <SectionWrapper key="sec-apps" id="sec-apps" titleNp="५. हाम्रा आधिकारिक मोबाइल सफ्टवेयरहरू">
                  <section className="space-y-3 pt-2">
                    <Editable id="apps-header" name="एप्स सेक्सन शीर्षक">
                      <div className="flex items-center justify-between">
                        <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                          <Smartphone className="w-4 h-4 text-emerald-600" />
                          <span>हाम्रा आधिकारिक मोबाइल सफ्टवेयरहरू</span>
                        </h2>
                      </div>
                    </Editable>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      
                      {/* App 1: Land Solution */}
                      <Editable id="app-land-solution" name="Land Solution एप कार्ड">
                        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white border border-emerald-800/40 shadow-xs flex items-center justify-between gap-4 h-full">
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

                          <span className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shrink-0 transition-colors shadow-2xs">
                            <Play className="w-3.5 h-3.5 fill-white" />
                            <span className="hidden sm:inline">Web Demo</span>
                          </span>
                        </div>
                      </Editable>

                      {/* App 2: Hamro Kosh */}
                      <Editable id="app-hamro-kosh" name="हाम्रो कोष एप कार्ड">
                        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white border border-indigo-800/40 shadow-xs flex items-center justify-between gap-4 h-full">
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

                          <span className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 shrink-0 transition-colors shadow-2xs">
                            <span>विवरण</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </Editable>

                    </div>
                  </section>
                </SectionWrapper>
              );
            }

            // SECTION 6: KNOWLEDGE BASE ARTICLES
            if (sectionId === 'sec-articles') {
              return (
                <SectionWrapper key="sec-articles" id="sec-articles" titleNp="६. नापी ज्ञान तथा प्राविधिक गाइडहरू">
                  <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800">
                    <KnowledgeBaseSection />
                  </div>
                </SectionWrapper>
              );
            }

            // SECTION 7: CONTACT FORM & LOCATION
            if (sectionId === 'sec-contact') {
              return (
                <SectionWrapper key="sec-contact" id="sec-contact" titleNp="७. सम्पर्क तथा प्रतिक्रिया फारम">
                  <Contact />
                </SectionWrapper>
              );
            }

            // SECTION 8: FULL EDITABLE FOOTER
            if (sectionId === 'sec-footer') {
              return (
                <SectionWrapper key="sec-footer" id="sec-footer" titleNp="८. फुटर (Footer Links & Info)">
                  <footer className="relative bg-slate-950 text-slate-300 rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                      
                      {/* Col 1 */}
                      <div className="space-y-3">
                        <Editable id="footer-brand-title" name="फुटर ब्रान्ड नाम">
                          <h4 className="text-lg font-black text-white">BR Bhatta</h4>
                          <span className="text-xs text-emerald-400 font-semibold block">Nepal Land Tech & Surveying</span>
                        </Editable>
                        
                        <Editable id="footer-brand-desc" name="फुटर ब्रान्ड विवरण">
                          <p className="text-xs text-slate-400 leading-relaxed">
                            नेपालको नापी, नक्सा, जग्गा व्यवस्थापन, कित्ताकाट तथा डिजिटल इन्जिनियरिङको आधिकारिक पोर्टल।
                          </p>
                        </Editable>

                        <Editable id="footer-location" name="फुटर स्थान">
                          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg">
                            <MapPin className="w-3 h-3 text-emerald-400" />
                            <span>काठमाडौँ, नेपाल (Kathmandu, Nepal)</span>
                          </span>
                        </Editable>
                      </div>

                      {/* Col 2 */}
                      <div className="space-y-2.5">
                        <Editable id="footer-col2-title" name="फुटर कलम २ शीर्षक">
                          <h5 className="text-xs font-bold text-white uppercase tracking-wider">डिजिटल उपकरण तथा PDF</h5>
                        </Editable>
                        <div className="space-y-1.5 text-xs text-slate-400">
                          <Editable id="f-link-1" name="फुटर लिङ्क १"><div>› Preeti ⇄ Unicode कन्भर्टर</div></Editable>
                          <Editable id="f-link-2" name="फुटर लिङ्क २"><div>› कागजात फोटो कम्प्रेसर (२००KB)</div></Editable>
                          <Editable id="f-link-3" name="फुटर लिङ्क ३"><div>› तस्विरबाट A4 PDF जेनेरेटर</div></Editable>
                          <Editable id="f-link-4" name="फुटर लिङ्क ४"><div>› जग्गा क्यालकुलेटर (रोपनी/बिघा)</div></Editable>
                        </div>
                      </div>

                      {/* Col 3 */}
                      <div className="space-y-2.5">
                        <Editable id="footer-col3-title" name="फुटर कलम ३ शीर्षक">
                          <h5 className="text-xs font-bold text-white uppercase tracking-wider">स्रोत तथा अध्ययन</h5>
                        </Editable>
                        <div className="space-y-1.5 text-xs text-slate-400">
                          <Editable id="f-link-5" name="फुटर लिङ्क ५"><div>› ७७ जिल्ला नापी र मालपोत निर्देशिका</div></Editable>
                          <Editable id="f-link-6" name="फुटर लिङ्क ६"><div>› AutoCAD LSP Scripts हब (.lsp)</div></Editable>
                          <Editable id="f-link-7" name="फुटर लिङ्क ७"><div>› लोकसेवा नापी अमिन अनलाइन क्विज</div></Editable>
                          <Editable id="f-link-8" name="फुटर लिङ्क ८"><div>› मौजुदा नापी तथा भूमि कानुन संग्रह</div></Editable>
                        </div>
                      </div>

                      {/* Col 4 */}
                      <div className="space-y-2.5">
                        <Editable id="footer-col4-title" name="फुटर कलम ४ शीर्षक">
                          <h5 className="text-xs font-bold text-white uppercase tracking-wider">सम्पर्क तथा सहयोग</h5>
                        </Editable>
                        <div className="space-y-2 text-xs text-slate-400">
                          <Editable id="footer-email" name="फुटर आधिकारिक इमेल">
                            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2 text-emerald-400 font-mono">
                              <Mail className="w-3.5 h-3.5" />
                              <span>aabiralbhatt@gmail.com</span>
                            </div>
                          </Editable>
                          <Editable id="footer-help-badge" name="सहयोग उपलब्धता">
                            <span className="block text-[11px] text-slate-400">🟢 अनलाइन प्राविधिक सहायता उपलब्ध</span>
                          </Editable>
                        </div>
                      </div>

                    </div>

                    <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                      <Editable id="footer-copyright" name="फुटर कपीराइट टेक्स्ट">
                        <div>© 2026 BR Bhatta (brbhatta.com). सर्वाधिकार सुरक्षित।</div>
                      </Editable>
                      <div className="flex items-center gap-4">
                        <Editable id="f-policy" name="नीति लिङ्क"><span>गोपनीयता नीति (Privacy Policy)</span></Editable>
                        <Editable id="f-terms" name="सर्त लिङ्क"><span>प्रयोगका सर्तहरू (Terms)</span></Editable>
                      </div>
                    </div>
                  </footer>
                </SectionWrapper>
              );
            }

            return null;
          })}
        </div>

      </div>

    </div>
  );
}
