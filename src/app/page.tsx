import NepaliTithiClockBar from '@/components/NepaliTithiClockBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LandSolutionSection from '@/components/LandSolutionSection';
import HamroKoshSection from '@/components/HamroKoshSection';
import AutoCADLspSection from '@/components/AutoCADLspSection';
import PostsSection from '@/components/PostsSection';
import FAQSection from '@/components/FAQSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NepaliTithiClockBar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LandSolutionSection />
        <HamroKoshSection />
        <AutoCADLspSection />
        <PostsSection />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
