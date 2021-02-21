import { Component, OnInit } from '@angular/core';import { DataTable } from "simple-datatables";

@Component({
  selector: 'app-elections',
  templateUrl: './elections.component.html',
  styleUrls: ['./elections.component.scss']
})
export class ElectionsComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

}
