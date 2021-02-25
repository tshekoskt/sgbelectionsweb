import { Component, OnInit } from '@angular/core';
import { DataTable } from "simple-datatables";
import { ElectionsService } from '../../_SERVICE/elections.service';

@Component({
  selector: 'app-voters-roll-table',
  templateUrl: './voters-roll-table.component.html',
  styleUrls: ['./voters-roll-table.component.scss']
})
export class VotersRollTableComponent implements OnInit {

  voters;
  voter;

  emisCode = "700400139"

  constructor(private votersService: ElectionsService) { }

  ngOnInit(): void {

    const dataTable = new DataTable("#dataTableExample");
    this.votersService.getInfoByEmisCode(this.emisCode).subscribe(res => {

      this.voters = res;


      // for (var x = 0; x < this.voters.length; x++) {
      //   this.voter = [
      //     this.voter[x].title,
      //     this.voter[x].startDate,
      //     this.voter[x].startTime,
      //     this.voter[x].scheduledBy,
      //     "<a><i class='mdi mdi-eye text-dark' (click)='view(0)'></i></a>&nbsp;&nbsp;&nbsp;<a><i class='mdi mdi-pencil text-dark' (click)='edit(0)'></i></a>"
      //   ]
      // }

      let importData = {
        headings: [
          "Name",
          "I.D./Password",
          "Email",
          "Name of Child",
          "Grade of Child",
          "Action"
        ],
        data: [
          this.voter
        ]
      }
      dataTable.insert(importData);
      console.log(this.voters);



    });

  }

}
