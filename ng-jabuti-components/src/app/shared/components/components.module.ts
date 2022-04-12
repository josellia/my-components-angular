import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, ComponentsRoutingModule],
  exports: [ ]
})
export class ComponentsModule {}
