'use client';

import { PillBadge, PartnerTypeCard } from '@/components';
import { useState } from 'react';

export default function Partner() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch('/api/partner', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        e.currentTarget.reset();
      } else {
        alert("Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-navy py-[120px] text-center px-4">
        <PillBadge className="mb-6">Partnerships</PillBadge>
        <h1 className="font-display text-[48px] md:text-[64px] text-white leading-tight mb-6 max-w-[800px] mx-auto">
          Join India&apos;s cross-border traveler infrastructure.
        </h1>
        <p className="font-sans text-[18px] text-white/60 max-w-[640px] mx-auto leading-relaxed">
          Enable seamless international payments for your customers or earn by embedding GetB+ into your travel flows.
        </p>
      </section>

      {/* PARTNER TYPES */}
      <section className="py-[100px] bg-offWhite">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <PartnerTypeCard
              emoji="🏨"
              title="Hotels & Hospitality"
              description="Your international guests can now pay in your hotel shop, restaurant, or spa with their foreign card — instantly. No POS terminal setup required, just your existing UPI QR."
            />
            <PartnerTypeCard
              emoji="✈️"
              title="Airports & Airlines"
              description="First-point activation for every arriving international traveler. Co-branded kiosk programs available at international arrivals. Provide immediate value to arriving tourists."
            />
            <PartnerTypeCard
              emoji="🛍️"
              title="Merchants & Retailers"
              description="Accept international card payments via UPI. Zero new hardware. Zero new POS terminal. You receive funds in INR exactly as you normally do with local UPI payments."
            />
            <PartnerTypeCard
              emoji="💼"
              title="Travel Agencies & OTAs"
              description="Embed GetB+ into your booking confirmation flow. Warn travelers about India's cash issues and offer GetB+ as the solution. Earn a revenue share per transaction referred."
            />
          </div>

          {/* HOW IT WORKS / REVENUE SHARE */}
          <div className="bg-white p-8 md:p-12 rounded-[24px] shadow-sm border border-gray-200">
            <h2 className="font-display text-[32px] text-navy mb-8 text-center">How Partnership Works</h2>
            <div className="flex flex-col md:flex-row justify-between gap-8 relative">
              <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-gray-100 z-0" />

              <div className="flex-1 text-center relative z-10">
                <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-white shadow-sm">1</div>
                <h4 className="font-sans font-semibold text-navy text-[18px] mb-2">Apply</h4>
                <p className="text-sm text-gray-500">Fill out the form below. Our partnerships team will review within 48 hours.</p>
              </div>

              <div className="flex-1 text-center relative z-10">
                <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-white shadow-sm">2</div>
                <h4 className="font-sans font-semibold text-navy text-[18px] mb-2">Integration</h4>
                <p className="text-sm text-gray-500">Get access to co-branded assets, tracking links, or physical QR standees.</p>
              </div>

              <div className="flex-1 text-center relative z-10">
                <div className="w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-white shadow-sm">3</div>
                <h4 className="font-sans font-semibold text-navy text-[18px] mb-2">Go Live & Earn</h4>
                <p className="text-sm text-gray-500">Enable seamless payments for your users and earn recurring revenue share.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-[100px] bg-white">
        <div className="max-w-[600px] mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-[36px] text-navy mb-4">Partner Inquiry Form</h2>
            <p className="font-sans text-gray-500 text-[15px]">Let&apos;s build the cross-border payment layer together.</p>
          </div>

          {success ? (
            <div className="bg-success/10 border border-success/30 rounded-xl p-8 text-center text-success">
              <div className="w-16 h-16 rounded-full bg-success/20 mx-auto flex items-center justify-center mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h4 className="font-sans font-bold text-xl mb-3">Inquiry Submitted!</h4>
              <p className="font-sans text-[15px] max-w-md mx-auto">Thank you for your interest in partnering with GetB+. Our team will review your details and contact you within 48 hours.</p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-8 font-sans font-semibold text-gold hover:underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-semibold text-navy mb-1.5 uppercase tracking-wide">Name</label>
                  <input type="text" name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-navy mb-1.5 uppercase tracking-wide">Company</label>
                  <input type="text" name="company" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" placeholder="Company Ltd" />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-navy mb-1.5 uppercase tracking-wide">Partnership Type</label>
                <select name="type" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-white">
                  <option value="">Select type...</option>
                  <option value="hotel">Hotel / Hospitality</option>
                  <option value="airport">Airport / Airline</option>
                  <option value="merchant">Merchant / Retailer</option>
                  <option value="agency">Travel Agency / OTA</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-navy mb-1.5 uppercase tracking-wide">Estimated Monthly Tourists <span className="text-gray-400 font-normal lowercase">(optional)</span></label>
                <input type="text" name="volume" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" placeholder="e.g. 500+" />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-navy mb-1.5 uppercase tracking-wide">Email</label>
                <input type="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" placeholder="john@company.com" />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-navy mb-1.5 uppercase tracking-wide">Message <span className="text-gray-400 font-normal lowercase">(optional)</span></label>
                <textarea name="message" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold resize-none" placeholder="Tell us about how we can work together..."></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold text-navy font-sans font-semibold text-[16px] py-4 rounded-xl hover:bg-gold-bright hover:shadow-[0_4px_20px_rgba(201,168,76,0.35)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}