import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-hub-bg border-t border-gray-200 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-gold flex items-center gap-2">
              GetB<span className="text-hub-text">+</span>
            </Link>
            <p className="text-gray-600">
              Bridging the gap between global payment cards and India&apos;s QR economy.
            </p>
            <div className="flex items-center gap-2 text-gold">
              <ShieldCheck size={20} />
              <span className="font-medium text-hub-text">Enterprise-grade Security</span>
            </div>
          </div>

          {/* Product Col */}
          <div>
            <h4 className="text-hub-text font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link href="/how-it-works" className="text-gray-600 hover:text-hub-text transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-hub-text transition-colors">Pricing & Fees</Link></li>
              <li><Link href="/security" className="text-gray-600 hover:text-hub-text transition-colors">Security</Link></li>
              <li><Link href="/for-travelers" className="text-gray-600 hover:text-hub-text transition-colors">For Travelers</Link></li>
              <li><Link href="/for-nris" className="text-gray-600 hover:text-hub-text transition-colors">For NRIs</Link></li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="text-hub-text font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-hub-text transition-colors">About Us</Link></li>
              <li><Link href="/partner" className="text-gray-600 hover:text-hub-text transition-colors">Partner With Us</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-hub-text transition-colors">Blog</Link></li>
              <li><Link href="/support" className="text-gray-600 hover:text-hub-text transition-colors">Help Center</Link></li>
              <li><Link href="/merchant" className="text-gray-600 hover:text-hub-text transition-colors">For Merchants</Link></li>
            </ul>
          </div>

          {/* Legal Col */}
          <div>
            <h4 className="text-hub-text font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-gray-600 hover:text-hub-text transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-hub-text transition-colors">Terms of Service</Link></li>
              <li><Link href="/refunds" className="text-gray-600 hover:text-hub-text transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 text-center md:text-left text-gray-500 text-xs space-y-2 md:space-y-0 md:flex justify-between items-center">
          <p>© {currentYear} Adeshilps E-XP & TravelWithU Private Limited.</p>
          <p>CIN: U74999DL2026PTC000000</p>
        </div>
      </div>
    </footer>
  )
}