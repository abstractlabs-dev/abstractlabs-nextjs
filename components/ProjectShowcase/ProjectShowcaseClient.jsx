'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './ProjectShowcase.module.css';

function WebCard({ project, index }) {
  return (
    <article className={styles.webCard} style={{ animationDelay: `${index * 0.08}s` }}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{project.name}</h3>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.visitBtn}
          aria-label={`Visit ${project.name} website`}
        >
          Visit ↗
        </a>
      </div>
      <p className={styles.cardDesc}>{project.description}</p>
      <div className={styles.tech}>
        {project.tech.map((t) => (
          <span key={t} className={styles.techTag}>{t}</span>
        ))}
      </div>
    </article>
  );
}

function AiCard({ project, index }) {
  return (
    <article className={styles.aiCard} style={{ animationDelay: `${index * 0.12}s` }}>
      <div className={styles.scanLine} aria-hidden="true" />
      <div className={styles.aiHeader}>
        <span className={styles.aiLabel}>AI SYSTEM</span>
        <div className={styles.aiDots}>
          <span /><span /><span />
        </div>
      </div>
      <h3 className={styles.aiTitle}>{project.name}</h3>
      <p className={styles.aiDesc}>{project.description}</p>
      <div className={styles.aiBottom}>
        <div>
          <h4 className={styles.aiSubLabel}>Key capabilities</h4>
          <ul className={styles.capList}>
            {project.capabilities.map((cap) => (
              <li key={cap} className={styles.capItem}>
                <span className={styles.capDot} /> {cap}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={styles.aiSubLabel}>Technology</h4>
          <div className={styles.aiTech}>
            {project.tech.map((t) => (
              <span key={t} className={styles.aiTag}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectShowcaseClient({ webProjects, aiProjects }) {
  const webRef = useScrollReveal();
  const aiRef = useScrollReveal();

  return (
    <>
      <div ref={webRef}>
        <div className="section-label reveal-up">
          <span>—</span> Project showcase / Web platforms
        </div>
        <h2 className={`${styles.heading} reveal-up`}>Web Platforms.</h2>
        <div className={styles.webGrid}>
          {webProjects.map((p, i) => (
            <WebCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>

      <div className={styles.aiSection} ref={aiRef}>
        <div className="section-label reveal-up">
          <span>—</span> Project showcase / AI & custom solutions
        </div>
        <h2 className={`${styles.heading} reveal-up`}>AI & Custom Solutions.</h2>
        <div className={styles.aiGrid}>
          {aiProjects.map((p, i) => (
            <AiCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}
