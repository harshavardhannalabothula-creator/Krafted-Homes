import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Antelia Groves | Premium 10-Acre Luxury Villa Community by Krafted Homes',
  description:
    'Discover Antelia Groves: A 10-acre secure gated community with 189 independent split-level luxury villas, 15,000+ sq.ft clubhouse, green mindfulness courts, and private gardens.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className={`${plusJakartaSans.className} bg-white text-slate-900 min-h-screen antialiased selection:bg-[#F97316] selection:text-white`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

