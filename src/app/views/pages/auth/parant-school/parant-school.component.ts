import { DatePipe } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup } from "@angular/forms"
import { ElectionsService } from '../../_SERVICE/elections.service';


@Component({
  selector: 'app-parant-school',
  templateUrl: './parant-school.component.html',
  styleUrls: ['./parant-school.component.scss']
})
export class ParantSchoolComponent implements OnInit {

  nominationStarted = "true";
  parentID;
  schools;

  constructor(private router: Router, private parentschoolService: ElectionsService, private formBuilder: FormBuilder) { }

  form: FormGroup;
  datepipe: DatePipe;

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      schoolname: ""
    });

    this.parentID = localStorage.getItem('ParentID');
    this.parentschoolService.getSchoolByParentId(this.parentID).subscribe(res => {

      this.schools = res;

    })

  }

  selectSchool() {
    let code = this.form.controls['schoolname'].value;

    let date = new Date();
    let form = date.getFullYear() + "-" + date.getUTCMonth() + "-" + date.getDate()
    // let test = [form | this.datepipe: "dd:MMM:yyyy hh-mm-ss z"]
    // let test = this.datepipe.transform(date);
    
    // console.log(date.getFullYear() + "-" + date.getUTCMonth() + "-" + date.getDate())
    // Date.
    // console.log(test)
    

    this.parentschoolService.getScheduledNominationByEmisCode(code, form).subscribe(res => {
      console.log(res)

      if (this.nominationStarted == "true") {
        // this.router.navigate(['../../electionnomination']);
      } else {
        // this.router.navigate(['../../countdown']);
      }


    })





  }

  cancel() {
    this.router.navigate(['/auth/parent-login']);
  }

}
