import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ElectionsComponent } from './elections.component'
import { ElectionTableComponent } from './elections-table/election-table.component';
import { ElectionsOverviewComponent } from './elections-overview/elections-overview.component';

const routes: Routes = [
  {
    path: '',
    component: ElectionsComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        component: ElectionTableComponent,
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: ElectionsOverviewComponent
      }
    ]
  }

]

@NgModule({
  declarations: [ElectionTableComponent, ElectionsOverviewComponent, ElectionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ]
})
export class ElectionsModule { }
