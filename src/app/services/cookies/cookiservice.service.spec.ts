import { TestBed } from '@angular/core/testing';

import { CookiserviceService } from './cookiservice.service';

describe('CookiserviceService', () => {
  let service: CookiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
