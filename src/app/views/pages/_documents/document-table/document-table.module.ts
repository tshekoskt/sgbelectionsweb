import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentTableComponent } from "./document-table.component";
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: DocumentTableComponent
  
  }
]

@NgModule({
  declarations: [DocumentTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DocumentTableModule { 


}
