import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup } from "@angular/forms"
import { ElectionsService } from '../../_SERVICE/elections.service';

@Component({
  selector: 'app-parent-otp',
  templateUrl: './parent-otp.component.html',
  styleUrls: ['./parent-otp.component.scss']
})
export class ParentOtpComponent implements OnInit {

  returnUrl: any;
  cellnumber;
  OTP;
  OTPvalid;
  Idnumber;
  error = false;
  jsonData;
  parent;

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private OTPService: ElectionsService) { }

  OTPform: FormGroup;

  ngOnInit(): void {
    this.OTPform = this.formBuilder.group({
      OTP: ""
    });

    this.cellnumber = localStorage.getItem('cellnumber');
    this.Idnumber = localStorage.getItem('Idnumber');
    this.jsonData = {
      idNumber: this.Idnumber,
      mobileNo: this.cellnumber
    }
  }

  verifyOTP() {

    this.OTP = this.OTPform.controls['OTP'].value;

    this.OTPService.authParentOTP(this.cellnumber, this.OTP).subscribe(res => {

      this.OTPvalid = res;

      if (this.OTPvalid == true) {
        this.error = false;

        this.OTPService.authenticateParentIDNmber(this.jsonData).subscribe(data => {

          this.parent = data
          localStorage.setItem('ParentID', this.parent.user.parentID);
          this.router.navigate(['/auth/parentschool']);
        })

      } else {
        this.error = true;
      }


    })

  }

  cancel() {
    this.router.navigate(['../../homepage']);
  }

}
