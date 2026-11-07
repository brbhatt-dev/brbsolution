import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "घरजग्गा बैनापट्टा (Earnest Money Agreement) A4 PDF जेनेरेटर | Land Bayana Deed Maker Nepal | BR Bhatta",
  description: "मुलुकी देवानी संहिता २०७४ अनुसार घरजग्गा खरिदबिक्रीको आधिकारिक बैनापट्टा (Earnest Money Agreement) तयार गर्ने, दोब्बर हर्जाना सर्त राख्ने, र A4 साइजमा तुरुन्त प्रिन्ट वा PDF सेभ गर्ने निःशुल्क अनलाइन टुल।",
  keywords: [
    "jagga baina kagaj namuna pdf",
    "land purchase earnest money agreement nepal",
    "bayana patta generator online nepal",
    "baina kagaj format nepali",
    "muluki dewani samhita 2074 bayana rules",
    "जग्गा बैना कागज नमुना pdf",
    "घरजग्गा बैनापट्टा ढाँचा",
    "बैना कागज बनाउने अनलाइन टुल",
    "BR Bhatta Bayana Deed Generator"
  ],
  alternates: {
    canonical: "https://www.brbhatta.com/tools/bayana-agreement-generator",
  },
  openGraph: {
    title: "घरजग्गा बैनापट्टा (A4 PDF) जेनेरेटर तथा कानुनी ढाँचा | Land Bayana Deed Maker Nepal",
    description: "घरजग्गा खरिदबिक्रीको आधिकारिक बैनापट्टा तयार गर्ने र A4 साइजमा १-क्लिकमा प्रिन्ट/PDF सेभ गर्ने नेपालको पहिलो डिजिटल टुल।",
    url: "https://www.brbhatta.com/tools/bayana-agreement-generator",
    siteName: 'BR Bhatta | Land & Citizen Services',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "घरजग्गा बैनापट्टा (Earnest Money Agreement) A4 PDF जेनेरेटर",
    description: "मुलुकी देवानी संहिता २०७४ अनुसार आधिकारिक बैनापट्टा बनाउनुहोस् र A4 मा प्रिन्ट गर्नुहोस्।",
  },
};

export default function BayanaGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
