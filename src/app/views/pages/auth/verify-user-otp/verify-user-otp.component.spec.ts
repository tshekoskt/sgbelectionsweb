import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyUserOtpComponent } from './verify-user-otp.component';

describe('VerifyUserOtpComponent', () => {
  let component: VerifyUserOtpComponent;
  let fixture: ComponentFixture<VerifyUserOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyUserOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyUserOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
