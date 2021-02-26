import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'
import { ElectionsService } from '../../_SERVICE/elections.service';
import {FormBuilder, FormGroup} from "@angular/forms"
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-elections-overview',
  templateUrl: './elections-overview.component.html',
  styleUrls: ['./elections-overview.component.scss']
})
export class ElectionsOverviewComponent implements OnInit {
  returnUrl: any;
  parentID: any;
  idnumber: any;
  myStorage:any;
  public data: any;
  public nominations:any;
  public dtOptions: any = {};
  public dtOptionsNom: any = {};
  basicModalCloseResult: string = '';
  nominee:any;
  votersRoll:any
  nomineeEditForm: FormGroup;
  votersRollEditForm:FormGroup;
  emis:any;

  constructor(private router: Router, private route: ActivatedRoute,private _parent: ElectionsService, private formBuilder: FormBuilder,private modalService: NgbModal,){ }
 
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
   
    this.emis= 700400139;
 
    this._parent.getAllvoterRoll(this.emis).subscribe((res: any) => {
      this.data = res;

    });

    this._parent.getAllNorminations(this.emis).subscribe((res: any) => {
      this.nominations = res;
      //alert(this.nominations);

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

}

