import { PillBadge, CTABlock } from '@/components';
import Link from 'next/link';

export default function ShellPage({ title, description, phase }: { title: string, description: string, phase: string }) {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-navy py-[120px] text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5" />
        <div className="relative z-10 max-w-[800px] mx-auto">
          <PillBadge className="mb-6">{phase}</PillBadge>
          <h1 className="font-display text-[48px] md:text-[64px] text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="font-sans text-[18px] text-white/60 leading-relaxed mb-10">
            {description}
          </p>
          <Link href="/" className="text-gold font-sans font-medium hover:underline">
            ← Back to Home
          </Link>
        </div>
      </section>

      <section className="py-[120px] bg-offWhite flex items-center justify-center">
        <div className="bg-white p-12 rounded-[24px] shadow-sm border border-gray-200 text-center max-w-[600px] w-full mx-4">
          <span className="text-[48px] block mb-4">🚧</span>
          <h2 className="font-display text-[32px] text-navy mb-4">Under Construction</h2>
          <p className="font-sans text-[16px] text-gray-500 leading-relaxed">
            We&apos;re currently building out this section of the GetB+ platform. Check back soon or follow our updates on social media.
          </p>
        </div>
      </section>

      <CTABlock
        title="Ready to travel cashless?"
        subtitle="Download GetB+ and experience India like a local."
      />
    </div>
  );
}
