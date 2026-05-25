'use client';

import { PillBadge, Button, CTABlock } from '@/components';
import Link from 'next/link';

export default function ForNRIs() {
  return (
    <div className="bg-navy min-h-screen">
      {/* HERO */}
      <section className="py-[120px] text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-trustBlue/10 rounded-full blur-[100px]" />
        <div className="relative z-10">
          <PillBadge className="mb-6">For Non-Resident Indians</PillBadge>
          <h1 className="font-display text-[48px] md:text-[64px] text-white leading-tight mb-6">
            You know India.<br />Your card doesn&apos;t. <span className="text-gold">Yet.</span>
          </h1>
          <p className="font-sans text-[18px] text-white/60 max-w-[640px] mx-auto leading-relaxed mb-10">
            Link your US, UK, UAE, or Australian cards directly to India&apos;s UPI network. No more relying on family for cash or maintaining NRO accounts just for small payments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="px-10">Download App</Button>
            <Button size="lg" variant="ghost" className="px-10 border-white/20">See How It Works</Button>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-[100px] bg-navy-mid border-y border-white/5">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Borrowing cash from family because you ran out",
              "Favorite local restaurant card declined",
              "Embarrassed at chai stalls with no change",
              "ATM fees every time you visit"
            ].map((pt, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-[16px] p-6 hover:border-gold/30 transition-colors">
                <span className="text-gold font-bold text-xl mb-4 block">×</span>
                <p className="font-sans text-[16px] text-white/80 leading-relaxed">{pt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILIAR CARDS */}
      <section className="py-[120px] bg-offWhite text-center">
        <div className="max-w-[1000px] mx-auto px-4">
          <h2 className="font-display text-[36px] text-navy mb-6">Link the cards you already use</h2>
          <p className="font-sans text-[18px] text-gray-500 mb-12 max-w-2xl mx-auto">
            GetB+ securely tokenizes your existing foreign cards. Keep your money where it is, spend it seamlessly when you visit home.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <span className="bg-white border border-gray-200 px-6 py-3 rounded-xl font-sans font-semibold text-navy shadow-sm">Chase Sapphire</span>
            <span className="bg-white border border-gray-200 px-6 py-3 rounded-xl font-sans font-semibold text-navy shadow-sm">Barclays Platinum</span>
            <span className="bg-white border border-gray-200 px-6 py-3 rounded-xl font-sans font-semibold text-navy shadow-sm">Emirates NBD</span>
            <span className="bg-white border border-gray-200 px-6 py-3 rounded-xl font-sans font-semibold text-navy shadow-sm">Amex Platinum</span>
            <span className="bg-white border border-gray-200 px-6 py-3 rounded-xl font-sans font-semibold text-navy shadow-sm">CommBank</span>
          </div>

          <div className="bg-navy rounded-[24px] p-8 md:p-12 text-left relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-full bg-gold/5 transform skew-x-12 translate-x-10" />
            <div className="relative z-10 max-w-lg">
              <PillBadge className="mb-4">Phase 3 Feature</PillBadge>
              <h3 className="font-display text-[28px] text-white mb-4">Spend Your Reward Points in India</h3>
              <p className="font-sans text-[15px] text-white/70 mb-6">
                Soon, you&apos;ll be able to use your Air India miles, HSBC points, or Amex rewards directly to pay via GetB+ at any Indian merchant.
              </p>
              <span className="text-gold font-sans font-medium text-[14px]">Stay tuned for updates.</span>
            </div>
          </div>
        </div>
      </section>

      {/* DIASPORA TRUST */}
      <section className="py-[80px] bg-navy-light text-center border-b border-white/5">
        <div className="max-w-[800px] mx-auto px-4">
          <h3 className="font-sans font-medium text-[16px] text-white/50 uppercase tracking-widest mb-6">Trusted by the Diaspora</h3>
          <p className="font-sans text-[20px] text-white/80 leading-relaxed">
            Used by Indians residing in <br className="md:hidden"/>
            <span className="font-semibold text-white">🇺🇸 USA</span> · <span className="font-semibold text-white">🇬🇧 UK</span> · <span className="font-semibold text-white">🇦🇪 UAE</span> · <span className="font-semibold text-white">🇨🇦 Canada</span> · <span className="font-semibold text-white">🇸🇬 Singapore</span> · <span className="font-semibold text-white">🇦🇺 Australia</span>
          </p>
        </div>
      </section>

      <CTABlock
        title="Ready for your next trip home?"
        subtitle="Download GetB+ now and set up your payment ID before you land."
      />
    </div>
  );
}