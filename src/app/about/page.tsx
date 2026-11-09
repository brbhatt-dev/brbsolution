import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Compass, 
  Wallet, 
  FileCode, 
  MapPin, 
  CheckCircle2, 
  Mail, 
  Facebook, 
  Instagram, 
  Github,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { LAND_SOLUTION_PLAY_STORE_URL } from '@/lib/land-solution-release';

export const metadata: Metadata = {
  title: 'About Us (हाम्रो बारेमा) | BR Bhatta & Land Solution Nepal',
  description: 'About BR Bhatta (Bhakta Raj Bhatt) and Land Solution Nepal. Learn about the surveyor and software developer behind Nepal land measurement apps, AutoCAD LSP automation scripts, and citizen digital tools.',
  alternates: {
    canonical: 'https://www.brbhatta.com/about',
  },
  openGraph: {
    title: 'About Us (हाम्रो बारेमा) | BR Bhatta & Land Solution Nepal',
    description: 'About BR Bhatta and Land Solution. Mission, cadastre automation tools, and tech innovations built for Nepal.',
    url: 'https://www.brbhatta.com/about',
    siteName: 'BR Bhatta',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us (हाम्रो बारेमा) | BR Bhatta & Land Solution Nepal',
    description: 'About BR Bhatta, Land Solution, Hamro Kosh and tech innovations built for Nepal.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      
      {/* Header Bar */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 transition-colors">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home (गृहपृष्ठ)</span>
          </Link>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">www.brbhatta.com</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-10 transition-colors">
          
          {/* Creator Profile Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-slate-100 dark:border-slate-800">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white dark:bg-slate-800 border-2 border-emerald-500 p-2 shadow-lg shadow-emerald-500/10 shrink-0 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="BR Bhatta Land Solution" 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-2 text-center sm:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>FOUNDER &amp; SOFTWARE DEVELOPER (संस्थापक तथा विकासकर्ता)</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                BR Bhatta (Bhakta Raj Bhatt)
              </h1>
              <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-400 font-bold">
                Surveyor, Civil Geomatics Technologist &amp; Creator of Land Solution, Hamro Kosh &amp; AutoCAD LSP Automation for Nepal
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Kathmandu, Nepal (काठमाडौँ, नेपाल)</span>
              </div>
            </div>
          </div>

          {/* English & Nepali Mission & Story */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              1. Who We Are &amp; Our Mission (हाम्रो परिचय र उद्देश्य)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>www.brbhatta.com</strong> is an educational and technical web portal founded by <strong>Bhakta Raj Bhatt (BR Bhatta)</strong>, a land surveyor and software developer based in Kathmandu, Nepal. Traditional land area calculation, plot subdivision (Kitta-kat), and cadastral coordinate transformation in Nepal involve complex multi-unit conversions between the Hilly system (Ropani–Aana–Paisa–Daam), the Terai system (Bigha–Katha–Dhur), and international metric standards. Our mission is to eliminate human calculation errors and empower surveyors, civil engineers, law practitioners, and everyday citizens with accurate, free digital tools and regulatory guides.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              नेपालमा परम्परागत रूपमा गरिने जग्गा नापजाँच, कित्ताकाट, तथा क्षेत्रफल गणनाको प्रक्रिया जटिल, समय लाग्ने र मानवीय त्रुटि हुने खालको छ। नापी सर्भेक्षक, अमिन, इन्जिनियर तथा सामान्य जग्गाधनीहरूलाई आफ्नो जग्गाको यथार्थ विवरण तत्काल दिन सक्ने गरी हामीले <strong>Land Solution</strong> मोबाइल एप र यस वेबसाइटका २४+ अनलाइन क्यालकुलेटरहरू विकास गरेका हौं।
            </p>
          </section>

          {/* Key Innovations */}
          <section className="space-y-4">
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              2. Core Software &amp; Technical Solutions (हाम्रा मुख्य उत्पादनहरू)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              
              {/* Land Solution */}
              <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800 space-y-2.5 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">Land Solution (Android App)</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Official Android application on Google Play Store for Nepal land measurement, Kitta-kat subdivision, MUTM coordinate transformation, and offline GPS field stakeout. (नेपालको जग्गा नापजाँच र कित्ताकाटको आधिकारिक मोबाइल एप।)
                  </p>
                </div>
                <a
                  href={LAND_SOLUTION_PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline pt-1"
                >
                  <span>View on Google Play Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Hamro Kosh */}
              <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-800 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                  <Wallet className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">Hamro Kosh (हाम्रो कोष)</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Transparent digital financial ledger designed for community savings groups (Samuha/Guthi), cooperatives, and personal monthly savings, loan tracking, and interest calculation. (समूह, समिति र व्यक्तिगत मासिक बचत तथा ऋण हिसाब राख्ने डिजिटल लेजर।)
                </p>
              </div>

              {/* AutoCAD LSP */}
              <div className="p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-800 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center">
                  <FileCode className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">AutoCAD LSP Suite</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Free AutoLISP (.LSP) automation scripts for civil engineers and cadastral surveyors to compute closed polyline areas in Ropani/Bigha, generate coordinate tables, and export parcel schedules. (अटो-क्याड नक्सामा एकै क्लिकमा क्षेत्रफल र को-अर्डिनेट निकाल्ने स्क्रिप्टहरू।)
                </p>
              </div>

            </div>
          </section>

          {/* Core Values */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900 dark:text-white">3. Editorial Integrity &amp; Standards (हाम्रा विशेषताहरू)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Every calculator, legal template, and educational article published on www.brbhatta.com is researched against official Nepalese statutes (including the Land Act 2021, Land Use Regulation 2079/2081, and Survey Department technical manuals) and verified for mathematical accuracy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>100% Calibrated to Nepal Cadastral Standards (१००% नेपाली नाप प्रणाली अनुकूल)</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Offline-Ready Mobile &amp; Browser Utilities (अफलाइन काम गर्न सकिने भरपर्दो प्रविधि)</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Built in Consultation with Licensed Surveyors (अमिन र इन्जिनियरहरूको सल्लाहमा निर्मित)</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Official Google Play App &amp; Free Web Calculators (Google Play एप र निःशुल्क वेब टूल्स)</span>
              </div>
            </div>
          </section>

          {/* Social & Contact Box */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Connect with us (जोडिनुहोस्):</span>
              <a
                href="https://www.facebook.com/aabiral.bhatt/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1877F2] to-[#0A66C2] text-white flex items-center justify-center shadow-xs"
              >
                <Facebook className="w-4 h-4 fill-white" />
              </a>
              <a
                href="https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@br_bhatta?_r=1&_t=ZS-9A2ydU7e8Rd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center shadow-xs border border-slate-800 hover:border-pink-500/50"
                aria-label="TikTok Profile"
                title="TikTok (@br_bhatta)"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a
                href="https://x.com/LandSolutionNpl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gradient-to-tr from-black to-slate-800 text-white flex items-center justify-center shadow-xs border border-slate-700"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://github.com/brbhatt-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0d1117] to-[#24292f] text-white flex items-center justify-center shadow-xs border border-slate-700"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            <a
              href="mailto:info@brbhatta.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>info@brbhatta.com</span>
            </a>
          </div>

        </div>
      </main>

    </div>
  );
}
