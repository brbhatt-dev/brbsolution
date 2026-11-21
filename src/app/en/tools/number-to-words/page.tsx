import React from 'react';
import type { Metadata } from 'next';
import NumberToWordsClient from '@/components/NumberToWordsClient';
import { getBilingualAlternates } from '@/lib/i18nRoutes';

export const metadata: Metadata = {
  title: '10 Million in Nepali Rupees in Words (= 1 Crore / 100 Lakh) | Cheque & Number Converter',
  description:
    '10 Million in Nepali Rupees = 1 Crore (एक करोड रूपैयाँ) & 1 Million = 10 Lakh (दश लाख). Convert any Million, Lakh, Crore or NPR amount into English & Nepali Devanagari words for bank cheques & Malpot deeds.',
  keywords: [
    '10 million in nepali rupees in words',
    '1 million in nepali rupees in words',
    '10million in nepali',
    'nepali rupees number to words converter',
    'lakh crore to million converter nepal',
    'nepal bank cheque words helper',
    '100 million in nepali rupees',
  ],
  alternates: getBilingualAlternates('/tools/number-to-words', '/en/tools/number-to-words', 'en'),
  openGraph: {
    title: '10 Million in Nepali Rupees in Words (= 1 Crore) | Number to Words Converter',
    description:
      'Instant Million/Billion to Lakh/Crore and Nepali Rupees in Words converter for Nepal bank cheques and land deeds.',
    url: 'https://www.brbhatta.com/en/tools/number-to-words',
    siteName: 'BR Bhatta',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '10 Million in Nepali Rupees in Words (= 1 Crore) | Number to Words Converter' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Million in Nepali Rupees in Words (= 1 Crore) | Number to Words Converter',
    description: 'Instant Million/Billion to Lakh/Crore and Nepali Rupees in Words converter for Nepal bank cheques and land deeds.',
    images: ['/og-image.png'],
  },
};

export default function EnglishNumberToWordsPage() {
  return <NumberToWordsClient lang="en" />;
}
