import { TestBed } from '@angular/core/testing';

import { ApiClientDbService } from './api-client-db.service';

describe('ApiClientDbService', () => {
  let service: ApiClientDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiClientDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
