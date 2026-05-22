'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Building2, PlaneTakeoff, ShoppingBag, Briefcase } from 'lucide-react'

export default function PartnerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-24 pb-16 bg-navy text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Join India&apos;s cross-border<br/><span className="text-gold">traveler infrastructure.</span></h1>
          <p className="text-xl text-gray-300 mb-8">We help your international guests pay, and bring you more of them.</p>
        </div>
      </section>

      <section className="py-24 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-navy border-white/10">
              <CardHeader>
                <Building2 className="text-gold mb-2" />
                <CardTitle className="text-lg">Hotels & Hospitality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">Your guests can now pay in any hotel shop, restaurant, or spa with their foreign card.</p>
              </CardContent>
            </Card>
            <Card className="bg-navy border-white/10">
              <CardHeader>
                <PlaneTakeoff className="text-gold mb-2" />
                <CardTitle className="text-lg">Airports & Airlines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">First-point activation for every arriving international traveler.</p>
              </CardContent>
            </Card>
            <Card className="bg-navy border-white/10">
              <CardHeader>
                <ShoppingBag className="text-gold mb-2" />
                <CardTitle className="text-lg">Merchants</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">Accept international card payments via UPI. No new POS terminal needed.</p>
              </CardContent>
            </Card>
            <Card className="bg-navy border-white/10">
              <CardHeader>
                <Briefcase className="text-gold mb-2" />
                <CardTitle className="text-lg">Travel Agencies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">Embed GetB+ into your booking flow. Earn per transaction.</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto bg-navy border border-white/10 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Become a Partner</h2>
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-green-400 text-xl font-bold mb-2">Application Received!</div>
                <p className="text-gray-400">Our partnership team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Name</label>
                    <input required className="w-full bg-navy-light border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Company</label>
                    <input required className="w-full bg-navy-light border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Partner Type</label>
                  <select className="w-full bg-navy-light border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold">
                    <option>Hotel / Hospitality</option>
                    <option>Travel Agency / OTA</option>
                    <option>Merchant / Retail</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Message (Optional)</label>
                  <textarea rows={4} className="w-full bg-navy-light border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold"></textarea>
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Submitting...' : 'Apply for Partnership'}
                </Button>
              </form>
            )}
            <p className="text-center mt-6 text-sm text-gray-500">For general inquiries: partnerships@getbplus.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}