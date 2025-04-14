import { Section } from '@react-client-monorepo/common-ui-kit';
import { WorkExperience as WorkExperienceType } from '../../types/resume';
import styles from './WorkExperience.module.scss';

interface WorkExperienceProps {
  experience: WorkExperienceType;
}

export function WorkExperienceItem({ experience }: WorkExperienceProps) {
  return (
    <div className={styles.experienceItem}>
      <div className={styles.header}>
        <h3 className={styles.title}>{experience.title}</h3>
        <p className={styles.company}>{experience.company}</p>
        <p className={styles.duration}>
          {experience.startDate} - {experience.endDate} | {experience.location}
        </p>
      </div>
      <ul className={styles.responsibilities}>
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
}

interface WorkExperienceSectionProps {
  experiences: WorkExperienceType[];
}

export function WorkExperience({ experiences }: WorkExperienceSectionProps) {
  return (
    <Section title="Work Experience">
      <div className={styles.container}>
        {experiences.map((experience, index) => (
          <WorkExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </Section>
  );
}
