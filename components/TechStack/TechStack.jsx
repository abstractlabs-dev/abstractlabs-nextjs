import TechStackClient from './TechStackClient';
import styles from './TechStack.module.css';

export default function TechStack({ techStack }) {
  return (
    <section className={styles.section} id="tech">
      <div className="container">
        <div className="section-label">
          <span>—</span> Technology stack
        </div>
        <h2 className={styles.heading}>Technology Stack.</h2>

        <TechStackClient techStack={techStack} />
      </div>
    </section>
  );
}
