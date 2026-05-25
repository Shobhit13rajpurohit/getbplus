'use client';

import { PillBadge, FAQAccordion } from '@/components';
import { Search, CreditCard, AlertTriangle, RefreshCcw, XCircle, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export default function Support() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO WITH SEARCH */}
      <section className="bg-navy pt-[120px] pb-[80px] px-4 text-center">
        <PillBadge className="mb-6">Support Center</PillBadge>
        <h1 className="font-display text-[48px] md:text-[64px] text-white leading-tight mb-10">
          How can we help you?
        </h1>
        <div className="max-w-[600px] mx-auto relative">
          <input
            type="text"
            placeholder="Search for articles, common issues..."
            className="w-full bg-white/10 border border-white/20 text-white rounded-full px-6 py-4 pl-14 text-[16px] focus:outline-none focus:border-gold focus:bg-white/15 transition-colors placeholder:text-white/40"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40" size={20} />
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-[60px] bg-navy-mid border-b border-white/5">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: CreditCard, label: "Card Linking" },
              { icon: AlertTriangle, label: "Payment Failed" },
              { icon: RefreshCcw, label: "Refund Process" },
              { icon: XCircle, label: "Card Not Supported" },
              { icon: ShieldAlert, label: "Report Fraud" }
            ].map((link, i) => (
              <button key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-gold/50 rounded-full px-5 py-2.5 text-white transition-colors group">
                <link.icon size={16} className="text-gold group-hover:scale-110 transition-transform" />
                <span className="font-sans text-[14px]">{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT (FAQ & FORM) */}
      <section className="py-[100px] bg-offWhite">
        <div className="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-12 gap-12">

          {/* LEFT: FAQS */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-8 pb-4 border-b border-gray-100">
                <h2 className="font-display text-[28px] text-navy">Top Frequently Asked Questions</h2>
              </div>
              <div className="p-8 pt-4">
                <div className="mb-8">
                  <h3 className="font-sans font-semibold text-gold text-[14px] uppercase tracking-wider mb-4">Getting Started</h3>
                  <FAQAccordion question="Which cards are supported?" answer="Visa, Mastercard, and American Express (internationally issued only). We currently do not support Discover or Diners Club." />
                  <FAQAccordion question="Do I need an Indian bank account?" answer="No. Your foreign card is all you need." />
                  <FAQAccordion question="How long does KYC take?" answer="Under 2 minutes. We require a passport scan plus a quick liveness check to comply with RBI regulations." />
                </div>

                <div className="mb-8">
                  <h3 className="font-sans font-semibold text-gold text-[14px] uppercase tracking-wider mb-4">Payments & Fees</h3>
                  <FAQAccordion question="What currency will my card be charged in?" answer="Your home currency. The rate is shown before every transaction, including our 1.5% fee." />
                  <FAQAccordion question="What if my payment fails?" answer="You are never charged on failed transactions. Retry is free." />
                  <FAQAccordion question="What is the daily transaction limit?" answer="₹25,000 per day / ₹1,00,000 per month." />
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-gold text-[14px] uppercase tracking-wider mb-4">Security & Account</h3>
                  <FAQAccordion question="How safe is my card information?" answer="Your card number never reaches our servers. It is securely tokenized directly with Visa/Mastercard." />
                  <FAQAccordion question="Can I get a refund?" answer="Yes. Refunds process in 5–7 business days to your original card." />
                  <FAQAccordion question="Does GetB+ work in all Indian cities?" answer="Yes — any merchant with a UPI QR code, anywhere in India." />
                  <FAQAccordion question="How do I close my account?" answer="Go to Settings → Close Account in the app. All personal data is permanently deleted within 30 days as per DPDP Act." />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT / TICKET */}
          <div className="lg:col-span-4 space-y-6">

            <div className="bg-white rounded-[24px] shadow-sm border border-gray-200 p-8">
              <h3 className="font-display text-[24px] text-navy mb-2">Need more help?</h3>
              <p className="font-sans text-[14px] text-gray-500 mb-6">Submit a ticket and our team will get back to you in under 4 hours.</p>

              <form action="/api/contact" method="POST" className="space-y-4">
                <div>
                  <input type="email" name="email" required placeholder="Your email address" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-gold" />
                </div>
                <div>
                  <select name="issueType" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-gold bg-white">
                    <option value="">Select Issue Type...</option>
                    <option value="payment">Payment Failed / Pending</option>
                    <option value="refund">Refund Status</option>
                    <option value="account">Account Setup / KYC</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <input type="text" name="transactionId" placeholder="Transaction ID (Optional)" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-gold" />
                </div>
                <div>
                  <textarea name="description" required rows={4} placeholder="Describe the issue..." className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-gold resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-navy text-white font-sans font-semibold text-[15px] py-3 rounded-lg hover:bg-gold hover:text-navy transition-colors">
                  Submit Ticket
                </button>
              </form>
            </div>

            <div className="bg-navy rounded-[24px] p-8 text-center text-white">
              <h4 className="font-sans font-semibold text-[16px] mb-4">Direct Contact</h4>
              <p className="text-[14px] text-white/60 mb-2">Email Support:</p>
              <a href="mailto:support@getbplus.com" className="text-gold font-medium block mb-6">support@getbplus.com</a>

              <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-[12px]">
                <span className="w-2 h-2 rounded-full bg-success inline-block mr-2 animate-pulse"></span>
                Live Chat <span className="text-white/50 ml-1">(Coming Soon)</span>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}