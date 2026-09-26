'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  ArrowRight, 
  Sparkles, 
  ArrowRightLeft, 
  ImageIcon, 
  FileText, 
  FileStack, 
  Building2, 
  Scale, 
  Coins, 
  Play, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Layers,
  Split,
  QrCode,
  ScrollText,
  GraduationCap,
  Search,
  CheckCircle2,
  Wallet,
  Smartphone,
  BookOpen,
  Compass,
  FileSpreadsheet,
  Download
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';

export default function StyleCitizenPortal() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'land' | 'pdf' | 'office' | 'law'>('all');

  // Primary 8 Big Vibrant Quick Tiles (HamroPatro / Nagarik App style)
  const quickTiles = [
    { title: 'जग्गा क्यालकुलेटर', sub: 'रोपनी-बिघा-वर्गमिटर हिसाब', icon: Calculator, color: 'bg-emerald-500 text-white', href: '#land-calc-section' },
    { title: 'फोटो कम्प्रेसर', sub: 'सरकारी फारमका लागि २००KB', icon: ImageIcon, color: 'bg-rose-500 text-white', href: '/tools/image-compressor' },
    { title: 'Preeti ⇄ Unicode', sub: 'नेपाली टाइपिङ कन्भर्टर', icon: ArrowRightLeft, color: 'bg-teal-500 text-white', href: '/tools/preeti-to-unicode' },
    { title: 'तस्विरबाट A4 PDF', sub: 'लालपुर्जा / नक्सा डकुमेन्ट', icon: FileText, color: 'bg-indigo-500 text-white', href: '/tools/images-to-pdf' },
    { title: 'मालपोत तथा कर', sub: 'रजिस्ट्रेसन & CGT दस्तुर', icon: Coins, color: 'bg-amber-500 text-white', href: '/tools/malpot-calculator' },
    { title: '७७ जिल्ला नापी', sub: 'कार्यालय फोन, इमेल र ठेगाना', icon: Building2, color: 'bg-sky-500 text-white', href: '/tools/survey-offices' },
    { title: 'जग्गा बैना कागज', sub: 'A4 कानुनी लिखत तमसुक', icon: ScrollText, color: 'bg-orange-500 text-white', href: '/tools/legal-templates' },
    { title: 'कित्ताकाट मापदण्ड', sub: '१३० वर्गमिटर नियम चेकर', icon: Split, color: 'bg-purple-500 text-white', href: '/tools/kitta-kat-checker' },
  ];

  // All Extended Technical & Citizen Services
  const allServices = [
    { id: 'land-calc', name: 'जग्गा क्यालकुलेटर', category: 'land', desc: 'पहाडी (रोपनी-आना) र तराई (बिघा-कट्ठा) एकाइ रूपान्तरण', href: '#land-calc-section', icon: Calculator, badge: 'लोकप्रिय' },
    { id: 'multi-kitta', name: 'बहु-कित्ता क्यालकुलेटर', category: 'land', desc: 'धेरै कित्ताहरूको एकमुष्ट क्षेत्रफल जोड्ने र घटाउने प्रणाली', href: '/tools/multi-kitta-calculator', icon: Layers, badge: 'नयाँ' },
    { id: 'kitta-kat', name: 'कित्ताकाट मापदण्ड चेकर', category: 'land', desc: 'नयाँ भू-उपयोग नियमावली अनुसार न्यूनतम क्षेत्रफल जाँच', href: '/tools/kitta-kat-checker', icon: Split, badge: 'नियम' },
    { id: 'autocad', name: 'AutoCAD Land Scripts', category: 'land', desc: 'अमिन तथा इन्जिनियरहरूका लागि नक्सा ड्रइङ स्क्रिप्ट्स', href: '/tools/autocad-scripts', icon: Compass, badge: 'CAD' },
    { id: 'excel-kml', name: 'Excel to KML / GIS', category: 'land', desc: 'Google Earth र GIS मा जग्गाको निर्देशाङ्क प्लट गर्ने', href: '/tools/excel-to-kml', icon: FileSpreadsheet, badge: 'GIS' },
    { id: 'img-compress', name: 'फोटो कम्प्रेसर', category: 'pdf', desc: 'लोकसेवा तथा अनलाइन फारमका लागि २००KB मुनि बनाउने', href: '/tools/image-compressor', icon: ImageIcon, badge: 'Fast' },
    { id: 'img-pdf', name: 'तस्विरबाट A4 PDF', category: 'pdf', desc: 'लालपुर्जा र नागरिकताका फोटोहरूलाई उच्च गुणस्तरको PDF बनाउने', href: '/tools/images-to-pdf', icon: FileText, badge: 'HD' },
    { id: 'pdf-tools', name: 'PDF टूल्स सुइट', category: 'pdf', desc: 'PDF Merge, Split र साइज व्यवस्थापन गर्ने पूर्ण औजार', href: '/tools/pdf-tools', icon: FileStack, badge: 'All-in-one' },
    { id: 'num-words', name: 'संख्याबाट नेपाली अक्षर', category: 'office', desc: 'बैंक भौचर, चेक र तमसुकका लागि रकमलाई नेपाली अक्षरमा लेख्ने', href: '/tools/number-to-words', icon: ScrollText, badge: 'Office' },
    { id: 'preeti', name: 'Preeti ⇄ Unicode कन्भर्टर', category: 'office', desc: 'नेपाली टाइपोग्राफी, सरकारी फन्ट र युनिकोड रूपान्तरण', href: '/tools/preeti-to-unicode', icon: ArrowRightLeft, badge: 'टाइपिङ' },
    { id: 'kitta-qr', name: 'कित्ता QR कोड जेनेरेटर', category: 'office', desc: 'जग्गाको विवरण र नक्सा लिङ्क भएको स्मार्ट QR कोड', href: '/tools/kitta-qr', icon: QrCode, badge: 'Smart' },
    { id: 'malpot', name: 'मालपोत तथा कर क्यालकुलेटर', category: 'law', desc: 'जग्गा रजिस्ट्रेसन, पुँजीगत लाभकर (CGT) र सेवा शुल्क', href: '/tools/malpot-calculator', icon: Coins, badge: 'कर' },
    { id: 'legal', name: 'जग्गा बैना तथा कानुनी तमसुक', category: 'law', desc: 'घरजग्गा खरिद-बिक्री बैनाबट्टा, राजीनामा र सम्झौता ढाँचा', href: '/tools/legal-templates', icon: ScrollText, badge: 'ढाँचा' },
    { id: 'offices', name: '७७ जिल्ला नापी कार्यालय', category: 'law', desc: 'नेपालभरका नापी र मालपोत कार्यालयहरूको सम्पर्क नम्बर र ठेगाना', href: '/tools/survey-offices', icon: Building2, badge: 'सम्पर्क' },
    { id: 'quiz', name: 'अमिन लोकसेवा मोडल क्विज', category: 'law', desc: 'नापी विभाग र लोकसेवा आयोग अमिन/सर्भेक्षक परीक्षा तयारी', href: '/tools/aamin-quiz', icon: GraduationCap, badge: 'क्विज' },
    { id: 'syllabus', name: 'अमिन पाठ्यक्रम (Syllabus)', category: 'law', desc: 'संघीय तथा प्रदेश लोकसेवा आयोग अमिन पदको आधिकारिक पाठ्यक्रम', href: '/tools/aamin-syllabus', icon: BookOpen, badge: 'पाठ्यक्रम' },
  ];

  // Filtered services
  const filteredServices = useMemo(() => {
    return allServices.filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            s.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = selectedCategory === 'all' || s.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-10">
      
      {/* 1. Citizen Portal Top Greeting Card (Vibrant HamroPatro / Nagarik App Style) */}
      <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-indigo-800 text-white shadow-lg space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-emerald-200 tracking-wider uppercase flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>नेपाल डिजिटल नागरिक सेवा (Citizen Services Portal)</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              तपाईंलाई आज कुन सेवा वा टूल आवश्यक छ?
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              जग्गा नापजाँच, सरकारी फारमका लागि फोटो साइज घटाउने, प्रिती युनिकोड, मालपोत कर वा PDF बनाउने सम्पूर्ण काम एकै स्थानबाट गर्नुहोस्।
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <TithiWidget />
          </div>
        </div>
      </section>

      {/* 2. Big Vibrant App Touch-Tiles Grid (8 Main Highlights) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>प्रमुख अनलाइन सेवाहरू (Quick Access Tiles)</span>
          </h2>
          <span className="text-xs text-slate-500 hidden sm:inline">१-ट्यापमा सिधै खोल्नुहोस्</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
          {quickTiles.map((tile, idx) => {
            const Icon = tile.icon;
            return (
              <Link
                key={idx}
                href={tile.href}
                className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-3 group active:scale-98"
              >
                <div className={`w-12 h-12 rounded-2xl ${tile.color} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0`}>
                  <Icon className="w-6 h-6" />
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

      {/* 3. Main Precision Land Calculator (Primary Feature Centerpiece) */}
      <section id="land-calc-section" className="scroll-mt-24 space-y-3">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-600" />
              <span>जग्गा नापजाँच तथा रूपान्तरण क्यालकुलेटर</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              रोपनी-आना-पैसा-दाम र बिघा-कट्ठा-धुर-कनुवा हिसाब र आधिकारिक स्लिप प्रिन्ट
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 shrink-0">
            स्लिप प्रिन्ट उपलब्ध
          </span>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs p-1">
          <LandCalculator />
        </div>
      </section>

      {/* 4. Complete Citizen & Professional Services Directory */}
      <section className="space-y-5 pt-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-emerald-600" />
              <span>थप अनलाइन डिजिटल सेवा तथा टूलहरू (All Services)</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              नेपालभरका नागरिक, सेवाग्राही, प्राविधिक र अमिनहरूका लागि आवश्यक सम्पूर्ण डिजिटल औजारहरू
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="टूल वा सेवा खोज्नुहोस्..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-hidden focus:border-emerald-500 text-slate-900 dark:text-white placeholder-slate-400"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
          {[
            { id: 'all', label: 'सबै टूलहरू' },
            { id: 'land', label: '📐 जग्गा & नापी' },
            { id: 'pdf', label: '📄 फोटो & PDF' },
            { id: 'office', label: '⌨️ टाइपिङ & अफिस' },
            { id: 'law', label: '⚖️ मालपोत & कानुन' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-emerald-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filtered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredServices.map(item => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500 shadow-2xs hover:shadow-xs transition-all flex items-start gap-3.5 group active:scale-98"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors truncate">
                      {item.name}
                    </h3>
                    <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded-sm shrink-0">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 5. Mobile Applications & Flagship Products (Land Solution & Hamro Kosh) */}
      <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-emerald-600" />
              <span>हाम्रा आधिकारिक मोबाइल एप तथा सफ्टवेयरहरू</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              नेपालका अमिन, इन्जिनियर, सहकारी र वित्तीय संस्थाका लागि विकास गरिएका आधुनिक सफ्टवेयर
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* App 1: Land Solution */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white border border-emerald-800/50 shadow-md flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 p-2 flex items-center justify-center">
                  <img src="/logo.png" alt="Land Solution" className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  फ्ल्यागसिप नापी एप
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black">Land Solution (ल्याण्ड सोलुसन)</h3>
                <p className="text-xs text-emerald-400 font-semibold">Nepal Land Measurement & Cadastral Tool</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  जग्गाको फिल्ड नापजाँच, कित्ताकाट, चारकिल्ला, मोहडा र नक्सा रेखांकनलाई सजिलो बनाउने नेपालकै अग्रणी मोबाइल सफ्टवेयर।
                </p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>पहाडी (रोपनी-आना) र तराई (बिघा-कट्ठा) पूर्ण हिसाब</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>कित्ताकाट मापदण्ड र नक्सा स्लिप प्रिन्ट</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="/land-solution-demo/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>ल्याण्ड सोलुसन Web Demo चलाउनुहोस्</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* App 2: Hamro Kosh */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white border border-indigo-800/50 shadow-md flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
                  <Wallet className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                  वित्तीय व्यवस्थापन
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black">हाम्रो कोष (Hamro Kosh)</h3>
                <p className="text-xs text-indigo-400 font-semibold">Community & Personal Fund Management</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  सहकारी, समूह, टोल विकास संस्था तथा व्यक्तिगत बचत, ऋण हिसाब, ब्याज गणना र स्टेटमेन्ट ट्र्याक गर्ने सुरक्षित प्रविधि।
                </p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>बचत र ऋणको स्वचालित ब्याज तथा हर्जना हिसाब</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>सदस्य खाता व्यवस्थापन र पारदर्शी रिपोर्टिङ</span>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="/#hamro-kosh"
                className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <Wallet className="w-4 h-4" />
                <span>हाम्रो कोष फिचर्स र विवरण</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
