'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './HowWeWork.module.css';

export default function HowWeWorkClient({ processSteps }) {
  const ref = useScrollReveal();

  return (
    <div className={styles.timeline} ref={ref}>
      <div className={styles.line} aria-hidden="true" />
      {processSteps.map((step, idx) => (
        <div
          key={step.number}
          className={`${styles.step} ${idx % 2 === 0 ? styles.stepLeft : styles.stepRight} reveal-up`}
          style={{ animationDelay: `${idx * 0.1}s` }}
        >
          <div className={styles.connector}>
            <div className={styles.node}>
              <span className={styles.nodeNum}>{step.number}</span>
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
