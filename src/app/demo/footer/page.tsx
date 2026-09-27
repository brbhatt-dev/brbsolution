import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { 
  ArrowUp, 
  Mail, 
  Facebook, 
  Instagram, 
  Github,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'Footer Redesign Demos | BR Bhatta',
  description: 'Compare 5 compact, modern live footer designs for BR Bhatta portal.',
};

export default function FooterDemoPage() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const SocialIcons = () => (
    <div className="flex items-center gap-1.5 flex-wrap">
      <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center">
        <Facebook className="w-3.5 h-3.5" />
      </div>
      <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center">
        <Instagram className="w-3.5 h-3.5" />
      </div>
      <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center">
        <Github className="w-3.5 h-3.5" />
      </div>
      <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center">
        <Mail className="w-3.5 h-3.5" />
      </div>
      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 text-[11px] font-semibold">
        <span>माथि</span>
        <ArrowUp className="w-3 h-3 text-emerald-400" />
      </div>
    </div>
  );

  const NavLinks = () => (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-400">
      <span className="hover:text-emerald-400">हाम्रो बारेमा</span>
      <span className="text-slate-700">&bull;</span>
      <span className="hover:text-emerald-400">सम्पर्क</span>
      <span className="text-slate-700">&bull;</span>
      <span className="hover:text-emerald-400">गोपनीयता नीति</span>
      <span className="text-slate-700">&bull;</span>
      <span className="hover:text-emerald-400">सर्तहरू</span>
      <span className="text-slate-700">&bull;</span>
      <span className="hover:text-emerald-400">अस्वीकरण</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 notranslate" translate="no">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>५ वटा कम्प्याक्ट लाइभ फुटर विकल्पहरू</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            कुन फुटर सबैभन्दा छरितो र उपयुक्त लाग्छ?
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            तलका ५ वटा डिजाइनहरू हेर्नुहोस्। सबै डिजाइनहरूले कम ठाउँ (Low Height) लिन्छन् र AI सहायकसँग कहिल्यै जुध्दैनन्। होमपेजमा पनि सिधै बटन थिचेर लाइभ टेस्ट गर्न सक्नुहुन्छ।
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
            >
              <span>होमपेजमा लाइभ टेस्ट गर्नुहोस्</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ============================================================== */}
        {/* DEMO 1 */}
        {/* ============================================================== */}
        <section className="space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h2 className="text-sm sm:text-base font-bold text-emerald-400 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs">१</span>
              <span>डेमो १: २-लाइन अल्ट्रा-स्लिक (उचाइ मात्र ६०px - सबैभन्दा कम्प्याक्ट)</span>
            </h2>
            <span className="text-[11px] text-slate-400">सिफारिस गरिएको</span>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#070e17] overflow-hidden">
            <div className="h-0.5 w-full bg-gradient-to-r from-emerald-600 via-teal-400 to-emerald-600" />
            <div className="p-4 sm:p-5 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div className="flex items-center gap-2.5">
                  <img src="/logo.png" alt="BR Bhatta" className="w-6 h-6 object-contain rounded-md bg-white p-0.5" />
                  <span className="font-bold text-white text-sm">BR Bhatta</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-xs text-emerald-400 font-medium">नेपाली माटो, आफ्नै प्रविधि</span>
                  <span className="text-slate-600 hidden md:inline">&bull;</span>
                  <span className="text-xs text-slate-400 hidden md:inline">इन्जिनियर, अमिन र नागरिकका लागि डिजिटल सहयोगी</span>
                </div>
                <SocialIcons />
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-slate-400 text-center sm:text-left">
                <NavLinks />
                <div className="text-[11px] text-slate-400 shrink-0">
                  परिकल्पना तथा निर्माण: <strong className="text-white">BR Bhatta</strong> &bull; &copy; 2026
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* DEMO 2 */}
        {/* ============================================================== */}
        <section className="space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h2 className="text-sm sm:text-base font-bold text-teal-400 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-xs">२</span>
              <span>डेमो २: २-कोलम ब्यालेन्स्ड ग्रिड (आधुनिक दायाँ-बायाँ सन्तुलित शैली)</span>
            </h2>
            <span className="text-[11px] text-slate-400">सन्तुलित</span>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#070e17] overflow-hidden">
            <div className="h-0.5 w-full bg-gradient-to-r from-teal-600 via-emerald-400 to-teal-600" />
            <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
              <div className="space-y-1.5 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <img src="/logo.png" alt="BR Bhatta" className="w-7 h-7 object-contain rounded-md bg-white p-0.5" />
                  <span className="font-bold text-white text-base">BR Bhatta</span>
                  <span className="text-xs text-emerald-400 font-medium px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/60">
                    Land Solution
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                  “नेपाली माटो, आफ्नै प्रविधि — इन्जिनियर, अमिन र आम नागरिकका लागि निःशुल्क डिजिटल सहयोगी।”
                </p>
                <p className="text-[11px] text-slate-500">
                  परिकल्पना तथा निर्माण: <strong className="text-slate-300">BR Bhatta</strong> &bull; &copy; 2026
                </p>
              </div>

              <div className="space-y-3 flex flex-col items-center md:items-end">
                <SocialIcons />
                <NavLinks />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* DEMO 3 */}
        {/* ============================================================== */}
        <section className="space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h2 className="text-sm sm:text-base font-bold text-indigo-400 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs">३</span>
              <span>डेमो ३: कम्प्याक्ट सेन्ट्रल ब्यान्ड (केन्द्रित तर छरितो, उचाइ कम)</span>
            </h2>
            <span className="text-[11px] text-slate-400">केन्द्रित</span>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#070e17] overflow-hidden">
            <div className="h-0.5 w-full bg-gradient-to-r from-indigo-600 via-teal-400 to-indigo-600" />
            <div className="p-5 text-center space-y-3 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 flex-wrap text-xs sm:text-sm">
                <img src="/logo.png" alt="BR Bhatta" className="w-6 h-6 object-contain rounded-md bg-white p-0.5" />
                <span className="font-black text-white">BR Bhatta</span>
                <span className="text-slate-700">&bull;</span>
                <span className="text-emerald-400 font-medium">नेपाली माटो, आफ्नै प्रविधि</span>
                <span className="text-slate-700 hidden sm:inline">&bull;</span>
                <span className="text-slate-400 text-xs hidden sm:inline">डिजिटल सहयोगी</span>
              </div>

              <NavLinks />

              <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
                <div className="text-[11px]">
                  परिकल्पना तथा निर्माण: <strong className="text-white">BR Bhatta</strong> &bull; सर्वाधिकार सुरक्षित 2026
                </div>
                <SocialIcons />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* DEMO 4 */}
        {/* ============================================================== */}
        <section className="space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h2 className="text-sm sm:text-base font-bold text-amber-400 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">४</span>
              <span>डेमो ४: स्प्लिट रिबन (शीर्षमा मसिनो एम्ब्रोल्ड रिबन र तल सफा १ लाइन)</span>
            </h2>
            <span className="text-[11px] text-slate-400">इन्जिनियरिङ</span>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#070e17] overflow-hidden">
            <div className="bg-emerald-950/40 border-b border-emerald-900/40 px-4 py-1.5 text-center text-xs text-emerald-300 font-medium flex items-center justify-center gap-2">
              <span>🇳🇵</span>
              <span>नेपाली माटो, आफ्नै प्रविधि — इन्जिनियर, अमिन र आम नागरिकका लागि निःशुल्क डिजिटल सहयोगी।</span>
            </div>

            <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="BR Bhatta" className="w-6 h-6 object-contain rounded-md bg-white p-0.5" />
                <span className="font-bold text-white text-sm">BR Bhatta</span>
                <span className="text-slate-600">|</span>
                <span className="text-[11px] text-slate-400">
                  परिकल्पना तथा निर्माण: <strong className="text-slate-200">BR Bhatta</strong>
                </span>
              </div>

              <NavLinks />
              <SocialIcons />
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* DEMO 5 */}
        {/* ============================================================== */}
        <section className="space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h2 className="text-sm sm:text-base font-bold text-sky-400 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center text-xs">५</span>
              <span>डेमो ५: फ्लोटिङ आइल्यान्ड कार्ड (उचाइ नखाने, आधुनिक तैरिएको कार्ड)</span>
            </h2>
            <span className="text-[11px] text-slate-400">आधुनिक कार्ड</span>
          </div>

          <div className="rounded-2xl bg-[#0c1424] border border-emerald-800/40 p-4 sm:p-5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center md:text-left">
              <img src="/logo.png" alt="BR Bhatta" className="w-9 h-9 object-contain rounded-xl bg-white p-1 shadow-sm shrink-0" />
              <div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="font-bold text-white text-sm">BR Bhatta</span>
                  <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800/60">
                    नेपाली माटो, आफ्नै प्रविधि
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  परिकल्पना तथा निर्माण: <strong className="text-slate-200">BR Bhatta</strong> &bull; &copy; 2026
                </p>
              </div>
            </div>

            <NavLinks />
            <SocialIcons />
          </div>
        </section>

      </main>
    </div>
  );
}
