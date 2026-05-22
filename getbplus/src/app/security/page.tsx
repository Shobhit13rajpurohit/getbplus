import { ShieldCheck, Lock, CreditCard, Server, Fingerprint, EyeOff, FileCheck } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

export const metadata = {
  title: 'Security | GetB+',
  description: 'Your money is safe. Your data is safe. Here is exactly why.'
}

export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="pt-24 pb-16 bg-navy text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-navy border border-gold rounded-full flex items-center justify-center">
              <Lock size={32} className="text-gold" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Your money is safe.<br/>Your data is safe.<br/><span className="text-gold">Here&apos;s exactly why.</span></h1>
        </div>
      </section>

      {/* COMPLIANCE BADGES */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 items-center text-gray-800 text-lg font-bold">
          <div className="flex items-center gap-2"><ShieldCheck className="text-blue-600"/> PCI-DSS Certified</div>
          <div className="flex items-center gap-2"><FileCheck className="text-green-600"/> RBI Compliant</div>
          <div className="flex items-center gap-2"><Lock className="text-gray-700"/> Visa & Mastercard Tokenized</div>
          <div className="flex items-center gap-2"><Server className="text-orange-500"/> AWS India Hosted</div>
        </div>
      </section>

      {/* DATA PROTECTION */}
      <section className="py-24 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Your card number never reaches our servers.</h2>
            <p className="text-gray-300 text-lg">We use PCI-DSS tokenization. When you link your card, it is encrypted directly by Visa or Mastercard. We receive a &quot;token&quot; — a random string of numbers that works only for GetB+.</p>
            <p className="text-gray-300 text-lg">If our systems were ever compromised, hackers would find nothing of value. Your actual card details are safely locked in your bank&apos;s vault.</p>
          </div>
          <div className="bg-navy p-8 rounded-2xl border border-white/5 flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 w-full">
               <CreditCard size={32} className="text-gray-400"/>
               <div className="h-0.5 bg-gray-600 flex-1 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-400 rotate-45"></div></div>
               <div className="bg-gray-800 px-4 py-2 rounded text-xs text-gray-300">Visa / Mastercard Vault</div>
            </div>
            <div className="flex items-center gap-4 w-full justify-end">
               <div className="bg-navy-light border border-gold px-4 py-2 rounded text-xs text-gold">Secure Token</div>
               <div className="h-0.5 bg-gold flex-1 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gold rotate-45"></div></div>
               <div className="font-bold text-white">GetB+ App</div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How we protect you</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-navy-dark border-white/10">
              <CardHeader>
                <Fingerprint size={32} className="text-gold mb-4" />
                <CardTitle>Biometric Required</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Every transaction requires FaceID or TouchID. Even if your phone is stolen and unlocked, they cannot make a payment without your biometrics.</p>
              </CardContent>
            </Card>
            <Card className="bg-navy-dark border-white/10">
              <CardHeader>
                <ShieldCheck size={32} className="text-gold mb-4" />
                <CardTitle>Zero-Liability Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">If you spot an unauthorized transaction and report it within 24 hours, you pay nothing. We investigate and refund you immediately.</p>
              </CardContent>
            </Card>
            <Card className="bg-navy-dark border-white/10">
              <CardHeader>
                <EyeOff size={32} className="text-gold mb-4" />
                <CardTitle>Data Privacy (DPDP)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">We comply with India&apos;s strict DPDP Act and GDPR. We do not sell your data. We do not track you for ads. Data is stored securely in Mumbai, India.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}