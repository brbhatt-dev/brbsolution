'use client';

import React, { useState, useEffect } from 'react';
import { Share2, Copy, Check, MessageCircle, ArrowUp } from 'lucide-react';
import { copyToClipboard } from '@/lib/clipboard';

interface StickyFloatingShareProps {
  title: string;
  url: string;
}

export default function StickyFloatingShare({ title, url }: StickyFloatingShareProps) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  const fullUrl = url.startsWith('http')
    ? url
    : typeof window !== 'undefined'
    ? `${window.location.origin}${url}`
    : `https://www.brbhatta.com${url}`;

  const shareText = `नेपाल जग्गा तथा कानुन गाइड: "${title}" - पूरा पढ्न:`;
  const encodedFullShare = encodeURIComponent(`${shareText} ${fullUrl}`);
  const encodedUrl = encodeURIComponent(fullUrl);

  const handleCopy = async () => {
    const ok = await copyToClipboard(fullUrl);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside 
      aria-label="Floating Share Actions"
      className="fixed bottom-20 lg:bottom-6 right-3 sm:right-6 z-30 flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-200"
    >
      
      {/* WhatsApp Share Button */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodedFullShare}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center transition-all shadow-2xs hover:scale-105 active:scale-95"
        title="WhatsApp मा पठाउनुहोस्"
        aria-label="Share on WhatsApp"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-4.291 0-7.781 3.489-7.782 7.78 0 1.371.356 2.711 1.032 3.886l-1.096 4.004 4.101-1.075c1.13.616 2.408.941 3.743.942h.003c4.291 0 7.782-3.489 7.783-7.78.001-2.079-.806-4.032-2.276-5.503-1.47-1.47-3.424-2.278-5.505-2.278z"/>
        </svg>
      </a>

      {/* Facebook Share Button */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-white flex items-center justify-center transition-all shadow-2xs hover:scale-105 active:scale-95"
        title="Facebook मा सेयर गर्नुहोस्"
        aria-label="Share on Facebook"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>

      {/* Copy Link Button */}
      <button
        type="button"
        onClick={handleCopy}
        className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
        title="लिङ्क कपी गर्नुहोस्"
        aria-label="Copy Link"
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        ) : (
          <Copy className="w-3.5 h-3.5" />
        )}
      </button>

      {/* Scroll to Top */}
      <button
        type="button"
        onClick={scrollToTop}
        className="w-8 h-8 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
        title="माथि जानुहोस् (Scroll to Top)"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

    </aside>
  );
}
