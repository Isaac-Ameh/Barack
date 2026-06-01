import React from 'react';
import { motion } from 'motion/react';

const STORY_1_URL = "/assets/henry-story-1.jpg";
const FALLBACK_1_URL = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800";

const easing = [0.22, 1, 0.36, 1] as const;

export default function AboutStoryA() {
  return (
    <section className="w-full bg-cream overflow-hidden border-b border-linen/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch w-full max-w-none">
        
        {/* LEFT COLUMN — Text Block */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: easing }}
          className="flex flex-col justify-center px-8 md:px-16 py-20 lg:py-28"
        >
          <div className="max-w-xl mx-auto lg:mx-0">
            <p 
              className="font-sans text-espresso text-[16px] md:text-[17px] leading-[1.85] tracking-normal mb-8"
              style={{ textAlign: 'justify' }}
            >
              I studied Philosophy at the University of Nigeria (UNN), graduating with high honors. Marketing isn't about algorithms — it's about understanding how humans decide. My academic background allows me to layer deep psychological triggers into every system I build.
            </p>

            <blockquote className="font-display italic font-semibold text-espresso text-[clamp(1.4rem,2.2vw,2rem)] leading-[1.4] my-10 border-l-4 border-mocha pl-6 py-1">
              "As the first of four children, leadership and responsibility weren't options — they were survival. This relentless discipline is what I bring to your revenue engines."
            </blockquote>

            <p 
              className="font-sans text-espresso text-[16px] md:text-[17px] leading-[1.85] tracking-normal mb-12"
              style={{ textAlign: 'justify' }}
            >
              My goal: Become the #1 Email Marketer in Africa. I don't settle, and I don't let my clients settle either.
            </p>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 gap-8 border-t border-linen/80 pt-8">
              <div>
                <p className="font-display font-bold text-espresso text-[clamp(2.5rem,4vw,4rem)] tracking-tighter leading-none mb-2">
                  2X
                </p>
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-stone/60 font-bold">
                  BADMINTON CHAMPION
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-espresso text-[clamp(2.5rem,4vw,4rem)] tracking-tighter leading-none mb-2">
                  4.74
                </p>
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-stone/60 font-bold">
                  ACADEMIC CGPA
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — Tall Photo */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, delay: 0.15, ease: easing }}
          className="relative w-full h-full min-h-[480px] md:min-h-[600px] bg-linen"
        >
          {/* TODO: Replace with real photo of Henry */}
          <img
            src={STORY_1_URL}
            alt="Henry Chibundu Okeke in Business Research"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              const t = e.target as HTMLImageElement;
              t.onerror = null;
              t.src = FALLBACK_1_URL;
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}
