import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { TrustBar } from '../components/TrustBar';
import { MetricsSection } from '../components/MetricsSection';
import { AboutSection } from '../components/AboutSection';
import { ShowcaseSection } from '../components/ShowcaseSection';
import { CaseStudyPreview } from '../components/CaseStudyPreview';
import { EmailDesignsPreview } from '../components/EmailDesignsPreview';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CollabSection } from '../components/CollabSection';
import { ReadySection } from '../components/ReadySection';

export function HomePage() {
  return (
    <>
      {/* 1. HeroSection -> bg-espresso (dark) */}
      <HeroSection />

      {/* 2. TrustBar -> bg-cream (light) */}
      <TrustBar />

      {/* 3. MetricsSection -> bg-espresso (dark) */}
      <MetricsSection />

      {/* 4. AboutSection -> bg-cream (light) */}
      <AboutSection />

      {/* 5. ShowcaseSection -> bg-espresso (dark) */}
      <ShowcaseSection />

      {/* 6. CaseStudyPreview -> bg-cream (light) */}
      <CaseStudyPreview />

      {/* 7. EmailDesignsPreview -> bg-linen (mid-light contrast break) */}
      <EmailDesignsPreview />

      {/* 8. TestimonialsSection -> bg-cream (light) */}
      <TestimonialsSection />

      {/* 9. CollabSection -> bg-linen (mid-light contrast break) */}
      <CollabSection />

      {/* 10. ReadySection -> bg-espresso (dark) */}
      <ReadySection />
    </>
  );
}
