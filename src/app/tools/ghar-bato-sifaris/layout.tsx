import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "घरबाटो सिफारिस तथा चारकिल्ला प्रमाणित निवेदन जेनेरेटर | Ghar Bato Sifaris Nepal | BR Bhatta",
  description: "वडा कार्यालयबाट घरबाटो सिफारिस र चारकिल्ला प्रमाणित लिन आधिकारिक नेपाली निवेदन ढाँचा तयार गर्नुहोस्, दस्तुर दररेट, सडक चौडाइ मापदण्ड र ५ अनिवार्य कागजात चेकलिस्ट।",
  keywords: [
    "ghar bato sifaris nepal",
    "charkilla pramanit nibedan format",
    "bato sifaris application nepali ward office",
    "ghar bato dastur nagarpalika",
    "road width setback criteria nepal",
    "घरबाटो सिफारिस निवेदन ढाँचा",
    "चारकिल्ला प्रमाणित निवेदन",
    "वडा कार्यालय घरबाटो सिफारिस",
    "BR Bhatta Ghar Bato Sifaris Hub"
  ],
  alternates: {
    canonical: "https://www.brbhatta.com/tools/ghar-bato-sifaris",
  },
  openGraph: {
    title: "घरबाटो सिफारिस तथा चारकिल्ला प्रमाणित निवेदन जेनेरेटर | Ghar Bato Sifaris Nepal",
    description: "वडा कार्यालयबाट घरबाटो सिफारिस र चारकिल्ला प्रमाणित लिन आधिकारिक नेपाली निवेदन ढाँचा, दस्तुर दररेट र आवश्यक कागजात चेकलिस्ट।",
    url: "https://www.brbhatta.com/tools/ghar-bato-sifaris",
    siteName: 'BR Bhatta | Land & Citizen Services',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "घरबाटो सिफारिस तथा चारकिल्ला प्रमाणित निवेदन जेनेरेटर",
    description: "वडा कार्यालयमा पेस गर्ने आधिकारिक निवेदन ढाँचा, सडक मापदण्ड र दस्तुर दररेट।",
  },
};

export default function GharBatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
