import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, Plane, MapPin, Store, Car, Bot, ShieldAlert, Briefcase } from 'lucide-react'

export const metadata = {
  title: 'Pay in Mumbai with Foreign Card | GetB+ India — Airport to Market',
  description: 'International tourists: pay at Mumbai markets, Colaba, and taxis with your Visa or Mastercard. GetB+ at CSIA Terminal 2.'
}

export default function MumbaiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=2000")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
            Arriving in Mumbai? <br/>
            <span className="text-gold">GetB+ Has You Covered from Terminal to Town.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Pay at any shop or market, get AI travel guidance, book your airport cab, and store luggage — all in one app.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-lg rounded-full px-8 py-6">Download GetB+ — Free</Button>
            <div className="text-gray-300 font-medium px-6 py-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm flex items-center gap-2">
              <Plane size={18} className="text-gold" /> Find our activation desk at CSIA T2 International Arrivals
            </div>
          </div>
        </div>
      </section>

      {/* 2. GETB+ AT AIRPORT */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">We&apos;re at Mumbai CSIA When You Land.</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gold/10 p-3 rounded-full">
                  <Plane className="text-gold w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy">GetB+ Kiosk</h3>
                  <p className="text-gray-500">CSIA Terminal 2</p>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <MapPin className="text-gray-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Location:</strong> International Arrivals Hall, Near Baggage Claim</span>
                </li>
                <li className="flex items-start gap-3">
                  <Store className="text-gray-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Hours:</strong> 05:00 – 01:00 IST</span>
                </li>
                <li className="flex items-start gap-3">
                  <Bot className="text-gray-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Languages:</strong> English, Arabic, Hindi</span>
                </li>
              </ul>
              <div className="bg-navy/5 p-4 rounded-xl border border-navy/10 text-navy font-medium">
                Our team helps you set up GetB+ before you exit the terminal. Just bring your foreign card.
              </div>
            </div>
            <div className="bg-gray-200 rounded-2xl h-full min-h-[400px] relative overflow-hidden flex flex-col items-center justify-center">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
              <MapPin className="text-gold w-16 h-16 drop-shadow-xl z-10" />
              <div className="bg-white px-4 py-2 rounded-full font-bold shadow-md mt-2 z-10 text-navy">CSIA Terminal 2 map view</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CITY PAYMENT GUIDE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Where You&apos;ll Use GetB+ in Mumbai</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Colaba Causeway", "Bandra Cafes", "Marine Drive",
              "Gateway of India", "Dharavi Tours", "CST Station Area",
              "Kaali-Peeli Taxis", "Juhu Beach stalls"
            ].map((loc, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-6 bg-gray-50 flex flex-col items-center text-center group hover:border-gold/50 transition-colors">
                <Store className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-navy mb-2">{loc}</h4>
                <div className="flex items-center gap-1 text-xs text-green-600 font-medium mt-auto">
                  <CheckCircle2 size={12} /> GetB+ works here
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRANSPORT */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
            <Car className="text-green-400 w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-10">Book Your Airport Cab Before You Land</h2>
          <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden text-left max-w-3xl mx-auto mb-8">
            <div className="grid grid-cols-3 border-b border-white/10 p-4 font-bold text-gray-400 text-sm uppercase tracking-wider bg-black/20">
              <div>Route</div>
              <div>Fare</div>
              <div></div>
            </div>
            <div className="grid grid-cols-3 border-b border-white/5 p-4 items-center hover:bg-white/5 transition-colors">
              <div className="font-medium text-white">CSIA T2 → Bandra</div>
              <div className="font-bold text-green-400">₹420</div>
              <div className="text-right"><Button variant="default" size="sm" className="bg-white text-navy hover:bg-gray-200">Book</Button></div>
            </div>
            <div className="grid grid-cols-3 border-b border-white/5 p-4 items-center hover:bg-white/5 transition-colors">
              <div className="font-medium text-white">CSIA T2 → Colaba</div>
              <div className="font-bold text-green-400">₹650</div>
              <div className="text-right"><Button variant="default" size="sm" className="bg-white text-navy hover:bg-gray-200">Book</Button></div>
            </div>
            <div className="grid grid-cols-3 border-b border-white/5 p-4 items-center hover:bg-white/5 transition-colors">
              <div className="font-medium text-white">CSIA T2 → Andheri</div>
              <div className="font-bold text-green-400">₹300</div>
              <div className="text-right"><Button variant="default" size="sm" className="bg-white text-navy hover:bg-gray-200">Book</Button></div>
            </div>
          </div>
          <Link href="/transport" className="text-gold font-medium hover:underline inline-flex items-center">
            See All Mumbai Routes →
          </Link>
        </div>
      </section>

      {/* 5. AI TIPS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy mb-16">Ask GetB+ AI About Mumbai</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <Bot className="text-teal-500 w-8 h-8 flex-shrink-0" />
              <div className="text-gray-700 italic font-medium">&quot;What&apos;s a fair taxi fare from Colaba to Bandra?&quot;</div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <Bot className="text-teal-500 w-8 h-8 flex-shrink-0" />
              <div className="text-gray-700 italic font-medium">&quot;Are Dharavi tours respectful to locals?&quot;</div>
            </div>
          </div>
          <div className="text-center">
            <Button className="bg-teal-600 hover:bg-teal-700 rounded-full px-8">Get Answers in the App → Download GetB+</Button>
          </div>
        </div>
      </section>

      {/* 6. LUGGAGE */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
            <Briefcase className="text-amber-600 w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-navy mb-6">Store Your Bags in Mumbai</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Coverage zones include Colaba, Bandra, Juhu, and CSIA Airport zone.
          </p>
          <div className="text-amber-600 font-bold text-xl mb-8">From ₹60 / bag / day</div>
          <Link href="/baggage" className="inline-flex items-center justify-center h-12 px-8 font-medium text-white bg-navy hover:bg-navy-dark rounded-full transition-all">
            Find Storage Locations → Download GetB+
          </Link>
        </div>
      </section>

      {/* 7. SAFETY */}
      <section className="py-24 bg-gold relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Stay Safe in Mumbai — AI-Powered Alerts</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {["CSIA taxi tout scam", "Colaba \"art gallery\" scam", "Overpriced dhow rides"].map((scam, i) => (
              <div key={i} className="bg-white/90 backdrop-blur border border-white p-6 rounded-2xl shadow-sm text-center flex flex-col items-center">
                <ShieldAlert className="text-red-500 w-8 h-8 mb-4" />
                <h4 className="font-semibold text-navy leading-tight">{scam}</h4>
              </div>
            ))}
          </div>
          <p className="text-center text-navy font-bold text-lg">GetB+ AI sends automatic alerts when you&apos;re near known scam areas.</p>
        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <section className="py-24 bg-navy-dark text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-bold text-white">Ready for Mumbai? Set Up GetB+ Before Your Flight.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto text-lg rounded-full px-8 bg-gold text-navy hover:bg-gold/90">Download for iOS</Button>
            <Button size="lg" className="w-full sm:w-auto text-lg rounded-full px-8 bg-gold text-navy hover:bg-gold/90">Download for Android</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
