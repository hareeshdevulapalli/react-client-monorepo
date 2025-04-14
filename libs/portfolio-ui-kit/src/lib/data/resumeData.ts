import { Resume } from '../types/resume';

export const resumeData: Resume = {
  education: [
    {
      school: 'Purdue University',
      degree: 'MS in Computer Science',
      location: 'Hammond, IN',
      graduationDate: 'December 2022'
    },
    {
      school: 'Jawaharlal Nehru Technological University (JNTUH)',
      degree: 'Bachelors in Computer Science',
      location: 'Hyderabad, India',
      graduationDate: 'May 2019'
    }
  ],
  workExperience: [
    {
      company: 'Group 1001',
      location: 'San Jose, CA (Remote)',
      title: 'Software Engineer II',
      startDate: 'March 2024',
      endDate: 'Present',
      responsibilities: [
        'Customized Material themes to align with branding, accessibility(W3C) and enhance user experience across 4 insurance products',
        'Built scalable shared services, custom pipes, and utility libraries in a mono-repo Angular (v18) environment to manage tasks such as serialization, deserialization, and asynchronous communication across dynamic form configurations',
        'Developed a Doc-AI feedback service integrated with Apryse WebViewer to split documents and save annotations, significantly improving form processing efficiency',
        'Implemented a real-time Threads/Notes service for policy discussions using WebSockets with NestJS; also led UI/UX design in Figma',
        'Designed the Producer and Client Onboarding microservices with robust APIs, integrating business rules, and validation workflows',
        'Maintained Storybook stories for developing and testing UI components in isolation, improving component reusability, documentation, and reducing technical debt by addressing inconsistencies in legacy components, resulting in a 7% reduction in codebase size'
      ]
    },
    {
      company: 'Group 1001',
      location: 'San Jose, CA (Remote)',
      title: 'Software Engineer I - Frontend',
      startDate: 'December 2022',
      endDate: 'March 2024',
      responsibilities: [
        'Applied configuration-driven architecture for forms using Angular Formly, incorporating form generation, custom validations and error handling mechanisms, which improved case generation and data efficiency while reducing form submission errors by 30%',
        'Migrated library-specific state management from manual RxJS Observables to centralized NgRx architecture, enhancing application scalability, enforcing unidirectional data flow, and reducing debugging complexity across modules',
        'Provided critical client support during key phases of Delaware life insurance product releases, ensuring smooth deployments, resolving high-priority issues, and facilitating successful product rollouts that met client expectations and deadlines',
        'Leveraged GraphQL to strategically reduce component-level calls, optimizing common services and improving overall system performance, resulting in a 10% reduction in API response times',
        'Ensured over 90% code coverage in critical application modules by rigorously applying Test-Driven Development (TDD), leading to improved reliability and reduced regressions'
      ]
    },
    {
      company: 'Group 1001',
      location: 'San Jose, CA (Remote)',
      title: 'Software Engineer Intern',
      startDate: 'May 2022',
      endDate: 'December 2022',
      responsibilities: [
        'Developed, documented, and executed Cypress end-to-end automated tests as part of the overall build and deployment lifecycle',
        'Created responsive styled-components for all devices using Material & BootStrap5 and resolved high-priority bugs without regressions'
      ]
    },
    {
      company: 'Purdue University Northwest',
      location: 'Hammond, IN',
      title: 'Frontend Developer',
      startDate: 'January 2022',
      endDate: 'May 2022',
      responsibilities: [
        'Provided interactive dashboards using React, Node.js, and MongoDB to track the progress of robots tasks in real-time, enhancing monitoring efficiency by 40%',
        'Refined legacy code and streamlined the process of job assignment and tracking by adhering to the principles of clean architecture'
      ]
    },
    {
      company: 'Berkadia - Berkshire Hathaway and Jefferies Financial Group',
      location: 'Hyderabad, India',
      title: 'Associate Software Engineer',
      startDate: 'October 2018',
      endDate: 'August 2021',
      responsibilities: [
        'Designed and developed interactive real-estate brochures with integrated Google maps using React, enabling users to customize layouts, styles, and inputs, dynamically generating visually appealing and data-driven format mapping experience',
        'Reduced running time for custom Google Maps JavaScript API calculations from 7 to 3 seconds using JavaScript Web workers',
        'Optimized rendering and improved load times by 70% by implementing Redux for efficient state management, and leveraging critical path rendering techniques to streamline data flow and prioritize painting of essential content',
        'Implemented interactive information dialogs for map markers, allowing users to drag and drop dialogs for better visibility without losing the position of multiple dialogs, enhancing user control and map usability',
        'Integrated export functionality into the Google Maps page, enabling users to export maps and data in various file formats such as PDF and JPG, facilitating easy sharing and reporting across different products',
        'Exposed vital features of custom Google Maps as a common web component, resulting in seamless integrations across products',
        'Engineered robust RESTful APIs and a NodeJS-based notification service leveraging MongoDB for user subscription management and real-time updates. Used CQRS to separate read and write operations for improving system responsiveness and performance by 15%',
        'Championed the Hackathon twice – first by innovating a method to significantly reduce contract writing time and later by leading a team of 5 to establish a resource-sharing hub'
      ]
    },
    {
      company: 'Defense Research and Development Organization (DRDO)',
      location: 'Hyderabad, India',
      title: 'Summer Intern',
      startDate: 'August 2018',
      endDate: 'September 2018',
      responsibilities: [
        'Implemented three-stage child-to-child pipelines and assessment of global variables in a shared thread environment using Java',
        'Assessed and optimized thread-safe operations on shared buffer for the classic Producer-Consumer problem using synchronization to prevent race conditions and ReentrantLock to manage access while ensuring 100% data consistency'
      ]
    }
  ],
  projects: [
    {
      name: 'Two-Level Adaptive Branch Prediction',
      date: 'September 2021-December 2021',
      description: [
        'Collaborated with a team of 3 to predict the outcome of a branch using two levels of branch history information by writing an Optimized algorithm that brings down the prediction (>90%) within 7 to 10 seconds using C-language.'
      ]
    },
    {
      name: 'Faculty day-to-day activities',
      date: 'September 2018-March 2019',
      description: [
        'Designed and developed an android application that assisted faculty to manage schedules, funds, and assessments by providing interactive alert and notification features.'
      ]
    },
    {
      name: 'Securing an image over public channel',
      date: 'December 2017-April 2018',
      description: [
        'Protected academic documents transmitted over public channels using Python tool backed by RSA encryption and decryption techniques.'
      ]
    }
  ],
  skills: {
    webTechnologies: ['Angular', 'React', 'Node.js', 'NestJS', 'Redux', 'GraphQL', 'Jest', 'Cypress', 'Bootstrap5', 'NGRX', 'Formly', 'Storybook'],
    programmingLanguages: ['JavaScript', 'TypeScript', 'Java', 'Python', 'HTML', 'CSS', 'SCSS'],
    toolsAndDatabases: ['Git', 'Gitlab', 'GitHub', 'MySQL', 'MongoDB', 'PostgreSQL', 'Insomnia', 'Docker', 'Postman', 'AWS']
  }
};
