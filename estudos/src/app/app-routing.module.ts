import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseComponent } from './components/course/course.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'course', component: CourseComponent
  },
  {
    path: 'course/:id', component: CourseDetailComponent
  },
  {
    path: 'student', component: StudentComponent,
    children: [
      {
        path: 'details', component: StudentDetailComponent
      }
    ]
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
