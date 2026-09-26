'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  FileStack, 
  ArrowRightLeft, 
  Building2, 
  Smartphone, 
  Sparkles, 
  ImageIcon, 
  FileText, 
  Coins, 
  ScrollText, 
  Scale, 
  GraduationCap, 
  Split, 
  Layers, 
  QrCode, 
  Receipt, 
  Play, 
  ExternalLink, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Compass,
  Wallet
} from 'lucide-react';
import LandCalculator from './LandCalculator';

export type DashboardTab = 'calculator' | 'pdf' | 'office' | 'directory' | 'apps';

export default function ToolsAppDashboard() {
  const [activeTab, setActiveTab] = useState<DashboardTab>('calculator');

  const tabs = [
    { id: 'calculator' as DashboardTab, label: 'जग्गा नापजाँच', sub: 'Calculator', icon: Calculator },
    { id: 'pdf' as DashboardTab, label: 'PDF स्टुडियो', sub: 'PDF & Photos', icon: FileStack },
    { id: 'office' as DashboardTab, label: 'नेपाली अफिस', sub: 'Unicode & Typing', icon: ArrowRightLeft },
    { id: 'directory' as DashboardTab, label: 'नापी & कानुन', sub: 'Offices & Laws', icon: Building2 },
    { id: 'apps' as DashboardTab, label: 'हाम्रा एप्स', sub: 'Mobile Apps', icon: Smartphone },
  ];

  return (
    <div className="w-full space-y-6">
      
      {/* Top App-Bar Tabs (Horizontal Scrollable on Mobile, Centered on Desktop) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-2 sm:p-2.5 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl font-bold transition-all shrink-0 text-left cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/25'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'text-white' : 'text-emerald-600 dark:text-emerald-400'}`} />
                <div>
                  <div className="text-xs sm:text-sm leading-tight whitespace-nowrap">{tab.label}</div>
                  <div className={`text-[10px] hidden sm:block ${isActive ? 'text-emerald-100' : 'text-slate-400 font-normal'}`}>{tab.sub}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* DYNAMIC VIEWPORT CONTAINER */}
      <div className="min-h-[480px]">
        
        {/* TAB 1: LAND CALCULATOR (DEFAULT) */}
        {activeTab === 'calculator' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Embedded Precision Calculator */}
            <LandCalculator />

            {/* Quick Related Land Tools Bar */}
            <div className="p-4 sm:p-5 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                सम्बन्धित जग्गा तथा नापी टूल्स:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href="/tools/multi-kitta-calculator"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-600 text-xs font-bold border border-slate-200 dark:border-slate-700 shadow-2xs transition-colors"
                >
                  <Layers className="w-3.5 h-3.5 text-emerald-600" />
                  <span>बहु-कित्ता क्यालकुलेटर</span>
                </Link>

                <Link
                  href="/tools/kitta-kat-checker"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-600 text-xs font-bold border border-slate-200 dark:border-slate-700 shadow-2xs transition-colors"
                >
                  <Split className="w-3.5 h-3.5 text-indigo-500" />
                  <span>कित्ताकाट मापदण्ड</span>
                </Link>

                <Link
                  href="/tools/malpot-calculator"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-600 text-xs font-bold border border-slate-200 dark:border-slate-700 shadow-2xs transition-colors"
                >
                  <Receipt className="w-3.5 h-3.5 text-amber-500" />
                  <span>मालपोत कर हिसाब</span>
                </Link>

                <Link
                  href="/tools/kitta-qr"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-600 text-xs font-bold border border-slate-200 dark:border-slate-700 shadow-2xs transition-colors"
                >
                  <QrCode className="w-3.5 h-3.5 text-rose-500" />
                  <span>कित्ता QR कोड</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PDF & PHOTOS STUDIO */}
        {activeTab === 'pdf' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                PDF तथा डकुमेन्ट स्टुडियो (100% Free & Private)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                फाइलहरू तपाईंको आफ्नै डिभाइसमा सुरक्षित रूपमा प्रोसेस हुन्छन्, कुनै पनि बाहिरी सर्भरमा जाँदैन।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Tool 1 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900/60 text-rose-600 flex items-center justify-center">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider">लोकसेवा / मालपोत</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">कागजात फोटो कम्प्रेसर</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      मोबाइलबाट खिचेको ५–१० MB को फोटोलाई गुणस्तर नघटाई तुरुन्त १०० KB वा २०० KB भन्दा सानो बनाउनुहोस्।
                    </p>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /><span>नागरिकता तथा लालपुर्जा विशेष</span></li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /><span>१००% निजी (No Server Upload)</span></li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Link
                    href="/tools/image-compressor"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-rose-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <span>फोटो कम्प्रेस गर्नुहोस्</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Tool 2 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900/60 text-indigo-600 flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">A4 PDF जेनेरेटर</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">तस्विरबाट A4 PDF बनाउनुहोस्</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      मोबाइलका लालपुर्जा, नक्सा वा नागरिकताका फोटोहरू मिलाएर क्रमबद्ध आधिकारिक A4 PDF बनाउनुहोस्।
                    </p>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /><span>पानाहरूको क्रम मिलाउन मिल्ने</span></li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /><span>A4 ठाडो वा तेर्सो प्रिन्ट</span></li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Link
                    href="/tools/images-to-pdf"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <span>A4 PDF बनाउनुहोस्</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Tool 3 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900/60 text-teal-600 flex items-center justify-center">
                    <FileStack className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-teal-600 uppercase tracking-wider">PDF सम्पादक</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">PDF Merge & Split</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      धेरै वटा PDF लाई एउटैमा जोड्नुहोस् (Merge) वा ठूलो फाइलबाट आफूलाई चाहिएको पाना मात्र अलग गर्नुहोस् (Split)।
                    </p>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /><span>असीमित PDF जोड्न मिल्ने</span></li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /><span>१-क्लिकमा तत्काल डाउनलोड</span></li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Link
                    href="/tools/pdf-tools"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-teal-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <span>PDF जोड्नुहोस् / छुट्टाउनुहोस्</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: NEPALI OFFICE & TYPING */}
        {activeTab === 'office' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                नेपाली अफिस तथा सरकारी लिखत टूल्स
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                टाइपिङ, बैंक चेक, भौचर तथा मालपोत लिखत तयार गर्ने उपयोगी डिजिटल उपकरणहरू।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Tool 1 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 flex items-center justify-center">
                    <ArrowRightLeft className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">दैनिक लाखौँ खोजिने</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">Preeti ⇄ Nepali Unicode</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      प्रिती फन्टलाई युनिकोडमा र युनिकोडलाई प्रितीमा तत्काल रूपान्तरण, १-क्लिक कपी तथा .txt डाउनलोड।
                    </p>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /><span>लाइभ रूपान्तरण & कपी बटन</span></li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /><span>अक्षर तथा शब्द गणना</span></li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Link
                    href="/tools/preeti-to-unicode"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <span>कन्भर्टर खोल्नुहोस्</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Tool 2 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-600 flex items-center justify-center">
                    <Coins className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">चेक तथा भौचर विशेष</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">नेपाली संख्या अक्षरेपी क्यालकुलेटर</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      अंकमा रकम टाइप गर्नुहोस् र तुरुन्तै शुद्ध नेपाली शब्द (अक्षेरुपी ... रुपैयाँ मात्र) र चेक नमुना पाउनुहोस्।
                    </p>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /><span>नेपाली तथा अंग्रेजी शब्दमा</span></li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /><span>बैंक चेकको आकर्षक प्रिभ्यू</span></li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Link
                    href="/tools/number-to-words"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-amber-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <span>अक्षरेपी निकाल्नुहोस्</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Tool 3 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-600 flex items-center justify-center">
                    <ScrollText className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">A4 प्रिन्टेबल लिखत</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">जग्गा बैनापट्टा तथा नापी निवेदन</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      जग्गाको कित्ता नं र रकम भरेपछि स्वतः कानुनी मान्यता प्राप्त बैना कागज वा नापी सीमांकन निवेदन A4 मा प्रिन्ट गर्नुहोस्।
                    </p>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /><span>जग्गा बैना कागज टेम्प्लेट</span></li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /><span>नापी सीमांकन निवेदन</span></li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Link
                    href="/tools/legal-templates"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <span>कागज तयार गर्नुहोस्</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 4: SURVEY DIRECTORY & LAWS */}
        {activeTab === 'directory' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                नापी निर्देशिका, कानुन तथा अध्ययन
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                ७७ जिल्ला कार्यालय सम्पर्क, नापी ऐन नियम तथा लोकसेवा परीक्षा तयारी।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Tool 1 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-600 flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider">७७ जिल्ला डाइरेक्टरी</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">नापी तथा मालपोत निर्देशिका</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      नेपालभरका नापी कार्यालय र मालपोत कार्यालयहरूको आधिकारिक सम्पर्क नम्बर, इमेल, र कार्यक्षेत्र खोज्नुहोस्।
                    </p>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /><span>प्रदेश अनुसार वर्गीकरण</span></li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /><span>१-क्लिक सिधा फोन कल (tel:)</span></li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Link
                    href="/tools/survey-offices"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <span>कार्यालय खोज्नुहोस्</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Tool 2 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-600 flex items-center justify-center">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">आधिकारिक राजपत्र</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">मौजूदा नापी तथा भूमि कानुन</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      जग्गा (नाप जाँच) ऐन २०१९, भू-उपयोग ऐन २०७६ र नियमावली २०७९ (संशोधन २०८१) लगायत १२ ऐनहरूको पूर्ण संग्रह।
                    </p>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /><span>मूल सरकारी PDF पढ्न मिल्ने</span></li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /><span>१२ आधिकारिक कानुनहरू</span></li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Link
                    href="/laws"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-purple-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <span>कानुन संग्रह हेर्नुहोस्</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Tool 3 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">लोकसेवा परीक्षा</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">नापी अमिन क्विज & पाठ्यक्रम</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      लोक सेवा आयोग नापी अमिन परीक्षाका लागि समय सीमा र नेगेटिभ मार्किङसहितको नमुना परीक्षा अभ्यास गर्नुहोस्।
                    </p>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /><span>२० पाठ्यक्रम आधारित प्रश्नहरू</span></li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /><span>तत्काल व्याख्या सहितको नतिजा</span></li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Link
                    href="/tools/aamin-quiz"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <span>क्विज सुरु गर्नुहोस्</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 5: OUR FLAGSHIP APPS */}
        {activeTab === 'apps' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                हाम्रा आधिकारिक सफ्टवेयर तथा मोबाइल एपहरू
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                नेपालका अमिन, इन्जिनियर र वित्तीय संस्थाका लागि विकास गरिएका आधुनिक सफ्टवेयर।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* App 1: Land Solution */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white border border-emerald-800/50 shadow-md flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 p-2 flex items-center justify-center">
                      <img src="/logo.png" alt="Land Solution" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      फ्ल्यागसिप नापी एप
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black">Land Solution (ल्याण्ड सोलुसन)</h3>
                    <p className="text-xs text-emerald-400 font-semibold">Nepal Land Measurement & Parcel Partitioning</p>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                      जग्गाको फिल्ड नापजाँच, कित्ताकाट, चारकिल्ला, मोहडा र नक्सा रेखांकनलाई सजिलो बनाउने नेपालकै अग्रणी मोबाइल सफ्टवेयर।
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>पहाडी (रोपनी-आना) र तराई (बिघा-कट्ठा) पूर्ण हिसाब</span></div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>कित्ताकाट मापदण्ड र नक्सा स्लिप प्रिन्ट</span></div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="/land-solution-demo/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>ल्याण्ड सोलुसन Web Demo चलाउनुहोस्</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>
              </div>

              {/* App 2: Hamro Kosh */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white border border-indigo-800/50 shadow-md flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
                      <Wallet className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                      वित्तीय बचत सफ्टवेयर
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black">हाम्रो कोष (Hamro Kosh)</h3>
                    <p className="text-xs text-indigo-400 font-semibold">Community & Personal Fund Management</p>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                      सहकारी, समूह, टोल विकास संस्था तथा व्यक्तिगत बचत, ऋण हिसाब, ब्याज गणना र स्टेटमेन्ट ट्र्याक गर्ने सुरक्षित प्रविधि।
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /><span>बचत र ऋणको स्वचालित ब्याज हिसाब</span></div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /><span>सदस्य खाता र पारदर्शी रिपोर्टिङ</span></div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/#hamro-kosh"
                    className="w-full py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <Wallet className="w-4 h-4" />
                    <span>हाम्रो कोष फिचर्स र डेमो</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

    </div>
  );
}
