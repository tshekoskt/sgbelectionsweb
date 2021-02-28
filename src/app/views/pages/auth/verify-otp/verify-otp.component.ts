import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup } from "@angular/forms"
import { ElectionsService } from '../../_SERVICE/elections.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {

  returnUrl: any;
  cellnumber;
  OTP;
  OTPvalid;
  usernumber;
  credentials;
  error = false;
  jsonData;
  jsonUserData;
  parent;
  official;

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private OTPService: ElectionsService) { }

  OTPform: FormGroup;

  ngOnInit(): void {
    this.OTPform = this.formBuilder.group({
      OTP: ""
    });

    this.cellnumber = localStorage.getItem('cellnumber');
    this.usernumber = localStorage.getItem('Idnumber');
    this.credentials = localStorage.getItem('Pass');
    this.jsonData = {
      idNumber: this.usernumber,
      mobileNo: this.cellnumber
    }
    this.jsonUserData = {
      Persal: this.usernumber,
      CellNumber: this.cellnumber,
      Credentials: this.credentials
    }
  }

  verifyOTP() {

    this.OTP = this.OTPform.controls['OTP'].value;

    if(this.usernumber.length < 10){
      

      console.log("pricipal");

      this.OTPService.authParentOTP(this.cellnumber, this.OTP).subscribe(res => {

        this.OTPvalid = res;

        if (this.OTPvalid == true) {
          this.error = false;

          this.OTPService.authenticateOfficialPersal(this.jsonUserData).subscribe(data => {

            this.official = data
            localStorage.setItem('UserID', this.official.user.id);
            this.router.navigate(['../../votersroll']);
          })

        } else {
          this.error = true;
        }


   })

    } else {
      console.log("parent");

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

  }

  cancel() {
    this.router.navigate(['../../homepage']);
  }

}
