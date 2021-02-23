import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CountdownComponent} from "./countdown.component";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CountdownComponent,
   
  }

]


@NgModule({
  declarations: [CountdownComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CountdownModule { }
