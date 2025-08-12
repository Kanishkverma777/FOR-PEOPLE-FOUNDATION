import React from 'react';
import { Hero } from '../components/ui/Hero';
import { AboutSection } from '../components/ui/AboutSection';
import { ImpactStats } from '../components/ui/ImpactStats';
import { siteData } from '../data/content';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title={siteData.hero.title}
        subtitle={siteData.hero.subtitle}
        ctaText={siteData.hero.ctaText}
        backgroundImage={siteData.hero.backgroundImage}
      />
      
      <AboutSection
        title={siteData.about.title}
        description={siteData.about.description}
        mission={siteData.about.mission}
        vision={siteData.about.vision}
        values={siteData.about.values}
        image={siteData.about.image}
      />

      <ImpactStats stats={siteData.impact} />     
    
    </div>
  );
};