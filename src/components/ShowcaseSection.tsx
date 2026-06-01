import React from 'react';
import { motion } from 'motion/react';

const easing = [0.22, 1, 0.36, 1] as const;

export function ShowcaseSection() {
  return (
    <section className="relative bg-[#2a1e17] overflow-hidden min-h-screen flex items-center justify-center border-b border-linen/10">
      {/* Subtle radial glow behind center content */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(158,132,114,0.12) 0%, transparent 65%)'
        }}
      />

      {/* TOP: Scrolling Ticker Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-mocha py-3 border-b border-linen/10 overflow-hidden select-none">
        <div className="flex w-max gap-8 animate-infinite-scroll whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer smooth-transition">
          <span className="font-sans text-[12px] lg:text-[15px] font-semibold uppercase tracking-[0.1em] text-cream">
            REAL CAMPAIGNS · REAL RESULTS · REAL COPY · EMAIL STRATEGY · LAUNCH SYSTEMS · COMMUNITY BUILDING &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="font-sans text-[12px] lg:text-[15px] font-semibold uppercase tracking-[0.1em] text-cream">
            REAL CAMPAIGNS · REAL RESULTS · REAL COPY · EMAIL STRATEGY · LAUNCH SYSTEMS · COMMUNITY BUILDING &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>

      {/* DEVICE MOCKUPS */}
      {/* Top-Left Laptop */}
      <motion.div
        initial={{ x: -60, y: -40, opacity: 0, rotate: -12 }}
        whileInView={{ x: 0, y: 0, opacity: 1, rotate: -6 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.0, delay: 0.1, ease: easing }}
        className="hidden lg:block absolute top-[-60px] left-[-140px] z-[2] w-[420px]"
      >
        <div className="bg-[#1a1210] rounded-t-[12px] border-[2px] border-[rgba(221,218,211,0.12)] shadow-[0_40px_100px_rgba(76,57,45,0.6)]">
          <div className="pt-3 px-3 bg-[#1a1210] rounded-t-[10px]">
            <div className="aspect-[16/10] overflow-hidden rounded-[4px] bg-[#0d0906]">
              {/* TODO: Henry can swap individual device screenshots by replacing src on each device independently */}
              <img src="/assets/Proof pack.png" className="w-full h-full object-cover object-top" alt="Screenshot 1" />
            </div>
          </div>
          <div className="h-[8px] bg-gradient-to-b from-[#2a1e17] to-[#1a1210] rounded-b-[2px]" />
          <div className="h-[24px] bg-[#1e1510] rounded-b-[8px] border-t border-[rgba(221,218,211,0.06)]" />
        </div>
      </motion.div>

      {/* Top-Right Phone */}
      <motion.div
        initial={{ x: 60, y: -40, opacity: 0, rotate: 14 }}
        whileInView={{ x: 0, y: 0, opacity: 1, rotate: 8 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.0, delay: 0.2, ease: easing }}
        className="hidden lg:block absolute top-[-80px] right-[-60px] z-[2] w-[180px]"
      >
        <div className="bg-[#1a1210] rounded-[32px] border-[3px] border-[rgba(221,218,211,0.12)] shadow-[0_40px_100px_rgba(76,57,45,0.6)] p-[16px_10px]">
          <div className="h-[8px] w-[60px] bg-[#0d0906] rounded-[4px] mx-auto mb-[8px]" />
          <div className="aspect-[9/18] overflow-hidden rounded-[8px] bg-[#0d0906]">
            {/* TODO: Henry can swap individual device screenshots by replacing src on each device independently */}
            <img src="/assets/Proof pack 2.jpg" className="w-full h-full object-cover object-top" alt="Screenshot 2" />
          </div>
          <div className="h-[4px] w-[48px] bg-[rgba(221,218,211,0.2)] rounded-[2px] mx-auto mt-[10px]" />
        </div>
      </motion.div>

      {/* Bottom-Left Tablet */}
      <motion.div
        initial={{ x: -60, y: 40, opacity: 0, rotate: -12 }}
        whileInView={{ x: 0, y: 0, opacity: 1, rotate: -8 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.0, delay: 0.15, ease: easing }}
        className="hidden lg:block absolute bottom-[-80px] left-[-100px] z-[2] w-[340px]"
      >
        <div className="bg-[#1a1210] rounded-[16px] border-[3px] border-[rgba(221,218,211,0.12)] shadow-[0_40px_100px_rgba(76,57,45,0.6)] p-[14px]">
          <div className="aspect-[4/3] overflow-hidden rounded-[6px] bg-[#0d0906]">
            {/* TODO: Henry can swap individual device screenshots by replacing src on each device independently */}
            <img src="/assets/Proof pack.png" className="w-full h-full object-cover object-top" alt="Screenshot 1" />
          </div>
        </div>
      </motion.div>

      {/* Bottom-Right Laptop */}
      <motion.div
        initial={{ x: 60, y: 40, opacity: 0, rotate: 10 }}
        whileInView={{ x: 0, y: 0, opacity: 1, rotate: 5 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.0, delay: 0.25, ease: easing }}
        className="hidden lg:block absolute bottom-[-60px] right-[-140px] z-[2] w-[420px]"
      >
        <div className="bg-[#1a1210] rounded-t-[12px] border-[2px] border-[rgba(221,218,211,0.12)] shadow-[0_40px_100px_rgba(76,57,45,0.6)]">
          <div className="pt-3 px-3 bg-[#1a1210] rounded-t-[10px]">
            <div className="aspect-[16/10] overflow-hidden rounded-[4px] bg-[#0d0906]">
              {/* TODO: Henry can swap individual device screenshots by replacing src on each device independently */}
              <img src="/assets/Proof pack 2.jpg" className="w-full h-full object-cover object-top" alt="Screenshot 2" />
            </div>
          </div>
          <div className="h-[8px] bg-gradient-to-b from-[#2a1e17] to-[#1a1210] rounded-b-[2px]" />
          <div className="h-[24px] bg-[#1e1510] rounded-b-[8px] border-t border-[rgba(221,218,211,0.06)]" />
        </div>
      </motion.div>

      {/* CENTER CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.3, ease: easing }}
        className="relative z-10 max-w-[580px] mx-auto text-center px-4 py-[120px]"
      >
        <span className="font-italic italic font-normal text-mocha text-[24px] lg:text-[32px] leading-[1.1] block mb-2">
          the
        </span>
        <h2 className="font-display font-normal uppercase text-cream text-[30px] lg:text-[50px] leading-[1.1] tracking-[-0.02em]">
          STUDENT SHOWCASE
        </h2>
        <p className="font-sans text-stone text-[15px] lg:text-[16px] leading-[1.5] lg:leading-[1.6] mt-6 mx-auto font-normal">
          Real campaigns. Real clients. Real results.
        </p>
        <p className="font-sans text-stone/60 text-[13px] lg:text-[14px] leading-[1.5] lg:leading-[1.6] mt-4 mx-auto font-normal">
          These are the email systems Henry has built for real brands — welcome sequences, launch funnels, fundraising arcs, and identity-led campaigns that convert.
        </p>
        <a
          href="https://the-assistant-upgrade.subscribepage.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-cream/40 text-cream bg-transparent px-[14px] py-[10px] rounded-[10px] font-sans text-[12px] lg:text-[14px] font-normal uppercase tracking-[0.1em] hover:bg-cream/10 hover:border-cream/70 smooth-transition mt-10 inline-block"
        >
          VIEW THE LANDING PAGE &rarr;
        </a>

        {/* Mobile Previews */}
        <div className="lg:hidden mt-12 flex justify-center gap-4">
          <img src="/assets/Proof pack.png" className="w-full max-w-[160px] rounded-xl shadow-[0_10px_30px_rgba(76,57,45,0.4)] object-cover" alt="Screenshot 1" />
          <img src="/assets/Proof pack 2.jpg" className="w-full max-w-[160px] rounded-xl shadow-[0_10px_30px_rgba(76,57,45,0.4)] object-cover" alt="Screenshot 2" />
        </div>
      </motion.div>
    </section>
  );
}
