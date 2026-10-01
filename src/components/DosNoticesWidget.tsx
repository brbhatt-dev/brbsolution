'use client';

import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  ExternalLink, 
  RefreshCw, 
  Search, 
  Calendar, 
  ShieldCheck, 
  Building2, 
  FileText, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Filter
} from 'lucide-react';

export interface NoticeItem {
  id: string;
  title: string;
  url: string;
  date: string;
  category: string;
  badge?: string;
  isLatest?: boolean;
}

const DEFAULT_NOTICES: NoticeItem[] = [
  {
    id: '118',
    title: 'सरुवाको लागि निवेदन पेश गर्ने सम्बन्धी सूचना।',
    url: 'https://dos.gov.np/content/118/notice-regarding-submission-of-application-for-transfer-/',
    date: '२६ भदौ, २०८३',
    category: 'सूचना',
    badge: 'ताजा सूचना',
    isLatest: true,
  },
  {
    id: '119',
    title: 'सूचना !!!',
    url: 'https://dos.gov.np/content/119/information--/',
    date: '१८ भदौ, २०८३',
    category: 'सूचना',
    badge: 'महत्वपूर्ण',
    isLatest: false,
  },
  {
    id: '117',
    title: 'सरकारी, सार्वजनिक र सामुदायिक जग्गा संरक्षण सम्बन्धी निर्देशिका',
    url: 'https://dos.gov.np/content/117/guidelines-for-government--public-and-community-land/',
    date: '०८ साउन, २०८३',
    category: 'निर्देशिका',
    badge: 'निर्देशिका',
    isLatest: false,
  },
  {
    id: '115',
    title: 'सूचनाको हक सम्बन्धि स्वतः प्रकाशन (नापी विभाग)',
    url: 'https://dos.gov.np/content/115/self-publication-regarding-right-to-information/',
    date: '०१ साउन, २०८३',
    category: 'सूचनाको हक',
    badge: 'RTI',
    isLatest: false,
  },
  {
    id: '114',
    title: 'कर्मचारी आचारसंहिता पालना सम्बन्धी परिपत्र',
    url: 'https://dos.gov.np/content/114/regarding-code-of-conduct/',
    date: '२७ असार, २०८३',
    category: 'आचारसंहिता',
    badge: 'परिपत्र',
    isLatest: false,
  },
  {
    id: '113',
    title: 'अमिन तथा सर्भेक्षण सेवाकालीन तालिम सम्बन्धी सूचना',
    url: 'https://dos.gov.np/content/113/regarding-in-service-training/',
    date: '१५ असार, २०८३',
    category: 'तालिम',
    badge: 'तालिम',
    isLatest: false,
  }
];

interface DosNoticesWidgetProps {
  maxItems?: number;
  showSearch?: boolean;
}

export default function DosNoticesWidget({ maxItems = 6, showSearch = true }: DosNoticesWidgetProps) {
  const [notices, setNotices] = useState<NoticeItem[]>(DEFAULT_NOTICES);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBadge, setSelectedBadge] = useState<string>('सबै');
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const fetchNotices = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/dos-notices');
      if (res.ok) {
        const data = await res.json();
        if (data.notices && data.notices.length > 0) {
          setNotices(data.notices);
          setLastUpdated('प्रत्यक्ष सिङ्क');
        }
      }
    } catch (e) {
      // Fallback data is preserved
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const badgeOptions = ['सबै', 'ताजा सूचना', 'निर्देशिका', 'परिपत्र', 'तालिम'];

  const filteredNotices = notices
    .filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBadge = selectedBadge === 'सबै' || item.badge === selectedBadge;
      return matchesSearch && matchesBadge;
    })
    .slice(0, maxItems);

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xs space-y-6">
      
      {/* Header with Live Sync Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400 shadow-2xs">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                नापी विभाग : प्रत्यक्ष सूचना बोर्ड
              </h3>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                LIVE SYNC
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              नेपाल सरकार नापी विभाग (<span className="font-semibold text-emerald-600 dark:text-emerald-400">dos.gov.np</span>) द्वारा जारी ताजा सूचना तथा परिपत्र
            </p>
          </div>
        </div>

        {/* Action button to re-fetch */}
        <button
          onClick={fetchNotices}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all disabled:opacity-50 self-start sm:self-auto cursor-pointer"
          title="ताजा सूचना अद्यावधिक गर्नुहोस्"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-emerald-600' : ''}`} />
          <span>{loading ? 'अपडेट हुँदैछ...' : 'ताजा सूचना जाँच्नुहोस्'}</span>
        </button>
      </div>

      {/* Optional Search & Filter */}
      {showSearch && (
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="सूचनाको शीर्षक खोज्नुहोस्..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {badgeOptions.map((badge) => (
              <button
                key={badge}
                onClick={() => setSelectedBadge(badge)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedBadge === badge
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {badge}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Notice Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filteredNotices.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col justify-between p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-white dark:hover:bg-slate-800/80 transition-all duration-200"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-800">
                  {item.badge || 'सूचना'}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  {item.date}
                </span>
              </div>

              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                {item.title}
              </h4>
            </div>

            <div className="pt-3 mt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
              <span className="text-[10px] text-slate-500 dark:text-slate-400">
                दर्ता नं: #{item.id}
              </span>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
              >
                <span>आधिकारिक सूचना / PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredNotices.length === 0 && (
        <div className="text-center py-8 text-xs text-slate-500 dark:text-slate-400">
          खोजिएको शब्दसँग मेल खाने कुनै पनि सूचना फेला परेन।
        </div>
      )}

      {/* Attribution & RTI Legal Note */}
      <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="text-[11px] leading-relaxed">
            <strong>कानूनी स्रोत:</strong> सूचनाको हक सम्बन्धी ऐन, २०६४ अनुसार नापी विभाग नेपाल (<a href="https://dos.gov.np" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600 font-semibold">dos.gov.np</a>) को आधिकारिक पोर्टलबाट जनहितका लागि प्रत्यक्ष प्रदर्शित।
          </span>
        </div>

        <a
          href="https://dos.gov.np/category/information/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 shrink-0 self-end sm:self-auto transition-colors"
        >
          <span>नापी विभागको सम्पूर्ण अभिलेख हेर्नुहोस्</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
}
