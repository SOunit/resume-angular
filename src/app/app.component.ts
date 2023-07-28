import { Component } from '@angular/core';
import { Experience, ContactItem } from './shared/shared-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resume';
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
      jobTitle: 'React Native Frontend Developer',
      term: '2 Months | Feb 2022 - Apr 2022',
      companyName: 'kusana co. ltd.',
      appeals: [
        'Create admin pages',
        'Follow well structured coding style, clean-architecture, domain-driven-development',
        'Experience in start up company',
      ],
      skills: ['Typescript', 'React Native'],
    },
    {
      jobTitle: 'React Full Stack Developer',
      term: '5 Months | Oct 2021 - Feb 2022',
      companyName: 'goopter E-commerce solution',
      appeals: [
        'Add company blog page fetching data from Wordpress backend',
        'Refactor to smaller and focused components',
        'Work with unfamiliar tech, Wordpress backend',
        'Solve issues by my own',
      ],
      skills: ['Typescript', 'React', 'SQL'],
    },
    {
      jobTitle: 'Java Full Stack Developer',
      term: '9 Months | Oct 2020 - Jun 2021',
      companyName: 'sg system co., ltd.',
      appeals: [
        'Fix bugs and minor changes',
        'Fix Tests',
        'Test and document heavy development for quality',
        'Waterfall development',
      ],
      skills: ['Java', 'SQL'],
    },
  ];
}
