'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './TechStack.module.css';

export default function TechStackClient({ techStack }) {
  const ref = useScrollReveal();

  return (
    <div className={styles.grid} ref={ref}>
      {techStack.map((group) => (
        <div key={group.category} className={`${styles.col} reveal-up`}>
          <div className={styles.colHead} style={{ '--c': group.color }}>
            <span className={styles.dot} style={{ background: group.color }} />
            {group.category}
          </div>
          <div className={styles.items}>
            {group.items.map((item, i) => (
              <div
                key={item}
                className={styles.pill}
                style={{ '--c': group.color, animationDelay: `${i * 0.15}s` }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
