import React from 'react';
import { motion } from 'motion/react';

const easing = [0.22, 1, 0.36, 1] as const;

export function ReadySection() {
  return (
    <section className="bg-[#110d0a] relative overflow-hidden py-32 lg:py-48 border-b border-linen/10 flex items-center justify-center min-h-screen" id="ready">
      {/* Background highly visible photo layer */}
      <div className="absolute inset-0 z-0 select-none">
        <img 
          src="/assets/hero-collage.png" 
          alt="Henry Background" 
          className="w-full h-full object-cover object-top filter grayscale contrast-[1.1] brightness-[0.7]"
          onError={(e) => { 
            (e.target as HTMLImageElement).src = "/assets/henry-bg-scene.jpg"; 
          }}
        />
        {/* Subtle dark overlay using the darkest tone to ensure readability while keeping the image visible */}
        <div className="absolute inset-0 bg-[#110d0a]/60 z-[1]" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        {/* Heading */}
        {/* Matches Shelby Intro Animation: slideInUp | Duration: 0.8s | Transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1) */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: easing }}
          className="font-display text-[30px] lg:text-[50px] text-cream font-normal leading-[1.1] tracking-[-0.02em] uppercase"
        >
          READY TO WORK <br />
          <span className="text-mocha font-italic italic">TOGETHER?</span>
        </motion.h2>

        {/* Body Text */}
        {/* Matches Shelby Intro Animation: slideInUp | Duration: 0.8s | Delay: 0.2s | Transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1) */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: easing }}
          className="font-sans text-cream/65 text-[15px] lg:text-[16px] leading-[1.5] lg:leading-[1.6] mt-8 max-w-xl mx-auto font-normal"
        >
          If you want email campaigns that don't just look good but actually move people — welcome sequences, launch funnels, fundraising arcs, and identity-led copy — you're in the right place. Let's build something that converts.
        </motion.p>

        {/* Action Link Button */}
        {/* Matches Shelby Intro Animation: slideInUp | Duration: 0.8s | Delay: 0.35s | Transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1) */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.35, ease: easing }}
        >
          {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: border-color, background-color */}
          <a
            href="https://calendar.app.google/fe1MA1wgPoBre1SYA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-cream/40 text-cream bg-transparent rounded-[10px] px-[14px] py-[10px] font-sans text-[12px] lg:text-[14px] font-normal uppercase tracking-[0.1em] hover:bg-cream/10 hover:border-cream/70 transition-all duration-500 mt-12 select-none"
          >
            BOOK A STRATEGY CALL &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
