import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsTableComponent } from './meetings-table.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MeetingsTableComponent
  
  }
]



@NgModule({
  declarations: [MeetingsTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class MeetingsTableModule { }
