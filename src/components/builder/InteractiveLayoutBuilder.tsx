'use client';

import React, { useState, useEffect } from 'react';
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
  Maximize2, 
  Minimize2, 
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
  QrCode
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';
import KnowledgeBaseSection from '../KnowledgeBaseSection';
import Contact from '../Contact';

export type BlockId = 
  | 'greeting' 
  | 'quickTiles' 
  | 'secondaryChips' 
  | 'calculator' 
  | 'apps' 
  | 'articles' 
  | 'contact';

export interface EditableBlock {
  id: BlockId;
  titleNp: string;
  size: '100%' | '50%' | '75%'; // full width, half width (side-by-side), or compact 75%
  padding: 'normal' | 'compact';
}

const DEFAULT_LAYOUT: EditableBlock[] = [
  { id: 'greeting', titleNp: '१. नागरिक सेवा ब्यानर तथा पञ्चाङ्ग (Greeting & Tithi)', size: '100%', padding: 'normal' },
  { id: 'quickTiles', titleNp: '२. मुख्य ८ वटा अनलाइन सेवा टाइल्स (Quick Access)', size: '100%', padding: 'normal' },
  { id: 'secondaryChips', titleNp: '३. थप टूलहरूको छरितो पट्टी (Secondary Chips)', size: '100%', padding: 'normal' },
  { id: 'calculator', titleNp: '४. जग्गा नापजाँच तथा रूपान्तरण क्यालकुलेटर', size: '100%', padding: 'normal' },
  { id: 'apps', titleNp: '५. हाम्रा आधिकारिक मोबाइल सफ्टवेयरहरू (Apps Showcase)', size: '100%', padding: 'normal' },
  { id: 'articles', titleNp: '६. नापी ज्ञान तथा प्राविधिक गाइडहरू (Knowledge Base)', size: '100%', padding: 'normal' },
  { id: 'contact', titleNp: '७. सम्पर्क तथा प्रतिक्रिया फारम (Contact Helpdesk)', size: '100%', padding: 'normal' },
];

export default function InteractiveLayoutBuilder() {
  const [blocks, setBlocks] = useState<EditableBlock[]>(DEFAULT_LAYOUT);
  const [deletedBlocks, setDeletedBlocks] = useState<EditableBlock[]>([]);
  const [editMode, setEditMode] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  // Load from localStorage
  useEffect(() => {
    try {
      const savedLayout = localStorage.getItem('brbhatta_visual_layout_v3');
      const savedDeleted = localStorage.getItem('brbhatta_visual_deleted_v3');
      if (savedLayout) {
        const parsed = JSON.parse(savedLayout);
        if (Array.isArray(parsed) && parsed.length > 0) setBlocks(parsed);
      }
      if (savedDeleted) {
        const parsedDel = JSON.parse(savedDeleted);
        if (Array.isArray(parsedDel)) setDeletedBlocks(parsedDel);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const saveState = (newBlocks: EditableBlock[], newDeleted: EditableBlock[]) => {
    setBlocks(newBlocks);
    setDeletedBlocks(newDeleted);
    try {
      localStorage.setItem('brbhatta_visual_layout_v3', JSON.stringify(newBlocks));
      localStorage.setItem('brbhatta_visual_deleted_v3', JSON.stringify(newDeleted));
    } catch (e) {}
  };

  // Move Up
  const moveUp = (index: number) => {
    if (index === 0) return;
    const newBlocks = [...blocks];
    const temp = newBlocks[index - 1];
    newBlocks[index - 1] = newBlocks[index];
    newBlocks[index] = temp;
    saveState(newBlocks, deletedBlocks);
  };

  // Move Down
  const moveDown = (index: number) => {
    if (index === blocks.length - 1) return;
    const newBlocks = [...blocks];
    const temp = newBlocks[index + 1];
    newBlocks[index + 1] = newBlocks[index];
    newBlocks[index] = temp;
    saveState(newBlocks, deletedBlocks);
  };

  // Delete/Remove block
  const deleteBlock = (index: number) => {
    const toDelete = blocks[index];
    const newBlocks = blocks.filter((_, i) => i !== index);
    const newDeleted = [...deletedBlocks, toDelete];
    saveState(newBlocks, newDeleted);
  };

  // Restore deleted block
  const restoreBlock = (blockId: BlockId) => {
    const toRestore = deletedBlocks.find(b => b.id === blockId);
    if (!toRestore) return;
    const newDeleted = deletedBlocks.filter(b => b.id !== blockId);
    const newBlocks = [...blocks, toRestore];
    saveState(newBlocks, newDeleted);
  };

  // Cycle Size (100% -> 50% -> 75% -> 100%)
  const cycleSize = (index: number) => {
    const newBlocks = [...blocks];
    const current = newBlocks[index].size;
    const nextSize: '100%' | '50%' | '75%' = current === '100%' ? '50%' : current === '50%' ? '75%' : '100%';
    newBlocks[index] = { ...newBlocks[index], size: nextSize };
    saveState(newBlocks, deletedBlocks);
  };

  // Cycle Padding (normal -> compact -> normal)
  const cyclePadding = (index: number) => {
    const newBlocks = [...blocks];
    const current = newBlocks[index].padding;
    newBlocks[index] = { ...newBlocks[index], padding: current === 'normal' ? 'compact' : 'normal' };
    saveState(newBlocks, deletedBlocks);
  };

  // Reset to default layout
  const resetToDefault = () => {
    saveState(DEFAULT_LAYOUT, []);
  };

  // Drag and Drop
  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    const newBlocks = [...blocks];
    const draggedItem = newBlocks[draggedIndex];
    newBlocks.splice(draggedIndex, 1);
    newBlocks.splice(index, 0, draggedItem);
    setDraggedIndex(index);
    setBlocks(newBlocks);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    saveState(blocks, deletedBlocks);
  };

  // Copy Layout Code for Agent
  const copyLayoutConfig = () => {
    const summary = blocks.map((b, i) => `${i + 1}. [${b.id}] (${b.size} चौडाइ, ${b.padding})`).join('\n');
    const deletedSummary = deletedBlocks.map(b => b.id).join(', ');
    const text = `नमस्ते! मैले वेबसाइटको लेआउट यसरी मिलाएँ, कृपया मुख्य साइटमा सेट गरिदिनुहोस्:\n\nक्रम:\n${summary}\n\nहटाएको/लुकाएको: ${deletedSummary || 'कुनै छैन'}\n\nJSON:\n${JSON.stringify({ layout: blocks, deleted: deletedBlocks })}`;
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Render actual component content
  const renderComponentContent = (id: BlockId) => {
    switch (id) {
      case 'greeting':
        return (
          <section className="p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-indigo-800 text-white shadow-md space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              <div className="space-y-1.5 max-w-2xl">
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
              <div className="shrink-0 w-full sm:w-auto">
                <TithiWidget />
              </div>
            </div>
          </section>
        );

      case 'quickTiles':
        const tiles = [
          { title: 'जग्गा क्यालकुलेटर', sub: 'रोपनी-बिघा-वर्गमिटर हिसाब', icon: Calculator, color: 'bg-emerald-500 text-white', href: '#land-calc-section' },
          { title: 'फोटो कम्प्रेसर', sub: 'सरकारी फारमका लागि २००KB', icon: ImageIcon, color: 'bg-rose-500 text-white', href: '/tools/image-compressor' },
          { title: 'Preeti ⇄ Unicode', sub: 'नेपाली टाइपिङ कन्भर्टर', icon: ArrowRightLeft, color: 'bg-teal-500 text-white', href: '/tools/preeti-to-unicode' },
          { title: 'तस्विरबाट A4 PDF', sub: 'लालपुर्जा / नक्सा डकुमेन्ट', icon: FileText, color: 'bg-indigo-500 text-white', href: '/tools/images-to-pdf' },
          { title: 'मालपोत तथा कर', sub: 'रजिस्ट्रेसन & CGT दस्तुर', icon: Coins, color: 'bg-amber-500 text-white', href: '/tools/malpot-calculator' },
          { title: '७७ जिल्ला नापी', sub: 'कार्यालय फोन, इमेल र ठेगाना', icon: Building2, color: 'bg-sky-500 text-white', href: '/tools/survey-offices' },
          { title: 'जग्गा बैना कागज', sub: 'A4 कानुनी लिखत तमसुक', icon: ScrollText, color: 'bg-orange-500 text-white', href: '/tools/legal-templates' },
          { title: 'कित्ताकाट मापदण्ड', sub: '१३० वर्गमिटर नियम चेकर', icon: Split, color: 'bg-purple-500 text-white', href: '/tools/kitta-kat-checker' },
        ];
        return (
          <section className="space-y-3.5">
            <div className="flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>प्रमुख अनलाइन सेवाहरू (Quick Access Tiles)</span>
              </h2>
              <Link href="/tools" className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                सबै १५+ टूल्स हेर्नुहोस् →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {tiles.map((tile, idx) => {
                const Icon = tile.icon;
                return (
                  <Link
                    key={idx}
                    href={tile.href}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-2.5 group active:scale-98"
                  >
                    <div className={`w-11 h-11 rounded-xl ${tile.color} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors leading-tight">
                        {tile.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                        {tile.sub}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        );

      case 'secondaryChips':
        const secondaryChips = [
          { label: 'बहु-कित्ता क्यालकुलेटर', href: '/tools/multi-kitta-calculator', icon: Layers },
          { label: 'AutoCAD Scripts', href: '/tools/autocad-scripts', icon: Compass },
          { label: 'Excel to KML', href: '/tools/excel-to-kml', icon: FileSpreadsheet },
          { label: 'PDF सुइट', href: '/tools/pdf-tools', icon: FileStack },
          { label: 'अक्षरेपी (Number to Words)', href: '/tools/number-to-words', icon: ScrollText },
          { label: 'कित्ता QR कोड', href: '/tools/kitta-qr', icon: QrCode },
          { label: 'अमिन लोकसेवा क्विज', href: '/tools/aamin-quiz', icon: GraduationCap },
        ];
        return (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">
              थप टूल्स:
            </span>
            {secondaryChips.map((chip, idx) => {
              const Icon = chip.icon;
              return (
                <Link
                  key={idx}
                  href={chip.href}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-emerald-600 hover:border-emerald-500 text-xs font-semibold border border-slate-200 dark:border-slate-800 shadow-2xs transition-colors shrink-0"
                >
                  <Icon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{chip.label}</span>
                </Link>
              );
            })}
            <Link
              href="/tools"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 text-xs font-bold border border-emerald-200 dark:border-emerald-800 shrink-0 transition-colors"
            >
              <span>सबै टूल्स →</span>
            </Link>
          </div>
        );

      case 'calculator':
        return (
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

            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs p-1">
              <LandCalculator />
            </div>
          </section>
        );

      case 'apps':
        return (
          <section className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <span>हाम्रा आधिकारिक मोबाइल सफ्टवेयरहरू</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white border border-emerald-800/40 shadow-xs flex items-center justify-between gap-4">
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
                <a
                  href="/land-solution-demo/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shrink-0 transition-colors shadow-2xs"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span className="hidden sm:inline">Web Demo</span>
                </a>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white border border-indigo-800/40 shadow-xs flex items-center justify-between gap-4">
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
                <Link
                  href="/#hamro-kosh"
                  className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 shrink-0 transition-colors shadow-2xs"
                >
                  <span>विवरण</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>
        );

      case 'articles':
        return (
          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <KnowledgeBaseSection />
          </div>
        );

      case 'contact':
        return <Contact />;

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* 1. TOP DOCKED LIVE WYSIWYG STUDIO BAR */}
      <div className="sticky top-16 z-40 bg-slate-900/95 text-white backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Left Status & Toggle */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-black text-white">
                लाइभ होमपेज सम्पादक (Direct Live WYSIWYG Studio)
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {editMode ? 'सम्पादन खुला' : 'प्रिभ्यु मोड'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              {editMode 
                ? 'प्रत्येक सेक्सनको माथिल्लो पट्टीबाट माथि/तल सार्नुहोस्, साइज बदल्नुहोस् वा डिलिट गर्नुहोस्।' 
                : 'सम्पादन टुलबार लुकाइएको छ। वास्तविक वेबसाइट जस्तै देखिन्छ।'}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end flex-wrap">
          
          {/* Toggle Edit Controls Visibility */}
          <button
            onClick={() => setEditMode(!editMode)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              editMode 
                ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700' 
                : 'bg-emerald-600 hover:bg-emerald-500 text-white'
            }`}
          >
            {editMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{editMode ? 'टुलबार लुकाउनुहोस्' : 'टुलबार देखाउनुहोस्'}</span>
          </button>

          {/* Reset button */}
          <button
            onClick={resetToDefault}
            title="पहिलेको सामान्य अवस्थामा फर्काउनुहोस्"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Copy Layout for Agent */}
          <button
            onClick={copyLayoutConfig}
            className={`px-4 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer ${
              copied 
                ? 'bg-emerald-500 text-slate-950' 
                : 'bg-emerald-600 hover:bg-emerald-500 text-white'
            }`}
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'कपी भयो!' : 'यो लेआउट कपी गर्नुहोस्'}</span>
          </button>

        </div>

      </div>

      {/* Deleted Items Restoration Bar (If any block is deleted) */}
      {deletedBlocks.length > 0 && (
        <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <Trash2 className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              तपाईंले हटाउनुभएका खण्डहरू: <strong>{deletedBlocks.length} वटा</strong>
            </span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {deletedBlocks.map((del) => (
              <button
                key={del.id}
                onClick={() => restoreBlock(del.id)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700 hover:border-emerald-500 text-amber-900 dark:text-amber-200 hover:text-emerald-600 text-xs font-bold transition-all shadow-2xs cursor-pointer"
              >
                <Plus className="w-3 h-3 text-emerald-600" />
                <span>{del.titleNp.split('(')[0].trim()} +</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 2. THE LIVE WEBSITE CANVAS WITH IN-PLACE EDIT CONTROLLERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
        {blocks.map((block, idx) => {
          const isHalf = block.size === '50%';
          const isCompact = block.size === '75%';

          return (
            <div
              key={block.id}
              draggable={editMode}
              onDragStart={() => handleDragStart(idx)}
              onDragOver={(e) => handleDragOver(e, idx)}
              onDragEnd={handleDragEnd}
              className={`transition-all relative group ${
                isHalf 
                  ? 'col-span-1' 
                  : isCompact 
                    ? 'col-span-1 md:col-span-2 max-w-4xl mx-auto w-full' 
                    : 'col-span-1 md:col-span-2 w-full'
              }`}
            >
              
              {/* Floating Action Header Bar Over Each Section (Only in Edit Mode) */}
              {editMode && (
                <div className="mb-2 p-2 rounded-xl bg-slate-900/90 text-white backdrop-blur-md border border-slate-700/80 shadow-md flex items-center justify-between gap-2">
                  
                  {/* Left Label & Drag Handle */}
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="cursor-grab active:cursor-grabbing p-1 text-slate-400 hover:text-white">
                      <GripVertical className="w-4 h-4" />
                    </div>
                    <span className="w-5 h-5 rounded-md bg-emerald-600 text-white text-[11px] font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-200 truncate">
                      {block.titleNp}
                    </span>
                  </div>

                  {/* Right Action Buttons: Move Up, Move Down, Size, Delete */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    
                    {/* Move Up */}
                    <button
                      onClick={() => moveUp(idx)}
                      disabled={idx === 0}
                      title="माथि सार्नुहोस्"
                      className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer border border-slate-700"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>

                    {/* Move Down */}
                    <button
                      onClick={() => moveDown(idx)}
                      disabled={idx === blocks.length - 1}
                      title="तल सार्नुहोस्"
                      className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer border border-slate-700"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>

                    {/* Toggle Size (100% vs 50% vs 75%) */}
                    <button
                      onClick={() => cycleSize(idx)}
                      title="साइज बदल्नुहोस् (१००%, ५०%, ७५%)"
                      className="px-2 py-1 rounded-lg text-[11px] font-bold text-indigo-300 bg-indigo-950/60 hover:bg-indigo-900 border border-indigo-700 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Columns className="w-3 h-3" />
                      <span>{block.size}</span>
                    </button>

                    {/* Delete Section */}
                    <button
                      onClick={() => deleteBlock(idx)}
                      title="यो सेक्सन हटाउनुहोस् (Delete)"
                      className="p-1.5 rounded-lg text-rose-300 bg-rose-950/60 hover:bg-rose-900 border border-rose-700 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                  </div>

                </div>
              )}

              {/* The Real Interactive Component (Clicks 100% work!) */}
              <div className={editMode ? 'rounded-2xl transition-all' : ''}>
                {renderComponentContent(block.id)}
              </div>

            </div>
          );
        })}
      </div>

      {/* Floating Bottom Reminder */}
      {editMode && (
        <div className="p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm text-slate-200">
              सबै कम्पोनेन्टहरू प्रत्यक्ष क्लिक गरेर चलाउन सकिन्छ (क्यालकुलेटर, बटम, लिङ्क सबै सक्रिय छन्)।
            </span>
          </div>
          <button
            onClick={copyLayoutConfig}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'कपी गरियो!' : 'यो लेआउट कपी गरेर च्याटमा पठाउनुहोस्'}</span>
          </button>
        </div>
      )}

    </div>
  );
}
