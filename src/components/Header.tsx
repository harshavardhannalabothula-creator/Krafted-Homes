'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'OVERVIEW', href: '#overview' },
    { label: 'MASTERPLAN', href: '#masterplan' },
    { label: 'VILLA DESIGN', href: '#villas' },
    { label: 'REAL LOCATION', href: '#location' },
    { label: 'ABOUT US', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F4F0E7]/95 backdrop-blur-md border-b border-[#D5D0C6] py-3 shadow-md'
          : 'bg-[#F4F0E7]/85 backdrop-blur-sm py-4 border-b border-[#D5D0C6]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xs bg-[#111722] flex items-center justify-center p-0.5 shadow-sm">
              <span className="text-[#B18A4A] font-serif font-bold text-lg">AG</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B18A4A] font-manrope font-semibold">
                KRAFTED HOMES
              </span>
              <span className="text-lg font-serif tracking-wider text-[#202631] group-hover:text-[#B18A4A] transition-colors font-bold leading-tight">
                ANTELIA GROVES
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = item.href.replace('#', '');
                  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[11px] font-manrope font-semibold uppercase tracking-widest text-[#202631] hover:text-[#B18A4A] transition-colors relative py-1 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="text-xs font-manrope font-semibold text-[#202631] hover:text-[#B18A4A] flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B18A4A]" />
              <span>Inquiries</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xs text-xs font-bold font-manrope uppercase tracking-wider text-white bg-[#111722] hover:bg-[#B18A4A] hover:text-[#111722] transition-all shadow-sm"
            >
              Schedule Tour
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#202631] hover:text-[#B18A4A] p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#F4F0E7] border-b border-[#D5D0C6] px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-mono tracking-wider text-[#202631] hover:text-[#B18A4A] py-2 border-b border-[#D5D0C6]/50"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-xs text-xs font-bold font-mono uppercase tracking-widest text-white bg-[#111722] text-center"
                >
                  Schedule Private Visit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
