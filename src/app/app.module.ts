// Step 9.2.1: Importing and adding our new Post service to imports
import { PostService } from './services/post.service';
// Step 9.1: Importing HttpModule and adding it as an import below.
import {HttpModule} from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
// <input [(ngModel)]='email' (keyup)="twoBindingChange()">
import { NgModule, ErrorHandler } from '@angular/core';
// Step 4.13: Adding 2 way binding to input. To use 2 way binding we must import the FormsModule.
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
// Step 3.4(cont): Once you add a new component to @NgModule - declarations it is automatically added as an import here.
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './services/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './services/authors.service';
// Step 4.16: Adding our custom pipe so Angular can recognize it and we can use it in our app.
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
// Step 4.5: Adding font awesome library to use instead of Bootstrap glyphicons
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { PostsComponent } from './posts/posts.component';
import { DirectivesComponent } from './directives/directives.component';

// Step 3.4: The AppModule is decorated with the @NGModule function. We need to add our newly creted component to the declarations array. Adding courses.component.ts here.
// Step 3.6: We added a new compnent using the terminal ($ ng g c course)
// g is for generate | c is for component | course is the name of said component
// It created a component and automatically added it to the declarations here.
// Step 3.17: in the providers array, we supply all the dependencies that the app requires. Therefore we add our services there. Note: Angular is creating a Singleton (a single instance of a dependency) and injecting it wherever it's needed in our app.
// Step 3.22: Adding Authors service as a provider.
// Step 4.13: Adding 2 way binding to input. Once we've imported the FormsModule, we need to add it to imports.
// Step 4.16(cont): Adding our custom pipe so Angular can recognize it and we can use it in our app.
// Step 6.9: Created a directive in terminal: $ng g d input-format - it automatically added directive to declarations
//Step 9.2.11: Registering global error handler as a dependency
import {AppErrorHandler} from './common/app-error-handler';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    PostsComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    {provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
