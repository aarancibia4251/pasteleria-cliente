import { TestBed } from '@angular/core/testing';

import { ExampleStoreService } from './example-store.service';

describe('ExampleStoreService', () => {
  let service: ExampleStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
