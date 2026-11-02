'use client';

import React, { useState, useMemo } from 'react';
import { 
  Users, 
  Calculator, 
  PieChart, 
  AlertTriangle, 
  CheckCircle2, 
  RotateCcw, 
  Copy, 
  Check, 
  Scale, 
  Sparkles,
  Info
} from 'lucide-react';

export default function AnshabandaCalculator() {
  const [unitSystem, setUnitSystem] = useState<'pahadi' | 'terai'>('pahadi');
  
  // Pahadi inputs
  const [ropani, setRopani] = useState<string>('0');
  const [aana, setAana] = useState<string>('8');
  const [paisa, setPaisa] = useState<string>('2');
  const [daam, setDaam] = useState<string>('0');

  // Terai inputs
  const [bigha, setBigha] = useState<string>('0');
  const [kattha, setKattha] = useState<string>('4');
  const [dhur, setDhur] = useState<string>('10');

  // Shares count
  const [sharesCount, setSharesCount] = useState<number>(3);
  const [copied, setCopied] = useState<boolean>(false);

  // Calculation
  const calculation = useMemo(() => {
    const shares = Math.max(1, sharesCount);

    if (unitSystem === 'pahadi') {
      const r = parseFloat(ropani) || 0;
      const a = parseFloat(aana) || 0;
      const p = parseFloat(paisa) || 0;
      const d = parseFloat(daam) || 0;

      // 1 Ropani = 16 Aana = 64 Paisa = 256 Daam
      const totalDaam = (((r * 16) + a) * 4 + p) * 4 + d;
      const totalSqFt = totalDaam * 21.390625;
      const totalSqM = totalSqFt * 0.092903;

      const shareDaam = totalDaam / shares;
      const shareRopani = Math.floor(shareDaam / 256);
      const remAfterR = shareDaam % 256;
      const shareAana = Math.floor(remAfterR / 16);
      const remAfterA = remAfterR % 16;
      const sharePaisa = Math.floor(remAfterA / 4);
      const shareRemainingDaam = Number((remAfterA % 4).toFixed(2));

      const shareSqFt = totalSqFt / shares;
      const shareSqM = totalSqM / shares;

      // Under Land Use Rules 2079/2081, minimum residential kitta-kat is 130 sq m (approx 4 aana 0.3 paisa)
      const isEligibleForKittaKat = shareSqM >= 130;

      return {
        totalDisplay: `${r} रोपनी - ${a} आना - ${p} पैसा - ${d} दाम`,
        totalSqFt: totalSqFt.toLocaleString('en-IN', { maximumFractionDigits: 1 }),
        totalSqM: totalSqM.toLocaleString('en-IN', { maximumFractionDigits: 1 }),
        shareFormatted: `${shareRopani} रोपनी - ${shareAana} आना - ${sharePaisa} पैसा - ${shareRemainingDaam} दाम`,
        shareSqFt: shareSqFt.toLocaleString('en-IN', { maximumFractionDigits: 1 }),
        shareSqM: shareSqM.toLocaleString('en-IN', { maximumFractionDigits: 1 }),
        shareRopani,
        shareAana,
        sharePaisa,
        shareDaam: shareRemainingDaam,
        isEligibleForKittaKat,
        minRequiredSqM: 130
      };
    } else {
      const b = parseFloat(bigha) || 0;
      const k = parseFloat(kattha) || 0;
      const dh = parseFloat(dhur) || 0;

      // 1 Bigha = 20 Kattha = 400 Dhur
      const totalDhur = (b * 20 + k) * 20 + dh;
      const totalSqFt = totalDhur * 182.25;
      const totalSqM = totalSqFt * 0.092903;

      const shareDhur = totalDhur / shares;
      const shareBigha = Math.floor(shareDhur / 400);
      const remAfterB = shareDhur % 400;
      const shareKattha = Math.floor(remAfterB / 20);
      const shareRemainingDhur = Number((remAfterB % 20).toFixed(2));

      const shareSqFt = totalSqFt / shares;
      const shareSqM = totalSqM / shares;

      // Under Land Use Rules 2079/2081, minimum Terai residential kitta-kat is 169.3 sq m (approx 10 dhur)
      const isEligibleForKittaKat = shareSqM >= 169.3;

      return {
        totalDisplay: `${b} बिघा - ${k} कट्ठा - ${dh} धुर`,
        totalSqFt: totalSqFt.toLocaleString('en-IN', { maximumFractionDigits: 1 }),
        totalSqM: totalSqM.toLocaleString('en-IN', { maximumFractionDigits: 1 }),
        shareFormatted: `${shareBigha} बिघा - ${shareKattha} कट्ठा - ${shareRemainingDhur} धुर`,
        shareSqFt: shareSqFt.toLocaleString('en-IN', { maximumFractionDigits: 1 }),
        shareSqM: shareSqM.toLocaleString('en-IN', { maximumFractionDigits: 1 }),
        shareBigha,
        shareKattha,
        shareDhur: shareRemainingDhur,
        isEligibleForKittaKat,
        minRequiredSqM: 169.3
      };
    }
  }, [unitSystem, ropani, aana, paisa, daam, bigha, kattha, dhur, sharesCount]);

  const handleCopy = () => {
    const text = `जग्गा अंशबन्डा हिसाब (BR Bhatta Land Calculator):
कुल क्षेत्रफल: ${calculation.totalDisplay} (${calculation.totalSqFt} sq.ft / ${calculation.totalSqM} sq.m)
अंशियार सङ्ख्या: ${sharesCount} जना
प्रत्येक अंशियारको भाग: ${calculation.shareFormatted} (${calculation.shareSqFt} sq.ft / ${calculation.shareSqM} sq.m)
कित्ताकाट मापदण्ड: ${calculation.isEligibleForKittaKat ? 'सफल (कित्ताकाट सम्भव)' : 'मापदण्डभन्दा कम (न्यूनतम १३०/१६९.३ वर्गमिटर आवश्यक)'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setRopani('0');
    setAana('8');
    setPaisa('2');
    setDaam('0');
    setBigha('0');
    setKattha('4');
    setDhur('10');
    setSharesCount(3);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
      
      {/* Header & System Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-1.5">
            <PieChart className="w-3.5 h-3.5 text-emerald-600" />
            <span>नेपाल जग्गा अंशबन्डा तथा कित्ता हिस्सा क्याल्कुलेटर</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            अंशियारहरू बीच बराबर जग्गा भाग लगाउनुहोस्
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            मुलुकी देवानी संहिता २०७४ र भू-उपयोग नियमावली २०८१ अनुसार प्रत्येक अंशियारको हिस्सा र कित्ताकाट योग्यता।
          </p>
        </div>

        {/* Toggle Pahadi vs Terai */}
        <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl text-xs font-bold self-start sm:self-auto shrink-0">
          <button
            onClick={() => setUnitSystem('pahadi')}
            className={`px-3.5 py-2 rounded-xl transition-all ${
              unitSystem === 'pahadi'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            पहाडी (रोपनी-आना)
          </button>
          <button
            onClick={() => setUnitSystem('terai')}
            className={`px-3.5 py-2 rounded-xl transition-all ${
              unitSystem === 'terai'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            तराई (बिघा-कट्ठा)
          </button>
        </div>
      </div>

      {/* Input Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Input Form */}
        <div className="lg:col-span-7 space-y-5">
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>१. कुल जग्गाको क्षेत्रफल प्रविष्ट गर्नुहोस्:</span>
              <span className="text-[11px] text-emerald-600 font-semibold">{unitSystem === 'pahadi' ? 'पहाड / उपत्यका' : 'तराई / भित्री मधेस'}</span>
            </label>

            {unitSystem === 'pahadi' ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500">रोपनी</span>
                  <input
                    type="number"
                    min="0"
                    value={ropani}
                    onChange={(e) => setRopani(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-base focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500">आना</span>
                  <input
                    type="number"
                    min="0"
                    max="15"
                    value={aana}
                    onChange={(e) => setAana(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-base focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500">पैसा</span>
                  <input
                    type="number"
                    min="0"
                    max="3"
                    value={paisa}
                    onChange={(e) => setPaisa(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-base focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500">दाम</span>
                  <input
                    type="number"
                    min="0"
                    max="3"
                    step="0.1"
                    value={daam}
                    onChange={(e) => setDaam(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-base focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    placeholder="0"
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500">बिघा</span>
                  <input
                    type="number"
                    min="0"
                    value={bigha}
                    onChange={(e) => setBigha(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-base focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500">कट्ठा</span>
                  <input
                    type="number"
                    min="0"
                    max="19"
                    value={kattha}
                    onChange={(e) => setKattha(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-base focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500">धुर</span>
                  <input
                    type="number"
                    min="0"
                    max="19"
                    step="0.1"
                    value={dhur}
                    onChange={(e) => setDhur(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-base focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    placeholder="0"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Number of Shares / Anshiyaar */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>२. अंशियारहरूको सङ्ख्या (कति भाग लगाउने?):</span>
              </span>
              <span className="text-sm font-black text-emerald-600">{sharesCount} जना</span>
            </label>

            <div className="flex items-center gap-2">
              <input
                type="range"
                min="2"
                max="10"
                value={sharesCount}
                onChange={(e) => setSharesCount(parseInt(e.target.value) || 2)}
                className="w-full accent-emerald-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            {/* Quick Share Buttons */}
            <div className="flex flex-wrap gap-2 text-xs font-bold pt-1">
              {[2, 3, 4, 5, 6, 7, 8].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setSharesCount(num)}
                  className={`px-3 py-1.5 rounded-xl border transition-all ${
                    sharesCount === num
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {num} जना
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-semibold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>रिसेट गर्नुहोस्</span>
            </button>
          </div>
        </div>

        {/* Right: Results Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 border border-slate-800 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                अंशबन्डा नतिजा (Partition Result)
              </span>
              <span className="text-[11px] bg-white/10 px-2.5 py-0.5 rounded-full font-mono text-slate-300">
                {sharesCount} बराबर भाग
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-xs text-slate-400">कुल जग्गाको क्षेत्रफल:</span>
              <p className="text-sm sm:text-base font-black text-white">
                {calculation.totalDisplay}
              </p>
              <p className="text-xs font-mono text-slate-400">
                {calculation.totalSqFt} sq.ft ({calculation.totalSqM} sq.m)
              </p>
            </div>

            {/* Per Share Big Highlight */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-teal-950/80 border border-emerald-500/40 space-y-2">
              <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>प्रति अंशियार पर्ने भाग (Per Person Share):</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {calculation.shareFormatted}
              </h3>
              <div className="flex items-center gap-3 text-xs text-emerald-200/90 font-mono pt-1">
                <span>≈ {calculation.shareSqFt} वर्गफिट</span>
                <span>•</span>
                <span>{calculation.shareSqM} वर्गमिटर</span>
              </div>
            </div>

            {/* Kitta Kat Eligibility Status */}
            <div className={`p-4 rounded-2xl border text-xs leading-relaxed space-y-1.5 ${
              calculation.isEligibleForKittaKat 
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200' 
                : 'bg-amber-950/40 border-amber-500/40 text-amber-200'
            }`}>
              <div className="flex items-center gap-2 font-bold text-sm">
                {calculation.isEligibleForKittaKat ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-emerald-300">कित्ताकाट गर्न मिल्ने (Eligible)</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-amber-300">कित्ताकाट मापदण्ड भन्दा सानो</span>
                  </>
                )}
              </div>
              <p className="text-[11px] text-slate-300">
                {calculation.isEligibleForKittaKat 
                  ? `प्रत्येक अंशियारको भाग न्यूनतम मापदण्ड (${calculation.minRequiredSqM} वर्गमिटर) भन्दा बढी भएकाले छुट्टाछुट्टै कित्ता नम्बर कायम गरी लालपुर्जा निकाल्न सकिन्छ।`
                  : `प्रत्येक भाग ${calculation.shareSqM} वर्गमिटर मात्र भएकोले भू-उपयोग नियमावली २०८१ अनुसार छुट्टै कित्ताकाट नहुन सक्छ। यस्तोमा संयुक्त (संयुक्त दर्ता) लालपुर्जा कायम गर्नुपर्ने हुन्छ।`}
              </p>
            </div>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>विवरण कपी भयो!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>सम्पूर्ण हिसाब कपी गर्नुहोस्</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
}
