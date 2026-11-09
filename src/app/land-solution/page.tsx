import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Compass, 
  MapPin, 
  Layers, 
  Calculator, 
  Maximize2, 
  Download, 
  Smartphone, 
  CheckCircle2, 
  ExternalLink, 
  ArrowLeft,
  ShieldCheck,
  Globe
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LAND_SOLUTION_PLAY_STORE_URL } from '@/lib/land-solution-release';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.brbhatta.com/land-solution',
  },
  title: 'Land Solution (Official Google Play App) - नेपाल जग्गा नापजाँच र कित्ताकाट एप | BR Bhatta',
  description: 'Download Land Solution from Google Play Store. नेपालका ७५३ स्थानीय तह, वडा नक्सा, कित्ताकाट, क्षेत्रफल गणना, Ropani-Bigha रूपान्तरण तथा ३D घर नक्सा प्रणालीको आधिकारिक एन्ड्रोइड एप।',
  keywords: [
    'Land Solution Nepal',
    'ल्याण्ड सोलुसन',
    'जग्गा नापजाँच सफ्टवेयर',
    'कित्ताकाट एप',
    'Nepal Land Measurement App',
    'Ropani Bigha Converter',
    'Cadastral Map Nepal',
    'com.brbhatta.landsolution',
    'BR Bhatta Land Solution'
  ],
  openGraph: {
    title: 'Land Solution (Official App on Google Play) - नेपाल जग्गा नापजाँच तथा कित्ताकाट एप',
    description: 'नेपालको पहिलो अल-इन-वान डिजिटल जग्गा नापजाँच, कित्ताकाट र ३D नक्सा एन्ड्रोइड एप Google Play Store मा उपलब्ध।',
    url: 'https://www.brbhatta.com/land-solution',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'en_US',
    type: 'website',
  },
};

export default function LandSolutionPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Land Solution',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Android',
    url: 'https://www.brbhatta.com/land-solution',
    downloadUrl: LAND_SOLUTION_PLAY_STORE_URL,
    installUrl: LAND_SOLUTION_PLAY_STORE_URL,
    author: {
      '@type': 'Person',
      name: 'BR Bhatta',
      url: 'https://www.brbhatta.com/about'
    },
    description: 'Official Nepal land measurement, unit conversion (Ropani-Aana & Bigha-Katha), plot subdivision (Kitta-kat), and cadastral surveying Android application.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'NPR'
    },
  };

  const modules = [
    {
      title: '१. Plotter (जग्गा क्षेत्रफल नाप)',
      en: 'Triangle & Polygon Area Plotter',
      desc: 'त्रिभुज विधि (Heron Formula) वा को-अर्डिनेटबाट विषम कोण भएका जग्गाको वास्तविक क्षेत्रफल रोपनी, आना, पैसा, दाम वा बिघा, कट्ठा, धुरमा निकाल्ने।'
    },
    {
      title: '२. Plotter Pro (कित्ताकाट तथा अंशबन्डा)',
      en: 'Automated Land Subdivision (Kitta-Kat)',
      desc: 'जग्गालाई २ वा सोभन्दा बढी कित्तामा बराबर क्षेत्रफल वा तोकिएको अनुपातमा अंशबन्डा तथा प्लटिङ रेखांकन गर्ने।'
    },
    {
      title: '३. Converter (एकाइ रूपान्तरण)',
      en: 'Instant Cadastral Unit Converter',
      desc: 'रोपनी-आना-पैसा-दाम, बिघा-कट्ठा-धुर, वर्गफिट र वर्गमिटरबीच १००% शुद्धताका साथ तुरुन्त रूपान्तरण।'
    },
    {
      title: '४. Stake Out (GPS सिमाना ट्र्याकिङ)',
      en: 'Real-Time GPS Boundary Stakeout',
      desc: 'फिल्डमा जग्गाको सिमानाका बिन्दुहरू मोबाइलको जीपीएसको सहायताले ठ्याक्कै पत्ता लगाउने।'
    },
    {
      title: '५. Shapefile & KML नक्सा भ्युअर',
      en: 'GIS Shapefile (.shp) & KML Viewer',
      desc: 'नापी तथा GIS का .shp र Google Earth का .kml फाइलहरू सिधै मोबाइल नक्सामा लोड गरी हेर्ने।'
    },
    {
      title: '६. 3D House Design (घर नक्सा)',
      en: '3D Architectural Blueprints & Setback',
      desc: 'जग्गाको आकार अनुसार ३D घरको मोडेल, कोठाको बनोट र बाटोको मापदण्ड (Setback) परीक्षण गर्ने।'
    },
    {
      title: '७. Sheet Coords (सिट निर्देशाङ्क)',
      en: 'MUTM Cadastral Sheet Coordinates',
      desc: 'नेपाल नापी सिट नम्बर र ट्रान्सभर्स मर्केटर (MUTM Central Meridian 81°/84°/87°) को-अर्डिनेट हिसाब गर्ने।'
    },
    {
      title: '८. ७५३ स्थानीय तह र वडा नक्सा',
      en: 'All 753 Local Levels & Ward Boundaries',
      desc: 'नेपालका ७७ जिल्ला र ७५३ वटै स्थानीय तहका वडा सिमाना तथा भौगोलिक विवरण समावेश।'
    },
    {
      title: '९. अफलाइन र १००% सुरक्षित',
      en: '100% Offline Ready Field Utility',
      desc: 'इन्टरनेट नभएको दुर्गम फिल्डमा पनि बिना अवरोध जग्गा नापजाँच र हिसाब सुरक्षित रूपमा गर्न सकिने।'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 w-full">
        
        {/* Hero Banner Card */}
        <section className="rounded-3xl bg-gradient-to-br from-emerald-900 via-slate-900 to-teal-950 text-white p-6 sm:p-10 border border-emerald-700/40 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                <Smartphone className="w-3.5 h-3.5" />
                <span>OFFICIAL ANDROID APP • NOW LIVE ON GOOGLE PLAY</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                Land Solution — नेपालको आधिकारिक जग्गा नापजाँच तथा कित्ताकाट मोबाइल एप
              </h1>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                अमिन (सर्भेक्षक), सिभिल इन्जिनियर, घरजग्गा व्यवसायी तथा जग्गाधनीहरूका लागि निर्मित नेपालको नं. १ डिजिटल जग्गा नापजाँच, कित्ताकाट (Plot Subdivision), रोपनी-बिघा रूपान्तरण र ३D नक्सा सफ्टवेयर अब आधिकारिक रूपमा <strong>Google Play Store</strong> मा उपलब्ध छ।
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={LAND_SOLUTION_PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm flex items-center gap-2.5 shadow-lg shadow-emerald-500/25 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Google Play Store बाट डाउनलोड गर्नुहोस्</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  href="/tools/land-calculator"
                  className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm flex items-center gap-2 border border-white/20 transition-all"
                >
                  <Calculator className="w-4 h-4 text-emerald-300" />
                  <span>वेब क्यालकुलेटर चलाउनुहोस्</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-950/70 border border-emerald-500/30 text-center space-y-3">
              <div className="w-24 h-24 rounded-3xl bg-white p-2.5 shadow-xl flex items-center justify-center">
                <img src="/logo.png" alt="Land Solution Official Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h2 className="text-lg font-black text-white">Land Solution</h2>
                <p className="text-xs text-emerald-400 font-mono">com.brbhatta.landsolution</p>
              </div>
              <div className="text-[11px] text-slate-300 space-y-1">
                <p>✓ १००% निःशुल्क र अफलाइन सपोर्ट</p>
                <p>✓ ७५३ स्थानीय तह र वडा नक्सा</p>
                <p>✓ Google Play Protect प्रमाणित</p>
              </div>
              <a
                href={LAND_SOLUTION_PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-white text-slate-950 hover:bg-emerald-50 font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
              >
                <span>Install on Google Play</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* 9 Core Feature Modules Grid */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Land Solution एपका प्रमुख विशेषता तथा मोड्युलहरू (Key Modules)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              फिल्डमा जग्गा नाप्दा र अफिसमा नक्सांकन गर्दा चाहिने सम्पूर्ण प्राविधिक औजारहरू एउटै एपमा:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-emerald-700 dark:text-emerald-400 text-sm">
                    {m.title}
                  </h3>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                </div>
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  {m.en}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bilingual English Technical Overview for International & AdSense Compliance */}
        <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
            <Globe className="w-4 h-4" />
            <span>Official English Documentation &amp; Technical Specifications</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
            About Land Solution (com.brbhatta.landsolution) — Nepal Cadastral Surveying &amp; Land Measurement App
          </h2>
          <p>
            <strong>Land Solution</strong> is a professional geometric land surveying, cadastral unit conversion, and plot partitioning mobile application developed by surveyor and software engineer <strong>Bhakta Raj Bhatt (BR Bhatta)</strong>. Available officially on the <a href={LAND_SOLUTION_PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 font-semibold underline">Google Play Store</a>, the application bridges traditional Nepalese land measurement standards with modern GIS and satellite positioning workflows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Supported Measurement &amp; Coordinate Systems</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li><strong>Hilly System:</strong> Ropani, Aana, Paisa, Daam (1 Ropani = 5,476 sq. ft. = 508.737 m&sup2;).</li>
                <li><strong>Terai System:</strong> Bigha, Katha, Dhur, Kanwa (1 Bigha = 72,900 sq. ft. = 6,772.63 m&sup2;).</li>
                <li><strong>Projections:</strong> Modified Universal Transverse Mercator (MUTM 81&deg;, 84&deg;, 87&deg; Central Meridians) and WGS84 GPS coordinates.</li>
              </ul>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Data Privacy &amp; Government Disclaimer</h3>
              <p className="text-xs">
                Land Solution is an independent surveying utility and is not affiliated with the Government of Nepal. All geometric calculations, coordinate transformations, and KML/Shapefile renders execute locally on the user&apos;s device with full offline capability. Read our full <Link href="/privacy-policy" className="text-emerald-600 dark:text-emerald-400 underline font-semibold">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
