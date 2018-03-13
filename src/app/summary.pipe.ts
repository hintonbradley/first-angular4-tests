// Step 4.15: Creating a custom pipe.
//We import the pipe decorator (Pipe) and PipeTransform (interface that defines the shape of all pipes) to create a custom pipe.
import {Pipe, PipeTransform} from '@angular/core';

// Adding the decorator function that only requires name for reference as used in the html.
@Pipe({
    name: 'summary'
})

// Exporting the pipe while adding the PipeTransform interface to create a pipe.
export class SummaryPipe implements PipeTransform {
    // The value is the variable type. limit is the number of characters we want to show. this value type is a number.
    transform(value: string, limit?: number) {
        if(!value) {
            return null;
        }
        // decideing if there is a limit argument included.  if not, we will automatically cut the string at 50 characters.
        let actualLimit = (limit) ? limit: 50;
        return value.substr(0, actualLimit) + '...';
    }
}