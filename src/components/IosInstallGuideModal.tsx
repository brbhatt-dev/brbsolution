'use client';

import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  CheckCircle2, 
  ExternalLink, 
  Smartphone, 
  Globe, 
  PlusSquare, 
  Sparkles,
  QrCode,
  Database,
  ShieldCheck
} from 'lucide-react';

interface IosInstallGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IosInstallGuideModal({ isOpen, onClose }: IosInstallGuideModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const appUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/land-solution` 
    : 'https://www.brbhatta.com/land-solution';

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(appUrl)}&margin=8`;

  const handleCopy = () => {
    navigator.clipboard.writeText(appUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-auto animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-5 sm:px-7 py-4 sm:py-5 bg-gradient-to-r from-slate-900 via-slate-950 to-emerald-950 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              {/* Apple Icon */}
              <svg className="w-5 h-5 fill-white" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.7-11.64-13.98-5.77-8.91-10.26-19.16-13.46-30.74-3.21-11.58-4.82-22.75-4.82-33.51 0-14.24 3.73-26.06 11.19-35.46 7.46-9.4 16.64-14.22 27.54-14.47 5.11 0 10.74 1.48 16.9 4.43 6.15 2.95 10.15 4.51 11.99 4.67 1.83-.16 6.01-1.78 12.54-4.86 6.53-3.08 12.06-4.49 16.59-4.22 12.65.65 22.84 5.38 30.58 14.2-11.04 6.72-16.42 16.14-16.14 28.26.33 9.4 3.86 17.22 10.6 23.46 6.74 6.24 14.88 9.87 24.42 10.89-2.28 7.07-5.22 14.33-8.81 21.78zM119.22 31.84c0-7.39 2.66-14.28 7.98-20.67 5.32-6.39 11.97-10.45 19.95-12.17.65 1.52.98 3.15.98 4.89 0 7.39-2.77 14.39-8.31 21-5.54 6.61-12.3 10.6-20.28 11.96-.22-1.63-.32-3.3-.32-5.01z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black leading-tight">
                  iPhone / iOS मा Land Solution पूर्ण एप राख्ने तरिका
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 hidden sm:inline">
                  Full Version
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                ७५३ स्थानीय तह, वडा नक्सा र सम्पूर्ण डेटा सहितको आधिकारिक पूर्ण संस्करण
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Highlight Notice: Full Version Guarantee */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 text-white border border-emerald-500/40 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-emerald-300 text-xs sm:text-sm font-black">
              <Database className="w-4 h-4 text-emerald-400" />
              <span>यो कुनै सीमित डेमो होइन — १००% पूर्ण संस्करण (All Data Included) हो!</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px] text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>७५३ स्थानीय तह</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>नेपाल वडा नक्सा</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>२D/३D आर्किटेक्चर</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>अफलाइन डेटा सेभ</span>
              </div>
            </div>
          </div>

          {/* 3 Steps Visual Timeline */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
              ३ सजिला चरणहरू (Simple 3-Step Setup):
            </h4>

            {/* Step 1 */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 border border-sky-500/30 flex items-center justify-center font-black text-sm shrink-0">
                १
              </div>
              <div className="space-y-1">
                <h5 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-sky-600" />
                  <span>iPhone को Safari ब्राउजरमा खोल्नुहोस्</span>
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  आफ्नो iPhone वा iPad मा रहेको <strong>Safari Browser</strong> खोल्नुहोस् र सिधै तलको लिङ्कमा जानुहोस्:
                </p>
                <div className="pt-1.5 flex flex-wrap items-center gap-2">
                  <a
                    href="/land-solution"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-colors shadow-xs"
                  >
                    <span>Safari मा सिधै खोल्नुहोस्</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors cursor-pointer"
                  >
                    {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'लिङ्क कपी भयो!' : 'लिङ्क कपी गर्नुहोस्'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-black text-sm shrink-0">
                २
              </div>
              <div className="space-y-1">
                <h5 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  {/* Safari Share Sheet Icon */}
                  <svg className="w-4 h-4 text-indigo-600 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                  <span>Safari को &apos;Share&apos; बटन थिच्नुहोस्</span>
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Safari स्क्रिनको तल (iPad मा माथिल्लो दायाँ कुना) रहेको <strong>Share (बाकसबाट माथि बाण निस्केको चिन्ह ⎋)</strong> मा ट्याप गर्नुहोस्।
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-black text-sm shrink-0">
                ३
              </div>
              <div className="space-y-1">
                <h5 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <PlusSquare className="w-4 h-4 text-emerald-600" />
                  <span>&apos;Add to Home Screen&apos; मा ट्याप गर्नुहोस्</span>
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  मेनुलाई थोरै तल स्क्रोल गरी <strong>&quot;Add to Home Screen&quot; (होम स्क्रिनमा थप्नुहोस्)</strong> छान्नुहोस् र माथिको <strong>&apos;Add&apos;</strong> बटन थिच्नुहोस्।
                </p>
              </div>
            </div>

          </div>

          {/* Desktop QR Scan Section */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-100 to-emerald-50/50 dark:from-slate-800/80 dark:to-emerald-950/30 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-24 h-24 rounded-xl bg-white p-1.5 shadow-sm border border-slate-200 shrink-0">
              <img 
                src={qrImageUrl} 
                alt="Land Solution iPhone Full App QR Code" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                <QrCode className="w-4 h-4" />
                <span>ल्यापटप / कम्प्युटरबाट iPhone मा खोल्न:</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                आफ्नो iPhone को क्यामरा एपबाट यो QR कोड स्क्यान गर्नुहोस् र <strong>Safari</strong> मा सिधै पूर्ण एप खोल्नुहोस्।
              </p>
            </div>
          </div>

          {/* Result Confirmation Card */}
          <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200 text-xs flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>
              <strong>बधाई छ!</strong> अब तपाईंको iPhone मा <strong>Land Solution</strong> को आफ्नै आधिकारिक एप आइकन बस्नेछ। यसमा सम्पूर्ण नापी हिसाब, कित्ताकाट र वडा नक्साहरू अफलाइन तपाईंको फोनमै सुरक्षित रहनेछन्।
            </span>
          </div>

        </div>

        {/* Footer Modal Action */}
        <div className="px-5 sm:px-7 py-3.5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            Apple Web App (PWA) • 753 Local Palikas Data
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            बुझें, बन्द गर्नुहोस्
          </button>
        </div>

      </div>
    </div>
  );
}
