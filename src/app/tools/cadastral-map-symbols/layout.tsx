import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "नापी कित्ता नक्सा संकेत (Cadastral Legend) तथा १:५०० स्केल क्यालकुलेटर | DOS Nepal | BR Bhatta",
  description: "नापी विभाग (dos.gov.np) को आधिकारिक कित्ता नक्सा (ट्रेस) का संकेतहरू, सिमाना पिल्लर, कालोपत्रे बाटो, गोरेटो, राजकुलो, हाइ-टेन्सन रेखा, १:५०० देखि १:५००० स्केल क्याल्कुलेटर र बेन्चमार्क गाइड।",
  keywords: [
    "napi naksa symbol nepal",
    "cadastral map symbols nepal",
    "trace map symbols nepal",
    "kitta naksa sanket",
    "napi sheet number nepal",
    "napi naksa scale calculator",
    "nepal cadastral legend",
    "trig points nepal survey",
    "merokitta naksa symbols",
    "नापी नक्सा संकेत चिन्ह",
    "कित्ता नक्सा लेजेन्ड",
    "नापी स्केल क्यालकुलेटर"
  ],
  alternates: {
    canonical: "https://www.brbhatta.com/tools/cadastral-map-symbols",
  },
  openGraph: {
    title: "नापी कित्ता नक्सा संकेत (Cadastral Legend) तथा १:५०० स्केल क्यालकुलेटर | DOS Nepal",
    description: "नापी विभागको आधिकारिक कित्ता नक्सा संकेतहरू, सिमाना पिल्लर, बाटो, कुलो, घर, हाइ-टेन्सन रेखा, र १:५०० देखि १:५००० नक्सा स्केल क्याल्कुलेटर।",
    url: "https://www.brbhatta.com/tools/cadastral-map-symbols",
    siteName: 'BR Bhatta | Land & Cadastral Hub',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "नापी कित्ता नक्सा संकेत (Cadastral Legend) तथा स्केल क्यालकुलेटर",
    description: "नापी विभागको आधिकारिक नक्सा संकेतहरू र १:५०० देखि १:५००० स्केलमा जग्गाको नाप निकाल्ने इन्जिनियरिङ टुल।",
  },
};

export default function CadastralSymbolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
