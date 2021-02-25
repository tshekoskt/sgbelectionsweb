import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'
import { ElectionsService } from '../../_SERVICE/elections.service';
import {FormBuilder, FormGroup} from "@angular/forms"
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
  myStorage:any;
  response: any;


  constructor(private router: Router, private route: ActivatedRoute,private _parent: ElectionsService, private formBuilder: FormBuilder){ }

 form: FormGroup;

  ngOnInit(): void {
   this.form = this.formBuilder.group({
      parentID: ""
   });

  }

  getOtp() {

    this.parentID = this.form.controls['parentID'].value

    // this._parent.sendOTP(this.parentID).subscribe((res: any) => {
    //   this.response = res;
    //   localStorage.setItem('cellnumber', res);
    //   this.myStorage = localStorage.getItem("cellnumber");

    // })
    this.router.navigate(['/auth/parent-otp']);


  }

  election(e){
    // this.router.navigate(['/landing'])
    // e.preventDefault();
    // localStorage.setItem('isLoggedin', 'true');
    // if (localStorage.getItem('')) {
    //   this.router.navigate([this.returnUrl]);
    // }

    this.router.navigate(['../../homepage'])
  }

}
