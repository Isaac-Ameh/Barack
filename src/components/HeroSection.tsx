import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const HERO_BG_IMAGE = "/assets/hero-collage.png"; // Save the provided collage image here
const HERO_PORTRAIT = "/assets/henry_profile.png"; // Using the original profile image

const FALLBACK_BG = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1600";
const FALLBACK_PORTRAIT = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600";

const easing = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  return (
    <section className="relative h-auto lg:h-screen lg:max-h-screen flex items-stretch overflow-hidden bg-espresso">
      {/* 1. Full-screen Background Overlay with Directional Gradient */}
      {/* Matches Shelby Intro Animation: fadeIn | Duration: 0.5s | Delay: 0s | Trigger: Page Load/Scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: easing }}
        className="absolute inset-0 z-0"
      >
        <div className="relative w-full h-full overflow-hidden bg-espresso">
          <img 
            src={HERO_BG_IMAGE} 
            alt="Atmospheric Background" 
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.55) saturate(0.7)' }}
            onError={(e) => { 
              const t = e.target as HTMLImageElement;
              t.onerror = null;
              t.src = FALLBACK_BG; 
            }}
          />
          {/* STEP 2: Directional split gradient overlay */}
          <div 
            className="absolute inset-0 z-[1]" 
            style={{
              background: `
                linear-gradient(
                  to right,
                  rgba(76,57,45,0.45) 0%,
                  rgba(76,57,45,0.55) 30%,
                  rgba(76,57,45,0.82) 55%,
                  rgba(76,57,45,0.96) 70%,
                  rgba(76,57,45,0.98) 100%
                )
              `
            }}
          />
          {/* STEP 3: Vertical depth overlay */}
          <div 
            className="absolute inset-0 z-[2]" 
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  rgba(76,57,45,0.3) 0%,
                  transparent 25%,
                  transparent 75%,
                  rgba(76,57,45,0.4) 100%
                )
              `
            }}
          />
        </div>
      </motion.div>

      {/* 2. Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 lg:pt-28 pb-0 flex flex-col lg:h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full flex-1 min-h-0 items-stretch">
        
        {/* 2. Portrait Frame (Left) - Restored stark card style matching Shelby */}
        {/* Matches Shelby Intro Animation: fadeIn | Duration: 0.5s | Delay: 0s | Trigger: Page Load/Scroll */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: easing }}
          className="relative z-10 w-full max-w-[400px] aspect-[4/5] mx-auto self-center overflow-hidden bg-[#FAF8F5] shadow-none rounded-none"
        >
          <img 
            src={HERO_PORTRAIT} 
            alt="Henry Chibundu Okeke" 
            className="absolute inset-0 w-full h-full object-cover object-center z-10 select-none"
            style={{ transform: 'scale(1.45) translateY(8%)' }}
            onError={(e) => { 
              const t = e.target as HTMLImageElement;
              t.onerror = null;
              t.src = FALLBACK_PORTRAIT; 
            }}
          />
          
          {/* Press/Social Proof Bar - Changed to bg-espresso with Hingees, MalzFotoz, Lilysoya */}
          <div className="absolute bottom-0 left-0 right-0 bg-espresso py-3.5 border-t border-linen/10 z-20 overflow-hidden select-none">
            <div className="flex w-max gap-16 animate-infinite-scroll whitespace-nowrap">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-cream/90 font-bold">
                Hingees · MalzFotoz · Lilysoya &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-cream/90 font-bold">
                Hingees · MalzFotoz · Lilysoya &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </div>
          </div>
        </motion.div>

        {/* Text Content - Centered in right column */}
        <div className="flex flex-col justify-center pt-8 pb-16 lg:pt-0 lg:pb-12 h-full max-w-lg lg:max-w-xl mx-auto">
          {/* Matches Shelby Intro Animation: fadeIn | Duration: 0.5s | Delay: 0s | Trigger: Page Load/Scroll */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easing }}
            className="font-display text-[30px] lg:text-[50px] leading-[1.1] text-cream tracking-[-0.02em] uppercase mb-6"
          >
            Your business with me on your team <span className="font-italic italic font-normal text-mocha">= Increase in Revenue.</span>
          </motion.h1>

          {/* Matches Shelby Intro Animation: fadeIn | Duration: 0.5s | Delay: 0s | Trigger: Page Load/Scroll */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easing }}
            className="font-sans text-[15px] lg:text-[16px] text-linen/90 leading-[1.5] lg:leading-[1.6] tracking-normal mb-8 max-w-md"
          >
            I architect high-conversion systems that turn your static list into a 24/7 revenue engine through strategic planning and data-backed copy.
          </motion.p>

          {/* Matches Shelby Intro Animation: fadeIn | Duration: 0.5s | Delay: 0.5s | Trigger: Page Load/Scroll */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: easing }}
            className="flex flex-col gap-4 items-start"
          >
            {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: background-color, transform */}
            <a 
              href="https://calendar.app.google/fe1MA1wgPoBre1SYA"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-espresso px-[14px] py-[10px] rounded-[10px] font-sans text-[12px] lg:text-[14px] font-normal tracking-[0.1em] uppercase hover:bg-cream transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] w-max flex items-center gap-3 shadow-xl shadow-[rgba(76,57,45,0.25)]"
            >
              Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </a>

            <a 
              href="#community"
              className="border border-cream/40 text-cream bg-transparent px-[14px] py-[10px] rounded-[10px] font-sans text-[12px] lg:text-[14px] font-normal tracking-[0.1em] uppercase hover:bg-cream/10 hover:border-cream/70 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] w-max flex items-center gap-3"
            >
              Join my community
            </a>
          </motion.div>
        </div>

      </div>
      </div>
    </section>
  );
}
