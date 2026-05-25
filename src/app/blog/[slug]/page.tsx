'use client';

import { PillBadge, Button, CTABlock } from '@/components';
import Link from 'next/link';

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Mock data for the specific post layout based on the slug. In a real app, this would be fetched from Sanity.
  const title = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="bg-white min-h-screen">

      {/* ARTICLE HEADER */}
      <section className="bg-navy pt-[120px] pb-[80px] px-4 text-center">
        <div className="max-w-[800px] mx-auto">
          <PillBadge className="mb-6 bg-gold text-navy border-none">India Travel Payment</PillBadge>
          <h1 className="font-display text-[40px] md:text-[56px] text-white leading-tight mb-8">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-white/60 font-sans text-[14px]">
            <span>By Aadesh Jain</span>
            <span>·</span>
            <span>May 12, 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-[80px] bg-white">
        <div className="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-12 gap-12">

          {/* LEFT SIDEBAR (TOC) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-[100px]">
              <h4 className="font-sans font-semibold text-[14px] text-navy uppercase tracking-wider mb-6">Contents</h4>
              <ul className="space-y-4 font-sans text-[14px] text-gray-500">
                <li><a href="#section-1" className="hover:text-gold transition-colors">The QR Code Problem</a></li>
                <li><a href="#section-2" className="hover:text-gold transition-colors">Why Your Card Fails</a></li>
                <li><a href="#section-3" className="hover:text-gold transition-colors">The GetB+ Solution</a></li>
                <li><a href="#section-4" className="hover:text-gold transition-colors">Setup Guide</a></li>
                <li><a href="#section-5" className="hover:text-gold transition-colors">Conclusion</a></li>
              </ul>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-6 font-sans text-[17px] text-gray-700 leading-relaxed space-y-8">
            <p className="text-[20px] text-navy font-medium leading-relaxed">
              If you&apos;re planning a trip to India in 2026, you might assume your premium travel credit card will be all you need. You&apos;d be wrong.
            </p>

            <h2 id="section-1" className="font-display text-[32px] text-navy mt-12 mb-6">The QR Code Problem</h2>
            <p>
              India has undergone a massive financial revolution over the last decade. Cash is no longer king. Instead, the country runs on a system called UPI (Unified Payments Interface). Every street vendor, auto rickshaw driver, and five-star hotel has a QR code.
            </p>
            <p>
              The problem? These QR codes only work if you have an Indian bank account.
            </p>

            {/* INLINE CTA CARD */}
            <div className="my-12 bg-offWhite border-l-4 border-gold rounded-r-2xl p-8">
              <h3 className="font-sans font-bold text-navy text-[20px] mb-2">Traveling to India? GetB+ solves this.</h3>
              <p className="text-[15px] text-gray-600 mb-6">Link your Visa, Mastercard, or Amex and pay any UPI QR code instantly.</p>
              <Button size="sm">Download Free</Button>
            </div>

            <h2 id="section-2" className="font-display text-[32px] text-navy mt-12 mb-6">Why Your Card Fails</h2>
            <p>
              When a merchant hands you a POS terminal (the physical card swiping machine), your foreign card will usually work. However, merchants hate these machines. They incur high rental costs and charge the merchant a 2-3% fee.
            </p>
            <p>
              UPI, on the other hand, is completely free for the merchant. As a result, millions of merchants have thrown away their POS terminals. If you only have a foreign card, you simply cannot buy from them.
            </p>

            <h2 id="section-3" className="font-display text-[32px] text-navy mt-12 mb-6">The GetB+ Solution</h2>
            <p>
              This is exactly why we built GetB+. We bridge the gap between your international card network (Visa, Mastercard, Amex) and India&apos;s domestic UPI network.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>You don&apos;t need an Indian bank account.</li>
              <li>You don&apos;t need to pre-load a wallet.</li>
              <li>Your card is never stored on our servers (we use PCI-DSS tokenization).</li>
            </ul>

            <h2 id="section-4" className="font-display text-[32px] text-navy mt-12 mb-6">Setup Guide</h2>
            <p>
              Setting up takes under 3 minutes. Download the app, scan your passport for instant KYC, and securely link your card. You are now ready to scan any QR code in India.
            </p>
          </div>

          {/* RIGHT SIDEBAR (EMPTY / ADS) */}
          <div className="hidden lg:block lg:col-span-3">
             <div className="sticky top-[100px] bg-navy-light rounded-2xl p-6 text-center">
               <h4 className="font-display text-[24px] text-white mb-4">India is waiting.</h4>
               <p className="font-sans text-[14px] text-white/60 mb-6">Your card is ready.</p>
               <Button className="w-full">Get the App</Button>
             </div>
          </div>

        </div>
      </section>

      <CTABlock
        title="Experience India without limits."
        subtitle="Don't wait until you land. Set up your payment identity today."
      />
    </div>
  );
}