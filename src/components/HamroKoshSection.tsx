'use client';

import React, { useState } from 'react';
import { Wallet, Clock, Play, CheckCircle2, ShieldCheck, Users, TrendingUp, FileText, Sparkles } from 'lucide-react';
import HamroKoshDemo from './HamroKoshDemo';

export default function HamroKoshSection() {
  const [showDemo, setShowDemo] = useState(false);

  const features = [
    {
      icon: Users,
      title: 'समूह तथा व्यक्तिगत बचत व्यवस्थापन',
      desc: 'परिवार, साथीभाइ, गुठी वा बचत समूहका सदस्यहरूको नियमित बचत अभिलेख राख्न सकिने।',
    },
    {
      icon: TrendingUp,
      title: 'ऋण प्रवाह तथा ब्याज गणना',
      desc: 'लगानी गरिएको ऋण र त्यसको मासिक वा वार्षिक ब्याजको स्वचालित र पारदर्शी हिसाब।',
    },
    {
      icon: FileText,
      title: 'सदस्य स्टेटमेन्ट र रिपोर्ट',
      desc: 'प्रत्येक सदस्यको छुट्टाछुट्टै हिसाब किताब र समूहको समग्र आय-व्यय प्रतिवेदन।',
    },
    {
      icon: ShieldCheck,
      title: 'सुरक्षित र प्रयोग गर्न सजिलो',
      desc: 'कुनै झन्झट बिना सरल नेपाली इन्टरफेसमा मोबाइलबाटै चलाउन सकिने गरी तयार गरिएको।',
    },
  ];

  return (
    <section id="hamro-kosh" className="py-16 md:py-24 border-t border-slate-100 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-800 text-xs font-semibold mb-3 border border-indigo-100">
            <Wallet className="w-4 h-4 text-indigo-600" />
            <span>SAVINGS & FUND MANAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            हाम्रो कोष (Hamro Kosh)
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            समूह, समिति, गुठी र सहकारीको बचत, ऋण तथा कोष व्यवस्थापनलाई डिजिटल र पारदर्शी बनाउने मोबाइल एप्लिकेशन।
          </p>
        </div>

        {/* Highlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm mb-12">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Interactive Web Demo Available</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              खातापाताको पुरानो झन्झट हटाउनुहोस्, कोषको हिसाब मोबाइलमै राख्नुहोस्।
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              &lsquo;हाम्रो कोष&rsquo; एपको मद्दतले तपाईंले आफ्नो मासिक बचत संकलन, ऋण लगानी, ब्याज हिसाब तथा खर्च विवरणहरू एकै ठाउँबाट व्यवस्थापन गर्न सक्नुहुन्छ। तपाईंको सुविधाका लागि वास्तविक डेटा बिनाको नमुना डेमो (Sample Demo) तल उपलब्ध गराइएको छ।
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Interactive Demo Trigger */}
              <button
                onClick={() => setShowDemo(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition-all scale-100 hover:scale-[1.02]"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>हाम्रो कोष Web Demo चलाउनुहोस् (Sample)</span>
              </button>

              {/* Coming Soon Notice instead of APK download */}
              <div className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>Android APK: <strong className="text-indigo-900">Coming Soon (छिट्टै आउँदैछ)</strong></span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Box */}
          <div className="lg:col-span-5 bg-gradient-to-tr from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-indigo-100 text-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-indigo-100">
              <span className="text-xs font-bold text-indigo-900 uppercase">Hamro Kosh Features</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Demo Ready</span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-indigo-50 shadow-2xs">
                <span className="text-slate-600">बचत संकलन (Monthly Deposit)</span>
                <span className="font-bold text-emerald-600">स्वचालित रेकर्ड</span>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-indigo-50 shadow-2xs">
                <span className="text-slate-600">ऋण ब्याज (Loan & Interest)</span>
                <span className="font-bold text-indigo-600">सटीक क्यालकुलेटर</span>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-indigo-50 shadow-2xs">
                <span className="text-slate-600">डेटा सुरक्षा (Privacy)</span>
                <span className="font-bold text-slate-900">सुरक्षित लोकल ब्याकअप</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 pt-2 text-center">
              सहकारी, टोल सुधार समिति, क्लब तथा बचत समूहहरूका लागि विशेष उपयोगी।
            </p>
          </div>

        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-300 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">{feat.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Demo Modal */}
      <HamroKoshDemo isOpen={showDemo} onClose={() => setShowDemo(false)} />
    </section>
  );
}
