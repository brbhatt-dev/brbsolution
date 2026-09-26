import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Calculator, 
  Split, 
  Receipt, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  FileCode,
  ShieldCheck,
  Building2,
  Scale,
  GraduationCap,
  QrCode,
  BookOpen,
  ArrowRightLeft,
  Coins,
  Image as ImageIcon,
  FileStack,
  FileText,
  Compass,
  ScrollText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'अनलाइन डिजिटल उपकरण तथा PDF स्टुडियो | BR Bhatta',
  description: 'नेपालको जग्गा नापजाँच, Preeti to Unicode, अक्षरेपी, Images to PDF, PDF Merge/Split, २००KB फोटो कम्प्रेसर, Excel to KML र कानुनी टेम्प्लेटहरूको निःशुल्क डिजिटल हब।',
  keywords: [
    'Preeti to Unicode Nepal',
    'Number to Words Nepali अक्षरेपी',
    'Images to PDF Nepal',
    'PDF Merge Split Nepal',
    'Photo Compressor 200kb Loksewa',
    'Nepal Land Calculator',
    'Excel to KML Nepal',
    'AutoCAD LISP Nepal',
    'BR Bhatta Tools'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools',
  },
};

interface ToolCategory {
  categoryName: string;
  categoryDesc: string;
  badgeColor: string;
  tools: {
    id: string;
    titleNp: string;
    titleEn: string;
    description: string;
    badge: string;
    icon: React.ElementType;
    href: string;
    features: string[];
  }[];
}

const TOOL_SECTIONS: ToolCategory[] = [
  {
    categoryName: '📑 PDF तथा डकुमेन्ट स्टुडियो (PDF & Document Studio)',
    categoryDesc: 'नागरिकता, लालपुर्जा तथा सरकारी फारमका कागजात मिलाउने, फोटो कम्प्रेस गर्ने र PDF सम्पादन गर्ने टूल्स।',
    badgeColor: 'bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300',
    tools: [
      {
        id: 'image-compressor',
        titleNp: 'नागरिकता तथा फोटो कम्प्रेसर (Compress under 200KB)',
        titleEn: 'Document & Photo Compressor (<200KB)',
        description: 'लोक सेवा आयोग, नागरिक एप वा अनलाइन मालपोतमा फारम भर्न मोबाइलको ५-१० MB को फोटोलाई गुणस्तर नघटाई १००-२०० KB मा झार्नुहोस्।',
        badge: 'लोकसेवा / मालपोत विशेष',
        icon: ImageIcon,
        href: '/tools/image-compressor',
        features: [
          '५० KB, १०० KB, १५० KB, र २०० KB द्रुत प्रिसेट',
          'नागरिकता र लालपुर्जाका अक्षर स्पष्ट देखिने',
          '१००% निजी (फाइल सर्भरमा जाँदैन)',
          '१-क्लिकमा तत्काल डाउनलोड'
        ]
      },
      {
        id: 'images-to-pdf',
        titleNp: 'तस्विरहरूबाट A4 PDF बनाउनुहोस् (Images to PDF)',
        titleEn: 'Photos to Printable A4 PDF Converter',
        description: 'मोबाइलबाट खिचेका लालपुर्जा, नक्सा, नागरिकता वा शैक्षिक प्रमाणपत्रका फोटोहरू मिलाएर क्रमबद्ध A4 PDF फाइल बनाउनुहोस्।',
        badge: 'A4 PDF जेनेरेटर',
        icon: FileText,
        href: '/tools/images-to-pdf',
        features: [
          'धेरै फोटोहरू एकैपटक थप्न र क्रम मिलाउन सकिने',
          'ठाडो (Portrait) वा तेर्सो (Landscape) पाना चयन',
          'अटोमेटिक A4 साइज र मार्जिन फिटिङ',
          'उच्च गुणस्तरको सफा PDF आउटपुट'
        ]
      },
      {
        id: 'pdf-tools',
        titleNp: 'PDF Merge & Split (जोड्ने र पाना छुट्टाउने)',
        titleEn: 'PDF Merger & Page Extractor',
        description: 'धेरै वटा PDF फाइललाई एउटैमा जोड्नुहोस् (Merge) वा ठूलो फाइलबाट आफूलाई चाहिएको पाना मात्र अलग गर्नुहोस् (Split)।',
        badge: 'PDF सम्पादक',
        icon: FileStack,
        href: '/tools/pdf-tools',
        features: [
          'असीमित PDF फाइलहरू एकै ठाउँमा जोड्न मिल्ने',
          'पानाहरूको क्रम तल-माथि सार्न सजिलो',
          'नम्बर रेन्ज हालेर (उदा: 1-3, 5) पाना निकाल्न मिल्ने',
          'सुरक्षित एवं तीव्र गतिमा चल्ने'
        ]
      }
    ]
  },
  {
    categoryName: '✍️ नेपाली अफिस तथा सरकारी लिखत टूल्स (Nepali Office Utilities)',
    categoryDesc: 'नेपाली टाइप, बैंक चेक/भौचर, लिखत तयार गर्ने र सरकारी कार्यालयमा दैनिक चाहिने टूल्स।',
    badgeColor: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300',
    tools: [
      {
        id: 'preeti-to-unicode',
        titleNp: 'Preeti ⇄ Nepali Unicode Converter',
        titleEn: 'Dual Font Converter (Preeti / Unicode)',
        description: 'सरकारी कार्यालय, मालपोत, अदालत तथा वेबसाइटहरूमा प्रयोग गर्न प्रिती फन्टलाई युनिकोडमा र युनिकोडलाई प्रितीमा तत्काल बदल्नुहोस्।',
        badge: 'दैनिक लाखौँ खोजिने',
        icon: ArrowRightLeft,
        href: '/tools/preeti-to-unicode',
        features: [
          'Preeti ➔ Unicode र Unicode ➔ Preeti दुवै दिशा',
          'टाइप गर्दागर्दै तत्काल लाइभ कन्भर्सन',
          '१-क्लिक कपी तथा .txt टेक्स्ट फाइल डाउनलोड',
          'शब्द तथा अक्षर गणना (Word & Char Counter)'
        ]
      },
      {
        id: 'number-to-words',
        titleNp: 'नेपाली संख्या अक्षरेपी क्यालकुलेटर (Number to Words)',
        titleEn: 'Cheque & Voucher Amount in Words',
        description: 'अंकमा रकम टाइप गर्नुहोस् र तुरुन्तै शुद्ध नेपाली शब्द (अक्षेरुपी), अंग्रेजी शब्द र बैंक चेक नमुना ढाँचामा प्राप्त गर्नुहोस्।',
        badge: 'चेक तथा भौचर विशेष',
        icon: Coins,
        href: '/tools/number-to-words',
        features: [
          'शुद्ध नेपाली देवनागरी शब्द (अक्षेरुपी ... रुपैयाँ मात्र)',
          'In English Words (Rupees ... Only)',
          'नेपाली बैंक चेकको आकर्षक वास्तविक प्रिभ्यू',
          'हजार, लाख, करोड, अरब, खरब सम्म शुद्ध गणना'
        ]
      },
      {
        id: 'legal-templates',
        titleNp: 'जग्गा बैनापट्टा तथा नापी निवेदन टेम्प्लेट',
        titleEn: 'Legal Bayana & Survey Application Templates',
        description: 'जग्गाको विवरण, कित्ता नं र रकम भरेपछि स्वतः कानुनी मान्यता प्राप्त बैनापट्टा कागज वा नापी कार्यालयको निवेदन A4 ढाँचामा तयार हुने।',
        badge: 'A4 प्रिन्टेबल लिखत',
        icon: ScrollText,
        href: '/tools/legal-templates',
        features: [
          'जग्गा खरिद-बिक्री आधिकारिक बैनापट्टा कागज',
          'नापी कार्यालय सीमांकन (साँध-सिमाना) निवेदन',
          'नक्सा ट्रेस तथा फिल्डबुक उतार माग निवेदन',
          '🖨️ १-क्लिक A4 प्रिन्ट वा कपी सुविधा'
        ]
      }
    ]
  },
  {
    categoryName: '📐 जग्गा नापजाँच, कित्ताकाट तथा कर (Land & Cadastral Tools)',
    categoryDesc: 'नेपालको आधिकारिक नापी ऐन, भू-उपयोग नियमावली र आर्थिक ऐन २०८१/८२ अनुसार तयार गरिएका क्यालकुलेटरहरू।',
    badgeColor: 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800 text-indigo-800 dark:text-indigo-300',
    tools: [
      {
        id: 'land-calculator',
        titleNp: 'जग्गा नापजाँच तथा रूपान्तरण क्यालकुलेटर',
        titleEn: 'Land Measurement & Unit Converter',
        description: 'रोपनी-आना-पैसा-दाम र बिघा-कट्ठा-धुरबीच सटीक रूपान्तरण, वर्गफिट/वर्गमिटर हिसाब, जग्गाको कुल मूल्य र आधिकारिक स्लिप प्रिन्ट।',
        badge: 'सर्वाधिक लोकप्रिय',
        icon: Calculator,
        href: '/tools/land-calculator',
        features: [
          'रोपनी ⇄ बिघा ⇄ वर्गफिट ⇄ वर्गमिटर रूपान्तरण',
          'प्रति आना वा प्रति कट्ठा अनुसार कुल मूल्य हिसाब',
          '🖨️ आधिकारिक हिसाब स्लिप सिधै प्रिन्ट वा PDF सेभ',
          'फिल्डमा अमिन र जग्गाधनी दुवैका लागि उपयोगी'
        ]
      },
      {
        id: 'multi-kitta-calculator',
        titleNp: 'बहु-कित्ता क्षेत्रफल योग क्यालकुलेटर',
        titleEn: 'Multi-Parcel Area Accumulator',
        description: 'धेरै कित्ताहरूको क्षेत्रफललाई १६ आना र २० कट्ठाको शुद्ध क्यारी गणित सहित जोडेर कुल क्षेत्रफल, कुल मूल्य र संयुक्त स्लिप निकाल्ने टुल।',
        badge: 'फिल्ड अमिन विशेष',
        icon: Layers,
        href: '/tools/multi-kitta-calculator',
        features: [
          'असीमित कित्ताहरू थप्न र हटाउन सकिने',
          'पहाडी र तराई दुवै नापको शुद्ध क्यारी जोड',
          'कुल अनुमानित मूल्य हिसाब',
          '🖨️ बहु-कित्ता संयुक्त आधिकारिक स्लिप प्रिन्ट'
        ]
      },
      {
        id: 'malpot-calculator',
        titleNp: 'मालपोत रजिस्ट्रेसन दस्तुर तथा पुँजीगत लाभकर क्यालकुलेटर',
        titleEn: 'Malpot Registration Fee & CGT Tax',
        description: 'स्थानीय तह रजिस्ट्रेसन दस्तुर, वाग्मती सभ्यता कर (०.५%), महिला छुट (२५%-५०%) र पुँजीगत लाभकरको आधिकारिक हिसाब।',
        badge: 'आर्थिक ऐन २०८१/८२',
        icon: Receipt,
        href: '/tools/malpot-calculator',
        features: [
          'महानगर, उपमहानगर, नगर र गाउँपालिका दर',
          'महिला स्वामित्वमा २५% देखि ५०% राजस्व छुट',
          'पुँजीगत लाभकर (CGT ५% र ७.५%) हिसाब',
          '🖨️ आधिकारिक मालपोत राजस्व स्लिप प्रिन्ट'
        ]
      },
      {
        id: 'kitta-kat-checker',
        titleNp: 'कित्ताकाट योग्यता तथा सडक मापदण्ड परीक्षक',
        titleEn: 'Kitta-Kat Eligibility Checker',
        description: 'भू-उपयोग नियमावली २०७९ (संशोधन २०८१) अनुसार आफ्नो जग्गा आवासीय वा कृषिमा कित्ताकाट गर्न मिल्छ कि मिल्दैन तुरुन्त जाँच्नुहोस्।',
        badge: 'भू-उपयोग नियमावली २०८१',
        icon: Split,
        href: '/tools/kitta-kat-checker',
        features: [
          'न्यूनतम आवश्यक क्षेत्रफल (१३० वर्गमिटर / ४ आना नियम)',
          '८ मिटर बाटो चौडाइ र न्यूनतम मोहडा परीक्षण',
          'काठमाडौँ उपत्यका, तराई र पहाडी मापदण्ड',
          'सम्बन्धित कानुनी दफा तथा अमिन सल्लाह'
        ]
      },
      {
        id: 'kitta-qr',
        titleNp: 'कित्ता स्मार्ट QR कोड तथा जग्गा बिक्री फ्लायर जेनेरेटर',
        titleEn: 'Smart Kitta QR Code & Sale Flyer',
        description: 'जग्गाको कित्ता नम्बर, क्षेत्रफल, गुगल म्याप लोकेशन र सम्पर्क नम्बर समेटिएको स्मार्ट QR कोड र प्रिन्ट गर्न मिल्ने आकर्षक बिक्री साइनबोर्ड।',
        badge: 'स्मार्ट प्रविधि',
        icon: QrCode,
        href: '/tools/kitta-qr',
        features: [
          'गुगल म्याप पिन सिधै मोबाइलबाट स्क्यान हुने QR कोड',
          'A4 वा बोर्ड साइजको आकर्षक "जग्गा बिक्रीमा" फ्लायर',
          'कित्ता नं, क्षेत्रफल, बाटो चौडाइ र मूल्य विवरण',
          '🖨️ १-क्लिकमा आधिकारिक साइनबोर्ड प्रिन्ट'
        ]
      },
      {
        id: 'survey-offices',
        titleNp: 'नेपालका नापी तथा मालपोत कार्यालयहरूको निर्देशिका',
        titleEn: 'Survey & Land Revenue Offices Directory',
        description: 'नेपालका ७७ वटै जिल्लाका नापी कार्यालय र मालपोत कार्यालयहरूको आधिकारिक फोन नम्बर, ठेगाना, इमेल र वडा कार्यक्षेत्र खोज्ने हब।',
        badge: '७७ जिल्ला डाइरेक्टरी',
        icon: Building2,
        href: '/tools/survey-offices',
        features: [
          'जिल्ला र कार्यालय अनुसार तत्काल सर्च',
          '७ वटै प्रदेश अनुसार कार्यालयहरूको वर्गीकरण',
          'नापी र मालपोत कार्यालयको १-क्लिक कल (tel:)',
          'प्रत्येक कार्यालयको वडा तथा कार्यक्षेत्र विवरण'
        ]
      }
    ]
  },
  {
    categoryName: '🛰️ इन्जिनियरिङ, क्याड तथा परीक्षा तयारी (Engineering & GIS)',
    categoryDesc: 'AutoCAD LISP, Total Station GIS कोर्डिनेट, र लोकसेवा आयोग परीक्षा तयारीका टूल्स।',
    badgeColor: 'bg-teal-50 dark:bg-teal-950/60 border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300',
    tools: [
      {
        id: 'excel-to-kml',
        titleNp: 'सर्भे कोर्डिनेट Excel ➔ Google Earth (KML Generator)',
        titleEn: 'Survey Excel/CSV to Google Earth KML',
        description: 'Total Station वा GPS बाट टिपिएको Easting, Northing कोर्डिनेट तालिकालाई एक क्लिकमा Google Earth मा हेर्न मिल्ने `.kml` फाइल बनाउनुहोस्।',
        badge: 'GIS & सर्भे विशेष',
        icon: Compass,
        href: '/tools/excel-to-kml',
        features: [
          'नेपाल MUTM (८१°, ८४°, ८७°) कोर्डिनेट सपोर्ट',
          'बिन्दुहरूलाई बाउन्ड्री लाइनले जोड्ने सुविधा',
          'Google Earth मा कित्ताको थ्री-डी दृश्य',
          '१-क्लिक .kml फाइल डाउनलोड'
        ]
      },
      {
        id: 'autocad-scripts',
        titleNp: 'AutoCAD LSP स्क्रिप्ट्स हब (Survey Automation)',
        titleEn: 'AutoCAD LISP Scripts Hub',
        description: 'क्याड नक्सामा पोलिलाइनको क्षेत्रफल सिधै नेपाली रोपनी र बिघा प्रणालीमा रूपान्तरण गर्ने निःशुल्क अटोक्याड स्क्रिप्टहरू।',
        badge: 'क्याड अटोमेसन',
        icon: FileCode,
        href: '/tools/autocad-scripts',
        features: [
          'area_ropani.lsp (रोपनी-आना मापन)',
          'area_bigha.lsp (बिघा-कट्ठा मापन)',
          'coord_export.lsp (कोअर्डिनेट CSV एक्सपोर्ट)',
          'Complete ZIP प्याक डाउनलोड र लोड गर्ने गाइड'
        ]
      },
      {
        id: 'aamin-quiz',
        titleNp: 'लोकसेवा नापी अमिन परीक्षा अभ्यास क्विज',
        titleEn: 'Lok Sewa Aamin Practice Quiz',
        description: 'लोक सेवा आयोगको नापी अमिन तथा सर्भेक्षक पदको पाठ्यक्रम अनुसार चेनिङ, कम्पास, लेभलिङ र जग्गा ऐनको वस्तुगत परीक्षा अभ्यास।',
        badge: 'लोकसेवा परीक्षा तयारी',
        icon: GraduationCap,
        href: '/tools/aamin-quiz',
        features: [
          '२० आधिकारिक पाठ्यक्रममा आधारित प्रश्नहरू',
          'तत्काल सही उत्तर र विस्तृत व्याख्या',
          '१५ मिनेट टाइमर र नेगेटिभ मार्किङ',
          'असीमित निःशुल्क अभ्यास'
        ]
      },
      {
        id: 'aamin-syllabus',
        titleNp: 'नापी अमिन पाठ्यक्रम र पुराना प्रश्नोत्तर',
        titleEn: 'Aamin Syllabus & Past Papers',
        description: 'लोक सेवा आयोग इन्जिनियरिङ सेवा सर्भे समूहको अमिन र सर्भेक्षक पदको विस्तृत परीक्षा योजना, अंक विभाजन र पुराना प्रश्नोत्तरहरू।',
        badge: 'पाठ्यक्रम गाइड',
        icon: BookOpen,
        href: '/tools/aamin-syllabus',
        features: [
          'प्रथम र द्वितीय पत्रको विस्तृत पाठ्यक्रम',
          'चेन, कम्पास, लेभलिङ अंक विभाजन',
          'विगतका परीक्षामा दोहोरिएका प्रश्नोत्तर',
          'लोकसेवा उत्तीर्ण गर्ने रणनीति'
        ]
      }
    ]
  }
];

export default function ToolsHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'अनलाइन डिजिटल उपकरण तथा PDF स्टुडियो | BR Bhatta',
    description: 'Free online land measurement calculator, Preeti to Unicode converter, Number to Words, Images to PDF, 200KB image compressor, and CAD tools for Nepal.',
    url: 'https://www.brbhatta.com/tools',
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
        
        {/* Hero Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>१००% निःशुल्क डिजिटल उपकरण तथा डकुमेन्ट स्टुडियो</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            नेपाल डिजिटल टूल्स तथा डकुमेन्ट हब
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            जग्गा नापजाँच, Preeti to Unicode, अक्षरेपी, Images to PDF, २००KB फोटो कम्प्रेसर, Excel to KML र कानुनी टेम्प्लेटहरूको सम्पूर्ण डिजिटल केन्द्र।
          </p>
        </div>

        {/* Categorized Sections */}
        {TOOL_SECTIONS.map((section, sIdx) => (
          <section key={sIdx} className="space-y-5">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {section.categoryName}
                </h2>
                <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${section.badgeColor}`}>
                  {section.tools.length} टूल्स उपलब्ध
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {section.categoryDesc}
              </p>
            </div>

            {/* Grid for this category */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.id}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      {/* Top Row */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform shadow-xs">
                          <Icon className="w-6 h-6" />
                        </div>

                        <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {tool.badge}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {tool.titleNp}
                        </h3>
                        <span className="text-[11px] font-semibold text-slate-400 block mt-0.5">
                          {tool.titleEn}
                        </span>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed line-clamp-3">
                          {tool.description}
                        </p>
                      </div>

                      {/* Feature Checklist */}
                      <ul className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                        {tool.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <div className="pt-5">
                      <Link
                        href={tool.href}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 dark:bg-slate-800 dark:hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-xs group-hover:shadow-md"
                      >
                        <span>टुल प्रयोग गर्नुहोस्</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        {/* Informative Assurance Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white border border-indigo-800/40 shadow-lg space-y-3">
          <div className="flex items-center gap-2 text-indigo-400">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="text-sm font-black uppercase tracking-wider">
              १००% स्थानीय तथा सुरक्षित प्रविधि (100% Client-Side Privacy)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            यी सबै PDF, फोटो कम्प्रेसर, Preeti Converter र कोर्डिनेट टूल्सहरू सिधै तपाईंको डिभाइसको वेब ब्राउजरमै सुरक्षित रूपमा चल्छन्। तपाईंको कुनै पनि फोटो, कागजात वा व्यक्तिगत डाटा बाहिरी सर्भरमा अपलोड हुँदैन।
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
