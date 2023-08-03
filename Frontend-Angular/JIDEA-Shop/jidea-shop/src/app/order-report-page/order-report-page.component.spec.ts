import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReportPageComponent } from './order-report-page.component';

describe('OrderReportPageComponent', () => {
  let component: OrderReportPageComponent;
  let fixture: ComponentFixture<OrderReportPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderReportPageComponent]
    });
    fixture = TestBed.createComponent(OrderReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
