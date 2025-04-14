import { Section } from '@react-client-monorepo/common-ui-kit';
import { 
  Banner, 
  Contact,
  Education, 
  WorkExperience, 
  Projects, 
  Skills, 
  selectResume 
} from '@react-client-monorepo/portfolio-ui-kit';
import { useSelector } from 'react-redux';
import styles from './app.module.scss';

export function App() {
  const resume = useSelector(selectResume);

  if (!resume) {
    return <div>Loading...</div>;
  }

  const currentJob = resume.workExperience[0]; // Most recent job

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Contact />
        <Section>
          <h2>{currentJob.title} at {currentJob.company}</h2>
          <p>
            Experienced software engineer with more than 5 years of experience specializing in {resume.skills.webTechnologies.slice(0, 3).join(', ')}, 
            and {resume.skills.programmingLanguages.slice(0, 3).join(', ')}. 
            Currently working at {currentJob.company}, focused on building scalable and modern web applications.
          </p>
        </Section>
        <Banner />
        <WorkExperience experiences={resume.workExperience} />
        <Education education={resume.education} />
        <Projects projects={resume.projects} />
        <Skills skills={resume.skills} />
      </main>
    </div>
  );
}

export default App;
