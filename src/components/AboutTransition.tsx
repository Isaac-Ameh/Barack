import React from 'react';
import { motion } from 'motion/react';

const PORTRAIT_URL = "/assets/henry_profile.png";
const FALLBACK_PORTRAIT = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600";

const easing = [0.22, 1, 0.36, 1] as const;

export default function AboutTransition() {
  const panelVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: easing } },
  };

  return (
    <section 
      className="relative w-full"
      style={{ 
        marginTop: 0,
        paddingTop: 0,
        position: 'relative',
        zIndex: 0,
      }}
    >
      {/* Top dark row — 3 panels matching Shelby's three-panel layout */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="grid grid-cols-[1.1fr_1fr_1.1fr] w-full"
        style={{ height: '320px', zIndex: 1, position: 'relative' }}
      >
        {/* Left dark panel */}
        <motion.div
          variants={panelVariants}
          style={{ backgroundColor: '#0f0a07' }}
        />

        {/* Center panel — NO IMAGE, just transparent */}
        {/* The hero card bleeds through here visually */}
        <motion.div
          variants={panelVariants}
          style={{ backgroundColor: 'transparent' }}
        />

        {/* Right dark panel */}
        <motion.div
          variants={panelVariants}
          style={{ backgroundColor: '#0f0a07' }}
        />
      </motion.div>

      {/* Bottom cream section with text */}
      <div 
        className="bg-cream pt-20 pb-16 text-center"
        style={{ zIndex: 1, position: 'relative' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-[900px] mx-auto">
            {/* Kicker */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: easing }}
              className="font-sans text-[11px] uppercase tracking-[0.4em] text-stone/70 mb-8 font-bold"
            >
              I DIDN'T BECOME THIS OVERNIGHT
            </motion.p>

            {/* Large Editorial Headline */}
            <div className="space-y-4">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: easing }}
                className="font-display font-semibold text-espresso text-[clamp(2.4rem,5vw,5rem)] leading-[1.1] tracking-tighter"
              >
                It took discipline, strategy,
              </motion.h2>

              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.42, ease: easing }}
                className="font-display italic font-light text-mocha text-[clamp(2.4rem,5vw,5rem)] leading-[1.1] tracking-normal"
              >
                and years of showing up
              </motion.h2>

              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.54, ease: easing }}
                className="font-display font-semibold text-espresso text-[clamp(2.4rem,5vw,5rem)] leading-[1.1] tracking-tighter"
              >
                to become the email strategist you need.
              </motion.h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
