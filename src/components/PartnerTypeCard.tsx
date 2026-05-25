'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PartnerTypeCardProps {
  emoji: string;
  title: string;
  description: string;
}

export default function PartnerTypeCard({ emoji, title, description }: PartnerTypeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-[16px] border border-gray-200 p-6 cursor-pointer hover:border-gold hover:shadow-[0_8px_24px_rgba(201,168,76,0.1)] transition-all duration-300"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 rounded-full bg-offWhite flex items-center justify-center text-2xl shrink-0">
          {emoji}
        </div>
        <h3 className="font-sans font-semibold text-[18px] text-navy flex-1">
          {title}
        </h3>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-offWhite text-navy transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
          ↓
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-sans text-[15px] text-gray-500 leading-relaxed pt-4 pl-16">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}