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
      
      {/* SECTION 01 — HERO (PRESERVED 100% AS APPROVED) */}
      <SunsetArchitecturalHero onOpenBooking={handleOpenBooking} />

      {/* SECTION 02 — PROJECT VISION / ABOUT (3-COLUMN BALANCED LAYOUT) */}
      <AboutUsVision />

      {/* SECTION 03 — THE 10-ACRE COMMUNITY & MASTERPLAN */}
      <InteractiveMasterplan onOpenBooking={handleOpenBooking} />

      {/* SECTION 04 — FROM LAND TO HOME (STEP-BY-STEP CONSTRUCTION STORYTELLING) */}
      <LandToLivingJourney onOpenBooking={handleOpenBooking} />

      {/* SECTION 05 — HOMES COLLECTION (FUTURE VILLA PLANS & PAST DELIVERED WORK) */}
      <ExploreFeaturedVillas onOpenBooking={handleOpenBooking} />
      <PastDeliveredProjectsSection onOpenBooking={handleOpenBooking} />

      {/* SECTION 06 — LIFESTYLE / COMMUNITY EXPERIENCE & APPROVED BANKING PARTNERS */}
      <AmenityStory onOpenBooking={handleOpenBooking} />
      <PopularBrandsSection />
      <TestimonialSection />

      {/* SECTION 07 — ABOUT US / CONTACT / BOOK A VISIT & FOOTER */}
      <ThreeStepsSection onOpenBooking={handleOpenBooking} />
      <LocationConnectivitySection onOpenBooking={handleOpenBooking} />
      <ContactSection onOpenBooking={handleOpenBooking} />
      <BottomCTABanner onOpenBooking={handleOpenBooking} />
      <Footer onOpenBooking={handleOpenBooking} />

      <BookingModal isOpen={bookingOpen} onClose={handleCloseBooking} />
    </main>
  );
}
