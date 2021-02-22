import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictMemoTableComponent } from './district-memo-table.component';

describe('DistrictMemoTableComponent', () => {
  let component: DistrictMemoTableComponent;
  let fixture: ComponentFixture<DistrictMemoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictMemoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictMemoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
