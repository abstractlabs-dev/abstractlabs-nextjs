import SolutionsClient from './SolutionsClient';
import styles from './Solutions.module.css';

export default function Solutions({ solutions }) {
  return (
    <section className={styles.section} id="solutions">
      <div className="container">
        {/* These labels and headings are now static and indexed perfectly by Google */}
        <div className="section-label">
          <span>—</span> What we do
        </div>
        <h2 className={styles.heading}>Solutions.</h2>

        <SolutionsClient solutions={solutions} />
      </div>
    </section>
  );
}
