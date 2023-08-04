import { TestBed } from '@angular/core/testing';

import { ImplMarketingService } from './impl-marketing.service';

describe('ImplMarketingService', () => {
  let service: ImplMarketingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImplMarketingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
