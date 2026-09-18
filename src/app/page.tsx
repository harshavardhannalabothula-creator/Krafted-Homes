'use client';

import { useState } from 'react';
import SunsetArchitecturalHero from '@/components/SunsetArchitecturalHero';
import AboutUsVision from '@/components/AboutUsVision';
import ExploreFeaturedVillas from '@/components/ExploreFeaturedVillas';
import PopularBrandsSection from '@/components/PopularBrandsSection';
import SpecialOfferBanner from '@/components/SpecialOfferBanner';
import TestimonialSection from '@/components/TestimonialSection';
import OurServicesSection from '@/components/OurServicesSection';
import ThreeStepsSection from '@/components/ThreeStepsSection';
import LocationConnectivitySection from '@/components/LocationConnectivitySection';
import LuxurySliderSection from '@/components/LuxurySliderSection';
import TrustedStatsSection from '@/components/TrustedStatsSection';
import LatestArticlesSection from '@/components/LatestArticlesSection';
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
    <main className="min-h-screen bg-white text-slate-900 selection:bg-orange-500 selection:text-white relative font-sans">
      
      {/* 1. HERO SECTION */}
      <SunsetArchitecturalHero onOpenBooking={handleOpenBooking} />

      {/* 2. VISION / ABOUT SECTION (3-COLUMN BALANCED LAYOUT) */}
      <AboutUsVision />

      {/* 3. FEATURED VILLAS */}
      <ExploreFeaturedVillas onOpenBooking={handleOpenBooking} />

      {/* 5. POPULAR BRANDS / PARTNERS */}
      <PopularBrandsSection />

      {/* 6. SPECIAL OFFER BANNER */}
      <SpecialOfferBanner onOpenBooking={handleOpenBooking} />

      {/* 6. WHAT OUR CUSTOMERS SAY */}
      <TestimonialSection />

      {/* 7. OUR SERVICES / AMENITIES */}
      <OurServicesSection />

      {/* 8. 3 EASY STEPS */}
      <ThreeStepsSection onOpenBooking={handleOpenBooking} />

      {/* 9. LIVE MAP & LOCATION CONNECTIVITY */}
      <LocationConnectivitySection onOpenBooking={handleOpenBooking} />

      {/* 10. LUXURY VILLAS SLIDER */}
      <LuxurySliderSection />

      {/* 11. TRUSTED STATS */}
      <TrustedStatsSection />

      {/* 12. LATEST ARTICLES */}
      <LatestArticlesSection />

      {/* 13. CONTACT US SECTION */}
      <ContactSection onOpenBooking={handleOpenBooking} />

      {/* 14. BOTTOM CTA BANNER */}
      <BottomCTABanner onOpenBooking={handleOpenBooking} />

      {/* 15. FOOTER */}
      <Footer onOpenBooking={handleOpenBooking} />

      <BookingModal isOpen={bookingOpen} onClose={handleCloseBooking} />
    </main>
  );
}
