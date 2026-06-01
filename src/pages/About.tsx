import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Eye } from 'lucide-react';

const easing = [0.22, 1, 0.36, 1] as const;

interface ServiceItem {
  id: string;
  name: string;
  desc: string;
}

const copywritingServices: ServiceItem[] = [
  {
    id: "email-copywriting",
    name: "Email Copywriting",
    desc: "Persuasive, on-brand email copy that speaks to your audience's real motivations and moves them toward action."
  },
  {
    id: "newsletters",
    name: "Newsletters",
    desc: "Regular newsletters that build trust, showcase authority, and keep your list warm between launches."
  },
  {
    id: "email-campaigns",
    name: "Email Campaigns",
    desc: "Full campaign architecture — from subject lines to CTAs — designed to convert at every stage of the funnel."
  },
  {
    id: "landing-pages",
    name: "Landing Pages",
    desc: "High-converting landing page copy that captures attention, builds belief, and drives sign-ups."
  }
];

const systemsServices: ServiceItem[] = [
  {
    id: "automations",
    name: "Automations",
    desc: "Behaviour-triggered email sequences that work around the clock — welcome flows, cart recovery, re-engagement, and beyond."
  },
  {
    id: "segmentation",
    name: "Segmentation",
    desc: "Strategic list segmentation so the right message reaches the right person at exactly the right time."
  },
  {
    id: "email-designs",
    name: "Email Designs",
    desc: "Clean, on-brand email templates designed to render beautifully across every inbox and device."
  },
  {
    id: "workflows",
    name: "Pre-built Workflows",
    desc: "Ready-to-launch automation workflows built in your ESP — tested, documented, and handed over fully operational."
  }
];

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openService, setOpenService] = useState<string>('email-copywriting');
  const [isMissionFlipped, setIsMissionFlipped] = useState(false);
  const [isVisionFlipped, setIsVisionFlipped] = useState(false);

  const toggleService = (id: string) => {
    setOpenService(openService === id ? '' : id);
  };

  return (
    <div className="w-full">
      {/* 1. ABOUT HERO (Cover Section) */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/henry_profile.png" 
            alt="Henry Okeke Chibundum" 
            className="w-full h-full object-cover object-top opacity-70"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1200";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 relative z-20 w-full pt-32 pb-20 md:pt-40 md:pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[950px] mx-auto lg:mx-0 text-center lg:text-left"
          >
            <span className="text-mocha font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-[11px] mb-8 md:mb-10 block">THE ORIGIN STORY</span>
            <h1 className="text-cream mb-8 md:mb-10 text-[3.2rem] sm:text-[5rem] lg:text-[7.5rem] xl:text-9xl font-bold leading-[0.9] md:leading-[0.85] tracking-tighter">
              Your Inbox is a <span className="text-mocha italic font-serif font-light">Goldmine</span>. <br />
              <span className="text-cream/40">I’m the Architect.</span>
            </h1>
            
            <p className="text-base md:text-2xl lg:text-3xl text-cream/60 mb-12 md:mb-16 leading-snug md:leading-tight max-w-4xl mx-auto lg:mx-0 font-light tracking-tight px-4 sm:px-0">
              I drive customer engagement by planning and optimizing campaign loops that convert silent subscribers into repeat buyers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 px-4 sm:px-0">
              <a 
                href="https://calendar.app.google/fe1MA1wgPoBre1SYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-mocha text-cream px-8 md:px-12 py-5 md:py-6 rounded-full text-lg md:text-xl font-bold hover:bg-mocha-dark transition-all shadow-2xl shadow-mocha/30 text-center"
              >
                Work With Henry
              </a>
              <a 
                href="#services"
                className="inline-block bg-cream/5 backdrop-blur-xl border border-cream/20 text-cream px-8 md:px-12 py-5 md:py-6 rounded-full text-lg md:text-xl font-bold hover:bg-cream/10 transition-all text-center cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore My Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. "HOW I CAN HELP YOU" ACCORDION SECTION (bg-espresso - dark) */}
      <section className="py-24 md:py-40 px-6 bg-espresso text-cream relative overflow-hidden border-b border-linen/10" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-16 md:mb-24 max-w-3xl">
            <span className="text-mocha font-bold text-[9px] uppercase tracking-[0.38em] mb-3 block">
              WHAT I DO
            </span>
            <h2 className="font-display font-semibold text-cream text-[clamp(2.8rem,5vw,5.5rem)] leading-[0.9] tracking-tighter mb-2">
              How I can
            </h2>
            <h2 className="font-display italic font-light text-mocha text-[clamp(2.8rem,5vw,5.5rem)] leading-[0.9] tracking-tighter">
              help you.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* COLUMN 1: Category A - Copywriting & Content */}
            <div className="space-y-6">
              <div className="pb-4 border-b border-linen/10">
                <span className="text-[10px] font-bold text-mocha tracking-[0.25em] uppercase block mb-1">
                  CATEGORY A
                </span>
                <h3 className="text-xl md:text-2xl font-display font-medium text-cream tracking-tight">
                  Copywriting & Content
                </h3>
              </div>

              <div className="space-y-1">
                {copywritingServices.map((service, index) => {
                  const isOpen = openService === service.id;
                  return (
                    <div key={service.id} className="border-b border-linen/10 py-1">
                      <button
                        onClick={() => toggleService(service.id)}
                        className="w-full flex items-center justify-between py-5 px-0 group transition-all cursor-pointer text-left focus:outline-none"
                      >
                        <div className="flex items-center gap-5">
                          <span className="font-sans text-[11px] font-bold text-mocha/50 w-6 tabular-nums transition-transform duration-200 group-hover:translate-x-1">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="font-display font-semibold text-cream text-[1.25rem] tracking-tight group-hover:text-mocha transition-colors relative pb-1">
                            {service.name}
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-mocha transition-all duration-200 group-hover:w-full" />
                          </span>
                        </div>
                        <span className={`text-mocha text-xl font-light transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                          +
                        </span>
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key={service.id}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.38, ease: easing }}
                            className="overflow-hidden"
                          >
                            <div className="pl-11 pb-6 space-y-3">
                              <p className="font-sans text-stone/80 text-[14px] leading-[1.8]">
                                {service.desc}
                              </p>
                              <a 
                                href="https://calendar.app.google/fe1MA1wgPoBre1SYA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-sans text-[11px] uppercase tracking-[0.28em] font-bold text-mocha hover:text-cream transition-colors mt-3 inline-block"
                              >
                                Book a call about this &rarr;
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* COLUMN 2: Category B - Systems & Infrastructure */}
            <div className="space-y-6">
              <div className="pb-4 border-b border-linen/10">
                <span className="text-[10px] font-bold text-mocha tracking-[0.25em] uppercase block mb-1">
                  CATEGORY B
                </span>
                <h3 className="text-xl md:text-2xl font-display font-medium text-cream tracking-tight">
                  Systems & Infrastructure
                </h3>
              </div>

              <div className="space-y-1">
                {systemsServices.map((service, index) => {
                  const isOpen = openService === service.id;
                  return (
                    <div key={service.id} className="border-b border-linen/10 py-1">
                      <button
                        onClick={() => toggleService(service.id)}
                        className="w-full flex items-center justify-between py-5 px-0 group transition-all cursor-pointer text-left focus:outline-none"
                      >
                        <div className="flex items-center gap-5">
                          <span className="font-sans text-[11px] font-bold text-mocha/50 w-6 tabular-nums transition-transform duration-200 group-hover:translate-x-1">
                            {String(index + 5).padStart(2, '0')}
                          </span>
                          <span className="font-display font-semibold text-cream text-[1.25rem] tracking-tight group-hover:text-mocha transition-colors relative pb-1">
                            {service.name}
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-mocha transition-all duration-200 group-hover:w-full" />
                          </span>
                        </div>
                        <span className={`text-mocha text-xl font-light transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                          +
                        </span>
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key={service.id}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.38, ease: easing }}
                            className="overflow-hidden"
                          >
                            <div className="pl-11 pb-6 space-y-3">
                              <p className="font-sans text-stone/80 text-[14px] leading-[1.8]">
                                {service.desc}
                              </p>
                              <a 
                                href="https://calendar.app.google/fe1MA1wgPoBre1SYA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-sans text-[11px] uppercase tracking-[0.28em] font-bold text-mocha hover:text-cream transition-colors mt-3 inline-block"
                              >
                                Book a call about this &rarr;
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION FLIP CARDS SECTION (bg-cream - light) */}
      <section className="py-24 md:py-40 px-6 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24 max-w-2xl mx-auto">
            <span className="text-mocha font-bold text-[9px] uppercase tracking-[0.38em] mb-3 block">
              THE FOUNDATION
            </span>
            <h2 className="font-display font-semibold text-espresso text-[clamp(2.4rem,4.5vw,5rem)] leading-[0.9] tracking-tighter mb-2">
              What drives
            </h2>
            <h2 className="font-display italic font-light text-mocha text-[clamp(2.4rem,4.5vw,5rem)] leading-[0.9] tracking-tighter">
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
                  <span className="text-[10px] font-sans text-stone/50 uppercase tracking-widest block">
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
                  <span className="text-[10px] font-sans text-stone/50 uppercase tracking-widest block">
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

    </div>
  );
}