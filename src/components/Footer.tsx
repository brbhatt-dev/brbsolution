'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Mail, Facebook, Instagram, Github, MapPin, Heart, Globe, ChevronRight, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800/80 overflow-hidden notranslate" translate="no">
      {/* Top Colorful Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-400 via-indigo-500 to-rose-500"></div>

      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-6 sm:pb-8 relative z-10">
        
        {/* Main 4-Column Balanced & Organized Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-8 sm:pb-10 border-b border-slate-800/80 items-start">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-3.5 text-center sm:text-left">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center shadow-sm shrink-0 border border-slate-700 group-hover:border-emerald-500 transition-colors">
                <img
                  src="/logo.png"
                  alt="BR Bhatta Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div className="text-left">
                <span className="text-base font-black tracking-tight text-white block leading-tight group-hover:text-emerald-400 transition-colors">
                  BR Bhatta
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span>Nepal Land Tech & Surveying</span>
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto sm:mx-0">
              नेपालको नापी, नक्सा, जग्गा व्यवस्थापन, कित्ताकाट तथा डिजिटल इन्जिनियरिङको आधिकारिक पोर्टल।
            </p>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 shadow-2xs">
              <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>काठमाडौँ, नेपाल (Kathmandu, Nepal)</span>
            </div>

            {/* Social Media Icons Row */}
            <div className="flex items-center justify-center sm:justify-start gap-2 pt-1 flex-wrap">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/aabiral.bhatt/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#1877F2] to-[#0A66C2] text-white flex items-center justify-center shadow-xs hover:scale-105 active:scale-95 transition-all border border-blue-400/30 shrink-0"
                aria-label="Facebook Profile"
                title="Facebook"
              >
                <Facebook className="w-3.5 h-3.5 fill-white shrink-0" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-xs hover:scale-105 active:scale-95 transition-all border border-pink-400/30 shrink-0"
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5 text-white shrink-0" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@br_bhatta?_r=1&_t=ZS-9A2ydU7e8Rd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shadow-xs hover:scale-105 active:scale-95 transition-all border border-slate-800 hover:border-pink-500/50 shrink-0"
                aria-label="TikTok Profile"
                title="TikTok (@br_bhatta)"
              >
                <svg className="w-3.5 h-3.5 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/LandSolutionNpl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-black via-slate-900 to-slate-800 text-white flex items-center justify-center shadow-xs hover:scale-105 active:scale-95 transition-all border border-slate-700 shrink-0"
                aria-label="X (Twitter) Profile"
                title="X (Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Threads */}
              <a
                href="https://www.threads.com/@landsolutionnepal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-black via-slate-900 to-zinc-800 text-white flex items-center justify-center shadow-xs hover:scale-105 active:scale-95 transition-all border border-slate-700 shrink-0"
                aria-label="Threads Profile"
                title="Threads"
              >
                <svg className="w-3.5 h-3.5 fill-white shrink-0" viewBox="0 0 192 192">
                  <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2109 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.0328C81.4045 63.6575 90.0153 60.4065 97.222 60.4065C108.618 60.4065 117.818 67.2415 119.827 82.0494C113.883 80.7061 107.566 80.0526 100.973 80.0526C74.6558 80.0526 56.6346 94.3826 56.6346 116.141C56.6346 136.216 71.9547 150.316 93.3644 150.316C109.845 150.316 122.253 141.975 128.539 126.68C133.565 136.657 141.921 142.336 153.864 142.336C168.04 142.336 179.351 133.407 182.261 116.635L166.425 113.863C164.717 123.699 158.647 128.125 152.016 128.125C141.777 128.125 137.073 118.89 137.073 103.072C137.073 99.8735 137.339 96.7909 137.844 93.856C139.117 94.4075 140.354 94.9922 141.537 95.6083C155.074 102.664 163.535 113.208 163.535 126.969H179.197C179.197 108.685 167.348 95.0345 141.537 88.9883ZM122.091 109.308C120.301 123.703 109.734 135.253 94.2796 135.253C80.3955 135.253 71.7486 126.241 71.7486 114.733C71.7486 100.865 83.2104 94.3917 101.442 94.3917C107.575 94.3917 113.242 94.9458 118.324 96.0125C121.218 100.17 122.476 104.708 122.091 109.308Z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/brbhatt-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0d1117] via-[#161b22] to-[#24292f] text-white flex items-center justify-center shadow-xs hover:scale-105 active:scale-95 transition-all border border-slate-700 shrink-0"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>

          {/* Column 2: Digital Tools */}
          <div className="space-y-3 text-center sm:text-left">
            <p className="text-xs font-bold text-white uppercase tracking-wider flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>डिजिटल उपकरणहरू</span>
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link 
                  href="/tools/land-calculator" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>जग्गा क्यालकुलेटर (स्लिप प्रिन्ट)</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools/malpot-calculator" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-300 hover:text-amber-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>मालपोत तथा लाभकर क्यालकुलेटर</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools/kitta-kat-checker" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-300 hover:text-indigo-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-indigo-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>कित्ताकाट योग्यता परीक्षक (Kitta-Kat)</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools/multi-kitta-calculator" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>बहु-कित्ता क्षेत्रफल योग क्यालकुलेटर</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools/kitta-qr" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>कित्ता स्मार्ट QR कोड जेनेरेटर</span>
                </Link>
              </li>
              <li className="pt-1">
                <Link 
                  href="/tools" 
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>सबै उपकरणहरू हेर्नुहोस्</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Knowledge Hub */}
          <div className="space-y-3 text-center sm:text-left">
            <p className="text-xs font-bold text-white uppercase tracking-wider flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              <span>स्रोत तथा अध्ययन</span>
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link 
                  href="/tools/survey-offices" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>७७ जिल्ला नापी र मालपोत निर्देशिका</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools/autocad-scripts" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-300 hover:text-amber-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>AutoCAD LSP Scripts हब (.lsp)</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools/aamin-syllabus" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-300 hover:text-teal-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-teal-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>लोकसेवा नापी अमिन पाठ्यक्रम र प्रश्न</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools/aamin-quiz" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-300 hover:text-teal-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-teal-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>लोकसेवा नापी अमिन अनलाइन क्विज</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/laws" 
                  className="group flex items-center justify-center sm:justify-start gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>मौजूदा नापी तथा भूमि कानुन संग्रह</span>
                </Link>
              </li>
              <li className="pt-1">
                <Link 
                  href="/articles" 
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span>प्राविधिक गाइड तथा लेखहरू</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="space-y-3 text-center sm:text-left">
            <p className="text-xs font-bold text-white uppercase tracking-wider flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>सम्पर्क तथा सहयोग</span>
            </p>
            
            <div className="space-y-2">
              {/* Email Card */}
              <a
                href="mailto:aabiralbhatt@gmail.com"
                className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 rounded-lg bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 text-xs text-slate-200 hover:text-emerald-300 transition-all group"
              >
                <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate font-mono text-[11px]">aabiralbhatt@gmail.com</span>
              </a>

              {/* Status Indicator */}
              <div className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="truncate text-[11px]">अनलाइन प्राविधिक सहायता उपलब्ध</span>
              </div>

              {/* Domain Card */}
              <div className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
                <Globe className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="font-mono text-[11px] text-slate-200">www.brbhatta.com</span>
              </div>

              {/* Quick Contact Form Link */}
              <Link
                href="/contact"
                className="flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-all group"
              >
                <span>सम्पर्क फाराम पठाउनुहोस्</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Legal & Policy Links */}
        <div className="py-4 border-b border-slate-800/80 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-[11px] text-slate-400">
          <Link href="/about" className="hover:text-emerald-300 transition-colors font-medium">
            हाम्रो बारेमा (About Us)
          </Link>
          <span className="text-slate-700 hidden sm:inline">&bull;</span>
          <Link href="/contact" className="hover:text-emerald-300 transition-colors font-medium">
            सम्पर्क (Contact Us)
          </Link>
          <span className="text-slate-700 hidden sm:inline">&bull;</span>
          <Link href="/privacy-policy" className="hover:text-emerald-300 transition-colors font-medium">
            गोपनीयता नीति (Privacy Policy)
          </Link>
          <span className="text-slate-700 hidden sm:inline">&bull;</span>
          <Link href="/terms" className="hover:text-emerald-300 transition-colors font-medium">
            प्रयोगका सर्तहरू (Terms of Service)
          </Link>
          <span className="text-slate-700 hidden sm:inline">&bull;</span>
          <Link href="/disclaimer" className="hover:text-emerald-300 transition-colors font-medium">
            अस्वीकरण (Disclaimer)
          </Link>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <p className="text-[11px]">
            &copy; {new Date().getFullYear()} <strong className="text-slate-300 font-semibold">BR Bhatta</strong> (brbhatta.com). सर्वाधिकार सुरक्षित।
          </p>

          <div className="flex items-center gap-3 sm:gap-5">
            <span className="flex items-center gap-1.5 text-slate-400 text-[11px]">
              Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500 animate-pulse" /> in Nepal
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 font-semibold text-slate-300 hover:text-white px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 active:scale-95 transition-all border border-slate-800 shadow-2xs text-xs cursor-pointer"
            >
              <span>माथि जानुहोस्</span>
              <ArrowUp className="w-3 h-3 text-emerald-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
