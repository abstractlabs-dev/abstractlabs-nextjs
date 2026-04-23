import { navLinks, solutions, webProjects, aiProjects, techStack, processSteps } from '@/data/content';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Studio from '@/components/Studio/Studio';
import Solutions from '@/components/Solutions/Solutions';
import ProjectShowcase from '@/components/ProjectShowcase/ProjectShowcase';
import TechStack from '@/components/TechStack/TechStack';
import HowWeWork from '@/components/HowWeWork/HowWeWork';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';
import Marquee from '@/components/Marquee/Marquee';
import ClientEffectsWrapper from '@/components/ClientEffectsWrapper';

export default function Page() {
  return (
    <ClientEffectsWrapper>
      <Navbar navLinks={navLinks} />
      <main>
        <Hero />
        <Marquee />
        <Studio />
        <Solutions solutions={solutions} />
        <ProjectShowcase webProjects={webProjects} aiProjects={aiProjects} />
        <TechStack techStack={techStack} />
        <HowWeWork processSteps={processSteps} />
        <CTA />
      </main>
      <Footer navLinks={navLinks} />
    </ClientEffectsWrapper>
  );
}
