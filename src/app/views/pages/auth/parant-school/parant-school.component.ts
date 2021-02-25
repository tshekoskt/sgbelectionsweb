import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-parant-school',
  templateUrl: './parant-school.component.html',
  styleUrls: ['./parant-school.component.scss']
})
export class ParantSchoolComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectSchool(){
    this.router.navigate(['../../electionnomination']);
  }

  cancel() {
    this.router.navigate(['../../homepage']);
  }

}
