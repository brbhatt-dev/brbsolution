'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Loader2, AlertCircle } from 'lucide-react';

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
    <section id="contact" className="py-16 md:py-24 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-3 border border-emerald-100 dark:border-emerald-800">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>सम्पर्क तथा ठेगाना (Contact & Location)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            कुनै सोधपुछ वा सहकार्यका लागि सम्पर्क गर्नुहोस्
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3">
            ल्याण्ड सोलुसन, हाम्रो कोष एप, वा AutoCAD LSP फाइल्स सम्बन्धी कुनै पनि जिज्ञासाका लागि सिधै इमेल, सोसियल मिडिया वा तलको फर्ममार्फत सम्पर्क गर्न सक्नुहुन्छ।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center border border-emerald-100 dark:border-emerald-800">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">आधिकारिक इमेल</p>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-base font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors break-all"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  title="Copy Email"
                  className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">✓ इमेल क्लिपबोर्डमा कपी भयो!</p>
              )}
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-800 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">स्थान / Location</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">काठमाडौँ, नेपाल (Kathmandu, Nepal)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    नेपालभर अनलाइन सफ्टवेयर सपोर्ट, ल्याण्ड क्यालकुलेसन परामर्श तथा प्राविधिक सहायता उपलब्ध छ।
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
              <div className="px-4 py-2.5 bg-slate-100/70 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300 font-semibold">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  काठमाडौँ, नेपाल (Interactive Map)
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">Kathmandu 44600</span>
              </div>
              <div className="h-56 w-full">
                <iframe
                  title="BR Bhatta Location Map Kathmandu"
                  src="https://maps.google.com/maps?q=Kathmandu,Nepal&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-xs">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">सिधै सन्देश पठाउनुहोस्</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 sm:mb-6">आफ्नो विवरण र आवश्यकता तल फारममा भर्नुहोस्:</p>

              {status === 'success' ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-300 dark:border-emerald-800 shadow-sm animate-pulse">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">सन्देश सफलतापूर्वक पठाइयो!</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      धन्यवाद {formData.name ? <strong>{formData.name} ज्यू</strong> : ''}। तपाईंको सन्देश सिधै हाम्रो आधिकारिक इमेल (<strong className="text-emerald-700 dark:text-emerald-400">{emailAddress}</strong>) मा प्राप्त भएको छ। हामी छिट्टै सम्पर्क गर्नेछौं।
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setFormData({ name: '', contact: '', service: 'Land Solution सम्बन्धी', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                    >
                      अर्को सन्देश पठाउनुहोस्
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 flex items-start gap-2.5 text-xs text-rose-800 dark:text-rose-300">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">सन्देश पठाउन समस्या भयो</p>
                        <p className="mt-0.5">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      तपाईंको पूरा नाम *
                    </label>
                    <input
                      type="text"
                      required
                      disabled={status === 'sending'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="उदा. रमेश अधिकारी"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 min-h-[48px] disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      सम्पर्क मोबाइल / फोन नम्बर *
                    </label>
                    <input
                      type="tel"
                      required
                      inputMode="numeric"
                      disabled={status === 'sending'}
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="उदा. 98XXXXXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 min-h-[48px] disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      कुन विषयमा सहयोग चाहिएको हो?
                    </label>
                    <select
                      disabled={status === 'sending'}
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 min-h-[48px] disabled:opacity-60"
                    >
                      <option value="Land Solution सम्बन्धी">Land Solution (नापजाँच तथा कित्ताकाट एप)</option>
                      <option value="हाम्रो कोष सम्बन्धी">हाम्रो कोष (Hamro Kosh App)</option>
                      <option value="AutoCAD LSP फाइल्स सम्बन्धी">AutoCAD LSP फाइल्स तथा क्याड स्क्रिप्ट</option>
                      <option value="जग्गा नापजाँच वा प्राविधिक परामर्श">जग्गा नापजाँच वा प्राविधिक परामर्श</option>
                      <option value="अन्य सामान्य सोधपुछ">अन्य सामान्य सोधपुछ</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      तपाईंको सन्देश वा जिज्ञासा *
                    </label>
                    <textarea
                      required
                      disabled={status === 'sending'}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="आफ्नो आवश्यकता, प्रश्न वा प्रतिक्रिया यहाँ लेख्नुहोस्..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none disabled:opacity-60"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm shadow-sm transition-all min-h-[48px] cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>सन्देश पठाउँदैछ...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>सन्देश पठाउनुहोस्</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                    तपाईं सिधै <a href={`mailto:${emailAddress}`} className="text-emerald-700 dark:text-emerald-400 font-semibold underline">{emailAddress}</a> मा पनि इमेल गर्न सक्नुहुन्छ।
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
