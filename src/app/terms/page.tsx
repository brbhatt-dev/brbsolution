import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ArrowLeft, ShieldAlert, CheckCircle2, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service (नियम तथा सर्तहरू) | BR Bhatta & Land Solution',
  description: 'Terms and conditions governing the use of www.brbhatta.com, Land Solution apps, AutoCAD scripts, and financial simulators.',
  alternates: {
    canonical: 'https://www.brbhatta.com/terms',
  },
};

export default function TermsPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-3 border border-blue-200">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>TERMS & CONDITIONS</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Terms of Service (प्रयोगका सर्तहरू)
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              अन्तिम अपडेट (Last Updated): September 2026 • Effective Date: January 1, 2026
            </p>
          </div>

          {/* 1. Agreement */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">१. सर्तहरूको स्वीकृति (Acceptance of Terms)</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>www.brbhatta.com</strong> वेब पोर्टल, यस अन्तर्गतका Land Solution वेब डेमो, हाम्रो कोष डेमो, तथा AutoCAD LSP डाउनलोडहरू प्रयोग गर्दा तपाईं यी सम्पूर्ण नियम तथा सर्तहरू मान्न सहमत हुनुहुन्छ। यदि तपाईं यी सर्तहरूसँग असहमत हुनुहुन्छ भने कृपया हाम्रो वेबसाइट र सफ्टवेयर सेवाहरू प्रयोग नगर्नुहोला।
            </p>
          </section>

          {/* 2. Intellectual Property */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">२. बौद्धिक सम्पत्ति अधिकार (Intellectual Property Rights)</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              यस वेबसाइटमा प्रकाशित सबै सफ्टवेयर कोड, AutoCAD LSP स्क्रिप्टहरू, Land Solution ब्राण्ड नाम, लोगो, ग्राफिक डिजाइन, र लिखित सामग्रीहरू <strong>BR Bhatta</strong> को बौद्धिक सम्पत्ति हुन्।
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1 leading-relaxed">
              <li>तपाईंले व्यक्तिगत, शैक्षिक वा व्यावसायिक नापी प्रयोजनका लागि हाम्रा फ्रि स्क्रिप्टहरू प्रयोग गर्न सक्नुहुन्छ।</li>
              <li>हाम्रो पूर्व लिखित अनुमति बिना हाम्रा कोड वा टुल्सहरूलाई रि-सेल (Resell) गर्न वा आफ्नो नाममा दाबी गर्न पाइने छैन।</li>
            </ul>
          </section>

          {/* 3. Acceptable Use */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">३. स्वीकार्य प्रयोग (Acceptable Use)</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              प्रयोगकर्ताहरूले वेबसाइट प्रयोग गर्दा निम्न कुराहरूको पालना गर्नुपर्दछ:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1.5 leading-relaxed">
              <li>कुनै पनि गैरकानुनी वा जालसाजीपूर्ण कार्यका लागि साइट प्रयोग नगर्ने।</li>
              <li>वेबसाइटको सुरक्षा, सर्भर वा डाटाबेसमा अनाधिकृत पहुँच (Hacking, DDoS) को प्रयास नगर्ने।</li>
              <li>गलत वा भ्रामक सूचना नफैलाउने।</li>
            </ul>
          </section>

          {/* 4. Limitation of Liability */}
          <section className="space-y-3 p-5 rounded-2xl bg-amber-50/60 border border-amber-200">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-600" />
              <span>४. दायित्वको सीमा (Limitation of Liability)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              हाम्रा डिजिटल क्यालकुलेटरहरू तथा AutoCAD स्क्रिप्टहरू प्राविधिक गणनालाई सजिलो बनाउन तयार गरिएका सहयोग उपकरण हुन्। जग्गाको सिमाना वा कित्ताकाटको कानुनी मान्यता नेपाल सरकारको आधिकारिक नापी विभाग वा मालपोत कार्यालयबाट प्रमाणित हुनुपर्दछ। प्रयोगकर्ताको गलत डाटा इन्ट्री वा अन्य कारणले भएको कुनै पनि प्रत्यक्ष वा अप्रत्यक्ष क्षतिको जिम्मेवार यो वेबसाइट हुनेछैन।
            </p>
          </section>

          {/* 5. External Links */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">५. बाह्य लिङ्कहरू (External Links)</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              हाम्रो वेबसाइटमा सामाजिक सञ्जाल (Facebook, Instagram, GitHub) लगायतका बाह्य लिङ्कहरू समावेश हुन सक्छन्। ती तेस्रो-पक्ष वेबसाइटहरूको सामग्री र गोपनीयता नीतिका लागि हामी जिम्मेवार छैनौं।
            </p>
          </section>

          {/* 6. Governing Law */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">६. लागू हुने कानुन (Governing Law)</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              यी नियम तथा सर्तहरू नेपालको प्रचलित साइबर कानुन तथा कानुनी व्यवस्था अनुसार निर्देशित र व्याख्या गरिएका छन्।
            </p>
          </section>

          {/* Contact Box */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-slate-900 text-sm">थप स्पष्टता वा सोधपुछका लागि:</p>
              <p className="text-xs text-slate-500">हामी तपाईंलाई सन्तुष्ट र सुरक्षित राख्न प्रतिबद्ध छौं।</p>
            </div>
            <a
              href="mailto:aabiralbhatt@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>aabiralbhatt@gmail.com</span>
            </a>
          </div>

        </div>
      </main>

    </div>
  );
}
