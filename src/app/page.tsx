import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { QrCode, ScanLine, Wallet, ShieldCheck, CreditCard, Banknote, MapPin, Zap, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1: HERO */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Your Card Works Everywhere in India Now.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto md:mx-0">
              Link your Visa, Mastercard, or Amex and pay at any shop, street stall, or restaurant across India — just scan the QR code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="w-full sm:w-auto">Download the App — Free</Button>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">See How It Works →</Button>
              </Link>
            </div>
            <p className="text-sm text-gray-400">Available on App Store and Google Play · Free to download · Setup in 3 minutes</p>
          </div>
          <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative">
            {/* Minimalist Phone Mockup Placeholder */}
            <div className="w-[300px] h-[600px] bg-navy-light border-4 border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden relative flex flex-col">
              <div className="h-6 w-1/3 bg-gray-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20"></div>
              <div className="flex-1 bg-navy flex flex-col items-center justify-center p-6 space-y-6">
                <ScanLine size={64} className="text-gold animate-pulse" />
                <div className="text-2xl font-bold text-white text-center">Scan to Pay</div>
                <div className="w-full h-32 bg-gray-800/50 rounded-xl mt-8 flex items-center justify-center">
                  <span className="text-gray-400">Camera View</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST BAR */}
      <section className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 items-center text-gray-600 text-sm font-semibold">
          <div className="flex items-center gap-2"><CreditCard size={20}/> Visa</div>
          <div className="hidden md:block w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2"><CreditCard size={20}/> Mastercard</div>
          <div className="hidden md:block w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2"><CreditCard size={20}/> Amex</div>
          <div className="hidden md:block w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2"><ShieldCheck size={20} className="text-green-600"/> RBI-Compliant</div>
          <div className="hidden md:block w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2"><Banknote size={20} className="text-blue-600"/> NPCI-aligned infrastructure</div>
        </div>
      </section>

      {/* SECTION 3: PROBLEM -> SOLUTION */}
      <section className="py-24 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-red-400">India runs on QR codes. But your card doesn&apos;t work here.</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3"><XCircleIcon className="text-red-400" /> QR codes everywhere — your card, nowhere</li>
                <li className="flex gap-3"><XCircleIcon className="text-red-400" /> Cash exchange lines. Hidden fees. Safety risks.</li>
                <li className="flex gap-3"><XCircleIcon className="text-red-400" /> ATM withdrawals — 3% to 5% gone instantly</li>
                <li className="flex gap-3"><XCircleIcon className="text-red-400" /> The auto-rickshaw driver doesn&apos;t take cards. Ever.</li>
              </ul>
            </div>
            <div className="space-y-6 p-8 bg-navy rounded-2xl border border-white/5">
              <h2 className="text-3xl font-bold text-green-400">GetB+ gives your card a UPI identity. Now you can pay anywhere.</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3"><CheckCircleIcon className="text-green-400" /> One app. Scan any QR code. Done.</li>
                <li className="flex gap-3"><CheckCircleIcon className="text-green-400" /> Your actual exchange rate — shown upfront.</li>
                <li className="flex gap-3"><CheckCircleIcon className="text-green-400" /> No cash. No queues. No drama.</li>
                <li className="flex gap-3"><CheckCircleIcon className="text-green-400" /> Works at 350 million+ merchants.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-16">Three steps to anywhere in India.</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent z-0"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-navy border border-gold rounded-full flex items-center justify-center mb-6">
                <Wallet className="text-gold" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Link your card</h3>
              <p className="text-gray-400">Add your existing Visa, Mastercard, or Amex in 60 seconds.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-navy border border-gold rounded-full flex items-center justify-center mb-6">
                <Zap className="text-gold" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Get your UPI ID</h3>
              <p className="text-gray-400">We instantly provision a regulated Indian payment profile for you.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-navy border border-gold rounded-full flex items-center justify-center mb-6">
                <QrCode className="text-gold" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Scan and pay</h3>
              <p className="text-gray-400">Point your camera at any UPI QR code in the country. Payment successful.</p>
            </div>
          </div>
          <div className="mt-16">
            <Link href="/how-it-works" className="text-gold hover:text-gold-light font-medium inline-flex items-center">
              Want the full details? See exactly how GetB+ works →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURES */}
      <section className="py-24 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Everything you need. Nothing you don&apos;t.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "No Indian Bank Account", desc: "You don't need local paperwork or an Indian SIM card to get started.", icon: <ShieldCheck className="text-gold" /> },
              { title: "Zero Forex Markup", desc: "We use the mid-market rate. You just pay a transparent, flat convenience fee.", icon: <Banknote className="text-gold" /> },
              { title: "Scan Any Code", desc: "PhonePe, Google Pay, Paytm, BharatPe — our scanner reads them all.", icon: <ScanLine className="text-gold" /> },
              { title: "Bank-Grade Security", desc: "Your card details are tokenized. We never store your actual card number.", icon: <ShieldCheck className="text-gold" /> },
              { title: "Works Everywhere", desc: "From 5-star hotels in Mumbai to chai stalls in Varanasi.", icon: <MapPin className="text-gold" /> },
              { title: "24/7 Support", desc: "Something went wrong? Our English-speaking team responds in minutes.", icon: <Zap className="text-gold" /> }
            ].map((f, i) => (
              <Card key={i} className="border-l-4 border-l-gold bg-navy">
                <CardHeader>
                  <div className="mb-4">{f.icon}</div>
                  <CardTitle>{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: STATS */}
      <section className="py-24 bg-gold text-navy text-center">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-5xl font-black mb-2">350M+</div>
            <div className="font-semibold text-navy/80">Merchants in India accept UPI</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">&lt; 3 Min</div>
            <div className="font-semibold text-navy/80">Average setup time</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">0</div>
            <div className="font-semibold text-navy/80">Cash needed for your trip</div>
          </div>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Trusted by global travelers.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah L.", loc: "🇬🇧 UK Tourist", quote: "I was dreading the cash exchange process. Downloaded this in London, and paid my taxi from Delhi airport immediately." },
              { name: "Michael T.", loc: "🇺🇸 US Business Traveler", quote: "Finally. I used to have my colleagues pay for my coffee because they only took QR. Now my Amex works everywhere." },
              { name: "Priya S.", loc: "🇦🇺 NRI visiting family", quote: "Life saver. I didn't want to open an NRO account just for a 2-week trip. Connected my Aussie card and it just worked." }
            ].map((t, i) => (
              <Card key={i} className="bg-navy-dark border-white/10">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} className="text-gold fill-gold" />)}
                  </div>
                  <p className="italic text-gray-300 mb-6">&quot;{t.quote}&quot;</p>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.loc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: SECURITY STRIP */}
      <section className="bg-navy-light py-4 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm font-medium text-gray-300 flex flex-wrap justify-center gap-x-8 gap-y-2">
          <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-gold"/> Bank-grade encryption</span>
          <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-gold"/> PCI-DSS Certified</span>
          <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-gold"/> Zero-liability fraud protection</span>
          <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-gold"/> DPDP Act compliant</span>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-32 bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-8">
          <h2 className="text-5xl font-bold">India is waiting. Your card is ready. Are you?</h2>
          <p className="text-xl text-gray-300">Join thousands of travelers who no longer carry cash in India. Set up in 3 minutes. Pay everywhere.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto text-lg">Download for iOS</Button>
            <Button size="lg" className="w-full sm:w-auto text-lg">Download for Android</Button>
          </div>
          <p className="text-sm text-gray-500 mt-6">Free to download · No subscription · No hidden fees · 350M+ merchants</p>
        </div>
      </section>
    </div>
  )
}

function XCircleIcon({className}: {className?: string}) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
}

function CheckCircleIcon({className}: {className?: string}) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
}