import Solutions from '@/components/Solutions/Solutions';
import CTA from '@/components/CTA/CTA';
import { solutions } from '@/data/content';

export const metadata = {
  title: 'Services | AbstractLabs',
  description: 'Our high-performance websites, web applications, and custom AI technology solutions.',
};

export default function ServicesPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}>
        <Solutions solutions={solutions} />
      </div>
      <CTA />
    </>
  );
}
