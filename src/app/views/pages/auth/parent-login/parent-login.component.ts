import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ElectionsService } from '../../_SERVICE/elections.service';
import { FormBuilder, FormGroup } from "@angular/forms"
import { isNull } from '@angular/compiler/src/output/output_ast';
declare var $: any;

@Component({
  selector: 'app-parent-login',
  templateUrl: './parent-login.component.html',
  styleUrls: ['./parent-login.component.scss']
})
export class ParentLoginComponent implements OnInit {


  returnUrl: any;
  parentID: any;
  idnumber: any;
  myStorage: any;
  response: any;

  error = false;
  errorMsg;


  constructor(private router: Router, private route: ActivatedRoute, private _parent: ElectionsService, private formBuilder: FormBuilder) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      parentID: ""
    });

  }

  getOtp() {

    this.parentID = this.form.controls['parentID'].value;
    this.error = false;

    if (this.parentID == "" || isNull(this.parentID)) {
      this.errorMsg = "Please enter your ID number to login";
      this.error = true;
    } else {

      this.error = false;

      this._parent.sendOTP(this.parentID).subscribe((res: any) => {
        this.response = res;

        if (isNull(res) || res == "") {
          this.errorMsg = "ID number not registered";
          this.error = true;
        } else {
          this.error = false;

          localStorage.setItem('cellnumber', res);
          this.myStorage = localStorage.getItem("cellnumber");

          this.router.navigate(['/auth/parent-otp']);
        }

      })
    }


  }

  cancel() {
    this.router.navigate(['../../homepage']);
  }

}
