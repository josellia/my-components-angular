import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from '../shared/components/card/card.component';
import { AlertComponent } from './alert/alert.component';

const routes: Routes = [
  {
    path: 'alert',
    component: AlertComponent
  },

  {
    path: 'card',
    component: CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
