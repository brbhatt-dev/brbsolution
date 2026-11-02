import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanEmiCalculator from '@/components/LoanEmiCalculator';
import SocialShareBar from '@/components/SocialShareBar';
import { 
  ArrowLeft, 
  Landmark, 
  Scale, 
  FileCheck2, 
  HelpCircle, 
  ShieldCheck, 
  BookOpen, 
  Percent,
  Coins,
  AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'जग्गा धितो बैंक लोन EMI तथा मूल्याङ्कन क्याल्कुलेटर (Home & Land Loan EMI Calculator Nepal) | BR Bhatta',
  description: 'नेपालमा जग्गा तथा घर धितो राखी बैंकबाट ऋण लिँदा मासिक किस्ता (EMI), कुल ब्याज र राष्ट्र बैंकको मौद्रिक नीति २०८१/८२ अनुसार अधिकतम LTV (Loan-to-Value) सीमा जाँच्ने आधिकारिक क्याल्कुलेटर।',
  keywords: [
    'Home Loan EMI Calculator Nepal',
    'जग्गा धितो बैंक लोन क्याल्कुलेटर',
    'Land Mortgage EMI Calculator',
    'NRB LTV Ratio Nepal 2081 2082',
    'Bank Loan Interest Calculator Nepal',
    'Nepal Rastra Bank Housing Loan Limit',
    'बैंक मूल्याङ्कन र कर्जा प्रक्रिया'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/loan-emi-calculator',
  },
  openGraph: {
    title: 'जग्गा धितो बैंक लोन EMI तथा मूल्याङ्कन क्याल्कुलेटर | BR Bhatta',
    description: 'नेपाल राष्ट्र बैंकको मापदण्ड अनुसार घरजग्गा मूल्याङ्कनको कति प्रतिशतसम्म ऋण पाइन्छ र मासिक EMI कति तिर्नुपर्छ, तुरुन्त निकाल्नुहोस्।',
    url: 'https://www.brbhatta.com/tools/loan-emi-calculator',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function LoanEmiCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://www.brbhatta.com/tools/loan-emi-calculator#app',
        name: 'नेपाल जग्गा धितो बैंक लोन EMI तथा मूल्याङ्कन क्याल्कुलेटर',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'All',
        url: 'https://www.brbhatta.com/tools/loan-emi-calculator',
        description: 'Online home and land loan EMI calculator for Nepal with NRB LTV compliance check and amortization schedule.',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.brbhatta.com/tools/loan-emi-calculator#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'नेपाल राष्ट्र बैंकको नियम अनुसार जग्गा धितो राख्दा कति प्रतिशतसम्म ऋण पाइन्छ (LTV Ratio)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'नेपाल राष्ट्र बैंकको मौद्रिक नीति २०८१/८२ अनुसार पहिलो आवासीय घर खरिदकर्ताका लागि बजार मूल्याङ्कनको ७०% सम्म, काठमाडौँ उपत्यका बाहिर आवासीय घरजग्गामा ६०% सम्म, काठमाडौँ उपत्यका भित्र ५०% सम्म र खाली जग्गा मात्र व्यक्तिगत धितो राख्दा अधिकतम ४०% सम्म कर्जा (Loan-to-Value) प्रवाह गर्न पाइन्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'बैंकबाट घरजग्गा कर्जा लिँदा आवश्यक पर्ने न्यूनतम आम्दानी (DSR) कसरी हिसाब गरिन्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'राष्ट्र बैंकको डेप्ट सर्भिस रेसियो (Debt Service to Gross Income Ratio - DSR) निर्देशिका अनुसार मासिक किस्ता (EMI) रकम ऋणीको प्रमाणित कुल मासिक आयको ५०% भन्दा बढी हुन पाउँदैन। उदाहरणका लागि, यदि तपाईंको मासिक किस्ता रु. ५०,००० आउँछ भने तपाईंको परिवारको प्रमाणित मासिक आम्दानी कम्तीमा रु. १,००,००० हुनुपर्छ।'
            }
          },
          {
            '@type': 'Question',
            name: 'बैंक भ्यालुएटरले जग्गाको मूल्याङ्कन कुन आधारमा गर्छन्?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'बैंकका इन्जिनियर भ्यालुएटरले दुईवटा मूल्याङ्कन गर्दछन्: १) सरकारी मालपोत मूल्याङ्कन (Government Rate) र २) चलनचल्तीको बजार मूल्य (Commercial / Market Value)। सामान्यतया बैंकहरूले यी दुवैको औसत (Weighted Average: सरकारी ३०% र बजार ७०%) निकालेर फेयर मार्केट भ्यालु (FMV) कायम गर्दछन्।'
            }
          },
          {
            '@type': 'Question',
            name: 'जग्गा धितो राख्दा बैंकमा कुन-कुन कागजातहरू बुझाउनुपर्छ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'मुख्य आवश्यक कागजातहरूमा: जग्गाधनी प्रमाणपुर्जा (लालपुर्जा), चालु आ.व. को मालपोत तिरो तिरेको रसिद, वडा कार्यालयबाट चारकिल्ला सिफारिस, नापी कार्यालयको नक्सा ट्रेस (ब्लुप्रिन्ट/ट्रेस) र फिल्डबुक उतार, घर भएमा नक्सा पास र निर्माण सम्पन्न प्रमाणपत्र, ऋणीको नागरिकता, नाता प्रमाणित र कम्तीमा ६ महिनाको प्रमाणित आम्दानी स्रोत वा बैंक स्टेटमेन्ट पर्दछन्।'
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

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>सबै टूल्सहरू (Tools Hub)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200">जग्गा धितो बैंक लोन EMI क्याल्कुलेटर</span>
        </div>

        {/* Interactive Component */}
        <LoanEmiCalculator />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="नेपाल जग्गा धितो बैंक लोन EMI तथा मूल्याङ्कन क्याल्कुलेटर (NRB LTV Ratio 2081/82)" 
          url="/tools/loan-emi-calculator" 
        />

        {/* Static In-depth Guide Section */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
              <BookOpen className="w-3.5 h-3.5" />
              <span>नेपाल राष्ट्र बैंक निर्देशिका तथा वित्तीय सल्लाह</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              जग्गा धितो कर्जा (Home & Land Mortgage Loan) सम्बन्धी पूर्ण जानकारी
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              नेपालमा घरजग्गा खरिद, घर निर्माण वा व्यापार विस्तारका लागि बैंक तथा वित्तीय संस्थाबाट धितो कर्जा लिँदा राष्ट्र बैंकको नीति, बैंक भ्यालुएसनको तरिका र मासिक आम्दानीको अनुपात जान्नु अत्यन्त आवश्यक हुन्छ। सही जानकारी नहुँदा भ्यालुएसन दस्तुर तिरेर पनि कर्जा अस्वीकृत हुने सम्भावना रहन्छ।
            </p>
          </div>

          {/* NRB LTV Directive Matrix Table */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Landmark className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>१. नेपाल राष्ट्र बैंकको मौद्रिक नीति २०८१/८२ अनुसार कर्जा सीमा (LTV Limits)</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    <th className="p-3 text-left border border-slate-200 dark:border-slate-700">कर्जाको प्रकृति</th>
                    <th className="p-3 text-left border border-slate-200 dark:border-slate-700">धितो सम्पत्तिको स्थान</th>
                    <th className="p-3 text-left border border-slate-200 dark:border-slate-700">अधिकतम LTV अनुपात</th>
                    <th className="p-3 text-left border border-slate-200 dark:border-slate-700">अधिकतम कर्जा सीमा (Cap)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                  <tr>
                    <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">पहिलो आवासीय घर कर्जा (First Home Buyer)</td>
                    <td className="p-3 font-sans">नेपालभर (उपत्यका भित्र र बाहिर)</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">७०% सम्म</td>
                    <td className="p-3 font-sans">रु. २ करोड सम्म</td>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-850/50">
                    <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">घर/जग्गा कर्जा (Residential Real Estate)</td>
                    <td className="p-3 font-sans">काठमाडौँ उपत्यका बाहिर</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">६०% सम्म</td>
                    <td className="p-3 font-sans">बैंकको आन्तरिक नीति अनुसार</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">घर/जग्गा कर्जा (Residential Real Estate)</td>
                    <td className="p-3 font-sans">काठमाडौँ, ललितपुर र भक्तपुर</td>
                    <td className="p-3 text-amber-600 dark:text-amber-400 font-bold">५०% सम्म</td>
                    <td className="p-3 font-sans">बैंकको आन्तरिक नीति अनुसार</td>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-850/50">
                    <td className="p-3 font-sans font-bold text-slate-900 dark:text-white">खाली जग्गा मात्र धितो (Land Loan / Mortgage)</td>
                    <td className="p-3 font-sans">नेपालभर जुनसुकै स्थान</td>
                    <td className="p-3 text-rose-600 dark:text-rose-400 font-bold">४०% सम्म</td>
                    <td className="p-3 font-sans">व्यक्तिगत अधिकतम् रु. ५० लाख</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Required Documents Checklist */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>२. जग्गा धितो राख्दा बैंकमा पेश गर्नुपर्ने अनिवार्य कागजातहरू</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400">क) जग्गा तथा धितो सम्बन्धी कागजात:</span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <li>• जग्गाधनी दर्ता प्रमाणपुर्जा (लालपुर्जा) को सक्कल तथा प्रतिलिपि</li>
                  <li>• चालु आर्थिक वर्षको मालपोत तिरो (सम्पत्ति कर) तिरेको रसिद</li>
                  <li>• स्थानीय वडा कार्यालयबाट जारी भएको चारकिल्ला प्रमाणित पत्र</li>
                  <li>• नापी कार्यालयबाट प्रमाणित नक्सा ट्रेस (ब्लुप्रिन्ट) र फिल्डबुक उतार</li>
                  <li>• बाटोको अवस्था खुल्ने घरबाटो सिफारिस पत्र (Road Width Verification)</li>
                  <li>• घर भएमा: स्वीकृत नक्सा, अस्थायी/स्थायी इजाजत र निर्माण सम्पन्न प्रमाणपत्र</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400">ख) ऋणी तथा जमानीकर्ताको व्यक्तिगत कागजात:</span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <li>• ऋणी र एकाघरका सम्पूर्ण सदस्यहरूको नागरिकता प्रमाणपत्र</li>
                  <li>• वडा कार्यालयबाट जारी नाता प्रमाणित प्रमाणपत्र (Relationship Certificate)</li>
                  <li>• तलब प्रमाण (Salary Certificate), रोजगार सम्झौता र पछिल्लो ६ महिनाको बैंक स्टेटमेन्ट</li>
                  <li>• व्यवसाय भएमा: दर्ता प्रमाणपत्र, प्यान (PAN/VAT), अडिट रिपोर्ट र कर चुक्ता प्रमाणपत्र</li>
                  <li>• बहाल आम्दानी भएमा: घरबहाल सम्झौता र बहाल कर तिरेको रसिद</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cost considerations before taking a loan */}
          <div className="p-6 rounded-3xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>बैंक लोन लिँदा लाग्ने अतिरिक्त खर्चहरू (Hidden & Upfront Costs):</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-amber-950 dark:text-amber-300">
              <li>• <strong>कर्जा सेवा शुल्क (Loan Processing Fee):</strong> कुल ऋण रकमको ०.२५% देखि ०.७५% सम्म बैंकले सुरुमै लिन्छ।</li>
              <li>• <strong>इन्जिनियरिङ मूल्याङ्कन शुल्क (Valuation Fee):</strong> रु. ५,००० देखि २०,००० सम्म बैंक भ्यालुएटरलाई भुक्तानी गर्नुपर्छ।</li>
              <li>• <strong>धितो बन्धकी रजिष्ट्रेसन दस्तुर:</strong> मालपोत कार्यालयमा रोक्का गर्दा कर्जा रकम अनुसार सरकारी रजिष्ट्रेसन दस्तुर लाग्छ।</li>
              <li>• <strong>घर बीमा (Property Insurance):</strong> धितो राखिएको घरको अनिवार्य अग्नि तथा भूकम्प बीमा वार्षिक रूपमा गराउनुपर्छ।</li>
            </ul>
          </div>

          {/* Frequently Asked Questions */}
          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>बैंक लोन सम्बन्धी बारम्बार सोधिने प्रश्नहरू (FAQs)</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <p className="font-extrabold text-slate-900 dark:text-white">
                  प्रश्न: बैंकले जग्गाको मूल्याङ्कन कुन आधारमा गर्छ?
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  उत्तर: बैंकले सरकारी मालपोत दर र चलनचल्तीको बजार मूल्य दुवै हेरेर फेयर मार्केट भ्यालु (Fair Market Value) तय गर्छ। सामान्यतया सरकारी मूल्यको ३०% र बजार मूल्यको ७०% भार दिएर औसत मूल्याङ्कन निकालिन्छ।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <p className="font-extrabold text-slate-900 dark:text-white">
                  प्रश्न: समय अगावै ऋण चुक्ता (Pre-payment) गर्दा जरिवाना लाग्छ कि लाग्दैन?
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  उत्तर: नेपाल राष्ट्र बैंकको हालको नीति अनुसार रु. ५० लाख सम्मको व्यक्तिगत आवासीय घर कर्जामा समय अगावै ऋण चुक्ता गर्दा वा अर्को बैंकमा स्वाप गर्दा कुनै पनि अग्रिम भुक्तानी शुल्क (Pre-payment Penalty) लिन पाइँदैन।
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
