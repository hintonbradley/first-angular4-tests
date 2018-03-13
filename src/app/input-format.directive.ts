// Step 6.9: Created a directive in terminal: $ng g d input-format
// Step 6.10: We need to add HostListener so we can subscribe to the elements that have the appInputFormat attribute. 
// Adding ElementRef to be used in directive.
import { Directive, HostListener, ElementRef } from '@angular/core';

// Step 6.9: Created a directive in terminal: $ng g d input-format. If Angular finds an element that has the selector attribute attached (appInputFormat), it will apply this directive to that element.

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // Injecting the ability to reference the host element. (private el: ElementRef)
  constructor(private el: ElementRef) { }

  // using onBlur to use when this happens to the element. Adding HostListener to be able to use focus
  @HostListener('blur') onBlur() {
    console.log('on blur');
    // We are grabbing the value and setting it as a string so we can access all the string properties and methods so we can use it later (toLowerCase). 
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
  }

}
