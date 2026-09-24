import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductHubTabs from '@/components/ProductHubTabs';
import LandCalculator from '@/components/LandCalculator';
import TestimonialsSection from '@/components/TestimonialsSection';
import KnowledgeBaseSection from '@/components/KnowledgeBaseSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/40 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductHubTabs />
        <LandCalculator />
        <TestimonialsSection />
        <KnowledgeBaseSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
