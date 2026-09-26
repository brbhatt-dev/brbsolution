import Navbar from '@/components/Navbar';
import StyleCitizenPortal from '@/components/demos/StyleCitizenPortal';
import KnowledgeBaseSection from '@/components/KnowledgeBaseSection';
import Contact from '@/components/Contact';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-8 sm:space-y-10 w-full">
        {/* Full Demo 2: Citizen Utility Hub Core (Greeting, Quick Tiles, Precision Calculator, Directory, Mobile Apps) */}
        <StyleCitizenPortal />

        {/* Informative Guidance & Articles */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800">
          <KnowledgeBaseSection />
        </div>

        {/* Direct Contact & Feedback Form */}
        <Contact />
      </main>


      {/* Sleek Minimal 1-Line Footer (Zero Duplication) */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 py-6 px-4 bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 notranslate" translate="no">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-slate-800 dark:text-white font-bold">BR Bhatta</strong> (brbhatta.com). सर्वाधिकार सुरक्षित।
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px]">
            <Link href="/about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
              हाम्रो बारेमा (About Us)
            </Link>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">&bull;</span>
            <Link href="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
              सम्पर्क (Contact)
            </Link>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">&bull;</span>
            <Link href="/privacy-policy" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
              गोपनीयता नीति (Privacy Policy)
            </Link>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">&bull;</span>
            <Link href="/terms" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
              प्रयोगका सर्तहरू (Terms)
            </Link>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">&bull;</span>
            <Link href="/disclaimer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
              अस्वीकरण (Disclaimer)
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
