import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, TrendingUp, ShieldCheck, Coffee, ShoppingBag, Hotel, Map } from 'lucide-react'

export const metadata = {
  title: 'GetB+ Merchant Portal | Accept International Tourists',
  description: 'Indian business owners: accept payments from international tourists via your existing UPI QR code. No new POS. No new bank.'
}

export default function MerchantPortalPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">

      {/* 1. HERO */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-navy overflow-hidden">
        {/* Purple B2B accent background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4C1D95]/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
                More International Customers. <br/>
                <span className="text-gold">No New Terminal. No New Bank.</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed md:pr-10">
                Display a GetB+ QR next to your existing UPI QR. International tourists with Visa, Mastercard, or Amex can pay you directly. You receive INR in your existing account — same as any UPI payment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="w-full sm:w-auto text-lg rounded-full px-8 py-6 bg-gold text-navy hover:bg-gold/90">
                  Register Your Business — Free
                </Button>
                <Link href="#how-it-works" className="inline-flex items-center justify-center h-14 px-8 py-2 text-lg font-medium text-white hover:text-[#D8B4FE] transition-colors">
                  See How It Works ↓
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[400px]">
              {/* Dashboard Screenshot Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="bg-gray-100 p-3 border-b border-gray-200 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="text-xs text-gray-400 ml-4 font-medium flex-1 text-center pr-12">merchant.getbplus.com</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-navy text-lg">Today&apos;s Transactions</h3>
                    <div className="text-sm text-gray-500">Foreign Cards</div>
                  </div>

                  <div className="mb-8">
                    <div className="text-sm text-gray-500 mb-1">Gross Volume (INR)</div>
                    <div className="text-3xl font-bold text-navy flex items-end gap-3">
                      ₹42,500 <span className="text-sm text-green-600 flex items-center font-medium mb-1"><TrendingUp size={14} className="mr-1"/> +14%</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-[#4C1D95]/10 flex items-center justify-center text-[#4C1D95] font-bold text-xs">USA</div>
                        <div>
                          <div className="font-semibold text-sm text-navy">John D.</div>
                          <div className="text-xs text-gray-500">10:42 AM</div>
                        </div>
                      </div>
                      <div className="font-bold text-navy">₹3,400</div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-[#4C1D95]/10 flex items-center justify-center text-[#4C1D95] font-bold text-xs">UK</div>
                        <div>
                          <div className="font-semibold text-sm text-navy">Sarah L.</div>
                          <div className="text-xs text-gray-500">09:15 AM</div>
                        </div>
                      </div>
                      <div className="font-bold text-navy">₹1,250</div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-[#4C1D95]/10 flex items-center justify-center text-[#4C1D95] font-bold text-xs">AUS</div>
                        <div>
                          <div className="font-semibold text-sm text-navy">Marcus H.</div>
                          <div className="text-xs text-gray-500">08:30 AM</div>
                        </div>
                      </div>
                      <div className="font-bold text-navy">₹8,900</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHO IT IS FOR */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <Coffee className="text-blue-600 w-6 h-6" />
              </div>
              <h4 className="font-bold text-navy mb-2">Restaurants & Cafes</h4>
              <p className="text-sm text-gray-600">Tourists can tip and pay directly without hunting for an ATM.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center mb-4">
                <ShoppingBag className="text-pink-600 w-6 h-6" />
              </div>
              <h4 className="font-bold text-navy mb-2">Retail & Handicrafts</h4>
              <p className="text-sm text-gray-600">Never lose a high-value sale because their foreign card was declined.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
                <Hotel className="text-green-600 w-6 h-6" />
              </div>
              <h4 className="font-bold text-navy mb-2">Hotels & Guesthouses</h4>
              <p className="text-sm text-gray-600">Accept deposits and payments without an expensive card terminal.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-4">
                <Map className="text-orange-600 w-6 h-6" />
              </div>
              <h4 className="font-bold text-navy mb-2">Tours & Experiences</h4>
              <p className="text-sm text-gray-600">Let international guests book directly via QR code at your desk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-16">Simple Registration. Immediate Results.</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#4C1D95] flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg shadow-[#4C1D95]/30">1</div>
              <h4 className="font-bold text-navy text-xl mb-3">Register in 5 minutes</h4>
              <p className="text-gray-600">Provide your business name and mobile number. That&apos;s it.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#4C1D95] flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg shadow-[#4C1D95]/30">2</div>
              <h4 className="font-bold text-navy text-xl mb-3">Get Your QR Code</h4>
              <p className="text-gray-600">Download and display your custom GetB+ QR alongside your existing UPI standee.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#4C1D95] flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg shadow-[#4C1D95]/30">3</div>
              <h4 className="font-bold text-navy text-xl mb-3">Receive INR T+1</h4>
              <p className="text-gray-600">International tourists scan and pay. You receive funds in your existing bank account next day.</p>
            </div>
          </div>
          <div className="mt-16 bg-gray-50 border border-gray-200 py-4 px-8 inline-block rounded-full">
            <span className="font-medium text-navy">Settlement works exactly like any UPI payment — your bank, your account, no changes needed.</span>
          </div>
        </div>
      </section>

      {/* 4. SETTLEMENT EXPLAINER */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-navy mb-8">Your Money. Your Bank. Your Timeline.</h3>
          <p className="text-lg text-gray-600 mb-10">
            There is no new settlement process. GetB+ simply routes the international payment through India&apos;s UPI system — you receive INR in your existing current or savings account, the next business day.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="bg-white border border-gray-200 px-6 py-3 rounded-lg font-medium text-navy shadow-sm">T+1 Settlement</div>
            <div className="bg-white border border-gray-200 px-6 py-3 rounded-lg font-medium text-navy shadow-sm">INR Direct to Your Account</div>
            <div className="bg-white border border-gray-200 px-6 py-3 rounded-lg font-medium text-navy shadow-sm">Same as Any UPI</div>
          </div>
        </div>
      </section>

      {/* 5. VERIFIED BADGE & TESTIMONIAL */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-navy">Stand Out to International Tourists</h3>
              <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full text-gold font-bold border border-gold/30">
                <ShieldCheck size={20} />
                GetB+ Verified Merchant
              </div>
              <p className="text-lg text-gray-600">
                Premium merchants appear first when tourists browse nearby GetB+ accepted businesses in our app. <strong>83% of GetB+ users prefer verified merchants.</strong>
              </p>
            </div>

            <div className="bg-navy p-8 rounded-2xl text-white shadow-xl">
              <div className="text-gold text-5xl font-serif mb-4">&quot;</div>
              <p className="text-xl font-medium leading-relaxed mb-6">
                We added the GetB+ QR at our Jaipur textile showroom. Three French tourists paid ₹12,000 in one afternoon — completely frictionless. They would have walked out if we only took cash.
              </p>
              <div className="font-bold">— Priya Sharma</div>
              <div className="text-sm text-gray-400">Owner, Sharma Textiles, Jaipur</div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. PRICING TABLE */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy mb-16">Transparent Merchant Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Basic Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold text-navy mb-2">Basic</h3>
              <div className="text-gray-500 mb-6">Free forever</div>
              <div className="text-4xl font-bold text-navy mb-8">₹0<span className="text-lg text-gray-500 font-normal"> / month</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3"><CheckCircle2 className="text-green-500 flex-shrink-0" /> <span className="text-gray-700">Accept international payments</span></li>
                <li className="flex gap-3"><CheckCircle2 className="text-green-500 flex-shrink-0" /> <span className="text-gray-700">Basic dashboard</span></li>
                <li className="flex gap-3"><CheckCircle2 className="text-green-500 flex-shrink-0" /> <span className="text-gray-700">Weekly settlement report</span></li>
                <li className="flex gap-3"><CheckCircle2 className="text-green-500 flex-shrink-0" /> <span className="text-gray-700">Email support</span></li>
              </ul>
              <Button variant="outline" className="w-full text-navy border-navy hover:bg-navy hover:text-white">Start Free</Button>
            </div>

            {/* Premium Card */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gold shadow-xl flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 bg-gold text-navy font-bold px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">Premium</h3>
              <div className="text-gray-500 mb-6">Advanced growth tools</div>
              <div className="text-4xl font-bold text-navy mb-8">₹999<span className="text-lg text-gray-500 font-normal"> / month</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3"><CheckCircle2 className="text-gold flex-shrink-0" /> <span className="font-medium text-navy">GetB+ Verified Badge</span></li>
                <li className="flex gap-3"><CheckCircle2 className="text-gold flex-shrink-0" /> <span className="font-medium text-navy">Priority listing in tourist app</span></li>
                <li className="flex gap-3"><CheckCircle2 className="text-gold flex-shrink-0" /> <span className="text-gray-700">Advanced analytics (nationality, frequency)</span></li>
                <li className="flex gap-3"><CheckCircle2 className="text-gold flex-shrink-0" /> <span className="text-gray-700">Reply to customer reviews</span></li>
                <li className="flex gap-3"><CheckCircle2 className="text-gold flex-shrink-0" /> <span className="text-gray-700">Daily settlement reports</span></li>
                <li className="flex gap-3"><CheckCircle2 className="text-gold flex-shrink-0" /> <span className="text-gray-700">WhatsApp priority support</span></li>
              </ul>
              <Button className="w-full bg-[#4C1D95] hover:bg-[#3B1775] text-white">Upgrade to Premium</Button>
            </div>

          </div>
        </div>
      </section>

      {/* 7. REGISTRATION FORM */}
      <section className="py-24 bg-navy">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy mb-2">Register Your Business</h2>
              <p className="text-gray-500">Free forever. No credit card. No hidden setup fee.</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4C1D95] focus:border-transparent outline-none transition-shadow" placeholder="e.g. Sharma Textiles" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Mobile Number</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4C1D95] focus:border-transparent outline-none transition-shadow" placeholder="+91" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4C1D95] focus:border-transparent outline-none bg-white">
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Bengaluru</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4C1D95] focus:border-transparent outline-none bg-white">
                    <option>Restaurant / Cafe</option>
                    <option>Retail Store</option>
                    <option>Hotel / Stay</option>
                    <option>Tour / Experience</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GST Number <span className="text-gray-400 font-normal">(Optional)</span></label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4C1D95] focus:border-transparent outline-none transition-shadow" />
              </div>

              <Button type="button" className="w-full py-6 text-lg bg-[#4C1D95] hover:bg-[#3B1775] rounded-xl text-white">
                Register — We&apos;ll call you within 24 hours
              </Button>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}
