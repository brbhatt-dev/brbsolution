'use client';

import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, Facebook, Instagram, Github, Copy, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: 'Land Solution सम्बन्धी',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = 'aabiralbhatt@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Open default mail client with prefilled details
    const subject = encodeURIComponent(`Inquiry: ${formData.service} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nContact: ${formData.contact}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-100 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-100">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>सम्पर्क तथा ठेगाना (Contact & Location)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            कुनै सोधपुछ वा सहकार्यका लागि सम्पर्क गर्नुहोस्
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            ल्याण्ड सोलुसन, हाम्रो कोष एप, वा AutoCAD LSP फाइल्स सम्बन्धी कुनै पनि जिज्ञासाका लागि सिधै इमेल, सोसियल मिडिया वा तलको फर्ममार्फत सम्पर्क गर्न सक्नुहुन्छ।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">आधिकारिक इमेल</p>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-base font-bold text-slate-900 hover:text-emerald-600 transition-colors break-all"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  title="Copy Email"
                  className="p-2 rounded-lg text-slate-500 hover:text-emerald-700 hover:bg-slate-100 transition-colors"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-xs text-emerald-600 font-medium">✓ इमेल क्लिपबोर्डमा कपी भयो!</p>
              )}
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">स्थान / Location</p>
                  <p className="text-sm font-bold text-slate-900">काठमाडौँ, नेपाल (Kathmandu, Nepal)</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    नेपालभर अनलाइन सफ्टवेयर सपोर्ट, ल्याण्ड क्यालकुलेसन परामर्श तथा प्राविधिक सहायता उपलब्ध छ।
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Connect Links */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                सामाजिक सञ्जालमा जोडिनुहोस् (Social Profiles)
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/aabiral.bhatt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-gradient-to-r from-[#1877F2] to-[#0A66C2] text-white shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs font-bold border border-blue-400/30"
                >
                  <Facebook className="w-4 h-4 fill-white shrink-0" />
                  <span>Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/80 ml-auto" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-md shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs font-bold border border-pink-400/30"
                >
                  <Instagram className="w-4 h-4 shrink-0" />
                  <span>Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/80 ml-auto" />
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com/LandSolutionNpl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-gradient-to-r from-black via-slate-900 to-slate-800 text-white shadow-md shadow-slate-950/25 hover:shadow-slate-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs font-bold border border-slate-700"
                >
                  <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>Twitter (X)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/80 ml-auto" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/brbhatt-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-gradient-to-r from-[#0d1117] via-[#161b22] to-[#24292f] text-white shadow-md shadow-slate-900/30 hover:shadow-slate-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs font-bold border border-slate-700"
                >
                  <Github className="w-4 h-4 shrink-0" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/80 ml-auto" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <div className="px-4 py-2.5 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between text-xs text-slate-700 font-semibold">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  काठमाडौँ, नेपाल (Interactive Map)
                </span>
                <span className="text-[10px] text-slate-500 font-normal">Kathmandu 44600</span>
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
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8 shadow-xs">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">सिधै सन्देश पठाउनुहोस्</h3>
              <p className="text-xs text-slate-500 mb-5 sm:mb-6">आफ्नो विवरण र आवश्यकता तल फारममा भर्नुहोस्:</p>

              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900">धन्यवाद!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    तपाईंको सन्देश तयार भयो र इमेल क्लाइन्ट खुल्यो। हामी चाँडै सम्पर्क गर्नेछौँ।
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-4 py-2 rounded-xl bg-slate-200 text-slate-800 text-xs font-semibold hover:bg-slate-300 min-h-[40px]"
                  >
                    अर्को सन्देश पठाउनुहोस्
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      तपाईंको पूरा नाम *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="उदा. रमेश अधिकारी"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      सम्पर्क नम्बर वा इमेल *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="उदा. 98XXXXXXXX वा yourname@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      कुन विषयमा सहयोग चाहिएको हो?
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 min-h-[48px]"
                    >
                      <option value="Land Solution सम्बन्धी">Land Solution (नापजाँच तथा कित्ताकाट एप)</option>
                      <option value="हाम्रो कोष सम्बन्धी">हाम्रो कोष (Hamro Kosh App)</option>
                      <option value="AutoCAD LSP फाइल्स सम्बन्धी">AutoCAD LSP फाइल्स तथा क्याड स्क्रिप्ट</option>
                      <option value="जग्गा नापजाँच वा प्राविधिक परामर्श">जग्गा नापजाँच वा प्राविधिक परामर्श</option>
                      <option value="अन्य सामान्य सोधपुछ">अन्य सामान्य सोधपुछ</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      तपाईंको सन्देश वा जिज्ञासा *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="आफ्नो आवश्यकता, प्रश्न वा प्रतिक्रिया यहाँ लेख्नुहोस्..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm shadow-sm transition-all min-h-[48px]"
                  >
                    <Send className="w-4 h-4" />
                    <span>इमेलमार्फत सन्देश पठाउनुहोस्</span>
                  </button>

                  <p className="text-center text-[11px] text-slate-500 pt-1">
                    तपाईं सिधै <a href={`mailto:${emailAddress}`} className="text-emerald-700 font-semibold underline">{emailAddress}</a> मा पनि इमेल गर्न सक्नुहुन्छ।
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
