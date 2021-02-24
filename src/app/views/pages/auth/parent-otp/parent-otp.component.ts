import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-parent-otp',
  templateUrl: './parent-otp.component.html',
  styleUrls: ['./parent-otp.component.scss']
})
export class ParentOtpComponent implements OnInit {

  constructor(private _router: Router) { }

  //../../electionnomination

  ngOnInit(): void {
  }

  verifyOTP() {
    this._router.navigate(['../../electionnomination']);
  }

}
