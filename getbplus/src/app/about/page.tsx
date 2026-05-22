import { Card, CardContent } from '@/components/ui/Card'
import { Globe, Users, Shield } from 'lucide-react'

export const metadata = {
  title: 'About Us | GetB+',
  description: 'We are building the financial infrastructure that makes India accessible — one QR code at a time.'
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-24 pb-16 bg-navy text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Making India accessible.<br/><span className="text-gold">One QR code at a time.</span></h1>
          <p className="text-xl text-gray-300">We are building the cross-border financial infrastructure for the world&apos;s fastest-growing economy.</p>
        </div>
      </section>

      <section className="py-24 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-navy border border-white/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-gold">The Story</h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>GetB+ was born out of frustration. Our founder, Aadesh S Jain, spent 23 years in international trade traveling across Asia. After experiencing the seamless QR payment ecosystem in Thailand and contrasting it with the broken experience for foreigners in India, the gap became obvious.</p>
              <p>India has the most advanced payment infrastructure in the world — the UPI network processes billions of transactions. Yet, for an international traveler, paying for a simple cup of tea was impossible without local cash.</p>
              <p>We built GetB+ to bridge this gap. We partner directly with regulated Indian banks to tokenize your international card and give you a virtual UPI identity. No Indian bank account. No cash. Just tap and pay.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">The Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {name: 'Aadesh S Jain', role: 'CEO & Founder', bio: '23 years in international trade and cross-border finance.'},
              {name: 'Ruchi Jain', role: 'CFO', bio: 'Expert in financial compliance and regulatory frameworks.'},
              {name: 'Vikas Jain', role: 'COO', bio: 'Scaling operations and banking partnerships.'},
              {name: 'Akshay Jain', role: 'Global Expansion', bio: 'Driving international user acquisition and growth.'},
              {name: 'Shilpi Jain', role: 'Chairperson', bio: 'Strategic direction and corporate governance.'}
            ].map((member, i) => (
              <Card key={i} className="bg-navy-dark border-white/10">
                <CardContent className="pt-6 text-center">
                  <div className="w-24 h-24 bg-navy-light rounded-full mx-auto mb-4 border-2 border-gold flex items-center justify-center text-gold font-bold text-2xl">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <div className="text-gold text-sm font-semibold mb-3">{member.role}</div>
                  <p className="text-sm text-gray-400">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-dark">
         <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-12">Company Details</h2>
           <div className="grid md:grid-cols-3 gap-8 text-left">
             <div>
               <Globe className="text-gray-500 mb-2" />
               <h4 className="font-semibold text-white">Registered Entity</h4>
               <p className="text-sm text-gray-400">Adeshilps E-XP & TravelWithU Private Limited</p>
             </div>
             <div>
               <Shield className="text-gray-500 mb-2" />
               <h4 className="font-semibold text-white">Regulation</h4>
               <p className="text-sm text-gray-400">Operating under RBI frameworks in partnership with licensed AD-1 banks.</p>
             </div>
             <div>
               <Users className="text-gray-500 mb-2" />
               <h4 className="font-semibold text-white">Contact</h4>
               <p className="text-sm text-gray-400">hello@getbplus.com</p>
             </div>
           </div>
         </div>
      </section>
    </div>
  )
}