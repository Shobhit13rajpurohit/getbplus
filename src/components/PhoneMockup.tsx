'use client';

import { motion } from 'framer-motion';

export default function PhoneMockup() {
  return (
    <div className="relative w-[300px] h-[600px] rounded-[40px] glassmorphism-light p-3 shadow-2xl">
      <div className="w-full h-full rounded-[32px] bg-white overflow-hidden relative flex flex-col border border-gray-200">

        {/* Status Bar Fake */}
        <div className="absolute top-0 w-full h-7 flex justify-between items-center px-6 z-10">
          <span className="text-[12px] font-medium">9:41</span>
          <div className="flex gap-1.5 items-center">
            <div className="w-3.5 h-2.5 border border-black rounded-[2px]" />
          </div>
        </div>

        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />

        <div className="flex-1 bg-offWhite pt-16 flex flex-col items-center">

          <div className="w-full px-6 mb-8">
            <h3 className="font-sans font-semibold text-lg text-navy mb-1">Scan to Pay</h3>
            <p className="text-sm text-gray-500">Point camera at any QR code</p>
          </div>

          {/* Camera Viewfinder Mock */}
          <div className="w-[240px] h-[240px] rounded-3xl bg-navy-mid relative overflow-hidden flex items-center justify-center">
            {/* Corners */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-gold rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-gold rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-gold rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-gold rounded-br-lg" />

            <div className="text-white/20">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <rect x="7" y="7" width="3" height="3"/>
                <rect x="14" y="7" width="3" height="3"/>
                <rect x="7" y="14" width="3" height="3"/>
                <rect x="14" y="14" width="3" height="3"/>
              </svg>
            </div>

            {/* Scan Line Animation */}
            <motion.div
              animate={{ y: [-120, 120] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-[2px] bg-gold/80 shadow-[0_0_8px_#C9A84C]"
            />
          </div>

        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 w-full flex justify-center">
          <div className="w-1/3 h-1 bg-black/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}