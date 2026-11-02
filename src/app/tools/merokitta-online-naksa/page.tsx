import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialShareBar from '@/components/SocialShareBar';
import AdSenseSlot from '@/components/AdSenseSlot';
import { 
  Compass, 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  HelpCircle, 
  Smartphone, 
  FileText, 
  CreditCard, 
  Download, 
  MapPin, 
  Search, 
  ShieldCheck, 
  AlertCircle, 
  Building2, 
  Sparkles,
  Calculator,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'मेरोकित्ता अनलाइन नक्सा तथा फिल्डबुक डाउनलोड गाइड (MeroKitta DLIS Nepal) | BR Bhatta',
  description: 'नापी विभागको आधिकारिक मेरोकित्ता (merokitta.dos.gov.np) पोर्टलबाट घरमै बसेर आफ्नो जग्गाको नक्सा ट्रेस (Cadastral Map Trace), फिल्डबुक र प्लट रजिष्टर ३ मिनेटमा हेर्ने तथा PDF डाउनलोड गर्ने सजिलो तरिका।',
  keywords: [
    'MeroKitta Nepal',
    'merokitta.dos.gov.np',
    'dos.gov.np',
    'www.dos.gov.np nepal',
    'नापी विभाग',
    'Department of Survey Nepal',
    'DLIS Nepal',
    'अनलाइन नक्सा प्रिन्ट',
    'मेरो कित्ता लगइन',
    'Napi Online Naksa Trace',
    'Cadastral Map Print Nepal',
    'Fieldbook Download Nepal',
    'MeroKitta Payment eSewa Khalti',
    'जग्गाको नक्सा ट्रेस अनलाइन'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/merokitta-online-naksa',
  },
  openGraph: {
    title: 'मेरोकित्ता अनलाइन नक्सा तथा फिल्डबुक डाउनलोड गाइड (MeroKitta DLIS)',
    description: 'नापी विभागको मेरोकित्ता पोर्टलबाट ३ मिनेटमा नक्सा ट्रेस, फिल्डबुक र प्लट रजिष्टर PDF डाउनलोड गर्ने आधिकारिक गाइड।',
    url: 'https://www.brbhatta.com/tools/merokitta-online-naksa',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function MeroKittaGuidePage() {
  const jsonLdHowTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'घरमै बसेर मेरोकित्ता (MeroKitta) बाट जग्गाको नक्सा (Trace) डाउनलोड गर्ने तरिका',
    description: 'नापी विभागको अनलाइन पोर्टल मेरोकित्ताबाट नक्सा ट्रेस, फिल्डबुक र प्लट रजिष्टर निकाल्ने ५ सजिला चरणहरू।',
    totalTime: 'PT3M',
    step: [
      {
        '@type': 'HowToStep',
        name: 'मेरोकित्ता पोर्टल खोल्ने र लगइन गर्ने',
        text: 'आफ्नो कम्प्युटर वा मोबाइलमा merokitta.dos.gov.np खोल्नुहोस् र मोबाइल नम्बरमा आएको OTP मार्फत लगइन गर्नुहोस्।',
        url: 'https://www.brbhatta.com/tools/merokitta-online-naksa#step-1'
      },
      {
        '@type': 'HowToStep',
        name: 'जग्गाको ठेगाना र नापी कार्यालय चयन गर्ने',
        text: 'आफ्नो जग्गा रहेको जिल्ला, सम्बन्धित नापी कार्यालय, पालिका, वडा नं र नक्सा सिट नम्बर छान्नुहोस्।',
        url: 'https://www.brbhatta.com/tools/merokitta-online-naksa#step-2'
      },
      {
        '@type': 'HowToStep',
        name: 'कित्ता नम्बर खोजी र नक्सा रुजु गर्ने',
        text: 'आफ्नो लालपुर्जामा भएको कित्ता नम्बर टाइप गर्नुहोस् र स्क्रिनमा देखिने कित्ताको नक्सा आफ्नो जग्गासँग मेल खान्छ कि खादैन हेर्नुहोस्।',
        url: 'https://www.brbhatta.com/tools/merokitta-online-naksa#step-3'
      },
      {
        '@type': 'HowToStep',
        name: 'डिजिटल दस्तुर भुक्तानी गर्ने',
        text: 'सरकारी तोकिएको शुल्क (रु १०० देखि ३०० सम्म) ईसेवा, खल्ती वा ConnectIPS मार्फत अनलाइन भुक्तानी गर्नुहोस्।',
        url: 'https://www.brbhatta.com/tools/merokitta-online-naksa#step-4'
      },
      {
        '@type': 'HowToStep',
        name: 'डिजिटल हस्ताक्षरसहितको नक्सा PDF डाउनलोड गर्ने',
        text: 'भुक्तानी सफल हुनासाथ क्युआर कोड र डिजिटल प्रमाणसहितको आधिकारिक नक्सा ट्रेस PDF तुरुन्त डाउनलोड वा प्रिन्ट गर्नुहोस्।',
        url: 'https://www.brbhatta.com/tools/merokitta-online-naksa#step-5'
      }
    ]
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'मेरोकित्ताबाट निकालिएको डिजिटल नक्सा सरकारी कामकाजमा मान्य हुन्छ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'हो, मेरोकित्ताबाट निकालिएको नक्सा ट्रेसमा नापी विभागको डिजिटल हस्ताक्षर र आधिकारिक क्युआर कोड हुने भएकाले यो बैंक कर्जा, घर नक्सापास, कित्ताकाट तथा मालपोत रजिस्ट्रेसन सबै सरकारी कामकाजमा पूर्ण रूपमा मान्य हुन्छ।'
        }
      },
      {
        '@type': 'Question',
        name: 'मेरोकित्तामा नक्सा निकाल्न सरकारी दस्तुर कति लाग्छ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'साधारण नक्सा ट्रेस (Print/Download) का लागि प्रति पाना रु १०० लाग्छ। फिल्डबुक वा प्लट रजिष्टरको प्रतिलिपि लिन अतिरिक्त रु ५० देखि १०० सम्म सरकारी राजस्व लाग्दछ।'
        }
      },
      {
        '@type': 'Question',
        name: 'मोबाइलमा OTP कोड नआएमा के गर्ने?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'प्रायः सर्भर ट्राफिक वा टेलिकम ढिलाइका कारण OTP ढिलो हुन सक्छ। २ मिनेट पर्खेर "Resend OTP" थिच्नुहोस् वा बिहान ९ बजे अगाडि वा बेलुका ५ बजेपछि प्रयास गर्नुहोस् जब सरकारी सर्भर हल्का हुन्छ।'
        }
      },
      {
        '@type': 'Question',
        name: 'कित्ता नम्बर खोज्दा नक्सा नदेखिएमा के गर्ने?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'यदि सिट नम्बर र कित्ता नम्बर सही हाल्दा पनि नक्सा देखिएन भने तपाईंको जग्गा हालसाबिक (Halsabik) भएर नयाँ सिटमा सरेको हुन सक्छ। त्यस्तो अवस्थामा सम्बन्धित नापी कार्यालयमा गई साविक सिट र नयाँ सिट रुजु गर्नुपर्छ।'
        }
      }
    ]
  };

  const steps = [
    {
      num: '१',
      id: 'step-1',
      title: 'पोर्टल खोल्ने र नागरिक लगइन / दर्ता',
      icon: Smartphone,
      color: 'emerald',
      desc: 'आफ्नो कम्प्युटर वा मोबाइल ब्राउजरमा आधिकारिक पोर्टल खोल्नुहोस्।',
      tips: [
        'वेबसाइट: merokitta.dos.gov.np मा जानुहोस्',
        'आफ्नो चालू मोबाइल नम्बर प्रविष्ट गर्नुहोस्',
        'एसएमएस (SMS) मा आएको ६ अंकको OTP कोड हालेर लगइन गर्नुहोस्',
        'पहिलोपटक हो भने नाम र नागरिकता नम्बर हालेर निःशुल्क दर्ता गर्नुहोस्'
      ]
    },
    {
      num: '२',
      id: 'step-2',
      title: 'जग्गाको ठेगाना र सम्बन्धित नापी कार्यालय चयन',
      icon: MapPin,
      color: 'blue',
      desc: 'तपाईंको जग्गा कुन जिल्ला र कुन नापी कार्यालयको कार्यक्षेत्रमा पर्छ छान्नुहोस्।',
      tips: [
        'जिल्ला (District) छान्नुहोस् (उदा: काठमाडौँ, ललितपुर, कास्की...)',
        'सम्बन्धित नापी कार्यालय छान्नुहोस् (उदा: डिल्लीबजार, कलंकी, पोखरा...)',
        'स्थानीय तह (गाउँपालिका वा नगरपालिका) र वडा नम्बर छान्नुहोस्',
        'लालपुर्जामा लेखिएको नक्सा सिट नम्बर (Sheet No) छान्नुहोस्'
      ]
    },
    {
      num: '३',
      id: 'step-3',
      title: 'कित्ता नम्बर खोजी र नक्सा प्रिभ्यू (रुजु)',
      icon: Search,
      color: 'amber',
      desc: 'आफ्नो जग्गाको कित्ता नम्बर प्रविष्ट गरी नक्साको आकार रुजु गर्नुहोस्।',
      tips: [
        'कित्ता नम्बर (Plot No) बक्समा आफ्नो लालपुर्जाको नम्बर टाइप गर्नुहोस्',
        '"खोज्नुहोस् (Search)" बटनमा क्लिक गर्नुहोस्',
        'स्क्रिनमा तपाईंको कित्ता र वरिपरिका छिमेकी कित्ताहरूको रेखाचित्र देखिनेछ',
        'कित्ताको साँध, सिमाना र बाटो मिलेको छ कि छैन राम्रोसँग रुजु गर्नुहोस्'
      ]
    },
    {
      num: '४',
      id: 'step-4',
      title: 'डिजिटल दस्तुर भुक्तानी (eSewa / Khalti / ConnectIPS)',
      icon: CreditCard,
      color: 'purple',
      desc: 'नेपाल सरकारले तोकेको न्यूनतम दस्तुर अनलाइन भुक्तानी गर्नुहोस्।',
      tips: [
        'साधारण नक्सा ट्रेसका लागि प्रति कपी मात्र रु १०० लाग्दछ',
        'भुक्तानी माध्यम: eSewa, Khalti, ConnectIPS वा वालेट छान्नुहोस्',
        'आफ्नो वालेट लगइन गरी सुरक्षित रूपमा भुक्तानी सम्पन्न गर्नुहोस्',
        'भुक्तानी सफल भएपछि सरकारी राजस्व रसिद (Voucher) स्क्रिनमा आउँछ'
      ]
    },
    {
      num: '५',
      id: 'step-5',
      title: 'डिजिटल हस्ताक्षरसहितको नक्सा PDF डाउनलोड र प्रिन्ट',
      icon: Download,
      color: 'teal',
      desc: 'आधिकारिक क्युआर कोड अंकित नक्सा ट्रेस PDF तुरुन्त सुरक्षित गर्नुहोस्।',
      tips: [
        '"Download Trace PDF" मा क्लिक गरी फाइल सुरक्षित गर्नुहोस्',
        'फाइलमा नापी विभागको डिजिटल हस्ताक्षर र सुरक्षा कोड समावेश हुन्छ',
        'यसलाई रंगीन (Color) वा सादा A4 पानामा प्रिन्ट गर्नुहोस्',
        'यो नक्सा बैंक, अदालत, मालपोत वा नगरपालिकामा १००% आधिकारिक मानिन्छ'
      ]
    }
  ];

  const onlineOffices = [
    { district: 'काठमाडौँ', offices: ['डिल्लीबजार', 'कलंकी', 'चाबहिल', 'मनमैजु', 'साँखु', 'टोखा'] },
    { district: 'ललितपुर', offices: ['लगनखेल', 'गोदावरी'] },
    { district: 'भक्तपुर', offices: ['भक्तपुर (ब्यासी)'] },
    { district: 'कास्की', offices: ['पोखरा (बिरौटा)', 'लेखनाथ'] },
    { district: 'चितवन', offices: ['भरतपुर', 'माडी'] },
    { district: 'रुपन्देही', offices: ['बुटवल', 'भैरहवा'] },
    { district: 'मोरङ', offices: ['विराटनगर', 'बेलबारी'] },
    { district: 'झापा', offices: ['भद्रपुर', 'दमक'] },
    { district: 'सुनसरी', offices: ['धरान', 'इनरुवा'] },
    { district: 'बाँके', offices: ['नेपालगञ्ज'] },
    { district: 'कैलाली', offices: ['धनगढी', 'टीकापुर'] },
    { district: 'पर्सा', offices: ['वीरगञ्ज'] }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 sm:space-y-10">
        
        {/* Breadcrumb Nav */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>उपकरणहरू (Tools Hub)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200">मेरोकित्ता अनलाइन नक्सा गाइड</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-bold shadow-xs">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            <span>नेपाल सरकार नापी विभाग आधिकारिक अनलाइन प्रणाली (MeroKitta DLIS)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            मेरोकित्ता (MeroKitta): घरमै बसेर जग्गाको नक्सा (Trace) र फिल्डबुक डाउनलोड गर्ने तरिका
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            अब नापी कार्यालयमा घण्टौं लाइन बस्न र बिचौलियालाई अतिरिक्त पैसा तिर्न पर्दैन। नापी विभागको आधिकारिक पोर्टलबाट मात्र <strong className="text-emerald-600 dark:text-emerald-400">३ मिनेटमा रु १०० तिरेर</strong> आधिकारिक नक्सा ट्रेस, फिल्डबुक र प्लट रजिष्टर PDF निकाल्नुहोस्।
          </p>

          {/* Direct Government Portal Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://merokitta.dos.gov.np"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span>मेरोकित्ता पोर्टल खोल्नुहोस् (merokitta.dos.gov.np)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Link
              href="/tools/survey-offices"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-emerald-500 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm shadow-xs transition-colors"
            >
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span>नापी कार्यालयहरूको फोन नम्बर हेर्नुहोस्</span>
            </Link>
          </div>
        </div>

        {/* Essential Benefits Highlight Box */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center font-bold">
              ⚡
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">३ मिनेटमा तत्काल प्रिन्ट</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              कार्यालयमा २-३ दिन लाग्ने काम घरमै बसेर मोबाइल वा कम्प्युटरबाट तुरुन्तै हुन्छ।
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1.5">
            <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center font-bold">
              💰
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">न्यूनतम सरकारी शुल्क (रु १००)</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              बिचौलिया वा लेखापढी व्यवसायीलाई हजारौं नतिरी तोकिएको रु १०० राजस्वमा नक्सा पाइन्छ।
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1.5">
            <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center font-bold">
              🔒
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">डिजिटल हस्ताक्षर र QR Code</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              नापी अधिकृतको डिजिटल प्रमाणिकरण भएकोले बैंक, मालपोत र नगरपालिकामा पूर्ण मान्य।
            </p>
          </div>
        </div>

        {/* In-feed AdSense Slot */}
        <AdSenseSlot userFacingLabel="विज्ञापन (AdSense Slot)" />

        {/* 5-Step Visual HowTo Guide */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
              Step-by-Step Practical Workflow
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              मेरोकित्ताबाट नक्सा डाउनलोड गर्ने ५ वटा सजिला चरणहरू
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              तल दिइएका प्रत्येक चरण पालना गरेर तपाईंले आफ्नै हातले आफ्नो जग्गाको नक्सा डाउनलोड गर्न सक्नुहुन्छ:
            </p>
          </div>

          <div className="space-y-5">
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <div 
                  key={st.num}
                  id={st.id}
                  className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-3 transition-all hover:border-emerald-500/40"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center shrink-0 shadow-sm">
                      {st.num}
                    </div>

                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-emerald-600" />
                        <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                          {st.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        {st.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bullet points / tips */}
                  <div className="pl-0 sm:pl-14 pt-2">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                      {st.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 bg-white dark:bg-slate-900/80 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick CTA to portal */}
          <div className="text-center pt-2">
            <a
              href="https://merokitta.dos.gov.np"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm shadow-sm transition-all"
            >
              <span>अहिले नै मेरोकित्ता पोर्टलमा नक्सा खोज्नुहोस्</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Offices where MeroKitta is Active */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-xs font-bold">
              <Building2 className="w-3.5 h-3.5" />
              <span>प्रणाली लागु भएका क्षेत्रहरू</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              मेरोकित्ता सेवा कुन-कुन नापी कार्यालयमा लागु भएको छ?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              नापी विभागले देशभरिका प्रमुख सहरी तथा सुगम जिल्लाका नापी कार्यालयहरूमा यो प्रणाली पूर्ण रूपमा सञ्चालन गरिसकेको छ:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            {onlineOffices.map((dist, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-black text-slate-900 dark:text-white text-sm">
                    {dist.district}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    सक्रिय (Active)
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  कार्यालयहरू: {dist.offices.join(', ')}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold">सुझाव: तपाईंको जिल्लाको नापी कार्यालयको फोन नम्बर चाहिन्छ?</strong>
              नेपालभरिका सबै नापी तथा मालपोत कार्यालयहरूको सिधा सम्पर्क नम्बर, ठेगाना र गुगल नक्सा हेर्न हाम्रो{' '}
              <Link href="/tools/survey-offices" className="underline font-bold hover:text-emerald-600">
                नापी तथा मालपोत निर्देशिका (Survey Offices Directory)
              </Link>{' '}
              हेर्नुहोस्।
            </div>
          </div>
        </div>

        {/* FAQs & Troubleshooting */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>प्रायः सोधिने प्रश्नहरू र समस्या समाधान</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              मेरोकित्ता प्रयोग गर्दा आइपर्ने समस्या र समाधान (FAQs)
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h4 className="font-black text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                <span className="text-emerald-600 font-bold">Q.</span>
                <span>मेरोकित्ताबाट निकालिएको डिजिटल नक्सा बैंक र नगरपालिकामा मान्य हुन्छ?</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                हो, यसमा नापी विभागको डिजिटल हस्ताक्षर (Digital Signature), आधिकारिक मिति र क्युआर कोड (QR Code) अंकित हुन्छ। नेपाल राष्ट्र बैंकको निर्देशन अनुसार बैंकहरूले धितो मूल्याङ्कन (Bank Valuation), नगरपालिकाले घरको नक्सापास (Building Permit) तथा मालपोत कार्यालयले जग्गा रजिष्ट्रेसन गर्दा यो नक्सा पूर्ण रूपमा स्वीकार गर्छन्।
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h4 className="font-black text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                <span className="text-emerald-600 font-bold">Q.</span>
                <span>मोबाइलमा OTP कोड नआएमा के गर्ने?</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                कहिलेकाहीँ टेलिकम नेटवर्क वा सरकारी एसएमएस गेटवेमा ट्राफिक धेरै हुँदा कोड आउन २-३ मिनेट लाग्न सक्छ। स्क्रिनको टाइमर सकिएपछि &quot;Resend OTP&quot; थिच्नुहोस्। यदि फेरि पनि आएन भने कार्यालय समयभन्दा बाहिर (बिहान ८-९ बजे वा बेलुका ६ बजेपछि) प्रयास गर्दा सर्भर एकदमै छिटो चल्छ।
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h4 className="font-black text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                <span className="text-emerald-600 font-bold">Q.</span>
                <span>कित्ता नम्बर हाल्दा नक्सा खाली (No Record Found) देखिए के गर्ने?</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                यसका मुख्य दुई कारण हुन सक्छन्: पहिलो, तपाईंले हालेको सिट नम्बर (Sheet No) वा वडा नम्बर गलत हुन सक्छ; लालपुर्जाको पहिलो पानामा भएको सिट नम्बर राम्रोसँग हेर्नुहोस्। दोस्रो, यदि जग्गा हालसाबिक (Halsabik) भएर नयाँ नापी भएको छ भने पुरानो कित्ता नम्बर परिवर्तन भएर नयाँ नम्बर कायम भएको हुन सक्छ। त्यस्तो अवस्थामा सम्बन्धित नापी कार्यालयको कम्प्युटर फाँटमा सम्पर्क गर्नुपर्छ।
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h4 className="font-black text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                <span className="text-emerald-600 font-bold">Q.</span>
                <span>नक्साबाहेक फिल्डबुक र प्लट रजिष्टर पनि निकाल्न मिल्छ?</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                मिल्छ। मेरोकित्ता पोर्टलमा लगइन गरेपछि &quot;फिल्डबुक प्रतिलिपि (Fieldbook Copy)&quot; र &quot;प्लटरजिष्टर (Plot Register)&quot; सेवा पनि उपलब्ध छ। यसका लागि सम्बन्धित मेनु छानेर तोकिएको राजस्व तिरी आधिकारिक प्रतिलिपि डाउनलोड गर्न सकिन्छ।
              </p>
            </div>
          </div>
        </div>

        {/* Related Land Tools & Articles */}
        <div className="bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-950 text-white rounded-3xl p-6 sm:p-8 space-y-5">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-black">
              नेपाल जग्गा सम्बन्धी अन्य उपयोगी उपकरणहरू (Land Tools)
            </h3>
            <p className="text-xs sm:text-slate-300">
              आफ्नो जग्गाको नापजाँच, कित्ताकाट नियम र मालपोत कर तुरुन्त हिसाब गर्नुहोस्:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <Link
              href="/tools/survey-offices"
              className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all group"
            >
              <Building2 className="w-5 h-5 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
              <strong className="block font-black text-sm text-white mb-0.5">नापी तथा मालपोत निर्देशिका</strong>
              <span className="text-slate-300 text-[11px]">नेपालभरिका सबै कार्यालयका फोन र गुगल नक्सा</span>
            </Link>

            <Link
              href="/tools/kitta-kat-checker"
              className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all group"
            >
              <Sparkles className="w-5 h-5 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
              <strong className="block font-black text-sm text-white mb-0.5">कित्ताकाट मापदण्ड जाँच</strong>
              <span className="text-slate-300 text-[11px]">आवासीय र कृषि जग्गाको नयाँ कानुनी मापदण्ड</span>
            </Link>

            <Link
              href="/tools/land-calculator"
              className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all group"
            >
              <Calculator className="w-5 h-5 text-teal-400 mb-2 group-hover:scale-110 transition-transform" />
              <strong className="block font-black text-sm text-white mb-0.5">जग्गा क्षेत्रफल क्यालकुलेटर</strong>
              <span className="text-slate-300 text-[11px]">रोपनी-आना र बिघा-कट्ठा तत्काल रुपान्तरण</span>
            </Link>
          </div>
        </div>

        {/* Social Share Bar */}
        <SocialShareBar 
          title="मेरोकित्ता अनलाइन नक्सा तथा फिल्डबुक डाउनलोड गाइड (MeroKitta DLIS Nepal)" 
          url="/tools/merokitta-online-naksa" 
        />

      </main>

      <Footer />
    </div>
  );
}
