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
