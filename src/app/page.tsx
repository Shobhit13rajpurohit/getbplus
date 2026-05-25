'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CreditCard, QrCode, Scan, Globe, Lock, TrendingUp, Zap, Bell, Smartphone, XCircle, CheckCircle, Search
} from 'lucide-react';
import {
  HeroSection, TrustBar, StepCard, FeatureCard, StatBlock, TestimonialCard, CTABlock, SecurityBadge, Button
} from '@/components';

export default function Homepage() {

  const fadeUpVariant: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      {/* SECTION 1 — HERO */}
      <HeroSection />

      {/* SECTION 2 — TRUST BAR */}
      <TrustBar />

      {/* SECTION 3 — PROBLEM / SOLUTION */}
      <section className="bg-navy py-[120px]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2 className="font-display text-[44px] md:text-[52px] leading-tight text-white mb-4">
              India runs on QR. Your card doesn&apos;t. Yet.
            </h2>
            <p className="font-sans text-[18px] text-white/60 max-w-[560px] mx-auto leading-relaxed">
              International cards are structurally locked out of India&apos;s digital public infrastructure. We fixed that.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 relative">
            {/* Connector Arrow (Desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-gold animate-pulse">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>

            {/* Problem Card */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={fadeUpVariant}
              className="bg-red-500/5 border border-red-500/20 rounded-[20px] p-[28px] md:p-[40px]"
            >
              <div className="mb-6"><XCircle size={32} className="text-red-500" /></div>
              <h3 className="font-display text-[28px] text-white mb-8">The Gap Every Tourist Faces</h3>
              <ul className="space-y-5">
                {[
                  "QR codes everywhere — your card, nowhere",
                  "Cash exchange: 3–5% loss before you start",
                  "Auto drivers don't take international cards",
                  "ATM withdrawals drain your balance quietly"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-red-500 font-bold mt-1">×</span>
                    <span className="font-sans text-[16px] text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution Card */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={fadeUpVariant}
              className="bg-gold/5 border border-gold/30 rounded-[20px] p-[28px] md:p-[40px]"
            >
              <div className="mb-6"><CheckCircle size={32} className="text-gold" /></div>
              <h3 className="font-display text-[28px] text-white mb-8">GetB+ Closes That Gap</h3>
              <ul className="space-y-5">
                {[
                  "One app. Scan any of India's 350M+ QR codes",
                  "Real exchange rate — shown before every tap",
                  "Works everywhere, from street chai to fine dining",
                  "Setup in under 3 minutes, before your flight lands"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-gold font-bold mt-1">✓</span>
                    <span className="font-sans text-[16px] text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      <section className="bg-offWhite py-[120px]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2 className="font-display text-[44px] md:text-[52px] leading-tight text-navy">
              Three steps. Ninety seconds.<br className="hidden md:block"/> Then you can pay anywhere.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <StepCard
              number="01" icon={CreditCard}
              title="Link Your Card"
              body="Enter your Visa, Mastercard, or Amex details. They're instantly tokenized — your card number never touches our servers. PCI-DSS compliant at every step."
              badge="Takes 60 seconds"
            />
            <StepCard
              number="02" icon={QrCode}
              title="Get Your Virtual UPI ID"
              body="We instantly create a virtual payment address linked to your card — powered by India's national payment infrastructure. Think of it as your Indian payment fingerprint."
              badge="Ready in 30 seconds"
            />
            <StepCard
              number="03" icon={Scan}
              title="Scan Any QR & Pay"
              body="Open GetB+, tap Pay, and point your camera at any QR code in India. Confirm with biometric auth. Done — receipt arrives in your email instantly."
              badge="Works at 350M+ merchants"
            />
          </div>

          <div className="text-center">
            <Link href="/how-it-works" className="font-sans font-semibold text-gold text-[16px] hover:underline group inline-flex items-center">
              Ready to try? Download free <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CITY GUIDES TEASER */}
      <section className="bg-white py-12 border-b border-gray-100 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-sans text-[13px] font-semibold text-gray-500 uppercase tracking-widest">CITY GUIDES</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>
          <div className="flex overflow-x-auto no-scrollbar gap-4 pb-4 snap-x">
            {[
              { city: "Delhi", tip: "Airport Express line takes cards directly." },
              { city: "Mumbai", tip: "Autos run on meters, but only take cash/QR." },
              { city: "Goa", tip: "Beach shacks mostly prefer UPI QR over cards." },
              { city: "Jaipur", tip: "Johari bazaar shops prefer QR to save POS fees." },
              { city: "Bengaluru", tip: "Literally 100% cashless city if you have UPI." }
            ].map((c, i) => (
              <Link href="/for-travelers" key={i} className="snap-start shrink-0 w-[280px] p-5 rounded-2xl border border-gray-200 hover:border-gold hover:shadow-md transition-all group">
                <h4 className="font-sans font-semibold text-navy text-[18px] mb-2 flex items-center justify-between">
                  {c.city}
                  <span className="text-gray-300 group-hover:text-gold transition-colors">→</span>
                </h4>
                <p className="text-[14px] text-gray-500">{c.tip}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — FEATURES GRID */}
      <section className="bg-white py-[100px]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <p className="font-sans text-[13px] font-semibold text-gold uppercase tracking-widest mb-4">WHAT YOU GET</p>
            <h2 className="font-display text-[44px] md:text-[52px] text-navy">Everything a Global Traveler Needs</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Universal QR Acceptance", body: "Works at every UPI-enabled merchant in India. Street vendors, restaurants, autos, pharmacies, supermarkets — 350 million locations and growing." },
              { icon: Lock, title: "Bank-Grade Security", body: "PCI-DSS tokenization. Biometric payment confirmation. Zero-liability fraud protection. Your card data never stored on our servers." },
              { icon: TrendingUp, title: "Real Exchange Rates", body: "We show you the live exchange rate before every transaction — including our fee. No markup buried in the rate. Complete transparency, always." },
              { icon: Zap, title: "3-Minute Onboarding", body: "Passport scan, card link, virtual UPI ID — done. Faster than any airport currency exchange queue you've ever stood in." },
              { icon: Bell, title: "Scam Alerts & Safety Tips", body: "Real-time GPS-based scam alerts, verified auto fare guides for every major city, and local safety tips. India made easy." },
              { icon: Smartphone, title: "Works Like a Native App", body: "Install directly to your phone's home screen without an app store. Instant updates, offline receipt access, browser-native biometric auth." }
            ].map((feature, i) => (
              <FeatureCard key={i} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — STATS */}
      <section className="bg-navy py-[100px] relative overflow-hidden">
        {/* Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            className="font-display text-[44px] md:text-[52px] text-white text-center mb-16"
          >
            Built for the Scale of India
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 divide-x divide-white/10">
            <StatBlock value={350} suffix="M+" label="UPI-accepting merchants" subLabel="Anywhere you see a QR code" />
            <StatBlock value={11.5} suffix="M" label="International tourists annually" subLabel="All systemically excluded until now" />
            <StatBlock value={3} prefix="<" suffix=" min" label="Average setup time" subLabel="Passport scan to first payment" />
            <StatBlock value={95} suffix="%+" label="Transaction success rate" subLabel="Across all beta transactions" />
          </div>
        </div>
      </section>

      {/* SECTION 7 — TESTIMONIALS */}
      <section className="bg-offWhite py-[100px]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariant}
            className="font-display text-[44px] md:text-[52px] text-navy text-center mb-16"
          >
            Travelers Who&apos;ve Crossed the Gap
          </motion.h2>

          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 no-scrollbar snap-x">
            <div className="snap-center"><TestimonialCard quote="I landed in Delhi and paid for chai at the arrivals hall on my very first try. I didn't touch cash once in 10 days." name="Sarah M." nationalityTag="🇬🇧 UK" contextTag="First-time India tourist" /></div>
            <div className="snap-center"><TestimonialCard quote="Finally — my Chase Sapphire works at my favourite dhaba in Jaipur. This should have existed years ago." name="Rahul K." nationalityTag="🇺🇸 USA" contextTag="NRI visiting family" /></div>
            <div className="snap-center"><TestimonialCard quote="Setup was faster than the currency exchange queue I almost joined. And I knew exactly what I was paying every time." name="David L." nationalityTag="🇩🇪 Germany" contextTag="Business traveler" /></div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — SECURITY STRIP */}
      <section className="bg-navy-mid py-[40px] hover:bg-navy-light transition-colors cursor-pointer group">
        <Link href="/security" className="block max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/65 font-sans text-[14px]">
          <span className="inline-block group-hover:-translate-y-0.5 transition-transform">
            🔒 Bank-grade encryption <span className="mx-2">·</span> PCI-DSS Certified <span className="mx-2">·</span> Visa & Mastercard tokenized <span className="mx-2">·</span> Zero-liability fraud protection <span className="mx-2">·</span> Data stored in India <span className="mx-2">·</span> DPDP Act compliant
          </span>
        </Link>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <CTABlock
        title="India is waiting. Your card is ready."
        subtitle="Join travelers who've stopped carrying cash in India. Free to download. Pay only when you transact."
      />
    </>
  );
}
