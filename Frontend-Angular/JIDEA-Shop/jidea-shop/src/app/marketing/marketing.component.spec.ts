import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingComponent } from './marketing.component';

describe('MarketingComponent', () => {
  let component: MarketingComponent;
  let fixture: ComponentFixture<MarketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingComponent]
    });
    fixture = TestBed.createComponent(MarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
