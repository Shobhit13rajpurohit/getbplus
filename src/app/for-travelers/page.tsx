'use client';

import { useState } from 'react';
import { PillBadge, Button, TestimonialCard, CTABlock } from '@/components';
import { Plane, Coffee, Map, ShoppingBag, Landmark, Utensils } from 'lucide-react';
import Link from 'next/link';

export default function ForTravelers() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-navy py-[120px] text-center px-4">
        <PillBadge className="mb-6">For International Tourists</PillBadge>
        <h1 className="font-display text-[48px] md:text-[64px] text-white leading-tight mb-6">
          Visiting India?<br />Leave the cash worries behind.
        </h1>
        <p className="font-sans text-[18px] text-white/60 max-w-[640px] mx-auto leading-relaxed">
          From street food in Delhi to fine dining in Mumbai. Your Visa, Mastercard, or Amex now works everywhere you see a QR code.
        </p>
      </section>

      {/* PAIN POINTS GRID */}
      <section className="py-[100px] bg-offWhite">
        <div className="max-w-[1280px] mx-auto px-4">
          <h2 className="font-display text-[36px] text-navy text-center mb-16">The old way of traveling India</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Exchange Queues", desc: "Losing 3-5% on awful airport forex rates before your trip even begins." },
              { title: "Card Declined", desc: "Finding out the restaurant terminal doesn't accept international cards." },
              { title: "ATM Fees", desc: "Paying ₹500+ in withdrawal fees every time you need cash." },
              { title: "No Change", desc: "Auto drivers and small shops never having change for a ₹500 note." }
            ].map((pt, i) => (
              <div key={i} className="bg-red-500/5 border border-red-500/20 rounded-[16px] p-6">
                <h4 className="font-sans font-bold text-red-700 text-[18px] mb-3">{pt.title}</h4>
                <p className="font-sans text-[15px] text-gray-600 leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER SLIDER */}
      <section className="py-[120px] bg-navy-mid overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <h2 className="font-display text-[36px] text-white mb-16">See the Difference</h2>

          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/20 select-none">
            {/* BEFORE (Bottom layer) */}
            <div className="absolute inset-0 bg-red-900/40 p-8 flex flex-col justify-center items-end text-right">
              <h3 className="font-display text-4xl text-white/50 mb-4 opacity-50">Without GetB+</h3>
              <ul className="text-white/40 space-y-4 opacity-50">
                <li className="text-xl">Stand in line for cash</li>
                <li className="text-xl">Argue about change</li>
                <li className="text-xl">Cards rejected</li>
              </ul>
            </div>

            {/* AFTER (Top layer based on slider) */}
            <div
              className="absolute inset-0 bg-navy p-8 flex flex-col justify-center items-start text-left border-r border-gold shadow-[5px_0_15px_rgba(0,0,0,0.5)]"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="w-[800px]"> {/* Fixed width to prevent text wrap on resize */}
                <h3 className="font-display text-4xl text-gold mb-4">With GetB+</h3>
                <ul className="text-white space-y-4">
                  <li className="text-xl flex items-center gap-2"><span className="text-gold">✓</span> Scan and go</li>
                  <li className="text-xl flex items-center gap-2"><span className="text-gold">✓</span> Exact amount paid</li>
                  <li className="text-xl flex items-center gap-2"><span className="text-gold">✓</span> Cards accepted everywhere</li>
                </ul>
              </div>
            </div>

            {/* Slider Handle */}
            <input
              type="range"
              min="0" max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />

            {/* Visual Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gold z-10 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-gold text-xs font-bold">
                <>◂▸</>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN PAY FOR */}
      <section className="py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-[36px] text-navy mb-4">Pay for literally anything</h2>
            <p className="font-sans text-[16px] text-gray-500">If they have a QR code, you can pay them.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Utensils, label: "Street Food" },
              { icon: Map, label: "Auto Rickshaws" },
              { icon: Coffee, label: "Chai Stalls" },
              { icon: Plane, label: "Airport Cabs" },
              { icon: Landmark, label: "Monuments" },
              { icon: ShoppingBag, label: "Local Markets" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 bg-offWhite rounded-xl border border-gray-100 hover:border-gold hover:shadow-md transition-all text-navy hover:text-gold">
                <item.icon size={32} className="mb-3" />
                <span className="font-sans font-semibold text-[14px] text-center">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-navy-light/5 border border-navy-light/10 px-6 py-4 rounded-full">
              <span className="text-[20px]">✈️</span>
              <span className="font-sans text-[15px] text-navy font-medium">Pro tip: Set up at home before your flight. Arrive ready to pay.</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI TEASER */}
      <section className="py-[80px] bg-navy">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <PillBadge className="mb-6">Coming in Phase 2</PillBadge>
          <h2 className="font-display text-[36px] text-white mb-6">AI Traveler Assistant</h2>
          <p className="font-sans text-[18px] text-white/70 leading-relaxed mb-8">
            GetB+ will soon warn you when auto fares seem too high, alert you near known scam zones, and answer any India travel question instantly.
          </p>
          <Link href="/ai-assistant" className="text-gold font-sans font-semibold hover:underline">
            Learn more about GetB+ AI →
          </Link>
        </div>
      </section>

      {/* CITY COVERAGE */}
      <section className="py-[120px] bg-offWhite text-center">
        <div className="max-w-[1000px] mx-auto px-4">
          <h2 className="font-display text-[36px] text-navy mb-8">Works across all of India</h2>
          <p className="font-sans text-[20px] text-gray-500 leading-relaxed max-w-3xl mx-auto">
            Works in <span className="font-semibold text-navy">Delhi</span> · <span className="font-semibold text-navy">Mumbai</span> · <span className="font-semibold text-navy">Jaipur</span> · <span className="font-semibold text-navy">Goa</span> · <span className="font-semibold text-navy">Varanasi</span> · <span className="font-semibold text-navy">Agra</span> · <span className="font-semibold text-navy">Bengaluru</span> · <span className="font-semibold text-navy">Chennai</span> · <span className="font-semibold text-navy">Kolkata</span> — everywhere you see a QR code.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[100px] bg-white border-b border-gray-100">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Saved me from carrying wads of cash and constantly doing mental math for exchange rates. The app is incredibly smooth."
              name="Emma T." nationalityTag="🇦🇺 Australia" contextTag="Solo Backpacker"
            />
            <TestimonialCard
              quote="Used it to pay my driver for a 3-day Golden Triangle tour. He got the money instantly, I used my Amex. Perfect."
              name="James L." nationalityTag="🇬🇧 UK" contextTag="Luxury Traveler"
            />
          </div>
        </div>
      </section>

      <CTABlock
        title="Don't wait until you land."
        subtitle="Set up your account now. It takes 3 minutes."
      />
    </div>
  );
}