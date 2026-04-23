import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.glow} />
        <div className={styles.glow2} />
      </div>
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Ready to start?</p>
        <h2 className={styles.heading}>
          Let&apos;s Build Something<br />
          <span className={styles.accent}>Intelligent Together</span>
        </h2>
        <p className={styles.sub}>
          Partner with Abstract Labs to build digital platforms and intelligent systems that scale.
        </p>
        <a href="mailto:info.abstractlabs@gmail.com" className={styles.btn}>
          Start a Project
          <span className={styles.arrow}>→</span>
        </a>
      </div>
    </section>
  );
}
