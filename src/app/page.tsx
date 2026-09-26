import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyleCitizenPortal from '@/components/demos/StyleCitizenPortal';
import KnowledgeBaseSection from '@/components/KnowledgeBaseSection';
import Contact from '@/components/Contact';

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

      <Footer />
    </div>
  );
}
