import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: '₦2.8M', label: 'Revenue generated' },
  { value: '1,000+', label: 'Audience reached' },
  { value: '6', label: 'Live campaigns' },
  { value: '14', label: 'Emails in one arc' }
];

const easing = [0.22, 1, 0.36, 1] as const;

// High-fidelity count-up rolling animation that handles prefixes, decimals, and suffixes dynamically
function RollingNumber({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    // Regex to parse prefix (₦), number with optional decimals, and suffix (M, +)
    const match = value.match(/^(₦?)([\d.,]+)([M+]*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1];
    const rawNumberStr = match[2].replace(/,/g, '');
    const suffix = match[3];
    const isDecimal = rawNumberStr.includes('.');
    const end = parseFloat(rawNumberStr);

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth custom easing out quad/cubic feel
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeProgress * end;

      let formattedNum = '';
      if (isDecimal) {
        formattedNum = currentVal.toFixed(1);
      } else {
        formattedNum = Math.floor(currentVal).toLocaleString();
      }

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value); // Set exactly the final string (prevents floating precision issues)
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

export function MetricsSection() {
  return (
    <section className="bg-espresso py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {stats.map((stat, idx) => (
            /* Matches Shelby Intro Animation: fadeIn | Duration: 0.8s | Delay: 0.2s + idx * 0.1s | Trigger: Scroll / Viewport Entry */
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + idx * 0.1, 
                ease: easing 
              }}
              className={`flex flex-col relative px-4 lg:px-8 ${
                idx < stats.length - 1 ? 'lg:border-r border-linen/10' : ''
              }`}
            >
              {/* Optional thin mocha line above number */}
              <div className="w-12 h-[2px] bg-mocha/60 mb-6" />
              
              <span className="font-display text-[30px] lg:text-[50px] text-cream font-normal tracking-[-0.02em] leading-[1.1] mb-3 uppercase">
                <RollingNumber value={stat.value} />
              </span>
              
              <span className="font-sans text-[12px] lg:text-[14px] uppercase tracking-[0.1em] text-mocha font-normal leading-[1.4] lg:leading-[1.6]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
