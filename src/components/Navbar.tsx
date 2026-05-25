'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'For Travelers', href: '/for-travelers' },
    { name: 'For NRIs', href: '/for-nris' },
    { name: 'Partner', href: '/partner' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-200 h-[72px]',
          isScrolled
            ? 'bg-navy/90 backdrop-blur-[20px] border-b border-white/10 shadow-md'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold font-display tracking-tight text-white flex items-center">
            GetB<span className="text-gold">+</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-gold transition-colors duration-200 text-[15px] font-medium font-sans"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button>Download App</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gold transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy pt-[72px] h-screen w-full flex flex-col"
          >
            <div className="flex-1 flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block text-2xl font-medium text-white hover:text-gold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Mobile Bottom CTA */}
      <div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-40px)] max-w-sm">
        <Button className="w-full shadow-xl shadow-black/50 py-4 h-auto text-base">
          Download App
        </Button>
      </div>
    </>
  );
}