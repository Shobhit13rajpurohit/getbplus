import { PillBadge } from '@/components';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen py-[100px]">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 text-center">
          <PillBadge className="mb-4">Legal</PillBadge>
          <h1 className="font-display text-[40px] md:text-[56px] text-navy leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="font-sans text-[14px] text-gray-500 uppercase tracking-wider font-semibold">
            Last updated: May 2026
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-offWhite p-6 rounded-xl border border-gray-100 mb-12">
          <h4 className="font-sans font-semibold text-navy mb-4 uppercase tracking-wider text-[13px]">Table of Contents</h4>
          <ul className="space-y-2 font-sans text-[14px] text-gray-600">
            <li><a href="#introduction" className="hover:text-gold transition-colors">1. Introduction</a></li>
            <li><a href="#data-collection" className="hover:text-gold transition-colors">2. Information We Collect</a></li>
            <li><a href="#how-we-use" className="hover:text-gold transition-colors">3. How We Use Your Information</a></li>
            <li><a href="#data-sharing" className="hover:text-gold transition-colors">4. Information Sharing & Disclosure</a></li>
            <li><a href="#data-security" className="hover:text-gold transition-colors">5. Data Security & Storage</a></li>
            <li><a href="#your-rights" className="hover:text-gold transition-colors">6. Your Rights (DPDP Act 2023)</a></li>
            <li><a href="#contact" className="hover:text-gold transition-colors">7. Contact Us</a></li>
          </ul>
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-navy prose-p:font-sans prose-p:text-gray-700 prose-p:leading-[1.8] prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-li:font-sans prose-li:text-gray-700">

          <h2 id="introduction" className="text-[32px] mt-12 mb-6">1. Introduction</h2>
          <p>
            Adeshilps E-XP & TravelWithU Private Limited (&quot;GetB+&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the GetB+ mobile application, website, and related services (collectively, the &quot;Service&quot;).
          </p>
          <p>
            By using the Service, you agree to the collection and use of information in accordance with this policy. Our data practices comply with the Digital Personal Data Protection (DPDP) Act, 2023 of India and other applicable international data protection frameworks.
          </p>

          <h2 id="data-collection" className="text-[32px] mt-12 mb-6">2. Information We Collect</h2>
          <p>We collect several types of information from and about users of our Service, including:</p>
          <ul>
            <li><strong>Identity Data:</strong> First name, last name, date of birth, passport details (for KYC purposes required by the RBI).</li>
            <li><strong>Contact Data:</strong> Email address, telephone number, billing address.</li>
            <li><strong>Financial Data:</strong> We <strong>DO NOT</strong> store your full credit or debit card numbers. We only store encrypted token references provided by card networks (Visa, Mastercard, Amex).</li>
            <li><strong>Transaction Data:</strong> Details about payments to and from you, including merchant details, amounts, date, and time.</li>
            <li><strong>Technical Data:</strong> IP address, device type, operating system, and app version.</li>
          </ul>

          <h2 id="how-we-use" className="text-[32px] mt-12 mb-6">3. How We Use Your Information</h2>
          <p>We use the collected data for various purposes:</p>
          <ul>
            <li>To facilitate cross-border UPI payments.</li>
            <li>To comply with Reserve Bank of India (RBI) KYC and Anti-Money Laundering (AML) regulations.</li>
            <li>To detect, prevent, and address fraud and technical issues.</li>
            <li>To provide customer support and send administrative notices.</li>
            <li>To improve our App and AI Travel Assistant features (using anonymized data).</li>
          </ul>

          <h2 id="data-sharing" className="text-[32px] mt-12 mb-6">4. Information Sharing & Disclosure</h2>
          <p>
            We do not sell your personal data. We may share your data with:
          </p>
          <ul>
            <li><strong>Payment Networks & Sponsor Banks:</strong> To process your transactions securely.</li>
            <li><strong>Service Providers:</strong> Cloud hosting (AWS), identity verification partners, and customer support tools.</li>
            <li><strong>Legal & Regulatory Authorities:</strong> When required by law, subpoena, or other legal processes, particularly regarding RBI and FEMA guidelines.</li>
          </ul>

          <h2 id="data-security" className="text-[32px] mt-12 mb-6">5. Data Security & Storage</h2>
          <p>
            The security of your data is our primary concern. We use bank-grade encryption (TLS 1.3) for data in transit and AES-256 for data at rest. We are PCI-DSS certified.
          </p>
          <p>
            <strong>Data Localization:</strong> In strict compliance with RBI directives, all payment-related data and personal user data is stored on secure servers physically located in Mumbai, India.
          </p>

          <h2 id="your-rights" className="text-[32px] mt-12 mb-6">6. Your Rights (DPDP Act 2023)</h2>
          <p>Under the Digital Personal Data Protection Act, 2023, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate or incomplete data.</li>
            <li>Request erasure of your data (subject to legal retention requirements for financial transactions).</li>
            <li>Withdraw consent for data processing.</li>
          </ul>

          <h2 id="contact" className="text-[32px] mt-12 mb-6">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact our Data Protection Officer at:
          </p>
          <p>
            Email: <a href="mailto:privacy@getbplus.com">privacy@getbplus.com</a><br />
            Address: Adeshilps E-XP & TravelWithU Pvt Ltd, New Delhi, India.
          </p>

        </article>
      </div>
    </div>
  );
}