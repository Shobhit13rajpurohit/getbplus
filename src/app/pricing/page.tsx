import { Button } from '@/components/ui/Button'
import { Check, Info } from 'lucide-react'

export const metadata = {
  title: 'Pricing & Fees | GetB+',
  description: 'Transparent fees. No surprises. We believe you should know exactly what you are paying before you pay.'
}

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="pt-24 pb-16 bg-navy text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Transparent fees.<br/><span className="text-gold">No surprises. Ever.</span></h1>
          <p className="text-xl text-gray-300">We believe you should know exactly what you&apos;re paying before you pay.</p>
        </div>
      </section>

      {/* FEE TABLE */}
      <section className="py-16 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-navy rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-3 bg-white/5 p-4 font-semibold text-gray-300">
              <div>What</div>
              <div>How Much</div>
              <div>When</div>
            </div>
            <div className="divide-y divide-white/10">
              <div className="grid grid-cols-3 p-4 items-center hover:bg-white/5 transition-colors">
                <div className="font-medium">App Download</div>
                <div className="text-green-400 font-semibold flex items-center gap-2"><Check size={16}/> Free</div>
                <div className="text-sm text-gray-400">Always</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center hover:bg-white/5 transition-colors">
                <div className="font-medium">Account Setup</div>
                <div className="text-green-400 font-semibold flex items-center gap-2"><Check size={16}/> Free</div>
                <div className="text-sm text-gray-400">One-time</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center hover:bg-white/5 transition-colors">
                <div className="font-medium">Monthly Subscription</div>
                <div className="text-green-400 font-semibold flex items-center gap-2"><Check size={16}/> $0</div>
                <div className="text-sm text-gray-400">Never</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center bg-gold/5">
                <div className="font-medium text-gold flex items-center gap-2">Transaction Fee <Info size={14} className="text-gray-400"/></div>
                <div className="font-bold">2.5% + $0.30</div>
                <div className="text-sm text-gray-400">Per transaction</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center hover:bg-white/5 transition-colors">
                <div className="font-medium flex items-center gap-2">FX Rate Markup <Info size={14} className="text-gray-400"/></div>
                <div className="text-green-400 font-semibold flex items-center gap-2"><Check size={16}/> 0%</div>
                <div className="text-sm text-gray-400">We use the real mid-market rate.</div>
              </div>
            </div>
          </div>
          <p className="text-center mt-6 text-sm text-gray-400">We show you the exact total cost before you confirm any payment.</p>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">The true cost of a ₹1,000 coffee in India</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy-dark p-6 rounded-xl border border-white/5">
              <h3 className="font-semibold text-gray-400 mb-4">Cash Exchange Desk</h3>
              <div className="text-3xl font-bold mb-2">$14.50</div>
              <p className="text-sm text-gray-500 line-through mb-4">You pay hidden margins</p>
              <ul className="text-sm text-left text-gray-400 space-y-2">
                <li>• Terrible airport rates</li>
                <li>• Leftover coins</li>
                <li>• Waiting in line</li>
              </ul>
            </div>

            <div className="bg-navy-dark p-6 rounded-xl border border-gold/50 relative transform md:-translate-y-4 shadow-lg shadow-gold/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                GetB+
              </div>
              <h3 className="font-semibold text-gold mb-4">GetB+ App</h3>
              <div className="text-3xl font-bold text-white mb-2">$12.40</div>
              <p className="text-sm text-green-400 mb-4">Real exchange rate</p>
              <ul className="text-sm text-left text-gray-300 space-y-2">
                <li><Check size={14} className="inline text-green-400"/> Zero markup</li>
                <li><Check size={14} className="inline text-green-400"/> Flat transparent fee</li>
                <li><Check size={14} className="inline text-green-400"/> Instant payment</li>
              </ul>
            </div>

            <div className="bg-navy-dark p-6 rounded-xl border border-white/5">
              <h3 className="font-semibold text-gray-400 mb-4">International Card at POS</h3>
              <div className="text-3xl font-bold mb-2">$13.80</div>
              <p className="text-sm text-red-400 mb-4">Often declined anyway</p>
              <ul className="text-sm text-left text-gray-400 space-y-2">
                <li>• 3% Foreign Transaction Fee</li>
                <li>• Unknown DCC markup</li>
                <li>• Terminal might not accept it</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gold text-navy text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Stop paying for your money.</h2>
          <Button size="lg" className="bg-navy text-white hover:bg-navy-light">Get Started for Free</Button>
        </div>
      </section>
    </div>
  )
}