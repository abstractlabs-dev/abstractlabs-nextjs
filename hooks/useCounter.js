'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Counts from 0 → target with ease-out cubic when `active` flips to true.
 * A `delay` (ms) lets parent reveal animations finish before counting starts.
 */
export function useCounter(target, active, duration = 1800, delay = 250) {
  const [value, setValue] = useState(0);
  const rafRef     = useRef(null);
  const startRef   = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Always clean up on dep change
    clearTimeout(timeoutRef.current);
    cancelAnimationFrame(rafRef.current);

    if (!active) return;   // don't start until in-view

    timeoutRef.current = setTimeout(() => {
      startRef.current = null;

      const tick = (ts) => {
        if (!startRef.current) startRef.current = ts;
        const elapsed  = ts - startRef.current;
        const progress = Math.min(elapsed / duration, 1);
        const ease     = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        setValue(Math.round(ease * target));
        if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeoutRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]); // only re-run when active toggles — target/duration are stable

  return value;
}

/**
 * Returns true once the observed element enters the viewport (one-shot).
 * Uses stable refs so hook order is never conditional.
 */
export function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return; // already triggered — skip

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observerRef.current?.disconnect();
        }
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -60px 0px',
        ...options,
      }
    );

    observerRef.current.observe(el);

    return () => observerRef.current?.disconnect();
  // Intentionally omitting `options` from deps (treated as stable config)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, inView]);

  return inView;
}
