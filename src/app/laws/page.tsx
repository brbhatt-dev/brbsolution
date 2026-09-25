import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale, ArrowLeft, Building2, ShieldCheck, Sparkles, BookOpen, ExternalLink, HelpCircle } from 'lucide-react';
import LawsDirectory from '@/components/LawsDirectory';
import SocialShareBar from '@/components/SocialShareBar';
import AdSenseSlot from '@/components/AdSenseSlot';
import { LAW_DOCUMENTS } from '@/data/laws';

export const metadata: Metadata = {
  title: 'मौजूदा कानुनहरू (Acts, Regulations & Directives) | नापी विभाग नेपाल | BR Bhatta',
  description: 'नापी विभाग (Department of Survey - dos.gov.np) अन्तर्गतका मौजूदा ऐन तथा नियमावलीहरू, निर्देशिका तथा कार्यविधिहरूको आधिकारिक डिजिटल सङ्ग्रह। जग्गा नापजाँच ऐन २०१९, भूउपयोग ऐन २०७६, नियमावली २०७९ र सरकारी जग्गा निर्देशिका।',
  keywords: [
    'मौजूदा कानुनहरू',
    'ऐन तथा नियमावलीहरू',
    'निर्देशिका तथा कार्यविधि',
    'जग्गा नाप जाँच ऐन २०१९',
    'जग्गा नाप जाँच नियमावली २०५८',
    'भूउपयोग ऐन २०७६',
    'भूउपयोग नियमावली २०७९',
    'नापी विभाग',
    'dos.gov.np',
    'हवाई सर्वेक्षण अनुमति कार्यविधि',
    'नेपाल नापी कानुन'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/laws',
  },
  openGraph: {
    title: 'मौजूदा नापी तथा भूमिसम्बन्धी कानुनहरू | Department of Survey Nepal Repository',
    description: 'नेपाल सरकार नापी विभाग (dos.gov.np) द्वारा जारी ऐन, नियमावली, कार्यविधि तथा निर्देशिकाहरूको पूर्ण संकलन।',
    url: 'https://www.brbhatta.com/laws',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function LawsPage() {
  // JSON-LD Structured Data for Government Legislation / Legal Portal
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'नेपालका मौजूदा नापी तथा भूमिसम्बन्धी कानुनहरू (Survey & Land Laws Repository)',
    description: 'नापी विभाग नेपाल (dos.gov.np) अन्तर्गतका ऐन, नियमावली, कार्यविधि र निर्देशिकाहरूको आधिकारिक संकलन।',
    url: 'https://www.brbhatta.com/laws',
    publisher: {
      '@type': 'Organization',
      name: 'Land Solution & BR Bhatta',
      url: 'https://www.brbhatta.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.brbhatta.com/logo.png',
      },
    },
    hasPart: LAW_DOCUMENTS.map((doc) => ({
      '@type': 'Legislation',
      name: doc.titleNp,
      alternateName: doc.titleEn,
      legislationIdentifier: doc.id,
      legislationDate: doc.yearBs,
      description: doc.summaryNp,
      legislationPassedBy: {
        '@type': 'GovernmentOrganization',
        name: doc.authority,
      },
      url: doc.dosUrl,
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Header Bar */}
      <header className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 transition-colors">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>गृहपृष्ठ (Home) फर्कनुहोस्</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/articles"
              className="text-xs font-bold text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
            >
              गाइड तथा लेखहरू
            </Link>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-xs font-mono text-slate-500 font-semibold">dos.gov.np Legal Hub</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-sky-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-[#070b14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-xs font-bold">
            <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>नेपाल सरकार • नापी विभाग (dos.gov.np) आधिकारिक सङ्ग्रह</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            मौजूदा कानुनहरू (Survey & Land Laws)
          </h1>
          
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            नापी विभाग (Department of Survey) अन्तर्गत कार्यान्वयनमा रहेका <strong>ऐन तथा नियमावलीहरू</strong> एवं <strong>निर्देशिका तथा कार्यविधिहरू</strong>को आधिकारिक डिजिटल सङ्ग्रह।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xs">
              <Scale className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>८ ऐन तथा नियमावलीहरू</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xs">
              <BookOpen className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>४ निर्देशिका तथा कार्यविधिहरू</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>१००% आधिकारिक सरकारी स्रोत</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-10">
        
        {/* AdSense Slot */}
        <AdSenseSlot userFacingLabel="प्रायोजित सूचना (Sponsored Legal Hub)" />

        {/* Interactive Directory (Search, Filter Tabs, Expandable Provisions) */}
        <LawsDirectory />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="नेपालका मौजूदा नापी तथा भूमिसम्बन्धी कानुनहरू (Acts, Regulations & Directives)" 
          url="/laws" 
        />

        {/* Bottom Educational Callout */}
        <div className="bg-gradient-to-r from-emerald-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg space-y-4">
          <div className="relative z-10 max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-400">
              इन्जिनियर तथा सेवाग्राही सहायता
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              जग्गाको क्षेत्रफल, कित्ताकाट वा रजिस्ट्रेसन कर गणना गर्नुपर्छ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              हाम्रो अनलाइन ल्याण्ड क्यालकुलेटरबाट रोपनी-आना, बिघा-कठ्ठा, वर्गमिटर रूपान्तरण र नयाँ बजेट अनुसारको मालपोत रजिस्ट्रेसन कर तुरुन्तै हिसाब गर्नुहोस्।
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/#land-calculator"
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                अनलाइन क्यालकुलेटर चलाउनुहोस्
              </Link>
              <Link
                href="/articles"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-colors border border-white/20"
              >
                विस्तृत गाइडहरू पढ्नुहोस्
              </Link>
            </div>
          </div>
          
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
        </div>

      </main>

    </div>
  );
}
