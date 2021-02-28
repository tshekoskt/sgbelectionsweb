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
  password: any;
  confirmpassword: any;
  idnumber: any;
  myStorage: any;
  response: any;
  error;
  passworderror;
  confirmerror;



  constructor(private router: Router, private route: ActivatedRoute, private _principal: ElectionsService, private formBuilder: FormBuilder) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      persalnumber: "",
      password: "",
      confirmpassword: ""
    });
 this.error = false;
  }

  getOtp() {

    this.persalnumber = this.form.controls['persalnumber'].value;
    this.password = this.form.controls['password'].value;
    this.confirmpassword = this.form.controls['confirmpassword'].value;
    this.error = false;
    this.passworderror = false;
    this.confirmerror = false;

//     if(this.persalnumber  != "") {

//       localStorage.setItem('Idnumber', this.persalnumber);
//       this.router.navigate(['/auth/verify-otp']);

//     } else {
//       this.error = true
//     }
    
    
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

    if (this.password.length > 8) {
      
      if (this.password == this.confirmpassword) {
        
        this._principal.sendUserOTP(this.persalnumber).subscribe((res: any) => {
          this.response = res;
          console.log(res.length);
    
          if(res.length > 1){        
          localStorage.setItem('cellnumber', res);
          localStorage.setItem('Idnumber', this.persalnumber);
          localStorage.setItem('Pass', this.password);
          this.myStorage = localStorage.getItem("cellnumber");
          this.router.navigate(['/auth/verify-otp'])
          } else {
            console.log("error")
            this.error = true;      }
    
        })

      } else {
        console.log("confirmerror")
        this.confirmerror = true;
      }

    } else {
      console.log("passworderror")
         this.passworderror = true;
    }

 

  }

  cancel() {
    this.router.navigate(['../../homepage']);
  }

}
