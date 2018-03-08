// Step 3.18: Create a new service in the terminal - $ng g s email
// g: generate | s: service | email: name of the service and it creates this email.service file and a email.service.spec.ts file.
// It adds an @Injectable function in case there is a dependency that the constructor relies on in this service.
import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {

  // Step 3.23: Add function to return author list.
  getAuthors() {
    return ['author 1', 'author 2', 'author 3']
  }

}
