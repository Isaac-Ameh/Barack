import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

interface DesignItem {
  kicker: string;
  title: string;
  desc: string;
  image: string;
}

const designs: DesignItem[] = [
  {
    kicker: "Strategy Slot 01",
    title: "Planning Mastery",
    desc: "Custom architecture designed for the 6Ps psychological framework.",
    image: "/assets/malzfotoz_email_plan.png"
  },
  {
    kicker: "Strategy Slot 02",
    title: "Objection Handling",
    desc: "FAQ-based conversion structure for seasonal photography campaigns.",
    image: "/assets/malzfotoz_email_faq.png"
  },
  {
    kicker: "Strategy Slot 03",
    title: "The Welcome Loop",
    desc: "A visual map of the conversion journey for premium photography services.",
    image: "/assets/malzfotoz_email_missed.png"
  },
  {
    kicker: "Design Slot 04",
    title: "Strategy Architecture",
    desc: "The foundational design structure used for high-precision photography campaigns.",
    image: "/assets/malzfotoz_strategy_main.jpg"
  },
  {
    kicker: "Design Slot 05",
    title: "Campaign Flow",
    desc: "A visual map of the conversion journey for premium services.",
    image: "/assets/malzfotoz_email_faq.png"
  },
  {
    kicker: "Design Slot 06",
    title: "Master Portfolio",
    desc: "The complete evidence of 4,100% ROI across multiple industries.",
    image: "/assets/malzfotoz_email_missed.png"
  }
];

const easing = [0.22, 1, 0.36, 1] as const;

export function EmailDesignsPreview() {
  return (
    <section className="bg-[#A89D92] py-24 px-6 lg:px-12 border-b border-linen" id="email-designs">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="font-sans text-[12px] lg:text-[14px] font-normal uppercase tracking-[0.1em] text-mocha block mb-3">
            THE WORK
          </span>
          <h2 className="font-display text-[24px] lg:text-[32px] text-espresso font-normal tracking-[-0.02em] leading-[1.2]">
            Email designs that feel <span className="font-italic italic font-normal text-mocha">like editorial.</span>
          </h2>
          <p className="font-sans text-stone text-[15px] lg:text-[16px] leading-[1.5] lg:leading-[1.6] mt-4 max-w-lg mx-auto font-normal">
            From fashion welcome sequences to faith-based fundraising arcs — every design is intentional, on-brand, and built to convert.
          </p>
        </div>

        {/* 3 Column Symmetrical Grid matching the Case Studies Page layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
          {designs.map((design, idx) => (
            /* Matches Shelby Intro Animation: fadeIn | Duration: 0.5s | Delay: idx * 0.1s | Trigger: Scroll / Viewport Entry */
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: easing }}
              className="flex flex-col bg-cream rounded-[2.5rem] border border-linen overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                <img 
                  src={design.image} 
                  alt={design.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600";
                  }}
                />
              </div>
              <div className="p-10">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-mocha uppercase tracking-[0.2em]">{design.kicker}</span>
                    <div className="w-8 h-px bg-gray-100" />
                 </div>
                 <h4 className="text-2xl font-bold text-espresso mb-2">{design.title}</h4>
                 <p className="text-sm text-stone font-light">{design.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: background-color */}
          <Link
            to="/case-studies"
            className="inline-block bg-espresso text-cream rounded-[10px] px-[14px] py-[10px] font-sans text-[12px] lg:text-[14px] font-normal uppercase tracking-[0.1em] hover:bg-mocha smooth-transition shadow-[0_4px_12px_rgba(76,57,45,0.15)]"
          >
            Explore All Case Studies &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
