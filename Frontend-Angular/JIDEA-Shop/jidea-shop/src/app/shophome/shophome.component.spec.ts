import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShophomeComponent } from './shophome.component';

describe('ShophomeComponent', () => {
  let component: ShophomeComponent;
  let fixture: ComponentFixture<ShophomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShophomeComponent]
    });
    fixture = TestBed.createComponent(ShophomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
