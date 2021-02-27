import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



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

import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {DataTablesModule} from 'angular-datatables';

import { VotersRollComponent } from './voters-roll.component';
import { VotersRollTableComponent } from './voters-roll-table/voters-roll-table.component';
import { VoterDetailsComponent } from './voter-details/voter-details.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const routes: Routes = [
  {
    path: '',
    component: VotersRollComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        component: VotersRollTableComponent,
        pathMatch: 'full'
      },
      {
        path: 'voterdetails',
        component: VoterDetailsComponent
      }
    ]
  }

]

@NgModule({
  declarations: [VotersRollComponent, VoterDetailsComponent, VotersRollTableComponent],
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
    DataTablesModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class VotersRollModule { }
