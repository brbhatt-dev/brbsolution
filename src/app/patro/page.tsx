import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import HomeFooter from '@/components/HomeFooter';
import InteractiveOnlinePatro from '@/components/InteractiveOnlinePatro';
import { 
  Download, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  Compass, 
  Heart, 
  Scroll, 
  ArrowLeft,
  ExternalLink,
  Info,
  Smartphone,
  History,
  CheckCircle2,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'बी.आर. पात्रो (BR Patro) - आधिकारिक नेपाली क्यालेन्डर, वैदिक पञ्चाङ्ग २०८१-२०८४ र साइत | BR Bhatta',
  description: 'शुद्ध सूर्यसिद्धान्त वैदिक पञ्चाङ्ग, चाडपर्व, सरकारी बिदा, विवाह/व्रतबन्ध शुभ साइत, राशिफल र क्यालेन्डर २०८१-२०८४। अनलाइन इन्टरएक्टिभ पात्रो चलाउनुहोस् वा आधिकारिक APK (v7.9.80) डाउनलोड गर्नुहोस्।',
  keywords: [
    'नेपाली पात्रो',
    'बी.आर. पात्रो',
    'BR Patro',
    'Nepali Calendar 2081 2082',
    'वैदिक पञ्चाङ्ग',
    'नेपाली क्यालेन्डर २०८१',
    'विवाह साइत २०८१',
    'व्रतबन्ध साइत',
    'राहुकाल',
    'राशिफल',
    'BR Bhatta Patro'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/patro',
  },
  openGraph: {
    title: 'बी.आर. पात्रो (BR Patro) - आधिकारिक नेपाली क्यालेन्डर तथा पञ्चाङ्ग २०८१-२०८४',
    description: 'शुद्ध वैदिक पञ्चाङ्ग, विवाह ३६ गुण मिलान, दैनिक साइत र राशिफल। अनलाइन पात्रो चलाउनुहोस् वा APK डाउनलोड गर्नुहोस्।',
    url: 'https://www.brbhatta.com/patro',
    siteName: 'BR Bhatta Software Solutions',
    images: [
      {
        url: 'https://www.brbhatta.com/assets/br-patro-og.png',
        width: 1200,
        height: 630,
        alt: 'BR Patro Official Calendar & APK v7.9.80',
      },
    ],
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'बी.आर. पात्रो (BR Patro) - नेपाली क्यालेन्डर तथा पञ्चाङ्ग २०८१-२०८४',
    description: 'शुद्ध वैदिक पञ्चाङ्ग, विवाह ३६ गुण मिलान, दैनिक साइत र राशिफल।',
    images: ['https://www.brbhatta.com/assets/br-patro-og.png'],
  },
};

interface ReleaseLogItem {
  version: string;
  build: string;
  date: string;
  tag?: string;
  isLatest?: boolean;
  fixes: string[];
}

const RELEASE_LOGS: ReleaseLogItem[] = [
  {
    version: "v7.9.80",
    build: "Build 179",
    date: "२०८३ कार्तिक २६ (१२ नोभेम्बर २०२६)",
    tag: "पछिल्लो ताजा रिलिज (Latest)",
    isLatest: true,
    fixes: [
      "पृष्ठभूमि अलार्म तथा नोटिफिकेसन पुनर्जागरण (Background Persistence): MY_PACKAGE_REPLACED तथा BootReceiver सुधार गरी एप अपडेट भएपछि वा मोबाइल बन्द भएर खुल्दा पनि बिहानी ६:३० बजेको पञ्चाङ्ग अलार्म नहट्ने ग्यारेन्टी।",
      "झुटो अपडेट सूचना समाधान (False Alert Shield): नवीनतम भर्सन इन्स्टल भइसकेका युजरलाई एप खुल्दा पुनः 'अपडेट गर्नुहोस्' भन्ने अनावश्यक नोटिफिकेसन आउन नदिने स्मार्ट भर्सन शिल्ड।",
      "२००-वर्षे १-क्लिक मिति चयन (1999/01/01 देखि 2199/12/31 BS): क्यालेन्डरमा 'मिति चयन' बटन थप, जहाँबाट जुनसुकै साल, महिना र गते छानेर सिधै सो मितिको पञ्चाङ्ग तथा चाडपर्वमा पुग्न सकिने।",
      "हरिगढ अहर्गण साधन दैनिक वृद्धि सुधार: कार्तिक २५ मा ३२६ (४८७३२६ दिन) र आज कार्तिक २६ मा ३२७ (४८७३२७ दिन) हुने गरी सूर्यसिद्धान्त तथा खण्डखाद्यक सावन दिनको यथार्थ सिङ्क।",
      "ब्याट्री अप्टिमाइजेसन १-क्लिक छुट: सेटिङमा 'ब्याट्री अप्टिमाइजेसन सुरक्षा' कार्ड थप गरी Samsung/One UI/Xiaomi मा पनि ब्याकग्राउन्ड अलार्म नरोकिने सुविधा।"
    ]
  },
  {
    version: "v7.9.79",
    build: "Build 178",
    date: "२०८३ कार्तिक २६ (१२ नोभेम्बर २०२६)",
    fixes: [
      "२०८४ सालका सम्पूर्ण १२ महिनाका चाडपर्व तथा एकादशीहरूको पूर्ण शास्त्रीय शुद्धिकरण (अशोकाष्टमी, घटस्थापना, तिहार, छठ र सबै २४ एकादशीहरू पञ्चाङ्ग अनुसार यथार्थ)।",
      "क्यालेन्डर हेडर वर्ष सिङ्क्रोनाइजेसन: २०८४ वा अन्य वर्ष छनोट गर्दा माथिको हेडर शीर्षक पनि स्वतः 'नेपाली क्यालेन्डर २०८४' देखिने सुधार।",
      "अहर्गण गणना दायरा विस्तार: वि.सं. १९९९ देखि २१९९ सम्म (२०० वर्ष) जुनसुकै मितिको खण्डखाद्यक तथा कलि अहर्गण र पञ्चाङ्ग साधन।",
      "दैनिक अहर्गण वृद्धि सुधार: हरेक दिन अहर्गण +१ ले क्रमशः बढ्ने (कार्तिक २५ मा ४९७,३२६, कार्तिक २६ मा ४९७,३२७, कार्तिक २७ मा ४९७,३२८) यथार्थ सूर्यसिद्धान्त।"
    ]
  },
  {
    version: "v7.9.78",
    build: "Build 177",
    date: "२०८३ कार्तिक २६ (१२ नोभेम्बर २०२६)",
    fixes: [
      "होम स्क्रिन तिहार साइत क्लिनअप: तिहार तथा भाइटीका सकिएकाले होम स्क्रिनको साइत ब्यानर हटाई आजको दैनिक पञ्चाङ्ग र मितिमा पूर्ण केन्द्रित गरिएको।",
      "ऐतिहासिक खण्डखाद्यक अहर्गण एकीकरण: आचार्य ब्रह्मगुप्तको शक ५८७ (६६५ ईस्वी) को खण्डखाद्यक करण सिद्धान्त अनुसारको अहर्गण (४,९७,३२६ दिन) सफलतापूर्वक थप।",
      "स्वचालित क्लाउड अपडेट नोटिफिकेसन: अब कुनै पनि नयाँ भर्सन वा बग समाधान रिलिज हुँदा युजरलाई स्वतः इन-एप ब्यानर र पुस नोटिफिकेसनमार्फत १-क्लिक डाउनलोड सुविधा।"
    ]
  },
  {
    version: "v7.9.77",
    build: "Build 176",
    date: "२०८३ कार्तिक २५ (११ नोभेम्बर २०२६)",
    fixes: [
      "कलियुग तथा खण्डखाद्यक अहर्गण अनुसन्धान: १८,७२,८९० कलि अहर्गण र ब्रह्मगुप्त अहर्गण गणनाको गहिरो शास्त्रीय परीक्षण तथा शुद्धता।",
      "क्लीन एपीके रिबिल्ड सुधार: एन्ड्रोइड भर्सन नेम क्यासिङ समाधान गरी सबै मोबाइलमा सिधै नयाँ बिल्ड इन्स्टल हुने बनाइएको।"
    ]
  },
  {
    version: "v7.9.76",
    build: "Build 175",
    date: "२०८३ कार्तिक २४ (१० नोभेम्बर २०२६)",
    fixes: [
      "स्मार्ट नोटिफिकेसन माइक्रो-कपी: मोबाइलको स्टेटस बारमा नोटिफिकेसन नकटिने गरी २५/७५ अक्षर सीमा र च्यानेल प्राथमिकता अप्टिमाइजेसन।",
      "दैनिक बिहानी पञ्चाङ्ग अलार्म: बिहानको पञ्चाङ्ग तथा साइत अलर्ट टाइमरमा सुधार।"
    ]
  },
  {
    version: "v7.9.75",
    build: "Build 174",
    date: "२०८३ कार्तिक २२ (८ नोभेम्बर २०२६)",
    fixes: [
      "दीपावली तथा महालक्ष्मी पूजा प्रदोष काल: स्थिर वृष लग्न, कुबेर पूजा र प्रदोष काल मुहूर्त शुद्धिकरण।",
      "तिहार यमपञ्चक विशेष साइत तथा दिशा विवरण अद्यावधिक।"
    ]
  },
  {
    version: "v7.9.73 - v7.9.74",
    build: "Build 172-173",
    date: "२०८३ कार्तिक २० (६ नोभेम्बर २०२६)",
    fixes: [
      "फुल-ब्लिड नयाँ ब्रान्ड लोगो (Full-Bleed Adaptive Icon): सामसुङ One UI, Pixel तथा सम्पूर्ण एन्ड्रोइड स्मार्टफोनहरूमा सेतो प्लेट हटाई श्री गणेशजीको फुल एज-टु-एज लोगो।",
      "एप लन्चर आइकन तथा होम स्क्रिन ड्यासबोर्डमा दृश्य सुधार।"
    ]
  },
  {
    version: "v7.9.70 - v7.9.72",
    build: "Build 169-171",
    date: "२०८३ कार्तिक १८ (४ नोभेम्बर २०२६)",
    fixes: [
      "कञ्चनपुर / महेन्द्रनगर सङ्कल्प अटो-सिङ्क: पुण्यभूमौ नेपालदेशे शारदा-महाकाली तीरे कञ्चनपुर मण्डले सिद्धनाथ क्षेत्रे स्वतः संकल्प पहिचान।",
      "सम्पूर्ण परिवारका सदस्यहरूको नाम सहितको शास्त्रीय सङ्कल्प जेनेरेटर।"
    ]
  },
  {
    version: "v7.9.60 - v7.9.69",
    build: "Build 158-168",
    date: "२०८३ कार्तिक १०-१५ (२७-३१ अक्टोबर २०२६)",
    fixes: [
      "विवाह ३६ गुण मिलान (Kundali Matching): वर-कन्याको नामबाट अष्टकूट ३६ गुण, नाडी दोष, भकूट दोष, गण मैत्री र परिहारसहितको सटिक नतिजा।",
      "७७ जिल्लाका ७५३ पालिका पञ्चाङ्ग: प्रत्येक स्थानीय तहको यथार्थ सूर्योदय, सूर्यास्त तथा काल साधन।",
      "९५ वर्षका पुराना स्क्यान पात्रोहरू पढ्ने ई-लाइब्रेरी सुविधा।"
    ]
  },
  {
    version: "v7.9.0 - v7.9.50",
    build: "Build 140-155",
    date: "२०८३ आश्विन (दशैं विशेष - अक्टोबर २०२६)",
    fixes: [
      "दशैं २०८३ घटस्थापना र विजयादशमी साइत: नेपाल पञ्चाङ्ग निर्णायक विकास समिति स्वीकृत शास्त्रीय साइतहरू।",
      "स्मार्ट संस्कृत सङ्कल्प जेनेरेटर: यजमान, कुल, गोत्र र स्थान अनुसार शुद्ध संस्कृत सङ्कल्प पाठ।",
      "नयाँ आधुनिक डार्क मोड तथा ज्येष्ठ नागरिक (ठूलो अक्षर) मोड।"
    ]
  },
  {
    version: "v7.8.0 - v7.8.9",
    build: "Build 130-139",
    date: "२०८३ भाद्र (सेप्टेम्बर २०२६)",
    fixes: [
      "सुदूरपश्चिम हरिगढ-अठोला पञ्चाङ्ग मोड: स्थानीय पञ्चाङ्ग र काठमाडौँ मानक पञ्चाङ्ग बीच १-ट्याप स्वीच।",
      "अफलाइन मोड सुधार: इन्टरनेट बिना नै ३६५ दिनको सम्पूर्ण पात्रो तथा राशिफल चल्ने सुविधा।",
      "विजेट सपोर्ट: होम स्क्रिनमा मिति, बार र पञ्चाङ्ग देखाउने स्लिम तथा स्क्वायर विजेट।"
    ]
  }
];

export default function PatroDownloadPage() {
  const downloadUrl = "https://github.com/imtechboss/imtechboss/releases/download/v7.9.80/BR_Patro_v7.9.80.apk";
  const releasePageUrl = "https://github.com/imtechboss/imtechboss/releases/tag/v7.9.80";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 py-6 sm:py-10 px-3.5 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-8 sm:space-y-10">
        
        {/* Navigation Breadcrumb & Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-amber-400 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>गृहपृष्ठमा फर्कनुहोस्</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>आधिकारिक तथा सुरक्षित (Verified Safe)</span>
            </span>
          </div>
        </div>

        {/* 1. PRIMARY FLAGSHIP EXPERIENCE: IN-BROWSER INTERACTIVE BR PATRO CALENDAR & PANCHANGA */}
        <section className="w-full">
          <InteractiveOnlinePatro />
        </section>

        {/* 2. OFFICIAL ANDROID APK DOWNLOAD SECTION (v7.9.78) */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 relative z-10">
            {/* App Icon */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-gradient-to-br from-amber-500 to-red-600 rounded-3xl p-1.5 shadow-lg shadow-red-500/20 border-2 border-amber-300 dark:border-amber-500 flex items-center justify-center">
              <img 
                src="/assets/ganesh_badge.png" 
                alt="BR Patro Logo" 
                className="w-full h-full object-contain rounded-2xl drop-shadow" 
              />
            </div>

            {/* App Details */}
            <div className="flex-1 text-center sm:text-left space-y-3">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300 border border-red-300 dark:border-red-800">
                  Version 7.9.80
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Build 177
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  📦 ३८.१ MB
                </span>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  BR Patro एन्ड्रोइड एप (Android Official APK)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
                  नेपालको आधुनिक, भरपर्दो तथा शास्त्रीय वैदिक पञ्चाङ्ग, कुण्डली, विवाह ३६ गुण मिलान, दैनिक यात्रा विचार तथा सम्पूर्ण कर्मकाण्ड संग्रह एप मोबाइलमा सिधै इन्स्टल गर्नुहोस्।
                </p>
              </div>

              {/* Direct Download Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="BR_Patro_v7.9.80.apk"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-red-600/30 active:scale-95 transition transform cursor-pointer group"
                >
                  <Download className="w-5 h-5 text-white transition-transform group-hover:translate-y-0.5" />
                  <span>डाउनलोड गर्नुहोस् (Download APK)</span>
                </a>

                <a
                  href={releasePageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>वैकल्पिक GitHub Mirror</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Specifications Strip */}
          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <span className="block text-2xs font-semibold text-slate-500 dark:text-slate-400">अपडेट मिति</span>
              <span className="block text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-100 mt-0.5">२०८१ कार्तिक २२</span>
            </div>
            <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <span className="block text-2xs font-semibold text-slate-500 dark:text-slate-400">एन्ड्रोइड सपोर्ट</span>
              <span className="block text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-100 mt-0.5">Android 7.0+</span>
            </div>
            <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <span className="block text-2xs font-semibold text-slate-500 dark:text-slate-400">सुरक्षा जाँच</span>
              <span className="block text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">१००% Virus Free</span>
            </div>
            <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <span className="block text-2xs font-semibold text-slate-500 dark:text-slate-400">डेभलपर</span>
              <span className="block text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-100 mt-0.5">BR Bhatta</span>
            </div>
          </div>
        </section>

        {/* 3. WHAT'S NEW & KEY FEATURES */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>नयाँ भर्सन (v7.9.80) का प्रमुख विशेषताहरू</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950/70 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">फुल-ब्लिड नयाँ ब्रान्ड लोगो (Full-Bleed Adaptive Icon)</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  सामसुङ One UI तथा सम्पूर्ण एन्ड्रोइड स्मार्टफोनहरूमा सेतो प्लेट पूर्ण रूपमा हटाइएको, भगवान् श्री गणेशजीको प्रिमियम एज-टु-एज फुल लोगो।
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">कञ्चनपुर / महेन्द्रनगर सङ्कल्प अटो-सिङ्क</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  पुण्यभूमौ नेपालदेशे शारदा-महाकाली तीरे कञ्चनपुर मण्डले सिद्धनाथ क्षेत्रे स्वगृहे स्वतः पहिचान तथा सम्पूर्ण परिवार सहितको शास्त्रीय सङ्कल्प।
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">विवाह ३६ गुण मिलान (Kundali Matching)</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  वर र कन्याको नाम वा जन्म विवरणबाट अष्टकूट ३६ गुण, नाडी दोष, भकूट दोष, गण मैत्री र परिहारसहितको सटिक नतिजा।
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <Scroll className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">नेपालका ७५३ वटै स्थानीय तह पञ्चाङ्ग</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  ७७ वटै जिल्लाका ७५३ वटै पालिकाको यथार्थ स्थानीय सूर्योदय, सूर्यास्त र काल साधन। ९५ वर्षका पुराना स्क्यान पात्रोहरू पढ्ने सुविधा।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. VERSION-WISE RELEASE LOG & FIXES (CHANGELOG) */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <History className="w-5 h-5 text-red-600 dark:text-amber-400" />
                <span>भर्सन अनुसार सुधार तथा विशेषताहरूको लग (Release Changelog)</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                BR Patro एपलाई निरन्तर परिष्कृत र भरपर्दो बनाउन प्रत्येक भर्सनमा गरिएका प्रमुख सुधार तथा बग समाधानहरू:
              </p>
            </div>
            <span className="self-start sm:self-auto px-3 py-1 rounded-full text-[11px] font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              कुल {RELEASE_LOGS.length} वटा प्रमुख रिलिज
            </span>
          </div>

          <div className="space-y-3.5">
            {RELEASE_LOGS.map((item, idx) => (
              <div 
                key={idx}
                className={`p-4 sm:p-5 rounded-2xl transition border ${
                  item.isLatest 
                    ? 'bg-white dark:bg-slate-900 border-red-500/50 dark:border-amber-500/50 shadow-md ring-1 ring-red-500/20' 
                    : 'bg-white/80 dark:bg-slate-900/70 border-slate-200 dark:border-slate-800 shadow-2xs'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-black tracking-wide ${
                      item.isLatest 
                        ? 'bg-red-600 text-white' 
                        : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 font-bold'
                    }`}>
                      {item.version}
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      ({item.build})
                    </span>
                    {item.tag && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                        ✨ {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <ul className="space-y-1.5 mt-2">
                  {item.fixes.map((fix, fIdx) => (
                    <li key={fIdx} className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                        item.isLatest ? 'text-red-500 dark:text-amber-400' : 'text-slate-400 dark:text-slate-500'
                      }`} />
                      <span>{fix}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 5. HOW TO INSTALL APK GUIDE */}
        <section className="bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Info className="w-4 h-4 text-blue-500" />
            <span>एप कसरी इन्स्टल गर्ने? (How to Install APK)</span>
          </h2>
          <ol className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">१</span>
              <span>माथिको <strong>"डाउनलोड गर्नुहोस् (Download APK)"</strong> बटन थिच्नुहोस्। फाइल स्वतः डाउनलोड हुन थाल्नेछ।</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">२</span>
              <span>डाउनलोड सकिएपछि मोबाइलको <strong>Notifications</strong> वा <strong>My Files &gt; Downloads</strong> फोल्डरमा गएर <code>BR_Patro_v7.9.80.apk</code> खोल्नुहोस्।</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">३</span>
              <span>यदि फोनले <em>"Install from unknown sources"</em> मागेमा <strong>Allow / Settings</strong> मा गएर Enable गर्नुहोस् र <strong>Install</strong> थिच्नुहोस्।</span>
            </li>
          </ol>
        </section>

        {/* 5. TRUST, SAFETY & POLICY DISCLOSURE (Google AdSense & Unwanted Software Standard) */}
        <section className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <span className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>सफ्टवेयर सुरक्षा तथा गोपनीयता प्रतिबद्धता (Software Trust & Safety)</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              Verified Safe • Ad-Free
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] leading-relaxed">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <strong className="block text-slate-900 dark:text-slate-200 mb-0.5">🔒 शून्य अनावश्यक अनुमति</strong>
              <span>यो एपले फोनबुक, क्यामेरा, कल लग वा अनावश्यक ब्याकग्राउन्ड लोकेसनको कुनै अनुमति माग्दैन।</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <strong className="block text-slate-900 dark:text-slate-200 mb-0.5">🛡️ कुनै एडवेयर/बन्डल नभएको</strong>
              <span>सिधै आधिकारिक GitHub Releases बाट डाउनलोड हुने हुनाले कुनै थप थर्ड-पार्टी इन्स्टलर सामेल छैन।</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <strong className="block text-slate-900 dark:text-slate-200 mb-0.5">📜 कानुनी तथा नीतिगत जानकारी</strong>
              <div className="space-x-2 mt-1">
                <Link href="/privacy-policy" className="text-emerald-600 dark:text-emerald-400 underline">गोपनीयता नीति</Link>
                <span>•</span>
                <Link href="/terms" className="text-emerald-600 dark:text-emerald-400 underline">सर्तहरू</Link>
                <span>•</span>
                <Link href="/disclaimer" className="text-emerald-600 dark:text-emerald-400 underline">अस्वीकरण</Link>
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="BR_Patro_v7.9.80.apk"
              className="inline-flex items-center gap-2 text-xs font-bold text-red-600 dark:text-red-400 hover:underline"
            >
              <Download className="w-3.5 h-3.5" />
              <span>BR_Patro_v7.9.80.apk (३८.१ MB) सिधै डाउनलोड गर्नुहोस्</span>
            </a>
          </div>
        </section>

      </main>

      <HomeFooter />
    </div>
  );
}
