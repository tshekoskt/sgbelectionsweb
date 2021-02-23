import { Component, OnInit } from '@angular/core';
import { DataTable } from "simple-datatables";

@Component({
  selector: 'app-meetings-table',
  templateUrl: './meetings-table.component.html',
  styleUrls: ['./meetings-table.component.scss']
})
export class MeetingsTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

}
