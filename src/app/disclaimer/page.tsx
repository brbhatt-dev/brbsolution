import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowLeft, ShieldCheck, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer (अस्वीकरण) | BR Bhatta & Land Solution',
  description: 'Official legal disclaimer regarding the use of land area calculators, cadastral utilities, AutoCAD LSP scripts, legal deed templates, and financial ledger simulators on www.brbhatta.com.',
  alternates: {
    canonical: 'https://www.brbhatta.com/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer (अस्वीकरण) | BR Bhatta & Land Solution',
    description: 'Legal disclaimer regarding calculations, cadastre utilities, and tools on www.brbhatta.com.',
    url: 'https://www.brbhatta.com/disclaimer',
    siteName: 'BR Bhatta',
    locale: 'en_US',
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold mb-3 border border-amber-200 dark:border-amber-800">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>OFFICIAL LEGAL DISCLAIMER</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Disclaimer (अस्वीकरण)
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Last Revised: November 2026 • Effective Date: January 1, 2026
            </p>
          </div>

          {/* 1. General Notice */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. General Information &amp; Non-Government Status (सामान्य जानकारी र गैर-सरकारी घोषणा)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              All information, calculators, software utilities, AutoCAD AutoLISP (.LSP) scripts, and educational articles published on <strong>www.brbhatta.com</strong> and the <strong>Land Solution Android Application</strong> are provided in good faith and solely for general informational, educational, and preliminary engineering estimation purposes. <strong>www.brbhatta.com is an independent platform operated by Bhakta Raj Bhatt (Surveyor) and is NOT affiliated with, endorsed by, or connected to the Government of Nepal, the Survey Department (Napi Bibhag), or the Department of Land Management and Archive (Malpot).</strong>
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>www.brbhatta.com</strong> मा उपलब्ध गराइएका सम्पूर्ण सामग्री, ल्याण्ड सोलुसन (Land Solution) मोबाइल एप, हाम्रो कोष (Hamro Kosh) क्यालकुलेटरहरू, तथा AutoCAD LSP फाइलहरू केवल सूचना, शैक्षिक अभ्यास तथा कार्य-सहजीकरणको प्रयोजनका लागि तयार पारिएका हुन्। यो कुनै सरकारी निकाय होइन।
            </p>
          </section>

          {/* 2. Land Survey & Cadastre Disclaimer */}
          <section className="space-y-3 p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
            <h2 className="text-lg font-bold text-emerald-950 dark:text-emerald-300 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>2. Land Surveying &amp; Cadastral Calculation Disclaimer (जग्गा नापजाँच तथा कित्ताकाट अस्वीकरण)</span>
            </h2>
            <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed">
              Our tools perform mathematical conversions using standard Nepalese cadastral constants (1 Ropani = 5,476 sq. ft. = 508.737 m&sup2;; 1 Bigha = 72,900 sq. ft. = 6,772.63 m&sup2;). However:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 space-y-1.5 leading-relaxed">
              <li>
                <strong>Official Boundary Verification:</strong> For official land ownership certificates (Lalpurja), parcel subdivision (Kitta-kat), or boundary dispute resolution, only measurements certified by the Government of Nepal Survey Office (Napi Karyalaya) and Land Revenue Office (Malpot Karyalaya) hold legal validity. (जग्गाको सिमाना विवाद वा कित्ताकाटका लागि सरकारी नापी तथा मालपोत कार्यालयको निर्णय नै अन्तिम हुनेछ।)
              </li>
              <li>
                <strong>Field Assistance Only:</strong> Results generated by our web calculators and mobile app are intended for preliminary field verification and engineering planning, and do not substitute an official government cadastral survey report.
              </li>
            </ul>
          </section>

          {/* 3. Financial & Accounting Disclaimer */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Financial &amp; Savings Ledger Disclaimer (वित्तीय तथा कोष व्यवस्थापन अस्वीकरण)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Hamro Kosh (हाम्रो कोष)</strong> and our Loan EMI / Tax Calculators are mathematical accounting utilities designed to help individuals and community groups track internal records and estimate interest. We are NOT a bank, cooperative, or financial institution licensed by Nepal Rastra Bank. Users must independently verify and audit all financial transactions.
            </p>
          </section>

          {/* 4. Accuracy & Technical Operation */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. &quot;As-Is&quot; Software Provision (प्राविधिक शुद्धता र सफ्टवेयर प्रयोग)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              While we continuously test our algorithms, scripts, and calculators for mathematical precision, all software and web utilities are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind. Any action you take upon the information on this website is strictly at your own risk.
            </p>
          </section>

          {/* 5. Legal, Tax & Financial Advice Disclaimer */}
          <section className="space-y-3 p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
            <h2 className="text-lg font-bold text-amber-950 dark:text-amber-300 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>5. No Legal, Tax, or Architectural Advice (कानुनी, कर तथा नक्सा परामर्श अस्वीकरण)</span>
            </h2>
            <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed">
              The <strong>Legal Deed Templates (नेपाली लिखत तमसुक ढाँचाहरू)</strong>, <strong>Property Dispute Guides</strong>, <strong>Malpot Tax Estimators</strong>, and <strong>Municipal Building Bye-Law Calculators</strong> on this portal are strictly for educational reference:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-amber-950 dark:text-amber-200 space-y-1.5 leading-relaxed">
              <li>
                <strong>No Attorney-Client Relationship:</strong> Nothing on this website constitutes formal legal counsel. Before executing any property contract, deed (Tamasuk/Bayana), or court filing, always consult a licensed advocate registered with the Nepal Bar Council.
              </li>
              <li>
                <strong>Tax &amp; Valuation Estimates:</strong> Registration fees and Capital Gains Tax (CGT) calculations are estimates based on published Fiscal Act rates; final payable revenue is determined solely by the respective Land Revenue Office (Malpot Karyalaya).
              </li>
              <li>
                <strong>Municipal Building Permits:</strong> Building setback, ROW, and FAR standards vary by municipality; always obtain structural approval from a registered municipal engineer.
              </li>
            </ul>
          </section>

          {/* 6. Advertising & AdSense Disclaimer */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">6. Third-Party Advertising &amp; Google AdSense Disclaimer (विज्ञापन सम्बन्धी अस्वीकरण)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              This website displays automated advertisements served by <strong>Google AdSense</strong> and third-party advertising partners. The presence of third-party advertisements on www.brbhatta.com does not constitute an endorsement, guarantee, or recommendation of the advertised products or services by BR Bhatta.
            </p>
          </section>

          {/* 7. Contact Information */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">Need clarification or have a question? (कुनै जिज्ञासा छ?)</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Reach out to our support team anytime.</p>
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
