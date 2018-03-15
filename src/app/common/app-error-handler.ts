// Creating a generic error handler

import {ErrorHandler} from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        alert('An upexpected error has occurred.');
        console.log(error);
    }
}