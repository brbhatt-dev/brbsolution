'use client';

import React, { useState } from 'react';
import { Newspaper, BookOpen, Clock, ArrowRight, X, CheckCircle2, ChevronRight, Share2, HelpCircle } from 'lucide-react';

interface Article {
  id: number;
  tag: string;
  category: string;
  readTime: string;
  title: string;
  summary: string;
  content: string[];
  keyPoints?: string[];
}

export default function KnowledgeBaseSection() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 1,
      tag: 'नापजाँच सूत्र',
      category: 'Land Measurement',
      readTime: '४ मिनेट',
      title: 'नेपालमा जग्गा नापजाँचका दुई प्रणाली (पहाडी र तराई) को पूर्ण हिसाब र सूत्रहरू',
      summary:
        'रोपनी-आना-पैसा-दाम र बिघा-कट्ठा-धुर प्रणालीबीच कसरी रूपान्तरण गर्ने? वर्गफिट र वर्गमिटरको आधिकारिक नाप विवरण।',
      content: [
        'नेपालमा भौगोलिक विविधता अनुसार मुख्य दुई किसिमका जग्गा नाप प्रणाली प्रचलनमा छन्: पहाडी क्षेत्रमा रोपनी प्रणाली र तराई क्षेत्रमा बिघा प्रणाली।',
        '१. पहाडी प्रणाली (R-A-P-D):\n- १ रोपनी = १६ आना (५,४७६ वर्गफिट वा ५०८.७२ वर्गमिटर)\n- १ आना = ४ पैसा (३४२.२५ वर्गफिट)\n- १ पैसा = ४ दाम (८५.५६२५ वर्गफिट)\n- १ दाम = २१.३९०६२५ वर्गफिट',
        '२. तराई प्रणाली (B-K-D):\n- १ बिघा = २० कट्ठा (७२,९०० वर्गफिट वा ६,७७२.४१ वर्गमिटर)\n- १ कट्ठा = २० धुर (३,६४५ वर्गफिट वा ३३८.६२ वर्गमिटर)\n- १ धुर = १६ कन्वा (१८२.२५ वर्गफिट वा १६.९३ वर्गमिटर)',
        '३. तुलनात्मक रूपान्तरण:\n- १ बिघा = १३.३१ रोपनी (अर्थात् १३ रोपनी ५ आना)\n- १ कट्ठा = १०.६५ आना (अर्थात् १० आना २ पैसा २ दाम)\n- १ रोपनी = १.५ कट्ठा (अर्थात् १ कट्ठा १० धुर)',
      ],
      keyPoints: [
        'काठमाडौँ उपत्यका तथा पहाडी जिल्लामा आना र रोपनीको आधारमा जग्गाको मूल्य तय हुन्छ।',
        'तराईका जिल्लाहरूमा धुर र कट्ठाको आधारमा रजिष्ट्रेसन तथा मूल्याङ्कन गरिन्छ।',
        'Land Solution सफ्टवेयरले दुवै प्रणालीमा एकैपटक स्वतः रूपान्तरण गरिदिन्छ।',
      ],
    },
    {
      id: 2,
      tag: 'कित्ताकाट मापदण्ड',
      category: 'Legal & Cadastre',
      readTime: '५ मिनेट',
      title: 'जग्गा कित्ताकाट गर्दा ध्यान दिनुपर्ने कानुनी तथा प्राविधिक मापदण्डहरू',
      summary:
        'कित्ताकाट सम्बन्धी भू-उपयोग ऐन, बाटोको न्यूनतम चौडाइ, न्यूनतम क्षेत्रफल र नापी नक्सा समन्वयका नियमहरू।',
      content: [
        'नेपाल सरकारको भू-उपयोग नियमावली अनुसार जग्गालाई आवासीय, कृषि, व्यावसायिक, औद्योगिक लगायतका विभिन्न क्षेत्रमा वर्गीकरण गरिएको छ। वर्गीकरण अनुसार कित्ताकाटका न्यूनतम मापदण्डहरू फरक छन्।',
        '१. आवासीय क्षेत्र (Residential Area):\n- आवासीय क्षेत्रमा सामान्यतया न्यूनतम ८ आना वा तोकिएको न्यूनतम क्षेत्रफलभन्दा सानो कित्ताकाट गर्न बन्देज गरिएको हुन्छ। तर स्थानीय तहको भू-उपयोग योजना अनुसार यो केही परिमार्जित हुन सक्छ।\n- घडेरी कित्ताकाट गर्दा कम्तीमा १३ फिट (४ मिटर) देखि २० फिटसम्मको बाटो निकास अनिवार्य हुनुपर्छ।',
        '२. कृषि क्षेत्र (Agricultural Area):\n- कृषि योग्य भूमिको खण्डीकरण रोक्न काठमाडौँ उपत्यकामा १ रोपनी र तराईमा निश्चित कट्ठाभन्दा सानो कित्ताकाट गर्न रोक लगाइएको छ।',
        '३. प्राविधिक समन्वय:\n- कित्ताकाट गर्नुपूर्व नापी शाखाको फिल्ड बुक र नक्सामा कित्ताको यकिन सिमाना, मोहोडा (Frontage), र गहिराइ (Depth) जाँच्नु अनिवार्य हुन्छ।',
      ],
      keyPoints: [
        'कित्ताकाट अघि सम्बन्धित वडा कार्यालयबाट सिफारिस र बाटो प्रमाणित गर्नुपर्छ।',
        'फिल्डमा जग्गा नाप्दा GPS कोअर्डिनेट र नक्साको ट्रेसलाई पूर्ण रूपमा मिलाउनुपर्छ।',
      ],
    },
    {
      id: 3,
      tag: 'AutoCAD LISP',
      category: 'Technical Automation',
      readTime: '३ मिनेट',
      title: 'AutoCAD मा .lsp (AutoLISP) स्क्रिप्ट प्रयोग गरी नक्सा ड्रोइङ बनाउने सजिलो तरिका',
      summary:
        'क्याड नक्सामा पोलिलाइनको क्षेत्रफललाई तत्काल नेपाली नापमा लेख्ने र कोअर्डिनेट एक्सपोर्ट गर्ने विधि।',
      content: [
        'AutoCAD मा नक्सा ड्रोइङ गर्दा कित्ताहरूको क्षेत्रफल हातले क्यालकुलेटर थिचेर रोपनी-आना निकाल्नु निकै झन्झटिलो र समय लाग्ने काम हो। AutoLISP (.lsp) स्क्रिप्टले यो सम्पूर्ण प्रक्रियालाई एक सेकेन्डमै सम्पन्न गर्छ।',
        '१. स्क्रिप्ट लोड गर्ने विधि:\n- AutoCAD को कमाण्ड लाइनमा APPLOAD टाइप गरी इन्टर थिच्नुहोस्।\n- डाउनलोड गरिएको area_ropani.lsp वा area_bigha.lsp फाइल छानी "Load" गर्नुहोस्।',
        '२. स्वचालित क्षेत्रफल एनोटेसन:\n- कमाण्ड लाइनमा AROP वा ABIG कमाण्ड हान्नुहोस्।\n- कित्ताको बन्द पोलिलाइन (Closed Polyline) मा क्लिक गर्नुहोस्।\n- कित्ताको बीचमा सिधै रोपनी, आना, पैसा र दाम (वा बिघा, कट्ठा, धुर) टेक्स्ट लेखिन्छ।',
        '३. कोअर्डिनेट एक्सपोर्ट:\n- कित्ताका कुनाका पोइन्टहरूलाई EXPCOORD कमाण्डमार्फत सिधै एक्सेल/CSV मा एक्सपोर्ट गर्न सकिन्छ।',
      ],
      keyPoints: [
        'AutoLISP स्क्रिप्टले इन्जिनियर र अमिनहरूको दैनिक कामलाई ५ गुणा छिटो बनाउँछ।',
        'फाइल डाउनलोड गर्न हाम्रो वेबसाइटको "AutoCAD LSP" ट्याबमा जानुहोस्।',
      ],
    },
    {
      id: 4,
      tag: 'सहकारी प्रविधि',
      category: 'Financial Management',
      readTime: '४ मिनेट',
      title: 'समूह तथा सहकारीमा बचत र ऋण व्यवस्थापनलाई कसरी डिजिटल बनाउने?',
      summary:
        'कागजी खातापाताको झन्झट हटाएर दैनिक संकलन, ऋण लगानी र ब्याज हिसाब पारदर्शी राख्ने आधुनिक उपाय।',
      content: [
        'नेपालमा साना बचत समूह, टोल विकास संस्था, क्लब र सहकारीहरूमा अझै पनि हस्तलिखित रजिष्टर र खातापातामा हिसाब राख्ने चलन छ। यसले गर्दा हिसाब गोलमाल हुने, ब्याज गणनामा त्रुटि आउने र सदस्यहरूमा अविश्वास पैदा हुने जोखिम रहन्छ।',
        '१. डिजिटल बचत-ऋण व्यवस्थापनका फाइदा:\n- सदस्यपिच्छेको दैनिक वा मासिक बचत तुरुन्तै कम्प्युटर वा मोबाइलमा दर्ता।\n- ऋण लगानी गर्दा मासिक किस्ता (EMI), घट्दो ब्याजदर (Diminishing Rate) वा सपाट ब्याज (Flat Rate) स्वतः हिसाब हुने।\n- एक क्लिकमा आय-व्यय, नाफा-नोक्सान र सदस्यको व्यक्तिगत लेजर स्टेटमेन्ट प्रिन्ट गर्न सकिने।',
        '२. हाम्रो कोष (Hamro Kosh) को भूमिका:\n- हाम्रो कोष एप विशेष गरी साना र मझौला समूहहरूलाई लक्षित गरी बिना इन्टरनेट पनि चलाउन मिल्ने गरी तयार गरिएको छ।\n- यसले हरेक महिनाको हिसाबलाई १ मिनेटमै मिलाएर सदस्यहरूलाई स्पष्ट विवरण दिन सहयोग गर्छ।',
      ],
      keyPoints: [
        'पारदर्शिता नै समूह र सहकारीको सफलताको मुख्य आधार हो।',
        'हाम्रो कोषको प्रत्यक्ष वेब डेमो चलाएर यसको कार्यशैली हेर्न सकिन्छ।',
      ],
    },
  ];

  return (
    <section id="guides" className="py-12 sm:py-16 bg-white dark:bg-[#070b14] border-t border-slate-200 dark:border-slate-800 transition-colors notranslate" translate="no">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 text-xs font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>जानकारीमूलक लेख तथा टिप्स (Knowledge Base)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            जग्गा, नापजाँच तथा प्राविधिक गाइडहरू
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            नेपालको जग्गा प्रशासन, कित्ताकाट नियम, क्याड अटोमेसन र वित्तीय व्यवस्थापन सम्बन्धी उपयोगी आलेखहरू।
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {articles.map((item) => (
            <article
              key={item.id}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 dark:hover:border-cyan-500/60 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-cyan-800 dark:text-cyan-300 bg-cyan-100/80 dark:bg-cyan-950/60 px-2.5 py-1 rounded-lg">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {item.category}
                </span>

                <button
                  onClick={() => setSelectedArticle(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 active:scale-95 transition-all"
                >
                  <span>पूरा लेख पढ्नुहोस्</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* ARTICLE READER MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm z-10">
              <div>
                <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-100/80 dark:bg-cyan-950/80 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                  {selectedArticle.tag} • {selectedArticle.readTime}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-snug">
                  {selectedArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {selectedArticle.content.map((paragraph, idx) => (
                <div key={idx} className="whitespace-pre-line bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  {paragraph}
                </div>
              ))}

              {selectedArticle.keyPoints && (
                <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 mt-4">
                  <h5 className="font-bold text-emerald-900 dark:text-emerald-300 text-xs sm:text-sm mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>मुख्य बुँदाहरू (Key Takeaways):</span>
                  </h5>
                  <ul className="space-y-1.5 list-disc list-inside text-xs text-emerald-950 dark:text-emerald-200">
                    {selectedArticle.keyPoints.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">
                Land Solution Knowledge Hub
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs"
              >
                बन्द गर्नुहोस्
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
