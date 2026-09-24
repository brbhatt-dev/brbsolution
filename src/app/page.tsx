import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductHubTabs from '@/components/ProductHubTabs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/40">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductHubTabs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
