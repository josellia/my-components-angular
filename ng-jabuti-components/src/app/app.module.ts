import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/layout/nav/menu/menu.component';
import { NavItemComponent } from './core/layout/nav/nav-item/nav-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavItemComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
