import { Injectable } from '@angular/core';
// Step 9.1.2: Importing http to page and adding it to the constructor, to use the class to send data to the backend. constructor(http: Http)
import {Http} from '@angular/http';
// Step 9.2.3: importing catch operator and methods to use on returned server observable
// import 'rxjs/add/operator/catch';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/throw';

// Other imports:
// import { AppError } from '../common/app-error';
// import { NotFoundError } from '../common/not-found-error';
// import { BadInput } from '../common/bad-input';
import { DataService } from './data.service';
// import { errorHandler } from '@angular/platform-browser';

@Injectable()
export class PostService extends DataService {
  // Step 9.1.10: Creating private url for http server calls
  // private url= 'http://jsonplaceholder.typicode.com/posts';

  constructor(http:Http) {
    super('http://jsonplaceholder.typicode.com/posts', http);
  }
}
