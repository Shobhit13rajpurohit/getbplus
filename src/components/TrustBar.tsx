'use client';

import { Lock, Shield, Building2, Star } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="w-full bg-offWhite h-[80px] border-b border-gray-300 overflow-hidden flex items-center">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative">

        {/* Desktop View (Centered row) */}
        <div className="hidden md:flex justify-center items-center h-full divide-x divide-gray-300">

          <div className="flex items-center gap-4 px-8 grayscale opacity-70">
            <span className="text-navy font-bold italic tracking-tighter text-lg">VISA</span>
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full bg-red-500/80 mix-blend-multiply" />
              <div className="w-5 h-5 rounded-full bg-yellow-500/80 mix-blend-multiply" />
            </div>
            <span className="text-navy font-bold bg-blue-600/10 px-1 text-xs">AMEX</span>
          </div>

          <div className="flex items-center gap-2 px-8 text-[13px] font-sans text-gray-500">
            <Lock size={16} className="text-gold" />
            <span>PCI-DSS Secured</span>
          </div>

          <div className="flex items-center gap-2 px-8 text-[13px] font-sans text-gray-500">
            <Shield size={16} className="text-gold" />
            <span>RBI-Compliant Framework</span>
          </div>

          <div className="flex items-center gap-2 px-8 text-[13px] font-sans text-gray-500">
            <Building2 size={16} className="text-gold" />
            <span>NPCI-Aligned Infrastructure</span>
          </div>

          <div className="flex items-center gap-2 px-8 text-[13px] font-sans text-gray-500">
            <Star size={16} className="text-gold fill-gold" />
            <span className="font-semibold text-navy">4.8★ Rated</span>
          </div>

        </div>

        {/* Mobile View (Horizontal Scroll / Marquee) */}
        <div className="md:hidden flex overflow-x-auto no-scrollbar py-4 items-center gap-8 px-4 whitespace-nowrap">
          <div className="flex items-center gap-4 grayscale opacity-70 shrink-0">
            <span className="text-navy font-bold italic tracking-tighter text-lg">VISA</span>
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full bg-red-500/80 mix-blend-multiply" />
              <div className="w-5 h-5 rounded-full bg-yellow-500/80 mix-blend-multiply" />
            </div>
            <span className="text-navy font-bold bg-blue-600/10 px-1 text-xs">AMEX</span>
          </div>
          <div className="w-px h-6 bg-gray-300 shrink-0" />
          <div className="flex items-center gap-2 text-[13px] font-sans text-gray-500 shrink-0">
            <Lock size={16} className="text-gold" />
            <span>PCI-DSS Secured</span>
          </div>
          <div className="w-px h-6 bg-gray-300 shrink-0" />
          <div className="flex items-center gap-2 text-[13px] font-sans text-gray-500 shrink-0">
            <Shield size={16} className="text-gold" />
            <span>RBI-Compliant Framework</span>
          </div>
          <div className="w-px h-6 bg-gray-300 shrink-0" />
          <div className="flex items-center gap-2 text-[13px] font-sans text-gray-500 shrink-0">
            <Building2 size={16} className="text-gold" />
            <span>NPCI-Aligned Infrastructure</span>
          </div>
          <div className="w-px h-6 bg-gray-300 shrink-0" />
          <div className="flex items-center gap-2 text-[13px] font-sans text-gray-500 shrink-0">
            <Star size={16} className="text-gold fill-gold" />
            <span className="font-semibold text-navy">4.8★</span>
          </div>
        </div>

      </div>
    </div>
  );
}