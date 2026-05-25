'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StatBlockProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  subLabel: string;
}

export default function StatBlock({ value, suffix = '', prefix = '', label, subLabel }: StatBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const count = useMotionValue(0);
  const displayValue = useTransform(count, (latest) => {
    if (value % 1 !== 0) {
      return latest.toFixed(1);
    } else {
      return Math.round(latest).toString();
    }
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 1.8
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <div ref={ref} className="flex flex-col items-center md:items-start text-center md:text-left">
      <div className="font-display text-[56px] md:text-[72px] text-gold leading-none mb-3 flex items-baseline">
        {prefix}
        <motion.span>{displayValue}</motion.span>
        {suffix}
      </div>
      <div className="font-sans text-[16px] text-white/65 font-medium mb-1">
        {label}
      </div>
      <div className="font-sans text-[13px] text-white/40">
        {subLabel}
      </div>
    </div>
  );
}