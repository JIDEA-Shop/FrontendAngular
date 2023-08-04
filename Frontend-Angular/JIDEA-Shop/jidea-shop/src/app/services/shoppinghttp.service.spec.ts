import { TestBed } from '@angular/core/testing';

import { ShoppinghttpService } from './shoppinghttp.service';

describe('ShoppinghttpService', () => {
  let service: ShoppinghttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppinghttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
