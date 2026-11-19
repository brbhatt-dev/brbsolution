'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, CheckCircle2, Coins, ArrowRight, Sparkles } from 'lucide-react';

interface DistrictQuickTaxEstimatorProps {
  districtNp: string;
  districtEn: string;
  districtSlug: string;
  sampleRate?: number;
  sampleUnit?: string;
}

export default function DistrictQuickTaxEstimator({
  districtNp,
  districtEn,
  districtSlug,
  sampleRate = 1000000,
  sampleUnit = 'प्रति आना / कट्ठा',
}: DistrictQuickTaxEstimatorProps) {
  const [thailiAmount, setThailiAmount] = useState<string>(String(sampleRate * 4));
  const [localBodyRate, setLocalBodyRate] = useState<number>(4.5); // 5% Metro, 4.5% Sub-metro/Muni, 4% Rural
  const [discountPercent, setDiscountPercent] = useState<number>(25); // 0% Standard, 25%/35%/50% Woman discount

  const numericThaili = Math.max(0, Number(thailiAmount) || 0);
  const baseRegFee = Math.round((numericThaili * localBodyRate) / 100);
  const discountAmount = Math.round((baseRegFee * discountPercent) / 100);
  const netRegFee = baseRegFee - discountAmount;

  return (
    <section className="bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-700/40 shadow-lg space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{districtNp} तुरुन्त जग्गा पास खर्च क्यालकुलेटर (आ.व. २०८३/८४)</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-emerald-400" />
            <span>{districtNp} ({districtEn}) मालपोत रजिष्ट्रेसन दस्तुर र महिला छुट हिसाब</span>
          </h2>
        </div>

        <Link
          href="/tools/malpot-calculator"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all"
        >
          <span>पूर्ण मालपोत र लाभकर क्यालकुलेटर</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Thaili Input */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-emerald-200">
            कुल थैली रकम (रु. मा — सरकारी वा कारोबार मूल्य)
          </label>
          <input
            type="number"
            min={0}
            step={50000}
            value={thailiAmount}
            onChange={(e) => setThailiAmount(e.target.value)}
            placeholder="उदा. 4000000"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white font-bold text-sm focus:outline-none focus:border-emerald-400"
          />
          <div className="flex flex-wrap gap-1.5 pt-1">
            {[1000000, 2500000, 5000000, 10000000].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setThailiAmount(String(preset))}
                className="px-2 py-0.5 rounded-lg bg-slate-800 hover:bg-emerald-950 border border-slate-700 text-[11px] font-bold text-slate-300 hover:text-emerald-300 transition-colors"
              >
                रु. {(preset / 100000).toLocaleString('en-IN')} लाख
              </button>
            ))}
          </div>
        </div>

        {/* Local Body Type */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-emerald-200">
            स्थानीय तहको प्रकार (रजिष्ट्रेसन दर)
          </label>
          <select
            value={localBodyRate}
            onChange={(e) => setLocalBodyRate(Number(e.target.value))}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white font-bold text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
          >
            <option value={5}>महानगरपालिका क्षेत्र (५%)</option>
            <option value={4.5}>उपमहानगर / नगरपालिका (४.५%)</option>
            <option value={4}>गाउँपालिका क्षेत्र (४%)</option>
          </select>
          <p className="text-[11px] text-slate-400">
            प्रचलित आर्थिक ऐन २०८३/८४ बमोजिमको लिखत पास दर ({sampleUnit})
          </p>
        </div>

        {/* Woman / Special Discount */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-emerald-200">
            महिला / विशेष रजिष्ट्रेसन छुट
          </label>
          <select
            value={discountPercent}
            onChange={(e) => setDiscountPercent(Number(e.target.value))}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white font-bold text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
          >
            <option value={0}>सामान्य (०% छुट - पुरुष/संस्था)</option>
            <option value={25}>महिला नाममा — महानगर/सहरी (२५% छुट)</option>
            <option value={35}>महिला नाममा — नगरपालिका (३५% छुट)</option>
            <option value={50}>महिला नाममा — ग्रामीण/गाउँपालिका (५०% छुट)</option>
          </select>
          <p className="text-[11px] text-slate-400">
            ३ वर्षभित्र बिक्री नगर्ने सर्तमा महिलाको नाममा पास गर्दा पाउने छुट
          </p>
        </div>
      </div>

      {/* Output Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-semibold">सामान्य रजिष्ट्रेसन दस्तुर ({localBodyRate}%)</span>
          <p className="text-lg font-black text-white">रु. {baseRegFee.toLocaleString('en-IN')}</p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <span className="text-xs text-emerald-300 font-semibold">महिला/विशेष छुट रकम ({discountPercent}%)</span>
          <p className="text-lg font-black text-emerald-400">- रु. {discountAmount.toLocaleString('en-IN')}</p>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 space-y-1">
          <span className="text-xs text-emerald-200 font-bold flex items-center gap-1">
            <Coins className="w-3.5 h-3.5 text-emerald-300" />
            <span>तिर्नुपर्ने खुद मालपोत दस्तुर</span>
          </span>
          <p className="text-xl font-black text-emerald-300">रु. {netRegFee.toLocaleString('en-IN')}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs text-slate-300 border-t border-slate-800/80">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>नोट: १० लाखभन्दा माथिको कारोबारमा बिक्रेतालाई ५% (५ वर्षभन्दा बढी स्वामित्व) वा ७.५% पुँजीगत लाभकर (CGT) लाग्छ।</span>
        </span>
        <Link href={`/tools/survey-offices/${districtSlug}`} className="text-emerald-300 hover:underline font-bold">
          {districtNp} नापी तथा मालपोत फोन नम्बर हेर्नुहोस् →
        </Link>
      </div>
    </section>
  );
}
