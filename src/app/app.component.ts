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
}
