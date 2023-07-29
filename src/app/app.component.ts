import { Component } from '@angular/core';
import { Experience, ContactItem, Education } from './shared/shared-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  skills: string[] = [
    'React',
    'React Native',
    'TypeScript',
    'Node.js',
    'Java',
    'SQL',
    'Sequelize',
    'MongoDB',
    'Mongoose',
    'Docker',
    'AWS',
    'Linux',
    'Firebase',
    'NGINX',
    'Git / Github',
    'Github Actions',
    'Travis CI',
    'webpack',
  ];
  educations: Education[] = [
    {
      title: 'Web and Mobile App Development Co-op Diploma',
      term: '2 Years | Sep 2021 - Sep 2023',
      schoolName: 'cornerstone international community college of canada',
    },
    {
      title: 'Bachelor of Literature',
      term: '4 Years | Apr 2012 - Mar 2016',
      schoolName: 'doshisha university',
    },
  ];
  contactItemList: ContactItem[] = [
    {
      className: 'fas fa-envelope',
      linkTitle: 'Email',
      linkUrl: 'mailto:sho.okawa.dev@gmail.com',
    },
    {
      className: 'fas fa-phone',
      linkTitle: '(604) 365-5586',
      linkUrl: '',
    },
    {
      className: 'fab fa-linkedin',
      linkTitle: 'LinkedIn',
      linkUrl: 'https://www.linkedin.com/in/sho-okawa-1249a6222/',
    },
    {
      className: 'fab fa-github',
      linkTitle: 'Github',
      linkUrl: 'https://github.com/SOunit',
    },
  ];
  experiences: Experience[] = [
    {
      jobTitle: 'ASP.NET core MVC and AngularJS Full Stack Developer',
      term: '10 Months | Sep 2022 - Current',
      companyName: 'Synic Software Inc.',
      appeals: [
        'Create a Business Management App',
        'Refactor using Object-Oriented Programming (OOP) approach',
        'Isolate modules to reduce bugs',
        'Introduce a cleaner folder structure and application design',
        'Update the coding style to a modern standard',
        'Support team members',
      ],
      skills: ['ASP.NET core MVC', 'C#', 'AngularJS', 'SQL'],
    },
    {
      jobTitle: 'React Native Frontend Developer',
      term: '2 Months | Feb 2022 - Apr 2022',
      companyName: 'kusana co. ltd.',
      appeals: [
        'Create a camp equipment rental management app',
        'Develop admin pages',
        'Adhere to well-structured coding style, clean architecture, and domain-driven development',
        'Experience working in a startup company',
      ],
      skills: ['Typescript', 'React Native'],
    },
    {
      jobTitle: 'React Full Stack Developer',
      term: '5 Months | Oct 2021 - Feb 2022',
      companyName: 'goopter E-commerce solution',
      appeals: [
        'Update the company website',
        'Add a company blog page that fetches data from the WordPress backend',
        'Refactor to smaller and more focused components',
        'Work with unfamiliar technologies, including the WordPress backend',
        'Solve issues independently',
      ],
      skills: ['Typescript', 'React', 'SQL'],
    },
    {
      jobTitle: 'Java Full Stack Developer',
      term: '3 Years 3 Months | Mar 2018 - Jun 2021',
      companyName: '4 companies in Japan',
      appeals: [
        'Maintenance of delivery management system | 9 months',
        'Replacement of electrical management System | 8 months',
        'Maintenance of e-commerce Website | 1 year 5 months',
        'Upgrade of warehouse management system | 5 months',
        'Waterfall development',
        'Learn the fundamental workflow of the Job',
        'Proficient in documenting, debugging, coding, testing',
        'Proficient in SQL query',
      ],
      skills: ['Java', 'JUnit', 'SQL'],
    },
  ];

  // java details

  javaDetails: Experience[] = [
    {
      jobTitle: 'Java Full Stack Developer',
      term: '9 Months | Oct 2020 - Jun 2021',
      companyName: 'sg system co., ltd.',
      appeals: [
        'Maintenance of delivery management system',
        'Fix bugs and minor changes',
        'Fix automated tests',
        'Test and document heavy development for quality',
        'Waterfall development',
      ],
      skills: ['Java', 'JUnit', 'SQL'],
    },
    {
      jobTitle: 'Java Full Stack Developer',
      term: '8 Months | Feb 2020 - Sep 2021',
      companyName: 'nce corporation',
      appeals: [
        'Replacement of electrical management system',
        'Work hard in tight time schedule',
        'Support team members',
      ],
      skills: ['Java', 'SQL'],
    },
    {
      jobTitle: 'Frontend Developer',
      term: '1 Months | Jan 2020 - Jan 2020',
      companyName: 'toami corp.',
      appeals: ['Update company website'],
      skills: ['jQuery', 'HTML', 'SCSS'],
    },
    {
      jobTitle: 'Java Full Stack Developer',
      term: '1 Year 5 Months | Aug 2018 - Dec 2019',
      companyName: 'itec hanshin hankyu co., ltd.',
      appeals: [
        'Maintenance of e-commerce website',
        'Learn the fundamental workflow of the job',
        'Proficient in SQL query',
        'Waterfall development',
      ],
      skills: ['Java', 'SQL', 'HTML', 'CSS'],
    },
    {
      jobTitle: 'Java Backend Developer',
      term: '5 Months | Mar 2018 - Jul 2018',
      companyName: 'itec hanshin hankyu co., ltd.',
      appeals: [
        'Upgrade of warehouse management system',
        'Create admin pages for each tables',
      ],
      skills: ['Java', 'SQL'],
    },
  ];
}
