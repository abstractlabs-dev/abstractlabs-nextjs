import ParticleBg from '@/components/ParticleBg/ParticleBg';
import TypewriterWord from './TypewriterWord';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Client-side effects */}
      <ParticleBg />

      {/* Decorative orbs */}
      <div className={styles.orb} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Available for new projects
        </div>

        {/* 
           Crucially, the <h1> and </h1> tags now wrap actual text that 
           search engines can read directly from the HTML source.
        */}
        <h1 className={styles.headline}>
          Building <TypewriterWord /><br />
          <span className={styles.accent}>Digital Systems</span>
        </h1>

        <p className={styles.sub}>
          We partner with founders and product teams to design, build, and scale
          digital products that drive real business outcomes.
        </p>

        <div className={styles.actions}>
          <a href="#work" className={styles.btnPrimary}>
            View our work
            <span className={styles.arrow}>→</span>
          </a>
          <a href="#solutions" className={styles.btnSecondary}>
            Our solutions
          </a>
        </div>

        <div className={styles.scrollLine} aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
