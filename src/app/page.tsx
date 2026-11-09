import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import StyleCitizenPortal from '@/components/demos/StyleCitizenPortal';
import DosNoticesWidget from '@/components/DosNoticesWidget';
import { HomeEnglishDocumentation } from '@/components/BilingualEnglishGuide';
import Contact from '@/components/Contact';
import HomeFooter from '@/components/HomeFooter';

export const metadata: Metadata = {
  title: 'BR Bhatta | Land Solution, Hamro Kosh & Tech Innovations Nepal',
  description: 'Official portal of BR Bhatta. Creator of Land Solution (नेपाल जग्गा नापजाँच तथा कित्ताकाट एप), Hamro Kosh (बचत कोष एप), and free AutoCAD LSP automation scripts for engineers and surveyors in Nepal.',
  alternates: {
    canonical: 'https://www.brbhatta.com',
  },
  openGraph: {
    title: 'BR Bhatta | Land Solution & Tech Innovations Nepal',
    description: 'Land Solution (नापजाँच तथा कित्ताकाट एप), Hamro Kosh, and AutoCAD LSP scripts for Nepal land surveying.',
    url: 'https://www.brbhatta.com',
    siteName: 'BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-8 sm:space-y-10 w-full">
        {/* Full Demo 2: Citizen Utility Hub Core (Greeting, Quick Tiles, Precision Calculator, Directory, Mobile Apps) */}
        <StyleCitizenPortal />

        {/* Real-Time Survey Department Live Notices */}
        <DosNoticesWidget maxItems={4} showSearch={false} />

        {/* Official Bilingual English & Nepali Technical Overview for International & AdSense Compliance */}
        <HomeEnglishDocumentation />

        {/* Direct Contact & Feedback Form */}
        <Contact />
      </main>

      {/* Modern Obsidian-Emerald Home Footer with Safe Clearance */}
      <HomeFooter />
    </div>
  );
}
