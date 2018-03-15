// Step 9.2.6: Creating a file to create a class to present application specific errors. i.e. errors that use the app's CLI (Common Language Infrastructure)

export class AppError {
    constructor(public originalError?: any) {}
}