// Step 5.1: Making isFavorites an input property. We first import Input from angular/core.
// Step 5.3: (Output) Adding a change method to be called in the favorites component to notify when changed. Importing Output from angular core. Also adding EventEmitter for Outputting data.
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Step 5.6: Adding styles to components. First way is with styleUrls. Second way is through the styles property. Note: Angular will only use the last property in this component to style-either styleUrls or styles and not both. The latter will completely override the former.
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles: [
    `.fa-star {
      color: green;
    }`
  ]
})
export class FavoriteComponent {
  // Step 5.1: Making isFavorites an input property. We then use the Input method to mark fields and properties as input properties. When we do this to isFavorite, it is then available to the parent component and can be bound to it.
// Step 5.2: Changing casing of variable from isFavorite to is-favorite to use an alias identifier. Adding identifier to @Input for isFavorite var while changing isFavorite to isSelected, so app.component.html will still use this same input if the key:value name is changed.
  // @Input('is-favorite') isFavorite: boolean;
  @Input('isFavorite') isSelected: boolean;
  // Step 5.3: (Output) Adding a change method to be called in the favorites component to notify when changed. creating a change var and initializing as an instance of the eventEmitter class from Angular.
  // Step 5.5: Adding alias identifier for outputs in case we need to change var name. 
  @Output('change') change = new EventEmitter();

  updateFavorite() {
    // this.isFavorite = !this.isFavorite;
    this.isSelected = !this.isSelected;
    // Step 5.3: (Output) Adding a change method to be called in the favorites component to notify when changed. Now that we we've set up our output, we can reference the onFavoritesChanged method in app.component.ts using the click event on the html which triggers this updateFavorite method. (Calling Angular's emit method when referencing output emitters.)
    // Step 5.4: Passing data when we trigger an event which will be available to subscribers of this evemt -in this case the app.component.ts.
    this.change.emit({newValue: this.isSelected});

  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}