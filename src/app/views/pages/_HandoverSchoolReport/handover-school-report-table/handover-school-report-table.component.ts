import { Component, OnInit } from '@angular/core';

//import { ChartOptions, ChartType, ChartDataSets, RadialChartOptions } from 'chart.js';
import { Label, Color, SingleDataSet } from 'ng2-charts';
import { DataTable } from "simple-datatables";

import {

  ApexAxisChartSeries,
  ApexGrid,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexMarkers,
  ApexStroke,
  ApexLegend,
  ApexTooltip,
  ApexDataLabels,
  ApexFill,
  ApexPlotOptions,
  ApexResponsive,
  ApexNonAxisChartSeries,
  ApexTitleSubtitle,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  nonAxisSeries: ApexNonAxisChartSeries;
  colors: string[];
  grid: ApexGrid;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  markers: ApexMarkers,
  stroke: ApexStroke,
  legend: ApexLegend,
  responsive: ApexResponsive[],
  tooltip: ApexTooltip,
  fill: ApexFill


  
  dataLabels: ApexDataLabels,
  plotOptions: ApexPlotOptions,
  labels: string[],
  title: ApexTitleSubtitle
};



@Component({
  selector: 'app-handover-school-report-table',
  templateUrl: './handover-school-report-table.component.html',
  styleUrls: ['./handover-school-report-table.component.scss']
})
export class HandoverSchoolReportTableComponent implements OnInit {
  /**
   * Doughnut chart
   */
  
  public donutChartOptions: Partial<ChartOptions>;


  constructor() {
       /**
     * Donut chart options
     */
   this.donutChartOptions = {
      nonAxisSeries: [44, 55, 13, 33],
      colors: ["#f77eb9", "#7ee5e5","#4d8af0","#fbbc06"],
      chart: {
        height: 300,
        type: "donut"
      },
      stroke: {
        colors: ['rgba(0,0,0,0)']
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center'
      },
      dataLabels: {
        enabled: false
      }
    };
   }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

  

}
