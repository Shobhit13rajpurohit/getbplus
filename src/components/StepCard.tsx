'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  body: string;
  badge: string;
}

export default function StepCard({ number, icon: Icon, title, body, badge }: StepCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      className="bg-white rounded-[16px] p-8 border-l-[4px] border-gold shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-250 ease-out flex flex-col h-full relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon size={120} />
      </div>

      <div className="font-display text-[48px] text-gold leading-none mb-6">
        {number}
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy shrink-0">
          <Icon size={20} />
        </div>
        <h3 className="font-sans font-semibold text-[20px] text-navy leading-tight">
          {title}
        </h3>
      </div>

      <p className="font-sans text-[16px] leading-[1.7] text-gray-500 mb-8 flex-1">
        {body}
      </p>

      <div className="inline-flex self-start items-center rounded-full font-sans font-medium text-[13px] px-3 py-1 bg-navy/5 text-navy">
        {badge}
      </div>
    </motion.div>
  );
}