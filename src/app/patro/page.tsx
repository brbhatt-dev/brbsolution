import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import HomeFooter from '@/components/HomeFooter';
import InteractiveOnlinePatro from '@/components/InteractiveOnlinePatro';
import BilingualSwitchBanner from '@/components/BilingualSwitchBanner';
import { getBilingualAlternates } from '@/lib/i18nRoutes';
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
  title: 'बी.आर. पात्रो २०८३ (BR Patro) — आजको तिथि, पञ्चाङ्ग, BS⇄AD मिति रूपान्तरण र साइत | BR Bhatta',
  description: 'वि.सं. २०८३/२०८४ को शुद्ध सूर्यसिद्धान्त वैदिक पञ्चाङ्ग, आजको तिथि, नक्षत्र, राहुकाल, विवाह/व्रतबन्ध शुभ साइत, राशिफल र BS⇄AD मिति कन्भर्टर। अनलाइन पात्रो चलाउनुहोस् वा हल्का (१०.६ MB) आधिकारिक APK (v7.9.95) डाउनलोड गर्नुहोस्।',
  keywords: [
    'नेपाली पात्रो २०८३',
    'आजको तिथि र पञ्चाङ्ग',
    'बी.आर. पात्रो',
    'BR Patro',
    'Nepali Calendar 2083 2084',
    'BS to AD Date Converter Nepal',
    'वैदिक पञ्चाङ्ग',
    'विवाह ३६ गुण मिलान',
    'विवाह साइत २०८३ २०८४',
    'व्रतबन्ध साइत',
    'राहुकाल',
    'आजको राशिफल',
    'BR Bhatta Patro'
  ],
  alternates: getBilingualAlternates('/patro', '/en/patro', 'ne'),
  openGraph: {
    title: 'बी.आर. पात्रो २०८३ (BR Patro) — नेपाली क्यालेन्डर, पञ्चाङ्ग तथा BS⇄AD कन्भर्टर',
    description: 'आजको तिथि, शुद्ध वैदिक पञ्चाङ्ग, विवाह ३६ गुण मिलान, शुभ साइत र दैनिक राशिफल। अनलाइन पात्रो चलाउनुहोस् वा हल्का APK डाउनलोड गर्नुहोस्।',
    url: 'https://www.brbhatta.com/patro',
    siteName: 'BR Bhatta Software Solutions',
    images: [
      {
        url: 'https://www.brbhatta.com/assets/br-patro-og.png',
        width: 1200,
        height: 630,
        alt: 'BR Patro Official Calendar & APK v7.9.95',
      },
    ],
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'बी.आर. पात्रो २०८३ (BR Patro) — नेपाली क्यालेन्डर, पञ्चाङ्ग र कुण्डली',
    description: 'शुद्ध वैदिक पञ्चाङ्ग, विवाह ३६ गुण मिलान, दैनिक साइत र BS⇄AD मिति रूपान्तरण।',
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
    version: "v7.9.95",
    build: "Build 195",
    date: "२०८३ कार्तिक ३० (१६ नोभेम्बर २०२६)",
    tag: "पछिल्लो ताजा रिलिज (Latest)",
    isLatest: true,
    fixes: [
      "✨ ४×१ स्लिम विजेटमा अब आजका चाडपर्व, एकादशी र विशेष दिन (widget_event) पनि देखिने र मिति सन्तुलित (Nov 16, 2026) बनाइएको।",
      "🌗 Samsung OneUI Auto Light / Dark Frosted Glass विजेट थिम: फोनको डे/नाइट मोड अनुसार विजेट स्वतः लाइट वा डार्क फ्रस्टेड ग्लासमा बदलिने।",
      "🌟 ४×२ मुख्य विजेटमा आजको नक्षत्र र राहुकाल समय, शनिबार/सार्वजनिक बिदाको रातो 'बिदा' ब्याज तथा पञ्चाङ्ग/राशिफल र पात्रोमा सिधा ट्याप सर्टकट।"
    ]
  },
  {
    version: "v7.9.94",
    build: "Build 194",
    date: "२०८३ कार्तिक ३० (१६ नोभेम्बर २०२६)",
    fixes: [
      "✨ ४×१ स्लिम र २×२ स्क्वायर होम स्क्रिन विजेटमा सुधार: लामो तिथि पाठ नकाटिने (२-लाइन पूर्ण प्रदर्शन) र सन्तुलित कोरल मिति ब्याज।",
      "🎨 OneUI Frosted Glass होम स्क्रिन विजेट (४×२, ४×१ स्लिम र २×२ टाइल): प्रिमियम ट्रान्सलुसेन्ट ग्लास कार्ड र स्पष्ट अंग्रेजी/नेपाली मिति।",
      "🔄 मध्यरात र बिहान ६:३० बजे स्वतः विजेट र बिहानी तिथि नोटिफिकेसन अपडेट हुने प्रविधि।"
    ]
  },
  {
    version: "v7.9.93",
    build: "Build 193",
    date: "२०८३ कार्तिक ३० (१६ नोभेम्बर २०२६)",
    fixes: [
      "🎨 नयाँ OneUI Frosted Glass होम स्क्रिन विजेट डिजाइन (४×२ मुख्य कार्ड, ४×१ स्लिम बार र २×२ टाइल): प्रिमियम ट्रान्सलुसेन्ट ग्लास कार्ड, कोरल-रातो मिति ब्याज, स्पष्ट तिथि र सूर्योदय/सूर्यास्त फुटर।",
      "🔄 एप नखोले पनि मध्यरात र बिहान ६:३० बजे स्वतः विजेट र बिहानी तिथि नोटिफिकेसन अपडेट हुने प्रविधि।",
      "👶 न्वारन अक्षर र भाग्य रत्न, 🕉️ जुठो-सुतक निर्णय र 🌟 मेरो आजको चन्द्रबल र ताराबल सुविधा।"
    ]
  },
  {
    version: "v7.9.92",
    build: "Build 192",
    date: "२०८३ कार्तिक ३० (१६ नोभेम्बर २०२६)",
    fixes: [
      "🔄 तीनवटै होम स्क्रिन विजेट (४×२, ४×१ स्लिम, २×२ टाइल) स्वचालित पञ्चाङ्ग सिङ्क: एप नखोलीकनै मध्यरात र प्रत्येक दिन स्वतः स्पष्ट तिथि (AM/PM), चाडपर्व र सूर्योदय/सूर्यास्त अपडेट हुने।",
      "🔔 दोहोरो नोटिफिकेसन सुरक्षा र बिहानी तिथि अलर्ट: ब्रोडकास्ट सूचनाले आजको बिहानी पञ्चाङ्ग/तिथि नोटिफिकेसन नछोप्ने (अलग नोटिफिकेसन च्यानल ID) र पहिले नै अपडेट भइसकेको डिभाइसमा दोहोरिएर अपडेट अलर्ट नआउने।",
      "👶 न्वारन अक्षर र भाग्य रत्न, 🕉️ जुठो-सुतक निर्णय र 🌟 मेरो आजको चन्द्रबल र ताराबल सुविधा।"
    ]
  },
  {
    version: "v7.9.91",
    build: "Build 191",
    date: "२०८३ कार्तिक ३० (१६ नोभेम्बर २०२६)",
    fixes: [
      "🔄 होम स्क्रिन विजेट १००% स्वचालित सिङ्क (Auto-Sync Engine): एप नखोले पनि मध्यरात १२:०० बजे र प्रत्येक दिन स्वतः आजको मिति, स्पष्ट तिथि (AM/PM सहित), चाडपर्व र सूर्योदय/सूर्यास्त होम स्क्रिनका तीनवटै विजेटमा अपडेट हुने नेटिभ पञ्चाङ्ग इन्जिन (`native_panchanga.json`) जडान।",
      "🔔 एप नखोलीकनै बिहानी तिथि र पर्व नोटिफिकेसन: Android 12–16 मा एप बन्द रहेको अवस्थामा पनि बिहानको अलार्म र स्टाटस बार नोटिफिकेसनमा आजको पूरा तिथि, सूर्योदय र पर्वको जानकारी स्वतः आउने बनाइएको।",
      "👶 न्वारन अक्षर र भाग्य रत्न, 🕉️ जुठो-सुतक निर्णय र 🌟 मेरो आजको चन्द्रबल र ताराबल सुविधा समावेश।"
    ]
  },
  {
    version: "v7.9.90",
    build: "Build 190",
    date: "२०८३ कार्तिक २९ (१५ नोभेम्बर २०२६)",
    fixes: [
      "👶 न्वारन अक्षर, नाम सुझाव, राशि र भाग्य रत्न: जन्म मिति र समय वा सिधा नक्षत्र/चरणबाट १ ट्यापमा न्वारनको मुख्य अक्षर, छोरा र छोरीका सुन्दर नेपाली नामहरू, अवकहडा चक्र र राशि अनुसारको भाग्य रत्न/उपरत्न र बीज मन्त्र थाहा पाउने सुविधा।",
      "🕉️ जुठो र सुतक कति दिन? (वैदिक आशौच निर्णय): निर्णयसिन्धु, धर्मसिन्धु र गरुड पुराणका आधारमा ३ पुस्ता, ७ पुस्ता, १४ पुस्ता समानोदक, सगोत्री, विवाहित छोरी, मावली, ससुराली र विदेश (देशान्तर) मा मृत्यु वा जन्म हुँदा कति दिन बार्ने भन्ने स्पष्ट शास्त्रीय निर्णय।",
      "🌟 मेरो आजको चन्द्रबल र ताराबल (व्यक्तिगत लक्की मिटर): गृहपृष्ठमै आफ्नो जन्म राशि र नक्षत्र अनुसार आजको शुभ प्रतिशत स्कोर, चन्द्रबल, ताराबल, घातचक्र र आगामी ७ दिनको व्यक्तिगत शुभ-अशुभ तालिका हेर्ने र सेयर गर्ने सुविधा।"
    ]
  },
  {
    version: "v7.9.89",
    build: "Build 189",
    date: "२०८३ कार्तिक २९ (१५ नोभेम्बर २०२६)",
    fixes: [
      "Google Play Store १००% नीति तथा सुरक्षा मापदण्ड (Play Store Compliance): संवेदनशील पर्मिसन (USE_EXACT_ALARM, REQUEST_IGNORE_BATTERY_OPTIMIZATIONS) र निष्क्रिय AdMob/SDK कम्पोनेन्ट पूर्ण रूपमा हटाई १००% Zero-Ads र सफा म्यानिफेस्ट कायम गरिएको।",
      "पारदर्शी गोपनीयता नीति र डेटा सेफ्टी: इन-एप र वेब गोपनीयता नीति (brbhatta.com/patro/privacy) अद्यावधिक गरिएको तथा एन्ड्रोइड १५/१६ (Target SDK 36) अनुकूल बनाइएको।"
    ]
  },
  {
    version: "v7.9.88",
    build: "Build 188",
    date: "२०८३ कार्तिक २९ (१५ नोभेम्बर २०२६)",
    fixes: [
      "स्पष्ट तिथि, नक्षत्र र करण समय: '१०:२६ सम्म' को सट्टा अब स्पष्ट नेपाली समय अवधि र AM/PM ('राति १०:२६ PM सम्म', 'बिहान ०९:१७ AM सम्म') तथा मध्यरात २४+ घण्टाको शुद्ध रूप देखिने।",
      "सफा सिङ्गल मेनु हेडर: माथिल्लो बारबाट दोहोरिएको ३-डट मेनु हटाई बायाँ ड्रअर मेनुमा 'चाडपर्व र एप थिम ग्यालरी' एकीकृत गरिएको।"
    ]
  },
  {
    version: "v7.9.87",
    build: "Build 187",
    date: "२०८३ कार्तिक २९ (१५ नोभेम्बर २०२६)",
    fixes: [
      "नेभिगेसन तथा नेटिभ इन्टेन्ट सुधार: Android 15/16 मा हार्डवेयर Back बटनबाट मोडल र सब-भ्यू सजिलै बन्द हुने, साथै सेटिङबाट फोन (tel:) र ईमेल (mailto:) सिधै डायलर र मेल एपमा खुल्ने।",
      "फुलस्क्रिन सुरक्षित लेआउट: ८ ओभरले सब-भ्यू, PDF रिडर तल्लो बार र मोडल पानाहरू फोनको ३-बटन नेभिगेसन बारबाट नढाकिने गरी सफा सुरक्षित प्याडिङ, साथै ट्याब स्क्रोल रिसेट र डार्क मोड कन्ट्रास्ट सुधार।",
      "पितृ सङ्कल्प, हरिगढ तथा पञ्चाङ्ग शुद्धीकरण: तीन पुस्ता पितृ सङ्कल्पमा नक्षत्र, योग, करण र संवत्सर स्वतः भरिने, हरिगढ शास्त्रीय ज्ञान सफा HTML बोल्डमा देखिने र योग तथा चौघडिया समयमा स्पष्ट AM/PM देखिने।"
    ]
  },
  {
    version: "v7.9.86",
    build: "Build 186",
    date: "२०८३ कार्तिक २८ (१४ नोभेम्बर २०२६)",
    fixes: [
      "कुण्डली UI र डार्क मोड पूर्ण सुधार: षोडशवर्ग (D1-D60) र विशेष लग्न (AL/UL/KL) ट्याब खाली देखिने समस्या समाधान, लाइट मोड सक्रिय बटन रङ्ग सुधार र सबै ट्याब डार्क/सेपिया थिम अनुकूल।",
      "उत्तर भारतीय चक्र चार्ट र PDF लेआउट सुधार: भाव ३, ५, ९ र ११ का साँघुरा कोठामा बहुग्रह नाम खप्टिने/काटिने समस्या हटाई सफा ठाडो स्ट्याकिङ।",
      "कुण्डली तथा पञ्चाङ्ग डेटा शुद्धीकरण: ७५३ पालिकाको सुक्ष्म अक्षांश/देशान्तर लागू, २०८३/८४ नक्षत्र-योग नाम मेल र सटीक ट्रान्जिट, वर्षफल ताजिक योग तथा D4 चतुर्थांश सूत्र सुधार।"
    ]
  },
  {
    version: "v7.9.85",
    build: "Build 185",
    date: "२०८३ कार्तिक २८ (१४ नोभेम्बर २०२६)",
    fixes: [
      "गोपनीयता-सुरक्षित सक्रिय डिभाइस र भर्सन एनालिटिक्स: व्यक्तिगत जानकारी (नाम, फोन, IP) बिनै सक्रिय इन्स्टल र भर्सन अपडेट ट्र्याक हुने Zero-PII Anonymous Heartbeat थपिएको।",
      "नोटीफिकेसन र बाह्य ब्राउजर राउटिङ सुधार: नोटीफिकेसन ब्यानर, घण्टी (🔔) र स्ट्याटस बार ट्याप गर्दा सिधै सही मोडल र बाह्य ब्राउजरमा APK डाउनलोड खुल्ने।",
      "अफलाइन-सुरक्षित पृष्ठभूमि सिङ्क: इन्टरनेट नभएको बेला एपको गतिमा कुनै असर नपर्ने र अनलाइन हुँदा स्वतः भर्सन सिङ्क हुने।"
    ]
  },
  {
    version: "v7.9.84",
    build: "Build 184",
    date: "२०८३ कार्तिक २८ (१४ नोभेम्बर २०२६)",
    fixes: [
      "नोटीफिकेसन लिंक र बाह्य ब्राउजर राउटिङ सुधार: एपको नोटीफिकेसन ब्यानर र घण्टी (🔔) मोडलबाट 'नयाँ भर्सन डाउनलोड / थप विवरण' थिच्दा सिधै मोबाइलको बाह्य ब्राउजर (Chrome/Brave) मा खुलेर APK डाउनलोड हुने।",
      "सिस्टम पुस नोटीफिकेसन ट्याप सुधार: मोबाइलको स्ट्याटस बारबाट नोटीफिकेसन ट्याप गर्दा सिधै एपको नोटीफिकेसन मोडल (🔔) खुल्ने र अनलाइन अपडेट ब्यानर स्पष्ट देखिने।",
      "एन्ड्रोइड WebView सुरक्षित लिङ्क ह्यान्डलिङ: एप भित्रका सबै बाह्य HTTP/HTTPS लिङ्कहरू बाह्य ब्राउजरमा सुरक्षित रूपमा खुल्ने।"
    ]
  },
  {
    version: "v7.9.83",
    build: "Build 183",
    date: "२०८३ कार्तिक २८ (१४ नोभेम्बर २०२६)",
    fixes: [
      "कस्टम हेडर र कन्ट्रास्ट सुधार (.view-topbar-custom): पूजा मन्दिर, चाडपर्व कथा, पूजा चेकलिस्ट, स्वप्न फल, तीन पुस्ता पितृ सङ्कल्प र चन्द्र/बाण विचारका रंगीन हेडरहरू लाइट, डार्क र सेपिया सबै थिममा पूर्ण स्पष्ट।",
      "हराएको पितृ सङ्कल्प सेक्सन प्रत्यक्ष उपलब्ध: होम Quick Grid (४×४ लेआउट) र मुख्य मेनुमा 'तीन पुस्ता पितृ सङ्कल्प तथा तर्पण' सुविधा प्रत्यक्ष जोडिएको।",
      "रीडर, थिम ग्यालरी र सर्च बार सेफ एरिया: अग्निस्थापना रीडरको तलको बटन र थिम ग्यालरीको Apply बटन एन्ड्रोइड नेभिगेसन बारमा नदबिने सुधार।",
      "शुभ साइत २०८४, संस्कृत सङ्कल्प र गोत्रावलि सफाइ: साइत पृष्ठको डुप्लिकेट बक्स हटाइ वि.सं. २०८४ साइत सिङ्क, सङ्कल्प हेडर Copy/Share पङ्क्तिबद्धता र स्थानीय सूर्योदय/सूर्यास्त १२-घण्टे AM/PM मिलान।"
    ]
  },
  {
    version: "v7.9.82",
    build: "Build 182",
    date: "२०८३ कार्तिक २८ (१४ नोभेम्बर २०२६)",
    fixes: [
      "गाढा (Dark) थिम पूर्ण स्पष्टता: राहुकाल/अभिजित् ग्रिड, ब्रोडकास्ट कार्ड, साइत फिल्टर र एन्ड्रोइड स्टेटस/नेभिगेसन बार आइकनहरू उच्च कन्ट्रास्टमा सुधार।",
      "पात्रो हेडर र मिति चयन पपअप: लामो शीर्षक ओभरल्याप र मिति चयनमा BS वर्ष क्लिपिङ समाधान तथा सूर्यास्त/मुहूर्त समयमा स्पष्ट AM/PM।"
    ]
  },
  {
    version: "v7.9.81",
    build: "Build 181",
    date: "२०८३ कार्तिक २७ (१३ नोभेम्बर २०२६)",
    fixes: [
      "२००-वर्षे ऐतिहासिक पात्रो डेटाबेस तथा पञ्चाङ्ग इञ्जिन एकीकरण र पुस नोटिफिकेसन स्थिरता सुधार।"
    ]
  },
  {
    version: "v7.9.80",
    build: "Build 180",
    date: "२०८३ कार्तिक २६ (१२ नोभेम्बर २०२६)",
    fixes: [
      "पृष्ठभूमि अलार्म तथा नोटिफिकेसन पुनर्जागरण (Background Persistence): MY_PACKAGE_REPLACED तथा BootReceiver सुधार गरी एप अपडेट भएपछि वा मोबाइल बन्द भएर खुल्दा पनि बिहानी ६:३० बजेको पञ्चाङ्ग अलार्म नहट्ने ग्यारेन्टी।",
      "झुटो अपडेट सूचना समाधान (False Alert Shield): नवीनतम भर्सन इन्स्टल भइसकेका युजरलाई एप खुल्दा पुनः 'अपडेट गर्नुहोस्' भन्ने अनावश्यक नोटिफिकेसन आउन नदिने स्मार्ट भर्सन शिल्ड।",
      "२००-वर्षे १-क्लिक मिति चयन (1999/01/01 देखि 2199/12/31 BS): क्यालेन्डरमा 'मिति चयन' बटन थप, जहाँबाट जुनसुकै साल, महिना र गते छानेर सिधै सो मितिको पञ्चाङ्ग तथा चाडपर्वमा पुग्न सकिने।",
      "हरिगढ अहर्गण साधन दैनिक वृद्धि सुधार: कार्तिक २५ मा ३२६ (४८७३२६ दिन) र कार्तिक २६ मा ३२७ (४८७३२७ दिन) हुने गरी सूर्यसिद्धान्त तथा खण्डखाद्यक सावन दिनको यथार्थ सिङ्क।",
      "ब्याट्री अप्टिमाइजेसन १-क्लिक छुट: सेटिङमा 'ब्याट्री अप्टिमाइजेसन सुरक्षा' कार्ड थप गरी Samsung/One UI/Xiaomi मा पनि ब्याकग्राउन्ड अलार्म नरोकिने सुविधा।"
    ]
  },
  {
    version: "v7.9.79",
    build: "Build 179",
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
    build: "Build 178",
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

const WHATS_NEW_VERSION = "v7.9.95";

const WHATS_NEW_FEATURES = [
  {
    title: "👶 न्वारन अक्षर, नाम सुझाव, राशि र भाग्य रत्न",
    description: "जन्म मिति र समय वा सिधा नक्षत्र र चरणबाट १ ट्यापमा न्वारनको मुख्य अक्षर, छोरा र छोरीका सुन्दर नेपाली नामहरू, अवकहडा चक्र र भाग्य रत्न थाहा पाउने सुविधा।",
    iconBoxClass: "bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400",
    Icon: Sparkles,
  },
  {
    title: "🕉️ जुठो र सुतक कति दिन? (वैदिक आशौच निर्णय)",
    description: "निर्णयसिन्धु र धर्मसिन्धुका आधारमा ३ पुस्ता, ७ पुस्ता, १४ पुस्ता समानोदक, सगोत्री, विवाहित छोरी, मावली र विदेशमा मृत्यु वा जन्म हुँदा कति दिन बार्ने भन्ने स्पष्ट निर्णय।",
    iconBoxClass: "bg-red-100 dark:bg-red-950/70 text-red-600 dark:text-red-400",
    Icon: Compass,
  },
  {
    title: "🌟 मेरो आजको चन्द्रबल र ताराबल (लक्की मिटर)",
    description: "गृहपृष्ठमै आफ्नो जन्म राशि र नक्षत्र अनुसार आजको शुभ प्रतिशत स्कोर, चन्द्रबल, ताराबल, घातचक्र र आगामी ७ दिनको व्यक्तिगत शुभ-अशुभ तालिका हेर्ने र सेयर गर्ने सुविधा।",
    iconBoxClass: "bg-indigo-100 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400",
    Icon: Calendar,
  },
  {
    title: "Google Play Store १००% नीति तथा सुरक्षा मापदण्ड",
    description: "१००% Zero-Ads, सफा म्यानिफेस्ट, पारदर्शी डेटा सुरक्षा, स्पष्ट तिथि/नक्षत्र AM/PM समय र Android 15/16 फुलस्क्रिन अनुकूलन।",
    iconBoxClass: "bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400",
    Icon: ShieldCheck,
  },
];

export default function PatroDownloadPage() {
  const downloadUrl = "https://github.com/imtechboss/imtechboss/releases/download/v7.9.95/BR_Patro_v7.9.95.apk";
  const releasePageUrl = "https://github.com/imtechboss/imtechboss/releases/tag/v7.9.95";
  const cleanVersion = WHATS_NEW_VERSION.replace(/^v/, "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://www.brbhatta.com/patro#webapp",
        name: "बी.आर. पात्रो (BR Patro) — अनलाइन नेपाली क्यालेन्डर र पञ्चाङ्ग",
        url: "https://www.brbhatta.com/patro",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "All",
        inLanguage: "ne",
        description: "वि.सं. २०८१-२०८४ नेपाली पात्रो, आजको तिथि, सूर्यसिद्धान्त पञ्चाङ्ग, राहुकाल, BS⇄AD मिति रूपान्तरण र शुभ साइत।"
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.brbhatta.com/patro#android",
        name: "BR Patro (बी.आर. पात्रो) Android App",
        operatingSystem: "Android 7.0+",
        applicationCategory: "LifestyleApplication",
        softwareVersion: cleanVersion,
        downloadUrl,
        fileSize: "10.6 MB",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "NPR"
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "गृहपृष्ठ (Home)", item: "https://www.brbhatta.com/" },
          { "@type": "ListItem", position: 2, name: "बी.आर. पात्रो (BR Patro २०८३)", item: "https://www.brbhatta.com/patro" }
        ]
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "BR Patro अनलाइन र अफलाइन एपमा के के सुविधाहरू छन्?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "BR Patro मा २०८१-२०८४ को नेपाली क्यालेन्डर, दैनिक पञ्चाङ्ग (तिथि, वार, नक्षत्र, योग, करण, राहुकाल), वि.सं. बाट ई.सं. (BS to AD) मिति रूपान्तरण, ७५३ पालिकाको सूर्योदय-सूर्यास्त, विवाह ३६ गुण मिलान, कुण्डली निर्माण र शुभ साइतहरू पूर्ण निःशुल्क उपलब्ध छन्।"
            }
          },
          {
            "@type": "Question",
            name: "वि.सं. (BS) बाट ई.सं. (AD) र ई.सं. बाट वि.सं. मिति कसरी रूपान्तरण गर्ने?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "यही /patro पृष्ठको माथि रहेको अनलाइन इन्टरएक्टिभ पात्रोमा रहेको Date Converter बाट सेकेन्डमै BS र AD मिति आपसमा बदल्न सकिन्छ।"
            }
          },
          {
            "@type": "Question",
            name: "BR Patro Android APK सुरक्षित र विज्ञापन-रहित छ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "हो। BR Patro १००% विज्ञापन-रहित (Zero Ads) छ र आधिकारिक GitHub Releases मार्फत डिजिटल रूपमा साइन गरिएको सफा APK डाउनलोड गर्न सकिन्छ।"
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

        {/* Semantic Page H1 Header */}
        <BilingualSwitchBanner mode="to-en" href="/en/patro" />
        <header className="space-y-1.5 px-1">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-slate-900 dark:text-white leading-snug">
            बी.आर. पात्रो २०८३/२०८४ — नेपाली क्यालेन्डर, आजको तिथि, पञ्चाङ्ग र BS⇄AD मिति कन्भर्टर
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            दैनिक वैदिक पञ्चाङ्ग, राशिफल, ७५३ स्थानीय तहको सूर्योदय-सूर्यास्त, विवाह/व्रतबन्ध शुभ साइत र आधिकारिक BR Patro Android एप डाउनलोड।
          </p>
        </header>

        {/* 1. PRIMARY FLAGSHIP EXPERIENCE: IN-BROWSER INTERACTIVE BR PATRO CALENDAR & PANCHANGA */}
        <section className="w-full">
          <InteractiveOnlinePatro />
        </section>

        {/* 2. OFFICIAL ANDROID APK DOWNLOAD SECTION (v7.9.95) */}
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
                  Version 7.9.95
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Build 195
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                  📦 १०.७ MB (लाइटवेट)
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
              <span className="block text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-100 mt-0.5">२०८३ कार्तिक ३०</span>
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
            <span>नयाँ भर्सन ({WHATS_NEW_VERSION}) का प्रमुख विशेषताहरू</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHATS_NEW_FEATURES.map(({ title, description, iconBoxClass, Icon }) => (
              <div
                key={title}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-start gap-4"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBoxClass}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
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
              <span>डाउनलोड सकिएपछि मोबाइलको <strong>Notifications</strong> वा <strong>My Files &gt; Downloads</strong> फोल्डरमा गएर <code>BR_Patro_v7.9.95.apk</code> खोल्नुहोस्।</span>
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
              className="inline-flex items-center gap-2 text-xs font-bold text-red-600 dark:text-red-400 hover:underline"
            >
              <Download className="w-3.5 h-3.5" />
              <span>BR_Patro_v7.9.95.apk (१०.७ MB) सिधै डाउनलोड गर्नुहोस्</span>
            </a>
          </div>
        </section>

        {/* 6. SEO TOPICAL GUIDE & FAQ (Panchanga, Date Converter & Saait) */}
        <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Scroll className="w-5 h-5 text-red-600 dark:text-amber-400" />
              <span>नेपाली पात्रो २०८३/२०८४, वैदिक पञ्चाङ्ग र मिति रूपान्तरण (FAQ र गाइड)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>बी.आर. पात्रो (BR Patro)</strong> ले सूर्यसिद्धान्त गणित र नेपाल पञ्चाङ्ग निर्णायक विकास समितिको मापदण्ड अनुसार काठमाडौँसहित ७५३ स्थानीय तहको सटीक सूर्योदय, तिथि, नक्षत्र, योग, करण, राहुकाल तथा <strong>BS ⇄ AD मिति रूपान्तरण</strong> अनलाइन र अफलाइन दुवै रूपमा प्रदान गर्दछ।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <Link
              href="/tools/real-estate-saait-calendar"
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-red-400 transition-colors space-y-1"
            >
              <strong className="block text-slate-900 dark:text-white">🏠 घरजग्गा तथा गृहप्रवेश साइत</strong>
              <span className="text-slate-600 dark:text-slate-400 block">
                जग्गा पास, शिलान्यास र गृहप्रवेश शुभ मुहूर्त हेर्नुहोस्।
              </span>
            </Link>
            <Link
              href="/articles/nepali-patro-2081-2082-festivals-holidays-bibaha-saait-panchanga"
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-red-400 transition-colors space-y-1"
            >
              <strong className="block text-slate-900 dark:text-white">📜 चाडपर्व, बिदा र विवाह साइत गाइड</strong>
              <span className="text-slate-600 dark:text-slate-400 block">
                विवाह, व्रतबन्ध, पास्नी र पञ्चाङ्ग विधि विस्तृतमा पढ्नुहोस्।
              </span>
            </Link>
            <Link
              href="/tools/malpot-calculator"
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-red-400 transition-colors space-y-1"
            >
              <strong className="block text-slate-900 dark:text-white">🏛️ मालपोत तथा जग्गा पास क्यालकुलेटर</strong>
              <span className="text-slate-600 dark:text-slate-400 block">
                शुभ दिनमा जग्गा पास गर्न लाग्ने राजस्व र लाभकर हिसाब गर्नुहोस्।
              </span>
            </Link>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
              <strong className="block text-slate-900 dark:text-white mb-0.5">
                प्रश्न: BR Patro मा आजको तिथि, राहुकाल र शुभ साइत कसरी हेर्ने?
              </strong>
              <span className="text-slate-600 dark:text-slate-300">
                माथि रहेको अनलाइन पात्रोको आजको कार्ड वा कुनै पनि मितिमा ट्याप गर्नासाथ सो दिनको पूरा पञ्चाङ्ग (तिथि, वार, नक्षत्र, योग, करण, राहुकाल, दिशाशूल र शुभ साइत) खुल्छ।
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
              <strong className="block text-slate-900 dark:text-white mb-0.5">
                प्रश्न: विवाह ३६ गुण मिलान र जन्म कुण्डली कहाँबाट हेर्न मिल्छ?
              </strong>
              <span className="text-slate-600 dark:text-slate-300">
                निःशुल्क एन्ड्रोइड एप ({WHATS_NEW_VERSION}) इन्स्टल गरेपछि इन्टरनेट बिनै अष्टकूट ३६ गुण मिलान, उत्तर/दक्षिण भारतीय चक्र चार्ट, षोडशवर्ग र दशा/गोचर हेर्न सकिन्छ।
              </span>
            </div>
          </div>
        </section>

      </main>

      <HomeFooter />
    </div>
  );
}
