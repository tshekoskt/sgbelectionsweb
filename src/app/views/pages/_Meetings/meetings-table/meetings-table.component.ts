import { Component, OnInit } from '@angular/core';
import { DataTable } from "simple-datatables";
import { ElectionsService } from '../../_SERVICE/elections.service';

@Component({
  selector: 'app-meetings-table',
  templateUrl: './meetings-table.component.html',
  styleUrls: ['./meetings-table.component.scss']
})
export class MeetingsTableComponent implements OnInit {

  meetings = [];
  meeting = [];
  //  [
  //   {
  //     title: "Meeting 09",
  //     startDate: "02/10/2021",
  //     startTime: "11:00",
  //     scheduledBy: "Jonathan Masilela"
  //   },
  //   {
  //     title: "Meeting 10",
  //     startDate: "02/01/2021",
  //     startTime: "10:00",
  //     scheduledBy: "Mary Nkuna"
  //   },
  //   {
  //     title: "Meeting 08",
  //     startDate: "10/10/2021",
  //     startTime: "11:00",
  //     scheduledBy: "Deborah Zule"
  //   },
  //   {
  //     title: "Meeting 03",
  //     startDate: "02/06/2021",
  //     startTime: "07:00",
  //     scheduledBy: "Jonathan Masilela"
  //   },
  //   {
  //     title: "Meeting 09",
  //     startDate: "27/10/2021",
  //     startTime: "05:00",
  //     scheduledBy: "Deborah Zule"
  //   },
  //   {
  //     title: "Meeting 04",
  //     startDate: "02/10/2021",
  //     startTime: "11:00",
  //     scheduledBy: "Mildred Masilo"
  //   },
  //   {
  //     title: "Meeting 02",
  //     startDate: "02/04/2021",
  //     startTime: "11:00",
  //     scheduledBy: "Mary Nkuna"
  //   },
  //   {
  //     title: "Meeting 07",
  //     startDate: "02/10/2021",
  //     startTime: "11:00",
  //     scheduledBy: "Jonathan Masilela"
  //   },
  //   {
  //     title: "Meeting 01",
  //     startDate: "04/04/2021",
  //     startTime: "08:30",
  //     scheduledBy: "Deborah Zule"
  //   },
  //   {
  //     title: "Meeting 07",
  //     startDate: "02/10/2021",
  //     startTime: "11:30",
  //     scheduledBy: "Kgothatso Moremi"
  //   },
  //   {
  //     title: "Meeting 05",
  //     startDate: "02/10/2021",
  //     startTime: "08:00",
  //     scheduledBy: "Kgothatso Moremi"
  //   },
  // ]
  // title: String,
  // startDate: String,
  // startTime: String,
  // endDate: String,
  // endTime: String,
  // venue: String,
  // description: String,
  // minutes: String,
  // scheduledBy: String

  constructor(private _meetingService: ElectionsService) { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
    this._meetingService.getAllMeetings().subscribe(res =>{

      this.meetings = res;

      for(var x=0;x<this.meetings.length;x++){
        this.meeting = [
          this.meetings[x].title,
          this.meetings[x].startDate,
          this.meetings[x].startTime,
          this.meetings[x].scheduledBy,
          "<a><i class='mdi mdi-eye text-dark' (click)='view("+x+")'></i></a>&nbsp;&nbsp;<a><i class='mdi mdi-pencil text-dark' (click)='edit("+x+")'></i></a>"
        ]
      }

      let newData = {
        headings: [
          "Title",
          "Start Date",
          "Start Time",
          "Scheduled By",
          "Action"
        ],
        data: [
          this.meeting
        ]
      }
      dataTable.insert(newData);

      console.log(this.meeting);


    });

  }


  view(index) {
    console.log(index);
  }

  edit(index) {
    console.log(index)
  }

}
