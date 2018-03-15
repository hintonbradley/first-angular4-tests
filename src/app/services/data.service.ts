import { Injectable } from '@angular/core';
// Step 9.1.2: Importing http to page and adding it to the constructor, to use the class to send data to the backend. constructor(http: Http)
import {Http} from '@angular/http';
// Step 9.2.3: importing catch operator and methods to use on returned server observable
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

// Other imports:
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
// import { errorHandler } from '@angular/platform-browser';

@Injectable()
export class DataService {
  // Step 9.1.10: Creating private url for http server calls
  constructor(private url: string, private http: Http) {
  }

// Step 9.1.4: Creating a get request with the subscribe promise. Note: Adding code to ngOnInit method so the constructor isn't responsible for running heavy requests.
getAll () {
    return this.http.get(this.url)
        .map(response => response.json())
        .catch(this.handleError);
  }

  //Step 9.2.10: Adding correct error code
  create (resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      // .catch((error: Response) => {
        .map(response => response.json())
        .catch(this.handleError);
  }

  update (resource) {
    return this.http.patch(this.url + '/' + resource, JSON.stringify({isRead: true}))
        .map(response => response.json())
        .catch(this.handleError)
  }

  delete(resource) {
    // Step 9.2.4: Since we imported the catch operator, we can now use it on our http requests to catch any errors that may occur. We send a translated error to the consumer of this service (component) .catch((error: Response) => {
    // Step 9.2.5: Creating a new observable from the server observable that our app can read, and adding the method to translate the server response into a app CLI response. Observable.throw(new AppError(error));
    // Step 9.2.8: Adding code to check if error is specifically NotFoundError. if (error.status === 404) return Observable.throw(new NotFoundError());
    // Step 9.2.13: Since we now have a handleError method, we move our code down into that method and just add a reference to that function.
    return this.http.delete(this.url + '/' + resource)
        .map(response => response.json())
        // .catch((error: Response) => {
        // if (error.status === 404) return Observable.throw(new NotFoundError());
        // return Observable.throw(new AppError(error));
        .catch(this.handleError)
  }

  // Step 9.2.12: Create a new method to distinguish between errors.
  private handleError(error: Response) {
    if (error.status === 400) return Observable.throw(new BadInput(error.json()));
    if (error.status === 404) return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }
}