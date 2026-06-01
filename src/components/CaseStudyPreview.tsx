import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

interface CaseStudyItem {
  kicker: string;
  title: string;
  quote: string;
  summary: string;
  tags: string[];
  image: string;
  fallbackImage: string;
  navigateId: string;
}

const caseStudies: CaseStudyItem[] = [
  {
    kicker: "CASE STUDY: LAGOS NETWORK LAUNCH",
    title: "Ribs Hybrid Conference 3.0",
    quote: "Henry's strategic email campaign generated ₦2.8M in one month, pulling 157 paid attendees with absolute precision.",
    summary: "A masterclass in rapid-growth event marketing. We designed high-conversion email funnels that drove ticket sales and maximized audience commitment.",
    tags: ["Event Marketing", "Strategy", "Revenue Growth"],
    image: "/assets/ribs_hybrid_conference.png",
    fallbackImage: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1200",
    navigateId: "ribs"
  },
  {
    kicker: "HIGH-PRECISION EMAIL STRATEGY",
    title: "Malzfotoz Campaign",
    quote: "Resurrecting a dead email program to achieve 68% open rates and immediate revenue lift per campaign.",
    summary: "By introducing hyper-targeted audience segmentation and rebuilding the deliverability architecture, we unlocked massive potential from an inactive list.",
    tags: ["Photography", "Segmentation", "ROI"],
    image: "/proofs/malzfotoz/after/After_I_Stepped_in.png",
    fallbackImage: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200",
    navigateId: "malzfotoz"
  }
];

const easing = [0.22, 1, 0.36, 1] as const;

export function CaseStudyPreview() {
  return (
    <section className="bg-cream py-24 px-6 lg:px-12 border-b border-linen" id="case-studies">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <span className="font-sans text-[12px] lg:text-[14px] font-normal uppercase tracking-[0.1em] text-mocha block mb-3 leading-[1.4] lg:leading-[1.6]">
              SUCCESS STORIES
            </span>
            <h2 className="font-display text-[24px] lg:text-[32px] text-espresso font-normal tracking-[-0.02em] leading-[1.2]">
              Real Results for Real Nigerian Brands
            </h2>
          </div>
          {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: border-color, color, background-color */}
          <Link 
            to="/case-studies" 
            className="border border-espresso/30 px-[14px] py-[10px] rounded-[10px] font-sans text-[12px] lg:text-[14px] font-normal uppercase tracking-[0.1em] text-espresso hover:bg-espresso hover:text-cream smooth-transition w-max inline-block shrink-0 bg-transparent"
          >
            View All Case Studies &rarr;
          </Link>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {caseStudies.map((study, idx) => (
            /* Matches Shelby Intro Animation: fadeIn | Duration: 0.5s | Delay: idx * 0.12s | Trigger: Scroll / Viewport Entry */
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: easing }}
              className="bg-white border border-linen rounded-[10px] p-6 lg:p-8 flex flex-col justify-between smooth-transition"
            >
              <div>
                <span className="font-sans text-[10px] lg:text-[12px] uppercase tracking-[0.1em] text-mocha font-normal block mb-3">
                  {study.kicker}
                </span>
                <h3 className="font-display text-[24px] lg:text-[32px] text-espresso font-normal leading-[1.2] mb-4">
                  {study.title}
                </h3>
                
                {/* Pull Quote */}
                <p className="font-italic italic text-[16px] lg:text-[20px] leading-[1.2] text-espresso/80 border-l-2 border-mocha pl-4 my-5 font-normal">
                  "{study.quote}"
                </p>
                
                <p className="font-sans text-stone text-[14px] lg:text-[15px] leading-[1.5] lg:leading-[1.6] mb-6 font-normal">
                  {study.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {study.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="border border-linen bg-cream text-stone text-[9px] lg:text-[10px] uppercase tracking-[0.15em] font-normal rounded-[10px] px-3.5 py-1.5 font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cover Image & Action Link */}
              <div className="mt-auto">
                <Link to={`/case-studies#${study.navigateId}`} className="group block overflow-hidden rounded-[10px] border border-linen/30 mb-6 bg-cream">
                  {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: scale */}
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-103"
                    onError={(e) => { (e.target as HTMLImageElement).src = study.fallbackImage; }}
                  />
                </Link>
                {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: background-color */}
                <Link 
                  to={`/case-studies#${study.navigateId}`}
                  className="inline-block bg-espresso text-cream rounded-[10px] px-[14px] py-[10px] font-sans text-[12px] lg:text-[14px] font-normal uppercase tracking-[0.1em] hover:bg-mocha smooth-transition"
                >
                  View Case Study &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
