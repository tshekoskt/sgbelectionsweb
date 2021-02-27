import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup } from "@angular/forms"
import { ElectionsService } from '../../_SERVICE/elections.service';

@Component({
  selector: 'app-user-verify-otp',
  templateUrl: './verify-user-otp.component.html',
  styleUrls: ['./verify-user-otp.component.scss']
})
export class VerifyUserOtpComponent implements OnInit {

  returnUrl: any;
  cellnumber;
  persal;
  OTP;
  OTPvalid;
  usernumber;
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
    this.usernumber = localStorage.getItem('Idnumber');
    this.persal = localStorage.getItem("Persal");
    this.jsonData = {
      Persal: this.persal,
      CellNumber: this.cellnumber
    }
  }

  verifyUserOTP() {

    this.OTP = this.OTPform.controls['OTP'].value;

    if(this.persal.length < 8){

      console.log("pricipal");

       this.OTPService.authParentOTP(this.cellnumber, this.OTP).subscribe(res => {

      this.OTPvalid = res;

      if (this.OTPvalid == true) {
        this.error = false;

        this.OTPService.authenticateOfficialPersal(this.jsonData).subscribe(data => {

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
