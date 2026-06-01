import React from 'react';
import { motion } from 'motion/react';

const easing = [0.22, 1, 0.36, 1] as const;

export function AboutSection() {
  return (
    <section className="w-full overflow-hidden bg-cream lg:h-screen lg:max-h-screen flex flex-col justify-center" id="about">
      <div className="w-full px-0 lg:h-full">
        <div className="grid grid-cols-1 lg:grid-cols-[28fr_38fr_34fr] gap-0 items-stretch divide-y lg:divide-y-0 lg:divide-x divide-espresso/8 lg:h-full">
          
          {/* COLUMN 1 — LEFT (narrowest, ~28% width) */}
          <div className="flex flex-col order-1 lg:order-none lg:h-full">
            {/* Top Area: Headline Block */}
            <div className="flex-none px-10 pt-16 pb-8 lg:pt-12 lg:pb-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.12 }
                  }
                }}
                className="flex flex-col space-y-0"
              >
                {/* Matches Shelby Intro Animation: Line 1: y:30→0 opacity:0→1, duration:0.7s, delay:0s */}
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.7, ease: easing }}
                  className="font-display font-bold uppercase text-espresso tracking-tighter text-[clamp(3rem,4.5vw,5rem)] leading-[0.88]"
                >
                  THE EMAIL
                </motion.div>
                {/* Matches Shelby Intro Animation: Line 2: y:30→0 opacity:0→1, duration:0.7s, delay:0.1s */}
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.7, delay: 0.1, ease: easing }}
                  className="font-display italic font-light text-mocha tracking-tighter text-[clamp(3rem,4.5vw,5rem)] leading-[0.88]"
                >
                  Marketer
                </motion.div>
                {/* Matches Shelby Intro Animation: Line 3: y:30→0 opacity:0→1, duration:0.7s, delay:0.2s */}
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.7, delay: 0.2, ease: easing }}
                  className="font-display font-bold uppercase text-espresso tracking-tighter text-[clamp(3rem,4.5vw,5rem)] leading-[0.88]"
                >
                  YOU NEED.
                </motion.div>
              </motion.div>
              
              <div className="w-12 border-t-2 border-espresso/30 mt-6" />
            </div>

            {/* Bottom Area: Photo 1 */}
            <div className="flex-1 min-h-[300px] lg:min-h-0 overflow-hidden hidden lg:block relative group select-none">
              {/* Matches Shelby Intro Animation: Left bottom photo: y:40→0 opacity:0→1, duration:0.9s, delay:0.3s */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.3, ease: easing }}
                className="w-full h-full absolute inset-0"
              >
                {/* TODO: Replace with real photo of Henry working */}
                <img 
                  src="/assets/henry-working.jpg" 
                  alt="Henry Candid Workspace" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { 
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600"; 
                  }}
                />
                <div className="absolute inset-0 bg-mocha/10 opacity-0 group-hover:opacity-100 smooth-transition" />
              </motion.div>
            </div>
          </div>

          {/* COLUMN 2 — CENTER (widest, ~38% width) */}
          <div 
            className="relative overflow-hidden group select-none lg:order-none order-2 lg:h-full"
            style={{ minHeight: '500px' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.1, delay: 0.1, ease: easing }}
              className="w-full h-full relative flex items-end justify-center"
            >
              <img 
                src="/assets/henry_profile.png" 
                alt="Henry Chibundu Okeke Portrait" 
                className="absolute inset-0 w-full h-full object-cover object-center z-0 select-none"
                style={{ transform: 'scale(1.7) translateY(8%)' }}
                onError={(e) => { 
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"; 
                }}
              />
            </motion.div>
          </div>

          {/* COLUMN 3 — RIGHT (~34% width) */}
          <div className="flex flex-col order-3 lg:order-none lg:h-full">
            {/* Top Area: Photo 2 */}
            <div className="flex-none overflow-hidden order-2 lg:order-none relative group select-none lg:flex-1 lg:min-h-0">
              {/* Matches Shelby Intro Animation: Right top photo: x:30→0 opacity:0→1, duration:0.9s, delay:0.2s */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.2, ease: easing }}
                className="w-full h-full lg:absolute lg:inset-0"
              >
                {/* TODO: Replace with real photo of Henry at event/speaking */}
                <img 
                  src="/assets/henry-event.jpg" 
                  alt="Henry Speaking Event" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { 
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"; 
                  }}
                />
                <div className="absolute inset-0 bg-mocha/10 opacity-0 group-hover:opacity-100 smooth-transition" />
              </motion.div>
            </div>

            {/* Bottom Area: Text Block */}
            {/* Matches Shelby Intro Animation: Right text: y:20→0 opacity:0→1, duration:0.8s, delay:0.4s */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: easing }}
              className="flex-none px-8 py-10 order-1 lg:order-none lg:py-6 xl:py-8 lg:flex-initial"
            >
              <h3 className="font-display italic font-light text-espresso text-[clamp(1.4rem,2vw,2rem)] leading-[1.3]">
                "I am your Email Marketing Specialist and I love delivering results for my clients; increased revenue, solid brand reputation and a healthy email list."
              </h3>
              
              <p className="font-sans text-stone text-[15px] leading-[1.8] mt-5 font-normal">
                I have generated millions in revenue for DTC brands. Want to see those numbers, stay with me.
              </p>

              <div className="border-t border-linen/60 mt-5 pt-5">
                <span className="font-sans text-[11px] uppercase tracking-[0.1em] text-mocha font-bold block mb-2">ESPs & Systems</span>
                <p className="font-sans text-[13px] lg:text-[14px] leading-[1.5] text-stone font-normal">
                  <span className="text-espresso font-semibold">ESPs I have used:</span> Klaviyo, Mailchimp, Omnisend, Brevo, MailerLite, Constant Contact. <br className="hidden lg:inline" />
                  I’ve built full email marketing programs; automations, segmentations and deliverability.
                </p>
              </div>
              
              <a 
                href="/about"
                className="font-sans text-[11px] uppercase tracking-[0.3em] font-bold text-espresso underline-offset-4 hover:text-mocha transition-colors mt-8 inline-block"
              >
                WANT A LITTLE MORE INSIDER GIST ABOUT ME &rarr;
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
