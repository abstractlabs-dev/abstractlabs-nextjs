import Hero from '@/components/Hero/Hero';
import Studio from '@/components/Studio/Studio';
import TechStack from '@/components/TechStack/TechStack';
import CTA from '@/components/CTA/CTA';
import Marquee from '@/components/Marquee/Marquee';
import { techStack } from '@/data/content';

export default function Page() {
  return (
    <>
      <Hero />
      <Marquee />
      <Studio />
      <TechStack techStack={techStack} />
      <CTA />
    </>
  );
}
