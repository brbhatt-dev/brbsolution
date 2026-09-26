import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Compass, 
  Wallet, 
  FileCode, 
  Code, 
  MapPin, 
  CheckCircle2, 
  Mail, 
  Facebook, 
  Instagram, 
  Github,
  Award,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'हाम्रो बारेमा (About Us) | BR Bhatta & Land Solution Nepal',
  description: 'About BR Bhatta and Land Solution. Learn about the developer, mission, cadastre automation tools, and technology innovations built for Nepal.',
  alternates: {
    canonical: 'https://www.brbhatta.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Header Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>गृहपृष्ठ (Home) फर्कनुहोस्</span>
          </Link>
          <span className="text-xs font-mono text-slate-500 font-semibold">www.brbhatta.com</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-10">
          
          {/* Creator Profile Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-slate-100">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white border-2 border-emerald-500 p-2 shadow-lg shadow-emerald-500/10 shrink-0 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="BR Bhatta Land Solution" 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-2 text-center sm:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>संस्थापक तथा सफ्टवेयर विकासकर्ता</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                BR Bhatta
              </h1>
              <p className="text-xs sm:text-sm text-emerald-700 font-bold">
                Creator of Land Solution, Hamro Kosh & AutoCAD LSP Automation for Nepal
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-500 pt-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>काठमाडौँ, नेपाल (Kathmandu, Nepal)</span>
              </div>
            </div>
          </div>

          {/* Mission & Story */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">
              हाम्रो उद्देश्य (Our Mission)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              नेपालमा परम्परागत रूपमा गरिने जग्गा नापजाँच, कित्ताकाट, तथा क्षेत्रफल गणनाको प्रक्रिया जटिल, समय लाग्ने र मानवीय त्रुटि हुने खालको छ। नापी सर्भेक्षक, अमिन, इन्जिनियर तथा सामान्य जग्गाधनीहरूलाई आफ्नो जग्गाको यथार्थ विवरण तत्काल दिन सक्ने गरी हामीले <strong>Land Solution</strong> विकास गरेका हौं।
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              हाम्रो लक्ष्य आधुनिक कम्प्युटर विज्ञान, क्लाउड प्रविधि, र AutoLISP अटोमेसनलाई नेपाली माटो र स्थानीय नाप प्रणाली (रोपनी-आना तथा बिघा-कट्ठा) सँग जोडेर कार्यसम्पादनलाई १०० गुणा छिटो र सरल बनाउनु हो।
            </p>
          </section>

          {/* Key Innovations */}
          <section className="space-y-4">
            <h2 className="text-xl font-black text-slate-900">
              हाम्रा मुख्य उत्पादन तथा प्राविधिक सेवाहरू
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              
              {/* Land Solution */}
              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900">Land Solution</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  नेपालको जग्गा नापजाँच, कित्ताकाट, नक्सा कोअर्डिनेट गणना र अफलाइन फिल्ड सर्भेको लागि तयार गरिएको आधुनिक एप।
                </p>
              </div>

              {/* Hamro Kosh */}
              <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                  <Wallet className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900">हाम्रो कोष (Hamro Kosh)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  समूह, समिति, गुठी र व्यक्तिगत मासिक बचत, ऋण लगानी, र ब्याज हिसाब राख्ने पारदर्शी वित्तीय डिजिटल लेजर।
                </p>
              </div>

              {/* AutoCAD LSP */}
              <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-100 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center">
                  <FileCode className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900">AutoCAD LSP Scripts</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  क्याड नक्सामा पोलिलाइनको क्षेत्रफललाई एकै क्लिकमा रोपनी र बिघामा बदलेर टेक्स्ट लेख्ने स्वचालित स्क्रिप्टहरू।
                </p>
              </div>

            </div>
          </section>

          {/* Core Values */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">हाम्रा विशेषताहरू (Why Choose Us)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>१००% नेपाली मापदण्ड र नाप प्रणाली अनुकूल</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>फिल्डमा अफलाइन काम गर्न सकिने भरपर्दो कोड</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>इन्जिनियर तथा अमिनहरूको वास्तविक सल्लाहमा निर्मित</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>निःशुल्क लाइभ वेब डेमो तथा खुला स्रोत साधन</span>
              </div>
            </div>
          </section>

          {/* Social & Contact Box */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-bold text-slate-600">जोडिनुहोस्:</span>
              <a
                href="https://www.facebook.com/aabiral.bhatt/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1877F2] to-[#0A66C2] text-white flex items-center justify-center shadow-xs"
              >
                <Facebook className="w-4 h-4 fill-white" />
              </a>
              <a
                href="https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@br_bhatta?_r=1&_t=ZS-9A2ydU7e8Rd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center shadow-xs border border-slate-800 hover:border-pink-500/50"
                aria-label="TikTok Profile"
                title="TikTok (@br_bhatta)"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a
                href="https://x.com/LandSolutionNpl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gradient-to-tr from-black to-slate-800 text-white flex items-center justify-center shadow-xs border border-slate-700"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.threads.com/@landsolutionnepal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gradient-to-tr from-black to-zinc-800 text-white flex items-center justify-center shadow-xs border border-slate-700"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 192 192">
                  <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2109 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.0328C81.4045 63.6575 90.0153 60.4065 97.222 60.4065C108.618 60.4065 117.818 67.2415 119.827 82.0494C113.883 80.7061 107.566 80.0526 100.973 80.0526C74.6558 80.0526 56.6346 94.3826 56.6346 116.141C56.6346 136.216 71.9547 150.316 93.3644 150.316C109.845 150.316 122.253 141.975 128.539 126.68C133.565 136.657 141.921 142.336 153.864 142.336C168.04 142.336 179.351 133.407 182.261 116.635L166.425 113.863C164.717 123.699 158.647 128.125 152.016 128.125C141.777 128.125 137.073 118.89 137.073 103.072C137.073 99.8735 137.339 96.7909 137.844 93.856C139.117 94.4075 140.354 94.9922 141.537 95.6083C155.074 102.664 163.535 113.208 163.535 126.969H179.197C179.197 108.685 167.348 95.0345 141.537 88.9883ZM122.091 109.308C120.301 123.703 109.734 135.253 94.2796 135.253C80.3955 135.253 71.7486 126.241 71.7486 114.733C71.7486 100.865 83.2104 94.3917 101.442 94.3917C107.575 94.3917 113.242 94.9458 118.324 96.0125C121.218 100.17 122.476 104.708 122.091 109.308Z"/>
                </svg>
              </a>
              <a
                href="https://github.com/brbhatt-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0d1117] to-[#24292f] text-white flex items-center justify-center shadow-xs border border-slate-700"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            <a
              href="mailto:aabiralbhatt@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>aabiralbhatt@gmail.com</span>
            </a>
          </div>

        </div>
      </main>

    </div>
  );
}
