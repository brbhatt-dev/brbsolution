'use client';

import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: 'Land Solution सम्बन्धी',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold">
              <Phone className="w-3.5 h-3.5" />
              <span>सम्पर्क तथा सहयोग</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              कुनै सोधपुछ वा प्राविधिक सहयोग चाहिन्छ?
            </h2>

            <p className="text-slate-600 leading-relaxed text-base">
              ल्याण्ड सोलुसन (Land Solution), हाम्रो कोष एप (Hamro Kosh), वा AutoCAD LSP फाइल्स सम्बन्धी कुनै सल्लाह, सुझाव वा सहयोग चाहिएमा सिधै ह्वाट्सएप वा इमेलमार्फत सम्पर्क गर्नुहोस्।
            </p>

            <div className="space-y-3 pt-2">
              {/* WhatsApp direct card */}
              <a
                href="https://wa.me/9779800000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 hover:bg-emerald-100 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[11px] text-emerald-700 font-bold uppercase tracking-wider">WhatsApp (तुरुन्त रिप्लाई)</p>
                  <p className="text-sm font-bold text-emerald-950">सिधै च्याट गर्न यहाँ क्लिक गर्नुहोस्</p>
                </div>
              </a>

              {/* Email direct card */}
              <a
                href="mailto:contact@brbhatta.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-white text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                  <Mail className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">आधिकारिक इमेल</p>
                  <p className="text-sm font-bold text-slate-900">contact@brbhatta.com</p>
                </div>
              </a>

              {/* Location card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-11 h-11 rounded-xl bg-white text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">ठेगाना</p>
                  <p className="text-sm font-bold text-slate-900">काठमाडौँ, नेपाल (अनलाइन तथा फिल्ड परामर्श)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Simple Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-1">सन्देश पठाउनुहोस्</h3>
              <p className="text-xs text-slate-500 mb-6">आफ्नो विवरण र जिज्ञासा तल लेखेर पठाउनुहोस्:</p>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">धन्यवाद!</h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    तपाईंको सन्देश प्राप्त भएको छ। हामी चाँडै सम्पर्क गर्नेछौँ।
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl bg-slate-200 text-slate-800 text-xs font-semibold hover:bg-slate-300"
                  >
                    अर्को सन्देश पठाउनुहोस्
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      तपाईंको नाम
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="उदा. रमेश भट्ट"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      सम्पर्क नम्बर वा इमेल
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="उदा. 98XXXXXXXX वा name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      कुन विषयमा सहयोग चाहिएको हो?
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                    >
                      <option value="Land Solution सम्बन्धी">Land Solution (नापजाँच तथा कित्ताकाट)</option>
                      <option value="हाम्रो कोष सम्बन्धी">हाम्रो कोष (Hamro Kosh App)</option>
                      <option value="AutoCAD LSP फाइल्स सम्बन्धी">AutoCAD LSP फाइल्स तथा क्याड सहयोग</option>
                      <option value="अन्य प्राविधिक सोधपुछ">अन्य सामान्य सोधपुछ</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      तपाईंको सन्देश वा विवरण
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="आफ्नो आवश्यकता वा प्रश्न यहाँ लेख्नुहोस्..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>सन्देश पठाउनुहोस्</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
