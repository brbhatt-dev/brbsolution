import React from 'react';
import { ArrowUp, Mail, Facebook, Instagram, Github, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 pt-12 sm:pt-16 pb-10 sm:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden bg-slate-800 border border-slate-700 p-1 flex items-center justify-center shadow-sm shrink-0">
                <img
                  src="/logo.png"
                  alt="Land Solution Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-left">
                <span className="text-lg sm:text-xl font-black tracking-tight text-white block">
                  Land Solution
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  BR Bhatta • brbhatta.com
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mx-auto sm:mx-0">
              नेपालको जग्गा नापजाँच, कित्ताकाट, डिजिटल क्यालकुलेसन तथा वित्तीय व्यवस्थापनलाई प्रविधिमैत्री बनाउन निर्माण गरिएका आधुनिक सफ्टवेयर तथा सोलुसनहरू।
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>काठमाडौँ, नेपाल (Kathmandu, Nepal)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-center sm:text-left">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              सफ्टवेयर र डेमोहरू
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#land-solution" className="hover:text-emerald-400 transition-colors py-1 inline-block">
                  Land Solution (नापजाँच एप)
                </a>
              </li>
              <li>
                <a href="/land-solution-demo/index.html" target="_blank" className="hover:text-emerald-400 transition-colors py-1 inline-block">
                  Land Solution Live Web Demo
                </a>
              </li>
              <li>
                <a href="#hamro-kosh" className="hover:text-emerald-400 transition-colors py-1 inline-block">
                  हाम्रो कोष (Hamro Kosh Demo)
                </a>
              </li>
              <li>
                <a href="#autocad-lsp" className="hover:text-emerald-400 transition-colors py-1 inline-block">
                  AutoCAD LSP Scripts (.lsp)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors py-1 inline-block">
                  बारम्बार सोधिने प्रश्नहरू (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Social Profiles & Contact */}
          <div className="md:col-span-4 space-y-3.5 text-center sm:text-left">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              सम्पर्क र सामाजिक सञ्जाल
            </p>
            
            <a
              href="mailto:aabiralbhatt@gmail.com"
              className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 transition-colors break-all"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span>aabiralbhatt@gmail.com</span>
            </a>

            <div className="flex items-center justify-center sm:justify-start gap-3 pt-1">
              <a
                href="https://www.facebook.com/aabiral.bhatt/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-blue-600 active:bg-blue-700 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700 hover:border-blue-500"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-600 hover:to-purple-600 active:opacity-90 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700 hover:border-rose-500"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/brbhatt-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700 hover:border-slate-500"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            <p className="text-[11px] text-slate-500 pt-1">
              Domain: <span className="text-slate-300 font-mono">www.brbhatta.com</span>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p className="text-[11px] sm:text-xs">
            &copy; {new Date().getFullYear()} Land Solution • BR Bhatta (brbhatta.com). All rights reserved.
          </p>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1 text-slate-400 text-[11px]">
              Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> in Nepal
            </span>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 font-semibold text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-600 transition-colors border border-slate-700 min-h-[36px]"
            >
              <span>माथि जानुहोस्</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
