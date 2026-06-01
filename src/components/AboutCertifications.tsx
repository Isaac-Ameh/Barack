import React from 'react';
import { motion } from 'motion/react';

const CERT_IMAGES = [
  "/Certifications/08222072eaec5d9a9360fd32fa2bc4db.jpg",
  "/Certifications/2b629033ac062fa7e4509eafec494cdf.jpg",
  "/Certifications/53b8bfd13f03b35f54cf67e45cc07499.jpg",
  "/Certifications/c17d67cc0a19f3492cf8987d2904c8e4.jpg",
  "/Certifications/c4733aebdeaf74995d6d3c7e81a1d817.jpg",
  "/Certifications/f3b2efb7e7fee4fdcfb519d1004592c7.jpg"
];

const easing = [0.22, 1, 0.36, 1] as const;

export default function AboutCertifications() {
  return (
    <section className="bg-linen py-24 md:py-36 px-6 relative overflow-hidden border-b border-linen">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-mocha font-bold text-[10px] uppercase tracking-[0.38em] mb-4 block">
            CREDENTIALS
          </span>
          <h2 className="font-display font-semibold text-espresso text-[clamp(2.4rem,4.5vw,4.5rem)] tracking-tighter leading-[1.0] mb-5">
            Global Certifications
          </h2>
          <p className="font-sans text-stone text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto">
            Trained by the world's leading platforms to deliver high-precision email marketing solutions for global and local brands.
          </p>
        </div>

        {/* Certificate Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto"
        >
          {CERT_IMAGES.map((src, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 24, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: easing } }
              }}
              className="bg-white rounded-2xl overflow-hidden border border-linen/70 shadow-[0_12px_40px_rgba(76,57,45,0.07)] hover:shadow-[0_20px_60px_rgba(76,57,45,0.13)] hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* TODO: Verify cert image paths match /Certifications/ */}
              <img
                src={src}
                alt={`Henry Okeke Certification ${index + 1}`}
                className="w-full object-cover select-none filter contrast-[1.02] brightness-[0.98]"
                style={{ aspectRatio: '4/3' }}
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.onerror = null;
                  // beautiful fallback box with text if image fails to load
                  t.style.display = 'none';
                  const parent = t.parentElement;
                  if (parent) {
                    const fallbackDiv = document.createElement('div');
                    fallbackDiv.className = "w-full h-full bg-cream flex items-center justify-center p-6 text-center text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-mocha";
                    fallbackDiv.innerText = `Verified Credential #${index + 1}`;
                    parent.appendChild(fallbackDiv);
                  }
                }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
