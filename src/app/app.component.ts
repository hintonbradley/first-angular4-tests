import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  // Step 5.1: Making isFavorites an input property. We add var to what isFavorite should be in <favorite> component.
  isFavorite= false;

  // Step 5.3: (Output) Adding a change method to be called in the favorites component to notify when changed. Adding function to parent comonent to pass down to favorite component.
  // Step 5.4: Passing data when we trigger an event which will be available to subscribers. Adding an agrument to the event to display information.
  onFavoriteChanged(eventArgs) {
    console.log('Favorite changed', eventArgs);
  }
  courses = [];

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
}
