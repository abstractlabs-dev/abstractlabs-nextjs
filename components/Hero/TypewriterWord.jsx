'use client';
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const CYCLING_WORDS = ['Intelligent', 'Scalable', 'Powerful', 'Automated'];

export default function TypewriterWord() {
  const [idx, setIdx] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = CYCLING_WORDS[idx];
    let timeout;

    if (!deleting && display.length < word.length) {
      timeout = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), 80);
    } else if (!deleting && display.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(() => setDisplay(word.slice(0, display.length - 1)), 45);
    } else if (deleting && display.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % CYCLING_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, idx]);

  return (
    <span className={styles.typeword}>
      {display}
      <span className={styles.cursor} aria-hidden="true">|</span>
    </span>
  );
}
