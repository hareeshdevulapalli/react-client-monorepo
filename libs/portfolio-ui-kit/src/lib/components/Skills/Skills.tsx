import { Section } from '@react-client-monorepo/common-ui-kit';
import { Skills as SkillsType } from '../../types/resume';
import styles from './Skills.module.scss';

interface SkillsProps {
  skills: SkillsType;
}

export function Skills({ skills }: SkillsProps) {
  return (
    <Section title="Skills">
      <div className={styles.container}>
        <div className={styles.skillGroup}>
          <h3>Web Technologies</h3>
          <div className={styles.skillList}>
            {skills.webTechnologies.map((skill, index) => (
              <span key={index} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.skillGroup}>
          <h3>Programming Languages</h3>
          <div className={styles.skillList}>
            {skills.programmingLanguages.map((skill, index) => (
              <span key={index} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.skillGroup}>
          <h3>Tools & Databases</h3>
          <div className={styles.skillList}>
            {skills.toolsAndDatabases.map((skill, index) => (
              <span key={index} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
