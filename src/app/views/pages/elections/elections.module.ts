import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ElectionsComponent } from './elections/elections.component'
import { ElectionsOverviewComponent } from './elections-overview/elections-overview.component'

const routes: Routes = [
  {
    path: '',
    component: ElectionsComponent
  },
  {
    path: 'overview',
    component: ElectionsOverviewComponent
  }
]

@NgModule({
  declarations: [ElectionsComponent, ElectionsOverviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ]
})
export class ElectionsModule { }
