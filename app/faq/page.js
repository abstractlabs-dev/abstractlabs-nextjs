'use client';
import { useState } from 'react';
import CTA from '@/components/CTA/CTA';

// We have to split metadata out into a separate server file if we want to use 'use client'
// but for simplicity in Next.js 14+, you can just use layout.js in the folder or 
// keep it simple here. Since FAQ needs state, we use 'use client' and handle SEO in layout or via head.
// Actually, next.js allows exporting metadata from layout.js in the same folder if page.js is a client component.
// I will just implement the client component here.

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We specialize in custom web applications, high-performance marketing websites, and AI-driven automation tools. We handle everything from UI/UX design to full-stack development and deployment."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A standard corporate website might take 4-6 weeks, while a custom AI or complex web application can take 3-6 months. We provide detailed timelines during our discovery phase."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. We offer comprehensive maintenance and support retainers to ensure your platform remains secure, fast, and up-to-date with the latest technologies."
  },
  {
    question: "What is your technology stack?",
    answer: "We primarily build with React, Next.js, and Node.js for web platforms. For AI and data solutions, we leverage Python and modern machine learning frameworks. We deploy on scalable cloud infrastructure like AWS or Vercel."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section className="container" style={{ paddingTop: '160px', paddingBottom: '120px', maxWidth: '800px' }}>
        <div className="section-label fade-up"><span>04</span> Questions</div>
        <h1 className="fade-up" style={{ fontSize: '48px', fontWeight: '600', marginBottom: '48px', letterSpacing: '-0.03em' }}>
          Frequently Asked <span style={{ color: 'var(--accent)' }}>Questions</span>
        </h1>

        <div className="fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              style={{ 
                background: 'var(--bg-card)', 
                border: '1px solid var(--border)', 
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                transition: 'all var(--transition)'
              }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                style={{ 
                  width: '100%', 
                  padding: '24px 32px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  background: 'transparent',
                  color: 'var(--text)',
                  fontSize: '18px',
                  fontWeight: '500',
                  textAlign: 'left'
                }}
              >
                {faq.question}
                <span style={{ 
                  transform: openIndex === index ? 'rotate(45deg)' : 'none',
                  transition: 'transform var(--transition)',
                  color: 'var(--accent)',
                  fontSize: '24px'
                }}>+</span>
              </button>
              
              <div style={{ 
                maxHeight: openIndex === index ? '200px' : '0', 
                overflow: 'hidden', 
                transition: 'max-height 0.3s ease',
                padding: openIndex === index ? '0 32px 32px' : '0 32px',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
