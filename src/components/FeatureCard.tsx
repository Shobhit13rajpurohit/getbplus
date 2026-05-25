'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
}

export default function FeatureCard({ icon: Icon, title, body }: FeatureCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      className="bg-offWhite rounded-[16px] p-7 border-l-[3px] border-gold hover:-translate-y-1 hover:shadow-lg transition-all duration-250 ease-out flex flex-col h-full"
    >
      <div className="mb-5">
        <Icon size={28} className="text-gold" />
      </div>

      <h4 className="font-sans font-semibold text-[18px] md:text-[20px] text-navy mb-3 leading-snug">
        {title}
      </h4>

      <p className="font-sans text-[15px] leading-[1.7] text-gray-500">
        {body}
      </p>
    </motion.div>
  );
}