import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { StudentComponent } from './components/student/student.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { LayoutComponent } from './project/components/layout/layout.component';
import { ManagerComponent } from './components/manager/manager.component';
import { EmployerComponent } from './components/employer/employer.component';
import { MenuComponent } from './project/components/menu/menu.component';
import { NavItemComponent } from './project/components/nav-item/nav-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StudentComponent,
    HomeComponent,
    PageNotFoundComponent,
    StudentDetailComponent,
    CourseDetailComponent,
    ParentComponent,
    ChildComponent,
    LayoutComponent,
    ManagerComponent,
    EmployerComponent,
    MenuComponent,
    NavItemComponent,
  
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
