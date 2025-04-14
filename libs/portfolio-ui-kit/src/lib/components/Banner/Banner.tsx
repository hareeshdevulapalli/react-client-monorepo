import styles from './Banner.module.scss';

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <span role="img" aria-label="Construction sign">🚧</span>
      <p>Portfolio under construction - Stay tuned for updates!</p>
      <span role="img" aria-label="Construction sign">🚧</span>
    </div>
  );
};
