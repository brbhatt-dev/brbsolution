import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy (गोपनीयता नीति) | BR Bhatta & Land Solution',
  description: 'Official Privacy Policy for www.brbhatta.com. Explains how user information is collected, protected, and used in compliance with Google AdSense, GDPR, and international data standards.',
  alternates: {
    canonical: 'https://www.brbhatta.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>LEGAL POLICY</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Privacy Policy (गोपनीयता नीति)
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              अन्तिम अपडेट (Last Updated): September 2026 • Effective Date: January 1, 2026
            </p>
          </div>

          {/* Introduction */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">१. परिचय (Introduction)</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>www.brbhatta.com</strong> (BR Bhatta, Land Solution, तथा हाम्रो कोष) मा तपाईंको व्यक्तिगत गोपनीयताको सम्मान र सुरक्षा हाम्रो उच्च प्राथमिकता हो। यस गोपनीयता नीतिले तपाईंले हाम्रो वेबसाइट भ्रमण गर्दा वा हाम्रा वेब डेमो तथा टुल्सहरू प्रयोग गर्दा कस्ता सूचनाहरू संकलन हुन्छन् र तिनको कसरी सदुपयोग गरिन्छ भन्ने स्पष्ट गर्दछ।
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at{' '}
              <a href="mailto:aabiralbhatt@gmail.com" className="text-emerald-700 font-semibold hover:underline">
                aabiralbhatt@gmail.com
              </a>.
            </p>
          </section>

          {/* Consent */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">२. सहमति (Consent)</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              हाम्रो वेबसाइट प्रयोग गरेर, तपाईंले हाम्रो यस गोपनीयता नीतिलाई स्वीकार गर्नुहुन्छ र यसका सम्पूर्ण सर्तहरूमा सहमति जनाउनुहुन्छ।
            </p>
          </section>

          {/* Information Collection */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">३. हामीले संकलन गर्ने जानकारी (Information We Collect)</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              हाम्रो वेबसाइटमा प्रयोगकर्ताहरूले निम्न अवस्थामा स्वेच्छाले सूचना प्रदान गर्न सक्नुहुन्छ:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1.5 leading-relaxed">
              <li><strong>सम्पर्क फारम तथा इमेल:</strong> तपाईंले हामीलाई सिधै सम्पर्क गर्दा तपाईंको नाम, इमेल ठेगाना, र सन्देशको विवरण।</li>
              <li><strong>जग्गा क्यालकुलेटर डेटा:</strong> क्यालकुलेटर वा कन्भर्टरमा तपाईंले लेख्नुभएका अंकहरू केवल तपाईंको ब्राउजरमै गणना हुन्छन्, हाम्रो सर्भरमा स्टोर हुँदैनन्।</li>
              <li><strong>लग फाइल्स (Log Files):</strong> वेबसाइटको प्राविधिक सञ्चालनका लागि स्ट्यान्डर्ड होस्टिङ लगहरू (जस्तै IP ठेगाना, ब्राउजरको प्रकार, ISP, मिति र समय, पृष्ठहरूको संख्या)। यी विवरणहरूले कुनै पनि व्यक्तिको व्यक्तिगत पहिचान खुलाउँदैनन्।</li>
            </ul>
          </section>

          {/* Cookies & Google AdSense */}
          <section className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600" />
              <span>४. कुकीज र गुगल एडसेन्स (Cookies & Google AdSense)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              हाम्रो वेबसाइटले प्रयोगकर्ताको प्राथमिकताहरू सुरक्षित गर्न तथा विज्ञापन सम्बन्धी सेवाहरूका लागि कुकीज (Cookies) प्रयोग गर्न सक्दछ।
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <p>
                <strong>Google DoubleClick DART Cookie:</strong> गुगल हाम्रो वेबसाइटमा तेस्रो पक्ष (Third-party) विज्ञापन साझेदार हो। गुगलले हाम्रा प्रयोगकर्ताहरूलाई हाम्रो साइट वा इन्टरनेटका अन्य साइटहरूमा उनीहरूको भ्रमणको आधारमा सान्दर्भिक विज्ञापन देखाउन DART कुकीज प्रयोग गर्दछ।
              </p>
              <p>
                प्रयोगकर्ताहरूले गुगल विज्ञापन र सामग्री नेटवर्क गोपनीयता नीति भ्रमण गरी DART कुकीजको प्रयोग अस्वीकार (Opt-out) गर्न सक्नुहुन्छ:{' '}
                <a 
                  href="https://policies.google.com/technologies/ads" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-700 underline font-semibold"
                >
                  https://policies.google.com/technologies/ads
                </a>
              </p>
            </div>
          </section>

          {/* Third Party Privacy Policies */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">५. तेस्रो पक्षीय गोपनीयता नीति (Third-Party Privacy Policies)</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              हाम्रो गोपनीयता नीति अन्य विज्ञापनदाता वा वेबसाइटहरूमा लागू हुँदैन। तसर्थ, अधिक विस्तृत जानकारीको लागि सम्बन्धित तेस्रो पक्ष विज्ञापन सर्भरहरूको गोपनीयता नीतिहरू अध्ययन गर्न हामी सल्लाह दिन्छौं।
            </p>
          </section>

          {/* GDPR & CCPA Data Protection Rights */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">६. डेटा सुरक्षा अधिकार (GDPR & CCPA Rights)</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              हामी प्रत्येक प्रयोगकर्तालाई उनीहरूको डेटा अधिकारको पूर्ण प्रत्याभूति गर्दछौं। तपाईंसँग निम्न अधिकारहरू सुरक्षित छन्:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1 leading-relaxed">
              <li><strong>Right to Access:</strong> आफ्ना व्यक्तिगत विवरणहरूको प्रतिलिपि माग्ने अधिकार।</li>
              <li><strong>Right to Rectification:</strong> गलत वा अपूर्ण विवरण सच्याउन अनुरोध गर्ने अधिकार।</li>
              <li><strong>Right to Erasure:</strong> निश्चित सर्तहरूमा आफ्नो डेटा हटाउन (Delete) अनुरोध गर्ने अधिकार।</li>
              <li><strong>Right to Restrict Processing:</strong> डेटा प्रशोधन रोक्न अनुरोध गर्ने अधिकार।</li>
            </ul>
          </section>

          {/* Children's Information */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">७. बालबालिकाको सुरक्षा (Children&apos;s Information)</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              हाम्रो वेबसाइट १३ वर्ष मुनिका बालबालिकाहरूबाट जानीजानी कुनै पनि व्यक्तिगत पहिचान योग्य जानकारी संकलन गर्दैन। यदि तपाईंको बच्चाले हाम्रो वेबसाइटमा त्यस्तो जानकारी दिएको फेला पार्नुभएमा हामीलाई तुरुन्तै सम्पर्क गर्नुहोस्, हामी त्यसलाई तत्काल हटाउनेछौं।
            </p>
          </section>

          {/* Contact Box */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-slate-900 text-sm">कुनै प्रश्न वा थप जानकारी चाहिएमा?</p>
              <p className="text-xs text-slate-500">हाम्रो कानुनी तथा नीति विभाग २४-४८ घण्टाभित्र सम्पर्कमा आउनेछ।</p>
            </div>
            <a
              href="mailto:aabiralbhatt@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
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
