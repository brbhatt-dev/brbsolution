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
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Header Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>गृहपृष्ठ (Home) फर्कनुहोस्</span>
          </Link>
          <span className="text-xs font-mono text-slate-500 font-semibold">www.brbhatta.com</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* Title Header */}
          <div className="border-b border-slate-100 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-3 border border-amber-200">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>LEGAL DISCLAIMER</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Disclaimer (अस्वीकरण)
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              अन्तिम परिमार्जन (Last Revised): September 2026
            </p>
          </div>

          {/* 1. General Notice */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">१. सामान्य जानकारी (General Information)</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>www.brbhatta.com</strong> मा उपलब्ध गराइएका सम्पूर्ण सामग्री, ल्याण्ड सोलुसन (Land Solution) का वेब डेमो, हाम्रो कोष (Hamro Kosh) का नमुना क्यालकुलेटरहरू, तथा AutoCAD LSP फाइलहरू केवल सूचना, शैक्षिक अभ्यास तथा कार्य-सहजीकरणको प्रयोजनका लागि तयार पारिएका हुन्।
            </p>
          </section>

          {/* 2. Land Survey & Cadastre Disclaimer */}
          <section className="space-y-3 p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <h2 className="text-lg font-bold text-emerald-950 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>२. जग्गा नापजाँच तथा कित्ताकाट सम्बन्धी अस्वीकरण</span>
            </h2>
            <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
              हाम्रो सिस्टमले नेपालको प्रचलित मानक (५४७६ वर्ग फिट = १ रोपनी, ७२९०० वर्ग फिट = १ बिघा) अनुसार गणितीय रूपान्तरण गर्दछ।
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-emerald-900 space-y-1.5 leading-relaxed">
              <li>जग्गाको सिमाना विवाद, आधिकारिक नक्सा ट्रेस, वा कानुनी लालपुर्जा प्रमाणीकरणका लागि नेपाल सरकारको आधिकारिक नापी कार्यालय तथा मालपोत कार्यालयबाट प्रमाणित अमिन वा सर्भेक्षकको निर्णय नै अन्तिम र आधिकारिक हुनेछ।</li>
              <li>हाम्रो सफ्टवेयरले दिएको नतिजा फिल्ड सर्भेको मद्दतका लागि हो, यसलाई कानुनी अदालतमा प्रमाणको रूपमा पेश गर्दा आधिकारिक सरकारी सर्भे प्रतिवेदन अनिवार्य हुन्छ।</li>
            </ul>
          </section>

          {/* 3. Financial & Accounting Disclaimer */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">३. वित्तीय तथा कोष व्यवस्थापन सम्बन्धी अस्वीकरण (Hamro Kosh)</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              &apos;हाम्रो कोष&apos; (Hamro Kosh) ले व्यक्तिगत वा समूहको आन्तरिक खातापाता राख्न र ब्याजको गणितीय हिसाब निकाल्न सहयोग गर्दछ। यो कुनै बैंक वा नेपाल राष्ट्र बैंकबाट इजाजतपत्र प्राप्त वित्तीय संस्था होइन। प्रयोगकर्ताहरूले आफ्नो समूहको आर्थिक कारोबारको अन्तिम हिसाब आफ्नै तर्फबाट अडिट र प्रमाणीकरण गर्नुपर्नेछ।
            </p>
          </section>

          {/* 4. Accuracy & Technical Operation */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">४. प्राविधिक शुद्धता (Accuracy & Software Use)</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              हामी सफ्टवेयर र लिपिहरूलाई त्रुटिरहित बनाउन निरन्तर परीक्षण गर्दछौं। यद्यपि, सफ्टवेयर &apos;जस्तो छ त्यस्तै&apos; (As Is) आधारमा प्रदान गरिन्छ। प्रयोगकर्ताको उपकरण, अपरेटिङ सिस्टमको असंगति, वा गलत इनपुटबाट आउने परिणामको जिम्मेवारी प्रयोगकर्ता स्वयम्मा रहनेछ।
            </p>
          </section>

          {/* 5. Contact Information */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-slate-900 text-sm">कुनै जिज्ञासा वा स्पष्टीकरण आवश्यक छ?</p>
              <p className="text-xs text-slate-500">हामी तपाईंलाई सहयोग गर्न सधैं तत्पर छौं।</p>
            </div>
            <a
              href="mailto:aabiralbhatt@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>aabiralbhatt@gmail.com</span>
            </a>
          </div>

        </div>
      </main>

    </div>
  );
}
