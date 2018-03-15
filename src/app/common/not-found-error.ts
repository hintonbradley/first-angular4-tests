// Step 9.2.7: Creating another class that inherits AppError if error is 404
import { AppError } from "./app-error";

export class NotFoundError extends AppError {

}