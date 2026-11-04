import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "नेपाली लिखत तथा निवेदन ढाँचाहरू (Legal Templates) | बैनाबट्टा, घरबाटो, नामसारी, रोक्का, बहाल | BR Bhatta",
  description: "जग्गा बैनापट्टा कागज, घरबाटो सिफारिस, नामसारी निवेदन, रोक्का-फुकुवा तथा बहाल सम्झौताका आधिकारिक ढाँचाहरू A4 मा प्रिन्ट तथा PDF डाउनलोड (Word .docx) गर्नुहोस्।",
  keywords: ["जग्गा बैना कागज नमुना pdf","घरबाटो सिफारिस निवेदन ढाँचा","जग्गा नामसारी निवेदन फारम","रोक्का फुकुवा निवेदन","घरबहाल सम्झौता फारम word","सिमाना छुट्याउने निवेदन ढाँचा","नेपाली लिखत ढाँचा","Legal deed format Nepal docx","BR Bhatta"],
  alternates: {
    canonical: "https://www.brbhatta.com/tools/legal-templates",
  },
  openGraph: {
    title: "नेपाली लिखत तथा निवेदन ढाँचाहरू (Legal Templates) | बैनाबट्टा, घरबाटो, नामसारी, रोक्का, बहाल | BR Bhatta",
    description: "जग्गा बैनापट्टा कागज, घरबाटो सिफारिस, नामसारी निवेदन, रोक्का-फुकुवा तथा बहाल सम्झौताका आधिकारिक ढाँचाहरू A4 मा प्रिन्ट तथा PDF डाउनलोड (Word .docx) गर्नुहोस्।",
    url: "https://www.brbhatta.com/tools/legal-templates",
    siteName: 'BR Bhatta | Land Solution',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "नेपाली लिखत तथा निवेदन ढाँचाहरू (Legal Templates) | बैनाबट्टा, घरबाटो, नामसारी, रोक्का, बहाल | BR Bhatta",
    description: "जग्गा बैनापट्टा कागज, घरबाटो सिफारिस, नामसारी निवेदन, रोक्का-फुकुवा तथा बहाल सम्झौताका आधिकारिक ढाँचाहरू A4 मा प्रिन्ट तथा PDF डाउनलोड (Word .docx) गर्नुहोस्।",
  },
};

export default function legaltemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
