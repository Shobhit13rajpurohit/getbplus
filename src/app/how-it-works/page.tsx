import { Button } from '@/components/ui/Button'
import { Zap, QrCode, CreditCard, Lock, MapPin, ChevronDown } from 'lucide-react'

export const metadata = {
  title: 'How It Works | GetB+',
  description: 'Three steps. Ninety seconds. Then you can pay anywhere in India.'
}

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="pt-24 pb-16 bg-navy text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Three steps. Ninety seconds.<br/><span className="text-gold">Then you can pay anywhere.</span></h1>
          <p className="text-xl text-gray-300">We do the complex banking infrastructure in the background so you can just scan and pay.</p>
        </div>
      </section>

      {/* STEP 1 */}
      <section className="py-24 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 flex justify-center">
             <div className="w-72 h-[500px] bg-navy border-4 border-gray-800 rounded-[3rem] p-6 shadow-2xl relative flex flex-col items-center justify-center">
               <CreditCard size={80} className="text-blue-400 mb-8" />
               <div className="w-full h-12 bg-gray-800 rounded-lg mb-4"></div>
               <div className="w-full h-12 bg-gray-800 rounded-lg"></div>
             </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="text-gold text-6xl font-black">1</div>
            <h2 className="text-3xl font-bold">Link your existing card</h2>
            <p className="text-gray-300 text-lg">Download the app and securely add your Visa, Mastercard, or American Express card.</p>
            <div className="bg-navy p-6 rounded-xl border border-white/10 mt-8">
              <div className="flex items-center gap-3 mb-2">
                <Lock className="text-green-400" />
                <h4 className="font-semibold">Bank-Grade Tokenization</h4>
              </div>
              <p className="text-sm text-gray-400">Your card number never touches our servers. It is tokenized directly with Visa/Mastercard (PCI-DSS compliant) for absolute security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 2 */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="text-gold text-6xl font-black">2</div>
            <h2 className="text-3xl font-bold">Get your Indian Payment ID</h2>
            <p className="text-gray-300 text-lg">We instantly provision a virtual UPI ID linked to your card. Think of it as your temporary Indian payment address.</p>
            <ul className="space-y-4 text-gray-400 mt-8">
              <li className="flex items-center gap-3"><Zap className="text-gold" size={20}/> Instant verification via passport/visa</li>
              <li className="flex items-center gap-3"><Zap className="text-gold" size={20}/> No local bank account needed</li>
              <li className="flex items-center gap-3"><Zap className="text-gold" size={20}/> Regulated by RBI guidelines</li>
            </ul>
          </div>
          <div className="flex justify-center">
             <div className="w-72 h-[500px] bg-navy border-4 border-gray-800 rounded-[3rem] p-6 shadow-2xl relative flex flex-col items-center justify-center">
               <div className="text-2xl font-bold text-center mb-2">Your UPI ID</div>
               <div className="text-gold text-lg bg-white/5 px-4 py-2 rounded-lg font-mono">user@getbplus</div>
               <Zap className="text-gold mt-12 animate-pulse" size={64} />
             </div>
          </div>
        </div>
      </section>

      {/* STEP 3 */}
      <section className="py-24 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 flex justify-center">
             <div className="w-72 h-[500px] bg-navy border-4 border-gray-800 rounded-[3rem] shadow-2xl relative flex flex-col items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
                 <div className="w-48 h-48 border-2 border-gold rounded-xl flex items-center justify-center">
                   <QrCode size={64} className="text-white opacity-50" />
                 </div>
               </div>
             </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="text-gold text-6xl font-black">3</div>
            <h2 className="text-3xl font-bold">Scan & Pay Anywhere</h2>
            <p className="text-gray-300 text-lg">Just point your camera at any UPI QR code in the country. The merchant receives rupees instantly. Your card is charged in your home currency.</p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-2 text-sm text-gray-400"><MapPin size={16} className="text-gold"/> Street Food</div>
              <div className="flex items-center gap-2 text-sm text-gray-400"><MapPin size={16} className="text-gold"/> Auto Rickshaws</div>
              <div className="flex items-center gap-2 text-sm text-gray-400"><MapPin size={16} className="text-gold"/> Restaurants</div>
              <div className="flex items-center gap-2 text-sm text-gray-400"><MapPin size={16} className="text-gold"/> Shopping Malls</div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORTED CARDS & TECH */}
      <section className="py-24 bg-navy text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Built on National Infrastructure</h2>
          <p className="text-gray-400 mb-12">GetB+ partners with top Indian banks and the National Payments Corporation of India (NPCI) to bring you seamless access to the 350M+ merchant network.</p>
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="text-xl font-bold text-gray-500">VISA</div>
            <div className="text-xl font-bold text-gray-500">MASTERCARD</div>
            <div className="text-xl font-bold text-gray-500">AMEX</div>
          </div>

          <div className="bg-navy-light p-8 rounded-2xl text-left">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><ChevronDown /> Frequently Asked Questions</h3>
            <div className="space-y-4">
              {[
                {q: "Do I need an Indian phone number?", a: "No, you can register and use GetB+ with your international phone number."},
                {q: "Are there any limits on transactions?", a: "Yes, to comply with RBI regulations for international tourists, there are daily and monthly transaction limits. These are visible in the app."},
                {q: "What if a merchant says 'No cards'?", a: "GetB+ doesn't use standard card networks at the merchant terminal. We use UPI. If they have a QR code, they can accept your payment. They don't even know you're using a card."}
              ].map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-4">
                  <div className="font-semibold mb-2">{faq.q}</div>
                  <div className="text-sm text-gray-400">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gold text-navy text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to set up?</h2>
          <p className="text-xl mb-8 text-navy/80">Takes under 3 minutes. Do it now before your flight.</p>
          <Button size="lg" className="bg-navy text-white hover:bg-navy-light">Download the App</Button>
        </div>
      </section>
    </div>
  )
}