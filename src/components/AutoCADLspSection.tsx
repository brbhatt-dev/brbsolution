'use client';

import React, { useState } from 'react';
import { FileCode, Clock, Terminal, CheckCircle2, Copy, BookOpen, Layers } from 'lucide-react';

export default function AutoCADLspSection() {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const lspFiles = [
    {
      name: 'area_ropani.lsp',
      title: 'रोपनी-आना-पैसा-दाम एरिया क्यालकुलेटर',
      command: 'AROP',
      desc: 'AutoCAD मा कुनै पनि बन्द पोलिलाइन (Closed Boundary) छान्नासाथ तत्काल रोपनी, आना, पैसा, र दाममा क्षेत्रफल निकाल्ने र ड्रोइङमा टेक्स्ट राख्ने एलएसपी।',
    },
    {
      name: 'area_bigha.lsp',
      title: 'बिघा-कट्ठा-धुर एरिया क्यालकुलेटर (तराई)',
      command: 'ABIG',
      desc: 'तराईको नाप प्रणाली अनुसार AutoCAD को जग्गा क्षेत्रफललाई बिघा, कट्ठा, र धुरमा रूपान्तरण गरी देखाउने स्क्रिप्ट।',
    },
    {
      name: 'coord_export.lsp',
      title: 'सर्भे कोअर्डिनेट पोइन्ट एक्सपोर्ट (CSV)',
      command: 'EXPCOORD',
      desc: 'ड्रोइङका कित्ता सिमानाका कुनाहरू क्लिक गर्दै पोइन्ट नम्बरिङ गर्ने र Easting, Northing कोअर्डिनेटलाई एक्सेल/CSV फाइलमा सेभ गर्ने एलएसपी।',
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

        {/* Coming Soon Notice Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-2xl bg-amber-500/10 border border-amber-200 mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 text-[10px] font-bold uppercase tracking-wider">
                Release Status
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                AutoCAD LSP Scripts Pack (.LSP / .ZIP)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              सबै AutoLISP स्क्रिप्टहरू (area_ropani, area_bigha, coord_export) परिमार्जन र परीक्षण भइरहेका छन्।
            </p>
          </div>
          <div className="whitespace-nowrap inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-100 border border-amber-300 text-amber-950 font-bold text-sm shadow-xs">
            <Clock className="w-4 h-4 text-amber-700" />
            <span>Download Pack: Coming Soon (छिट्टै आउँदैछ)</span>
          </div>
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
                  <button
                    onClick={() => copyToClipboard(lsp.command)}
                    title="कमाण्ड कपी गर्नुहोस्"
                    className="text-[11px] font-mono font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-0.5 rounded flex items-center gap-1 transition-colors"
                  >
                    <span>CMD: {lsp.command}</span>
                    {copiedCmd === lsp.command ? (
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    ) : (
                      <Copy className="w-3 h-3 text-slate-400" />
                    )}
                  </button>
                </div>

                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  {lsp.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {lsp.desc}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 font-mono">AutoCAD 2010-2026</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Coming Soon</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Step-by-Step APPLOAD Guide */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                AutoCAD मा LSP फाइल कसरी लोड र प्रयोग गर्ने? (User Guide)
              </h3>
              <p className="text-xs text-slate-500">
                कम्प्युटरमा AutoCAD खोलेर ३० सेकेन्डमै स्क्रिप्ट सक्रिय बनाउने तरिका:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2">
              <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center">
                १
              </span>
              <h4 className="font-bold text-slate-900 text-sm">कमाण्ड बक्समा APPLOAD हान्नुहोस्</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                AutoCAD खोलेर कमाण्ड लाइनमा <code className="bg-slate-100 px-1 py-0.5 rounded text-amber-700 font-mono font-bold">APPLOAD</code> टाइप गरी इन्टर थिच्नुहोस्।
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2">
              <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center">
                २
              </span>
              <h4 className="font-bold text-slate-900 text-sm">फाइल छान्नुहोस् र Load गर्नुहोस्</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                डाउनलोड गरिएको <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700 font-mono">.lsp</code> फाइल छानेर <strong>Load</strong> थिच्नुहोस्। (सधैं चलाउन <em>Startup Suite</em> मा राख्नुहोस्)।
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2">
              <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center">
                ३
              </span>
              <h4 className="font-bold text-slate-900 text-sm">सर्टकट कमाण्ड रन गर्नुहोस्</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                रोपनीका लागि <code className="bg-slate-100 px-1 py-0.5 rounded text-emerald-700 font-mono font-bold">AROP</code> वा बिघाका लागि <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-700 font-mono font-bold">ABIG</code> हानेर जग्गाको बन्द पोलिलाइन छान्नुहोस्।
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
