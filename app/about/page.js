import CTA from '@/components/CTA/CTA';

export const metadata = {
  title: 'About Us | AbstractLabs',
  description: 'Abstract Labs is an elite group of designers, engineers, and strategists crafting digital experiences that wow and perform.',
};

export default function About() {
  return (
    <>
      <section className="container" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="section-label fade-up"><span>01</span> Who We Are</div>
        <h1 className="fade-up" style={{ fontSize: '48px', fontWeight: '600', marginBottom: '24px', letterSpacing: '-0.03em' }}>
          We craft digital experiences that <span style={{ color: 'var(--accent)' }}>wow</span> and perform.
        </h1>
        <p className="fade-up" style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '700px', lineHeight: '1.8' }}>
          Abstract Labs is an elite group of designers, engineers, and strategists. 
          We believe that software should be beautiful, intuitive, and blisteringly fast. 
          Our approach combines deep technical expertise with a sharp eye for modern, premium aesthetics.
        </p>
      </section>
      
      <section className="container" style={{ paddingBottom: '120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div style={{ background: 'var(--bg-card)', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Our Mission</h3>
            <p style={{ color: 'var(--text-secondary)' }}>To empower businesses with technology that is as robust under the hood as it is stunning on the surface.</p>
          </div>
          <div style={{ background: 'var(--bg-card)', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Our Vision</h3>
            <p style={{ color: 'var(--text-secondary)' }}>To set the standard for modern web platforms and AI-driven systems globally.</p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
