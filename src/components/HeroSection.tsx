'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { PillBadge } from './PillBadge';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] bg-navy overflow-hidden flex items-center pt-20">
      {/* Background Animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 -right-20 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] animate-[spin_30s_linear_infinite]" />
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-trustBlue/10 rounded-full blur-[120px] animate-[spin_25s_linear_infinite_reverse]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

          {/* Left Content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8 flex justify-center lg:justify-start"
            >
              <PillBadge>🇮🇳 Built for India&apos;s QR Economy</PillBadge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="font-display text-[40px] md:text-[64px] lg:text-[72px] leading-[1.1] tracking-tightest text-white mb-6"
            >
              Your Card Works Everywhere in India. Finally.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-white/70 text-[18px] leading-[1.7] max-w-[520px] mx-auto lg:mx-0 mb-10 font-sans"
            >
              Link your Visa, Mastercard, or Amex and pay at any shop, street stall, or restaurant across India — just scan the QR code. No Indian bank account needed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button size="lg" className="w-full sm:w-auto">
                  Download the App — Free
                </Button>
                <Button size="lg" variant="ghost" className="w-full sm:w-auto">
                  See How It Works →
                </Button>
              </div>
              <p className="text-[13px] text-gray-500 font-sans">
                Available on iOS & Android · Free setup · Takes under 3 minutes
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="mt-12 flex items-center gap-4 justify-center lg:justify-start grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="flex gap-4 items-center">
                <span className="text-white font-bold italic tracking-tighter text-xl">VISA</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-red-500/80 mix-blend-multiply" />
                  <div className="w-6 h-6 rounded-full bg-yellow-500/80 mix-blend-multiply" />
                </div>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="text-white font-bold bg-blue-600 px-1 text-sm">AMEX</span>
              </div>
              <span className="text-[13px] text-gray-500 font-sans border-l border-white/20 pl-4">
                All major international cards supported
              </span>
            </motion.div>
          </div>

          {/* Right Content - Phone Mockup (CSS only) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full max-w-[340px] mx-auto lg:max-w-none lg:w-[45%] flex justify-center relative"
          >
            <div className="relative w-[300px] h-[600px] rounded-[40px] glassmorphism p-3 shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(201,168,76,0.12)]">
              {/* Inner screen */}
              <div className="w-full h-full rounded-[32px] bg-navy-mid overflow-hidden relative flex flex-col items-center pt-20 px-6">

                {/* Status Bar Fake */}
                <div className="absolute top-0 w-full h-8 flex justify-center items-center">
                  <div className="w-1/3 h-4 bg-black rounded-b-xl" />
                </div>

                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 1 }}
                    className="w-10 h-10 rounded-full bg-success flex items-center justify-center"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                </div>

                <h3 className="font-sans font-medium text-white/70 text-[15px] mb-2">Payment Successful</h3>
                <h2 className="font-display text-[40px] text-white leading-none mb-1">₹ 500.00</h2>
                <p className="font-sans text-[14px] text-gray-400 mb-12">$6.14 USD</p>

                <div className="w-full bg-white/5 rounded-2xl p-4 border border-white/10 mb-auto">
                  <p className="font-sans text-[13px] text-gray-400 mb-1">Paid to</p>
                  <p className="font-sans font-medium text-white">Delhi Spice Market</p>
                  <div className="h-[1px] w-full bg-white/10 my-3" />
                  <div className="flex justify-between items-center">
                    <p className="font-sans text-[13px] text-gray-400">Via</p>
                    <p className="font-sans font-medium text-white flex items-center gap-2">
                      <span className="italic font-bold text-xs">VISA</span> •••• 4242
                    </p>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 w-full flex justify-center">
                  <div className="w-1/3 h-1 bg-white/20 rounded-full" />
                </div>
              </div>
            </div>

            {/* Floating Mini Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-48 h-32 rounded-xl glassmorphism border-gold/30 p-4 shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <div className="w-8 h-6 bg-gold/80 rounded-sm" />
                <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-white/80 text-sm tracking-widest">•••• •••• •••• 4242</p>
              </div>

              {/* QR Scan Effect */}
              <div className="absolute inset-0 bg-gold/5">
                <div className="w-full h-[2px] bg-gold/50 shadow-[0_0_10px_#C9A84C] animate-[scan_2.5s_linear_infinite]" />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}