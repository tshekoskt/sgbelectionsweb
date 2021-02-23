import { Component, OnInit } from '@angular/core';
import { DataTable } from "simple-datatables";

@Component({
  selector: 'app-document-table',
  templateUrl: './document-table.component.html',
  styleUrls: ['./document-table.component.scss']
})
export class DocumentTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

}
