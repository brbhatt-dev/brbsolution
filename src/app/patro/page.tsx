import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import HomeFooter from '@/components/HomeFooter';
import InteractiveOnlinePatro from '@/components/InteractiveOnlinePatro';
import { 
  Download, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Smartphone, 
  Calendar, 
  Compass, 
  Heart, 
  Scroll, 
  ArrowLeft,
  Share2,
  ExternalLink,
  Info
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'BR Patro (वैदिक पञ्चाङ्ग तथा आधुनिक नेपाली पात्रो) - Official Latest APK Download | BR Bhatta',
  description: 'डाउनलोड गर्नुहोस् BR Patro आधिकारिक एन्ड्रोइड एप (v7.9.69) - १००% निःशुल्क, शुद्ध सूर्यसिद्धान्त तथा दृक्सिद्धान्त पञ्चाङ्ग, ३६ गुण मिलान, दैनिक यात्रा विचार, राहुकाल र राशिफल।',
  alternates: {
    canonical: 'https://www.brbhatta.com/patro',
  },
  openGraph: {
    title: 'BR Patro (नेपाली पात्रो) - Official Latest APK v7.9.69 Download',
    description: 'आधिकारिक BR Patro v7.9.69 डाउनलोड गर्नुहोस् - १००% सुरक्षित, वैदिक पञ्चाङ्ग, विवाह ३६ गुण मिलान, दैनिक साइत र राशिफल।',
    url: 'https://www.brbhatta.com/patro',
    siteName: 'BR Bhatta Software Solutions',
    images: [
      {
        url: 'https://www.brbhatta.com/assets/br-patro-og.png',
        width: 1200,
        height: 630,
        alt: 'BR Patro Official Latest APK v7.9.69',
      },
    ],
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BR Patro (नेपाली पात्रो) - Official Latest APK v7.9.69 Download',
    description: 'आधिकारिक BR Patro v7.9.69 डाउनलोड गर्नुहोस् - १००% सुरक्षित, वैदिक पञ्चाङ्ग, विवाह ३६ गुण मिलान र दैनिक साइत।',
    images: ['https://www.brbhatta.com/assets/br-patro-og.png'],
  },
};

export default function PatroDownloadPage() {
  const downloadUrl = "https://github.com/imtechboss/imtechboss/releases/download/v7.9.69/BR_Patro_v7.9.69.apk";
  const releasePageUrl = "https://github.com/imtechboss/imtechboss/releases/tag/v7.9.69";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            गृहपृष्ठमा फर्कनुहोस्
          </Link>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            आधिकारिक तथा सुरक्षित भर्सन (Verified Safe)
          </span>
        </div>

        {/* Hero Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden mb-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 relative z-10">
            {/* App Icon */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 bg-gradient-to-br from-amber-500 to-red-600 rounded-3xl p-2 shadow-lg shadow-red-500/20 border-2 border-amber-300 dark:border-amber-500 flex items-center justify-center">
              <img 
                src="/assets/ganesh_badge.png" 
                alt="BR Patro Logo" 
                className="w-full h-full object-contain rounded-2xl drop-shadow"
              />
            </div>

            {/* App Details */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300 border border-red-300 dark:border-red-800">
                  Version 7.9.69
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Build 162
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  📦 ३६.५ MB
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
                BR Patro (नेपाली पात्रो)
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                नेपालको आधुनिक, भरपर्दो तथा शास्त्रीय वैदिक पञ्चाङ्ग, कुण्डली, विवाह ३६ गुण मिलान, दैनिक यात्रा विचार तथा सम्पूर्ण कर्मकाण्ड संग्रह एप।
              </p>

              {/* Direct Download Action Button */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={downloadUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-extrabold text-base shadow-lg shadow-red-600/30 active:scale-95 transition transform"
                >
                  <Download className="w-5 h-5 animate-bounce" />
                  डाउनलोड गर्नुहोस् (Download APK)
                </a>

                <a
                  href={releasePageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm border border-slate-300 dark:border-slate-700 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  वैकल्पिक GitHub Mirror
                </a>
              </div>
            </div>
          </div>

          {/* Quick Specifications Strip */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">अपडेट मिति</span>
              <span className="block text-sm font-extrabold text-slate-800 dark:text-slate-100 mt-0.5">२०८३ कार्तिक १७</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">एन्ड्रोइड सपोर्ट</span>
              <span className="block text-sm font-extrabold text-slate-800 dark:text-slate-100 mt-0.5">Android 7.0+</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">सुरक्षा जाँच</span>
              <span className="block text-sm font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">१००% Virus Free</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">डेभलपर</span>
              <span className="block text-sm font-extrabold text-slate-800 dark:text-slate-100 mt-0.5">BR Bhatta</span>
            </div>
          </div>
        </div>

                {/* In-Browser Interactive Patro & Date Converter Widget */}
        <div className="mb-12">
          <InteractiveOnlinePatro />
        </div>

        {/* What's New & Key Features */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-amber-500" />
            नयाँ भर्सन (v7.9.69) का प्रमुख विशेषताहरू
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950/70 text-red-600 dark:text-red-400 flex items-center justify-center flex-shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">दैनिक यात्रा विचार र राहुकाल साधन</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  कुन बार कुन दिशा शूल लाग्छ, शास्त्रीय परिहार के खाने, राहुकाल र अभिजित् मुहूर्तको स्थानीय अक्षांश-देशान्तर अनुसार यथार्थ गणना।
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">१-क्लिक शुभ साइत फिल्टर बार</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  विवाह, व्रतबन्ध, पास्नी, एकादशी व्रत र गृहप्रवेशका दिनहरू क्यालेन्डरमै रङ्गीन ब्याचसहित हाइलाइट हुने र एकै क्लिकमा छानिने सुविधा।
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400 flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">विवाह ३६ गुण मिलान (Kundali Matching)</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  वर र कन्याको नाम वा जन्म विवरणबाट अष्टकूट ३६ गुण, नाडी दोष, भकूट दोष, गण मैत्री र परिहारसहितको सटिक नतिजा।
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                <Scroll className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">नेपालका ७५३ वटै स्थानीय तह पञ्चाङ्ग</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  ७७ वटै जिल्लाका ७५३ वटै पालिकाको यथार्थ स्थानीय सूर्योदय, सूर्यास्त र काल साधन। ९५ वर्षका पुराना स्क्यान पात्रोहरू पढ्ने सुविधा।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Install APK Guide */}
        <div className="bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-500" />
            एप कसरी इन्स्टल गर्ने? (How to Install)
          </h2>
          <ol className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">१</span>
              <span>माथिको <strong>"डाउनलोड गर्नुहोस् (Download APK)"</strong> बटन थिच्नुहोस्। फाइल स्वतः डाउनलोड हुन थाल्नेछ।</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">२</span>
              <span>डाउनलोड सकिएपछि मोबाइलको <strong>Notifications</strong> वा <strong>My Files &gt; Downloads</strong> फोल्डरमा गएर <code>BR_Patro_v7.9.69.apk</code> खोल्नुहोस्।</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">३</span>
              <span>यदि फोनले <em>"Install from unknown sources"</em> मागेमा <strong>Allow / Settings</strong> मा गएर Enable गर्नुहोस् र <strong>Install</strong> थिच्नुहोस्।</span>
            </li>
          </ol>
        </div>

        {/* Bottom CTA Card */}
        <div className="text-center py-6">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
            यो एप १००% सुरक्षित, कुनै ट्र्याकिङ वा अनावश्यक अनुमति नमाग्ने गरी निर्माण गरिएको छ।
          </p>
          <a
            href={downloadUrl}
            className="inline-flex items-center gap-2 text-sm font-bold text-red-600 dark:text-red-400 hover:underline"
          >
            <Download className="w-4 h-4" />
            BR_Patro_v7.9.69.apk सिधै डाउनलोड गर्नुहोस् ({downloadUrl.split('/').pop()})
          </a>
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}
