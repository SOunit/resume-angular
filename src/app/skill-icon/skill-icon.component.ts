import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-icon',
  templateUrl: './skill-icon.component.html',
  styleUrls: ['./skill-icon.component.scss'],
})
export class SkillIconComponent implements OnInit {
  @Input() title: string = 'string';

  constructor() {}

  ngOnInit(): void {}
}
