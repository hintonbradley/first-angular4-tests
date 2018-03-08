// Step 3.21: Creating new service through Angular cli. $ng g s authors
import { TestBed, inject } from '@angular/core/testing';

import { AuthorsService } from './authors.service';

describe('AuthorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorsService]
    });
  });

  it('should be created', inject([AuthorsService], (service: AuthorsService) => {
    expect(service).toBeTruthy();
  }));
});
