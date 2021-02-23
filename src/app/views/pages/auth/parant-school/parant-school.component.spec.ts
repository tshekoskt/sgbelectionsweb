import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParantSchoolComponent } from './parant-school.component';

describe('ParantSchoolComponent', () => {
  let component: ParantSchoolComponent;
  let fixture: ComponentFixture<ParantSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParantSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParantSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
