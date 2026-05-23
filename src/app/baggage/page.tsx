import { Button } from '@/components/ui/Button'
import { Briefcase, MapPin, Smartphone, QrCode, ShieldCheck, Map, Clock, Building2, Store } from 'lucide-react'

export const metadata = {
  title: 'Baggage Storage | GetB+',
  description: 'Store your bags at verified locations near Delhi, Mumbai, and Bengaluru\'s busiest tourist zones. Safe. Affordable. Easy.'
}

export default function BaggagePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-navy overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
            Checked Out But <span className="text-amber-500">Nowhere to Go?</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Store your bags at verified locations near Delhi, Mumbai, and Bengaluru&apos;s busiest tourist zones. Safe. Affordable. Easy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-lg rounded-full px-8 py-6 bg-amber-600 hover:bg-amber-700 text-white">Find Storage Near Me</Button>
          </div>
        </div>
      </section>

      {/* 2. USE CASES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:border-amber-200 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Clock size={80} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 relative z-10">Early Arrival</h3>
              <p className="text-gray-600 relative z-10">&quot;Hotel check-in is at 3 PM, but my flight landed at 9 AM.&quot;</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:border-amber-200 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <PlaneTakeoff size={80} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 relative z-10">Late Departure</h3>
              <p className="text-gray-600 relative z-10">&quot;It&apos;s my last day in Delhi and my flight is at midnight. I want to sightsee.&quot;</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:border-amber-200 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Map size={80} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 relative z-10">Long Layover</h3>
              <p className="text-gray-600 relative z-10">&quot;I have a 10-hour layover in Mumbai. I want to explore Colaba without my luggage.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy mb-16">Drop Bags in 3 Steps</h2>
          
          <div className="grid md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-amber-600 w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">1. Find on Map</h4>
              <p className="text-gray-600">Open the app to find verified storage partners near your location.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="text-amber-600 w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">2. Book & Pay</h4>
              <p className="text-gray-600">Select number of bags and pay instantly via GetB+.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <QrCode className="text-amber-600 w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">3. Drop & Pick Up</h4>
              <p className="text-gray-600">Show your secure QR code to drop off. Show it again to pick up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COVERAGE MAP (Simulated Embed) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
            <div className="p-6 border-b border-gray-100 bg-white flex flex-col sm:flex-row justify-between items-center gap-4">
              <h3 className="text-2xl font-bold text-navy">Storage Locations</h3>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">Delhi</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">Mumbai</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">Bengaluru</span>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="w-full h-[500px] bg-[#e5e3df] relative">
              <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
              
              {/* Dummy Pins */}
              <div className="absolute top-[30%] left-[40%] flex flex-col items-center group cursor-pointer">
                <div className="bg-amber-600 text-white font-bold text-xs px-2 py-1 rounded shadow-lg mb-1 group-hover:scale-110 transition-transform">Connaught Place</div>
                <div className="w-4 h-4 bg-amber-600 border-2 border-white rounded-full shadow-md"></div>
              </div>
              <div className="absolute top-[45%] left-[60%] flex flex-col items-center group cursor-pointer">
                <div className="bg-amber-600 text-white font-bold text-xs px-2 py-1 rounded shadow-lg mb-1 group-hover:scale-110 transition-transform">Aerocity</div>
                <div className="w-4 h-4 bg-amber-600 border-2 border-white rounded-full shadow-md"></div>
              </div>
              <div className="absolute top-[60%] left-[35%] flex flex-col items-center group cursor-pointer">
                <div className="bg-amber-600 text-white font-bold text-xs px-2 py-1 rounded shadow-lg mb-1 group-hover:scale-110 transition-transform">Colaba</div>
                <div className="w-4 h-4 bg-amber-600 border-2 border-white rounded-full shadow-md"></div>
              </div>
              <div className="absolute top-[70%] left-[50%] flex flex-col items-center group cursor-pointer">
                <div className="bg-amber-600 text-white font-bold text-xs px-2 py-1 rounded shadow-lg mb-1 group-hover:scale-110 transition-transform">Bandra</div>
                <div className="w-4 h-4 bg-amber-600 border-2 border-white rounded-full shadow-md"></div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs">
                <div className="font-bold text-navy mb-1">Over 50+ locations</div>
                <div className="text-sm text-gray-600 mb-3">Find secure storage within a 10-minute walk from major transit hubs.</div>
                <Button className="w-full bg-navy text-white text-sm">Open in App</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING & INSURANCE */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Pricing Box */}
            <div className="bg-navy p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/20 rounded-bl-full pointer-events-none"></div>
              <h3 className="text-2xl font-bold text-amber-400 mb-2">Flat Daily Pricing</h3>
              <p className="text-gray-300 mb-8">Clear, no-surprises storage fees.</p>
              
              <div className="flex items-end gap-2 mb-8">
                <span className="text-5xl font-bold">₹60</span>
                <span className="text-gray-400 pb-1">/ bag / day</span>
              </div>
              
              <div className="space-y-4 pt-6 border-t border-white/10">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Left luggage at hotel</span>
                  <span className="text-gray-500 line-through">₹200/day</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-amber-400">GetB+ verified storage</span>
                  <span className="text-white">₹60/day</span>
                </div>
              </div>
            </div>

            {/* Insurance & Trust */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-amber-100 p-2 rounded-full"><ShieldCheck className="text-amber-600 w-6 h-6"/></div>
                  <h3 className="text-2xl font-bold text-navy">Fully Insured</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-14">
                  Every bag is covered up to ₹5,000 against loss or damage. No extra charge. Drop your bags with complete peace of mind.
                </p>
              </div>

              <div className="pl-14">
                <h4 className="font-bold text-navy mb-4">Partner Locations Include:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Building2 className="w-5 h-5 text-gray-400" /> Premium Hotels & Guesthouses
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Store className="w-5 h-5 text-gray-400" /> Dedicated Storage Shops
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Briefcase className="w-5 h-5 text-gray-400" /> Airport Partner Zones
                  </div>
                </div>
                <p className="text-sm text-gray-500 italic mt-4">
                  *All partners are physically vetted, require ID checks, and have 24/7 CCTV coverage.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-24 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-bold text-white">Ready to explore freely?</h2>
          <p className="text-xl text-gray-300">
            Book storage via the GetB+ app. Takes 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto text-lg rounded-full px-8 bg-amber-600 hover:bg-amber-700">Download for iOS</Button>
            <Button size="lg" className="w-full sm:w-auto text-lg rounded-full px-8 bg-amber-600 hover:bg-amber-700">Download for Android</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function PlaneTakeoff(props: React.SVGProps<SVGSVGElement> & { size?: number | string }) {
  const { size, ...rest } = props;
  return <svg {...rest} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20"/><path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12l5-5 1.5-1.5a2.83 2.83 0 1 1 4 4L17 11l-2.6 5.2a2 2 0 0 1-1.8 1.1H6.36z"/></svg>
}
