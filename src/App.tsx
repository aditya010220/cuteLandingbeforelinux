import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillExchange } from './components/SkillExchange';
import { Timeline } from './components/Timeline';
import { BentoGrid } from './components/BentoGrid';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="bg-warm-white min-h-screen font-sans text-charcoal selection:bg-lavender selection:text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <SkillExchange />
        <Timeline />
        <BentoGrid />
        <SocialProof />
        <Pricing />
      </main>
      <Footer />
    </div>);

}
