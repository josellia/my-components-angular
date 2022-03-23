import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
 private courses = [
    {
      id: 1,
      firstName: 'Lulu',
      secondName: 'Silva',
      lastName: 'chuchu'
    },
    {
      id: 2,
      firstName: 'Lili',
      secondName: 'Silva',
      lastName: 'chuchu'
    }
  ]
  constructor() { }

  getCourses(): any[] {
    return this.courses;
  }

  getCourse(id: number): any {
    return this.courses.filter((data) => data.id === id)[0];
  }
}
