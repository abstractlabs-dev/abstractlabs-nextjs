'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const raf = useRef(null);
  const start = useRef(null);

  useEffect(() => {
    const duration = 1600;
    const step = (ts) => {
      if (!start.current) start.current = ts;
      const elapsed = ts - start.current;
      const p = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(p);
      if (p < 100) {
        raf.current = requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          setHidden(true);
          onDone?.();
        }, 400);
      }
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [onDone]);

  if (hidden) return null;

  return (
    <div className={`${styles.screen} ${progress === 100 ? styles.fadeOut : ''}`}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.mark}>▲</span>
          AbstractLabs
        </div>
        <div className={styles.barWrap}>
          <div className={styles.bar} style={{ width: `${progress}%` }} />
        </div>
        <span className={styles.pct}>{progress}%</span>
      </div>
    </div>
  );
}
