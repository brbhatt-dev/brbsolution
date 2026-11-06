import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "सर्वोच्च अदालतका ऐतिहासिक घरजग्गा तथा नापी नजीरहरू (नेकाप फैसला संग्रह) | Supreme Court Land Precedents Nepal | BR Bhatta",
  description: "नेपालको सर्वोच्च अदालतले बाटो थुनेको (सुखाधिकार), नापी नक्सा र फिल्ड क्षेत्रफल फरक, साँध-सीमाना, मोही हक, अंशबन्डा, र बैनापट्टा करार उल्लङ्घनमा प्रतिपादन गरेका ऐतिहासिक कानुनी नजीरहरू (नेकाप फैसला संग्रह)।",
  keywords: [
    "supreme court land precedents nepal",
    "nepal kanoon patrika nekap land judgments",
    "bato thuneko kanoon nepal easement right",
    "napi naksa ra field farak precedent nepal",
    "sandh simana bibad sarbochha adalat",
    "mohi hak hissa 50 50 partition precedent",
    "bayana patta bicarad specific performance nepal",
    "sarbochha adalat najir jagga bibad",
    "घरजग्गा नजीर सर्वोच्च अदालत",
    "बाटो थुनेको कानुन सुखाधिकार",
    "BR Bhatta Land Precedents Vault"
  ],
  alternates: {
    canonical: "https://www.brbhatta.com/tools/land-dispute-precedents",
  },
  openGraph: {
    title: "सर्वोच्च अदालतका ऐतिहासिक घरजग्गा तथा नापी नजीरहरू (नेकाप फैसला संग्रह) | BR Bhatta",
    description: "बाटो थुनेको (सुखाधिकार), नापी नक्सा र फिल्ड फरक, साँध-सीमाना, मोही हक, अंशबन्डा र बैना विवादमा सर्वोच्च अदालतका आधिकारिक नजीरहरूको पूर्ण निर्देशिका।",
    url: "https://www.brbhatta.com/tools/land-dispute-precedents",
    siteName: 'BR Bhatta | Land & Citizen Services',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "सर्वोच्च अदालतका ऐतिहासिक घरजग्गा तथा नापी नजीरहरू (नेकाप फैसला संग्रह)",
    description: "घरजग्गा तथा नापी सम्बन्धी सर्वोच्च अदालतका ऐतिहासिक नजीरहरू, आधिकारिक उद्धरण र कानुनी सिद्धान्त।",
  },
};

export default function LandPrecedentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
