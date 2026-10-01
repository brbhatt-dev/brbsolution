export interface TickerItem {
  id: string;
  category: 'tool' | 'software' | 'notice' | 'law' | 'blog';
  badgeLabel: string;
  badgeColor: string; // Tailwind class
  title: string;
  href: string;
  isExternal?: boolean;
  date?: string;
  highlight?: boolean;
}

export const defaultTickerItems: TickerItem[] = [
  {
    id: 'tool-land-calc',
    category: 'tool',
    badgeLabel: 'नयाँ टुल',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
    title: 'जग्गा क्षेत्रफल रूपान्तरक र कित्ताकाट विभाजन क्यालकुलेटर उपलब्ध (रोपनी-आना / बिघा-कठ्ठा)',
    href: '/tools/land-calculator',
    date: 'ताजा'
  },
  {
    id: 'dos-notice',
    category: 'notice',
    badgeLabel: 'नापी विभाग',
    badgeColor: 'bg-rose-500/20 text-rose-400 border-rose-500/40',
    title: 'नापी विभाग (dos.gov.np) ताजा सूचना तथा परिपत्रहरू लाइभ हेर्नुहोस्',
    href: '/notices',
    date: 'LIVE',
    highlight: true
  },
  {
    id: 'software-land-solution',
    category: 'software',
    badgeLabel: 'सफ्टवेयर',
    badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/40',
    title: 'Land Solution (v2.4) Android APK र AutoCAD LISP स्वचालन लिपि डाउनलोड गर्नुहोस्',
    href: '/software',
    date: 'नयाँ भर्सन'
  },
  {
    id: 'law-survey-act',
    category: 'law',
    badgeLabel: 'नापी कानुन',
    badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
    title: 'जग्गा नापजाँच ऐन, २०१९ तथा जग्गा वर्गीकरण मापदण्ड २०८० पूर्ण संग्रह',
    href: '/laws',
    date: 'अपडेटेड'
  }
];
