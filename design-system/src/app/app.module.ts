import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavItemComponent } from './shared/components/nav-menu/nav-item/nav-item.component';
import { MenuComponent } from './shared/components/nav-menu/menu/menu.component';
import { CardComponent } from './shared/components/card/card.component';
import { DynamicFormComponent } from './shared/components/dynamic-form/dynamic-form.component';
import { InputComponent } from './shared/components/input/input.component';
import { SelectComponent } from './shared/components/select/select.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { TitleComponent } from './shared/components/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    NavItemComponent,
    MenuComponent,
    CardComponent,
    DynamicFormComponent,
    InputComponent,
    SelectComponent,
    AlertComponent,
    ButtonComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
