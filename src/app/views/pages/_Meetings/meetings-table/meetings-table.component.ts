import { Component, OnInit } from '@angular/core';
import { DataTable } from "simple-datatables";
import { ElectionsService } from '../../_SERVICE/elections.service';

@Component({
  selector: 'app-meetings-table',
  templateUrl: './meetings-table.component.html',
  styleUrls: ['./meetings-table.component.scss']
})
export class MeetingsTableComponent implements OnInit {

  meetings;
  meeting;


  constructor(private _meetingService: ElectionsService) { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
    this._meetingService.getAllMeetings().subscribe(res => {

      this.meetings = res;

      for (var x = 0; x < this.meetings.length; x++) {
        this.meeting = [
          this.meetings[x].title,
          this.meetings[x].startDate,
          this.meetings[x].startTime,
          this.meetings[x].scheduledBy,
          "<a><i class='mdi mdi-eye text-dark' (click)='view(0)'></i></a>&nbsp;&nbsp;&nbsp;<a><i class='mdi mdi-pencil text-dark' (click)='edit(0)'></i></a>"
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
      console.log(this.meetings);



    });

  }


  view(index) {
    console.log(index);
  }

  edit(index) {
    console.log(index)
  }

}
