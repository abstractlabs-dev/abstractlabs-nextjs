import HowWeWorkClient from './HowWeWorkClient';
import styles from './HowWeWork.module.css';

export default function HowWeWork({ processSteps }) {
  return (
    <section className={styles.section} id="process">
      <div className="container">
        <div className="section-label">
          <span>—</span> How we work
        </div>
        <h2 className={styles.heading}>Our Process.</h2>

        <HowWeWorkClient processSteps={processSteps} />
      </div>
    </section>
  );
}
