import Link from "next/link"
import FXCalculator from "@/components/FXCalculator"
import { Button } from "@/components/ui/Button"
import * as motion from "framer-motion/client"
import { Card, CardContent } from "@/components/ui/Card"
import { 
  ShieldCheck, 
  Star,
  Bot,
  Car,
  Briefcase,
  QrCode,
  Plane
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-hub-bg to-desk min-h-[90vh] flex items-center">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-hub-text">
                Your Card. <span className="text-gold block mt-2">India&apos;s UPI QR.</span>
              </h1>
              
              <p className="text-xl text-gray-600 md:pr-12 leading-relaxed">
                GetB+ turns your Visa, Mastercard, or Amex into a complete India travel toolkit — UPI payments at 350M+ merchants, AI travel assistant, airport transport, and luggage storage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/early-access" className="w-full sm:w-auto"><Button size="lg" className="w-full text-lg rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">Join Early Access</Button></Link>
                <Link href="#explore" className="inline-flex items-center justify-center h-14 px-8 py-2 text-lg font-medium text-gray-600 hover:text-hub-text border border-gray-300 hover:border-gray-500 bg-white/50 rounded-full transition-all">
                  Explore Features →
                </Link>
              </div>
              
              {/* Trust Bar row directly in hero or below */}
              <div className="flex flex-wrap gap-x-6 gap-y-4 items-center pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2 opacity-70">
                  <span className="text-sm font-medium">Works with:</span>
                  <div className="flex gap-2">
                    <div className="w-10 h-6 bg-gray-200 text-gray-700 rounded flex items-center justify-center text-[10px] font-bold">VISA</div>
                    <div className="w-10 h-6 bg-gray-200 text-gray-700 rounded flex items-center justify-center text-[10px] font-bold">MC</div>
                    <div className="w-10 h-6 bg-gray-200 text-gray-700 rounded flex items-center justify-center text-[10px] font-bold">AMEX</div>
                  </div>
                </div>
                <div className="w-px h-6 bg-gray-300 hidden md:block"></div>
                
                <div className="flex items-center gap-1.5 opacity-80 text-teal-400">
                  <Bot size={18} />
                  <span className="text-sm font-medium">AI-Powered</span>
                </div>
                <div className="w-px h-6 bg-gray-300 hidden md:block"></div>
                <div className="flex items-center gap-1.5 opacity-80 text-green-400">
                  <Plane size={18} />
                  <span className="text-sm font-medium">3 Major Airports</span>
                </div>
              </div>
            </div>

            {/* Hero Visual - Split Animation Simulation */}
            <div className="relative mx-auto w-full max-w-[320px] aspect-[1/2] mt-10 md:mt-0">
              {/* Phone Frame */}
              <div className="absolute inset-0 border-[8px] border-gray-800 rounded-[2.5rem] bg-white shadow-2xl overflow-hidden z-20">
                {/* Top Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl z-30"></div>
                
                {/* Screen content area with cross-fade animation setup */}
                <div className="relative w-full h-full">
                  {/* Screen 1: Payment Success */}
                  <div className="absolute inset-0 bg-green-500/10 flex flex-col items-center justify-center p-6 animate-fade-in-out">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6">
                      <CheckCircleIcon className="text-white w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">₹450 Paid</h3>
                    <p className="text-green-400 font-medium">To: Sharma Chaiwala</p>
                    <div className="mt-12 bg-white/5 w-full p-4 rounded-xl border border-white/10">
                      <div className="flex justify-between text-sm text-gray-300 mb-2">
                        <span>Card charged</span>
                        <span>$5.42 USD</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Zero forex markup</span>
                        <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Screen 2: AI Chat */}
                  <div className="absolute inset-0 bg-white flex flex-col p-4 pt-10 animate-fade-in-out-delayed opacity-0">
                    <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                      <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center"><Bot size={16} className="text-white"/></div>
                      <div>
                        <div className="text-sm font-bold text-gray-800">GetB+ AI</div>
                        <div className="text-[10px] text-teal-400">Travel Expert</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 flex-1">
                      <div className="self-end bg-gray-100 ml-8 p-3 rounded-2xl rounded-tr-sm text-sm text-gray-800">
                        Was my ₹350 auto fare from CP to India Gate fair?
                      </div>
                      <div className="self-start bg-teal-50 border border-teal-100 mr-8 p-3 rounded-2xl rounded-tl-sm text-sm text-gray-700">
                        That&apos;s tourist pricing. Metered fare is ₹80-130. You overpaid by ~₹220. Tip: insist on meter next time.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Glow behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold/30 blur-[60px] rounded-full z-10"></div>
            </div>
          </div>
        </div>
        
        {/* Custom Animation Styles */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fade-in-out {
            0%, 45% { opacity: 1; visibility: visible; }
            50%, 95% { opacity: 0; visibility: hidden; }
            100% { opacity: 1; visibility: visible; }
          }
          @keyframes fade-in-out-delayed {
            0%, 45% { opacity: 0; visibility: hidden; }
            50%, 95% { opacity: 1; visibility: visible; }
            100% { opacity: 0; visibility: hidden; }
          }
          .animate-fade-in-out {
            animation: fade-in-out 8s infinite;
          }
          .animate-fade-in-out-delayed {
            animation: fade-in-out-delayed 8s infinite;
          }
        `}} />
      </section>

      {/* NEW SECTION: Platform Features Grid */}

      {/* NEW SECTION: Problem -> Solution */}
      <section className="py-24 bg-desk relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hub-text mb-4">The Old Way vs. The GetB+ Way</h2>
            <p className="text-xl text-gray-600">Stop worrying about cash, start enjoying your trip.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl border-t-4 border-t-red-400"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-500 text-sm">✕</span>
                Without GetB+
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3"><span className="text-red-400">→</span> High forex markup on every ATM withdrawal.</li>
                <li className="flex gap-3"><span className="text-red-400">→</span> Getting rejected because "QR only, no cash".</li>
                <li className="flex gap-3"><span className="text-red-400">→</span> Overpaying for transport because you don't know the local rates.</li>
                <li className="flex gap-3"><span className="text-red-400">→</span> Constantly searching for safe luggage storage.</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 rounded-3xl border-t-4 border-t-green-400"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-500 text-sm">✓</span>
                With GetB+
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3"><span className="text-green-500">→</span> Pay seamlessly at 350M+ UPI QRs with your home card.</li>
                <li className="flex gap-3"><span className="text-green-500">→</span> Zero bank account setup required. Just link and scan.</li>
                <li className="flex gap-3"><span className="text-green-500">→</span> AI Assistant verifies fair prices and protects against scams.</li>
                <li className="flex gap-3"><span className="text-green-500">→</span> Pre-book trusted airport transport and luggage storage.</li>
              </ul>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <FXCalculator />
          </motion.div>

        </div>
      </section>
      <section id="explore" className="py-24 bg-hub-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hub-text mb-4">Everything You Need in India</h2>
            <p className="text-xl text-gray-600">One app replacing your wallet, guidebook, and travel agent.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <motion.div whileHover={{ y: -5 }} className="glass-card p-8 rounded-3xl relative group">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 text-gold group-hover:scale-110 transition-transform shadow-sm">
                <QrCode size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Pay at Any UPI QR</h3>
              <p className="text-gray-600 text-sm mb-6 flex-1">Your foreign card works at 350M+ merchants. No bank needed.</p>
              <Link href="/how-it-works" className="text-gold text-sm font-semibold group-hover:underline">How It Works →</Link>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div whileHover={{ y: -5 }} className="glass-card p-8 rounded-3xl relative group">
              <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6 text-teal-400 group-hover:scale-110 transition-transform">
                <Bot size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">AI Travel Expert</h3>
              <p className="text-gray-600 text-sm mb-6 flex-1">Fair fares, scam alerts, safety tips. Ask anything about India.</p>
              <Link href="/ai-assistant" className="text-teal-400 text-sm font-semibold group-hover:underline">Try AI Assistant →</Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div whileHover={{ y: -5 }} className="glass-card p-8 rounded-3xl relative group">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
                <Car size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Airport Transport</h3>
              <p className="text-gray-600 text-sm mb-6 flex-1">Fixed fare cabs from Delhi, Mumbai, Bengaluru airports.</p>
              <Link href="/transport" className="text-green-400 text-sm font-semibold group-hover:underline">See Fares →</Link>
            </motion.div>

            {/* Card 4 */}
            <motion.div whileHover={{ y: -5 }} className="glass-card p-8 rounded-3xl relative group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Luggage Storage</h3>
              <p className="text-gray-600 text-sm mb-6 flex-1">Store bags at verified locations. Explore hands-free.</p>
              <Link href="/baggage" className="text-amber-500 text-sm font-semibold group-hover:underline">Find Locations →</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: AI Feature Spotlight */}
      <section className="py-24 bg-white w-full border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side: AI Chat Demo Snippet */}
            <div className="glass-panel p-6 rounded-3xl relative">
              <div className="absolute -top-3 -left-3 bg-teal-500/20 border border-teal-500/30 text-teal-300 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 backdrop-blur-md">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse"></span>
                Live AI Assistant
              </div>
              
              <div className="space-y-4 mt-4">
                <div className="self-end bg-gray-100 ml-8 p-4 rounded-2xl rounded-tr-sm text-sm text-gray-800">
                  Is it safe to walk around Paharganj market at night?
                </div>
                <div className="self-start bg-teal-50 border border-teal-100 mr-8 p-4 rounded-2xl rounded-tl-sm text-sm text-gray-700">
                  <p className="mb-2">Paharganj main bazaar is generally fine until 10 PM — well-lit, lots of activity.</p>
                  <p className="text-amber-400 text-xs font-medium flex gap-1 items-center bg-amber-500/10 p-2 rounded mt-2">
                    <span className="text-amber-500">⚠</span> Known scam: men offering &apos;free chai&apos; to bring you to their shop. Politely decline.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: Copy */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full border-l-4 border-gold bg-gold/10 text-gold italic font-medium">
                &quot;The only payment app that tells you when you&apos;re being overcharged.&quot;
              </div>
              <h2 className="text-4xl font-bold text-gold">Ask. Know. Travel Smarter.</h2>
              <p className="text-lg text-gray-700">
                GetB+ AI knows India better than any guidebook. 5,000+ verified facts. Updated weekly. Your personal travel expert.
              </p>
              <p className="text-gray-500">
                It knows the fair auto fare from every Indian airport, the scam patterns at every tourist market, and whether your last bill was tourist-priced. No other payment app gives you this.
              </p>
              <div className="pt-4">
                <Link href="/ai-assistant" className="inline-flex items-center text-gold font-bold text-lg hover:underline group">
                  Try AI Assistant — Free <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Airport Hubs */}
      <section className="py-20 bg-hub-bg border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-hub-text mb-8">GetB+ is at your airport. Look for us when you land.</h3>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <Link href="/delhi" className="glass-card hover:border-gold/50 rounded-full px-6 py-3 flex items-center gap-3">
              <Plane className="text-gold" size={20} />
              <span className="text-gray-800 font-medium">Delhi IGI</span>
            </Link>
            <Link href="/mumbai" className="glass-card hover:border-gold/50 rounded-full px-6 py-3 flex items-center gap-3">
              <Plane className="text-gold" size={20} />
              <span className="text-gray-800 font-medium">Mumbai CSIA</span>
            </Link>
            <Link href="/bengaluru" className="glass-card hover:border-gold/50 rounded-full px-6 py-3 flex items-center gap-3">
              <Plane className="text-gold" size={20} />
              <span className="text-gray-800 font-medium">Bengaluru KIAL</span>
            </Link>
          </div>
          
          <p className="text-gray-500">Visit our activation desk at international arrivals for personal setup help.</p>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS (Updated) */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-hub-text">Trusted by global travelers.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Sarah L.", loc: "🇬🇧 UK Tourist", quote: "I was dreading the cash exchange process. Downloaded this in London, and paid my taxi from Delhi airport immediately." },
              { name: "Michael T.", loc: "🇺🇸 US Business Traveler", quote: "Finally. I used to have my colleagues pay for my coffee because they only took QR. Now my Amex works everywhere." },
              { name: "James T.", loc: "🇦🇺 Australia", quote: "GetB+ AI told me I was paying double for autos in Jaipur. Saved me hundreds over 5 days." },
              { name: "Fatima Al-S.", loc: "🇦🇪 UAE", quote: "Pre-booked my cab from IGI before the flight. Driver was waiting. Never had to worry about the taxi scam everyone warns about." }
            ].map((t, i) => (
              <Card key={i} className="glass-card flex flex-col">
                <CardContent className="pt-6 flex-1 flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} size={14} className="text-gold fill-gold" />)}
                  </div>
                  <p className="italic text-gray-600 mb-6 text-sm flex-1">&quot;{t.quote}&quot;</p>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.loc}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: SECURITY STRIP */}
      <section className="bg-gray-50 py-4 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs font-medium text-gray-600 flex flex-wrap justify-center gap-x-8 gap-y-2">
          <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-gold"/> Bank-grade encryption</span>
          <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-gold"/> PCI-DSS Certified</span>
          <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-gold"/> AI data never sold or shared</span>
          <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-gold"/> DPDP Act compliant</span>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-32 bg-gradient-to-t from-hub-bg to-white text-center relative overflow-hidden border-t border-gray-200">
        <div className="absolute inset-0 bg-gold/5"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-8">
          <h2 className="text-5xl font-bold text-hub-text">India is waiting. Your card is ready. Are you?</h2>
          <p className="text-xl text-gray-600">Join thousands of travelers who no longer carry cash in India. Set up in 3 minutes. Pay everywhere.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="/early-access"><Button size="lg" className="w-full sm:w-auto text-lg rounded-full px-12 shadow-lg hover:shadow-xl transition-shadow">Join Early Access</Button></Link>
          </div>
          <div className="pt-6">
            <Link href="/merchant" className="text-gold text-sm font-medium hover:underline">
              For Merchants? Register Your Business →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function CheckCircleIcon({className}: {className?: string}) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
}
