import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'jabuti-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course: any;
  
  constructor(private courseService: CourseService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.courseService.getCourse(id);
  }

  goToPrevious(){
    this.router.navigate(['../', this.course.id - 1], {relativeTo: this.route});
  }
  goToNext(){
    this.router.navigate(['../', this.course.id + 1], {relativeTo: this.route});
  }
}
