import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ShubhSaaitCalendar from '@/components/ShubhSaaitCalendar';
import SocialShareBar from '@/components/SocialShareBar';
import { 
  ArrowLeft, 
  Sparkles, 
  BookOpen, 
  HelpCircle, 
  ShieldCheck, 
  Compass, 
  Clock, 
  AlertTriangle 
} from 'lucide-react';
import { VASTU_RULES_GUIDE } from '@/data/shubhSaait';

export const metadata: Metadata = {
  title: 'घरजग्गा खरिदबिक्री, जग पूजा र गृहप्रवेश शुभ साइत २०८१/२०८२ | BR Bhatta',
  description: 'नेपाल पञ्चाङ्ग निर्णायक विकास समिति तथा वैदिक वास्तुशास्त्र अनुसार जग्गा रजिष्ट्रेसन पास, घरको जग पूजा (शिलान्यास), छत ढलान र नयाँ घर गृहप्रवेशका आधिकारिक शुभ मुहूर्त तथा साइत तालिका।',
  keywords: [
    'Griha Prabesh Saait 2081 2082',
    'घरजग्गा पास शुभ साइत २०८१',
    'Jag Puja Shubh Muhurat Nepal',
    'Real Estate Auspicious Dates Nepal',
    'छत ढलान गर्ने साइत २०८१',
    'गृहप्रवेश शुभ साइत २०८२',
    'वास्तु शास्त्र र घरजग्गा नियम'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/real-estate-saait-calendar',
  },
  openGraph: {
    title: 'घरजग्गा खरिदबिक्री, जग पूजा र गृहप्रवेश शुभ साइत २०८१/२०८२ | BR Bhatta',
    description: 'नेपालमा जग्गा पास, जग पूजा, छाना ढलान र गृहप्रवेशका महिना अनुसारका आधिकारिक शुभ साइत तथा वास्तु निर्देशिका।',
    url: 'https://www.brbhatta.com/tools/real-estate-saait-calendar',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function ShubhSaaitCalendarPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/real-estate-saait-calendar#app',
        name: 'नेपाल घरजग्गा तथा गृहप्रवेश शुभ साइत क्यालेन्डर',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        url: 'https://www.brbhatta.com/tools/real-estate-saait-calendar',
        description: 'Auspicious dates and muhurats for real estate registration, foundation laying, roof casting, and housewarming in Nepal (2081/2082).',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/real-estate-saait-calendar#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'जग्गा रजिष्ट्रेसन पास गर्दा कुन-कुन बार र समय बार्नुपर्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ज्योतिषशास्त्र अनुसार मालपोतमा जग्गा पास गर्दा राहुकाल (दिनको करिब १.५ घण्टा), भद्रा र औँसी तिथि बार्नुपर्छ। सामान्यतया बिहीबार र बुधबार स्थिर लग्न (वृष, सिंह, वृश्चिक, कुम्भ) परेको समयमा जग्गा पास गर्नु सबैभन्दा उत्तम मानिन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'घरको जग पूजा (शिलान्यास) कुन दिशाबाट सुरु गर्नुपर्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'वास्तु पुरुष मण्डलको सिद्धान्त अनुसार घरको जग खन्ने कार्य सधैं उत्तर-पूर्व (ईशान कोण) बाट सुरु गरेर दक्षिण-पश्चिम (नैऋत्य कोण) तर्फ टुङ्ग्याउनुपर्छ र पहिलो शिलान्यासको शिला/इँटा ईशान वा वायव्य कोणमा राख्नुपर्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'पञ्चक परेको बेला घरको छत ढलान गर्न मिल्छ कि मिल्दैन?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'पञ्चक (धनिष्ठा नक्षत्रदेखि रेवती नक्षत्रसम्म) को समयमा घरको छाना हाल्ने, काठको काम गर्ने र दक्षिण दिशाको यात्रा बार्ने शास्त्रीय नियम छ। त्यसैले पञ्चक बाहिरको नक्षत्रमा छत ढलान गर्नु श्रेयस्कर मानिन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'नयाँ घरमा गृहप्रवेश गर्दा कुन महिना उत्तम मानिन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'वैदिक वास्तु अनुसार सूर्य उत्तरायण रहेको समय (माघ, फागुन, वैशाख र जेठ महिना) गृहप्रवेशका लागि सर्वोत्तम मानिन्छ। असार महिनाको हरिशयनी एकादशीदेखि कात्तिकको हरिबोधिनी एकादशीसम्म (चातुर्मास) नयाँ घरको गृहप्रवेश सामान्यतया बार्ने चलन छ।'
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
          <span className="text-slate-800 dark:text-slate-200">घरजग्गा शुभ साइत क्यालेन्डर</span>
        </div>

        {/* Interactive Calendar Component */}
        <ShubhSaaitCalendar />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="घरजग्गा खरिदबिक्री, जग पूजा र गृहप्रवेश शुभ साइत २०८१/२०८२" 
          url="/tools/real-estate-saait-calendar" 
        />

        {/* Static In-depth Vastu & Astrology Guide */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 text-xs font-bold border border-amber-200 dark:border-amber-800">
              <BookOpen className="w-3.5 h-3.5" />
              <span>वैदिक वास्तुशास्त्र तथा पञ्चाङ्ग निर्देशिका</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              घरजग्गा कारोबार, निर्माण र बसोबासमा शुभ साइतको महत्व
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              घर केवल इँटा र सिमेन्टको संरचना मात्र नभई सम्पूर्ण परिवारको सुख, शान्ति र प्रगतिको आधारशिला हो। सनातन परम्परामा भूमि पूजन (जग शिलान्यास), छत ढलान, जग्गा पास र गृहप्रवेश गर्दा समय, तिथि र नक्षत्रको विशेष संयोजन मिलाइन्छ।
            </p>
          </div>

          {/* Vastu Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VASTU_RULES_GUIDE.map((rule, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-2">
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                  {rule.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {rule.content}
                </p>
              </div>
            ))}
          </div>

          {/* Rahukal Table */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>दैनिक राहुकाल समय तालिका (जग्गा पास गर्दा बार्नुपर्ने समय)</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    <th className="p-3 text-left border border-slate-200 dark:border-slate-700 font-bold">बार (Day)</th>
                    <th className="p-3 text-left border border-slate-200 dark:border-slate-700 font-bold">राहुकाल समय (अशुभ मानिने अवधि)</th>
                    <th className="p-3 text-left border border-slate-200 dark:border-slate-700 font-bold">सुझाव</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="p-3 font-bold">आइतबार (Sunday)</td>
                    <td className="p-3 font-mono text-rose-600 dark:text-rose-400">साँझ ४:३० देखि ६:०० सम्म</td>
                    <td className="p-3 text-xs">यो समयमा कुनै पनि नयाँ बैना वा रजिष्ट्रेसन नगर्नुहोस्।</td>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-850/50">
                    <td className="p-3 font-bold">सोमबार (Monday)</td>
                    <td className="p-3 font-mono text-rose-600 dark:text-rose-400">बिहान ७:३० देखि ९:०० सम्म</td>
                    <td className="p-3 text-xs">कार्यालय समय भन्दा अगाडि पर्ने।</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">मंगलबार (Tuesday)</td>
                    <td className="p-3 font-mono text-rose-600 dark:text-rose-400">दिउँसो ३:०० देखि ४:३० सम्म</td>
                    <td className="p-3 text-xs">मालपोतमा सहिछाप गर्दा ३:०० बजे अगावै सम्पन्न गर्नुहोस्।</td>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-850/50">
                    <td className="p-3 font-bold">बुधबार (Wednesday)</td>
                    <td className="p-3 font-mono text-rose-600 dark:text-rose-400">दिउँसो १२:०० देखि १:३० सम्म</td>
                    <td className="p-3 text-xs">दिउँसो १:३० पछि काम गर्नु उत्तम।</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">बिहीबार (Thursday)</td>
                    <td className="p-3 font-mono text-rose-600 dark:text-rose-400">दिउँसो १:३० देखि ३:०० सम्म</td>
                    <td className="p-3 text-xs">बिहान १०:१५ देखि १:१५ सम्म श्रेष्ठ साइत।</td>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-850/50">
                    <td className="p-3 font-bold">शुक्रबार (Friday)</td>
                    <td className="p-3 font-mono text-rose-600 dark:text-rose-400">बिहान १०:३० देखि १२:०० सम्म</td>
                    <td className="p-3 text-xs">दिउँसो १२:०० बजेपछि कार्यालय काम सुरु गर्नुहोस्।</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>घरजग्गा साइत सम्बन्धी बारम्बार सोधिने प्रश्नहरू (FAQs)</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <p className="font-extrabold text-slate-900 dark:text-white">
                  प्रश्न: जग्गा पास गर्न कुन बार सबैभन्दा राम्रो मानिन्छ?
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  उत्तर: सामान्यतया बिहीबार (गुरुवार) र बुधबार अचल सम्पत्ति खरिद तथा रजिस्ट्रेसनका लागि सबैभन्दा शुभ बार मानिन्छ।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <p className="font-extrabold text-slate-900 dark:text-white">
                  प्रश्न: यदि शुभ साइतको दिन मालपोत कार्यालय बन्द भयो भने के गर्ने?
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  उत्तर: यदि सार्वजनिक बिदाका कारण कार्यालय बन्द रहेमा त्यो दिन घरमै बसेर बैनापट्टा वा अग्रिम करारनामा कागजमा सहिछाप गरी अर्को नजिकको शुभ दिनमा मालपोतमा रजिष्ट्रेसन पास गराउन सकिन्छ।
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
