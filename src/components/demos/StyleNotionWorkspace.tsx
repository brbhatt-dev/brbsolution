'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  ChevronRight, 
  Calculator, 
  Scale, 
  Coins, 
  Sparkles, 
  CheckSquare, 
  Bookmark, 
  Folder, 
  ArrowRight,
  HelpCircle,
  Hash,
  ChevronDown
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';
import UniversalSmartSearch from './UniversalSmartSearch';

export default function StyleNotionWorkspace() {
  const [openToggle1, setOpenToggle1] = useState(true);
  const [openToggle2, setOpenToggle2] = useState(false);

  return (
    <div className="space-y-10 max-w-4xl mx-auto font-sans text-stone-800 dark:text-stone-200">
      
      {/* 1. Notion-Style Workspace Header & Breadcrumbs */}
      <header className="space-y-4 pt-2">
        <div className="flex items-center gap-2 text-xs text-stone-500 font-mono">
          <Folder className="w-3.5 h-3.5" />
          <span>BRBhatta Workspace</span>
          <span>/</span>
          <span className="text-stone-900 dark:text-stone-100 font-bold">नेपाल डिजिटल भू-कार्यथलो</span>
        </div>

        <div className="space-y-2">
          <div className="text-4xl">📐</div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            नेपाल डिजिटल नापी तथा भू-सूचना कार्यथलो
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
            जग्गा नापजाँच, कित्ताकाट नियम, मालपोत राजस्व, र कागजात व्यवस्थापनको शान्त र व्यवस्थित डकुमेन्ट-वर्कस्पेस।
          </p>
        </div>

        {/* Search Engine embedded as a Notion command search */}
        <div className="pt-2">
          <UniversalSmartSearch placeholder="खोजी गर्नुहोस् (Type to search across pages and tools)..." />
        </div>
      </header>

      {/* 2. Notion Callout Block */}
      <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/60 flex items-start gap-3 text-xs leading-relaxed text-amber-900 dark:text-amber-200 shadow-2xs">
        <div className="text-xl shrink-0">💡</div>
        <div>
          <strong>नागरिक सुझाव:</strong> यहाँ गरिएको हिसाब तपाईंको डिभाइसमै पूर्ण सुरक्षित रहन्छ। आफ्नो जग्गाको नाप इन्टर गरी सिधै औपचारिक प्रिन्ट स्लिप निकाल्न सक्नुहुन्छ।
        </div>
      </div>

      {/* 3. The Interactive Calculator Block */}
      <section className="bg-stone-50/80 dark:bg-stone-900/50 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono">
              <Hash className="w-3.5 h-3.5 text-emerald-600" />
              <span>ब्लक १: कोर क्यालकुलेटर इन्जिन</span>
            </div>
            <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100">
              जग्गा क्षेत्रफल नाप तथा रूपान्तरण
            </h2>
          </div>

          <TithiWidget />
        </div>

        <LandCalculator />
      </section>

      {/* 4. Notion Toggle List Blocks */}
      <div className="space-y-3">
        <h3 className="text-xs font-mono uppercase text-stone-500 tracking-wider">
          कागजात तथा नियम टगलहरू (Documentation Toggles):
        </h3>

        {/* Toggle 1: Kitta Kat */}
        <div className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 overflow-hidden">
          <button
            onClick={() => setOpenToggle1(!openToggle1)}
            className="w-full p-3.5 text-left font-bold text-sm flex items-center justify-between hover:bg-stone-50 dark:hover:bg-stone-800 transition cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-emerald-600" />
              <span>भू-उपयोग नियमावली २०७९: कित्ताकाट न्यूनतम क्षेत्रफल मापदण्ड</span>
            </span>
            <ChevronDown className={`w-4 h-4 text-stone-400 transform transition-transform ${openToggle1 ? 'rotate-180' : ''}`} />
          </button>

          {openToggle1 && (
            <div className="p-4 pt-1 text-xs text-stone-600 dark:text-stone-400 space-y-2 border-t border-stone-100 dark:border-stone-800">
              <p>१. <strong>आवासीय क्षेत्र:</strong> न्यूनतम क्षेत्रफल <strong>१३० वर्गमिटर</strong> (करिब ४ आना वा ६.८ धुर) हुनुपर्छ।</p>
              <p>२. <strong>कृषि क्षेत्र:</strong> काठमाडौँ उपत्यकामा ५०० वर्गमिटर, पहाड/तराईमा <strong>६७५ वर्गमिटर</strong> (२ कट्ठा वा १ रोपनी ५ आना) भन्दा कममा कित्ताकाट पाइँदैन।</p>
              <Link href="/tools/kitta-kat-checker" className="inline-block font-bold text-emerald-700 dark:text-emerald-400 underline pt-1">
                विस्तृत कित्ताकाट परीक्षक खोल्नुहोस् &rarr;
              </Link>
            </div>
          )}
        </div>

        {/* Toggle 2: Malpot Tax */}
        <div className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 overflow-hidden">
          <button
            onClick={() => setOpenToggle2(!openToggle2)}
            className="w-full p-3.5 text-left font-bold text-sm flex items-center justify-between hover:bg-stone-50 dark:hover:bg-stone-800 transition cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Coins className="w-4 h-4 text-amber-600" />
              <span>आर्थिक वर्ष २०८१/८२ मालपोत रजिस्ट्रेसन दस्तुर दरहरू</span>
            </span>
            <ChevronDown className={`w-4 h-4 text-stone-400 transform transition-transform ${openToggle2 ? 'rotate-180' : ''}`} />
          </button>

          {openToggle2 && (
            <div className="p-4 pt-1 text-xs text-stone-600 dark:text-stone-400 space-y-2 border-t border-stone-100 dark:border-stone-800">
              <p>• <strong>महानगरपालिका:</strong> थैली अंकको ५% रजिस्ट्रेसन दस्तुर।</p>
              <p>• <strong>उप-महानगरपालिका:</strong> ४.५% र <strong>नगरपालिका:</strong> ४%।</p>
              <p>• <strong>गाउँपालिका:</strong> २%। महिला जग्गाधनीको हकमा २५% राजस्व छुट लागू हुनेछ।</p>
              <Link href="/tools/malpot-calculator" className="inline-block font-bold text-amber-700 dark:text-amber-400 underline pt-1">
                मालपोत क्यालकुलेटर चलाउनुहोस् &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* 5. Notion Quick Utilities Database */}
      <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
        <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-3">
          <span>डाटाबेस: द्रुत औजारहरू</span>
          <span>५ वटा पृष्ठहरू</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          {[
            { name: 'Preeti to Unicode', href: '/tools/preeti-to-unicode', icon: '⌨️' },
            { name: 'तस्विरबाट A4 PDF', href: '/tools/images-to-pdf', icon: '📄' },
            { name: 'फोटो कम्प्रेसर', href: '/tools/image-compressor', icon: '🖼️' },
            { name: '७७ जिल्ला नापी', href: '/tools/survey-offices', icon: '🏢' },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-emerald-600 transition flex items-center gap-2 font-medium"
            >
              <span>{item.icon}</span>
              <span className="truncate">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
