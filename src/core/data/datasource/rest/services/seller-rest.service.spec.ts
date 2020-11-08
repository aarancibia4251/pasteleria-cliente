import { TestBed } from '@angular/core/testing';

import { SellerRestService } from './seller-rest.service';

describe('ExampleRest.Service.TsService', () => {
  let service: SellerRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
