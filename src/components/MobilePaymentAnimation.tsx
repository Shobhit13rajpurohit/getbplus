'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QrCode, ShieldCheck, Check, Fingerprint, Banknote, Store, Sparkles, ChevronRight } from 'lucide-react'

type Phase = 'scanning' | 'processing' | 'success'

export default function MobilePaymentAnimation() {
  const [phase, setPhase] = useState<Phase>('scanning')
  const [processingText, setProcessingText] = useState('Verifying merchant...')

  useEffect(() => {
    let mounted = true

    const runSequence = async () => {
      while (mounted) {
        // Phase 1: Scanning
        setPhase('scanning')
        await new Promise(r => setTimeout(r, 3000))
        
        // Phase 2: Processing
        if (!mounted) break
        setPhase('processing')
        setProcessingText('Verifying merchant...')
        await new Promise(r => setTimeout(r, 1000))
        if (!mounted) break
        setProcessingText('Securing connection...')
        await new Promise(r => setTimeout(r, 1000))
        if (!mounted) break
        setProcessingText('Forex conversion...')
        await new Promise(r => setTimeout(r, 1000))
        
        // Phase 3: Success
        if (!mounted) break
        setPhase('success')
        await new Promise(r => setTimeout(r, 5000))
      }
    }

    runSequence()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="absolute inset-0 bg-gray-900 overflow-hidden flex flex-col font-sans">
      {/* Background ambient glow */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            background: phase === 'success' 
              ? 'radial-gradient(circle at 50% 50%, rgba(34,197,94,0.15) 0%, rgba(17,24,39,1) 100%)' 
              : phase === 'processing'
                ? 'radial-gradient(circle at 50% 50%, rgba(45,212,191,0.15) 0%, rgba(17,24,39,1) 100%)'
                : 'radial-gradient(circle at 50% 50%, rgba(250,204,21,0.1) 0%, rgba(17,24,39,1) 100%)'
          }}
          transition={{ duration: 1 }}
          className="w-full h-full"
        />
      </div>

      <AnimatePresence mode="wait">
        {phase === 'scanning' && (
          <motion.div 
            key="scanning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md mb-4"
              >
                <QrCode className="w-4 h-4 text-gold" />
                <span className="text-xs font-medium text-white/90 uppercase tracking-widest">Scan to Pay</span>
              </motion.div>
              <h2 className="text-2xl font-semibold text-white">Align QR Code</h2>
              <p className="text-white/50 text-sm mt-2">GetB+ Zero-Markup Pay</p>
            </div>

            {/* QR Scanner Viewfinder */}
            <div className="relative w-56 h-56">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-gold rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-gold rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-gold rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-gold rounded-br-xl" />
              
              {/* Fake QR Content fading in and out slightly */}
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center"
              >
                 <QrCode className="w-24 h-24 text-white/20" />
              </motion.div>

              {/* Scanning Laser */}
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-1 bg-gold shadow-[0_0_15px_rgba(255,215,0,0.8)] z-20"
              />
            </div>
            
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-12 text-gold/80 text-sm font-medium tracking-wide flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Detecting merchant...
            </motion.div>
          </motion.div>
        )}

        {phase === 'processing' && (
          <motion.div 
            key="processing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6"
          >
            {/* Morphing Processing Orb */}
            <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-t-2 border-r-2 border-teal-400 opacity-50"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border-b-2 border-l-2 border-gold opacity-50"
              />
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 bg-teal-500/20 rounded-full backdrop-blur-xl border border-teal-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(45,212,191,0.3)]"
              >
                <Fingerprint className="w-8 h-8 text-teal-300" />
              </motion.div>
            </div>

            {/* Dynamic Card */}
            <div className="w-full max-w-sm bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                <motion.div 
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-teal-400 to-gold"
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Store className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Sharma Chaiwala</div>
                    <div className="text-white/50 text-xs">Connaught Place</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-white/10 pt-4 mb-4">
                <div>
                  <div className="text-white/60 text-xs mb-1 uppercase tracking-wider">Amount</div>
                  <div className="text-3xl font-bold text-white">₹450</div>
                </div>
                <div className="text-right">
                  <div className="text-white/60 text-xs mb-1 uppercase tracking-wider">Home Currency</div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xl font-medium text-teal-400"
                  >
                    ~$5.42
                  </motion.div>
                </div>
              </div>

              {/* AI Real-time logs */}
              <div className="bg-black/30 rounded-xl p-3 border border-white/5 flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-gold animate-pulse" />
                <motion.span 
                  key={processingText}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm text-white/80 font-mono"
                >
                  {processingText}
                </motion.span>
              </div>
            </div>
          </motion.div>
        )}

        {phase === 'success' && (
          <motion.div 
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 flex flex-col bg-green-500/10 backdrop-blur-lg"
          >
            {/* Confetti / Particles overlay */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
               {[...Array(15)].map((_, i) => (
                 <motion.div
                   key={i}
                   initial={{ 
                     opacity: 1, 
                     y: "100%", 
                     x: `${Math.random() * 100}%`,
                     scale: Math.random() * 0.5 + 0.5
                   }}
                   animate={{ 
                     y: "-20%", 
                     opacity: 0,
                     rotate: Math.random() * 360
                   }}
                   transition={{ 
                     duration: 2 + Math.random() * 2, 
                     ease: "easeOut",
                     delay: Math.random() * 0.5
                   }}
                   className="absolute bottom-0 w-2 h-2 bg-green-400 rounded-full blur-[1px]"
                 />
               ))}
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-6 mt-8">
              {/* Success Badge */}
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", damping: 15, stiffness: 200 }}
                className="relative mb-6"
              >
                <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="w-20 h-20 bg-gradient-to-tr from-green-600 to-green-400 rounded-full flex items-center justify-center shadow-2xl relative z-10 border-4 border-green-300/30">
                  <Check className="w-10 h-10 text-white" strokeWidth={3} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-1">Payment Done</h2>
                <p className="text-green-300 font-medium flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Fully Secured
                </p>
              </motion.div>

              {/* Receipt Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, type: "spring", damping: 20 }}
                className="w-full bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl relative"
              >
                {/* Torn paper effect at top (simulated with dots) */}
                <div className="absolute top-0 left-4 right-4 h-[1px] flex justify-between">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-white/20 -mt-[2px]" />
                  ))}
                </div>

                <div className="text-center mb-6">
                  <div className="text-white/50 text-sm mb-1">Paid to</div>
                  <div className="text-white text-lg font-semibold">Sharma Chaiwala</div>
                </div>

                <div className="flex justify-between items-center py-4 border-y border-white/10 mb-4">
                  <span className="text-white/70">Amount</span>
                  <span className="text-2xl font-bold text-white">₹450</span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/50">Card Charged</span>
                    <span className="text-white font-medium">$5.42 USD</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/50">Forex Markup</span>
                    <span className="text-green-400 font-medium flex items-center gap-1">
                      <Check className="w-3 h-3" /> 0.00%
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/50">Txn ID</span>
                    <span className="text-white/80 font-mono text-xs">UPI_9A8B7C6D5E</span>
                  </div>
                </div>
              </motion.div>

              {/* Bottom CTA / Status */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer px-6 py-3 rounded-full border border-white/10 flex items-center gap-3 backdrop-blur-md"
              >
                <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center">
                  <Banknote className="w-3 h-3 text-teal-400" />
                </div>
                <span className="text-white/90 text-sm font-medium">Split with friends</span>
                <ChevronRight className="w-4 h-4 text-white/50 ml-2" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
