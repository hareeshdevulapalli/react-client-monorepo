import { Section } from '@react-client-monorepo/common-ui-kit';
import { Education as EducationType } from '../../types/resume';
import styles from './Education.module.scss';

interface EducationProps {
  education: EducationType[];
}

export const Education = ({ education }: EducationProps) => {
  return (
    <Section title="Education">
      {education.map((edu, index) => (
        <div key={index} className={styles.education}>
          <h3 className={styles.school}>{edu.school}</h3>
          <p className={styles.degree}>{edu.degree}</p>
          <div className={styles.details}>
            <span>{edu.location}</span>
            <span>{edu.graduationDate}</span>
          </div>
        </div>
      ))}
    </Section>
  );
};
