import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "नेपाली लिखत तथा तमसुक ढाँचाहरू (Legal Deed Templates) | बैनाबट्टा, घरबहाल, निवेदन | BR Bhatta",
  description: "घरजग्गा बैनाबट्टा कागज, घरबहाल सम्झौता, कित्ताकाट तथा सिमाना छुट्याउने नापी निवेदनका प्रमाणित ढाँचाहरू नेपालीमा निःशुल्क डाउनलोड (Word .docx / Print) गर्नुहोस्।",
  keywords: ["नेपाली लिखत ढाँचा","जग्गा बैना कागज नमुना pdf","घरबहाल सम्झौता फारम word","सिमाना छुट्याउने निवेदन ढाँचा","कित्ताकाट सिफारिस निवेदन","राजिनामा लिखत नमुना नेपाल","Legal deed format Nepal docx","BR Bhatta"],
  alternates: {
    canonical: "https://www.brbhatta.com/tools/legal-templates",
  },
  openGraph: {
    title: "नेपाली लिखत तथा तमसुक ढाँचाहरू (Legal Deed Templates) | बैनाबट्टा, घरबहाल, निवेदन | BR Bhatta",
    description: "घरजग्गा बैनाबट्टा कागज, घरबहाल सम्झौता, कित्ताकाट तथा सिमाना छुट्याउने नापी निवेदनका प्रमाणित ढाँचाहरू नेपालीमा निःशुल्क डाउनलोड (Word .docx / Print) गर्नुहोस्।",
    url: "https://www.brbhatta.com/tools/legal-templates",
    siteName: 'BR Bhatta | Land Solution',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "नेपाली लिखत तथा तमसुक ढाँचाहरू (Legal Deed Templates) | बैनाबट्टा, घरबहाल, निवेदन | BR Bhatta",
    description: "घरजग्गा बैनाबट्टा कागज, घरबहाल सम्झौता, कित्ताकाट तथा सिमाना छुट्याउने नापी निवेदनका प्रमाणित ढाँचाहरू नेपालीमा निःशुल्क डाउनलोड (Word .docx / Print) गर्नुहोस्।",
  },
};

export default function legaltemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
