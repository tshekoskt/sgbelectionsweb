import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-parent-login',
  templateUrl: './parent-login.component.html',
  styleUrls: ['./parent-login.component.scss']
})
export class ParentLoginComponent implements OnInit {

  
  returnUrl: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['/electionnomination'] || '/electionnomination';
  }

  onLoggedin(e) {
    this.router.navigate(['/electionnomination'])
    e.preventDefault();
    localStorage.setItem('isLoggedin', 'true');
    if (localStorage.getItem('')) {
      this.router.navigate([this.returnUrl]);
    }
  }

  election(e){
    this.router.navigate(['/landing'])
    e.preventDefault();
    localStorage.setItem('isLoggedin', 'true');
    if (localStorage.getItem('')) {
      this.router.navigate([this.returnUrl]);
    }
  }

}
