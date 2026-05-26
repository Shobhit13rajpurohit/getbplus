'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Bot, Car, Briefcase, QrCode } from 'lucide-react'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsFeaturesOpen(false)
      }
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsFeaturesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const featureLinks = [
    {
      name: 'UPI Payments',
      desc: 'Scan & pay anywhere in India',
      href: '/how-it-works',
      icon: QrCode,
    },
    {
      name: 'AI Travel Assistant',
      desc: 'Ask fares, stay safe',
      href: '/ai-assistant',
      icon: Bot,
    },
    {
      name: 'Airport Transport',
      desc: 'Fixed fares, vetted drivers',
      href: '/transport',
      icon: Car,
    },
    {
      name: 'Baggage Storage',
      desc: 'Store bags, explore free',
      href: '/baggage',
      icon: Briefcase,
    }
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-hub-bg/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gold flex items-center gap-2">
            GetB<span className="text-hub-text">+</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/how-it-works"
              className="text-gray-600 hover:text-hub-text transition-colors text-sm font-medium"
            >
              How It Works
            </Link>
            
            {/* Features Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                className="flex items-center text-gray-600 hover:text-hub-text transition-colors text-sm font-medium gap-1"
                aria-expanded={isFeaturesOpen}
              >
                Features <ChevronDown size={14} className={cn("transition-transform", isFeaturesOpen && "rotate-180")} />
              </button>
              
              {isFeaturesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white rounded-xl shadow-xl border border-navy/10 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Features</h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                      {featureLinks.map((feature) => (
                        <Link
                          key={feature.name}
                          href={feature.href}
                          onClick={() => setIsFeaturesOpen(false)}
                          className="flex items-start gap-4 group p-2 -m-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <feature.icon className="w-6 h-6 text-gold group-hover:text-navy transition-colors" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[15px] font-semibold text-navy group-hover:text-gold transition-colors">
                                {feature.name}
                              </span>
                            </div>
                            <p className="text-[13px] text-gray-500 mt-0.5">
                              {feature.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="text-gray-600 hover:text-hub-text transition-colors text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/for-travelers"
              className="text-gray-600 hover:text-hub-text transition-colors text-sm font-medium"
            >
              For Travelers
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-hub-text transition-colors text-sm font-medium"
            >
              About
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/early-access">
              <Button variant="default">Join Early Access</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-hub-text focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-hub-bg border-t border-gray-100 shadow-lg h-screen overflow-y-auto pb-24">
          <div className="px-4 pt-2 space-y-1">
            <Link
              href="/how-it-works"
              className="block px-3 py-4 text-base font-medium text-gray-600 hover:text-hub-text hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            
            {/* Mobile Features Expanded */}
            <div className="px-3 py-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Features</div>
              <div className="space-y-1">
                {featureLinks.map((feature) => (
                  <Link
                    key={feature.name}
                    href={feature.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-white/5"
                  >
                    <feature.icon className="w-5 h-5 text-gold" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-200">{feature.name}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/pricing"
              className="block px-3 py-4 text-base font-medium text-gray-600 hover:text-hub-text hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/for-travelers"
              className="block px-3 py-4 text-base font-medium text-gray-600 hover:text-hub-text hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              For Travelers
            </Link>
            <Link
              href="/about"
              className="block px-3 py-4 text-base font-medium text-gray-600 hover:text-hub-text hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            
            <div className="pt-4 mt-4 border-t border-gray-100">
              <div className="pt-4 px-3">
                <Link href="/early-access" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="default" className="w-full justify-center">Join Early Access</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
