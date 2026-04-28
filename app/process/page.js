import HowWeWork from '@/components/HowWeWork/HowWeWork';
import CTA from '@/components/CTA/CTA';
import { processSteps } from '@/data/content';

export const metadata = {
  title: 'Our Process | AbstractLabs',
  description: 'Learn how we transform ideas into fully functional, high-performance digital products.',
};

export default function ProcessPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}>
        <HowWeWork processSteps={processSteps} />
      </div>
      <CTA />
    </>
  );
}
