import LandSolutionPage, { metadata as landSolutionMetadata } from '../land-solution/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...landSolutionMetadata,
  alternates: {
    canonical: 'https://www.brbhatta.com/land-solution',
  },
};

export default LandSolutionPage;
