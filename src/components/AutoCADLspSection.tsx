import React from 'react';
import { FileCode, Download, Terminal, CheckCircle2, Copy, BookOpen, Layers } from 'lucide-react';

export default function AutoCADLspSection() {
  const lspFiles = [
    {
      name: 'area_ropani.lsp',
      title: 'रोपनी-आना-पैसा-दाम एरिया क्यालकुलेटर',
      command: 'AROP',
      desc: 'AutoCAD मा कुनै पनि बन्द पोलिलाइन (Closed Boundary) छान्नासाथ तत्काल रोपनी, आना, पैसा, र दाममा क्षेत्रफल निकाल्ने र ड्रोइङमा टेक्स्ट राख्ने एलएसपी।',
      downloadUrl: '/autocad-lsp/area_ropani.lsp',
    },
    {
      name: 'area_bigha.lsp',
      title: 'बिघा-कट्ठा-धुर एरिया क्यालकुलेटर (तराई)',
      command: 'ABIG',
      desc: 'तराईको नाप प्रणाली अनुसार AutoCAD को जग्गा क्षेत्रफललाई बिघा, कट्ठा, र धुरमा रूपान्तरण गरी देखाउने स्क्रिप्ट।',
      downloadUrl: '/autocad-lsp/area_bigha.lsp',
    },
    {
      name: 'coord_export.lsp',
      title: 'सर्भे कोअर्डिनेट पोइन्ट एक्सपोर्ट (CSV)',
      command: 'EXPCOORD',
      desc: 'ड्रोइङका कित्ता सिमानाका कुनाहरू क्लिक गर्दै पोइन्ट नम्बरिङ गर्ने र Easting, Northing कोअर्डिनेटलाई एक्सेल/CSV फाइलमा सेभ गर्ने एलएसपी।',
      downloadUrl: '/autocad-lsp/coord_export.lsp',
    },
  ];

  return (
    <section id="autocad-lsp" className="py-16 md:py-24 border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold mb-3 border border-amber-200">
            <FileCode className="w-4 h-4 text-amber-600" />
            <span>AUTOCAD AUTOLISP TOOLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            AutoCAD LSP फाइल्स (AutoLISP Scripts)
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            नेपालका नापी सर्भेक्षक, अमिन तथा सिभिल इन्जिनियरहरूका लागि AutoCAD मा नापजाँच र कित्ताकाटको काम छिटो बनाउने उपयोगी एलएसपी फाइलहरू।
          </p>
        </div>

        {/* Download All Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-2xl bg-amber-500/10 border border-amber-200 mb-10 gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              सबै AutoCAD LSP फाइल्स एकैपटक डाउनलोड गर्नुहोस् (.ZIP)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              सबै AutoLISP स्क्रिप्टहरू (area_ropani, area_bigha, coord_export) एउटै जिप फाइलमा उपलब्ध छन्।
            </p>
          </div>
          <a
            href="/autocad-lsp/AutoCAD_LSP_Pack_BRBhatta.zip"
            download
            className="whitespace-nowrap inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-sm transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download All LSP (.ZIP)</span>
          </a>
        </div>

        {/* 3 LSP Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {lspFiles.map((lsp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded">
                    {lsp.name}
                  </span>
                  <span className="text-[11px] font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                    CMD: {lsp.command}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  {lsp.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {lsp.desc}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">AutoCAD 2010-2025</span>
                <a
                  href={lsp.downloadUrl}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>डाउनलोड</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Step by step How to use guide */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
          <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-600" />
            <span>AutoCAD मा LSP फाइल कसरी लोड गर्ने? (छोटो तरिका)</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-slate-700">
            <div className="space-y-1.5">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center">1</span>
              <p className="font-semibold text-slate-900">फाइल डाउनलोड गर्नुहोस्</p>
              <p className="text-xs text-slate-500">माथि दिइएका LSP फाइलहरू आफ्नो कम्प्युटरमा सेभ गर्नुहोस्।</p>
            </div>

            <div className="space-y-1.5">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center">2</span>
              <p className="font-semibold text-slate-900">AutoCAD मा APPLOAD गर्नुहोस्</p>
              <p className="text-xs text-slate-500">AutoCAD खोलेर कमान्ड बारमा <code className="bg-white px-1.5 py-0.5 rounded border font-mono">APPLOAD</code> टाइप गर्नुहोस् र फाइल सेलेक्ट गरी Load थिच्नुहोस्।</p>
            </div>

            <div className="space-y-1.5">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center">3</span>
              <p className="font-semibold text-slate-900">कमान्ड चलाउनुहोस्</p>
              <p className="text-xs text-slate-500">कमान्ड बारमा <code className="bg-white px-1.5 py-0.5 rounded border font-mono">AROP</code>, <code className="bg-white px-1.5 py-0.5 rounded border font-mono">ABIG</code> वा <code className="bg-white px-1.5 py-0.5 rounded border font-mono">EXPCOORD</code> हानेर काम गर्नुहोस्।</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
