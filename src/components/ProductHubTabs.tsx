'use client';

import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Wallet, 
  FileCode, 
  Newspaper, 
  HelpCircle, 
  Play, 
  Clock, 
  CheckCircle2, 
  Copy, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  RefreshCw, 
  Sparkles, 
  X,
  Users,
  TrendingUp,
  FileText,
  ShieldCheck,
  Terminal,
  Layers,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import HamroKoshDemo from './HamroKoshDemo';

export type TabKey = 'land-solution' | 'hamro-kosh' | 'autocad-lsp' | 'articles' | 'faq';

export default function ProductHubTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>('land-solution');
  
  // Land Solution Demo Modal
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [iframeKey, setIframeKey] = useState(1);

  // Hamro Kosh Demo Modal
  const [showHamroKoshDemo, setShowHamroKoshDemo] = useState(false);

  // AutoCAD copy command state
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Handle URL hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as TabKey;
      if (['land-solution', 'hamro-kosh', 'autocad-lsp', 'articles', 'faq'].includes(hash)) {
        setActiveTab(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const switchTab = (tab: TabKey) => {
    setActiveTab(tab);
    window.history.replaceState(null, '', `#${tab}`);
    const hubElement = document.getElementById('product-hub');
    if (hubElement) {
      const yOffset = -80;
      const y = hubElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const copyCommand = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const tabsConfig = [
    { 
      id: 'land-solution' as TabKey, 
      label: 'ल्याण्ड सोलुसन', 
      icon: Compass, 
      badge: 'नापजाँच & डेमो',
      activeGradient: 'from-emerald-600 to-teal-700 text-white shadow-emerald-600/30' 
    },
    { 
      id: 'hamro-kosh' as TabKey, 
      label: 'हाम्रो कोष', 
      icon: Wallet, 
      badge: 'बचत & सिम्युलेटर',
      activeGradient: 'from-indigo-600 to-blue-700 text-white shadow-indigo-600/30' 
    },
    { 
      id: 'autocad-lsp' as TabKey, 
      label: 'AutoCAD LSP', 
      icon: FileCode, 
      badge: 'क्याड स्क्रिप्टहरू',
      activeGradient: 'from-amber-600 to-orange-700 text-white shadow-amber-600/30' 
    },
    { 
      id: 'articles' as TabKey, 
      label: 'लेख तथा टिप्स', 
      icon: Newspaper, 
      badge: 'गाइड & नलेज',
      activeGradient: 'from-cyan-600 to-blue-700 text-white shadow-cyan-600/30' 
    },
    { 
      id: 'faq' as TabKey, 
      label: 'जिज्ञासा (FAQ)', 
      icon: HelpCircle, 
      badge: '६ समाधानहरू',
      activeGradient: 'from-purple-600 to-pink-700 text-white shadow-purple-600/30' 
    },
  ];

  const lspFiles = [
    {
      name: 'area_ropani.lsp',
      title: 'रोपनी-आना-पैसा-दाम एरिया क्यालकुलेटर',
      command: 'AROP',
      desc: 'AutoCAD मा कुनै पनि बन्द पोलिलाइन छान्नासाथ तत्काल रोपनी, आना, पैसा, र दाममा क्षेत्रफल निकाल्ने र ड्रोइङमा टेक्स्ट लेख्ने एलएसपी।',
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

  const faqs = [
    {
      question: 'Land Solution (ल्याण्ड सोलुसन) मोबाइल एप कसरी इन्स्टल गर्ने?',
      answer: 'वेबसाइटको "Download APK" बटनमा क्लिक गरेर एप डाउनलोड गर्नुहोस्। एन्ड्रोइड फोनको Downloads फोल्डरमा गई फाइल खोल्नुहोस् र "Install" गर्नुहोस्। यदि फोनले चेतावनी देखाएमा "Install Anyway" वा "Allow from this source" मा अनुमति दिनुहोस्। यो १००% सुरक्षित र अफलाइन चल्ने एप हो।',
    },
    {
      question: 'AutoCAD मा .lsp (LISP) फाइल्स कसरी लोड र रन गर्ने?',
      answer: '१. AutoCAD खोल्नुहोस् र कमाण्ड लाइनमा APPLOAD टाइप गरी इन्टर थिच्नुहोस्।\n२. डाउनलोड गरिएको .lsp फाइल (उदा. area_ropani.lsp) छानेर "Load" बटन थिच्नुहोस्।\n३. कमाण्ड लाइनमा AREAR (रोपनीका लागि) वा AREAB (बिघाका लागि) टाइप गरी बन्द पोलिलाइन छान्नुहोस्। सिधै क्षेत्रफल विवरण आउनेछ।',
    },
    {
      question: 'ल्याण्ड सोलुसनले पहाडी र तराई दुवै नाप प्रणाली सपोर्ट गर्छ?',
      answer: 'हो, पूर्ण रूपमा गर्छ। यसमा रोपनी-आना-पैसा-दाम (RAPD), बिघा-कठ्ठा-धुर-कन्वा (BKD), वर्ग मिटर (sq.m), र वर्ग फिट (sq.ft) बीच तत्काल रूपान्तरण गर्न सकिन्छ। साथै कित्ताकाट र जग्गाको मूल्य निर्धारण पनि गर्न सकिन्छ।',
    },
    {
      question: 'हाम्रो कोष (Hamro Kosh) एप कसका लागि उपयुक्त छ?',
      answer: 'हाम्रो कोष एप साथीभाइहरूको समूह, बचत समूह, साना क्लब वा व्यक्तिगत दैनिक कोष र आय-व्यय ट्रयाक गर्न बनाइएको हो। यसले हिसाब पारदर्शी राख्न र तत्काल स्टेटमेन्ट हेर्न मद्दत गर्छ।',
    },
    {
      question: 'के मलाई विशेष नापजाँच वा नयाँ फिचर भएको क्याड स्क्रिप्ट बनाउन मिल्छ?',
      answer: 'अवश्य मिल्छ! यदि तपाईंलाई विशेष किसिमको ल्याण्ड सफ्टवेयर, क्याड अटोमेसन वा कित्ताकाट सम्बन्धी कस्टमाइज्ड टुल चाहिएमा aabiralbhatt@gmail.com वा सामाजिक सञ्जालमार्फत सम्पर्क गर्न सक्नुहुन्छ।',
    },
    {
      question: 'वेबसाइटको लाइभ डेमो चलाउन कुनै एप इन्स्टल गर्नुपर्छ?',
      answer: 'पर्दैन। वेबसाइटमा रहेको "Live Web Demo" बटन थिचेर कम्प्युटर वा मोबाइलको कुनै पनि वेब ब्राउजर (Chrome, Safari, Firefox) मा सिधै ल्याण्ड सोलुसनको इन्टरफेस चलाएर परीक्षण गर्न सकिन्छ।',
    },
  ];

  return (
    <section id="product-hub" className="py-8 sm:py-12 bg-slate-50/70 dark:bg-[#0b0f19] border-t border-slate-200/80 dark:border-slate-800 transition-colors notranslate" translate="no">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6">
        
        {/* Hub Anchor Targets for deep linking */}
        <span id="land-solution" className="-top-24 relative block"></span>
        <span id="hamro-kosh" className="-top-24 relative block"></span>
        <span id="autocad-lsp" className="-top-24 relative block"></span>
        <span id="articles" className="-top-24 relative block"></span>
        <span id="faq" className="-top-24 relative block"></span>

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>इन्टरएक्टिभ ट्याब हब (Interactive App Switcher)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            ट्याब छान्नुहोस् र सिधै प्रयोग गर्नुहोस्
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
            तल-तल लामो स्क्रोल गर्न नपर्ने गरी सबै एप तथा टुल्सहरू एउटै बक्सभित्र उपलब्ध गराइएको छ।
          </p>
        </div>

        {/* 1. The Master Tab Bar (Sticky / Clean Floating Pills) */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 border border-slate-200 dark:border-slate-800 shadow-md shadow-slate-200/50 dark:shadow-none mb-6 sm:mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5 sm:gap-2">
            {tabsConfig.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => switchTab(tab.id)}
                  className={`flex items-center justify-center sm:justify-start gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl transition-all text-left min-h-[48px] ${
                    isActive
                      ? `bg-gradient-to-r ${tab.activeGradient} shadow-md scale-[1.02] font-black`
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 dark:bg-slate-800/70 dark:hover:bg-slate-800 dark:text-slate-200 active:scale-98 font-bold'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-white text-slate-700 border border-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs sm:text-sm block truncate leading-tight">
                      {tab.label}
                    </span>
                    <span className={`text-[10px] block truncate hidden sm:block ${
                      isActive ? 'text-white/80' : 'text-slate-400 dark:text-slate-400'
                    }`}>
                      {tab.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. The Single Interactive Content Box */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/60 dark:shadow-none p-4 sm:p-8 lg:p-10 transition-all min-h-[450px]">
          
          {/* TAB 1: LAND SOLUTION */}
          {activeTab === 'land-solution' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Header inside tab */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-1 flex items-center justify-center shadow-xs shrink-0">
                    <img src="/logo.png" alt="Land Solution" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                      Land Solution (ल्याण्ड सोलुसन)
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-400 font-semibold">
                      नेपाल जग्गा नापजाँच, कित्ताकाट तथा नक्सा प्रणाली
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowDemoModal(true)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition-all min-h-[42px]"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>लाइभ Web Demo खोल्नुहोस्</span>
                  </button>
                  <div className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-300 text-xs font-bold min-h-[42px]">
                    <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>APK: Coming Soon</span>
                  </div>
                </div>
              </div>

              {/* Interactive Demo Banner Card */}
              <div className="rounded-2xl bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 text-white p-5 sm:p-8 relative overflow-hidden border border-emerald-900/40">
                <div className="relative z-10 max-w-xl space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-400/30 inline-block">
                    Interactive Web Demo Available
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black leading-tight">
                    ल्याण्ड सोलुसनलाई सिधै ब्राउजरमै चलाएर परीक्षण गर्नुहोस्
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    कुनै एप डाउनलोड नगरीकनै मोबाइल तथा कम्प्युटरको ब्राउजरबाट जग्गा नापजाँच, कित्ताकाट र कन्भर्टरको प्रत्यक्ष अनुभव लिन सक्नुहुन्छ।
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setShowDemoModal(true)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-black text-xs sm:text-sm shadow-lg transition-transform active:scale-95"
                    >
                      <Play className="w-4 h-4 fill-emerald-800" />
                      <span>वेब डेमो चलाउनुहोस् (Click to Launch)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Core Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
                  <h5 className="font-bold text-sm text-slate-900 dark:text-white">कित्ताकाट & रेखांकन</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    जग्गालाई चाहिएको आकार र अनुपातमा कित्ताकाट गर्ने स्वचालित गणना।
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
                  <h5 className="font-bold text-sm text-slate-900 dark:text-white">रोपनी & बिघा रूपान्तरण</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    नेपालको प्रचलित दुवै नाप प्रणाली र वर्ग मिटर बीच तत्काल हिसाब।
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
                  <h5 className="font-bold text-sm text-slate-900 dark:text-white">नक्सा कोअर्डिनेट समन्वय</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    सर्भे नक्सा र GPS कोअर्डिनेटसँग तालमेल मिलाउने आधुनिक सुविधाहरू।
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
                  <h5 className="font-bold text-sm text-slate-900 dark:text-white">१००% अफलाइन प्रयोग</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    इन्टरनेट नहुँदा पनि फिल्डमै बसेर मोबाइलबाट सम्पूर्ण नापजाँच गर्न सकिने।
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: HAMRO KOSH */}
          {activeTab === 'hamro-kosh' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Header inside tab */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                      हाम्रो कोष (Hamro Kosh)
                    </h3>
                    <p className="text-xs sm:text-sm text-indigo-700 dark:text-indigo-400 font-semibold">
                      समूह, समिति, गुठी र व्यक्तिगत बचत तथा कोष व्यवस्थापन
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowHamroKoshDemo(true)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-600/20 transition-all min-h-[42px]"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>लाइभ Demo चलाउनुहोस्</span>
                  </button>
                  <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-300 text-xs font-bold min-h-[42px]">
                    <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>APK: Coming Soon</span>
                  </div>
                </div>
              </div>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-slate-800/60 border border-indigo-100 dark:border-slate-800 shadow-2xs">
                  <Users className="w-5 h-5 text-indigo-600 mb-2" />
                  <h5 className="font-bold text-sm text-slate-900 dark:text-white">समूह बचत व्यवस्थापन</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    सदस्यहरूको नियमित बचत अभिलेख र पारदर्शी खाता।
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-slate-800/60 border border-indigo-100 dark:border-slate-800 shadow-2xs">
                  <TrendingUp className="w-5 h-5 text-indigo-600 mb-2" />
                  <h5 className="font-bold text-sm text-slate-900 dark:text-white">ऋण प्रवाह & ब्याज</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    लगानी गरिएको ऋण र मासिक ब्याजको स्वचालित हिसाब।
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-slate-800/60 border border-indigo-100 dark:border-slate-800 shadow-2xs">
                  <FileText className="w-5 h-5 text-indigo-600 mb-2" />
                  <h5 className="font-bold text-sm text-slate-900 dark:text-white">सदस्य स्टेटमेन्ट</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    प्रत्येक सदस्यको व्यक्तिगत हिसाब र समग्र आय-व्यय रिपोर्ट।
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-slate-800/60 border border-indigo-100 dark:border-slate-800 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 text-indigo-600 mb-2" />
                  <h5 className="font-bold text-sm text-slate-900 dark:text-white">सुरक्षित & सरल</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    नेपाली भाषामा झन्झट बिना मोबाइलबाटै चलाउन सकिने इन्टरफेस।
                  </p>
                </div>
              </div>

              {/* Full Interactive Demo Simulator Banner */}
              <div className="rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900 text-white p-5 sm:p-8 relative overflow-hidden border border-indigo-900/40">
                <div className="relative z-10 max-w-xl space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-400/30 inline-block">
                    Interactive Fund & Loan Simulator
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black leading-tight">
                    हाम्रो कोषको बचत तथा ऋण हिसाब प्रत्यक्ष चलाउनुहोस्
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    मासिक बचत संकलन, ऋण लगानी, ब्याज हिसाब, सदस्य स्टेटमेन्ट र EMI क्यालकुलेटर लाइभ डेमोमै चलाएर परीक्षण गर्न सक्नुहुन्छ।
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setShowHamroKoshDemo(true)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-indigo-900 hover:bg-indigo-50 font-black text-xs sm:text-sm shadow-lg transition-transform active:scale-95"
                    >
                      <Play className="w-4 h-4 fill-indigo-800" />
                      <span>हाम्रो कोष Web Demo खोल्नुहोस्</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: AUTOCAD LSP */}
          {activeTab === 'autocad-lsp' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Header inside tab */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <FileCode className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                      AutoCAD LSP फाइल्स (AutoLISP Scripts)
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-700 dark:text-amber-400 font-semibold">
                      नेपालका नापी सर्भेक्षक, अमिन तथा इन्जिनियरहरूका लागि क्याड अटोमेसन
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-300 text-xs font-bold self-start sm:self-auto">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Direct Download: Coming Soon</span>
                </div>
              </div>

              {/* Scripts List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {lspFiles.map((lsp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-500 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-100/60 dark:bg-amber-950/80 px-2.5 py-1 rounded-lg">
                          .{lsp.name.split('.').pop()}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                          <Terminal className="w-3 h-3 text-slate-400" />
                          <span>कमाण्ड:</span>
                          <span className="font-mono text-slate-800 dark:text-amber-300 bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                            {lsp.command}
                          </span>
                        </div>
                      </div>

                      <h4 className="font-extrabold text-slate-900 dark:text-white text-sm leading-snug">
                        {lsp.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {lsp.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 mt-4 flex items-center justify-between gap-2">
                      <button
                        onClick={() => copyCommand(lsp.command)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700 shadow-2xs"
                      >
                        {copiedCmd === lsp.command ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700 dark:text-emerald-400">कपी भयो!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-500" />
                            <span>कमाण्ड कपी</span>
                          </>
                        )}
                      </button>

                      <span className="text-[11px] font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2 py-1 rounded">
                        छिट्टै आउँदैछ
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Usage Guide */}
              <div className="bg-slate-900 text-white p-5 sm:p-7 rounded-2xl space-y-3">
                <h4 className="font-extrabold text-base flex items-center gap-2 text-amber-400">
                  <Terminal className="w-4 h-4" />
                  <span>AutoCAD मा प्रयोग गर्ने तरिका (3 Quick Steps):</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300 pt-2">
                  <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                    <span className="font-bold text-amber-400 block mb-1">१. APPLOAD खोल्नुहोस्</span>
                    <p>AutoCAD को कमाण्ड लाइनमा <code>APPLOAD</code> लेखेर इन्टर थिच्नुहोस्।</p>
                  </div>
                  <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                    <span className="font-bold text-amber-400 block mb-1">२. स्क्रिप्ट लोड गर्नुहोस्</span>
                    <p>डाउनलोड गरिएको <code>.lsp</code> फाइल छानेर <strong>Load</strong> थिच्नुहोस्।</p>
                  </div>
                  <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                    <span className="font-bold text-amber-400 block mb-1">३. कमाण्ड चलाउनुहोस्</span>
                    <p>कमाण्ड लाइनमा <code>AROP</code> वा <code>ABIG</code> टाइप गरी पोलिलाइन छान्नुहोस्।</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: ARTICLES / KNOWLEDGE BASE */}
          {activeTab === 'articles' && (
            <div className="space-y-6 animate-fadeIn">
              
              <div className="pb-4 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  महत्वपूर्ण लेख तथा जानकारीहरू (Posts & Guides)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                  ल्याण्ड सोलुसन, हाम्रो कोष, र प्राविधिक टुल्स सम्बन्धी उपयोगी जानकारीहरू।
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300">
                      Land Survey
                    </span>
                    <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                      ल्याण्ड सोलुसन: नेपालमा डिजिटल कित्ताकाट र नापजाँचको आधुनिक माध्यम
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      परम्परागत रूपमा गरिने जग्गा नापजाँचमा हुने समय र त्रुटिलाई घटाउन ल्याण्ड सोलुसन कसरी उपयोगी छ?
                    </p>
                  </div>
                  <button
                    onClick={() => switchTab('land-solution')}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300"
                  >
                    <span>डेमो हेर्नुहोस्</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300">
                      Finance App
                    </span>
                    <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                      हाम्रो कोष: व्यक्तिगत तथा समूह बचत-ऋण व्यवस्थापन कसरी गर्ने?
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      परिवार, समूह वा सहकारीको मासिक बचत संकलन, ऋण लगानी, र ब्याज हिसाब खातापाता बिना मोबाइलमै राख्ने तरिका।
                    </p>
                  </div>
                  <button
                    onClick={() => switchTab('hamro-kosh')}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-indigo-700 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                  >
                    <span>सिम्युलेटर खोल्नुहोस्</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300">
                      Technical / CAD
                    </span>
                    <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                      AutoCAD मा जग्गाको रोपनी-आना एरिया छिटो निकाल्ने AutoLISP विधि
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      क्याड नक्सामा पोलिलाइनको एरियालाई एक क्लिकमै रोपनी-आना वा बिघा-कट्ठामा कन्भर्ट गर्ने एलएसपी प्रयोग विधि।
                    </p>
                  </div>
                  <button
                    onClick={() => switchTab('autocad-lsp')}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300"
                  >
                    <span>स्क्रिप्ट हेर्नुहोस्</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* TAB 5: FAQ */}
          {activeTab === 'faq' && (
            <div className="space-y-6 animate-fadeIn">
              
              <div className="pb-4 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  बारम्बार सोधिने प्रश्नोत्तरहरू (FAQ)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                  प्रयोगकर्ताहरूका साझा जिज्ञासा र तिनका समाधान।
                </p>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-800/40 transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors hover:bg-slate-100/70 dark:hover:bg-slate-800/70"
                      >
                        <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white pr-4">
                          {faq.question}
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                          )}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/50 dark:border-slate-800 bg-white dark:bg-slate-900/60 whitespace-pre-line">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Full-Screen Land Solution Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex flex-col">
          {/* Top Modal Navigation Bar */}
          <div className="h-14 sm:h-16 bg-slate-950 text-white px-3 sm:px-6 flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-white p-0.5 shrink-0">
                <img src="/logo.png" alt="Land Solution" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-white block leading-tight">
                  Land Solution (Web Demo)
                </span>
                <span className="text-[10px] text-emerald-400">
                  लाइभ इन्टरएक्टिभ वेब भर्सन
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIframeKey((k) => k + 1)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
                title="Reload Demo"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">रिफ्रेस</span>
              </button>

              <a
                href="/land-solution-demo/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">नयाँ ट्याबमा खोल्नुहोस्</span>
              </a>

              <button
                onClick={() => setShowDemoModal(false)}
                className="w-9 h-9 rounded-lg bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center transition-colors ml-1"
                aria-label="Close Demo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Iframe Viewport */}
          <div className="flex-1 w-full bg-slate-900 relative">
            <iframe
              key={iframeKey}
              src="/land-solution-demo/index.html"
              title="Land Solution Interactive Live Demo"
              className="w-full h-full border-0"
              allow="geolocation; camera"
            />
          </div>
        </div>
      )}

      {/* Interactive Hamro Kosh Demo Modal */}
      <HamroKoshDemo isOpen={showHamroKoshDemo} onClose={() => setShowHamroKoshDemo(false)} />

    </section>
  );
}
