// Step 3.19: Created a new component using terminal ($ng g c authors
import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

// Angular tries to minimize clashing names from other third party components so it always adds 'app-' to selector. We are removing that for this example.
@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  // Step 3.20: Adding build for all list of authors
  authors;

  // Step 3.24: Injecting authors as a service.
  constructor(service: AuthorsService) {
    // Step 3.25: Initializing service.getAuthors function.
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}
