// Step 3.18: Create a new service in the terminal - $ng g s email
// g: generate | s: service | email: name of the service and it creates this spec file and a email.service.ts file.

import { TestBed, inject } from '@angular/core/testing';

import { EmailService } from './email.service';

describe('EmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailService]
    });
  });

  it('should be created', inject([EmailService], (service: EmailService) => {
    expect(service).toBeTruthy();
  }));
});
