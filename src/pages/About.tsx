import React, { useEffect } from 'react';
import AboutHero from '../components/AboutHero';
import AboutTransition from '../components/AboutTransition';
import AboutStoryA from '../components/AboutStoryA';
import AboutStoryB from '../components/AboutStoryB';
import AboutCertifications from '../components/AboutCertifications';
import AboutWorkProcess from '../components/AboutWorkProcess';
import AboutMissionVision from '../components/AboutMissionVision';
import AboutCTA from '../components/AboutCTA';

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-cream">
      {/* 1. AboutHero */}
      <AboutHero />

      {/* 2. AboutTransition */}
      <AboutTransition />

      {/* 3. AboutStoryA */}
      <AboutStoryA />

      {/* 4. AboutStoryB */}
      <AboutStoryB />

      {/* 5. AboutCertifications */}
      <AboutCertifications />

      {/* 6. AboutWorkProcess */}
      <AboutWorkProcess />

      {/* 7. AboutMissionVision */}
      <AboutMissionVision />

      {/* 8. AboutCTA */}
      <AboutCTA />
    </div>
  );
}