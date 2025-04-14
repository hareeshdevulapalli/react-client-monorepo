import { Section } from '@react-client-monorepo/common-ui-kit';
import { Project as ProjectType } from '../../types/resume';
import styles from './Projects.module.scss';

interface ProjectProps {
  project: ProjectType;
}

export function ProjectItem({ project }: ProjectProps) {
  return (
    <div className={styles.projectItem}>
      <div className={styles.header}>
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.date}>{project.date}</p>
      </div>
      <ul className={styles.description}>
        {project.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}

interface ProjectsSectionProps {
  projects: ProjectType[];
}

export function Projects({ projects }: ProjectsSectionProps) {
  return (
    <Section title="Projects">
      <div className={styles.container}>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}
