'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/Button';

interface CTABlockProps {
  title: string;
  subtitle: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  note?: string;
}

export default function CTABlock({
  title,
  subtitle,
  primaryCtaText = "Download for iOS",
  secondaryCtaText = "Download for Android",
  note = "Free to download · No subscription · No hidden fees"
}: CTABlockProps) {
  return (
    <section className="relative w-full bg-[linear-gradient(135deg,#0A1628_0%,#0F2040_50%,#0A1628_100%)] overflow-hidden flex items-center justify-center py-[140px]">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px]" />

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xl font-bold font-display tracking-tight text-gold flex items-center justify-center mb-8">
            GetB<span className="text-white">+</span>
          </div>

          <h2 className="font-display text-[44px] md:text-[56px] leading-[1.1] text-white mb-6 tracking-tighter">
            {title}
          </h2>

          <p className="font-sans text-[18px] leading-[1.7] text-white/65 max-w-[600px] mx-auto mb-10">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Button size="lg" className="w-full sm:w-auto px-10">
              {primaryCtaText}
            </Button>
            <Button size="lg" className="w-full sm:w-auto px-10">
              {secondaryCtaText}
            </Button>
          </div>

          <p className="font-sans text-[14px] text-white/45">
            {note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}