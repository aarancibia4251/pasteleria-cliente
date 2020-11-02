import { TestBed } from '@angular/core/testing';

import { ExampleDbService } from './example-db.service';

describe('ExampleDb.Service.TsService', () => {
  let service: ExampleDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
