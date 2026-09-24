'use client';

import React, { useState } from 'react';
import { Compass, Clock, Play, CheckCircle2, Calculator, Layers, ArrowRight, X, ExternalLink, RefreshCw } from 'lucide-react';

export default function LandSolutionSection() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [iframeKey, setIframeKey] = useState(1);

  // Land converter state
  const [unitType, setUnitType] = useState<'hill' | 'terai'>('hill');
  const [sqft, setSqft] = useState<number>(5476);

  // Conversion calculations
  const ropani = Math.floor(sqft / 5476);
  const remAfterRopani = sqft % 5476;
  const aana = Math.floor(remAfterRopani / 342.25);
  const remAfterAana = remAfterRopani % 342.25;
  const paisa = Math.floor(remAfterAana / 85.5625);
  const remAfterPaisa = remAfterAana % 85.5625;
  const daam = (remAfterPaisa / 21.390625).toFixed(2);

  const bigha = Math.floor(sqft / 72900);
  const remAfterBigha = sqft % 72900;
  const katha = Math.floor(remAfterBigha / 3645);
  const remAfterKatha = remAfterBigha % 3645;
  const dhur = (remAfterKatha / 182.25).toFixed(2);

  const sqm = (sqft / 10.7639).toFixed(2);

  return (
    <section id="land-solution" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-100">
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>LAND SURVEY & CADASTRE</span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shadow-xs">
              <img src="/logo.png" alt="Land Solution" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Land Solution (ल्याण्ड सोलुसन)
            </h2>
          </div>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            नेपालको जग्गा नापजाँच, कित्ताकाट, क्षेत्रफल गणना र नक्सा सम्बन्धी सम्पूर्ण कार्यलाई छिटो, सरल र डिजिटल बनाउने भरपर्दो प्रणाली।
          </p>
        </div>

        {/* Feature Banner with Demo CTA */}
        <div className="rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 text-white p-8 sm:p-12 mb-16 shadow-xl shadow-emerald-900/10 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-emerald-400/20 text-emerald-200 px-3 py-1 rounded-full border border-emerald-400/30">
              Interactive Web App & System
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
              ल्याण्ड सोलुसनलाई अब सिधै ब्राउजरमै चलाउनुहोस् (Live Web Demo)
            </h3>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              कम्प्युटर वा मोबाइलमा कुनै सफ्टवेयर इन्स्टल नगरीकन नक्सा हेर्न, क्षेत्रफल नाप्न र कित्ताकाटको गणना गर्न तलको बटन थिची सिधै डेमो सुरु गर्नुहोस्।
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  setIframeKey(prev => prev + 1);
                  setShowDemoModal(true);
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-bold text-sm shadow-md transition-all scale-100 hover:scale-[1.02]"
              >
                <Play className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>ल्याण्ड सोलुसन Web Demo चलाउनुहोस्</span>
              </button>

              {/* Direct Tab Link */}
              <a
                href="/land-solution-demo/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-800 text-white border border-emerald-500/30 font-semibold text-sm transition-all"
              >
                <span>नयाँ ट्याबमा खोल्नुहोस्</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Coming Soon Notice instead of APK download */}
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-emerald-100 text-xs font-semibold backdrop-blur-xs">
                <Clock className="w-4 h-4 text-amber-300" />
                <span>Android APK: <strong className="text-amber-300">Coming Soon (छिट्टै आउँदैछ)</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column: Key Features + Built-in Live Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Key Features */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              ल्याण्ड सोलुसनका मुख्य विशेषताहरू:
            </h3>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>सटीक कित्ताकाट तथा रेखांकन (Parcel Splitting)</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                  जग्गाको निश्चित क्षेत्रफल छुट्याउन, अंशबन्डा गर्दा आवश्यक कित्ता विभाजन र सिमानाको लम्बाइ शुद्ध रूपमा पत्ता लगाउन सकिन्छ।
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>रोपनी र बिघा प्रणालीमा तत्काल रूपान्तरण</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                  वर्गफिट (Sq.Ft) वा वर्गमिटर (Sq.M) लाई पहाडी प्रणाली (रोपनी-आना-पैसा-दाम) तथा तराई प्रणाली (बिघा-कट्ठा-धुर) मा तुरुन्त कन्भर्ट गर्ने सुविधा।
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Geo-Reference & नक्सा समन्वय (Cadastral Mapping)</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                  अमिन, सर्भेक्षक, इन्जिनियर र मालपोत/नापी कार्यालयका प्राविधिकहरूका लागि फिल्ड र नक्सा मिलान गर्न उपयोगी टूल्स।
                </p>
              </div>
            </div>
          </div>

          {/* Built-in Live Nepal Land Area Calculator */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Calculator className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">
                  नेपाली जग्गा क्षेत्रफल क्यालकुलेटर (Live Tool)
                </h4>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
                निःशुल्क टूल
              </span>
            </div>

            <p className="text-xs text-slate-500 mb-5">
              कुनै पनि क्षेत्रफल वर्गफिटमा हाल्नुहोस् र तत्काल रोपनी वा बिघामा हिसाब हेर्नुहोस्:
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  क्षेत्रफल (वर्गफिट / Sq. Feet)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    value={sqft}
                    onChange={(e) => setSqft(Math.max(0, Number(e.target.value)))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white font-mono text-base font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                    placeholder="उदा. 5476"
                  />
                  <span className="absolute right-3.5 top-3.5 text-xs text-slate-400 font-semibold">
                    Sq. Ft.
                  </span>
                </div>
              </div>

              {/* Preset quick buttons */}
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="text-slate-500 text-[11px] self-center">द्रुत छनोट:</span>
                <button
                  type="button"
                  onClick={() => setSqft(5476)}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 font-medium transition-colors"
                >
                  १ रोपनी (5,476)
                </button>
                <button
                  type="button"
                  onClick={() => setSqft(342.25)}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 font-medium transition-colors"
                >
                  १ आना (342.25)
                </button>
                <button
                  type="button"
                  onClick={() => setSqft(72900)}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 font-medium transition-colors"
                >
                  १ बिघा (72,900)
                </button>
                <button
                  type="button"
                  onClick={() => setSqft(3645)}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 font-medium transition-colors"
                >
                  १ कट्ठा (3,645)
                </button>
              </div>

              {/* Conversion Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {/* Ropani Box */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-[11px] font-bold text-emerald-700 uppercase">
                    पहाड (काठमाडौँ उपत्यका)
                  </span>
                  <p className="text-lg font-extrabold text-slate-900 mt-1 font-mono">
                    {ropani} <span className="text-xs font-normal text-slate-500">रोपनी</span>{' '}
                    {aana} <span className="text-xs font-normal text-slate-500">आना</span>{' '}
                    {paisa} <span className="text-xs font-normal text-slate-500">पैसा</span>{' '}
                    {daam} <span className="text-xs font-normal text-slate-500">दाम</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">१ रोपनी = ५,४७६ वर्गफिट</p>
                </div>

                {/* Bigha Box */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-[11px] font-bold text-blue-700 uppercase">
                    तराई प्रणाली
                  </span>
                  <p className="text-lg font-extrabold text-slate-900 mt-1 font-mono">
                    {bigha} <span className="text-xs font-normal text-slate-500">बिघा</span>{' '}
                    {katha} <span className="text-xs font-normal text-slate-500">कट्ठा</span>{' '}
                    {dhur} <span className="text-xs font-normal text-slate-500">धुर</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">१ बिघा = ७२,९०० वर्गफिट</p>
                </div>
              </div>

              {/* Metric equivalent */}
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs flex items-center justify-between text-slate-600">
                <span>वर्गमिटर (Sq. Meter):</span>
                <span className="font-bold text-slate-900 font-mono text-sm">{sqm} m²</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Full-Screen / Modal Live Demo Preview */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6">
          <div className="bg-white rounded-2xl w-full max-w-5xl h-[88vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-bold text-slate-900 text-sm sm:text-base">
                  ल्याण्ड सोलुसन (Land Solution Live Web Demo)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIframeKey(k => k + 1)}
                  title="Reload Demo"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors flex items-center gap-1 text-xs font-medium"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">पुनः लोड</span>
                </button>
                <a
                  href="/land-solution-demo/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1 font-bold px-2 py-1"
                >
                  <span>नयाँ विन्डोमा खोल्नुहोस्</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setShowDemoModal(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded Iframe */}
            <div className="flex-grow bg-slate-950 relative">
              <iframe
                key={iframeKey}
                src="/land-solution-demo/index.html"
                title="Land Solution Web Demo"
                allow="geolocation; camera"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
