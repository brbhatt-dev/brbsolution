'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Ruler, 
  FileCheck2, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  Copy, 
  Check, 
  Printer, 
  Info,
  ShieldCheck,
  Compass,
  Zap,
  Globe
} from 'lucide-react';
import { MUNICIPALITIES_BYELAWS, MunicipalityByeLaw } from '@/data/municipalitiesData';
import { copyToClipboard } from '@/lib/clipboard';

export default function MunicipalByeLawsHub() {
  const [selectedCityId, setSelectedCityId] = useState<string>('kathmandu');
  const [copied, setCopied] = useState(false);

  const city = MUNICIPALITIES_BYELAWS.find((c) => c.id === selectedCityId) || MUNICIPALITIES_BYELAWS[0];

  const handleCopy = async () => {
    const text = `🏛️ ${city.name} नक्सा पास तथा सेतब्याक मापदण्ड (BR Bhatta Municipal Bye-Laws)
--------------------------------------------------
• स्थानीय तह: ${city.name} (${city.district}, ${city.province})
• नक्सा पासका लागि न्यूनतम बाटो: ${city.roadWidthMinMeters} मिटर (${city.roadWidthMinFeet} फिट)
• अगाडिको सेतब्याक (Front): ${city.frontSetbackM} मिटर
• छेउको सेतब्याक (Side): ${city.sideSetbackM} मिटर (साँधतर्फ झ्याल खोल्न अनिवार्य)
• पछाडिको सेतब्याक (Rear): ${city.rearSetbackM} मिटर
• अधिकतम ग्राउन्ड कभरेज: ${city.maxGroundCoveragePercent}%
• FAR (Floor Area Ratio): ${city.maxFar}
• हाइटेन्सन लाइन सेतब्याक: ${city.highTensionSetbackM}
• घरबाटो सिफारिस शुल्क: ${city.gharBatoFee}
• अनलाइन नक्सा पास पोर्टल: ${city.ebpsPortal}

विशेष स्थानीय नियमहरू:
${city.specialRules.map((r) => `• ${r}`).join('\n')}

🔗 पूर्ण विवरण: https://www.brbhatta.com/tools/municipal-bye-laws`;

    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 border border-blue-900/40 shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold">
              <Building2 className="w-3.5 h-3.5 text-blue-400" />
              <span>स्थानीय सरकार सञ्चालन ऐन २०७४ र भवन निर्माण मापदण्ड २०७२/२०८१ अनुसार</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              नेपालका प्रमुख १० सहर "घरबाटो, नक्सा पास र बाइ-लज हब"
            </h2>
            <p className="text-sm text-blue-100/90 leading-relaxed">
              काठमाडौँ, पोखरा, ललितपुर, भरतपुर, बुटवल लगायत प्रमुख सहरहरूको नक्सा पासका लागि चाहिने बाटोको चौडाइ, सेतब्याक (Setback), ग्राउन्ड कभरेज, FAR र घरबाटो सिफारिस दस्तुर एकै ठाउँमा हेर्नुहोस्।
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0 print:hidden">
            <button
              onClick={handleCopy}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'कपी भयो!' : 'मापदण्ड कपी'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>A4 प्रिन्ट</span>
            </button>
          </div>
        </div>
      </div>

      {/* City Switcher Tabs (hidden on print) */}
      <div className="print:hidden space-y-2">
        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
          सहर / स्थानीय तह छान्नुहोस् (Select Municipality):
        </label>
        <div className="flex flex-wrap gap-2">
          {MUNICIPALITIES_BYELAWS.map((m) => {
            const isSelected = selectedCityId === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelectedCityId(m.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{m.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected City Detailed Profile Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-9 border border-slate-200 dark:border-slate-800 shadow-sm space-y-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-5">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-2xs font-bold border border-blue-200 dark:border-blue-800">
              {city.type} • {city.district} ({city.province})
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {city.name} भवन निर्माण तथा नक्सा पास मापदण्ड
            </h3>
          </div>

          <a
            href={`https://${city.ebpsPortal}`}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 text-xs font-bold inline-flex items-center gap-1.5 transition-colors print:hidden"
          >
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span>अनलाइन नक्सा पास (E-BPS) पोर्टल</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* 4 Primary Parameters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-1">
            <span className="text-2xs font-bold text-slate-500 uppercase">नक्सा पासका लागि न्यूनतम बाटो:</span>
            <div className="text-xl font-black text-blue-600 dark:text-blue-400 font-mono">
              {city.roadWidthMinMeters} मिटर
            </div>
            <p className="text-2xs text-slate-500">कम्तीमा {city.roadWidthMinFeet} फिट बाटो अनिवार्य</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-1">
            <span className="text-2xs font-bold text-slate-500 uppercase">अगाडिको सेतब्याक (Front):</span>
            <div className="text-xl font-black text-slate-900 dark:text-white font-mono">
              {city.frontSetbackM} मिटर
            </div>
            <p className="text-2xs text-slate-500">सडक केन्द्रबाट अधिकार कटाएर</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-1">
            <span className="text-2xs font-bold text-slate-500 uppercase">छेउ / पछाडि सेतब्याक:</span>
            <div className="text-xl font-black text-slate-900 dark:text-white font-mono">
              {city.sideSetbackM}m / {city.rearSetbackM}m
            </div>
            <p className="text-2xs text-slate-500">झ्याल खोल्न १.५m (५ फिट) नियम</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-1">
            <span className="text-2xs font-bold text-slate-500 uppercase">अधिकतम ग्राउन्ड कभरेज:</span>
            <div className="text-xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
              {city.maxGroundCoveragePercent}%
            </div>
            <p className="text-2xs text-slate-500">अधिकतम FAR: {city.maxFar}</p>
          </div>
        </div>

        {/* High Tension and Ghar Bato Sifaris Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 space-y-1.5 text-amber-950 dark:text-amber-200">
            <div className="flex items-center gap-1.5 font-bold">
              <Zap className="w-4 h-4 text-amber-600" />
              <span>हाइटेन्सन विद्युत लाइन सेतब्याक मापदण्ड:</span>
            </div>
            <p className="text-xs leading-relaxed">
              {city.highTensionSetbackM}
            </p>
            <p className="text-2xs opacity-80">
              * प्रसारण लाइनको तार मुनि वा तोकिएको दुरीभित्र घर, छाना वा पर्खाल बनाउन पाइँदैन।
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 space-y-1.5 text-blue-950 dark:text-blue-200">
            <div className="flex items-center gap-1.5 font-bold">
              <FileCheck2 className="w-4 h-4 text-blue-600" />
              <span>घरबाटो सिफारिस दस्तुर दर (Ghar-Bato Fee):</span>
            </div>
            <p className="text-xs leading-relaxed">
              {city.gharBatoFee}
            </p>
            <p className="text-2xs opacity-80">
              * वडा कार्यालयबाट जारी हुने घरबाटो सिफारिस बैंक धितो र मालपोत पासमा अनिवार्य हुन्छ।
            </p>
          </div>
        </div>

        {/* Special Local Rules */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{city.name} का विशेष स्थानीय निर्माण नियमहरू:</span>
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {city.specialRules.map((r, i) => (
              <li key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 10-City Comparison Matrix Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h4 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <Ruler className="w-4 h-4 text-blue-600" />
          <span>नेपालका १० प्रमुख पालिकाहरूको मापदण्ड तुलनात्मक तालिका (Comparison Matrix):</span>
        </h4>

        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 bg-slate-50 dark:bg-slate-800">
                <th className="p-2.5 text-left font-bold">स्थानीय तह (पालिका)</th>
                <th className="p-2.5 text-center font-bold">न्यूनतम बाटो</th>
                <th className="p-2.5 text-center font-bold">अगाडि सेतब्याक</th>
                <th className="p-2.5 text-center font-bold">छेउ/पछाडि</th>
                <th className="p-2.5 text-center font-bold">ग्राउन्ड कभरेज</th>
                <th className="p-2.5 text-center font-bold">FAR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono">
              {MUNICIPALITIES_BYELAWS.map((m) => (
                <tr 
                  key={m.id}
                  onClick={() => setSelectedCityId(m.id)}
                  className={`hover:bg-blue-50/50 dark:hover:bg-slate-800/60 cursor-pointer ${
                    selectedCityId === m.id ? 'bg-blue-50 dark:bg-blue-950/30 font-bold' : ''
                  }`}
                >
                  <td className="p-2.5 font-sans font-bold text-slate-900 dark:text-white">
                    {m.name}
                  </td>
                  <td className="p-2.5 text-center text-blue-600 dark:text-blue-400">
                    {m.roadWidthMinMeters}m ({m.roadWidthMinFeet}ft)
                  </td>
                  <td className="p-2.5 text-center text-slate-800 dark:text-slate-200">
                    {m.frontSetbackM} मिटर
                  </td>
                  <td className="p-2.5 text-center text-slate-800 dark:text-slate-200">
                    {m.sideSetbackM}m / {m.rearSetbackM}m
                  </td>
                  <td className="p-2.5 text-center text-emerald-600 dark:text-emerald-400 font-bold">
                    {m.maxGroundCoveragePercent}%
                  </td>
                  <td className="p-2.5 text-center text-slate-700 dark:text-slate-300">
                    {m.maxFar}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
