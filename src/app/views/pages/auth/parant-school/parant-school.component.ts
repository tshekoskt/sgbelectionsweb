import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-parant-school',
  templateUrl: './parant-school.component.html',
  styleUrls: ['./parant-school.component.scss']
})
export class ParantSchoolComponent implements OnInit {

  nominationStarted = "true"

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectSchool(){

    if(this.nominationStarted == "true") {
      this.router.navigate(['../../electionnomination']);
    } else {
      this.router.navigate(['../../countdown']);
    }


  }

  cancel() {
    this.router.navigate(['/auth/parent-login']);
  }

}
