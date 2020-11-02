import { TestBed } from '@angular/core/testing';

import { ExampleRestService } from './example-rest.service';

describe('ExampleRest.Service.TsService', () => {
  let service: ExampleRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
