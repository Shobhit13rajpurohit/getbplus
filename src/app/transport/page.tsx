'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, Car, XCircle, MapPin, Search, CalendarCheck, ShieldCheck } from 'lucide-react'

export default function TransportPage() {
  const [activeTab, setActiveTab] = useState('delhi')
  const [scrollProgress, setScrollProgress] = useState(0)

  // Scroll effect for progress line
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('steps-container')
      if (element) {
        const rect = element.getBoundingClientRect()
        const windowHeight = window.innerHeight
        // Calculate how far the element is from the middle of the screen
        const progress = Math.min(1, Math.max(0, 1 - (rect.top - windowHeight / 4) / (rect.height + windowHeight / 2)))
        setScrollProgress(progress * 100)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
                Airport to Hotel. <span className="text-green-400 block mt-2">Fixed Fare. Zero Surprises.</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed md:pr-10">
                Pre-book a verified cab before you land. Your driver is confirmed, fare is locked, no negotiation at the terminal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="w-full sm:w-auto text-lg rounded-full px-8 py-6">Book Airport Pickup</Button>
                <button onClick={() => {
                  document.getElementById('fares')?.scrollIntoView({ behavior: 'smooth' })
                }} className="inline-flex items-center justify-center h-14 px-8 py-2 text-lg font-medium text-white hover:text-gold border border-white/20 hover:border-gold/50 rounded-full transition-all">
                  See Fares ↓
                </button>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative mx-auto w-full max-w-[320px] aspect-[1/2] mt-10 md:mt-0">
              <div className="absolute inset-0 border-[8px] border-gray-800 rounded-[2.5rem] bg-gray-50 shadow-2xl overflow-hidden z-20 flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl z-30"></div>
                {/* Status Bar */}
                <div className="h-14 bg-green-600 text-white flex items-end justify-center pb-3 shadow-sm relative z-20">
                  <span className="font-bold">Driver Confirmed</span>
                </div>
                {/* Map Area Simulation */}
                <div className="h-48 bg-gray-200 relative">
                  {/* Route Line (SVG) */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M20,80 Q50,50 80,20" fill="none" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                  </svg>
                  {/* Markers */}
                  <div className="absolute bottom-4 left-4 flex flex-col items-center">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-xs border-2 border-white z-10"><MapPin size={12}/></div>
                    <div className="text-[10px] font-bold bg-white px-1 mt-1 rounded shadow">IGI T3</div>
                  </div>
                  <div className="absolute top-4 right-4 flex flex-col items-center">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs border-2 border-white z-10"><CheckCircle2 size={12}/></div>
                    <div className="text-[10px] font-bold bg-white px-1 mt-1 rounded shadow">Hotel</div>
                  </div>
                </div>
                {/* Details */}
                <div className="flex-1 bg-white p-5 rounded-t-3xl -mt-6 relative z-20 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border border-gray-200">
                      <Image src="https://ui-avatars.com/api/?name=Rakesh+K&background=random" alt="Driver" width={48} height={48} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-navy">Rakesh K.</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1"><span className="text-gold">★ 4.9</span> · Swift Dzire</div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-xl border border-green-100 flex justify-between items-center">
                    <div>
                      <div className="text-[10px] text-green-700 font-bold uppercase tracking-wider">Fixed Fare</div>
                      <div className="font-bold text-xl text-green-800">₹400</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-gray-500 uppercase">Est. Time</div>
                      <div className="font-bold text-sm text-gray-700">30 Min</div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <button className="flex-1 bg-gray-100 text-gray-600 font-bold py-3 rounded-xl text-sm">Call</button>
                    <button className="flex-1 bg-black text-white font-bold py-3 rounded-xl text-sm">Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes dash {
            to { stroke-dashoffset: -100; }
          }
        `}} />
      </section>

      {/* 2. THE PROBLEM */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy mb-16">The Airport Arrival Experience</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Without GetB+ */}
            <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <XCircle size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-navy">Without GetB+</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3"><span className="text-red-500 mt-1">✗</span> <span className="text-gray-600">Unmetered auto charging ₹600 for a ₹200 route</span></li>
                  <li className="flex gap-3"><span className="text-red-500 mt-1">✗</span> <span className="text-gray-600">No receipt, no driver tracking, cash only</span></li>
                  <li className="flex gap-3"><span className="text-red-500 mt-1">✗</span> <span className="text-gray-600">Driver refuses card, insists on ATM stop</span></li>
                  <li className="flex gap-3"><span className="text-red-500 mt-1">✗</span> <span className="text-gray-600">30-minute negotiation at 2 AM while jetlagged</span></li>
                </ul>
              </div>
            </div>

            {/* With GetB+ */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-green-500 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-navy">With GetB+</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3"><span className="text-green-500 mt-1">✓</span> <span className="text-gray-800 font-medium">Fixed ₹380 fare locked before you even land</span></li>
                  <li className="flex gap-3"><span className="text-green-500 mt-1">✓</span> <span className="text-gray-800 font-medium">Driver name and vehicle confirmed on your phone</span></li>
                  <li className="flex gap-3"><span className="text-green-500 mt-1">✓</span> <span className="text-gray-800 font-medium">Auto-charged to your card. No cash needed.</span></li>
                  <li className="flex gap-3"><span className="text-green-500 mt-1">✓</span> <span className="text-gray-800 font-medium">Skip the touts. Walk straight to your confirmed ride.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-24 bg-white" id="steps-container">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy mb-20">How Booking Works</h2>

          <div className="relative">
            {/* Progress Line Background */}
            <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-1 bg-gray-200 z-0"></div>
            {/* Progress Line Fill */}
            <div className="hidden md:block absolute top-6 left-[12%] h-1 bg-gold z-0 transition-all duration-300" style={{ width: `${scrollProgress * 0.76}%` }}></div>

            <div className="grid md:grid-cols-4 gap-12 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-gold/30">1</div>
                <Search className="w-8 h-8 text-navy mb-4" />
                <h4 className="font-bold text-navy mb-2">Open GetB+</h4>
                <p className="text-sm text-gray-500">Open the app before landing or on airport Wi-Fi.</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-gold/30">2</div>
                <MapPin className="w-8 h-8 text-navy mb-4" />
                <h4 className="font-bold text-navy mb-2">Pick Route</h4>
                <p className="text-sm text-gray-500">Select your city and destination from pre-set zones.</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-gold/30">3</div>
                <Car className="w-8 h-8 text-navy mb-4" />
                <h4 className="font-bold text-navy mb-2">Choose Vehicle</h4>
                <p className="text-sm text-gray-500">Select Sedan or SUV. Enter flight details so we track delays.</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-gold/30">4</div>
                <CalendarCheck className="w-8 h-8 text-navy mb-4" />
                <h4 className="font-bold text-navy mb-2">Confirm & Relax</h4>
                <p className="text-sm text-gray-500">Driver confirmed immediately. Meet at designated exit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FARE TABLES */}
      <section id="fares" className="py-24 bg-navy-dark">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Fixed Airport Fares</h2>

          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('delhi')}
                className={`flex-1 py-4 text-center font-bold transition-colors ${activeTab === 'delhi' ? 'bg-gold/10 text-gold border-b-2 border-gold' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                Delhi IGI
              </button>
              <button
                onClick={() => setActiveTab('mumbai')}
                className={`flex-1 py-4 text-center font-bold transition-colors ${activeTab === 'mumbai' ? 'bg-gold/10 text-gold border-b-2 border-gold' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                Mumbai CSIA
              </button>
              <button
                onClick={() => setActiveTab('bengaluru')}
                className={`flex-1 py-4 text-center font-bold transition-colors ${activeTab === 'bengaluru' ? 'bg-gold/10 text-gold border-b-2 border-gold' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                Bengaluru KIAL
              </button>
            </div>

            {/* Table Content */}
            <div className="p-0 sm:p-6 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-gray-500 font-semibold text-sm">Route</th>
                    <th className="py-4 px-4 text-gray-500 font-semibold text-sm">Vehicle Type</th>
                    <th className="py-4 px-4 text-gray-500 font-semibold text-sm">Fixed Fare</th>
                    <th className="py-4 px-4 text-gray-500 font-semibold text-sm">Est. Time</th>
                    <th className="py-4 px-4 text-gray-500 font-semibold text-sm"></th>
                  </tr>
                </thead>
                <tbody>
                  {activeTab === 'delhi' && [
                    { route: "IGI T3 → Connaught Place", type: "Sedan", fare: "₹400", time: "30 min" },
                    { route: "IGI T3 → Aerocity Hotels", type: "Sedan", fare: "₹200", time: "12 min" },
                    { route: "IGI T3 → South Delhi", type: "Sedan", fare: "₹550", time: "45 min" },
                    { route: "IGI T3 → Gurgaon", type: "SUV", fare: "₹850", time: "50 min" },
                    { route: "IGI T3 → Noida", type: "Sedan", fare: "₹700", time: "55 min" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gold/5 transition-colors group">
                      <td className="py-4 px-4 font-medium text-navy">{row.route}</td>
                      <td className="py-4 px-4 text-gray-600">{row.type}</td>
                      <td className="py-4 px-4 font-bold text-green-700">{row.fare}</td>
                      <td className="py-4 px-4 text-gray-500 text-sm">{row.time}</td>
                      <td className="py-4 px-4 text-right">
                        <button className="bg-navy hover:bg-gold hover:text-navy text-white text-xs font-bold px-4 py-2 rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 sm:opacity-100">
                          Book
                        </button>
                      </td>
                    </tr>
                  ))}

                  {activeTab === 'mumbai' && [
                    { route: "CSIA T2 → Bandra", type: "Sedan", fare: "₹420", time: "40 min" },
                    { route: "CSIA T2 → Colaba", type: "Sedan", fare: "₹650", time: "55 min" },
                    { route: "CSIA T2 → Andheri", type: "Sedan", fare: "₹300", time: "25 min" },
                    { route: "CSIA T2 → Juhu", type: "Sedan", fare: "₹380", time: "30 min" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gold/5 transition-colors group">
                      <td className="py-4 px-4 font-medium text-navy">{row.route}</td>
                      <td className="py-4 px-4 text-gray-600">{row.type}</td>
                      <td className="py-4 px-4 font-bold text-green-700">{row.fare}</td>
                      <td className="py-4 px-4 text-gray-500 text-sm">{row.time}</td>
                      <td className="py-4 px-4 text-right">
                        <button className="bg-navy hover:bg-gold hover:text-navy text-white text-xs font-bold px-4 py-2 rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 sm:opacity-100">
                          Book
                        </button>
                      </td>
                    </tr>
                  ))}

                  {activeTab === 'bengaluru' && [
                    { route: "KIAL → MG Road", type: "Sedan", fare: "₹750", time: "50 min" },
                    { route: "KIAL → Indiranagar", type: "Sedan", fare: "₹700", time: "45 min" },
                    { route: "KIAL → Whitefield", type: "SUV", fare: "₹600", time: "35 min" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gold/5 transition-colors group">
                      <td className="py-4 px-4 font-medium text-navy">{row.route}</td>
                      <td className="py-4 px-4 text-gray-600">{row.type}</td>
                      <td className="py-4 px-4 font-bold text-green-700">{row.fare}</td>
                      <td className="py-4 px-4 text-gray-500 text-sm">{row.time}</td>
                      <td className="py-4 px-4 text-right">
                        <button className="bg-navy hover:bg-gold hover:text-navy text-white text-xs font-bold px-4 py-2 rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 sm:opacity-100">
                          Book
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 p-4 text-center text-sm text-gray-500 border-t border-gray-200">
              Fares are inclusive of all taxes and tolls. Zero surge pricing.
            </div>
          </div>
        </div>
      </section>

      {/* 5. DRIVER TRUST & CANCELLATION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 items-stretch">

            {/* Driver Trust (Takes up 3 columns) */}
            <div className="md:col-span-3 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="text-navy w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-6">Every driver on GetB+ is verified.</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Government-issued ID verified and background checked.</span>
                </div>
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Vehicle license and commercial insurance checked.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Zero-surge fixed pricing guaranteed by platform.</span>
                </div>
              </div>
            </div>

            {/* Cancellation Box (Takes up 2 columns) */}
            <div className="md:col-span-2 bg-green-50 p-8 rounded-2xl border-2 border-green-200 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-green-800 mb-4">Worry-Free Cancellation</h3>
              <p className="text-green-700 mb-6">
                Cancel up to 2 hours before pickup for a 100% full refund. No questions asked.
              </p>
              <div className="bg-white/60 p-4 rounded-xl text-sm text-green-800 font-medium">
                <strong>Flight delayed?</strong> No charge. We track your flight number and adjust pickup time automatically.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What if my driver doesn't arrive?", a: "We monitor all pickups. If a driver cancels or is late, our system immediately reassigns a new driver. If we fail to provide a ride, you get a 100% refund plus ₹500 app credit." },
              { q: "Can I book for multiple passengers/bags?", a: "Yes. Choose 'Sedan' for up to 3 people and 2 large bags. Choose 'SUV' for up to 5 people and 4 large bags." },
              { q: "Do drivers speak English?", a: "Most of our airport drivers speak basic English, but all communication (including exact drop-off coordinates) happens through the GetB+ app, so verbal negotiation is never needed." },
              { q: "What payment method does the driver accept?", a: "None. The fare is pre-paid through your GetB+ app using your linked foreign card. Do not pay the driver cash." },
              { q: "Can I add a child seat?", a: "Child seats are not a legal requirement in India and are not standard in commercial vehicles. If required, we recommend bringing a portable travel seat." },
              { q: "What if my flight is delayed?", a: "We track the flight number you provide during booking. If it's delayed, the driver waits for your actual arrival time at no extra charge." }
            ].map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl bg-white overflow-hidden">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-navy hover:bg-gray-50 transition-colors">
                  <span className="pr-4">{faq.q}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="text-gray-600 p-5 pt-0 bg-white">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="py-24 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-bold text-white">Available at Delhi · Mumbai · Bengaluru</h2>
          <p className="text-xl text-gray-300">
            More airports coming soon. Pre-book your guaranteed ride today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto text-lg rounded-full px-8">Download for iOS</Button>
            <Button size="lg" className="w-full sm:w-auto text-lg rounded-full px-8">Download for Android</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
