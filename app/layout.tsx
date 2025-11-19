import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'H9Y Studio — Hospitality, Interiors & Turnkey Delivery',
  description: 'Boutique hospitality and interior design studio. Minimal by design, crafted end-to-end. Bespoke solutions from concept to turnkey delivery.',
  keywords: ['hospitality design', 'interior design', 'turnkey solutions', 'boutique hotel design', 'restaurant design', 'FF&E'],
  authors: [{ name: 'H9Y Studio' }],
  openGraph: {
    title: 'H9Y Studio — Hospitality, Interiors & Turnkey Delivery',
    description: 'Boutique hospitality and interior design studio. Minimal by design, crafted end-to-end.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
