'use client';

import React from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2, Award } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'सुदर्शन श्रेष्ठ',
      role: 'लाइसेन्स प्राप्त अमिन तथा सर्भेक्षक',
      location: 'ललितपुर, नेपाल',
      avatarBg: 'bg-emerald-600',
      initials: 'स.श्रे.',
      quote:
        'Land Solution प्रयोग गर्न थालेपछि फिल्डमै बसेर तुरुन्तै कित्ताकाट र रोपनी-आना-पैसाको हिसाब निकाल्न सकिन्छ। हातले हिसाब गर्दा हुने सम्भावित गल्ती हटेको छ र मेरो दैनिक ३ घण्टा समय जोगिएको छ।',
      rating: 5,
      tag: 'Land Solution User',
    },
    {
      id: 2,
      name: 'कमल अधिकारी',
      role: 'व्यवस्थापक, एकता बचत तथा ऋण समूह',
      location: 'बिर्तामोड, झापा',
      avatarBg: 'bg-indigo-600',
      initials: 'क.अ.',
      quote:
        'हाम्रो कोष सफ्टवेयरले हाम्रो समूहको मासिक बचत संकलन, ऋण लगानी र ब्याज हिसाब खातापाता बिना मोबाइलमै १००% पारदर्शी बनाइदिएको छ। सदस्यहरूलाई तत्काल स्टेटमेन्ट देखाउन एकदमै सजिलो छ।',
      rating: 5,
      tag: 'Hamro Kosh User',
    },
    {
      id: 3,
      name: 'ई. प्रकाश भट्ट',
      role: 'Cadastre & GIS Engineer',
      location: 'धनगढी, कैलाली',
      avatarBg: 'bg-amber-600',
      initials: 'प्र.भ.',
      quote:
        'AutoCAD LSP स्क्रिप्टहरूले क्याड नक्सामा पोलिलाइनको क्षेत्रफल सिधै नेपाली नाप प्रणाली (रोपनी र बिघा) मा टेक्स्ट एनोटेसन गरिदिन्छ। नक्सा बनाउँदा यो जत्तिको छिटो र भरपर्दो टुल अरू पाएको छैन।',
      rating: 5,
      tag: 'AutoCAD LSP User',
    },
    {
      id: 4,
      name: 'रामेश्वर चौधरी',
      role: 'नापी प्राविधिक तथा कन्सल्टेन्ट',
      location: 'विराटनगर, मोरङ',
      avatarBg: 'bg-teal-600',
      initials: 'रा.चौ.',
      quote:
        'तराईको बिघा-कट्ठा-धुर र पहाडी रोपनी-आना दुवै प्रणालीमा तत्काल रूपान्तरण गर्न सकिने सुविधा निकै प्रशंसनीय छ। प्राविधिक सहयोग पनि सदैव समयमै उपलब्ध हुन्छ।',
      rating: 5,
      tag: 'Verified Client',
    },
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-slate-50/70 dark:bg-[#090d16] border-t border-slate-200 dark:border-slate-800 transition-colors notranslate" translate="no">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-xs font-bold mb-2">
            <Award className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>प्रयोगकर्ताहरूको विश्वास (Client Testimonials)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            प्रयोगकर्ता तथा प्राविधिकहरू के भन्छन्?
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            नेपालभरका नापी अमिन, सहकारी व्यवस्थापक तथा इन्जिनियरहरूले अनुभव गरेको विश्वसनीयता।
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-3">
                {/* Top Row: Stars and Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/60">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>{item.tag}</span>
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl ${item.avatarBg} text-white font-black text-xs flex items-center justify-center shrink-0 shadow-2xs`}>
                  {item.initials}
                </div>
                <div className="text-left leading-snug">
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {item.role} • <span className="text-slate-400 dark:text-slate-500">{item.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
