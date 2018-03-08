import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// Step 3.4(cont): Once you add a new component to @NgModule - declarations it is automatically added as an import here.
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';

// Step 3.4: The AppModule is decorated with the @NGModule function. We need to add our newly creted component to the declarations array. Adding courses.component.ts here.
// Step 3.6: We added a new compnent using the terminal ($ ng g c course)
// g is for generate | c is for component | course is the name of said component
// It created a component and automatically added it to the declarations here.
// Step 3.17: in the providers array, we supply all the dependencies that the app requires. Therefore we add our services there. Note: Angular is creating a Singleton (a single instance of a dependency) and injecting it wherever it's needed in our app.
// Step 3.22: Adding Authors service as a provider.
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
