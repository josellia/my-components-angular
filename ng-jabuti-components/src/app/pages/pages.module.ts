import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AlertComponent } from './alert/alert.component';
import { PageCardComponent } from './page-card/page-card.component';


@NgModule({
  declarations: [AlertComponent, PageCardComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
