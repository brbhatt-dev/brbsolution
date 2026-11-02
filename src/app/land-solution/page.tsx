import type { Metadata } from 'next';
import LandSolutionFullApp from '@/components/LandSolutionFullApp';
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
  HelpCircle, 
  ExternalLink, 
  ArrowLeft 
} from 'lucide-react';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.brbhatta.com/land-solution',
  },
  title: 'Land Solution (पूर्ण संस्करण) - नेपाल जग्गा नापजाँच, कित्ताकाट तथा ३D नक्सा | BR Bhatta',
  description: 'Land Solution आधिकारिक पूर्ण संस्करण। नेपालका ७५३ स्थानीय तह, वडा नक्सा, कित्ताकाट, क्षेत्रफल गणना, Ropani-Bigha रूपान्तरण तथा ३D घर नक्सा प्रणाली। iPhone, iPad, Android र PC बाट चलाउनुहोस्।',
  keywords: [
    'Land Solution Nepal',
    'ल्याण्ड सोलुसन',
    'जग्गा नापजाँच सफ्टवेयर',
    'कित्ताकाट एप',
    'Nepal Land Measurement App',
    'Ropani Bigha Converter',
    'Cadastral Map Nepal',
    'AutoCAD LISP Nepal',
    'BR Bhatta Land Solution'
  ],
  appleWebApp: {
    capable: true,
    title: 'Land Solution',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: '/logo.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Land Solution (पूर्ण संस्करण) - नेपाल जग्गा नापजाँच तथा कित्ताकाट सफ्टवेयर',
    description: 'नेपालको पहिलो अल-इन-वान डिजिटल जग्गा नापजाँच, कित्ताकाट र ३D नक्सा सफ्टवेयर।',
    url: 'https://www.brbhatta.com/land-solution',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function LandSolutionPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Land Solution Nepal',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android, iOS, Windows',
    url: 'https://www.brbhatta.com/land-solution',
    author: {
      '@type': 'Person',
      name: 'BR Bhatta',
      url: 'https://www.brbhatta.com/about'
    },
    description: 'नेपालको आधिकारिक डिजिटल जग्गा नापजाँच, कित्ताकाट (Subdivision), सिट निर्देशाङ्क रूपान्तरण र ३D नक्सांकन सफ्टवेयर।',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'NPR'
    },
    featureList: [
      'जग्गा क्षेत्रफल त्रिभुज नाप (Plotter & Area Calculation)',
      'कित्ताकाट रेखांकन (Land Subdivision / Kitta-kat)',
      'रोपनी, आना, पैसा, दाम र बिघा, कट्ठा, धुर स्वचालित रूपान्तरण',
      'जीपीएस जग्गा सिमाना ट्र्याकिङ (GPS Stake Out)',
      'सेपफाइल (Shapefile) तथा KML नक्सा भ्युअर',
      '३D घर नक्सा डिजाइन (3D House Design)',
      'नापी सिट निर्देशाङ्क (Sheet Coordinates Calculator)'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Interactive Full Web Application for Browsers with JavaScript */}
      <LandSolutionFullApp />

      {/* Pure Static No-JS & Search Crawler Fallback (100% Crawlable & Semantic) */}
      <noscript>
        <div className="min-h-screen bg-slate-950 text-slate-100 p-6 sm:p-12 space-y-10 max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-6">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Land Solution Logo" width="56" height="56" className="rounded-2xl border border-slate-700" />
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-white">Land Solution Nepal</h1>
                <p className="text-xs sm:text-sm text-emerald-400 font-bold">नेपालको आधिकारिक जग्गा नापजाँच तथा कित्ताकाट प्रणाली</p>
              </div>
            </div>
            <a 
              href="/" 
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white border border-slate-700"
            >
              मुख्य पेजमा फर्कनुहोस्
            </a>
          </div>

          {/* Alert Notice */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed">
            <strong>सूचना (Notice):</strong> Land Solution को पूर्ण इन्टरएक्टिभ क्यानभास, जीपीएस नक्सा र ३D इन्जिन चलाउनका लागि तपाईंको ब्राउजरमा JavaScript सक्षम (Enable) हुनुपर्दछ। तथापि, सफ्टवेयरका सम्पूर्ण विवरण, प्रयोग गर्ने विधि र सूत्रहरू तल पढ्न सक्नुहुन्छ:
          </div>

          {/* Overview & Purpose */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-white">ल्याण्ड सोलुसन (Land Solution) के हो?</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong>Land Solution</strong> नेपालका अमिन (सर्भेक्षक), इन्जिनियर, घरजग्गा व्यवसायी तथा जग्गाधनीहरूका लागि तयार पारिएको अत्याधुनिक वेब तथा मोबाइल सफ्टवेयर हो। यसले नेपालको परम्परागत पहाडी प्रणाली (रोपनी, आना, पैसा, दाम) र तराई प्रणाली (बिघा, कट्ठा, धुर) लाई अन्तर्राष्ट्रिय मिट्रिक (वर्गमिटर, वर्गफिट) सँग जोडेर १००% सटीक क्षेत्रफल हिसाब र कित्ताकाट गर्दछ।
            </p>
          </div>

          {/* 12 Key Feature Modules */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-white">Land Solution का प्रमुख विशेषता तथा मोड्युलहरू</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <h3 className="font-bold text-emerald-400 text-sm">१. Plotter (जग्गा क्षेत्रफल नाप)</h3>
                <p className="text-slate-400">त्रिभुज विधि (Heron Formula) वा को-अर्डिनेटबाट विषम कोण भएका जग्गाको वास्तविक क्षेत्रफल निकाल्ने।</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <h3 className="font-bold text-emerald-400 text-sm">२. Plotter Pro (कित्ताकाट)</h3>
                <p className="text-slate-400">जग्गालाई २ वा सोभन्दा बढी कित्तामा बराबर क्षेत्रफल वा तोकिएको अनुपातमा अंशबन्डा तथा प्लटिङ गर्ने।</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <h3 className="font-bold text-emerald-400 text-sm">३. Converter (एकाइ रूपान्तरण)</h3>
                <p className="text-slate-400">रोपनी-आना-पैसा-दाम, बिघा-कट्ठा-धुर, वर्गफिट र वर्गमिटरबीच तुरुन्त रूपान्तरण।</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <h3 className="font-bold text-emerald-400 text-sm">४. Stake Out (GPS बिन्दु)</h3>
                <p className="text-slate-400">फिल्डमा जग्गाको सिमानाका बिन्दुहरू मोबाइलको जीपीएसको सहायताले ठ्याक्कै पत्ता लगाउने।</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <h3 className="font-bold text-emerald-400 text-sm">५. Shapefile & KML भ्युअर</h3>
                <p className="text-slate-400">नापी विभाग वा GIS का .shp र Google Earth का .kml फाइलहरू सिधै नक्सामा लोड गरी हेर्ने।</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <h3 className="font-bold text-emerald-400 text-sm">६. 3D House Design (घर नक्सा)</h3>
                <p className="text-slate-400">जग्गाको आकार अनुसार ३D घरको मोडेल, कोठाको बनोट र खुला ठाउँ (Setback) परीक्षण गर्ने।</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <h3 className="font-bold text-emerald-400 text-sm">७. Sheet Coords (सिट निर्देशाङ्क)</h3>
                <p className="text-slate-400">नेपाल नापी सिट नम्बर र ट्रान्सभर्स मर्केटर (MUTM) को-अर्डिनेट हिसाब गर्ने।</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <h3 className="font-bold text-emerald-400 text-sm">८. Area Calculator</h3>
                <p className="text-slate-400">धेरै कित्ताहरूको क्षेत्रफल एकमुष्ट जोड्ने, घटाउने र औसत निकाल्ने।</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <h3 className="font-bold text-emerald-400 text-sm">९. AutoCAD LISP एकीकरण</h3>
                <p className="text-slate-400">अटोक्यान नक्साका कित्ताहरूको क्षेत्रफल र विवरण एक क्लिकमा एक्सल वा सफ्टवेयरमा लैजाने।</p>
              </div>
            </div>
          </div>

          {/* Usage Instructions & Links */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-white">कसरी प्रयोग गर्ने?</h2>
            <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-300">
              <li>कुनै पनि आधुनिक वेब ब्राउजर (Chrome, Safari, Edge, Firefox) मा JavaScript सक्षम गर्नुहोस्।</li>
              <li>मोबाईलमा होमस्क्रिनमा राखेर (PWA) बिना इन्टरनेट पनि अफलाइन चलाउन सकिन्छ।</li>
              <li>सिधै वेब भर्सन खोल्नका लागि तलको लिङ्कमा क्लिक गर्नुहोस्:</li>
            </ol>
            <div className="pt-2">
              <a 
                href="/land-solution-demo/index.html?v=2.8.19-2314-r17" 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all"
              >
                <span>Land Solution Web App सिधै खोल्नुहोस्</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Footer note */}
          <div className="text-center text-xs text-slate-500 pt-6 border-t border-slate-800">
            © {new Date().getFullYear()} BR Bhatta. सर्वअधिकार सुरक्षित। Land Solution नेपालको आधिकारिक डिजिटल भू-नाप प्रणाली।
          </div>
        </div>
      </noscript>
    </>
  );
}
