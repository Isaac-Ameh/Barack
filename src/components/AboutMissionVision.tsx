import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Eye } from 'lucide-react';

const easing = [0.22, 1, 0.36, 1] as const;

export default function AboutMissionVision() {
  const [isMissionFlipped, setIsMissionFlipped] = useState(false);
  const [isVisionFlipped, setIsVisionFlipped] = useState(false);

  return (
    <section className="py-24 md:py-36 px-6 bg-cream overflow-hidden border-b border-linen/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-mocha font-bold text-[10px] uppercase tracking-[0.38em] mb-4 block">
            THE FOUNDATION
          </span>
          <h2 className="font-display font-semibold text-espresso text-[clamp(2.2rem,4vw,4.5rem)] leading-[1.0] tracking-tighter mb-2">
            What drives
          </h2>
          <h2 className="font-display italic font-light text-mocha text-[clamp(2.2rem,4vw,4.5rem)] leading-[1.0] tracking-normal">
            the work.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto select-none">
          
          {/* MISSION CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: easing }}
            className="relative h-[320px] cursor-pointer"
            style={{ perspective: '1200px' }}
            onMouseEnter={() => setIsMissionFlipped(true)}
            onMouseLeave={() => setIsMissionFlipped(false)}
            onClick={() => setIsMissionFlipped(!isMissionFlipped)}
          >
            <div 
              className="relative w-full h-full transition-transform duration-700"
              style={{ 
                transformStyle: 'preserve-3d',
                transform: isMissionFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}
            >
              {/* FRONT FACE */}
              <div className="absolute inset-0 bg-espresso rounded-3xl p-10 border border-linen/10 shadow-[0_24px_80px_rgba(76,57,45,0.2)] flex flex-col justify-between backface-hidden">
                <div className="w-12 h-12 flex items-center justify-start text-mocha/50">
                  <Target className="h-8 w-8 text-mocha/50" />
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.38em] text-mocha/60 block mb-2">MISSION</span>
                  <h3 className="font-display font-semibold text-cream text-[clamp(1.8rem,3vw,2.8rem)] tracking-tighter leading-[1.1]">
                    To achieve 4,100% ROI
                  </h3>
                </div>
                <span className="text-[10px] font-sans text-stone/50 uppercase tracking-widest block font-bold">
                  Hover to read &rarr;
                </span>
              </div>

              {/* BACK FACE */}
              <div 
                className="absolute inset-0 bg-mocha rounded-3xl p-10 flex flex-col justify-between backface-hidden"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.38em] text-cream/60 block">MISSION</span>
                  <p className="font-display italic font-light text-cream text-[1.25rem] leading-[1.7] mt-4">
                    "To achieve 4,100% ROI for my clients through customer-centric email marketing strategies that bring value to subscribers and revenue to my clients."
                  </p>
                </div>
                <span className="text-cream/50 text-[9px] font-bold tracking-[0.2em] uppercase block">
                  ESTABLISH A REPEATABLE LOOP
                </span>
              </div>
            </div>
          </motion.div>

          {/* VISION CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: easing, delay: 0.15 }}
            className="relative h-[320px] cursor-pointer"
            style={{ perspective: '1200px' }}
            onMouseEnter={() => setIsVisionFlipped(true)}
            onMouseLeave={() => setIsVisionFlipped(false)}
            onClick={() => setIsVisionFlipped(!isVisionFlipped)}
          >
            <div 
              className="relative w-full h-full transition-transform duration-700"
              style={{ 
                transformStyle: 'preserve-3d',
                transform: isVisionFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}
            >
              {/* FRONT FACE */}
              <div className="absolute inset-0 bg-linen rounded-3xl p-10 border border-espresso/10 shadow-[0_24px_80px_rgba(76,57,45,0.1)] flex flex-col justify-between backface-hidden">
                <div className="w-12 h-12 flex items-center justify-start text-espresso/30">
                  <Eye className="h-8 w-8 text-espresso/30" />
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.38em] text-espresso/40 block mb-2">VISION</span>
                  <h3 className="font-display font-semibold text-espresso text-[clamp(1.8rem,3vw,2.8rem)] tracking-tighter leading-[1.1]">
                    Africa's #1 Email Marketer
                  </h3>
                </div>
                <span className="text-[10px] font-sans text-stone/50 uppercase tracking-widest block font-bold">
                  Hover to read &rarr;
                </span>
              </div>

              {/* BACK FACE */}
              <div 
                className="absolute inset-0 bg-espresso rounded-3xl p-10 flex flex-col justify-between backface-hidden"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.38em] text-mocha/70 block">VISION</span>
                  <p className="font-display italic font-light text-cream text-[1.25rem] leading-[1.7] mt-4">
                    "To become Africa's #1 Email Marketer, bringing targeted email marketing solutions to help businesses achieve the growth they envision for their businesses."
                  </p>
                </div>
                <span className="text-mocha/50 text-[9px] font-bold tracking-[0.2em] uppercase block">
                  PRECISION IN EVERY LAYER
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
