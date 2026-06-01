import React from 'react';
import { motion } from 'motion/react';

const easing = [0.22, 1, 0.36, 1] as const;

export function CollabSection() {
  return (
    <section className="bg-cream min-h-screen overflow-hidden border-b border-linen flex items-stretch" id="collab">
      <div className="w-full mx-auto min-h-screen flex items-stretch">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch w-full">
          
          {/* LEFT COLUMN: Text Block */}
          {/* Matches Shelby Intro Animation: slideInLeft | Duration: 0.8s | Transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1) */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: easing }}
            className="px-8 py-20 lg:px-24 lg:py-0 flex flex-col justify-center bg-cream h-full"
          >
            {/* Matches Shelby Kicker Styling: Lowercase, elegant italic serif, mocha accent color */}
            <span className="font-italic italic font-normal text-mocha text-[20px] lg:text-[24px] lowercase tracking-normal block mb-4">
              working together
            </span>
            
            {/* Matches Shelby Heading: No period, clean caps, bold display font */}
            <h2 className="font-display text-[32px] lg:text-[50px] text-espresso font-normal leading-[1.15] tracking-[-0.02em] uppercase mb-6">
              LET'S WORK <br />
              <span className="text-espresso">TOGETHER</span>
            </h2>
            
            <p className="font-sans text-stone text-[15px] lg:text-[16px] leading-[1.6] max-w-md font-normal mb-8">
              Want to build email systems that convert, retain, and grow your audience? Click below to book a strategy call — let's talk about what your brand actually needs.
            </p>
            
            {/* Matches Shelby CTA Button: Flat, sharp rectangular shape, no border radius, no drop shadow, linen background */}
            <a
              href="https://calendar.app.google/fe1MA1wgPoBre1SYA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-linen text-espresso hover:bg-mocha hover:text-cream px-6 py-4 font-sans text-[12px] lg:text-[14px] font-bold uppercase tracking-[0.2em] smooth-transition select-none w-max shadow-none rounded-none"
            >
              BOOK A STRATEGY CALL &rarr;
            </a>
          </motion.div>

          {/* RIGHT COLUMN: Full bleed portrait image matching Shelby's full bleed right column layout */}
          <div className="relative min-h-[500px] lg:min-h-screen w-full overflow-hidden group select-none flex items-stretch">
            {/* Matches Shelby Intro Animation: slideInRight | Duration: 0.9s | Delay: 0.15s | Transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1) */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.15, ease: easing }}
              className="w-full h-full relative flex items-end justify-center"
            >
              {/* Subtle mocha multiply overlay for premium color grading */}
              <div className="absolute inset-0 bg-mocha/5 mix-blend-multiply z-10 pointer-events-none" />
              
              <img 
                src="/assets/henry_profile.png" 
                alt="Henry Chibundu Okeke Collab" 
                className="absolute inset-0 w-full h-full object-cover object-center z-0 select-none"
                style={{ transform: 'scale(1.35) translateY(4%)' }}
                onError={(e) => { 
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"; 
                }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
