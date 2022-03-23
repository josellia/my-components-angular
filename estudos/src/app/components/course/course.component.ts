import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'jabuti-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses: any = [];
  constructor(private courseService: CourseService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.courses = this.courseService.getCourses();
  
  }

  getCourse(id:number){
    this.router.navigate([id], {relativeTo: this.route});
  }

}
