import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SurveyorDirectory from '@/components/SurveyorDirectory';
import SocialShareBar from '@/components/SocialShareBar';
import { Compass, ArrowLeft, ShieldCheck, PhoneCall, Users, CheckCircle2, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'नेपालका नापी अमिन तथा इन्जिनियर निर्देशिका (Find Land Surveyors & Engineers in Nepal) | Land Solution',
  description: 'नेपालका ७७ वटै जिल्लाका लाइसेन्सप्राप्त नापी अमिन (Land Surveyors), जियोमेटिक्स इन्जिनियर र डिजिटल सर्भे कन्सल्टेन्सीहरूको प्रत्यक्ष फोन, WhatsApp सम्पर्क र कार्यक्षेत्र निर्देशिका। कित्ताकाट, सिमाना नाप र घर नक्सा पासका लागि भरपर्दो प्राविधिक खोज्नुहोस्।',
  keywords: [
    'Find Land Surveyor Nepal',
    'Nepal Napi Amin Directory',
    'Kathmandu Surveyor Contact',
    'Pokhara Amin Phone Number',
    'Geomatics Engineer Nepal',
    'Total Station Survey Nepal',
    'DGPS Survey Nepal',
    'नापी अमिन फोन नम्बर',
    'जग्गा कित्ताकाट गर्ने अमिन',
    'घर नक्सा पास इन्जिनियर',
    'चितवन नापी अमिन'
  ],
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/find-surveyor',
  },
  openGraph: {
    title: 'नेपालका नापी अमिन तथा इन्जिनियर निर्देशिका | Land Solution',
    description: 'नेपालभरिका लाइसेन्सप्राप्त नापी अमिन, इन्जिनियर र सर्भे कम्पनीहरूसँग सिधै फोन र WhatsApp मा सम्पर्क गर्नुहोस्।',
    url: 'https://www.brbhatta.com/tools/find-surveyor',
    siteName: 'Land Solution & BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
};

export default function FindSurveyorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'नेपाल नापी अमिन तथा इन्जिनियर निर्देशिका (Nepal Land Surveyors Directory)',
    description: 'Find licensed land surveyors, amins, geomatics engineers, and survey consultancies across 77 districts of Nepal for land partitioning, cadastral mapping, and municipal drawing.',
    url: 'https://www.brbhatta.com/tools/find-surveyor',
    areaServed: {
      '@type': 'Country',
      name: 'Nepal'
    },
    serviceType: [
      'Land Boundary Survey',
      'Cadastral Partitioning (Kitta-Kat)',
      'Total Station Topographical Survey',
      'Building Bye-Laws & House Drawing',
      'DGPS RTK Geodetic Survey'
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
        
        {/* Breadcrumb Nav */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>उपकरणहरू (Tools Hub)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200">अमिन तथा इन्जिनियर निर्देशिका</span>
        </div>

        {/* Page Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>नेपालभरिका आधिकारिक नापी प्राविधिक तथा इन्जिनियरिङ हब</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            नेपालका नापी अमिन तथा इन्जिनियर निर्देशिका
          </h1>
          
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            आफ्नो जग्गाको कित्ताकाट, साँध-सिमाना नाप, अंशबण्डा, Total Station सर्भे वा घर नक्सा पासका लागि नजिकैको लाइसेन्सप्राप्त अमिन वा इन्जिनियरसँग सिधै फोन तथा WhatsApp मा सम्पर्क गर्नुहोस्।
          </p>

          {/* Quick Stats Badges */}
          <div className="pt-2 flex items-center justify-center gap-4 sm:gap-8 text-xs font-bold text-slate-600 dark:text-slate-400 flex-wrap">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>७७ वटै जिल्ला कभरेज</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>लाइसेन्सप्राप्त प्राविधिक</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>बिचौलिया रहित प्रत्यक्ष सम्पर्क</span>
            </div>
          </div>
        </div>

        {/* Directory Component */}
        <SurveyorDirectory />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="नेपालका नापी अमिन तथा इन्जिनियर निर्देशिका (Find Land Surveyors in Nepal)" 
          url="/tools/find-surveyor" 
        />

      </main>

      <Footer />
    </div>
  );
}
