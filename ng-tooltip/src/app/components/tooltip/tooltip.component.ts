import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  @ViewChild('hover') hover!: ElementRef;

  @Input() title = 'Hello this is mine tooltip!';
  @Input() colorHover = '#ff6347';

  constructor(private rendered2: Renderer2) { }
   
  public setEventHover(event: MouseEvent): void{
    const asHover = this.hover.nativeElement;

    if(event.type === 'mouseenter'){
      this.rendered2.setStyle(asHover, 'color', this.colorHover);
    }else if(event.type === 'mouseleave'){
      this.rendered2.setStyle(asHover, 'color', '#0bd');
    }
  }
}
