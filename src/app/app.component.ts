import { Component } from '@angular/core';
import { Experience } from './shared/shared-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resume';
  typescript = 'Typescript';
  reactNative = 'React Native';
  experiences: Experience[] = [
    {
      jobTitle: 'React Native Frontend Developer',
      term: 'Feb 2022 - Apr 2022',
      companyName: 'kusana co. ltd.',
      appeals: [
        'create admin pages',
        'follow well structured coding style, clean-architecture, domain-driven-development',
        'experience in start up company',
      ],
      skills: ['Typescript', 'React Native'],
    },
  ];
}
