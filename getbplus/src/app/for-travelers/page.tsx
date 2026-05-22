import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Plane, CreditCard, XCircle, ShieldAlert, BadgeIndianRupee } from 'lucide-react'

export const metadata = {
  title: 'For International Travelers in India | GetB+',
  description: 'Visiting India? Leave the cash worries behind. Pay at any market, restaurant, or auto-rickshaw with your existing foreign card.'
}

export default function ForTravelersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-24 pb-16 bg-navy text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Plane className="mx-auto text-gold mb-6" size={48} />
          <h1 className="text-5xl font-bold mb-6">Visiting India?<br/><span className="text-gold">Leave the cash worries behind.</span></h1>
          <p className="text-xl text-gray-300 mb-8">Pay at any market, restaurant, or auto-rickshaw with your existing card.</p>
          <Button size="lg">Download GetB+ Free</Button>
        </div>
      </section>

      <section className="py-24 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">We know the feeling.</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-navy border-red-500/20">
              <CardContent className="pt-6">
                <XCircle className="text-red-400 mb-4" />
                <h3 className="font-semibold mb-2">Card Declined</h3>
                <p className="text-sm text-gray-400">Your international card doesn&apos;t work at the local terminal.</p>
              </CardContent>
            </Card>
            <Card className="bg-navy border-red-500/20">
              <CardContent className="pt-6">
                <BadgeIndianRupee className="text-red-400 mb-4" />
                <h3 className="font-semibold mb-2">No Cash</h3>
                <p className="text-sm text-gray-400">The auto driver says &quot;no card, only QR or cash.&quot;</p>
              </CardContent>
            </Card>
            <Card className="bg-navy border-red-500/20">
              <CardContent className="pt-6">
                <ShieldAlert className="text-red-400 mb-4" />
                <h3 className="font-semibold mb-2">ATM Fees</h3>
                <p className="text-sm text-gray-400">Losing 5% on withdrawal fees and terrible exchange rates.</p>
              </CardContent>
            </Card>
            <Card className="bg-navy border-red-500/20">
              <CardContent className="pt-6">
                <CreditCard className="text-red-400 mb-4" />
                <h3 className="font-semibold mb-2">Exchange Lines</h3>
                <p className="text-sm text-gray-400">Wasting vacation time standing in line at a sketchy exchange desk.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Works in every city.</h2>
          <p className="text-gray-300 mb-8">Delhi · Mumbai · Jaipur · Goa · Varanasi · Bengaluru — and everywhere in between.</p>
          <div className="bg-navy-light p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-gold mb-4">Airport Activation</h3>
            <p className="text-gray-300">Get started before your flight lands. Set up in 3 minutes at home. Arrive ready to pay.</p>
          </div>
        </div>
      </section>
    </div>
  )
}