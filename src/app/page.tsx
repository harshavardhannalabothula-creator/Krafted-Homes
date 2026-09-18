'use client';

import { useState } from 'react';
import SunsetArchitecturalHero from '@/components/SunsetArchitecturalHero';
import AboutUsVision from '@/components/AboutUsVision';
import InteractiveMasterplan from '@/components/InteractiveMasterplan';
import LandToLivingJourney from '@/components/LandToLivingJourney';
import ExploreFeaturedVillas from '@/components/ExploreFeaturedVillas';
import PastDeliveredProjectsSection from '@/components/PastDeliveredProjectsSection';
import AmenityStory from '@/components/AmenityStory';
import PopularBrandsSection from '@/components/PopularBrandsSection';
import TestimonialSection from '@/components/TestimonialSection';
import ThreeStepsSection from '@/components/ThreeStepsSection';
import LocationConnectivitySection from '@/components/LocationConnectivitySection';
import ContactSection from '@/components/ContactSection';
import BottomCTABanner from '@/components/BottomCTABanner';
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
    <main className="min-h-screen bg-white text-slate-900 selection:bg-orange-500 selection:text-white relative font-sans overflow-x-hidden">
      
      {/* 1. HERO (UNTOUCHED & PRESERVED) */}
      <SunsetArchitecturalHero onOpenBooking={handleOpenBooking} />

      {/* 2. VISION / ABOUT (3-COLUMN LAYOUT) */}
      <AboutUsVision />

      {/* 3. THE 10-ACRE COMMUNITY (MASTER PLAN) */}
      <InteractiveMasterplan onOpenBooking={handleOpenBooking} />

      {/* 4. FROM LAND TO HOME (CONSTRUCTION JOURNEY) */}
      <LandToLivingJourney onOpenBooking={handleOpenBooking} />

      {/* 5. HOMES COLLECTION (FEATURED VILLAS & PAST DELIVERED WORK) */}
      <ExploreFeaturedVillas onOpenBooking={handleOpenBooking} />
      <PastDeliveredProjectsSection onOpenBooking={handleOpenBooking} />

      {/* 6. LIFESTYLE & COMMUNITY (CLUBHOUSE, AMENITIES, BANKS & TESTIMONIALS) */}
      <AmenityStory onOpenBooking={handleOpenBooking} />
      <PopularBrandsSection />
      <TestimonialSection />

      {/* 7. ABOUT US + CONTACT + BOOK A VISIT & FOOTER */}
      <ThreeStepsSection onOpenBooking={handleOpenBooking} />
      <LocationConnectivitySection onOpenBooking={handleOpenBooking} />
      <ContactSection onOpenBooking={handleOpenBooking} />
      <BottomCTABanner onOpenBooking={handleOpenBooking} />
      <Footer onOpenBooking={handleOpenBooking} />

      <BookingModal isOpen={bookingOpen} onClose={handleCloseBooking} />
    </main>
  );
}
