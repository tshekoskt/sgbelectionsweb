import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ElectionsService } from '../../_SERVICE/elections.service';


@Component({
  selector: 'app-parant-school',
  templateUrl: './parant-school.component.html',
  styleUrls: ['./parant-school.component.scss']
})
export class ParantSchoolComponent implements OnInit {

  nominationStarted = "true";
  parentID;
  schools;

  constructor(private router: Router, private parentschoolService: ElectionsService) { }

  ngOnInit(): void {

    this.parentID = localStorage.getItem('ParentID');
    this.parentschoolService.getSchoolByParentId(this.parentID).subscribe ( res => {

      this.schools = res;
      
    })

  }

  selectSchool(){

    let date: Date;
    console.log(date);
    

    // if(this.nominationStarted == "true") {
    //   this.router.navigate(['../../electionnomination']);
    // } else {
    //   this.router.navigate(['../../countdown']);
    // }


  }

  cancel() {
    this.router.navigate(['/auth/parent-login']);
  }

}
