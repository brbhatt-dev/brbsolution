'use client';

import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  Sparkles, 
  Home, 
  Hammer, 
  FileCheck2, 
  Clock, 
  Printer, 
  Copy, 
  Check, 
  RotateCcw,
  Compass,
  Info,
  ShieldCheck
} from 'lucide-react';
import { SHUBH_SAAIT_DATA, SaaitItem } from '@/data/shubhSaait';
import { copyToClipboard } from '@/lib/clipboard';

export default function ShubhSaaitCalendar() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<number>(0); // 0 = all
  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const [copied, setCopied] = useState(false);

  const monthsList = [
    'वैशाख', 'जेठ', 'असार', 'साउन', 'भदौ', 'असोज', 
    'कात्तिक', 'मंसिर', 'पुस', 'माघ', 'फागुन', 'चैत'
  ];

  const filteredItems = useMemo(() => {
    return SHUBH_SAAIT_DATA.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      if (selectedYear !== 0 && item.yearBs !== selectedYear) return false;
      if (selectedMonth !== 'all' && item.monthBs !== selectedMonth) return false;
      return true;
    });
  }, [selectedCategory, selectedYear, selectedMonth]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = async () => {
    const text = filteredItems.map((i) => 
      `• ${i.dateBs} (${i.dayOfWeek}) - ${i.categoryTitle}\n  तिथि/नक्षत्र: ${i.tithi}, ${i.nakshatra}\n  मुहूर्त: ${i.muhuratTime}\n  विवरण: ${i.description}\n`
    ).join('\n');

    const fullText = `🌟 घरजग्गा किनबेच, जग पूजा र गृहप्रवेश शुभ साइत तालिका (BR Bhatta Real Estate Saait)\n--------------------------------------------------\n${text}\n🔗 पूर्ण पात्रो: https://www.brbhatta.com/tools/real-estate-saait-calendar`;

    const ok = await copyToClipboard(fullText);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setSelectedCategory('all');
    setSelectedYear(0);
    setSelectedMonth('all');
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-amber-950 via-slate-900 to-amber-950 text-white p-6 sm:p-8 border border-amber-800/40 shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>नेपाल पञ्चाङ्ग निर्णायक विकास समिति तथा वैदिक वास्तुशास्त्र अनुसार</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              घरजग्गा खरिदबिक्री, जग पूजा र गृहप्रवेश शुभ साइत २०८१/२०८२
            </h2>
            <p className="text-sm text-amber-100/90 leading-relaxed">
              जग्गा रजिष्ट्रेसन पास गर्ने लगन, घरको शिलान्यास (जग पूजा), छत ढलान र नयाँ घरमा गृहप्रवेशका आधिकारिक शुभ मुहूर्त तथा तिथि-नक्षत्र तालिका।
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0 print:hidden">
            <button
              onClick={handleReset}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>सबै हेर्नुहोस्</span>
            </button>
            <button
              onClick={handleCopy}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'कपी भयो!' : 'तालिका कपी'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>A4 प्रिन्ट</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Controls (hidden on print) */}
      <div className="print:hidden bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'सबै साइतहरू (All Events)', icon: Sparkles },
            { id: 'registry', label: 'जग्गा पास (Registry Pass)', icon: FileCheck2 },
            { id: 'foundation', label: 'जग पूजा / शिलान्यास', icon: Hammer },
            { id: 'casting', label: 'छत ढलान (Roof Casting)', icon: Compass },
            { id: 'grihaprabesh', label: 'गृहप्रवेश (Housewarming)', icon: Home }
          ].map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                  isSelected
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Year and Month Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-slate-600 dark:text-slate-400 whitespace-nowrap">वर्ष छान्नुहोस्:</span>
            <div className="flex gap-2">
              {[
                { val: 0, label: 'सबै वर्ष' },
                { val: 2081, label: '२०८१ साल' },
                { val: 2082, label: '२०८२ साल' }
              ].map((y) => (
                <button
                  key={y.val}
                  onClick={() => setSelectedYear(y.val)}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                    selectedYear === y.val
                      ? 'bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-800'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100'
                  }`}
                >
                  {y.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-slate-600 dark:text-slate-400 whitespace-nowrap">महिना:</span>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="w-full p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-slate-100"
            >
              <option value="all">सबै महिना (All Months)</option>
              {monthsList.map((m) => (
                <option key={m} value={m}>{m} महिना</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Saait List Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
          <span>कुल {filteredItems.length} वटा शुभ साइतहरू उपलब्ध:</span>
          <span>Bikram Sambat 2081 - 2082</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-amber-400/60 dark:hover:border-amber-700/60 transition-all space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className={`px-2.5 py-0.5 rounded-full text-2xs font-bold inline-block mb-1.5 ${
                    item.category === 'registry' ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800' :
                    item.category === 'foundation' ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800' :
                    item.category === 'casting' ? 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800' :
                    'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                  }`}>
                    {item.categoryTitle}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                    {item.dateBs} ({item.dayOfWeek})
                  </h3>
                </div>
                <span className="text-2xs font-mono font-semibold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg">
                  {item.dateAd}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-2xs sm:text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-850 p-3 rounded-2xl">
                <div>
                  <span className="block text-slate-400 font-semibold">तिथि:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{item.tithi}</span>
                </div>
                <div>
                  <span className="block text-slate-400 font-semibold">नक्षत्र:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{item.nakshatra}</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>मुहूर्त बेला: {item.muhuratTime}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2">
            <Sparkles className="w-8 h-8 text-slate-400 mx-auto" />
            <h4 className="font-bold text-slate-700 dark:text-slate-300">छानिएको महिना वा शीर्षकमा कुनै साइत भेटिएन</h4>
            <p className="text-xs text-slate-500">कृपया "सबै महिना" वा "सबै साइतहरू" चयन गरी पुनः हेर्नुहोस्।</p>
          </div>
        )}
      </div>
    </div>
  );
}
