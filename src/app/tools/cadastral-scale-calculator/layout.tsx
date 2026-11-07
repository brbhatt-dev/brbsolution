import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "नापी नक्सा सिट नम्बर तथा स्केल क्याल्कुलेटर | Cadastral Map Scale & Distance Calculator Nepal | BR Bhatta",
  description: "नापीको कित्ता नक्सामा १:५००, १:१२५०, १:२५०० र १:४८०० स्केल अनुसार रुलरले नापेको दूरी (cm/mm) बाट जमिनको वास्तविक लम्बाइ (मिटर/फिट) र क्षेत्रफल (रोपनी/बिघा) निकाल्ने अनलाइन टुल।",
  keywords: [
    "cadastral map scale calculator nepal",
    "napi naksa scale 1 500 conversion",
    "1 1250 map scale distance to meter",
    "cadastral sheet number nepal",
    "trace map scale ruler to feet",
    "नापी नक्सा स्केल क्याल्कुलेटर",
    "नक्साबाट जग्गा नाप्ने तरिका",
    "नापी सिट नम्बर",
    "BR Bhatta Cadastral Scale Finder"
  ],
  alternates: {
    canonical: "https://www.brbhatta.com/tools/cadastral-scale-calculator",
  },
  openGraph: {
    title: "नापी नक्सा सिट नम्बर तथा स्केल क्याल्कुलेटर | Cadastral Map Scale Nepal",
    description: "नापी नक्साको १:५००, १:१२५०, १:२५०० स्केलबाट वास्तविक जमिनको लम्बाइ र क्षेत्रफल निकाल्ने इन्जिनियरिङ टुल।",
    url: "https://www.brbhatta.com/tools/cadastral-scale-calculator",
    siteName: 'BR Bhatta | Land & Citizen Services',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "नापी नक्सा सिट नम्बर तथा स्केल क्याल्कुलेटर",
    description: "नक्सामा रुलरले नापेर जमिनको वास्तविक लम्बाइ र रोपनी/बिघा क्षेत्रफल निकाल्नुहोस्।",
  },
};

export default function CadastralScaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
