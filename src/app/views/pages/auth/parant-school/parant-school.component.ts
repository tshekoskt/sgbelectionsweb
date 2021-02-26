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
  error = false;


  constructor(private router: Router, private parentschoolService: ElectionsService,
    private formBuilder: FormBuilder, private datepipes: DatePipe) {

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

  schoolNotEmpty() {
    this.error = false;
  }

  selectSchool() {
    let currentDate = new Date();
    let code = this.form.controls['schoolname'].value;
    let date = this.datepipes.transform(currentDate, 'yyyy-MM-dd');
    this.error = false;

    if (code == "") {
      this.error = true;
    } else {

      this.parentschoolService.getScheduledNominationByEmisCode(code, date).subscribe(res => {
        console.log(res)

        this.nominations = res;
        localStorage.setItem('EmisCode', code);

        if (this.nominations.nominationFlag == "HasStarted") {
          this.router.navigate(['../../electionnomination']);
        }
        if (this.nominations.nominationFlag == "IsNotStarted") {
          this.router.navigate(['../../countdown']);
        }
        else {
          swal.fire({ title: 'No upcoming events', text: 'Sorry the selected school does not have a scheduled upcoming nomination', icon: 'warning' })
        }


      })


    }



  }

  cancel() {
    this.router.navigate(['/auth/parent-login']);
  }

}
