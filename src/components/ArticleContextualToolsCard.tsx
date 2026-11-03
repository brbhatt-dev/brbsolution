'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Calendar, 
  Scale, 
  Building2, 
  Calculator, 
  Wallet, 
  Compass, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';

interface ToolItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  href: string;
  icon: 'file' | 'calendar' | 'scale' | 'building' | 'calculator' | 'wallet' | 'compass';
  highlightText: string;
  tagColor: string;
}

interface ArticleContextualToolsCardProps {
  articleSlug: string;
  category?: string;
}

export default function ArticleContextualToolsCard({ articleSlug }: ArticleContextualToolsCardProps) {
  // Determine the best 2-3 contextual tools based on the article topic
  const getToolsForArticle = (): ToolItem[] => {
    // 1. Tax, Malpot, Land Valuation, Buying & Registration Articles
    if ([
      'malpot-land-registration-fee-tax-calculator-nepal',
      'government-land-valuation-minimum-rate-district-nepal',
      'nepal-government-land-valuation-minimum-rate-guide',
      'women-land-registration-discount-nepal-tax-rebate',
      'land-buying-due-diligence-checklist-nepal'
    ].includes(articleSlug)) {
      return [
        {
          id: 'legal-templates',
          title: 'नेपाली लिखत तथा तमसुक ढाँचा (Legal Deed Templates)',
          badge: 'Word Doc निःशुल्क',
          description: 'जग्गा पास गर्दा चाहिने राजिनामा, बैनाबट्टा, अधिकृत वारेसनामा र निवेदनका प्रमाणित ढाँचाहरू डाउनलोड गर्नुहोस्।',
          href: '/tools/legal-templates',
          icon: 'file',
          highlightText: 'वर्ड फाइल (.docx) डाउनलोड',
          tagColor: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
        },
        {
          id: 'malpot-rates',
          title: 'मालपोत सरकारी मूल्याङ्कन दर (Valuation Rates)',
          badge: 'जिल्ला र वडागत',
          description: 'काठमाडौँ, ललितपुर, भक्तपुर, कास्की, मोरङ लगायत प्रमुख जिल्लाहरूको न्यूनतम सरकारी मूल्याङ्कन दर खोज्नुहोस्।',
          href: '/tools/malpot-valuation-rates',
          icon: 'calculator',
          highlightText: 'सरकारी दर तुरुन्त खोज्नुहोस्',
          tagColor: 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800'
        },
        {
          id: 'jagga-pass-checklist',
          title: 'जग्गा पास आवश्यक कागजात चेकलिस्ट तथा तयारी',
          badge: 'इन्टरएक्टिभ चेकलिस्ट',
          description: 'राजीनामा, नामसारी, बकसपत्र वा अंशबण्डा गर्दा वडा, नापी र मालपोतमा चाहिने कागजातहरूको अनुकूलित सूची।',
          href: '/tools/jagga-pass-checklist',
          icon: 'file',
          highlightText: 'कागजात चेकलिस्ट हेर्नुहोस्',
          tagColor: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
        }
      ];
    }

    // 2. Kitta-Kat, Setback, Road and Building Bye-Laws Articles
    if ([
      'kitta-kat-minimum-area-criteria-residential-agricultural-nepal',
      'kitta-kat-process-rules-nepal-land-reform',
      'house-boundary-setback-neighbor-distance-building-rules-nepal',
      'bato-chhodne-mapdanda-naksa-pas-nepal',
      'building-code-naksa-pas-setback-rules-nepal'
    ].includes(articleSlug)) {
      return [
        {
          id: 'municipal-bye-laws',
          title: 'नगरपालिका भवन निर्माण तथा सडक मापदण्ड (Bye-Laws)',
          badge: '७५३ स्थानीय तह',
          description: 'काठमाडौँ, ललितपुर, पोखरा लगायतका नगरपालिकाहरूको सेटब्याक (Setback), FAR, बाटो चौडाइ र नक्सा पास नियम।',
          href: '/tools/municipal-bye-laws',
          icon: 'building',
          highlightText: 'आफ्नो पालिकाको मापदण्ड हेर्नुहोस्',
          tagColor: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
        },
        {
          id: 'construction-cost',
          title: 'घर निर्माण लागत तथा सामग्री क्यालकुलेटर',
          badge: '२०८१ दरभाउ',
          description: 'तपाईंको क्षेत्रफल अनुसार इँटा, सिमेन्ट, बालुवा, डन्डी र कुल लेबर खर्चको तत्काल हिसाब निकाल्नुहोस्।',
          href: '/tools/construction-cost-calculator',
          icon: 'calculator',
          highlightText: 'निर्माण लागत अनुमान गर्नुहोस्',
          tagColor: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
        },
        {
          id: 'kitta-kat-checker',
          title: 'कित्ताकाट योग्यता परीक्षक (Kitta-Kat Eligibility)',
          badge: 'आवासीय / कृषि',
          description: 'नयाँ भू-उपयोग नियमावली अनुसार तपाईंको कित्ता कानुनी रूपमा टुक्राउन मिल्छ कि मिल्दैन जाँच्नुहोस्।',
          href: '/tools/kitta-kat-checker',
          icon: 'compass',
          highlightText: 'कित्ताकाट सम्भाव्यता परीक्षण',
          tagColor: 'bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800'
        }
      ];
    }

    // 3. Dispute, Sandhiyar, Lalpurja, Mohi & Amsabanda Articles
    if ([
      'land-boundary-sandhiyar-dispute-resolution-nepal',
      'lost-lalpurja-duplicate-process-nepal',
      'lost-damaged-lalpurja-duplicate-copy-process-nepal',
      'mohi-hak-land-tenancy-rights-nepal-solution',
      'guthi-land-registration-raikar-conversion-nepal',
      'amsa-banda-land-partition-process-nepal-law'
    ].includes(articleSlug)) {
      return [
        {
          id: 'dispute-wizard',
          title: 'जग्गा विवाद कानुनी समाधान गाइड (Dispute Wizard)',
          badge: 'स्टेप-बाइ-स्टेप',
          description: 'सांधियार विवाद, सिमाना मिचिएको, बाटो रोकावट वा लालपुर्जा समस्याको आधिकारिक कानुनी उपाय र निवेदन प्रक्रिया।',
          href: '/tools/property-dispute-wizard',
          icon: 'scale',
          highlightText: 'कानुनी समाधान विजार्ड खोल्नुहोस्',
          tagColor: 'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800'
        },
        {
          id: 'legal-templates',
          title: 'नेपाली लिखत तथा निवेदन ढाँचा (Legal Deed Templates)',
          badge: 'वर्ड ढाँचा',
          description: 'अंशबण्डा कागज, सिमाना छुट्याउने नापी निवेदन, र घरबहाल सम्झौताका आधिकारिक ढाँचाहरू डाउनलोड गर्नुहोस्।',
          href: '/tools/legal-templates',
          icon: 'file',
          highlightText: 'प्रमाणित लिखत डाउनलोड',
          tagColor: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
        },
        {
          id: 'anshabanda-calc',
          title: 'अंशबण्डा क्यालकुलेटर (Inheritance & Partition)',
          badge: 'बराबर भाग',
          description: 'रोपनी-आना वा बिघा-कट्ठा जग्गालाई अंशियारहरूको संख्या अनुसार न्यायोचित रूपमा विभाजन गर्नुहोस्।',
          href: '/tools/anshabanda-calculator',
          icon: 'calculator',
          highlightText: 'अंशबण्डा हिसाब गर्नुहोस्',
          tagColor: 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800'
        }
      ];
    }

    // Default Fallback
    return [
      {
        id: 'legal-templates',
        title: 'नेपाली लिखत तथा तमसुक ढाँचा (Legal Deed Templates)',
        badge: 'निःशुल्क वर्ड फाइल',
        description: 'बैनाबट्टा, राजिनामा, घरबहाल र निवेदनका प्रमाणित ढाँचाहरू माइक्रोसफ्ट वर्ड (.docx) मा डाउनलोड गर्नुहोस्।',
        href: '/tools/legal-templates',
        icon: 'file',
        highlightText: 'वर्ड फाइल डाउनलोड गर्नुहोस्',
        tagColor: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
      },
      {
        id: 'malpot-rates',
        title: 'मालपोत सरकारी मूल्याङ्कन दर खोजक',
        badge: 'वडागत दर',
        description: 'आफ्नो जिल्ला र पालिकाको न्यूनतम सरकारी जग्गा मूल्याङ्कन दर एकै क्लिकमा हेर्नुहोस्।',
        href: '/tools/malpot-valuation-rates',
        icon: 'calculator',
        highlightText: 'सरकारी मूल्याङ्कन हेर्नुहोस्',
        tagColor: 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800'
      },
      {
        id: 'shubh-saait',
        title: 'घरजग्गा पास तथा बैना शुभ साइत क्यालेन्डर',
        badge: 'शुभ मुहूर्त',
        description: 'घरजग्गा किनबेच, पास र बैनाबट्टा गर्ने शुभ दिन तथा तिथिहरू हेर्नुहोस्।',
        href: '/tools/real-estate-saait-calendar',
        icon: 'calendar',
        highlightText: 'शुभ साइत क्यालेन्डर',
        tagColor: 'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800'
      }
    ];
  };

  const tools = getToolsForArticle();

  const renderIcon = (type: ToolItem['icon']) => {
    switch (type) {
      case 'file': return <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'calendar': return <Calendar className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'scale': return <Scale className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'building': return <Building2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'calculator': return <Calculator className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'wallet': return <Wallet className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default: return <Compass className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
    }
  };

  return (
    <div className="my-8 rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-slate-50 via-emerald-50/20 to-slate-100 dark:from-slate-900/90 dark:via-emerald-950/20 dark:to-slate-900 border-2 border-emerald-500/30 dark:border-emerald-500/30 shadow-md">
      {/* Banner Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-emerald-900/10 dark:border-emerald-800/40">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>सिफारिस गरिएका डिजिटल साधनहरू (Free Practical Tools)</span>
          </div>
          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
            यो विषयसँग सम्बन्धित उपयोगी अनलाइन उपकरणहरू
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            तपाईंको कामलाई सहज र समय बचत बनाउन यी निःशुल्क नेपाली टुल्सहरू प्रयोग गर्नुहोस्:
          </p>
        </div>
        <Link 
          href="/tools" 
          className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 inline-flex items-center gap-1 shrink-0"
        >
          <span>सबै २८+ उपकरणहरू</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Grid of 2-3 High-Conversion Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tools.map((t) => (
          <div 
            key={t.id}
            className="flex flex-col justify-between p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all hover:shadow-md group"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {renderIcon(t.icon)}
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${t.tagColor}`}>
                  {t.badge}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {t.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed line-clamp-3">
                  {t.description}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                {t.highlightText}
              </span>
              <Link
                href={t.href}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-2xs group-hover:translate-x-0.5"
              >
                <span>खोल्नुहोस्</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
