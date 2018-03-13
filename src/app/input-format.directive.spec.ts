// Step 6.9: Created a directive in terminal: $ng g d input-format

import { InputFormatDirective } from './input-format.directive';

describe('InputFormatDirective', () => {
  it('should create an instance', () => {
    const directive = new InputFormatDirective();
    expect(directive).toBeTruthy();
  });
});
