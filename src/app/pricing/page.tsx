'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FeeTableRow, Button, PillBadge } from '@/components';
import { RefreshCcw, Info } from 'lucide-react';

export default function Pricing() {
  const [amount, setAmount] = useState('1000');
  const [currency, setCurrency] = useState('USD');

  // Dummy rate calculation
  const fxRate = 83.50; // 1 USD = 83.50 INR
  const inrAmount = parseFloat(amount) || 0;
  const homeCurrencyAmount = inrAmount / fxRate;
  const serviceFeeInr = inrAmount * 0.015;
  const flatFeeInr = 10;
  const totalInr = inrAmount + serviceFeeInr + flatFeeInr;
  const totalHome = totalInr / fxRate;

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-navy py-[100px]">
        <div className="max-w-[1280px] mx-auto px-4 text-center">
          <PillBadge className="mb-6">Pricing</PillBadge>
          <h1 className="font-display text-[48px] md:text-[64px] text-white leading-tight mb-6">
            Transparent fees.<br />No surprises. Ever.
          </h1>
        </div>
      </section>

      {/* CALCULATOR WIDGET */}
      <section className="py-[100px] bg-offWhite relative -mt-10 rounded-t-[40px] z-10">
        <div className="max-w-[800px] mx-auto px-4">

          <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-8 md:p-12 mb-16 border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-sans font-semibold text-[20px] text-navy">Live FX Calculator</h3>
              <div className="flex items-center gap-2 text-[12px] text-success bg-success/10 px-3 py-1 rounded-full font-medium">
                <RefreshCcw size={12} />
                Today&apos;s mid-market rate
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-1 bg-offWhite p-4 rounded-xl border border-gray-200">
                <label className="block text-[13px] text-gray-500 mb-2">You send</label>
                <div className="flex items-center">
                  <span className="font-display text-[32px] text-navy mr-2">₹</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-transparent font-display text-[32px] text-navy w-full outline-none"
                  />
                </div>
              </div>
              <div className="flex-1 bg-navy/5 p-4 rounded-xl border border-gold/30">
                <label className="block text-[13px] text-gray-500 mb-2">You pay (approx)</label>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="font-display text-[32px] text-navy mr-2">$</span>
                    <span className="font-display text-[32px] text-navy">{totalHome.toFixed(2)}</span>
                  </div>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="bg-transparent font-sans font-semibold text-navy outline-none cursor-pointer"
                  >
                    <option>USD</option>
                    <option>GBP</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-4 font-sans text-[14px]">
              <div className="flex justify-between text-gray-500">
                <span>Amount sent to merchant</span>
                <span className="font-medium text-navy">₹{inrAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>GetB+ Service Fee (1.5%)</span>
                <span>+ ₹{serviceFeeInr.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Platform Flat Fee</span>
                <span>+ ₹{flatFeeInr.toFixed(2)}</span>
              </div>
              <div className="h-px bg-gray-200 my-2" />
              <div className="flex justify-between font-semibold text-[16px] text-navy">
                <span>Total charged to card</span>
                <span>₹{totalInr.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* FEE TABLE */}
          <div className="mb-16">
            <h3 className="font-display text-[32px] text-navy mb-8 text-center">Complete Fee Breakdown</h3>
            <div className="bg-white rounded-[20px] overflow-hidden border border-gray-200 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4 bg-navy text-white px-4 font-semibold text-[14px] tracking-wider uppercase">
                <div className="md:col-span-5">What</div>
                <div className="md:col-span-3">Amount</div>
                <div className="md:col-span-4">Notes</div>
              </div>
              <FeeTableRow item="App Download" cost="Free" notes="Available on iOS & Android" isFree={true} />
              <FeeTableRow item="Account Setup" cost="Free" notes="Includes virtual UPI ID creation" isFree={true} />
              <FeeTableRow item="Card Linking" cost="Free" notes="Supports Visa, MC, Amex" isFree={true} />
              <FeeTableRow item="KYC Verification" cost="Free" notes="One-time passport scan" isFree={true} />
              <FeeTableRow item="FX Conversion Fee" cost="1.5% - 2.0%" notes="Based on live mid-market rate" />
              <FeeTableRow item="Service Fee" cost="₹10" notes="Flat fee per successful transaction" />
              <FeeTableRow item="Failed Transaction" cost="Free" notes="You are never charged for failures" isFree={true} />
              <FeeTableRow item="Refunds" cost="Free" notes="Returned to original card" isFree={true} />
            </div>
          </div>

          {/* PLEDGE */}
          <div className="bg-gold/10 border border-gold p-8 rounded-[20px] text-center">
            <h4 className="font-sans font-semibold text-[20px] text-navy mb-2 flex items-center justify-center gap-2">
              <Info size={20} className="text-gold" /> The &quot;No Hidden Fees&quot; Pledge
            </h4>
            <p className="font-sans text-[15px] text-gray-600">
              We make money on the small transaction fee. We do not hide margins in bad exchange rates. We do not charge inactivity fees. What you see on the confirmation screen is exactly what hits your statement.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}