'use client';

import { useState } from 'react';
import SunsetArchitecturalHero from '@/components/SunsetArchitecturalHero';
import InteractiveMasterplan from '@/components/InteractiveMasterplan';
import VillaShowcase from '@/components/VillaShowcase';
import LocationMap from '@/components/LocationMap';
import AboutUsVision from '@/components/AboutUsVision';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white relative font-sans">
      
      {/* 01 — HERO & LIVE STATS OVERVIEW */}
      <section id="overview">
        <SunsetArchitecturalHero onOpenBooking={handleOpenBooking} />
      </section>

      {/* 02 — 10-ACRE MASTERPLAN & 3D CAD ENGINE */}
      <section id="masterplan">
        <InteractiveMasterplan onOpenBooking={handleOpenBooking} />
      </section>

      {/* 03 — VILLA ARCHITECTURE & 3D VILLA ENGINE */}
      <section id="villas">
        <VillaShowcase onOpenBooking={handleOpenBooking} />
      </section>

      {/* 04 — REAL LOCATION MAP & CONNECTIVITY */}
      <section id="location">
        <LocationMap onOpenBooking={handleOpenBooking} />
      </section>

      {/* 05 — BRAND PHILOSOPHY & ABOUT KRAFTED HOMES */}
      <section id="about">
        <AboutUsVision />
      </section>

      {/* 05 — CONTACT & FOOTER */}
      <section id="contact">
        <Footer onOpenBooking={handleOpenBooking} />
        <BookingModal isOpen={bookingOpen} onClose={handleCloseBooking} />
      </section>

    </main>
  );
}
