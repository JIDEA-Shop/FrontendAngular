import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOktaComponent } from './login-okta.component';

describe('LoginOktaComponent', () => {
  let component: LoginOktaComponent;
  let fixture: ComponentFixture<LoginOktaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginOktaComponent]
    });
    fixture = TestBed.createComponent(LoginOktaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
