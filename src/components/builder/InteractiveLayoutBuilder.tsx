'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  GripVertical, 
  ArrowUp, 
  ArrowDown, 
  Eye, 
  EyeOff, 
  Columns, 
  Sparkles, 
  Check, 
  Copy, 
  RotateCcw, 
  Smartphone, 
  Monitor, 
  Sliders, 
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
  CheckCircle2,
  BookOpen,
  Mail
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';
import KnowledgeBaseSection from '../KnowledgeBaseSection';
import Contact from '../Contact';

export type BlockId = 
  | 'greeting' 
  | 'quickTiles' 
  | 'calculator' 
  | 'secondaryChips' 
  | 'apps' 
  | 'articles' 
  | 'contact';

export interface LayoutBlock {
  id: BlockId;
  nameNp: string;
  nameEn: string;
  desc: string;
  icon: React.ElementType;
  visible: boolean;
  width: 'full' | 'half'; // full = 100%, half = 50% (grid col-span-1 vs 2)
  accentColor: string;
}

const DEFAULT_BLOCKS: LayoutBlock[] = [
  {
    id: 'greeting',
    nameNp: 'नेपाली पात्रो, पञ्चाङ्ग & ग्रिटिङ ब्यानर',
    nameEn: 'Citizen Greeting Banner & Tithi Widget',
    desc: 'नेपाल डिजिटल नागरिक सेवा स्वागत सन्देश, लाइभ मिति र समय',
    icon: Calendar,
    visible: true,
    width: 'full',
    accentColor: 'from-emerald-700 to-teal-800'
  },
  {
    id: 'quickTiles',
    nameNp: '८ मुख्य अनलाइन सेवा टाइल्स (Quick Access)',
    nameEn: '8 Big Vibrant Action Tiles',
    desc: 'क्यालकुलेटर, फोटो कम्प्रेस, प्रिती युनिकोड, A4 PDF, मालपोत कर, नापी आदि',
    icon: Sparkles,
    visible: true,
    width: 'full',
    accentColor: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'calculator',
    nameNp: 'जग्गा नापजाँच तथा रूपान्तरण क्यालकुलेटर',
    nameEn: 'Precision Land Calculator Core',
    desc: 'रोपनी-आना र बिघा-कट्ठा हिसाब गर्ने र स्लिप प्रिन्ट निकाल्ने मुख्य यन्त्र',
    icon: Calculator,
    visible: true,
    width: 'full',
    accentColor: 'from-emerald-600 to-green-700'
  },
  {
    id: 'secondaryChips',
    nameNp: 'थप टूलहरूको छरितो चिप्स पट्टी (Secondary Strip)',
    nameEn: 'Single-Row Compact Tools Strip',
    desc: 'AutoCAD, Excel to KML, बहु-कित्ता, अक्षरेपी, अमिन क्विज बटनहरू',
    icon: Compass,
    visible: true,
    width: 'full',
    accentColor: 'from-slate-700 to-slate-900'
  },
  {
    id: 'apps',
    nameNp: 'हाम्रा आधिकारिक मोबाइल सफ्टवेयरहरू',
    nameEn: 'Land Solution & Hamro Kosh Apps Showcase',
    desc: 'नापी इन्जिनियरिङ एप र बचत वित्तीय सफ्टवेयरको कार्ड',
    icon: Smartphone,
    visible: true,
    width: 'full',
    accentColor: 'from-purple-600 to-indigo-800'
  },
  {
    id: 'articles',
    nameNp: 'नापी ज्ञान तथा कानुनी लेखहरू (Knowledge Base)',
    nameEn: 'Articles & Guides Section',
    desc: 'कित्ताकाट, नापी ऐन र प्राविधिक जानकारीमूलक लेखहरू',
    icon: BookOpen,
    visible: true,
    width: 'full',
    accentColor: 'from-cyan-700 to-blue-800'
  },
  {
    id: 'contact',
    nameNp: 'सम्पर्क तथा प्रतिक्रिया फारम (Contact Helpdesk)',
    nameEn: 'Direct Contact & Inquiries Form',
    desc: 'सेवाग्राहीका लागि सन्देश पठाउने फारम र इमेल ठेगाना',
    icon: Mail,
    visible: true,
    width: 'full',
    accentColor: 'from-teal-600 to-emerald-800'
  }
];

export default function InteractiveLayoutBuilder() {
  const [blocks, setBlocks] = useState<LayoutBlock[]>(DEFAULT_BLOCKS);
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');
  const [copied, setCopied] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  // Load saved layout from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('brbhatta_custom_layout');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge with default block templates in case of schema update
          const merged = parsed.map((p: any) => {
            const def = DEFAULT_BLOCKS.find(d => d.id === p.id) || DEFAULT_BLOCKS[0];
            return { ...def, ...p };
          });
          setBlocks(merged);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const saveLayoutToStorage = (newBlocks: LayoutBlock[]) => {
    try {
      localStorage.setItem('brbhatta_custom_layout', JSON.stringify(newBlocks));
    } catch (e) {}
  };

  // Move Block Up
  const moveUp = (index: number) => {
    if (index === 0) return;
    const newBlocks = [...blocks];
    const temp = newBlocks[index - 1];
    newBlocks[index - 1] = newBlocks[index];
    newBlocks[index] = temp;
    setBlocks(newBlocks);
    saveLayoutToStorage(newBlocks);
  };

  // Move Block Down
  const moveDown = (index: number) => {
    if (index === blocks.length - 1) return;
    const newBlocks = [...blocks];
    const temp = newBlocks[index + 1];
    newBlocks[index + 1] = newBlocks[index];
    newBlocks[index] = temp;
    setBlocks(newBlocks);
    saveLayoutToStorage(newBlocks);
  };

  // Toggle Visibility
  const toggleVisibility = (index: number) => {
    const newBlocks = [...blocks];
    newBlocks[index] = { ...newBlocks[index], visible: !newBlocks[index].visible };
    setBlocks(newBlocks);
    saveLayoutToStorage(newBlocks);
  };

  // Toggle Width (Full 100% vs Half 50%)
  const toggleWidth = (index: number) => {
    const newBlocks = [...blocks];
    newBlocks[index] = { 
      ...newBlocks[index], 
      width: newBlocks[index].width === 'full' ? 'half' : 'full' 
    };
    setBlocks(newBlocks);
    saveLayoutToStorage(newBlocks);
  };

  // Drag and drop handlers
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
    saveLayoutToStorage(newBlocks);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  // Reset to default
  const resetToDefault = () => {
    setBlocks(DEFAULT_BLOCKS);
    saveLayoutToStorage(DEFAULT_BLOCKS);
  };

  // Generate Copyable Configuration String
  const getLayoutSummaryText = () => {
    const visibleOrder = blocks
      .filter(b => b.visible)
      .map((b, idx) => `${idx + 1}. ${b.nameNp} (${b.width === 'full' ? 'पूरा चौडाइ १००%' : 'आधा ५०% दायाँ/बायाँ'})`)
      .join('\n');
    
    const hidden = blocks.filter(b => !b.visible).map(b => b.nameNp).join(', ');

    return `नमस्ते, मलाई यो लेआउट मनपर्‍यो। वेबसाइटमा यसरी सेट गरिदिनुहोस्:\n\n【क्रमबद्ध सूची】:\n${visibleOrder}${hidden ? `\n\n【हटाउने/लुकाउने】:\n${hidden}` : ''}\n\n[Code]: ${JSON.stringify(blocks.map(b => ({ id: b.id, visible: b.visible, width: b.width })))}`;
  };

  const copyLayoutConfig = () => {
    const text = getLayoutSummaryText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Render individual component preview
  const renderComponent = (block: LayoutBlock) => {
    switch (block.id) {
      case 'greeting':
        return (
          <section className="p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-indigo-800 text-white shadow-md space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              <div className="space-y-1.5 max-w-2xl">
                <span className="text-xs font-bold text-emerald-200 tracking-wider uppercase flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>नेपाल डिजिटल नागरिक सेवा (Citizen Services Portal)</span>
                </span>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
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
          { title: 'जग्गा क्यालकुलेटर', sub: 'रोपनी-बिघा हिसाब', icon: Calculator, color: 'bg-emerald-500 text-white', href: '#land-calc-section' },
          { title: 'फोटो कम्प्रेसर', sub: 'फारमका लागि २००KB', icon: ImageIcon, color: 'bg-rose-500 text-white', href: '/tools/image-compressor' },
          { title: 'Preeti ⇄ Unicode', sub: 'नेपाली टाइपिङ', icon: ArrowRightLeft, color: 'bg-teal-500 text-white', href: '/tools/preeti-to-unicode' },
          { title: 'तस्विरबाट A4 PDF', sub: 'लालपुर्जा / नक्सा', icon: FileText, color: 'bg-indigo-500 text-white', href: '/tools/images-to-pdf' },
          { title: 'मालपोत तथा कर', sub: 'रजिस्ट्रेसन & CGT', icon: Coins, color: 'bg-amber-500 text-white', href: '/tools/malpot-calculator' },
          { title: '७७ जिल्ला नापी', sub: 'फोन, इमेल र ठेगाना', icon: Building2, color: 'bg-sky-500 text-white', href: '/tools/survey-offices' },
          { title: 'जग्गा बैना कागज', sub: 'A4 कानुनी लिखत', icon: ScrollText, color: 'bg-orange-500 text-white', href: '/tools/legal-templates' },
          { title: 'कित्ताकाट मापदण्ड', sub: '१३० वर्गमिटर नियम', icon: Split, color: 'bg-purple-500 text-white', href: '/tools/kitta-kat-checker' },
        ];
        return (
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>प्रमुख अनलाइन सेवाहरू (Quick Access Tiles)</span>
              </h2>
              <span className="text-xs text-slate-500">१-ट्यापमा खोल्नुहोस्</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {tiles.map((t, idx) => {
                const Icon = t.icon;
                return (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between space-y-2">
                    <div className={`w-10 h-10 rounded-xl ${t.color} flex items-center justify-center shadow-xs shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">{t.title}</h3>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{t.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );

      case 'calculator':
        return (
          <section id="land-calc-section" className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-emerald-600" />
                  <span>जग्गा नापजाँच तथा रूपान्तरण क्यालकुलेटर</span>
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  रोपनी-आना र बिघा-कट्ठा हिसाब तथा स्लिप प्रिन्टिङ
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs p-1">
              <LandCalculator />
            </div>
          </section>
        );

      case 'secondaryChips':
        const chips = [
          { label: 'बहु-कित्ता क्यालकुलेटर', icon: Layers },
          { label: 'AutoCAD Scripts', icon: Compass },
          { label: 'Excel to KML', icon: FileSpreadsheet },
          { label: 'PDF सुइट', icon: FileStack },
          { label: 'अक्षरेपी (Number to Words)', icon: ScrollText },
          { label: 'अमिन लोकसेवा क्विज', icon: GraduationCap },
        ];
        return (
          <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none no-scrollbar">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">थप टूल्स:</span>
            {chips.map((c, i) => {
              const Icon = c.icon;
              return (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold shrink-0">
                  <Icon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{c.label}</span>
                </span>
              );
            })}
          </div>
        );

      case 'apps':
        return (
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span>हाम्रा आधिकारिक मोबाइल सफ्टवेयरहरू</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white border border-emerald-800/40 shadow-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 p-1.5 flex items-center justify-center shrink-0">
                    <img src="/logo.png" alt="Land Solution" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black">Land Solution (नापी एप)</h3>
                    <p className="text-[11px] text-slate-300">फिल्ड नापजाँच, कित्ताकाट र नक्सा रेखांकन</p>
                  </div>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shrink-0">Web Demo</span>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white border border-indigo-800/40 shadow-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black">हाम्रो कोष (बचत सफ्टवेयर)</h3>
                    <p className="text-[11px] text-slate-300">सहकारी, समूह तथा व्यक्तिगत बचत र ऋण हिसाब</p>
                  </div>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold shrink-0">विवरण</span>
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
      
      {/* Visual Studio Master Control Bar */}
      <div className="sticky top-16 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3.5 sm:p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-none">
                  दृष्य सम्पादक (Visual Layout Builder)
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                  Interactive
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                ब्लकहरूलाई माथि/तल सार्नुहोस् वा लुकाउनुहोस् र आफ्नो मनपर्ने लेआउट बनाउनुहोस्।
              </p>
            </div>
          </div>

          {/* Mode Switcher & Actions */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end flex-wrap">
            
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setActiveTab('editor')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'editor'
                    ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                ✏️ सम्पादन (Canvas)
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'preview'
                    ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                👁️ लाइभ प्रिभ्यु (Preview)
              </button>
            </div>

            <button
              onClick={resetToDefault}
              title="पूर्वनिर्धारित अवस्थामा फर्काउनुहोस्"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={copyLayoutConfig}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                copied 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white active:scale-95'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'कपी गरियो!' : 'यो लेआउट कपी गर्नुहोस्'}</span>
            </button>

          </div>

        </div>
      </div>

      {/* VIEWPORT MODE 1: VISUAL CANVAS / EDITOR */}
      {activeTab === 'editor' && (
        <div className="space-y-4 animate-fadeIn">
          
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>प्रयोग गर्ने तरिका:</strong> तलका कुनै पनि ब्लकलाई <strong>↑ माथि</strong> वा <strong>↓ तल</strong> बटन थिचेर सार्न सक्नुहुन्छ। जुन ब्लक मन पर्दैन, त्यसलाई <strong>👁️ आँखा चिन्ह</strong> थिचेर बन्द गर्न सक्नुहुन्छ। तयार भएपछि माथिको <strong>"यो लेआउट कपी गर्नुहोस्"</strong> थिचेर मलाई च्याटमा पठाउनुहोस्!
            </div>
          </div>

          {/* Block Cards List (Sortable & Free-move) */}
          <div className="space-y-3">
            {blocks.map((block, idx) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.id}
                  draggable
                  onDragStart={() => handleDragStart(idx)}
                  onDragOver={(e) => handleDragOver(e, idx)}
                  onDragEnd={handleDragEnd}
                  className={`p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    block.visible 
                      ? 'border-slate-200 dark:border-slate-800 shadow-2xs hover:border-emerald-500' 
                      : 'border-dashed border-slate-300 dark:border-slate-800 opacity-50 bg-slate-50 dark:bg-slate-950'
                  }`}
                >
                  
                  {/* Left: Drag Handle, Number, Icon, Titles */}
                  <div className="flex items-center gap-3.5 min-w-0">
                    
                    {/* Drag Handle Indicator */}
                    <div className="cursor-grab active:cursor-grabbing p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hidden sm:block">
                      <GripVertical className="w-5 h-5" />
                    </div>

                    {/* Order Number Badge */}
                    <span className="w-7 h-7 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Info */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                          {block.nameNp}
                        </h3>
                        {!block.visible && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 shrink-0">
                            लुकाइएको
                          </span>
                        )}
                        {block.width === 'half' && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 shrink-0">
                            आधा कलम (५०%)
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {block.desc}
                      </p>
                    </div>

                  </div>

                  {/* Right: Controller Buttons */}
                  <div className="flex items-center gap-1.5 self-end sm:self-center shrink-0">
                    
                    {/* Move Up */}
                    <button
                      onClick={() => moveUp(idx)}
                      disabled={idx === 0}
                      title="माथि सार्नुहोस्"
                      className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer border border-slate-200 dark:border-slate-800"
                    >
                      <ArrowUp className="w-4 h-4" />
                    </button>

                    {/* Move Down */}
                    <button
                      onClick={() => moveDown(idx)}
                      disabled={idx === blocks.length - 1}
                      title="तल सार्नुहोस्"
                      className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer border border-slate-200 dark:border-slate-800"
                    >
                      <ArrowDown className="w-4 h-4" />
                    </button>

                    {/* Column Width Toggle (Full 100% vs Half 50%) */}
                    <button
                      onClick={() => toggleWidth(idx)}
                      title={block.width === 'full' ? 'आधा कलम (५०%) बनाउनुहोस्' : 'पूरा चौडाइ (१००%) बनाउनुहोस्'}
                      className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 border transition-colors cursor-pointer ${
                        block.width === 'half'
                          ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800'
                          : 'text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Columns className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{block.width === 'full' ? '100%' : '50%'}</span>
                    </button>

                    {/* Visibility Toggle */}
                    <button
                      onClick={() => toggleVisibility(idx)}
                      title={block.visible ? 'यो खण्ड लुकाउनुहोस्' : 'यो खण्ड देखाउनुहोस्'}
                      className={`p-2 rounded-xl transition-colors cursor-pointer border ${
                        block.visible
                          ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800'
                          : 'text-rose-500 bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800'
                      }`}
                    >
                      {block.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>

                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom Export Bar */}
          <div className="p-5 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base font-bold text-emerald-400">लेआउट फाइनल भयो?</h3>
              <p className="text-xs text-slate-300">
                तपाईंले मिलाउनुभएको क्रम सुरक्षित भइसकेको छ। कपी गरेर मलाई पठाइदिनुहोस् वा लाइभ प्रिभ्यु हेर्नुहोस्।
              </p>
            </div>
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('preview')}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all text-center"
              >
                लाइभ हेर्नुहोस् (Live Preview)
              </button>
              <button
                onClick={copyLayoutConfig}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'कपी गरियो!' : 'लेआउट कपी गर्नुहोस्'}</span>
              </button>
            </div>
          </div>

        </div>
      )}

      {/* VIEWPORT MODE 2: REAL-TIME LIVE PREVIEW OF CUSTOMIZED HOMEPAGE */}
      {activeTab === 'preview' && (
        <div className="space-y-8 animate-fadeIn border-t border-slate-200 dark:border-slate-800 pt-6">
          
          <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>यो तपाईंले मिलाउनुभएको लेआउट अनुसारको प्रत्यक्ष लाइभ होमपेज प्रिभ्यु हो।</span>
            </div>
            <button
              onClick={() => setActiveTab('editor')}
              className="px-3 py-1 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 hover:underline cursor-pointer"
            >
              ← सम्पादनमा फर्कनुहोस्
            </button>
          </div>

          {/* Render in the exact user-arranged order and widths */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {blocks.map((block) => {
              if (!block.visible) return null;
              const isHalf = block.width === 'half';
              return (
                <div
                  key={block.id}
                  className={isHalf ? 'col-span-1' : 'col-span-1 md:col-span-2'}
                >
                  {renderComponent(block)}
                </div>
              );
            })}
          </div>

        </div>
      )}

    </div>
  );
}
