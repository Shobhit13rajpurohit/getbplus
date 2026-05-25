'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQAccordionProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function FAQAccordion({ question, answer, defaultOpen = false }: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
      >
        <span className="font-sans font-semibold text-[17px] text-navy pr-8">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={cn(
            "text-gold transition-transform duration-300 shrink-0",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 font-sans text-[16px] text-gray-500 leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}