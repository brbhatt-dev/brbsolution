import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, ArrowLeft, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy (गोपनीयता नीति) | BR Bhatta & Land Solution',
  description: 'Official Privacy Policy for www.brbhatta.com. Explains how user information is collected, protected, and used in compliance with Google AdSense, DoubleClick DART cookies, GDPR, and CCPA standards.',
  alternates: {
    canonical: 'https://www.brbhatta.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy (गोपनीयता नीति) | BR Bhatta & Land Solution',
    description: 'Official Privacy Policy for www.brbhatta.com. Information handling and privacy standards.',
    url: 'https://www.brbhatta.com/privacy-policy',
    siteName: 'BR Bhatta',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy (गोपनीयता नीति) | BR Bhatta & Land Solution',
    description: 'Privacy Policy and compliance details for BR Bhatta and Land Solution.',
  },
};

export default function PrivacyPolicyPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-3 border border-emerald-200 dark:border-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>OFFICIAL PRIVACY POLICY</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Privacy Policy (गोपनीयता नीति)
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Last Updated: November 2026 • Effective Date: January 1, 2026
            </p>
          </div>

          {/* Land Solution Mobile App Privacy Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">Google Play Store &amp; Mobile App</span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Land Solution (Android App) Privacy Disclosure</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Detailed permissions, offline data policy, and GPS location safety for official Google Play package <code className="text-xs font-mono font-bold">com.brbhatta.landsolution</code>.
              </p>
            </div>
            <a
              href="/app-privacy.html" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all whitespace-nowrap"
            >
              <span>Full App Policy (HTML)</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* Government Entity Disclaimer & Official Sources */}
          <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-800 text-slate-800 dark:text-slate-100 space-y-3">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>Government Entity Disclaimer (गैर-सरकारी निकाय घोषणा)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              <strong>Land Solution and www.brbhatta.com are independent professional utilities and educational resources developed by Bhakta Raj Bhatt (Surveyor).</strong> This platform does NOT represent, and is NOT affiliated with, endorsed by, authorized by, or in any way associated with the Government of Nepal or any government ministry or department.
            </p>
            <div className="pt-2 border-t border-amber-200 dark:border-amber-800/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200 mb-2">
                🏛️ Official Public Sources of Government Information:
              </h4>
              <ul className="text-xs space-y-1.5 text-slate-700 dark:text-slate-300 list-disc pl-5">
                <li><strong>Survey Department (नापी विभाग):</strong> <a href="https://dos.gov.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-semibold">https://dos.gov.np</a></li>
                <li><strong>Department of Land Management and Archive (DoLMA / मालपोत):</strong> <a href="https://dolma.gov.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-semibold">https://dolma.gov.np</a></li>
                <li><strong>Inland Revenue Department (आन्तरिक राजस्व विभाग - IRD):</strong> <a href="https://ird.gov.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-semibold">https://ird.gov.np</a></li>
                <li><strong>Nepal Law Commission (नेपाल कानून आयोग):</strong> <a href="https://lawcommission.gov.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline font-semibold">https://lawcommission.gov.np</a></li>
              </ul>
            </div>
          </div>

          {/* 1. Introduction */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Introduction (परिचय)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              At <strong>www.brbhatta.com</strong> (operated by BR Bhatta, creator of Land Solution and Hamro Kosh), one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that are collected and recorded by www.brbhatta.com and how we use it.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>www.brbhatta.com</strong> मा तपाईंको व्यक्तिगत गोपनीयताको सम्मान र सुरक्षा हाम्रो उच्च प्राथमिकता हो। यदि तपाईंसँग हाम्रो गोपनीयता नीति बारे थप प्रश्नहरू छन् भने हामीलाई सिधै{' '}
              <a href="mailto:info@brbhatta.com" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                info@brbhatta.com
              </a>{' '}मा सम्पर्क गर्न सक्नुहुन्छ।
            </p>
          </section>

          {/* 2. Consent */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Consent (सहमति)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              By using our website, you hereby consent to our Privacy Policy and agree to its terms. (हाम्रो वेबसाइट प्रयोग गरेर, तपाईंले हाम्रो यस गोपनीयता नीतिलाई स्वीकार गर्नुहुन्छ र यसका सम्पूर्ण सर्तहरूमा सहमति जनाउनुहुन्छ।)
            </p>
          </section>

          {/* 3. Information Collection */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Information We Collect &amp; Log Files (हामीले संकलन गर्ने जानकारी)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We collect minimal information necessary to provide our tools and respond to user inquiries:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
              <li>
                <strong>Contact Inquiries (सम्पर्क फारम):</strong> When you contact us directly via our contact form or email, we may receive your name, email address, phone number, and the contents of the message you send us.
              </li>
              <li>
                <strong>Client-Side Calculator Inputs (क्यालकुलेटर डेटा):</strong> All land area measurements, tax estimations, image compressions, and PDF conversions entered into our web tools are processed locally inside your browser and are never permanently stored on our servers.
              </li>
              <li>
                <strong>Standard Log Files (लग फाइल्स):</strong> www.brbhatta.com follows a standard procedure of using log files. Information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
              </li>
            </ul>
          </section>

          {/* 4. Cookies & Google AdSense */}
          <section className="space-y-3 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>4. Cookies, Google AdSense &amp; DoubleClick DART Cookie (कुकीज तथा गुगल एडसेन्स नीति)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Like any other website, <strong>www.brbhatta.com</strong> uses &quot;cookies&quot; to store visitors&apos; preferences (such as dark/light theme) and optimize the user experience by customizing our web page content based on visitors&apos; browser type.
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <p>
                <strong>Google DoubleClick DART Cookie:</strong> Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.brbhatta.com and other sites on the internet. Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to our website or other websites.
              </p>
              <p>
                गुगल लगायतका तेस्रो पक्ष विज्ञापन साझेदारहरू (Third-party vendors) ले प्रयोगकर्ताहरूले यस वेबसाइट वा इन्टरनेटका अन्य वेबसाइटहरूमा यसअघि गरेका भ्रमणका आधारमा सान्दर्भिक विज्ञापन (Personalized Ads) देखाउन कुकीज प्रयोग गर्दछन्।
              </p>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <p className="font-semibold text-slate-900 dark:text-white">
                  How to Opt Out of Personalized Advertising (विज्ञापन कुकीज बन्द गर्ने विकल्पहरू):
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300">
                  <li>
                    Users may opt out of personalized advertising by visiting <strong>Google Ads Settings</strong>:{' '}
                    <a 
                      href="https://adssettings.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-emerald-600 dark:text-emerald-400 underline font-semibold break-all"
                    >
                      https://adssettings.google.com
                    </a>
                  </li>
                  <li>
                    Visitors can also decline the use of DART cookies by visiting the Google Ad and Content Network Privacy Policy at:{' '}
                    <a 
                      href="https://policies.google.com/technologies/ads" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-emerald-600 dark:text-emerald-400 underline font-semibold break-all"
                    >
                      https://policies.google.com/technologies/ads
                    </a>
                  </li>
                  <li>
                    Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{' '}
                    <a 
                      href="https://www.aboutads.info/choices" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-emerald-600 dark:text-emerald-400 underline font-semibold break-all"
                    >
                      https://www.aboutads.info/choices
                    </a>{' '}
                    or{' '}
                    <a 
                      href="https://optout.networkadvertising.org" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-emerald-600 dark:text-emerald-400 underline font-semibold break-all"
                    >
                      https://optout.networkadvertising.org
                    </a>.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. Third Party Privacy Policies */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">5. Third-Party Privacy Policies (तेस्रो पक्षीय गोपनीयता नीति)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              www.brbhatta.com&apos;s Privacy Policy does not apply to other advertisers or external websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt out of certain options. You can choose to disable cookies through your individual browser options.
            </p>
          </section>

          {/* 6. GDPR & CCPA Data Protection Rights */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">6. GDPR &amp; CCPA Data Protection Rights (डेटा सुरक्षा अधिकार)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We would like to make sure you are fully aware of all of your data protection rights under GDPR and CCPA. Every user is entitled to the following:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1 leading-relaxed">
              <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
              <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or incomplete.</li>
              <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><strong>The right to restrict processing &amp; object:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
            </ul>
          </section>

          {/* 7. Children's Information */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">7. Children&apos;s Information (बालबालिकाको सुरक्षा)</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Another part of our priority is adding protection for children while using the internet. www.brbhatta.com does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>
          </section>

          {/* Contact Box */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">Questions about this Privacy Policy? (थप जानकारीका लागि)</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Contact our legal &amp; compliance desk (२४-४८ घण्टाभित्र जवाफ दिइनेछ).</p>
            </div>
            <a
              href="mailto:info@brbhatta.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
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
