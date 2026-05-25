import { PillBadge } from '@/components';
import Link from 'next/link';

export default function RefundPolicy() {
  return (
    <div className="bg-white min-h-screen py-[100px]">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 text-center">
          <PillBadge className="mb-4">Legal</PillBadge>
          <h1 className="font-display text-[40px] md:text-[56px] text-navy leading-tight mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="font-sans text-[14px] text-gray-500 uppercase tracking-wider font-semibold">
            Last updated: May 2026
          </p>
        </div>

        <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-navy prose-p:font-sans prose-p:text-gray-700 prose-p:leading-[1.8] prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-li:font-sans prose-li:text-gray-700">

          <p>
            At GetB+, we strive to ensure that your payment experience in India is seamless. This policy outlines how refunds, failed transactions, and cancellations are handled.
          </p>

          <h2 className="text-[32px] mt-12 mb-6">1. Failed Transactions</h2>
          <p>
            If a transaction fails (e.g., the merchant&apos;s UPI QR code rejects the payment or there is a network timeout) but your linked credit/debit card was charged:
          </p>
          <ul>
            <li>The transaction will be automatically marked as failed in our system.</li>
            <li>We will initiate an automatic reversal of the charge to your original payment method immediately.</li>
            <li>Depending on your card issuer, the reversed funds will reflect in your account within <strong>5 to 7 business days</strong>.</li>
            <li>You will not be charged any GetB+ service fees or FX markup on failed transactions.</li>
          </ul>

          <h2 className="text-[32px] mt-12 mb-6">2. Merchant Refunds</h2>
          <p>
            If you made a successful payment to a merchant, but later cancelled the order or returned the goods, the refund must be initiated by the merchant:
          </p>
          <ul>
            <li>The merchant must process the refund via their UPI provider using the original transaction reference number.</li>
            <li>Once the merchant&apos;s bank routes the refund through the UPI network to GetB+, we will immediately process the credit back to your linked card.</li>
            <li>Refunds initiated by merchants take <strong>7 to 10 business days</strong> to appear on your card statement, depending on international routing times.</li>
          </ul>

          <h2 className="text-[32px] mt-12 mb-6">3. Erroneous Transfers</h2>
          <p>
            Because UPI payments are instant and irrevocable, GetB+ cannot reverse a successful transaction once the merchant has received the funds.
          </p>
          <p>
            If you accidentally paid the wrong merchant or entered the incorrect amount, you must contact the merchant directly to request a refund. We can provide transaction proof (ARN/RRN) to assist you, but we cannot unilaterally pull funds back from a merchant&apos;s bank account.
          </p>

          <h2 className="text-[32px] mt-12 mb-6">4. Disputes & Chargebacks</h2>
          <p>
            If you believe a transaction was unauthorized or fraudulent, please contact us immediately at <a href="mailto:support@getbplus.com">support@getbplus.com</a>. You may also initiate a chargeback through your card issuer. We will cooperate fully with your bank&apos;s investigation and provide all necessary authentication logs (including biometric verification records) to resolve the dispute.
          </p>

        </article>
      </div>
    </div>
  );
}