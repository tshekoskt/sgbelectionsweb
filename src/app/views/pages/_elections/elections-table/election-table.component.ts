import { Component, OnInit } from '@angular/core';
import { DataTable } from "simple-datatables";

@Component({
  selector: 'app-election-table',
  templateUrl: './election-table.component.html',
  styleUrls: ['./election-table.component.scss']
})
export class ElectionTableComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

}
