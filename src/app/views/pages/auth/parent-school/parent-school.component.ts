import { DatePipe } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup } from "@angular/forms"
import { ElectionsService } from '../../_SERVICE/elections.service';
import swal from 'sweetalert2'
import { isNull } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-parent-school',
  templateUrl: './parent-school.component.html',
  styleUrls: ['./parent-school.component.scss'],
  providers: [DatePipe]
})
export class ParentSchoolComponent implements OnInit {

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


        if (this.nominations.nominationFlag == null || this.nominations.nominationFlag == "") {
          console.log("NULL")
          swal.fire({ title: 'No upcoming events', text: 'Sorry the selected school does not have a scheduled upcoming nomination', icon: 'warning' })

        } else {
          console.log("Not NULL")
          if (this.nominations.nominationFlag == "HasStarted") {
            this.router.navigate(['../../electionnomination']);

          } else if (this.nominations.nominationFlag == "IsNotStarted") {
            this.router.navigate(['../../countdown']);
          }
        }


      })


    }



  }

  cancel() {
    this.router.navigate(['/auth/parent-login']);
  }

}
