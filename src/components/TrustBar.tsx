import React from 'react';

const brands = [
  'Malzfotoz',
  'TLC Foundation',
  'Lilysoya',
  'Ribs Conference',
  'B-Scent Villa'
];

export function TrustBar() {
  return (
    <section className="bg-mocha overflow-hidden relative select-none h-[48px] lg:h-[60px] flex items-center border-y border-linen/10">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-start gap-8 relative w-full">
        {/* Left static label */}
        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-cream/70 shrink-0 select-none z-10 bg-mocha pr-4 hidden md:inline-block">
          TRUSTED BY
        </span>
        
        {/* Scrolling track */}
        <div className="overflow-hidden w-full relative flex items-center">
          {/* Matches Shelby marquee animation in new-canvas: infinite horizontal translation | duration: 28s | easing: linear */}
          {/* Matches Shelby Hover Effect: hover:[animation-play-state:paused] | transition-duration: 0.2s */}
          <div 
            className="flex animate-infinite-scroll whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer smooth-transition"
            style={{ animationDuration: '28s' }}
          >
            {[...brands, ...brands].map((brand, i) => (
              <span key={i} className="inline-flex items-center">
                <span className="font-sans font-bold text-[15px] uppercase tracking-[0.1em] text-cream mx-8">
                  {brand}
                </span>
                <span className="text-cream/40 text-[10px]">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
