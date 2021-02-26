import { DatePipe } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup } from "@angular/forms"
import { ElectionsService } from '../../_SERVICE/elections.service';
import swal from 'sweetalert2'


@Component({
  selector: 'app-parant-school',
  templateUrl: './parant-school.component.html',
  styleUrls: ['./parant-school.component.scss'],
  providers: [DatePipe]
})
export class ParantSchoolComponent implements OnInit {

  nominationStarted = "true";
  parentID;
  schools;
  nominations;


  constructor(private router: Router, private parentschoolService: ElectionsService, private formBuilder: FormBuilder, private datepipes: DatePipe) {

    // this.date = this.datepipes.transform(this.currentDate, 'yyyy-MM-dd');
  }

  form: FormGroup;



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
    let currentDate = new Date();
    let code = this.form.controls['schoolname'].value;
    let date = this.datepipes.transform(currentDate, 'yyyy-MM-dd');


    this.parentschoolService.getScheduledNominationByEmisCode(code, date).subscribe(res => {
      console.log(res)

      this.nominations = res;

      if (this.nominations.nominationFlag == "IsStarted") {
        this.router.navigate(['../../electionnomination']);
      } if (this.nominations.nominationFlag == "IsNotStarted") {
        this.router.navigate(['../../countdown']);
      }
      else {
        swal.fire({title: 'No upcoming events', text: 'Sorry the selected school does not have a scheduled nomination upcoming', icon: 'warning'} )
      }


    })





  }

  cancel() {
    this.router.navigate(['/auth/parent-login']);
  }

}
