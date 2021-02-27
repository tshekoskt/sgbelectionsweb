import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ElectionsService } from '../../_SERVICE/elections.service';

@Component({
  selector: 'app-voters-roll-table',
  templateUrl: './voters-roll-table.component.html',
  styleUrls: ['./voters-roll-table.component.scss']
})
export class VotersRollTableComponent implements OnInit {

  voters;
  voter;
  emiscode;

  public data: any;
  public nominations:any;
  public dtOptions: any = {};
  public dtOptionsNom: any = {};
  basicModalCloseResult: string = '';
  nominee:any;
  votersRoll:any
  nomineeEditForm: FormGroup;
  votersRollEditForm:FormGroup;

  constructor(private router: Router, private route: ActivatedRoute,private electionService: ElectionsService, private formBuilder: FormBuilder,private modalService: NgbModal) { }

  ngOnInit(): void {


    this.nomineeEditForm = this.formBuilder.group({
      firstNameNominee: "",
      lastNameNominee:"",
      institutionNameNominee: "",
      idNumberNominee: "",
      mobileNonNominee : ""

    });

    this.votersRollEditForm = this.formBuilder.group({
      firstNameVottersRoll: "",
      lastNameVottersRoll:"",
      institutionVottersRoll: "",
      idNumberVottersRoll: "",
      mobileNonVottersRoll : ""

    });

    this.emiscode= 700400139;
 
    this.electionService.getAllVotersRoll(this.emiscode).subscribe((res: any) => {
      console.log(res);
      this.votersRoll = res;

    });

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'print'
        ]
    };
  }

  openBasicModal(content) {
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }

  editNomination(e){
    this.nominee = e;
  }

  editVottersRoll(e){
    this.votersRoll = e;
  }


  onSelectionChanged = (event) => {
    if(event.oldRange == null) {
      this.onFocus();
    }
    if(event.range == null) {
      this.onBlur();
    }
  }

  onContentChanged = (event) => {
    // console.log(event.html);
  }

  onFocus = () => {
    console.log("On Focus");
  }
  onBlur = () => {
    console.log("Blurred");
  }

  onSubmitNominee(){
    alert();
  }

  onSubmitVotersRoll(){
    alert();
  }

    /* const dataTable = new DataTable("#dataTableExample");
    this.votersService.getInfoByEmisCode(this.emisCode).subscribe(res => {

      this.voters = res;
      console.log(res); */

      // for (var x = 0; x < this.voters.length; x++) {
      //   this.voter = [
      //     this.voter[x].title,
      //     this.voter[x].startDate,
      //     this.voter[x].startTime,
      //     this.voter[x].scheduledBy,
      //     "<a><i class='mdi mdi-eye text-dark' (click)='view(0)'></i></a>&nbsp;&nbsp;&nbsp;<a><i class='mdi mdi-pencil text-dark' (click)='edit(0)'></i></a>"
      //   ]
      // }

/*       let importData = {
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



    }); */

}
