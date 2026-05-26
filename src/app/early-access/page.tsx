'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import * as motion from "framer-motion/client"
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function EarlyAccessPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setStatus('loading')
    
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-[85vh] bg-desk flex flex-col items-center justify-center py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full"
      >
        <div className="glass-panel p-8 md:p-12 rounded-3xl text-center shadow-xl">
          <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🚀</span>
          </div>
          
          <h1 className="text-4xl font-bold text-hub-text mb-4 tracking-tight">Join the Early Access</h1>
          <p className="text-lg text-gray-600 mb-10">
            Be the first to experience GetB+. Pay at any UPI QR in India using your foreign card. No local bank account needed.
          </p>

          {status === 'success' ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-50 border border-green-200 p-6 rounded-2xl flex flex-col items-center"
            >
              <CheckCircle2 className="w-12 h-12 text-green-500 mb-3" />
              <h3 className="text-xl font-bold text-green-800 mb-1">You're on the list!</h3>
              <p className="text-green-600">We'll notify you as soon as your spot opens up.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 text-lg bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-shadow text-gray-800 shadow-sm"
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-lg rounded-full py-6 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Joining...' : 'Get Early Access'}
                {!status && <ArrowRight size={20} />}
              </Button>
              {status === 'error' && (
                <p className="text-red-500 text-sm mt-2">Something went wrong. Please try again.</p>
              )}
            </form>
          )}

          <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-hub-text">10k+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Waitlist</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-hub-text">350M+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Merchants</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-hub-text">$0</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Setup Fee</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
