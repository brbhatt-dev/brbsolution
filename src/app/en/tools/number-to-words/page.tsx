import React from 'react';
import type { Metadata } from 'next';
import NumberToWordsClient from '@/components/NumberToWordsClient';
import { getBilingualAlternates } from '@/lib/i18nRoutes';

export const metadata: Metadata = {
  title: '10 Million in Nepali Rupees in Words | Lakh & Crore Converter for Nepal Cheques | BR Bhatta',
  description:
    'Instantly convert 1 Million (10 Lakh), 10 Million (1 Crore), and any NPR amount into Nepali Rupees English words and Devanagari words (अक्षरेपी) with live Nepal bank cheque preview.',
  keywords: [
    '10 million in nepali rupees in words',
    '1 million in nepali rupees',
    'nepali rupees number to words converter',
    'lakh crore to million converter nepal',
    'nepal bank cheque words helper',
    '100 million in nepali rupees',
  ],
  alternates: getBilingualAlternates('/tools/number-to-words', '/en/tools/number-to-words', 'en'),
  openGraph: {
    title: 'Nepali Rupees Number to Words Converter (10 Million = 1 Crore) | BR Bhatta',
    description:
      'Convert Million/Billion or Lakh/Crore numbers into exact English and Devanagari words for Nepal bank cheques and land deeds.',
    url: 'https://www.brbhatta.com/en/tools/number-to-words',
    siteName: 'BR Bhatta',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EnglishNumberToWordsPage() {
  return <NumberToWordsClient lang="en" />;
}
