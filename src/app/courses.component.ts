// Step 3.2(cont): Adding Component to change classes to components
import {Component} from '@angular/core';
// Step 3.14(cont): As soon as it's added below, it automatically is imported here.
import { CoursesService } from './courses.service';

// Use Pascal naming convention for all component classes
// Step 3.1: In order for Angular to be able to use this component, we need to export it. export class CoursesComponent {
// Step 3.2: In order to change a class to a component we need to add metadata using a decorator (called Component, from angular/core) that we attach to a class (see import).
// Step 3.3: Applying Component (decorator function) to this class. Adding an object as an argument to add properties to tell Angular how this component works.
// selector: the css selector that identifies this component in a template
// template: inline-defined template for the view
// Step 3.8: (Data binding) Using the dynamic variable (title) in our html (with concatenation)
// Step 3.10: Changing quotes to backticks to divide our html into mulitple lines.
// Step 3.11(cont): Using li elements to display course names. We use ngFor to repeat elements in an array. Note: whenever we use an Angular directive that modified the structure of the DOM, we need to prepend * to the directive. Ex: *ngFor
// Then we use string interpolation inside the list item to display the course name.
// Step 4.1: Adding an image via interpolation to our html <img src="{{imageUrl}}" />
// Step 4.2: Adding property binding to template. Use brackets around the property. If changes to component are made this will change in view, but not vice versa.<img [src]="imageUrl"/></>
// Step 4.3: Binding an unknown DOM attribute. If an attribute is unknown, we need to preface it with attr. in order for it to be recognized by Angular and an attribute.
// Step 4.5: Adding a button to test if Bootstrap is installed and imported properly.
// Step 4.6: Binding a class conditionally to the button. [class.red]='isRed'
// Step 4.7: Adding event listener to button. (click)="changeColor()"
// Step 4.8: Adding style binding to html using simple ternary <p [style.fontWeight]="isRed? '100': 'bold'">...
// Step 4.9: Grabbing event data from event listener using keyword $event.
// Step 4.10: Wrapping first event with parent and adding second click event to see how we can stop event from bubbling up the DOM using stopPropagation function.
@Component({
    selector: 'courses',
    template: `
        <h2>Courses component</h2>
        <p>{{"Title: " + title}}</p>
        <p>{{getTitle()}}</p>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        <img src="{{imageUrl}}" />
        <img [src]="imageUrl"/>
        <table>
            <tr>
                <td [attr.colspan]='colSpan'>This is colSpan</td>
                <td [attr.myName]='myName'>This is myName</td>
            </tr>
        </table>
        <div (click)="logParentClick($event)">
            <button (click)="changeColor($event)" class="btn btn-primary" [class.red]='isRed'>Change color</button>
        </div>
        <p [style.fontWeight]="isRed? '100': 'bold'">Click the button to change my font weight</p>
        `
})
export class CoursesComponent {
    // Step 3.7: Adding a variable to be used dynamically in our html. We are going to bind this component variable to the view.
    title="List of courses";
    // Step 4.1(cont): Adding an image to use in html.
    imageUrl = 'https://blog.conservation.org/wp-content/uploads/2014/06/ci_19290600_cropped.jpg';
    // Step 4.3(cont): Binding an unknown DOM attribute. Declaring vars.
    colSpan='thisIsColSpan';
    myName='thisIsMyName';
    // Step 4.6(cont): Binding a class conditionally to the button. Declaring var.
   isRed=false;
    // Step 4.7: Adding event listener to button. Declaring function to change isRed.
    changeColor(event) {
        // Step 4.10(cont): If we remove stopPropagation function the click event will keep bubbling up the DOM and will trigger logParentClick function.
        // event.stopPropagation();
        console.log(event)
       this.isRed=!this.isRed;
    }
    logParentClick(e) {
        console.log('parent event triggered! ', e)
    }

    // Step 3.9: Using a function to return output to view:
    getTitle() {
        return this.title;
    };

    // Step 3.11: Creating multiple courses to use in multiple li elements in html
    // Step 3.12(cont): We need to separate http requests from components, and instead build a service for http requests so they can be used throughout different components in our app. Since we're going to implement a fake service, we don't use the array in our component and instead move it to courses.service.ts. Note: we still need to declare courses variable here.
    // courses = ['course 1', 'course 2', 'course 3'];
    courses;

    // Step 3.13: Since we're using a service to grab courses data, we set up a constructor to initialize an object
    // Step 3.16(cont): Injecting the CoursesService as a dependency of this constructor so this component isn't tightly coupled to the http request. (service: CoursesServie)
    constructor(service: CoursesService) {
        // Step 3.14: Create an instance of our courses service.
        // Step 3.16: Since we're creating a new instance of the service here, we're still tightly coupling this component to the http request. So instead of creating a new CoursesService request here, we delete it and inject it as a dependency to the constructor. Don't do it this way:
        // let service = new CoursesService();
        // Step 3.15: Setting courses to what gets returned from service.getCourses function (found in courses.service.ts)
        this.courses = service.getCourses();
    }
}