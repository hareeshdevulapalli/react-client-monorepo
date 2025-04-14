import styles from './Contact.module.scss';

export function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactItem}>
        <a href="tel:219-804-2554" className={styles.link}>
          <span className={styles.icon} role="img" aria-label="Phone">📞</span>
          219-804-2554
        </a>
      </div>
      <div className={styles.contactItem}>
        <a href="mailto:hareeshdevulapalli777@gmail.com" className={styles.link}>
          <span className={styles.icon} role="img" aria-label="Email">✉️</span>
          hareeshdevulapalli777@gmail.com
        </a>
      </div>
      <div className={styles.contactItem}>
        <a 
          href="https://linkedin.com/in/hareesh-devulapalli" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.link}
        >
          <span className={styles.icon} role="img" aria-label="LinkedIn">💼</span>
          linkedin.com/in/hareesh-devulapalli
        </a>
      </div>
      <div className={styles.contactItem}>
        <a 
          href="https://github.com/hareeshdevulapalli" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.link}
        >
          <span className={styles.icon} role="img" aria-label="GitHub">💻</span>
          github.com/hareeshdevulapalli
        </a>
      </div>
    </div>
  );
}
