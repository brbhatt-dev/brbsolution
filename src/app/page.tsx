import Navbar from '@/components/Navbar';
import ToolsAppDashboard from '@/components/ToolsAppDashboard';
import KnowledgeBaseSection from '@/components/KnowledgeBaseSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10 w-full">
        
        {/* Slim, Minimalist Web-App Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>नेपालको आधिकारिक डिजिटल नापी तथा डकुमेन्ट वेब-एप</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            जग्गा नापजाँच, PDF स्टुडियो तथा <span className="text-emerald-600 dark:text-emerald-400">डिजिटल उपकरणहरू</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            नापी अमिन, इन्जिनियर, कानुन व्यवसायी तथा जग्गाधनीहरूका लागि भरपर्दो जग्गा क्यालकुलेटर, मालपोत कर, Preeti to Unicode, र PDF स्टुडियो।
          </p>
        </div>

        {/* Master Interactive Tools App Dashboard */}
        <ToolsAppDashboard />

        {/* Informative Guidance & Articles */}
        <KnowledgeBaseSection />

        {/* Direct Contact Form */}
        <Contact />

      </main>

      <Footer />
    </div>
  );
}
