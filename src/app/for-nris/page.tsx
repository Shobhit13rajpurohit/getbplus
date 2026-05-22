import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Globe, Users, Heart, Star } from 'lucide-react'

export const metadata = {
  title: 'For NRIs | GetB+',
  description: 'Finally — use your US, UK, or UAE card at every UPI QR in India.'
}

export default function ForNRIsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-24 pb-16 bg-navy text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Globe className="mx-auto text-gold mb-6" size={48} />
          <h1 className="text-5xl font-bold mb-6">You know India.<br/>Your card doesn&apos;t. <span className="text-gold">Yet.</span></h1>
          <p className="text-xl text-gray-300 mb-8">Finally — use your US, UK, or UAE card at every UPI QR in India.</p>
          <Button size="lg">Download GetB+</Button>
        </div>
      </section>

      <section className="py-24 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Built for the Diaspora</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-navy border-white/10 text-left">
              <CardContent className="pt-6">
                <Users className="text-gold mb-4" />
                <h3 className="font-semibold mb-2">No Family Favors</h3>
                <p className="text-sm text-gray-400">Tired of borrowing cash from family? Pay your own way everywhere.</p>
              </CardContent>
            </Card>
            <Card className="bg-navy border-white/10 text-left">
              <CardContent className="pt-6">
                <Heart className="text-gold mb-4" />
                <h3 className="font-semibold mb-2">Split Bills Easily</h3>
                <p className="text-sm text-gray-400">Coming soon: Split bills with family. Transfer money to Indian contacts seamlessly.</p>
              </CardContent>
            </Card>
            <Card className="bg-navy border-white/10 text-left">
              <CardContent className="pt-6">
                <Star className="text-gold mb-4" />
                <h3 className="font-semibold mb-2">Keep Your Rewards</h3>
                <p className="text-sm text-gray-400">Your Air India miles, HSBC points, Amex rewards — keep earning them while in India.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Trusted globally</h2>
          <p className="text-gray-400 mb-8">Used by Indians residing in USA · UK · UAE · Canada · Singapore · Australia</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline">US App Store</Button>
            <Button variant="outline">UK App Store</Button>
            <Button variant="outline">UAE App Store</Button>
          </div>
        </div>
      </section>
    </div>
  )
}