import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Antelia Groves | Premium 10-Acre Luxury Villa Community by Krafted Homes',
  description:
    'Discover Antelia Groves: A 10-acre secure gated community with 189 independent split-level luxury villas, 15,000+ sq.ft clubhouse, green mindfulness courts, and private gardens.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#090A0E] text-white min-h-screen antialiased selection:bg-[#C5A059] selection:text-black">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
