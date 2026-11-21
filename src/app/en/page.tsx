import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import EnglishNavbar from '@/components/en/EnglishNavbar';
import Footer from '@/components/Footer';
import BilingualSwitchBanner from '@/components/BilingualSwitchBanner';
import { getBilingualAlternates, BILINGUAL_ROUTE_PAIRS } from '@/lib/i18nRoutes';
import { HomeEnglishDocumentation } from '@/components/BilingualEnglishGuide';
import { ArrowRight, Calculator, Compass, Calendar, Receipt, Split, Ruler, Landmark, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'BR Bhatta English Hub — Nepal Land Converter, Malpot Tax, Kitta Kat & Patro Tools',
  description:
    'Official English tools hub of BR Bhatta: Ropani to Bigha land converter, Nepal Malpot land tax calculator, Kitta Kat rules, High Tension setback calculator, 77-district Malpot/Survey offices, and Nepali Patro BS-AD converter.',
  keywords: [
    'Nepal Land Calculator English',
    'Ropani to Aana Converter',
    'Malpot Tax Calculator Nepal',
    'High Tension Line Setback Nepal',
    'Kitta Kat Rules Nepal',
    'Department of Survey Nepal Offices',
    'Number to Nepali Rupees in Words',
    'Nepali Patro BS to AD Converter',
  ],
  alternates: getBilingualAlternates('/', '/en', 'en'),
  openGraph: {
    title: 'BR Bhatta English Hub — Nepal Land, Engineering & Cadastral Utilities',
    description:
      'Use pure English Nepal land converters, Malpot & CGT calculators, setback checkers, office directories, and BS-AD calendar tools.',
    url: 'https://www.brbhatta.com/en',
    siteName: 'BR Bhatta',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'BR Bhatta English Hub — Nepal Land, Engineering & Cadastral Utilities' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BR Bhatta English Hub — Nepal Land, Engineering & Cadastral Utilities',
    description: 'Pure English Nepal land converters, Malpot & CGT calculators, setback checkers, office directories, and BS-AD calendar tools.',
    images: ['/og-image.png'],
  },
};

const TOOL_ICONS: Record<string, React.ReactNode> = {
  '/en/tools/number-to-words': <FileText className="w-5 h-5 text-emerald-600" />,
  '/en/tools/land-calculator': <Calculator className="w-5 h-5 text-emerald-600" />,
  '/en/tools/setback-calculator': <Ruler className="w-5 h-5 text-amber-600" />,
  '/en/tools/malpot-calculator': <Receipt className="w-5 h-5 text-sky-600" />,
  '/en/tools/kitta-kat-checker': <Split className="w-5 h-5 text-indigo-600" />,
  '/en/tools/malpot-valuation-rates': <Landmark className="w-5 h-5 text-teal-600" />,
  '/en/tools/survey-offices': <Compass className="w-5 h-5 text-rose-600" />,
  '/en/patro': <Calendar className="w-5 h-5 text-red-600" />,
};

export default function EnglishHomePage() {
  const englishTools = BILINGUAL_ROUTE_PAIRS.filter((p) => p.en !== '/en');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100">
      <EnglishNavbar />

      <main className="flex-grow max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        <BilingualSwitchBanner mode="to-ne" href="/" />

        <header className="p-7 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-indigo-800 text-white shadow-xl space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-bold">
            🇳🇵 Nepal Digital Land, Survey &amp; Utility Portal (English Edition)
          </span>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            Nepal Land Area Converter, Malpot Tax, Kitta Kat &amp; Patro Tools (English)
          </h1>
          <p className="text-sm text-emerald-100 max-w-3xl leading-relaxed">
            Built for property buyers, civil engineers, surveyors, bankers, and NRNs worldwide. Access verified Ropani/Bigha calculators, NEA High-Tension &amp; municipal setbacks, Land Use Regulation 2079 checks, and 185+ Survey/Malpot office contacts in pure English.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {englishTools.map((tool) => (
            <Link
              key={tool.en}
              href={tool.en}
              className="group p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-4"
            >
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  {TOOL_ICONS[tool.en]}
                </div>
                <h2 className="text-base font-black text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                  {tool.labelEn}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">{tool.labelNe}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <span>Open English Tool</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </section>

        <HomeEnglishDocumentation />
      </main>

      <Footer />
    </div>
  );
}
