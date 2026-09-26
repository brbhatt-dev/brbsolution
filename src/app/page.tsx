import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyleCitizenPortal from '@/components/demos/StyleCitizenPortal';
import KnowledgeBaseSection from '@/components/KnowledgeBaseSection';
import Contact from '@/components/Contact';
import Link from 'next/link';
import { Crown, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* Subtle, sleek demo showroom quick-link ribbon */}
      <div className="bg-slate-900 text-white px-4 py-2 text-xs border-b border-slate-800 notranslate" translate="no">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-semibold text-emerald-400">नागरिक सेवा हब (Citizen Utility Portal)</span>
            <span className="text-slate-400 hidden sm:inline">&bull; आधिकारिक डिजिटल नापी तथा डकुमेन्ट प्लेटफर्म</span>
          </div>
          <Link
            href="/demo"
            className="text-slate-300 hover:text-amber-300 font-medium flex items-center gap-1.5 transition-colors"
          >
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px]">२७ वटा डिजाइन हेर्नुहोस्</span>
            <ArrowRight className="w-3 h-3 text-slate-400" />
          </Link>
        </div>
      </div>

      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 w-full">
        {/* Full Demo 2: Citizen Utility Hub Core (Greeting, Quick Tiles, Precision Calculator, Directory, Mobile Apps) */}
        <StyleCitizenPortal />

        {/* Informative Guidance & Articles */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800">
          <KnowledgeBaseSection />
        </div>

        {/* Direct Contact & Feedback Form */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
