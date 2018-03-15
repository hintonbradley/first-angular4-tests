//Step 3.21: Creating new service through Angular cli. $ng g s authors
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  // Step 3.23: Adding function to return list of authors
  getAuthors() {
    return ['Charles Dickens', 'Robert Louis Stevenson', 'Roald Dahl']
  }

}
