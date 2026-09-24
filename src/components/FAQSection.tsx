'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Download, Code, Smartphone, HelpCircle as QuestionIcon } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'Land Solution' | 'AutoCAD LSP' | 'General';
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Land Solution (ल्याण्ड सोलुसन) मोबाइल एप कसरी इन्स्टल गर्ने?',
      answer: 'वेबसाइटको "Download APK" बटनमा क्लिक गरेर एप डाउनलोड गर्नुहोस्। एन्ड्रोइड फोनको Downloads फोल्डरमा गई फाइल खोल्नुहोस् र "Install" गर्नुहोस्। यदि फोनले चेतावनी देखाएमा "Install Anyway" वा "Allow from this source" मा अनुमति दिनुहोस्। यो १००% सुरक्षित र अफलाइन चल्ने एप हो।',
      category: 'Land Solution',
    },
    {
      question: 'AutoCAD मा .lsp (LISP) फाइल्स कसरी लोड र रन गर्ने?',
      answer: '१. AutoCAD खोल्नुहोस् र कमाण्ड लाइनमा APPLOAD टाइप गरी इन्टर थिच्नुहोस्।\n२. डाउनलोड गरिएको .lsp फाइल (उदा. area_ropani.lsp) छानेर "Load" बटन थिच्नुहोस्।\n३. कमाण्ड लाइनमा AREAR (रोपनी प्रणालीका लागि) वा AREAB (बिघा प्रणालीका लागि) टाइप गरी बन्द पोलिलाइन (Closed Polyline) छान्नुहोस्। सिधै नेपाली क्षेत्रफल र विवरण आउनेछ।',
      category: 'AutoCAD LSP',
    },
    {
      question: 'ल्याण्ड सोलुसनले पहाडी र तराई दुवै नाप प्रणाली सपोर्ट गर्छ?',
      answer: 'हो, पूर्ण रूपमा गर्छ। यसमा रोपनी-आना-पैसा-दाम (RAPD), बिघा-कठ्ठा-धुर-कन्वा (BKD), वर्ग मिटर (sq.m), र वर्ग फिट (sq.ft) बीच तत्काल रूपान्तरण गर्न सकिन्छ। साथै कित्ताकाट (Land Partitioning) र जग्गाको मूल्य निर्धारण पनि गर्न सकिन्छ।',
      category: 'Land Solution',
    },
    {
      question: 'हाम्रो कोष (Hamro Kosh) एप कसका लागि उपयुक्त छ?',
      answer: 'हाम्रो कोष एप साथीभाइहरूको समूह, बचत समूह, साना क्लब वा व्यक्तिगत दैनिक कोष र आय-व्यय ट्रयाक गर्न बनाइएको हो। यसले हिसाब पारदर्शी राख्न र तत्काल स्टेटमेन्ट हेर्न मद्दत गर्छ।',
      category: 'General',
    },
    {
      question: 'के मलाई विशेष नापजाँच वा नयाँ फिचर भएको क्याड स्क्रिप्ट बनाउन मिल्छ?',
      answer: 'अवश्य मिल्छ! यदि तपाईंलाई विशेष किसिमको ल्याण्ड सफ्टवेयर, क्याड अटोमेसन वा कित्ताकाट सम्बन्धी कस्टमाइज्ड टुल चाहिएमा aabiralbhatt@gmail.com वा सामाजिक सञ्जालमार्फत सम्पर्क गर्न सक्नुहुन्छ।',
      category: 'General',
    },
    {
      question: 'वेबसाइटको लाइभ डेमो चलाउन कुनै एप इन्स्टल गर्नुपर्छ?',
      answer: 'पर्दैन। वेबसाइटमा रहेको "Live Demo" बटन थिचेर कम्प्युटर वा मोबाइलको कुनै पनि वेब ब्राउजर (Chrome, Safari, Firefox) मा सिधै ल्याण्ड सोलुसनको इन्टरफेस चलाएर परीक्षण गर्न सकिन्छ।',
      category: 'Land Solution',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-semibold mb-3 border border-blue-100">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>जिज्ञासा तथा समाधान (FAQ)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            बारम्बार सोधिने प्रश्नहरू
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            ल्याण्ड सोलुसन एप, AutoCAD LSP स्क्रिप्ट्स तथा अन्य सेवाहरूबारे धेरैले सोध्ने प्रश्नहरूको सहज उत्तर:
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-emerald-300 bg-emerald-50/20 shadow-sm' : 'border-slate-200 bg-slate-50/50 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                      isOpen ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      Q{index + 1}
                    </div>
                    <span className="text-base font-bold text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-slate-500 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-600" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-700 text-sm leading-relaxed border-t border-emerald-100/60 pl-16">
                    <p className="whitespace-pre-line">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">तपाईंसँग अन्य कुनै जिज्ञासा छ?</h4>
            <p className="text-xs text-slate-300 mt-0.5">हामी तपाईंलाई सहयोग गर्न तयार छौँ। सिधै सम्पर्क गर्नुहोस्।</p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-all shrink-0"
          >
            सम्पर्क फारममा जानुहोस्
          </a>
        </div>

      </div>
    </section>
  );
}
