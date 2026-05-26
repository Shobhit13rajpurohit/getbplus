'use client'

import { useState } from 'react'
import * as motion from "framer-motion/client"
import { ArrowRightLeft, TrendingDown, CheckCircle2 } from 'lucide-react'

const RATES = {
  USD: 83.50,
  EUR: 90.20,
  GBP: 105.80,
  AUD: 55.10
}

export default function FXCalculator() {
  const [amount, setAmount] = useState('100')
  const [currency, setCurrency] = useState<keyof typeof RATES>('USD')

  const parsedAmount = parseFloat(amount) || 0
  const baseRate = RATES[currency]
  
  // GetB+ uses mid-market rate, 0 markup
  const getbReceived = parsedAmount * baseRate
  
  // Traditional cards add ~3.5% FX markup + fixed fees
  const traditionalRate = baseRate * 0.965
  const traditionalReceived = parsedAmount * traditionalRate
  
  const savedAmount = getbReceived - traditionalReceived

  return (
    <div className="glass-card p-6 md:p-8 rounded-3xl w-full">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-hub-text mb-2">See how much you save</h3>
        <p className="text-gray-600">Zero forex markup. Real-time exchange rates.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Input Area */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">You Spend</label>
            <div className="flex bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-gold transition-shadow">
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value as keyof typeof RATES)}
                className="bg-gray-50 border-none px-4 py-3 text-gray-800 font-semibold focus:outline-none"
              >
                {Object.keys(RATES).map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 px-4 py-3 text-xl font-bold text-gray-800 focus:outline-none w-full"
                placeholder="100"
              />
            </div>
          </div>

          <div className="flex justify-center -my-2 relative z-10">
            <div className="w-10 h-10 bg-desk border border-gray-200 rounded-full flex items-center justify-center text-gray-400">
              <ArrowRightLeft size={18} className="rotate-90 md:rotate-0" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Merchant Receives</label>
            <div className="flex bg-gray-50 rounded-xl border border-gray-200 overflow-hidden shadow-inner">
              <div className="bg-gray-100 border-none px-4 py-3 text-gray-600 font-semibold">
                INR
              </div>
              <div className="flex-1 px-4 py-3 text-xl font-bold text-gray-800 flex items-center bg-gray-50/50">
                ₹{getbReceived.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Area */}
        <div className="bg-white/60 p-6 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col justify-center">
          <div className="space-y-6">
            <div className="pb-4 border-b border-gray-100">
              <div className="text-sm text-gray-500 mb-1 flex justify-between">
                <span>With GetB+</span>
                <span className="text-green-600 text-xs font-semibold bg-green-100 px-2 py-0.5 rounded-full">0% Fee</span>
              </div>
              <div className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                ₹{getbReceived.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                <CheckCircle2 size={24} className="text-green-500" />
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-1 flex justify-between">
                <span>Traditional Bank Card</span>
                <span className="text-red-500 text-xs font-semibold bg-red-100 px-2 py-0.5 rounded-full">~3.5% FX Markup</span>
              </div>
              <div className="text-2xl font-semibold text-gray-400 line-through">
                ₹{traditionalReceived.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
              </div>
            </div>
            
            <div className="pt-4 mt-2 border-t border-gray-100">
              <motion.div 
                key={savedAmount}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-center gap-3"
              >
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <TrendingDown size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-green-800">You save roughly</div>
                  <div className="text-xl font-bold text-green-700">₹{savedAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
