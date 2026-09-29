import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SentinelSatelliteViewer from '@/components/SentinelSatelliteViewer';
import SocialShareBar from '@/components/SocialShareBar';
import { ArrowLeft, Satellite, Sparkles, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ताजा ५-दिने स्याटेलाइट सन्दर्भ भ्युअर (Sentinel-2 Latest Satellite Reference Nepal) | BR Bhatta',
  description: 'युरोपेली अन्तरिक्ष एजेन्सी (ESA) को Sentinel-2 उपग्रहबाट नेपालको ताजा ५-दिने तस्विर हेर्नुहोस्। नयाँ बाटो, नदी कटान, बाढी/पहिरो र जग्गाको पछिल्लो अवस्था अनुगमन र समयरेखा तुलना।',
  keywords: [
    'Sentinel-2 Nepal Satellite',
    'Latest Satellite Image Nepal',
    'Nepal Fresh Satellite Viewer',
    'ताजा स्याटेलाइट तस्विर नेपाल',
    'European Space Agency Nepal',
    'Nepal River Flood Satellite Monitoring',
    'New Road Cutting Satellite Tracker Nepal',
    'Land Solution Satellite Tool',
    'Cadastral Satellite Reference Nepal'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/satellite-viewer',
  },
  openGraph: {
    title: 'नेपाल ताजा ५-दिने स्याटेलाइट भ्युअर (ESA Sentinel-2) | Live Land Satellite Reference',
    description: 'नेपालभरिका नयाँ बाटो, खोलाको बहाव र जग्गाको ताजा अवस्था हरेक ५ दिनमा अपडेट हुने सेन्टिनेल-२ स्याटेलाइटबाट निःशुल्क हेर्नुहोस्।',
    url: 'https://www.brbhatta.com/tools/satellite-viewer',
    siteName: 'BR Bhatta & Land Solution',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function SatelliteViewerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'नेपाल ताजा ५-दिने स्याटेलाइट सन्दर्भ भ्युअर (Sentinel-2 Satellite Viewer Nepal)',
    applicationCategory: 'GeographicApplication',
    operatingSystem: 'All',
    url: 'https://www.brbhatta.com/tools/satellite-viewer',
    description: 'Interactive near real-time 5-day revisit satellite imagery viewer for Nepal utilizing European Space Agency Copernicus Sentinel-2 10-meter optical data and timeline comparisons.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'NPR',
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
        
        {/* Breadcrumb Nav */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>उपकरणहरू (Tools Hub)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200">ताजा स्याटेलाइट सन्दर्भ (Sentinel-2)</span>
        </div>

        {/* The Interactive Sentinel-2 Satellite Viewer Component */}
        <SentinelSatelliteViewer />

        {/* Social Share Bar */}
        <div className="pt-2">
          <SocialShareBar 
            title="नेपाल ताजा ५-दिने स्याटेलाइट सन्दर्भ भ्युअर (Sentinel-2) - नयाँ बाटो, खोलाको बहाव र जग्गाको पछिल्लो अवस्था"
            url="/tools/satellite-viewer"
          />
        </div>

        {/* Educational / Technical Deep Dive Guide */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          
          <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Sentinel-2 स्याटेलाइट र नापी/जग्गा सन्दर्भ सम्बन्धी जानकारी
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                इन्जिनियर, अमिन तथा जग्गा खरिद-बिक्रीकर्ताका लागि प्राविधिक मार्गदर्शन
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600 dark:text-slate-300">
            
            <div className="space-y-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>१. गुगल नक्सा भन्दा किन उपयोगी?</span>
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                गुगल म्याप वा एश्रीमा देखिने स्याटेलाइट फोटोहरू १ देखि ३ वर्ष पुराना हुन सक्छन्। तर युरोपेली अन्तरिक्ष एजेन्सी (ESA) का दुईवटा भू-उपग्रह (Sentinel-2A र 2B) ले हरेक ५ दिनमा नेपालको सम्पूर्ण भूगोलको नयाँ अप्टिकल फोटो खिच्दछन्।
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>२. १० मिटर रिजोल्युसनको अर्थ</span>
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Sentinel-2 को १ पिक्सेल जमिनमा १०×१० मिटरको हुन्छ। यसबाट कित्ताको किल्ला वा साँध नाप्न मिल्दैन तर नयाँ बाटो खनेको, खोला बगेको, ठूला भवन/संरचना बनेको, र वन विनाश प्रष्ट पहिचान हुन्छ।
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>३. खोला र नदी कटानको अनुगमन</span>
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                तराईका खोलाहरूले वर्षायाममा धार बदल्ने हुनाले जग्गा बगर बन्ने वा डुबानमा पर्ने जोखिम हुन्छ। यो टूलमार्फत बाढी अघि र पछिको स्याटेलाइट फोटो तथा समयरेखा (Timeline) हेरेर वास्तविक अवस्था जाँच्न सकिन्छ।
              </p>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
