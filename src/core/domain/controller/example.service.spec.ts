import { TestBed } from '@angular/core/testing';

import { ExampleController } from './example.service';

describe('ExampleService', () => {
  let service: ExampleController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
