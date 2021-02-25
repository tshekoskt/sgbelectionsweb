import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'
import {FormBuilder, FormGroup} from "@angular/forms"
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

  constructor(private router: Router, private route: ActivatedRoute,private formBuilder: FormBuilder, private OTPService: ElectionsService) { }

  OTPform: FormGroup;

  ngOnInit(): void {
    this.OTPform = this.formBuilder.group({
      OTP: ""
   });

   this.cellnumber = localStorage.getItem('cellnumber');
  }

  verifyOTP() {

this.OTP = this.OTPform.controls['OTP'].value;
console.log(this.OTP);
console.log();localStorage.getItem('cellnumber')
console.log(localStorage);


// this.OTPService.authParentOTP(this.cellnumber,this.OTP).subscribe(res => {
//   console.log(res);

//   if(res == "true" || res == "True"){
//     this.router.navigate(['../../electionnomination']);
//   } else {
//     console.log("Invalid");
//   }

//   // if(res) {


//   //   if(res.lenth > 1){

//   //   } else
//   //     if(res.length < "date") {

//   //     } else {

//   //     }


//   // } else {
//   //   console.log("Error")
//   // }

// })


this.router.navigate(['/auth/parentschool']);
  }

  cancel() {
    this.router.navigate(['../../homepage']);
  }

}
