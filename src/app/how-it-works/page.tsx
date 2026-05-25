'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, FAQAccordion, PhoneMockup, PillBadge } from '@/components';
import { ArrowRight, QrCode, CreditCard, ScanLine, MapPin } from 'lucide-react';

export default function HowItWorks() {
  const [activeDemoStep, setActiveDemoStep] = useState(0);

  const demoSteps = [
    { title: "Scan QR", icon: QrCode },
    { title: "Confirm Amount", icon: CreditCard },
    { title: "Face ID", icon: ScanLine },
    { title: "Done", icon: MapPin }
  ];

  return (
    <div className="bg-navy min-h-screen">
      {/* HERO */}
      <section className="py-[100px] border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-gold/10 rounded-full blur-[120px]" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <PillBadge className="mb-6">Product Walkthrough</PillBadge>
          <h1 className="font-display text-[48px] md:text-[64px] text-white leading-tight mb-6">
            Three steps from your card <br className="hidden md:block" />to every QR in India.
          </h1>
          <p className="font-sans text-[18px] text-white/60 max-w-[640px] mx-auto leading-relaxed">
            GetB+ bridges international cards and India&apos;s UPI payment network. Here&apos;s exactly how it works — no jargon.
          </p>
        </div>
      </section>

      {/* STEP 1 */}
      <section className="py-[120px] bg-navy relative border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 w-full flex justify-center lg:justify-start">
              <PhoneMockup />
            </div>
            <div className="flex-1">
              <span className="font-display text-[80px] text-white/5 leading-none block -ml-4 mb-2">01</span>
              <h2 className="font-display text-[36px] text-white mb-6">Link Your Card</h2>
              <p className="font-sans text-[17px] text-white/65 leading-relaxed mb-8">
                Your card number goes directly to Visa&apos;s or Mastercard&apos;s secure token service. GetB+ stores only a token reference — like a receipt stub, not the card itself.
              </p>
              <div className="flex items-center gap-6 grayscale opacity-60">
                <span className="font-bold italic text-white text-xl">VISA</span>
                <span className="font-bold text-white text-xl flex -space-x-2">
                  <div className="w-5 h-5 rounded-full bg-red-500/80 mix-blend-multiply" />
                  <div className="w-5 h-5 rounded-full bg-yellow-500/80 mix-blend-multiply" />
                </span>
                <span className="font-bold text-white bg-blue-600 px-1 text-sm">AMEX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 2 */}
      <section className="py-[120px] bg-navy-mid relative border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1 w-full flex justify-center lg:justify-end">
              <PhoneMockup />
            </div>
            <div className="flex-1">
              <span className="font-display text-[80px] text-white/5 leading-none block -ml-4 mb-2">02</span>
              <h2 className="font-display text-[36px] text-white mb-6">Get Your India Payment Identity</h2>
              <p className="font-sans text-[17px] text-white/65 leading-relaxed mb-8">
                Think of it as your Indian payment fingerprint — an address the merchant receives money from. Created in 30 seconds, linked to your card, not to any bank account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 3 */}
      <section className="py-[120px] bg-navy relative border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 w-full flex justify-center lg:justify-start">
              <PhoneMockup />
            </div>
            <div className="flex-1">
              <span className="font-display text-[80px] text-white/5 leading-none block -ml-4 mb-2">03</span>
              <h2 className="font-display text-[36px] text-white mb-6">Scan Any QR & Pay</h2>
              <p className="font-sans text-[17px] text-white/65 leading-relaxed mb-10">
                Open GetB+, tap Pay, and point your camera at any QR code in India. Confirm with biometric auth. Done.
              </p>

              {/* Interactive Demo Panel */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-[20px]">
                <h4 className="font-sans font-semibold text-white mb-4 flex items-center justify-between">
                  Interactive Demo
                  <span className="text-[12px] font-normal text-gold bg-gold/10 px-2 py-1 rounded-full">Click below to test</span>
                </h4>
                <div className="flex gap-2">
                  {demoSteps.map((step, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveDemoStep(i)}
                      className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-xl transition-colors ${activeDemoStep === i ? 'bg-gold text-navy' : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'}`}
                    >
                      <step.icon size={20} />
                      <span className="text-[11px] font-semibold">{step.title}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-[120px] bg-offWhite">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-[36px] text-navy mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="bg-white rounded-[20px] p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
            <FAQAccordion
              question="Do I need an Indian bank account to use this?"
              answer="No. That's the entire point of GetB+. You only need your existing international credit or debit card."
              defaultOpen={true}
            />
            <FAQAccordion
              question="What is a Virtual UPI ID?"
              answer="It's a digital address that allows Indian merchants to request money from you via their QR codes. We generate this instantly and securely link it to your foreign card behind the scenes."
            />
            <FAQAccordion
              question="Are there any hidden fees?"
              answer="Never. You pay a 1.5% FX conversion fee (standard) plus a flat ₹10 service fee per transaction. The exact equivalent in your home currency is shown before you confirm the payment."
            />
            <FAQAccordion
              question="Does it work with Amex?"
              answer="Yes. We support Visa, Mastercard, and American Express cards issued outside of India."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[120px] bg-navy text-center">
        <h2 className="font-display text-[44px] text-white mb-8">Ready to get started?</h2>
        <Button size="lg" className="px-12">Download Free</Button>
      </section>
    </div>
  );
}