'use client';

import { SecurityBadge, PillBadge, CTABlock } from '@/components';
import { motion } from 'framer-motion';

export default function Security() {
  return (
    <div className="bg-navy min-h-screen">
      {/* HERO */}
      <section className="py-[120px] text-center px-4">
        <PillBadge className="mb-6">Security & Compliance</PillBadge>
        <h1 className="font-display text-[48px] md:text-[64px] text-white leading-tight mb-6">
          Your money is safe.<br />Your card is safe. <span className="text-gold">Here&apos;s the proof.</span>
        </h1>
      </section>

      {/* COMPLIANCE GRID */}
      <section className="py-[80px] bg-navy-mid border-y border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SecurityBadge type="pci" title="PCI-DSS Certified" />
            <SecurityBadge type="rbi" title="RBI-Compliant Framework" />
            <SecurityBadge type="npci" title="NPCI-Aligned" />
            <SecurityBadge type="dpdp" title="DPDP Act 2023" />
            <SecurityBadge type="token" title="Visa Tokenization" />
            <SecurityBadge type="mdes" title="Mastercard MDES" />
            <SecurityBadge type="aws" title="AWS Mumbai Data Residency" />
            <SecurityBadge type="biometric" title="Biometric Confirmation" />
          </div>
        </div>
      </section>

      {/* TOKENIZATION EXPLAINER */}
      <section className="py-[120px]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-[36px] text-white mb-16">How Tokenization Works</h2>

          {/* CSS Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            <div className="bg-white/5 border border-red-500/30 rounded-xl p-6 flex-1 w-full relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-bold">Never Stored</span>
              <p className="font-mono text-white/50 line-through text-lg">4242 4242 4242 4242</p>
              <p className="text-sm text-gray-400 mt-2">Raw Card Number</p>
            </div>

            <div className="text-gold hidden md:block">➔</div>
            <div className="text-gold md:hidden">↓</div>

            <div className="bg-navy-light border border-gold/30 rounded-xl p-6 flex-1 w-full relative z-10 shadow-[0_0_30px_rgba(201,168,76,0.1)]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-bold">Visa/MC Secure Server</span>
              <p className="font-sans text-white text-lg font-semibold">Token Generation</p>
            </div>

            <div className="text-success hidden md:block">➔</div>
            <div className="text-success md:hidden">↓</div>

            <div className="bg-success/10 border border-success/30 rounded-xl p-6 flex-1 w-full relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-success text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-bold">Stored Safely</span>
              <p className="font-mono text-success text-lg">TKN_982B_X71</p>
              <p className="text-sm text-success/70 mt-2">Secure Reference Token</p>
            </div>
          </div>

          <p className="font-sans text-[16px] text-white/70 max-w-[700px] mx-auto leading-relaxed">
            When you link your card, the actual numbers are sent directly to the card network (Visa/Mastercard). They return a secure, encrypted token to GetB+. We use this token to process payments. If our servers were ever compromised, hackers would only find useless reference tokens.
          </p>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="py-[100px] bg-offWhite">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-sans font-bold text-navy text-xl mb-4">Zero-Liability Policy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                You are protected against unauthorized transactions. If an unauthorized charge occurs, you are fully covered under your home card issuer&apos;s zero-liability policies, supported by our secure audit trails.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-sans font-bold text-navy text-xl mb-4">India Data Residency</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                In strict compliance with the RBI and DPDP Act, all payment routing and user data is processed and stored exclusively on secure AWS servers physically located in Mumbai, India.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-sans font-bold text-navy text-xl mb-4">Regulated Partners</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We operate through RBI-regulated sponsor banks and NPCI-approved payment aggregators, ensuring institutional-grade oversight of every transaction crossing the network.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        title="Ready to pay safely?"
        subtitle="Experience India's QR ecosystem with the security of your home bank."
      />
    </div>
  );
}