import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Person, TitleState } from 'src/app/models/person';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() person: Person | undefined;
  @HostBinding('class.highlighted') get promoted(): boolean{
    return !!this.person?.promoted;
  }

  @Input() @HostBinding('attr.data-state') state: TitleState = 'regular';

  constructor() { }

  ngOnInit(): void {
  }

}
