'use client';

import { PillBadge, TeamCard, CTABlock } from '@/components';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-navy py-[120px] text-center px-4">
        <PillBadge className="mb-6">About Us</PillBadge>
        <h1 className="font-display text-[48px] md:text-[64px] text-white leading-tight mb-6 max-w-[800px] mx-auto">
          We are building the financial infrastructure that makes India accessible — <span className="text-gold">one QR code at a time.</span>
        </h1>
      </section>

      {/* FOUNDING STORY */}
      <section className="py-[120px] bg-offWhite">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-sm border border-gray-100 relative">
            <div className="absolute top-8 left-0 w-2 h-16 bg-gold rounded-r-full" />
            <h2 className="font-display text-[36px] text-navy mb-8 pl-6">The Founding Story</h2>

            <div className="space-y-6 font-sans text-[17px] text-gray-600 leading-relaxed pl-6">
              <p>
                Aadesh S Jain spent 23+ years in international trade, facilitating cross-border commerce and regularly hosting global delegates in India. Over the last few years, as India underwent its rapid transition to a cash-less, QR-first economy, a glaring problem emerged.
              </p>
              <blockquote className="border-l-2 border-gold pl-6 py-2 my-8">
                <p className="font-display text-[24px] text-navy italic leading-snug">
                  &quot;I watched global business leaders, equipped with the world&apos;s most premium credit cards, unable to buy a simple cup of chai at a street stall. They were structurally locked out of the very infrastructure designed to make payments easier.&quot;
                </p>
              </blockquote>
              <p>
                India&apos;s UPI is a marvel of modern financial technology, processing billions of transactions monthly. But it was designed for domestic bank accounts. Tourists and visiting NRIs were forced back into the archaic world of currency exchange desks, carrying wads of cash, and haggling over change with auto drivers.
              </p>
              <p>
                GetB+ was founded to close this gap. We believe that when you land in India, your existing card should just work. No new bank accounts. No wallet top-ups. Just scan and pay, like a local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-[100px] bg-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-[36px] text-navy mb-4">Leadership Team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 justify-center">
            <TeamCard
              name="Aadesh S Jain" initials="AJ" title="Founder & CEO"
              bio="23+ years in international trade. Built GetB+ after experiencing India's payment gap firsthand during global trade missions."
            />
            <TeamCard
              name="Ruchi Jain" initials="RJ" title="CFO"
              bio="Financial architecture and compliance strategy. Ensuring GetB+ operates at the highest fiduciary standards."
            />
            <TeamCard
              name="Vikas Jain" initials="VJ" title="COO"
              bio="Operational execution across airport hubs, merchant onboarding, and growth corridors."
            />
            <div className="lg:col-span-3 flex flex-col md:flex-row justify-center gap-x-8 gap-y-16 mt-8">
              <TeamCard
                name="Akshay Jain" initials="AK" title="Global Expansion"
                bio="Strategy for geographic expansion and international partner development."
              />
              <TeamCard
                name="Shilpi Jain" initials="SJ" title="Chairperson"
                bio="Guiding strategic vision and institutional relationships."
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY DETAILS */}
      <section className="py-[80px] bg-navy-light border-y border-white/5 text-center">
        <div className="max-w-[800px] mx-auto px-4">
          <h3 className="font-sans font-semibold text-white text-[18px] mb-4">Adeshilps E-XP & TravelWithU Private Limited</h3>
          <p className="font-sans text-[15px] text-white/60 mb-6">Registered in India · Building India&apos;s cross-border payment layer.</p>
          <div className="flex justify-center gap-6 text-[14px]">
            <Link href="/press" className="text-gold hover:underline">Press & Media Kit</Link>
            <span className="text-white/30">|</span>
            <a href="mailto:investors@getbplus.com" className="text-gold hover:underline">Investor Relations</a>
          </div>
        </div>
      </section>

      <CTABlock
        title="Experience India without limits."
        subtitle="Download the app and set up your virtual UPI ID today."
      />
    </div>
  );
}