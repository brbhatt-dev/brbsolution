import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import AiLandAssistant from '@/components/AiLandAssistant';
import CookieConsent from '@/components/CookieConsent';

export const metadata: Metadata = {
  title: 'BR Bhatta | Land Solution, Hamro Kosh & Tech Innovations Nepal',
  description: 'Official portal of BR Bhatta. Creator of Land Solution (नेपाल जग्गा नापजाँच तथा कित्ताकाट एप), Hamro Kosh (बचत कोष एप), and free AutoCAD LSP automation scripts for engineers and surveyors in Nepal.',
  keywords: [
    'BR Bhatta',
    'brbhatta.com',
    'Land Solution Nepal',
    'ल्याण्ड सोलुसन',
    'Hamro Kosh',
    'हाम्रो कोष',
    'AutoCAD LSP Nepal',
    'Ropani Aana Paisa Daam Calculator',
    'Bigha Katha Dhur Calculator',
    'Nepal Land Measurement App',
    'AutoCAD Area Lisp',
    'Land Survey Nepal',
    'Kathmandu Nepal'
  ],
  authors: [{ name: 'BR Bhatta', url: 'https://www.brbhatta.com' }],
  metadataBase: new URL('https://www.brbhatta.com'),
  alternates: {
    canonical: 'https://www.brbhatta.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'BR Bhatta | Land Solution & Tech Innovations Nepal',
    description: 'Land Solution (नापजाँच तथा कित्ताकाट एप), Hamro Kosh, and AutoCAD LSP scripts for Nepal land surveying.',
    url: 'https://www.brbhatta.com',
    siteName: 'BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BR Bhatta | Land Solution & Tech Innovations Nepal',
    description: 'Explore Land Solution, Hamro Kosh, and AutoCAD LSP tools built for Nepal.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'BR Bhatta',
    url: 'https://www.brbhatta.com',
    email: 'mailto:aabiralbhatt@gmail.com',
    jobTitle: 'Software Developer & Land Tech Specialist',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kathmandu',
      addressCountry: 'NP',
    },
    sameAs: [
      'https://www.facebook.com/aabiral.bhatt/',
      'https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4',
      'https://www.tiktok.com/@br_bhatta?_r=1&_t=ZS-9A2ydU7e8Rd',
      'https://x.com/LandSolutionNpl',
      'https://www.threads.com/@landsolutionnepal',
      'https://github.com/brbhatt-dev',
    ],
  };

  const jsonLdSoftware = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Land Solution (ल्याण्ड सोलुसन)',
    operatingSystem: 'Android, Web',
    applicationCategory: 'UtilitiesApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'NPR',
    },
    description: 'A complete land measurement, unit conversion (Ropani-Aana & Bigha-Katha), and plot partitioning system for Nepal.',
    author: {
      '@type': 'Person',
      name: 'BR Bhatta',
    },
  };

  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BR Bhatta',
    url: 'https://www.brbhatta.com',
  };

  return (
    <html lang="ne" className="notranslate" translate="no" suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(!s&&d)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        {/* Google AdSense Script */}
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />
        )}

        {/* Google Analytics 4 (GA4) */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}

        {/* Google Search Console Verification Meta */}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
          />
        )}
      </head>
      <body className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased selection:bg-emerald-600 selection:text-white transition-colors duration-200">
        <ThemeProvider>
          {children}
          <AiLandAssistant />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
