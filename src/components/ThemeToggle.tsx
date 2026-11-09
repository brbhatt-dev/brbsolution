'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface ThemeToggleProps {
  variant?: 'icon' | 'full' | 'pill';
  className?: string;
}

export default function ThemeToggle({ variant = 'icon', className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === 'dark';

  if (!mounted) {
    if (variant === 'pill') {
      return (
        <div translate="no"
        className={`inline-flex items-center p-0.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-xs font-bold shadow-2xs notranslate shrink-0 ${className}`}>
          <div className="px-2 py-1 rounded-lg flex items-center gap-1 bg-white text-slate-900 shadow-xs font-black">
            <Sun className="w-3.5 h-3.5 text-amber-500" />
            <span className="hidden 2xl:inline">लाइट</span>
          </div>
          <div className="px-2 py-1 rounded-lg flex items-center gap-1 text-slate-400">
            <Moon className="w-3.5 h-3.5" />
            <span className="hidden 2xl:inline">डार्क</span>
          </div>
        </div>
      );
    }
    return (
      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center ${className}`}>
        <Sun className="w-4 h-4 text-amber-500" />
      </div>
    );
  }

  // Segmented Pill Variant (Perfect for Desktop Navbar)
  if (variant === 'pill') {
    return (
      <div
        className={`inline-flex items-center p-0.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-xs font-bold shadow-2xs ${className}`}
      >
        <button
          type="button"
          onClick={() => isDark && toggleTheme()}
          className={`px-2 py-1 rounded-lg flex items-center gap-1 transition-all cursor-pointer ${
            !isDark
              ? 'bg-white text-slate-900 shadow-xs font-black'
              : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
          }`}
          title="लाइट मोड (Light Theme)"
        >
          <Sun className="w-3.5 h-3.5 text-amber-500" />
          <span className="hidden xl:inline">लाइट</span>
        </button>

        <button
          type="button"
          onClick={() => !isDark && toggleTheme()}
          className={`px-2 py-1 rounded-lg flex items-center gap-1 transition-all cursor-pointer ${
            isDark
              ? 'bg-slate-900 text-amber-300 shadow-xs font-black'
              : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
          }`}
          title="डार्क मोड (Dark Theme)"
        >
          <Moon className="w-3.5 h-3.5 text-amber-300" />
          <span className="hidden xl:inline">डार्क</span>
        </button>
      </div>
    );
  }

  // Full-width Variant for Mobile Drawer
  if (variant === 'full') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`w-full flex items-center justify-between p-3 rounded-2xl border transition-all active:scale-[0.98] cursor-pointer ${
          isDark 
            ? 'bg-slate-800/90 border-slate-700 text-amber-300 hover:bg-slate-750' 
            : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
        } ${className}`}
        aria-label="Toggle dark mode"
      >
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
            isDark ? 'bg-amber-400/20 text-amber-400' : 'bg-slate-800 text-white'
          }`}>
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </div>
          <div className="text-left">
            <span className="text-xs font-bold block text-slate-900 dark:text-white">
              {isDark ? '🌙 डार्क मोड (Dark Mode: अन)' : '☀️ लाइट मोड (Light Mode: अन)'}
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">
              {isDark ? 'लाइट मोडमा फेर्न यहाँ थिच्नुहोस्' : 'डार्क मोडमा फेर्न यहाँ थिच्नुहोस्'}
            </span>
          </div>
        </div>

        <div className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
          isDark ? 'bg-emerald-600' : 'bg-slate-300'
        }`}>
          <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
            isDark ? 'translate-x-5' : 'translate-x-0'
          } flex items-center justify-center text-[10px]`}>
            {isDark ? '🌙' : '☀️'}
          </div>
        </div>
      </button>
    );
  }

  // Standard Icon Button (Compact for Mobile & Desktop)
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all active:scale-95 border cursor-pointer ${
        isDark
          ? 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-700 shadow-sm shadow-slate-900/40'
          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200 shadow-xs'
      } ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'लाइट मोडमा जानुहोस् (Switch to Light Mode)' : 'डार्क मोडमा जानुहोस् (Switch to Dark Mode)'}
    >
      {isDark ? (
        <Sun className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-amber-400 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-700 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
