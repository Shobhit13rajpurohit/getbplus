'use client';

import { PillBadge, CTABlock } from '@/components';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        e.currentTarget.reset();
      } else {
        alert("Failed to send message. Please try again.");
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
      <section className="bg-navy py-[120px] text-center px-4 relative overflow-hidden">
        <div className="absolute top-[-50%] left-[-10%] w-[600px] h-[600px] bg-gold/10 rounded-full blur-[100px]" />
        <div className="relative z-10">
          <PillBadge className="mb-6">Contact Us</PillBadge>
          <h1 className="font-display text-[48px] md:text-[64px] text-white leading-tight mb-6">
            We&apos;re here to help.
          </h1>
          <p className="font-sans text-[18px] text-white/60 max-w-[500px] mx-auto leading-relaxed">
            Have a question about the product, partnerships, or press? Drop us a line.
          </p>
        </div>
      </section>

      {/* CONTACT INFO & FORM */}
      <section className="py-[100px] bg-offWhite">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

            {/* LEFT: INFO */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="font-display text-[36px] text-navy mb-8">Get in Touch</h2>
                <p className="font-sans text-[16px] text-gray-500 leading-relaxed mb-8">
                  Whether you&apos;re a traveler needing support or a business looking to partner, our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold shrink-0 shadow-sm border border-gray-100">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-navy text-[16px] mb-1">Email Support</h4>
                    <p className="font-sans text-[14px] text-gray-500 mb-2">Response time: &lt; 4 hours</p>
                    <a href="mailto:support@getbplus.com" className="font-sans font-medium text-gold hover:underline">support@getbplus.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold shrink-0 shadow-sm border border-gray-100">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-navy text-[16px] mb-1">WhatsApp Support</h4>
                    <p className="font-sans text-[14px] text-gray-500 mb-2">For urgent travel issues</p>
                    <a href="#" className="font-sans font-medium text-gold hover:underline">Chat with us →</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold shrink-0 shadow-sm border border-gray-100">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-navy text-[16px] mb-1">Corporate HQ</h4>
                    <p className="font-sans text-[14px] text-gray-500 leading-relaxed">
                      Adeshilps E-XP & TravelWithU Pvt Ltd.<br />
                      New Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[24px] shadow-sm border border-gray-200 p-8 md:p-12">
                <h3 className="font-display text-[28px] text-navy mb-8">Send a Message</h3>

                {success ? (
                  <div className="bg-success/10 border border-success/30 rounded-xl p-6 text-center text-success">
                    <div className="w-12 h-12 rounded-full bg-success/20 mx-auto flex items-center justify-center mb-4">
                      ✓
                    </div>
                    <h4 className="font-sans font-bold text-lg mb-2">Message Sent!</h4>
                    <p className="font-sans text-[15px]">Thank you for reaching out. We will get back to you shortly.</p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="mt-6 font-sans font-semibold text-gold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[13px] font-semibold text-navy mb-1.5 uppercase tracking-wide">Full Name</label>
                        <input type="text" name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" placeholder="Jane Doe" />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold text-navy mb-1.5 uppercase tracking-wide">Email Address</label>
                        <input type="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" placeholder="jane@example.com" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-navy mb-1.5 uppercase tracking-wide">Subject</label>
                      <select name="subject" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-white">
                        <option value="">Select a topic...</option>
                        <option value="support">Customer Support</option>
                        <option value="partnership">Partnerships</option>
                        <option value="press">Press & Media</option>
                        <option value="other">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-navy mb-1.5 uppercase tracking-wide">Message</label>
                      <textarea name="message" required rows={6} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold resize-none" placeholder="How can we help you?"></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-navy text-white font-sans font-semibold text-[16px] py-4 rounded-xl hover:bg-gold hover:text-navy transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTABlock
        title="Ready to travel cashless?"
        subtitle="Download GetB+ and experience India like a local."
      />
    </div>
  );
}