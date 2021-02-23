import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOtpComponent } from './parent-otp.component';

describe('ParentOtpComponent', () => {
  let component: ParentOtpComponent;
  let fixture: ComponentFixture<ParentOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
