import ProjectShowcaseClient from './ProjectShowcaseClient';
import styles from './ProjectShowcase.module.css';

export default function ProjectShowcase({ webProjects, aiProjects }) {
  return (
    <section className={styles.section} id="work">
      <div className="container">
        <ProjectShowcaseClient webProjects={webProjects} aiProjects={aiProjects} />
      </div>
    </section>
  );
}
