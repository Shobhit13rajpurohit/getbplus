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
import MobilePaymentAnimation from "@/components/MobilePaymentAnimation"

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
              <div className="absolute inset-0 border-[8px] border-gray-800 rounded-[2.5rem] bg-gray-900 shadow-2xl overflow-hidden z-20">
                {/* Top Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl z-30"></div>
                
                {/* Screen content area with dynamic animation */}
                <div className="relative w-full h-full">
                  <MobilePaymentAnimation />
                </div>
              </div>
              
              {/* Background Glow behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold/30 blur-[60px] rounded-full z-10"></div>
            </div>
          </div>
        </div>
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
      <section id="explore" className="py-32 bg-hub-bg relative overflow-hidden">
        {/* Subtle background animated gradient blobs to add human/organic feel */}
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"
        ></motion.div>
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-0 w-[500px] h-[500px] bg-teal-400/5 rounded-full blur-[120px] pointer-events-none"
        ></motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-hub-text mb-6 tracking-tight">Everything You Need in India</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              We&apos;ve curated the essential services to make your journey through India seamless, replacing your wallet, guidebook, and travel agent with one intelligent platform.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Card 1 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-[2rem] relative group bg-white/70 hover:bg-white transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative mb-8 mt-2 h-16 w-16">
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gold/10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] group-hover:scale-110 transition-transform duration-500"
                ></motion.div>
                <div className="absolute inset-0 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-500">
                  <QrCode size={28} strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Pay at Any<br/>UPI QR</h3>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed font-medium">Your foreign card works instantly at 350M+ merchants. Experience the freedom of cashless travel without setting up a local bank account.</p>
              
              <div className="mt-auto">
                <Link href="/how-it-works" className="inline-flex items-center gap-2 text-gold text-sm font-bold group-hover:gap-3 transition-all">
                  How It Works <span className="text-lg leading-none">→</span>
                </Link>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-[2rem] relative group bg-white/70 hover:bg-white transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative mb-8 mt-2 h-16 w-16">
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute inset-0 bg-teal-400/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] group-hover:scale-110 transition-transform duration-500"
                ></motion.div>
                <div className="absolute inset-0 flex items-center justify-center text-teal-500 group-hover:scale-110 transition-transform duration-500">
                  <Bot size={28} strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">AI Travel<br/>Expert</h3>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed font-medium">Always get the local price. Our AI verifies fair fares, provides scam alerts, and shares cultural nuances. Ask anything about India.</p>
              
              <div className="mt-auto">
                <Link href="/ai-assistant" className="inline-flex items-center gap-2 text-teal-500 text-sm font-bold group-hover:gap-3 transition-all">
                  Try AI Assistant <span className="text-lg leading-none">→</span>
                </Link>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-[2rem] relative group bg-white/70 hover:bg-white transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative mb-8 mt-2 h-16 w-16">
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute inset-0 bg-green-500/10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] group-hover:scale-110 transition-transform duration-500"
                ></motion.div>
                <div className="absolute inset-0 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform duration-500">
                  <Car size={28} strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Airport<br/>Transport</h3>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed font-medium">Skip the chaotic taxi stands. Enjoy transparent, fixed-fare cabs directly from Delhi, Mumbai, and Bengaluru airports.</p>
              
              <div className="mt-auto">
                <Link href="/transport" className="inline-flex items-center gap-2 text-green-500 text-sm font-bold group-hover:gap-3 transition-all">
                  See Fares <span className="text-lg leading-none">→</span>
                </Link>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-[2rem] relative group bg-white/70 hover:bg-white transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative mb-8 mt-2 h-16 w-16">
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute inset-0 bg-amber-500/10 rounded-[50%_50%_20%_80%/25%_80%_20%_75%] group-hover:scale-110 transition-transform duration-500"
                ></motion.div>
                <div className="absolute inset-0 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform duration-500">
                  <Briefcase size={28} strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Luggage<br/>Storage</h3>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed font-medium">Maximize your final day. Securely store your bags at verified locations across major cities and explore completely hands-free.</p>
              
              <div className="mt-auto">
                <Link href="/baggage" className="inline-flex items-center gap-2 text-amber-500 text-sm font-bold group-hover:gap-3 transition-all">
                  Find Locations <span className="text-lg leading-none">→</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
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
          <h2 className="text-4xl font-bold text-center mb-16 text-hub-text">Early feedback from our beta users.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Early Access Tester", loc: "🇬🇧 UK to India", quote: "The concept is exactly what I need. Trying to get an Indian bank account just to use UPI was impossible on my tourist visa. Can't wait for the full launch." },
              { name: "Beta Waitlist Member", loc: "🇺🇸 US Business Traveler", quote: "I travel to Mumbai twice a year. Having a way to link my corporate Amex to pay local street vendors via QR will change everything." },
              { name: "NRI Visitor", loc: "🇦🇺 Australia", quote: "The AI feature sounds amazing. Knowing fair auto fares upfront would have saved me so much hassle on my last trip to Jaipur." },
              { name: "International Traveler", loc: "🇦🇪 UAE", quote: "Being able to sort out airport transfers and payments before even landing at Delhi IGI is exactly the peace of mind I'm looking for." }
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
