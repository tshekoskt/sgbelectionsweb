import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-parent-otp',
  templateUrl: './parent-otp.component.html',
  styleUrls: ['./parent-otp.component.scss']
})
export class ParentOtpComponent implements OnInit {

  constructor(private router: Router) { }

  //../../electionnomination

  ngOnInit(): void {
  }

  verifyOTP() {
    this.router.navigate(['../../electionnomination']);
  }

  cancel() {
    this.router.navigate(['../../homepage']);
  }

}
