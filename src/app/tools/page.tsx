import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Calculator, 
  Split, 
  Receipt, 
  Compass, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  FileCode,
  ShieldCheck,
  Building2,
  Scale,
  GraduationCap,
  Printer,
  QrCode,
  MapPin,
  BookOpen
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'अनलाइन डिजिटल उपकरणहरू (Free Land & Cadastre Tools) | BR Bhatta',
  description: 'नेपालको जग्गा नापजाँच, रोपनी-बिघा रूपान्तरण, कित्ताकाट योग्यता परीक्षक, मालपोत रजिष्ट्रेसन दस्तुर क्यालकुलेटर र AutoCAD LSP स्क्रिप्टहरूको निःशुल्क डिजिटल हब।',
  keywords: [
    'Nepal Land Calculator',
    'Ropani Bigha Converter',
    'Kitta Kat Checker Nepal',
    'Malpot Tax Calculator Nepal',
    'Aamin Quiz Nepal',
    'AutoCAD LISP Nepal',
    'जग्गा क्यालकुलेटर',
    'कित्ताकाट मापदण्ड',
    'BR Bhatta Tools'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools',
  },
};

const TOOLS = [
  {
    id: 'land-calculator',
    titleNp: 'जग्गा नापजाँच तथा रूपान्तरण क्यालकुलेटर',
    titleEn: 'Land Measurement & Unit Converter',
    description: 'रोपनी-आना-पैसा-दाम र बिघा-कट्ठा-धुरबीच सटीक रूपान्तरण, वर्गफिट/वर्गमिटर हिसाब, जग्गाको कुल मूल्य र आधिकारिक स्लिप प्रिन्ट।',
    badge: 'सर्वाधिक लोकप्रिय (Most Popular)',
    icon: Calculator,
    color: 'emerald',
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
    titleNp: 'बहु-कित्ता (Multi-Kitta) क्षेत्रफल योग क्यालकुलेटर',
    titleEn: 'Multi-Parcel Area Accumulator',
    description: 'धेरै कित्ताहरूको क्षेत्रफललाई १६ आना र २० कट्ठाको शुद्ध क्यारी गणित सहित जोडेर कुल क्षेत्रफल, कुल मूल्य र संयुक्त स्लिप निकाल्ने टुल।',
    badge: 'नयाँ टुल (New)',
    icon: Layers,
    color: 'emerald',
    href: '/tools/multi-kitta-calculator',
    features: [
      'असीमित कित्ताहरू थप्न र हटाउन सकिने',
      'पहाडी र तराई दुवै नापको शुद्ध क्यारी जोड',
      'कुल अनुमानित मूल्य (Total Valuation) हिसाब',
      '🖨️ बहु-कित्ता संयुक्त आधिकारिक स्लिप प्रिन्ट'
    ]
  },
  {
    id: 'malpot-calculator',
    titleNp: 'मालपोत रजिस्ट्रेसन दस्तुर तथा पुँजीगत लाभकर क्यालकुलेटर',
    titleEn: 'Malpot Registration Fee & Capital Gains Tax (CGT)',
    description: 'घरजग्गा खरिदबिक्रीमा लाग्ने स्थानीय तह रजिस्ट्रेसन दस्तुर, महिला छुट, संयुक्त दर्ता र बिक्रेताको पुँजीगत लाभकरको आधिकारिक हिसाब।',
    badge: 'नयाँ बजेट २०८१/८२ (Updated)',
    icon: Receipt,
    color: 'amber',
    href: '/tools/malpot-calculator',
    features: [
      'महानगर, उपमहानगर, नगर र गाउँपालिकाको छुट्टाछुट्टै दर',
      'महिला स्वामित्वमा २५% देखि ५०% सम्म राजस्व छुट',
      'पुँजीगत लाभकर (CGT ५% र ७.५%) को सटीक हिसाब',
      '🖨️ आधिकारिक मालपोत राजस्व स्लिप प्रिन्ट'
    ]
  },
  {
    id: 'kitta-qr',
    titleNp: 'कित्ता स्मार्ट QR कोड तथा जग्गा बिक्री फ्लायर जेनेरेटर',
    titleEn: 'Smart Kitta QR Code & Sale Flyer Generator',
    description: 'जग्गाको कित्ता नम्बर, क्षेत्रफल, गुगल म्याप लोकेशन र सम्पर्क नम्बर समेटिएको स्मार्ट QR कोड र प्रिन्ट गर्न मिल्ने आकर्षक बिक्री साइनबोर्ड।',
    badge: 'घरजग्गा विज्ञापन टुल',
    icon: QrCode,
    color: 'indigo',
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
    color: 'sky',
    href: '/tools/survey-offices',
    features: [
      'जिल्ला, कार्यालयको नाम र स्थान अनुसार तत्काल सर्च',
      '७ वटै प्रदेश अनुसार कार्यालयहरूको वर्गीकरण',
      'नापी र मालपोत कार्यालयको १-क्लिक मोबाइल कल (tel:)',
      'प्रत्येक कार्यालयको वडा तथा कार्यक्षेत्र विवरण'
    ]
  },
  {
    id: 'aamin-quiz',
    titleNp: 'लोकसेवा नापी अमिन तथा सर्भेक्षक परीक्षा अभ्यास क्विज',
    titleEn: 'Lok Sewa Aamin & Surveyor Mock Exam Quiz',
    description: 'लोक सेवा आयोगको नापी अमिन तथा सर्भेक्षक पदको पाठ्यक्रम अनुसार चेनिङ, कम्पास, लेभलिङ, क्षेत्रफल र जग्गा ऐनको वस्तुगत परीक्षा अभ्यास।',
    badge: 'लोकसेवा तयारी (Free Quiz)',
    icon: GraduationCap,
    color: 'teal',
    href: '/tools/aamin-quiz',
    features: [
      '१६+ आधिकारिक पाठ्यक्रममा आधारित बहुवैकल्पिक प्रश्नहरू (MCQs)',
      'तत्काल सही उत्तर र विस्तृत कानुनी/प्राविधिक व्याख्या',
      'अङ्क प्रतिशत र तयारी मूल्याङ्कन ब्याज',
      'साथीभाइसँग नतिजा सेयर गर्ने सुविधा'
    ]
  },
  {
    id: 'aamin-syllabus',
    titleNp: 'नापी अमिन तथा सर्भेक्षक पाठ्यक्रम र पुराना प्रश्नोत्तर',
    titleEn: 'Aamin Syllabus, Exam Scheme & Past Papers',
    description: 'लोक सेवा आयोग इन्जिनियरिङ सेवा सर्भे समूहको अमिन र सर्भेक्षक पदको विस्तृत परीक्षा योजना, अंक विभाजन र पुराना प्रश्नोत्तरहरू।',
    badge: 'अध्ययन गाइड (Syllabus)',
    icon: BookOpen,
    color: 'teal',
    href: '/tools/aamin-syllabus',
    features: [
      'प्रथम र द्वितीय पत्रको विस्तृत पाठ्यक्रम विषय सूची',
      'चेन, कम्पास, लेभलिङ र ऐन नियमको अंक विभाजन',
      'विगतका परीक्षामा दोहोरिएका महत्वपूर्ण प्रश्नोत्तर',
      'लोकसेवा परीक्षा उत्तीर्ण गर्ने तयारी रणनीति'
    ]
  },
  {
    id: 'autocad-scripts',
    titleNp: 'AutoCAD LSP स्क्रिप्ट्स डाउनलोड तथा कोड हब',
    titleEn: 'AutoCAD LISP Survey Scripts Hub',
    description: 'क्याड नक्सामा पोलिलाइनको क्षेत्रफल सिधै नेपाली रोपनी र बिघा प्रणालीमा रूपान्तरण गर्ने निःशुल्क अटोक्याड स्क्रिप्टहरू।',
    badge: 'इन्जिनियरिङ टुल',
    icon: FileCode,
    color: 'blue',
    href: '/tools/autocad-scripts',
    features: [
      'area_ropani.lsp (रोपनी-आना-पैसा-दाम मापन)',
      'area_bigha.lsp (बिघा-कट्ठा-धुर मापन)',
      'coord_export.lsp (कोअर्डिनेट CSV एक्सपोर्ट)',
      'Complete ZIP प्याक डाउनलोड र लोड गर्ने सचित्र गाइड'
    ]
  },
  {
    id: 'kitta-kat-checker',
    titleNp: 'कित्ताकाट योग्यता तथा सडक मापदण्ड परीक्षक',
    titleEn: 'Kitta-Kat Eligibility & Road Setback Checker',
    description: 'भू-उपयोग नियमावली २०७९ (संशोधन २०८१) अनुसार आफ्नो जग्गा आवासीय वा कृषिमा कित्ताकाट गर्न मिल्छ कि मिल्दैन तुरुन्त जाँच्नुहोस्।',
    badge: 'नयाँ मापदण्ड २०८१ (Updated)',
    icon: Split,
    color: 'indigo',
    href: '/tools/kitta-kat-checker',
    features: [
      'काठमाडौँ उपत्यका, तराई र पहाडी क्षेत्रको फरक मापदण्ड',
      'न्यूनतम आवश्यक क्षेत्रफल (१३० वर्गमिटर / ४ आना / २ कट्ठा नियम)',
      'न्यूनतम मोहडा (Frontage) र बाटोको चौडाइ परीक्षण',
      'सम्बन्धित सरकारी नियम र ऐनको कानुनी दफा'
    ]
  },
  {
    id: 'laws-directory',
    titleNp: 'मौजूदा कानुन तथा सरकारी निर्देशिका हब',
    titleEn: 'Official Land Laws & Directives Directory',
    description: 'नापी विभाग र नेपाल कानुन आयोगका सबै १२ वटा आधिकारिक मूल राजपत्र तथा निर्देशिकाहरूको पूर्ण डिजिटल संगालो।',
    badge: '१२ आधिकारिक ऐनहरू',
    icon: Scale,
    color: 'purple',
    href: '/laws',
    features: [
      'जग्गा (नाप जाँच) ऐन २०१९ र नियमावली २०५८',
      'भूउपयोग ऐन २०७६ र नियमावली २०७९',
      'सरकारी तथा सामुदायिक जग्गा निर्देशिका २०८३',
      'वेबसाइटभित्रै मूल सरकारी PDF पढ्न र डाउनलोड गर्न मिल्ने'
    ]
  }
];

export default function ToolsHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'अनलाइन डिजिटल उपकरणहरू (Land & Engineering Tools Nepal) | BR Bhatta',
    description: 'Free online land measurement calculator, kitta-kat eligibility checker, and legal directory for Nepal.',
    url: 'https://www.brbhatta.com/tools',
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
        
        {/* Hero Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>१००% निःशुल्क अनलाइन प्रविधि उपकरणहरू</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            नेपाल जग्गा नापजाँच तथा इन्जिनियरिङ उपकरणहरू
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            नेपालका नापी अमिन, इन्जिनियर, घरजग्गा व्यवसायी तथा सर्वसाधारणका लागि जग्गाको नाप, कित्ताकाट, कानुन र नक्सांकनलाई सहज बनाउन निर्माण गरिएका निःशुल्क डिजिटल टुल्स।
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Row */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {tool.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h2 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {tool.titleNp}
                    </h2>
                    <span className="text-xs font-semibold text-slate-400 block mt-0.5">
                      {tool.titleEn}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    {tool.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="pt-6">
                  <Link
                    href={tool.href}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 dark:bg-slate-800 dark:hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold transition-all shadow-xs group-hover:shadow-md"
                  >
                    <span>टुल प्रयोग गर्नुहोस्</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Assurance Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white border border-indigo-800/40 shadow-lg space-y-3">
          <div className="flex items-center gap-2 text-indigo-400">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="text-sm font-black uppercase tracking-wider">
              आधिकारिक नापी तथा कानुनी मापदण्डमा आधारित
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            यी सबै उपकरणहरू नेपाल सरकार नापी विभाग (Department of Survey), भू-उपयोग ऐन २०७६, भू-उपयोग नियमावली २०७९ (संशोधन २०८१) र प्रचलित नापी निर्देशिकामा उल्लिखित आधिकारिक सूत्रहरूका आधारमा तयार गरिएका हुन्।
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
