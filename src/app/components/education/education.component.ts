import { Component, OnInit, Input } from '@angular/core';
import { Education } from 'src/app/shared/shared-types';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  @Input() education: Education = {
    title: '',
    term: '',
    schoolName: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
