'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Loader2, AlertCircle, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: 'Land Solution सम्बन्धी',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const emailAddress = 'aabiralbhatt@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/aabiralbhatt@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          'नाम (Name)': formData.name,
          'सम्पर्क (Phone/Email)': formData.contact,
          'सेवा वा विषय (Topic)': formData.service,
          'सन्देश (Message)': formData.message,
          '_subject': `BR Bhatta Website Inquiry: ${formData.service} (${formData.name})`,
          '_template': 'table',
          '_captcha': 'false',
        }),
      });

      const resData = await response.json();

      if (response.ok && (resData.success === 'true' || resData.success === true || (resData.message && resData.message.includes('Activation')))) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(resData?.message || 'सन्देश पठाउन सकिएन। कृपया पुनः प्रयास गर्नुहोस् वा सिधै इमेल गर्नुहोस्।');
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage('सर्भरमा जडान हुन सकेन। कृपया सिधै इमेल गर्नुहोस् वा इन्टरनेट जाँच्नुहोस्।');
    }
  };

  return (
    <section id="contact" className="py-8 sm:py-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-200 notranslate" translate="no">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8 space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
            <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>सम्पर्क तथा सोधपुछ (Contact & Support)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            कुनै सोधपुछ वा सहयोगका लागि सम्पर्क गर्नुहोस्
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            ल्याण्ड सोलुसन, हाम्रो कोष एप वा जग्गा नापजाँच सम्बन्धी कुनै पनि जिज्ञासा सिधै पठाउनुहोस्।
          </p>
        </div>

        {/* Compact 2-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          
          {/* Left Column: Direct Info Cards (40% width) */}
          <div className="lg:col-span-5 space-y-3">
            
            {/* Primary Email Card */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">आधिकारिक इमेल</span>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors break-all"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>
              <button
                onClick={copyEmail}
                title="इमेल कपी गर्नुहोस्"
                className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-800">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">स्थान / Location</span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">काठमाडौँ, नेपाल (Kathmandu, Nepal)</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">नेपालभर अनलाइन प्राविधिक सहायता उपलब्ध</p>
              </div>
            </div>

            {/* Support Guarantee Card */}
            <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 flex items-center gap-2.5 text-xs text-emerald-800 dark:text-emerald-300">
              <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>हामी सामान्यतया २४ घण्टाभित्र इमेल तथा सन्देशको जवाफ दिन्छौं।</span>
            </div>

          </div>

          {/* Right Column: Sleek Compact Contact Form (60% width) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-xs">
              
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>सिधै सन्देश पठाउनुहोस्</span>
                </h3>
                <span className="text-[10px] text-slate-400">फारम भरेर पठाउनुहोस्</span>
              </div>

              {status === 'success' ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-11 h-11 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-300 dark:border-emerald-800 animate-pulse">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">सन्देश सफलतापूर्वक पठाइयो!</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-sm mx-auto">
                      धन्यवाद {formData.name ? <strong>{formData.name} ज्यू</strong> : ''}। हामी छिट्टै सम्पर्क गर्नेछौं।
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', contact: '', service: 'Land Solution सम्बन्धी', message: '' });
                    }}
                    className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    अर्को सन्देश पठाउनुहोस्
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {status === 'error' && (
                    <div className="p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 flex items-start gap-2 text-xs text-rose-800 dark:text-rose-300">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  {/* Name and Phone side-by-side in 2 columns (Saves vertical space!) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                        पूरा नाम *
                      </label>
                      <input
                        type="text"
                        required
                        disabled={status === 'sending'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="उदा. रमेश अधिकारी"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                        मोबाइल / फोन नम्बर *
                      </label>
                      <input
                        type="tel"
                        required
                        inputMode="numeric"
                        disabled={status === 'sending'}
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="उदा. 98XXXXXXXX"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                      सहयोग चाहिएको विषय
                    </label>
                    <select
                      disabled={status === 'sending'}
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 disabled:opacity-60"
                    >
                      <option value="Land Solution सम्बन्धी">Land Solution (नापजाँच तथा कित्ताकाट एप)</option>
                      <option value="हाम्रो कोष सम्बन्धी">हाम्रो कोष (Hamro Kosh App)</option>
                      <option value="AutoCAD LSP फाइल्स सम्बन्धी">AutoCAD LSP फाइल्स तथा क्याड स्क्रिप्ट</option>
                      <option value="जग्गा नापजाँच वा प्राविधिक परामर्श">जग्गा नापजाँच वा प्राविधिक परामर्श</option>
                      <option value="अन्य सामान्य सोधपुछ">अन्य सामान्य सोधपुछ</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                      सन्देश वा आवश्यकता *
                    </label>
                    <textarea
                      required
                      disabled={status === 'sending'}
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="आफ्नो आवश्यकता वा प्रतिक्रिया यहाँ लेख्नुहोस्..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none disabled:opacity-60"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs shadow-xs transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>पठाउँदैछ...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>सन्देश पठाउनुहोस्</span>
                      </>
                    )}
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
