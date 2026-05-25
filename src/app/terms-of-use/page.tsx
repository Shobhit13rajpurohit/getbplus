import { PillBadge } from '@/components';
import Link from 'next/link';

export default function TermsOfUse() {
  return (
    <div className="bg-white min-h-screen py-[100px]">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 text-center">
          <PillBadge className="mb-4">Legal</PillBadge>
          <h1 className="font-display text-[40px] md:text-[56px] text-navy leading-tight mb-4">
            Terms of Use
          </h1>
          <p className="font-sans text-[14px] text-gray-500 uppercase tracking-wider font-semibold">
            Last updated: May 2026
          </p>
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-navy prose-p:font-sans prose-p:text-gray-700 prose-p:leading-[1.8] prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-li:font-sans prose-li:text-gray-700">

          <p>
            Please read these Terms of Use (&quot;Terms&quot;, &quot;Terms of Use&quot;) carefully before using the GetB+ website and mobile application (the &quot;Service&quot;) operated by Adeshilps E-XP & TravelWithU Private Limited (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
          </p>

          <h2 className="text-[32px] mt-12 mb-6">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </p>

          <h2 className="text-[32px] mt-12 mb-6">2. Eligibility & KYC</h2>
          <p>
            To use GetB+, you must be at least 18 years old and hold a valid passport. Use of the Service requires successful completion of our Know Your Customer (KYC) process, as mandated by the Reserve Bank of India (RBI). We reserve the right to refuse service, terminate accounts, or cancel transactions at our sole discretion if KYC requirements are not met or maintained.
          </p>

          <h2 className="text-[32px] mt-12 mb-6">3. Payment Services</h2>
          <p>
            GetB+ acts as a technology intermediary enabling international credit and debit cards to transact on India&apos;s Unified Payments Interface (UPI) network.
          </p>
          <ul>
            <li><strong>Fees:</strong> We charge a service fee and a foreign exchange markup on transactions, which are clearly displayed before you confirm any payment.</li>
            <li><strong>Limits:</strong> Daily and monthly transaction limits apply (e.g., ₹25,000 daily). These are subject to change based on regulatory requirements.</li>
            <li><strong>Authorization:</strong> By confirming a transaction in the App, you authorize us (via our acquiring partners) to charge your linked card.</li>
          </ul>

          <h2 className="text-[32px] mt-12 mb-6">4. User Responsibilities</h2>
          <p>You agree not to use the Service:</p>
          <ul>
            <li>For any unlawful purpose or to fund illegal activities.</li>
            <li>To make payments for prohibited goods or services as defined by Indian law.</li>
            <li>To attempt to circumvent our security or KYC measures.</li>
          </ul>

          <h2 className="text-[32px] mt-12 mb-6">5. Limitation of Liability</h2>
          <p>
            In no event shall Adeshilps E-XP & TravelWithU Private Limited, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content.
          </p>

          <h2 className="text-[32px] mt-12 mb-6">6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
          </p>

        </article>
      </div>
    </div>
  );
}