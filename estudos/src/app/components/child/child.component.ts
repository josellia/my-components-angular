import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'jabuti-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() name!: string;
  @Output() eventName = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.eventName.emit('dudu');
  }
  sendParentName(){
    const tot = 1 + 1;
    this.eventName.emit(tot)
  }
}
