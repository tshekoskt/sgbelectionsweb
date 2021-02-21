import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ElectionsComponent } from './elections.component'
import { ElectionTableComponent } from './elections-table/election-table.component';
import { ElectionsOverviewComponent } from './elections-overview/elections-overview.component';

import { CodePreviewModule } from '../../partials/code-preview/code-preview.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// ngx-quill
import { QuillModule } from 'ngx-quill';

// angular-archwizard
import { ArchwizardModule } from 'angular-archwizard';

import { FeahterIconModule } from '../../../core/feather-icon/feather-icon.module';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

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
    NgxDatatableModule,
    CodePreviewModule,
    NgbModule,
    PerfectScrollbarModule,
    FormsModule,
    FeahterIconModule,
    ReactiveFormsModule,
    FeahterIconModule,
    QuillModule.forRoot(), // ngx-quill
    ArchwizardModule, // angular-archwizard
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ElectionsModule { }
