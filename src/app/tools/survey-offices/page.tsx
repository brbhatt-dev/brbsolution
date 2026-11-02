import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SurveyOfficesDirectory from '@/components/SurveyOfficesDirectory';
import SocialShareBar from '@/components/SocialShareBar';
import { 
  Building2, 
  ArrowLeft, 
  Compass, 
  Phone, 
  MapPin, 
  Mail, 
  ExternalLink, 
  Clock, 
  FileText, 
  CheckCircle2, 
  HelpCircle, 
  Globe, 
  ShieldCheck, 
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SURVEY_OFFICES } from '@/data/surveyOffices';

export const metadata: Metadata = {
  title: 'नापी तथा मालपोत कार्यालय निर्देशिका (Survey & Land Revenue Offices Nepal) | BR Bhatta',
  description: 'नेपालका ७७ वटै जिल्लाका नापी विभाग (dos.gov.np), नापी कार्यालय (डिल्लीबजार, कलंकी, बुटवल, पोखरा, वीरगञ्ज, जनकपुर, धनगढी, महेन्द्रनगर) र मालपोत कार्यालयहरूको आधिकारिक सम्पर्क नम्बर, ठेगाना, नागरिक बडापत्र र अनलाइन सेवा निर्देशिका।',
  keywords: [
    'www.dos.gov.np nepal',
    'Department of Survey Nepal',
    'Survey Offices Nepal',
    'मालपोत कार्यालय निर्देशिका',
    'नापी कार्यालय फोन नम्बर',
    'malpot office butwal',
    'napi karyalaya butwal',
    'malpot office birgunj',
    'napi karyalaya parsa birgunj',
    'malpot office janakpur',
    'napi karyalaya janakpur',
    'malpot office mahendranagar',
    'napi karyalaya kanchanpur',
    'malpot office dhangadhi',
    'napi karyalaya kailali',
    'kalanki malpot phone number',
    'dillibazar malpot karyalaya',
    'pokhara malpot office',
    'napi karyalaya kaski',
    'chitwan malpot office bharatpur',
    'biratnagar malpot office morang',
    'jhapa malpot office bhadrapur',
    'merokitta online naksa',
    'जग्गा पास गर्दा चाहिने कागजात',
    'कित्ताकाट प्रक्रिया'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/survey-offices',
  },
  openGraph: {
    title: 'नेपालका नापी तथा मालपोत कार्यालयहरूको आधिकारिक सम्पर्क निर्देशिका | BR Bhatta',
    description: 'नेपालभरिका नापी विभाग, नापी कार्यालय र भूमिसुधार तथा मालपोत कार्यालयहरूको आधिकारिक सम्पर्क नम्बर, ठेगाना, कार्यक्षेत्र र नागरिक बडापत्र।',
    url: 'https://www.brbhatta.com/tools/survey-offices',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

// Key Regional Hubs for direct pure-HTML rendering and SEO anchor jumps
const KEY_HUBS = [
  { id: 'butwal', name: 'बुटवल / रुपन्देही', district: 'रुपन्देही' },
  { id: 'birgunj', name: 'वीरगञ्ज / पर्सा', district: 'पर्सा' },
  { id: 'janakpur', name: 'जनकपुरधाम / धनुषा', district: 'धनुषा' },
  { id: 'pokhara', name: 'पोखरा / कास्की', district: 'कास्की' },
  { id: 'chitwan', name: 'भरतपुर / चितवन', district: 'चितवन' },
  { id: 'biratnagar', name: 'विराटनगर / मोरङ', district: 'मोरङ' },
  { id: 'jhapa', name: 'भद्रपुर र दमक / झापा', district: 'झापा' },
  { id: 'nepalgunj', name: 'नेपालगञ्ज / बाँके', district: 'बाँके' },
  { id: 'dhangadhi', name: 'धनगढी र टीकापुर / कैलाली', district: 'कैलाली' },
  { id: 'mahendranagar', name: 'महेन्द्रनगर / कञ्चनपुर', district: 'कञ्चनपुर' },
  { id: 'kathmandu', name: 'काठमाडौँ उपत्यका', district: 'काठमाडौँ' },
  { id: 'lalitpur', name: 'ललितपुर', district: 'ललितपुर' },
  { id: 'bhaktapur', name: 'भक्तपुर', district: 'भक्तपुर' },
];

export default function SurveyOfficesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'GovernmentOrganization',
        '@id': 'https://www.brbhatta.com/tools/survey-offices#organization',
        name: 'नेपाल नापी तथा मालपोत कार्यालयहरूको निर्देशिका',
        description: 'Official contact and location directory of survey and land revenue offices in Nepal.',
        url: 'https://www.brbhatta.com/tools/survey-offices',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.brbhatta.com/tools/survey-offices#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'गृहपृष्ठ (Home)',
            item: 'https://www.brbhatta.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'डिजिटल उपकरणहरू (Tools)',
            item: 'https://www.brbhatta.com/tools'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'नापी तथा मालपोत कार्यालय निर्देशिका',
            item: 'https://www.brbhatta.com/tools/survey-offices'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/survey-offices#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'नापी कार्यालय र मालपोत कार्यालयबीच के फरक छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'नापी कार्यालय (Survey Office) ले जग्गाको प्राविधिक पक्षहरू जस्तै सिमाना नापजाँच, कित्ताकाट, नक्सा (ट्रेस) तयार पार्ने, फिल्डबुक कायम गर्ने र हालसाबिक गर्ने काम गर्दछ। मालपोत कार्यालय (Land Revenue Office) ले जग्गाको कानुनी स्वामित्व हस्तान्तरण (राजीनामा/पास), नामसारी, धितो बन्धक रोक्का तथा फुकुवा र रजिष्ट्रेसन दस्तुर संकलन गर्ने कार्य गर्दछ।'
            }
          },
          {
            '@type': 'Question',
            name: 'नापी तथा मालपोत कार्यालय खुल्ने समय कुन हो?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'नेपाल सरकारका नापी र मालपोत कार्यालयहरू आइतबारदेखि बिहीबारसम्म बिहान १०:०० बजेदेखि साँझ ५:०० बजेसम्म (कात्तिक १६ देखि माघ १५ सम्म ४:०० बजेसम्म) र शुक्रबार बिहान १०:०० बजेदेखि दिउँसो ३:०० बजेसम्म खुल्छन्। सार्वजनिक बिदाका दिन कार्यालय बन्द रहन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'घरमै बसेर अनलाइनबाट जग्गाको नक्सा (Trace) कसरी निकाल्न सकिन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'नापी विभागको आधिकारिक पोर्टल मेरोकित्ता (merokitta.dos.gov.np) मा लगइन गरी आफ्नो जिल्ला, नापी कार्यालय, गाउँपालिका/नगरपालिका, वडा, र कित्ता नम्बर प्रविष्ट गरेर डिजिटल कनेक्ट आईपीएस वा वालेटमार्फत तोकिएको शुल्क भुक्तानी गरी आधिकारिक डिजिटल नक्सा (ट्रेस) र फिल्डबुक डाउनलोड गर्न सकिन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'जग्गा रजिष्ट्रेसन (पास) गर्दा के के कागजातहरू अनिवार्य चाहिन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'जग्गा पास गर्दा: १) मूल लालपुर्जा (जग्गाधनी प्रमाण पुर्जा), २) खरिदकर्ता र बिक्रेताको सक्कल नेपाली नागरिकताको प्रमाणपत्र र प्रतिलिपि, ३) स्थानीय वडा कार्यालयबाट घरबाटो सिफारिस पत्र, ४) चालू आर्थिक वर्षको स्थानीय कर/तिरो तिरेको रसिद, र ५) नापी कार्यालयबाट प्रमाणित कित्ता नक्सा (ट्रेस) अनिवार्य चाहिन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'मालपोत कार्यालयको फोन नम्बर नउठ्दा वा सम्पर्क नहुँदा के गर्ने?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'कहिलेकाहीँ अत्यधिक सेवाग्राहीको चाप वा लाइन व्यस्त हुँदा ल्याण्डलाइन फोन नउठ्न सक्छ। यस्तो अवस्थामा कार्यालयको आधिकारिक इमेलमा सोधपुछ गर्न सकिन्छ वा भूमि व्यवस्थापन तथा अभिलेख विभाग (dolrm.gov.np) को गुनासो शाखामा सम्पर्क गर्न सकिन्छ।'
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

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10">
        
        {/* Breadcrumb Nav */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>उपकरणहरू (Tools Hub)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200">नापी तथा मालपोत कार्यालय निर्देशिका</span>
        </div>

        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-bold">
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>नेपाल सरकार नापी विभाग तथा भूमि व्यवस्थापन विभाग निर्देशिका</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            नेपालका नापी तथा मालपोत कार्यालयहरूको आधिकारिक सम्पर्क निर्देशिका
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            काठमाडौँ उपत्यका, बुटवल, पोखरा, वीरगञ्ज, जनकपुर, विराटनगर, नेपालगञ्ज, धनगढी, महेन्द्रनगर लगायत नेपालका ७७ वटै जिल्लाका नापी तथा भूमिसुधार मालपोत कार्यालयहरूको आधिकारिक फोन नम्बर, ठेगाना, इमेल र नागरिक सेवा बडापत्र।
          </p>
        </div>

        {/* Zero-JS Quick Jump Anchor Bar */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                जिल्ला तथा प्रमुख शहर अनुसार सिधै हेर्नुहोस् (Direct Quick Jump):
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-medium bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full">
              कुनै जावास्क्रिप्ट नचाहिने (१००% छिटो)
            </span>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-bold">
            {KEY_HUBS.map(hub => (
              <a
                key={hub.id}
                href={`#hub-${hub.id}`}
                className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-700 dark:text-slate-300 transition-all border border-slate-200/80 dark:border-slate-700/80"
              >
                📍 {hub.name}
              </a>
            ))}
            <a
              href="#citizen-charter"
              className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all border border-emerald-300 dark:border-emerald-800"
            >
              📋 नागरिक बडापत्र तथा सेवाहरू
            </a>
            <a
              href="#faqs"
              className="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 hover:bg-amber-600 hover:text-white transition-all border border-amber-300 dark:border-amber-800"
            >
              ❓ बारम्बार सोधिने प्रश्नहरू (FAQ)
            </a>
          </div>
        </div>

        {/* Interactive Full Directory Component (Instant Search + Filter) */}
        <section aria-label="सम्पूर्ण कार्यालय खोज प्रणाली">
          <SurveyOfficesDirectory />
        </section>

        {/* Static Semantic Major Hubs Directory (Rendered in Static HTML for Zero-JS & Search Bots) */}
        <section className="space-y-8 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>नेपालका प्रमुख शहर तथा जिल्लागत आधिकारिक सम्पर्क</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              प्रमुख जिल्लाका नापी तथा मालपोत कार्यालयहरूको प्रत्यक्ष सम्पर्क विवरण
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              तलका सबै विवरणहरू बिना जावास्क्रिप्ट तुरुन्तै पढ्न, सिधै फोन कल गर्न र गुगल म्याप्समा हेर्न सकिने गरी तयार पारिएका छन्:
            </p>
          </div>

          <div className="space-y-8">
            {KEY_HUBS.map(hub => {
              const matchedOffices = SURVEY_OFFICES.filter(o => 
                o.district.includes(hub.district) || 
                o.nameNp.includes(hub.name) ||
                o.location.includes(hub.name)
              );

              if (matchedOffices.length === 0) return null;

              return (
                <div 
                  key={hub.id} 
                  id={`hub-${hub.id}`} 
                  className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 scroll-mt-20"
                >
                  <div className="flex items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>{hub.name}का नापी तथा मालपोत कार्यालयहरू</span>
                    </h3>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                      {matchedOffices.length} कार्यालय
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {matchedOffices.map(office => {
                      const isSurvey = office.type === 'survey';
                      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.nameNp + ' ' + office.location)}`;

                      return (
                        <div 
                          key={office.id} 
                          className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3 flex flex-col justify-between"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${
                                isSurvey 
                                  ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' 
                                  : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                              }`}>
                                {isSurvey ? 'नापी कार्यालय (Survey)' : 'मालपोत कार्यालय (Malpot)'}
                              </span>
                              <span className="text-[10px] text-slate-500 font-medium">
                                {office.location}
                              </span>
                            </div>

                            <h4 className="text-base font-black text-slate-900 dark:text-white leading-snug">
                              {office.nameNp}
                            </h4>
                            <p className="text-xs text-slate-400 font-sans">
                              {office.nameEn}
                            </p>

                            <div className="pt-2 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                              <div className="flex items-center gap-2">
                                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span className="font-semibold text-slate-700 dark:text-slate-200">फोन:</span>
                                <a 
                                  href={`tel:${office.phone}`} 
                                  className="font-mono font-black text-emerald-700 dark:text-emerald-400 hover:underline"
                                >
                                  {office.phone}
                                </a>
                              </div>
                              <div className="flex items-center gap-2">
                                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                <span className="font-semibold text-slate-700 dark:text-slate-200">इमेल:</span>
                                <a 
                                  href={`mailto:${office.email}`} 
                                  className="font-mono text-[11px] hover:underline truncate text-slate-600 dark:text-slate-400"
                                >
                                  {office.email}
                                </a>
                              </div>
                              <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                                <strong>कार्यक्षेत्र:</strong> {office.jurisdiction}
                              </div>
                            </div>
                          </div>

                          <div className="pt-2 flex items-center gap-2 text-xs font-bold">
                            <a
                              href={`tel:${office.phone}`}
                              className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-center transition-colors"
                            >
                              सिधै कल गर्नुहोस्
                            </a>
                            <a
                              href={mapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="py-2 px-3 rounded-xl bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-600 text-center hover:bg-slate-100 transition-colors"
                            >
                              Maps
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Citizen Charter & Service Guide (नागरिक बडापत्र तथा सेवा निर्देशिका) */}
        <section id="citizen-charter" className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 scroll-mt-20">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
              <FileText className="w-3.5 h-3.5 text-emerald-600" />
              <span>नेपाल सरकार नागरिक सेवा बडापत्र</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              नापी तथा मालपोत कार्यालय नागरिक सेवा निर्देशिका र आवश्यक कागजात चेकलिस्ट
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              नापी वा मालपोत कार्यालय जाँदा कुनै झन्झट नहोस् भन्नका लागि कार्यालय समय, कार्यप्रक्रिया र आवश्यक कागजातहरूको पूर्ण विवरण तल प्रस्तुत गरिएको छ:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* Timing Box */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <Clock className="w-4 h-4" />
                <span>कार्यालय खुल्ने समय</span>
              </div>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                <li>• <strong>आइतबार - बिहीबार:</strong> बिहान १०:०० देखि साँझ ५:०० बजेसम्म (कात्तिक १६ - माघ १५ सम्म ४:०० सम्म)</li>
                <li>• <strong>शुक्रबार:</strong> बिहान १०:०० देखि दिउँसो ३:०० बजेसम्म</li>
                <li>• <strong>नगद/राजस्व बुझाउने समय:</strong> सामान्यतया दिउँसो २:०० देखि ३:०० बजेसम्म</li>
              </ul>
            </div>

            {/* Survey Scope Box */}
            <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/40 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-bold text-sm">
                <Compass className="w-4 h-4" />
                <span>नापी कार्यालयका मुख्य सेवाहरू</span>
              </div>
              <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
                <li>• कित्ताकाट (Subdivision) तथा रेखांकन</li>
                <li>• नक्सा (Trace) तथा फिल्डबुक उतार प्रिन्ट</li>
                <li>• हालसाबिक (स्रेस्ता भिडाउने कार्य)</li>
                <li>• साँध-सिमाना विवाद स्थलगत नापजाँच</li>
              </ul>
            </div>

            {/* Revenue Scope Box */}
            <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 space-y-2">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-bold text-sm">
                <Building2 className="w-4 h-4" />
                <span>मालपोत कार्यालयका मुख्य सेवाहरू</span>
              </div>
              <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
                <li>• जग्गा रजिष्ट्रेसन (राजीनामा, बकसपत्र पास)</li>
                <li>• अपुताली तथा नामसारी दर्ता</li>
                <li>• बैंक तथा वित्तीय संस्थाको रोक्का/फुकुवा</li>
                <li>• पुँजीगत लाभकर तथा रजिष्ट्रेसन दस्तुर संकलन</li>
              </ul>
            </div>
          </div>

          {/* Required Documents Table */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>जग्गा पास (रजिष्ट्रेसन) गर्दा लैजानुपर्ने ५ अनिवार्य कागजातहरू</span>
            </h3>
            
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="p-3">क्र.सं.</th>
                    <th className="p-3">कागजातको नाम</th>
                    <th className="p-3">जारी गर्ने निकाय</th>
                    <th className="p-3">कैफियत / विवरण</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                  <tr>
                    <td className="p-3 font-mono font-bold">१</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">मूल लालपुर्जा (जग्गाधनी प्रमाण पुर्जा)</td>
                    <td className="p-3">मालपोत कार्यालय</td>
                    <td className="p-3">सक्कल प्रमाण पुर्जा अनिवार्य चाहिन्छ।</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold">२</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">नागरिकता प्रमाणपत्रको सक्कल र प्रतिलिपि</td>
                    <td className="p-3">जिल्ला प्रशासन कार्यालय</td>
                    <td className="p-3">जग्गा खरिदकर्ता र बिक्रेता दुवैको सक्कल नागरिकता।</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold">३</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">घरबाटो सिफारिस पत्र</td>
                    <td className="p-3">सम्बन्धित वडा कार्यालय</td>
                    <td className="p-3">जग्गामा बाटोको चौडाइ, प्रकार (कच्ची/पक्की) र घर भए/नभएको विवरण।</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold">४</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">एकीकृत सम्पत्ति कर / तिरो तिरेको रसिद</td>
                    <td className="p-3">सम्बन्धित वडा कार्यालय</td>
                    <td className="p-3">चालू आर्थिक वर्षको सम्पत्ति कर चुक्ता गरेको सक्कल रसिद।</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold">५</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">प्रमाणित कित्ता नक्सा (ट्रेस)</td>
                    <td className="p-3">नापी कार्यालय / मेरोकित्ता पोर्टल</td>
                    <td className="p-3">सम्बन्धित कित्ताको प्रमाणित डिजिटल नक्सा प्रिन्ट।</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Official Online Portals Section */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 text-white space-y-3 border border-emerald-500/30">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <Globe className="w-4 h-4" />
              <span>नेपाल सरकारका आधिकारिक अनलाइन भू-सेवा पोर्टलहरू</span>
            </div>
            <h4 className="text-base sm:text-lg font-black text-white">
              घरमै बसेर सरकारी सेवा लिन प्रयोग गरिने आधिकारिक वेबसाइटहरू
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
              <a 
                href="https://merokitta.dos.gov.np" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all border border-white/10 space-y-1 block"
              >
                <div className="font-bold text-emerald-300 flex items-center justify-between">
                  <span>मेरोकित्ता (MeroKitta)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
                <p className="text-[11px] text-slate-300">अनलाइनबाट कित्ता नक्सा र फिल्डबुक डाउनलोड गर्ने पोर्टल।</p>
              </a>

              <a 
                href="https://dos.gov.np" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all border border-white/10 space-y-1 block"
              >
                <div className="font-bold text-emerald-300 flex items-center justify-between">
                  <span>नापी विभाग (DOS)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
                <p className="text-[11px] text-slate-300">केन्द्रिय नापी विभागको आधिकारिक सूचना र परिपत्र पोर्टल।</p>
              </a>

              <a 
                href="https://dolrm.gov.np" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all border border-white/10 space-y-1 block"
              >
                <div className="font-bold text-emerald-300 flex items-center justify-between">
                  <span>भूमि व्यवस्थापन विभाग (DOLRM)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
                <p className="text-[11px] text-slate-300">मालपोत, सरकारी मूल्याङ्कन र अनलाइन स्रेस्ता प्रणाली।</p>
              </a>
            </div>
          </div>
        </section>

        {/* FAQs Section (Pure Static Text for Zero-JS & Rich Snippets) */}
        <section id="faqs" className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 scroll-mt-20">
          <div className="flex items-center gap-2.5">
            <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              नापी तथा मालपोत सम्बन्धी बारम्बार सोधिने प्रश्नहरू (FAQs)
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                १. नापी कार्यालय र मालपोत कार्यालयबीच के फरक छ?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                नापी कार्यालय (Survey Office) ले जग्गाको जमिनको भौतिक नापजाँच, सिमाना, कित्ताकाट, नक्सा तयार पार्ने र फिल्डबुक कायम गर्ने काम गर्दछ। मालपोत कार्यालय (Land Revenue Office) ले जग्गाको कानुनी स्वामित्व हस्तान्तरण (राजीनामा/पास), नामसारी, धितो बन्धक रोक्का तथा फुकुवा र रजिष्ट्रेसन राजस्व संकलन गर्ने कार्य गर्दछ।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                २. नापी तथा मालपोत कार्यालय खुल्ने समय कुन हो?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                नेपाल सरकारका नापी र मालपोत कार्यालयहरू आइतबारदेखि बिहीबारसम्म बिहान १०:०० बजेदेखि साँझ ५:०० बजेसम्म (कात्तिक १६ देखि माघ १५ सम्म ४:०० बजेसम्म) र शुक्रबार बिहान १०:०० बजेदेखि दिउँसो ३:०० बजेसम्म खुल्छन्। सार्वजनिक बिदाका दिन कार्यालय बन्द रहन्छ।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                ३. घरमै बसेर अनलाइनबाट जग्गाको नक्सा (Trace) कसरी निकाल्न सकिन्छ?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                नापी विभागको आधिकारिक पोर्टल मेरोकित्ता (<a href="https://merokitta.dos.gov.np" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline font-bold">merokitta.dos.gov.np</a>) मा लगइन गरी आफ्नो जिल्ला, नापी कार्यालय, वडा, र कित्ता नम्बर प्रविष्ट गरेर डिजिटल वालेटमार्फत तोकिएको सरकारी दस्तुर भुक्तानी गरी आधिकारिक डिजिटल नक्सा (ट्रेस) र फिल्डबुक सिधै डाउनलोड तथा प्रिन्ट गर्न सकिन्छ।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                ४. जग्गा पास गर्दा कति राजस्व र दस्तुर लाग्छ?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                जग्गाको रजिष्ट्रेसन दस्तुर सम्बन्धित स्थानीय तह (महानगरपालिका, उपमहानगरपालिका, नगरपालिका वा गाउँपालिका) र जग्गाको सरकारी न्यूनतम मूल्याङ्कनको आधारमा २% देखि ५% सम्म लाग्दछ। साथै, जग्गा ५ वर्षभित्र बिक्री गर्दा ७.५% र ५ वर्षपछि बिक्री गर्दा ५% पुँजीगत लाभकर (CGT) लाग्दछ। तपाईं हाम्रो <Link href="/tools/malpot-calculator" className="text-emerald-600 underline font-bold">मालपोत क्याल्कुलेटर</Link> प्रयोग गरी तत्कालै वास्तविक दस्तुर निकाल्न सक्नुहुन्छ।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                ५. मालपोत कार्यालयको फोन नम्बर नउठ्दा वा सम्पर्क नहुँदा के गर्ने?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                अत्यधिक सेवाग्राहीको भीडभाड वा प्राविधिक समस्याका कारण ल्याण्डलाइन फोन नउठ्न सक्छ। यस्तो अवस्थामा कार्यालयको आधिकारिक सरकारी इमेल ठेगानामा सोधपुछ पठाउन सकिन्छ अथवा भूमि व्यवस्थापन तथा अभिलेख विभागको टोल-फ्री हटलाइन वा आधिकारिक वेबसाइट <a href="https://dolrm.gov.np" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline font-bold">dolrm.gov.np</a> मार्फत सोधपुछ गर्न सकिन्छ।
              </p>
            </div>
          </div>
        </section>

        {/* Social Share Bar */}
        <SocialShareBar 
          title="नेपालका नापी तथा मालपोत कार्यालयहरूको आधिकारिक सम्पर्क निर्देशिका तथा नागरिक बडापत्र" 
          url="/tools/survey-offices" 
        />

      </main>

      <Footer />
    </div>
  );
}
