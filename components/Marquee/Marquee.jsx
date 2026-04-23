import styles from './Marquee.module.css';

const ITEMS = [
  'React', 'WordPress', 'Python', 'Machine Learning', 'Node.js',
  'TailwindCSS', 'AI Systems', 'Data Analytics', 'Cloud', 'TypeScript',
  'Next.js', 'Automation', 'Deep Learning', '◈', '⬡', '✦',
];

// Duplicate so the loop is seamless
const TRACK = [...ITEMS, ...ITEMS];

export default function Marquee() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.fade} />
      <div className={styles.track}>
        {TRACK.map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
      <div className={`${styles.fade} ${styles.fadeRight}`} />
    </div>
  );
}
