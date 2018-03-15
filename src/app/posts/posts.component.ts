import { Component, OnInit } from '@angular/core';
// Step 9.2.2: importing service to use in constructor.
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
// Imported from possible errors directory
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

// Step 9.1.3: Changing selector name from app-posts to just posts
@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  // Step 9.1.5: Creating a var to hold json response from get request
  posts: any[];

  // Step 9.1.8: We need to call the server again, this time in the createPost method outside the constructor, using HTTP, but HTTP is only available in the constructor, so we need to decorate it with the private keyword so it will be a field in the class.
  constructor(private service: PostService) {
  }

  // Step 9.1.7: Since the title param isn't a title object or string (it's an html input element), we want to improve compiletime checking (and make it less confusing), so we add HTMLInputElement 
  createPost(input: HTMLInputElement) {
    // Step 9.1.11: Creating a var to store our new post data
    let post = {title: input.value}
    // Step 9.1.8: We need to call the server again using HTTP, but HTTP is only available in the constructor, so we need to decorate it with the private keyword so it will be a field in the class.
    // Step 9.1.9: Creating an http post request to the server. Note: we need to convert our object to a string first, so we use JSON.stringify. We then subscribe to the observable and grab the new post id using bracket notation (not dot notation) so we can add it to our post var above. Finally, we add it to our posts array so it will be updated on our view.
    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
          this.posts.splice(0,0,post);
      }, 
      //Step 9.2.10: Adding correct error code. Commenting out original lines of code.
        // (error: Response) => {
        //   if (error.status === 400) {
        (error: AppError) => {
          // if (error.status === 400) {
            if (error instanceof BadInput) {
              // this.form.setErrors(error.json());
              // this.form.setErrors(error.originalError)
            } else throw error;
        }
      )
    // Step 9.1.12: Resetting the input to text disappears
    input.value = '';
  }

  // Step 9.1.13: Create a post http method
  updatePost(post) {
    // Put is to update the whole object
    // this.http.put(this.url, JSON.stringify(post));
    // Patch is to update a portion of the object
    // Step 9.1.14: We need to reference the specific post, so we add + '/,' + post.id to url
    this.service.update(post.id)
      .subscribe(updatedPost => {
        console.log(updatedPost);
      }) 
  }

  // Step 9.1.16: Create delete post method
  deletePost(post) {
    this.service.delete(post.id)
      .subscribe( () => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, 
      //Annotating error with the Response class using type annotation. Note, we also have to wrap paramaters of arrow functions in parenthesis anytime we use type annotation 
      // (error: Response) => {
      // Step 9.2.9: Since now we're checking errors within our CLI (using classes found in common folder), we need to check those instead of the server response for error type.
      (error: AppError) => {
        // Checking status of responses
        // if(error.status === 404) {
          // Now since we're checking errors in our CLI, we need to check if the error from the new Observable is a type of not-found-error
          if (error instanceof NotFoundError) {
          alert("This post has already been deleted");
        } else throw error;
      }) 
  }

  ngOnInit() {
    // Step 9.1.5: Grabbing the response and using .json method to return json object of just the posts to post to the page.
    this.service.getAll()
    //   .subscribe(response => {
    //     this.posts = response.json();
    //   }, error => {
    //     alert('An unexpected error has occurred.');
    //     console.log(error)
    //   })
    //   console.log('constructor has run')
    // console.log('ngOnInit has run')
    // Step 9.2.13: Rewriting for restructuring
    .subscribe(posts => this.posts = posts);
  }
}
