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
  },
};

export default function EnglishNumberToWordsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is 10 million in Nepali Rupees in words?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '10 Million in Nepali Rupees is equal to 1 Crore (Rs. 1,00,00,000) or 100 Lakhs. In Nepali words (for cheques and deeds), it is written as "एक करोड रूपैयाँ मात्र" (One Crore Rupees Only).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is 1 million in Nepali Rupees in words?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '1 Million in Nepali Rupees is equal to 10 Lakhs (Rs. 10,00,000). In Nepali words, it is written as "दश लाख रूपैयाँ मात्र" (Ten Lakh Rupees Only).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is 100 million and 1 billion in Nepali Rupees?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '100 Million equals 10 Crore (दश करोड रूपैयाँ / Rs. 10,00,00,000), and 1 Billion equals 1 Arab or 100 Crore (एक अर्ब रूपैयाँ / Rs. 1,00,00,00,000) in the Nepali numbering system.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NumberToWordsClient lang="en" />
    </>
  );
}
