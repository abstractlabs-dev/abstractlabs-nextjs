'use client';
import { useEffect, useRef } from 'react';
import styles from './CursorGlow.module.css';

export default function CursorGlow() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const mouse = useRef({ x: -200, y: -200 });
  const glow  = useRef({ x: -200, y: -200 });
  const raf   = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      glow.current.x = lerp(glow.current.x, mouse.current.x, 0.08);
      glow.current.y = lerp(glow.current.y, mouse.current.y, 0.08);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glow.current.x}px, ${glow.current.y}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    // Grow dot on interactive elements
    const onEnter = () => dotRef.current?.classList.add(styles.dotHover);
    const onLeave = () => dotRef.current?.classList.remove(styles.dotHover);
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Inner dot — snaps exactly */}
      <div ref={dotRef} className={styles.dot} />
      {/* Outer glow — lags behind */}
      <div ref={glowRef} className={styles.glow} />
    </>
  );
}
