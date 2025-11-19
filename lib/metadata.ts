import { Metadata } from 'next';

const baseUrl = 'https://h9ystudio.com';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'H9Y Studio — Hospitality, Interiors & Turnkey Delivery',
  description: 'Boutique hospitality and interior design studio. Minimal by design, crafted end-to-end. Bespoke solutions from concept to turnkey delivery.',
  keywords: ['hospitality design', 'interior design', 'turnkey solutions', 'boutique hotel design', 'restaurant design', 'FF&E'],
  authors: [{ name: 'H9Y Studio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'H9Y Studio',
    title: 'H9Y Studio — Hospitality, Interiors & Turnkey Delivery',
    description: 'Boutique hospitality and interior design studio. Minimal by design, crafted end-to-end.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'H9Y Studio — Hospitality, Interiors & Turnkey Delivery',
    description: 'Boutique hospitality and interior design studio. Minimal by design, crafted end-to-end.',
  },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ''
): Metadata {
  return {
    title: `${title} — H9Y Studio`,
    description,
    openGraph: {
      title: `${title} — H9Y Studio`,
      description,
      url: `${baseUrl}${path}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — H9Y Studio`,
      description,
    },
  };
}
