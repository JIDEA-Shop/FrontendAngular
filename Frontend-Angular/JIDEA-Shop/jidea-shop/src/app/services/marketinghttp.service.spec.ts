import { TestBed } from '@angular/core/testing';

import { MarketinghttpService } from './marketinghttp.service';

describe('MarketinghttpService', () => {
  let service: MarketinghttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketinghttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
