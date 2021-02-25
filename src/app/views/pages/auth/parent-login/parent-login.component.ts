import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ElectionsService } from '../../_SERVICE/elections.service';
import { FormBuilder, FormGroup } from "@angular/forms"
import { isNull } from '@angular/compiler/src/output/output_ast';
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
  myStorage: any;
  response: any;
  error;



  constructor(private router: Router, private route: ActivatedRoute, private _parent: ElectionsService, private formBuilder: FormBuilder) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      parentID: ""
    });
 this.error = false;
  }

  getOtp() {

    this.parentID = this.form.controls['parentID'].value;
    this.error = false;

    
    this._parent.sendOTP(this.parentID).subscribe((res: any) => {
      this.response = res;
      console.log(res.length);

      if(res.length > 1){        
      localStorage.setItem('cellnumber', res);
      this.myStorage = localStorage.getItem("cellnumber");
      this.router.navigate(['/auth/parent-otp'])
      } else {
        console.log("error")
        this.error = true;      }

    })


  }

  cancel() {
    this.router.navigate(['../../homepage']);
  }

}
