import { Component, OnInit } from '@angular/core';
import { DataTable } from "simple-datatables";

@Component({
  selector: 'app-district-memo-table',
  templateUrl: './district-memo-table.component.html',
  styleUrls: ['./district-memo-table.component.scss']
})
export class DistrictMemoTableComponent implements OnInit {

  district_memos: any[] =  [
    {
      title: "District 18 Memo 2021",
      district: "District 18" ,
      school: "School 3",
      uploadedBy: "Jonathan Masilela",
    },
    {
      title: "District 12 Memo 2021",
      district: "District 12" ,
      school: "School 2",
      uploadedBy: "Mildred Masilo",
    },
    {
      title: "District 5 Memo 2021",
      district: "District 5" ,
      school: "School 3",
      uploadedBy: "Deborah Zulu",
    },
    {
      title: "District 15 Memo 2021",
      district: "District 15" ,
      school: "School 3",
      uploadedBy: "Mary Nkuna",
    },
    {
      title: "District 5 Memo 2021",
      district: "District 5" ,
      school: "School 1",
      uploadedBy: "Jonathan Masilela",
    },
    {
      title: "District 12 Memo 2021",
      district: "District 12" ,
      school: "School 9",
      uploadedBy: "Jonathan Masilela",
    },
    {
      title: "District 10 Memo 2021",
      district: "District 10" ,
      school: "School 7",
      uploadedBy: "Mary Nkuna",
    },
    {
      title: "District 22 Memo 2021",
      district: "District 22" ,
      school: "School 7",
      uploadedBy: "Deborah Zulu",
    },
    {
      title: "District 28 Memo 2021",
      district: "District 28" ,
      school: "School 10",
      uploadedBy: "Mildred Masilo",
    },
    {
      title: "District 25 Memo 2021",
      district: "District 25" ,
      school: "School 11",
      uploadedBy: "Jonathan Masilela",
    },
    {
      title: "District 16 Memo 2021",
      district: "District 16" ,
      school: "School 14",
      uploadedBy: "Mary Nkuna",
    },
    {
      title: "District 9 Memo 2021",
      district: "District 9" ,
      school: "School 15",
      uploadedBy: "Kgothatso Moremi",
    },
    {
      title: "District 31 Memo 2021",
      district: "District 31" ,
      school: "School 19",
      uploadedBy: "Kgothatso Moremi",
    },
  ]


  tittle: String;
  district: String;
  school: String;
  uploadedBy: String;
  date = "26/11/2020";


  constructor() { }

  ngOnInit(): void {

    const dataTable = new DataTable("#dataTableExample");
    // const dataTable = new DataTable(this.district_memos);
  }

  view(num) {
    // console.log(num);
    // console.log(this.district_memos[num].title)
    this.tittle = this.district_memos[num].title;
    this.district = this.district_memos[num].district;
    this.school = this.district_memos[num].school;
    this.uploadedBy = this.district_memos[num].uploadedBy;
  }

  edit(num) {
    // console.log(num);
    // console.log(this.district_memos[num].title)
  }

}
