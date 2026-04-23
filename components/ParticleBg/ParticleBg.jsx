'use client';
import { useEffect, useRef } from 'react';
import styles from './ParticleBg.module.css';

const PARTICLE_COUNT = 60;

export default function ParticleBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    let initialized = false;

    const initParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.3 + 0.1,
      }));
      initialized = true;
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      const newWidth = parent.offsetWidth;
      const newHeight = parent.offsetHeight;
      
      // Avoid initializing on 0-height during hydration/SSR
      if (newWidth === 0 || newHeight === 0) return;

      const oldWidth = canvas.width;
      const oldHeight = canvas.height;

      canvas.width = newWidth;
      canvas.height = newHeight;

      if (!initialized) {
        initParticles();
      } else if (oldWidth > 0 && oldHeight > 0) {
        // Scale particle positions to match new canvas size without clumping
        const scaleX = newWidth / oldWidth;
        const scaleY = newHeight / oldHeight;
        particles.forEach((p) => {
          p.x *= scaleX;
          p.y *= scaleY;
        });
      }
    };

    // Modern, bulletproof observer for container dimensions
    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }
    
    // Fallback for older browsers
    window.addEventListener('resize', resize);

    const draw = () => {
      // Force clear the entire canvas area to prevent "smearing"
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (initialized) {
        // Draw connecting lines
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(79, 142, 247, ${0.05 * (1 - dist / 120)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }

        // Draw dots
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;

          // Wrap around edges correctly
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(79, 142, 247, ${p.alpha})`;
          ctx.fill();
        });
      }

      animId = requestAnimationFrame(draw);
    };
    animId = requestAnimationFrame(draw);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
