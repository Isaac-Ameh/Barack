import React from 'react';
import { motion } from 'motion/react';

const STEPS = [
  "Clarity calls",
  "Brand and Audience Research",
  "Content Development",
  "Email Designs",
  "Systems setup: Automation and Segmentation",
  "A/B Testing and Analysis",
  "Optimizing, Iterating and Scaling",
  "Reporting and Strategy Review"
];

const easing = [0.22, 1, 0.36, 1] as const;

export default function AboutWorkProcess() {
  return (
    <section className="bg-espresso py-24 md:py-36 px-6 relative overflow-hidden border-b border-linen/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-mocha/70 font-bold text-[10px] uppercase tracking-[0.38em] mb-4 block">
            HOW IT WORKS
          </span>
          <h2 className="font-display font-semibold text-cream text-[clamp(2.4rem,4.5vw,4.5rem)] tracking-tighter leading-[1.1] mb-2">
            My work
          </h2>
          <h2 className="font-display italic font-light text-mocha text-[clamp(2.4rem,4.5vw,4.5rem)] leading-[1.1] tracking-normal">
            process.
          </h2>
        </div>

        {/* Numbered Process List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.06 } }
          }}
          className="max-w-4xl mx-auto divide-y divide-linen/10"
        >
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: easing } }
              }}
              className="flex items-start gap-6 md:gap-8 py-7 group cursor-default transition-all duration-300"
            >
              {/* Number */}
              <span className="font-sans text-[11px] font-bold text-mocha/50 w-8 pt-1.5 tabular-nums shrink-0 select-none">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Step name */}
              <span className="font-display font-semibold text-cream text-[clamp(1.2rem,2vw,1.8rem)] tracking-tight group-hover:text-mocha transition-colors duration-200">
                {step}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
