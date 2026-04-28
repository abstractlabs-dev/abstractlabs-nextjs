import ProjectShowcase from '@/components/ProjectShowcase/ProjectShowcase';
import CTA from '@/components/CTA/CTA';
import { webProjects, aiProjects } from '@/data/content';

export const metadata = {
  title: 'Solutions & Work | AbstractLabs',
  description: 'Explore our portfolio of successful projects, case studies, and scalable AI solutions.',
};

export default function SolutionsPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}>
        <ProjectShowcase webProjects={webProjects} aiProjects={aiProjects} />
      </div>
      <CTA />
    </>
  );
}
