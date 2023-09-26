import { TestBed } from '@angular/core/testing';

import { ApiintegrationService } from './apiintegration.service';

describe('ApiintegrationService', () => {
  let service: ApiintegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiintegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
