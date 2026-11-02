import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyDisputeWizard from '@/components/PropertyDisputeWizard';
import SocialShareBar from '@/components/SocialShareBar';
import { 
  ArrowLeft, 
  Scale, 
  BookOpen, 
  HelpCircle, 
  ShieldCheck, 
  Gavel, 
  Building2, 
  AlertTriangle 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'घरजग्गा कानुनी विवाद तथा समाधान विगार्ड (Property Dispute Solver Nepal) | BR Bhatta',
  description: 'नेपालमा छिमेकीले जग्गा मिचेको, बाटो बन्द गरेको, मोही विवाद वा दाजुभाइ अंशबन्डा समस्यामा कुन सरकारी कार्यालय जाने, हदम्याद कति छ र निवेदन कसरी दिने, आधिकारिक कानुनी कार्ययोजना प्राप्त गर्नुहोस्।',
  keywords: [
    'Property Dispute Nepal',
    'जग्गा विवाद समाधान नेपाल',
    'Boundary Dispute Landlocked Road Law Nepal',
    'मुलुकी देवानी संहिता साँध सिमाना',
    'Landlocked Property Right of Way Nepal',
    'Mohi Land Partition Rules',
    'अंशबन्डा विवाद समाधान'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/property-dispute-wizard',
  },
  openGraph: {
    title: 'घरजग्गा कानुनी विवाद तथा समाधान विगार्ड | BR Bhatta',
    description: 'साँध-सिमाना, बाटो निकास, मोही र अंशबन्डा विवादमा तत्काल चाल्नुपर्ने कानुनी कदम, हदम्याद र आवश्यक कागजात चेकलिस्ट।',
    url: 'https://www.brbhatta.com/tools/property-dispute-wizard',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function PropertyDisputeWizardPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/property-dispute-wizard#app',
        name: 'नेपाल घरजग्गा कानुनी विवाद समाधान विगार्ड',
        applicationCategory: 'LegalApplication',
        operatingSystem: 'All',
        url: 'https://www.brbhatta.com/tools/property-dispute-wizard',
        description: 'Interactive legal diagnostic wizard for property boundary encroachment, landlocked roads, Mohi, and inheritance partition disputes in Nepal.',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/property-dispute-wizard#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'छिमेकीले जग्गा मिचेर घर वा पर्खाल बनाएमा सुरुमा कहाँ उजुरी गर्ने?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'सुरुमा सम्बन्धित नापी कार्यालयमा सरकारी दस्तुर तिरी सीमांकन (Demarcation) को निवेदन दिनुपर्छ। अमिनले नापेर मुचुल्का बनाएपछि पनि छिमेकीले नमानेमा स्थानीय पालिकाको न्यायिक समितिमा मेलमिलाप तथा कारबाहीका लागि निवेदन दर्ता गर्नुपर्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'जग्गामा बाटो नभएमा (Landlocked) कानुन अनुसार छिमेकीले बाटो दिनैपर्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'हो, मुलुकी देवानी संहिता २०७४ को दफा २९६ (निकास पाउने अधिकार) अनुसार कुनै पनि व्यक्तिको जग्गालाई बाटोविहीन बनाउन पाइँदैन। छेउको जग्गाधनीले उचित मुआब्जा वा क्षतिपूर्ति लिएर बाटोको निकास दिनैपर्ने कानुनी बाध्यता छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'जग्गा विवादमा स्थानीय पालिकाको न्यायिक समितिलाई के-के अधिकार हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'संविधानको धारा २१७ र स्थानीय सरकार सञ्चालन ऐन २०७४ अनुसार पालिकाको उपप्रमुख/उपाध्यक्षको संयोजकत्वमा रहने न्यायिक समितिलाई साँध-सिमाना विवाद, पानीको निकास, बाटो खुलाउने, घरभाडा विवाद र गोठ-पर्खालको विवाद निरुपण तथा मेलमिलाप गराउने प्रत्यक्ष कानुनी अधिकार छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'सार्वजनिक बाटो मिचेको अवस्थामा उजुरी गर्ने हदम्याद कति हुन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'सार्वजनिक जग्गा, सरकारी सडक वा कुलो-नदी मिचेको अवस्थामा कानुन अनुसार कुनै हदम्याद लाग्दैन। यस्तो अतिक्रमणविरुद्ध जुनसुकै समयमा पालिका वा प्रशासनमा उजुरी गरी सडक खुलाउन सकिन्छ।'
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

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>सबै टूल्सहरू (Tools Hub)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200">घरजग्गा विवाद समाधान विगार्ड</span>
        </div>

        {/* Interactive Dispute Wizard Component */}
        <PropertyDisputeWizard />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="नेपाल घरजग्गा कानुनी विवाद तथा समाधान विगार्ड (साँध, बाटो, मोही र अंश)" 
          url="/tools/property-dispute-wizard" 
        />

        {/* Static In-depth Legal Information Section */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 text-xs font-bold border border-rose-200 dark:border-rose-800">
              <BookOpen className="w-3.5 h-3.5" />
              <span>नेपालको भू-कानुन तथा अदालती अभ्यास</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              घरजग्गा विवाद समाधानका कानुनी आधारहरू: नापी, वडा, न्यायिक समिति र अदालत
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              नेपालमा ८० प्रतिशतभन्दा बढी स्थानीय विवाद घरजग्गा र साँध-सिमानासँग सम्बन्धित हुन्छन्। सही कानुनी प्रक्रिया र क्षेत्राधिकार थाहा नहुँदा सामान्य जनता वर्षौंसम्म अदालत र कार्यालय धाइरहन बाध्य हुन्छन्।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-2">
              <h3 className="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-rose-600" />
                <span>१. नापी कार्यालयको भूमिका (प्राविधिक तथ्य यकिन)</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                नापी कार्यालयले विवादको फैसला गर्दैन। नापीको काम फिल्डमा गएर नापी नक्सा (Cadastral Map) र फिल्डबुक अनुसार जमिनको वास्तविक क्षेत्रफल र सिमाना कुन हो भनी प्राविधिक प्रतिवेदन (मुचुल्का) तयार पार्नु मात्र हो। यही प्रतिवेदन नै अदालत वा न्यायिक समितिमा मुख्य प्रमाण बन्दछ।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-2">
              <h3 className="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Gavel className="w-4 h-4 text-rose-600" />
                <span>२. पालिका न्यायिक समितिको क्षेत्राधिकार</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                स्थानीय सरकार सञ्चालन ऐन, २०७४ अनुसार न्यायिक समितिलाई साँध-सिमाना, निकास बाटो, घरभाडा, पानीको कुलो र गोठ-पर्खाल विवादमा दुवै पक्षलाई झिकाई मेलमिलाप गराउने वा निर्णय गर्ने अधिकार छ। यसको निर्णय चित्त नबुझे मात्र जिल्ला अदालतमा पुनरावेदन गर्न सकिन्छ।
              </p>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              <span>घरजग्गा विवाद सम्बन्धी बारम्बार सोधिने प्रश्नहरू (FAQs)</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <p className="font-extrabold text-slate-900 dark:text-white">
                  प्रश्न: जग्गा नाप्दा छिमेकी उपस्थित हुन नमाने के गर्ने?
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  उत्तर: नापी कार्यालयले सम्बन्धित वडा कार्यालय मार्फत छिमेकीलाई कम्तीमा ३ देखि ७ दिनको लिखित सूचना पठाउँछ। तोकिएको म्यादमा पनि छिमेकी उपस्थित नभएमा वडा प्रतिनिधि र २ जना स्थानीय साक्षीहरूको रोहबरमा एकपक्षीय नापजाँच गरी मुचुल्का तयार गरिन्छ।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <p className="font-extrabold text-slate-900 dark:text-white">
                  प्रश्न: बैना गरिसकेपछि जग्गाधनी सम्पर्कविहीन भएमा के गर्ने?
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  उत्तर: म्याद सकिनु अगावै सम्बन्धित मालपोत कार्यालयमा खरिदकर्ता बाँकी रकमसहित उपस्थित भएको प्रमाणित हाजिरी गराउनुपर्छ र हुलाक मार्फत रजिष्ट्री पत्र पठाउनुपर्छ। त्यसपछि हदम्यादभित्र अदालतमा करार परिपालन वा क्षतिपूर्ति मुद्दा हाल्न सकिन्छ।
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
