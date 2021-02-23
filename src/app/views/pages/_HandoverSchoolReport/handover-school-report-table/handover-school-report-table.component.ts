import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets, RadialChartOptions } from 'chart.js';
import { Label, Color, SingleDataSet } from 'ng2-charts';
import { DataTable } from "simple-datatables";

@Component({
  selector: 'app-handover-school-report-table',
  templateUrl: './handover-school-report-table.component.html',
  styleUrls: ['./handover-school-report-table.component.scss']
})
export class HandoverSchoolReportTableComponent implements OnInit {
  /**
   * Doughnut chart
   */
  public doughnutChartLabels: Label[] = ["Africa", "Asia", "Europe"];
  public doughnutChartData: SingleDataSet = [2478,4267,1334];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColors: Color[] = [
    { backgroundColor: ["#7ee5e5","#f77eb9","#4d8af0"] }
  ];

  constructor() { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

}
