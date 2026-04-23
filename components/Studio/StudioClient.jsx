'use client';
import { useRef } from 'react';
import { useCounter, useInView } from '@/hooks/useCounter';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './Studio.module.css';

const STATS = [
  { target: 20, suffix: '+', label: 'Projects delivered' },
  { target: 2,  suffix: '+', label: 'Years in business' },
  { target: 100, suffix: '%', label: 'Client satisfaction' },
];

function AnimatedStat({ target, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.8, rootMargin: '0px 0px -40px 0px' });
  const value  = useCounter(target, inView, 1800);

  return (
    <div className={styles.stat} ref={ref}>
      <span className={styles.statValue}>
        {value}{suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

function TechIllustration() {
  return (
    <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
      <circle cx="240" cy="240" r="200" stroke="#1f2937" strokeWidth="1" strokeDasharray="6 4" />
      <circle cx="240" cy="240" r="130" stroke="#1f2937" strokeWidth="1" />
      <circle cx="240" cy="240" r="60" fill="rgba(79,142,247,0.08)" stroke="rgba(79,142,247,0.3)" strokeWidth="1" />
      <circle cx="240" cy="240" r="30" fill="rgba(79,142,247,0.14)" />
      <polygon points="240,220 255,248 225,248" fill="rgba(79,142,247,0.9)" />
      <circle cx="240" cy="40" r="5" fill="#4f8ef7" opacity="0.8" />
      <circle cx="399" cy="160" r="4" fill="#7c3aed" opacity="0.7" />
      <circle cx="399" cy="320" r="6" fill="#22c55e" opacity="0.6" />
      <circle cx="240" cy="440" r="4" fill="#4f8ef7" opacity="0.6" />
      <circle cx="81" cy="320" r="5" fill="#7c3aed" opacity="0.5" />
      <circle cx="81" cy="160" r="4" fill="#22c55e" opacity="0.7" />
      <line x1="240" y1="40" x2="240" y2="180" stroke="rgba(79,142,247,0.2)" strokeWidth="1" />
      <line x1="399" y1="160" x2="270" y2="230" stroke="rgba(124,58,237,0.2)" strokeWidth="1" />
      <line x1="399" y1="320" x2="270" y2="250" stroke="rgba(34,197,94,0.2)" strokeWidth="1" />
      <line x1="240" y1="440" x2="240" y2="300" stroke="rgba(79,142,247,0.2)" strokeWidth="1" />
      <line x1="81" y1="160" x2="210" y2="230" stroke="rgba(34,197,94,0.2)" strokeWidth="1" />
      <line x1="40" y1="220" x2="180" y2="220" stroke="#1f2937" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="300" y1="220" x2="440" y2="220" stroke="#1f2937" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="40" y1="260" x2="180" y2="260" stroke="#1f2937" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="300" y1="260" x2="440" y2="260" stroke="#1f2937" strokeWidth="1" strokeDasharray="4 3" />
      <rect x="355" y="85" width="12" height="12" rx="2" fill="rgba(79,142,247,0.4)" />
      <rect x="110" y="380" width="10" height="10" rx="2" fill="rgba(124,58,237,0.4)" />
      <rect x="355" y="380" width="8" height="8" rx="2" fill="rgba(34,197,94,0.4)" />
    </svg>
  );
}

export default function StudioClient() {
  const ref = useScrollReveal();

  return (
    <div className={`container ${styles.inner}`} ref={ref}>
      <div className={`${styles.left} reveal-left`}>
        <div className="section-label">
          <span>—</span> About Abstract Labs
        </div>
        <h2 className={styles.heading}>
          A modern technology<br />
          <span className={styles.accent}>studio.</span>
        </h2>
        <p className={styles.body}>
          Abstract Labs is a modern technology studio focused on building scalable digital
          systems and intelligent automation tools.
        </p>
        <p className={styles.body}>
          We partner with companies to design, develop, and deploy solutions ranging from
          high-performance websites to advanced AI-driven platforms.
        </p>
        <p className={styles.body}>
          Our work blends software engineering, machine intelligence, and product thinking
          to deliver systems that scale.
        </p>

        <div className={styles.stats}>
          {STATS.map((s) => (
            <AnimatedStat key={s.label} {...s} />
          ))}
        </div>
      </div>

      <div className={`${styles.right} reveal-right`}>
        <TechIllustration />
      </div>
    </div>
  );
}
