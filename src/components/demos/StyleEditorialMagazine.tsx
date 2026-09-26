'use client';

import React from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  ArrowRight, 
  Calculator, 
  Feather, 
  Compass, 
  FileText, 
  Scale, 
  Calendar,
  Sparkles,
  Bookmark
} from 'lucide-react';
import LandCalculator from '../LandCalculator';
import TithiWidget from '../TithiWidget';

export default function StyleEditorialMagazine() {
  const articles = [
    {
      title: 'नेपालमा जग्गा नापजाँचका एकाइहरू: रोपनी र बिघा प्रणालीको पूर्ण तुलना',
      readTime: '५ मिनेट अध्ययन',
      date: '२०८१ भदौ',
      slug: 'nepal-land-measurement-units-ropani-bigha-converter',
      desc: 'पहाड, उपत्यका र तराईमा प्रचलित १६ आनाको १ रोपनी र २० कट्ठाको १ बिघाबीचको गणितीय सम्बन्ध र इतिहास।'
    },
    {
      title: 'कित्ताकाट सम्बन्धी नयाँ नियम र कार्यविधि: सर्वसाधारणले जान्नैपर्ने कुराहरू',
      readTime: '७ मिनेट अध्ययन',
      date: '२०८१ असोज',
      slug: 'kitta-kat-process-rules-nepal-land-reform',
      desc: 'भू-उपयोग ऐन २०७६ बमोजिम आवासीय क्षेत्रमा १३० वर्गमिटर र कृषि क्षेत्रमा ६७५ वर्गमिटर मापदण्डको विश्लेषण।'
    },
    {
      title: 'मालपोत रजिस्ट्रेसन दस्तुर, पुँजीगत लाभकर र महिला छुटको स्पष्ट हिसाब',
      readTime: '४ मिनेट अध्ययन',
      date: '२०८१ श्रावण',
      slug: 'malpot-land-registration-fee-tax-calculator-nepal',
      desc: 'जग्गा खरिद-बिक्री गर्दा लाग्ने मालपोत शुल्क, स्थानीय कर र महिलाको नाममा पास गर्दा पाइने २५% छुट।'
    }
  ];

  const quickTools = [
    { name: 'जग्गा नाप क्यालकुलेटर', href: '/tools/land-calculator' },
    { name: 'प्रिती-युनिकोड रूपान्तरण', href: '/tools/preeti-to-unicode' },
    { name: 'फोटो कम्प्रेसर (<२००KB)', href: '/tools/image-compressor' },
    { name: 'तस्विरबाट A4 PDF', href: '/tools/images-to-pdf' },
    { name: 'मालपोत कर क्यालकुलेटर', href: '/tools/malpot-calculator' },
    { name: '७७ जिल्ला नापी निर्देशिका', href: '/tools/survey-offices' },
  ];

  return (
    <div className="space-y-16 max-w-5xl mx-auto font-sans">
      
      {/* 1. Serene Editorial Masthead */}
      <header className="border-b border-stone-300 dark:border-stone-800 pb-8 pt-4 text-center space-y-4">
        <div className="flex items-center justify-between text-xs text-stone-500 font-mono tracking-widest uppercase border-b border-stone-200 dark:border-stone-800 pb-3">
          <span>काठमाडौँ, नेपाल</span>
          <span>भू-सूचना तथा डिजिटल नापी स्तम्भ</span>
          <span>अंक २०२६</span>
        </div>

        <div className="py-4 space-y-2">
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-stone-900 dark:text-stone-100 tracking-tight">
            बी. आर. भट्टा
          </h1>
          <p className="text-xs sm:text-sm font-serif italic text-stone-600 dark:text-stone-400 max-w-md mx-auto">
            सटीक भूमि मापन, प्राविधिक निर्देशिका, र नागरिक सहायताको डिजिटल सङ्ग्रह।
          </p>
        </div>

        <div className="flex justify-center">
          <TithiWidget />
        </div>
      </header>

      {/* 2. Two-Column Intellectual & Practical Spread */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: The Quiet Precision Tool */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-widest text-stone-500">
              डिजिटल औजार
            </span>
            <h2 className="text-2xl font-serif text-stone-900 dark:text-stone-100">
              जग्गा क्षेत्रफल हिसाब तथा रूपान्तरण
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              नेपाली परम्परागत एकाइहरू (रोपनी, आना, पैसा, दाम र बिघा, कट्ठा, धुर) लाई अन्तर्राष्ट्रिय प्रणालीमा शुद्ध रूपान्तरण गर्नुहोस्।
            </p>
          </div>

          <div className="bg-stone-50 dark:bg-stone-900/60 rounded-2xl border border-stone-200 dark:border-stone-800 p-5 sm:p-7 shadow-xs">
            <LandCalculator />
          </div>

          {/* Quiet Quick Index */}
          <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
            <h4 className="text-xs font-mono uppercase text-stone-500 tracking-wider mb-3">
              द्रुत औजार सूची:
            </h4>
            <div className="flex flex-wrap gap-2">
              {quickTools.map((qt, i) => (
                <Link
                  key={i}
                  href={qt.href}
                  className="px-3 py-1.5 rounded-full text-xs bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition border border-stone-200/60 dark:border-stone-700/60"
                >
                  {qt.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Curated Land Law Insights */}
        <div className="lg:col-span-5 space-y-8 lg:border-l lg:border-stone-200 lg:dark:border-stone-800 lg:pl-8">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-widest text-stone-500">
              प्राविधिक स्तम्भ
            </span>
            <h3 className="text-2xl font-serif text-stone-900 dark:text-stone-100">
              नागरिक जानकारी तथा लेखहरू
            </h3>
          </div>

          <div className="space-y-6 divide-y divide-stone-200 dark:divide-stone-800">
            {articles.map((art, idx) => (
              <article key={idx} className={idx > 0 ? 'pt-6' : ''}>
                <div className="flex items-center gap-2 text-[11px] font-mono text-stone-500 mb-1">
                  <span>{art.date}</span>
                  <span>&bull;</span>
                  <span>{art.readTime}</span>
                </div>
                <h4 className="text-base font-serif font-bold text-stone-900 dark:text-stone-100 hover:text-stone-600 transition leading-snug">
                  <Link href={`/articles/${art.slug}`}>
                    {art.title}
                  </Link>
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
                  {art.desc}
                </p>
                <Link
                  href={`/articles/${art.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-stone-800 dark:text-stone-200 hover:underline mt-2"
                >
                  <span>विस्तृत पढ्नुहोस्</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </article>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 space-y-2">
            <h5 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-sm">
              नापी वा मालपोत सम्बन्धी जिज्ञासा छ?
            </h5>
            <p className="text-xs text-stone-600 dark:text-stone-400">
              ऐन-नियम, कित्ताकाट वा प्राविधिक विषयमा परामर्शका लागि सिधै सम्पर्क गर्न सक्नुहुन्छ।
            </p>
            <Link
              href="/contact"
              className="inline-block text-xs font-bold text-stone-900 dark:text-stone-100 underline pt-1"
            >
              सम्पर्क फारम खोल्नुहोस् &rarr;
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}
