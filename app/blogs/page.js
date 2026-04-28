import CTA from '@/components/CTA/CTA';

export const metadata = {
  title: 'Insights & Blogs | AbstractLabs',
  description: 'Our thoughts on engineering, design, and building the future of the web.',
};

const blogPosts = [
  {
    title: "The Future of Web Performance in 2026",
    excerpt: "Exploring the latest techniques in frontend architecture, from edge computing to next-gen rendering patterns.",
    date: "April 20, 2026",
    category: "Engineering"
  },
  {
    title: "Designing for the Dark Mode Era",
    excerpt: "How to craft perfect color palettes that look stunning in both light and dark environments.",
    date: "April 15, 2026",
    category: "Design"
  },
  {
    title: "Integrating AI into Traditional SaaS",
    excerpt: "A practical guide to adding intelligence to your existing platforms without rewriting the core architecture.",
    date: "April 02, 2026",
    category: "AI & Tech"
  }
];

export default function BlogsPage() {
  return (
    <>
      <section className="container" style={{ paddingTop: '160px', paddingBottom: '120px' }}>
        <div className="section-label fade-up"><span>05</span> Insights</div>
        <h1 className="fade-up" style={{ fontSize: '48px', fontWeight: '600', marginBottom: '48px', letterSpacing: '-0.03em' }}>
          Our <span style={{ color: 'var(--accent)' }}>Thoughts</span>
        </h1>

        <div className="fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              style={{ 
                background: 'var(--bg-card)', 
                padding: '32px', 
                borderRadius: 'var(--radius-lg)', 
                border: '1px solid var(--border)',
                transition: 'all var(--transition)',
                cursor: 'pointer'
              }}
              // Next.js doesn't love inline event handlers on Server Components for styling 
              // but standard CSS classes are better here. I will just let the global CSS handle transitions.
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                <span>{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '12px', lineHeight: '1.4' }}>{post.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{post.excerpt}</p>
              
              <div style={{ marginTop: '24px', color: 'var(--accent)', fontWeight: '500', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Read Article <span style={{ fontSize: '18px' }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
