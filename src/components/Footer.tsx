import Link from 'next/link';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060E1A] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="text-2xl font-bold font-display tracking-tight text-white flex items-center">
              GetB<span className="text-gold">+</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Connecting global payments to India&apos;s QR economy.
            </p>
            <div className="flex gap-3">
              {/* Placeholder for App Store badges - using simple styled text for now */}
              <div className="bg-white/5 border border-white/10 rounded-md px-3 py-1.5 text-xs text-white hover:bg-white/10 transition cursor-pointer">
                App Store
              </div>
              <div className="bg-white/5 border border-white/10 rounded-md px-3 py-1.5 text-xs text-white hover:bg-white/10 transition cursor-pointer">
                Google Play
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/how-it-works" className="text-gray-400 hover:text-gold transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-gold transition-colors">Pricing</Link></li>
              <li><Link href="/security" className="text-gray-400 hover:text-gold transition-colors">Security</Link></li>
              <li><Link href="/for-travelers" className="text-gray-400 hover:text-gold transition-colors">For Travelers</Link></li>
              <li><Link href="/for-nris" className="text-gray-400 hover:text-gold transition-colors">For NRIs</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-gold transition-colors">Blog</Link></li>
              <li><Link href="/partner" className="text-gray-400 hover:text-gold transition-colors">Partner With Us</Link></li>
              <li><Link href="/press" className="text-gray-400 hover:text-gold transition-colors">Press</Link></li>
              <li><span className="text-gray-600 cursor-not-allowed">Careers (Soon)</span></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/support" className="text-gray-400 hover:text-gold transition-colors">Help Center</Link></li>
              <li><Link href="/support#faq" className="text-gray-400 hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Status Page</a></li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="text-gray-400 hover:text-gold transition-colors">Terms of Use</Link></li>
              <li><Link href="/refund-policy" className="text-gray-400 hover:text-gold transition-colors">Refund Policy</Link></li>
              <li><Link href="/cookie-policy" className="text-gray-400 hover:text-gold transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-500 text-center md:text-left">
          <p>© {currentYear} Adeshilps E-XP & TravelWithU Private Limited</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2">
            <span>RBI-Compliant Framework</span>
            <span className="hidden sm:inline">·</span>
            <span>Payments powered by NPCI</span>
            <span className="hidden sm:inline">·</span>
            <span>All amounts in INR unless specified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}