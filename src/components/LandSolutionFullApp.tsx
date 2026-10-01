'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  RotateCw, 
  ExternalLink, 
  Maximize2, 
  Minimize2, 
  Home, 
  Sparkles, 
  Database,
  Layers
} from 'lucide-react';
import IosInstallGuideModal from './IosInstallGuideModal';

export default function LandSolutionFullApp() {
  const [showIosGuide, setShowIosGuide] = useState(false);
  const [iframeKey, setIframeKey] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full h-[100dvh] flex flex-col bg-slate-950 text-white overflow-hidden select-none z-50">
      
      {/* Top Header Control Strip */}
      {showTopBar && (
        <header className="min-h-13 sm:min-h-15 pt-[env(safe-area-inset-top)] bg-slate-900/95 backdrop-blur-md border-b border-slate-800/80 px-3 sm:px-5 flex items-center justify-between shrink-0 z-20">
          
          {/* Left: Branding & Full Version Data Badge */}
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <Link 
              href="/"
              title="मुख्य पेजमा फर्कनुहोस्"
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
            >
              <Home className="w-4 h-4" />
            </Link>

            <div className="w-8 h-8 rounded-xl bg-white p-0.5 flex items-center justify-center shrink-0 shadow-sm">
              <img src="/logo.png" alt="Land Solution" className="w-full h-full object-contain" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h1 className="text-xs sm:text-sm font-black text-white truncate">
                  Land Solution (पूर्ण संस्करण)
                </h1>
                <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-bold">
                  <Database className="w-3 h-3" />
                  ७५३ स्थानीय तह डेटा
                </span>
                <span className="hidden sm:inline-flex px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[10px] font-bold">
                  iOS & Web
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-emerald-400 truncate">
                नेपाल जग्गा नापजाँच, कित्ताकाट तथा ३D नक्सा प्रणाली (Full Data Enabled)
              </p>
            </div>
          </div>

          {/* Right: Actions (iOS Guide, Reload, Fullscreen) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* 🍎 iPhone Add to Home Screen Button */}
            <button
              type="button"
              onClick={() => setShowIosGuide(true)}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-gradient-to-r from-slate-800 to-emerald-950 hover:from-slate-700 hover:to-emerald-900 text-emerald-200 hover:text-white border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.7-11.64-13.98-5.77-8.91-10.26-19.16-13.46-30.74-3.21-11.58-4.82-22.75-4.82-33.51 0-14.24 3.73-26.06 11.19-35.46 7.46-9.4 16.64-14.22 27.54-14.47 5.11 0 10.74 1.48 16.9 4.43 6.15 2.95 10.15 4.51 11.99 4.67 1.83-.16 6.01-1.78 12.54-4.86 6.53-3.08 12.06-4.49 16.59-4.22 12.65.65 22.84 5.38 30.58 14.2-11.04 6.72-16.42 16.14-16.14 28.26.33 9.4 3.86 17.22 10.6 23.46 6.74 6.24 14.88 9.87 24.42 10.89-2.28 7.07-5.22 14.33-8.81 21.78zM119.22 31.84c0-7.39 2.66-14.28 7.98-20.67 5.32-6.39 11.97-10.45 19.95-12.17.65 1.52.98 3.15.98 4.89 0 7.39-2.77 14.39-8.31 21-5.54 6.61-12.3 10.6-20.28 11.96-.22-1.63-.32-3.3-.32-5.01z"/>
              </svg>
              <span>iPhone App बनाउनुहोस्</span>
            </button>

            {/* Reload App */}
            <button
              type="button"
              onClick={() => setIframeKey((k) => k + 1)}
              title="एप पुनः लोड गर्नुहोस्"
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">रिलोड</span>
            </button>

            {/* Fullscreen Toggle */}
            <button
              type="button"
              onClick={toggleFullscreen}
              title={isFullscreen ? 'सामान्य स्क्रिन' : 'फुल स्क्रिन'}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{isFullscreen ? 'Exit Full' : 'Full Screen'}</span>
            </button>

            {/* Hide/Show Top Bar for clean native feel */}
            <button
              type="button"
              onClick={() => setShowTopBar(false)}
              title="माथिल्लो बार लुकाउनुहोस् (१००% सफा स्क्रिन)"
              className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white text-xs transition-colors"
            >
              ▲
            </button>
          </div>
        </header>
      )}

      {/* Floating Restore Button when top bar is hidden */}
      {!showTopBar && (
        <button
          type="button"
          onClick={() => setShowTopBar(true)}
          title="मेनु बार देखाउनुहोस्"
          className="fixed top-2 right-2 z-30 px-3 py-1 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white text-[11px] font-bold backdrop-blur-md border border-slate-700 shadow-lg flex items-center gap-1.5 transition-all opacity-40 hover:opacity-100"
        >
          <img src="/logo.png" alt="" className="w-3.5 h-3.5 object-contain" />
          <span>मेनु ▼</span>
        </button>
      )}

      {/* Main Full Version Flutter Engine Viewport */}
      <main className="flex-1 w-full h-full bg-slate-950 relative pb-[env(safe-area-inset-bottom)]">
        <iframe
          key={iframeKey}
          src="/land-solution-demo/index.html"
          title="Land Solution Full Version Application"
          className="w-full h-full border-0 select-auto"
          allow="geolocation; camera; accelerometer; gyroscope"
        />
      </main>

      {/* Reusable iOS Installation Guide Modal */}
      <IosInstallGuideModal 
        isOpen={showIosGuide} 
        onClose={() => setShowIosGuide(false)} 
      />

    </div>
  );
}
