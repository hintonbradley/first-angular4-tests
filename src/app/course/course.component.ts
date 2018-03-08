// Step 3.6: We added a new compnent using the terminal ($ ng g c course)
// g is for generate | c is for component | course is the name of said component
// It automatically created a class and enabled it as a component here. 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
