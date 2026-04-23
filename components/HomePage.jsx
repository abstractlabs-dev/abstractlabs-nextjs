'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Studio from '@/components/Studio/Studio';
import Solutions from '@/components/Solutions/Solutions';
import ProjectShowcase from '@/components/ProjectShowcase/ProjectShowcase';
import TechStack from '@/components/TechStack/TechStack';
import HowWeWork from '@/components/HowWeWork/HowWeWork';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
import CursorGlow from '@/components/CursorGlow/CursorGlow';
import Marquee from '@/components/Marquee/Marquee';

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Custom cursor — always rendered */}
      <CursorGlow />

      <LoadingScreen onDone={() => setLoaded(true)} />
      {loaded && (
        <div className="page-enter">
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <Studio />
            <Solutions />
            <ProjectShowcase />
            <TechStack />
            <HowWeWork />
            <CTA />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
