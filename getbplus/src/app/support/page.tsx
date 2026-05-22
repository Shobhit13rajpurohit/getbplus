'use client'

import { useState } from 'react'
import { Search, MessageCircle, Phone, FileText, ChevronDown } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const faqs = [
    {q: "How do I link my international card?", a: "Download the GetB+ app, navigate to 'Wallet', tap 'Add Card', and enter your Visa, Mastercard, or Amex details. Your bank may require a standard OTP verification."},
    {q: "Why was my card declined during setup?", a: "Ensure your card has international transactions enabled. Some banks block foreign setups by default. Call your bank to authorize GetB+."},
    {q: "Are there daily transaction limits?", a: "Yes. Due to RBI regulations for foreign tourists, there is a maximum transaction limit of ₹10,000 per day, and a monthly limit of ₹50,000."},
    {q: "What if a transaction fails but money is deducted?", a: "Failed UPI transactions are typically auto-refunded within 4-24 hours. GetB+'s zero-liability policy means you will never pay for a failed transaction."},
    {q: "Do I need internet to use GetB+?", a: "Yes, you need an active internet connection (WiFi or mobile data) to scan the QR code and process the payment."}
  ]

  const filteredFaqs = faqs.filter(faq => faq.q.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-24 pb-16 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">How can we help?</h1>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for articles, questions, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-light border border-white/20 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-gold shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-dark">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
             <Card className="bg-navy border-white/10 hover:border-gold/50 transition-colors cursor-pointer text-center">
               <CardContent className="pt-6">
                 <FileText className="mx-auto text-gold mb-4" size={32} />
                 <h3 className="font-bold mb-2">Setup Guide</h3>
                 <p className="text-sm text-gray-400">Step-by-step instructions to get your account ready.</p>
               </CardContent>
             </Card>
             <Card className="bg-navy border-white/10 hover:border-gold/50 transition-colors cursor-pointer text-center">
               <CardContent className="pt-6">
                 <MessageCircle className="mx-auto text-gold mb-4" size={32} />
                 <h3 className="font-bold mb-2">Live Chat</h3>
                 <p className="text-sm text-gray-400">Chat with our English-speaking support team 24/7.</p>
               </CardContent>
             </Card>
             <Card className="bg-navy border-white/10 hover:border-gold/50 transition-colors cursor-pointer text-center">
               <CardContent className="pt-6">
                 <Phone className="mx-auto text-gold mb-4" size={32} />
                 <h3 className="font-bold mb-2">Emergency Support</h3>
                 <p className="text-sm text-gray-400">Call us immediately if you suspect fraud or a stolen device.</p>
               </CardContent>
             </Card>
          </div>

          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="bg-navy rounded-2xl border border-white/10 p-2">
            {filteredFaqs.length > 0 ? filteredFaqs.map((faq, i) => (
              <div key={i} className="p-4 border-b border-white/10 last:border-0 hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-white">{faq.q}</h4>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
                <p className="text-sm text-gray-400">{faq.a}</p>
              </div>
            )) : (
              <div className="p-8 text-center text-gray-400">No results found for &quot;{searchQuery}&quot;</div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-center">
         <div className="max-w-2xl mx-auto px-4">
           <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
           <p className="text-gray-400 mb-6">Our team is available 24/7 to assist you with any payment issues in India.</p>
           <a href="mailto:support@getbplus.com" className="text-gold font-bold hover:underline">support@getbplus.com</a>
         </div>
      </section>
    </div>
  )
}