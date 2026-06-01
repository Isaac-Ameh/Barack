import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Testimonial {
  name: string;
  role: string;
  photo: string;
  quote: string;
}

const clientTestimonials: Testimonial[] = [
  {
    name: "Chioma A.",
    role: "Fashion Brand Owner",
    photo: "/assets/testimonials/chioma.jpg",
    quote: "Henry's welcome sequence tripled our open rates in the first week. His cultural intelligence is a cheat code."
  },
  {
    name: "Tunde M.",
    role: "Event Organiser", 
    photo: "/assets/testimonials/tunde.jpg",
    quote: "The campaign he built for our conference sold out in 3 days. Unbelievable response from our database."
  },
  {
    name: "Blessing O.",
    role: "CEO, B-Scent Villa",
    photo: "/assets/testimonials/blessing.jpg",
    quote: "Every email felt like it was written for exactly our audience. The automation flows are literally printing cash."
  }
];

const studentTestimonials: Testimonial[] = [
  {
    name: "Caroline Y.",
    role: "Digital Marketer",
    photo: "/assets/Caroline Y.webp",
    quote: "Henry did not just teach email marketing, he gave me direction, and the confidence to pursue it properly. Within a few months, I developed a strong grasp of email marketing, and it opened up opportunities I did not have access to before. I have partnered with multiple brands in the U.S. and UK, and worked with brands I am genuinely passionate about, especially women-led businesses."
  },
  {
    name: "Ekom R.",
    role: "Email Marketer",
    photo: "/assets/Ekom R.jpg",
    quote: "I joined the email marketing mentorship by Henry in March. That's was the beginning of my transformation. On the 17th of April, I got a job offer. Henry prepared me for the interview and walked me through the whole process. I got my offer letter on the 23rd of April and I'm currently handling a 6 figure role."
  },
  {
    name: "Mary A.",
    role: "Freelance Copywriter",
    photo: "/assets/Mary A.jpg",
    quote: "Before learning with Henry, I was just getting by with email marketing. I knew enough to talk about it but not enough to go deep with clients. So I played it safe and kept things surface-level. Everything shifted. Today I handle full CRM automations, write email that drives real results, and show up for my clients with genuine confidence. That clarity came from working with Henry."
  },
  {
    name: "Ihunanya C.",
    role: "Email Marketing Intern",
    photo: "/assets/Ihunanya C.jpg",
    quote: "I stepped into the email marketing space in 2025. Everything was new to me then. After sending many applications, I finally got an offer, but unfortunately, it did not work out the way I expected. Instead of learning email marketing, I found myself doing something completely different. Today, I currently have an internship under More Than Just Emails, and I can boldly say the shift has been massive."
  }
];

const easing = [0.22, 1, 0.36, 1] as const;

export function TestimonialsSection() {
  const [activeFormat, setActiveFormat] = useState<'clients' | 'students'>('clients');

  return (
    <section className="bg-espresso py-24 px-6 lg:px-12 border-b border-mocha/30" id="testimonials">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-sans text-[12px] lg:text-[14px] font-normal uppercase tracking-[0.1em] text-mocha block mb-3">
            WHAT THEY SAY
          </span>
          <h2 className="font-display text-[30px] lg:text-[50px] text-cream font-normal leading-[1.1] tracking-[-0.02em]">
            Results speak <span className="font-italic italic font-normal text-mocha block mt-1">louder than claims.</span>
          </h2>
        </div>

        {/* Tab Toggle Buttons */}
        <div className="flex gap-3 justify-center mb-12 select-none">
          <button
            onClick={() => setActiveFormat('clients')}
            className={`px-[14px] py-[10px] rounded-[10px] text-[12px] lg:text-[14px] uppercase tracking-[0.1em] font-sans font-normal transition-all duration-500 cursor-pointer ${
              activeFormat === 'clients' 
                ? 'bg-cream text-espresso' 
                : 'border border-mocha/30 text-stone bg-transparent hover:border-cream/50 hover:text-cream'
            }`}
          >
            Client Testimonials
          </button>
          <button
            onClick={() => setActiveFormat('students')}
            className={`px-[14px] py-[10px] rounded-[10px] text-[12px] lg:text-[14px] uppercase tracking-[0.1em] font-sans font-normal transition-all duration-500 cursor-pointer ${
              activeFormat === 'students' 
                ? 'bg-cream text-espresso' 
                : 'border border-mocha/30 text-stone bg-transparent hover:border-cream/50 hover:text-cream'
            }`}
          >
            Student Results
          </button>
        </div>

        {/* AnimatePresence for Tab Transitions */}
        <div className="overflow-hidden min-h-[350px]">
          <AnimatePresence mode="wait">
            {activeFormat === 'clients' ? (
              <motion.div
                key="clients"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: easing }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              >
                {clientTestimonials.map((item) => (
                  <div 
                    key={item.name}
                    className="bg-espresso/50 rounded-[10px] p-7 border border-mocha/30 shadow-none flex flex-col gap-5 smooth-transition"
                  >
                    {/* Person header */}
                    <div className="flex items-center gap-4">
                      
                      {/* Photo — rounded 10px */}
                      <div className="h-14 w-14 shrink-0 rounded-[10px] overflow-hidden border border-mocha/30 bg-mocha/20 flex items-center justify-center relative">
                        <img
                          src={item.photo}
                          alt={item.name}
                          className="h-full w-full object-cover object-top"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.classList.add('initials-fallback');
                          }}
                        />
                        <span className="hidden initials-fallback:flex h-full w-full items-center justify-center font-display font-normal text-cream text-lg bg-mocha">
                          {item.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>

                      {/* Name + role */}
                      <div>
                        <p className="font-display font-normal text-cream text-[18px] leading-tight">
                          {item.name}
                        </p>
                        <p className="font-sans text-stone text-[11px] uppercase tracking-[0.1em] mt-0.5 font-normal">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="border-l-2 border-mocha pl-4 font-italic italic text-cream/90 text-[16px] leading-[1.7]">
                      "{item.quote}"
                    </blockquote>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="students"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: easing }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
              >
                {studentTestimonials.map((item) => (
                  <div 
                    key={item.name}
                    className="bg-espresso/50 rounded-[10px] p-7 border border-mocha/30 shadow-none flex flex-col gap-5 smooth-transition"
                  >
                    {/* Person header */}
                    <div className="flex items-center gap-4">
                      
                      {/* Photo — rounded 10px */}
                      <div className="h-14 w-14 shrink-0 rounded-[10px] overflow-hidden border border-mocha/30 bg-mocha/20 flex items-center justify-center relative">
                        <img
                          src={item.photo}
                          alt={item.name}
                          className="h-full w-full object-cover object-top"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.classList.add('initials-fallback');
                          }}
                        />
                        <span className="hidden initials-fallback:flex h-full w-full items-center justify-center font-display font-normal text-cream text-lg bg-mocha">
                          {item.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>

                      {/* Name + role */}
                      <div>
                        <p className="font-display font-normal text-cream text-[18px] leading-tight">
                          {item.name}
                        </p>
                        <p className="font-sans text-stone text-[11px] uppercase tracking-[0.1em] mt-0.5 font-normal">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="border-l-2 border-mocha pl-4 font-italic italic text-cream/90 text-[16px] leading-[1.7]">
                      "{item.quote}"
                    </blockquote>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
