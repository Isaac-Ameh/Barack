import React from 'react';
import { motion } from 'motion/react';

const VIDEO_URL = "https://cdn.pixabay.com/video/2022/10/17/135373-762403137_large.mp4";
const PORTRAIT_URL = "/assets/henry_profile.png";
const FALLBACK_PORTRAIT = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600";

const easing = [0.22, 1, 0.36, 1] as const;

export default function AboutHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: '100vh',
        minHeight: '700px',
        backgroundColor: '#2a1e17',
      }}
    >
      {/* Layer 0 — Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          filter: 'grayscale(100%) brightness(0.28)',
        }}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Layer 1 — Espresso Overlay A (directional gradient) */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(
            105deg,
            rgba(76,57,45,0.55) 0%,
            rgba(76,57,45,0.65) 30%,
            rgba(76,57,45,0.82) 60%,
            rgba(76,57,45,0.90) 100%
          )`,
        }}
      />

      {/* Layer 1 — Espresso Overlay B (vertical vignette) */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(76,57,45,0.35) 0%,
            transparent 20%,
            transparent 70%,
            rgba(76,57,45,0.5) 100%
          )`,
        }}
      />

      {/* Layer 2 — Portrait Card (z-10) */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.3, ease: easing }}
        className="absolute left-1/2 -translate-x-1/2 z-10 bg-[#F9F0EA] rounded-none overflow-hidden"
        style={{
          top: '42%',
          // custom responsive width via inline style/tailwind classes
          width: 'clamp(280px, 85vw, 480px)',
          boxShadow: 'none',
        }}
      >
        <img
          src={PORTRAIT_URL}
          alt="Henry Chibundu Okeke"
          style={{
            width: '100%',
            height: '58vh',
            minHeight: '480px',
            objectFit: 'cover',
            objectPosition: 'top center',
            display: 'block',
          }}
          onError={(e) => {
            const t = e.target as HTMLImageElement;
            t.onerror = null;
            t.src = FALLBACK_PORTRAIT;
          }}
        />
      </motion.div>

      {/* Layer 3 — Typography (z-20, above card) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: easing }}
        className="absolute left-1/2 -translate-x-1/2 w-full text-center z-20 pointer-events-none select-none"
        style={{
          top: '28%',
          whiteSpace: 'nowrap',
        }}
      >
        <p
          className="font-display"
          style={{
            color: '#F9F0EA',
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          <span
            style={{
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2.8rem, 8vw, 8rem)',
              marginRight: '0.25em',
            }}
          >
            meet
          </span>
          <span
            style={{
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: 'clamp(3.5rem, 10vw, 10rem)',
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
            }}
          >
            HENRY
          </span>
        </p>
      </motion.div>
    </section>
  );
}
