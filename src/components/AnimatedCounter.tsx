'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ value, prefix = '', suffix = '', duration = 1.8, className = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const count = useMotionValue(0);
  const displayValue = useTransform(count, (latest) => {
    if (value % 1 !== 0) {
      return latest.toFixed(1);
    } else {
      return Math.round(latest).toLocaleString();
    }
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: duration
      });
      return controls.stop;
    }
  }, [isInView, value, count, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}<motion.span>{displayValue}</motion.span>{suffix}
    </span>
  );
}