import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'
import {FormBuilder, FormGroup} from "@angular/forms"

@Component({
  selector: 'app-parent-otp',
  templateUrl: './parent-otp.component.html',
  styleUrls: ['./parent-otp.component.scss']
})
export class ParentOtpComponent implements OnInit {

  returnUrl: any;

  constructor(private router: Router, private route: ActivatedRoute,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   
  }

  verifyOTP(e) {
    this.router.navigate(['../../electionnomination']);
  }

  cancel() {
    this.router.navigate(['../../homepage']);
  }

}
