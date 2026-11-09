import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ArrowLeft, ShieldAlert, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service (नियम तथा सर्तहरू) | BR Bhatta & Land Solution',
  description: 'Official Terms and Conditions governing the use of www.brbhatta.com, Land Solution mobile apps, AutoCAD LSP scripts, and online land surveying calculators.',
  alternates: {
    canonical: 'https://www.brbhatta.com/terms',
  },
  openGraph: {
    title: 'Terms of Service (नियम तथा सर्तहरू) | BR Bhatta & Land Solution',
    description: 'Terms and conditions governing the use of www.brbhatta.com, Land Solution apps, and AutoCAD scripts.',
    url: 'https://www.brbhatta.com/terms',
    siteName: 'BR Bhatta',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service (नियम तथा सर्तहरू) | BR Bhatta & Land Solution',
    description: 'Terms of Service for www.brbhatta.com and Land Solution tools.',
  },
};

export default function TermsPage() {
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
            <span>Back to Home (गृहपृष्ठ)</span>
          </Link>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">www.brbhatta.com</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-8 transition-colors">
          
          {/* Title Header */}
          <div className="border-b border-slate-100 dark:border-slate-800 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-xs font-bold mb-3 border border-blue-200 dark:border-blue-800">
              <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>OFFICIAL TERMS &amp; CONDITIONS</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Terms of Service (प्रयोगका सर्तहरू)
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Last Updated: November 2026 • Effective Date: January 1, 2026
            </p>
          </div>

          {/* 1. Agreement */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Acceptance of Terms (सर्तहरूको स्वीकृति)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Welcome to <strong>www.brbhatta.com</strong>. By accessing this website, using our online land surveying and tax calculators, downloading our AutoCAD AutoLISP (.LSP) scripts, or installing the <strong>Land Solution</strong> and <strong>Hamro Kosh</strong> mobile applications, you agree to be bound by these Terms and Conditions of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>www.brbhatta.com</strong> वेब पोर्टल, यस अन्तर्गतका अनलाइन क्यालकुलेटरहरू, Land Solution मोबाइल एप, तथा AutoCAD LSP डाउनलोडहरू प्रयोग गर्दा तपाईं यी सम्पूर्ण नियम तथा सर्तहरू मान्न सहमत हुनुहुन्छ।
            </p>
          </section>

          {/* 2. Intellectual Property */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Intellectual Property &amp; Use License (बौद्धिक सम्पत्ति अधिकार)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Unless otherwise stated, <strong>BR Bhatta (Bhakta Raj Bhatt)</strong> owns the intellectual property rights for all original source code, AutoCAD LSP automation scripts, the Land Solution brand, logos, UI designs, and written editorial guides on www.brbhatta.com. All intellectual property rights are reserved.
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1 leading-relaxed">
              <li>
                <strong>Permitted Use:</strong> You are granted a free, non-exclusive license to use our web calculators and download our free AutoCAD LSP scripts for personal, educational, and professional surveying work. (तपाईंले व्यक्तिगत, शैक्षिक वा व्यावसायिक नापी प्रयोजनका लागि हाम्रा नि:शुल्क टुल्स र स्क्रिप्टहरू प्रयोग गर्न सक्नुहुन्छ।)
              </li>
              <li>
                <strong>Restrictions:</strong> You must not republish, sell, rent, sub-license, or redistribute our proprietary software code, calculators, or articles as your own commercial product without prior written consent.
              </li>
            </ul>
          </section>

          {/* 3. Acceptable Use */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. User Conduct &amp; Acceptable Use (स्वीकार्य प्रयोग)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              When using www.brbhatta.com, users agree to abide by the following rules:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
              <li>Do not use the website or its tools for any unlawful, fraudulent, or malicious activity (कुनै पनि गैरकानुनी वा जालसाजीपूर्ण कार्यका लागि साइट प्रयोग नगर्ने).</li>
              <li>Do not attempt unauthorized access, scraping, automated DDoS attacks, or reverse-engineering of our server infrastructure (वेबसाइटको सुरक्षा वा सर्भरमा अनाधिकृत पहुँचको प्रयास नगर्ने).</li>
              <li>Do not generate or distribute falsified legal or government documents using our templates.</li>
            </ul>
          </section>

          {/* 4. Limitation of Liability */}
          <section className="space-y-3 p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>4. Limitation of Liability (दायित्वको सीमा)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              In no event shall <strong>BR Bhatta</strong> or <strong>www.brbhatta.com</strong> be held liable for any direct, indirect, incidental, or consequential damages arising out of the use or inability to use the materials and calculators on this website. All cadastral measurements, Kitta-kat eligibility checks, and tax calculations are mathematical aids; official legal authority rests exclusively with the Government of Nepal Survey Office (Napi Karyalaya) and Land Revenue Office (Malpot Karyalaya).
            </p>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              जग्गाको सिमाना वा कित्ताकाटको कानुनी मान्यता नेपाल सरकारको आधिकारिक नापी विभाग वा मालपोत कार्यालयबाट प्रमाणित हुनुपर्दछ। प्रयोगकर्ताको गलत डाटा इन्ट्री वा अन्य कारणले भएको कुनै पनि प्रत्यक्ष वा अप्रत्यक्ष क्षतिको जिम्मेवार यो वेबसाइट हुनेछैन।
            </p>
          </section>

          {/* 5. External Links */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">5. Third-Party &amp; External Links (बाह्य लिङ्कहरू)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Our website contains links to official public portals (such as dos.gov.np, dolma.gov.np), Google Play Store, and social media profiles. We have no control over the nature, content, and availability of those external sites and are not responsible for their privacy practices.
            </p>
          </section>

          {/* 6. Governing Law */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">6. Governing Law &amp; Jurisdiction (लागू हुने कानुन)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the prevailing laws of Nepal (including the Electronic Transactions Act 2063 and National Civil Code 2074), and you irrevocably submit to the exclusive jurisdiction of the courts in Kathmandu, Nepal.
            </p>
          </section>

          {/* Contact Box */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">For legal inquiries or support (थप स्पष्टता वा सोधपुछका लागि):</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">We respond to all official inquiries within 24–48 hours.</p>
            </div>
            <a
              href="mailto:info@brbhatta.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>info@brbhatta.com</span>
            </a>
          </div>

        </div>
      </main>

    </div>
  );
}
