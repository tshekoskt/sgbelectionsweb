import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionsOverviewComponent } from './elections-overview.component';

describe('ElectionsOverviewComponent', () => {
  let component: ElectionsOverviewComponent;
  let fixture: ComponentFixture<ElectionsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
