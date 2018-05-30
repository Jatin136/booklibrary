import { TestBed, inject } from '@angular/core/testing';

import { BookinstanceService } from './bookinstance.service';

describe('BookinstanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookinstanceService]
    });
  });

  it('should be created', inject([BookinstanceService], (service: BookinstanceService) => {
    expect(service).toBeTruthy();
  }));
});
