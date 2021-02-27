import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ElectionsService } from '../../_SERVICE/elections.service';
import { FormBuilder, FormGroup } from "@angular/forms"
declare var $: any;

@Component({
  selector: 'app-principal-login',
  templateUrl: './principal-login.component.html',
  styleUrls: ['./principal-login.component.scss']
})
export class PrincipalLoginComponent implements OnInit {

  returnUrl: any;
  persalnumber: any;
  idnumber: any;
  myStorage: any;
  response: any;
  error;



  constructor(private router: Router, private route: ActivatedRoute, private principal: ElectionsService, private formBuilder: FormBuilder) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      persalnumber: ""
    });
 this.error = false;
  }

  getOtp() {

    this.persalnumber = this.form.controls['persalnumber'].value;
    this.error = false;

    
    this.router.navigate(['/auth/verify-otp']);
    
    // this.principal.sendOTP(this.persalnumber).subscribe((res: any) => {
    //   this.response = res;
    //   console.log(res.length);

    //   if(res.length > 1){        
    //   localStorage.setItem('cellnumber', res);
    //   localStorage.setItem('Idnumber', this.persalnumber);
    //   this.myStorage = localStorage.getItem("cellnumber");
    //   this.router.navigate(['/auth/verify-otp'])
    //   } else {
    //     console.log("error")
    //     this.error = true;      }

    // })


  }

  cancel() {
    this.router.navigate(['../../homepage']);
  }

}
