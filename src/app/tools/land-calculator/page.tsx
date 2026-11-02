import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LandCalculator from '@/components/LandCalculator';
import SocialShareBar from '@/components/SocialShareBar';
import { 
  Calculator, 
  ArrowLeft, 
  BookOpen, 
  Sparkles, 
  Scale, 
  Info,
  Table,
  HelpCircle,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'नेपाल अनलाइन जग्गा क्यालकुलेटर (Ropani to Bigha Converter) | BR Bhatta',
  description: 'नेपालको आधिकारिक जग्गा नापजाँच क्यालकुलेटर। रोपनी, आना, पैसा, दाम र बिघा, कट्ठा, धुरबीच १००% सटीक रूपान्तरण, वर्गफिट, वर्गमिटर र जग्गाको मूल्य निर्धारण। गुगल फिचर्ड स्निपेट्स क्विक आन्सर सहित।',
  keywords: [
    'Nepal Land Calculator',
    'Ropani to Bigha Converter',
    '1 aana in sq ft',
    '1 ropani in sq ft',
    '1 bigha in ropani',
    '1 kattha in sq ft',
    '1 dhur in sq ft',
    'Aana to Sqft Calculator',
    'Bigha to Katha Dhur',
    'Land Measurement Nepal Formula',
    'जग्गा नापजाँच क्यालकुलेटर',
    'रोपनी आना पैसा दाम',
    'बिघा कट्ठा धुर'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/land-calculator',
  },
  openGraph: {
    title: 'नेपाल अनलाइन जग्गा क्यालकुलेटर (रोपनी ⇄ बिघा ⇄ वर्गफिट) | BR Bhatta',
    description: 'नेपालमा जग्गा नापजाँच, रोपनी-आना र बिघा-कट्ठा रूपान्तरण, प्रति आना/धुर मूल्य निर्धारण र प्रत्यक्ष कन्भर्सन म्याट्रिक्स।',
    url: 'https://www.brbhatta.com/tools/land-calculator',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function StandaloneLandCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/land-calculator#app',
        name: 'नेपाल जग्गा नापजाँच तथा रूपान्तरण क्यालकुलेटर',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        url: 'https://www.brbhatta.com/tools/land-calculator',
        description: 'Official online land unit converter for Nepal supporting Ropani-Aana-Paisa-Daam and Bigha-Katha-Dhur systems.',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/land-calculator#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: '१ आनामा कति वर्गफिट र वर्गमिटर हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'नेपालको पहाडी नाप प्रणाली अनुसार १ आनामा ठ्याक्कै ३४२.२५ वर्गफिट (३१.८० वर्गमिटर) हुन्छ। १ आनामा ४ पैसा वा १६ दाम हुन्छ भने १६ आना बराबर १ रोपनी हुन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: '१ रोपनीमा कति वर्गफिट र वर्गमिटर हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '१ रोपनीमा ठ्याक्कै ५,४७६ वर्गफिट (५०८.७२ वर्गमिटर) हुन्छ। १ रोपनीमा १६ आना, ६४ पैसा र २५६ दाम हुन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: '१ बिघामा कति रोपनी हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '१ बिघामा करिब १३.३१ रोपनी (१३ रोपनी ५ आना) हुन्छ। १ बिघामा ७२,९०० वर्गफिट (६,७७२.६३ वर्गमिटर) वा २० कट्ठा हुन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: '१ कट्ठामा कति वर्गफिट र आना हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '१ कट्ठामा ३,६४५ वर्गफिट (३३८.६३ वर्गमिटर) हुन्छ। पहाडी एकाइमा रूपान्तरण गर्दा १ कट्ठा बराबर १०.६५ आना (१० आना २ पैसा २ दाम) हुन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: '१ धुरमा कति वर्गफिट र वर्गमिटर हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '१ धुरमा ठ्याक्कै १८२.२५ वर्गफिट (१६.९३ वर्गमिटर) हुन्छ। १ कट्ठामा २० धुर हुन्छ र १ धुर बराबर १६ कन्वा हुन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: '१ हेक्टर जग्गामा कति रोपनी र बिघा हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '१ हेक्टर (१०,००० वर्गमिटर / १,०७,६३९ वर्गफिट) बराबर करिब १९.६६ रोपनी वा १.४७७ बिघा (१ बिघा ९ कट्ठा ११ धुर) हुन्छ।'
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
        
        {/* Breadcrumb Nav */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>उपकरणहरू (Tools Hub)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200">जग्गा क्यालकुलेटर</span>
        </div>

        {/* Embedded Full Land Calculator */}
        <LandCalculator />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="नेपाल अनलाइन जग्गा क्यालकुलेटर (रोपनी ⇄ बिघा ⇄ वर्गफिट)" 
          url="/tools/land-calculator" 
        />

        {/* Google Featured Snippets Quick Answers Grid */}
        <div className="bg-linear-to-br from-emerald-50 via-teal-50/40 to-slate-50 dark:from-emerald-950/20 dark:via-slate-900 dark:to-slate-900 rounded-3xl p-6 sm:p-8 border border-emerald-200/80 dark:border-emerald-800/40 shadow-sm space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>गुगल फिचर्ड स्निपेट्स तथा त्वरित जवाफ (Quick Reference)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white pt-2">
              नेपालमा जग्गा नापजाँचका बारम्बार सोधिने प्रश्न र सीधा जवाफ
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              गुगल खोजकर्ताहरूले सबैभन्दा धेरै खोज्ने जग्गा एकाइ रूपान्तरणका आधिकारिक सरकारी तथ्याङ्क:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Snippet Card 1 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
              <h3 className="font-extrabold text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>१ आनामा कति वर्गफिट / वर्गमिटर?</span>
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>१ आना = ३४२.२५ वर्गफिट (३१.८० वर्गमिटर)</strong> हुन्छ। १ आनामा ४ पैसा र १६ दाम हुन्छ।
              </p>
            </div>

            {/* Snippet Card 2 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
              <h3 className="font-extrabold text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>१ रोपनीमा कति वर्गफिट / आना?</span>
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>१ रोपनी = ५,४७६ वर्गफिट (५०८.७२ वर्गमिटर)</strong> र ठ्याक्कै <strong>१६ आना</strong> हुन्छ।
              </p>
            </div>

            {/* Snippet Card 3 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
              <h3 className="font-extrabold text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>१ बिघामा कति रोपनी / वर्गफिट?</span>
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>१ बिघा = १३.३१ रोपनी</strong> (७२,९०० वर्गफिट / ६,७७२.६३ वर्गमिटर) र २० कट्ठा हुन्छ।
              </p>
            </div>

            {/* Snippet Card 4 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
              <h3 className="font-extrabold text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>१ कट्ठामा कति वर्गफिट / आना?</span>
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>१ कट्ठा = ३,६४५ वर्गफिट (३३८.६३ m²)</strong> हुन्छ, जुन पहाडी नाप अनुसार <strong>१०.६५ आना</strong> बराबर हुन्छ।
              </p>
            </div>

            {/* Snippet Card 5 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
              <h3 className="font-extrabold text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>१ धुरमा कति वर्गफिट / वर्गमिटर?</span>
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>१ धुर = १८२.२५ वर्गफिट (१६.९३ m²)</strong> हुन्छ। १ कट्ठामा २० धुर र १ धुरमा १६ कन्वा हुन्छ।
              </p>
            </div>

            {/* Snippet Card 6 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
              <h3 className="font-extrabold text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>१ हेक्टरमा कति रोपनी / बिघा?</span>
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>१ हेक्टर = १९.६६ रोपनी</strong> (१.४७७ बिघा / १०,००० वर्गमिटर / १,०७,६३९ वर्गफिट) हुन्छ।
              </p>
            </div>
          </div>
        </div>

        {/* Comprehensive Direct Conversion Matrix Table */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5">
            <Table className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              नेपालका मुख्य जग्गा एकाइहरूको प्रत्यक्ष रूपान्तरण तालिका (Direct Lookup Matrix)
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm border-collapse border border-slate-200 dark:border-slate-800">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                  <th className="p-3 text-left border border-slate-200 dark:border-slate-700 font-bold">एकाइ (Unit)</th>
                  <th className="p-3 text-left border border-slate-200 dark:border-slate-700 font-bold">प्रणाली</th>
                  <th className="p-3 text-left border border-slate-200 dark:border-slate-700 font-bold">वर्गफिट (Sq. Ft.)</th>
                  <th className="p-3 text-left border border-slate-200 dark:border-slate-700 font-bold">वर्गमिटर (Sq. Meter)</th>
                  <th className="p-3 text-left border border-slate-200 dark:border-slate-700 font-bold">अन्य एकाइमा रूपान्तरण</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">१ रोपनी (Ropani)</td>
                  <td className="p-3 font-sans">पहाड / उपत्यका</td>
                  <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">५,४७६ sq.ft</td>
                  <td className="p-3">५०८.७२ m²</td>
                  <td className="p-3 font-sans">१६ आना = ६४ पैसा = ३०.०४ धुर (०.०७५ बिघा)</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 bg-slate-50/50 dark:bg-slate-850/50">
                  <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">१ आना (Aana)</td>
                  <td className="p-3 font-sans">पहाड / उपत्यका</td>
                  <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">३४२.२५ sq.ft</td>
                  <td className="p-3">३१.८० m²</td>
                  <td className="p-3 font-sans">४ पैसा = १६ दाम = १.८८ धुर</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">१ पैसा (Paisa)</td>
                  <td className="p-3 font-sans">पहाड / उपत्यका</td>
                  <td className="p-3">८५.५६ sq.ft</td>
                  <td className="p-3">७.९५ m²</td>
                  <td className="p-3 font-sans">४ दाम = ०.२५ आना = ०.४७ धुर</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 bg-slate-50/50 dark:bg-slate-850/50">
                  <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">१ दाम (Daam)</td>
                  <td className="p-3 font-sans">पहाड / उपत्यका</td>
                  <td className="p-3">२१.३९ sq.ft</td>
                  <td className="p-3">१.९९ m²</td>
                  <td className="p-3 font-sans">०.२५ पैसा = ०.०६२५ आना = ०.१२ धुर</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">१ बिघा (Bigha)</td>
                  <td className="p-3 font-sans">तराई / मधेस</td>
                  <td className="p-3 text-sky-600 dark:text-sky-400 font-bold">७२,९०० sq.ft</td>
                  <td className="p-3">६,७७२.६३ m²</td>
                  <td className="p-3 font-sans">२० कट्ठा = ४०० धुर = १३.३१ रोपनी</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 bg-slate-50/50 dark:bg-slate-850/50">
                  <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">१ कट्ठा (Kattha)</td>
                  <td className="p-3 font-sans">तराई / मधेस</td>
                  <td className="p-3 text-sky-600 dark:text-sky-400 font-bold">३,६४५ sq.ft</td>
                  <td className="p-3">३३८.६३ m²</td>
                  <td className="p-3 font-sans">२० धुर = ०.०५ बिघा = १०.६५ आना (०.६६ रोपनी)</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">१ धुर (Dhur)</td>
                  <td className="p-3 font-sans">तराई / मधेस</td>
                  <td className="p-3">१८२.२५ sq.ft</td>
                  <td className="p-3">१६.९३ m²</td>
                  <td className="p-3 font-sans">१६ कन्वा = ०.०५ कट्ठा = ०.५३ आना (२.१३ पैसा)</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 bg-slate-50/50 dark:bg-slate-850/50">
                  <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">१ हेक्टर (Hectare)</td>
                  <td className="p-3 font-sans">अन्तर्राष्ट्रिय / मिट्रिक</td>
                  <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">१,०७,६३९ sq.ft</td>
                  <td className="p-3 font-bold">१०,००० m²</td>
                  <td className="p-3 font-sans">१९.६६ रोपनी = १.४७७ बिघा (१ बिघा ९ कट्ठा ११ धुर)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <span>
              <strong>नापी विभागको मापदण्ड:</strong> जग्गाको क्षेत्रफल नाप्दा नापी टोलीले जहिले पनि मिट्रिक प्रणाली (वर्गमिटर) मा फिल्डबुक कायम गर्छ र त्यसलाई लालपुर्जामा पहाडमा रोपनी-आना र तराईमा बिघा-कट्ठामा रूपान्तरण गर्दछ।
            </span>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
