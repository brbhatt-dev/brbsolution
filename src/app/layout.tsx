import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import AiLandAssistant from '@/components/AiLandAssistant';
import MobileBottomNav from '@/components/MobileBottomNav';

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
    'Ropani to Aana Calculator',
    'Ropani Aana Paisa Daam Calculator',
    'Bigha to Kattha Converter',
    'Bigha Katha Dhur Calculator',
    'Kitta Kat Niyam 2081 2082',
    'कित्ताकाट नियम',
    'Malpot Tax Calculator Nepal',
    'Capital Gains Tax Nepal Real Estate',
    'जग्गा लाभकर',
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
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BR Bhatta | Land Solution Nepal - नापी, कित्ताकाट तथा क्याड टूल्स',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BR Bhatta | Land Solution & Tech Innovations Nepal',
    description: 'Explore Land Solution, Hamro Kosh, and AutoCAD LSP tools built for Nepal.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/favicon.png?v=2', type: 'image/png', sizes: '32x32' },
      { url: '/icon.png?v=2', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: [
      { url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
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
    alternateName: 'Bhatt BR',
    url: 'https://www.brbhatta.com',
    email: 'mailto:info@brbhatta.com',
    jobTitle: 'Software Developer & Land Tech Specialist',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kathmandu',
      addressCountry: 'NP',
    },
    sameAs: [
      'https://bhattbr.com.np',
      'https://github.com/brbhatt-dev',
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

  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BR Bhatta',
    alternateName: ['Bhatt BR', 'Land Solution Nepal', 'brbhatta.com', 'Land Solution', 'bhattbr.com.np'],
    url: 'https://www.brbhatta.com',
    logo: 'https://www.brbhatta.com/logo.png',
    email: 'info@brbhatta.com',
    sameAs: [
      'https://bhattbr.com.np',
      'https://github.com/brbhatt-dev',
      'https://www.facebook.com/aabiral.bhatt/',
      'https://www.instagram.com/landsolutionnepal?stkn=dXBlanppYjFoMXY4',
      'https://www.tiktok.com/@br_bhatta?_r=1&_t=ZS-9A2ydU7e8Rd',
      'https://x.com/LandSolutionNpl',
      'https://www.threads.com/@landsolutionnepal',
      'https://github.com/brbhatt-dev',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'technical support',
      email: 'info@brbhatta.com',
      availableLanguage: ['English', 'Nepali'],
    },
  };

  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    alternateName: ['bhattbr.com.np', 'Bhatt BR', 'brbhatta.com', 'brbhatta', 'Land Solution Nepal', 'BR Bhatta Nepal', 'Land Solution'],
    name: 'BR Bhatta',
    url: 'https://www.brbhatta.com',
    inLanguage: ['en', 'ne'],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon.png?v=2" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon.png?v=2" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" sizes="180x180" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-precomposed.png?v=3" sizes="180x180" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Land Solution" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="application/rss+xml" title="BR Bhatta &amp; Land Solution Nepal RSS Feed" href="https://www.brbhatta.com/feed.xml" />
        <link rel="alternate" type="application/rss+xml" title="BR Bhatta &amp; Land Solution Nepal (rss.xml)" href="https://www.brbhatta.com/rss.xml" />

        {/* Google Fonts: Mukta (PMO opmcm.gov.np GIWMS Standard) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&family=Mukta:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var h=window.location.hostname;if(h==='bhattbr.com.np'||h==='www.bhattbr.com.np'){window.location.replace('https://www.brbhatta.com'+window.location.pathname+window.location.search+window.location.hash);}}catch(e){}})();`,
          }}
        />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />

        {/* Google AdSense Official Verification & Auto Ads Script */}
        <meta name="google-adsense-account" content="ca-pub-9731623018158379" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9731623018158379"
          crossOrigin="anonymous"
        />

        {/* Google tag (gtag.js) - Google Analytics 4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-ZEHZLLS88P'}`}
        />
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-ZEHZLLS88P'}');
            `,
          }}
        />

        {/* Google Search Console Verification Meta */}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
          />
        )}
        {/* Gridinsoft Domain Verification Meta Tag */}
        <meta
          name="gridinsoft-key"
          content="yb4ea5rs16uumfo2kn2ze73ak3dzqkdrtp4us3vfrdzfqqr6dydft3eyordy55tw"
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 subpixel-antialiased selection:bg-emerald-600 selection:text-white transition-colors duration-200">
        <ThemeProvider>
          {children}
          <AiLandAssistant />
          <MobileBottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
