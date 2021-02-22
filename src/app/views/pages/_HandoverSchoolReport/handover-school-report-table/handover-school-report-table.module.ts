import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HandoverSchoolReportTableComponent } from './handover-school-report-table.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HandoverSchoolReportTableComponent
  
  }
]

@NgModule({
  declarations: [HandoverSchoolReportTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HandoverSchoolReportTableModule { }
