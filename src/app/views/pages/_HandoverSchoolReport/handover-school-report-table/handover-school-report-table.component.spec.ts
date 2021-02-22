import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandoverSchoolReportTableComponent } from './handover-school-report-table.component';

describe('HandoverSchoolReportTableComponent', () => {
  let component: HandoverSchoolReportTableComponent;
  let fixture: ComponentFixture<HandoverSchoolReportTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandoverSchoolReportTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandoverSchoolReportTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
