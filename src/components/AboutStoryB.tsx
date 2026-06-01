import React from 'react';
import { motion } from 'motion/react';

const STORY_2_URL = "/assets/henry-story-2.jpg";
const FALLBACK_2_URL = "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=800";

const easing = [0.22, 1, 0.36, 1] as const;

export default function AboutStoryB() {
  return (
    <section className="w-full bg-cream overflow-hidden border-b border-linen/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch w-full max-w-none">

        {/* LEFT COLUMN — Tall Photo */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: easing }}
          className="relative w-full h-full min-h-[480px] md:min-h-[600px] bg-linen lg:order-1 order-2"
        >
          {/* TODO: Replace with real photo of Henry */}
          <img
            src={STORY_2_URL}
            alt="Henry Chibundu Okeke Working on Campaigns"
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              const t = e.target as HTMLImageElement;
              t.onerror = null;
              t.src = FALLBACK_2_URL;
            }}
          />
        </motion.div>
        
        {/* RIGHT COLUMN — Text Block */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: easing }}
          className="flex flex-col justify-center px-8 md:px-16 py-20 lg:py-28 lg:order-2 order-1"
        >
          <div className="max-w-xl mx-auto lg:mx-0">
            {/* Heading */}
            <h3 className="font-display font-bold uppercase text-espresso text-[clamp(2rem,3.5vw,3.5rem)] tracking-tighter leading-[1.0] mb-8">
              FAST FORWARD TO TODAY...
            </h3>

            <p 
              className="font-sans text-espresso text-[16px] md:text-[17px] leading-[1.85] tracking-normal mb-8"
              style={{ textAlign: 'justify' }}
            >
              I've built email marketing systems for fashion brands, diaspora photographers, faith-based conferences, nonprofit fundraisers, event launches, and luxury fragrance houses. Every campaign I build is rooted in strategy, cultural intelligence, and a writer's instinct for what readers feel.
            </p>

            <blockquote className="font-display italic font-semibold text-espresso text-[clamp(1.3rem,2vw,1.9rem)] leading-[1.4] mt-8 border-l-4 border-mocha pl-6 py-1">
              "Together, we're building email systems that don't just land in inboxes — they land in memory."
            </blockquote>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
