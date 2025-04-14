export interface Education {
  school: string;
  degree: string;
  location: string;
  graduationDate: string;
}

export interface WorkExperience {
  company: string;
  location: string;
  title: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  date: string;
  description: string[];
}

export interface Skills {
  webTechnologies: string[];
  programmingLanguages: string[];
  toolsAndDatabases: string[];
}

export interface Resume {
  education: Education[];
  workExperience: WorkExperience[];
  projects: Project[];
  skills: Skills;
}
