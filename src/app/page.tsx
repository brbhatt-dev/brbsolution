import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyleCitizenPortal from '@/components/demos/StyleCitizenPortal';
import KnowledgeBaseSection from '@/components/KnowledgeBaseSection';
import Contact from '@/components/Contact';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

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

      {/* Floating Builder Launcher Pill */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link
          href="/builder"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs shadow-2xl border-2 border-emerald-500 hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 group"
        >
          <Sparkles className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
          <span>🛠️ Live Builder (सम्पादक खोल्नुहोस्)</span>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
