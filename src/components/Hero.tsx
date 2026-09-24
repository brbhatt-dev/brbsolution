import React from 'react';
import { Play, Download, MessageCircle, FileCode, CheckCircle2, Compass, Wallet, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-emerald-50/50 via-white to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Friendly Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>ल्याण्ड सोलुसन &bullet; हाम्रो कोष &bullet; AutoCAD LSP टूल्स</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.18]">
              जग्गा नापजाँच, कित्ताकाट तथा{' '}
              <span className="text-emerald-700">डिजिटल प्रविधि समाधान</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              स्वागत छ <span className="font-bold text-slate-900">www.brbhatta.com</span> मा। यहाँ तपाईंले 
              <strong className="text-slate-800"> ल्याण्ड सोलुसन (Land Solution)</strong> को लाइभ डेमो, 
              <strong className="text-slate-800"> हाम्रो कोष (Hamro Kosh)</strong> एप, र 
              नापी तथा इन्जिनियरिङका लागि आवश्यक <strong className="text-slate-800">AutoCAD LSP</strong> फाइल्स सहजै प्राप्त गर्न सक्नुहुन्छ।
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#land-solution"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all scale-100 hover:scale-[1.02]"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>ल्याण्ड सोलुसन Demo चलाउनुहोस्</span>
              </a>

              <a
                href="#hamro-kosh"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition-all"
              >
                <Wallet className="w-4 h-4" />
                <span>हाम्रो कोष App</span>
              </a>

              <a
                href="#autocad-lsp"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 font-bold text-sm transition-colors"
              >
                <FileCode className="w-4 h-4 text-amber-700" />
                <span>AutoCAD LSP फाइल्स</span>
              </a>

              <a
                href="https://wa.me/9779800000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Feature Badges */}
            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs sm:text-sm text-slate-600 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>कित्ताकाट तथा नक्सा गणना</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>रोपनी / बिघा क्यालकुलेटर</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>निःशुल्क टूल्स र डाउनलोडहरू</span>
              </div>
            </div>

          </div>

          {/* Right Column: Portal Overview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-8 space-y-5">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-700 text-white font-black flex items-center justify-center text-xl shadow-sm">
                    BR
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">BR Bhatta Portal</h3>
                    <p className="text-xs text-emerald-700 font-semibold">www.brbhatta.com</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  Active
                </span>
              </div>

              {/* 3 Main Offerings Quick Box */}
              <div className="space-y-3 text-sm">
                
                {/* Land Solution */}
                <a
                  href="#land-solution"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 hover:bg-emerald-100/70 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 group-hover:text-emerald-800">Land Solution</p>
                      <p className="text-xs text-slate-500">Web Demo & Android App</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-white px-2 py-1 rounded shadow-2xs">
                    चलाउनुहोस् →
                  </span>
                </a>

                {/* Hamro Kosh */}
                <a
                  href="#hamro-kosh"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-100 hover:bg-indigo-100/70 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
                      <Wallet className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 group-hover:text-indigo-800">हाम्रो कोष (Hamro Kosh)</p>
                      <p className="text-xs text-slate-500">बचत तथा ऋण व्यवस्थापन</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-indigo-700 bg-white px-2 py-1 rounded shadow-2xs">
                    APK डाउनलोड →
                  </span>
                </a>

                {/* AutoCAD LSP */}
                <a
                  href="#autocad-lsp"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 hover:bg-amber-100/70 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0">
                      <FileCode className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 group-hover:text-amber-800">AutoCAD LSP Scripts</p>
                      <p className="text-xs text-slate-500">रोपनी/बिघा क्षेत्रफल & कोअर्डिनेट</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-800 bg-white px-2 py-1 rounded shadow-2xs">
                    LSP हेर्नुहोस् →
                  </span>
                </a>

              </div>

              <div className="pt-2 text-center text-xs text-slate-500">
                <p>सहयोग वा सोधपुछको लागि: <strong className="text-slate-800 font-semibold">contact@brbhatta.com</strong></p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
