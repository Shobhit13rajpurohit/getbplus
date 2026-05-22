import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Bot, ShieldAlert, BadgeInfo, PlaneTakeoff, Info, Coffee, Navigation, MapPin, RefreshCcw, Star, Car } from 'lucide-react'

export const metadata = {
  title: 'AI Travel Assistant | GetB+',
  description: 'Powered by real India travel data — scam alerts, fair prices, safe routes. Built into every GetB+ payment.'
}

export default function AIAssistantPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-navy overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
                Pay. Ask. <span className="text-teal-400 block mt-2">Travel India with Confidence.</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed md:pr-10">
                GetB+ AI knows fair fares, safe areas, and scam patterns across India. Your personal travel expert — free with every GetB+ account.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="w-full sm:w-auto text-lg rounded-full px-8 py-6">Download Free — iOS & Android</Button>
                <Link href="#demo" className="inline-flex items-center justify-center h-14 px-8 py-2 text-lg font-medium text-white hover:text-gold border border-white/20 hover:border-gold/50 rounded-full transition-all">
                  See How AI Works ↓
                </Link>
              </div>
            </div>

            {/* Right: Animated Phone Mockup */}
            <div className="relative mx-auto w-full max-w-[320px] aspect-[1/2] mt-10 md:mt-0">
              <div className="absolute inset-0 border-[8px] border-gray-800 rounded-[2.5rem] bg-navy-dark shadow-2xl overflow-hidden z-20 flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl z-30"></div>
                <div className="flex items-center gap-3 p-4 pt-10 border-b border-white/10 bg-navy">
                  <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center"><Bot size={16} className="text-white"/></div>
                  <div>
                    <div className="text-sm font-bold text-white">GetB+ AI</div>
                    <div className="text-[10px] text-teal-400">Travel Expert</div>
                  </div>
                </div>

                <div className="flex-1 p-4 bg-navy flex flex-col gap-4 overflow-hidden relative">
                  {/* CSS Animated Conversation Loop */}
                  <div className="absolute inset-0 p-4 flex flex-col gap-4 animate-chat-1">
                    <div className="self-end bg-white/10 p-3 rounded-2xl rounded-tr-sm text-sm text-white w-4/5">
                      Was my ₹350 auto fare from CP to India Gate fair?
                    </div>
                    <div className="self-start bg-teal-900/30 border border-teal-500/20 p-3 rounded-2xl rounded-tl-sm text-sm text-gray-200 w-5/6">
                      That&apos;s tourist pricing. Metered fare is ₹80-130. Overpaid by ~₹220. Tip: insist on meter next time.
                    </div>
                  </div>

                  <div className="absolute inset-0 p-4 flex flex-col gap-4 opacity-0 animate-chat-2">
                    <div className="self-end bg-white/10 p-3 rounded-2xl rounded-tr-sm text-sm text-white w-4/5">
                      Is Paharganj safe at night?
                    </div>
                    <div className="self-start bg-teal-900/30 border border-teal-500/20 p-3 rounded-2xl rounded-tl-sm text-sm text-gray-200 w-5/6">
                      Main bazaar ok until 10PM. Avoid side lanes. Known scam: men offering free chai. Decline politely.
                    </div>
                  </div>

                  <div className="absolute inset-0 p-4 flex flex-col gap-4 opacity-0 animate-chat-3">
                    <div className="self-end bg-white/10 p-3 rounded-2xl rounded-tr-sm text-sm text-white w-4/5">
                      Best way from Mumbai airport to Bandra?
                    </div>
                    <div className="self-start bg-teal-900/30 border border-teal-500/20 p-3 rounded-2xl rounded-tl-sm text-sm text-gray-200 w-5/6">
                      Pre-paid taxi at T2 Exit: ₹450 flat. Ola/Uber: ₹380-520 with surge. GetB+ transport: ₹420 fixed, pre-booked.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes chatLoop1 {
            0%, 25% { opacity: 1; visibility: visible; z-index: 10; }
            30%, 100% { opacity: 0; visibility: hidden; z-index: 0; }
          }
          @keyframes chatLoop2 {
            0%, 25% { opacity: 0; visibility: hidden; z-index: 0; }
            33%, 58% { opacity: 1; visibility: visible; z-index: 10; }
            63%, 100% { opacity: 0; visibility: hidden; z-index: 0; }
          }
          @keyframes chatLoop3 {
            0%, 58% { opacity: 0; visibility: hidden; z-index: 0; }
            66%, 91% { opacity: 1; visibility: visible; z-index: 10; }
            96%, 100% { opacity: 0; visibility: hidden; z-index: 0; }
          }
          .animate-chat-1 { animation: chatLoop1 15s infinite; }
          .animate-chat-2 { animation: chatLoop2 15s infinite; }
          .animate-chat-3 { animation: chatLoop3 15s infinite; }
        `}} />
      </section>

      {/* 2. LIVE DEMO SECTION */}
      <section id="demo" className="py-24 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-16">Ask Anything About India</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-navy border-l-4 border-l-gold rounded-r-2xl p-6 shadow-lg border-y border-r border-white/5">
              <div className="mb-2 text-gold text-xs font-bold uppercase tracking-wider">Price Check</div>
              <div className="space-y-4">
                <div className="bg-gray-800 p-3 rounded-2xl rounded-tr-sm text-sm text-white ml-6">
                  &quot;Was my ₹350 auto fare from CP to India Gate fair?&quot;
                </div>
                <div className="bg-teal-900/30 border border-teal-500/20 p-3 rounded-2xl rounded-tl-sm text-sm text-gray-200 mr-6">
                  That&apos;s tourist pricing. Metered fare: ₹80-130. Overpaid by ~₹220. Tip: insist on meter next time.
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-navy border-l-4 border-l-gold rounded-r-2xl p-6 shadow-lg border-y border-r border-white/5">
              <div className="mb-2 text-gold text-xs font-bold uppercase tracking-wider">Safety Advice</div>
              <div className="space-y-4">
                <div className="bg-gray-800 p-3 rounded-2xl rounded-tr-sm text-sm text-white ml-6">
                  &quot;Is Paharganj safe at night?&quot;
                </div>
                <div className="bg-teal-900/30 border border-teal-500/20 p-3 rounded-2xl rounded-tl-sm text-sm text-gray-200 mr-6">
                  Main bazaar ok until 10PM. Avoid side lanes. Known scam: men offering free chai. Decline politely.
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-navy border-l-4 border-l-gold rounded-r-2xl p-6 shadow-lg border-y border-r border-white/5">
              <div className="mb-2 text-gold text-xs font-bold uppercase tracking-wider">Transport Info</div>
              <div className="space-y-4">
                <div className="bg-gray-800 p-3 rounded-2xl rounded-tr-sm text-sm text-white ml-6">
                  &quot;Best way from Mumbai airport to Bandra?&quot;
                </div>
                <div className="bg-teal-900/30 border border-teal-500/20 p-3 rounded-2xl rounded-tl-sm text-sm text-gray-200 mr-6">
                  Pre-paid taxi at T2 Exit: ₹450 flat. Ola/Uber: ₹380-520 with surge. GetB+ transport: ₹420 fixed, pre-booked.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW THE AI KNOWS INDIA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-navy mb-8">Built on Real India Travel Data</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Our AI uses government-verified auto fare tables, curated scam pattern databases, and real GetB+ transaction data — not internet guesswork.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mb-6">
                <BadgeInfo className="text-navy w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Official fare tables</h3>
              <p className="text-gray-500">Government rates for auto-rickshaws and taxis.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-navy w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">5,000+ verified facts</h3>
              <p className="text-gray-500">Database of safe zones, cultural norms, and pricing.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mb-6">
                <RefreshCcw className="text-navy w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Updated weekly</h3>
              <p className="text-gray-500">New scams and price inflations added as they emerge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SCAM ALERT FEATURE */}
      <section className="py-24 bg-gold relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/20 rounded-full blur-[80px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-navy">Walking Into a Tourist Trap? GetB+ Knows.</h2>
              <p className="text-xl text-navy/80">
                Enable Safety Alerts in app settings. GetB+ silently monitors known tourist trap zones and alerts you before you walk in.
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/40">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-full mt-1">
                    <ShieldAlert className="text-red-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Safety Alert — Paharganj area</h4>
                    <p className="text-sm text-gray-600 mt-1">Common scam pattern reported nearby. Tap for details.</p>
                    <div className="text-xs text-gray-400 mt-2">Just now • GetB+ AI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT AI CAN HELP WITH */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center mb-16">Your AI Can Help With...</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Auto & taxi fares", icon: Car },
              { title: "Restaurant price checks", icon: Coffee },
              { title: "Safe areas by city", icon: ShieldAlert },
              { title: "Emergency contacts", icon: Info },
              { title: "Scam pattern alerts", icon: ShieldAlert },
              { title: "Currency tips", icon: BadgeInfo },
              { title: "Cultural etiquette", icon: Info },
              { title: "Transport options", icon: PlaneTakeoff },
              { title: "Attraction entry prices", icon: Navigation }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:bg-gold/5 transition-colors border border-gray-100">
                <item.icon className="w-8 h-8 text-gold mb-4" />
                <h4 className="font-semibold text-navy">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HONESTY SECTION */}
      <section className="py-20 bg-gray-100 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-navy mb-6">What Our AI Cannot Do</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                <span className="text-gray-600">Cannot give real-time traffic or live Ola/Uber pricing.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                <span className="text-gray-600">Cannot guarantee prices — always verify locally.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                <span className="text-gray-600">Not a substitute for emergency services (Call 100 or 1800-111-363).</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                <span className="text-gray-600">Not available offline (requires internet connection).</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL */}
      <section className="py-24 bg-navy-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-gold text-6xl font-serif mb-6">&quot;</div>
          <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
            I asked GetB+ AI if my ₹800 surge Uber from Bandra was normal. It showed me the typical ₹450-600 range and suggested InDrive. Saved me ₹200 on the spot.
          </p>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1,2,3,4,5].map(star => <Star key={star} size={16} className="text-gold fill-gold" />)}
          </div>
          <div className="text-gray-400 font-medium">Marcus H., UK · Business Traveler</div>
        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <section className="py-24 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-bold text-white">AI Included Free. In Every GetB+ Account.</h2>
          <p className="text-xl text-gray-300">
            No subscription. No extra setup. Download the app, link your card. AI Assistant activates automatically.
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
