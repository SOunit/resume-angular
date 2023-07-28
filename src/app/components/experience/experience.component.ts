import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../../shared/shared-types';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  @Input() experience: Experience = {
    jobTitle: '',
    term: '',
    companyName: '',
    appeals: [],
    skills: [],
  };

  constructor() {}

  ngOnInit(): void {}
}
