'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface ThemeToggleProps {
  variant?: 'icon' | 'full';
  className?: string;
}

export default function ThemeToggle({ variant = 'icon', className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  if (variant === 'full') {
    return (
      <button
        onClick={toggleTheme}
        className={`w-full flex items-center justify-between p-3 rounded-2xl border transition-all active:scale-[0.98] ${
          isDark 
            ? 'bg-slate-800 border-slate-700 text-amber-300 hover:bg-slate-750' 
            : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
        } ${className}`}
        aria-label="Toggle dark mode"
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
            isDark ? 'bg-amber-400/20 text-amber-400' : 'bg-slate-800 text-white'
          }`}>
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </div>
          <div className="text-left">
            <span className="text-xs font-bold block text-slate-900 dark:text-white">
              {isDark ? 'डार्क मोड (Dark Mode: अन)' : 'लाइट मोड (Light Mode: अन)'}
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">
              {isDark ? 'लाइट मोडमा फेर्न थिच्नुहोस्' : 'डार्क मोडमा फेर्न थिच्नुहोस्'}
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

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all active:scale-95 border ${
        isDark
          ? 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-700 shadow-sm shadow-slate-900/40'
          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200 shadow-xs'
      } ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'लाइट मोडमा जानुहोस्' : 'डार्क मोडमा जानुहोस्'}
    >
      {isDark ? (
        <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
