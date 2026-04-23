'use client';
import { useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './Solutions.module.css';

export default function SolutionsClient({ solutions }) {
  const [hovered, setHovered] = useState(null);
  const ref = useScrollReveal();

  return (
    <div className={styles.grid} ref={ref}>
      {solutions.map((sol) => (
        <div
          key={sol.id}
          className={`${styles.card} ${hovered === sol.id ? styles.cardActive : ''} reveal-up`}
          onMouseEnter={() => setHovered(sol.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.cardHead}>
            <span className={styles.icon}>{sol.icon}</span>
            <div>
              <h3 className={styles.title}>{sol.title}</h3>
              <p className={styles.subtitle}>{sol.subtitle}</p>
            </div>
          </div>
          <p className={styles.desc}>{sol.description}</p>
          <div className={styles.row}>
            <div>
              <h4 className={styles.rowLabel}>Technologies</h4>
              <div className={styles.tags}>
                {sol.technologies.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className={styles.rowLabel}>Common use cases</h4>
              <ul className={styles.list}>
                {sol.useCases.map((uc) => (
                  <li key={uc} className={styles.listItem}>
                    <span className={styles.bullet}>→</span> {uc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
