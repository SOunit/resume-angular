import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
})
export class ExperienceCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() term: string = '';
  @Input() groupName: string = '';
  @Input() appeals: string[] = [];
  @Input() skills: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
