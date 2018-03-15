import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  courses=[];
  
  // Step 6.3: Using ngSwitch to view multiple options. Keeping track of the current selected mode.
  viewMode='map';

  // Step 6.5: loading courses and tracking by trackBy to prevent unessessary refreshing.
  loadCourses() {

    this.courses = [{id: 1, name: 'Biology'},
    {id: 2, name: 'Algebra'},
    {id: 3, name: 'Physics'},
    {id: 4, name: 'Art'}]
  };

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  // Step 6.4: Using ngFor to show list items and adding and removing item and updating DOM using change detection.
  onAdd() {
    this.courses.push({id: 4, name: 'course4'});
  }
  onDelete(course) {
    console.log(course)
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  // Step 6.7: Using style directive:
  canSave = true;

  // Step 6.8: Using safe traversal operator
  task = {
    title: 'This title', 
    assignee: {
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
