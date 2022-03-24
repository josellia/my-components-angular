import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
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
    this.route.paramMap.subscribe((param: ParamMap) => {
      const id = Number(param.get('id'));
      const value = param.get('value');
      console.log('Value is', value);
      this.course = this.courseService.getCourse(id);
     
    });
  }

  goToPrevious(){
    this.router.navigate(['../', this.course.id ? this.course.id - 1 : this.course.id, {'value': 'test'}], {relativeTo: this.route});
  }
  goToNext(){
    this.router.navigate(['../', this.course.id  ? this.course.id + 1 : this.course.id, {'value': 'test'}], {relativeTo: this.route});
  }
}
