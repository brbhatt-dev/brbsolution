import type { Metadata } from 'next';
import './globals.css';

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
      'https://x.com/LandSolutionNpl',
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
    <html lang="ne" className="notranslate" translate="no">
      <head>
        <meta name="google" content="notranslate" />
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
      </head>
      <body className="min-h-screen bg-white text-slate-800 antialiased selection:bg-emerald-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
