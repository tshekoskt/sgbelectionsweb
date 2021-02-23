import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HandoverSchoolReportTableComponent } from './handover-school-report-table.component';
import { Routes, RouterModule } from '@angular/router';

// Ng-ApexCharts
import { NgApexchartsModule } from "ng-apexcharts";

// Ng2-charts
import { ChartsModule } from 'ng2-charts';




const routes: Routes = [
  {
    path: '',
    component: HandoverSchoolReportTableComponent,
    children: [
      {
        path: '',
        redirectTo: 'apexcharts',
        pathMatch: 'full'
      },
      {
        path: 'chartjs',
        component: HandoverSchoolReportTableComponent
      }
    ]
  
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
