import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges {
  @Input() type!: string;
  @Input() class!: string;
  @Input() description!: string;
  @Input() callFunction!: Function;
  constructor() { }

ngOnChanges(): void {
  //  if(this.callFunction){
  //    this.callFunction();
  //  } 
}

}
