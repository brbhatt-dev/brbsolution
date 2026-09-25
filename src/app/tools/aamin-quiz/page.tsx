import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AaminQuiz from '@/components/AaminQuiz';
import SocialShareBar from '@/components/SocialShareBar';
import { GraduationCap, ArrowLeft, BookOpen, Award, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'लोकसेवा नापी अमिन तथा सर्भेक्षक परीक्षा अभ्यास क्विज (Lok Sewa Aamin Mock Exam) | BR Bhatta',
  description: 'नेपाल लोक सेवा आयोग नापी अमिन तथा सर्भेक्षक पदको पाठ्यक्रममा आधारित अनलाइन नमुना वस्तुगत परीक्षा (MCQ Quiz)। चेनिङ, कम्पास, लेभलिङ, कित्ता नापी र जग्गा ऐन सम्बन्धी महत्वपूर्ण प्रश्नोत्तर।',
  keywords: [
    'Lok Sewa Aamin Quiz Nepal',
    'Surveyor Exam Preparation Nepal',
    'Cadastral Survey Model Questions',
    'नापी अमिन नमुना प्रश्नोत्तर',
    'सर्भेक्षक परीक्षा तयारी',
    'लोकसेवा अमिन क्विज',
    'जग्गा नापजाँच ऐन प्रश्नोत्तर',
    'BR Bhatta Aamin Quiz'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/aamin-quiz',
  },
  openGraph: {
    title: 'लोकसेवा नापी अमिन तथा सर्भेक्षक परीक्षा अभ्यास क्विज | BR Bhatta',
    description: 'लोक सेवा आयोगको नापी अमिन तथा सर्भेक्षक परीक्षाको लागि आधिकारिक पाठ्यक्रममा आधारित निःशुल्क अनलाइन वस्तुगत प्रश्न अभ्यास।',
    url: 'https://www.brbhatta.com/tools/aamin-quiz',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function AaminQuizPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: 'नेपाल लोकसेवा नापी अमिन तथा सर्भेक्षक नमुना वस्तुगत परीक्षा',
    description: 'Interactive mock exam and multiple-choice questions for Lok Sewa Aayog Aamin and Surveyor licensing and public service preparation in Nepal.',
    educationalLevel: 'Professional / Technical',
    provider: {
      '@type': 'Person',
      name: 'BR Bhatta',
      url: 'https://www.brbhatta.com',
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
        
        {/* Breadcrumb Nav */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>उपकरणहरू (Tools Hub)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200">नापी अमिन क्विज</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-bold">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
            <span>लोक सेवा आयोग पाठ्यक्रममा आधारित</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            नापी अमिन तथा सर्भेक्षक परीक्षा अभ्यास क्विज
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            चेनिङ, कम्पास, लेभलिङ, क्षेत्रफल रूपान्तरण, कित्ता नापी र नेपालका मौजूदा भूमिसम्बन्धी ऐन नियमहरूमा आधारित वस्तुगत प्रश्नोत्तर।
          </p>
        </div>

        {/* Interactive Quiz Component */}
        <AaminQuiz />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="लोकसेवा नापी अमिन तथा सर्भेक्षक परीक्षा अभ्यास क्विज (निःशुल्क नमुना परीक्षा)" 
          url="/tools/aamin-quiz" 
        />

        {/* Syllabus / Topic Guide */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              नापी अमिन तथा सर्भेक्षक परीक्षा पाठ्यक्रम मुख्य विषयहरू
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>१. सर्भे उपकरण तथा मापन प्रविधि:</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed pl-5">
                चेन सर्भे (Gunter/Metric/Engineer), प्रिस्म्याटिक कम्पास, थिओडोलाइट, अटो लेभल, टोटल स्टेसन (TS), र जीपीएस (GPS/GNSS) सिद्धान्त।
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>२. क्षेत्रफल तथा कित्ता नापी गणना:</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed pl-5">
                रोपनी-आना-पैसा-दाम, बिघा-कट्ठा-धुर-कन्वा, वर्गमिटर, नक्सा स्केल (१:५००, १:१२५०, १:२५००) र कित्ताकाट ज्यामिति।
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>३. नापी तथा भूमिसम्बन्धी मौजूदा कानुन:</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed pl-5">
                जग्गा (नाप जाँच) ऐन २०१९ र नियमावली २०५८, भूउपयोग ऐन २०७६ र नियमावली २०७९ (संशोधन २०८१), र मालपोत ऐन २०३४।
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>४. फिल्डबुक तथा स्रेस्ता प्रणाली:</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed pl-5">
                फिल्डबुक तयार गर्ने विधि, जग्गाको वर्गीकरण (अब्बल, दोयम, सिम, चाहार), मोठ स्रेस्ता र लालपुर्जा दर्ता प्रक्रिया।
              </p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
