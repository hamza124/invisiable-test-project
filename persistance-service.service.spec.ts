import { TestBed } from '@angular/core/testing';

import { PersistanceServiceService } from './persistance-service.service';

describe('PersistanceServiceService', () => {
  let service: PersistanceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersistanceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
