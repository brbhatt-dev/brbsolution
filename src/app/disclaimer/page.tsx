import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowLeft, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer (अस्वीकरण) | BR Bhatta & Land Solution',
  description: 'Legal disclaimer regarding the use of land calculations, cadastral utilities, AutoCAD LSP scripts, and financial ledger simulators on www.brbhatta.com.',
  alternates: {
    canonical: 'https://www.brbhatta.com/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer (अस्वीकरण) | BR Bhatta & Land Solution',
    description: 'Legal disclaimer regarding calculations, cadastre utilities, and tools on www.brbhatta.com.',
    url: 'https://www.brbhatta.com/disclaimer',
    siteName: 'BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer (अस्वीकरण) | BR Bhatta & Land Solution',
    description: 'Legal disclaimer regarding calculations and tools on www.brbhatta.com.',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      
      {/* Header Bar */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 transition-colors">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>गृहपृष्ठ (Home) फर्कनुहोस्</span>
          </Link>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">www.brbhatta.com</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-8 transition-colors">
          
          {/* Title Header */}
          <div className="border-b border-slate-100 dark:border-slate-800 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold mb-3 border border-amber-200 dark:border-amber-800">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>LEGAL DISCLAIMER</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Disclaimer (अस्वीकरण)
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              अन्तिम परिमार्जन (Last Revised): September 2026
            </p>
          </div>

          {/* 1. General Notice */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">१. सामान्य जानकारी (General Information)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>www.brbhatta.com</strong> मा उपलब्ध गराइएका सम्पूर्ण सामग्री, ल्याण्ड सोलुसन (Land Solution) का वेब डेमो, हाम्रो कोष (Hamro Kosh) का नमुना क्यालकुलेटरहरू, तथा AutoCAD LSP फाइलहरू केवल सूचना, शैक्षिक अभ्यास तथा कार्य-सहजीकरणको प्रयोजनका लागि तयार पारिएका हुन्।
            </p>
          </section>

          {/* 2. Land Survey & Cadastre Disclaimer */}
          <section className="space-y-3 p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
            <h2 className="text-lg font-bold text-emerald-950 dark:text-emerald-300 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>२. जग्गा नापजाँच तथा कित्ताकाट सम्बन्धी अस्वीकरण</span>
            </h2>
            <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed">
              हाम्रो सिस्टमले नेपालको प्रचलित मानक (५४७६ वर्ग फिट = १ रोपनी, ७२९०० वर्ग फिट = १ बिघा) अनुसार गणितीय रूपान्तरण गर्दछ।
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 space-y-1.5 leading-relaxed">
              <li>जग्गाको सिमाना विवाद, आधिकारिक नक्सा ट्रेस, वा कानुनी लालपुर्जा प्रमाणीकरणका लागि नेपाल सरकारको आधिकारिक नापी कार्यालय तथा मालपोत कार्यालयबाट प्रमाणित अमिन वा सर्भेक्षकको निर्णय नै अन्तिम र आधिकारिक हुनेछ।</li>
              <li>हाम्रो सफ्टवेयरले दिएको नतिजा फिल्ड सर्भेको मद्दतका लागि हो, यसलाई कानुनी अदालतमा प्रमाणको रूपमा पेश गर्दा आधिकारिक सरकारी सर्भे प्रतिवेदन अनिवार्य हुन्छ।</li>
            </ul>
          </section>

          {/* 3. Financial & Accounting Disclaimer */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">३. वित्तीय तथा कोष व्यवस्थापन सम्बन्धी अस्वीकरण (Hamro Kosh)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              &apos;हाम्रो कोष&apos; (Hamro Kosh) ले व्यक्तिगत वा समूहको आन्तरिक खातापाता राख्न र ब्याजको गणितीय हिसाब निकाल्न सहयोग गर्दछ। यो कुनै बैंक वा नेपाल राष्ट्र बैंकबाट इजाजतपत्र प्राप्त वित्तीय संस्था होइन। प्रयोगकर्ताहरूले आफ्नो समूहको आर्थिक कारोबारको अन्तिम हिसाब आफ्नै तर्फबाट अडिट र प्रमाणीकरण गर्नुपर्नेछ।
            </p>
          </section>

          {/* 4. Accuracy & Technical Operation */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">४. प्राविधिक शुद्धता (Accuracy & Software Use)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              हामी सफ्टवेयर, डिजिटल क्यालकुलेटर र लिपिहरूलाई त्रुटिरहित बनाउन निरन्तर परीक्षण गर्दछौं। यद्यपि, सफ्टवेयर &apos;जस्तो छ त्यस्तै&apos; (As Is) आधारमा प्रदान गरिन्छ। प्रयोगकर्ताको उपकरण, अपरेटिङ सिस्टमको असंगति, वा गलत इनपुटबाट आउने परिणामको जिम्मेवारी प्रयोगकर्ता स्वयम्मा रहनेछ।
            </p>
          </section>

          {/* 5. Legal, Tax & Financial Advice Disclaimer */}
          <section className="space-y-3 p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
            <h2 className="text-lg font-bold text-amber-950 dark:text-amber-300 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>५. कानुनी सल्लाह, कर तथा वित्तीय परामर्श सम्बन्धी अस्वीकरण (No Legal Advice, Tax or Financial Counsel)</span>
            </h2>
            <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed">
              यस वेबसाइटमा प्रस्तुत <strong>नेपाली लिखत तथा तमसुक ढाँचाहरू (Legal Deed Templates)</strong>, <strong>जग्गा विवाद तथा कानुनी समाधान गाइड (Property Dispute Wizard)</strong>, <strong>मालपोत सरकारी मूल्याङ्कन दरहरू</strong>, तथा <strong>नगरपालिका भवन निर्माण मापदण्डहरू (Municipal Bye-Laws)</strong> केवल सामान्य जानकारी र शैक्षिक सहजीकरणका लागि हुन्:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-amber-950 dark:text-amber-200 space-y-1.5 leading-relaxed">
              <li><strong>कानुनी सल्लाह होइन र वकिल-पक्ष सम्बन्ध नरहने (No Legal Advice & No Attorney-Client Relationship):</strong> यी सामग्रीहरू कुनै पनि अर्थमा औपचारिक कानुनी सल्लाह (Legal Counsel) होइनन्। यी सामग्रीहरू प्रयोग गर्दा कुनै पनि प्रकारको कानुनी वा व्यावसायिक परामर्श सम्बन्ध स्थापित हुँदैन। कुनै पनि अदालत, मालपोत वा स्थानीय निकायमा मुद्दा, उजुरी वा लिखत पेश गर्नुअघि नेपाल बार काउन्सिलमा दर्ता भएको आधिकारिक कानुन व्यवसायी (अधिवक्ता) सँग परामर्श लिन अनिवार्य छ।</li>
              <li><strong>कर तथा रजिष्ट्रेसन शुल्क:</strong> मालपोत मूल्याङ्कन र पूँजीगत लाभकर गणना पब्लिक दरहरूमा आधारित अनुमानित हिसाब हुन्। अन्तिम रजिस्ट्रेसन शुल्क र कर सम्बन्धित मालपोत कार्यालयले निर्धारण गरेको आधिकारिक दर अनुसार नै मान्य हुनेछ।</li>
              <li><strong>भवन नक्सा मापदण्ड (Setback & FAR):</strong> भवन निर्माण संहिता तथा मापदण्ड स्थानीय तहको नीति अनुसार फरक हुन सक्ने भएकाले घरको नक्सा पास गर्दा सम्बन्धित नगरपालिका/गाउँपालिकाबाट इजाजतप्राप्त इन्जिनियर वा आर्किटेक्टबाट नक्सा तयार गरी प्रमाणित गराउनु पर्दछ।</li>
            </ul>
          </section>

          {/* 6. Advertising & AdSense Disclaimer */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">६. विज्ञापन तथा तेस्रो-पक्षीय सामग्री सम्बन्धी अस्वीकरण (Third-Party Advertising & AdSense Disclaimer)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              यस वेबसाइटमा देखाइने विज्ञापनहरू Google AdSense वा अन्य तेस्रो पक्ष विज्ञापन सञ्जालहरूद्वारा स्वचालित रूपमा डेलिभर गरिन्छ। वेबसाइटमा विज्ञापन प्रदर्शित हुनुले ती उत्पादन, सेवा वा कम्पनीहरूलाई हाम्रो आधिकारिक सिफारिस (Endorsement) वा ग्यारेन्टी जनाउँदैन। विज्ञापनदाताहरूसँग कारोबार गर्नुअघि प्रयोगकर्ताहरूले आफ्नै विवेक र अनुसन्धान प्रयोग गर्नुपर्नेछ।
            </p>
          </section>

          {/* 7. Contact Information */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">कुनै जिज्ञासा वा स्पष्टीकरण आवश्यक छ?</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">हामी तपाईंलाई सहयोग गर्न सधैं तत्पर छौं।</p>
            </div>
            <a
              href="mailto:info@brbhatta.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
            >
              <Mail className="w-4 h-4 text-emerald-400 dark:text-white" />
              <span>info@brbhatta.com</span>
            </a>
          </div>

        </div>
      </main>

    </div>
  );
}
