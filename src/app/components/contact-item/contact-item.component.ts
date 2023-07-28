import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
})
export class ContactItemComponent implements OnInit {
  @Input() className: string = '';
  @Input() linkUrl: string = '';
  @Input() linkTitle: string = '';

  constructor() {}

  ngOnInit(): void {}
}
