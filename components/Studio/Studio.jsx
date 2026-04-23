import StudioClient from './StudioClient';
import styles from './Studio.module.css';

export default function Studio() {
  return (
    <section className={styles.studio} id="about">
      <StudioClient />
    </section>
  );
}
