import { HTMLAttributes, ReactNode } from 'react';
import styles from './Section.module.scss';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  children: ReactNode;
}

export const Section = ({ 
  title, 
  children, 
  className = '', 
  ...props 
}: SectionProps) => {
  return (
    <section className={`${styles.section} ${className}`} {...props}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
};
