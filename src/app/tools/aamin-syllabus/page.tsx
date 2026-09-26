import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialShareBar from '@/components/SocialShareBar';
import AdSenseSlot from '@/components/AdSenseSlot';
import { 
  GraduationCap, 
  ArrowLeft, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  FileText, 
  Download, 
  Clock, 
  HelpCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'लोकसेवा नापी अमिन तथा सर्भेक्षक पाठ्यक्रम र पुराना प्रश्नोत्तर (Syllabus & Past Papers) | BR Bhatta',
  description: 'नेपाल लोक सेवा आयोग (संघीय तथा प्रदेश) नापी अमिन र सर्भेक्षक पदको आधिकारिक पाठ्यक्रम, परीक्षा योजना, अंक विभाजन र विगतका परीक्षामा सोधिएका महत्वपूर्ण प्रश्नोत्तरहरू।',
  keywords: [
    'Lok Sewa Aamin Syllabus Nepal',
    'Surveyor Syllabus PSC Nepal',
    'नापी अमिन पाठ्यक्रम',
    'सर्भेक्षक परीक्षा योजना',
    'अमिन पुरानो प्रश्नपत्र',
    'Aamin Old Question Papers'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/aamin-syllabus',
  },
  openGraph: {
    title: 'लोकसेवा नापी अमिन तथा सर्भेक्षक पाठ्यक्रम र नमुना प्रश्नोत्तर | BR Bhatta',
    description: 'लोक सेवा आयोग इन्जिनियरिङ सेवा सर्भे समूह अमिन तथा सर्भेक्षक पदको विस्तृत पाठ्यक्रम र अध्ययन रणनीति।',
    url: 'https://www.brbhatta.com/tools/aamin-syllabus',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function AaminSyllabusPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: 'नेपाल लोक सेवा आयोग नापी अमिन तथा सर्भेक्षक आधिकारिक पाठ्यक्रम',
    description: 'Public Service Commission Nepal syllabus, marking scheme, and past question papers for Aamin and Surveyor positions.',
    url: 'https://www.brbhatta.com/tools/aamin-syllabus',
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
        
        {/* Breadcrumb Nav */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>उपकरणहरू (Tools Hub)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200">नापी अमिन पाठ्यक्रम तथा पुराना प्रश्नोत्तर</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-bold">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
            <span>नेपाल इन्जिनियरिङ सेवा • सर्भे समूह</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            नापी अमिन तथा सर्भेक्षक आधिकारिक पाठ्यक्रम र अध्ययन निर्देशिका
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            लोक सेवा आयोग (संघीय तथा प्रदेश लोकसेवा) को अमिन (रा.प.अनं. द्वितीय) र सर्भेक्षक (रा.प.अनं. प्रथम) पदको परीक्षा योजना, अंक विभाजन र पुराना प्रश्नोत्तर।
          </p>
        </div>

        {/* Quick Exam Overview Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
            <span className="text-xs text-slate-500 font-bold block">प्रथम चरण (First Phase)</span>
            <p className="text-lg font-black text-slate-900 dark:text-white">वस्तुगत बहुवैकल्पिक (MCQ)</p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400">पूर्णाङ्क: १०० • ५० प्रश्न (४५ मिनेट)</p>
          </div>

          <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
            <span className="text-xs text-slate-500 font-bold block">द्वितीय चरण (Second Phase)</span>
            <p className="text-lg font-black text-slate-900 dark:text-white">विषयगत तथा प्रयोगात्मक</p>
            <p className="text-xs text-indigo-600 dark:text-indigo-400">पूर्णाङ्क: १०० • लिखित र फिल्ड टेस्ट</p>
          </div>

          <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
            <span className="text-xs text-slate-500 font-bold block">न्यूनतम योग्यता (Eligibility)</span>
            <p className="text-lg font-black text-slate-900 dark:text-white">SEE/SLC + अमिन तालिम</p>
            <p className="text-xs text-amber-600 dark:text-amber-400">वा सिभिल/जियोमेटिक्स डिप्लोमा</p>
          </div>
        </div>

        {/* Callout to Live Practice Quiz */}
        <div className="bg-gradient-to-r from-emerald-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>अनलाइन परीक्षा अभ्यास गर्नुहोस्</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black">
              पाठ्यक्रममा आधारित १६+ वस्तुगत नमुना प्रश्नहरूको लाइभ क्विज
            </h2>
            <p className="text-xs text-slate-300">
              प्रत्येक प्रश्नको तुरुन्तै सही उत्तर, कानुनी व्याख्या र स्कोरकार्ड हेर्नुहोस्।
            </p>
          </div>

          <Link
            href="/tools/aamin-quiz"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md active:scale-95 shrink-0"
          >
            <span>क्विज सुरु गर्नुहोस्</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Detailed Syllabus Sections */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-3">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              नापी अमिन पदको विस्तृत विषयगत पाठ्यक्रम (Detailed Syllabus)
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            
            {/* Unit 1 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                  खण्ड १: सामान्य सर्भे सिद्धान्त तथा चेन सर्भे (Chain Surveying)
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                  १० अङ्क
                </span>
              </div>
              <ul className="space-y-1 text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-inside">
                <li>सर्भेको परिभाषा, वर्गीकरण र आधारभूत सिद्धान्तहरू (Working from whole to part)।</li>
                <li>चेनका प्रकारहरू: गन्टर्स चेन (६६ फिट/१०० लिङ्क), इन्जिनियर्स चेन (१०० फिट), र मेट्रिक चेन (२०/३० मिटर)।</li>
                <li>चेनिङमा हुने त्रुटिहरू (Errors in Chaining): संचयी (Cumulative) र क्षतिपूर्ति हुने (Compensating) त्रुटि।</li>
                <li>अवरोधहरू पार गर्ने तरिका (Obstacles in Chaining & Ranging)।</li>
              </ul>
            </div>

            {/* Unit 2 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                  खण्ड २: कम्पास सर्भे तथा बियरिङ (Compass & Bearings)
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                  १० अङ्क
                </span>
              </div>
              <ul className="space-y-1 text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-inside">
                <li>प्रिज्माटिक कम्पास (Prismatic Compass) र सर्भेयर्स कम्पास (Surveyor\'s Compass) बीचको भिन्नता।</li>
                <li>Whole Circle Bearing (WCB) र Reduced Bearing (RB) बीचको रूपान्तरण।</li>
                <li>Fore Bearing (FB) र Back Bearing (BB) को सम्बन्ध (BB = FB ± 180°)।</li>
                <li>स्थानीय चुम्बकीय आकर्षण (Local Attraction) पत्ता लगाउने र सच्याउने तरिका।</li>
              </ul>
            </div>

            {/* Unit 3 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                  खण्ड ३: लेभलिङ तथा कन्टुरिङ (Leveling & Contouring)
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                  १० अङ्क
                </span>
              </div>
              <ul className="space-y-1 text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-inside">
                <li>बेन्चमार्क (Benchmark), Back Sight (BS), Intermediate Sight (IS), Fore Sight (FS) र Change Point (CP)।</li>
                <li>उचाइ निकाल्ने दुई विधिहरू: Height of Instrument (HI) विधि र Rise & Fall विधि।</li>
                <li>कन्टुरको परिभाषा, विशेषताहरू (Characteristics of Contours) र प्रयोग।</li>
                <li>अटो लेभल (Auto Level) को अस्थायी समायोजन (Temporary Adjustment)।</li>
              </ul>
            </div>

            {/* Unit 4 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                  खण्ड ४: कित्ता नापी, क्षेत्रफल गणना र नक्सांकन (Cadastral Survey & Area)
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300">
                  १५ अङ्क
                </span>
              </div>
              <ul className="space-y-1 text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-inside">
                <li>कित्ता नापी नक्साको स्केल: १:५००, १:१२५०, र १:२५०० को प्रयोग।</li>
                <li>पहाडी नाप: रोपनी, आना, पैसा, दाम र तराई नाप: बिघा, कट्ठा, धुर, कन्वाको सम्बन्ध।</li>
                <li>प्ल्यानिमिटर (Planimeter), कोअर्डिनेट विधि र सिमप्सन नियमबाट क्षेत्रफल गणना।</li>
                <li>फिल्डबुक तयार गर्ने तरिका र कित्ता नम्बर दिने नियमहरू।</li>
              </ul>
            </div>

            {/* Unit 5 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                  खण्ड ५: नेपालका मौजूदा भूमिसम्बन्धी ऐन तथा नियमहरू (Land Laws)
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300">
                  १५ अङ्क
                </span>
              </div>
              <ul className="space-y-1 text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-inside">
                <li>जग्गा (नाप जाँच) ऐन, २०१९ र जग्गा नाप जाँच नियमावली, २०५८ का मुख्य व्यवस्थाहरू।</li>
                <li>भू-उपयोग ऐन, २०७६ र भू-उपयोग नियमावली, २०७९ (संशोधन २०८१) का कित्ताकाट मापदण्ड।</li>
                <li>भूमिसम्बन्धी ऐन, २०२१ र मालपोत ऐन, २०३४।</li>
                <li>स्रेस्ता, मोठ, हालसाबिक, र लालपुर्जा दर्ता प्रक्रिया।</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Past Exam Questions Sample */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-3">
            <HelpCircle className="w-5 h-5 text-amber-600" />
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              विगतका परीक्षामा दोहोरिएर सोधिएका महत्वपूर्ण नमुना प्रश्नोत्तर
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1.5">
              <p className="font-bold text-slate-900 dark:text-white">
                १. प्रश्न: १ हेक्टर जग्गा बराबर कति रोपनी र कति वर्गमिटर हुन्छ?
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed pl-4 border-l-2 border-emerald-500">
                <strong>उत्तर:</strong> १ हेक्टर = १०,००० वर्गमिटर हुन्छ। १ रोपनी = ५०८.७२ वर्गमिटर हुने भएकाले १ हेक्टर बराबर करिब <strong>१९.६६ रोपनी</strong> (वा १.४७ बिघा) हुन्छ।
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1.5">
              <p className="font-bold text-slate-900 dark:text-white">
                २. प्रश्न: कुनै रेखाको Fore Bearing 45° छ भने त्यसको Back Bearing कति हुन्छ?
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed pl-4 border-l-2 border-emerald-500">
                <strong>उत्तर:</strong> नियम अनुसार Back Bearing = Fore Bearing + 180° (यदि FB 180° भन्दा कम भए)। त्यसैले BB = 45° + 180° = <strong>225°</strong> हुन्छ।
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1.5">
              <p className="font-bold text-slate-900 dark:text-white">
                ३. प्रश्न: कित्ताकाट गर्दा आवासीय क्षेत्रमा कायम हुनुपर्ने न्यूनतम क्षेत्रफल कति हो?
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed pl-4 border-l-2 border-emerald-500">
                <strong>उत्तर:</strong> भू-उपयोग नियमावली २०७९ (संशोधन २०८१) अनुसार आवासीय क्षेत्रमा न्यूनतम <strong>१३० वर्गमिटर</strong> (करिब ४ आना) र बाटोतर्फको न्यूनतम मोहडा ८ मिटर हुनुपर्छ।
              </p>
            </div>
          </div>
        </div>

        {/* In-feed AdSense Slot */}
        <AdSenseSlot userFacingLabel="विज्ञापन (AdSense Slot)" />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="लोकसेवा नापी अमिन तथा सर्भेक्षक आधिकारिक पाठ्यक्रम र अध्ययन गाइड" 
          url="/tools/aamin-syllabus" 
        />

      </main>

      <Footer />
    </div>
  );
}
