import React from 'react';
import { motion } from 'motion/react';

const PORTRAIT_URL = "/assets/henry_profile.png";
const FALLBACK_PORTRAIT = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1200";

const easing = [0.22, 1, 0.36, 1] as const;

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-espresso py-32 px-6 border-b border-linen/10">
      
      {/* Subtle portrait background texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-luminosity bg-no-repeat bg-center pointer-events-none select-none"
        style={{ 
          backgroundImage: `url(${PORTRAIT_URL})`,
          backgroundSize: "800px",
          filter: "blur(2px)",
        }}
        onError={(e) => {
          const t = e.target as HTMLDivElement;
          t.style.backgroundImage = `url(${FALLBACK_PORTRAIT})`;
        }}
      />
      
      <div className="absolute inset-0 bg-espresso/90 pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Kicker */}
        <span className="text-mocha text-[10px] uppercase tracking-[0.38em] mb-6 font-bold">
          LET'S BUILD TOGETHER
        </span>

        {/* Heading */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easing }}
          className="font-display font-bold uppercase text-cream text-[clamp(2.4rem,5vw,5.5rem)] leading-[1.0] tracking-tighter"
        >
          Ready to make your
        </motion.h2>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.12, ease: easing }}
          className="font-display italic font-light text-mocha text-[clamp(2.4rem,5vw,5.5rem)] leading-[1.0] tracking-normal mb-8"
        >
          emails unforgettable?
        </motion.h2>

        {/* Body Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.24, ease: easing }}
          className="font-sans text-cream/65 text-[16px] leading-[1.8] max-w-xl mx-auto"
        >
          Whether you're launching a welcome sequence, building a donor funnel, or creating a campaign that converts — Henry is ready to build it with you.
        </motion.p>

        {/* Flat Borderless/Minimal Button */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.38, ease: easing }}
          className="mt-12"
        >
          <a
            href="https://calendar.app.google/fe1MA1wgPoBre1SYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-[1.5px] border-cream/40 bg-transparent text-cream px-10 py-5 text-[12px] uppercase tracking-[0.32em] font-bold rounded-none hover:bg-cream/10 hover:border-cream/70 transition-all duration-300 shadow-none"
          >
            BOOK A STRATEGY CALL &rarr;
          </a>
        </motion.div>

      </div>
    </section>
  );
}
