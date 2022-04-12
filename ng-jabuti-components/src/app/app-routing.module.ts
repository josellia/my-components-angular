import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'componentes',
    
    loadChildren: () => import('./shared/components/components.module')
    .then(m=> m.ComponentsModule)
  },

  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
    .then(m => m.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
