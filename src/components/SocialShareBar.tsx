'use client';

import React, { useState } from 'react';
import { Share2, Copy, Check, MessageCircle, Send } from 'lucide-react';
import { copyToClipboard } from '@/lib/clipboard';

interface SocialShareBarProps {
  title: string;
  url: string;
  compact?: boolean;
}

export default function SocialShareBar({ title, url, compact = false }: SocialShareBarProps) {
  const [copied, setCopied] = useState(false);

  const fullUrl = url.startsWith('http') 
    ? url 
    : (typeof window !== 'undefined' ? `${window.location.origin}${url}` : `https://www.brbhatta.com${url}`);
  
  const shareText = `नेपाल जग्गा, नापी तथा कानुन गाइड: "${title}" - पूरा जानकारी यहाँ हेर्नुहोस्:`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedText = encodeURIComponent(shareText);
  const encodedFullShare = encodeURIComponent(`${shareText} ${fullUrl}`);

  const handleCopy = async () => {
    const ok = await copyToClipboard(fullUrl);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          text: shareText,
          url: fullUrl,
        });
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className={`p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-slate-50 to-teal-500/10 dark:from-emerald-950/30 dark:via-slate-900 dark:to-teal-950/30 border border-emerald-500/20 dark:border-emerald-800/40 text-xs ${compact ? 'py-3' : 'space-y-3'}`}>
      
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-black text-slate-800 dark:text-slate-100">
          <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
            <Share2 className="w-3.5 h-3.5" />
          </div>
          <span>यो उपयोगी जानकारी साथीभाइसँग सेयर गर्नुहोस्:</span>
        </div>
        
        {/* Native Mobile Web Share API Trigger (if supported) */}
        <button
          type="button"
          onClick={handleNativeShare}
          className="sm:hidden px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold text-[11px] flex items-center gap-1 active:scale-95 transition-all shadow-xs"
        >
          <Share2 className="w-3 h-3" />
          <span>Share</span>
        </button>
      </div>

      {/* Button Strip */}
      <div className="flex items-center gap-2 flex-wrap pt-1">
        
        {/* 1. WhatsApp */}
        <a
          href={`https://api.whatsapp.com/send?text=${encodedFullShare}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold transition-all shadow-2xs hover:shadow-md active:scale-95"
          title="WhatsApp मा सेयर गर्नुहोस्"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-4.291 0-7.781 3.489-7.782 7.78 0 1.371.356 2.711 1.032 3.886l-1.096 4.004 4.101-1.075c1.13.616 2.408.941 3.743.942h.003c4.291 0 7.782-3.489 7.783-7.78.001-2.079-.806-4.032-2.276-5.503-1.47-1.47-3.424-2.278-5.505-2.278z"/>
          </svg>
          <span>WhatsApp</span>
        </a>

        {/* 2. Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold transition-all shadow-2xs hover:shadow-md active:scale-95"
          title="Facebook मा सेयर गर्नुहोस्"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span>Facebook</span>
        </a>

        {/* 3. Facebook Messenger */}
        <a
          href={`fb-messenger://share/?link=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-tr from-[#00B2FE] via-[#006AFF] to-[#9B32FF] text-white font-bold transition-all shadow-2xs hover:shadow-md active:scale-95"
          title="Messenger मा पठाउनुहोस्"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Messenger</span>
        </a>

        {/* 4. Viber */}
        <a
          href={`viber://forward?text=${encodedFullShare}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#7360F2] hover:bg-[#6654e0] text-white font-bold transition-all shadow-2xs hover:shadow-md active:scale-95"
          title="Viber मा पठाउनुहोस्"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span>Viber</span>
        </a>

        {/* 5. X / Twitter */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold transition-all shadow-2xs hover:shadow-md active:scale-95"
          title="X (Twitter) मा पोस्ट गर्नुहोस्"
        >
          <span>𝕏 Post</span>
        </a>

        {/* 6. 1-Click Copy Link with Toast Feedback */}
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-bold transition-all shadow-2xs active:scale-95 cursor-pointer ml-auto"
          title="लिङ्क कपी गर्नुहोस्"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-600 dark:text-emerald-400 font-black">कपी भयो!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-500" />
              <span>कपी लिङ्क</span>
            </>
          )}
        </button>

      </div>
    </div>
  );
}
